import './style.css'
import * as THREE from 'three'
import {
  clamp, damp, dampAngle, lerp, rand, randInt, pick, smoothstep, angleDelta,
  AudioSystem, isTouchDevice,
} from './engine.js'
import { World, terrainHeight, regionAt, SHRINES, WORLD_RADIUS } from './world.js'
import { Player } from './player.js'
import { Creature, Companion, pickSpecies, speciesInfo, SPECIES } from './creatures.js'
import { FX } from './fx.js'
import { UI } from './ui.js'
import { Input } from './input.js'

const isMobile = () => window.innerWidth < 900 || isTouchDevice()

class Game {
  constructor() {
    this.canvas = document.getElementById('game')
    this.mobile = isMobile()
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: !this.mobile,
      powerPreference: 'high-performance',
      alpha: false,
    })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.mobile ? 1.4 : 1.75))
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.08
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap

    this.scene = new THREE.Scene()
    this.scene.fog = new THREE.FogExp2(0xe8c7a4, 0.0028)
    this.camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.1, 900)
    this.camera.position.set(0, 12, 50)

    this.audio = new AudioSystem()
    this.world = new World(this.scene, { mobile: this.mobile })
    this.player = new Player(this.scene, this.world, this.audio)
    this.player.position.set(0, terrainHeight(0, 34), 34)
    this.player.spawnPoint.set(0, terrainHeight(0, 34), 34)
    this.player.model.position.copy(this.player.position)
    this.fx = new FX(this.scene, this.camera)
    this.ui = new UI()
    this.ui.init(this)
    this.input = new Input(this.canvas)

    this.setupLights()
    this.setupCallbacks()

    this.started = false
    this.paused = false
    this.over = false
    this.time = 0
    this.hitstop = 0
    this.creatures = []
    this.drops = []
    this.boss = null
    this.bossArena = null
    this.companion = null
    this.roster = []
    this.rosterIndex = 0
    this.lockTarget = null
    this.lastTarget = null
    this.lastTargetTime = 0
    this.comboDisplay = 0
    this.comboTimer = 0
    this.kills = 0
    this.tamedCount = 0
    this.bossesDefeated = 0
    this.cameraYaw = Math.PI
    this.cameraPitch = 0.28
    this.cameraDistance = this.mobile ? 7.6 : 6.4
    this.cameraLook = new THREE.Vector3(0, 10, 30)
    this.shakeTime = 0
    this.shakeAmount = 0
    this.startBlend = 0
    this.spawnTimer = 1.5
    this.promptInfo = null
    this.captureState = null
    this.sealFx = null
    this.staminaToastCd = 0
    this.introStep = 0
    this.lastShot = 0
    this.maxWild = this.mobile ? 9 : 14
    this.deathTimer = 0
    this.lockRing = null
    this.treeReached = false
    this.audioStarted = false

    this.setupQuests()
    this.createLockRing()
    this.spawnInitialCreatures()
    this.setupDebug()

    this.clock = new THREE.Clock()
    this.accum = 0
    this.fpsSamples = []
    this.qualityAdjusted = false

    this.bindEvents()
    this.loop = this.loop.bind(this)
    requestAnimationFrame(this.loop)

    setTimeout(() => this.ui.hideLoading(), 500)
    setTimeout(() => {
      if (!this.started) this.ui.toast('Clique em <b>JOGAR</b> para entrar em Feralis', '', '▶', 5200)
    }, 1800)
  }

  setupLights() {
    const hemi = new THREE.HemisphereLight(0xbcd9ff, 0x4d5c36, 1.15)
    this.scene.add(hemi)
    this.hemi = hemi

    const sun = new THREE.DirectionalLight(0xffe1b0, 2.5)
    sun.castShadow = true
    sun.shadow.mapSize.set(this.mobile ? 1024 : 2048, this.mobile ? 1024 : 2048)
    sun.shadow.camera.near = 1
    sun.shadow.camera.far = 190
    sun.shadow.camera.left = -46
    sun.shadow.camera.right = 46
    sun.shadow.camera.top = 46
    sun.shadow.camera.bottom = -46
    sun.shadow.bias = -0.0008
    sun.shadow.normalBias = 0.03
    this.scene.add(sun)
    this.scene.add(sun.target)
    this.sun = sun

    const rim = new THREE.DirectionalLight(0x8fd8ff, 0.35)
    rim.position.set(40, 30, 60)
    this.scene.add(rim)
  }

  setupCallbacks() {
    const p = this.player
    p.events.onSlash = null
    p.events.onStep = () => this.audio.step()
    p.events.onDodge = (pos, yaw) => {
      this.audio.dodge()
      this.fx.burst(pos.clone().setY(pos.y + 0.2), 0xd8e6d0, 14, { speed: 3.4, gravity: 1.5, size: 0.35, life: 0.55, upward: 0.4 })
      this.fx.slash(pos.clone().setY(pos.y + 1.0), yaw, { color: 0x9fe8ff, scale: 0.7 })
    }
    p.events.onHurt = (dmg, sourcePos) => {
      this.ui.hitFlash()
      this.ui.damageNumber?.(this.player.position, `-${Math.round(dmg)}`, 'hurt')
      this.fx.damageNumber(this.player.position, `-${Math.round(dmg)}`, 'hurt')
      this.audio.hurt()
      this.shake(0.42, 0.28)
      this.comboDisplay = 0
      this.comboTimer = 0
      this.ui.toast('Você foi atingido — esquive com <b>ESPAÇO</b>', 'red', '!', 1600)
      if (sourcePos) {
        const dir = this.player.position.clone().sub(sourcePos).setY(0).normalize()
        this.player.velocity.addScaledVector(dir, 5)
      }
    }
    p.events.onDeath = () => {
      this.over = true
      this.deathTimer = 0
      this.audio.spirit()
      this.player.velocity.set(0, 0, 0)
      setTimeout(() => { if (this.over) this.ui.showDeath(true) }, 900)
    }
    p.events.onLevelUp = (level) => {
      this.audio.levelUp()
      this.ui.banner('NÍVEL ' + level, 'O vínculo com Feralis se fortalece', 2200)
      this.fx.shockwave(this.player.position.clone().setY(this.player.position.y + 0.15), 0xffe2a3, 5, 0.7)
      this.fx.burst(this.player.position.clone().setY(this.player.position.y + 1), 0xffe2a3, 28, { speed: 4, size: 0.4, life: 0.9, gravity: -2 })
      this.ui.toast('Vida e vigor restaurados. Dano aumentado.', 'teal', '✧')
    }
    p.events.onStaminaFail = (msg) => {
      if (this.staminaToastCd > 0) return
      this.staminaToastCd = 2.5
      this.ui.toast(msg, 'red', '⏳', 1400)
    }
  }

  setupQuests() {
    this.quests = [
      { id: 'tree', title: 'Alcance a Árvore do Coração', desc: 'Siga a trilha dourada até o centro do mundo.', done: false, count: 0, target: 0 },
      { id: 'slay', title: 'Domine as feras selvagens', desc: 'Enfrente criaturas no território aberto.', done: false, count: 0, target: 6 },
      { id: 'seal', title: 'Sele sua primeira fera', desc: 'Reduza o HP e lance o Selo com E.', done: false, count: 0, target: 1 },
      { id: 'guardians', title: 'Restaure os três altares', desc: 'Invoque e derrote os Guardiões.', done: false, count: 0, target: 3 },
    ]
  }

  createLockRing() {
    const geo = new THREE.RingGeometry(1.15, 1.28, 32)
    geo.rotateX(-Math.PI / 2)
    const mat = new THREE.MeshBasicMaterial({ color: 0xffd27a, transparent: true, opacity: 0.8, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false })
    const ring = new THREE.Mesh(geo, mat)
    ring.visible = false
    ring.renderOrder = 3
    this.scene.add(ring)
    this.lockRing = ring
    const inner = new THREE.Mesh(new THREE.RingGeometry(0.6, 0.65, 24).rotateX(-Math.PI / 2), mat.clone())
    inner.material.opacity = 0.5
    ring.add(inner)
    this.lockRingInner = inner
  }

  spawnInitialCreatures() {
    const spots = [
      { x: 4.5, z: 22, species: 'brasalume', level: 2 },
      { x: -10, z: 16, species: 'aquari', level: 2 },
      { x: 13, z: 9, species: 'zephyro', level: 3 },
      { x: -17, z: 6, species: 'musgo', level: 3 },
      { x: 22, z: 30, species: 'brasalume', level: 2 },
    ]
    for (const s of spots) {
      const y = terrainHeight(s.x, s.z)
      const creature = new Creature(this, s.species, {
        level: s.level,
        position: new THREE.Vector3(s.x, y, s.z),
      })
      this.creatures.push(creature)
    }
  }

  spawnWild(around = null, minDist = 28, maxDist = 56) {
    const center = around || this.player.position
    for (let attempt = 0; attempt < 24; attempt++) {
      const a = Math.random() * Math.PI * 2
      const d = rand(minDist, maxDist)
      const x = center.x + Math.cos(a) * d
      const z = center.z + Math.sin(a) * d
      if (Math.hypot(x, z) > WORLD_RADIUS - 10) continue
      if (!this.world.canWalk(x, z)) continue
      if (this.world.nearestShrine(x, z, 12)) continue
      const distCenter = Math.hypot(x, z)
      const reg = regionAt(x, z)
      const species = pickSpecies(reg.id)
      const level = clamp(1 + Math.floor(distCenter / 26) + randInt(0, 1), 1, 14)
      const elite = Math.random() < (distCenter > 80 ? 0.12 : 0.03)
      const creature = new Creature(this, species, { level, position: new THREE.Vector3(x, terrainHeight(x, z), z), elite })
      this.creatures.push(creature)
      this.fx.burst(new THREE.Vector3(x, terrainHeight(x, z) + 0.6, z), creature.style.aura, 18, { speed: 2.4, size: 0.45, life: 0.8, gravity: -1 })
      return creature
    }
    return null
  }

  start() {
    if (this.started) return
    this.audio.unlock()
    this.started = true
    this.startBlend = 0
    this.cameraYaw = this.player.yaw
    this.cameraPitch = 0.26
    this.cameraDistance = this.mobile ? 7.8 : 6.4
    this.player.invuln = 1.2
    this.ui.hideTitle()
    this.audio.ui()
    this.ui.toast('Bem-vindo a <b>Feralis</b>, caçador.', '', '✦', 4200)
    setTimeout(() => this.ui.toast('Siga a trilha dourada até a <b>Árvore do Coração</b>.', 'teal', '◈', 4800), 800)
    setTimeout(() => this.ui.toast('Ataque com <b>clique</b>. Reduza o HP e pressione <b>E</b> para selar.', '', '⚔', 5200), 1800)
    this.player.addXp(0)
    this.ui.showPause(false)
  }

  togglePause(force) {
    if (!this.started || this.over) return
    const next = typeof force === 'boolean' ? force : !this.paused
    if (next === this.paused) return
    this.paused = next
    this.ui.showPause(next)
    this.audio.ui()
    if (next) {
      this.player.velocity.set(0, 0, 0)
      this.input.move.x = 0
      this.input.move.y = 0
    }
  }

  resume() {
    this.togglePause(false)
  }

  respawn() {
    this.over = false
    this.deathTimer = 0
    this.ui.showDeath(false)
    this.player.respawn()
    this.cameraYaw = Math.PI
    this.cameraPitch = 0.26
    this.lockTarget = null
    this.boss = null
    this.removeBossArena()
    for (const c of [...this.creatures]) {
      if (c.alive) {
        c.setAggro(false)
        c.remove()
      }
    }
    this.creatures = []
    this.creaturePlaceholder = null
    this.spawnInitialCreatures()
    if (this.companion) {
      this.companion.dismiss()
      this.companion = null
    }
    if (this.roster.length) this.summonCompanion(0)
    this.comboDisplay = 0
    this.fx.clear()
    this.ui.toast('Você despertou no acampamento. A caçada continua.', 'teal', '✧', 4200)
  }

  /* ── combat ── */
  resolvePlayerAttack() {
    const hit = this.player.consumeHit()
    if (!hit) return
    const isHeavy = hit.heavy
    this.audio.swing(isHeavy)
    this.fx.slash(hit.position, hit.yaw, { heavy: isHeavy, color: isHeavy ? 0xffd08a : 0x9ffff0, scale: 1 })
    this.shake(isHeavy ? 0.5 : 0.22, isHeavy ? 0.26 : 0.15)
    this.audio.hit(isHeavy)
    const dir = new THREE.Vector3(Math.sin(hit.yaw), 0, Math.cos(hit.yaw))
    let hitAny = false

    const candidates = [...this.creatures]
    if (this.boss && this.boss.alive) candidates.push(this.boss)
    const targets = new Set()
    for (const c of candidates) {
      if (!targets.has(c) && (!c.alive || c.tamed)) continue
      const to = c.position.clone().sub(this.player.position)
      to.y = 0
      const radius = c.boss ? 1.9 : c.elite ? 1.0 : 0.55
      const dist = to.length() - radius
      if (dist > hit.range) continue
      if (dist > 0.001 && to.clone().normalize().dot(dir) < Math.cos(hit.arc)) continue
      if (Math.abs((c.position.y + c.modelHeight * 0.4) - (this.player.position.y + 1)) > 3.2) continue
      targets.add(c)
      const crit = Math.random() < 0.14 || (hit.stage >= 2 && Math.random() < 0.2)
      const dmg = hit.damage * (1 + hit.stage * 0.07) * (crit ? 1.7 : 1)
      c.takeDamage(dmg, { crit, knock: hit.knock, heavy: isHeavy })
      const point = c.position.clone()
      point.y += 0.9 + Math.random() * 0.4
      this.fx.burst(point, crit ? 0xffe6a0 : 0xfff3cf, crit ? 22 : 14, { speed: 5.5, gravity: 6, size: 0.38, life: 0.5 })
      this.fx.spawnDirectional(point, dir, c.style.glow, 5, { speed: 8, life: 0.35, size: 0.3, gravity: 2 })
      this.hitstop = Math.max(this.hitstop, isHeavy ? 0.075 : 0.038)
      this.lastTarget = c
      this.lastTargetTime = 3.4
      this.lockTarget = c
      hitAny = true
      this.comboDisplay++
      this.comboTimer = 2.4
      if (this.comboDisplay > 1) this.audio.ui()
    }

    if (hitAny) {
      this.fx.shockwave(
        this.player.position.clone().setY(this.player.position.y + 0.15),
        isHeavy ? 0xffc47a : 0x9ffff0,
        isHeavy ? 6.5 : 3,
        isHeavy ? 0.5 : 0.3,
      )
    } else {
      const point = this.player.position.clone().addScaledVector(dir, 2.2)
      point.y = terrainHeight(point.x, point.z) + 0.2
      this.fx.burst(point, 0xcbbd95, 6, { speed: 2, gravity: 3, size: 0.25, life: 0.35 })
    }
  }

  damagePlayer(amount, source) {
    if (!this.started || this.paused || this.over) return
    this.player.takeDamage(amount, source)
  }

  shake(amount, duration) {
    this.shakeAmount = Math.max(this.shakeAmount, amount)
    this.shakeTime = Math.max(this.shakeTime, duration)
  }

  /* ── targeting / seal ── */
  toggleLock() {
    const forward = new THREE.Vector3(Math.sin(this.cameraYaw), 0, Math.cos(this.cameraYaw))
    if (this.lockTarget && this.lockTarget.alive) {
      this.lockTarget = null
      this.audio.ui()
      return
    }
    const pool = [...this.creatures]
    if (this.boss && this.boss.alive) pool.push(this.boss)
    let best = null
    let bestScore = Infinity
    for (const c of pool) {
      if (!c.alive || c.tamed) continue
      const d = c.position.distanceTo(this.player.position)
      if (d > 34) continue
      const to = c.position.clone().sub(this.player.position).setY(0).normalize()
      const dot = to.dot(forward)
      if (dot < 0.1) continue
      const score = d * (1.5 - dot)
      if (score < bestScore) { bestScore = score; best = c }
    }
    if (!best) {
      for (const c of pool) {
        if (!c.alive || c.tamed) continue
        const d = c.position.distanceTo(this.player.position)
        if (d < 12 && d < bestScore) { bestScore = d; best = c }
      }
    }
    if (best) {
      this.lockTarget = best
      this.audio.ui()
      if (best.boss) this.ui.toast(`<b>${best.name}</b> marcado. Não deixe de esquivar.`, 'red', '◎', 2200)
    } else {
      this.ui.toast('Nenhuma fera ao alcance.', '', '○', 1500)
    }
  }

  trySeal() {
    if (!this.started || this.captureState) return
    const pool = [...this.creatures]
    if (this.boss) pool.push(this.boss)
    let target = this.lockTarget && this.lockTarget.alive && !this.lockTarget.tamed ? this.lockTarget : null
    if (!target) {
      let bestD = 15
      for (const c of pool) {
        if (!c.alive || c.tamed || c.boss) continue
        const d = c.position.distanceTo(this.player.position)
        if (d < bestD) { bestD = d; target = c }
      }
    }
    if (!target) {
      this.ui.toast('Nenhuma fera por perto para selar.', '', '◈', 1800)
      return
    }
    if (target.boss) {
      this.ui.toast('<b>Guardiões</b> não podem ser selados. Derrote-o!', 'red', '⚠', 2400)
      this.audio.sealFail()
      return
    }
    if (target.tamed) return
    this.lockTarget = target
    this.player.setAim(Math.atan2(target.position.x - this.player.position.x, target.position.z - this.player.position.z))
    this.player.yaw = this.player.aimYaw
    this.audio.sealThrow()
    const chance = target.sealChance
    const from = this.player.position.clone()
    from.y += 1.25
    const to = target.position.clone()
    to.y += target.modelHeight * 0.45
    const mesh = new THREE.Group()
    const core = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.22, 0),
      new THREE.MeshStandardMaterial({ color: 0x9effe0, emissive: 0x4be0bd, emissiveIntensity: 2, flatShading: true }),
    )
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this.fx.particleMat.uniforms.uTex.value, color: 0x7ffff0, transparent: true, opacity: 0.8,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }))
    halo.scale.setScalar(1.8)
    mesh.add(core, halo)
    mesh.position.copy(from)
    this.scene.add(mesh)
    this.sealFx = { mesh, from, to, target, chance, t: 0, duration: 0.62, phase: 'throw', resolved: false }
    this.captureState = { active: true, progress: 0, title: 'LANÇANDO O SELO', sub: `${target.name} · ${Math.round(chance * 100)}% de vínculo` }
    target.hitStun = 2.4
    target.state = 'recover'
    target.velocity.set(0, 0, 0)
    target.attackCd = 3
    this.comboDisplay = 0
  }

  updateSeal(dt) {
    if (!this.sealFx) return
    const s = this.sealFx
    if (s.phase === 'throw') {
      s.t += dt / s.duration
      const t = clamp(s.t, 0, 1)
      const p = s.from.clone().lerp(s.to, t)
      p.y += Math.sin(t * Math.PI) * 2.4
      s.mesh.position.copy(p)
      s.mesh.rotation.x += dt * 10
      s.mesh.rotation.y += dt * 14
      if (Math.random() < 0.6) {
        this.fx.spawnParticles(p, 0x7ffff0, 1, { speed: 0.4, gravity: 0, size: 0.3, life: 0.4, spread: 0.5, upward: 0 })
      }
      if (t >= 1) {
        s.phase = 'hold'
        s.t = 0
        this.fx.burst(s.to, 0x9effe0, 30, { speed: 4, size: 0.55, life: 0.9, gravity: -1 })
        this.fx.shockwave(s.to, 0x7ffff0, 3.4, 0.6)
        this.audio.sealSuccess()
        if (s.target.alive) {
          s.target.hp = Math.max(1, s.target.hp)
          s.target.bar.group.visible = true
        }
        s.mesh.visible = false
        this.audio.spirit()
      }
      this.captureState.progress = t * 0.55
      this.captureState.title = 'SELANDO…'
      this.captureState.sub = `${s.target.name} · ${Math.round(s.chance * 100)}% de vínculo`
    } else {
      s.t += dt
      this.captureState.progress = 0.55 + clamp(s.t / 1.0, 0, 1) * 0.45
      if (s.t > 0.35 && !s.resolved && Math.random() < 0.6) {
        const p = s.to.clone()
        p.x += rand(-1.5, 1.5)
        p.z += rand(-1.5, 1.5)
        this.fx.spawnParticles(p, 0x9effe0, 1, { speed: 0.5, gravity: -1, size: 0.4, life: 0.6, spread: 0.6, upward: 0.2 })
      }
      if (s.t >= 1.0) {
        s.resolved = true
        this.resolveCapture(s)
      }
    }
  }

  resolveCapture(s) {
    const target = s.target
    const success = target.alive && Math.random() < s.chance
    if (success) {
      this.onTame(target)
      this.captureState = { active: true, progress: 1, title: 'VÍNCULO CRIADO', sub: `${target.info.name} agora luta ao seu lado`, done: true }
      this.audio.sealSuccess()
      this.fx.burst(s.to, 0xffffff, 50, { speed: 5, size: 0.6, life: 1.2, gravity: -2 })
    } else {
      this.captureState = { active: true, progress: 0, title: 'O SELO SE PARTIU', sub: 'A fera enfureceu. Tente novamente.', failed: true }
      this.audio.sealFail()
      if (target.alive) {
        target.hitStun = 0.4
        target.enrage(10)
      }
      this.ui.toast(`<b>${target.name}</b> resistiu! Enfraqueça-a mais e tente de novo.`, 'red', '✕', 3200)
      this.fx.burst(s.to, 0xff6a4c, 34, { speed: 6, size: 0.55, life: 0.9, gravity: 3 })
      this.shake(0.4, 0.25)
    }
    clearTimeout(this._captureTimer)
    this._captureTimer = setTimeout(() => {
      if (this.captureState && (this.captureState.done || this.captureState.failed)) this.captureState = null
    }, 2000)
    const mesh = this.sealFx.mesh
    mesh.visible = false
    this.sealFx = null
    setTimeout(() => {
      this.scene.remove(mesh)
      mesh.traverse((o) => {
        if (o.isMesh) { o.geometry.dispose(); o.material.dispose() }
        if (o.isSprite) o.material.dispose()
      })
    }, 1200)
  }

  onTame(target) {
    target.tame()
    const member = { species: target.speciesId, level: target.level, name: target.info.name }
    if (this.roster.length >= 6) {
      this.ui.toast('Sua matilha está cheia (6). A fera foi libertada.', 'red', '!', 3200)
      return
    }
    this.roster.push(member)
    this.tamedCount++
    this.player.addXp(45)
    this.audio.levelUp()
    this.ui.banner('NOVA FERA', `${target.info.name} juntou-se a você`, 2600)
    this.ui.toast(`<b>${target.info.name}</b> selada! Pressione <b>C</b> para invocá-la.`, 'teal', target.info.glyph, 5200)
    if (!this.companion) this.summonCompanion(this.roster.length - 1)
    const q = this.quests.find((q) => q.id === 'seal')
    if (q && !q.done) {
      q.count++
      if (q.count >= q.target) this.completeQuest(q)
    }
    this.fx.burst(target.position.clone().setY(target.position.y + 1), target.style.aura, 55, { speed: 4, size: 0.7, life: 1.4, gravity: -2 })
    this.spawnDrop(target.position.clone(), 0x9effe0, 60)
  }

  summonCompanion(index) {
    if (!this.roster.length) {
      this.ui.toast('Nenhuma fera selada ainda. Enfraqueça uma e use <b>E</b>.', '', '◈', 2400)
      return
    }
    index = clamp(index, 0, this.roster.length - 1)
    this.rosterIndex = index
    const member = this.roster[index]
    if (this.companion) this.companion.dismiss()
    this.companion = new Companion(this, member.species, member.level)
    this.companion.position.copy(this.player.position)
    this.companion.position.y = terrainHeight(this.player.position.x, this.player.position.z)
    this.audio.sealSuccess()
    this.fx.burst(this.player.position.clone().setY(this.player.position.y + 1), speciesInfo(member.species).color, 26, { speed: 3.5, size: 0.55, life: 0.8, gravity: -1 })
    this.ui.toast(`<b>${speciesInfo(member.species).name}</b> entrou na caçada.`, 'teal', speciesInfo(member.species).glyph)
    this.companion.bond = 0
  }

  cycleCompanion() {
    if (!this.roster.length) {
      this.ui.toast('Nenhuma fera selada ainda.', '', '◈', 1600)
      return
    }
    if (this.roster.length === 1) {
      if (this.companion) {
        this.companion.dismiss()
        this.companion = null
        this.ui.toast('Sua fera voltou ao selo. Pressione C para invocá-la.', 'teal', '◈', 2000)
      } else {
        this.summonCompanion(0)
      }
      return
    }
    const next = this.companion ? (this.rosterIndex + 1) % this.roster.length : 0
    this.summonCompanion(next)
  }

  /* ── world events ── */
  spawnBoss(shrine) {
    if (this.boss && this.boss.alive) {
      this.ui.toast('Um Guardião já está em combate!', 'red', '⚠', 2000)
      return
    }
    if (shrine.activated) {
      this.ui.toast('Este altar já foi restaurado.', 'teal', '✦', 2200)
      return
    }
    const offset = new THREE.Vector3(
      shrine.position.x + rand(-4, 4),
      0,
      shrine.position.z + rand(-4, 4),
    )
    if (!this.world.canWalk(offset.x, offset.z)) {
      offset.set(shrine.position.x + 3, 0, shrine.position.z + 3)
    }
    offset.y = terrainHeight(offset.x, offset.z)
    const boss = new Creature(this, shrine.species, {
      level: Math.max(4, this.player.level + 3),
      position: offset,
      boss: true,
      shrine,
    })
    this.boss = boss
    this.creatures.push(boss)
    this.lockTarget = boss
    this.cameraYaw = Math.atan2(boss.position.x - this.player.position.x, boss.position.z - this.player.position.z)
    this.player.setAim(this.cameraYaw)
    this.cameraPitch = 0.28
    this.player.invuln = 1.0
    arena: this.createBossArena(shrine)
    this.ui.banner('GUARDIÃO DESPERTO', shrine.bossName, 3200)
    this.ui.toast('Derrote o Guardião para restaurar o altar. <b>Guardiões não podem ser selados.</b>', 'red', '⚠', 5200)
    this.audio.roar()
    this.shake(0.8, 0.4)
    shrine.activated = true
    shrine.crystal.material.emissiveIntensity = 2.2
    this.fx.burst(offset.clone().setY(offset.y + 1.5), shrine.color, 60, { speed: 9, size: 0.8, life: 1.2, gravity: 1, upward: 1.2 })
  }

  createBossArena(shrine) {
    this.removeBossArena()
    const geo = new THREE.RingGeometry(12, 12.5, 64)
    geo.rotateX(-Math.PI / 2)
    const mat = new THREE.MeshBasicMaterial({ color: shrine.color, transparent: true, opacity: 0.36, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false })
    const ring = new THREE.Mesh(geo, mat)
    ring.position.set(shrine.position.x, terrainHeight(shrine.position.x, shrine.position.z) + 0.35, shrine.position.z)
    this.scene.add(ring)
    const runeGeo = new THREE.RingGeometry(10.4, 10.9, 6)
    runeGeo.rotateX(-Math.PI / 2)
    const rune = new THREE.Mesh(runeGeo, mat.clone())
    rune.material.opacity = 0.25
    rune.position.y = 0.4
    ring.add(rune)
    this.bossArena = { ring, rune, color: shrine.color }
    this.fx.shockwave(shrine.position.clone().setY(shrine.position.y + 0.3), shrine.color, 13, 1.2)
  }

  removeBossArena() {
    if (this.bossArena) {
      this.scene.remove(this.bossArena.ring)
      this.bossArena.ring.traverse((o) => { if (o.isMesh) { o.geometry.dispose(); o.material.dispose() } })
      this.bossArena = null
    }
  }

  onCreatureDefeated(creature, source) {
    if (creature.tamed) return
    if (creature.boss) {
      this.bossesDefeated++
      this.removeBossArena()
      const shrine = creature.shrine
      if (shrine) this.world.markShrineActivated(shrine.id)
      this.player.addXp(creature.xpValue)
      this.audio.levelUp()
      this.ui.banner('GUARDIÃO DERROTADO', `${creature.name} retornou ao altar`, 3200)
      this.ui.toast(`<b>${creature.shrine?.name || 'Altar'}</b> restaurado. +${creature.xpValue} XP`, 'teal', '✦', 4800)
      for (let i = 0; i < 3; i++) {
        const pos = creature.position.clone()
        pos.x += rand(-3, 3)
        pos.z += rand(-3, 3)
        this.spawnDrop(pos, i === 0 ? 0xffd27a : 0x9effe0, i === 0 ? 120 : 45)
      }
      setTimeout(() => {
        if (this.boss === creature) this.boss = null
      }, 1300)
      const q = this.quests.find((q) => q.id === 'guardians')
      if (q && !q.done) {
        q.count++
        if (q.count >= q.target) this.completeQuest(q)
      }
      if (this.bossesDefeated >= 3) {
        setTimeout(() => this.ui.banner('FERALIS RESTAURADA', 'Os três altares voltaram a brilhar', 4200), 2200)
      }
      return
    }

    this.kills++
    this.player.addXp(creature.xpValue)
    this.comboDisplay++
    this.comboTimer = 2.6
    if (creature.elite) {
      this.ui.toast(`<b>${creature.name} elite</b> derrotada. +${creature.xpValue} XP`, 'teal', '✧', 2600)
    }
    if (Math.random() < 0.55) this.spawnDrop(creature.position.clone(), 0x9effe0, 30)
    const q = this.quests.find((q) => q.id === 'slay')
    if (q && !q.done) {
      q.count++
      if (q.count >= q.target) this.completeQuest(q)
    }
    void source
  }

  completeQuest(q) {
    q.done = true
    q.count = q.target || 1
    this.player.addXp(90 + q.target * 15)
    this.audio.levelUp()
    this.ui.banner('OBJETIVO CONCLUÍDO', q.title, 3000)
    this.ui.toast(`Recompensa: <b>+${90 + (q.target || 0) * 15} XP</b>`, 'teal', '✦', 3600)
    if (this.quests.every((x) => x.done)) {
      setTimeout(() => this.ui.banner('LENDA DE FERALIS', 'Você dominou o mundo aberto', 5000), 3600)
    }
  }

  spawnDrop(position, color = 0x9effe0, xp = 30) {
    const group = new THREE.Group()
    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.22, 0),
      new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 1.8, flatShading: true, roughness: 0.25 }),
    )
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this.fx.particleMat.uniforms.uTex.value, color, transparent: true, opacity: 0.7,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }))
    halo.scale.setScalar(2)
    group.add(core, halo)
    const baseY = terrainHeight(position.x, position.z) + 0.8
    group.position.set(position.x, baseY, position.z)
    this.scene.add(group)
    this.drops.push({ group, core, halo, baseY, xp, color, life: 35, phase: Math.random() * 10 })
  }

  updateDrops(dt, time) {
    for (let i = this.drops.length - 1; i >= 0; i--) {
      const d = this.drops[i]
      d.life -= dt
      d.group.position.y = d.baseY + Math.sin(time * 2 + d.phase) * 0.2
      d.core.rotation.y += dt * 2
      d.halo.material.opacity = 0.45 + Math.sin(time * 3 + d.phase) * 0.2
      const dist = d.group.position.distanceTo(this.player.position)
      if (dist < 2.6 && !this.player.dead) {
        this.player.addXp(d.xp)
        this.player.heal(12)
        this.audio.coin()
        this.fx.damageNumber(d.group.position, `+${d.xp} XP`, 'heal')
        this.fx.burst(d.group.position, d.color, 18, { speed: 3, size: 0.45, life: 0.6, gravity: -2 })
        this.ui.toast(`+${d.xp} XP · +12 vida`, 'teal', '✧', 1600)
        this.scene.remove(d.group)
        this.drops.splice(i, 1)
        continue
      }
      if (d.life <= 0) {
        this.scene.remove(d.group)
        this.drops.splice(i, 1)
      }
    }
  }

  updateEssences() {
    for (const e of this.world.essences) {
      if (e.taken) continue
      const dist = e.mesh.position.distanceTo(this.player.position)
      if (dist < 2.8) {
        e.taken = true
        e.mesh.visible = false
        e.halo.visible = false
        this.player.addXp(55)
        this.player.heal(20)
        this.audio.coin()
        this.ui.toast('Essência de Feralis absorvida. <b>+55 XP</b>', 'teal', '◈', 2600)
        this.fx.burst(e.mesh.position, 0x8ff5e3, 26, { speed: 4, size: 0.5, life: 0.9, gravity: -2 })
        this.fx.damageNumber(e.mesh.position, '+55 XP', 'heal')
      }
    }
  }

  /* ── interactions ── */
  updatePrompt() {
    if (!this.started || this.paused || this.over) { this.promptInfo = null; this.ui.setPrompt(null); return }
    let info = null
    const shrine = this.world.nearestShrine(this.player.position.x, this.player.position.z, 6.5)
    if (shrine) {
      if (shrine.activated) {
        if (!this.boss || !this.boss.alive) {
          info = { key: 'F', title: 'Descansar no altar', sub: `${shrine.name} · restaura vida e vigor` }
        }
      } else if (!this.boss || !this.boss.alive) {
        info = { key: 'F', title: 'Invocar Guardião', sub: `${shrine.name} · ${shrine.bossName}` }
      }
    }
    const target = this.lockTarget && this.lockTarget.alive && !this.lockTarget.tamed
      ? this.lockTarget
      : this.creatures.find((c) => c.alive && !c.tamed && c.weakened && c.position.distanceTo(this.player.position) < 14)
    if (target && !target.boss && target.weakened && !this.captureState) {
      info = { key: 'E', title: `Lançar Selo · ${Math.round(target.sealChance * 100)}%`, sub: `${target.name} está enfraquecida` }
    }
    if (this.captureState) info = null
    this.promptInfo = info
    this.ui.setPrompt(info)
  }

  handleInteract() {
    const shrine = this.world.nearestShrine(this.player.position.x, this.player.position.z, 6.5)
    if (!shrine) return
    if (shrine.activated) {
      if (!this.boss || !this.boss.alive) {
        if (this.player.hp >= this.player.maxHp && this.player.stamina >= this.player.maxStamina) {
          this.ui.toast('Você já está em plena forma.', '', '✦', 1800)
          return
        }
        this.player.heal(999)
        this.player.stamina = this.player.maxStamina
        this.audio.sealSuccess()
        this.ui.toast('O altar restaurou sua <b>vida e vigor</b>.', 'teal', '✦', 2600)
        this.fx.shockwave(shrine.position.clone().setY(shrine.position.y + 0.3), shrine.color, 6, 0.7)
        this.fx.burst(this.player.position.clone().setY(this.player.position.y + 1), 0x9effe0, 30, { speed: 3, size: 0.45, life: 0.8, gravity: -2 })
        return
      }
      return
    }
    this.spawnBoss(shrine)
  }

  updateLockTarget(dt) {
    if (this.lockTarget && (!this.lockTarget.alive || this.lockTarget.tamed || this.lockTarget.removed)) this.lockTarget = null
    if (this.lockTarget) {
      const t = this.lockTarget
      this.lockRing.visible = true
      this.lockRing.position.set(t.position.x, t.position.y + 0.06, t.position.z)
      const scale = t.boss ? 1.8 : t.elite ? 1.25 : 1
      this.lockRing.scale.setScalar(scale)
      this.lockRing.rotation.y += dt * 0.8
      this.lockRingInner.rotation.y -= dt * 1.4
      this.lockRing.material.opacity = 0.55 + Math.sin(this.time * 4) * 0.2
      this.lockRing.position.y = t.position.y + (t.hover ? 0.5 : 0.08)
      // camera assists aim slightly
      if (Math.abs(this.input.lookDelta.x) < 1.5 && !this.player.isAttacking) {
        const desired = Math.atan2(t.position.x - this.player.position.x, t.position.z - this.player.position.z)
        this.cameraYaw = dampAngle(this.cameraYaw, desired, 0.9, dt)
      }
      if (t.position.distanceTo(this.player.position) > 42 && !t.boss) {
        this.lockTarget = null
        this.lockRing.visible = false
      }
    } else {
      this.lockRing.visible = false
    }
    if (this.lastTargetTime > 0) {
      this.lastTargetTime -= dt
      if (this.lastTarget && (!this.lastTarget.alive || this.lastTarget.tamed)) {
        this.lastTargetTime = Math.min(this.lastTargetTime, 0.6)
      }
    }
  }

  updateCompanion(dt) {
    if (this.companion) this.companion.update(dt, this.time)
  }

  updateCamera(dt) {
    const camera = this.camera
    const player = this.player
    const look = new THREE.Vector3()
    let desired

    if (!this.started || this.startBlend < 1) {
      // cinematic establishing shot / smooth blend
      if (!this.started) {
        const orbit = Math.PI + Math.sin(this.time * 0.07) * 0.85
        const dist = 13.5
        const pitch = 0.15
        const f = new THREE.Vector3(Math.sin(orbit), 0, Math.cos(orbit))
        const right = new THREE.Vector3(Math.cos(orbit), 0, -Math.sin(orbit))
        desired = player.position.clone()
        desired.y += 1.0 + Math.sin(pitch) * dist
        desired.addScaledVector(f, -Math.cos(pitch) * dist)
        look.copy(player.position)
        look.y += 1.7
        look.addScaledVector(right, -2.4)
        look.y += 0.3
      } else {
        this.startBlend = Math.min(1, this.startBlend + dt * 0.9)
        const forward = new THREE.Vector3(Math.sin(this.cameraYaw), 0, Math.cos(this.cameraYaw))
        const pitch = this.cameraPitch
        desired = player.position.clone()
        desired.y += 1.35 + Math.sin(pitch) * this.cameraDistance
        desired.addScaledVector(forward, -Math.cos(pitch) * this.cameraDistance)
        look.copy(player.position)
        look.y += 1.5
        look.addScaledVector(forward, 1.6)
      }
    } else {
      const forward = new THREE.Vector3(Math.sin(this.cameraYaw), 0, Math.cos(this.cameraYaw))
      const pitch = this.cameraPitch
      desired = player.position.clone()
      desired.y += 1.35 + Math.sin(pitch) * this.cameraDistance
      desired.addScaledVector(forward, -Math.cos(pitch) * this.cameraDistance)
      look.copy(player.position)
      look.y += 1.5
      look.addScaledVector(forward, 1.8)
    }

    const ground = terrainHeight(desired.x, desired.z)
    if (desired.y < ground + 1.0) desired.y = ground + 1.0
    const radius = Math.hypot(desired.x, desired.z)
    if (radius > 214) {
      desired.x *= 214 / radius
      desired.z *= 214 / radius
    }

    const smooth = this.started && this.startBlend >= 1 ? 2.2 : 5.5
    camera.position.x = damp(camera.position.x, desired.x, smooth, dt)
    camera.position.y = damp(camera.position.y, desired.y, smooth, dt)
    camera.position.z = damp(camera.position.z, desired.z, smooth, dt)

    this.cameraLook.x = damp(this.cameraLook.x, look.x, 4.2, dt)
    this.cameraLook.y = damp(this.cameraLook.y, look.y, 4.2, dt)
    this.cameraLook.z = damp(this.cameraLook.z, look.z, 4.2, dt)

    if (this.shakeTime > 0) {
      this.shakeTime -= dt
      const s = this.shakeAmount * Math.max(0, this.shakeTime) * 1.4
      camera.position.x += (Math.random() - 0.5) * s
      camera.position.y += (Math.random() - 0.5) * s
      camera.position.z += (Math.random() - 0.5) * s
      if (this.shakeTime <= 0) this.shakeAmount = 0
    }
    camera.lookAt(this.cameraLook)
  }

  updateSun() {
    const target = this.player.position
    this.sun.position.set(target.x - 52, target.y + 66, target.z - 58)
    this.sun.target.position.set(target.x, target.y, target.z)
    this.sun.target.updateMatrixWorld()
  }

  /* ── main loop ── */
  loop() {
    requestAnimationFrame(this.loop)
    let dt = this.clock.getDelta()
    if (dt > 0.06) dt = 0.06
    this.time += dt * (this.paused ? 0 : 1)
    this.accum += dt
    this.staminaToastCd = Math.max(0, this.staminaToastCd - dt)

    const started = this.started
    const input = this.input
    input.update()

    // camera controls
    if (!this.paused && (started || !started)) {
      const lookSens = this.mobile ? 0.0055 : 0.0042
      if (started && !this.over) {
        this.cameraYaw -= input.lookDelta.x * lookSens
        this.cameraPitch = clamp(this.cameraPitch + input.lookDelta.y * lookSens * 0.8, -0.02, 1.05)
        if (input.zoomDelta) this.cameraDistance = clamp(this.cameraDistance + input.zoomDelta * 0.6, 3.4, 11.5)
      }
    }

    if (input.pausePressed && started) {
      this.togglePause()
    }

    if (started && !this.started) this.start()

    if (started && !this.paused && !this.over) {
      // hitstop
      let gdt = dt
      if (this.hitstop > 0) {
        this.hitstop -= dt
        gdt = dt * 0.08
      }
      this.input.cameraYaw = this.cameraYaw
      const state = this.input.state()

      if (input.lockPressed) this.toggleLock()
      if (input.sealPressed) this.trySeal()
      if (input.companionPressed) this.cycleCompanion()
      if (input.interactPressed) this.handleInteract()
      if (input.rosterPressed > 0 && this.roster[input.rosterPressed - 1]) this.summonCompanion(input.rosterPressed - 1)

      let aimYaw = this.cameraYaw
      if (this.lockTarget && this.lockTarget.alive) {
        aimYaw = Math.atan2(
          this.lockTarget.position.x - this.player.position.x,
          this.lockTarget.position.z - this.player.position.z,
        )
      }
      this.player.setAim(aimYaw)
      this.player.update(gdt, state, this.time, this.camera)
      this.resolvePlayerAttack()
      this.updateSeal(gdt)
      this.updateLockTarget(gdt)
      this.updateCompanion(gdt)

      // creatures
      for (const c of [...this.creatures]) {
        if (!c.removed) c.update(gdt, this.time)
      }

      // boss leash
      if (this.boss && this.boss.alive && this.boss.position.distanceTo(this.player.position) > 80) {
        this.ui.toast('O Guardião retorna ao seu altar…', 'red', '◎', 2600)
        this.boss.remove()
        this.boss = null
        this.removeBossArena()
        for (const s of this.world.shrines) {
          if (s.activated && !this.world.shrines.filter((x) => x.activated).length) s.activated = false
        }
        for (const s of this.world.shrines) {
          const bossQuest = this.quests.find((q) => q.id === 'guardians')
          if (s.activated && this.bossesDefeated < 3 && !bossQuest?.done) {
            // keep only defeated shrines activated
            const defeated = this.bossesDefeated
            void defeated
          }
        }
      }

      this.fx.updateProjectiles(gdt, this.world, this.player, (proj) => {
        this.damagePlayer(proj.damage, proj.group.position)
      })
      this.fx.update(gdt)
      this.updateDrops(gdt, this.time)
      this.updateEssences()
      this.updatePrompt()
      this.updateSpawner(gdt)

      if (this.comboTimer > 0) {
        this.comboTimer -= dt
        if (this.comboTimer <= 0) this.comboDisplay = 0
      }

      if (!this.treeReached) {
        const d = Math.hypot(this.player.position.x, this.player.position.z)
        if (d < 26) {
          this.treeReached = true
          const q = this.quests.find((q) => q.id === 'tree')
          if (q && !q.done) this.completeQuest(q)
          this.ui.banner('ÁRVORE DO CORAÇÃO', 'O vínculo de Feralis pulsa sob seus pés', 3400)
          this.fx.shockwave(this.player.position.clone().setY(this.player.position.y + 0.2), 0x9fffe0, 9, 1.1)
          this.fx.burst(this.player.position.clone().setY(this.player.position.y + 1.4), 0x9fffe0, 40, { speed: 5, size: 0.5, life: 1.2, gravity: -2 })
          this.player.addXp(120)
        }
      }
    } else if (!started) {
      // idle title scene
      this.input.cameraYaw = this.cameraYaw
      const idleInput = {
        move: { x: 0, y: 0 }, cameraYaw: this.cameraYaw, sprint: false,
        attackPressed: false, heavyPressed: false, dodgePressed: false,
        sealPressed: false, lockPressed: false, companionPressed: false, interactPressed: false, pausePressed: false,
      }
      this.player.update(dt, idleInput, this.time, this.camera)
      for (const c of this.creatures) {
        if (!c.removed) c.update(dt, this.time)
      }
      this.fx.update(dt)
      this.fx.updateProjectiles(dt, this.world, this.player, () => {})
      this.updateDrops(dt, this.time)
      this.updatePrompt()
    } else if (this.paused) {
      // freeze but keep gentle camera
    } else if (this.over) {
      this.deathTimer += dt
      this.player.update(dt, {
        move: { x: 0, y: 0 }, cameraYaw: this.cameraYaw, sprint: false,
        attackPressed: false, heavyPressed: false, dodgePressed: false,
        sealPressed: false, lockPressed: false, companionPressed: false, interactPressed: false, pausePressed: false,
      }, this.time, this.camera)
      if (this.deathTimer > 0.9 && !this.ui.dom.death.classList.contains('is-hidden') === false) {
        // overlay shown via callback
      }
    }

    if (!this.paused) {
      this.world.update(dt, this.time, this.player.position)
      const arena = this.bossArena
      if (arena) {
        arena.ring.rotation.y += dt * 0.12
        arena.rune.rotation.y -= dt * 0.2
        arena.ring.material.opacity = 0.22 + Math.sin(this.time * 1.6) * 0.08
      }
    }

    this.updateSun()
    this.updateCamera(dt)
    this.ui.update(dt)
    this.renderer.render(this.scene, this.camera)
    input.endFrame()
  }

  updateSpawner(dt) {
    this.spawnTimer -= dt
    const alive = this.creatures.filter((c) => c.alive && !c.boss && !c.tamed)
    // despawn far
    for (const c of [...this.creatures]) {
      if (c.boss || c.removed) continue
      if (!c.alive) continue
      const d = c.position.distanceTo(this.player.position)
      if (!c.aggro && d > 115) {
        c.remove()
        this.creatures = this.creatures.filter((x) => x !== c)
      }
    }
    if (this.spawnTimer > 0) return
    this.spawnTimer = 2.2
    if (alive.length >= this.maxWild) return
    if (this.boss && this.boss.alive) return
    this.spawnWild()
  }

  requestStart() {
    this.start()
  }

  setupDebug() {
    window.FERALIS = {
      game: this,
      start: () => this.start(),
      spawn: (species, x, z, level = 3, elite = false) => {
        const c = new Creature(this, species, {
          level, elite,
          position: new THREE.Vector3(x, terrainHeight(x, z), z),
        })
        this.creatures.push(c)
        return c
      },
      teleport: (x, z) => {
        this.player.position.set(x, terrainHeight(x, z), z)
        this.player.model.position.copy(this.player.position)
      },
      lock: () => this.toggleLock(),
      attack: () => this.player.tryAttack(false),
      heavy: () => this.player.tryAttack(true),
      seal: () => this.trySeal(),
      heal: () => { this.player.hp = this.player.maxHp },
      boss: (index = 1) => this.spawnBoss(this.world.shrines[index] || this.world.shrines[0]),
      tameRandom: () => {
        if (this.lockTarget) { this.lockTarget.hp = 1; this.onTame(this.lockTarget) }
      },
      state: () => ({
        started: this.started, paused: this.paused, over: this.over,
        player: this.player.position.toArray(), hp: this.player.hp,
        creatures: this.creatures.length, boss: !!this.boss, roster: this.roster.length,
      }),
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.mobile ? 1.4 : 1.75))
      this.input.resize()
    })
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.started && !this.paused) this.togglePause(true)
    })
    window.addEventListener('pointerdown', () => {
      if (!this.audioStarted) {
        this.audioStarted = true
        this.audio.unlock()
      }
    }, { once: true })
    window.addEventListener('keydown', (e) => {
      if (!this.started && (e.code === 'Enter' || e.code === 'NumpadEnter')) this.start()
      if (this.started && this.over && e.code === 'Enter') this.respawn()
    })
    // ballpark audio loop
    setInterval(() => this.audio.update(), 320)
  }
}

const game = new Game()
window.game = game

// expose for screenshot positioning
window.__feralisReady = true
