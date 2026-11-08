# @stackvibe-studio/themes

Dynamic theme engine, design tokens, and presets for product-grade visual design systems.

Seamlessly toggle between 11 curated aesthetic palettes or inject theme CSS variables dynamically at runtime into your application root.

[![npm version](https://img.shields.io/npm/v/@stackvibe-studio/themes.svg)](https://www.npmjs.com/package/@stackvibe-studio/themes)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Features

- **11 Curated Presets**: From high-contrast dark modes (`obsidian`, `tokyo-night`) to vibrant neons (`cyberpunk-crimson`, `neon-futuristic`) and clean minimalist layouts (`soft-minimal`, `nordic-frost`).
- **Complete Design Tokens**: Backgrounds, surfaces, borders, text hierarchies, primary brand accents, glow values, and border radiuses.
- **Runtime Theme Application**: Use `applyTheme(themeName)` to instantly apply tokens to `document.documentElement` or any React DOM container.
- **CSS Variable Extraction**: Export ready-to-use CSS custom properties with `getThemeCSSVariables()`.
- **Zero Dependencies**: Lightweight TypeScript bundle with zero external dependencies.

## Installation

```bash
pnpm add @stackvibe-studio/themes
# or
npm install @stackvibe-studio/themes
```

## Available Presets

1. `aurora` - Northern lights iridescent glow with vibrant blues and violets.
2. `obsidian` - Ultra-deep dark mode with sharp contrast and sleek zinc surfaces.
3. `holographic` - Iridescent rainbow highlights for Web3 and creative tools.
4. `soft-minimal` - Light, serene, clean enterprise aesthetic.
5. `neon-futuristic` - Electric cyan and neon green cyber palette.
6. `sunset-glow` - Warm amber, radiant peach, and deep sunset magenta.
7. `midnight-gold` - Luxurious gold accents against deep royal navy.
8. `cyberpunk-crimson` - Striking crimson red and high-voltage neon red on obsidian.
9. `emerald-matrix` - High-tech matrix terminal emerald green.
10. `nordic-frost` - Crisp arctic ice blue and slate minimalism.
11. `tokyo-night` - Rich deep indigo, lavender, and pastel neon accents.

## API & Usage

### 1. Apply Theme at Runtime

```tsx
import { useEffect } from 'react';
import { applyTheme } from '@stackvibe-studio/themes';

export function ThemeSelector({ activeTheme }: { activeTheme: string }) {
  useEffect(() => {
    applyTheme(activeTheme);
  }, [activeTheme]);

  return <div>Active theme: {activeTheme}</div>;
}
```

### 2. Inspect Palette Tokens

```ts
import { resolveTheme, listThemes } from '@stackvibe-studio/themes';

// List all 11 registered themes
const themes = listThemes();

// Resolve tokens for a specific theme
const theme = resolveTheme('tokyo-night');
console.log(theme.tokens.primary); // "#818cf8"
console.log(theme.tokens.surface); // "#1a1b26"
```

### 3. Extract CSS Variables

```ts
import { getThemeCSSVariables } from '@stackvibe-studio/themes';

const cssVars = getThemeCSSVariables('cyberpunk-crimson');
/*
{
  "--sv-bg": "#09090b",
  "--sv-surface": "#18181b",
  "--sv-surface-hover": "#27272a",
  "--sv-border": "#3f3f46",
  "--sv-text": "#fafafa",
  "--sv-text-muted": "#a1a1aa",
  "--sv-primary": "#f43f5e",
  "--sv-primary-hover": "#e11d48",
  "--sv-accent": "#fb7185",
  "--sv-glow": "0 0 32px rgba(244, 63, 94, 0.4)",
  "--sv-radius": "10px"
}
*/
```

## License

MIT © [StackVibe Studio](https://github.com/StackVibe-Studio/stackvibe-ui)
