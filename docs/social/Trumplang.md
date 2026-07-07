# Trumplang: Where Politics Meets Programming

## From Speech Patterns to Syntax Rules

When I first encountered Donald Trump's distinctive speech patterns back in 2016, something struck me as uniquely structured about his communication style. As someone fascinated by esoteric programming languages like DangerMouse's Chef and Piet, I couldn't help but see the potential for a programming language that captured Trump's rhetorical fingerprint. However, it wasn't until the recent advancements in AI code assistants that I found the perfect partner to help bring this vision to life.

Trumplang isn't meant as political commentary but rather as a linguistic exploration - a homage to one of the most distinctive speaking styles in recent American history. By transforming Trump's bombastic rhetoric, repetitive patterns, and distinctive phrases into syntax rules, I created a language that feels immediately familiar to anyone who has heard him speak or read his tweets.

## What Makes Trump's Speech a Perfect Fit for a Programming Language

Trump's communication style possesses several characteristics that map surprisingly well to programming language constructs:

1. **Repetition and emphasis**: Trump frequently uses repetition ("win, win, win") and emphasis ("tremendous," "huge," "the best") - perfect for loop constructs and superlative variable declarations.

2. **Binary thinking**: Trump often presents issues in stark contrasts ("great" vs. "disaster"), which maps nicely to boolean logic and conditional statements.

3. **Distinctive phrases**: His catchphrases like "Believe me" and "Make America Great Again" provide ready-made syntax markers for block delimiters.

4. **Self-referential style**: Trump frequently references himself ("I know the best people"), which works well for function declarations and method calls.

5. **Hyperbole**: His tendency toward exaggeration creates natural emphasis that helps programmers distinguish between different operations.

6. **Consistent capitalization in tweets**: Trump's preference for ALL CAPS in important tweets gave Trumplang its distinctive shouting typography.

## The Technical Challenge of Grammar Definition

Defining the grammar for Trumplang using ANTLR4 was both challenging and rewarding. ANTLR (ANother Tool for Language Recognition) provides a powerful framework for creating parsers and lexers, making grammar definitions quite readable.

Here's a glimpse at how some of Trump's speech patterns translated into grammar rules:

```
// If statement - "LISTEN"
ifStatement:
    IF_DECL condition statement elseIfStatement* elseStatement?;

// Else if statement - "PEOPLE ARE SAYING"
elseIfStatement: ELSE_IF_DECL condition statement;

// Else statement - "NOBODY KNEW"
elseStatement: ELSE_DECL statement;
```

In this example, conditional statements begin with "LISTEN" (if), continue with "PEOPLE ARE SAYING" (else if), and fall back to "NOBODY KNEW" (else) - all phrases that evoke Trump's rhetorical style.

Variable declarations in Trumplang take on Trump's superlative language:

```
// Variable declarations - "I HAVE THE BEST"
variableDeclaration:
    VARIABLE_DECL dataType varName = VARIABLE ASSIGNMENT (
        expression
        | dealDeclaration
    );
```

Variables in Trumplang are declared with "I HAVE THE BEST" followed by a data type and the variable name, which always ends with an exclamation mark - capturing Trump's emphatic style.

## Inspired by Archives of Tweets

To ensure Trumplang captured authentic Trumpisms, I spent hours analyzing Trump's tweet archives. These archives provided a goldmine of distinctive phrases, sentence structures, and rhetorical devices that became the building blocks of the language.

For instance, his tendency to use ALL CAPS for emphasis inspired one of Trumplang's core design principles - ALL KEYWORDS IN UPPERCASE. His frequent use of exclamation marks led to the convention that all variables end with an exclamation mark (!).

Consider this Trumplang loop construct derived from Trump's campaign rhetoric:

```
// For loop - "WE'RE GOING TO WIN, WIN, WIN"
forLoop:
    FOR_LOOP_WITH varName = VARIABLE FOR_LOOP_FROM expression FOR_LOOP_TO expression blockStatement;
```

The loop begins with "WE'RE GOING TO WIN, WIN, WIN" followed by "WITH," "FROM," and "TO" clauses - preserving the cadence and spirit of Trump's campaign promises.

## The Wall - Arrays in Trumplang

Perhaps the most fitting syntax choice in Trumplang is the array declaration, which uses the metaphor of building a wall:

```
// Array declaration - "BUILD THE WALL"
arrayDeclaration:
    ARRAY_DECL arrayName = VARIABLE ARRAY_ELEMENTS_DECL arrayElements?;

// Array elements
arrayElements: expression (ARRAY_CHAIN expression)*;
```

