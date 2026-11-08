# @stackvibe-studio/registry

Component metadata registry for StackVibe packages and automation workflows.

## Highlights

- Searchable component metadata across packages
- Works well with the CLI and docs registry flow
- Exposes component package mapping and tags
- Updated in v0.2.0 with tabs, skeleton, fade-in-section, and orb-cluster entries

## Install

```bash
npm install @stackvibe-studio/registry
```

## Example

```ts
import { getRegistryEntry } from '@stackvibe-studio/registry';

console.log(getRegistryEntry('button'));
```
