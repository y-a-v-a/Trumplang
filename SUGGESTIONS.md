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

## A. Unify into one expression grammar — ☐ proposed (highest impact)

Collapse `condition` into `expression` and build a single complete precedence
ladder. This makes booleans first-class, wires in the orphaned bitwise/shift
rules, and lets any boolean-typed expression be a condition.

```antlr
expression  : logicalOr ;
logicalOr   : logicalAnd (OR logicalAnd)* ;
logicalAnd  : equality  (AND equality)* ;
equality    : comparison ((EQUALS | NOT_EQUALS) comparison)? ;
comparison  : bitwiseOr ((GREATER_THAN | LESS_THAN
                         | GREATER_THAN_OR_EQUALS | LESS_THAN_OR_EQUALS) bitwiseOr)? ;
bitwiseOr   : bitwiseXor ((BITWISE_OR | BITWISE_XOR) bitwiseXor)* ;
bitwiseXor  : bitwiseAnd (BITWISE_XOR bitwiseAnd)* ;
bitwiseAnd  : shift (BITWISE_AND shift)* ;
shift       : additive ((SHIFT_LEFT | SHIFT_RIGHT) additive)* ;
additive    : term ((PLUS | MINUS | STRING_CONCAT) term)* ;
term        : power ((MULTIPLY | DIVIDE | MODULO) power)* ;
power       : unary (POWER power)? ;          // right-assoc, now chainable
unary       : (NOT | MINUS) unary | primary ; // logical NOT + numeric negation
primary     : OPEN_PAREN expression CLOSE_PAREN
            | literal | VARIABLE | functionCall | arrayAccess | dealAccess ;
```

Then `ifStatement` / `whileLoop` / etc. take `expression` where they took
`condition`, and the `condition` rule is deleted. Requires visitor rewrite +
fresh tests per precedence level.

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

A through C, E, F remain proposed. A is the highest-impact next step.
