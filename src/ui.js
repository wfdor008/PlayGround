import { clamp, formatNumber } from './engine.js'
import { regionAt, SHRINES } from './world.js'
import { speciesInfo } from './creatures.js'

const CARDINALS = [
  { b: 0, label: 'N' }, { b: 45, label: 'NE' }, { b: 90, label: 'L' }, { b: 135, label: 'SE' },
  { b: 180, label: 'S' }, { b: 225, label: 'SO' }, { b: 270, label: 'O' }, { b: 315, label: 'NO' },
]

function el(id) { return document.getElementById(id) }

export class UI {
  constructor() {
    this.dom = {
      hud: el('hud'),
      title: el('titleScreen'),
      play: el('playBtn'),
      hpFill: el('hpFill'),
      hpText: el('hpText'),
      stFill: el('stFill'),
      xpFill: el('xpFill'),
      xpText: el('xpText'),
      level: el('levelLabel'),
      compassDial: el('compassDial'),
      compassSpans: [...document.querySelectorAll('#compassDial span')],
      regionName: el('regionName'),
      regionSub: el('regionSub'),
      questList: el('questList'),
      questCount: el('questCount'),
      mobileQuest: el('mobileQuest'),
      mqTitle: el('mqTitle'),
      mqProgress: el('mqProgress'),
      target: el('targetFrame'),
      targetName: el('targetName'),
      targetType: el('targetType'),
      targetLv: el('targetLv'),
      targetHp: el('targetHp'),
      targetHint: el('targetHint'),
      targetSeal: el('targetSeal'),
      targetIcon: el('targetIcon'),
      boss: el('bossBar'),
      bossName: el('bossName'),
      bossFill: el('bossFill'),
      bossPhase: el('bossPhase'),
      companionCard: el('companionCard'),
      companionName: el('companionName'),
      companionLevel: el('companionLevel'),
      companionState: el('companionState'),
      companionOrb: el('companionOrb'),
      companionGlyph: el('companionGlyph'),
      bondFill: el('bondFill'),
      roster: el('roster'),
      minimap: el('minimap'),
      minimapLabel: el('minimapLabel'),
      prompt: el('prompt'),
      promptKey: el('promptKey'),
      promptTitle: el('promptTitle'),
      promptSub: el('promptSub'),
      toasts: el('toasts'),
      combo: el('combo'),
      comboNum: el('comboNum'),
      capturePanel: el('capturePanel'),
      captureFill: el('captureFill'),
      captureTitle: el('captureTitle'),
      captureSub: el('captureSub'),
      pause: el('pauseScreen'),
      death: el('deathScreen'),
      banner: el('banner'),
      bannerTitle: el('bannerTitle'),
      bannerSub: el('bannerSub'),
      hitFlash: el('hitFlash'),
      soundBtn: el('soundBtn'),
      pauseTamed: el('pauseTamed'),
      pauseLevel: el('pauseLevel'),
      pauseBosses: el('pauseBosses'),
      deathKills: el('deathKills'),
      deathTamed: el('deathTamed'),
      titleHint: document.querySelector('.title-hint-mobile'),
    }
    this.game = null
    this.ctx = this.dom.minimap.getContext('2d')
    this.questSignature = ''
    this.rosterSignature = ''
    this.regionId = ''
    this.comboValue = 0
    this.bannerTimer = 0
    this.comboTimer = 0
    this.promptVisible = false
    this.targetVisible = false
    this.lastTargetKey = ''
    this.mapAccent = '#7fe6c9'
    this._toastCount = 0

    this.dom.play?.addEventListener('click', () => this.game?.start())
    el('resumeBtn')?.addEventListener('click', () => this.game?.resume())
    el('respawnBtn')?.addEventListener('click', () => this.game?.respawn())
    this.dom.mobileQuest?.addEventListener('click', () => {
      document.body.classList.toggle('journal-open')
    })
    this.dom.soundBtn?.addEventListener('click', () => {
      if (!this.game) return
      this.game.audio.unlock()
      const on = this.game.audio.toggle()
      this.dom.soundBtn.textContent = `Som: ${on ? 'ligado' : 'desligado'}`
    })
  }

