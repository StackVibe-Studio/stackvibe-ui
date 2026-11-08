# @stackvibe-studio/ui

Core React component library for product teams building premium SaaS experiences.

## Highlights

- Accessible defaults for forms, cards, alerts, and calls to action
- Flexible primitives with utility-friendly props
- Tailwind-ready styling with a compact design language
- New additions in v0.2.0: Tabs and Skeleton loaders

## Install

```bash
npm install @stackvibe-studio/ui
```

## Included components

- Button
- Badge
- Card
- Input
- Textarea
- Select
- Checkbox
- Alert
- Avatar
- Tabs
- Skeleton

## Example

```tsx
import { Button, Card, Tabs } from '@stackvibe-studio/ui';

export function Example() {
  return (
    <Card className="p-5">
      <Tabs
        items={[
          { id: 'overview', label: 'Overview', content: 'Overview content' },
          { id: 'activity', label: 'Activity', content: 'Activity content' },
        ]}
      />
      <Button className="mt-4">Launch</Button>
    </Card>
  );
}
```

## Documentation

- Docs: https://stackvibe-studio.github.io/stackvibe-ui/
- Playground: https://stackvibe-studio.github.io/stackvibe-ui/playground/
