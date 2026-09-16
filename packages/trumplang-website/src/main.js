// Trumplang web playground - runs the REAL ANTLR4-based interpreter in the
// browser. The output lies by 10%, the logic doesn't. That's the language,
// not a bug in this playground.
import { TrumplangInterpreter } from '../../trumplang-core/src/interpreter/index.js';
import { highlight, highlightAll, keywordList } from './highlight.js';
import { EXAMPLES, EXAMPLE_GROUPS, ALL_EXAMPLES } from './examples.js';

export { EXAMPLES, EXAMPLE_GROUPS, ALL_EXAMPLES, highlight, highlightAll, keywordList };

export async function runTrumplang(source) {
  const captured = [];
  const origLog = console.log;
  const origErr = console.error;
  console.log = (...args) => captured.push(args.join(' '));
  console.error = () => {}; // the interpreter re-throws; we surface the error ourselves
  try {
    const interpreter = new TrumplangInterpreter();
    const result = interpreter.interpret(source);
    if (result) captured.push(String(result));
    return { ok: true, output: captured.join('\n') };
  } catch (error) {
    return {
      ok: false,
      output: captured.join('\n'),
      error: String(error && error.message ? error.message : error),
    };
  } finally {
    console.log = origLog;
    console.error = origErr;
  }
}

// ---------------------------------------------------------------------------
// Permalinks: #code=<base64url of the source>. Share your best work.
const encodeCode = (src) =>
  btoa(unescape(encodeURIComponent(src))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const decodeCode = (b64) => {
  const s = b64.replace(/-/g, '+').replace(/_/g, '/');
  return decodeURIComponent(escape(atob(s + '='.repeat((4 - (s.length % 4)) % 4))));
};

function codeFromHash() {
  const m = /[#&]code=([A-Za-z0-9_-]+)/.exec(location.hash);
  if (!m) return null;
  try {
    return decodeCode(m[1]);
  } catch {
    return null;
  }
}

/**
 * Wire a playground into the page. Expects (by id, all optional except editor
 * and output): #editor (textarea), #editor-highlight (pre > code overlay),
 * #output, #run, #examples (select), #share, #status.
 */
export function mountPlayground(opts = {}) {
  const $ = (id) => document.getElementById(id);
  const editor = $(opts.editor || 'editor');
  const output = $(opts.output || 'output');
  if (!editor || !output) return null;
  const overlay = $(opts.overlay || 'editor-highlight');
  const runButton = $(opts.run || 'run');
  const exampleSelect = $(opts.examples || 'examples');
  const shareButton = $(opts.share || 'share');
  const status = $(opts.status || 'status');
  const initial = opts.initial || null;

  const setStatus = (text, kind = '') => {
    if (!status) return;
    status.textContent = text;
    status.className = 'playground-status ' + kind;
  };

  const paint = () => {
    if (!overlay) return;
    // Trailing newline keeps the overlay's height in sync with the textarea.
    overlay.innerHTML = highlight(editor.value) + '\n';
  };
  const syncScroll = () => {
    if (!overlay) return;
    overlay.parentElement.scrollTop = editor.scrollTop;
    overlay.parentElement.scrollLeft = editor.scrollLeft;
  };

  // Examples dropdown, grouped.
  if (exampleSelect) {
    for (const group of EXAMPLE_GROUPS) {
      const optgroup = document.createElement('optgroup');
      optgroup.label = group.group;
      for (const ex of group.examples) {
        const option = document.createElement('option');
        option.value = ex.name;
        option.textContent = ex.name;
        optgroup.appendChild(option);
      }
      exampleSelect.appendChild(optgroup);
    }
    exampleSelect.addEventListener('change', () => loadExample(exampleSelect.value));
  }

  const showIdle = () => {
    output.textContent = 'PRESS "MAKE IT RUN" (OR CTRL/CMD + ENTER) TO SEE TREMENDOUS RESULTS.';
    output.className = 'output idle';
    setStatus('READY. THE MOST READY.');
  };

  const setCode = (code) => {
    editor.value = code;
    paint();
    editor.scrollTop = 0;
    syncScroll();
  };

  const loadExample = (name) => {
    if (!EXAMPLES[name]) return;
    setCode(EXAMPLES[name]);
    showIdle();
    if (exampleSelect) exampleSelect.value = name;
  };

  const run = async () => {
    output.textContent = 'RUNNING. THE BEST EXECUTION. HOLD ON...';
    output.className = 'output';
    setStatus('RUNNING...');
    const started = performance.now();
    const result = await runTrumplang(editor.value);
    const ms = Math.max(1, Math.round(performance.now() - started));
    if (result.ok) {
      output.textContent = result.output || '(NO OUTPUT. VERY QUIET PROGRAM. SUSPICIOUS!)';
      output.className = 'output ok';
      setStatus(`TREMENDOUS SUCCESS IN ${ms}MS. NOBODY RUNS FASTER.`, 'ok');
    } else {
      output.textContent =
        (result.output ? result.output + '\n\n' : '') +
        'THIS CODE IS A DISASTER! VERY SAD CODE!\n' +
        result.error;
      output.className = 'output sad';
      setStatus('SAD! THE PROGRAM DID NOT SURVIVE. SEE THE RANT.', 'sad');
    }
  };

  if (runButton) runButton.addEventListener('click', run);
  editor.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      run();
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const { selectionStart: s, selectionEnd: t } = editor;
      editor.value = editor.value.slice(0, s) + '  ' + editor.value.slice(t);
      editor.selectionStart = editor.selectionEnd = s + 2;
      paint();
    }
  });
  editor.addEventListener('input', paint);
  editor.addEventListener('scroll', syncScroll);

  if (shareButton) {
    shareButton.addEventListener('click', async () => {
      const url = `${location.origin}${location.pathname}#code=${encodeCode(editor.value)}`;
      history.replaceState(null, '', `#code=${encodeCode(editor.value)}`);
      try {
        await navigator.clipboard.writeText(url);
        setStatus('LINK COPIED. SHARE IT WITH EVERYONE. EVERYONE IS TALKING ABOUT IT.', 'ok');
      } catch {
        setStatus('LINK IS IN THE ADDRESS BAR. COPY IT YOURSELF, IT IS VERY EASY.', 'ok');
      }
    });
  }

  // Initial content: permalink > requested example > first example.
  const shared = codeFromHash();
  if (shared) {
    setCode(shared);
    if (exampleSelect) exampleSelect.value = '';
    showIdle();
    setStatus('LOADED A SHARED PROGRAM. SOMEBODY IS VERY PROUD OF THIS.');
  } else if (initial && EXAMPLES[initial]) {
    loadExample(initial);
  } else {
    loadExample(ALL_EXAMPLES[0].name);
  }

  return { run, loadExample, setCode };
}

// UI wiring - only in the browser (the smoke test imports this module in Node)
if (typeof document !== 'undefined') {
  const boot = () => {
    highlightAll();
    const kc = document.querySelector('[data-keyword-count]');
    if (kc) kc.textContent = String(keywordList().length);
    const mount = document.querySelector('[data-playground]');
    const pg = mountPlayground({ initial: mount ? mount.dataset.playground : null });
    // "RUN IT" buttons on the governance cards load the matching example.
    for (const button of document.querySelectorAll('[data-load-example]')) {
      button.addEventListener('click', () => {
        if (!pg) return;
        pg.loadExample(button.dataset.loadExample);
        mount.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => pg.run(), 400);
      });
    }
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
}
