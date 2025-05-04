# Trumplang Programming Language

This monorepo contains the Trumplang programming language implementation and related packages.

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

## Future Development

This monorepo is structured to accommodate additional subpackages such as:
- Language server
- Web playground
- Additional tools and utilities