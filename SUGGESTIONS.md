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

## B. Real assignment targets (lvalues) — ☐ proposed

```antlr
assignTarget : VARIABLE
             | VARIABLE ARRAY_ACCESS expression          // ARRAY! SECTION I!
             | VARIABLE DEAL_ACCESS_KEYWORD VARIABLE ;    // PERSON! FOLLOW NAME!

assignmentStatement
    : assignTarget (ASSIGNMENT | COMPOUND_ADD | COMPOUND_SUBTRACT
                   | COMPOUND_MULTIPLY | COMPOUND_DIVIDE) expression ;
```

Makes arrays and deals mutable after construction.

## C. First-class literals — ☐ proposed

Promote array and deal literals to `primary` so they are values, and add numeric
negation via the `unary` rule from A.

```antlr
literal      : NUMBER | STRING | BOOLEAN | arrayLiteral | dealDeclaration ;
arrayLiteral : ARRAY_ELEMENTS_DECL arrayElements? ;   // usable as expr / return / arg
```

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

## E. Completeness gaps — ☐ proposed

- **Function return types** — functions are currently untyped; a return-type
  clause (e.g. `... GIVING BACK HUGE`) makes it feel designed.
- **A null / absent value** — no way to express "no value" (e.g. `NOTHING TO SEE HERE`).
- **For-loop step** — `FROM 0 TO 10` has no stride; add an optional `EVERY n`.
- **String escapes & case** — `STRING` is uppercase-only with a hand-listed
  charset. Keep *keywords* uppercase (the joke) but allow full characters +
  escape sequences inside quotes so real text is expressible.

## F. Robustness — ☐ proposed

No statement separator exists; adjacent statements rely entirely on keyword
boundaries to disambiguate. It parses today but is fragile once expressions get
richer (A). Either add a lightweight optional terminator or add explicit tests
proving statement boundaries stay unambiguous.

---

## Recommended sequencing

D (cheap cleanup, prerequisite token hygiene) → A → B → C → E/F (polish).

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
