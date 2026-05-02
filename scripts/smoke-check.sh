#!/usr/bin/env bash

set -euo pipefail

BASE_URL="${1:-http://localhost:3002}"

check_contains() {
  local body="$1"
  local expected="$2"
  local label="$3"

  if ! printf '%s' "$body" | rg -Fq "$expected"; then
    echo "FAIL: ${label} missing expected text: ${expected}"
    exit 1
  fi
}

fetch() {
  local path="$1"
  curl -L --max-time 20 -s "${BASE_URL}${path}"
}

echo "Smoke check: ${BASE_URL}"

root_body="$(fetch /)"
ja_body="$(fetch /ja/lp/)"
en_body="$(fetch /en/lp/)"

check_contains "$root_body" "/ja/lp/" "root"
check_contains "$ja_body" "<html" "ja"
check_contains "$en_body" "<html" "en"
check_contains "$ja_body" "/_next/static/" "ja"
check_contains "$en_body" "/_next/static/" "en"

check_contains "$ja_body" "ウェイティングリストに登録" "ja"
check_contains "$en_body" "Join the Waitlist" "en"

echo "PASS"
