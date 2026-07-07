# TASKS.md — MAKING TRUMPLANG GREAT AGAIN

Actionable follow-ups from the grammar review (2026-07-07). Goal: move Trumplang
from "polished keyword skin" to "semantically committed esolang" — the theme must
live in `grammar/Trumplang.g4`, not only in the visitor.

Each task lists grammar, interpreter, and test work. Workflow per task: edit
`grammar/Trumplang.g4` → `npm run generate-parser` → implement visitor →
add `.TEST.MAGA` + example → `npm run test-all` → update CLAUDE.md/README → commit.

---

## 1. PARDON — exception handling (HIGH PRIORITY, TREMENDOUS OPPORTUNITY)

The loudest gap in the grammar. The theme hands us the design for free.

- [x] Grammar: `pardonStatement` — try = `I ALONE CAN FIX IT`, catch = `WITCH HUNT!`
      with optional `errName = VARIABLE` binding the error as a TWEET
- [x] Grammar: `impeachStatement: IMPEACH expression` (throwing is an impeachment;
      being caught is a pardon)
- [x] Visitor: typed signal classes in errors.js (AssertionError, ImpeachmentError,
      BreakSignal); div-by-zero, undefined vars, wall-climbing all catchable
- [x] Decided: ASSERTION FAILED is NOT catchable — you can't pardon a fact check.
      `I WILL VETO!` (BreakSignal) passes through untouched too.
- [x] Tests: `test/PARDON.TEST.MAGA` (div-by-zero, IMPEACH binding, OOB wall write,
      clean path, nested pardons, rethrow/escalation) · Example: `examples/PARDON.MAGA`
      · uncaught IMPEACH crash + unpardonable FACT CHECK verified manually

## 2. Writable WALL sections — array element assignment (BUG-TIER GAP)

`arrayAccess` exists only as an expression; the WALL is currently read-only.

- [x] Grammar: added `arrayAssignment`:
      `arrayName = VARIABLE ARRAY_ACCESS index = additiveExpression ASSIGNMENT expression`
- [x] Visitor: bounds-checked element write (renovation allowed, no bolting on new sections)
- [x] Tests: `test/array/WALL_WRITE.TEST.MAGA` — write, overwrite, expression index/value
      (out-of-bounds write asserted via PARDON in task 1's test)

## 3. Nested DEALs — stop admitting defeat in the docs

The "separate deal vars" workaround is the grammar surrendering.

- [x] Grammar: `dealField` value can be a `dealDeclaration`; type-enforced (must be a `DEAL` field)
- [x] Visitor: recursive deal construction; chained access `A! FOLLOW B! FOLLOW C!`
      via `(DEAL_ACCESS_KEYWORD fieldName += VARIABLE)+`
- [x] Tests: `test/deal/NESTED_DEAL.TEST.MAGA` (3 levels deep) replaces the workaround test
- [x] Docs: workaround removed from CLAUDE.md; workaround example deleted
      (NESTED_DEAL_EXAMPLE.MAGA — previously impossible — now runs)

## 4. FOR loop step and direction

`FROM 0 TO 10` only counts up by 1. SAD!

- [x] Grammar: optional step clause `... FROM expr TO expr (FOR_LOOP_STEP expression)?`
      with `FOR_LOOP_STEP: 'IN TREMENDOUS STEPS OF'`
- [x] Visitor: descending ranges (FROM 10 TO 0 counts down — direction inferred);
      step must be positive or you get a low-energy rant
- [x] Tests: `test/FOR_STEP.TEST.MAGA` — step of 2, descending, descending+step,
      expression step, overshooting step terminates

## 5. Put ONE structural constraint in the parser (INTERCAL tier)

All-uppercase strings is currently the only grammar-level constraint on the
programmer. Add at least one more — pick ONE, don't do all:

- [x] **Chose Option B — Mandatory superlative**: every `functionDeclaration` must
      praise itself (`THE BEST | TREMENDOUS | LIKE NOBODY HAS EVER SEEN`) between the
      name and `PEOPLE TELL ME`, so it reads "INCREDIBLE FIB, THE BEST PEOPLE TELL ME…".
      The parser rejects modest functions with a dedicated modesty rant.
      Bonus: syntax errors are now FATAL (custom Trump error listener in the
      interpreter) — no more running half-parsed programs.
- [ ] ~~Option A — Import tariffs~~ (not chosen; task said pick one)
- [ ] ~~Option C — Chapter 11 bankruptcy~~ (not chosen; task said pick one)

## 6. Let the chaos show in the grammar file itself

The language's identity (output lies, operators can be gaslit) is invisible to
someone reading Trumplang.g4.

- [x] Grammar header now states the language's identity up front ("the output lies,
      the logic doesn't"); inflation documented at `printStatement`, gaslighting at
      `executiveOrder`, the coin-flip at `supremeCourtOverrule`, incorruptibility
      at `factCheckStatement`
- [x] Renamed bland rules: `loopBreak` → `vetoStatement`, `assertStatement` →
      `factCheckStatement` (exception handling was born as `pardonStatement`) —
      the parse tree now reads on-theme

## Housekeeping (from the merge, low effort)

- [ ] `docs/social/*.md` and READMEs: verify no lingering references to removed
      operators (bitwise/shift/compound) — refinement updated them, but re-check
      after tasks above land
- [ ] Push local `main` (currently ahead of origin: merge + gitignore + this file)
- [ ] `packages/trumplang-website/` playground is still "(future)" — chaos features
      (inflation, SUPREME COURT coin-flip) are exactly what a playground demos best
