# OPEN_POINTS.md — UNFINISHED BUSINESS

The honest list — now fully dishonest, because everything on it shipped
(2026-07-07). Kept as the record of the last six gaps; see git history for
TASKS.md and SUGGESTIONS.md, its retired predecessors.

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

## 3. VS Code extension is behind the language — ☑ done (2026-07-07)

- [x] TextMate grammar updated in the submodule: PARDON keywords
      (`I ALONE CAN FIX IT` / `WITCH HUNT!` / `IMPEACH`), `PERIOD.`,
      `GIVING BACK`, `NOTHING TO SEE HERE`, the superlatives, and
      `IN TREMENDOUS STEPS OF`. (No dead operators were present; the
      extension ships no snippets file.)
- [x] Committed and pushed in the submodule (rebased onto its newer
      origin/main), reference bumped here

## 4. Deploy the playground to GitHub Pages — ☑ done (2026-07-07)

- [x] `deploy-playground.yml` builds the bundle and deploys `public/` via
      Pages artifacts on every push to main
- [x] Pages enabled via API (`build_type: workflow`) —
      https://y-a-v-a.github.io/Trumplang/
- [x] Root README links the live playground

## 5. License: MIT — ☑ done (2026-07-07)

- [x] `LICENSE` added (MIT, © 2026 Vincent Bruijn)
- [x] `license: MIT` in root, core, and website package.json

## 6. CI: EXTREME-VETTING ALL on every push — ☑ done (2026-07-07)

- [x] `extreme-vetting.yml` on push/PR: core test suite + playground
      build+smoke (checkout skips the SSH-URL submodule — not needed for tests)
- [x] VETTED BIGLY badge in the root README
