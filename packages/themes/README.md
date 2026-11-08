# @stackvibe-studio/themes

Theme tokens and presets for product-grade visual systems.

## Highlights

- Ready-to-use palettes for product surfaces
- Shared token model for color, radius, and glow values
- Easy runtime access via resolveTheme and listThemes
- New in v0.2.0: sunset-glow and midnight-gold presets

## Install

```bash
npm install @stackvibe-studio/themes
```

## Example

```ts
import { resolveTheme, listThemes } from '@stackvibe-studio/themes';

const palette = resolveTheme('aurora');
console.log(listThemes());
```

## Available themes

- aurora
- obsidian
- holographic
- soft-minimal
- neon-futuristic
- sunset-glow
- midnight-gold
