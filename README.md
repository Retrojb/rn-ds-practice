# rn-design-system-practice-mono

## Monorepo Structure

### Apps:
- `docs`: a [Next.js](https://nextjs.org/) app
- `storybook-mobile`: React Native Storybook app 
- `web`: React Native Web Storybook

### Packages:
- `@teatez-design-system/core`: core React Native component library share by `native` and `web` applications
- `@teatez-design-system/components`: core components
- `@teatez-design-system/icons`: Iconography
- `@teatez-design-system/typography`: Typography
- `@teatez-design-system/tokens`: Design Tokens
- `@teatez/design-system`: design system share by `native` and `web` applications
- `eslint-config-custom`: `eslint` configurations
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `utils`: node js scripts

### Utilities

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [React-Native-Builder-Bob](https://github.com/callstack/react-native-builder-bob) for  lib scaffolding
- [Turborepo](https://turbo.build/) for monorepo support
- [Yarn v3 Berry](https://yarnpkg.com/) for NPM dependency management
- [React]() a required dependency of react native.
- [Expo](https://docs.expo.dev/) for React Native app
  - [Metro]() for serving react native application
  - [Babel]() for transpiling support
  - [Webpack](https://webpack.js.org/) For react native web support
- [React Native Web]() for supporting React Native in the DOM
- [Storybook]() for interactive component playground
- [MUI]() component style library
- [Native Base]() component style library
- [Tamagui](https://tamagui.dev/) component style library

### Build

To build all apps and packages, run the following command:

``` shell
cd rn-design-system-practice-mono
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

``` shell
cd rn-design-system-practice-mono
yarn run dev
```

### Deploy
