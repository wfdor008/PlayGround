import * as THREE from 'three'
import { mat, softDiscTexture } from './engine.js'

const ico = (r = 1, d = 0) => new THREE.IcosahedronGeometry(r, d)
const box = (x, y, z) => new THREE.BoxGeometry(x, y, z)
const cyl = (rt, rb, h, s = 6) => new THREE.CylinderGeometry(rt, rb, h, s)
const cone = (r, h, s = 6) => new THREE.ConeGeometry(r, h, s)

function mesh(geo, material, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(geo, material)
  m.position.set(x, y, z)
  return m
}

function shade(group) {
  group.traverse((o) => {
    if (o.isMesh && !o.material?.blending) {
      o.castShadow = true
      o.receiveShadow = true
    }
  })
}

function glowSprite(color, scale = 1, opacity = 0.7) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({
    map: softDiscTexture(64, 'rgba(255,255,255,0.9)', 'rgba(255,255,255,0)'),
    color, transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
  }))
  s.scale.setScalar(scale)
  return s
}

/* ══════════════════════════ player ══════════════════════════ */

export function buildPlayer() {
  const root = new THREE.Group()
  root.name = 'hunter'

  const cloth = mat(0x2b6f63, { roughness: 0.9 })
  const clothDark = mat(0x1d4f47, { roughness: 0.95 })
  const leather = mat(0x6b4a33, { roughness: 0.85 })
  const leatherDark = mat(0x46301f, { roughness: 0.9 })
  const metal = mat(0xb98a52, { roughness: 0.4, metalness: 0.7 })
  const skin = mat(0xd8a87c, { roughness: 0.9 })
  const bladeMat = mat(0xd9e5df, { roughness: 0.24, metalness: 0.9, emissive: 0x1d6f63, emissiveIntensity: 0.22 })
  const runeMat = new THREE.MeshStandardMaterial({ color: 0x9cffe4, emissive: 0x5fffd0, emissiveIntensity: 1.8, flatShading: true, roughness: 0.3 })

  // legs
  const legL = new THREE.Group()
  legL.position.set(-0.145, 0.94, 0)
  const thighL = mesh(box(0.17, 0.46, 0.2), leatherDark, 0, -0.22, 0)
  const shinL = mesh(box(0.145, 0.44, 0.18), clothDark, 0, -0.63, 0.015)
  const bootL = mesh(box(0.19, 0.15, 0.32), leather, 0, -0.86, 0.07)
  const shinLGroup = new THREE.Group()
  shinLGroup.position.y = -0.44
  shinL.position.y = -0.2
  bootL.position.y = -0.4
  shinLGroup.add(shinL, bootL)
  legL.add(thighL, shinLGroup)
  const legR = new THREE.Group()
  legR.position.set(0.145, 0.94, 0)
  legR.add(thighL.clone(), shinLGroup.clone())
  root.add(legL, legR)

  // hips
  const hips = mesh(cyl(0.28, 0.25, 0.26, 7), leather, 0, 0.98, 0)
  root.add(hips)
  const belt = mesh(cyl(0.3, 0.3, 0.09, 7), leatherDark, 0, 1.05, 0)
  root.add(belt)
  const buckle = mesh(box(0.12, 0.09, 0.05), metal, 0, 1.05, 0.29)
  root.add(buckle)

  // torso
  const torso = new THREE.Group()
  torso.position.y = 1.28
  root.add(torso)
  const chest = mesh(cyl(0.31, 0.26, 0.62, 7), cloth, 0, 0.14, 0)
  chest.scale.z = 0.82
  torso.add(chest)
  const chestPlate = mesh(box(0.38, 0.36, 0.07), clothDark, 0, 0.2, 0.235)
  chestPlate.rotation.x = -0.05
  torso.add(chestPlate)
  const runeChest = mesh(box(0.035, 0.2, 0.02), runeMat, 0, 0.22, 0.275)
  torso.add(runeChest)
  const runeChest2 = mesh(box(0.14, 0.03, 0.02), runeMat, 0, 0.32, 0.275)
  torso.add(runeChest2)
  const beltPouch = mesh(box(0.13, 0.16, 0.09), leather, 0.22, -0.11, 0.15)
  beltPouch.rotation.z = 0.1
  torso.add(beltPouch)
  const pouch2 = mesh(box(0.11, 0.14, 0.08), leather, -0.22, -0.1, 0.12)
  pouch2.rotation.z = -0.12
  torso.add(pouch2)

  // scarf
  const scarf = mesh(cyl(0.2, 0.21, 0.14, 7), mat(0xc45d43, { roughness: 0.95 }), 0, 0.46, 0)
  torso.add(scarf)
  const scarfTail = mesh(box(0.12, 0.34, 0.03), mat(0xa14a35), 0.11, 0.29, -0.2)
  scarfTail.rotation.x = 0.4
  torso.add(scarfTail)

  // shoulder pads
  const padL = mesh(ico(0.17, 0), clothDark, -0.34, 0.31, 0)
  padL.scale.set(1, 0.75, 1)
  const padR = padL.clone()
  padR.position.x = 0.34
  torso.add(padL, padR)

  // cape
  const capePivot = new THREE.Group()
  capePivot.position.set(0, 0.42, -0.13)
  torso.add(capePivot)
  const cape = mesh(box(0.58, 0.92, 0.035), clothDark, 0, -0.4, -0.04)
  cape.rotation.x = -0.08
  capePivot.add(cape)
  const capeTrim = mesh(box(0.6, 0.06, 0.045), mat(0xb98a52, { emissive: 0x5a3a10, emissiveIntensity: 0.4 }), 0, -0.84, -0.04)
  capeTrim.rotation.x = -0.08
  capePivot.add(capeTrim)
  const capeRune = mesh(box(0.16, 0.16, 0.012), runeMat, 0, -0.42, -0.065)
  capeRune.scale.set(1, 1, 1)
  capeRune.rotation.z = Math.PI / 4
  capePivot.add(capeRune)

  // head
  const head = new THREE.Group()
  head.position.y = 0.55
  torso.add(head)
  const neck = mesh(cyl(0.075, 0.09, 0.12, 6), skin, 0, 0.01, 0)
  head.add(neck)
  const skull = mesh(ico(0.19, 1), skin, 0, 0.16, 0)
  skull.scale.set(0.92, 1.05, 0.95)
  head.add(skull)
  const hood = mesh(new THREE.ConeGeometry(0.29, 0.46, 7, 1, true), cloth, 0, 0.22, -0.03)
  hood.scale.z = 0.95
  head.add(hood)
  const hoodBack = mesh(ico(0.2, 0), clothDark, 0, 0.14, -0.16)
  hoodBack.scale.set(1.1, 0.9, 0.8)
  head.add(hoodBack)
  // face mask
  const mask = mesh(box(0.23, 0.1, 0.06), leatherDark, 0, 0.11, 0.16)
  head.add(mask)
  const eyeMat = new THREE.MeshBasicMaterial({ color: 0xc9ffed })
  const eyeL = mesh(box(0.045, 0.025, 0.02), eyeMat, -0.065, 0.155, 0.205)
  const eyeR = mesh(box(0.045, 0.025, 0.02), eyeMat, 0.065, 0.155, 0.205)
  head.add(eyeL, eyeR)

  // arms
  const armL = new THREE.Group()
  armL.position.set(-0.36, 1.62, 0)
  root.add(armL)
  const upperL = mesh(box(0.14, 0.34, 0.15), cloth, 0, -0.16, 0)
  armL.add(upperL)
  const foreL = new THREE.Group()
  foreL.position.y = -0.32
  armL.add(foreL)
  const lowerL = mesh(box(0.12, 0.32, 0.13), clothDark, 0, -0.15, 0)
  const handL = mesh(ico(0.085, 0), skin, 0, -0.33, 0.01)
  foreL.add(lowerL, handL)
  const bracerL = mesh(cyl(0.085, 0.075, 0.14, 6), leather, 0, -0.26, 0)
  foreL.add(bracerL)

  const armR = new THREE.Group()
  armR.position.set(0.36, 1.62, 0)
  root.add(armR)
  const upperR = mesh(box(0.14, 0.34, 0.15), cloth, 0, -0.16, 0)
  armR.add(upperR)
  const foreR = new THREE.Group()
  foreR.position.y = -0.32
  armR.add(foreR)
  const lowerR = mesh(box(0.12, 0.32, 0.13), clothDark, 0, -0.15, 0)
  const handR = mesh(ico(0.085, 0), skin, 0, -0.33, 0.01)
  foreR.add(lowerR, handR)
  const bracerR = mesh(cyl(0.085, 0.075, 0.14, 6), leather, 0, -0.26, 0)
  foreR.add(bracerR)

  // sword
  const sword = new THREE.Group()
  sword.position.set(0, -0.35, 0.02)
  foreR.add(sword)
  const grip = mesh(cyl(0.032, 0.036, 0.24, 6), leatherDark, 0, 0.06, 0)
  sword.add(grip)
  const pommel = mesh(ico(0.06, 0), metal, 0, -0.07, 0)
  sword.add(pommel)
  const guard = mesh(box(0.34, 0.055, 0.09), metal, 0, 0.19, 0)
  sword.add(guard)
  const guardTipL = mesh(cone(0.055, 0.16, 4), metal, -0.19, 0.22, 0)
  guardTipL.rotation.z = -0.5
  const guardTipR = guardTipL.clone()
  guardTipR.position.x = 0.19
  guardTipR.rotation.z = 0.5
  sword.add(guardTipL, guardTipR)

  const bladeShape = new THREE.Shape()
  bladeShape.moveTo(-0.085, 0)
  bladeShape.lineTo(-0.075, 0.92)
  bladeShape.lineTo(0, 1.16)
  bladeShape.lineTo(0.075, 0.92)
  bladeShape.lineTo(0.085, 0)
  bladeShape.lineTo(-0.085, 0)
  const bladeGeo = new THREE.ExtrudeGeometry(bladeShape, { depth: 0.035, bevelEnabled: true, bevelSize: 0.008, bevelThickness: 0.008, bevelSegments: 1 })
  bladeGeo.translate(0, 0.22, -0.0175)
  const blade = new THREE.Mesh(bladeGeo, bladeMat)
  sword.add(blade)
  const bladeRune = mesh(box(0.018, 0.72, 0.045), runeMat, 0, 0.66, 0)
  bladeRune.material = new THREE.MeshBasicMaterial({ color: 0x8effe1, transparent: true, opacity: 0.55 })
  sword.add(bladeRune)
  const swordGlow = glowSprite(0x7effd9, 1.6, 0.35)
  swordGlow.position.set(0, 0.75, 0)
  sword.add(swordGlow)

  sword.rotation.x = 2.62
  sword.rotation.z = 0.12
  foreR.rotation.x = -0.28
  armR.rotation.z = -0.1
  armL.rotation.z = 0.1
  foreL.rotation.x = 0.18

  shade(root)

  const swordTrail = new THREE.Mesh(
    new THREE.BufferGeometry(),
    new THREE.MeshBasicMaterial({ color: 0x9ffff0, transparent: true, opacity: 0, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false }),
  )
  swordTrail.visible = false
  root.add(swordTrail)

  root.userData.parts = {
    legL, legR, armL, armR, foreL, foreR, torso, head, capePivot, sword, blade, bladeRune, swordGlow, scarfTail,
    shinLGroup: legL.children[1], shinRGroup: legR.children[1],
  }
  root.userData.materials = { cloth, clothDark, bladeMat, runeMat }
  root.userData.height = 1.75
  return root
}