This allows programmers to write:

```
BUILD THE WALL NUMBERS! AND MEXICO WILL PAY FOR IT 1 PREVAILS 2 PREVAILS 3
```

Which creates an array named "NUMBERS!" with elements 1, 2, and 3. Accessing elements uses the keyword "SECTION" - as in, "NUMBERS! SECTION 0" to get the first element.

## Trumpian Operators

Trumplang's operators reflect Trump's distinctive rhetoric:

```
// Arithmetic operations
expression:
    term
    | expression PLUS term // WINNING for addition
    | expression STRING_CONCAT term // ENDORSING for string concatenation
    | expression MINUS term; // LOSING for subtraction

// Terms
term:
    powerExpression
    | term MULTIPLY factor // BIG LEAGUE TIMES for multiplication
    | term DIVIDE factor // SAD for division
    | term MODULO factor; // LEFTOVER FROM for modulo
```

These become delightfully readable expressions:

```
TOTAL! ABSOLUTELY COUNT! WINNING 5           // Addition
MESSAGE! ABSOLUTELY "GREAT " ENDORSING "DEAL" // String concatenation
VALUE! ABSOLUTELY PRICE! BIG LEAGUE TIMES TAX! // Multiplication
REMAINDER! ABSOLUTELY VALUE! LEFTOVER FROM 2   // Modulo operation
```

The language even includes power expressions (`HUGELY MULTIPLIED BY`) and some truly unhinged features:

```
YOU'RE FIRED GREET                                      // Permanently delete a function
EXECUTIVE ORDER WINNING ABSOLUTELY LOSING               // Make addition behave as subtraction
SUPREME COURT OVERRULES WINNING                         // 50% chance of overturning the order
```

All numeric output is silently inflated by 10% — because Trump always exaggerates crowd sizes. Your `FACT CHECK` assertions still use real values, so the logic is correct but the output always lies. It's the most Trumpian feature possible.

## Learning from LOLCODE and Other Esoteric Languages

Trumplang draws inspiration from LOLCODE and other esoteric languages that bring humor and creativity to programming. Like LOLCODE, Trumplang aims to make programming accessible through a layer of familiar cultural references, while still maintaining a coherent syntax and logical structure.

For example, LOLCODE's "VISIBLE" for print statements inspired Trumplang's "EVERYONE IS TALKING ABOUT" - both achieve the same functional purpose while maintaining their respective thematic integrity.

Compare LOLCODE:
```
VISIBLE "HAI WORLD!"
```

To Trumplang:
```
EVERYONE IS TALKING ABOUT "THE BEST HELLO WORLD PROGRAM EVER WRITTEN"
```

## A Fibonacci Example in Trumplang

To demonstrate the language in action, here's a Fibonacci function in Trumplang:

```
THE TIME FOR EMPTY TALK IS OVER!!!

INCREDIBLE GET_FIBONACCI PEOPLE TELL ME HUGE N! BELIEVE ME
    LISTEN N! SO TRUE 0 BELIEVE ME
        AND I MEAN THAT 0
    I TOLD YOU SO
    
    LISTEN N! SO TRUE 1 BELIEVE ME
        AND I MEAN THAT 1
    I TOLD YOU SO
    
    I HAVE THE BEST HUGE A! ABSOLUTELY 0
    I HAVE THE BEST HUGE B! ABSOLUTELY 1
    I HAVE THE BEST HUGE TEMP! ABSOLUTELY 0
    I HAVE THE BEST HUGE I! ABSOLUTELY 2
    
    WE'RE GOING TO WIN IN A LANDSLIDE I! NOT AS GOOD AS N! BELIEVE ME
        TEMP! ABSOLUTELY A! WINNING B!
        A! ABSOLUTELY B!
        B! ABSOLUTELY TEMP!
        MAKE I! GREATER
    I TOLD YOU SO
    
    AND I MEAN THAT B!
I TOLD YOU SO

I HAVE THE BEST HUGE RESULT! ABSOLUTELY I CALL UPON GET_FIBONACCI PEOPLE TELL ME 10
EVERYONE IS TALKING ABOUT "THE 10TH FIBONACCI NUMBER IS " ENDORSING RESULT!

MAKE AMERICA GREAT AGAIN
```

This function calculates the Nth Fibonacci number through an iterative approach. Notice how the language's unique syntax adds character while maintaining readability for those familiar with the language's conventions.