  init(game) {
    this.game = game
    this.dom.soundBtn.textContent = `Som: ${game.audio.enabled ? 'ligado' : 'desligado'}`
  }

  hideLoading() {
    const veil = el('loadingVeil')
    if (veil) veil.classList.add('done')
    setTimeout(() => veil?.remove(), 1200)
  }

  hideTitle() {
    this.dom.title?.classList.add('hide')
    this.dom.hud?.classList.remove('is-hidden')
    this.dom.hud?.setAttribute('aria-hidden', 'false')
    requestAnimationFrame(() => this.dom.hud?.classList.add('show'))
  }

  showPause(show) {
    this.dom.pause?.classList.toggle('is-hidden', !show)
    if (show && this.game) {
      this.dom.pauseTamed.textContent = this.game.roster.length
      this.dom.pauseLevel.textContent = this.game.player.level
      this.dom.pauseBosses.textContent = `${this.game.bossesDefeated}/3`
    }
  }

  showDeath(show) {
    this.dom.death?.classList.toggle('is-hidden', !show)
    if (show && this.game) {
      this.dom.deathKills.textContent = this.game.kills
      this.dom.deathTamed.textContent = this.game.roster.length
    }
  }

  hitFlash() {
    const f = this.dom.hitFlash
    if (!f) return
    f.classList.add('on')
    clearTimeout(this._flashTimer)
    this._flashTimer = setTimeout(() => f.classList.remove('on'), 80)
  }

  toast(html, type = '', icon = '◆', duration = 3800) {
    if (!this.dom.toasts) return
    const maxToasts = this.game?.mobile ? 2 : 4
    while (this.dom.toasts.children.length >= maxToasts) {
      this.dom.toasts.firstElementChild?.remove()
      this._toastCount = Math.max(0, this._toastCount - 1)
    }
    const div = document.createElement('div')
    div.className = `toast ${type}`
    div.innerHTML = `<span class="t-ico">${icon}</span><div>${html}</div>`
    this.dom.toasts.appendChild(div)
    this._toastCount++
    setTimeout(() => {
      div.classList.add('out')
      setTimeout(() => { div.remove(); this._toastCount = Math.max(0, this._toastCount - 1) }, 420)
    }, duration)
  }

  banner(title, sub = '', duration = 2800) {
    const b = this.dom.banner
    if (!b) return
    b.classList.remove('is-hidden', 'out')
    this.dom.bannerTitle.textContent = title
    this.dom.bannerSub.textContent = sub
    clearTimeout(this._bannerTimer)
    this.bannerTimer = duration
    this._bannerTimer = setTimeout(() => {
      b.classList.add('out')
      setTimeout(() => b.classList.add('is-hidden'), 650)
    }, duration)
  }

  setPrompt(info) {
    const p = this.dom.prompt
    if (!p) return
    if (!info) {
      if (this.promptVisible) {
        p.classList.remove('show')
        p.classList.add('is-hidden')
        this.promptVisible = false
      }
      return
    }
    this.dom.promptKey.textContent = info.key || 'F'
    this.dom.promptTitle.textContent = info.title
    this.dom.promptSub.textContent = info.sub || ''
    if (!this.promptVisible) {
      p.classList.remove('is-hidden')
      requestAnimationFrame(() => p.classList.add('show'))
      this.promptVisible = true
    }
  }

  monsterAlert(creature) {
    if (!creature) return
    const info = speciesInfo(creature.speciesId)
    this.toast(`<b>${creature.name}</b> te desafiou!`, 'red', info.glyph)
  }

  monsterTelegraph(creature, kind) {
    if (!creature) return
    if (kind === 'slam') this.toast(`<b>${creature.name}</b> prepara um impacto no solo. Esquive!`, 'red', '⚠', 2200)
    if (kind === 'blink') this.toast(`<b>${creature.name}</b> desapareceu na névoa…`, 'teal', '✧', 2200)
  }

  bossPhase(creature) {
    this.banner('FASE II', `${creature.name} liberou o poder do altar`, 2400)
    this.toast(`<b>${creature.name}</b> está enfurecido!`, 'red', '⚠', 3000)
  }

  bossTelegraph(creature) {
    if (!creature) return
    this.toast(`<b>${creature.name}</b> concentra um golpe devastador.`, 'red', '⚠', 2000)
  }

