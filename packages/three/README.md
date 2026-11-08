# @stackvibe-studio/three

3D visual primitives for hero sections, product cards, and immersive surfaces.

## Highlights

- Glassmorphism-style 3D card wrapper
- Floating sphere and orb cluster patterns
- React Three Fiber powered with lightweight presets
- New in v0.2.0: OrbCluster for layered hero artwork

## Install

```bash
npm install @stackvibe-studio/three three @react-three/fiber @react-three/drei
```

## Example

```tsx
import { Glass3DCard, OrbCluster } from '@stackvibe-studio/three';

export function Example() {
  return (
    <div>
      <Glass3DCard className="h-80" />
      <OrbCluster />
    </div>
  );
}
```

## Related packages

- @stackvibe-studio/ui
- @stackvibe-studio/motion
