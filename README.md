# StackVibe UI

StackVibe UI is a premium React component ecosystem for building expressive interfaces, fluid motion systems, and immersive 3D experiences without forcing heavy optional dependencies into the core UI package.

## Product vision

- Core UI for accessible, reusable 2D components
- Motion UI for interactive animation and advanced transitions
- 3D UI for immersive experiences using React Three Fiber
- Unified design tokens and configuration model
- Open-source-first foundation with premium extension potential

## Monorepo layout

- `apps/docs` — documentation experience and homepage
- `apps/playground` — visual component playground
- `packages/ui` — core component library
- `packages/motion` — motion primitives and animation utilities
- `packages/three` — 3D components and material presets
- `packages/themes` — design token presets and theme definitions
- `packages/registry` — component discovery metadata
- `packages/cli` — registry and install automation
- `examples/*` — starter apps for Next.js and Vite

## Quick start

```bash
pnpm install
pnpm dev
```

## Distribution model

```bash
npm install @stackvibe/ui
npm install @stackvibe/motion motion
npm install @stackvibe/3d three @react-three/fiber @react-three/drei
```

## Design principles

- Beautiful by default
- Customizable by design
- Accessibility-first interactions
- Independent optional packages
- Type-safe public APIs
- Performance aware rendering

## Mission

Design beyond the ordinary.
