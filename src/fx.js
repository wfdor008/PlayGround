import * as THREE from 'three'
import { softDiscTexture, slashArcGeometry, rand, randInt, clamp } from './engine.js'

const MAX_PARTICLES = 900

export class FX {
  constructor(scene, camera) {
    this.scene = scene
    this.camera = camera
    this.particles = []
    this.rings = []
    this.projectiles = []
    this.trails = []
    this.damageLayer = document.getElementById('damageLayer')

    const geo = new THREE.BufferGeometry()
    const positions = new Float32Array(MAX_PARTICLES * 3)
    const colors = new Float32Array(MAX_PARTICLES * 3)
    const sizes = new Float32Array(MAX_PARTICLES)
    const alphas = new Float32Array(MAX_PARTICLES)
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
    geo.setAttribute('alpha', new THREE.BufferAttribute(alphas, 1))
    geo.setDrawRange(0, 0)

    this.particleGeo = geo
    this.particleMat = new THREE.ShaderMaterial({
      uniforms: { uTex: { value: softDiscTexture(64, 'rgba(255,255,255,0.95)', 'rgba(255,255,255,0)') } },
      vertexShader: `
        attribute float size;
        attribute float alpha;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vColor = color;
          vAlpha = alpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (260.0 / max(0.1, -mv.z));
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        uniform sampler2D uTex;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vec4 tex = texture2D(uTex, gl_PointCoord);
          if (tex.a < 0.01) discard;
          gl_FragColor = vec4(vColor, tex.a * vAlpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    })
    this.points = new THREE.Points(geo, this.particleMat)
    this.points.frustumCulled = false
    scene.add(this.points)

    this.slashGeo = slashArcGeometry(2.5, 0.5, Math.PI * 1.0, 30)
    this.ringGeo = new THREE.RingGeometry(0.86, 1, 48)
    this.ringGeo.rotateX(-Math.PI / 2)

    this.tmp = new THREE.Vector3()
    this.tmp2 = new THREE.Vector3()
  }

  /* ── particles ── */
  spawnParticles(position, color, count = 12, opts = {}) {
    const {
      speed = 4, spread = 1, gravity = 8, size = 0.4, life = 0.7,
      upward = 0.6, colorJitter = 0.1,
    } = opts
    const c = new THREE.Color(color)
    for (let i = 0; i < count; i++) {
      if (this.particles.length >= MAX_PARTICLES) this.particles.shift()
      const dir = new THREE.Vector3(
        (Math.random() - 0.5) * 2 * spread,
        Math.random() * upward + (upward > 0 ? 0.1 : -0.5),
        (Math.random() - 0.5) * 2 * spread,
      ).normalize()
      const spd = speed * (0.35 + Math.random() * 0.85)
      const col = c.clone().offsetHSL((Math.random() - 0.5) * colorJitter, 0, (Math.random() - 0.5) * colorJitter)
      this.particles.push({
        pos: new THREE.Vector3(position.x + (Math.random() - 0.5) * 0.4, position.y + (Math.random() - 0.5) * 0.4, position.z + (Math.random() - 0.5) * 0.4),
        vel: dir.multiplyScalar(spd),
        color: col,
        life: life * (0.6 + Math.random() * 0.8),
        maxLife: life,
        size: size * (0.6 + Math.random() * 0.9),
        gravity,
      })
    }
  }

  spawnDirectional(position, direction, color, count = 8, opts = {}) {
    const c = new THREE.Color(color)
    const dir = direction.clone().normalize()
    for (let i = 0; i < count; i++) {
      if (this.particles.length >= MAX_PARTICLES) this.particles.shift()
      const spread = new THREE.Vector3((Math.random() - 0.5) * 1.6, (Math.random() - 0.5) * 1.6, (Math.random() - 0.5) * 1.6)
      const vel = dir.clone().add(spread).normalize().multiplyScalar((opts.speed || 7) * (0.4 + Math.random()))
      this.particles.push({
        pos: position.clone(),
        vel,
        color: c.clone().offsetHSL((Math.random() - 0.5) * 0.05, 0, (Math.random() - 0.5) * 0.1),
        life: (opts.life || 0.5) * (0.6 + Math.random() * 0.7),
        maxLife: opts.life || 0.5,
        size: (opts.size || 0.3) * (0.7 + Math.random() * 0.8),
        gravity: opts.gravity ?? 4,
      })
    }
  }

  updateParticles(dt) {
    const positions = this.particleGeo.attributes.position.array
    const colors = this.particleGeo.attributes.color.array
    const sizes = this.particleGeo.attributes.size.array
    const alphas = this.particleGeo.attributes.alpha.array
    let n = 0
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i]
      p.life -= dt
      if (p.life <= 0) { this.particles.splice(i, 1); continue }
      p.vel.y -= p.gravity * dt
      p.vel.multiplyScalar(1 - 1.4 * dt)
      p.pos.addScaledVector(p.vel, dt)
      if (p.pos.y < -1.3) { p.pos.y = -1.3; p.vel.y *= -0.3 }
    }
    for (const p of this.particles) {
      if (n >= MAX_PARTICLES) break
      positions[n * 3] = p.pos.x
      positions[n * 3 + 1] = p.pos.y
      positions[n * 3 + 2] = p.pos.z
      colors[n * 3] = p.color.r
      colors[n * 3 + 1] = p.color.g
      colors[n * 3 + 2] = p.color.b
      const k = clamp(p.life / p.maxLife, 0, 1)
      sizes[n] = p.size * (0.5 + k * 0.7)
      alphas[n] = k * k
      n++
    }
    this.particleGeo.setDrawRange(0, n)
    this.particleGeo.attributes.position.needsUpdate = true
    this.particleGeo.attributes.color.needsUpdate = true
    this.particleGeo.attributes.size.needsUpdate = true
    this.particleGeo.attributes.alpha.needsUpdate = true
  }

  /* ── slash ── */
  slash(position, yaw, { heavy = false, color = 0x9ffff0, scale = 1 } = {}) {
    const mat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const mesh = new THREE.Mesh(this.slashGeo, mat)
    mesh.position.copy(position)
    mesh.position.y += heavy ? 1.35 : 1.15
    mesh.rotation.y = yaw
    mesh.rotation.x = heavy ? 0.85 : 0.15
    mesh.rotation.z = heavy ? 0 : -0.35
    mesh.scale.setScalar(scale * (heavy ? 1.4 : 1))
    mesh.renderOrder = 4
    this.scene.add(mesh)
    this.trails.push({ mesh, life: heavy ? 0.32 : 0.24, maxLife: heavy ? 0.32 : 0.24, heavy })
  }

  updateTrails(dt) {
    for (let i = this.trails.length - 1; i >= 0; i--) {
      const t = this.trails[i]
      t.life -= dt
      const k = clamp(t.life / t.maxLife, 0, 1)
      t.mesh.material.opacity = k * 0.9
      t.mesh.rotation.y += (t.heavy ? -3.2 : 4.6) * dt
      t.mesh.scale.multiplyScalar(1 + dt * 1.4)
      if (t.life <= 0) {
        this.scene.remove(t.mesh)
        t.mesh.material.dispose()
        this.trails.splice(i, 1)
      }
    }
  }

  /* ── shockwave ── */
  shockwave(position, color = 0xffc48a, maxRadius = 6, duration = 0.55) {
    const mat = new THREE.MeshBasicMaterial({
      color, transparent: true, opacity: 0.85, side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending, depthWrite: false,
    })
    const mesh = new THREE.Mesh(this.ringGeo, mat)
    mesh.position.copy(position)
    mesh.position.y += 0.12
    mesh.scale.setScalar(0.4)
    this.scene.add(mesh)
    this.rings.push({ mesh, life: duration, maxLife: duration, maxRadius })
  }

  updateRings(dt) {
    for (let i = this.rings.length - 1; i >= 0; i--) {
      const r = this.rings[i]
      r.life -= dt
      const k = 1 - clamp(r.life / r.maxLife, 0, 1)
      const radius = 0.4 + (r.maxRadius - 0.4) * (1 - Math.pow(1 - k, 3))
      r.mesh.scale.setScalar(radius)
      r.mesh.material.opacity = (1 - k) * 0.8
      if (r.life <= 0) {
        this.scene.remove(r.mesh)
        r.mesh.material.dispose()
        this.rings.splice(i, 1)
      }
    }
  }

  /* ── projectile ── */
  spawnProjectile({ position, target, speed = 12, damage = 10, color = 0x7fe6ff, owner = 'enemy', homing = 0, radius = 0.42, splash = 0 }) {
    const group = new THREE.Group()
    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(radius, 0),
      new THREE.MeshBasicMaterial({ color }),
    )
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: softDiscTexture(64, 'rgba(255,255,255,0.9)', 'rgba(255,255,255,0)'),
      color, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false,
    }))
    glow.scale.setScalar(radius * 5)
    group.add(core, glow)
    group.position.copy(position)
    this.scene.add(group)
    const dir = target.clone().sub(position).normalize()
    const p = {
      group, velocity: dir.multiplyScalar(speed), life: 4.5, damage, color, owner,
      homing, radius, splash, trailTimer: 0,
    }
    this.projectiles.push(p)
    return p
  }

  updateProjectiles(dt, world, player, onHitPlayer) {
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const p = this.projectiles[i]
      p.life -= dt
      if (p.homing > 0 && p.owner === 'enemy') {
        const target = player.position.clone()
        target.y += 1.1
        const desired = target.sub(p.group.position).normalize().multiplyScalar(p.velocity.length())
        p.velocity.lerp(desired, 1 - Math.exp(-p.homing * dt))
      }
      p.group.position.addScaledVector(p.velocity, dt)
      p.group.rotation.x += dt * 6
      p.group.rotation.y += dt * 4
      p.trailTimer -= dt
      if (p.trailTimer <= 0) {
        p.trailTimer = 0.045
        this.spawnParticles(p.group.position, p.color, 2, { speed: 0.6, gravity: 0, size: 0.32, life: 0.35, spread: 0.4, upward: 0 })
      }
      const ground = world.heightAt(p.group.position.x, p.group.position.z)
      let hit = false
      if (p.owner === 'enemy') {
        const dx = p.group.position.x - player.position.x
        const dz = p.group.position.z - player.position.z
        const dy = p.group.position.y - (player.position.y + 1.0)
        if (dx * dx + dz * dz < (p.radius + 0.8) ** 2 && Math.abs(dy) < 1.3) {
          onHitPlayer?.(p)
          hit = true
        }
      }
      if (p.group.position.y < ground + 0.2 || p.group.position.y > ground + 25) hit = true
      if (p.life <= 0) hit = true
      if (hit) {
        this.spawnParticles(p.group.position, p.color, 16, { speed: 5, gravity: 6, size: 0.5, life: 0.6 })
        this.scene.remove(p.group)
        this.projectiles.splice(i, 1)
      }
    }
  }

  /* ── damage numbers ── */
  damageNumber(worldPosition, text, cls = '') {
    if (!this.damageLayer) return
    const pos = worldPosition.clone()
    pos.y += 1.4
    pos.project(this.camera)
    if (pos.z > 1) return
    const x = (pos.x * 0.5 + 0.5) * window.innerWidth
    const y = (-pos.y * 0.5 + 0.5) * window.innerHeight
    if (x < -100 || x > window.innerWidth + 100 || y < -100 || y > window.innerHeight + 100) return
    const el = document.createElement('div')
    el.className = `dmg ${cls}`
    el.textContent = text
    el.style.left = `${x}px`
    el.style.top = `${y}px`
    el.style.setProperty('--drift', `${(Math.random() - 0.5) * 40}px`)
    this.damageLayer.appendChild(el)
    setTimeout(() => el.remove(), 1000)
  }

  burst(position, color, count = 18, opts = {}) {
    this.spawnParticles(position, color, count, opts)
  }

  update(dt) {
    this.updateParticles(dt)
    this.updateTrails(dt)
    this.updateRings(dt)
  }

  clear() {
    for (const p of this.projectiles) this.scene.remove(p.group)
    this.projectiles.length = 0
    for (const t of this.trails) this.scene.remove(t.mesh)
    this.trails.length = 0
    for (const r of this.rings) this.scene.remove(r.mesh)
    this.rings.length = 0
    this.particles.length = 0
  }
}

export function randomPointInCircle(radius) {
  const a = Math.random() * Math.PI * 2
  const r = Math.sqrt(Math.random()) * radius
  return [Math.cos(a) * r, Math.sin(a) * r]
}

export { rand, randInt }
