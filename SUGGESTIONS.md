# SUGGESTIONS.md — Sharpening Trumplang

Proposals to lift Trumplang from a comic esolang to a real language that still
talks like POTUS. Vocabulary stays close to actual tweet language — these
changes are about grammar structure and correctness, not about toning down the
voice.

Status legend: ☐ proposed · ☑ done

---

## The core diagnosis

Three structural decisions keep Trumplang in "toy" territory regardless of how
good the keywords are:

1. **Expressions and conditions are two disjoint grammars.** `condition` has
   comparisons + `AND`/`OR`/`NOT`, but `expression` has none of that. Booleans
   are therefore not first-class values: you can declare `SUPPORT FLAG!` but you
   cannot compute one, and a function returning a boolean cannot be used as a
   condition.
2. **The bitwise/shift rules are dead code.** The real chain is
   `expression → term → powerExpression → primaryExpression`. `bitwiseExpression`
   and `shiftExpression` are defined but never referenced — unreachable. Despite
   docs claiming bitwise ops are "fully implemented," no program can parse one.
3. **Arrays and deals are write-once.** `assignmentStatement` only targets a bare
   `VARIABLE` — no `ARRAY! SECTION 1 ABSOLUTELY X`, no
   `PERSON! FOLLOW NAME! ABSOLUTELY ...`. Array/deal literals are not
   expressions either, so they cannot be returned, passed, or nested. The data
   structures are ornamental.

---

## A. Unify into one expression grammar — ☑ done

Collapsed `condition` into `expression` and built a single complete precedence
ladder. Booleans are now first-class, the orphaned bitwise/shift rules are wired
in (they were dead code), and any boolean-typed expression can be a condition.

The implemented ladder (loosest binding at the top). Note: **equality is the
OUTERMOST operator**, looser than `AND`/`OR`. This deviates from textbook C
precedence on purpose — it is what keeps the `FACT CHECK <actual> SO TRUE
<expected>` idiom working as `(<actual>) == (<expected>)`. With equality nested
*inside* logical ops, `FALSE_VALUE! AND IT'S TRUE TRUE_VALUE! SO TRUE FAKE NEWS`
would parse as `false && (true == false)` and assert the wrong thing; with
equality outermost it is `(false && true) == false`, which is what the idiom
means.

```antlr
expression           : equalityExpression ;
equalityExpression   : logicalOrExpression
                     | equalityExpression (EQUALS | NOT_EQUALS) logicalOrExpression ; // left-assoc, chainable
logicalOrExpression  : logicalAndExpression
                     | logicalOrExpression OR logicalAndExpression ;
logicalAndExpression : comparisonExpression
                     | logicalAndExpression AND comparisonExpression ;
comparisonExpression : bitwiseExpression
                     | comparisonExpression (GT | LT | GTE | LTE) bitwiseExpression ;
bitwiseExpression    : shiftExpression
                     | bitwiseExpression (BITWISE_AND | BITWISE_OR | BITWISE_XOR) shiftExpression ;
shiftExpression      : additiveExpression
                     | shiftExpression (SHIFT_LEFT | SHIFT_RIGHT) additiveExpression ;
additiveExpression   : term
                     | additiveExpression (PLUS | MINUS | STRING_CONCAT) term ;
term                 : powerExpression
                     | term (MULTIPLY | DIVIDE | MODULO) powerExpression ;
powerExpression      : unaryExpression
                     | unaryExpression POWER powerExpression ; // right-assoc, chainable
unaryExpression      : (NOT | MINUS) unaryExpression | primaryExpression ;
primaryExpression    : OPEN_PAREN expression CLOSE_PAREN
                     | VARIABLE | STRING | NUMBER | BOOLEAN
                     | functionCall | arrayAccess | dealAccess ;
```

`ifStatement` / `elseIfStatement` / `whileLoop` / `assertStatement` now take
`expression`; the `condition` and `comparison` rules are deleted. `assertStatement`
is just `ASSERT_CALL expression` (a single boolean that must be TRUE). Array index
uses `additiveExpression` (not full `expression`) so a trailing comparison such as
`ARRAY! SECTION 0 SO TRUE 10` stays `(ARRAY! SECTION 0) SO TRUE 10` instead of
being swallowed into the index.

## B. Real assignment targets (lvalues) — ☑ done

- ☑ **Array element assignment** — done 2026-07-07 as its own `arrayAssignment`
  rule (`NUMBERS! SECTION 1 ABSOLUTELY 99`), bounds-checked.
