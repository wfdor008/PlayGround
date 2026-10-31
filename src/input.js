import { clamp, isTouchDevice } from './engine.js'

const KEY_ACTIONS = {
  Space: 'dodge',
  KeyE: 'seal',
  KeyQ: 'lock',
  KeyC: 'companion',
  KeyF: 'interact',
  KeyJ: 'attack',
  KeyK: 'heavy',
  Escape: 'pause',
  KeyP: 'pause',
}

export class Input {
  constructor(canvas) {
    this.canvas = canvas
    this.keys = new Set()
    this.move = { x: 0, y: 0 }
    this.cameraYaw = Math.PI
    this.cameraPitch = 0.22
    this.lookDelta = { x: 0, y: 0 }
    this.zoomDelta = 0
    this.sprint = false
    this.attackPressed = false
    this.heavyPressed = false
    this.dodgePressed = false
    this.sealPressed = false
    this.lockPressed = false
    this.companionPressed = false
    this.interactPressed = false
    this.pausePressed = false
    this.rosterPressed = 0
    this.started = false
    this.touch = false
    this.joystick = { active: false, id: null, x: 0, y: 0 }
    this.pointer = { down: false, id: null, startX: 0, startY: 0, x: 0, y: 0, dragged: false, button: 0 }
    this.touchLook = { active: false, id: null, lastX: 0, lastY: 0 }
    this.gamepadIndex = null
    this._bind()
    this.setTouchMode(isTouchDevice() || window.innerWidth < 900)
    this.resize()
    window.addEventListener('resize', () => this.resize())
  }

  resize() {
    this.width = window.innerWidth
    this.height = window.innerHeight
  }

  setTouchMode(on) {
    this.touch = on
    document.body.classList.toggle('touch', on)
    const ui = document.getElementById('touchUI')
    if (ui) ui.classList.toggle('is-hidden', !on)
    const hints = document.getElementById('hints')
    if (hints) hints.style.display = on ? 'none' : ''
  }