  update(dt) {
    const game = this.game
    if (!game) return
    const player = game.player
    if (!player) return

    // status
    const hpPct = clamp(player.hp / player.maxHp, 0, 1) * 100
    this.dom.hpFill.style.width = `${hpPct}%`
    this.dom.hpFill.parentElement.classList.toggle('low', hpPct < 32)
    this.dom.hpText.textContent = `${Math.ceil(player.hp)} / ${Math.ceil(player.maxHp)}`
    this.dom.stFill.style.width = `${clamp(player.stamina / player.maxStamina, 0, 1) * 100}%`
    this.dom.xpFill.style.width = `${clamp(player.xp / player.xpToNext, 0, 1) * 100}%`
    this.dom.xpText.textContent = `${formatNumber(player.xp)} / ${formatNumber(player.xpToNext)} XP`
    this.dom.level.textContent = `Nv. ${player.level}`

    // compass
    const heading = Math.atan2(Math.sin(game.cameraYaw), -Math.cos(game.cameraYaw))
    const pxPerRad = 62
    for (const span of this.dom.compassSpans) {
      const b = (Number(span.dataset.b) * Math.PI) / 180
      let diff = b - heading
      while (diff > Math.PI) diff -= Math.PI * 2
      while (diff < -Math.PI) diff += Math.PI * 2
      const left = 106 + diff * pxPerRad
      span.style.left = `${left}px`
      span.style.opacity = Math.abs(diff) > 1.35 ? '0' : String(0.5 + (1 - Math.abs(diff) / 1.4) * 0.5)
    }

    // region
    const region = regionAt(player.position.x, player.position.z)
    if (region.id !== this.regionId) {
      this.regionId = region.id
      this.dom.regionName.textContent = region.name
      this.dom.regionSub.textContent = region.id === 'meadow' ? 'Feralis · Mundo Aberto' : 'Feralis · Território selvagem'
      this.dom.regionName.style.opacity = '0'
      requestAnimationFrame(() => { this.dom.regionName.style.opacity = '1' })
      if (game.started) this.toast(`Entrando em <b>${region.name}</b>`, '', '◎', 2600)
    }

    // quests
    const questSig = game.quests.map((q) => `${q.done ? 1 : 0}${q.count || 0}${q.target || 0}`).join('|')
    if (questSig !== this.questSignature) {
      this.questSignature = questSig
      this.renderQuests()
    }

    // target
    const target = (game.lockTarget && game.lockTarget.alive && !game.lockTarget.tamed) ? game.lockTarget : (game.lastTargetTime > 0 ? game.lastTarget : null)
    if (this.dom.target) {
      const show = !!target && game.started && !target.boss && !(game.boss && game.boss.alive)
      if (show) {
        const info = speciesInfo(target.speciesId)
        const key = `${target.speciesId}-${target.level}-${target.boss ? 1 : 0}`
        if (key !== this.lastTargetKey) {
          this.lastTargetKey = key
          this.dom.targetName.textContent = target.name
          this.dom.targetType.textContent = target.boss ? 'GUARDIÃO' : info.type
          this.dom.targetLv.textContent = `Nv. ${target.level}${target.elite ? ' · Elite' : ''}`
          this.dom.targetIcon.textContent = info.glyph
          this.dom.targetType.style.background = target.boss ? '#ff9a6b' : info.color
          this.dom.targetIcon.style.color = info.color
        }
        const ratio = target.hpRatio
        this.dom.targetHp.style.width = `${ratio * 100}%`
        this.dom.targetHint.textContent = `HP ${Math.ceil(ratio * 100)}% · ${formatNumber(target.hp)}`
        if (target.boss) {
          this.dom.targetSeal.textContent = 'SELO IMUNE'
          this.dom.targetSeal.classList.remove('ready')
        } else if (target.weakened) {
          this.dom.targetSeal.textContent = `SELO PRONTO · ${Math.round(target.sealChance * 100)}%`
          this.dom.targetSeal.classList.add('ready')
        } else {
          this.dom.targetSeal.textContent = 'SELO AOS 40%'
          this.dom.targetSeal.classList.remove('ready')
        }
        this.dom.target.classList.remove('is-hidden')
        this.targetVisible = true
      } else if (this.targetVisible) {
        this.dom.target.classList.add('is-hidden')
        this.targetVisible = false
      }
    }

    // boss
    const boss = game.boss
    if (boss && boss.alive && game.started) {
      this.dom.boss.classList.remove('is-hidden')
      this.dom.bossName.textContent = boss.name
      this.dom.bossFill.style.width = `${boss.hpRatio * 100}%`
      this.dom.bossPhase.textContent = boss.phase === 2 ? 'FASE II · FÚRIA' : 'FASE I'
      this.dom.boss.classList.toggle('enraged', boss.phase === 2)
    } else if (!this.dom.boss.classList.contains('is-hidden')) {
      this.dom.boss.classList.add('is-hidden')
    }

    // companion
    const comp = game.companion
    if (comp) {
      this.dom.companionCard.classList.remove('is-empty')
      this.dom.companionName.textContent = comp.info.name
      this.dom.companionLevel.textContent = `Nv. ${comp.level}`
      const fighting = comp.target && comp.target.alive
      this.dom.companionState.textContent = fighting
        ? `Atacando ${comp.target.name} · ${Math.round(comp.bond)}% vínculo`
        : comp.bond >= comp.maxBond ? 'Fúria de Vínculo pronta!'
          : 'Ao seu lado · vínculo crescendo'
      this.dom.companionGlyph.textContent = comp.info.glyph
      this.dom.companionOrb.style.color = comp.info.color
      this.dom.companionOrb.style.borderColor = `${comp.info.color}66`
      this.dom.companionOrb.style.background = `radial-gradient(circle at 35% 30%, ${comp.info.color}55, rgba(8,25,20,0.9))`
      this.dom.bondFill.style.width = `${(comp.bond / comp.maxBond) * 100}%`
    } else {
      this.dom.companionCard.classList.add('is-empty')
      this.dom.companionName.textContent = 'Nenhuma fera'
      this.dom.companionLevel.textContent = '—'
      this.dom.companionState.textContent = 'Sele uma fera selvagem para lutar ao seu lado.'
      this.dom.companionGlyph.textContent = '✧'
      this.dom.bondFill.style.width = '0%'
    }

    // roster
    const rosterSig = game.roster.map((r) => `${r.species}${r.level}`).join(',') + `#${game.rosterIndex}`
    if (rosterSig !== this.rosterSignature) {
      this.rosterSignature = rosterSig
      this.renderRoster()
    }

    // prompt (prefer explicit game prompt)
    if (game.promptInfo) {
      this.setPrompt(game.promptInfo)
    } else {
      this.setPrompt(null)
    }

    // combo
    if (game.comboDisplay >= 2 && game.comboTimer > 0) {
      if (this.dom.combo.classList.contains('is-hidden')) this.dom.combo.classList.remove('is-hidden')
      this.dom.combo.classList.add('show')
      if (game.comboDisplay !== this.comboValue) {
        this.comboValue = game.comboDisplay
        this.dom.comboNum.textContent = game.comboDisplay
        this.dom.combo.classList.remove('pop')
        void this.dom.combo.offsetWidth
        this.dom.combo.classList.add('pop')
        this.dom.combo.querySelector('span').textContent = game.comboDisplay >= 5 ? 'COMBO PERFEITO' : 'COMBO'
      }
    } else {
      this.dom.combo.classList.remove('show')
      this.comboValue = 0
    }

    // capture
    const cap = game.captureState
    if (cap && cap.active) {
      this.dom.capturePanel.classList.remove('is-hidden')
      this.dom.captureFill.style.setProperty('--p', String(Math.round(cap.progress * 100)))
      this.dom.captureTitle.textContent = cap.title
      this.dom.captureSub.textContent = cap.sub
    } else if (!this.dom.capturePanel.classList.contains('is-hidden')) {
      this.dom.capturePanel.classList.add('is-hidden')
    }

    this.drawMinimap(game)
  }

