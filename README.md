# StackVibe UI

<p align="center">
  <strong>Design beyond the ordinary. Build interfaces that captivate.</strong>
</p>

<p align="center">
  <a href="https://stackvibe-studio.github.io/stackvibe-ui/"><img src="https://img.shields.io/badge/Docs-Live-8b5cf6?style=for-the-badge&logo=vercel" alt="Documentation" /></a>
  <a href="https://stackvibe-studio.github.io/stackvibe-ui/playground/"><img src="https://img.shields.io/badge/Playground-Interactive-22d3ee?style=for-the-badge&logo=vite" alt="Playground" /></a>
  <a href="https://www.npmjs.com/package/@stackvibe-studio/ui"><img src="https://img.shields.io/npm/v/@stackvibe-studio/ui?style=for-the-badge&color=8b5cf6" alt="npm version" /></a>
  <a href="https://github.com/StackVibe-Studio/stackvibe-ui"><img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License" /></a>
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react" alt="React 19" /></a>
</p>

---

## 🚀 Overview

**StackVibe UI** is a modular design system and component ecosystem designed for high-performing product teams. It combines **accessible UI primitives**, **physics-based Framer Motion animations**, and **lightweight Three.js spatial depth** into an integrated monorepo.

### 🌐 Live Links

- **Documentation Website**: [https://stackvibe-studio.github.io/stackvibe-ui/](https://stackvibe-studio.github.io/stackvibe-ui/)
- **Interactive Playground**: [https://stackvibe-studio.github.io/stackvibe-ui/playground/](https://stackvibe-studio.github.io/stackvibe-ui/playground/)
- **npm Organization**: [https://www.npmjs.com/settings/stackvibe-studio/packages](https://www.npmjs.com/settings/stackvibe-studio/packages)
- **GitHub Repository**: [https://github.com/StackVibe-Studio/stackvibe-ui](https://github.com/StackVibe-Studio/stackvibe-ui)

---

## 📦 Packages in the Ecosystem

| Package | Version | Description |
|---|---|---|
| [`@stackvibe-studio/ui`](./packages/ui) | `v0.3.1` | 19+ Core accessible UI primitives (Buttons, Modals, Drawers, Tooltips, Toasts, Form controls). |
| [`@stackvibe-studio/motion`](./packages/motion) | `v0.3.1` | Motion and physics primitives (Magnetic, 3D TiltCard, NumberTicker, Marquee, Spotlight). |
| [`@stackvibe-studio/three`](./packages/three) | `v0.3.1` | 3D WebGL canvases (WaveCanvas, Glass3DCard, FloatingSphere, OrbCluster). |
| [`@stackvibe-studio/themes`](./packages/themes) | `v0.3.1` | 11 Theme presets (Aurora, Obsidian, Cyberpunk, Matrix, Tokyo Night) and token helpers. |
| [`@stackvibe-studio/registry`](./packages/registry) | `v0.3.1` | Comprehensive component metadata, tags, and dependency manifests. |
| [`@stackvibe-studio/cli`](./packages/cli) | `v0.3.1` | Developer CLI to scaffold and add components (`npx @stackvibe-studio/cli add <name>`). |

---

## ⚡ Quick Start

### 1. Install via npm / pnpm / yarn / bun

```bash
# Core UI primitives
npm install @stackvibe-studio/ui

# Optional motion and 3D extensions
npm install @stackvibe-studio/motion @stackvibe-studio/three @stackvibe-studio/themes
```

### 2. Basic Usage

```tsx
import { Button, Dialog, DialogHeader, DialogTitle, toast, Toaster } from '@stackvibe-studio/ui';
import { Magnetic, NumberTicker } from '@stackvibe-studio/motion';
import { useState } from 'react';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8">
      <Toaster />
      
      <Magnetic>
        <Button onClick={() => setOpen(true)}>
          Open Dialog (<NumberTicker value={100} suffix="%" />)
        </Button>
      </Magnetic>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogHeader>
          <DialogTitle>Production Ready</DialogTitle>
        </DialogHeader>
        <Button onClick={() => {
          setOpen(false);
          toast.success('Deployed to production!');
        }}>
          Confirm
        </Button>
      </Dialog>
    </div>
  );
}
```

---

## 🎨 11 Theme Presets

Easily switch themes at runtime using `@stackvibe-studio/themes`:

- **Aurora** (`#8b5cf6` violet glow)
- **Obsidian** (`#38bdf8` deep slate)
- **Holographic** (`#34d399` iridescent blue/green)
- **Soft Minimal** (`#7c3aed` light theme)
- **Neon Futuristic** (`#22d3ee` vibrant cyan/pink)
- **Sunset Glow** (`#fb7185` warm rose/amber)
- **Midnight Gold** (`#fbbf24` luxury gold)
- **Cyberpunk Crimson** (`#f43f5e` high-contrast crimson)
- **Emerald Matrix** (`#10b981` cybernetic green)
- **Nordic Frost** (`#38bdf8` icy arctic blue)
- **Tokyo Night** (`#7aa2f7` Japanese synthwave dark)

```typescript
import { applyTheme } from '@stackvibe-studio/themes';

// Switch theme dynamically on the client
applyTheme('tokyo-night');
```

---

## 🧩 Complete Component Catalog (30 Primitives)

### Core UI (`@stackvibe-studio/ui`)
- **Actions & Controls**: `Button`, `DropdownMenu`
- **Overlays & Dialogs**: `Dialog (Modal)`, `Drawer (Sheet)`, `Tooltip`
- **Form Primitives**: `Input`, `Textarea`, `Select`, `Checkbox`, `Switch`
- **Feedback & Status**: `Alert`, `Toast / Toaster`, `Progress`, `Skeleton`
- **Layout & Structure**: `Card`, `Tabs`, `Accordion`, `Avatar`, `Badge`

### Motion Systems (`@stackvibe-studio/motion`)
- `Magnetic`: Physics-based cursor attraction
- `TiltCard`: 3D perspective mouse tracking with specular glare
- `NumberTicker`: Smooth animated counter with cubic easing
- `Marquee`: Infinite looping ticker for partners and announcements
- `SpotlightCard`: Dynamic cursor-following radial spotlight illumination
- `FadeIn`: Scroll-aware element reveal wrapper
- `TextReveal`: Staggered typography entry animation

### 3D WebGL Canvases (`@stackvibe-studio/three`)
- `WaveCanvas`: Undulating sinusoidal mesh geometry responsive to time and light
- `Glass3DCard`: Transparent spatial glass surface with tilt physics
- `FloatingSphere`: Organic metallic sphere with distort oscillation
- `OrbCluster`: Layered floating orb scenes for hero sections

---

## 💻 Developer CLI

Scaffold components into your existing project in one command:

```bash
# Initialize StackVibe UI
npx @stackvibe-studio/cli init

# List available components
npx @stackvibe-studio/cli list

# Add specific components
npx @stackvibe-studio/cli add dialog
npx @stackvibe-studio/cli add tilt-card
npx @stackvibe-studio/cli add wave-canvas
```

---

## 🛠️ Monorepo Development

```bash
# Clone the repository
git clone https://github.com/StackVibe-Studio/stackvibe-ui.git
cd stackvibe-ui

# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run docs development server
pnpm dev

# Run tests
pnpm test
```

---

## 📄 License

MIT © [StackVibe Studio](https://github.com/StackVibe-Studio)
