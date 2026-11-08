# @stackvibe-studio/three

> Product-grade 3D visual primitives, canvas environments, and WebGL components built with Three.js and React Three Fiber.

Designed for immersive hero sections, interactive landing page surfaces, and futuristic product cards with smooth 60fps animations.

[![npm version](https://img.shields.io/npm/v/@stackvibe-studio/three.svg)](https://www.npmjs.com/package/@stackvibe-studio/three)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Features

- **`WaveCanvas`**: WebGL undulating sinusoidal mesh canvas with dynamic lighting, configurable amplitude, speed, roughness, and metalness.
- **`Glass3DCard`**: Glassmorphism-style 3D card wrapper with realistic specular reflection and tilt.
- **`FloatingSphere`**: Physics-based floating sphere with ambient lighting and rotation.
- **`OrbCluster`**: Multi-layered 3D orb cluster designed for ambient hero backgrounds.
- **Zero Layout Shift**: Fully responsive canvas containers with graceful fallback rendering.
- **Framework Agnostic**: Works seamlessly with Next.js (SSR safe), Vite, Remix, and React 19.

## Installation

```bash
pnpm add @stackvibe-studio/three three @react-three/fiber @react-three/drei
# or
npm install @stackvibe-studio/three three @react-three/fiber @react-three/drei
```

## Usage & Customization

### WaveCanvas

```tsx
import { WaveCanvas } from '@stackvibe-studio/three';

export function HeroBackground() {
  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-3xl bg-slate-950">
      <WaveCanvas
        speed={1.5}
        amplitude={0.4}
        color="#8b5cf6"
        roughness={0.2}
        metalness={0.7}
        wireframe={false}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-4xl font-bold text-white">Next Generation 3D UI</h1>
      </div>
    </div>
  );
}
```

### FloatingSphere & OrbCluster

```tsx
import { FloatingSphere, OrbCluster } from '@stackvibe-studio/three';

<div className="w-full h-80">
  <FloatingSphere color="#6366f1" size={1.5} />
</div>
```

## Documentation

- **Live Documentation**: [https://stackvibe-studio.github.io/stackvibe-ui/](https://stackvibe-studio.github.io/stackvibe-ui/)
- **WebGL Playground**: [https://stackvibe-studio.github.io/stackvibe-ui/playground/](https://stackvibe-studio.github.io/stackvibe-ui/playground/)

## License

MIT © [StackVibe Studio](https://github.com/StackVibe-Studio)
