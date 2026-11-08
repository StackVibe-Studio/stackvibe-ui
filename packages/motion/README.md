# @stackvibe-studio/motion

> Physics-based motion and animation primitives for StackVibe UI, powered by Framer Motion.

[![npm version](https://img.shields.io/npm/v/@stackvibe-studio/motion.svg)](https://www.npmjs.com/package/@stackvibe-studio/motion)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

```bash
npm install @stackvibe-studio/motion framer-motion
# or
pnpm add @stackvibe-studio/motion framer-motion
```

## Primitives Included

- **`Magnetic`**: Physics-based cursor attraction that pulls buttons or badges toward the pointer.
- **`TiltCard`**: 3D perspective mouse-tracking tilt card with realistic specular glare reflection.
- **`NumberTicker`**: Smooth animated counter from 0 to N with cubic easing for metric showcases.
- **`Marquee`**: Infinite looping ticker for partners, logos, or news with pause-on-hover.
- **`SpotlightCard`**: Interactive card with dynamic radial cursor spotlight illumination.
- **`FadeIn`**: Scroll-aware reveal wrapper for onboarding sections and storytelling layouts.
- **`TextReveal`**: Typography entry animation for titles and headings.

## Usage

```tsx
import { Magnetic, TiltCard, NumberTicker, Marquee } from '@stackvibe-studio/motion';
import { Button } from '@stackvibe-studio/ui';

export function MotionDemo() {
  return (
    <div className="space-y-6">
      <Magnetic strength={0.4}>
        <Button size="lg">Magnetic Button</Button>
      </Magnetic>

      <TiltCard maxTilt={15} glare>
        <h3>3D Tilt Surface</h3>
        <p>Interactive mouse perspective.</p>
      </TiltCard>

      <div className="text-3xl font-bold">
        <NumberTicker value={25000} prefix="$" suffix=" ARR" />
      </div>

      <Marquee speed={20}>
        <span>Item 1</span>
        <span>Item 2</span>
        <span>Item 3</span>
      </Marquee>
    </div>
  );
}
```

## Documentation

[https://stackvibe-studio.github.io/stackvibe-ui/docs](https://stackvibe-studio.github.io/stackvibe-ui/docs)

## License

MIT © [StackVibe Studio](https://github.com/StackVibe-Studio)
