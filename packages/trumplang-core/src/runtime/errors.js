/**
 * Custom error classes and Trump-style error messages for Trumplang
 * 
 * These are the BEST error messages. Everyone says so. Believe me!
 */

class TrumplangError extends Error {
  constructor(message) {
    super(message);
    this.name = 'TrumplangError';
  }
}

class VariableError extends TrumplangError {
  constructor(message, variableName) {
    const trumpStyle = trumpifyErrorMessage(message, {
      variableName: variableName
    });
    super(trumpStyle);
    this.name = 'VariableError';
    this.variableName = variableName;
  }
}

class SyntaxError extends TrumplangError {
  constructor(message, token) {
    const trumpStyle = trumpifyErrorMessage(message, {
      token: token
    });
    super(trumpStyle);
    this.name = 'SyntaxError';
    this.token = token;
  }
}

class RuntimeError extends TrumplangError {
  constructor(message, location) {
    const trumpStyle = trumpifyErrorMessage(message, {
      location: location
    });
    super(trumpStyle);
    this.name = 'RuntimeError';
    this.location = location;
  }
}

/**
 * A failed FACT CHECK. You cannot pardon a fact check — that's the whole
 * point of fact checks. PARDON blocks re-throw these untouched.
 */
class AssertionError extends TrumplangError {
  constructor(message) {
    super(message);
    this.name = 'AssertionError';
  }
}

/**
 * IMPEACH — a user-thrown error. Carries the impeached value so a
 * WITCH HUNT! clause can bind it. A perfect phone call, and they
 * impeach anyway.
 */
class ImpeachmentError extends TrumplangError {
  constructor(value) {
    super(`IMPEACHED: ${value}. A PERFECT CALL — MAYBE THE MOST PERFECT CALL EVER — AND THEY IMPEACH ANYWAY. TOTAL WITCH HUNT!`);
    this.name = 'ImpeachmentError';
    this.value = value;
  }
}

/**
 * Loop-control signal for I WILL VETO! — not an error, not pardonable,
 * just a very executive way to leave a loop.
 */
class BreakSignal extends Error {
  constructor() {
    super('BREAK');
    this.name = 'BreakSignal';
  }
}

/**
 * The BEST error message dictionary. Many people are saying these are
 * the most tremendous error messages ever written. And they're right!
 */