/* ══════════════════════════ creatures ══════════════════════════ */

const SPECIES_STYLE = {
  brasalume: {
    body: 0xd8623b, belly: 0xffd7a1, accent: 0xffa646, eye: 0xffe9a0, dark: 0x8c3a24,
    type: 'BRASA', root: 'quad', scale: 1, glow: 0xff9a4d, aura: 0xff6b3d,
  },
  aquari: {
    body: 0x3f9aac, belly: 0xc8f1ea, accent: 0x63d6d4, eye: 0xe6fffb, dark: 0x256475,
    type: 'AQUA', root: 'quad', scale: 0.95, glow: 0x6fe6e0, aura: 0x3fc9d4,
  },
  musgo: {
    body: 0x668c44, belly: 0xb4c98a, accent: 0x8fc46e, eye: 0xf4f5c8, dark: 0x395b2c,
    type: 'MUSGO', root: 'quad', scale: 1.15, glow: 0x9edb75, aura: 0x6fa84c,
  },
  pedral: {
    body: 0x8a8374, belly: 0xb6ad95, accent: 0xff9c55, eye: 0xffd27a, dark: 0x554f43,
    type: 'PEDRA', root: 'golem', scale: 1.2, glow: 0xffa85c, aura: 0xd0793c,
  },
  zephyro: {
    body: 0x8478cf, belly: 0xdad2ff, accent: 0xa99bff, eye: 0xeff1ff, dark: 0x4c4389,
    type: 'VENTO', root: 'bird', scale: 1.05, glow: 0xb6a6ff, aura: 0x8d7bff,
  },
  umbra: {
    body: 0x4a3f68, belly: 0x8b7cab, accent: 0xc79cff, eye: 0xe6d4ff, dark: 0x2a2340,
    type: 'VÉU', root: 'wraith', scale: 1.0, glow: 0xc79cff, aura: 0x9a6dff,
  },
}

