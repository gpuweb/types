# Typescript Type Definitions for WebGPU

This package defines Typescript types (`.d.ts`) for the upcoming [WebGPU standard](https://github.com/gpuweb/gpuweb/wiki/Implementation-Status).

_This package matches the work-in-progress WebGPU API, which is **currently unstable!**_

Use this package to augment the ambient [`"dom"`](https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options) type definitions with the new definitions for WebGPU.


## What are declaration files?

See the [TypeScript handbook](http://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html).


## How can I use them?

### Install

- npm: `npm install --save @webgpu/types`
- yarn: `yarn add @webgpu/types`

### Configure

#### TypeScript `tsc` and `tsc`-based bundlers

In `tsconfig.json`:

```js
{
  // ...
  "compilerOptions": {
    // ...
    "typeRoots": [ "./node_modules/@webgpu/types", "./node_modules/@types"]
  }
}
```

#### Webpack

In `webpack.config.js` add:

```js
"types": ["@webgpu/types"]
```

(may not be necessary with `tsc` config above - untested)

#### Inline in TypeScript

```ts
/// <reference types="@webgpu/types" />
```

#### Others?

Please contribute a PR to add instructions for other setups or improve existing instructions. :)

## How to publish a new npm package version

(only for people who have npm publish access)

`git checkout main && git pull main && npm version patch && git push upstream main --tags && npm publish`
