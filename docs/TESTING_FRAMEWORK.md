# Trumplang Testing Framework Specification

## Overview

The Trumplang Testing Framework provides a way to write and execute tests for Trumplang programs in a style consistent with the language's Trump-inspired syntax and tone. This document outlines the formal specification for the testing framework, including file structure, test declarations, assertions, and execution.

## Test File Structure

### File Naming

- Test files must be named in ALL UPPERCASE
- Test files must use the `.TEST.MAGA` extension
- Test files should be named after the file they are testing, e.g., `FIBONACCI.MAGA` is tested by `FIBONACCI.TEST.MAGA`

### Basic Structure

```
THE BEST TESTS FOR [PROGRAM_NAME] BELIEVE ME

[test case 1]
[test case 2]
...
[test case n]

MAKE AMERICA GREAT AGAIN
```

## Test Case Declaration

Each test case follows this structure:

```
TREMENDOUS TEST "TEST_DESCRIPTION" BELIEVE ME
    [test code]
    [assertions]
I TOLD YOU SO
```

Where:

- `TEST_DESCRIPTION` is a string description of what the test verifies
- `[test code]` is Trumplang code that sets up the test
- `[assertions]` are statements that verify expected outcomes
- Each test case ends with `I TOLD YOU SO`

## Assertion Statements

The framework provides several types of assertions:

| Assertion Type | Syntax                                                          | Purpose                                     |
| -------------- | --------------------------------------------------------------- | ------------------------------------------- |
| Equal          | `FACT CHECK [actual] SO TRUE [expected]`                        | Asserts that actual equals expected         |
| Not Equal      | `NOT EVEN CLOSE THAT [actual] SO TRUE [expected]`               | Asserts that actual does not equal expected |
| True           | `NO DOUBT THAT [expression]`                                    | Asserts that expression is true             |
| False          | `FAKE NEWS THAT [expression]`                                   | Asserts that expression is false            |
| Greater Than   | `ABSOLUTELY TREMENDOUS THAT [actual] BETTER THAN [expected]`    | Asserts that actual > expected              |
| Less Than      | `TOTAL DISASTER THAT [actual] NOT AS GOOD AS [expected]`        | Asserts that actual < expected              |
| Greater/Equal  | `AT LEAST AS GOOD THAT [actual] AT LEAST AS GOOD AS [expected]` | Asserts that actual >= expected             |
| Less/Equal     | `NO BETTER THAT [actual] NO BETTER THAN [expected]`             | Asserts that actual <= expected             |

## Test Execution

### Command Line Execution

To run tests, use the following commands:

```
EXTREME-VETTING [filename.TEST.MAGA]    # Run specific test file
EXTREME-VETTING ALL                      # Run all test files in directory
EXTREME-VETTING DIRECTORY [directory]    # Run all test files in specific directory
```

### Execution Flow

1. The test runner loads and parses the test file
2. Each test case is executed in sequence
3. For each test case:
   - The test code is executed
   - Each assertion is evaluated
   - Results are recorded
4. After all test cases are executed, a summary is displayed

## Test Results and Output

### Test Case Results

Each test case will have one of the following results:

- `PASSED BIGLY` - All assertions in the test case passed
- `TOTALLY RIGGED` - One or more assertions in the test case failed

### Output Format

The output of a test run follows this format:

```
STARTING EXTREME VETTING OF [FILENAME.TEST.MAGA]

"[TEST_DESCRIPTION_1]" - [RESULT]
[failure details if applicable]

"[TEST_DESCRIPTION_2]" - [RESULT]
[failure details if applicable]

...

SUMMARY: [passed count] PASSED, [failed count] FAILED - [OVERALL ASSESSMENT]
```

### Failure Details

When an assertion fails, the following details are provided:

```
EXPECTED: [expected value]
ACTUAL: [actual value]
LOCATION: LINE [line number]
NOTE: SAD RESULT! NOT WHAT WE WANTED!
```

## Setup and Teardown

For test setup and teardown, use:

```
PREPARE THE STAGE BELIEVE ME
    [setup code]
I TOLD YOU SO

CLEAN UP THE MESS BELIEVE ME
    [teardown code]
I TOLD YOU SO
```

Setup code runs before each test case. Teardown code runs after each test case.

## Test Hooks

The framework provides hooks for specific test events:

```
BEFORE ALL TESTS BELIEVE ME
    [code to run once before all tests]
I TOLD YOU SO

AFTER ALL TESTS BELIEVE ME
    [code to run once after all tests]
I TOLD YOU SO
```

## Example Test File

```
THE BEST TESTS FOR FIBONACCI BELIEVE ME

BEFORE ALL TESTS BELIEVE ME
    I HAVE THE BEST HUGE MAX_FIB! SO TRUE 10
    EVERYONE IS TALKING ABOUT "TESTING FIBONACCI UP TO " WINNING MAX_FIB!
I TOLD YOU SO

TREMENDOUS TEST "FIRST FIBONACCI IS ZERO" BELIEVE ME
    I HAVE THE BEST HUGE RESULT! SO TRUE I CALL UPON GET_FIBONACCI PEOPLE TELL ME 0
    FACT CHECK RESULT! SO TRUE 0
I TOLD YOU SO

TREMENDOUS TEST "SECOND FIBONACCI IS ONE" BELIEVE ME
    I HAVE THE BEST HUGE RESULT! SO TRUE I CALL UPON GET_FIBONACCI PEOPLE TELL ME 1
    FACT CHECK RESULT! SO TRUE 1
I TOLD YOU SO

TREMENDOUS TEST "FIFTH FIBONACCI IS THREE" BELIEVE ME
    I HAVE THE BEST HUGE RESULT! SO TRUE I CALL UPON GET_FIBONACCI PEOPLE TELL ME 4
    FACT CHECK RESULT! SO TRUE 3
I TOLD YOU SO

TREMENDOUS TEST "SEQUENCE GROWS BIGLY" BELIEVE ME
    I HAVE THE BEST HUGE FIRST! SO TRUE I CALL UPON GET_FIBONACCI PEOPLE TELL ME 7
    I HAVE THE BEST HUGE SECOND! SO TRUE I CALL UPON GET_FIBONACCI PEOPLE TELL ME 8
    ABSOLUTELY TREMENDOUS THAT SECOND! BETTER THAN FIRST!
I TOLD YOU SO

AFTER ALL TESTS BELIEVE ME
    EVERYONE IS TALKING ABOUT "ALL FIBONACCI TESTS COMPLETE!"
I TOLD YOU SO

MAKE AMERICA GREAT AGAIN
```

## Integration with IDE

Test results can be integrated with IDEs through standard output streams. Failed tests include line numbers and file information to enable IDE navigation to test failure locations.

---

_NOTE: This testing framework maintains the bombastic, confident style of Trumplang while providing a robust mechanism for test-driven development._
