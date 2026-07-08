// Smoke test: run the BUILT browser bundle in Node and check real programs
// work end-to-end (parse, interpret, inflate, pardon). EXTREME VETTING for
// the playground.
import { runTrumplang, EXAMPLES } from '../public/playground.js';

let failures = 0;
const check = (name, cond) => {
  if (cond) {
    console.log(`  PASSED BIGLY: ${name}`);
  } else {
    console.error(`  TOTALLY RIGGED: ${name}`);
    failures++;
  }
};

// 1. Inflation demo: real value 100 prints as 110, FACT CHECK passes
{
  const r = await runTrumplang(EXAMPLES['NUMBER INFLATION']);
  check('inflation example runs', r.ok);
  check('printed crowd is inflated to 110', r.output.includes('110'));
}

// 2. Pardon demo survives a division by zero and an impeachment
{
  const r = await runTrumplang(EXAMPLES['PARDON / WITCH HUNT']);
  check('pardon example runs', r.ok);
  check('division-by-zero charges surfaced', r.output.includes('DIVIDE BY ZERO'));
  check('impeachment reason bound', r.output.includes('A PERFECT PHONE CALL'));
}

// 3. Nested deals resolve through the FOLLOW chain (24 inflated to 26.4)
{
  const r = await runTrumplang(EXAMPLES['NESTED DEALS']);
  check('nested deals example runs', r.ok);
  check('gold fixtures inflated to 26.4', r.output.includes('26.4'));
}

// 4. IN TWO WEEKS never runs the block - the fact check sees zero promises kept
{
  const r = await runTrumplang(EXAMPLES['IN TWO WEEKS']);
  check('two weeks example runs', r.ok);
  check('announcement announced', r.output.includes('IN TWO WEEKS'));
  check('the plan never shipped', !r.output.includes('HERE IS THE FULL AND COMPLETE HEALTHCARE PLAN'));
}

// 5. BIG BEAUTIFUL TARIFF enacts, domestic functions trade free (16 inflated to 17.6)
{
  const r = await runTrumplang(EXAMPLES['BIG BEAUTIFUL TARIFF']);
  check('tariff example runs', r.ok);
  check('tariff enacted at 25%', r.output.includes('25%'));
  check('domestic square untaxed', r.output.includes('17.6'));
}

// 6. The modest function is rejected by the parser
{
  const r = await runTrumplang(EXAMPLES['MODEST FUNCTION (PARSE ERROR)']);
  check('modest function fails', !r.ok);
  check('modesty rant delivered', r.error.includes('MODEST'));
}

if (failures > 0) {
  console.error(`\n${failures} SMOKE CHECK(S) TOTALLY RIGGED! SAD!`);
  process.exit(1);
}
console.log('\nALL SMOKE CHECKS PASSED BIGLY! TREMENDOUS PLAYGROUND!');
