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
  check('the retelling grows to 111 and 112', r.output.includes('111') && r.output.includes('112'));
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

// 4. THE WEAVE runs evens first, then comes back for the odds (1 3 2 4)
{
  const r = await runTrumplang(EXAMPLES['THE WEAVE']);
  check('weave example runs', r.ok);
  check(
    'tangent 3 weaves in before tangent 2',
    r.output.indexOf('TANGENT 3') > -1 && r.output.indexOf('TANGENT 3') < r.output.indexOf('TANGENT 2'),
  );
  check('the weave announces itself', r.output.includes("THAT'S CALLED THE WEAVE"));
}

// 5. CONCEPTS OF A PLAN delivers the return type default and brags about it
{
  const r = await runTrumplang(EXAMPLES['CONCEPTS OF A PLAN']);
  check('concepts example runs', r.ok);
  check('the concept insists it exists', r.output.includes('WE HAVE CONCEPTS OF A PLAN FOR THAT'));
}

// 6. IN TWO WEEKS never runs the block - the fact check sees zero promises kept
{
  const r = await runTrumplang(EXAMPLES['IN TWO WEEKS']);
  check('two weeks example runs', r.ok);
  check('announcement announced', r.output.includes('IN TWO WEEKS'));
  check('the plan never shipped', !r.output.includes('HERE IS THE FULL AND COMPLETE HEALTHCARE PLAN'));
}

// 7. BIG BEAUTIFUL TARIFF enacts, domestic functions trade free (16 inflated to 17.6)
{
  const r = await runTrumplang(EXAMPLES['BIG BEAUTIFUL TARIFF']);
  check('tariff example runs', r.ok);
  check('tariff enacted at 25%', r.output.includes('25%'));
  check('domestic square untaxed', r.output.includes('17.6'));
}

// 8. STOP THE COUNT leaves the loop while ahead
{
  const r = await runTrumplang(EXAMPLES['STOP THE COUNT']);
  check('stop the count example runs', r.ok);
  check('the count stops while ahead', r.output.includes('STOP THE COUNT!'));
}

// 9. CHAPTER 11 wipes the debt and brags about it
{
  const r = await runTrumplang(EXAMPLES['CHAPTER 11']);
  check('chapter 11 example runs', r.ok);
  check('bankruptcy number announced', r.output.includes('BANKRUPTCY NUMBER 1 OF 6'));
}

// 10. HUSH MONEY settles in silence, bounces in public
{
  const r = await runTrumplang(EXAMPLES['HUSH MONEY']);
  check('hush money example runs', r.ok);
  check('first payment is silent', !r.output.includes('GOLF TOURNAMENT'));
  check('bounced payment goes public', r.output.includes('THE HUSH MONEY BOUNCED!') && r.output.includes('A SECOND STORY, SOMEHOW WORSE'));
}

// 11. LOYALTY: the neglected function leaks, then gets called and still works
{
  const r = await runTrumplang(EXAMPLES['LOYALTY (THE TELL-ALL)']);
  check('loyalty example runs', r.ok);
  check('the neglected function leaks', r.output.includes('LEAKED FROM MOONLIGHT'));
  check('the author still works when called', r.output.includes('I WAS IN THE ROOM'));
}

// 12. The modest function is rejected by the parser
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