  renderQuests() {
    const game = this.game
    const ul = this.dom.questList
    if (!ul) return
    ul.innerHTML = ''
    let activeAssigned = false
    game.quests.forEach((q) => {
      const li = document.createElement('li')
      const active = !q.done && !activeAssigned
      if (active) activeAssigned = true
      li.className = q.done ? 'done' : active ? 'active' : ''
      const progress = q.target ? `${Math.min(q.count || 0, q.target)}/${q.target}` : q.done ? '✓' : '—'
      li.innerHTML = `<span class="q-dot"></span><div><b>${q.title}</b><small>${q.desc}</small></div><em>${progress}</em>`
      ul.appendChild(li)
    })
    const done = game.quests.filter((q) => q.done).length
    this.dom.questCount.textContent = `${done}/${game.quests.length}`
    const activeQuest = game.quests.find((q) => !q.done)
    if (this.dom.mqTitle) {
      this.dom.mqTitle.textContent = activeQuest ? activeQuest.title : 'Lenda de Feralis'
      this.dom.mqProgress.textContent = activeQuest
        ? `${Math.min(activeQuest.count || 0, activeQuest.target || 1)}/${activeQuest.target || 1} · ${done}/${game.quests.length}`
        : 'Mundo dominado · ✓'
    }
  }

