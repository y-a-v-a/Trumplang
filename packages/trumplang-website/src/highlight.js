// Syntax highlighting powered by the REAL Trumplang lexer. No regex
// approximations, no drift: if the grammar gains a keyword, the website
// highlights it the same day. THE BEST LEXER, TOKENIZING BIGLY.
import antlr4 from 'antlr4';
import TrumplangLexer from '../../trumplang-core/src/parser/TrumplangLexer.js';

// Token symbolic name -> CSS class. Anything not listed is rendered plain.
const CATEGORY = {
  PROG_START: 'tl-prog',
  PROG_END: 'tl-prog',
  OPEN_BLOCK: 'tl-block',
  CLOSE_BLOCK: 'tl-block',
  PERIOD: 'tl-block',

  VARIABLE_DECL: 'tl-decl',
  CONSTANT_DECL: 'tl-decl',
  ASSIGNMENT: 'tl-decl',
  MAKE_DECL: 'tl-decl',
  INCREMENT_OP: 'tl-decl',
  DECREMENT_OP: 'tl-decl',
  ARRAY_DECL: 'tl-decl',
  ARRAY_ELEMENTS_DECL: 'tl-decl',
  ARRAY_ACCESS: 'tl-decl',
  ARRAY_CHAIN: 'tl-decl',
  DEAL_ACCESS_KEYWORD: 'tl-decl',

  INTEGER_TYPE: 'tl-type',
  FLOAT_TYPE: 'tl-type',
  BOOLEAN_TYPE: 'tl-type',
  STRING_TYPE: 'tl-type',
  ARRAY_TYPE: 'tl-type',
  STRUCTUR_TYPE: 'tl-type',

  FUNCTION_DECL: 'tl-func',
  SUPERLATIVE: 'tl-praise',
  PARAMS_ARGS_START: 'tl-func',
  PARAMS_ARGS_CHAIN: 'tl-func',
  RETURN: 'tl-func',
  RETURN_TYPE_DECL: 'tl-func',
  FUNC_CALL: 'tl-func',
  CONCEPT_PLAN: 'tl-func',
  FIRE: 'tl-gov',

  IF_DECL: 'tl-flow',
  ELSE_IF_DECL: 'tl-flow',
  ELSE_DECL: 'tl-flow',
  WHILE_LOOP_DECL: 'tl-flow',
  FOR_LOOP_DECL: 'tl-flow',
  FOR_LOOP_WITH: 'tl-flow',
  FROM_KEYWORD: 'tl-flow',
  FOR_LOOP_TO: 'tl-flow',
  FOR_LOOP_STEP: 'tl-flow',
  FOR_EACH_LOOP_DECL: 'tl-flow',
  FOR_EACH_FROM: 'tl-flow',
  BREAK: 'tl-flow',
  STOP_COUNT: 'tl-gov',
  WEAVE: 'tl-gov',
  TWO_WEEKS: 'tl-gov',

  TRY_DECL: 'tl-gov',
  CATCH_DECL: 'tl-gov',
  IMPEACH: 'tl-gov',
  HUSH_MONEY: 'tl-gov',
  EXEC_ORDER: 'tl-gov',
  SUPREME_COURT: 'tl-gov',
  TARIFF_DECL: 'tl-gov',
  CHAPTER_ELEVEN: 'tl-gov',
  ASSERT_CALL: 'tl-fact',

  PRINT: 'tl-io',
  INPUT: 'tl-io',
  IMPORT: 'tl-io',
  SELECTIVE_IMPORT_DECL: 'tl-io',

  EQUALS: 'tl-op',
  NOT_EQUALS: 'tl-op',
  GREATER_THAN: 'tl-op',
  GREATER_THAN_OR_EQUALS: 'tl-op',
  LESS_THAN: 'tl-op',
  LESS_THAN_OR_EQUALS: 'tl-op',
  NOT: 'tl-op',
  AND: 'tl-op',
  OR: 'tl-op',
  PLUS: 'tl-op',
  MINUS: 'tl-op',
  STRING_CONCAT: 'tl-op',
  MULTIPLY: 'tl-op',
  DIVIDE: 'tl-op',
  MODULO: 'tl-op',
  POWER: 'tl-op',

  VARIABLE: 'tl-var',
  IDENTIFIER: 'tl-ident',
  STRING: 'tl-str',
  FILEPATH: 'tl-str',
  NUMBER: 'tl-num',
  BOOLEAN: 'tl-bool',
  TRUE: 'tl-bool',
  FALSE: 'tl-bool',
  NOTHING: 'tl-bool',
  COMMENT: 'tl-comment',
};

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * Tokenize with the real lexer and wrap every token in a span. Whitespace and
 * anything the lexer can't place come through untouched, so the output has
 * EXACTLY the same characters as the input (the playground overlays it on a
 * textarea, so this matters bigly).
 */
export function highlight(source) {
  const lexer = new TrumplangLexer(new antlr4.InputStream(source));
  lexer.removeErrorListeners();
  let tokens;
  try {
    tokens = lexer.getAllTokens();
  } catch {
    return escapeHtml(source);
  }
  let html = '';
  let cursor = 0;
  for (const token of tokens) {
    if (token.type === antlr4.Token.EOF) break;
    const start = token.start;
    const stop = token.stop + 1;
    if (start > cursor) html += escapeHtml(source.slice(cursor, start));
    const text = source.slice(start, stop);
    const cls = CATEGORY[TrumplangLexer.symbolicNames[token.type]];
    html += cls ? `<span class="${cls}">${escapeHtml(text)}</span>` : escapeHtml(text);
    cursor = stop;
  }
  if (cursor < source.length) html += escapeHtml(source.slice(cursor));
  return html;
}

/** Every keyword the grammar knows, straight from the generated lexer. */
export function keywordList() {
  const out = [];
  TrumplangLexer.literalNames.forEach((lit, i) => {
    if (!lit) return;
    const sym = TrumplangLexer.symbolicNames[i];
    out.push({ symbol: sym, keyword: lit.slice(1, -1).replace(/\\'/g, "'") });
  });
  // SUPERLATIVE is an alternation, so it has no single literal; add by hand.
  out.push({ symbol: 'SUPERLATIVE', keyword: 'THE BEST' });
  out.push({ symbol: 'SUPERLATIVE', keyword: 'TREMENDOUS' });
  out.push({ symbol: 'SUPERLATIVE', keyword: 'LIKE NOBODY HAS EVER SEEN' });
  out.push({ symbol: 'COMMENT', keyword: 'A LOT OF PEOPLE ARE SAYING' });
  return out;
}

/** Upgrade every <pre class="maga"><code> block on the page in place. */
export function highlightAll(root = document) {
  for (const code of root.querySelectorAll('pre.maga > code')) {
    if (code.dataset.highlighted) continue;
    code.innerHTML = highlight(code.textContent);
    code.dataset.highlighted = 'true';
  }
}
