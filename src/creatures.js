import * as THREE from 'three'
import {
  clamp, damp, dampAngle, rand, randInt, pick, smoothstep, lerp, angleDelta,
  softDiscTexture, glowMat,
} from './engine.js'
import { buildCreatureModel, creatureStyle } from './characters.js'
import { terrainHeight } from './world.js'

export const SPECIES = {
  brasalume: {
    name: 'Brasalume', type: 'BRASA', glyph: 'ᚠ', color: '#ff8a5c', hp: 74, damage: 11, speed: 3.5,
    range: 2.2, aggro: 11, xp: 32, seal: 0.5, special: 'fire', lore: 'Uma raposa de brasa que caça nas cinzas.',
  },
  aquari: {
    name: 'Aquari', type: 'AQUA', glyph: 'ᚹ', color: '#57c7e3', hp: 64, damage: 10, speed: 3.2,
    range: 9, aggro: 12, xp: 30, seal: 0.55, special: 'tide', ranged: true, lore: 'Lontra das marés, dispara gotas afiadas.',
  },
  musgo: {
    name: 'Musgo', type: 'FLORA', glyph: 'ᛃ', color: '#8fce6d', hp: 104, damage: 13, speed: 2.9,
    range: 2.6, aggro: 10, xp: 38, seal: 0.45, special: 'charge', lore: 'Javali coberto de musgo vivo. Investe sem hesitar.',
  },
  pedral: {
    name: 'Pedral', type: 'PEDRA', glyph: 'ᛏ', color: '#d9a05b', hp: 128, damage: 15, speed: 2.4,
    range: 2.9, aggro: 9, xp: 46, seal: 0.4, special: 'slam', lore: 'Golem antigo. Suas rachaduras guardam brasa.',
  },
  zephyro: {
    name: 'Zephyro', type: 'VENTO', glyph: 'ᛋ', color: '#a99bff', hp: 66, damage: 10, speed: 4.3,
    range: 8, aggro: 14, xp: 34, seal: 0.5, special: 'gust', ranged: true, flying: true, lore: 'Falcão de vento que desenha correntes no céu.',
  },
  umbra: {
    name: 'Umbra', type: 'VÉU', glyph: 'ᛟ', color: '#c79cff', hp: 78, damage: 12, speed: 3.7,
    range: 8.5, aggro: 13, xp: 40, seal: 0.4, special: 'blink', ranged: true, floating: true, lore: 'Espectro que se desfaz em névoa violeta.',
  },
}

const REGION_WEIGHTS = {
  meadow: { brasalume: 0.3, aquari: 0.14, musgo: 0.24, pedral: 0.12, zephyro: 0.12, umbra: 0.08 },
  ember: { brasalume: 0.5, pedral: 0.2, zephyro: 0.1, umbra: 0.12, musgo: 0.08 },
  aqua: { aquari: 0.52, musgo: 0.18, zephyro: 0.12, umbra: 0.12, brasalume: 0.06 },
  stone: { pedral: 0.5, musgo: 0.18, zephyro: 0.16, umbra: 0.12, brasalume: 0.04 },
  forest: { musgo: 0.4, umbra: 0.26, zephyro: 0.16, aquari: 0.1, brasalume: 0.08 },
}

export function pickSpecies(regionId) {
  const weights = REGION_WEIGHTS[regionId] || REGION_WEIGHTS.meadow
  let roll = Math.random()
  for (const [id, w] of Object.entries(weights)) {
    roll -= w
    if (roll <= 0) return id
  }
  return 'brasalume'
}

export function speciesInfo(id) {
  return SPECIES[id] || SPECIES.brasalume
}

function healthBar() {
  const group = new THREE.Group()
  const bg = new THREE.Mesh(
    new THREE.PlaneGeometry(1.16, 0.13),
    new THREE.MeshBasicMaterial({ color: 0x08120f, transparent: true, opacity: 0.72, depthTest: false, depthWrite: false }),
  )
  const fillGeo = new THREE.PlaneGeometry(1.08, 0.075)
  fillGeo.translate(0.54, 0, 0)
  const fill = new THREE.Mesh(fillGeo, new THREE.MeshBasicMaterial({ color: 0xff7a5c, depthTest: false, depthWrite: false }))
  fill.position.set(-0.54, 0, 0.002)
  group.add(bg, fill)
  group.renderOrder = 9
  bg.renderOrder = 9
  fill.renderOrder = 10
  group.visible = false
  return { group, fill, bg }
}

