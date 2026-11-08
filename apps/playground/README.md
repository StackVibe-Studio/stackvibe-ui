# @stackvibe-studio/playground

Live interactive sandbox and testing suite for StackVibe UI components, motion physics, and WebGL canvases.

## Architecture

- **Bundler**: Vite 6
- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Theme Engine**: Dynamic runtime switching across all 11 `@stackvibe-studio/themes` presets.
- **Hosting**: GitHub Pages under `/stackvibe-ui/playground/`.

## Development

```bash
# From workspace root
pnpm --filter @stackvibe-studio/playground dev

# Or directly in this directory
pnpm dev
```

Visit [http://localhost:5173](http://localhost:5173) to run the interactive sandbox.

## Production Build

```bash
pnpm build
```

Generates optimized production assets in `dist/`, hosted at [https://stackvibe-studio.github.io/stackvibe-ui/playground/](https://stackvibe-studio.github.io/stackvibe-ui/playground/).
