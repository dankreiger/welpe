#!/usr/bin/env bash
echo "┏━━━ 📦 TEST-PUBLISH ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
yarn clean && 
yarn build && 
lerna publish --conventional-commits