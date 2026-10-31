import * as THREE from 'three'

/* ══════════════════════════ math & noise ══════════════════════════ */

export const clamp = (v, min, max) => Math.max(min, Math.min(max, v))
export const lerp = (a, b, t) => a + (b - a) * t
export const invLerp = (a, b, v) => (v - a) / (b - a)
export const smoothstep = (edge0, edge1, x) => {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1)
  return t * t * (3 - 2 * t)
}
export const damp = (current, target, lambda, dt) => lerp(current, target, 1 - Math.exp(-lambda * dt))
export const rand = (min = 0, max = 1) => min + Math.random() * (max - min)
export const randInt = (min, max) => Math.floor(rand(min, max + 1))
export const pick = (arr) => arr[Math.floor(Math.random() * arr.length)]
export const angleDelta = (a, b) => {
  let d = (b - a) % (Math.PI * 2)
  if (d > Math.PI) d -= Math.PI * 2
  if (d < -Math.PI) d += Math.PI * 2
  return d
}
export const dampAngle = (current, target, lambda, dt) => current + angleDelta(current, target) * (1 - Math.exp(-lambda * dt))
export const easing = {
  outCubic: (t) => 1 - Math.pow(1 - t, 3),
  outQuart: (t) => 1 - Math.pow(1 - t, 4),
  outBack: (t) => 1 + 2.2 * Math.pow(t - 1, 3) + 1.2 * Math.pow(t - 1, 2),
  inOutSine: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
}

