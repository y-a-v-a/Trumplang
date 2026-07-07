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

- [ ] Grammar: `tryStatement: PARDON_BLOCK blockStatement CAUGHT_CLAUSE blockStatement;`
      Proposed tokens: try = `NOBODY GETS PARDONED LIKE ME`, catch = `WITCH HUNT!`
      (bikeshed the exact phrases; catch should optionally bind the error message
      to a `TWEET` variable)
- [ ] Grammar: throw statement — `IMPEACH expression` (throwing is an impeachment;
      being caught is a pardon)
- [ ] Visitor: implement try/catch over the existing `Error`-based runtime errors,
      so division by zero, undefined vars, wall-climbing etc. become catchable
- [ ] Decide: are ASSERTION FAILED errors catchable? (Recommend NO — you can't
      pardon a fact check, that's the whole joke)
- [ ] Tests: `test/PARDON.TEST.MAGA` (catch div-by-zero, catch IMPEACH, verify
      uncaught IMPEACH still crashes) · Example: `examples/PARDON.MAGA`

## 2. Writable WALL sections — array element assignment (BUG-TIER GAP)

`arrayAccess` exists only as an expression; the WALL is currently read-only.

- [ ] Grammar: extend `assignmentStatement` (or add `arrayAssignment`):
      `arrayName = VARIABLE ARRAY_ACCESS index = additiveExpression ASSIGNMENT expression`
- [ ] Visitor: bounds-checked element write (reuse the CLIMB OVER THE WALL error)
- [ ] Tests: extend `test/array/` — write, overwrite, out-of-bounds write

## 3. Nested DEALs — stop admitting defeat in the docs

The "separate deal vars" workaround is the grammar surrendering.

- [ ] Grammar: allow `dealDeclaration` as a `dealField` value:
      `dealField: dataType fieldName = VARIABLE ASSIGNMENT (expression | dealDeclaration);`
- [ ] Visitor: recursive deal construction; chained access `A! FOLLOW B! FOLLOW C!`
      (requires making `dealAccess` left-recursive or iterative)
- [ ] Tests: `test/deal/NESTED_DEAL.TEST.MAGA` replacing the workaround test
- [ ] Docs: delete the "nested deal workaround" from CLAUDE.md/README

## 4. FOR loop step and direction

`FROM 0 TO 10` only counts up by 1. SAD!

- [ ] Grammar: optional step clause, e.g. `... FROM expr TO expr (BY_LANDSLIDE expression)?`
      (token bikeshed: `IN INCREMENTS OF`? `EVERY SINGLE TIME BY`?)
- [ ] Visitor: support descending ranges (FROM 10 TO 0 counts down — direction
      inferred, no separate keyword needed)
- [ ] Tests: step of 2, descending loop, step with expression

## 5. Put ONE structural constraint in the parser (INTERCAL tier)

All-uppercase strings is currently the only grammar-level constraint on the
programmer. Add at least one more — pick ONE, don't do all:

- [ ] Option A — Import tariffs: `I KNOW THE BEST PEOPLE FROM "X.MAGA"` requires a
      tariff clause (`AND THEY'RE PAYING FOR IT expression`); the value is charged
      against... something (a global GREATNESS budget?)
- [ ] Option B — Mandatory superlative: every `functionDeclaration` must include a
      self-praise token before the body (`THE BEST | TREMENDOUS | INCREDIBLE, FOLKS`),
      and the parser rejects modest functions
- [ ] Option C — Chapter 11: `DECLARE BANKRUPTCY` statement wipes the current scope's
      variables (grammar + visitor; it's scope disposal as a business strategy)

## 6. Let the chaos show in the grammar file itself

The language's identity (output lies, operators can be gaslit) is invisible to
someone reading Trumplang.g4.

- [ ] Move the number-inflation and executive-order semantics documentation into
      grammar comments next to `printStatement` / `executiveOrder` (the FACT CHECK
      precedence comment is the model — joke and engineering as one)
- [ ] Rename bland rule names where the theme has a better word
      (e.g. `tryStatement` → `pardonStatement`) so the parse tree reads on-theme

## Housekeeping (from the merge, low effort)

- [ ] `docs/social/*.md` and READMEs: verify no lingering references to removed
      operators (bitwise/shift/compound) — refinement updated them, but re-check
      after tasks above land
- [ ] Push local `main` (currently ahead of origin: merge + gitignore + this file)
- [ ] `packages/trumplang-website/` playground is still "(future)" — chaos features
      (inflation, SUPREME COURT coin-flip) are exactly what a playground demos best
