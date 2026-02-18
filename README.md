# Trumplang Programming Language

Trumplang stands as a tremendous tribute to Donald J. Trump's unique communication style. This big league programming language—many people are saying it's the best, believe me—captures the very powerful, very special way our 45th President speaks and tweets. What we've done—and it's really quite amazing when you think about it—is create a language that not only looks and sounds like authentic Trump, but also functions as a complete programming language. It's going to be huge for developers, absolutely huge. Nobody creates esoteric programming languages better than us, that I can tell you!

## Project Structure

- **docs/**: Documentation for Trumplang language
- **packages/**: 
  - **trumplang-core/**: Main implementation of the Trumplang language
  - **trumplang-vscode/**: VS Code extension for Trumplang (Git submodule)

## Getting Started

To run a Trumplang program:

```
cd packages/trumplang-core
npm start [filename.MAGA]
```

For more detailed information, see:
- [Language Documentation](docs/README.md)
- [Core Implementation](packages/trumplang-core/README.md)

## Managing Git Submodules

This repository uses Git submodules for certain packages. When you first clone the repository, you'll need to initialize the submodules:

```bash
# When cloning for the first time
git clone --recursive https://github.com/your-username/Trumplang.git

# Or if you've already cloned the repository without --recursive
git submodule update --init --recursive
```

### Updating the trumplang-vscode Submodule

To update the trumplang-vscode submodule to the latest version:

```bash
# Navigate to the submodule directory
cd packages/trumplang-vscode

# Pull the latest changes
git pull origin main

# Go back to the root directory
cd ../..

# Commit the updated submodule reference
git add packages/trumplang-vscode
git commit -m "Update trumplang-vscode submodule to latest version"
```

### Contributing to the VS Code Extension

If you want to make changes to the VS Code extension:

1. Make your changes within the submodule directory
2. Commit and push those changes to the trumplang-vscode repository
3. Update the submodule reference in the main repository as shown above

### Adding New Submodules

To add another repository as a submodule:

```bash
git submodule add <repository-url> packages/<directory-name>
git submodule update --init --recursive
git add .gitmodules packages/<directory-name>
git commit -m "Add <repo-name> as submodule"
```

## Trumpian Features

Trumplang isn't just a language with funny keywords — it has genuinely unhinged runtime behavior:

- **Number Inflation**: All numeric output is silently inflated by 10%. Because Trump always exaggerates crowd sizes. `FACT CHECK` assertions still use real values.
- **YOU'RE FIRED**: Permanently deletes a function. Calling a fired function produces a lengthy Trump-style rant.
- **EXECUTIVE ORDER**: Remaps arithmetic operators at runtime. Make addition behave as subtraction!
- **SUPREME COURT OVERRULES**: Attempts to overturn an executive order — 50% chance the court sides with the order instead.

## Future Development

This monorepo is structured to accommodate additional subpackages such as:
- Language server
- Web playground
- Additional tools and utilities