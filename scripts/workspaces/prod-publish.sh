
#!/usr/bin/env bash
echo "┏━━━ 📦 PROD-PUBLISH ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
yarn clean && 
yarn build && 
lerna publish --conventional-commits -y