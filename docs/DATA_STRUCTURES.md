# Trumplang Data Structures

This document describes the implementation of arrays and deal structures (objects) in Trumplang.

## 1. Arrays

Arrays in Trumplang are called "WALL" data structures, with elements being added to the wall.

### 1.1 Array Declaration

Arrays are declared using the "BUILD THE WALL" syntax:

```
BUILD THE WALL ARRAY_NAME! AND MEXICO WILL PAY FOR IT value1 PREVAILS value2 PREVAILS value3
```

Where:
- `ARRAY_NAME!` is the variable name for the array (must end with `!`)
- `value1`, `value2`, etc. are expressions that evaluate to the array elements
- `PREVAILS` is the keyword that separates array elements

Example:
```
BUILD THE WALL NUMBERS! AND MEXICO WILL PAY FOR IT 10 PREVAILS 20 PREVAILS 30
```

This creates an array `NUMBERS!` with elements `[10, 20, 30]`.

### 1.2 Array Access

Array elements are accessed using the `SECTION` keyword:

```
ARRAY_NAME! SECTION index
```

Where:
- `ARRAY_NAME!` is the array variable
- `index` is a zero-based index expression for the element to access

Example:
```
EVERYONE IS TALKING ABOUT NUMBERS! SECTION 0  // Accesses the first element (10)
EVERYONE IS TALKING ABOUT NUMBERS! SECTION 1  // Accesses the second element (20)
```

### 1.3 Array Iteration

Arrays can be iterated using the "BILLIONS AND BILLIONS" syntax for foreach loops:

```
BILLIONS AND BILLIONS ITEM_NAME! YET ARRAY_NAME! BELIEVE ME
    // Statements to execute for each element
YOU'RE FIRED
```

Example:
```
BILLIONS AND BILLIONS ITEM! YET NUMBERS! BELIEVE ME
    EVERYONE IS TALKING ABOUT ITEM!
YOU'RE FIRED
```

## 2. Deal Structures (Objects)

Deal structures in Trumplang are objects with named fields.

### 2.1 Deal Declaration

Deals are declared using the "DEAL" type and parentheses with `!!` suffix:

```
I HAVE THE BEST DEAL DEAL_NAME! ABSOLUTELY (
    TYPE1 FIELD1! ABSOLUTELY value1 &
    TYPE2 FIELD2! ABSOLUTELY value2 &
    TYPE3 FIELD3! ABSOLUTELY value3
)!!
```

Where:
- `DEAL_NAME!` is the variable name for the deal structure
- `TYPE1`, `TYPE2`, etc. are data types for each field
- `FIELD1!`, `FIELD2!`, etc. are field names
- `value1`, `value2`, etc. are expressions that evaluate to the field values
- `&` separates the fields

Example:
```
I HAVE THE BEST DEAL PERSON! ABSOLUTELY (
    HUGE AGE! ABSOLUTELY 70 &
    TWEET NAME! ABSOLUTELY "DONALD" &
    FAKE NEWS IS_PRESIDENT! ABSOLUTELY VERY TRUE
)!!
```

This creates a deal structure `PERSON!` with fields `AGE!`, `NAME!`, and `IS_PRESIDENT!`.

### 2.2 Deal Field Access

Deal fields are accessed using the `FOLLOW` keyword:

```
DEAL_NAME! FOLLOW FIELD_NAME!
```

Example:
```
EVERYONE IS TALKING ABOUT PERSON! FOLLOW NAME!  // Accesses the NAME! field ("DONALD")
EVERYONE IS TALKING ABOUT PERSON! FOLLOW AGE!   // Accesses the AGE! field (70)
```

### 2.3 Nested Deal Structures

Nested deal structures can be created by defining separate deal structures and composing them. While the grammar supports nested declarations, the current implementation requires using a workaround approach:

1. Define child deal structures separately:
```
I HAVE THE BEST DEAL ADDRESS! ABSOLUTELY (
    TWEET STREET! ABSOLUTELY "1600 PENNSYLVANIA AVE" &
    TWEET CITY! ABSOLUTELY "WASHINGTON" &
    TWEET STATE! ABSOLUTELY "DC"
)!!
```

2. Use them individually:
```
EVERYONE IS TALKING ABOUT ADDRESS! FOLLOW CITY!
```

## 3. Examples

See the following example files demonstrating array and deal structure usage:

- `examples/ARRAY_SIMPLE.MAGA` - Basic array operations
- `examples/DEAL_SIMPLE.MAGA` - Basic deal structure operations
- `examples/NESTED_DEAL_WORKAROUND.MAGA` - Using multiple deal structures
- `examples/FINAL_TEST.MAGA` - Comprehensive example using both arrays and deals