export class Creature {
  constructor(game, speciesId, { level = 1, position, boss = false, elite = false, shrine = null } = {}) {
    this.game = game
    this.speciesId = speciesId
    this.info = speciesInfo(speciesId)
    this.style = creatureStyle(speciesId)
    this.boss = boss
    this.elite = elite
    this.shrine = shrine
    this.level = level
    this.maxHp = Math.round(this.info.hp * (1 + (level - 1) * 0.16) * (elite ? 1.7 : 1) * (boss ? 6.2 : 1))
    this.hp = this.maxHp
    this.damage = this.info.damage * (1 + (level - 1) * 0.12) * (elite ? 1.25 : 1) * (boss ? 1.55 : 1)
    this.speed = this.info.speed * (boss ? 0.8 : 1) * (elite ? 0.95 : 1)
    this.xpValue = Math.round(this.info.xp * (1 + (level - 1) * 0.3) * (elite ? 2 : 1) * (boss ? 12 : 1))

    this.container = new THREE.Group()
    this.container.position.copy(position)
    this.spawnPosition = position.clone()
    this.position = this.container.position
    this.yaw = Math.random() * Math.PI * 2
    this.targetYaw = this.yaw
    this.velocity = new THREE.Vector3()
    this.modelData = buildCreatureModel(speciesId, { boss, companion: false })
    this.model = this.modelData.root
    this.parts = this.modelData.parts
    this.mats = this.modelData.mats
    this.container.add(this.model)
    this.modelHeight = this.model.userData.height
    this.baseScale = this.model.scale.x
    this.hover = this.info.flying || this.info.floating

    if (elite && !boss) {
      this.model.scale.multiplyScalar(1.16)
      this.modelHeight *= 1.16
      const aura = new THREE.Sprite(new THREE.SpriteMaterial({
        map: softDiscTexture(64, 'rgba(255,255,255,0.6)', 'rgba(255,255,255,0)'),
        color: this.style.aura, transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending, depthWrite: false,
      }))
      aura.scale.setScalar(3.4)
      aura.position.y = 0.9
      this.container.add(aura)
      this.aura = aura
    }

    this.bar = healthBar()
    this.bar.group.position.y = this.modelHeight + 0.55
    this.container.add(this.bar.group)

    game.scene.add(this.container)

    this.state = 'idle'
    this.stateTime = 0
    this.aggro = boss
    this.attackCd = rand(0.4, 1.4)
    this.specialCd = rand(3.5, 6)
    this.wanderTarget = null
    this.wanderTimer = rand(1, 4)
    this.walkPhase = Math.random() * 10
    this.walkAmount = 0
    this.bobPhase = Math.random() * 10
    this.phase = 1
    this.hitFlash = 0
    this.hitStun = 0
    this.dying = false
    this.deathTimer = 0
    this.tamed = false
    this.enraged = 0
    this.attackAnim = 0
    this.charging = 0
    this.chargeTimer = 0
    this.attackCooldownMod = 1
    this.time = 0
    this.velocitySmooth = 0
    this.name = boss ? this._bossName() : this.info.name
    this.alive = true
    this.alertTimer = 0
    this.stuckTimer = 0

    this.baseEmissives = []
    this.model.traverse((o) => {
      if (o.isMesh && o.material && o.material.emissive) {
        this.baseEmissives.push({
          mat: o.material,
          color: o.material.emissive.clone(),
          intensity: o.material.emissiveIntensity,
        })
      }
    })
    if (boss) this.modelHeight *= 1

    // shrink-in spawn
    this.model.scale.multiplyScalar(0.01)
    this.spawnScale = this.baseScale
    this.spawnIn = 0
    this._applyBarRatio()
    if (boss) this.aggro = true
    this.bossName = boss ? this._bossName() : null
  }

  _bossName() {
    if (this.shrine) return this.shrine.bossName
    return `Guardião ${this.info.name}`
  }

  get hpRatio() { return clamp(this.hp / this.maxHp, 0, 1) }
  get weakened() { return this.hpRatio <= 0.4 && !this.boss && !this.tamed && !this.dying }
  get sealChance() {
    if (this.boss) return 0
    const base = this.info.seal
    return clamp(base + (1 - this.hpRatio) * 0.55 + (this.level - this.game.player.level) * 0.015, 0.15, 0.97)
  }

  _applyBarRatio() {
    const ratio = this.hpRatio
    this.bar.fill.scale.x = Math.max(0.001, ratio)
    this.bar.fill.material.color.setHex(ratio > 0.55 ? 0x9fe07a : ratio > 0.25 ? 0xf0c45c : 0xff6a50)
  }

  setAggro(on) {
    if (this.aggro === on) return
    this.aggro = on
    if (on) {
      this.bar.group.visible = true
      if (!this.boss && this.alertTimer <= 0) {
        this.alertTimer = 1.2
        this.game.audio?.roar?.()
        this.game.ui?.monsterAlert?.(this)
      }
    }
  }

  takeDamage(amount, { crit = false, knock = 0, source = 'player', heavy = false } = {}) {
    if (!this.alive || this.tamed) return 0
    const dmg = Math.round(amount)
    this.hp = Math.max(0, this.hp - dmg)
    this.hitFlash = 0.14
    this.setAggro(true)
    this.bar.group.visible = true
    this._applyBarRatio()
    this.game.fx?.burst(
      new THREE.Vector3(this.position.x, this.position.y + this.modelHeight * 0.6, this.position.z),
      this.style.glow, heavy ? 22 : 12,
      { speed: 6, gravity: 4, size: 0.45, life: 0.55 },
    )
    this.game.fx?.damageNumber(
      new THREE.Vector3(this.position.x, this.position.y + this.modelHeight * 0.5, this.position.z),
      String(dmg), crit ? 'crit' : '',
    )
    this.game.audio?.hit?.(crit || heavy)
    if (knock > 0) {
      const dir = new THREE.Vector3(this.position.x - this.game.player.position.x, 0, this.position.z - this.game.player.position.z).normalize()
      this.velocity.addScaledVector(dir, knock * 2.2)
      this.hitStun = Math.max(this.hitStun, heavy ? 0.42 : 0.22)
    }
    if (this.hp <= 0) this.die(source)
    void angleDelta
    return dmg
  }

  enrage(duration = 8) {
    this.enraged = duration
    this.speed *= 1.25
    this.damage *= 1.3
    this.setAggro(true)
    this.game.fx?.burst(new THREE.Vector3(this.position.x, this.position.y + 1, this.position.z), 0xff5c3c, 30, { speed: 7, size: 0.55, life: 0.8, gravity: 2 })
    this.game.audio?.roar?.()
  }

  die(source = 'player') {
    if (!this.alive) return
    this.alive = false
    this.dying = true
    this.deathTimer = 0
    this.state = 'dead'
    this.hp = 0
    this.aggro = false
    this.velocity.set(0, 0, 0)
    this.bar.group.visible = false
    const center = new THREE.Vector3(this.position.x, this.position.y + this.modelHeight * 0.5, this.position.z)
    this.game.fx?.burst(center, this.style.aura, this.boss ? 80 : 30, { speed: this.boss ? 11 : 7, size: this.boss ? 0.9 : 0.55, life: 1.3, gravity: 2, upward: 1.4 })
    if (this.boss) {
      this.game.fx?.shockwave(center, 0xffd27a, 14, 1.1)
      this.game.audio?.roar?.()
    }
    this.game.onCreatureDefeated?.(this, source)
  }

