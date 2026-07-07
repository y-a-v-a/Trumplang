# OPEN_POINTS.md — UNFINISHED BUSINESS

The honest list. Everything else shipped (see git history for TASKS.md and
SUGGESTIONS.md — both fully implemented and retired); these six remain.

## 1. Imports are a facade — ☑ done (2026-07-07)

- [x] Paths resolve relative to the importing file (sourcePath threaded through
      CLI and test runner); missing file → `THIS FILE IS FAKE NEWS!`
- [x] Modules parsed via shared module_loader (same fatal Trump syntax errors),
      functions exposed to the importer; selective import exposes only the
      named ones and rants if a name isn't there
- [x] Semantics decided: FUNCTIONS ONLY — we hire the people, we don't adopt
      their rallies (module top-level statements never run). Transitive
      re-export: functions a module imported come along. Circular imports →
      `NO COLLUSION!` rant; module cache handles diamonds.
- [x] Tests: `test/IMPORTS.TEST.MAGA` (8 scenarios: selective, not-hired,
      full, rally-didn't-run, transitive, missing file, missing name, circular)
      · Examples: `examples/MATH.MAGA` + `examples/IMPORTS.MAGA`
- [x] Browser playground rants that imports need a real filesystem

## 2. Input is a placeholder — ☑ done (2026-07-07)

- [x] Synchronous stdin line read with a persistent buffer (several inputs can
      share one pipe); prompts only on a TTY so piped input stays clean
- [x] Type coercion by target: HUGE (integer, word salad rants), BIGLY (float),
      SUPPORT (`VERY TRUE`/`FAKE NEWS` only), TWEET (SHOUTED); WALL/DEAL
      targets rant ("you can't type a wall into a keyboard")
- [x] Playground/browser: rants that input needs a real command line
- [x] CLI-verified-only (examples/INPUT.MAGA + piped verification); not in the
      test suite, which must run with empty stdin in CI

## 3. VS Code extension is behind the language

The `packages/trumplang-vscode` submodule predates the 2026-07-07 sprint.
Missing highlighting/snippets for: `I ALONE CAN FIX IT` / `WITCH HUNT!` /
`IMPEACH`, `PERIOD.`, `GIVING BACK`, `NOTHING TO SEE HERE`, the superlatives
(`THE BEST` / `TREMENDOUS` / `LIKE NOBODY HAS EVER SEEN`), and
`IN TREMENDOUS STEPS OF`. Removed operators (bitwise/shift/compound) may still
be highlighted.

- [ ] Update the TextMate grammar + snippets inside the submodule repo
- [ ] Commit/push in the submodule, then bump the reference here
      (`git add packages/trumplang-vscode && git commit`)

## 4. Deploy the playground to GitHub Pages

The playground is a static build already (`npm run build -w trumplang-website`
→ `public/`); nobody should have to clone the repo to see the chaos.

- [ ] GitHub Actions workflow: build the bundle, upload `public/` as a Pages
      artifact, deploy
- [ ] Enable Pages (Settings → Pages → GitHub Actions source)
- [ ] Link the live playground from the root README — THE BEST DEMO, LIVE

## 5. License: MIT

`package.json` says ISC and no LICENSE file exists. Decision made: **MIT**.

- [ ] Add `LICENSE` (MIT, © 2026 Vincent Bruijn)
- [ ] Align the `license` field in every package.json (root, core, website)

## 6. CI: EXTREME-VETTING ALL on every push

40 tests and a playground smoke suite exist; nothing runs them automatically.
TOTAL HONOR SYSTEM. SAD!

- [ ] GitHub Actions workflow on push/PR: checkout (with submodules), npm
      install, `EXTREME-VETTING ALL` in trumplang-core, `npm run smoke` in
      trumplang-website
- [ ] Badge in the root README: VETTED BIGLY
