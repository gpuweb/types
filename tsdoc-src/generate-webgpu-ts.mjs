import fs from 'fs';

async function main() {
  let ts = fs.readFileSync('../dist/index.d.ts', {encoding: 'utf-8'});
  ts = ts
    // export interfaces.
    .replace(/\ninterface /g, '\nexport interface ')

    // export types
    .replace(/\ntype /g, '\nexport type ')

    // {{GPUAddressMode|address modes}} => {@link GPUAddressMode | address modes}
    .replace(/\{\{GPUAddressMode\|address modes\}\}/g, '{@link GPUAddressMode | address modes}')

    // fix links of the form {@link foo|caption} -> {@link foo | caption}
    .replace(/\{@link([^}]+)\S\|\S(.*?)\}/g, `{@link $1 | $2}`)

    // fix links of the form {@link foo[[#bar]]} -> {@link foo#bar}
    .replace(/\{@link([^[}]+)\[\[(.*?)]]}/g, `{@link $1$2}`)

    // convert [[link]] to {@link link}
    .replace(/\[\[([^\[].*?)\]\]/g, '{@link https://www.w3.org/TR/webgpu/$1}')

    // remove __brand
    .replace(new RegExp(`/\\*\\*
   \\* Nominal type branding.
   \\* https://github.com/microsoft/TypeScript/pull/33038
   \\* @internal
   \\*/
  readonly __brand: ".*?";`.replace(/sss\*/g, '\\*').replace(/\s+/g, '\\s+'), 'g'), '');

  fs.writeFileSync('./webgpu.ts', ts);
}

main();