  tame() {
    if (this.tamed) return
    this.tamed = true
    this.alive = false
    this.aggro = false
    this.state = 'tamed'
    this.bar.group.visible = false
    const center = new THREE.Vector3(this.position.x, this.position.y + this.modelHeight * 0.5, this.position.z)
    this.game.fx?.burst(center, this.style.aura, 40, { speed: 3.5, size: 0.7, life: 1.2, gravity: -1.5, upward: 0.3 })
    this.game.fx?.burst(center, 0xffffff, 24, { speed: 2.5, size: 0.5, life: 1.4, gravity: -0.6 })
    this.tameTimer = 0
    this.game.audio?.sealSuccess?.()
  }

  update(dt, time) {
    this.time = time
    this.stateTime += dt
    this.attackCd = Math.max(0, this.attackCd - dt)
    this.specialCd = Math.max(0, this.specialCd - dt)
    this.hitFlash = Math.max(0, this.hitFlash - dt)
    this.hitStun = Math.max(0, this.hitStun - dt)
    this.enraged = Math.max(0, this.enraged - dt)
    this.alertTimer = Math.max(0, this.alertTimer - dt)
    this.spawnIn = Math.min(1, this.spawnIn + dt * 2.4)

    if (this.hitFlash > 0) {
      const k = this.hitFlash / 0.14
      for (const e of this.baseEmissives) {
        e.mat.emissive.setRGB(1, 1, 1)
        e.mat.emissiveIntensity = e.intensity + k * 1.6
      }
    } else {
      for (const e of this.baseEmissives) {
        e.mat.emissive.copy(e.color)
        e.mat.emissiveIntensity = e.intensity
      }
    }

    if (this.tamed) {
      this.tameTimer += dt
      const k = clamp(this.tameTimer / 0.7, 0, 1)
      this.model.scale.setScalar(this.baseScale * (1 - k))
      this.model.rotation.y += dt * 12 * (1 - k)
      this.model.position.y = k * 1.2
      this.container.position.y = this.position.y + k * 0.5
      if (k >= 1) this.remove()
      return
    }

    if (this.dying) {
      this.deathTimer += dt
      const k = clamp(this.deathTimer / 1.0, 0, 1)
      this.model.rotation.z = k * 0.9
      this.model.position.y = -k * this.modelHeight * 0.6
      this.model.scale.setScalar(this.baseScale * (1 - k * 0.75))
      if (k > 0.55) this.model.visible = false
      if (k >= 1) this.remove()
      return
    }

    // spawn pop
    if (this.spawnIn < 1) {
      const k = this.spawnIn
      const overshoot = 1 + Math.sin(k * Math.PI) * 0.12
      this.model.scale.setScalar(this.baseScale * k * overshoot)
    } else if (this.model.scale.x !== this.baseScale) {
      this.model.scale.setScalar(this.baseScale)
    }

    if (!this.game.started) {
      this.animate(dt, time, 0, false)
      this.container.rotation.y = this.yaw
      return
    }

    if (this.boss) this.updateBoss(dt, time)
    else this.updateWild(dt, time)

    this.container.position.x += this.velocity.x * dt
    this.container.position.z += this.velocity.z * dt
    const ground = terrainHeight(this.container.position.x, this.container.position.z)
    const hover = this.hover ? 1.15 : 0
    this.position.y = damp(this.position.y, ground + hover, 10, dt)

    this.container.rotation.y = dampAngle(this.container.rotation.y, this.targetYaw, 8, dt)
    this.walkAmount = damp(this.walkAmount, Math.min(1, Math.hypot(this.velocity.x, this.velocity.z) / Math.max(1, this.speed)), 6, dt)
    this.animate(dt, time, this.walkAmount, this.aggro)
    this.updateBar(dt)
  }

  updateBar() {
    if (this.boss) return
    const show = this.aggro || this.hp < this.maxHp
    this.bar.group.visible = show && !this.tamed && !this.dying
    if (this.bar.group.visible) {
      this.bar.group.quaternion.copy(this.game.camera.quaternion)
      this.bar.group.position.y = this.modelHeight * (this.hover ? 1.0 : 1) + 0.5
    }
  }

