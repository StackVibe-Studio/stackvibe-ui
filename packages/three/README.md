# @stackvibe-studio/three

Product-grade 3D visual primitives, canvas environments, and WebGL components built with Three.js and React Three Fiber.

Designed for immersive hero sections, interactive landing page surfaces, and futuristic product cards with smooth 60fps animations.

[![npm version](https://img.shields.io/npm/v/@stackvibe-studio/three.svg)](https://www.npmjs.com/package/@stackvibe-studio/three)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Features

- **WaveCanvas**: WebGL undulating sinusoidal mesh and wave canvas with dynamic light physics.
- **Glass3DCard**: Glassmorphism-style 3D card wrapper with realistic specular reflection and tilt.
- **FloatingSphere**: Physics-based floating sphere with ambient lighting and rotation.
- **OrbCluster**: Multi-layered 3D orb cluster designed for ambient hero backgrounds.
- **Zero layout shift**: Fully responsive canvas containers with graceful fallback rendering.
- **Framework agnostic**: Works with Next.js (App Router & Pages Router), Vite, Remix, and Gatsby.

## Installation

```bash
pnpm add @stackvibe-studio/three three @react-three/fiber @react-three/drei
# or
npm install @stackvibe-studio/three three @react-three/fiber @react-three/drei
```

## Usage

### WaveCanvas (Hero Backgrounds)

```tsx
import { WaveCanvas } from '@stackvibe-studio/three';

export function HeroSection() {
  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-2xl bg-zinc-950">
      <WaveCanvas 
        wireframe={false} 
        speed={1.2} 
        color="#6366f1" 
        className="absolute inset-0" 
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-8">
        <h1 className="text-4xl font-bold text-white">Next-Gen Interface Canvas</h1>
        <p className="mt-2 text-zinc-400">Interactive 3D surfaces rendered in real-time WebGL.</p>
      </div>
    </div>
  );
}
```

### Glass3DCard & OrbCluster

```tsx
import { Glass3DCard, OrbCluster } from '@stackvibe-studio/three';

export function FeatureCard() {
  return (
    <div className="relative flex items-center justify-center p-12">
      <OrbCluster className="absolute inset-0 pointer-events-none opacity-60" />
      <Glass3DCard className="w-80 h-96 p-6">
        <h3 className="text-xl font-bold text-white">Pro Access</h3>
        <p className="text-zinc-400 mt-2">Enterprise-grade WebGL rendering primitives.</p>
      </Glass3DCard>
    </div>
  );
}
```

## Components Reference

| Component | Description | Props |
| :--- | :--- | :--- |
| `WaveCanvas` | Real-time undulating 3D sine-wave plane | `wireframe?: boolean`, `speed?: number`, `color?: string`, `className?: string` |
| `Glass3DCard` | 3D glass card with reflective lighting | `children?: ReactNode`, `className?: string` |
| `FloatingSphere` | Autonomous 3D floating orb with glow | `color?: string`, `wireframe?: boolean`, `className?: string` |
| `OrbCluster` | Ambient particle cluster with floating orbs | `count?: number`, `className?: string` |

## License

MIT © [StackVibe Studio](https://github.com/StackVibe-Studio/stackvibe-ui)
