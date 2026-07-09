# CLAUDE.md - Trumplang

Programming language based on Donald Trump's speech patterns. Files use `.MAGA` (`.TEST.MAGA` for tests). Full syntax/semantics reference: `docs/LANGUAGE.md`.

## Layout

- `packages/trumplang-core/` — ANTLR4-based interpreter. `src/interpreter/` (visitor), `src/parser/` (generated), `src/runtime/` (environment, errors), `src/cli/`, `grammar/Trumplang.g4`, `examples/`, `test/`
- `packages/trumplang-vscode/` — VS Code extension (git submodule: commit/push inside it, then `git add packages/trumplang-vscode` from root)
- `packages/trumplang-website/` — playground, deployed to GitHub Pages on push to main

## Commands

From `packages/trumplang-core/`:

- Run: `npm start [file.MAGA]`
- Test: `EXTREME-VETTING [file.TEST.MAGA] | ALL | DIRECTORY [dir]`
- Parser: `npm run generate-parser` · Build: `npm run build`
- Debug: `node src/debug-tokenizer.js|debug-parser.js|debug-tree.js [file]`

Website (`packages/trumplang-website/`): `npm run build` · `npm run smoke`

## Rules

- Tone is mandatory: keywords/variables UPPERCASE; docs, comments, and error messages in Trump voice with superlatives, ending "!" or "SAD!". Errors are multi-sentence rants (see `src/runtime/errors.js`).
- The output lies, the logic doesn't: printed numbers are inflated 10%, growing 1% per retelling (110, 111, 112, ...); `FACT CHECK` sees real values.
- ES Modules throughout. Grammar uses ANTLR4 labels — access labeled elements via `.text`, not `.getText()`.