  updateWild(dt, time) {
    const player = this.game.player
    const dx = player.position.x - this.position.x
    const dz = player.position.z - this.position.z
    const dist = Math.hypot(dx, dz)
    const playerAlive = !player.dead

    if (this.enraged > 0) {
      this.attackCooldownMod = 0.65
    } else this.attackCooldownMod = 1

    if (!this.aggro) {
      // wander
      this.wanderTimer -= dt
      if (this.wanderTimer <= 0 || !this.wanderTarget) {
        this.wanderTimer = rand(2.5, 6)
        const a = Math.random() * Math.PI * 2
        const r = rand(2, 9)
        this.wanderTarget = new THREE.Vector3(
          this.spawnPosition.x + Math.cos(a) * r,
          0,
          this.spawnPosition.z + Math.sin(a) * r,
        )
      }
      if (this.wanderTarget) {
        const wx = this.wanderTarget.x - this.position.x
        const wz = this.wanderTarget.z - this.position.z
        const wd = Math.hypot(wx, wz)
        if (wd > 0.6) {
          const sp = this.speed * 0.32
          this.velocity.x = damp(this.velocity.x, (wx / wd) * sp, 4, dt)
          this.velocity.z = damp(this.velocity.z, (wz / wd) * sp, 4, dt)
          this.targetYaw = Math.atan2(wx, wz)
        } else {
          this.velocity.x = damp(this.velocity.x, 0, 6, dt)
          this.velocity.z = damp(this.velocity.z, 0, 6, dt)
        }
      }
      if (playerAlive && dist < this.info.aggro && Math.abs(player.position.y - this.position.y) < 9) {
        this.setAggro(true)
      }
      return
    }

    if (!playerAlive || dist > 55 || this.game.player.dead) {
      this.setAggro(false)
      this.bar.group.visible = false
      this.wanderTarget = this.spawnPosition.clone()
      return
    }

    this.targetYaw = Math.atan2(dx, dz)

    if (this.hitStun > 0 || this.state === 'recover') {
      this.velocity.x = damp(this.velocity.x, 0, 8, dt)
      this.velocity.z = damp(this.velocity.z, 0, 8, dt)
      if (this.stateTime > 0.55 && this.state === 'recover') {
        this.state = 'chase'
        this.stateTime = 0
        this.attackCd = rand(0.7, 1.5) * this.attackCooldownMod
      }
      return
    }

    if (this.charging > 0) {
      this.charging -= dt
      const dir = new THREE.Vector3(Math.sin(this.targetYaw), 0, Math.cos(this.targetYaw))
      this.velocity.x = dir.x * 10
      this.velocity.z = dir.z * 10
      this.game.fx?.spawnParticles(this.position.clone().setY(this.position.y + 0.3), this.style.glow, 3, { speed: 1, gravity: 2, size: 0.45, life: 0.5, upward: 0.5 })
      if (dist < 2.2 && !this.chargeHit) {
        this.chargeHit = true
        this.game.damagePlayer(this.damage * 1.1, this.position)
        this.game.fx?.shockwave(this.position.clone().setY(this.position.y + 0.2), this.style.glow, 3.5, 0.4)
      }
      if (this.charging <= 0) {
        this.state = 'recover'
        this.stateTime = 0
        this.attackCd = 1.6
      }
      return
    }

    if (this.state === 'special') {
      this.velocity.x = damp(this.velocity.x, 0, 8, dt)
      this.velocity.z = damp(this.velocity.z, 0, 8, dt)
      if (this.updateSpecial(dt)) return
    }

    if (this.attackAnim > 0) {
      const total = this.info.ranged ? 0.95 : 0.62
      const elapsed = total - this.attackAnim
      this.attackAnim -= dt
      this.velocity.x = damp(this.velocity.x, 0, 8, dt)
      this.velocity.z = damp(this.velocity.z, 0, 8, dt)
      if (!this.strikeDone && elapsed >= (this.info.ranged ? 0.46 : 0.28)) {
        this.strikeDone = true
        this.performBasicStrike(dist)
      }
      if (this.attackAnim <= 0) {
        this.state = 'recover'
        this.stateTime = 0
        this.attackCd = rand(0.9, 1.8) * this.attackCooldownMod
      }
      return
    }

    // special moves
    if (this.specialCd <= 0 && dist < 18 && this.state !== 'windup') {
      this.castSpecial(dist)
      return
    }

    // movement / attacks
    const wantedRange = this.info.ranged ? this.info.range * 0.85 : this.info.range * 0.85
    if (dist > wantedRange) {
      const sp = this.speed * (this.enraged > 0 ? 1.2 : 1)
      let dirX = dx / dist
      let dirZ = dz / dist
      if (!this.hover) {
        const ahead = 1.4
        if (!this.game.world.canWalk(this.position.x + dirX * ahead, this.position.z + dirZ * ahead)) {
          const side = Math.random() < 0.5 ? 1 : -1
          const nx = -dirZ * side
          const nz = dirX * side
          dirX = nx
          dirZ = nz
        }
      }
      this.velocity.x = damp(this.velocity.x, dirX * sp, 5, dt)
      this.velocity.z = damp(this.velocity.z, dirZ * sp, 5, dt)
      this.stuckTimer += dt
      if (this.stuckTimer > 1.2) {
        this.stuckTimer = 0
        this.wanderTimer = 0
      }
    } else {
      this.velocity.x = damp(this.velocity.x, 0, 8, dt)
      this.velocity.z = damp(this.velocity.z, 0, 8, dt)
      if (this.attackCd <= 0 && this.hitStun <= 0) {
        this.startAttack(dist)
      }
    }
  }

  startAttack(dist) {
    this.state = 'windup'
    this.stateTime = 0
    this.attackAnim = this.info.ranged ? 0.95 : 0.62
    this.windupKind = 'basic'
    this.attackCd = 99 // held until anim ends
    this.strikeDone = false
    this.game.audio?.swing?.(false)
    if (this.info.ranged) {
      this.game.fx?.burst(new THREE.Vector3(this.position.x, this.position.y + this.modelHeight * 0.6, this.position.z), this.style.glow, 8, { speed: 2, size: 0.35, life: 0.4, gravity: 0 })
    }
    void dist
  }

  performBasicStrike(dist) {
    const player = this.game.player
    const origin = new THREE.Vector3(this.position.x, this.position.y + this.modelHeight * 0.55, this.position.z)
    const dir = new THREE.Vector3(
      player.position.x - this.position.x,
      0,
      player.position.z - this.position.z,
    ).normalize()
    if (this.info.ranged) {
      const target = player.position.clone()
      target.y += 1.0
      this.game.fx?.spawnProjectile({
        position: origin.clone(),
        target,
        speed: 13,
        damage: this.damage * 0.8,
        color: this.style.glow,
        radius: 0.34,
      })
      this.game.audio?.water?.()
    } else {
      const d = Math.hypot(player.position.x - this.position.x, player.position.z - this.position.z)
      if (d < this.info.range * 1.8 && Math.abs(player.position.y - this.position.y) < 4) {
        this.game.damagePlayer(this.damage, this.position)
      }
      this.game.fx?.spawnDirectional(
        origin.clone().addScaledVector(dir, 0.6),
        dir, this.style.glow, 10, { speed: 6, life: 0.4, size: 0.4 },
      )
    }
    void dist
  }