  renderRoster() {
    const game = this.game
    const wrap = this.dom.roster
    if (!wrap) return
    wrap.innerHTML = ''
    const max = 6
    for (let i = 0; i < max; i++) {
      const slot = document.createElement('div')
      const member = game.roster[i]
      slot.className = 'slot'
      if (member) {
        const info = speciesInfo(member.species)
        slot.classList.add('filled')
        slot.style.background = info.color
        slot.textContent = info.glyph
        slot.title = `${info.name} · Nv. ${member.level}`
        if (i === game.rosterIndex) slot.classList.add('active')
      } else {
        slot.textContent = '·'
      }
      wrap.appendChild(slot)
    }
  }

  drawMinimap(game) {
    const canvas = this.dom.minimap
    if (!canvas) return
    const ctx = this.ctx
    const size = canvas.width
    const c = size / 2
    const radius = size * 0.47
    const player = game.player
    const pxPerMeter = size * 0.36 / 60
    const map = game.world.mapCanvas
    const mapScale = (size * 0.36 / 60) / (map.width / 440)

    ctx.clearRect(0, 0, size, size)
    ctx.save()
    ctx.beginPath()
    ctx.arc(c, c, radius, 0, Math.PI * 2)
    ctx.clip()

    ctx.fillStyle = '#14261f'
    ctx.fillRect(0, 0, size, size)

    const rot = game.cameraYaw + Math.PI
    ctx.save()
    ctx.translate(c, c)
    ctx.rotate(rot)

    const playerMapX = (player.position.x / 440 + 0.5) * map.width
    const playerMapY = (player.position.z / 440 + 0.5) * map.height
    const drawSize = map.width * mapScale
    ctx.globalAlpha = 0.95
    ctx.drawImage(map, -playerMapX * mapScale, -playerMapY * mapScale, drawSize, drawSize)
    ctx.globalAlpha = 1

    const toMap = (x, z) => [(x - player.position.x) * pxPerMeter, (z - player.position.z) * pxPerMeter]

    // tree landmark
    const [tx, ty] = toMap(0, 0)
    if (Math.hypot(tx, ty) < radius * 1.3) {
      ctx.fillStyle = '#7fe6c9'
      ctx.globalAlpha = 0.85
      ctx.beginPath()
      ctx.arc(tx, ty, size * 0.022, 0, Math.PI * 2)
      ctx.fill()
      ctx.strokeStyle = 'rgba(127,230,201,0.5)'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(tx, ty, size * 0.035, 0, Math.PI * 2)
      ctx.stroke()
      ctx.globalAlpha = 1
    }

    // shrines
    for (const s of game.world.shrines) {
      const [sx, sy] = toMap(s.position.x, s.position.z)
      if (Math.hypot(sx, sy) > radius * 1.15) continue
      ctx.save()
      ctx.translate(sx, sy)
      ctx.rotate(-rot)
      ctx.fillStyle = s.activated ? 'rgba(255,255,255,0.25)' : s.color ? `#${s.color.toString(16).padStart(6, '0')}` : '#e9c46a'
      ctx.globalAlpha = s.activated ? 0.45 : 0.95
      ctx.beginPath()
      ctx.moveTo(0, -size * 0.018)
      ctx.lineTo(size * 0.014, 0)
      ctx.lineTo(0, size * 0.018)
      ctx.lineTo(-size * 0.014, 0)
      ctx.closePath()
      ctx.fill()
      ctx.globalAlpha = 1
      ctx.restore()
    }

    // essences
    for (const e of game.world.essences) {
      if (e.taken) continue
      const [ex, ey] = toMap(e.mesh.position.x, e.mesh.position.z)
      if (Math.hypot(ex, ey) > radius * 1.1) continue
      ctx.fillStyle = '#8ff5e3'
      ctx.globalAlpha = 0.8
      ctx.beginPath()
      ctx.arc(ex, ey, size * 0.007, 0, Math.PI * 2)
      ctx.fill()
      ctx.globalAlpha = 1
    }

    // creatures
    for (const creature of game.creatures) {
      if (!creature.alive || creature.tamed) continue
      const [ex, ey] = toMap(creature.position.x, creature.position.z)
      if (Math.hypot(ex, ey) > radius * 1.15) continue
      ctx.fillStyle = creature.aggro ? '#ff6f5c' : 'rgba(255,140,100,0.65)'
      const dot = size * (creature.boss ? 0.024 : creature.elite ? 0.013 : 0.009)
      ctx.beginPath()
      ctx.arc(ex, ey, dot, 0, Math.PI * 2)
      ctx.fill()
      if (creature.elite || creature.boss) {
        ctx.strokeStyle = creature.boss ? '#ffca78' : '#e9c46a'
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(ex, ey, dot + size * 0.007, 0, Math.PI * 2)
        ctx.stroke()
      }
    }

    // companion
    if (game.companion) {
      const [mx, my] = toMap(game.companion.position.x, game.companion.position.z)
      if (Math.hypot(mx, my) < radius * 1.1) {
        ctx.fillStyle = '#6fe6c8'
        ctx.beginPath()
        ctx.arc(mx, my, size * 0.009, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // boss
    if (game.boss && game.boss.alive) {
      const [bx, by] = toMap(game.boss.position.x, game.boss.position.z)
      if (Math.hypot(bx, by) < radius * 1.2) {
        ctx.save()
        ctx.translate(bx, by)
        ctx.rotate(-rot)
        ctx.fillStyle = '#ff8a5c'
        ctx.strokeStyle = '#ffe3a3'
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(0, -size * 0.032)
        ctx.lineTo(size * 0.026, 0)
        ctx.lineTo(0, size * 0.032)
        ctx.lineTo(-size * 0.026, 0)
        ctx.closePath()
        ctx.fill()
        ctx.stroke()
        ctx.restore()
      }
    }

    ctx.restore()

    // field of view
    ctx.save()
    ctx.translate(c, c)
    ctx.fillStyle = 'rgba(127,230,201,0.09)'
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.arc(0, 0, radius * 0.85, -Math.PI / 2 - 0.5, -Math.PI / 2 + 0.5)
    ctx.closePath()
    ctx.fill()
    ctx.restore()

    // player arrow
    ctx.save()
    ctx.translate(c, c)
    ctx.fillStyle = '#f6efdc'
    ctx.strokeStyle = '#2b6f63'
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(0, -size * 0.033)
    ctx.lineTo(size * 0.022, size * 0.024)
    ctx.lineTo(0, size * 0.012)
    ctx.lineTo(-size * 0.022, size * 0.024)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
    ctx.restore()

    // north marker on edge
    const northAngle = rot - Math.PI / 2
    const nx = c + Math.cos(northAngle) * radius * 0.9
    const ny = c + Math.sin(northAngle) * radius * 0.9
    ctx.fillStyle = '#e9c46a'
    ctx.font = `700 ${Math.round(size * 0.045)}px Outfit, sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('N', nx, ny)

    ctx.restore()

    // inner shadow ring
    ctx.save()
    ctx.strokeStyle = 'rgba(6,16,12,0.7)'
    ctx.lineWidth = size * 0.05
    ctx.beginPath()
    ctx.arc(c, c, radius, 0, Math.PI * 2)
    ctx.stroke()
    ctx.restore()
  }
}
