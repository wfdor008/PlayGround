import * as THREE from 'three'
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js'
import {
  clamp, lerp, smoothstep, fbm, mulberry32, rand, pick,
  cloudTexture, softDiscTexture, runeTexture, starTexture, glowMat,
} from './engine.js'

export const WORLD_RADIUS = 205
export const WORLD_SIZE = 440
export const TREE_POS = new THREE.Vector3(0, 0, 0)

export const SHRINES = [
  {
    id: 'stone', name: 'Altar do Alicerce', bossName: 'Guardião do Alicerce', species: 'pedral',
    pos: new THREE.Vector2(-102, 24), color: 0xd9a05b, region: 'Penhascos do Alicerce',
  },
  {
    id: 'ember', name: 'Altar da Chama', bossName: 'Guardião da Chama', species: 'brasalume',
    pos: new THREE.Vector2(34, -118), color: 0xff7a45, region: 'Braseiro de Cinzas',
  },
  {
    id: 'veil', name: 'Altar do Véu', bossName: 'Guardião do Véu', species: 'umbra',
    pos: new THREE.Vector2(96, 96), color: 0xb487ff, region: 'Bosque de Musgo',
  },
]

export const REGIONS = [
  { id: 'meadow', name: 'Clareira do Coração', x: 0, z: 0, radius: 62, color: 0x5f8f49, map: '#6f9c52' },
  { id: 'ember', name: 'Braseiro de Cinzas', x: 24, z: -124, radius: 82, color: 0x8f5c3c, map: '#a06842' },
  { id: 'aqua', name: 'Lagoa do Sussurro', x: 118, z: 16, radius: 72, color: 0x4f8a6e, map: '#568f76' },
  { id: 'stone', name: 'Penhascos do Alicerce', x: -120, z: 34, radius: 82, color: 0x79806f, map: '#7d8474' },
  { id: 'forest', name: 'Bosque de Musgo', x: 28, z: 140, radius: 88, color: 0x3b6d3b, map: '#416f3e' },
]

export function regionAt(x, z) {
  let best = REGIONS[0]
  let bestW = 0
  for (const r of REGIONS) {
    if (r.id === 'meadow') continue
    const d = Math.hypot(x - r.x, z - r.z)
    const w = Math.exp(-(d * d) / (2 * r.radius * r.radius * 0.55))
    if (w > bestW) { bestW = w; best = r }
  }
  if (bestW < 0.38) return REGIONS[0]
  return best
}

/* ══════════════════════════ terrain field ══════════════════════════ */

export function terrainHeight(x, z) {
  const d = Math.hypot(x, z)
  let h = (fbm(x * 0.0072 + 11.3, z * 0.0072 - 4.7, 4) - 0.5) * 24
  h += (fbm(x * 0.024 - 3.1, z * 0.024 + 8.9, 3) - 0.5) * 5.2
  h += Math.sin(x * 0.021 + 1.2) * Math.cos(z * 0.018 - 0.4) * 1.8
  h += (fbm(x * 0.075 + 4.7, z * 0.075 - 2.4, 2) - 0.5) * 1.1

  // central plateau
  const plateau = smoothstep(54, 22, d)
  h = lerp(h, 7.2 + (fbm(x * 0.05 + 3.4, z * 0.05 + 7.2, 2) - 0.5) * 1.4, plateau)

  // western highlands
  const ridge = smoothstep(96, 8, Math.hypot(x + 128, z - 38))
  h = lerp(h, 13.5 + fbm(x * 0.03, z * 0.03, 3) * 7, ridge * 0.82)

  // eastern lake basin
  const lake = smoothstep(66, 10, Math.hypot(x - 120, z - 12))
  h = lerp(h, -4.4 + Math.hypot(x - 120, z - 12) * 0.028, lake * 0.95)

  // southern forest shelf
  const forest = smoothstep(112, 44, Math.hypot(x - 34, z - 136))
  h = lerp(h, 5.4 + fbm(x * 0.04, z * 0.04, 2) * 3, forest * 0.42)

  // border mountain wall
  const edge = smoothstep(150, 214, d)
  const ridgeNoise = fbm(x * 0.018 + 30, z * 0.018 - 17, 3)
  h += edge * (18 + ridgeNoise * 40)
  return h
}

export function terrainSlope(x, z, r = 1.4) {
  const h = terrainHeight(x, z)
  const dx = terrainHeight(x + r, z) - terrainHeight(x - r, z)
  const dz = terrainHeight(x, z + r) - terrainHeight(x, z - r)
  return Math.hypot(dx, dz) / (2 * r)
}

/* ══════════════════════════ world class ══════════════════════════ */

export class World {
  constructor(scene, { mobile = false } = {}) {
    this.scene = scene
    this.mobile = mobile
    this.time = 0
    this.extras = []
    this.crystals = []
    this.essences = []
    this.shrines = []
    this.islands = []
    this.birds = []
    this.clouds = []
    this.runeRings = []
    this.fireflies = null
    this.leaves = null
    this.rng = mulberry32(20261031)
    this.group = new THREE.Group()
    this.group.name = 'world'
    scene.add(this.group)

    this.sunDir = new THREE.Vector3(-0.48, 0.38, -0.79).normalize()
    this.buildSky()
    this.buildTerrain()
    this.buildWater()
    this.buildPaths()
    this.buildFoliage()
    this.buildWorldTree()
    this.buildShrines()
    this.buildEssences()
    this.buildFloatingIslands()
    this.buildClouds()
    this.buildBirds()
    this.buildFireflies()
    this.buildMapCanvas()
  }

