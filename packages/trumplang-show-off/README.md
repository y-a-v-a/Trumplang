# trumplang-show-off

THE SHOW-OFF ROOM. Three programs nobody thought Trumplang could run, with their real output. Many people walked in and said "wow, I didn't know it could do that." True story!

Open [`index.html`](index.html) in a browser for the full tour: what each program does, why it's ambitious, the hard parts, source excerpts and the screenshots.

| Program | What it does | Runtime |
|---|---|---|
| [THE MAR-A-LAGO SET](programs/MAR_A_LAGO_SET.MAGA) | ASCII Mandelbrot renderer; the zoom finds a miniature copy of the set | ~3 s |
| [THE DEEP STATE MACHINE](programs/DEEP_STATE_MACHINE.MAGA) | Brainf*** interpreter running Hello World and a Sierpinski triangle | ~25 s |
| [ELECTION NIGHT](programs/ELECTION_NIGHT.MAGA) | Seeded 538-vote election where STOP THE COUNT is the algorithm; ends 269-269 | < 0.5 s |

## Layout

- `programs/` - symlinks to `packages/trumplang-core/examples`, so there is exactly one copy of each program
- `output/` - the raw output of each program, exactly as printed
- `screenshots/` - terminal-style screenshots of that output
- `scripts/shoot.mjs` - runs the programs and takes the screenshots
- `index.html` - the show-off page

## Regenerating the output and screenshots

Needs Node 18+ and Google Chrome (set `CHROME=/path/to/chrome` if it isn't found automatically).

```
cd packages/trumplang-show-off
npm run shoot                    # all three
npm run shoot -- ELECTION_NIGHT  # just the ones you name
```

Every run is deterministic, so a regenerated screenshot only changes when a program or the interpreter does. The output lies about numbers (that's the language). The screenshots never do.
