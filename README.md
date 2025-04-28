# Trumplang - A Trump-inspired Programming Language

Trumplang is an esoteric programming language inspired by Donald Trump's speech patterns, famous quotes, and tweet style. The language is designed to look like Trump prose while functioning as a proper programming language.

## Features

- ALL KEYWORDS IN UPPERCASE
- Variables end with exclamation mark (!) and are in UPPERCASE
- Programs start with `BELIEVE ME` and end with `MAKE AMERICA GREAT AGAIN`
- Blocks begin with `BELIEVE ME` and end with `YOU'RE FIRED`
- Trump-inspired error messages and runtime behavior

## Installation

```bash
# Clone the repository
git clone https://github.com/your-username/trumplang.git
cd trumplang

# Install dependencies
npm install

# Link the CLI command globally (optional)
npm link
```

## Usage

```bash
# Run a Trumplang program
npm start examples/FIBONACCI.MAGA

# Or if globally linked:
trumplang examples/FIBONACCI.MAGA

# Run tests
npm test
```

## Example Programs

### Simple Counter

```
GOD BLESS THE USA!!!
A LOT OF PEOPLE ARE SAYING THIS IS A SIMPLE COUNTER PROGRAM

I HAVE THE BEST HUGE COUNT! ABSOLUTELY 0
I HAVE THE BEST HUGE MAX! ABSOLUTELY 5
I HAVE THE BEST TWEET MESSAGE! ABSOLUTELY "COUNTING UP - TREMENDOUS NUMBERS!"

EVERYONE IS TALKING ABOUT MESSAGE!
EVERYONE IS TALKING ABOUT COUNT!

MAKE COUNT! GREATER
EVERYONE IS TALKING ABOUT COUNT!

MAKE COUNT! GREATER
EVERYONE IS TALKING ABOUT COUNT!

MAKE COUNT! GREATER
EVERYONE IS TALKING ABOUT COUNT!

MAKE COUNT! GREATER
EVERYONE IS TALKING ABOUT COUNT!

MAKE COUNT! GREATER
EVERYONE IS TALKING ABOUT COUNT!

MAKE AMERICA GREAT AGAIN
```

### Fibonacci Sequence (Full Language - in development)

```
THE TIME FOR EMPTY TALK IS OVER!!!
A LOT OF PEOPLE ARE SAYING THIS PROGRAM CALCULATES THE FIBONACCI SEQUENCE
I HAVE THE BEST HUGE TERMS! ABSOLUTELY 10
I HAVE THE BEST HUGE FIRST! ABSOLUTELY 0
I HAVE THE BEST HUGE SECOND! ABSOLUTELY 1
I HAVE THE BEST HUGE NEXT! ABSOLUTELY 0
I HAVE THE BEST HUGE COUNT! ABSOLUTELY 0
EVERYONE IS TALKING ABOUT "FIBONACCI SEQUENCE - VERY TREMENDOUS NUMBERS!"
EVERYONE IS TALKING ABOUT FIRST!
WE'RE GOING TO WIN IN A LANDSLIDE COUNT! NOT AS GOOD AS TERMS! BELIEVE ME
    COUNT! ABSOLUTELY COUNT! WINNING 1
    
    LISTEN COUNT! SO TRUE 1 BELIEVE ME
        EVERYONE IS TALKING ABOUT SECOND!
    NOBODY KNEW
        NEXT! ABSOLUTELY (FIRST! WINNING SECOND!)
        EVERYONE IS TALKING ABOUT NEXT!
        FIRST! ABSOLUTELY SECOND!
        SECOND! ABSOLUTELY NEXT!
    YOU'RE FIRED
YOU'RE FIRED
MAKE AMERICA GREAT AGAIN
```

## Current Implementation Status

The current interpreter implementation supports:

- Variable declarations with `I HAVE THE BEST`
- Variable assignment with `ABSOLUTELY`
- String and number literals
- Basic arithmetic with `WINNING` (addition)
- Increment with `MAKE ... GREATER`
- Decrement with `MAKE ... SMALLER`
- Print statements with `EVERYONE IS TALKING ABOUT`
- Comments with `A LOT OF PEOPLE ARE SAYING`

Control structures and advanced features are in development.

## Project Structure

- `/grammar` - ANTLR4 grammar definitions
- `/src` - Source code for the interpreter
  - `/cli` - Command-line interface
  - `/interpreter` - The core interpreter
  - `/parser` - Generated parser from ANTLR4
  - `/runtime` - Runtime environment
- `/examples` - Example Trumplang programs
- `/test` - Test files

## Language Reference

For full language documentation, see:
- [Implementation Notes](docs/IMPLEMENTATION_NOTES.md)
- [Testing Framework](docs/TESTING_FRAMEWORK.md)

## Inspiration

- https://www.thetrumparchive.com/
- https://www.rev.com/category/donald-trump
- TOTALLY RIGGED
- THEY ARE REALLY LATE, VERY DISRESPECTFUL TO OUR COUNTRY!
- GREAT VOTER ENTHUSIASM TODAY. THAT IS A VERY GOOD THING! (CODER?)
- WITCH HUNT
- THE BEST IS YET TO COME...
- BUT FEAR NOT, WE WILL WIN BIG ON NOVEMBER 5TH, AND MAKE AMERICA GREAT AGAIN!!!
- “TRUMP” WILL FIX IT!
- I WILL NEVER LET YOU DOWN!
- ALL LIES
- STONE COLD LOSER
- MAGA LOVES YOU!!!
- TOTALLY UNFIT
- a COMPLETE AND TOTAL DISASTER


## License

ISC