/**
 * Custom error classes for Trumplang
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
 * Convert standard error messages to Trump-style messages
 */
function trumpifyErrorMessage(message, options = {}) {
  // Dictionary of standard error types to Trump phrases
  const trumpPhrases = {
    'undefined variable': `NOBODY KNOWS WHAT ${options.variableName || 'THIS'} IS. YOU NEED TO DECLARE IT FIRST, BELIEVE ME!`,
    'invalid syntax': 'THIS DOESN\'T MAKE SENSE, EVEN BY MY STANDARDS!',
    'division by zero': 'THAT\'S A DISASTER. YOU CAN\'T DIVIDE BY ZERO, THAT\'S FOR LOSERS!',
    'array index out of bounds': 'YOU\'RE TRYING TO CLIMB OVER THE WALL! STAY WITHIN THE BOUNDARIES!',
    'type error': 'WRONG TYPE! SAD!',
    'stack overflow': 'YOU\'RE CALLING TOO MANY FUNCTIONS. BELIEVE ME, IT\'S TOO MANY!',
    'default': 'THIS CODE IS A DISASTER! VERY SAD CODE!'
  };
  
  // Check if the message contains any of our keywords
  for (const [key, phrase] of Object.entries(trumpPhrases)) {
    if (message.toLowerCase().includes(key.toLowerCase())) {
      return phrase;
    }
  }
  
  // If no match, just add some Trump flair to the original message
  return `${trumpPhrases.default} ${message}`;
}

module.exports = {
  TrumplangError,
  VariableError,
  SyntaxError,
  RuntimeError,
  trumpifyErrorMessage
};