  _bind() {
    const canvas = this.canvas

    window.addEventListener('keydown', (e) => {
      if (e.code === 'Tab') e.preventDefault()
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault()
      if (e.repeat) return
      this.keys.add(e.code)
      this.sprint = e.code === 'ShiftLeft' || e.code === 'ShiftRight'
      const action = KEY_ACTIONS[e.code]
      if (action === 'attack') this.attackPressed = true
      else if (action === 'heavy') this.heavyPressed = true
      else if (action === 'dodge') this.dodgePressed = true
      else if (action === 'seal') this.sealPressed = true
      else if (action === 'lock') this.lockPressed = true
      else if (action === 'companion') this.companionPressed = true
      else if (action === 'interact') this.interactPressed = true
      else if (action === 'pause') this.pausePressed = true
      else if (/^Digit[1-6]$/.test(e.code)) this.rosterPressed = Number(e.code.slice(-1))
    })
    window.addEventListener('keyup', (e) => {
      this.keys.delete(e.code)
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') this.sprint = false
    })
    window.addEventListener('blur', () => {
      this.keys.clear()
      this.sprint = false
    })

    canvas.addEventListener('contextmenu', (e) => e.preventDefault())

    canvas.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'touch') {
        if (e.clientX < window.innerWidth * 0.48) {
          // left side joystick already handled by its own element; outside it, still jump camera
          this.touchLook.active = true
          this.touchLook.id = e.pointerId
          this.touchLook.lastX = e.clientX
          this.touchLook.lastY = e.clientY
        } else {
          this.touchLook.active = true
          this.touchLook.id = e.pointerId
          this.touchLook.lastX = e.clientX
          this.touchLook.lastY = e.clientY
        }
        canvas.setPointerCapture?.(e.pointerId)
        return
      }
      this.pointer.down = true
      this.pointer.id = e.pointerId
      this.pointer.startX = this.pointer.x = e.clientX
      this.pointer.startY = this.pointer.y = e.clientY
      this.pointer.dragged = false
      this.pointer.button = e.button
      canvas.setPointerCapture?.(e.pointerId)
    })

    canvas.addEventListener('pointermove', (e) => {
      if (e.pointerType === 'touch') {
        if (this.touchLook.active && this.touchLook.id === e.pointerId) {
          const dx = e.clientX - this.touchLook.lastX
          const dy = e.clientY - this.touchLook.lastY
          this.touchLook.lastX = e.clientX
          this.touchLook.lastY = e.clientY
          this.lookDelta.x += dx
          this.lookDelta.y += dy
        }
        return
      }
      if (!this.pointer.down || this.pointer.id !== e.pointerId) return
      const dx = e.clientX - this.pointer.x
      const dy = e.clientY - this.pointer.y
      this.pointer.x = e.clientX
      this.pointer.y = e.clientY
      if (Math.abs(e.clientX - this.pointer.startX) + Math.abs(e.clientY - this.pointer.startY) > 7) this.pointer.dragged = true
      if (this.pointer.button === 0) {
        this.lookDelta.x += dx
        this.lookDelta.y += dy
      }
    })

    const release = (e) => {
      if (e.pointerType === 'touch') {
        if (this.touchLook.id === e.pointerId) {
          this.touchLook.active = false
          this.touchLook.id = null
        }
        return
      }
      if (!this.pointer.down || this.pointer.id !== e.pointerId) return
      this.pointer.down = false
      if (!this.pointer.dragged) {
        if (this.pointer.button === 0) this.attackPressed = true
        else if (this.pointer.button === 2) this.heavyPressed = true
      }
      this.pointer.id = null
    }
    canvas.addEventListener('pointerup', release)
    canvas.addEventListener('pointercancel', release)

    canvas.addEventListener('wheel', (e) => {
      e.preventDefault()
      this.zoomDelta += Math.sign(e.deltaY) * 0.8
    }, { passive: false })

    // joystick
    const joy = document.getElementById('joystick')
    const knob = document.getElementById('joyKnob')
    if (joy && knob) {
      const setKnob = (dx, dy) => {
        knob.style.transform = `translate(${dx}px, ${dy}px)`
      }
      const start = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.joystick.active = true
        this.joystick.id = e.pointerId
        joy.setPointerCapture?.(e.pointerId)
        update(e)
      }
      const update = (e) => {
        if (!this.joystick.active || this.joystick.id !== e.pointerId) return
        const rect = joy.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        let dx = e.clientX - cx
        let dy = e.clientY - cy
        const max = rect.width * 0.34
        const len = Math.hypot(dx, dy)
        if (len > max) {
          dx = (dx / len) * max
          dy = (dy / len) * max
        }
        setKnob(dx, dy)
        this.move.x = clamp(dx / max, -1, 1)
        this.move.y = clamp(-dy / max, -1, 1)
        this.sprint = Math.hypot(this.move.x, this.move.y) > 0.88
      }
      const end = (e) => {
        if (this.joystick.id !== e.pointerId) return
        this.joystick.active = false
        this.joystick.id = null
        this.move.x = 0
        this.move.y = 0
        this.sprint = false
        setKnob(0, 0)
      }
      joy.addEventListener('pointerdown', start)
      joy.addEventListener('pointermove', update)
      joy.addEventListener('pointerup', end)
      joy.addEventListener('pointercancel', end)
      joy.addEventListener('lostpointercapture', end)
    }

    // touch action buttons
    document.querySelectorAll('.tbtn[data-action]').forEach((btn) => {
      const action = btn.dataset.action
      btn.addEventListener('pointerdown', (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.fire(action)
      })
    })

    // clickable prompt
    const prompt = document.getElementById('prompt')
    prompt?.addEventListener('pointerdown', (e) => {
      e.preventDefault()
      this.interactPressed = true
    })

    window.addEventListener('gamepadconnected', (e) => {
      this.gamepadIndex = e.gamepad.index
    })
  }

  fire(action) {
    if (action === 'attack') this.attackPressed = true
    else if (action === 'heavy') this.heavyPressed = true
    else if (action === 'dodge') this.dodgePressed = true
    else if (action === 'seal') this.sealPressed = true
    else if (action === 'lock') this.lockPressed = true
    else if (action === 'companion') this.companionPressed = true
    else if (action === 'interact') this.interactPressed = true
    else if (action === 'pause') this.pausePressed = true
  }

  readKeyboardMove() {
    if (this.joystick.active) return
    let x = 0
    let y = 0
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) y += 1
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) y -= 1
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) x += 1
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) x -= 1
    this.move.x = x
    this.move.y = y
    if (x !== 0 && y !== 0) {
      const inv = 1 / Math.SQRT2
      this.move.x *= inv
      this.move.y *= inv
    }
    this.sprint = this.keys.has('ShiftLeft') || this.keys.has('ShiftRight') || this.joystick.active && Math.hypot(this.move.x, this.move.y) > 0.88
  }

  pollGamepad() {
    if (this.gamepadIndex === null) return
    const pad = navigator.getGamepads?.()[this.gamepadIndex]
    if (!pad) return
    const ax = pad.axes[0] || 0
    const ay = pad.axes[1] || 0
    if (Math.hypot(ax, ay) > 0.18) {
      this.move.x = ax
      this.move.y = -ay
      this.sprint = Math.hypot(ax, ay) > 0.85
    } else if (!this.joystick.active && !this.keys.size) {
      this.move.x = 0
      this.move.y = 0
    }
    this.lookDelta.x += (pad.axes[2] || 0) * 9
    this.lookDelta.y += (pad.axes[3] || 0) * 7
    const b = pad.buttons
    if (b[0]?.pressed) this.attackPressed = true
    if (b[1]?.pressed) this.dodgePressed = true
    if (b[2]?.pressed) this.heavyPressed = true
    if (b[3]?.pressed) this.lockPressed = true
    if (b[4]?.pressed) this.sealPressed = true
    if (b[5]?.pressed) this.companionPressed = true
    if (b[6]?.pressed) this.interactPressed = true
    if (b[9]?.pressed) this.pausePressed = true
  }

  update() {
    this.readKeyboardMove()
    this.pollGamepad()
  }

  endFrame() {
    this.attackPressed = false
    this.heavyPressed = false
    this.dodgePressed = false
    this.sealPressed = false
    this.lockPressed = false
    this.companionPressed = false
    this.interactPressed = false
    this.pausePressed = false
    this.rosterPressed = 0
    this.lookDelta.x = 0
    this.lookDelta.y = 0
    this.zoomDelta = 0
  }

  state() {
    return {
      move: this.move,
      cameraYaw: this.cameraYaw,
      sprint: this.sprint,
      attackPressed: this.attackPressed,
      heavyPressed: this.heavyPressed,
      dodgePressed: this.dodgePressed,
      sealPressed: this.sealPressed,
      lockPressed: this.lockPressed,
      companionPressed: this.companionPressed,
      interactPressed: this.interactPressed,
      pausePressed: this.pausePressed,
    }
  }
}
