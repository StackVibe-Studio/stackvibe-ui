# @stackvibe-studio/cli

Interactive command line interface for scaffolding, configuring, and adding StackVibe UI components to React, Next.js, and Vite projects.

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

Initializes StackVibe UI inside your current working directory, installs core dependencies, and configures Tailwind CSS.

```bash
npx @stackvibe-studio/cli init
```

### `list`

Lists all 30 available components across Core UI, Motion, and 3D WebGL categories.

```bash
npx @stackvibe-studio/cli list
```

### `add <component>`

Adds a specific component and installs any necessary peer dependencies (`framer-motion`, `lucide-react`, `three`, etc.).

```bash
# Add Core UI Primitives
npx @stackvibe-studio/cli add dialog
npx @stackvibe-studio/cli add drawer
npx @stackvibe-studio/cli add toast
npx @stackvibe-studio/cli add dropdown-menu
npx @stackvibe-studio/cli add button
npx @stackvibe-studio/cli add accordion

# Add Motion Primitives
npx @stackvibe-studio/cli add magnetic
npx @stackvibe-studio/cli add marquee
npx @stackvibe-studio/cli add number-ticker
npx @stackvibe-studio/cli add tilt-card
npx @stackvibe-studio/cli add spotlight-card

# Add 3D Canvas Primitives
npx @stackvibe-studio/cli add wave-canvas
npx @stackvibe-studio/cli add glass-3d-card
npx @stackvibe-studio/cli add orb-cluster
```

## License

MIT © [StackVibe Studio](https://github.com/StackVibe-Studio/stackvibe-ui)
