import * as THREE from 'three'
import { clamp, damp, dampAngle, lerp, easing } from './engine.js'
import { buildPlayer } from './characters.js'
import { terrainHeight, terrainSlope } from './world.js'

const ATTACKS = [
  { duration: 0.46, hitStart: 0.12, hitEnd: 0.22, damage: 12, stamina: 7, range: 3.4, arc: 1.15, knock: 2.0, lunge: 2.2 },
  { duration: 0.48, hitStart: 0.13, hitEnd: 0.23, damage: 14, stamina: 7, range: 3.5, arc: 1.2, knock: 2.2, lunge: 2.0 },
  { duration: 0.62, hitStart: 0.19, hitEnd: 0.29, damage: 26, stamina: 12, range: 3.9, arc: 1.5, knock: 4.2, lunge: 3.2 },
]
const HEAVY = { duration: 0.82, hitStart: 0.3, hitEnd: 0.42, damage: 42, stamina: 23, range: 4.3, arc: 1.7, knock: 6.5, lunge: 3.4 }
const DODGE_TIME = 0.42

export class Player {
  constructor(scene, world, audio) {
    this.world = world
    this.audio = audio
    this.model = buildPlayer()
    this.model.rotation.order = 'YXZ'
    scene.add(this.model)

    this.position = new THREE.Vector3(0, 0, 34)
    this.position.y = terrainHeight(0, 34)
    this.spawnPoint = this.position.clone()
    this.velocity = new THREE.Vector3()
    this.yaw = Math.PI
    this.modelYaw = Math.PI
    this.aimYaw = Math.PI

    this.level = 1
    this.xp = 0
    this.xpToNext = 90
    this.maxHp = 120
    this.hp = 120
    this.maxStamina = 100
    this.stamina = 100
    this.staminaDelay = 0
    this.walkPhase = 0
    this.idleTime = 0
    this.sprinting = false
    this.moving = false
    this.dead = false

    this.attack = null
    this.attackCooldown = 0
    this.comboStep = 0
    this.comboTimer = 0
    this.comboWindow = 0
    this.attackBuffer = 0
    this.heavyBuffer = 0
    this.dodgeBuffer = 0
    this.dodgeTimer = 0
    this.dodgeCooldown = 0
    this.invuln = 0
    this.hitstun = 0
    this.lastHurt = 99
    this.time = 0

    this.events = {
      onSlash: null, onHeavy: null, onDodge: null, onHurt: null,
      onDeath: null, onLevelUp: null, onStep: null, onStaminaFail: null,
      onCombo: null,
    }
    this.style = { trailColor: 0x9ffff0 }
    this.model.position.copy(this.position)
    this.model.rotation.y = this.yaw
  }

  get isAttacking() { return !!this.attack }
  get isDodging() { return this.dodgeTimer > 0 }
  get isBusy() { return this.isAttacking || this.isDodging || this.hitstun > 0 }
  get forward() { return new THREE.Vector3(Math.sin(this.yaw), 0, Math.cos(this.yaw)) }

  setAim(yaw) { this.aimYaw = yaw }

  tryAttack(heavy = false) {
    if (this.dead || this.isDodging || this.hitstun > 0) return
    if (heavy) this.heavyBuffer = 0.24
    else this.attackBuffer = 0.26
  }

  tryDodge() {
    if (this.dead || this.hitstun > 0) return
    this.dodgeBuffer = 0.22
  }

  startDodge(moveDir) {
    if (this.stamina < 20) {
      this.events.onStaminaFail?.('Vigor insuficiente para esquivar')
      return
    }
    this.stamina -= 20
    this.staminaDelay = 0.7
    this.dodgeTimer = DODGE_TIME
    this.dodgeCooldown = 0.24
    this.invuln = 0.34
    this.attack = null
    const dir = moveDir.lengthSq() > 0.05 ? moveDir.clone().normalize() : this.forward
    this.dodgeDir = dir
    this.yaw = Math.atan2(dir.x, dir.z)
    this.events.onDodge?.(this.position.clone(), this.yaw)
  }

