#!/usr/bin/env bash
# Capture the published preview at desktop and mobile sizes.
# Output goes to CAPTURE_DIR (outside the source tree); the app is left running.
set -euo pipefail

: "${CAPTURE_URL:?capture.sh: set CAPTURE_URL to the page to capture}"
: "${CAPTURE_DIR:?capture.sh: set CAPTURE_DIR to the output directory}"

PLAYWRIGHT_ROOT="${PLAYWRIGHT_ROOT:-$HOME/.local/share/omgithub-playwright}"

/usr/bin/time -p mkdir -p "$CAPTURE_DIR"

export CAPTURE_URL CAPTURE_DIR PLAYWRIGHT_ROOT

# Exit codes: 75 = temporary navigation/browser infrastructure failure,
# 1 = script or rendering defect.
/usr/bin/time -p node - <<'NODE'
const fs = require('node:fs')
const path = require('node:path')
const { createRequire } = require('node:module')

const url = process.env.CAPTURE_URL
const out = process.env.CAPTURE_DIR
const runtime = process.env.PLAYWRIGHT_ROOT

async function main() {
  const configPath = path.join(runtime, process.platform === 'darwin' ? 'metal.json' : 'linux.json')
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'))
  if (process.platform === 'linux' && !process.env.DISPLAY) {
    try { process.env.DISPLAY = ':' + fs.readFileSync(path.join(runtime, 'display'), 'utf8').trim() } catch {}
  }
  const localRequire = createRequire(path.join(runtime, 'package.json'))
  const { chromium } = localRequire('playwright')

  const transient = (error) => Object.assign(error, { exitCode: 75 })
  let browser
  try {
    browser = await chromium.launch({ ...config.browser.launchOptions, timeout: 30000 }).catch((error) => { throw transient(error) })
    for (const [name, width, height] of [['desktop', 1440, 900], ['mobile', 390, 844]]) {
      const page = await browser.newPage({ viewport: { width, height } }).catch((error) => { throw transient(error) })
      page.setDefaultTimeout(30000)
      const failures = []
      page.on('pageerror', (error) => failures.push(error.message))
      page.on('response', (response) => {
        try {
          if (response.status() >= 400 && new URL(response.url()).origin === new URL(url).origin) {
            failures.push(`HTTP ${response.status()}: ${response.url()}`)
          }
        } catch {}
      })

      let response
      try {
        response = await page.goto(url, { waitUntil: 'load', timeout: 45000 })
      } catch (error) {
        throw transient(error)
      }
      if (!response) throw transient(new Error('No response loading preview'))
      if (!response.ok()) {
        const error = new Error(`HTTP ${response.status()} loading preview`)
        error.exitCode = [408, 429, 500, 502, 503, 504].includes(response.status()) ? 75 : 1
        throw error
      }

      await page.locator(process.env.CAPTURE_READY_SELECTOR || 'body')
        .waitFor({ state: 'visible', timeout: 30000 })
        .catch((error) => { throw transient(error) })
      // Wait for the game canvas and fonts, then give the first frames time to render.
      await page.waitForFunction(() => {
        const canvas = document.querySelector('canvas')
        return !!canvas && canvas.width > 0 && canvas.height > 0
      }, null, { timeout: 30000 }).catch((error) => { throw transient(error) })
      await page.evaluate(() => document.fonts ? document.fonts.ready : null).catch(() => {})
      await page.waitForTimeout(1500)

      try {
        await page.screenshot({ path: path.join(out, `final-${name}.png`), timeout: 30000 })
      } catch (error) {
        if (error.name === 'TimeoutError' || !browser.isConnected()) throw transient(error)
        throw error
      }
      if (failures.length) throw new Error(`Rendering defects: ${failures.join('; ')}`)
      await page.close().catch(() => {})
    }
  } catch (error) {
    console.error(error && error.stack ? error.stack : error)
    process.exitCode = error.exitCode || 1
  } finally {
    await browser?.close().catch(() => {})
  }
}

main()
NODE
