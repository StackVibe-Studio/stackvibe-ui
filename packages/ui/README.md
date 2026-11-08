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
- **Accessible (WAI-ARIA)**: Full keyboard navigation, focus management, and screen-reader support.
- **Tailwind Native**: Styled with modular tokens and high-contrast dark theme defaults.
- **Tree-shakeable**: Dual ESM and CJS bundle exports with zero unnecessary dependencies.

## Usage

```tsx
import {
  Button,
  Dialog,
  DialogHeader,
  DialogTitle,
  toast,
  Toaster,
  Switch,
  Progress,
} from '@stackvibe-studio/ui';
import { useState } from 'react';

export function Example() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Toaster />
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Switch defaultChecked onCheckedChange={(val) => toast.info(`Toggled: ${val}`)} />
      <Progress value={80} variant="primary" showLabel />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogHeader>
          <DialogTitle>Modal Dialog</DialogTitle>
        </DialogHeader>
        <p>Dialog body content</p>
      </Dialog>
    </div>
  );
}
```

## Documentation

Full documentation, props specifications, and live examples:
[https://stackvibe-studio.github.io/stackvibe-ui/docs](https://stackvibe-studio.github.io/stackvibe-ui/docs)

## License

MIT © [StackVibe Studio](https://github.com/StackVibe-Studio)