  castSpecial(dist) {
    const special = this.info.special
    this.state = 'special'
    this.stateTime = 0
    this.attackAnim = 0
    this.specialCd = rand(6, 9.5)
    this.attackCd = 99
    this.specialTimer = 0.8
    this.specialKind = special
    this.chargeHit = false
    if (special === 'charge') {
      this.charging = 0.6
      this.attackCd = 99
      this.attackAnim = 0
      this.state = 'charge'
      this.game.fx?.burst(new THREE.Vector3(this.position.x, this.position.y + 0.4, this.position.z), this.style.glow, 16, { speed: 4, size: 0.4, life: 0.5, gravity: 2 })
      this.game.audio?.roar?.()
    } else if (special === 'blink' || special === 'slam') {
      this.game.audio?.roar?.()
      this.game.ui?.monsterTelegraph?.(this, special)
    }
    void dist
  }

  blink() {
    const player = this.game.player
    const angle = Math.random() * Math.PI * 2
    const radius = rand(6, 9)
    const x = player.position.x + Math.cos(angle) * radius
    const z = player.position.z + Math.sin(angle) * radius
    if (!this.game.world.canWalk(x, z)) return
    const ghostPos = this.position.clone().setY(this.position.y + 1)
    this.game.fx?.burst(ghostPos, this.style.aura, 22, { speed: 3, size: 0.5, life: 0.7, gravity: -1 })
    this.container.position.set(x, terrainHeight(x, z) + (this.hover ? 1.15 : 0), z)
    this.position.copy(this.container.position)
    this.game.fx?.burst(ghostPos, 0xffffff, 16, { speed: 2, size: 0.4, life: 0.6 })
    this.game.audio?.spirit?.()
    this.targetYaw = Math.atan2(player.position.x - x, player.position.z - z)
  }

  updateSpecial(dt) {
    if (this.state !== 'special') return false
    this.specialTimer -= dt
    if (this.specialTimer > 0) return true
    const player = this.game.player
    const dir = new THREE.Vector3(player.position.x - this.position.x, 0, player.position.z - this.position.z).normalize()
    const origin = new THREE.Vector3(this.position.x, this.position.y + this.modelHeight * 0.55, this.position.z)
    const target = player.position.clone().setY(player.position.y + 1)
    const kind = this.specialKind
    if (kind === 'fire') {
      for (let i = -1; i <= 1; i++) {
        const a = Math.atan2(dir.x, dir.z) + i * 0.24
        const t = new THREE.Vector3(Math.sin(a) * 12 + origin.x, origin.y, Math.cos(a) * 12 + origin.z)
        this.game.fx?.spawnProjectile({ position: origin.clone(), target: t, speed: 11, damage: this.damage * 0.85, color: 0xff8a4c, radius: 0.36 })
      }
      this.game.audio?.fire?.()
    } else if (kind === 'tide') {
      for (let i = 0; i < 3; i++) {
        const a = Math.atan2(dir.x, dir.z) + (i - 1) * 0.2
        const t = new THREE.Vector3(Math.sin(a) * 12 + origin.x, target.y, Math.cos(a) * 12 + origin.z)
        this.game.fx?.spawnProjectile({ position: origin.clone(), target: t, speed: 14, damage: this.damage * 0.7, color: 0x63dfe6, radius: 0.3 })
      }
      this.game.audio?.water?.()
    } else if (kind === 'slam') {
      this.slam()
    } else if (kind === 'gust') {
      for (let i = -1; i <= 1; i++) {
        const t = target.clone()
        t.x += i * 3
        this.game.fx?.spawnProjectile({ position: origin.clone(), target: t, speed: 16, damage: this.damage * 0.65, color: 0xb9a8ff, radius: 0.28 })
      }
      this.game.audio?.spirit?.()
    } else if (kind === 'blink') {
      this.blink()
      const newOrigin = new THREE.Vector3(this.position.x, this.position.y + this.modelHeight * 0.55, this.position.z)
      const newTarget = player.position.clone().setY(player.position.y + 1)
      for (let i = 0; i < 3; i++) {
        this.game.fx?.spawnProjectile({
          position: newOrigin.clone(), target: newTarget.clone(), speed: 10 + i,
          damage: this.damage * 0.65, color: 0xc79cff, radius: 0.36, homing: 1.1,
        })
      }
      this.game.audio?.spirit?.()
    }
    this.state = 'recover'
    this.stateTime = 0
    this.attackCd = rand(1.2, 2.2)
    return true
  }

  slam() {
    const pos = this.position.clone().setY(this.position.y + 0.2)
    this.game.fx?.shockwave(pos, this.style.glow, 7, 0.6)
    this.game.fx?.burst(pos, 0xffb072, 26, { speed: 7, size: 0.55, life: 0.8, gravity: 8, upward: 0.8 })
    this.game.audio?.bossSlam?.()
    if (this.game.player.position.distanceTo(this.position) < 7) {
      this.game.damagePlayer(this.damage * 1.2, this.position)
    }
    this.game.shake(0.5, 0.3)
  }

