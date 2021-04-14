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


## How to update these types

- Make sure the submodule is checked out: `git submodule update --init`
- Pull `gpuweb` changes: in `gpuweb/`, switch to and pull the `main` branch
- Install dependencies: `npm ci`
- Generate `generated/index.d.ts`: `npm run generate`
- Open a diff between `generated/index.d.ts` and `dist/index.d.ts`.
    The generated file is tracked by Git so you can see what has changed.
    Update the latter according to changes from the former. See below for intentional differences.
- Format the result: `npm run format`

### Intentional differences between generator output and final result

Most or all of these should be fixed in the generator over time.

- `Array` changed to `Iterable` for WebIDL `sequence`s in argument positions.
- `any` changed to `object` for WebIDL `object`.
- `| SharedArrayBuffer` added for `[AllowShared] BufferSource`.

The following differences are TODO: should be changed in the final result.

- Deprecated items should be removed.

The following differences will remain.

- `onuncapturederror` strongly typed.
- `getContext` definitions.
- `GPUExtent3DStrict` (and similar).

### Publish a new npm package version

(only for people who have npm publish access)

`git checkout main && git pull main && npm version patch && git push upstream main --tags && npm publish`
