# @stackvibe-studio/motion

> Physics-based motion, spring dynamics, and smooth interaction primitives for StackVibe UI, powered by Framer Motion.

[![npm version](https://img.shields.io/npm/v/@stackvibe-studio/motion.svg)](https://www.npmjs.com/package/@stackvibe-studio/motion)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

```bash
pnpm add @stackvibe-studio/motion motion
# or
npm install @stackvibe-studio/motion motion
```

## Primitives Included

- **`Magnetic`**: Physics-based cursor attraction that pulls buttons, avatars, or badges toward the pointer with configurable spring stiffness and damping.
- **`TiltCard`**: 3D perspective mouse-tracking tilt card with realistic specular glare reflection and customizable perspective depth.
- **`NumberTicker`**: Smooth animated counter from 0 to N with cubic easing for metric counters and SaaS KPIs.
- **`Marquee`**: Smooth infinite scrolling ticker for partners, logos, or news with pause-on-hover.
- **`SpotlightCard`**: Interactive card with dynamic radial cursor spotlight illumination.
- **`FadeIn`**: Scroll-aware reveal wrapper for onboarding sections and storytelling layouts.
- **`TextReveal`**: Typography entry animation for titles and headings.

## Usage & Customization

### Magnetic Attraction

```tsx
import { Magnetic } from '@stackvibe-studio/motion';
import { Button } from '@stackvibe-studio/ui';

// Custom spring physics
<Magnetic stiffness={200} damping={18} mass={0.5}>
  <Button variant="gradient" size="lg">Hover me</Button>
</Magnetic>
```

### 3D TiltCard with Dynamic Glare

```tsx
import { TiltCard } from '@stackvibe-studio/motion';

<TiltCard
  perspective={1000}
  scale={1.05}
  glareOpacity={0.25}
  glareColor="rgba(168, 85, 247, 0.4)"
  speed={500}
  className="p-8 rounded-2xl bg-slate-900 border border-slate-800"
>
  <h3 className="text-xl font-bold text-white">Interactive 3D Card</h3>
  <p className="text-slate-400 mt-2">Smoothly tracks cursor coordinates with real-time glare highlights.</p>
</TiltCard>
```

### NumberTicker

```tsx
import { NumberTicker } from '@stackvibe-studio/motion';

<div className="text-4xl font-extrabold text-violet-400">
  <NumberTicker value={125000} duration={2} />+
</div>
```

### Marquee Ticker

```tsx
import { Marquee } from '@stackvibe-studio/motion';

<Marquee speed={40} pauseOnHover gap="2rem">
  <span className="text-slate-400">Next.js 15</span>
  <span className="text-slate-400">React 19</span>
  <span className="text-slate-400">Tailwind CSS v4</span>
  <span className="text-slate-400">Three.js</span>
  <span className="text-slate-400">Framer Motion</span>
</Marquee>
```

## Documentation

- **Live Documentation**: [https://stackvibe-studio.github.io/stackvibe-ui/](https://stackvibe-studio.github.io/stackvibe-ui/)
- **Motion Sandbox**: [https://stackvibe-studio.github.io/stackvibe-ui/playground/](https://stackvibe-studio.github.io/stackvibe-ui/playground/)

## License

MIT © [StackVibe Studio](https://github.com/StackVibe-Studio)