export function creatureStyle(id) {
  return SPECIES_STYLE[id] || SPECIES_STYLE.brasalume
}

function quadruped(style) {
  const root = new THREE.Group()
  const fur = mat(style.body, { roughness: 0.88 })
  const bellyMat = mat(style.belly, { roughness: 0.9 })
  const accentMat = mat(style.accent, { roughness: 0.7, emissive: style.accent, emissiveIntensity: 0.12 })
  const darkMat = mat(style.dark, { roughness: 0.92 })
  const eyeMat = new THREE.MeshBasicMaterial({ color: style.eye })
  const blackMat = new THREE.MeshBasicMaterial({ color: 0x171a16 })
  const glowMatC = new THREE.MeshBasicMaterial({ color: style.glow })

  const body = mesh(ico(1, 1), fur, 0, 0.72, 0)
  body.scale.set(0.4, 0.38, 0.62)
  root.add(body)
  const belly = mesh(ico(1, 1), bellyMat, 0, 0.62, 0.06)
  belly.scale.set(0.31, 0.24, 0.47)
  root.add(belly)

  const head = new THREE.Group()
  head.position.set(0, 0.92, 0.5)
  root.add(head)
  const skull = mesh(ico(1, 1), fur, 0, 0, 0)
  skull.scale.set(0.29, 0.27, 0.3)
  head.add(skull)
  const muzzle = mesh(ico(1, 0), bellyMat, 0, -0.06, 0.24)
  muzzle.scale.set(0.14, 0.11, 0.14)
  head.add(muzzle)
  const nose = mesh(ico(0.045, 0), darkMat, 0, -0.04, 0.37)
  head.add(nose)
  const eyeL = mesh(ico(0.048, 0), eyeMat, -0.13, 0.06, 0.22)
  const eyeR = eyeL.clone()
  eyeR.position.x = 0.13
  head.add(eyeL, eyeR)
  const pupilL = mesh(ico(0.022, 0), blackMat, -0.135, 0.06, 0.26)
  const pupilR = pupilL.clone()
  pupilR.position.x = 0.135
  head.add(pupilL, pupilR)

  const earL = mesh(cone(0.1, 0.32, 4), fur, -0.17, 0.24, -0.02)
  earL.rotation.z = 0.3
  const earR = earL.clone()
  earR.position.x = 0.17
  earR.rotation.z = -0.3
  head.add(earL, earR)
  const earInnerL = mesh(cone(0.05, 0.18, 4), accentMat, -0.17, 0.24, 0.01)
  earInnerL.rotation.z = 0.3
  const earInnerR = earInnerL.clone()
  earInnerR.position.x = 0.17
  earInnerR.rotation.z = -0.3
  head.add(earInnerL, earInnerR)

  const legs = []
  for (let i = 0; i < 4; i++) {
    const front = i < 2
    const side = i % 2 === 0 ? -1 : 1
    const leg = new THREE.Group()
    leg.position.set(side * 0.21, 0.52, front ? 0.38 : -0.36)
    const upper = mesh(box(0.12, 0.4, 0.15), fur, 0, -0.2, 0)
    const paw = mesh(box(0.14, 0.12, 0.19), darkMat, 0, -0.44, 0.025)
    leg.add(upper, paw)
    root.add(leg)
    legs.push(leg)
  }

  const tail = new THREE.Group()
  tail.position.set(0, 0.84, -0.56)
  root.add(tail)
  let tailSeg = mesh(ico(0.15, 0), fur, 0, 0, 0)
  tail.add(tailSeg)
  const tail2 = mesh(ico(0.12, 0), accentMat, 0, 0.04, -0.18)
  tail.add(tail2)
  tail.rotation.x = -0.5

  const parts = { body, head, legs, tail, ears: [earL, earR] }

  // per-species details are added by caller
  return { root, parts, mats: { fur, bellyMat, accentMat, darkMat, eyeMat, glowMatC } }
}

