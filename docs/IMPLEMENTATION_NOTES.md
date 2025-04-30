# Trumplang Implementation Considerations

This document outlines additional implementation notes and considerations for developing a Trumplang compiler or interpreter beyond the core grammar definition.

## Error Messages and Compiler Warnings

- **Variable Declaration Errors**

  - When variables don't end with an exclamation mark: "There's no enthusiasm here, folks! Variables need energy! BIG ENERGY!"
  - Lowercase in variable names: "We only use CAPITAL LETTERS for our TREMENDOUS variables!"

- **String Formatting Errors**

  - Lowercase letters in strings: "We don't whisper in this language. SPEAK UP!"
  - Missing quotes around strings: "Fake quotes! Very dishonest! All TWEET values need proper quotation marks!"

- **Syntax Errors**

  - Missing keywords: "YOUR STATEMENT IS INCOMPLETE. SAD!"
  - Incorrect keyword sequence: "THIS DOESN'T MAKE SENSE, EVEN BY MY STANDARDS!"
  - Mismatched blocks: "YOU NEVER FIRED ANYONE! Every block needs to end properly."

- **Runtime Errors**

  - Division by zero: "THAT'S A DISASTER. You can't divide by zero, that's for losers!"
  - Array index out of bounds: "YOU'RE TRYING TO CLIMB OVER THE WALL! Stay within the boundaries!"
  - Undefined variable: "NOBODY KNOWS WHAT THIS IS. You need to declare it first, believe me!"
  - Panic/fatal error: "This code is a DISASTER! Very sad code, maybe the worst code ever written!" (Used for catastrophic runtime failures or unrecoverable errors when the program must terminate immediately)
  - Program exit: `BORING` keyword immediately exits the program execution (for when the program is no longer interesting)

- **Exception Handling**
  - Try block: `DESPITE THE NEGATIVE PRESS COVFEFE` followed by code that might cause errors
  - Catch block: `FAKE NEWS MEDIA WILL TELL YOU` followed by error handling code
  - Finally block: `BUT THE TRUTH IS` followed by code that always executes
  - Example structure:
    ```
    DESPITE THE NEGATIVE PRESS COVFEFE
      // code that might throw an error
    FAKE NEWS MEDIA WILL TELL YOU
      // error handling code
    BUT THE TRUTH IS
      // code that always executes
    I TOLD YOU SO
    ```

## Implementation Features

- **Special Variables**
  - Built-in variables that don't need declaration, like `AMERICA!` or `ME!`
  - System constants like `TREMENDOUS_PI!` or `HUGE_MAX!`
  - Command line arguments accessible via the global array `IMMIGRANTS!`
    - Access specific arguments with: `IMMIGRANTS! SECTION 0` (first argument)
    - Get number of arguments with: `COUNT IMMIGRANTS!`
    - Every program has access to this without declaration
- **Console Operations**

  - Console logging: `LIBERATE expression` (outputs to console for debugging)
  - Similar to "print" but formatted for debugging purposes
  - Intended for developers to monitor program execution

- **Import System**

  - Import statement: `I KNOW THE BEST PEOPLE FROM "MATH.MAGA"`
  - Error for missing imports: "I CAN'T FIND THESE PEOPLE. Very sad!"

- **Debugging Features**

  - Debug mode called "EXTREME-VETTING"
  - Stack trace titled "THE FAILING PATH"
  - Performance profiler called "WINNING METRICS"
  - Syntax checker called "LAW & ORDER"

- **File System**

  - All filenames must be in uppercase with `.MAGA` extension
  - Import files are referred to as "DEALS"
  - Directory listing feature called "SHOW ME THE PEOPLE"
  - File I/O operations:
    - File open: `I HAVE BEEN VERY OPEN WITH "FILENAME.MAGA" FOR TREMENDOUS READING` or `I HAVE BEEN VERY OPEN WITH "FILENAME.MAGA" FOR BEAUTIFUL WRITING`
    - File read: `TAKE THE TREMENDOUS WORDS FROM FILE!`
    - File write: `PUT MY PERFECT WORDS IN FILE!: expression`
    - File close: `I'M DONE WITH FILE!, TOTALLY DONE`
    - File delete: `THAT FILE! IS A DISASTER, REMOVE IT`
    - File check exists: `DO WE HAVE "FILENAME.MAGA"? BELIEVE ME, PEOPLE ARE ASKING`

- **Documentation**

  - All documentation should be written in Trump's voice
    - Documentation should be written as if Trump himself is explaining how to use the language.
  - Examples should reflect genuine Trump quotes where possible
  - Help command: `TELL ME ABOUT [feature]`

- **Environment Variables**
  - Environment prefix: `TRUMP_`
  - Configuration file named `TRUMP_CONFIG.MAGA`

## Compiler/Interpreter Design

- **Error Recovery**

  - Try to continue parsing after errors when possible
  - Display multiple errors in a single run rather than stopping at the first one

- **Optimization**

  - Optimization level called "MAKE IT TREMENDOUS"
  - Performance warnings: "THIS CODE IS RUNNING LIKE A DEMOCRAT. Let me show you how to make it faster!"

- **IDE Integration**

  - Syntax highlighting: Keywords in gold color
  - Auto-completion suggestions in Trump voice
  - Code folding for blocks between `BELIEVE ME` and `I TOLD YOU SO`

- **Testing Framework**
  - Test runner called "EXTREME-VETTING PROCESS"
  - Assertions like `THIS SHOULD BE TREMENDOUS` and `NO COLLUSION WITH BUGS`
  - Test results described as either "WINNING" or "FAKE RESULTS"
