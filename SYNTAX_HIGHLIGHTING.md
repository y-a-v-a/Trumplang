# Trumplang VS Code Extension

This document outlines how to create a VS Code extension for Trumplang syntax highlighting, using colors inspired by Trump's aesthetic preferences: red caps, gold accents, and the USA flag colors.

## Extension Structure

A VS Code language extension typically has the following structure:

```
trumplang-vscode/
├── .vscode/
│   └── launch.json
├── syntaxes/
│   └── trumplang.tmLanguage.json
├── language-configuration.json
├── package.json
├── README.md
└── CHANGELOG.md
```

## Launch.json

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Extension",
      "type": "extensionHost",
      "request": "launch",
      "args": [
        "--extensionDevelopmentPath=${workspaceFolder}"
      ],
      "outFiles": [
        "${workspaceFolder}/out/**/*.js"
      ],
      "preLaunchTask": "${defaultBuildTask}"
    }
  ]
}
```

## Package.json

The `package.json` file defines the extension and its contributions:

```json
{
  "name": "trumplang",
  "displayName": "Trumplang",
  "description": "Syntax highlighting for the Trumplang programming language",
  "version": "0.1.0",
  "engines": {
    "vscode": "^1.60.0"
  },
  "categories": [
    "Programming Languages"
  ],
  "contributes": {
    "languages": [{
      "id": "trumplang",
      "aliases": ["Trumplang", "trumplang"],
      "extensions": [".MAGA", ".TEST.MAGA"],
      "configuration": "./language-configuration.json"
    }],
    "grammars": [{
      "language": "trumplang",
      "scopeName": "source.trumplang",
      "path": "./syntaxes/trumplang.tmLanguage.json"
    }],
    "themes": [{
      "label": "Trumplang Theme",
      "uiTheme": "vs-dark",
      "path": "./themes/trumplang-color-theme.json"
    }]
  }
}
```

## Language Configuration

The `language-configuration.json` file defines basic language features:

```json
{
  "comments": {
    "lineComment": "A LOT OF PEOPLE ARE SAYING"
  },
  "brackets": [
    ["BELIEVE ME", "YOU'RE FIRED"],
    ["(", ")"]
  ],
  "autoClosingPairs": [
    { "open": "(", "close": ")" },
    { "open": "\"", "close": "\"" },
    { "open": "BELIEVE ME", "close": "YOU'RE FIRED" }
  ],
  "surroundingPairs": [
    ["(", ")"],
    ["\"", "\""]
  ],
  "folding": {
    "markers": {
      "start": "BELIEVE ME",
      "end": "YOU'RE FIRED"
    }
  }
}
```

## TextMate Grammar

The TextMate grammar defines how the syntax is highlighted. Here's a `trumplang.tmLanguage.json` file:

```json
{
  "$schema": "https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",
  "name": "Trumplang",
  "patterns": [
    { "include": "#keywords" },
    { "include": "#strings" },
    { "include": "#comments" },
    { "include": "#variables" },
    { "include": "#constants" },
    { "include": "#operators" },
    { "include": "#functions" },
    { "include": "#numbers" },
    { "include": "#booleans" }
  ],
  "repository": {
    "keywords": {
      "patterns": [{
        "name": "keyword.control.trumplang",
        "match": "\\b(BELIEVE ME|MAKE AMERICA GREAT AGAIN|LISTEN|NOBODY KNEW|PEOPLE ARE SAYING|WE'RE GOING TO WIN SO MUCH|YOU'RE GOING TO GET TIRED OF WINNING|WE'RE GOING TO WIN, WIN, WIN|WITH|FROM|TO|BILLIONS AND BILLIONS|IN|FAKE NEWS MEDIA SAID ENOUGH|YOU'RE FIRED)\\b"
      }]
    },
    "declarations": {
      "patterns": [{
        "name": "storage.type.trumplang",
        "match": "\\b(I HAVE THE BEST|I HAVE A VERY GOOD BRAIN FOR|BUILD THE WALL|AND MEXICO WILL PAY FOR IT)\\b"
      }]
    },
    "datatypes": {
      "patterns": [{
        "name": "support.type.trumplang",
        "match": "\\b(HUGE|BIGLY|FAKE NEWS|TWEET|WALL|DEAL)\\b"
      }]
    },
    "strings": {
      "name": "string.quoted.double.trumplang",
      "begin": "\"",
      "end": "\"",
      "patterns": [
        {
          "name": "constant.character.escape.trumplang",
          "match": "\\\\."
        }
      ]
    },
    "comments": {
      "name": "comment.line.trumplang",
      "match": "A LOT OF PEOPLE ARE SAYING.*$"
    },
    "variables": {
      "name": "variable.other.trumplang",
      "match": "\\b[A-Z][A-Z0-9_]*!\\b"
    },
    "functions": {
      "patterns": [
        {
          "name": "entity.name.function.trumplang",
          "match": "\\b(TREMENDOUS|I CALL UPON)\\s+([A-Z][A-Z0-9_]*)\\b"
        },
        {
          "name": "meta.function-call.trumplang",
          "match": "\\b(PEOPLE TELL ME)\\b"
        }
      ]
    },
    "operators": {
      "name": "keyword.operator.trumplang",
      "match": "\\b(SO TRUE|TOTAL DISASTER|BETTER THAN|NOT AS GOOD AS|AT LEAST AS GOOD AS|NO BETTER THAN|WINNING|LOSING|TREMENDOUS|SAD|WRONG|AND IT'S TRUE|OR MAYBE|SECTION)\\b"
    },
    "numbers": {
      "name": "constant.numeric.trumplang",
      "match": "\\b[0-9]+(\\.[0-9]+)?\\b"
    },
    "booleans": {
      "name": "constant.language.trumplang",
      "match": "\\b(VERY TRUE|FAKE NEWS)\\b"
    }
  },
  "scopeName": "source.trumplang"
}
```

## Color Theme

Create a `themes/trumplang-color-theme.json` file with Trump-inspired colors:

```json
{
  "name": "Trumplang",
  "type": "dark",
  "colors": {
    "editor.background": "#0C2340",
    "editor.foreground": "#FFFFFF",
    "editorLineNumber.foreground": "#C8102E",
    "editorCursor.foreground": "#FFD700",
    "editor.selectionBackground": "#C8102E55",
    "editor.findMatchBackground": "#FFD70055",
    "editor.findMatchHighlightBackground": "#FFD70033",
    "editorBracketMatch.background": "#FFD70044",
    "editorBracketMatch.border": "#FFD700"
  },
  "tokenColors": [
    {
      "scope": "keyword.control.trumplang",
      "settings": {
        "foreground": "#C8102E",
        "fontStyle": "bold"
      }
    },
    {
      "scope": "storage.type.trumplang",
      "settings": {
        "foreground": "#FFD700",
        "fontStyle": "bold"
      }
    },
    {
      "scope": "support.type.trumplang",
      "settings": {
        "foreground": "#C8102E"
      }
    },
    {
      "scope": "string.quoted.double.trumplang",
      "settings": {
        "foreground": "#FFD700"
      }
    },
    {
      "scope": "comment.line.trumplang",
      "settings": {
        "foreground": "#888888",
        "fontStyle": "italic"
      }
    },
    {
      "scope": "variable.other.trumplang",
      "settings": {
        "foreground": "#FFFFFF",
        "fontStyle": "bold"
      }
    },
    {
      "scope": "entity.name.function.trumplang",
      "settings": {
        "foreground": "#3C8AF0",
        "fontStyle": "bold"
      }
    },
    {
      "scope": "meta.function-call.trumplang",
      "settings": {
        "foreground": "#3C8AF0"
      }
    },
    {
      "scope": "keyword.operator.trumplang",
      "settings": {
        "foreground": "#C8102E"
      }
    },
    {
      "scope": "constant.numeric.trumplang",
      "settings": {
        "foreground": "#FFD700"
      }
    },
    {
      "scope": "constant.language.trumplang",
      "settings": {
        "foreground": "#FFD700",
        "fontStyle": "bold"
      }
    }
  ]
}
```

## Color Scheme Explanation

The colors are inspired by Trump's aesthetics:

- **Background**: Navy Blue (#0C2340) - from the American flag
- **Keywords**: Trump Red (#C8102E) - like MAGA caps
- **Declarations & Strings**: Gold (#FFD700) - like Trump Tower's gold accents
- **Variables**: White (#FFFFFF) - from the American flag
- **Functions**: Bright Blue (#3C8AF0) - stylish contrast color
- **Comments**: Gray (#888888) - subtler text
- **Numbers & Booleans**: Gold (#FFD700) - highlighted values

This color scheme makes keywords stand out in red (like MAGA caps), with gold for strings and values (like Trump's golden aesthetic), and uses the American flag's color palette for the overall theme.

## Installation Instructions

1. Create the directory structure and files as described above
2. Run `npm init -y` in the root directory
3. Update the package.json with the contents provided
4. Install the VSCE package: `npm install -g vsce`
5. Package the extension: `vsce package`
6. Install the generated .vsix file in VS Code:
   - Go to Extensions view
   - Click "..." menu
   - Select "Install from VSIX..."
   - Choose the generated .vsix file

## Sample Screenshot

A typical Trumplang file would look like this:

```
BELIEVE ME

I HAVE THE BEST HUGE COUNT! SO TRUE 10
EVERYONE IS TALKING ABOUT "MAKING AMERICA GREAT AGAIN!"

WE'RE GOING TO WIN SO MUCH YOU'RE GOING TO GET TIRED OF WINNING COUNT! BETTER THAN 0 BELIEVE ME
    EVERYONE IS TALKING ABOUT COUNT!
    COUNT! SO TRUE COUNT! LOSING 1
YOU'RE FIRED

MAKE AMERICA GREAT AGAIN
```

With the Trump-themed highlighting, keywords like `BELIEVE ME` and `WE'RE GOING TO WIN SO MUCH` would appear in bold red, strings like `"MAKING AMERICA GREAT AGAIN!"` in gold, and variables like `COUNT!` in bold white, all against a navy blue background.