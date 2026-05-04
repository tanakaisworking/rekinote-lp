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
ja_hub_body="$(fetch /ja/lp/)"
en_hub_body="$(fetch /en/lp/)"
ja_business_body="$(fetch /ja/lp/business/)"
en_business_body="$(fetch /en/lp/business/)"
ja_student_body="$(fetch /ja/lp/student/)"
en_student_body="$(fetch /en/lp/student/)"

check_contains "$root_body" "/en/lp/business/" "root"
check_contains "$ja_hub_body" "あなた、どっち？" "ja hub"
check_contains "$en_hub_body" "Which one are you?" "en hub"
check_contains "$ja_business_body" "<html" "ja business"
check_contains "$en_business_body" "<html" "en business"
check_contains "$ja_student_body" "<html" "ja student"
check_contains "$en_student_body" "<html" "en student"
check_contains "$ja_business_body" "/_next/static/" "ja business"
check_contains "$en_business_body" "/_next/static/" "en business"
check_contains "$ja_student_body" "/_next/static/" "ja student"
check_contains "$en_student_body" "/_next/static/" "en student"

check_contains "$ja_business_body" "ウェイティングリストに登録" "ja business"
check_contains "$en_business_body" "Join the Waitlist" "en business"
check_contains "$ja_student_body" "講義ノート取るの、やめた" "ja student"
check_contains "$en_student_body" "I stopped taking lecture notes" "en student"

echo "PASS"