function golem(style) {
  const root = new THREE.Group()
  const stone = mat(style.body, { roughness: 0.95 })
  const stoneLight = mat(style.belly, { roughness: 0.95 })
  const dark = mat(style.dark, { roughness: 1 })
  const crack = new THREE.MeshStandardMaterial({ color: style.accent, emissive: style.accent, emissiveIntensity: 1.7, flatShading: true })
  const eyeMat = new THREE.MeshBasicMaterial({ color: style.eye })

  const hips = mesh(ico(0.55, 0), stone, 0, 0.95, 0)
  hips.scale.set(1, 0.65, 0.8)
  root.add(hips)
  const body = new THREE.Group()
  body.position.y = 1.35
  root.add(body)
  const chest = mesh(ico(0.65, 0), stone, 0, 0.1, 0)
  chest.scale.set(0.95, 0.85, 0.72)
  body.add(chest)
  const chestLight = mesh(ico(0.4, 0), stoneLight, 0, 0.2, 0.35)
  chestLight.scale.set(0.9, 0.6, 0.4)
  body.add(chestLight)
  const crack1 = mesh(box(0.06, 0.55, 0.05), crack, 0.18, 0.15, 0.48)
  crack1.rotation.z = 0.35
  const crack2 = mesh(box(0.04, 0.35, 0.05), crack, -0.16, 0.08, 0.5)
  crack2.rotation.z = -0.5
  body.add(crack1, crack2)
  const heart = mesh(ico(0.15, 0), crack, 0, 0.15, 0.45)
  body.add(heart)

  const head = new THREE.Group()
  head.position.set(0, 0.85, 0.12)
  body.add(head)
  const skull = mesh(box(0.5, 0.46, 0.46), stone, 0, 0, 0)
  head.add(skull)
  const jaw = mesh(box(0.42, 0.16, 0.4), stoneLight, 0, -0.29, 0.06)
  head.add(jaw)
  const brow = mesh(box(0.56, 0.1, 0.14), dark, 0, 0.13, 0.22)
  head.add(brow)
  const eyeL = mesh(box(0.11, 0.06, 0.04), eyeMat, -0.15, 0.04, 0.24)
  const eyeR = eyeL.clone()
  eyeR.position.x = 0.15
  head.add(eyeL, eyeR)

  const arms = []
  for (let i = 0; i < 2; i++) {
    const side = i === 0 ? -1 : 1
    const arm = new THREE.Group()
    arm.position.set(side * 0.68, 1.6, 0)
    const upper = mesh(ico(0.28, 0), stone, side * 0.05, -0.1, 0)
    upper.scale.set(0.9, 1.3, 0.9)
    const fist = mesh(ico(0.32, 0), stoneLight, side * 0.08, -0.55, 0)
    const spike = mesh(cone(0.1, 0.3, 4), crack, side * 0.08, -0.82, 0)
    spike.rotation.z = Math.PI
    arm.add(upper, fist, spike)
    arm.rotation.z = side * 0.18
    root.add(arm)
    arms.push(arm)
  }

  const legs = []
  for (let i = 0; i < 2; i++) {
    const side = i === 0 ? -1 : 1
    const leg = new THREE.Group()
    leg.position.set(side * 0.26, 0.75, 0)
    const thigh = mesh(ico(0.27, 0), stone, 0, -0.1, 0)
    thigh.scale.set(0.9, 1.0, 0.9)
    const foot = mesh(box(0.35, 0.18, 0.44), stoneLight, 0, -0.37, 0.06)
    leg.add(thigh, foot)
    root.add(leg)
    legs.push(leg)
  }

  const runes = []
  for (let i = 0; i < 5; i++) {
    const r = mesh(box(0.03, 0.14, 0.03), crack, (i - 2) * 0.13, 1.9 - Math.abs(i - 2) * 0.12, 0.4)
    body.add(r)
    runes.push(r)
  }

  return {
    root,
    parts: { body, head, arms, legs, heart, crack1, crack2, runes },
    mats: { fur: stone, bellyMat: stoneLight, accentMat: crack, darkMat: dark, eyeMat },
  }
}