  startAttack(heavy) {
    const cfg = heavy ? HEAVY : ATTACKS[this.comboStep % ATTACKS.length]
    if (this.stamina < cfg.stamina * 0.5) {
      this.events.onStaminaFail?.('Vigor insuficiente')
      return
    }
    this.stamina = Math.max(0, this.stamina - cfg.stamina)
    this.staminaDelay = 0.8
    this.attack = {
      heavy,
      stage: heavy ? 3 : this.comboStep,
      time: 0,
      cfg,
      hitDone: false,
      buffered: false,
    }
    if (!heavy) {
      this.events.onCombo?.(this.comboStep + 1)
    }
    const lungeDir = new THREE.Vector3(Math.sin(this.aimYaw), 0, Math.cos(this.aimYaw))
    this.yaw = this.aimYaw
    this.velocity.add(lungeDir.multiplyScalar(cfg.lunge))
  }

  addXp(amount) {
    this.xp += amount
    let leveled = false
    while (this.xp >= this.xpToNext) {
      this.xp -= this.xpToNext
      this.level++
      this.xpToNext = Math.round(90 + this.level * 62)
      this.maxHp = 120 + (this.level - 1) * 16
      this.maxStamina = 100 + (this.level - 1) * 3
      this.hp = this.maxHp
      this.stamina = this.maxStamina
      leveled = true
    }
    if (leveled) this.events.onLevelUp?.(this.level)
  }

  heal(amount) {
    const before = this.hp
    this.hp = Math.min(this.maxHp, this.hp + amount)
    return this.hp - before
  }

  takeDamage(amount, sourcePos) {
    if (this.dead || this.invuln > 0) return false
    const dmg = Math.max(1, amount * (1 - Math.min(0.32, (this.level - 1) * 0.035)))
    this.hp = Math.max(0, this.hp - dmg)
    this.invuln = 0.62
    this.hitstun = 0.26
    this.attack = null
    this.lastHurt = 0
    this.stamina = Math.max(0, this.stamina - 8)
    this.events.onHurt?.(dmg, sourcePos)
    if (this.hp <= 0) {
      this.dead = true
      this.events.onDeath?.()
    }
    return true
  }

  respawn() {
    this.dead = false
    this.hp = this.maxHp
    this.stamina = this.maxStamina
    this.position.copy(this.spawnPoint)
    this.position.y = terrainHeight(this.position.x, this.position.z)
    this.velocity.set(0, 0, 0)
    this.attack = null
    this.dodgeTimer = 0
    this.invuln = 2.0
    this.model.position.copy(this.position)
  }

  consumeHit() {
    if (!this.attack || this.attack.hitDone) return null
    const { time, cfg, heavy, stage } = this.attack
    if (time >= cfg.hitStart && time <= cfg.hitEnd) {
      this.attack.hitDone = true
      return {
        position: this.position.clone(),
        yaw: this.yaw,
        range: cfg.range,
        arc: cfg.arc,
        damage: cfg.damage * (1 + (this.level - 1) * 0.085),
        knock: cfg.knock,
        heavy,
        stage,
      }
    }
    return null
  }

