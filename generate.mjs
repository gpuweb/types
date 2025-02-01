import {spawnSync} from 'node:child_process';
import fs from 'node:fs';

export function execute(cmd, args, options) {
  const { error, status } = spawnSync(cmd, args, {...options || {}, shell: true, stdio: 'inherit'});
  if (error) {
    throw new(Error);
  }
  if (status !== 0) {
    throw new Error(`${cmd} exited with status code: ${status}`);
  }
}

/**
 * Transform generated to something closer to what we want
 * so we have less manual work to do.
 */
function fixupGenerated(filename) {
  let s = fs.readFileSync(filename, { encoding: 'utf-8' });

  // replace ' | null>'  with ' null | undefined>'
  // replace ' | null,'  with ' null | undefined,'
  s = s.replace(/ \| null(>|,)/g, ' | null | undefined$1');

  // replace Array<x> with Iterable<x>
  s = s.replace(/\bArray<(.*?)>/g, 'Iterable<$1>');

  // add new(): never;
  s = s.replace(/(\ndeclare\svar\s\w+:\s\{\n\s+prototype:.*?\n)\};/g, '$1  new(): never;\n};');

  // replace : GPUExtent3D -> : GPUExtent3DStrict
  s = s.replace(/: GPUExtent3D\b/g, ': GPUExtent3DStrict');

  // replace AllowSharedBufferSource -> BufferSource | SharedArrayBuffer
  s = s.replace(/AllowSharedBufferSource/g, 'BufferSource | SharedArrayBuffer');

  // replace Promise<... | undefined> with Promise<...>
  s = s.replace(/( Promise<[^>]*?)\s+\|\s+undefined\s*>/g, '$1>');

  // fix constants
  const constants = [
    'GPUBufferUsage',
    'GPUColorWrite',
    'GPUMapMode',
    'GPUShaderStage',
    'GPUTextureUsage',
  ];
  const constantRE = new RegExp(`interface (${constants.join('|')}) \\{`, 'g');
  s = s.replace(constantRE, 'declare var $1: {');

  // fix constructables
  const constructables = [
    'GPUInternalError',
    'GPUPipelineError',
    'GPUOutOfMemoryError',
    'GPUUncapturedErrorEvent',
    'GPUValidationError',
  ];
  const constructableRE = new RegExp(`(\\ndeclare var (${constructables.join('|')}):\\s{\\n[\\s\\S]*?\\snew\\s\\([^;]*?\\));\\n};`, 'g');
  s = s.replace(constructableRE, '$1: $2;\n};');

  // prepend extra
  const extra = fs.readFileSync('extra.d.ts', { encoding: 'utf-8' });
  s = extra + s;

  fs.writeFileSync(filename, s);
}

execute('./node_modules/.bin/bikeshed-to-ts', ['--in', './gpuweb/spec/index.bs', '--out', './generated/index.d.ts', '--forceGlobal', '--nominal'])
fixupGenerated('./generated/index.d.ts');
execute('./node_modules/.bin/prettier', ['-w', 'generated/index.d.ts']);

