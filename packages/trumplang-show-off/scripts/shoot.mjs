// THE PHOTOGRAPHER. Runs every show-off program through the real interpreter,
// saves the honest output to output/, and takes a TREMENDOUS terminal-style
// screenshot of it into screenshots/ with headless Chrome. The best pictures,
// and not one of them is photoshopped - the output is exactly what ran.
//
// Usage: npm run shoot            (all three programs)
//        npm run shoot -- ELECTION_NIGHT   (just the ones you name)
// Set CHROME=/path/to/chrome if Chrome is not in the usual place.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const cli = join(root, '..', 'trumplang-core', 'src', 'cli', 'index.js');

const PROGRAMS = [
  { file: 'MAR_A_LAGO_SET', title: 'THE MAR-A-LAGO SET' },
  { file: 'DEEP_STATE_MACHINE', title: 'THE DEEP STATE MACHINE' },
  { file: 'ELECTION_NIGHT', title: 'ELECTION NIGHT' },
];

// The terminal: 110 columns (every piece of ASCII art fits), 13px text on a
// 17px line, rendered at 2x so it stays sharp on retina screens.
const COLS = 110;
const LINE_HEIGHT = 17;
const CHAR_WIDTH = 8; // Menlo at 13px, rounded up
const CHROME_OF_WINDOW = 110; // title bar, padding and margins, in px

const chrome = process.env.CHROME || [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].find((p) => existsSync(p));

if (!chrome) {
  console.error('NO CHROME FOUND. THE PHOTOGRAPHER CANNOT WORK WITHOUT A CAMERA. SET CHROME=/path/to/chrome. SAD!');
  process.exit(1);
}

const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// How many screen rows a line takes once the browser wraps it at word
// boundaries - so the screenshot is exactly as tall as the output.
function wrappedRows(line) {
  if (line.length <= COLS) return 1;
  let rows = 1;
  let used = 0;
  for (const word of line.split(' ')) {
    const need = used === 0 ? word.length : used + 1 + word.length;
    if (need <= COLS) {
      used = need;
    } else {
      rows += Math.max(1, Math.ceil(word.length / COLS));
      used = word.length % COLS;
    }
  }
  return rows;
}

function terminalPage(title, command, output) {
  return `<!doctype html><meta charset="utf-8"><style>
body{margin:0;background:#1b1d23;font-family:Menlo,Monaco,monospace}
.win{margin:20px;border-radius:10px;background:#0f1115;box-shadow:0 8px 30px #0008;overflow:hidden}
.bar{height:34px;background:#2a2d35;display:flex;align-items:center;padding:0 14px;gap:8px;color:#9aa0aa;font-size:12px}
.dot{width:12px;height:12px;border-radius:50%}
.title{margin-left:12px}
pre{margin:0;padding:14px 18px;color:#e8e2c8;font-size:13px;line-height:${LINE_HEIGHT}px;white-space:pre-wrap;overflow-wrap:break-word;width:${COLS}ch}
.prompt{color:#d4af37}
</style><div class="win"><div class="bar"><span class="dot" style="background:#ff5f57"></span><span class="dot" style="background:#febc2e"></span><span class="dot" style="background:#28c840"></span><span class="title">${escapeHtml(title)} — trumplang</span></div>
<pre><span class="prompt">$ ${escapeHtml(command)}</span>
${escapeHtml(output)}</pre></div>`;
}

const wanted = process.argv.slice(2);
const selected = wanted.length ? PROGRAMS.filter((p) => wanted.includes(p.file)) : PROGRAMS;
const scratch = mkdtempSync(join(tmpdir(), 'trumplang-show-off-'));

try {
  for (const { file, title } of selected) {
    const source = join(root, 'programs', `${file}.MAGA`);
    const started = Date.now();
    const output = execFileSync('node', [cli, source], { encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 }).replace(/\s+$/, '');
    const seconds = ((Date.now() - started) / 1000).toFixed(1);
    writeFileSync(join(root, 'output', `${file}.txt`), output + '\n');

    const lines = output.split('\n');
    const rows = 1 + lines.reduce((sum, line) => sum + wrappedRows(line), 0);
    const width = COLS * CHAR_WIDTH + 100;
    const height = rows * LINE_HEIGHT + CHROME_OF_WINDOW + 20;

    const page = join(scratch, `${file}.html`);
    writeFileSync(page, terminalPage(title, `npm start examples/${file}.MAGA`, output));
    const png = join(root, 'screenshots', `${file}.png`);
    execFileSync(chrome, [
      '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=2',
      `--window-size=${width},${height}`, `--screenshot=${png}`, `file://${page}`,
    ], { stdio: 'ignore' });

    console.log(`${title}: ${lines.length} LINES IN ${seconds}S -> screenshots/${file}.png. BEAUTIFUL PICTURE!`);
  }
} finally {
  rmSync(scratch, { recursive: true, force: true });
}
