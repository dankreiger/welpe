#!/usr/bin/env bash
echo "┏━━━ 🏗️ POSTINSTALL ━━━━━━━"
is-ci || husky install

yarn lerna bootstrap && yarn sort