function bird(style) {
  const root = new THREE.Group()
  const feather = mat(style.body, { roughness: 0.8 })
  const light = mat(style.belly, { roughness: 0.85 })
  const accent = mat(style.accent, { roughness: 0.6, emissive: style.accent, emissiveIntensity: 0.2 })
  const dark = mat(style.dark, { roughness: 0.85 })
  const eyeMat = new THREE.MeshBasicMaterial({ color: style.eye })

  const body = new THREE.Group()
  body.position.y = 1.05
  root.add(body)
  const torso = mesh(ico(0.38, 1), feather, 0, 0, 0)
  torso.scale.set(0.9, 1.1, 0.85)
  body.add(torso)
  const chest = mesh(ico(0.26, 1), light, 0, -0.06, 0.18)
  chest.scale.set(0.9, 1, 0.6)
  body.add(chest)
  const tail = mesh(cone(0.3, 0.8, 5), accent, 0, -0.2, -0.55)
  tail.rotation.x = -1.9
  body.add(tail)

  const head = new THREE.Group()
  head.position.set(0, 0.4, 0.16)
  body.add(head)
  const skull = mesh(ico(0.24, 1), feather, 0, 0, 0)
  head.add(skull)
  const beak = mesh(cone(0.09, 0.26, 4), accent, 0, -0.02, 0.24)
  beak.rotation.x = Math.PI / 2
  head.add(beak)
  const eyeL = mesh(ico(0.04, 0), eyeMat, -0.12, 0.06, 0.17)
  const eyeR = eyeL.clone()
  eyeR.position.x = 0.12
  head.add(eyeL, eyeR)
  const crest = mesh(cone(0.08, 0.4, 4), accent, 0, 0.24, -0.04)
  crest.rotation.x = -0.35
  head.add(crest)
  const crest2 = mesh(cone(0.06, 0.3, 4), feather, 0.1, 0.22, -0.08)
  crest2.rotation.z = -0.5
  head.add(crest2)

  const wings = []
  for (let i = 0; i < 2; i++) {
    const side = i === 0 ? -1 : 1
    const wing = new THREE.Group()
    wing.position.set(side * 0.28, 1.15, 0)
    const shape = new THREE.Shape()
    shape.moveTo(0, 0)
    shape.lineTo(side * 1.15, 0.25)
    shape.lineTo(side * 1.35, 0.05)
    shape.lineTo(side * 0.95, -0.3)
    shape.lineTo(side * 0.3, -0.28)
    shape.lineTo(0, -0.1)
    const geo = new THREE.ShapeGeometry(shape)
    geo.rotateX(-Math.PI / 2)
    const featherMat = mat(style.body, { roughness: 0.85, side: THREE.DoubleSide })
    const w = new THREE.Mesh(geo, featherMat)
    const tip = mesh(cone(0.14, 0.5, 4), accent, side * 1.15, 0.2, 0.02)
    tip.rotation.z = side * 1.5
    wing.add(w, tip)
    root.add(wing)
    wings.push(wing)
  }

  const legs = []
  for (let i = 0; i < 2; i++) {
    const side = i === 0 ? -1 : 1
    const leg = new THREE.Group()
    leg.position.set(side * 0.12, 0.82, 0)
    const shin = mesh(cyl(0.025, 0.03, 0.3, 4), dark, 0, -0.15, 0)
    const foot = mesh(cone(0.08, 0.16, 3), accent, 0, -0.31, 0.04)
    foot.rotation.x = Math.PI / 2
    leg.add(shin, foot)
    root.add(leg)
    legs.push(leg)
  }

  return {
    root,
    parts: { body, head, wings, legs, tail },
    mats: { fur: feather, bellyMat: light, accentMat: accent, darkMat: dark, eyeMat },
  }
}

