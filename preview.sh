#!/usr/bin/env bash
set -euo pipefail
PORT=${PORT:-8000}
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$REPO_ROOT"
cat <<MSG
Starting a simple preview server.
Open http://localhost:${PORT} in your browser.
Press Ctrl+C to stop.
MSG
python3 -m http.server "$PORT"
