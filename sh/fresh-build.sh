#!/bin/zsh

echo "Running Fresh build"
yarn run cleaner

echo ""
echo "All clean lets install the packages"

yarn install

echo ""
echo "Lets build with Turbo"

yarn build

echo ""
echo "Lets get our React Storybook app ready"

yarn workspace preview run storybook-generate
yarn workspace preview run build-storybook

