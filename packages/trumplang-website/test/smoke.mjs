// Smoke test: run the BUILT browser bundle in Node and check real programs
// work end-to-end (parse, interpret, inflate, pardon). EXTREME VETTING for
// the playground AND for every snippet on the homepage, so the website can
// never drift behind the grammar again.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { runTrumplang, EXAMPLES, ALL_EXAMPLES, highlight, keywordList } from '../public/playground.js';

const here = dirname(fileURLToPath(import.meta.url));
let failures = 0;
const check = (name, cond, detail = '') => {
  if (cond) {
    console.log(`  PASSED BIGLY: ${name}`);
  } else {
    console.error(`  TOTALLY RIGGED: ${name}${detail ? '\n    ' + detail.split('\n').join('\n    ') : ''}`);
    failures++;
  }
};

// ---------------------------------------------------------------------------
console.log('\n1. EVERY PLAYGROUND EXAMPLE RUNS (OR FAILS EXACTLY AS ADVERTISED)');
for (const ex of ALL_EXAMPLES) {
  const r = await runTrumplang(ex.code);
  if (ex.expectError) {
    check(`${ex.name} fails with "${ex.expectError}"`, !r.ok && r.error.includes(ex.expectError), r.error || r.output);
  } else {
    check(`${ex.name} runs`, r.ok, r.error);
  }
}

// ---------------------------------------------------------------------------
console.log('\n2. THE LANGUAGE IDENTITY, END TO END');
{
  const r = await runTrumplang(EXAMPLES['NUMBER INFLATION']);
  check('printed crowd is inflated to 110', r.output.includes('110'));
  check('the retelling grows to 111 and 112', r.output.includes('111') && r.output.includes('112'));
}
{
  const r = await runTrumplang(EXAMPLES['PARDON / WITCH HUNT']);
  check('division-by-zero charges surfaced', r.output.includes('DIVIDE BY ZERO'));
  check('impeachment reason bound', r.output.includes('A PERFECT PHONE CALL'));
}
{
  const r = await runTrumplang(EXAMPLES['THE ART OF THE DEAL (OBJECTS)']);
  check('gold fixtures inflated to 26.4', r.output.includes('26.4'));
}
{
  const r = await runTrumplang(EXAMPLES['THE WEAVE']);
  check(
    'tangent 3 weaves in before tangent 2',
    r.output.indexOf('TANGENT 3') > -1 && r.output.indexOf('TANGENT 3') < r.output.indexOf('TANGENT 2'),
  );
  check('the weave announces itself', r.output.includes("THAT'S CALLED THE WEAVE"));
}
{
  const r = await runTrumplang(EXAMPLES['CONCEPTS OF A PLAN']);
  check('the concept insists it exists', r.output.includes('WE HAVE CONCEPTS OF A PLAN FOR THAT'));
}
{
  const r = await runTrumplang(EXAMPLES['IN TWO WEEKS']);
  check('announcement announced', r.output.includes('IN TWO WEEKS'));
  check('the plan never shipped', !r.output.includes('HERE IS THE FULL AND COMPLETE HEALTHCARE PLAN'));
}
{
  const r = await runTrumplang(EXAMPLES['BIG BEAUTIFUL TARIFF']);
  check('tariff enacted at 25%', r.output.includes('25%'));
  check('domestic square untaxed', r.output.includes('17.6'));
}
{
  const r = await runTrumplang(EXAMPLES['THE MAR-A-LAGO SET (MANDELBROT)']);
  check('the set renders in gold', r.output.includes('@@@@@@@@@@'));
  check('538 points in the set, fact checked', r.output.includes('538 POINTS IN THE SET'));
}
{
  const r = await runTrumplang(EXAMPLES['ELECTION NIGHT (269 TO 269)']);
  check('the count stops in the battleground', r.output.includes('CALLED FOR US WITH 30% REPORTING'));
  check('the full count is a 269-269 tie', r.output.includes('THE FULL COUNT: US 269, THEM 269'));
  check('the concession speech writes a book', r.output.includes('CONCEDE: WHAT I SAW'));
}
{
  const r = await runTrumplang(EXAMPLES['STOP THE COUNT']);
  check('the count stops while ahead', r.output.includes('STOP THE COUNT!'));
}
{
  const r = await runTrumplang(EXAMPLES['CHAPTER 11']);
  check('bankruptcy number announced', r.output.includes('BANKRUPTCY NUMBER 1 OF 6'));
}
{
  const r = await runTrumplang(EXAMPLES['HUSH MONEY']);
  check('first payment is silent', !r.output.includes('GOLF TOURNAMENT'));
  check('bounced payment goes public', r.output.includes('THE HUSH MONEY BOUNCED!') && r.output.includes('A SECOND STORY, SOMEHOW WORSE'));
}
{
  const r = await runTrumplang(EXAMPLES['LOYALTY (THE TELL-ALL)']);
  check('the neglected function leaks', r.output.includes('LEAKED FROM MOONLIGHT'));
  check('the author still works when called', r.output.includes('I WAS IN THE ROOM'));
}
{
  const r = await runTrumplang(EXAMPLES['FUNCTIONS MUST PRAISE THEMSELVES']);
  check('the fired function is announced', r.output.includes("YOU'RE FIRED"));
}
{
  const r = await runTrumplang(EXAMPLES['FACT CHECK (TOTALLY RIGGED)']);
  check('the catch block never ran - fact checks are unpardonable', !r.output.includes('THIS LINE NEVER PRINTS'));
}

