# Trumplang Syntax Highlighting Example

Below is a representation of how a Trumplang program would appear with the proposed syntax highlighting in VS Code. The colors are based on the Trump-inspired theme.

## Sample Program: FIBONACCI.MAGA

```
BELIEVE ME                                         <!-- Bold Red -->

A LOT OF PEOPLE ARE SAYING THIS IS THE TREMENDOUS FIBONACCI SEQUENCE CALCULATOR  <!-- Gray Italic -->

I HAVE THE BEST HUGE TERMS!                        <!-- Gold "I HAVE THE BEST", Red "HUGE", White bold "TERMS!" -->  
     SO TRUE 10                                    <!-- Red "SO TRUE", Gold "10" -->

I HAVE THE BEST HUGE FIRST!                        <!-- Gold, Red, White bold -->
     SO TRUE 0                                     <!-- Red, Gold -->

I HAVE THE BEST HUGE SECOND!                       <!-- Gold, Red, White bold -->
     SO TRUE 1                                     <!-- Red, Gold -->

I HAVE THE BEST HUGE NEXT!                         <!-- Gold, Red, White bold -->
     SO TRUE 0                                     <!-- Red, Gold -->

I HAVE THE BEST HUGE COUNT!                        <!-- Gold, Red, White bold -->
     SO TRUE 0                                     <!-- Red, Gold -->

EVERYONE IS TALKING ABOUT                          <!-- Red -->
     "FIBONACCI SEQUENCE - VERY TREMENDOUS NUMBERS!"  <!-- Gold -->

EVERYONE IS TALKING ABOUT FIRST!                   <!-- Red, White bold -->

WE'RE GOING TO WIN SO MUCH                         <!-- Bold Red -->
     YOU'RE GOING TO GET TIRED OF WINNING          <!-- Bold Red -->
     COUNT! NOT AS GOOD AS TERMS!                  <!-- White bold, Red, White bold -->
     BELIEVE ME                                    <!-- Bold Red -->
    
     COUNT! SO TRUE COUNT! WINNING 1               <!-- White bold, Red, White bold, Red, Gold -->
    
     LISTEN COUNT! SO TRUE 1                       <!-- Bold Red, White bold, Red, Gold -->
          BELIEVE ME                               <!-- Bold Red -->
          EVERYONE IS TALKING ABOUT SECOND!        <!-- Red, White bold -->
     NOBODY KNEW                                   <!-- Bold Red -->
          NEXT! SO TRUE FIRST! WINNING SECOND!     <!-- White bold, Red, White bold, Red, White bold -->
          EVERYONE IS TALKING ABOUT NEXT!          <!-- Red, White bold -->
          FIRST! SO TRUE SECOND!                   <!-- White bold, Red, White bold -->
          SECOND! SO TRUE NEXT!                    <!-- White bold, Red, White bold -->
     YOU'RE FIRED                                  <!-- Bold Red -->

YOU'RE FIRED                                       <!-- Bold Red -->

MAKE AMERICA GREAT AGAIN                           <!-- Bold Red -->
```

## Visual Representation

- **Background**: Navy Blue (#0C2340)
- **Bold Red Keywords** (#C8102E, bold): 
  - `BELIEVE ME`
  - `WE'RE GOING TO WIN SO MUCH`
  - `YOU'RE GOING TO GET TIRED OF WINNING`
  - `LISTEN`
  - `BELIEVE ME`
  - `NOBODY KNEW`
  - `YOU'RE FIRED`
  - `MAKE AMERICA GREAT AGAIN`

- **Red Operators and Functions** (#C8102E):
  - `SO TRUE`
  - `NOT AS GOOD AS`
  - `WINNING`
  - `EVERYONE IS TALKING ABOUT`

- **Gold Declarations and Types** (#FFD700):
  - `I HAVE THE BEST`
  
- **Red Data Types** (#C8102E):
  - `HUGE`

- **White Variables** (#FFFFFF, bold):
  - `TERMS!`
  - `FIRST!`
  - `SECOND!`
  - `NEXT!`
  - `COUNT!`

- **Gold String Literals** (#FFD700):
  - `"FIBONACCI SEQUENCE - VERY TREMENDOUS NUMBERS!"`

- **Gold Numeric Literals** (#FFD700):
  - `10`
  - `0`
  - `1`

- **Gray Comments** (#888888, italic):
  - `A LOT OF PEOPLE ARE SAYING THIS IS THE TREMENDOUS FIBONACCI SEQUENCE CALCULATOR`

## VS Code Interface Elements

The editor would also have:
- Line numbers in red (#C8102E)
- A gold cursor (#FFD700)
- Gold bracket matching (#FFD700)
- Red selection highlighting (#C8102E55)

## Code Folding

Code blocks between `BELIEVE ME` and `YOU'RE FIRED` can be folded, allowing users to collapse sections of code for better navigation.