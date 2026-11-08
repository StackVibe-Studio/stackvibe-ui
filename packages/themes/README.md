# @stackvibe-studio/themes

> Dynamic theme engine, design tokens, and presets for modern product-grade visual design systems.

Seamlessly switch between 11 curated aesthetic palettes or inject theme CSS custom properties dynamically at runtime into your application root.

[![npm version](https://img.shields.io/npm/v/@stackvibe-studio/themes.svg)](https://www.npmjs.com/package/@stackvibe-studio/themes)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Features

- **11 Curated Presets**:
  - `obsidian` (High contrast violet dark mode)
  - `cyberpunk-crimson` (Vibrant neon crimson & cyan)
  - `emerald-matrix` (Cyber green hacker aesthetic)
  - `aurora-borealis` (Teal & magenta glow)
  - `solar-flare` (Amber & orange radiance)
  - `synthwave` (Retro 80s neon purple & pink)
  - `midnight-blue` (Deep ocean blue)
  - `amethyst-haze` (Mystic lilac & orchid)
  - `tokyo-night` (Modern dark Japanese indigo)
  - `nordic-frost` (Clean icy blue minimalism)
  - `soft-minimal` (Refined neutral light/dark hybrid)
- **Complete Design Tokens**: Backgrounds, surfaces, borders, text hierarchies, primary brand accents, glow values, and border radiuses.
- **Runtime Theme Application**: Use `applyTheme(themeName)` to instantly apply tokens to `document.documentElement` with standard CSS variables (`--primary`, `--background`, `--surface`, `--radius`, `--glow`) and `data-theme` attribute.
- **CSS Variable Extraction**: Export ready-to-use CSS custom properties with `getThemeCSSVariables()`.
- **Zero Dependencies**: Pure TypeScript bundle with zero runtime dependencies.

## Installation

```bash
pnpm add @stackvibe-studio/themes
# or
npm install @stackvibe-studio/themes
```

## Usage

### Applying a Theme at Runtime

```tsx
import { applyTheme, themePresets, ThemeName } from '@stackvibe-studio/themes';

// Apply any of the 11 presets
applyTheme('cyberpunk-crimson');

// Interactive theme switcher in React
export function ThemeSwitcher() {
  return (
    <select onChange={(e) => applyTheme(e.target.value as ThemeName)}>
      {Object.keys(themePresets).map((name) => (
        <option key={name} value={name}>{name}</option>
      ))}
    </select>
  );
}
```

### Accessing Theme Tokens in Code

```ts
import { themePresets, getThemeCSSVariables } from '@stackvibe-studio/themes';

// Get raw token values
const obsidian = themePresets.obsidian;
console.log(obsidian.colors.primary); // #8b5cf6

// Get CSS Variables object for inline style or SSR injection
const cssVars = getThemeCSSVariables('amethyst-haze');
```

## Documentation

- **Live Documentation**: [https://stackvibe-studio.github.io/stackvibe-ui/](https://stackvibe-studio.github.io/stackvibe-ui/)
- **Interactive Theme Studio**: [https://stackvibe-studio.github.io/stackvibe-ui/playground/](https://stackvibe-studio.github.io/stackvibe-ui/playground/)

## License

MIT © [StackVibe Studio](https://github.com/StackVibe-Studio)