export function mulberry32(seed) {
  let a = seed >>> 0
  return function () {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const hash2 = (x, y) => {
  const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123
  return n - Math.floor(n)
}

export function valueNoise(x, y) {
  const xi = Math.floor(x)
  const yi = Math.floor(y)
  const xf = x - xi
  const yf = y - yi
  const u = xf * xf * (3 - 2 * xf)
  const v = yf * yf * (3 - 2 * yf)
  const a = hash2(xi, yi)
  const b = hash2(xi + 1, yi)
  const c = hash2(xi, yi + 1)
  const d = hash2(xi + 1, yi + 1)
  return lerp(lerp(a, b, u), lerp(c, d, u), v)
}

export function fbm(x, y, octaves = 4, lacunarity = 2, gain = 0.5) {
  let amp = 0.5
  let freq = 1
  let sum = 0
  let norm = 0
  for (let i = 0; i < octaves; i++) {
    sum += valueNoise(x * freq, y * freq) * amp
    norm += amp
    amp *= gain
    freq *= lacunarity
  }
  return sum / norm
}

/* ══════════════════════════ canvas textures ══════════════════════════ */

function canvas(size) {
  const c = document.createElement('canvas')
  c.width = c.height = size
  return [c, c.getContext('2d')]
}

export function softDiscTexture(size = 96, inner = 'rgba(255,255,255,0.95)', edge = 'rgba(255,255,255,0)') {
  const [c, ctx] = canvas(size)
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  g.addColorStop(0, inner)
  g.addColorStop(0.35, 'rgba(255,255,255,0.55)')
  g.addColorStop(1, edge)
  ctx.fillStyle = g
  ctx.fillRect(0, 0, size, size)
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

export function cloudTexture(size = 256) {
  const [c, ctx] = canvas(size)
  ctx.clearRect(0, 0, size, size)
  const puffs = 18
  for (let i = 0; i < puffs; i++) {
    const x = size * 0.5 + (Math.random() - 0.5) * size * 0.62
    const y = size * 0.56 + (Math.random() - 0.5) * size * 0.2
    const r = size * (0.1 + Math.random() * 0.16)
    const g = ctx.createRadialGradient(x, y, 0, x, y, r)
    g.addColorStop(0, 'rgba(255,252,245,0.5)')
    g.addColorStop(0.55, 'rgba(255,244,228,0.22)')
    g.addColorStop(1, 'rgba(255,240,220,0)')
    ctx.fillStyle = g
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
  }
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

export function runeTexture(size = 256) {
  const [c, ctx] = canvas(size)
  ctx.clearRect(0, 0, size, size)
  const cx = size / 2
  const cy = size / 2
  ctx.strokeStyle = 'rgba(255,220,150,0.85)'
  ctx.lineWidth = 3
  ctx.beginPath()
  ctx.arc(cx, cy, size * 0.38, 0, Math.PI * 2)
  ctx.stroke()
  ctx.lineWidth = 1.5
  ctx.beginPath()
  ctx.arc(cx, cy, size * 0.31, 0, Math.PI * 2)
  ctx.stroke()
  ctx.beginPath()
  ctx.arc(cx, cy, size * 0.44, 0, Math.PI * 2)
  ctx.stroke()
  const glyphs = 16
  for (let i = 0; i < glyphs; i++) {
    const a = (i / glyphs) * Math.PI * 2
    const r1 = size * 0.32
    const r2 = size * (i % 3 === 0 ? 0.37 : 0.345)
    ctx.beginPath()
    ctx.moveTo(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1)
    ctx.lineTo(cx + Math.cos(a) * r2, cy + Math.sin(a) * r2)
    ctx.stroke()
  }
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

export function starTexture(size = 128) {
  const [c, ctx] = canvas(size)
  ctx.clearRect(0, 0, size, size)
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  g.addColorStop(0, 'rgba(255,255,255,1)')
  g.addColorStop(0.3, 'rgba(255,245,215,0.65)')
  g.addColorStop(1, 'rgba(255,235,190,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, size, size)
  ctx.strokeStyle = 'rgba(255,255,255,0.5)'
  ctx.lineWidth = 1.5
  ctx.beginPath()
  ctx.moveTo(size / 2, size * 0.06)
  ctx.lineTo(size / 2, size * 0.94)
  ctx.moveTo(size * 0.06, size / 2)
  ctx.lineTo(size * 0.94, size / 2)
  ctx.stroke()
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

/* ══════════════════════════ geometry helpers ══════════════════════════ */

export function mat(color, opts = {}) {
  return new THREE.MeshStandardMaterial({
    color,
    flatShading: true,
    roughness: opts.roughness ?? 0.78,
    metalness: opts.metalness ?? 0.05,
    emissive: opts.emissive ?? 0x000000,
    emissiveIntensity: opts.emissiveIntensity ?? 1,
    transparent: opts.transparent ?? false,
    opacity: opts.opacity ?? 1,
    side: opts.side ?? THREE.FrontSide,
    depthWrite: opts.depthWrite ?? true,
  })
}

export function glowMat(color, opacity = 0.9) {
  return new THREE.MeshBasicMaterial({ color, transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })
}

export function makeSprite(texture, color = 0xffffff, scale = 1, opacity = 1) {
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
    map: texture,
    color,
    transparent: true,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    fog: false,
  }))
  sprite.scale.setScalar(scale)
  return sprite
}

export function slashArcGeometry(radius = 2.4, inner = 0.65, theta = Math.PI * 0.85, segments = 26) {
  const geo = new THREE.BufferGeometry()
  const pos = []
  const uv = []
  const colors = []
  for (let i = 0; i < segments; i++) {
    const t0 = theta * (i / segments) - theta / 2
    const t1 = theta * ((i + 1) / segments) - theta / 2
    const edge = Math.sin((i / segments) * Math.PI)
    const a0 = [Math.sin(t0) * inner, 0, Math.cos(t0) * inner]
    const a1 = [Math.sin(t1) * inner, 0, Math.cos(t1) * inner]
    const b0 = [Math.sin(t0) * radius, Math.sin((i / segments) * Math.PI) * 0.5, Math.cos(t0) * radius]
    const b1 = [Math.sin(t1) * radius, Math.sin((i / segments) * Math.PI) * 0.5, Math.cos(t1) * radius]
    pos.push(...a0, ...b0, ...b1, ...a0, ...b1, ...a1)
    uv.push(0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0)
    for (let k = 0; k < 6; k++) colors.push(1, 1, 1)
    void edge
  }
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2))
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
  geo.computeVertexNormals()
  return geo
}

/* ══════════════════════════ audio ══════════════════════════ */

export class AudioSystem {
  constructor() {
    this.ctx = null
    this.enabled = true
    this.ready = false
    this.nextNote = 0
    this.noteIndex = 0
    this._beat = 0
    this._lastStep = 0
    this.scale = [146.83, 174.61, 196.0, 220.0, 261.63, 293.66, 349.23, 392.0]
  }

  unlock() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume().catch(() => {})
      return
    }
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext
      if (!Ctx) return
      const ctx = new Ctx()
      this.ctx = ctx
      this.master = ctx.createGain()
      this.master.gain.value = this.enabled ? 0.85 : 0
      const comp = ctx.createDynamicsCompressor()
      comp.threshold.value = -16
      comp.knee.value = 20
      comp.ratio.value = 6
      this.master.connect(comp)
      comp.connect(ctx.destination)

      this.sfxGain = ctx.createGain()
      this.sfxGain.gain.value = 0.55
      this.sfxGain.connect(this.master)

      this.musicGain = ctx.createGain()
      this.musicGain.gain.value = 0.3
      this.musicGain.connect(this.master)

      this.delay = ctx.createDelay(1.0)
      this.delay.delayTime.value = 0.36
      const fb = ctx.createGain()
      fb.gain.value = 0.28
      const wet = ctx.createGain()
      wet.gain.value = 0.35
      this.delay.connect(fb)
      fb.connect(this.delay)
      this.delay.connect(wet)
      wet.connect(this.musicGain)

      this._buildAmbience()
      this.ready = true
      this.nextNote = ctx.currentTime + 1.2
      this._ambientStarted = ctx.currentTime
    } catch (err) {
      console.warn('Audio unavailable', err)
    }
  }

  _buildAmbience() {
    const ctx = this.ctx
    // warm drone pad
    const droneGain = ctx.createGain()
    droneGain.gain.value = 0.055
    const droneFilter = ctx.createBiquadFilter()
    droneFilter.type = 'lowpass'
    droneFilter.frequency.value = 460
    droneFilter.Q.value = 0.6
    droneGain.connect(droneFilter)
    droneFilter.connect(this.musicGain)
    const freqs = [73.42, 110.0, 146.83]
    freqs.forEach((f, i) => {
      const osc = ctx.createOscillator()
      osc.type = i === 2 ? 'sine' : 'triangle'
      osc.frequency.value = f
      osc.detune.value = (i - 1) * 6
      const g = ctx.createGain()
      g.gain.value = i === 0 ? 0.55 : 0.24
      const lfo = ctx.createOscillator()
      lfo.frequency.value = 0.045 + i * 0.013
      const lfoGain = ctx.createGain()
      lfoGain.gain.value = i === 0 ? 0.22 : 0.1
      lfo.connect(lfoGain)
      lfoGain.connect(g.gain)
      osc.connect(g)
      g.connect(droneGain)
      osc.start()
      lfo.start()
    })

    // wind noise bed
    const len = ctx.sampleRate * 3
    const buffer = ctx.createBuffer(1, len, ctx.sampleRate)
    const data = buffer.getChannelData(0)
    let last = 0
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1
      last = (last + 0.02 * white) / 1.02
      data[i] = last * 3.2
    }
    const src = ctx.createBufferSource()
    src.buffer = buffer
    src.loop = true
    const windFilter = ctx.createBiquadFilter()
    windFilter.type = 'bandpass'
    windFilter.frequency.value = 620
    windFilter.Q.value = 0.5
    const windGain = ctx.createGain()
    windGain.gain.value = 0.09
    src.connect(windFilter)
    windFilter.connect(windGain)
    windGain.connect(this.musicGain)
    src.start()
    this.windGain = windGain
    this.windFilter = windFilter
  }

  setEnabled(on) {
    this.enabled = on
    if (this.master) this.master.gain.setTargetAtTime(on ? 0.85 : 0, this.ctx.currentTime, 0.08)
  }

  toggle() {
    this.setEnabled(!this.enabled)
    return this.enabled
  }

  _tone({ freq = 440, freqTo = null, type = 'sine', dur = 0.2, gain = 0.2, delay = 0, filter = null, dest = null, attack = 0.005 }) {
    if (!this.ctx || !this.enabled) return
    const ctx = this.ctx
    const t = ctx.currentTime + delay
    const osc = ctx.createOscillator()
    const g = ctx.createGain()
    osc.type = type
    osc.frequency.setValueAtTime(freq, t)
    if (freqTo) osc.frequency.exponentialRampToValueAtTime(Math.max(20, freqTo), t + dur)
    g.gain.setValueAtTime(0.0001, t)
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, gain), t + attack)
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
    let node = osc
    if (filter) {
      const f = ctx.createBiquadFilter()
      f.type = filter.type ?? 'lowpass'
      f.frequency.setValueAtTime(filter.freq ?? 1200, t)
      if (filter.freqTo) f.frequency.exponentialRampToValueAtTime(filter.freqTo, t + dur)
      f.Q.value = filter.q ?? 1
      node.connect(f)
      node = f
    }
    node.connect(g)
    g.connect(dest || this.sfxGain)
    osc.start(t)
    osc.stop(t + dur + 0.05)
  }

  _noise({ dur = 0.2, gain = 0.2, delay = 0, freq = 1000, freqTo = 300, q = 1, type = 'bandpass' }) {
    if (!this.ctx || !this.enabled) return
    const ctx = this.ctx
    const t = ctx.currentTime + delay
    const len = Math.max(1, Math.floor(ctx.sampleRate * dur))
    const buffer = ctx.createBuffer(1, len, ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len)
    const src = ctx.createBufferSource()
    src.buffer = buffer
    const filter = ctx.createBiquadFilter()
    filter.type = type
    filter.Q.value = q
    filter.frequency.setValueAtTime(freq, t)
    filter.frequency.exponentialRampToValueAtTime(Math.max(40, freqTo), t + dur)
    const g = ctx.createGain()
    g.gain.setValueAtTime(gain, t)
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
    src.connect(filter)
    filter.connect(g)
    g.connect(this.sfxGain)
    src.start(t)
  }

  swing(heavy = false) {
    this._noise({ dur: heavy ? 0.3 : 0.18, gain: heavy ? 0.3 : 0.2, freq: heavy ? 1700 : 2400, freqTo: 340, q: 1.4 })
    if (heavy) this._tone({ freq: 120, freqTo: 60, type: 'sine', dur: 0.24, gain: 0.2 })
  }

  hit(crit = false) {
    this._tone({ freq: crit ? 210 : 150, freqTo: 46, type: 'triangle', dur: 0.2, gain: crit ? 0.5 : 0.32 })
    this._noise({ dur: 0.14, gain: 0.28, freq: crit ? 3200 : 2200, freqTo: 240, q: 0.8 })
    if (crit) this._tone({ freq: 880, freqTo: 440, type: 'square', dur: 0.09, gain: 0.08, delay: 0.02 })
  }

  hurt() {
    this._tone({ freq: 320, freqTo: 90, type: 'sawtooth', dur: 0.3, gain: 0.2 })
    this._noise({ dur: 0.24, gain: 0.18, freq: 600, freqTo: 140 })
  }

  dodge() {
    this._noise({ dur: 0.32, gain: 0.2, freq: 2600, freqTo: 500, q: 1.6 })
  }

  jump() {
    this._tone({ freq: 300, freqTo: 620, type: 'triangle', dur: 0.16, gain: 0.08 })
  }

  step() {
    this._noise({ dur: 0.05, gain: 0.035, freq: 260, freqTo: 120, q: 0.7 })
  }

  coin() {
    this._tone({ freq: 880, type: 'triangle', dur: 0.12, gain: 0.13 })
    this._tone({ freq: 1320, type: 'triangle', dur: 0.18, gain: 0.1, delay: 0.07 })
  }

  ui() {
    this._tone({ freq: 660, freqTo: 520, type: 'sine', dur: 0.07, gain: 0.06 })
  }

  sealThrow() {
    this._tone({ freq: 480, freqTo: 960, type: 'triangle', dur: 0.2, gain: 0.12 })
    this._noise({ dur: 0.16, gain: 0.08, freq: 3000, freqTo: 1200 })
  }

  sealSuccess() {
    const notes = [392, 523.25, 659.25, 783.99, 1046.5]
    notes.forEach((f, i) => this._tone({ freq: f, type: 'triangle', dur: 0.5, gain: 0.16, delay: i * 0.09 }))
    this._tone({ freq: 130.81, type: 'sine', dur: 0.9, gain: 0.2 })
  }

  sealFail() {
    this._tone({ freq: 320, freqTo: 200, type: 'square', dur: 0.22, gain: 0.09 })
    this._tone({ freq: 240, freqTo: 140, type: 'square', dur: 0.3, gain: 0.08, delay: 0.16 })
  }

  levelUp() {
    ;[523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((f, i) => this._tone({ freq: f, type: 'triangle', dur: 0.55, gain: 0.13, delay: i * 0.085 }))
  }

  roar() {
    this._tone({ freq: 90, freqTo: 46, type: 'sawtooth', dur: 0.8, gain: 0.3, filter: { freq: 500, freqTo: 120 } })
    this._noise({ dur: 0.7, gain: 0.22, freq: 420, freqTo: 100, q: 0.6 })
  }

  bossSlam() {
    this._tone({ freq: 70, freqTo: 28, type: 'sine', dur: 0.6, gain: 0.55 })
    this._noise({ dur: 0.5, gain: 0.35, freq: 500, freqTo: 80, q: 0.5 })
  }

  fire() {
    this._noise({ dur: 0.3, gain: 0.16, freq: 1500, freqTo: 400, q: 0.7 })
  }

  water() {
    this._tone({ freq: 700, freqTo: 1300, type: 'sine', dur: 0.18, gain: 0.07 })
  }

  spirit() {
    this._tone({ freq: 420, freqTo: 180, type: 'sine', dur: 0.5, gain: 0.09 })
    this._tone({ freq: 620, freqTo: 250, type: 'triangle', dur: 0.4, gain: 0.05, delay: 0.04 })
  }

  update() {
    if (!this.ctx || !this.enabled) return
    const t = this.ctx.currentTime
    if (this.nextNote < t + 0.4) {
      const beat = this._beat++ % 8
      const rest = beat === 3 || beat === 7
      if (!rest) {
        const jump = [-2, 1, 2, 0, 3, 1, 2, 0][Math.floor(Math.random() * 8)]
        this.noteIndex = clamp(this.noteIndex + jump, 1, this.scale.length - 1)
        const f = this.scale[this.noteIndex] * (beat === 0 ? 2 : 1)
        const g = 0.055 + Math.random() * 0.03
        this._tone({ freq: f, type: 'triangle', dur: 1.8, gain: g, delay: Math.max(0, this.nextNote - t), dest: this.musicGain })
        this._tone({ freq: f * 2.002, type: 'sine', dur: 1.4, gain: g * 0.4, delay: Math.max(0, this.nextNote - t), dest: this.delay })
      }
      this.nextNote += beat === 0 ? 1.15 : 0.62
    }
    if (this.windFilter) {
      this.windFilter.frequency.value = 520 + Math.sin(t * 0.09) * 220
    }
  }
}

/* ══════════════════════════ misc ══════════════════════════ */

export function createCanvasTexture(draw, size = 256) {
  const [c, ctx] = canvas(size)
  draw(ctx, size)
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

export function formatNumber(n) {
  return Math.round(n).toLocaleString('pt-BR')
}

export function isTouchDevice() {
  return (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) || 'ontouchstart' in window
}

export function setShadowQuality(renderer, light, quality) {
  if (!light) return
  const size = quality === 'high' ? 2048 : 1024
  light.shadow.mapSize.set(size, size)
  if (light.shadow.map) {
    light.shadow.map.dispose()
    light.shadow.map = null
  }
  renderer.shadowMap.needsUpdate = true
}