  updateBoss(dt, time) {
    const player = this.game.player
    const dx = player.position.x - this.position.x
    const dz = player.position.z - this.position.z
    const dist = Math.hypot(dx, dz)
    this.targetYaw = Math.atan2(dx, dz)
    this.attackCooldownMod = this.phase === 2 ? 0.6 : 1

    if (this.phase === 1 && this.hpRatio <= 0.5) {
      this.phase = 2
      this.game.audio?.roar?.()
      this.game.ui?.bossPhase?.(this)
      this.game.fx?.shockwave(this.position.clone().setY(this.position.y + 0.3), 0xff6a3c, 12, 0.8)
      this.game.fx?.burst(this.position.clone().setY(this.position.y + 1.5), 0xff7a3c, 40, { speed: 8, size: 0.7, life: 1.1, gravity: 1 })
      this.game.shake(0.7, 0.4)
      if (this.parts.bossAura) this.parts.bossAura.material.opacity = 0.4
    }

    if (this.charging > 0) {
      this.charging -= dt
      const dir = new THREE.Vector3(Math.sin(this.targetYaw), 0, Math.cos(this.targetYaw))
      this.velocity.x = dir.x * 15
      this.velocity.z = dir.z * 15
      this.game.fx?.spawnParticles(this.position.clone().setY(this.position.y + 1), this.style.glow, 4, { speed: 2, gravity: 2, size: 0.7, life: 0.6, upward: 0.6 })
      if (dist < 4.2 && !this.chargeHit) {
        this.chargeHit = true
        this.game.damagePlayer(this.damage * 1.35, this.position)
        this.game.shake(0.45, 0.2)
      }
      if (this.charging <= 0) {
        this.state = 'recover'
        this.attackCd = 1.2 * this.attackCooldownMod
      }
      return
    }

    if (this.attackAnim > 0) {
      this.attackAnim -= dt
      this.velocity.x = damp(this.velocity.x, 0, 8, dt)
      this.velocity.z = damp(this.velocity.z, 0, 8, dt)
      if (this.attackAnim <= 0) {
        this.state = 'recover'
        this.attackCd = rand(0.7, 1.4) * this.attackCooldownMod
      }
      return
    }

    if (this.state === 'special') {
      if (this.updateSpecial(dt)) return
    }

    if (dist > 7) {
      const sp = this.speed * (this.phase === 2 ? 1.3 : 1)
      let dirX = dx / dist
      let dirZ = dz / dist
      if (!this.game.world.canWalk(this.position.x + dirX * 2, this.position.z + dirZ * 2)) {
        dirX = -dirZ
        dirZ = dirX
      }
      this.velocity.x = damp(this.velocity.x, dirX * sp, 4, dt)
      this.velocity.z = damp(this.velocity.z, dirZ * sp, 4, dt)
      if (this.specialCd <= 0) {
        this.specialKind = this.shrine?.species === 'umbra' ? 'blink' : this.shrine?.species === 'brasalume' ? 'fire' : 'slam'
        this.state = 'special'
        this.stateTime = 0
        this.specialTimer = 0.75
        this.attackAnim = 0
        this.specialCd = rand(5.5, 8) * this.attackCooldownMod
        this.game.audio?.roar?.()
      }
    } else {
      this.velocity.x = damp(this.velocity.x, 0, 8, dt)
      this.velocity.z = damp(this.velocity.z, 0, 8, dt)
      if (this.attackCd <= 0) {
        this.attackCd = 99
        this.attackAnim = 1.15
        this.strikeDone = false
        this.state = 'windup'
        this.game.audio?.roar?.()
        this.game.ui?.bossTelegraph?.(this)
      }
    }

    // boss slam trigger is resolved in animate/update hit timing
    if (this.state === 'windup' && !this.strikeDone) {
      const elapsed = 1.15 - this.attackAnim
      if (elapsed > 0.55) {
        this.strikeDone = true
        this.slam()
      }
    }
    void time
  }

