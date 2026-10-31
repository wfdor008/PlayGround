#!/usr/bin/env bash
# Build the static game and serve it in the foreground.
# Source and build output stay inside PROJECT_DIR; worker metadata goes to OPENCODE_WEB_DIR.
set -euo pipefail

PROJECT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"

PORT="${PORT:-3000}"
export PORT
DIST_DIR="$PROJECT_DIR/dist"
SOURCE_HTML="$PROJECT_DIR/Abissal-v32.html"
[[ -f "$SOURCE_HTML" ]] || SOURCE_HTML="$PROJECT_DIR/index.html"
WEB_DIR="${OPENCODE_WEB_DIR:-${RUNNER_TEMP:-/tmp}/omgithub-web}"

# Fail early with a useful message instead of serving an empty directory.
if [[ ! -f "$SOURCE_HTML" ]]; then
  echo "start.sh: no source HTML found in $PROJECT_DIR" >&2
  exit 1
fi

/usr/bin/time -p mkdir -p "$DIST_DIR" "$WEB_DIR"

# Install dependencies only for package projects; this game is a self-contained HTML file.
if [[ -f "$PROJECT_DIR/package.json" ]]; then
  if [[ -f "$PROJECT_DIR/package-lock.json" ]]; then
    /usr/bin/time -p npm ci --no-audit --no-fund
  else
    /usr/bin/time -p npm install --no-audit --no-fund
  fi
  /usr/bin/time -p npm run build --if-present
fi

# Build when needed: copy the single-file game to the static output directory.
if [[ ! -f "$DIST_DIR/index.html" || "$SOURCE_HTML" -nt "$DIST_DIR/index.html" ]]; then
  /usr/bin/time -p cp "$SOURCE_HTML" "$DIST_DIR/index.html"
fi

if [[ ! -f "$DIST_DIR/index.html" ]]; then
  echo "start.sh: build did not produce $DIST_DIR/index.html" >&2
  exit 1
fi

# Publish the deployment contract for the controller.
/usr/bin/time -p /usr/bin/printf '{"project":"%s","directory":"%s"}\n' "$PROJECT_DIR" "$DIST_DIR" > "$WEB_DIR/deployment-output.json"

echo "Serving $DIST_DIR on 0.0.0.0:$PORT"
# Foreground server; the controller owns the tmux session and the public tunnel.
exec /usr/bin/time -p python3 -m http.server "$PORT" --bind 0.0.0.0 --directory "$DIST_DIR"
