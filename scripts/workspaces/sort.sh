#!/usr/bin/env bash
echo "┏━━━ 📶 SORT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
yarn sort-package-json && 
lerna run --scope @graffft/* --parallel sort