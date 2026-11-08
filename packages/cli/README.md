# @stackvibe-studio/cli

> Interactive command line interface for scaffolding, configuring, and adding StackVibe UI components to React, Next.js, and Vite projects.

[![npm version](https://img.shields.io/npm/v/@stackvibe-studio/cli.svg)](https://www.npmjs.com/package/@stackvibe-studio/cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Installation

Run directly with `npx` (recommended) or install globally:

```bash
npx @stackvibe-studio/cli init
# or install globally
npm install -g @stackvibe-studio/cli
```

## Commands

### `init`

Initializes StackVibe UI inside your current working directory, installs core dependencies, and configures Tailwind CSS:

```bash
npx @stackvibe-studio/cli init
```

### `add [component]`

Installs a component primitive into your project:

```bash
# Add a single component
npx @stackvibe-studio/cli add button

# Add motion components
npx @stackvibe-studio/cli add magnetic tilt-card

# Add 3D canvas
npx @stackvibe-studio/cli add wave-canvas
```

### `list`

Lists all available components from `@stackvibe-studio/registry`:

```bash
npx @stackvibe-studio/cli list
```

## Documentation

- **Live Documentation**: [https://stackvibe-studio.github.io/stackvibe-ui/](https://stackvibe-studio.github.io/stackvibe-ui/)

## License

MIT © [StackVibe Studio](https://github.com/StackVibe-Studio)
