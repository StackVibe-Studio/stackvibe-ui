# @stackvibe-studio/ui

> Core accessible UI component library for StackVibe UI. Built for React 19, Tailwind CSS v4, and modern design systems.

[![npm version](https://img.shields.io/npm/v/@stackvibe-studio/ui.svg)](https://www.npmjs.com/package/@stackvibe-studio/ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

```bash
npm install @stackvibe-studio/ui
# or
pnpm add @stackvibe-studio/ui
```

## Features

- **19+ Production Primitives**: Dialog, Drawer, Tooltip, Accordion, Switch, Progress, Toast, DropdownMenu, Button, Input, Textarea, Select, Checkbox, Card, Alert, Badge, Avatar, Skeleton, Tabs.
- **Accessible & Robust (WAI-ARIA)**: Full keyboard navigation, ARIA attributes, focus trapping, and screen-reader announcements.
- **Portaled Modals & Overlays**: `Dialog`, `Drawer`, and `Toaster` render into `document.body` via React Portals, completely eliminating CSS `transform` clipping and ancestor stacking context bugs.
- **Comprehensive Customization**: Variants (`primary`, `secondary`, `outline`, `ghost`, `destructive`, `glass`, `gradient`), sizes (`xs` to `xl`), border radii (`none` to `full`), loading indicators, and icon slots across all primitives.
- **Tailwind Native & CSS Tokens**: Works seamlessly with Tailwind CSS v4 and dynamic CSS variables (`var(--primary)`, `var(--radius)`).
- **Tree-shakeable**: Dual ESM and CJS bundle exports with zero unnecessary dependencies.

## Key Component Customizations

### Button

```tsx
import { Button } from '@stackvibe-studio/ui';

// Variants: primary | secondary | outline | ghost | destructive | glass | gradient
// Sizes: xs | sm | md | lg | xl
// Radius: none | sm | md | lg | xl | full
<Button variant="gradient" size="lg" radius="full">
  Explore Components
</Button>

// Loading State & Icons
<Button
  loading
  loadingText="Saving..."
  variant="primary"
  size="md"
>
  Save Changes
</Button>
```

### Dialog (Portaled to `document.body`)

`Dialog` automatically mounts overlays via React Portals to ensure modals are never clipped by parent containers with `transform`, `filter`, or `overflow: hidden`.

```tsx
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Button
} from '@stackvibe-studio/ui';
import { useState } from 'react';

export function ModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>

      <Dialog open={open} onOpenChange={setOpen} size="md">
        <DialogHeader>
          <DialogTitle>Account Settings</DialogTitle>
          <DialogDescription>
            Update your profile preferences and security credentials.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <p className="text-slate-300">Dialog content inside isolated portal overlay.</p>
        </div>

        <DialogFooter>
          <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="primary" onClick={() => setOpen(false)}>Save</Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
```

### Toast & Toaster

```tsx
import { Toaster, toast, Button } from '@stackvibe-studio/ui';

export function ToastDemo() {
  return (
    <>
      {/* Position: top-left | top-center | top-right | bottom-left | bottom-center | bottom-right */}
      <Toaster position="bottom-right" />

      <Button onClick={() => toast.success('Changes saved successfully!')}>
        Success Toast
      </Button>
      <Button onClick={() => toast.error('Payment failed. Please retry.')}>
        Error Toast
      </Button>
    </>
  );
}
```

### Badge & Progress

```tsx
import { Badge, Progress } from '@stackvibe-studio/ui';

// Badge with status dot and custom variant
<Badge variant="success" dot size="md">Active</Badge>
<Badge variant="warning" size="sm">Beta</Badge>
<Badge variant="glass" radius="full">v0.3.2</Badge>

// Animated & Striped Progress Bar
<Progress value={75} variant="gradient" striped animated showLabel size="md" />
```

### Card & Form Controls

```tsx
import { Card, Input, Textarea, Select, Switch } from '@stackvibe-studio/ui';

<Card variant="glass" glow padding="lg" radius="2xl">
  <Input
    label="Email Address"
    placeholder="you@domain.com"
    variant="default"
    error="Please enter a valid email"
  />
  <Select
    label="Region"
    options={[
      { label: 'North America', value: 'na' },
      { label: 'Europe', value: 'eu' },
      { label: 'Asia Pacific', value: 'apac' },
    ]}
  />
  <Switch label="Enable notifications" defaultChecked />
</Card>
```

## Documentation & Live Showcase

- **Live Documentation**: [https://stackvibe-studio.github.io/stackvibe-ui/](https://stackvibe-studio.github.io/stackvibe-ui/)
- **Interactive Playground**: [https://stackvibe-studio.github.io/stackvibe-ui/playground/](https://stackvibe-studio.github.io/stackvibe-ui/playground/)
- **Components Gallery**: [https://stackvibe-studio.github.io/stackvibe-ui/docs/components/](https://stackvibe-studio.github.io/stackvibe-ui/docs/components/)

## License

MIT © [StackVibe Studio](https://github.com/StackVibe-Studio)
