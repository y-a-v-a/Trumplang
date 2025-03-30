# Tests

This directory contains tests for the Trumplang implementation.

## Running Tests

Run all tests:
```
EXTREME VETTING ALL
```

Run a specific test:
```
EXTREME VETTING [filename.TEST.MAGA]
```

## Available Tests

### Basic Tests
- `BASIC.TEST.MAGA` - Tests basic language features like variables and assertions

### Data Structure Tests
- `ARRAY_SIMPLE.TEST.MAGA` - Tests array declaration, access, and iteration
- `ARRAY_BOUNDS.TEST.MAGA` - Tests array bounds checking
- `ARRAY_EXPRESSIONS.TEST.MAGA` - Tests empty arrays and arrays with expressions
- `ARRAY_ADVANCED.TEST.MAGA` - Tests advanced array operations (iteration, functions)

- `DEAL_SIMPLE.TEST.MAGA` - Tests deal structure declaration and field access
- `DEAL_DATA_TYPES.TEST.MAGA` - Tests deal structures with different data types
- `NESTED_DEAL_WORKAROUND.TEST.MAGA` - Tests workaround for nested deal structures

### Comprehensive Tests
- `FINAL_TEST.TEST.MAGA` - Comprehensive test of both array and deal structure operations

## Test Structure

Tests should:
1. Have a `.TEST.MAGA` extension
2. Use assertions with `BELIEVE ME THAT [actual] SO TRUE [expected]`
3. End with `AND I MEAN THAT "PASSED BIGLY"` to indicate a passing test