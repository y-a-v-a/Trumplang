# The Trumplang Language Reference

THE COMPLETE REFERENCE. Every keyword, every rule, every beautiful feature.
Other languages have "specifications" — weak. We have this.

This document matches the implementation in `packages/trumplang-core`
(grammar: `grammar/Trumplang.g4`). If they ever disagree, the grammar is right
and this document is FAKE NEWS — please file an issue.

## The identity of the language

Before syntax, understand what you're dealing with:

- **The output lies, the logic doesn't.** Every number printed is inflated by
  10%. Every `FACT CHECK` sees the real value.
- **The operators can be gaslit.** `EXECUTIVE ORDER` remaps arithmetic at
  runtime; the `SUPREME COURT` overturns it — with a 50% chance it sides with
  the order instead. The judiciary is the only nondeterministic construct.
- **The programmer is constrained by the theme.** Functions must praise
  themselves (modesty is a parse error) and every string value is SHOUTED.
- **Errors are governance.** `IMPEACH` throws, `WITCH HUNT!` catches,
  `YOU'RE FIRED` deletes functions, `I WILL VETO!` leaves loops, and a failed
  `FACT CHECK` can never be pardoned.
- **Announcements are not deliveries.** `IN TWO WEEKS` schedules a block that
  never runs. The deadline is always two weeks away.
- **Trade is a weapon.** `BIG BEAUTIFUL TARIFF` taxes every number an imported
  function gives back. The exporting module pays — that's the official line.
  `FACT CHECK` the delivery and see whose number got smaller.
- **Written order is a suggestion.** `THE WEAVE` runs a block's statements as
  tangents — evens first, then back for the odds. It always comes back
  together. The professors say it's genius.
- **A body is optional.** A function may have `CONCEPTS OF A PLAN` instead of
  a body. Calling it insists the plan is fully worked out and delivers the
  return type's default — or `NOTHING TO SEE HERE`.

## Program structure

```
THE TIME FOR EMPTY TALK IS OVER!!!
    ... statements ...
MAKE AMERICA GREAT AGAIN
```