## Deal Structures - Trump's Business Background

Reflecting Trump's business background, Trumplang includes "DEAL" structures for object-like data:

```
I HAVE THE BEST DEAL PERSON! ABSOLUTELY (HUGE AGE! ABSOLUTELY 74 & TWEET NAME! ABSOLUTELY "DONALD")!!

EVERYONE IS TALKING ABOUT PERSON! FOLLOW NAME!  // Prints "DONALD"
```

These deal structures can include fields of any data type, and access uses the "FOLLOW" keyword, evoking the social media imagery that Trump embraced.

## YOU'RE FIRED - Function Deletion

Trump's most iconic catchphrase is now a language feature. `YOU'RE FIRED` permanently deletes a function:

```
INCREDIBLE GREET PEOPLE TELL ME TWEET NAME! BELIEVE ME
    EVERYONE IS TALKING ABOUT "HELLO, " ENDORSING NAME!
I TOLD YOU SO

I CALL UPON GREET PEOPLE TELL ME "DONALD"    // Works fine
YOU'RE FIRED GREET                             // Function is gone forever
I CALL UPON GREET PEOPLE TELL ME "DONALD"    // ERROR: GREET WAS FIRED. THEY WERE TERRIBLE...
```

## EXECUTIVE ORDER - Operator Remapping

The `EXECUTIVE ORDER` statement remaps arithmetic operators. Want addition to behave as multiplication? Sign an executive order:

```
EXECUTIVE ORDER WINNING ABSOLUTELY BIG LEAGUE TIMES
```

Now every `WINNING` operation does multiplication instead. The `SUPREME COURT OVERRULES` statement can challenge this — but there's a 50% chance the court sides with the executive order. Pure chaos.

## Trumplang Testing Framework

We even developed a testing framework for Trumplang that maintains the bombastic style:

```
FACT CHECK GET_FIB_RESULT! SO TRUE 55
```

This assertion verifies that the result equals the expected value, using Trump's "fact check" rhetoric as an appropriate testing metaphor.

## The Role of AI in Language Creation

Creating Trumplang would have been significantly more challenging without the assistance of AI. Working with Claude allowed me to refine grammar rules, develop the interpreter, and generate coherent examples that maintained the language's thematic integrity.

The collaboration demonstrated how AI can serve as an amplifier for human creativity. I provided the concept and cultural knowledge, while Claude helped with the technical implementation details and ensured consistency across the language specification.

## Conclusion: Where Code Meets Culture

Developing Trumplang has been an enlightening journey that extends far beyond the technical challenge of creating a programming language. It sits at the intersection of linguistics, politics, technology, and art - demonstrating how elements of popular culture can be transformed into functional tools while preserving their original character.

This project reminds us that programming languages aren't merely technical constructs but can also be vehicles for expression, humor, and commentary. By codifying Trump's distinctive rhetoric into a formal grammar, we reveal both the structured patterns in his seemingly chaotic speech and the creative potential hidden in technical disciplines like language design.

Working with AI assistants like Claude throughout this process has transformed how I approach creative technical projects. The collaboration model - where human creativity, cultural knowledge, and vision combine with AI's technical capabilities and pattern recognition - represents a new paradigm for creative work. It's not about replacing human ingenuity but amplifying it, allowing us to realize ambitious ideas that might otherwise remain conceptual.

As we move forward in an increasingly AI-assisted world, I believe this kind of collaborative creation will become more common across disciplines. The boundaries between technical and creative fields will continue to blur, opening new possibilities for interdisciplinary work that was previously difficult to pursue without extensive specialized knowledge.

Trumplang stands as a playful example of this fusion - a technically functioning language that doubles as linguistic art. It captures a distinctive moment in American political rhetoric while demonstrating that even the most formal systems of logic can accommodate the idiosyncrasies of human expression.

In the end, perhaps that's what makes esoteric programming languages so fascinating - they reveal the creative spirit behind all programming, reminding us that even mainstream languages began as someone's vision for how humans might communicate with machines. Whether it's Chef's recipes, LOLCODE's internet humor, or Trumplang's political rhetoric, these languages celebrate the human element in what is often viewed as a purely technical domain.

So as Trumplang joins the pantheon of esoteric languages, I hope it encourages others to see programming as not just a technical skill but a creative one - and to recognize that with today's AI tools, the distance between imagination and implementation has never been shorter. The future of programming, like the language itself, is going to be tremendous. Believe me!