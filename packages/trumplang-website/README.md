# Trumplang Website & Playground

THE MOST BEAUTIFUL WEBSITE, with a playground that runs the REAL ANTLR4-based
Trumplang interpreter right in your browser. No server-side execution. I ALONE
CAN FIX IT, CLIENT-SIDE.

## Running locally

```bash
npm install
npm start          # builds the playground bundle and serves public/ on :3000
```

Or step by step:

```bash
npm run build      # esbuild bundles src/main.js -> public/playground.js
npm run smoke      # EXTREME VETTING: runs real programs against the built bundle
```

## How it works

- `src/main.js` imports `TrumplangInterpreter` straight from
  `packages/trumplang-core` — the playground always speaks the current grammar.
- esbuild bundles it for the browser (`--keep-names` is REQUIRED: the visitor
  dispatches on `ctx.constructor.name`, and bundler renaming would break it —
  believe me, we checked).
- Node built-ins (`fs`, `path`) are stubbed; the browser never imports files.
- `public/playground.js` is a build artifact and is gitignored — rebuild it.

## The examples

The dropdown demos the language's identity: number inflation (the output lies,
the logic doesn't), EXECUTIVE ORDER operator gaslighting with the SUPREME COURT
coin flip, PARDON/WITCH HUNT! exception handling, nested DEALs, TREMENDOUS
STEPS, and one deliberately modest function that the parser rejects. SAD!