- Blocks open with `BELIEVE ME` and close with `I TOLD YOU SO`.
- Comments occupy a whole line starting with `A LOT OF PEOPLE ARE SAYING`.
- There is no mandatory statement separator — statements end where the next
  keyword begins. When two readings are both valid (see
  [Statement boundaries](#statement-boundaries)), end the statement with
  `PERIOD.` — the most emphatic optional terminator in any programming
  language, PERIOD.

## Variables and types

Variables are UPPERCASE and end with `!` (enthusiasm is mandatory).

| Type | Meaning | Default |
|---|---|---|
| `HUGE` | integer | `0` |
| `BIGLY` | float | `0.0` |
| `SUPPORT` | boolean | `FAKE NEWS` |
| `TWEET` | string | `""` |
| `WALL` | array | `[]` |
| `DEAL` | object | `{}` |

```
I HAVE THE BEST HUGE COUNT! ABSOLUTELY 0        (declare)
COUNT! ABSOLUTELY 5                              (assign)
I HAVE A VERY GOOD BRAIN FOR HUGE LIMIT! ABSOLUTELY 10   (constant)
```

Booleans: `VERY TRUE` and `FAKE NEWS`.

### NOTHING TO SEE HERE (null)

`NOTHING TO SEE HERE` is the null value. It is falsy, equals only itself, and
prints as itself. Declaring a typed variable with it yields the type's default
(types have defaults; nothing stays nothing only in assignments, returns, and
comparisons). A function with a `GIVING BACK` promise refuses to give back
nothing.

### Strings: whisper in, shout out

Write strings in any case with any characters, plus `\"`, `\\`, `\n`, `\t`
escapes. The runtime UPPERCASES every string value — you can whisper into the
source code, but Trumplang only speaks in uppercase.

```
I HAVE THE BEST TWEET SLOGAN! ABSOLUTELY "make code great again"
FACT CHECK SLOGAN! SO TRUE "MAKE CODE GREAT AGAIN"
```

## Operators

Binary (numeric unless noted):

| Operator | Keyword |
|---|---|
| `+` | `WINNING` |
| `-` | `LOSING` (also unary negation) |
| string concat | `ENDORSING` (immune to executive orders) |
| `*` | `BIG LEAGUE TIMES` |
| `/` | `SAD` |
| `%` | `LEFTOVER FROM` (immune to executive orders) |
| power | `HUGELY MULTIPLIED BY` (right-associative) |

Comparison and logic:

| Operator | Keyword |
|---|---|
| `==` | `SO TRUE` |
| `!=` | `TOTAL DISASTER` |
| `>` | `BETTER THAN` |
| `>=` | `AT LEAST AS GOOD AS` |
| `<` | `NOT AS GOOD AS` |
| `<=` | `NO BETTER THAN` |
| `&&` | `AND IT'S TRUE` |
| `\|\|` | `OR MAYBE` |
| `!` | `WRONG` |

Increment/decrement: `MAKE COUNT! GREATER` / `MAKE COUNT! SMALLER`.

### Precedence: equality binds LOOSEST

By design, `SO TRUE` / `TOTAL DISASTER` are the outermost operators — looser
than `AND IT'S TRUE` / `OR MAYBE`. This keeps the fact-check idiom natural:
`FACT CHECK <whole computation> SO TRUE <expected>`.

Consequence: a function call inside a fact check must be parenthesized, or the
`SO TRUE` clause is swallowed into the argument list:

```
FACT CHECK (I CALL UPON DOUBLE_IT PEOPLE TELL ME 21) SO TRUE 42
```

## Control flow

```
LISTEN cond BELIEVE ME ... I TOLD YOU SO                 (if)
PEOPLE ARE SAYING cond BELIEVE ME ... I TOLD YOU SO      (else if)
NOBODY KNEW BELIEVE ME ... I TOLD YOU SO                 (else)

WE'RE GOING TO WIN IN A LANDSLIDE cond BELIEVE ME ... I TOLD YOU SO   (while)

WE'RE GOING TO WIN, WIN, WIN WITH I! FROM 0 TO 10 BELIEVE ME ... I TOLD YOU SO
WE'RE GOING TO WIN, WIN, WIN WITH I! FROM 0 TO 10 IN TREMENDOUS STEPS OF 2 BELIEVE ME ... I TOLD YOU SO
WE'RE GOING TO WIN, WIN, WIN WITH I! FROM 10 TO 0 BELIEVE ME ... I TOLD YOU SO   (counts down - direction inferred)

BILLIONS AND BILLIONS ITEM! YET ARRAY! BELIEVE ME ... I TOLD YOU SO   (foreach)

I WILL VETO!                                             (break)
```

The step must be positive — zero and backward steps are low energy and get a
rant.

### THE WEAVE (tangential execution)

```
THE WEAVE BELIEVE ME
    ... tangents ...
I TOLD YOU SO
```

The block's statements do NOT run in written order. The weave goes off on the
even-numbered tangents first (statements 0, 2, 4, ...), then comes back for
the odd ones (1, 3, 5, ...) — so `A B C D` executes as `A C B D`. It is
deterministic: the weave ALWAYS comes back together, and announces that it
did, and that it's genius. Writing weave-safe code — code that is correct in
weave order — is your problem, and honestly a pretty good puzzle.

A return mid-weave leaves immediately: that weave never came back together,
so it gets no announcement. `I WILL VETO!` passes through untouched.

### IN TWO WEEKS (the announcement)

```
IN TWO WEEKS BELIEVE ME
    EVERYONE IS TALKING ABOUT "THE FULL AND COMPLETE HEALTHCARE PLAN"
I TOLD YOU SO
```

Schedules the block to run in two weeks. Two weeks never arrives — the block
is NEVER executed, no matter how many times control flow passes over it. Each
pass announces that the announcement is coming. The body must parse (we have
a plan, a beautiful plan) but it never needs to work: variables and functions
referenced inside don't have to exist, because nothing inside is ever
evaluated. The only construct in the language whose body is pure campaign
material.

## Functions

Every function declaration MUST praise itself — the superlative is required
syntax and the parser rejects modest functions:

```
INCREDIBLE FIB THE BEST PEOPLE TELL ME HUGE N! BELIEVE ME
  ...
  AND I MEAN THAT N!
I TOLD YOU SO
```

Superlatives: `THE BEST` · `TREMENDOUS` · `LIKE NOBODY HAS EVER SEEN`.

- Call: `I CALL UPON FIB PEOPLE TELL ME 10` (chain arguments with `AND`)
- Return: `AND I MEAN THAT expression`
- Optional return type, enforced at runtime:
  `INCREDIBLE FIB THE BEST PEOPLE TELL ME HUGE N! GIVING BACK HUGE BELIEVE ME ...`
  A `HUGE` promise rejects a fractional delivery; breaking the promise rants
  (pardonably). `GIVING BACK` refuses `NOTHING TO SEE HERE`.
- Fire a function: `YOU'RE FIRED FIB` — permanently deletes it. Calling a fired
  function rants. Functions may be re-declared afterwards (everyone deserves a
  second chance... maybe).

### CONCEPTS OF A PLAN (bodiless functions)

```
INCREDIBLE HEALTHCARE THE BEST PEOPLE TELL ME GIVING BACK TWEET CONCEPTS OF A PLAN
```

A function may have `CONCEPTS OF A PLAN` instead of a body. Perfectly legal
syntax — the superlative is still mandatory; the concept praises itself too.
Calling a concept announces that the plan is fully worked out and will be
seen very soon, then delivers the declared return type's default (`HUGE` → 0,
`TWEET` → `""`, ...) or `NOTHING TO SEE HERE` when nothing was promised. The
`GIVING BACK` promise is technically kept, which is the most on-brand thing
about it. Re-declaring the function with a body develops the concept into an
actual plan; concepts can be fired like anyone else.

## Walls (arrays)

```
BUILD THE WALL NUMBERS! AND MEXICO WILL PAY FOR IT 1 PREVAILS 2 PREVAILS 3
BUILD THE WALL EMPTY! AND MEXICO WILL PAY FOR IT          (empty wall)

NUMBERS! SECTION 1                    (read - 0-indexed, bounds-checked)
NUMBERS! SECTION 1 ABSOLUTELY 99      (write - renovation only, no new sections)
```

Array literals are first-class expressions — returnable, passable, assignable:

```
AND I MEAN THAT AND MEXICO WILL PAY FOR IT 10 PREVAILS 20
```

A literal requires at least one element (an empty literal would swallow the
next statement); for an empty wall use `BUILD THE WALL` or the type default.

## Deals (objects)

Typed fields, `&`-separated, `!!` terminator. Deal literals are first-class
expressions and nest:

```
I HAVE THE BEST DEAL PERSON! ABSOLUTELY (
    HUGE AGE! ABSOLUTELY 70 &
    TWEET NAME! ABSOLUTELY "DONALD" &
    DEAL ADDRESS! ABSOLUTELY (
        TWEET CITY! ABSOLUTELY "WASHINGTON"
    )!!
)!!

PERSON! FOLLOW NAME!                              (field read)
PERSON! FOLLOW ADDRESS! FOLLOW CITY!              (chained read, any depth)
PERSON! FOLLOW AGE! ABSOLUTELY 78                 (field write)
PERSON! FOLLOW ADDRESS! FOLLOW CITY! ABSOLUTELY "MAR-A-LAGO"   (deep write)
```

Deals are renegotiable, not amendable: you can rewrite existing terms at any
depth, but inventing a field that was never in the deal is an error. A deal
value must live in a `DEAL`-typed variable or field — smuggling one into a
`HUGE` rants.

## Trumpian runtime behavior

- **Number inflation** — every numeric value printed via
  `EVERYONE IS TALKING ABOUT` is inflated by 10%. `FACT CHECK` always sees the
  real value. The output lies, the logic doesn't.
- **`EXECUTIVE ORDER WINNING ABSOLUTELY LOSING`** — remaps `WINNING` to behave
  as `LOSING` for the rest of execution. Applies to `WINNING`, `LOSING`,
  `BIG LEAGUE TIMES`, `SAD`; `ENDORSING` and `LEFTOVER FROM` are immune.
- **`SUPREME COURT OVERRULES WINNING`** — attempts to overturn the order.
  50% it succeeds, 50% the court rules the order STANDS.

## Exception handling

```
I ALONE CAN FIX IT BELIEVE ME
    ... risky business ...
I TOLD YOU SO
WITCH HUNT! CHARGES! BELIEVE ME
    EVERYONE IS TALKING ABOUT CHARGES!
I TOLD YOU SO
```

- The try block runs because I ALONE CAN FIX IT; when it blows up, it's a
  WITCH HUNT! and the error is pardoned (caught).
- The optional variable after `WITCH HUNT!` receives the error as a `TWEET`.
- Throw with `IMPEACH expression` — the impeached value flies up the call
  stack until some witch-hunt clause pardons it.
- **A failed `FACT CHECK` can NEVER be pardoned.** That is the entire point of
  fact checks. `I WILL VETO!` passes through untouched too.

## Statement boundaries

Adjacent statements disambiguate on keyword boundaries. One documented hazard:
when a zero-argument call is followed by another call, the second is swallowed
as the first's argument (`F(F(7))`). End the first statement with `PERIOD.`:

```
I CALL UPON BUMP PEOPLE TELL ME PERIOD.
I CALL UPON BUMP PEOPLE TELL ME 7
```

`PERIOD.` is valid after any statement and mandatory after none.

## Errors

Errors are multi-sentence Trump rants (see
`packages/trumplang-core/src/runtime/errors.js`). Syntax errors are FATAL —
half-parsed programs do not run — and a modest function gets a dedicated
modesty rant.

## Input

`MANY PEOPLE ARE ASKING X!` reads one line from stdin into `X!`, coerced to the
variable's type: `HUGE` demands an integer, `BIGLY` a number, `SUPPORT` accepts
only `VERY TRUE` or `FAKE NEWS`, and `TWEET` input is SHOUTED like every other
string. Asking for a `WALL` or `DEAL` from a keyboard rants. In the browser
playground there is no terminal, and the language says so.

## Imports

```
I KNOW THE BEST PEOPLE FROM "MATH.MAGA"       (hire every function)
I ONLY WANT FIB FROM "MATH.MAGA"              (hire only the named ones)
```

- Paths resolve relative to the importing file.
- **Functions only** — we hire the people, we don't adopt their rallies. The
  module's top-level statements do not run, and its variables do not exist in
  the importer.
- Transitive hiring: functions a module imported are re-exported to you.
- A missing file is FAKE NEWS (pardonable); asking for a function the module
  doesn't have is VERY DISAPPOINTING (also pardonable); circular imports are
  COLLUSION and there will be NO COLLUSION.
- The browser playground has no filesystem — imports rant there.

### Tariffs

```
BIG BEAUTIFUL TARIFF 25
```

Enacts a tariff (in percent) on all imported functions for the rest of
execution. Every numeric value an imported function gives back is taxed at
the border: at 25%, a delivery of 16 arrives as 12. The enactment announces
that the exporting module is paying. It is not. Your number shrinks —
`FACT CHECK` the delivery and see who actually pays.

- Only numbers are taxed; `TWEET`s, `SUPPORT`, `WALL`s and `DEAL`s cross the
  border freely.
- Integer deliveries stay integers: customs rounds (9 taxed at 25% is 6.75,
  which arrives as 7). Floats are taxed exactly.
- Locally declared functions are domestic — they trade free. Re-declaring an
  imported function domesticates it.
- The `GIVING BACK` promise is checked on the real delivery, *then* customs
  takes its cut.
- Tariffs compound through supply chains: a recursive imported function pays
  at EVERY level of the call stack. Economists warned about this. Nobody
  listened.
- Re-enacting replaces the rate (we can always double it). A rate that isn't
  a positive number is a trade surrender and gets a rant (pardonable).

## Testing

Test files use the `.TEST.MAGA` extension and are ordinary programs that assert
with fact checks and announce success:

```
FACT CHECK COUNT! SO TRUE 5
EVERYONE IS TALKING ABOUT "PASSED BIGLY"
```

Run them from `packages/trumplang-core/`:

```
node src/cli/index.js EXTREME-VETTING test/MY.TEST.MAGA
node src/cli/index.js EXTREME-VETTING ALL
node src/cli/index.js EXTREME-VETTING DIRECTORY test/deal
```

A test passes when it prints `PASSED BIGLY` and no fact check is TOTALLY
RIGGED.
