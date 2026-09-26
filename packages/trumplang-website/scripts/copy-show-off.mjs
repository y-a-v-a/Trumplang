// THE SHOW-OFF ROOM GOES LIVE. Copies packages/trumplang-show-off into the
// published site at build time, so the page ships from exactly one source:
//
//   public/show-off.html               <- trumplang-show-off/index.html
//   public/show-off/screenshots/*.png  <- trumplang-show-off/screenshots
//   public/show-off/output/*.txt       <- trumplang-show-off/output
//   public/show-off/programs/*.MAGA.txt <- trumplang-show-off/programs (symlinks resolved)
//
// The page sits NEXT TO its folder (not inside it as show-off/index.html) so
// its relative links survive clean URLs without a trailing slash: /show-off
// resolves "show-off/screenshots/x.png" from the site root. Programs get a
// .txt suffix because browsers download a .MAGA file instead of showing it.
import { cpSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const site = join(here, '..', 'public');
const showOff = join(here, '..', '..', 'trumplang-show-off');
const target = join(site, 'show-off');

rmSync(target, { recursive: true, force: true });
mkdirSync(join(target, 'programs'), { recursive: true });

cpSync(join(showOff, 'screenshots'), join(target, 'screenshots'), { recursive: true });
cpSync(join(showOff, 'output'), join(target, 'output'), { recursive: true });
for (const program of readdirSync(join(showOff, 'programs'))) {
  // readFileSync follows the symlink into trumplang-core/examples
  writeFileSync(join(target, 'programs', `${program}.txt`), readFileSync(join(showOff, 'programs', program)));
}

const page = readFileSync(join(showOff, 'index.html'), 'utf8')
  .replace(/(src|href)="programs\/([^"]+\.MAGA)"/g, '$1="show-off/programs/$2.txt"')
  .replace(/(src|href)="(screenshots|output)\//g, '$1="show-off/$2/')
  // On the live site, the links back home stay on whichever host serves it
  .replaceAll('https://trumplang.vercel.app/playground', 'playground.html')
  .replaceAll('https://trumplang.vercel.app/', './');
writeFileSync(join(site, 'show-off.html'), page);

console.log('THE SHOW-OFF ROOM IS OPEN: public/show-off.html. TREMENDOUS!');
