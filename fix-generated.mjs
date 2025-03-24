import fs from 'fs';

async function main() {
  let ts = fs.readFileSync('generated/index.d.ts', { encoding: 'utf-8' });
  ts = ts
    // Replace broken AllowSharedBufferSource with GPUAllowSharedBufferSource
    .replace(/AllowSharedBufferSource/g, 'GPUAllowSharedBufferSource')

    // convert [[#anchor]] to {@link spec_url}
    // convert [[#anchor|text]] to {@link spec_url|text}
    .replace(/([^#])\[\[([^\[].*?)\]\]/g, '$1{@link https://www.w3.org/TR/webgpu/$2}')

    // convert {{ref}} to {@link ref}
    // convert {{ref|text}} to {@link ref|text}
    .replace(/\{\{(.*?)\}\}/g, '{@link $1}')

    // convert {@link foo/method(...)} to {@link foo#method}
    .replace(/\{@link ([^[}]+)\/(.*?)\(.*?\)}/g, '{@link $1#$2}')

    // convert {@link foo#[[bar]]} to {@link foo}.`[[bar]]`
    .replace(/\{@link ([^[}]+)#\[\[(.*?)]]}/g, '{@link $1}.`[[$2]]`')

    // convert {@link foo#"bar"} to {@link foo} `"bar"`
    .replace(/\{@link ([^[}]+)#"(.*?)"}/g, '{@link $1} `"$2"`')

    // fix links of the form {@link foo|text} -> {@link foo | text}
    .replace(/\{@link ([^}|]+)\|([^}|]+)\}/g, '{@link $1 | $2}')

    // remove items that are known not to be linkable
    .replace(/{@link Promise}/g, 'Promise')
    .replace(/{@link ArrayBuffer}/g, 'ArrayBuffer')
    .replace(/{@link Uint32Array}/g, 'Uint32Array')
    .replace(/{@link RenderState}/g, 'RenderState')
    .replace(/{@link double}/g, '`double`')

    .replace(/<pre highlight=['"]?(.*)['"]?>/g, '```$1')
    .replace(/<\/pre>/g, '```');

  fs.writeFileSync('generated/index.d.ts', ts);
}

main();
