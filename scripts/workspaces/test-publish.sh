#!/usr/bin/env bash
echo "┏━━━ 📦 AUTO-PUBLISH ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
yarn clean && 
yarn build && 
lerna publish --conventional-commits --registry=http://localhost:4873/ 