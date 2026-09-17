# Trumplang Website & Playground

THE MOST BEAUTIFUL WEBSITE, gold and white like the lobby, with a playground
that runs the REAL ANTLR4-based Trumplang interpreter right in your browser.
No server-side execution. I ALONE CAN FIX IT, CLIENT-SIDE.

Live: **[y-a-v-a.github.io/Trumplang](https://y-a-v-a.github.io/Trumplang/)**

## Running locally

```bash
npm install
npm start          # builds the playground bundle and serves public/ on :3000
```

Or step by step:

```bash
npm run build      # esbuild bundles src/main.js -> public/playground.js
npm run smoke      # EXTREME VETTING: vets the bundle, every example, every homepage snippet
```

## How it works

- `src/main.js` imports `TrumplangInterpreter` straight from
  `packages/trumplang-core` — the playground always speaks the current grammar.
- `src/highlight.js` tokenizes with the REAL generated lexer
  (`TrumplangLexer`), so syntax highlighting can never drift from the grammar:
  a new keyword in `Trumplang.g4` is highlighted the day the parser is
  regenerated. The keyword count in the hero comes from the lexer too.
- `src/examples.js` is the playground tour, grouped THE BASICS / THE EXECUTIVE
  BRANCH / THE CAMPAIGN TRAIL. Every example is run by the smoke test; the two
  that are supposed to fail (the modest function, the rigged fact check) are
  checked for their rant.
- esbuild bundles it for the browser (`--keep-names` is REQUIRED: the visitor
  dispatches on `ctx.constructor.name`, and bundler renaming would break it —
  believe me, we checked).
- Node built-ins (`fs`, `path`) are stubbed; the browser never imports files.
- `public/playground.js` is a build artifact and is gitignored — rebuild it.
- The same bundle powers `index.html` (embedded playground, highlighted
  snippets, RUN IT buttons) and `playground.html` (full page).

## The homepage never lies about syntax

Every `<pre class="maga">` snippet on `index.html` is extracted by
`test/smoke.mjs` and run through the interpreter:

- `data-vet="program"` — a complete program, run as-is
- `data-vet="fragment"` — wrapped in program start/end, then run
- `data-vet="fails:TEXT"` — must fail, and the rant must contain TEXT
- `data-vet="skip"` — needs a filesystem (imports); shown, not run

The keyword table is checked against every literal the lexer knows. If the
grammar changes and the site doesn't, CI is TOTALLY RIGGED and says so.

## Deploying to Vercel

`vercel.json` in this directory makes the package deployable on its own.
Because the bundle imports the interpreter from `../../trumplang-core`, the
install runs at the monorepo root and the build runs here.

1. Import the repository in Vercel and set **Root Directory** to
   `packages/trumplang-website` (Framework Preset: Other).
2. Make sure **Include source files outside of the Root Directory in the
   Build Step** is enabled in the project's Git settings (it is the default
   for new projects; `../../trumplang-core` must be visible to the build).
3. Deploy. `vercel.json` supplies the rest:
   - `installCommand`: `cd ../.. && npm install` (workspace install at the root)
   - `buildCommand`: `npm run build` (esbuild -> `public/playground.js`)
   - `outputDirectory`: `public`
   - `ignoreCommand`: skips the build when neither this package nor
     `trumplang-core` changed in the pushed commit
   - `cleanUrls`: `/playground` serves `playground.html` (the `.html` links
     keep working too, so GitHub Pages is unaffected)

GitHub Pages deployment (`.github/workflows/deploy-playground.yml`) is
unchanged; both can run side by side.

## Playground features

- Syntax highlighting overlay in the editor (real lexer, see above)
- Ctrl/Cmd + Enter runs, Tab indents
- COPY LINK puts the program in the URL hash (`#code=...`) for sharing
- Grouped examples, and the governance cards on the homepage load their
  example into the embedded playground and run it
