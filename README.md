# Typescript Type Definitions for WebGPU

This package defines Typescript types (`.d.ts`) for the upcoming [WebGPU standard](https://github.com/gpuweb/gpuweb/wiki/Implementation-Status).

Use this package to augment the ambient [`"dom"`](https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options) type definitions with the new definitions for WebGPU.

## API style docs

This repo also generates typedoc docs here: https://gpuweb.github.io/types

## What are declaration files?

See the [TypeScript handbook](http://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html).


## Integration into `"dom"` type definitions.

WebGPU types have been integrated into the [`"dom"`](https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options) starting with TypeScript 6. It appears that
v6.0.4 and above will include a full set of WebGPU types and thus should not need the supplemental types from this repo.

Unfortunately some versions of TypeScript include a `"dom"` library which only contained a partial set of WebGPU types, preventing WebGPU code from building cleanly. This is confirmed
the case in TypeScript v6.0.3 and lower and TypeScript v7.0.2 and lower. To build WebGPU with the affected versions install the [`@types/web`](https://www.npmjs.com/package/@types/web)
to be package v0.0.352 or greater, and use it instead of the built-in `"dom"` library:

Install:
```
npm install @types/web
```

Usage in `tsconfig.json`:
```js
{
  // ...
  "compilerOptions": {
    // ...
    "lib": ["esnext"], // Do not include "dom"!
    "types": ["@types/web"],
  }
}
```

For TypeScript v5 and below, this library is still necessary to provide WebGPU types.



## How can I use them?

### Install

- npm: `npm install --save-dev @webgpu/types`
- yarn: `yarn add --dev @webgpu/types`
- pnpm: `pnpm add -D @webgpu/types`

If you are on TypeScript < 5.1, you will also need to install `@types/dom-webcodecs`
as a sibling dependency. The version you need depends on the TypeScript version;
see the [tests](tests/) for examples.

### Configure

Since this package is outside DefinitelyTyped, the dependency won't be picked up automatically.
There are several ways to add a additional TypeScript type definition dependencies to your TypeScript project:

#### TypeScript `tsc` and `tsc`-based bundlers

In `tsconfig.json`:

```js
{
  // ...
  "compilerOptions": {
    // ...
    "types": ["@webgpu/types"]
  }
}
```

Or you can use `typeRoots`:

```js
{
  // ...
  "compilerOptions": {
    // ...
    "typeRoots": ["./node_modules/@webgpu/types", "./node_modules/@types"]
  }
}
```

#### Inline in TypeScript

This may work better if your toolchain doesn't read `tsconfig.json`.

```ts
/// <reference types="@webgpu/types" />
```

#### Webpack

If you use Webpack and the options above aren't sufficient (this has not been verified),
you may need the following in `webpack.config.js`:

```js
"types": ["@webgpu/types"]
```

#### Others?

Please contribute a PR to add instructions for other setups or improve existing instructions. :)


## How to update these types

- Make sure the submodule is checked out: `git submodule update --init`
- Pull `gpuweb` changes: `pushd gpuweb && git checkout main && git pull && popd`
- Install dependencies: `npm ci`
- Generate `generated/index.d.ts`: `npm run generate`
- Open a diff between `generated/index.d.ts` and `dist/index.d.ts`.
    The generated file is tracked by Git so you can see what has changed.
    Update the latter according to changes from the former.
    Note the `generated/` and `dist/` files are not the same.
    See below for intentional differences.
- Format the result: `npm run format`

### Intentional differences between generator output and final result

Most or all of these should be fixed in the generator over time.

- `any` changed to `object` for WebIDL `object`.

The following differences are TODO: should be changed in the final result.

- Deprecated items should be removed.
- TODO items should be fixed (e.g. make new additions no longer optional).
- Addition of Compatibility Mode items like `textureBindingViewDimension`.

The following differences will remain.

- `onuncapturederror` strongly typed.
- `addEventListener('uncapturederror')` type support.
- `getContext` definitions.
- `GPUExtent3DStrict` and `GPUOrigin2DStrict`.

### Publish a new npm package version

New patch releases are published to NPM and tagged in Git automatically by [GitHub Actions](.github/workflows/build-deploy-publish.yml) on pushes to `main` when `dist/index.d.ts` has changed since the last release.

`package.json` intentionally omits a `version` field in Git; the workflow finds the latest version tag in Git, increments the patch version, publishes the package, and pushes the new Git tag.