  update(dt, input, time, camera) {
    this.time = time
    if (this.dead) {
      this.updateModel(dt, 0, camera, false)
      this.model.position.copy(this.position)
      return
    }

    this.attackCooldown = Math.max(0, this.attackCooldown - dt)
    this.dodgeCooldown = Math.max(0, this.dodgeCooldown - dt)
    this.invuln = Math.max(0, this.invuln - dt)
    this.hitstun = Math.max(0, this.hitstun - dt)
    this.attackBuffer = Math.max(0, this.attackBuffer - dt)
    this.heavyBuffer = Math.max(0, this.heavyBuffer - dt)
    this.dodgeBuffer = Math.max(0, this.dodgeBuffer - dt)
    this.comboWindow = Math.max(0, this.comboWindow - dt)
    this.lastHurt += dt
    if (!this.attack && this.comboWindow <= 0) this.comboStep = 0

    // stamina
    this.staminaDelay = Math.max(0, this.staminaDelay - dt)
    if (this.staminaDelay <= 0) {
      const regen = this.isDodging ? 0 : (this.sprinting ? 0 : 19)
      this.stamina = Math.min(this.maxStamina, this.stamina + regen * dt)
    }

    // out-of-combat regen
    if (this.lastHurt > 7 && this.hp < this.maxHp) {
      this.hp = Math.min(this.maxHp, this.hp + 1.6 * dt)
    }

    const move = input.move || { x: 0, y: 0 }
    const moveDir = new THREE.Vector3()
    if (Math.abs(move.x) > 0.01 || Math.abs(move.y) > 0.01) {
      const forward = new THREE.Vector3(Math.sin(input.cameraYaw), 0, Math.cos(input.cameraYaw))
      const right = new THREE.Vector3(Math.cos(input.cameraYaw), 0, -Math.sin(input.cameraYaw))
      moveDir.copy(forward).multiplyScalar(move.y).add(right.multiplyScalar(move.x))
      if (moveDir.lengthSq() > 1) moveDir.normalize()
      else if (moveDir.lengthSq() > 0.001) moveDir.normalize()
    }
    const inputMag = Math.min(1, Math.hypot(move.x, move.y))
    this.moving = inputMag > 0.12

    // action buffers
    if (input.attackPressed) this.attackBuffer = 0.26
    if (input.heavyPressed) this.heavyBuffer = 0.26
    if (input.dodgePressed) this.dodgeBuffer = 0.22

    // dodge
    if (this.dodgeTimer > 0) {
      this.dodgeTimer -= dt
      const t = 1 - Math.max(0, this.dodgeTimer) / DODGE_TIME
      const speed = 13.5 * (1 - easing.outCubic(t) * 0.55)
      this.velocity.x = this.dodgeDir.x * speed
      this.velocity.z = this.dodgeDir.z * speed
      if (this.dodgeTimer <= 0) {
        this.dodgeTimer = 0
        this.dodgeBuffer = 0
      }
    } else if (this.dodgeBuffer > 0 && this.dodgeCooldown <= 0 && this.hitstun <= 0 && !this.attack) {
      this.startDodge(moveDir)
    } else if (!this.attack && this.hitstun <= 0) {
      // movement
      this.sprinting = input.sprint && inputMag > 0.2 && this.stamina > 1
      const speed = this.sprinting ? 9.6 : 6.4
      const targetVel = moveDir.multiplyScalar(speed * (this.moving ? 1 : 0))
      this.velocity.x = damp(this.velocity.x, targetVel.x, this.moving ? 12 : 9, dt)
      this.velocity.z = damp(this.velocity.z, targetVel.z, this.moving ? 12 : 9, dt)
      if (this.sprinting && this.moving) this.stamina = Math.max(0, this.stamina - 15 * dt)
      // face movement direction
      if (this.moving) {
        const targetYaw = Math.atan2(moveDir.x, moveDir.z)
        this.yaw = dampAngle(this.yaw, targetYaw, 13, dt)
      }
      // buffer attack
      if (this.heavyBuffer > 0 && this.attackCooldown <= 0) {
        this.heavyBuffer = 0
        this.startAttack(true)
      } else if (this.attackBuffer > 0 && this.attackCooldown <= 0) {
        this.attackBuffer = 0
        this.startAttack(false)
      }
    } else if (this.attack) {
      // slight movement retention during attacks
      this.velocity.x = damp(this.velocity.x, 0, 7, dt)
      this.velocity.z = damp(this.velocity.z, 0, 7, dt)
      if (this.attackBuffer > 0 && this.attack.time > this.attack.cfg.hitStart + 0.02 && !this.attack.buffered) {
        this.attack.buffered = true
      }
    } else {
      this.velocity.x = damp(this.velocity.x, 0, 10, dt)
      this.velocity.z = damp(this.velocity.z, 0, 10, dt)
    }

    // integrate
    const nextX = this.position.x + this.velocity.x * dt
    const nextZ = this.position.z + this.velocity.z * dt
    if (this.world.canWalk(nextX, this.position.z) || this.isDodging) {
      if (Math.hypot(nextX, this.position.z) < 201) this.position.x = nextX
    } else {
      this.velocity.x *= 0.2
    }
    if (this.world.canWalk(this.position.x, nextZ) || this.isDodging) {
      if (Math.hypot(this.position.x, nextZ) < 201) this.position.z = nextZ
    } else {
      this.velocity.z *= 0.2
    }
    const ground = terrainHeight(this.position.x, this.position.z)
    this.position.y = damp(this.position.y, ground, 18, dt)

    // attack progression
    if (this.attack) {
      this.attack.time += dt
      if (this.attack.time >= this.attack.cfg.duration) {
        const wasHeavy = this.attack.heavy
        const stage = this.attack.stage
        const buffered = this.attack.buffered || this.attackBuffer > 0
        this.attack = null
        this.attackCooldown = wasHeavy ? 0.24 : 0.09
        if (wasHeavy) {
          this.comboStep = 0
          this.comboWindow = 0
        } else if (stage >= 2) {
          this.comboStep = 0
          this.comboWindow = 0.32
        } else {
          this.comboStep = stage + 1
          this.comboWindow = 0.62
        }
        if (buffered) {
          this.attackBuffer = 0.16
          this.heavyBuffer = 0
        }
      }
    }

    // footsteps
    const speed = Math.hypot(this.velocity.x, this.velocity.z)
    if (speed > 0.8 && !this.isAttacking) {
      const prev = Math.sin(this.walkPhase)
      this.walkPhase += dt * (this.sprinting ? 13 : 9.2)
      const now = Math.sin(this.walkPhase)
      if (prev > 0 && now <= 0) this.events.onStep?.()
    } else {
      this.walkPhase += dt * 1.6
    }

    this.updateModel(dt, inputMag, camera, speed)
    this.model.position.copy(this.position)
    this.model.rotation.y = this.modelYaw
  }