  /* ── sky ── */
  buildSky() {
    const geo = new THREE.SphereGeometry(560, 32, 20)
    const uniforms = {
      uZenith: { value: new THREE.Color(0x315f9c) },
      uMid: { value: new THREE.Color(0x8eb7d8) },
      uHorizon: { value: new THREE.Color(0xffd9a3) },
      uSunDir: { value: this.sunDir.clone() },
      uSunColor: { value: new THREE.Color(0xfff1c9) },
    }
    const sky = new THREE.Mesh(geo, new THREE.ShaderMaterial({
      uniforms,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      vertexShader: `
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        uniform vec3 uZenith;
        uniform vec3 uMid;
        uniform vec3 uHorizon;
        uniform vec3 uSunDir;
        uniform vec3 uSunColor;
        varying vec3 vDir;
        void main() {
          float h = clamp(vDir.y, -0.15, 1.0);
          vec3 low = mix(uHorizon, uMid, smoothstep(-0.03, 0.32, h));
          vec3 col = mix(low, uZenith, smoothstep(0.22, 0.9, h));
          float sunAmt = max(dot(normalize(vDir), normalize(uSunDir)), 0.0);
          col += uSunColor * pow(sunAmt, 700.0) * 2.4;
          col += uSunColor * pow(sunAmt, 10.0) * 0.22;
          col += uSunColor * pow(sunAmt, 3.0) * 0.06;
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    }))
    sky.frustumCulled = false
    this.group.add(sky)
    this.sky = sky

    const sunTex = softDiscTexture(128, 'rgba(255,255,245,1)', 'rgba(255,220,150,0)')
    const sun = new THREE.Sprite(new THREE.SpriteMaterial({
      map: sunTex, color: 0xfff3d2, transparent: true, opacity: 0.9,
      blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
    }))
    sun.scale.setScalar(95)
    sun.position.copy(this.sunDir).multiplyScalar(470)
    this.group.add(sun)
    this.sunSprite = sun
  }

  /* ── terrain ── */
  buildTerrain() {
    const seg = this.mobile ? 118 : 168
    let geo = new THREE.PlaneGeometry(WORLD_SIZE, WORLD_SIZE, seg, seg)
    geo.rotateX(-Math.PI / 2)
    const pos = geo.attributes.position
    for (let i = 0; i < pos.count; i++) {
      pos.setY(i, terrainHeight(pos.getX(i), pos.getZ(i)))
    }
    geo = geo.toNonIndexed()
    geo.computeVertexNormals()
    const positions = geo.attributes.position
    const normals = geo.attributes.normal
    const colors = new Float32Array(positions.count * 3)
    const c = new THREE.Color()
    const regionCol = new THREE.Color()
    const sand = new THREE.Color(0xd8bd8b)
    const rock = new THREE.Color(0x7d7f72)
    const pale = new THREE.Color(0xb3b1a0)
    const snow = new THREE.Color(0xe9e6d8)
    const face = new THREE.Vector3()

    const palette = {
      meadow: new THREE.Color(0x5f9148),
      ember: new THREE.Color(0x9a623d),
      aqua: new THREE.Color(0x548f72),
      stone: new THREE.Color(0x7e8574),
      forest: new THREE.Color(0x3e703d),
    }

    for (let i = 0; i < positions.count; i += 3) {
      const x = (positions.getX(i) + positions.getX(i + 1) + positions.getX(i + 2)) / 3
      const z = (positions.getZ(i) + positions.getZ(i + 1) + positions.getZ(i + 2)) / 3
      const y = (positions.getY(i) + positions.getY(i + 1) + positions.getY(i + 2)) / 3
      face.set(normals.getX(i), normals.getY(i), normals.getZ(i))
      const n = fbm(x * 0.09 + 5, z * 0.09 - 3, 2)
      const patch = fbm(x * 0.31 - 8, z * 0.31 + 12, 2)

      const reg = regionAt(x, z)
      regionCol.copy(palette[reg.id] || palette.meadow)
      c.copy(palette.meadow).lerp(regionCol, 0.72)
      const hueShift = (patch - 0.5) * 0.028
      c.offsetHSL(hueShift, (n - 0.5) * 0.08, (patch - 0.5) * 0.09 + (n - 0.5) * 0.05)

      if (y < 1.7) c.lerp(sand, smoothstep(1.7, -0.7, y) * 0.92)
      if (y > 15) c.lerp(rock, smoothstep(15, 26, y) * 0.72)
      if (y > 28) c.lerp(pale, smoothstep(28, 38, y) * 0.6)
      if (y > 42) c.lerp(snow, smoothstep(42, 55, y) * 0.85)
      const steep = smoothstep(0.86, 0.52, face.y)
      if (steep > 0) c.lerp(rock, steep * 0.8)
      if (reg.id === 'ember' && y > 8) c.offsetHSL(-0.01, 0.02, -0.02)
      if (reg.id === 'stone' && y > 10) c.lerp(rock, 0.25)

      for (let k = 0; k < 3; k++) {
        colors[(i + k) * 3] = c.r
        colors[(i + k) * 3 + 1] = c.g
        colors[(i + k) * 3 + 2] = c.b
      }
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geo.computeBoundingSphere()
    const material = new THREE.MeshStandardMaterial({
      vertexColors: true, flatShading: true, roughness: 0.96, metalness: 0,
    })
    const mesh = new THREE.Mesh(geo, material)
    mesh.receiveShadow = true
    mesh.name = 'terrain'
    this.group.add(mesh)
    this.terrain = mesh
  }

  buildWater() {
    const geo = new THREE.PlaneGeometry(1500, 1500, 1, 1)
    geo.rotateX(-Math.PI / 2)
    const uniforms = {
      uTime: { value: 0 },
      uDeep: { value: new THREE.Color(0x174e5c) },
      uShallow: { value: new THREE.Color(0x5fb3ad) },
      uSunDir: { value: this.sunDir.clone() },
      uSunColor: { value: new THREE.Color(0xffe6b3) },
      uFogColor: { value: new THREE.Color(0xe9c9a4) },
    }
    const mat = new THREE.ShaderMaterial({
      uniforms,
      transparent: true,
      depthWrite: false,
      vertexShader: `
        uniform float uTime;
        varying vec3 vWorld;
        varying vec3 vNormal;
        void main() {
          vec3 p = position;
          float w = sin(p.x * 0.09 + uTime * 0.9) * 0.16 + cos(p.z * 0.13 - uTime * 0.7) * 0.12;
          p.y += w;
          vec4 world = modelMatrix * vec4(p, 1.0);
          vWorld = world.xyz;
          float dx = cos(p.x * 0.09 + uTime * 0.9) * 0.09 * 0.16;
          float dz = -sin(p.z * 0.13 - uTime * 0.7) * 0.13 * 0.12;
          vNormal = normalize(vec3(-dx, 1.0, -dz));
          gl_Position = projectionMatrix * viewMatrix * world;
        }
      `,
      fragmentShader: `
        uniform vec3 uDeep;
        uniform vec3 uShallow;
        uniform vec3 uSunDir;
        uniform vec3 uSunColor;
        varying vec3 vWorld;
        varying vec3 vNormal;
        void main() {
          vec3 viewDir = normalize(cameraPosition - vWorld);
          vec3 n = normalize(vNormal);
          float fres = pow(1.0 - clamp(dot(viewDir, n), 0.0, 1.0), 2.2);
          vec3 col = mix(uDeep, uShallow, fres * 0.75 + 0.08);
          vec3 refl = reflect(-normalize(uSunDir), n);
          float spec = pow(max(dot(refl, viewDir), 0.0), 90.0);
          col += uSunColor * spec * 2.2;
          float ripple = sin(vWorld.x * 1.7) * sin(vWorld.z * 1.4) * 0.5 + 0.5;
          col += uShallow * ripple * 0.035;
          float alpha = mix(0.78, 0.94, fres);
          gl_FragColor = vec4(col, alpha);
        }
      `,
    })
    const water = new THREE.Mesh(geo, mat)
    water.position.y = -1.15
    this.group.add(water)
    this.water = water
    this.waterUniforms = uniforms

    // shoreline foam ring is faked with a large additive disc at lake
    const foamTex = softDiscTexture(128, 'rgba(255,255,255,0.22)', 'rgba(255,255,255,0)')
    const foam = new THREE.Sprite(new THREE.SpriteMaterial({ map: foamTex, color: 0xd6f5e8, transparent: true, opacity: 0.25, blending: THREE.AdditiveBlending, depthWrite: false }))
    foam.scale.set(90, 90, 1)
    foam.rotation.z = 0
    foam.position.set(120, -0.7, 12)
    foam.material.rotation = 0
    this.group.add(foam)
  }

  /* ── paths ── */
  buildPaths() {
    const routes = [
      [new THREE.Vector2(6, 104), new THREE.Vector2(-4, 78), new THREE.Vector2(8, 52), new THREE.Vector2(-6, 30), new THREE.Vector2(0, 15)],
      [new THREE.Vector2(-4, 8), new THREE.Vector2(-26, 3), new THREE.Vector2(-52, 12), new THREE.Vector2(-74, 9), new THREE.Vector2(-96, 20)],
      [new THREE.Vector2(6, -6), new THREE.Vector2(14, -34), new THREE.Vector2(10, -60), new THREE.Vector2(28, -82), new THREE.Vector2(32, -108)],
      [new THREE.Vector2(8, 8), new THREE.Vector2(28, 24), new THREE.Vector2(52, 34), new THREE.Vector2(72, 56), new THREE.Vector2(90, 84)],
    ]
    const group = new THREE.Group()
    for (const route of routes) {
      const curve = new THREE.CatmullRomCurve3(route.map((p) => new THREE.Vector3(p.x, 0, p.y)))
      const steps = 100
      const width = 3.1
      const verts = []
      const colors = []
      const cols = [new THREE.Color(0xb79b6e), new THREE.Color(0xc4a97a), new THREE.Color(0xa98d62)]
      for (let i = 0; i <= steps; i++) {
        const t = i / steps
        const p = curve.getPoint(t)
        const tang = curve.getTangent(t)
        const side = new THREE.Vector3(-tang.z, 0, tang.x).normalize()
        const taper = 0.72 + Math.sin(t * Math.PI) * 0.28
        const w = width * taper
        const y = terrainHeight(p.x, p.z)
        const l = new THREE.Vector3(p.x + side.x * w, y + 0.09, p.z + side.z * w)
        const r = new THREE.Vector3(p.x - side.x * w, y + 0.09, p.z - side.z * w)
        verts.push(l.x, l.y, l.z, r.x, r.y, r.z)
        const base = cols[i % 3]
        colors.push(base.r, base.g, base.b, base.r * 0.95, base.g * 0.95, base.b * 0.95)
      }
      const idx = []
      for (let i = 0; i < steps; i++) {
        const a = i * 2
        idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2)
      }
      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3))
      geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
      geo.setIndex(idx)
      geo.computeVertexNormals()
      const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
        vertexColors: true, roughness: 1, metalness: 0, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1,
      }))
      mesh.receiveShadow = true
      group.add(mesh)
    }
    this.group.add(group)
  }

  /* ── foliage ── */
  buildFoliage() {
    const rng = this.rng
    const treeSpots = []
    const occupied = []

    const blocked = (x, z, min) => occupied.some((p) => (p.x - x) ** 2 + (p.z - z) ** 2 < min * min)
    const nearShrine = (x, z, pad) => SHRINES.some((s) => Math.hypot(x - s.pos.x, z - s.pos.y) < pad)

    const tries = this.mobile ? 1900 : 2600
    for (let i = 0; i < tries && treeSpots.length < (this.mobile ? 300 : 520); i++) {
      const a = rng() * Math.PI * 2
      const r = 26 + Math.sqrt(rng()) * 176
      const x = Math.cos(a) * r
      const z = Math.sin(a) * r
      const h = terrainHeight(x, z)
      if (h < 1.0 || h > 24) continue
      if (terrainSlope(x, z, 2) > 0.62) continue
      if (Math.hypot(x, z) < 24) continue
      if (Math.hypot(x - 2, z - 44) < 9) continue
      if (nearShrine(x, z, 14)) continue
      if (blocked(x, z, 5.5)) continue
      if (Math.hypot(x, z) > 196) continue
      occupied.push({ x, z })

      const reg = regionAt(x, z)
      let variant = 'oak'
      if (reg.id === 'aqua') variant = rng() < 0.68 ? 'palm' : 'oak'
      else if (reg.id === 'stone') variant = rng() < 0.7 ? 'pine' : 'oak'
      else if (reg.id === 'forest') variant = rng() < 0.5 ? 'pine' : 'oak'
      else if (reg.id === 'ember') variant = rng() < 0.72 ? 'oak' : 'pine'
      treeSpots.push({ x, z, h, variant, scale: 0.8 + rng() * 0.75, rot: rng() * Math.PI * 2, reg })
    }

    const palettes = {
      meadow: [0x4c8a3e, 0x66a64a, 0x3f7c3a, 0x76ae51],
      forest: [0x2f6b3a, 0x3f8045, 0x4f924c, 0x2a5d35],
      ember: [0xa85e34, 0xc37a3c, 0x93512f, 0xd1903f],
      stone: [0x5a7552, 0x6b855d, 0x4d6748, 0x7b9168],
      aqua: [0x4b9166, 0x63a97a, 0x3f7f61, 0x78b98b],
    }

    const trunkGeo = new THREE.CylinderGeometry(0.26, 0.44, 1, 5, 1)
    trunkGeo.translate(0, 0.5, 0)
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5a422e, flatShading: true, roughness: 0.95 })

    const oakCanopy = (() => {
      const blobs = []
      const specs = [
        [0, 0.2, 0, 1.9, 1.65, 1.9],
        [1.05, -0.28, 0.35, 1.15, 1.0, 1.15],
        [-1.02, -0.22, -0.3, 1.3, 1.12, 1.3],
        [0.2, 0.75, -0.2, 1.1, 1.0, 1.1],
      ]
      specs.forEach(([x, y, z, sx, sy, sz]) => {
        const g = new THREE.IcosahedronGeometry(1, 0)
        g.scale(sx, sy, sz)
        g.translate(x, y, z)
        blobs.push(g)
      })
      return mergeGeometries(blobs)
    })()

    const pineCanopy = (() => {
      const cones = []
      const specs = [
        [0, 1.4, 0, 1.9, 3.4],
        [0, 3.5, 0, 1.45, 3.0],
        [0, 5.4, 0, 0.95, 2.5],
      ]
      specs.forEach(([x, y, z, r, h]) => {
        const g = new THREE.ConeGeometry(r, h, 7, 1)
        g.translate(x, y, z)
        cones.push(g)
      })
      return mergeGeometries(cones)
    })()

    const palmCanopy = (() => {
      const parts = []
      for (let i = 0; i < 5; i++) {
        const g = new THREE.ConeGeometry(0.5, 3.3, 4, 1)
        g.scale(1, 1, 0.36)
        g.translate(0, 1.6, 0)
        g.rotateZ((-0.75 + i * 0.37))
        g.rotateY(i * 1.25)
        parts.push(g)
      }
      return mergeGeometries(parts)
    })()

    const variants = {
      oak: { canopy: oakCanopy, trunkH: 2.9, canopyY: 3.7, canopyScale: 1.5 },
      pine: { canopy: pineCanopy, trunkH: 3.2, canopyY: 2.7, canopyScale: 1.2 },
      palm: { canopy: palmCanopy, trunkH: 4.6, canopyY: 4.3, canopyScale: 1.25 },
    }

    const canopyByVariant = {}
    const trunkByVariant = {}
    for (const key of Object.keys(variants)) {
      const list = treeSpots.filter((t) => t.variant === key)
      if (!list.length) continue
      const v = variants[key]
      const canopyMesh = new THREE.InstancedMesh(
        v.canopy,
        new THREE.MeshStandardMaterial({ color: 0xffffff, flatShading: true, roughness: 0.88 }),
        list.length,
      )
      const trunkMesh = new THREE.InstancedMesh(trunkGeo, trunkMat, list.length)
      canopyMesh.castShadow = true
      canopyMesh.receiveShadow = true
      trunkMesh.castShadow = true
      trunkMesh.receiveShadow = true
      canopyMesh.frustumCulled = false
      trunkMesh.frustumCulled = false
      const m = new THREE.Matrix4()
      const q = new THREE.Quaternion()
      const pos = new THREE.Vector3()
      const scale = new THREE.Vector3()
      const col = new THREE.Color()
      list.forEach((t, i) => {
        const s = t.scale
        const trunkH = v.trunkH * s
        pos.set(t.x, t.h - 0.2, t.z)
        q.setFromEuler(new THREE.Euler(0, t.rot, 0))
        scale.set(s * (0.85 + rng() * 0.2), trunkH, s * (0.85 + rng() * 0.2))
        m.compose(pos, q, scale)
        trunkMesh.setMatrixAt(i, m)

        pos.set(t.x, t.h - 0.2 + trunkH * 0.92, t.z)
        scale.setScalar(v.canopyScale * s * (0.9 + rng() * 0.22))
        m.compose(pos, q, scale)
        canopyMesh.setMatrixAt(i, m)
        const pal = palettes[t.reg.id] || palettes.meadow
        col.setHex(pick.call(null, pal)).offsetHSL((rng() - 0.5) * 0.02, 0, (rng() - 0.5) * 0.06)
        canopyMesh.setColorAt(i, col)
      })
      canopyMesh.instanceMatrix.needsUpdate = true
      trunkMesh.instanceMatrix.needsUpdate = true
      canopyMesh.instanceColor.needsUpdate = true
      this.group.add(trunkMesh, canopyMesh)
      canopyByVariant[key] = canopyMesh
      trunkByVariant[key] = trunkMesh
    }

    // bushes
    const bushCount = this.mobile ? 160 : 300
    const bushGeo = new THREE.IcosahedronGeometry(1, 0)
    const bushes = new THREE.InstancedMesh(bushGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, flatShading: true, roughness: 0.9 }), bushCount)
    const bushM = new THREE.Matrix4()
    const bushQ = new THREE.Quaternion()
    const bushS = new THREE.Vector3()
    const bushP = new THREE.Vector3()
    const bushCol = new THREE.Color()
    let bi = 0
    for (let i = 0; i < bushCount * 4 && bi < bushCount; i++) {
      const a = rng() * Math.PI * 2
      const rr = 20 + Math.sqrt(rng()) * 175
      const x = Math.cos(a) * rr
      const z = Math.sin(a) * rr
      const h = terrainHeight(x, z)
      if (h < 1.2 || h > 20) continue
      if (terrainSlope(x, z) > 0.62) continue
      const reg = regionAt(x, z)
      const s = 0.45 + rng() * 0.75
      bushP.set(x, h + s * 0.25, z)
      bushQ.setFromEuler(new THREE.Euler(rng() * 0.3, rng() * 6.28, rng() * 0.2))
      bushS.set(s * 1.3, s * 0.75, s * 1.2)
      bushM.compose(bushP, bushQ, bushS)
      bushes.setMatrixAt(bi, bushM)
      const pal = palettes[reg.id] || palettes.meadow
      bushCol.setHex(pal[Math.floor(rng() * pal.length)]).offsetHSL(0, 0.02, -0.05)
      bushes.setColorAt(bi, bushCol)
      bi++
    }
    bushes.count = bi
    bushes.instanceMatrix.needsUpdate = true
    bushes.instanceColor.needsUpdate = true
    bushes.castShadow = true
    bushes.receiveShadow = true
    this.group.add(bushes)

    // grass
    this.buildGrass(palettes)

    // flowers
    const flowerCount = this.mobile ? 360 : 720
    const flowerGeo = new THREE.IcosahedronGeometry(1, 0)
    const flowers = new THREE.InstancedMesh(flowerGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, flatShading: true, roughness: 0.7, emissive: 0x221100, emissiveIntensity: 0.2 }), flowerCount)
    const fM = new THREE.Matrix4()
    const fP = new THREE.Vector3()
    const fQ = new THREE.Quaternion()
    const fS = new THREE.Vector3()
    const fCol = new THREE.Color()
    const flowerPal = [0xffd98a, 0xff9f86, 0xf4efd0, 0xc7a8ff, 0x8fe7d0]
    let fi = 0
    for (let i = 0; i < flowerCount * 5 && fi < flowerCount; i++) {
      const a = rng() * Math.PI * 2
      const rr = 18 + Math.sqrt(rng()) * 172
      const x = Math.cos(a) * rr
      const z = Math.sin(a) * rr
      const h = terrainHeight(x, z)
      if (h < 1.5 || h > 14) continue
      if (terrainSlope(x, z) > 0.5) continue
      const s = 0.055 + rng() * 0.06
      fP.set(x, h + 0.35, z)
      fQ.identity()
      fS.set(s * 1.6, s, s * 1.6)
      fM.compose(fP, fQ, fS)
      flowers.setMatrixAt(fi, fM)
      fCol.setHex(flowerPal[Math.floor(rng() * flowerPal.length)])
      flowers.setColorAt(fi, fCol)
      fi++
    }
    flowers.count = fi
    flowers.instanceMatrix.needsUpdate = true
    flowers.instanceColor.needsUpdate = true
    this.group.add(flowers)

    // rocks
    this.buildRocks()
  }

  buildGrass(palettes) {
    const blades = []
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2 + Math.random() * 0.4
      const radius = 0.06 + Math.random() * 0.14
      const height = 0.55 + Math.random() * 0.55
      const width = 0.045 + Math.random() * 0.03
      const bx = Math.cos(angle) * radius
      const bz = Math.sin(angle) * radius
      const lean = 0.16 + Math.random() * 0.2
      const dirX = Math.cos(angle) * lean
      const dirZ = Math.sin(angle) * lean
      const geo = new THREE.BufferGeometry()
      const verts = [
        bx - width, 0, bz,
        bx + width, 0, bz,
        bx + width * 0.45 + dirX, height * 0.55, bz + dirZ,
        bx - width * 0.45 + dirX, height * 0.55, bz + dirZ,
        bx + dirX * 1.75, height, bz + dirZ * 1.75,
      ]
      const indices = [0, 1, 2, 0, 2, 3, 3, 2, 4]
      geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3))
      geo.setIndex(indices)
      geo.computeVertexNormals()
      blades.push(geo)
    }
    const grassGeo = mergeGeometries(blades)
    this.grassUniforms = { uTime: { value: 0 } }
    const grassMat = new THREE.MeshLambertMaterial({ color: 0xffffff, side: THREE.DoubleSide })
    grassMat.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = this.grassUniforms.uTime
      shader.vertexShader = 'uniform float uTime;\n' + shader.vertexShader.replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        #ifdef USE_INSTANCING
          float ph = instanceMatrix[3][0] * 0.63 + instanceMatrix[3][2] * 0.81;
          float bend = sin(uTime * 1.5 + ph) * 0.55 + sin(uTime * 2.4 + ph * 1.9) * 0.18;
          float hgt = max(transformed.y, 0.0);
          transformed.x += bend * hgt * hgt * 0.16;
          transformed.z += bend * hgt * hgt * 0.1;
        #endif`,
      )
    }
    grassMat.customProgramCacheKey = () => 'feralis-grass-sway'

    const count = this.mobile ? 2800 : 6200
    const grass = new THREE.InstancedMesh(grassGeo, grassMat, count)
    grass.frustumCulled = false
    const m = new THREE.Matrix4()
    const p = new THREE.Vector3()
    const q = new THREE.Quaternion()
    const s = new THREE.Vector3()
    const col = new THREE.Color()
    const palettesList = {
      meadow: [0x6ba54a, 0x7cba55, 0x5c9441, 0x8cc662],
      ember: [0xb47a42, 0xc48a4b, 0x9c6538, 0xd29a55],
      aqua: [0x5ea677, 0x70b98a, 0x4f9468, 0x8ecf9e],
      stone: [0x7e9466, 0x8da375, 0x6f855b, 0x9caf82],
      forest: [0x4a8c46, 0x5a9e50, 0x3d7a3d, 0x6db15c],
    }
    let gi = 0
    const rng = this.rng
    for (let i = 0; i < count * 2 && gi < count; i++) {
      const a = rng() * Math.PI * 2
      const rr = 12 + Math.sqrt(rng()) * 186
      const x = Math.cos(a) * rr
      const z = Math.sin(a) * rr
      const h = terrainHeight(x, z)
      if (h < 0.6 || h > 21) continue
      if (terrainSlope(x, z) > 0.72) continue
      if (Math.hypot(x, z) < 17) continue
      const reg = regionAt(x, z)
      p.set(x, h - 0.03, z)
      q.setFromEuler(new THREE.Euler(0, rng() * Math.PI * 2, 0))
      const sc = 0.7 + rng() * 0.9
      s.set(sc, sc * (0.8 + rng() * 0.5), sc)
      m.compose(p, q, s)
      grass.setMatrixAt(gi, m)
      const pal = palettesList[reg.id] || palettesList.meadow
      col.setHex(pal[Math.floor(rng() * pal.length)]).offsetHSL(0, 0, (rng() - 0.5) * 0.06)
      grass.setColorAt(gi, col)
      gi++
    }
    grass.count = gi
    grass.instanceMatrix.needsUpdate = true
    grass.instanceColor.needsUpdate = true
    this.group.add(grass)
  }

  buildRocks() {
    const count = this.mobile ? 110 : 220
    const geo = new THREE.DodecahedronGeometry(1, 0)
    const rocks = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color: 0xffffff, flatShading: true, roughness: 0.95 }), count)
    rocks.castShadow = true
    rocks.receiveShadow = true
    const rng = this.rng
    const m = new THREE.Matrix4()
    const p = new THREE.Vector3()
    const q = new THREE.Quaternion()
    const s = new THREE.Vector3()
    const col = new THREE.Color()
    let ri = 0
    for (let i = 0; i < count * 4 && ri < count; i++) {
      const a = rng() * Math.PI * 2
      const rr = 24 + Math.sqrt(rng()) * 172
      const x = Math.cos(a) * rr
      const z = Math.sin(a) * rr
      const h = terrainHeight(x, z)
      if (h < 0.2) continue
      if (Math.hypot(x, z) < 20) continue
      if (SHRINES.some((sh) => Math.hypot(x - sh.pos.x, z - sh.pos.y) < 8)) continue
      const sc = 0.4 + Math.pow(rng(), 2) * 2.6
      p.set(x, h + sc * 0.24, z)
      q.setFromEuler(new THREE.Euler(rng() * 3, rng() * 3, rng() * 3))
      s.set(sc * (0.8 + rng() * 0.5), sc * (0.6 + rng() * 0.4), sc * (0.8 + rng() * 0.5))
      m.compose(p, q, s)
      rocks.setMatrixAt(ri, m)
      col.setHSL(0.16, 0.06, 0.4 + rng() * 0.15)
      if (regionAt(x, z).id === 'stone') col.offsetHSL(0.01, 0.02, 0.02)
      rocks.setColorAt(ri, col)
      ri++
    }
    rocks.count = ri
    rocks.instanceMatrix.needsUpdate = true
    rocks.instanceColor.needsUpdate = true
    this.group.add(rocks)
  }

  /* ── world tree ── */
  buildWorldTree() {
    const group = new THREE.Group()
    const baseY = terrainHeight(0, 0)
    group.position.set(0, baseY, 0)
    this.treeBaseY = baseY

    const barkA = new THREE.MeshStandardMaterial({ color: 0x6a4d38, flatShading: true, roughness: 0.95 })
    const barkB = new THREE.MeshStandardMaterial({ color: 0x7c5b42, flatShading: true, roughness: 0.9 })
    const rootMat = new THREE.MeshStandardMaterial({ color: 0x5b4230, flatShading: true, roughness: 1 })

    // root mound
    const mound = new THREE.Mesh(new THREE.CylinderGeometry(6.2, 10.5, 2.2, 10, 1), new THREE.MeshStandardMaterial({ color: 0x527c3c, flatShading: true, roughness: 1 }))
    mound.position.y = 0.4
    mound.receiveShadow = true
    mound.castShadow = true
    group.add(mound)

    const stoneRing = new THREE.Mesh(new THREE.TorusGeometry(8.6, 0.32, 5, 28), new THREE.MeshStandardMaterial({ color: 0x8d8b78, flatShading: true, roughness: 0.9 }))
    stoneRing.rotation.x = Math.PI / 2
    stoneRing.position.y = 0.9
    group.add(stoneRing)

    // trunk segments
    let y = 0.4
    let r = 3.5
    let offsetX = 0
    let offsetZ = 0
    for (let i = 0; i < 7; i++) {
      const hgt = 4.3
      const rTop = r * 0.78
      const seg = new THREE.Mesh(new THREE.CylinderGeometry(rTop, r, hgt, 8, 1), i % 2 ? barkA : barkB)
      seg.position.set(offsetX, y + hgt / 2, offsetZ)
      seg.rotation.y = i * 0.5
      seg.rotation.z = Math.sin(i * 1.4) * 0.035
      seg.castShadow = true
      seg.receiveShadow = true
      group.add(seg)
      y += hgt * 0.94
      r = rTop * 0.97
      offsetX += Math.sin(i * 1.3) * 0.28
      offsetZ += Math.cos(i * 1.7) * 0.22
    }

    // roots
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2 + 0.2
      const root = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.95, 8.5, 5, 1), rootMat)
      root.position.set(Math.cos(a) * 4.4, 1.7, Math.sin(a) * 4.4)
      root.rotation.z = Math.cos(a) * 1.05
      root.rotation.x = -Math.sin(a) * 1.05
      root.rotation.y = a
      root.castShadow = true
      root.receiveShadow = true
      group.add(root)
    }

    // branches
    const branchMat = barkA
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2
      const br = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 1.05, 10, 5, 1), branchMat)
      br.position.set(Math.cos(a) * 4.2 + offsetX, y - 4 + i * 0.4, Math.sin(a) * 4.2 + offsetZ)
      br.rotation.z = Math.cos(a) * 0.75
      br.rotation.x = -Math.sin(a) * 0.75
      br.rotation.y = a
      br.castShadow = true
      group.add(br)
    }

    // canopy
    const canopyColors = [0x3f8a63, 0x4fa175, 0x62b884, 0x7ccf98, 0x35805d]
    const canopyGroup = new THREE.Group()
    const canopyMatBase = new THREE.MeshStandardMaterial({ color: 0xffffff, flatShading: true, roughness: 0.82, emissive: 0x0b3a2a, emissiveIntensity: 0.32 })
    const canopySpots = [
      [0, 31, 0, 9.5], [7, 28, 2, 7], [-7, 29, -2, 7.5], [4, 34, -5, 6],
      [-4, 33, 6, 6.5], [10, 25, -4, 5.5], [-10, 26, 3, 6], [0, 38, 0, 6.5],
      [6, 37, 4, 4.6], [-6, 36, -4, 4.8], [11, 31, 5, 4], [-11, 32, -6, 4.2],
      [2, 24, 8, 4.5], [-2, 24, -9, 4.2],
    ]
    canopySpots.forEach(([x, yy, z, sc], i) => {
      const m = new THREE.MeshStandardMaterial({
        color: canopyColors[i % canopyColors.length], flatShading: true, roughness: 0.8,
        emissive: 0x0a3626, emissiveIntensity: 0.34,
      })
      const blob = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 1), m)
      blob.position.set(x, yy, z)
      blob.scale.set(sc, sc * 0.78, sc)
      blob.rotation.set(i * 0.7, i * 1.1, i * 0.4)
      blob.castShadow = true
      blob.receiveShadow = true
      canopyGroup.add(blob)
    })
    void canopyMatBase
    group.add(canopyGroup)
    this.canopy = canopyGroup

    // halo
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({
      map: softDiscTexture(128, 'rgba(150,255,220,0.55)', 'rgba(60,255,190,0)'),
      color: 0x9dffd8, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
    }))
    halo.scale.set(75, 75, 1)
    halo.position.y = 32
    group.add(halo)
    this.treeHalo = halo

    // rune rings
    const runeTex = runeTexture(512)
    for (let i = 0; i < 2; i++) {
      const ring = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 1),
        new THREE.MeshBasicMaterial({ map: runeTex, color: i ? 0x9fffe0 : 0xffe2a3, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }),
      )
      ring.scale.setScalar(18 + i * 7)
      ring.rotation.x = -Math.PI / 2
      ring.rotation.z = i * 0.6
      ring.position.y = 6 + i * 5
      group.add(ring)
      this.runeRings.push({ mesh: ring, speed: (i ? -1 : 1) * (0.09 + i * 0.05), phase: i * 1.7 })
    }

    // orbiting crystals
    const crystalGeo = new THREE.IcosahedronGeometry(0.5, 0)
    for (let i = 0; i < 9; i++) {
      const crystal = new THREE.Mesh(crystalGeo, new THREE.MeshStandardMaterial({
        color: 0x8ef5d4, emissive: 0x48d8b0, emissiveIntensity: 1.4, flatShading: true, roughness: 0.3, metalness: 0.2,
      }))
      const angle = (i / 9) * Math.PI * 2
      const radius = 7.5 + (i % 3) * 2.4
      const yy = 10 + (i % 5) * 4
      crystal.position.set(Math.cos(angle) * radius, yy, Math.sin(angle) * radius)
      crystal.scale.setScalar(0.8 + (i % 3) * 0.35)
      group.add(crystal)
      const halo2 = new THREE.Sprite(new THREE.SpriteMaterial({
        map: softDiscTexture(64, 'rgba(160,255,230,0.6)', 'rgba(90,255,210,0)'),
        color: 0x9effda, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
      }))
      halo2.scale.setScalar(4.2)
      halo2.position.copy(crystal.position)
      group.add(halo2)
      this.crystals.push({ mesh: crystal, halo: halo2, angle, radius, y: yy, speed: 0.12 + (i % 4) * 0.03, bob: i * 1.2 })
    }

    // hanging vines
    for (let i = 0; i < 9; i++) {
      const a = (i / 9) * Math.PI * 2 + 0.3
      const r = 8 + (i % 3) * 2
      const pts = []
      const top = 22 + (i % 4) * 2
      for (let k = 0; k <= 4; k++) {
        const t = k / 4
        pts.push(new THREE.Vector3(Math.cos(a) * (r + Math.sin(t * 6) * 0.6), top - t * (6 + (i % 3) * 2), Math.sin(a) * (r + Math.cos(t * 5) * 0.6)))
      }
      const curve = new THREE.CatmullRomCurve3(pts)
      const vine = new THREE.Mesh(new THREE.TubeGeometry(curve, 10, 0.09, 4, false), new THREE.MeshStandardMaterial({ color: 0x2f6b48, roughness: 1 }))
      group.add(vine)
    }

    // base rune circle + lanterns
    const altarRing = new THREE.Mesh(new THREE.PlaneGeometry(20, 20), new THREE.MeshBasicMaterial({
      map: runeTex, color: 0x9fffe0, transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
    }))
    altarRing.rotation.x = -Math.PI / 2
    altarRing.position.y = 0.9
    group.add(altarRing)

    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2 + 0.3
      const stone = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.5, 2.9, 5), new THREE.MeshStandardMaterial({ color: 0x8b8a76, flatShading: true, roughness: 0.9 }))
      stone.position.set(Math.cos(a) * 12.5, 1.5, Math.sin(a) * 12.5)
      stone.rotation.z = (Math.random() - 0.5) * 0.15
      stone.castShadow = true
      group.add(stone)
      const flame = new THREE.Sprite(new THREE.SpriteMaterial({
        map: softDiscTexture(64, 'rgba(255,230,160,0.9)', 'rgba(255,150,50,0)'),
        color: 0xffd68a, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false,
      }))
      flame.scale.setScalar(2.2)
      flame.position.set(stone.position.x, 3.2, stone.position.z)
      group.add(flame)
      this.extras.push({ sprite: flame, base: 2.2, phase: i * 0.8 })
    }

    this.group.add(group)
    this.tree = group
  }

  /* ── shrines ── */
  buildShrines() {
    const runeTex = runeTexture(512)
    for (const data of SHRINES) {
      const x = data.pos.x
      const z = data.pos.y
      const y = terrainHeight(x, z)
      const group = new THREE.Group()
      group.position.set(x, y, z)

      const base = new THREE.Mesh(new THREE.CylinderGeometry(5.4, 6.4, 0.9, 8), new THREE.MeshStandardMaterial({ color: 0x7f8270, flatShading: true, roughness: 0.95 }))
      base.position.y = 0.3
      base.receiveShadow = true
      base.castShadow = true
      group.add(base)

      const steps = new THREE.Mesh(new THREE.CylinderGeometry(6.6, 7.4, 0.4, 8), new THREE.MeshStandardMaterial({ color: 0x6c7062, flatShading: true, roughness: 1 }))
      steps.position.y = 0.02
      steps.receiveShadow = true
      group.add(steps)

      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2 + 0.15
        const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.5, 3.4, 6), new THREE.MeshStandardMaterial({ color: 0x8d9080, flatShading: true, roughness: 0.92 }))
        pillar.position.set(Math.cos(a) * 5, 2.1, Math.sin(a) * 5)
        pillar.rotation.y = a
        pillar.rotation.z = (i % 2 ? 1 : -1) * 0.035
        pillar.castShadow = true
        pillar.receiveShadow = true
        group.add(pillar)

        const cap = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.3, 0.9), new THREE.MeshStandardMaterial({ color: 0x9a9d8c, flatShading: true }))
        cap.position.set(pillar.position.x, 3.9, pillar.position.z)
        group.add(cap)
      }

      // arch
      const archMat = new THREE.MeshStandardMaterial({ color: 0x7f8374, flatShading: true, roughness: 0.95 })
      const archL = new THREE.Mesh(new THREE.BoxGeometry(0.8, 5, 0.8), archMat)
      archL.position.set(-3.2, 2.6, 0)
      const archR = archL.clone()
      archR.position.x = 3.2
      const archTop = new THREE.Mesh(new THREE.BoxGeometry(7.6, 0.8, 0.9), archMat)
      archTop.position.set(0, 5.1, 0)
      archL.castShadow = archR.castShadow = true
      group.add(archL, archR, archTop)

      const glowColor = new THREE.Color(data.color)
      const crystal = new THREE.Mesh(new THREE.OctahedronGeometry(1.05, 0), new THREE.MeshStandardMaterial({
        color: glowColor, emissive: glowColor, emissiveIntensity: 1.1, flatShading: true, roughness: 0.25, metalness: 0.25,
      }))
      crystal.position.y = 2.6
      group.add(crystal)

      const halo = new THREE.Sprite(new THREE.SpriteMaterial({
        map: softDiscTexture(128, 'rgba(255,255,255,0.7)', 'rgba(255,255,255,0)'),
        color: glowColor, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false,
      }))
      halo.scale.setScalar(9)
      halo.position.y = 2.6
      group.add(halo)

      const rune = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), new THREE.MeshBasicMaterial({
        map: runeTex, color: glowColor, transparent: true, opacity: 0.42, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
      }))
      rune.rotation.x = -Math.PI / 2
      rune.position.y = 0.78
      group.add(rune)

      const beam = new THREE.Mesh(
        new THREE.CylinderGeometry(0.16, 1.6, 26, 8, 1, true),
        new THREE.MeshBasicMaterial({ color: glowColor, transparent: true, opacity: 0.08, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }),
      )
      beam.position.y = 13
      group.add(beam)

      this.group.add(group)
      this.shrines.push({
        ...data, group, crystal, halo, rune, beam, y,
        position: new THREE.Vector3(x, y, z),
        activated: false,
        timer: Math.random() * 4,
      })
    }
  }

  /* ── essence pickups ── */
  buildEssences() {
    const rng = mulberry32(99117)
    const positions = []
    for (let i = 0; i < 16; i++) {
      for (let attempt = 0; attempt < 40; attempt++) {
        const a = rng() * Math.PI * 2
        const r = 26 + rng() * 150
        const x = Math.cos(a) * r
        const z = Math.sin(a) * r
        const h = terrainHeight(x, z)
        if (h < 0.8 || h > 22) continue
        if (terrainSlope(x, z) > 0.5) continue
        if (positions.some((p) => Math.hypot(p.x - x, p.z - z) < 18)) continue
        if (SHRINES.some((s) => Math.hypot(s.pos.x - x, s.pos.y - z) < 10)) continue
        positions.push({ x, z, y: h })
        break
      }
    }
    const geo = new THREE.OctahedronGeometry(0.36, 0)
    const tex = softDiscTexture(64, 'rgba(150,255,240,0.8)', 'rgba(60,220,200,0)')
    positions.forEach((p, i) => {
      const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
        color: 0x9effe0, emissive: 0x38e0c0, emissiveIntensity: 1.6, flatShading: true, roughness: 0.2,
      }))
      mesh.position.set(p.x, p.y + 1.1, p.z)
      this.group.add(mesh)
      const halo = new THREE.Sprite(new THREE.SpriteMaterial({
        map: tex, color: 0x7effe0, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false,
      }))
      halo.scale.setScalar(3.4)
      halo.position.copy(mesh.position)
      this.group.add(halo)
      this.essences.push({ mesh, halo, base: p.y + 1.1, phase: i * 1.3, taken: false })
    })
  }

  /* ── floating islands ── */
  buildFloatingIslands() {
    const rockMat = new THREE.MeshStandardMaterial({ color: 0x6f6a58, flatShading: true, roughness: 1 })
    const grassMat = new THREE.MeshStandardMaterial({ color: 0x5c9445, flatShading: true, roughness: 0.95 })
    const spots = [
      { x: -122, y: 58, z: -118, s: 1.35, ph: 0.4 },
      { x: 132, y: 47, z: -64, s: 0.9, ph: 2.1 },
      { x: 62, y: 66, z: 154, s: 1.05, ph: 4.0 },
    ]
    for (const spot of spots) {
      const g = new THREE.Group()
      const rock = new THREE.Mesh(new THREE.ConeGeometry(11, 20, 7, 2), rockMat)
      rock.rotation.x = Math.PI
      rock.position.y = -7
      g.add(rock)
      const top = new THREE.Mesh(new THREE.CylinderGeometry(11.3, 10, 2, 7), grassMat)
      top.position.y = 3.4
      g.add(top)
      const tree = new THREE.Group()
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.9, 6, 5), new THREE.MeshStandardMaterial({ color: 0x5a422e, flatShading: true }))
      trunk.position.y = 6
      tree.add(trunk)
      const canopy = new THREE.Mesh(new THREE.IcosahedronGeometry(4.6, 0), new THREE.MeshStandardMaterial({ color: 0x4f9a52, flatShading: true, roughness: 0.9 }))
      canopy.position.y = 9.6
      canopy.scale.y = 0.8
      tree.add(canopy)
      tree.position.set(2, 3, 0)
      g.add(tree)
      for (let i = 0; i < 4; i++) {
        const crystal = new THREE.Mesh(new THREE.IcosahedronGeometry(0.5, 0), new THREE.MeshStandardMaterial({ color: 0x9df5d8, emissive: 0x53d6b0, emissiveIntensity: 1.2, flatShading: true }))
        crystal.position.set(Math.cos(i * 1.7) * 7, -2 - i, Math.sin(i * 1.7) * 7)
        g.add(crystal)
      }
      g.position.set(spot.x, spot.y, spot.z)
      g.scale.setScalar(spot.s)
      this.group.add(g)
      this.islands.push({ group: g, baseY: spot.y, phase: spot.ph })
    }
  }

  buildClouds() {
    const tex = cloudTexture(256)
    const rng = this.rng
    for (let i = 0; i < 24; i++) {
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
        map: tex, color: 0xfff0d8, transparent: true, opacity: 0.28 + rng() * 0.24, depthWrite: false, fog: false,
      }))
      const scale = 46 + rng() * 90
      sprite.scale.set(scale, scale * 0.42, 1)
      sprite.position.set((rng() - 0.5) * 700, 62 + rng() * 45, (rng() - 0.5) * 700)
      this.group.add(sprite)
      this.clouds.push({ sprite, speed: 0.6 + rng() * 1.2 })
    }
  }

  buildBirds() {
    const matDark = new THREE.MeshBasicMaterial({ color: 0x2c3b3a, side: THREE.DoubleSide, transparent: true, opacity: 0.7 })
    for (let i = 0; i < 7; i++) {
      const g = new THREE.Group()
      const wingGeo = new THREE.BufferGeometry()
      wingGeo.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 2.4, 0, 0.5, 0, 0, 0.9], 3))
      wingGeo.computeVertexNormals()
      const l = new THREE.Mesh(wingGeo, matDark)
      const r = new THREE.Mesh(wingGeo, matDark)
      r.scale.x = -1
      g.add(l, r)
      g.scale.setScalar(0.9 + Math.random() * 0.7)
      this.group.add(g)
      this.birds.push({ group: g, l, r, radius: 55 + Math.random() * 70, y: 34 + Math.random() * 26, angle: Math.random() * Math.PI * 2, speed: 0.04 + Math.random() * 0.04, centerX: (Math.random() - 0.5) * 100, centerZ: (Math.random() - 0.5) * 100, flap: Math.random() * 10 })
    }
  }

  buildFireflies() {
    const count = this.mobile ? 70 : 150
    const geo = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    const base = []
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2
      const r = 8 + Math.sqrt(Math.random()) * 45
      const x = Math.cos(a) * r
      const z = Math.sin(a) * r
      const y = this.treeBaseY + 1 + Math.random() * 18
      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
      base.push({ x, y, z, phase: Math.random() * 10, amp: 0.6 + Math.random() * 1.6 })
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const mat = new THREE.PointsMaterial({
      map: softDiscTexture(48, 'rgba(255,240,180,0.9)', 'rgba(255,220,120,0)'),
      size: 0.62, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false, color: 0xffe6a8, sizeAttenuation: true,
    })
    const points = new THREE.Points(geo, mat)
    this.group.add(points)
    this.fireflies = { points, base, positions }
  }

  /* ── static map for minimap ── */
  buildMapCanvas() {
    const size = 240
    const c = document.createElement('canvas')
    c.width = c.height = size
    const ctx = c.getContext('2d')
    const img = ctx.createImageData(size, size)
    const col = new THREE.Color()
    const mapCol = new THREE.Color()
    const palette = {
      meadow: new THREE.Color(0x628f49),
      ember: new THREE.Color(0x9a6845),
      aqua: new THREE.Color(0x578f72),
      stone: new THREE.Color(0x7c8273),
      forest: new THREE.Color(0x416f3e),
    }
    const water = new THREE.Color(0x2c5f6b)
    const sand = new THREE.Color(0xb39a70)
    const rock = new THREE.Color(0x6a6c61)
    for (let py = 0; py < size; py++) {
      for (let px = 0; px < size; px++) {
        const wx = (px / size - 0.5) * WORLD_SIZE
        const wz = (py / size - 0.5) * WORLD_SIZE
        const h = terrainHeight(wx, wz)
        const reg = regionAt(wx, wz)
        col.copy(palette[reg.id])
        if (h < 0.9) col.lerp(water, smoothstep(0.9, -1.2, h))
        else if (h < 2.4) col.lerp(sand, 0.5)
        if (h > 22) col.lerp(rock, 0.6)
        const slope = terrainSlope(wx, wz, 2.4)
        col.offsetHSL(0, 0, -slope * 0.12 + (fbm(wx * 0.2, wz * 0.2, 2) - 0.5) * 0.08)
        const i = (py * size + px) * 4
        mapCol.copy(col)
        img.data[i] = mapCol.r * 255
        img.data[i + 1] = mapCol.g * 255
        img.data[i + 2] = mapCol.b * 255
        img.data[i + 3] = 255
      }
    }
    ctx.putImageData(img, 0, 0)
    this.mapCanvas = c
  }

  /* ── queries ── */
  heightAt(x, z) { return terrainHeight(x, z) }

  canWalk(x, z) {
    if (Math.hypot(x, z) > WORLD_RADIUS - 6) return false
    const h = terrainHeight(x, z)
    if (h < -0.5) return false
    return terrainSlope(x, z, 0.9) < 0.95
  }

  isNearShrine(x, z, pad = 5.5) {
    return this.shrines.find((s) => Math.hypot(s.pos.x - x, s.pos.z - z) < pad)
  }

  nearestShrine(x, z, pad = 6) {
    let best = null
    let bestD = pad
    for (const s of this.shrines) {
      const d = Math.hypot(s.pos.x - x, s.pos.z - z)
      if (d < bestD) { bestD = d; best = s }
    }
    return best
  }

  /* ── frame ── */
  update(dt, time, playerPos) {
    this.time = time
    if (this.waterUniforms) this.waterUniforms.uTime.value = time
    if (this.grassUniforms) this.grassUniforms.uTime.value = time

    this.runeRings.forEach((r) => {
      r.mesh.rotation.z += r.speed * dt
      r.mesh.material.opacity = 0.36 + Math.sin(time * 0.8 + r.phase) * 0.16
    })

    this.crystals.forEach((c) => {
      const angle = c.angle + time * c.speed
      c.mesh.position.set(Math.cos(angle) * c.radius, c.y + Math.sin(time * 0.7 + c.bob) * 0.7, Math.sin(angle) * c.radius)
      c.mesh.rotation.y += dt * 0.6
      c.mesh.rotation.x += dt * 0.25
      c.halo.position.copy(c.mesh.position)
      c.halo.material.opacity = 0.32 + Math.sin(time * 1.4 + c.bob) * 0.14
    })

    this.treeHalo.material.opacity = 0.26 + Math.sin(time * 0.6) * 0.08
    this.canopy.rotation.y = Math.sin(time * 0.05) * 0.03

    this.extras.forEach((e) => {
      e.sprite.scale.setScalar(e.base + Math.sin(time * 2.4 + e.phase) * 0.22)
      e.sprite.material.opacity = 0.55 + Math.sin(time * 3 + e.phase) * 0.2
    })

    this.shrines.forEach((s, i) => {
      s.crystal.rotation.y += dt * 0.7
      s.crystal.position.y = 2.6 + Math.sin(time * 1.1 + i) * 0.25
      s.halo.position.y = s.crystal.position.y
      s.halo.material.opacity = 0.5 + Math.sin(time * 1.6 + i) * 0.18
      s.rune.rotation.z += dt * 0.08
      if (s.activated) {
        s.beam.material.opacity = 0.05 + Math.sin(time * 2 + i) * 0.02
      } else {
        s.beam.material.opacity = 0.07 + Math.sin(time * 1.3 + i) * 0.03
      }
    })

    this.essences.forEach((e) => {
      if (e.taken) return
      e.mesh.position.y = e.base + Math.sin(time * 1.6 + e.phase) * 0.28
      e.mesh.rotation.y += dt * 1.1
      e.halo.position.copy(e.mesh.position)
      e.halo.material.opacity = 0.45 + Math.sin(time * 2.2 + e.phase) * 0.2
    })

    this.islands.forEach((is) => {
      is.group.position.y = is.baseY + Math.sin(time * 0.35 + is.phase) * 2.2
      is.group.rotation.y += dt * 0.012
    })

    this.clouds.forEach((c) => {
      c.sprite.position.x += c.speed * dt
      if (c.sprite.position.x > 380) c.sprite.position.x = -380
    })

    this.birds.forEach((b) => {
      b.angle += b.speed * dt
      const x = b.centerX + Math.cos(b.angle) * b.radius
      const z = b.centerZ + Math.sin(b.angle) * b.radius
      b.group.position.set(x, b.y + Math.sin(b.angle * 3) * 1.5, z)
      b.group.rotation.y = -b.angle + Math.PI / 2
      const flap = Math.sin(time * 7 + b.flap) * 0.5
      b.l.rotation.z = flap
      b.r.rotation.z = -flap
    })

    if (this.fireflies) {
      const pos = this.fireflies.positions
      this.fireflies.base.forEach((f, i) => {
        pos[i * 3] = f.x + Math.sin(time * 0.4 + f.phase) * f.amp * 2.2
        pos[i * 3 + 1] = f.y + Math.sin(time * 0.7 + f.phase * 1.7) * f.amp
        pos[i * 3 + 2] = f.z + Math.cos(time * 0.35 + f.phase) * f.amp * 2.2
      })
      this.fireflies.points.geometry.attributes.position.needsUpdate = true
    }

    // subtle shadow follow
    void playerPos
  }

  markShrineActivated(id) {
    const s = this.shrines.find((x) => x.id === id)
    if (s) {
      s.activated = true
      s.crystal.material.emissiveIntensity = 0.3
      s.rune.material.opacity = 0.12
      s.beam.material.opacity = 0.02
    }
  }
}