  animate(dt, time, walkAmount, aggro) {
    const p = this.parts
    const t = time + this.bobPhase
    const speedScale = 1 + walkAmount * 1.2
    this.walkPhase += dt * (5 + walkAmount * 7)
    const swing = Math.sin(this.walkPhase) * walkAmount
    const breathe = Math.sin(t * 1.8) * (aggro ? 0.02 : 0.04)
    const hovering = this.hover
    const yBob = hovering ? Math.sin(t * 2) * 0.12 + 0.05 : breathe
    let modelForward = 0

    if (this.attackAnim > 0) {
      const total = this.windupKind === 'basic' ? (this.info.ranged ? 0.95 : 0.62) : 0.9
      const k = 1 - this.attackAnim / total
      const lunge = Math.sin(clamp(k, 0, 1) * Math.PI)
      modelForward = lunge * 0.55
      if (p.body) p.body.rotation.x = -0.25 * lunge
      if (p.head) p.head.rotation.x = 0.3 * lunge
    } else {
      if (p.body) p.body.rotation.x = damp(p.body.rotation.x, 0, 8, dt)
      if (p.head) p.head.rotation.x = damp(p.head.rotation.x, 0, 8, dt)
    }

    if (p.legs) {
      p.legs.forEach((leg, i) => {
        const phase = i % 2 === 0 ? 0 : Math.PI
        const dir = i < 2 ? 1 : -1
        leg.rotation.x = damp(leg.rotation.x, Math.sin(this.walkPhase + phase) * 0.6 * walkAmount * dir + (aggro ? 0.05 : 0), 12, dt)
      })
    }
    if (p.arms && p.arms.length) {
      p.arms.forEach((arm, i) => {
        const base = (i === 0 ? -1 : 1) * 0.18
        arm.rotation.z = damp(arm.rotation.z, base + Math.sin(t * 1.6 + i) * 0.04, 6, dt)
        arm.rotation.x = damp(arm.rotation.x, -walkAmount * 0.3 + (this.attackAnim > 0 ? 0.7 : 0), 8, dt)
      })
    }
    if (p.tail) {
      p.tail.rotation.z = Math.sin(t * 2.4) * 0.2 + swing * 0.15
      p.tail.rotation.x = -0.5 + Math.sin(t * 1.7) * 0.08
    }
    if (p.wings) {
      const flap = hovering || this.hover ? Math.sin(t * 8) * 0.45 : Math.sin(t * 2.4) * 0.12
      p.wings.forEach((w, i) => {
        w.rotation.z = (i === 0 ? 1 : -1) * (0.12 + flap)
        w.rotation.x = Math.sin(t * 2) * 0.06
      })
    }
    if (p.wisps) {
      p.wisps.forEach((w, i) => {
        w.position.y = -0.45 - (i % 2) * 0.2 + Math.sin(t * 1.6 + i) * 0.1
        w.rotation.y += dt * (0.5 + i * 0.1)
      })
    }
    if (p.orbs) {
      p.orbs.forEach((o, i) => {
        const a = t * (0.9 + i * 0.3) + o.phase
        o.orb.position.set(Math.cos(a) * 0.65, 0.45 + Math.sin(t * 1.4 + i) * 0.15, Math.sin(a) * 0.4 + 0.1)
        o.glow.position.copy(o.orb.position)
        o.glow.material.opacity = 0.5 + Math.sin(t * 3 + i) * 0.2
      })
    }
    if (p.flame) {
      const flicker = 0.9 + Math.sin(t * 9) * 0.15 + Math.sin(t * 14.3) * 0.08
      p.flame.scale.set(flicker, flicker * 1.1, flicker)
      if (p.flameMat) p.flameMat.opacity = 0.7 + Math.sin(t * 7) * 0.2
    }
    if (p.droplet) p.droplet.material.opacity = 0.35 + Math.sin(t * 2.2) * 0.15
    if (p.gustGlow) p.gustGlow.material.opacity = 0.25 + Math.sin(t * 1.8) * 0.12
    if (p.aura) p.aura.material.opacity = 0.2 + Math.sin(t * 1.4) * 0.08
    if (p.heartGlow) p.heartGlow.material.opacity = 0.45 + Math.sin(t * 3.2 + 1) * 0.2
    if (p.bossAura) p.bossAura.material.opacity = (this.phase === 2 ? 0.35 : 0.22) + Math.sin(t * 1.2) * 0.06
    if (p.ripple0) {
      for (let i = 0; i < 3; i++) {
        const r = p[`ripple${i}`]
        if (!r) continue
        r.position.y = 1.14 + Math.sin(t * 2 + r.userData.float) * 0.09
      }
    }
    for (let i = 0; i < 4; i++) {
      const leaf = p[`leaf${i}`]
      if (leaf) leaf.rotation.z = t * (0.4 + i * 0.1) + i
    }

    if (this.enraged > 0) {
      const pulse = 0.5 + Math.sin(t * 8) * 0.3
      this.model.traverse((o) => {
        if (o.isMesh && o.material && o.material.emissive && o.material !== this.mats.eyeMat) {
          o.material.emissiveIntensity = Math.max(o.material.emissiveIntensity, pulse * 0.4)
        }
      })
    }

    this.model.position.z = damp(this.model.position.z, modelForward, 12, dt)
    this.model.position.y = damp(this.model.position.y, yBob, 8, dt)
    if (hovering) this.model.position.y += 0
    if (this.state === 'windup') {
      this.model.rotation.x = damp(this.model.rotation.x, -0.14, 8, dt)
      this.model.rotation.z = damp(this.model.rotation.z, Math.sin(t * 20) * 0.008, 10, dt)
    } else {
      this.model.rotation.x = damp(this.model.rotation.x, 0, 8, dt)
      this.model.rotation.z = damp(this.model.rotation.z, Math.sin(t * 1.2) * 0.01, 4, dt)
    }
    void speedScale
  }

  updateBarRotation(camera) {
    if (this.bar.group.visible) this.bar.group.quaternion.copy(camera.quaternion)
  }

  remove() {
    if (this.removed) return
    this.removed = true
    this.game.scene.remove(this.container)
    this.container.traverse((o) => {
      if (o.isMesh) {
        o.geometry?.dispose?.()
        if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose?.())
        else o.material?.dispose?.()
      }
      if (o.isSprite) {
        o.material?.dispose?.()
      }
    })
    this.game.removeCreature?.(this)
  }
}

/* ══════════════════════════ companion ══════════════════════════ */

export class Companion {
  constructor(game, speciesId, level = 1) {
    this.game = game
    this.speciesId = speciesId
    this.info = speciesInfo(speciesId)
    this.style = creatureStyle(speciesId)
    this.level = level
    this.maxBond = 100
    this.bond = 0
    this.container = new THREE.Group()
    this.modelData = buildCreatureModel(speciesId, { companion: true })
    this.model = this.modelData.root
    this.parts = this.modelData.parts
    this.container.add(this.model)
    this.modelHeight = this.model.userData.height
    this.scaleBase = this.model.scale.x
    this.model.scale.setScalar(0.01)
    this.spawnT = 0
    game.scene.add(this.container)
    this.offset = new THREE.Vector3(-2.4, 0, -2.2)
    this.velocity = new THREE.Vector3()
    this.position = this.container.position
    this.position.copy(game.player.position)
    this.yaw = 0
    this.attackCd = 1
    this.target = null
    this.walkPhase = 0
    this.bobPhase = Math.random() * 5
    this.hover = this.info.flying || this.info.floating
    this.aura = new THREE.Sprite(new THREE.SpriteMaterial({
      map: softDiscTexture(64, 'rgba(255,255,255,0.6)', 'rgba(255,255,255,0)'),
      color: this.style.aura, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false,
    }))
    this.aura.scale.setScalar(2.8)
    this.aura.position.y = 0.8
    this.container.add(this.aura)
    this.container.position.y = game.player.position.y
    this.removed = false
  }