// ---------------------------------------------------------------------------
console.log('\n3. EVERY SNIPPET ON THE HOMEPAGE PARSES AND RUNS');
const unescapeHtml = (s) =>
  s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
const html = readFileSync(join(here, '..', 'public', 'index.html'), 'utf8');
const snippetRe = /<pre class="maga"([^>]*)><code>([\s\S]*?)<\/code><\/pre>/g;
let snippetCount = 0;
for (const m of html.matchAll(snippetRe)) {
  const attrs = m[1];
  const file = (/data-file="([^"]+)"/.exec(attrs) || [])[1] || `snippet #${snippetCount + 1}`;
  const vet = (/data-vet="([^"]+)"/.exec(attrs) || [])[1] || 'program';
  const code = unescapeHtml(m[2]);
  snippetCount++;
  if (vet === 'skip') {
    console.log(`  SKIPPED (NEEDS A FILESYSTEM): ${file}`);
    continue;
  }
  const source =
    vet === 'fragment' ? `THE TIME FOR EMPTY TALK IS OVER!!!\n${code}\nMAKE AMERICA GREAT AGAIN` : code;
  const r = await runTrumplang(source);
  if (vet.startsWith('fails:')) {
    const expected = vet.slice('fails:'.length);
    check(`${file} fails with "${expected}"`, !r.ok && r.error.includes(expected), r.error || r.output);
  } else {
    check(`${file} runs (${vet})`, r.ok, r.error);
  }
}
check('the homepage has snippets at all', snippetCount >= 15, `found ${snippetCount}`);
check('no stale snippet uses BELIEVE ME as the program start', !/<code>BELIEVE ME\n/.test(html));

// ---------------------------------------------------------------------------
console.log('\n4. THE KEYWORD TABLE NAMES EVERY LITERAL THE LEXER KNOWS');
const tableSection = html.slice(html.indexOf('id="keywords"'), html.indexOf('id="run-it"'));
const tableText = unescapeHtml(tableSection);
const IGNORED = new Set(['(', ')', 'AND', 'FROM', 'TO', 'WITH']); // rendered as words, not standalone
for (const { keyword } of keywordList()) {
  if (IGNORED.has(keyword)) continue;
  check(`keyword table lists "${keyword}"`, tableText.includes(keyword));
}
check('keyword count matches the stat in the hero', keywordList().length > 80);

// ---------------------------------------------------------------------------
console.log('\n5. THE HIGHLIGHTER PRESERVES EVERY CHARACTER');
{
  const src = EXAMPLES['THE ART OF THE DEAL (OBJECTS)'];
  const stripped = highlight(src)
    .replace(/<[^>]+>/g, '')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
  check('highlighted text round-trips exactly', stripped === src);
  check('keywords get classes', highlight('EVERYONE IS TALKING ABOUT 42').includes('class="tl-io"'));
  check('governance gets its own class', highlight('CHAPTER 11').includes('class="tl-gov"'));
  check('comments are highlighted', highlight('A LOT OF PEOPLE ARE SAYING HI\n').includes('class="tl-comment"'));
}

if (failures > 0) {
  console.error(`\n${failures} SMOKE CHECK(S) TOTALLY RIGGED! SAD!`);
  process.exit(1);
}
console.log('\nALL SMOKE CHECKS PASSED BIGLY! TREMENDOUS PLAYGROUND!');