- ☑ **Deal field assignment** — done 2026-07-07 as `dealAssignment`:
  `PERSON! FOLLOW ADDRESS! FOLLOW CITY! ABSOLUTELY "MAR-A-LAGO"` — existing
  fields only (you can renegotiate a deal, you can't invent terms), any depth.
- ✗ Compound assignments (`COMPOUND_ADD` etc.) were removed from the language by
  the refinement merge — dropped from this proposal.

## C. First-class literals — ☑ done (2026-07-07)

Array literals (`AND MEXICO WILL PAY FOR IT 1 PREVAILS 2`) and deal
declarations are `primaryExpression` alternatives: returnable, passable as
arguments, assignable anywhere an expression fits. The special-case
`dealDeclaration` alternatives in `variableDeclaration`/`dealField` collapsed
into plain `expression`. Numeric negation had already landed with A's `unary`
rule. One deviation from the sketch: `arrayLiteral` requires at least one
element — an empty literal would swallow the next statement (keyword-boundary
parsing); use `BUILD THE WALL` or the WALL type default for empty arrays.
Type guard: a deal value smuggled into a non-DEAL declaration or field still
rants.

## D. Lexer hygiene — ☑ done

Real bugs and latent hazards, not style:

- **Spelling drift:** `MINUS: 'LOSING'` vs `COMPOUND_SUBTRACT: 'LOOSING MASSIVELY'`
  (one S vs two). Standardize on `LOSING` (POTUS's usual spelling) so the two
  subtraction operators match.
- **Token collision:** `selectiveImport` used an inline `'FROM'`, which the lexer
  already owned as `FOR_LOOP_FROM`. Inline literals in parser rules
  (`'I ONLY WANT'`, `'FROM'`, `'MAKE'`, `'GREATER'`, `'SMALLER'`, `'('`, `')'`)
  silently mint anonymous tokens and create exactly this kind of overlap.
  Promote all of them to named lexer rules.
- **Maximal-munch hazards:** `PLUS: 'WINNING'` vs `COMPOUND_ADD: 'WINNING MASSIVELY'`,
  and `AND: "AND IT'S TRUE"` vs `PARAMS_ARGS_CHAIN: 'AND'`. ANTLR's longest-match
  saves you most of the time; pin each prefix-overlapping pair with a lexer test.

## E. Completeness gaps — ☑ done (2026-07-07)

- ~~Function return types~~ — ☑ done 2026-07-07: optional `GIVING BACK <type>`
  clause after the parameter list, enforced at runtime (a `HUGE` promise rejects
  a `BIGLY` delivery; breaking the promise rants, pardonably).
- ~~A null / absent value~~ — ☑ done 2026-07-07: `NOTHING TO SEE HERE` is a
  primary expression evaluating to null. Prints as itself, equals only itself,
  falsy in conditions; a `GIVING BACK` promise refuses it; declaring a typed
  variable with it yields the type default.
- ~~For-loop step~~ — ☑ done 2026-07-07 as `IN TREMENDOUS STEPS OF n`, with
  descending ranges inferred from `FROM 10 TO 0`.
- ~~String escapes & case~~ — ☑ done 2026-07-07: `STRING` accepts any characters
  plus `\" \\ \n \t` escapes; the RUNTIME uppercases every string value, so the
  "Trumplang only speaks in uppercase" identity moved from the lexer into the
  semantics — you can whisper, but the language will shout. Bonus fix: `FILEPATH`
  now precedes `STRING` in the lexer; before, import paths always lost the
  equal-length tie to `STRING`, so `importStatement` could never actually parse.

## F. Robustness — ☑ done (2026-07-07)

Both remedies, not either: `PERIOD.` is an optional statement terminator (the
most emphatic one in any programming language), and
`test/STATEMENT_BOUNDARIES.TEST.MAGA` pins the boundary behavior with tests.
The fragility was real and demonstrable: a zero-argument call followed by
another call silently parsed as `F(F(7))` — the second statement swallowed as
the first call's argument. That swallow is now pinned as documented behavior,
and `PERIOD.` is the idiom that ends the statement when both readings are
viable. No mandatory separator was added — the prose aesthetic stands.

---

## Recommended sequencing

D (cheap cleanup, prerequisite token hygiene) → A → B → C → E/F (polish).

**Status update (2026-07-07):** D and A shipped earlier; the TASKS.md wave added
PARDON/IMPEACH exception handling, array element assignment (half of B), nested
deal declarations with chained FOLLOW reads, for-loop steps (part of E), the
mandatory-superlative parse constraint, and a browser playground. Note the
bitwise/shift operators that A wired in were subsequently REMOVED on purpose by
the refinement merge (cut bloat) — the ladder below reflects A as implemented at
the time, not today's grammar. B, C, E, and F completed in full later the same day.
Every suggestion in this file has been implemented. TREMENDOUS. This document
is now a historical record of the language growing up.

---

## Sign-off

**D — Lexer hygiene — DONE (2026-06-16).** Tremendous cleanup, believe me.

- Fixed the spelling drift: `COMPOUND_SUBTRACT` is now `LOSING MASSIVELY`,
  matching `MINUS: 'LOSING'`. (No existing `.MAGA` program used the old
  `LOOSING` spelling, so nothing broke.)
- Removed the `'FROM'` token collision in `selectiveImport` by renaming
  `FOR_LOOP_FROM` to a shared `FROM_KEYWORD`, used by both the for-loop and the
  selective import.
- Promoted every inline parser-rule literal to a named lexer token:
  `MAKE_DECL`, `INCREMENT_OP`, `DECREMENT_OP`, `OPEN_PAREN`, `CLOSE_PAREN`,
  `SELECTIVE_IMPORT_DECL`. No more anonymous tokens minted inside parser rules.
- Pinned the maximal-munch boundaries with a new test,
  `test/COMPOUND_ASSIGN.TEST.MAGA`, proving `WINNING` vs `WINNING MASSIVELY` and
  `LOSING` vs `LOSING MASSIVELY` tokenize correctly.

Parser regenerated; full suite green at **29 passed / 0 failed**. Keyword
strings in `.MAGA` programs are unchanged except the unused `LOOSING` spelling,
so existing programs keep working. The visitor needed no changes — it reads
labeled elements (`ctx.varName`, `ctx.filePath`, `ctx.importName`) and
`ctx.expression()`, all preserved.

**A — Unify into one expression grammar — DONE (2026-06-16).** One ladder to
rule them all, and it's the best ladder.

- Replaced the separate `condition` / `comparison` / `expression` / dead
  `bitwiseExpression` / `shiftExpression` rules with one linear precedence ladder
  (`equalityExpression` → `logicalOr` → `logicalAnd` → `comparison` → `bitwise` →
  `shift` → `additive` → `term` → `power` → `unary` → `primary`).
- **Booleans are first-class:** a comparison or logic expression can be stored in
  a `SUPPORT` variable, returned, or passed as an argument.
- **Bitwise and shift operators are reachable at last** — they were defined but
  orphaned (no rule referenced them), so no program could ever parse one. Now
  `5 ALLIANCE WITH 3`, `5 PROMOTE 2`, etc. work inside any expression.
- Added a **unary** level: logical NOT (`WRONG`) and numeric negation (`LOSING 7`
  = -7). Power (`HUGELY MULTIPLIED BY`) is now right-associative and chainable
  without parens.
- `if` / `else-if` / `while` / `assert` now take a plain `expression`. `assert`
  became `FACT CHECK <boolean expression>`; the old two-operand form still reads
  identically because `SO TRUE` is the outermost equality operator.
- Design choice: equality is the *loosest-binding* operator (looser than
  `AND`/`OR`) so the `FACT CHECK <actual> SO TRUE <expected>` idiom keeps meaning
  `(<actual>) == (<expected>)`. Array index is restricted to `additiveExpression`
  so `ARRAY! SECTION 0 SO TRUE 10` parses as `(ARRAY[0]) == 10`.

Parser regenerated; full suite green at **30 passed / 0 failed** (added
`test/UNIFIED_EXPRESSIONS.TEST.MAGA` covering every newly-possible construct).
All existing tests and example programs pass unchanged.

Implementation note: the interpreter dispatches via a custom `visit(ctx)` that
maps `ctx.constructor.name` → `visit<ClassName>` (so the real method names carry
the `Context` suffix, e.g. `visitEqualityExpressionContext`). The committed
generated `TrumplangVisitor.js` base is stale (the `generate-parser` script omits
`-visitor`), but it is inert: the custom dispatcher never relies on it. Worth
fixing under a separate cleanup if the base visitor is ever needed.

B, C, E, F remain proposed. B (real lvalues for arrays/deals) is the natural next
step now that the expression grammar is solid.