function wraith(style) {
  const root = new THREE.Group()
  const cloak = mat(style.body, { roughness: 0.92, side: THREE.DoubleSide })
  const inner = mat(style.belly, { roughness: 0.9 })
  const accent = new THREE.MeshStandardMaterial({ color: style.accent, emissive: style.accent, emissiveIntensity: 1.2, flatShading: true })
  const eyeMat = new THREE.MeshBasicMaterial({ color: style.eye })

  const body = new THREE.Group()
  body.position.y = 1.05
  root.add(body)
  const cloakMesh = mesh(new THREE.ConeGeometry(0.58, 1.5, 8, 1, true), cloak, 0, 0.08, 0)
  body.add(cloakMesh)
  const chest = mesh(ico(0.3, 1), inner, 0, 0.25, 0.08)
  chest.scale.set(0.8, 1.0, 0.6)
  body.add(chest)
  const hood = mesh(new THREE.ConeGeometry(0.36, 0.6, 7, 1, true), cloak, 0, 0.65, -0.02)
  body.add(hood)
  const face = mesh(ico(0.19, 1), mat(0x1b1730, { roughness: 1 }), 0, 0.58, 0.13)
  face.scale.set(0.9, 1, 0.55)
  body.add(face)
  const eyeL = mesh(box(0.075, 0.025, 0.02), eyeMat, -0.075, 0.6, 0.27)
  const eyeR = eyeL.clone()
  eyeR.position.x = 0.075
  body.add(eyeL, eyeR)
  const mouth = mesh(box(0.1, 0.018, 0.02), accent, 0, 0.53, 0.26)
  body.add(mouth)

  const shoulderL = mesh(ico(0.16, 0), cloak, -0.36, 0.45, 0)
  const shoulderR = shoulderL.clone()
  shoulderR.position.x = 0.36
  body.add(shoulderL, shoulderR)
  const armL = new THREE.Group()
  armL.position.set(-0.4, 0.42, 0)
  const armLMesh = mesh(cone(0.08, 0.55, 5), cloak, -0.06, -0.22, 0)
  armLMesh.rotation.z = Math.PI
  armL.add(armLMesh)
  const armR = armL.clone()
  armR.position.x = 0.4
  armR.scale.x = -1
  body.add(armL, armR)

  const wisps = []
  for (let i = 0; i < 5; i++) {
    const w = new THREE.Group()
    const a = (i / 5) * Math.PI * 2
    w.position.set(Math.cos(a) * 0.28, -0.45 - (i % 2) * 0.2, Math.sin(a) * 0.28)
    const strand = mesh(new THREE.ConeGeometry(0.1, 0.7, 4, 1, true), cloak, 0, -0.28, 0)
    strand.rotation.x = Math.PI
    w.add(strand)
    body.add(w)
    wisps.push(w)
  }

  const orbs = []
  for (let i = 0; i < 2; i++) {
    const orb = mesh(ico(0.08, 0), accent, i ? 0.6 : -0.6, 0.4 + i * 0.2, 0.1)
    const glow = glowSprite(style.glow, 0.8, 0.8)
    glow.position.copy(orb.position)
    body.add(orb, glow)
    orbs.push({ orb, glow, phase: i * 2.1 })
  }

  return {
    root,
    parts: { body, head: body, arms: [armL, armR], wisps, orbs, eyeL, eyeR, mouth },
    mats: { fur: cloak, bellyMat: inner, accentMat: accent, eyeMat },
  }
}

