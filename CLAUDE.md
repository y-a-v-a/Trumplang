# CLAUDE.md - Trumplang

Trumplang is a programming language based on Donald Trump's speech patterns. Files use the `.MAGA` extension (`.TEST.MAGA` for tests).

## Monorepo Layout

- `packages/trumplang-core/` — language implementation and ANTLR4-based interpreter
- `packages/trumplang-vscode/` — VS Code extension (Git submodule)
- `packages/trumplang-website/` — (future) web playground

## Tone

All keywords/variables are UPPERCASE. Documentation, comments, and error messages mimic Trump's voice with superlatives ("THE BEST", "HUGE", "TREMENDOUS") and exclamations. Errors end with "!" or "SAD!". Maintain this tone for any new feature.

## Commands

Run from `packages/trumplang-core/`:

- Run a program: `npm start [file.MAGA]` (or `node src/cli/index.js [file.MAGA]`)
- Run tests: `EXTREME-VETTING [file.TEST.MAGA]` | `EXTREME-VETTING ALL` | `EXTREME-VETTING DIRECTORY [dir]`
- Generate parser: `npm run generate-parser` · Build: `npm run build`
- Debug: `node src/debug-tokenizer.js|debug-parser.js|debug-tree.js [file]`

Legacy regex interpreter (superseded): `node src/simplified-interpreter.js [file.MAGA]`.

## Syntax Reference

**Program/blocks/comments**
- Program: `THE TIME FOR EMPTY TALK IS OVER!!!` … `MAKE AMERICA GREAT AGAIN`
- Block: `BELIEVE ME` … `I TOLD YOU SO` · Comment: `A LOT OF PEOPLE ARE SAYING`
- Print: `EVERYONE IS TALKING ABOUT`

**Variables/types** (vars end with `!`, e.g. `COUNT!`)
- Declare: `I HAVE THE BEST HUGE COUNT! ABSOLUTELY 0` · Assign: `COUNT! ABSOLUTELY 0`
- Constant: `I HAVE A VERY GOOD BRAIN FOR` instead of `I HAVE THE BEST`
- Types: `HUGE` int (0) · `BIGLY` float (0.0) · `SUPPORT` bool (`FAKE NEWS`) · `TWEET` string ("") · `WALL` array ([]) · `DEAL` object ({})

**Operations**
- Inc/dec: `MAKE COUNT! GREATER` / `SMALLER`
- Add (num) `WINNING` · Sub `LOSING` · Concat (str) `ENDORSING` · Mul `BIG LEAGUE TIMES` · Div `SAD` · Mod `LEFTOVER FROM` · Pow `HUGELY MULTIPLIED BY`

**Trumpian runtime behavior**
- Number inflation: numeric output via `EVERYONE IS TALKING ABOUT` is inflated by 10%; `FACT CHECK` uses real values (the output lies, the logic doesn't)
- Fire a function: `YOU'RE FIRED NAME` (permanently deletes it; re-declarable; calling it afterwards rants)
- Remap an operator: `EXECUTIVE ORDER WINNING ABSOLUTELY LOSING` (+ behaves as -) · Challenge: `SUPREME COURT OVERRULES WINNING` (50% chance it works)
- Orders apply to `WINNING`, `LOSING`, `BIG LEAGUE TIMES`, `SAD`; `ENDORSING` and `LEFTOVER FROM` are immune

**Control flow**
- If: `LISTEN cond BELIEVE ME … I TOLD YOU SO` · Else-if: `PEOPLE ARE SAYING cond …` · Else: `NOBODY KNEW …`
- While: `WE'RE GOING TO WIN IN A LANDSLIDE cond …` · For: `WE'RE GOING TO WIN, WIN, WIN WITH I! FROM 0 TO 10 …`
- Foreach: `BILLIONS AND BILLIONS ITEM! YET ARRAY! …` · Break: `I WILL VETO!`

**Functions/imports**
- Declare: `INCREDIBLE NAME PEOPLE TELL ME PARAMS BELIEVE ME … I TOLD YOU SO`
- Call: `I CALL UPON NAME PEOPLE TELL ME ARGS` · Return: `AND I MEAN THAT expr`
- Import: `I KNOW THE BEST PEOPLE FROM "MATH.MAGA"` · Selective: `I ONLY WANT NAME FROM "MATH.MAGA"`

**Arrays / Deals**
- Array: `BUILD THE WALL NUMBERS! AND MEXICO WILL PAY FOR IT 1 PREVAILS 2 PREVAILS 3` (omit elements for empty)
- Access: `ARRAY! SECTION 1` (0-indexed, bounds-checked)
- Deal: `(HUGE AGE! ABSOLUTELY 42 & TWEET NAME! ABSOLUTELY "DONALD")!!` (typed fields, `&`-separated, `!!` terminator)
- Field access: `PERSON! FOLLOW NAME!` · Nested deals: use separate deal vars and reference them

**Testing**
- Assert: `FACT CHECK [actual] SO TRUE [expected]` → returns `PASSED BIGLY` or `TOTALLY RIGGED`

## Core Package Structure

- `src/interpreter/` — interpreter (`index.js`, `visitor.js`, `environment_utils.js`)
- `src/parser/` — generated ANTLR4 parser · `src/cli/` — CLI · `src/runtime/` — `environment.js`, `errors.js`
- `grammar/Trumplang.g4` — grammar · `examples/` — example programs · `test/` — tests

## Implementation Notes

- ES Modules throughout (`import`/`export`, `import.meta.url` for paths); visitor uses ES6 classes.
- Grammar uses ANTLR4 labels; in the visitor access labeled elements via `.text` (not `.getText()`).
- Error messages are multi-sentence Trump rants (see `src/runtime/errors.js`). Examples: undefined var → "NOBODY — AND I MEAN NOBODY — HAS EVER HEARD OF [var]…"; div-by-zero → "…THAT'S THE WORST DEAL IN THE HISTORY OF DEALS, MAYBE EVER…"; array OOB → "YOU'RE TRYING TO CLIMB OVER THE WALL!…"; non-deal access → "THAT'S NOT A DEAL!…".

## Submodule (trumplang-vscode)

Edit/commit/push inside `packages/trumplang-vscode/`, then update the reference from root: `git add packages/trumplang-vscode && git commit`. Clone with `--recursive` or run `git submodule update --init --recursive`.