  updateModel(dt, moveMag, camera, speed) {
    const p = this.model.userData.parts
    const t = this.time
    const baseArmL = 0.1
    const baseArmR = -0.1
    let tArmLx = 0
    let tArmLz = baseArmL
    let tArmRx = 0
    let tArmRz = baseArmR
    let tForeLx = 0.18
    let tForeRx = -0.28
    let tSwordX = 2.62
    let tSwordZ = 0.12
    let tTorsoY = 0
    let tTorsoX = 0
    let tTorsoZ = 0
    let tHeadY = 0
    let tCapeX = 0
    let legLx = 0
    let legRx = 0
    let shinLx = 0
    let shinRx = 0
    let bob = 0
    let lean = 0
    let modelScaleY = 1

    const idle = Math.sin(t * 1.8)
    tCapeX = 0.06 + Math.sin(t * 2.1) * 0.03
    tArmLz += idle * 0.015
    bob = idle * 0.012

    if (moveMag > 0.1 && speed > 0.5 && !this.attack && !this.isDodging) {
      const swing = Math.sin(this.walkPhase)
      const swing2 = Math.sin(this.walkPhase + Math.PI)
      const amp = Math.min(1, speed / 6) * (this.sprinting ? 1.15 : 0.8)
      legLx = swing * 0.62 * amp
      legRx = swing2 * 0.62 * amp
      shinLx = Math.max(0, swing2) * -0.55 * amp
      shinRx = Math.max(0, swing) * -0.55 * amp
      tArmLx = swing2 * 0.38 * amp
      tArmRx = swing * 0.3 * amp
      tTorsoZ = swing * 0.05 * amp
      tTorsoY = swing * 0.06 * amp
      bob = Math.abs(Math.sin(this.walkPhase)) * 0.045
      lean = 0.04 + amp * 0.05
      tCapeX = 0.15 + amp * 0.3 + Math.sin(this.walkPhase * 2) * 0.05
    }

    if (this.isDodging) {
      const tD = 1 - this.dodgeTimer / DODGE_TIME
      const k = Math.sin(Math.min(1, tD * 1.2) * Math.PI)
      lean = 0.32 * k
      tTorsoX = 0.35 * k
      tArmLz = 0.5 * k
      tArmRz = -0.5 * k
      tForeRx = -1.1 * k
      tSwordX = 2.9
      legLx = -0.65 * k
      legRx = 0.5 * k
      shinLx = -0.8 * k
      bob = -0.18 * k
      modelScaleY = 1 - 0.06 * k
    }

    if (this.attack) {
      const a = this.attack
      const dur = a.cfg.duration
      const tt = clamp(a.time / dur, 0, 1)
      const wind = clamp(tt / 0.34, 0, 1)
      const strike = clamp((tt - 0.3) / 0.32, 0, 1)
      const rec = clamp((tt - 0.66) / 0.34, 0, 1)
      const swing = easing.outCubic(strike) * (1 - easing.inOutSine(rec) * 0.65)
      const windK = easing.outCubic(wind) * (1 - strike * 0.55)

      if (a.heavy) {
        tArmRx = -2.0 * windK + 2.5 * swing
        tArmRz = -0.35 * windK + 0.3 * swing
        tForeRx = -1.5 * windK + 0.4 * swing
        tSwordX = 2.0 * windK + 2.1 * swing
        tSwordZ = 0.1
        tTorsoY = -0.75 * windK + 0.65 * swing
        tTorsoX = -0.22 * windK + 0.3 * swing
        tArmLz = 0.5 * windK + 0.2 * swing
        tArmLx = -1.1 * windK + 0.5 * swing
        lean = 0.22 * windK + 0.12 * swing
        bob = 0.18 * windK - 0.1 * swing
        legLx = -0.3 * swing
        legRx = 0.35 * swing
        shinRx = -0.4 * swing
      } else if (a.stage === 0) {
        tArmRz = -1.15 * windK + 1.55 * swing
        tArmRx = -0.35 * windK + 1.1 * swing
        tForeRx = -1.35 * windK + 0.55 * swing
        tSwordX = 1.3 * windK + 0.8 * swing
        tSwordZ = 0.0
        tTorsoY = -0.62 * windK + 0.7 * swing
        tArmLz = 0.35 * windK - 0.15 * swing
        tArmLx = -0.25 * swing
        tHeadY = 0.18 * windK - 0.2 * swing
        lean = 0.04 + 0.12 * swing
      } else if (a.stage === 1) {
        tArmRz = 1.05 * windK - 1.55 * swing
        tArmRx = 0.95 * windK - 0.35 * swing
        tForeRx = 0.5 * windK - 1.1 * swing
        tSwordX = 2.0 - 0.6 * swing
        tTorsoY = 0.55 * windK - 0.75 * swing
        tArmLz = -0.2 * windK + 0.4 * swing
        tHeadY = -0.15 * windK + 0.2 * swing
        lean = 0.04 + 0.1 * swing
        legLx = 0.25 * swing
      } else {
        // spin finisher
        tTorsoY = -1.1 * windK + 1.8 * swing
        tArmRz = -1.0 * windK + 1.4 * swing
        tArmRx = -1.3 * windK + 1.8 * swing
        tForeRx = -1.0 * windK + 0.3 * swing
        tSwordX = 2.2
        tSwordZ = 0.2
        tArmLz = 0.7 * windK - 0.35 * swing
        tArmLx = -0.5 * windK + 0.7 * swing
        lean = 0.1 + 0.15 * swing
        bob = 0.12 * windK - 0.06 * swing
        legLx = -0.4 * swing
        legRx = 0.4 * swing
        shinRx = -0.5 * swing
      }
      tCapeX = 0.12 + 0.35 * swing
      if (this.hitstun > 0) {
        tTorsoX -= 0.3
      }
    }

    if (this.hitstun > 0) {
      const k = clamp(this.hitstun / 0.26, 0, 1)
      lean = -0.22 * k
      tTorsoX = -0.22 * k
      tArmLx = -0.4 * k
      tArmRx = -0.4 * k
      bob = -0.03 * k
      tCapeX = 0.35 * k
    }

    if (this.dead) {
      lean = -1.2
      bob = -0.7
      tArmLx = 0.5
      tArmRx = 0.5
      tCapeX = 0.5
    }

    const lam = this.isAttacking ? 26 : this.isDodging ? 20 : 14
    p.armL.rotation.x = damp(p.armL.rotation.x, tArmLx, lam, dt)
    p.armL.rotation.z = damp(p.armL.rotation.z, tArmLz, lam, dt)
    p.armR.rotation.x = damp(p.armR.rotation.x, tArmRx, lam, dt)
    p.armR.rotation.z = damp(p.armR.rotation.z, tArmRz, lam, dt)
    p.foreL.rotation.x = damp(p.foreL.rotation.x, tForeLx, lam, dt)
    p.foreR.rotation.x = damp(p.foreR.rotation.x, tForeRx, lam, dt)
    p.sword.rotation.x = damp(p.sword.rotation.x, tSwordX, lam, dt)
    p.sword.rotation.z = damp(p.sword.rotation.z, tSwordZ, lam, dt)
    if (!this.attack || !this.attack.hitDone) {
      p.swordGlow.material.opacity = 0.2 + Math.sin(t * 3.1) * 0.08
    } else {
      p.swordGlow.material.opacity = 0.55
    }
    p.torso.rotation.y = damp(p.torso.rotation.y, tTorsoY, lam, dt)
    p.torso.rotation.x = damp(p.torso.rotation.x, tTorsoX, lam, dt)
    p.torso.rotation.z = damp(p.torso.rotation.z, tTorsoZ, lam, dt)
    p.head.rotation.y = damp(p.head.rotation.y, tHeadY, lam, dt)
    p.head.rotation.x = damp(p.head.rotation.x, this.attack ? -0.08 : 0, 8, dt)

    p.capePivot.rotation.x = damp(p.capePivot.rotation.x, tCapeX, 6, dt)
    p.capePivot.rotation.z = damp(p.capePivot.rotation.z, -tTorsoZ * 0.7 + Math.sin(t * 1.2) * 0.02, 6, dt)
    p.scarfTail.rotation.x = damp(p.scarfTail.rotation.x, 0.4 + tCapeX * 1.4, 4, dt)

    p.legL.rotation.x = damp(p.legL.rotation.x, legLx, 20, dt)
    p.legR.rotation.x = damp(p.legR.rotation.x, legRx, 20, dt)
    if (p.shinLGroup) p.shinLGroup.rotation.x = damp(p.shinLGroup.rotation.x, shinLx, 18, dt)
    if (p.shinRGroup) p.shinRGroup.rotation.x = damp(p.shinRGroup.rotation.x, shinRx, 18, dt)

    this.model.position.y = this.position.y + bob
    this.model.scale.y = damp(this.model.scale.y, modelScaleY, 12, dt)
    this.model.rotation.x = damp(this.model.rotation.x, lean, 10, dt)
    if (this.isDodging || this.attack || this.hitstun > 0) {
      this.modelYaw = dampAngle(this.modelYaw, this.yaw, 24, dt)
    } else {
      this.modelYaw = dampAngle(this.modelYaw, this.yaw, 12, dt)
    }

    // sword trail position handled by game fx via events
    void camera
    void p.bladeRune
  }

  get attackProgress() {
    if (!this.attack) return 0
    return clamp(this.attack.time / this.attack.cfg.duration, 0, 1)
  }
}

export { ATTACKS, HEAVY, DODGE_TIME }