const BOSS_CROWN = new THREE.MeshStandardMaterial({ color: 0xe9c46a, metalness: 0.75, roughness: 0.3, emissive: 0x6b4a12, emissiveIntensity: 0.35 })

export function buildCreatureModel(speciesId, { boss = false, companion = false } = {}) {
  const style = creatureStyle(speciesId)
  let built
  if (style.root === 'golem') built = golem(style)
  else if (style.root === 'bird') built = bird(style)
  else if (style.root === 'wraith') built = wraith(style)
  else built = quadruped(style)

  const { root, parts, mats } = built

  // species decorations
  if (speciesId === 'brasalume') {
    const flameMat = new THREE.MeshBasicMaterial({ color: 0xffb35c, transparent: true, opacity: 0.9 })
    const flame = new THREE.Group()
    flame.position.set(0, 0.02, -0.2)
    for (let i = 0; i < 3; i++) {
      const f = mesh(cone(0.16 - i * 0.03, 0.55 + i * 0.22, 5), flameMat, 0, 0.32 + i * 0.18, -0.02 - i * 0.05)
      f.rotation.x = -0.2
      flame.add(f)
    }
    const halo = glowSprite(0xff8a3c, 1.7, 0.65)
    halo.position.y = 0.42
    flame.add(halo)
    parts.tail.add(flame)
    parts.flame = flame
    parts.flameMat = flameMat

    const crestMat = mat(style.accent, { emissive: style.accent, emissiveIntensity: 0.5 })
    for (let i = 0; i < 3; i++) {
      const spike = mesh(cone(0.06, 0.28 - i * 0.05, 4), crestMat, 0, 0.28 + (i - 1) * 0.04, -0.02 - i * 0.09)
      spike.rotation.x = -0.4 - i * 0.12
      parts.head.add(spike)
    }
    const backFlame = mesh(cone(0.16, 0.5, 5), flameMat, 0, 0.88, -0.5)
    backFlame.rotation.x = -0.6
    root.add(backFlame)
  }

  if (speciesId === 'aquari') {
    const finMat = mat(style.accent, { roughness: 0.5, emissive: style.accent, emissiveIntensity: 0.22, side: THREE.DoubleSide })
    const backFin = mesh(cone(0.12, 0.55, 4), finMat, 0, 1.05, -0.1)
    backFin.rotation.x = -0.3
    root.add(backFin)
    const tailFin = mesh(cone(0.3, 0.5, 4), finMat, 0, 0.85, -0.78)
    tailFin.rotation.x = Math.PI / 2
    tailFin.scale.set(1, 1, 0.3)
    root.add(tailFin)
    for (let i = 0; i < 3; i++) {
      const ripple = mesh(ico(0.035, 0), new THREE.MeshBasicMaterial({ color: 0xc9fff8, transparent: true, opacity: 0.8 }), (i - 1) * 0.14, 1.12 + i * 0.04, 0.02)
      ripple.userData.float = i * 1.7
      root.add(ripple)
      parts[`ripple${i}`] = ripple
    }
    const droplet = glowSprite(0x7ff4ef, 1.3, 0.5)
    droplet.position.set(0, 1.2, 0.28)
    root.add(droplet)
    parts.droplet = droplet
  }

  if (speciesId === 'musgo') {
    const mossMat = mat(0x7da84f, { roughness: 1 })
    for (let i = 0; i < 5; i++) {
      const clump = mesh(ico(0.16 + Math.random() * 0.12, 0), mossMat, (Math.random() - 0.5) * 0.4, 0.98 + Math.random() * 0.1, -0.25 + Math.random() * 0.45)
      clump.scale.y = 0.6
      root.add(clump)
    }
    const tuskMat = mat(0xf0e6c8, { roughness: 0.5 })
    const tuskL = mesh(cone(0.045, 0.3, 4), tuskMat, -0.17, -0.06, 0.34)
    tuskL.rotation.x = 0.9
    const tuskR = tuskL.clone()
    tuskR.position.x = 0.17
    parts.head.add(tuskL, tuskR)
    const maneMat = mat(style.dark, { roughness: 1 })
    for (let i = 0; i < 4; i++) {
      const spike = mesh(cone(0.09, 0.36, 4), maneMat, (i - 1.5) * 0.1, 0.12 + i * 0.03, -0.1)
      spike.rotation.x = -0.9
      parts.head.add(spike)
    }
    const leafMat = new THREE.MeshBasicMaterial({ color: 0xa4e07a, transparent: true, opacity: 0.8 })
    for (let i = 0; i < 4; i++) {
      const leaf = mesh(cone(0.05, 0.2, 3), leafMat, (Math.random() - 0.5) * 0.5, 1.1 + Math.random() * 0.2, -0.2 + Math.random() * 0.4)
      leaf.rotation.z = Math.random() * 2
      root.add(leaf)
      parts[`leaf${i}`] = leaf
    }
  }

  if (speciesId === 'pedral') {
    const rockMat = mat(style.dark, { roughness: 1 })
    for (let i = 0; i < 6; i++) {
      const spike = mesh(cone(0.12, 0.4, 4), rockMat, (Math.random() - 0.5) * 0.8, 1.7 + Math.random() * 0.4, -0.35 + Math.random() * 0.3)
      spike.rotation.z = Math.random() * 0.8 - 0.4
      spike.rotation.x = -0.4
      root.add(spike)
    }
    parts.heartGlow = glowSprite(0xff9c58, 1.6, 0.6)
    parts.heartGlow.position.set(0, 1.5, 0.62)
    root.add(parts.heartGlow)
  }

  if (speciesId === 'zephyro') {
    for (let i = 0; i < 3; i++) {
      const feather = mesh(cone(0.07, 0.5, 4), mat(style.accent, { emissive: style.accent, emissiveIntensity: 0.3 }), 0, 0.1, -0.5 - i * 0.16)
      feather.rotation.x = -1.2 - i * 0.12
      feather.rotation.z = (i - 1) * 0.25
      parts.body.add(feather)
    }
    parts.gustGlow = glowSprite(0xb9a8ff, 1.8, 0.35)
    parts.gustGlow.position.set(0, 1.1, 0)
    root.add(parts.gustGlow)
  }

  if (speciesId === 'umbra') {
    const aura = glowSprite(style.glow, 2.4, 0.28)
    aura.position.y = 1.05
    root.add(aura)
    parts.aura = aura
  }

  if (boss) {
    const crown = new THREE.Group()
    crown.position.y = speciesId === 'umbra' ? 0.88 : speciesId === 'pedral' ? 0.9 : speciesId === 'zephyro' ? 0.68 : 0.36
    const ring = mesh(new THREE.TorusGeometry(0.28, 0.045, 4, 10), BOSS_CROWN, 0, 0, 0)
    ring.rotation.x = Math.PI / 2
    crown.add(ring)
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2
      const spike = mesh(cone(0.05, 0.22, 4), BOSS_CROWN, Math.cos(a) * 0.28, 0.08, Math.sin(a) * 0.28)
      crown.add(spike)
    }
    const halo = glowSprite(0xffd27a, 3.4, 0.3)
    halo.position.y = 0.1
    crown.add(halo)
    parts.head.add(crown)
    parts.crown = crown
    const auraSprite = glowSprite(style.aura, 6.5, 0.22)
    auraSprite.position.y = 1.2
    root.add(auraSprite)
    parts.bossAura = auraSprite
  }

  const scale = style.scale * (boss ? 2.05 : companion ? 0.78 : 1)
  root.scale.setScalar(scale)
  root.userData.species = speciesId
  root.userData.height = (style.root === 'golem' ? 2.1 : style.root === 'bird' ? 1.7 : style.root === 'wraith' ? 1.9 : 1.1) * scale
  shade(root)
  return { root, parts, mats, style }
}

export function createAura(color, scale = 3) {
  return glowSprite(color, scale, 0.3)
}

export { shade, glowSprite }
