# @stackvibe-studio/registry

Centralized component metadata registry and catalog indexing all 30 StackVibe UI components across Core UI, Motion, and 3D WebGL packages.

Powering the CLI (`stackvibe add`), documentation search, and automated component discovery workflows.

[![npm version](https://img.shields.io/npm/v/@stackvibe-studio/registry.svg)](https://www.npmjs.com/package/@stackvibe-studio/registry)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Features

- **30 Indexed Components**: Full coverage of UI primitives, animations, physics, and WebGL canvases.
- **Categorized Taxonomy**: `core-ui`, `motion`, and `three`.
- **Dependency Resolution**: Automatically maps required peer dependencies (e.g., `framer-motion`, `three`, `@react-three/fiber`).
- **Tag Search**: Searchable by design system keywords (e.g. `dialog`, `modal`, `spring`, `ticker`, `matrix`).

## Installation

```bash
pnpm add @stackvibe-studio/registry
# or
npm install @stackvibe-studio/registry
```

## Usage

```ts
import { 
  getRegistryEntry, 
  listRegistryEntries, 
  getRegistryEntriesByCategory 
} from '@stackvibe-studio/registry';

// Get metadata for a single component
const dialog = getRegistryEntry('dialog');
console.log(dialog);
/*
{
  name: 'dialog',
  package: '@stackvibe-studio/ui',
  category: 'core-ui',
  description: 'Accessible modal dialog with backdrop blur...',
  dependencies: ['lucide-react'],
  tags: ['modal', 'dialog', 'overlay', 'popup', 'window']
}
*/

// List all motion components
const motionComponents = getRegistryEntriesByCategory('motion');

// List all registered components
const allComponents = listRegistryEntries();
```

## Schema

```ts
export interface RegistryEntry {
  name: string;
  package: '@stackvibe-studio/ui' | '@stackvibe-studio/motion' | '@stackvibe-studio/three';
  category: 'core-ui' | 'motion' | 'three';
  description: string;
  dependencies: string[];
  tags: string[];
}
```

## License

MIT © [StackVibe Studio](https://github.com/StackVibe-Studio/stackvibe-ui)
