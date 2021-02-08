# Typescript Type Definitions for WebGPU

This package defines Typescript types (`.d.ts`) for the upcoming [WebGPU standard](https://github.com/gpuweb/gpuweb/wiki/Implementation-Status).

_This package matches the work-in-progress WebGPU API, which is **currently unstable!**_

Use this package to augment the ambient [`"dom"`](https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options) type definitions with the new definitions for WebGPU.

## What are declaration files?

See the [TypeScript handbook](http://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html).


## How can I get them?

### npm

```sh
npm install --save @webgpu/types
```

### yarn

```sh
yarn add @webgpu/types
```

After installing the package, add the types to your `webpack.config.js`:
```
"types": ["@webgpu/types"]
```