  update(dt, time) {
    if (this.removed) return
    const player = this.game.player
    this.spawnT = Math.min(1, this.spawnT + dt * 3)
    const pop = 0.01 + (1 - 0.01) * (1 - Math.pow(1 - this.spawnT, 3))
    this.model.scale.setScalar(this.scaleBase * pop)
    this.attackCd = Math.max(0, this.attackCd - dt)
    this.bond = Math.min(this.maxBond, this.bond + dt * 2.6)

    const enemies = this.game.creatures.filter((c) => c.alive && !c.tamed && c.aggro && !c.boss)
    let target = null
    let bestD = 15
    for (const e of enemies) {
      const d = e.position.distanceTo(player.position)
      if (d < bestD) { bestD = d; target = e }
    }
    if (this.game.boss?.alive && this.game.boss.aggro && this.game.boss.position.distanceTo(player.position) < 18) {
      target = this.game.boss
    }
    this.target = target

    let desired
    if (target && this.attackCd > 0) {
      desired = target.position.clone().add(new THREE.Vector3(Math.sin(time * 0.8) * 2.4, 0, Math.cos(time * 0.8) * 2.4))
    } else if (target) {
      desired = target.position.clone()
    } else {
      const forward = new THREE.Vector3(Math.sin(player.yaw), 0, Math.cos(player.yaw))
      const right = new THREE.Vector3(Math.cos(player.yaw), 0, -Math.sin(player.yaw))
      desired = player.position.clone().addScaledVector(forward, -2.2).addScaledVector(right, -1.6)
    }
    const dx = desired.x - this.position.x
    const dz = desired.z - this.position.z
    const dist = Math.hypot(dx, dz)
    const speed = target ? 7.5 : 9
    if (dist > 0.7) {
      const dirX = dx / dist
      const dirZ = dz / dist
      this.velocity.x = damp(this.velocity.x, dirX * speed, 6, dt)
      this.velocity.z = damp(this.velocity.z, dirZ * speed, 6, dt)
      this.yaw = dampAngle(this.yaw, Math.atan2(dirX, dirZ), 8, dt)
    } else {
      this.velocity.x = damp(this.velocity.x, 0, 8, dt)
      this.velocity.z = damp(this.velocity.z, 0, 8, dt)
      if (target) this.yaw = dampAngle(this.yaw, Math.atan2(target.position.x - this.position.x, target.position.z - this.position.z), 8, dt)
      else this.yaw = dampAngle(this.yaw, player.yaw, 4, dt)
    }
    this.position.x += this.velocity.x * dt
    this.position.z += this.velocity.z * dt
    const ground = terrainHeight(this.position.x, this.position.z)
    this.position.y = damp(this.position.y, ground + (this.hover ? 1.1 : 0), 12, dt)
    this.container.rotation.y = this.yaw

    // lunge attack
    if (target && this.attackCd <= 0 && dist < 3.4) {
      this.attackCd = 1.35
      const dmg = (6 + this.level * 2.4) * (this.bond >= this.maxBond ? 1.8 : 1)
      target.takeDamage(dmg, { crit: this.bond >= this.maxBond, knock: 1.2, source: 'companion' })
      this.game.fx?.slash(target.position.clone().setY(target.position.y + 0.8), this.yaw, { color: this.style.glow, scale: 0.7 })
      this.game.fx?.burst(target.position.clone().setY(target.position.y + 0.7), this.style.glow, 12, { speed: 5, size: 0.4, life: 0.5 })
      this.game.audio?.hit?.(false)
      if (this.bond >= this.maxBond) {
        this.bond = 0
        this.game.fx?.shockwave(target.position.clone().setY(target.position.y + 0.1), this.style.glow, 4, 0.5)
        this.game.ui?.toast?.(`<b>${this.info.name}</b> liberou Fúria de Vínculo!`, 'teal', '✧')
      }
    }

    // animate
    const walk = clamp(Math.hypot(this.velocity.x, this.velocity.z) / 6, 0, 1)
    this.walkPhase += dt * (4 + walk * 7)
    const swing = Math.sin(this.walkPhase) * walk
    const t = time + this.bobPhase
    if (this.parts.legs) {
      this.parts.legs.forEach((leg, i) => {
        leg.rotation.x = damp(leg.rotation.x, swing * 0.5 * (i < 2 ? 1 : -1), 10, dt)
      })
    }
    if (this.parts.wings) {
      this.parts.wings.forEach((w, i) => {
        w.rotation.z = (i === 0 ? 1 : -1) * (0.2 + Math.sin(t * 9) * 0.5)
      })
    }
    if (this.parts.tail) this.parts.tail.rotation.z = Math.sin(t * 3) * 0.25
    if (this.parts.aura) this.parts.aura.material.opacity = 0.2 + Math.sin(t * 2) * 0.07
    this.aura.material.opacity = (this.bond >= this.maxBond ? 0.55 : 0.28) + Math.sin(t * 2.4) * 0.08
    this.aura.scale.setScalar(this.bond >= this.maxBond ? 4 : 2.8)
    this.model.position.y = Math.sin(t * 2.2) * 0.06
    if (this.parts.wisps) {
      this.parts.wisps.forEach((w, i) => {
        w.position.y = -0.45 + Math.sin(t * 1.6 + i) * 0.1
      })
    }
    if (this.parts.flame) {
      const f = 0.9 + Math.sin(t * 8) * 0.15
      this.parts.flame.scale.set(f, f, f)
    }
  }

  dismiss() {
    this.removed = true
    this.game.fx?.burst(this.position.clone().setY(this.position.y + 0.8), this.style.glow, 20, { speed: 3, size: 0.5, life: 0.8, gravity: -2 })
    this.game.scene.remove(this.container)
    this.container.traverse((o) => {
      if (o.isMesh) {
        o.geometry?.dispose?.()
        o.material?.dispose?.()
      }
      if (o.isSprite) o.material?.dispose?.()
    })
  }
}
