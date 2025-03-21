import fs from 'fs';

async function main() {
  let ts = fs.readFileSync('../dist/index.d.ts', {encoding: 'utf-8'});
  ts = ts
    // export interfaces.
    .replace(/\ninterface /g, '\nexport interface ')

    // export types
    .replace(/\ntype /g, '\nexport type ')

    // {{ref|text}} => {@link ref | text}
    .replace(/\{\{([^}|]+)\|([^}|]+)\}\}/g, '{@link $1 | $2}')

    // fix links of the form {@link foo|caption} -> {@link foo | caption}
    .replace(/\{@link([^}]+)\S\|\S(.*?)\}/g, `{@link $1 | $2}`)

    // fix links of the form {@link foo[[#bar]]} -> {@link foo#bar}
    .replace(/\{@link([^[}]+)\[\[(.*?)]]}/g, `{@link $1$2}`)

    // convert [[link]] to {@link link}
    .replace(/([^#])\[\[([^\[].*?)\]\]/g, '$1{@link https://www.w3.org/TR/webgpu/$2}')

    .replace(/<pre highlight=['"]?(.*)['"]?>/g, '```$1')
    .replace(/<\/pre>/g, '```')

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
