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
- Install dependencies: `npm ci`
- Generate `generated/index.d.ts`: `npm run generate`
- Autoformat `generate/index.d.ts`
    (TODO: automate this; previously I used vscode to autoformat to the rules from gpuweb/cts (I think).)
- **temporary two step process until generator issues are fixed**
    - Open a diff between `generated/index.d.ts` and `generated/edited.d.ts`.
        Update the latter according to changes from the former. See below for intentional differences.
    - Open a diff between `generate/edited.d.ts` and `dist/index.d.ts`.
        Update the latter according to changes from the former. See below for intentional differences.

### Intentional differences between generator output and final result

Most or all of these should be fixed in the generator over time.

- `__brand` removed for partial interfaces.
- `__brand` removed for WebIDL `dictionary`s.
- `var`s added for WebIDL `interface`s.
- `Array` changed to `Iterable` for WebIDL `sequence`s.
- `any` changed to `object` for WebIDL `object`.
- `interface` changed to `var` for WebIDL `interface`s with (only) `const` members.
    (TODO: this isn't quite the right translation either.)
- `new ()` moved from `interface` to `var` for constructible WebIDL `interface`s.
- `| SharedArrayBuffer` added for `[AllowShared] BufferSource`.

The following differences are TODO: should be changed in the final result.

- Deprecated items should be removed.
- Features/limits related changes should be applied.
- Color/origin/extent types should be changed to `Iterable<>`.

The following differences will remain.

- `onuncapturederror` strongly typed.
- `getContext` definitions.
- `GPUExtent3DStrict` (and similar).

### Publish a new npm package version

(only for people who have npm publish access)

`git checkout main && git pull main && npm version patch && git push upstream main --tags && npm publish`
