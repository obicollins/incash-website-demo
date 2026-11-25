import { cp, readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, join } from 'node:path';

const [projectPath, outputDirectory] = process.argv.slice(2);
if (!/^\/[a-z0-9][a-z0-9-]*$/i.test(projectPath ?? '') || !outputDirectory) {
  throw new Error('Usage: node prepare-pages.mjs /repository-name output-directory');
}
const source = resolve('dist');
const target = resolve(outputDirectory);
if (source === target || target.startsWith(source + '/')) throw new Error('Use an output directory separate from dist.');
await mkdir(target, {recursive:true});
await cp(source, target, {recursive:true});

function prefix(value) {
  return value.startsWith('/') && !value.startsWith('//') ? projectPath + value : value;
}
async function prepare(path) {
  for (const entry of await readdir(path, {withFileTypes:true})) {
    const file = join(path, entry.name);
    if (entry.isDirectory()) {
      await prepare(file);
      continue;
    }
    if (!/\.(html|css)$/i.test(entry.name)) continue;
    let content = await readFile(file,'utf8');
    content = content.replace(/url\((["']?)(\/(?!\/)[^)'"\s]*)\1\)/g, (_, quote, asset) => 'url(' + quote + prefix(asset) + quote + ')');
    if (entry.name.endsWith('.html')) {
      content = content.replace(/\b(href|src|action|poster)=(["'])(\/(?!\/)[^"']*)\2/g, (_, attr, quote, asset) => attr + '=' + quote + prefix(asset) + quote);
      content = content.replace(/(<meta http-equiv="refresh" content="\d+;url=)(\/(?!\/)[^"]*)/gi, (_, tag, asset) => tag + prefix(asset));
      content = content.replace(/<script>(?:(?!<\/script>)[\s\S])*?googletagmanager\.com(?:(?!<\/script>)[\s\S])*?<\/script>/g, '');
      if (content.includes('</head>')) {
        content = content.replace(/<meta name="robots"[^>]*>/gi, '').replace('</head>', '<meta name="robots" content="noindex, follow"></head>');
      }
    }
    await writeFile(file, content);
  }
}
await prepare(target);
await writeFile(join(target,'.nojekyll'),'');
await writeFile(join(target,'robots.txt'),'User-agent: *\nAllow: /\n');

