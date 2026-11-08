# @stackvibe-studio/registry

> Centralized component metadata registry and catalog indexing all 30 StackVibe UI components across Core UI, Motion, and 3D WebGL packages.

Powering the CLI (`stackvibe add`), documentation search, and automated component discovery workflows.

[![npm version](https://img.shields.io/npm/v/@stackvibe-studio/registry.svg)](https://www.npmjs.com/package/@stackvibe-studio/registry)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Features

- **30 Indexed Components**: Full coverage of UI primitives, animations, physics, and WebGL canvases.
- **Categorized Taxonomy**: `core`, `motion`, `3d`, and `theme`.
- **Dependency Resolution**: Automatically maps required peer dependencies (e.g., `motion`, `three`, `@react-three/fiber`).
- **Tag Search**: Searchable by design system keywords (e.g. `dialog`, `modal`, `spring`, `ticker`, `matrix`).

## Installation

```bash
pnpm add @stackvibe-studio/registry
# or
npm install @stackvibe-studio/registry
```

## Usage

```ts
import { componentRegistry, RegistryComponent } from '@stackvibe-studio/registry';

// Search by tag or name
const dialogMeta = componentRegistry.find((c) => c.name === 'dialog');
console.log(dialogMeta?.packageName); // '@stackvibe-studio/ui'

// Filter by category
const motionComponents = componentRegistry.filter((c) => c.category === 'motion');
```

## Documentation

- **Live Documentation**: [https://stackvibe-studio.github.io/stackvibe-ui/](https://stackvibe-studio.github.io/stackvibe-ui/)

## License

MIT © [StackVibe Studio](https://github.com/StackVibe-Studio)