const errorMessages = {
  undefinedVariable: (name) => [
    `NOBODY — AND I MEAN NOBODY — HAS EVER HEARD OF ${name || 'THIS'}.`,
    `I ASKED AROUND. I ASKED THE BEST PEOPLE.`,
    `THEY SAID "SIR, THAT VARIABLE DOESN'T EXIST."`,
    `YOU NEED TO DECLARE IT FIRST. VERY EMBARRASSING FOR YOU!`
  ].join(' '),

  divisionByZero: () => [
    `YOU'RE TRYING TO DIVIDE BY ZERO.`,
    `THAT'S THE WORST DEAL IN THE HISTORY OF DEALS, MAYBE EVER.`,
    `EVEN SLEEPY JOE WOULDN'T TRY THIS. TOTAL DISASTER!`
  ].join(' '),

  typeMismatch: (expected, got) => [
    `I WAS PROMISED A BEAUTIFUL ${expected || 'VALUE'}.`,
    `INSTEAD I GOT ${got || 'GARBAGE'}. WHAT A DISGRACE.`,
    `THIS IS WORSE THAN THE IRAN DEAL. AND THAT'S SAYING SOMETHING!`
  ].join(' '),

  arrayOutOfBounds: (index, length) => [
    `INDEX ${index}?! THE WALL IS ONLY ${length} SECTIONS LONG!`,
    `YOU'RE TRYING TO GO AROUND THE WALL.`,
    `WE'RE BUILDING IT HIGHER. BUT YOU STILL CAN'T DO THAT!`
  ].join(' '),

  functionNotFound: (name) => [
    `I CALL UPON ${name || 'SOMEONE'} AND NOBODY SHOWS UP.`,
    `VERY DISLOYAL. WHEN I NEEDED THEM, THEY WEREN'T THERE.`,
    `PROBABLY A NEVER-TRUMPER. SAD!`
  ].join(' '),

  firedFunction: (name) => [
    `${name || 'THAT FUNCTION'} WAS FIRED. THEY WERE TERRIBLE AT THEIR JOB.`,
    `EVERYONE SAID SO. NOT JUST ME. EVERYONE.`,
    `THEY SHOULD HAVE BEEN FIRED SOONER. MUCH SOONER!`
  ].join(' '),

  syntaxError: (token) => [
    `WHAT IS THIS? "${token || '???'}"?`,
    `I'VE READ THE BEST CODE. THE BEST.`,
    `AND THIS IS THE WORST CODE I'VE EVER SEEN.`,
    `MY PEOPLE ARE LOOKING INTO IT AND THEY CAN'T BELIEVE IT EITHER!`
  ].join(' '),

  stackOverflow: () => [
    `TOO MANY FUNCTIONS CALLING FUNCTIONS CALLING FUNCTIONS.`,
    `IT'S LIKE THE DEEP STATE IN THERE.`,
    `WE NEED TO DRAIN THE STACK!`
  ].join(' '),

  invalidSyntax: () => [
    `THIS DOESN'T MAKE SENSE. I'VE SEEN A LOT OF CODE — THE BEST CODE, THE WORST CODE —`,
    `AND THIS IS THE WORST. MY PEOPLE ARE LOOKING INTO IT.`,
    `THEY CAN'T BELIEVE IT EITHER!`
  ].join(' '),

  missingFile: (filename) => [
    `"${filename || 'THIS FILE'}" DOESN'T EXIST!`,
    `I SENT MY BEST PEOPLE TO LOOK FOR IT.`,
    `THEY SEARCHED EVERYWHERE. IT'S GONE. PROBABLY DELETED BY THE DEEP STATE!`
  ].join(' '),

  notADeal: (name) => [
    `${name || 'THAT'} IS NOT A DEAL!`,
    `NOBODY MAKES DEALS LIKE ME, AND I'M TELLING YOU — THAT'S NOT A DEAL!`,
    `BELIEVE ME!`
  ].join(' '),

  badDealField: (fieldName) => [
    `THERE'S NO "${fieldName || '???'}" IN THIS DEAL!`,
    `I'VE READ EVERY DEAL — THE BEST DEALS, THE WORST DEALS —`,
    `AND THIS TERM ISN'T IN ANY OF THEM. FAKE FIELD!`
  ].join(' '),

  default: () => [
    `THIS CODE IS A DISASTER! VERY SAD CODE!`,
    `MAYBE THE WORST CODE EVER WRITTEN.`,
    `AND I'VE SEEN A LOT OF CODE, BELIEVE ME!`
  ].join(' ')
};

/**
 * Convert standard error messages to Trump-style messages
 */
function trumpifyErrorMessage(message, options = {}) {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes('undefined variable') || lowerMessage.includes('not defined')) {
    return errorMessages.undefinedVariable(options.variableName);
  }
  if (lowerMessage.includes('division by zero') || lowerMessage.includes('divide by zero')) {
    return errorMessages.divisionByZero();
  }
  if (lowerMessage.includes('array index') || lowerMessage.includes('out of bounds')) {
    return errorMessages.arrayOutOfBounds(options.index, options.length);
  }
  if (lowerMessage.includes('type error') || lowerMessage.includes('type mismatch')) {
    return errorMessages.typeMismatch(options.expected, options.got);
  }
  if (lowerMessage.includes('invalid syntax') || lowerMessage.includes('syntax error')) {
    return errorMessages.syntaxError(options.token);
  }
  if (lowerMessage.includes('stack overflow')) {
    return errorMessages.stackOverflow();
  }

  // Default: add Trump flair to original message
  return `${errorMessages.default()} ${message}`;
}

export {
  TrumplangError,
  VariableError,
  SyntaxError,
  RuntimeError,
  AssertionError,
  ImpeachmentError,
  BreakSignal,
  errorMessages,
  trumpifyErrorMessage
};
