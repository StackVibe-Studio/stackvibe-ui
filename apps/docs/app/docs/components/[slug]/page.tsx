import { notFound } from 'next/navigation';
import {
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Input,
  Select,
  Skeleton,
  Tabs,
  Textarea,
} from '@stackvibe-studio/ui';
import { toSiteHref } from '../../../../lib/site';
import { DocsShell } from '../../../../components/docs-shell';

const componentRegistry = {
  button: {
    title: 'Button',
    description: 'Action-focused controls for launches, navigation, and CTA moments across product surfaces.',
    props: ['variant', 'size', 'as', 'href', 'type', 'disabled', 'className'],
    preview: (
      <div className="flex flex-wrap gap-3">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    ),
    code: `import { Button } from '@stackvibe-studio/ui';

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>

// As link
<Button as="a" href="/docs">Link Button</Button>`,
  },
  input: {
    title: 'Input',
    description: 'Clean text entry with strong contrast, accessible focus rings, and flexible field sizing.',
    props: ['placeholder', 'value', 'onChange', 'disabled', 'type', 'className'],
    preview: (
      <div className="max-w-md space-y-3">
        <Input placeholder="Workspace name..." />
        <Input type="email" placeholder="you@company.com" />
      </div>
    ),
    code: `import { Input } from '@stackvibe-studio/ui';

<Input placeholder="Workspace name..." />
<Input type="email" placeholder="you@company.com" />`,
  },
  textarea: {
    title: 'Textarea',
    description: 'Multi-line input fields suited for notes, product briefs, and long-form form content.',
    props: ['rows', 'placeholder', 'value', 'onChange', 'disabled', 'className'],
    preview: <Textarea rows={4} placeholder="Describe the design system goals or product requirements..." />,
    code: `import { Textarea } from '@stackvibe-studio/ui';

<Textarea rows={4} placeholder="Describe the product requirements..." />`,
  },
  select: {
    title: 'Select',
    description: 'Dropdown selection menu with dark mode styling and accessible options.',
    props: ['defaultValue', 'value', 'onChange', 'disabled', 'className'],
    preview: (
      <div className="max-w-sm">
        <Select defaultValue="pro">
          <option value="starter">Starter Plan</option>
          <option value="pro">Professional Plan</option>
          <option value="scale">Scale Plan</option>
          <option value="enterprise">Enterprise Plan</option>
        </Select>
      </div>
    ),
    code: `import { Select } from '@stackvibe-studio/ui';

<Select defaultValue="pro">
  <option value="starter">Starter Plan</option>
  <option value="pro">Professional Plan</option>
  <option value="scale">Scale Plan</option>
</Select>`,
  },
  checkbox: {
    title: 'Checkbox',
    description: 'Accessible toggle control designed for settings, lists, and multi-select filters.',
    props: ['checked', 'defaultChecked', 'onChange', 'disabled', 'className'],
    preview: (
      <div className="space-y-3">
        <label className="flex items-center gap-3 text-sm text-slate-200 cursor-pointer">
          <Checkbox defaultChecked />
          <span>Enable real-time design tokens</span>
        </label>
        <label className="flex items-center gap-3 text-sm text-slate-200 cursor-pointer">
          <Checkbox defaultChecked />
          <span>Notify on preview builds</span>
        </label>
        <label className="flex items-center gap-3 text-sm text-slate-400 cursor-not-allowed">
          <Checkbox disabled />
          <span>Auto-publish to registry (Enterprise)</span>
        </label>
      </div>
    ),
    code: `import { Checkbox } from '@stackvibe-studio/ui';

<label className="flex items-center gap-3 text-sm">
  <Checkbox defaultChecked />
  <span>Enable real-time tokens</span>
</label>`,
  },
  card: {
    title: 'Card',
    description: 'Layout shells for marketing blocks, form groups, dashboards, and content containers.',
    props: ['className', 'children'],
    preview: (
      <Card className="max-w-md bg-slate-900/90 p-6 border-white/10">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.24em] text-violet-300">Surface</span>
          <Badge variant="primary">Active</Badge>
        </div>
        <h3 className="mt-3 text-xl font-semibold text-white">Production Card</h3>
        <p className="mt-2 text-sm text-slate-300 leading-relaxed">
          Cards provide structural containment with backdrop blur and sleek borders.
        </p>
      </Card>
    ),
    code: `import { Card, Badge } from '@stackvibe-studio/ui';

<Card className="p-6">
  <h3>Card Title</h3>
  <p>Structured surface content.</p>
</Card>`,
  },
  alert: {
    title: 'Alert',
    description: 'Status messaging for confirmation states, warnings, and informative product feedback.',
    props: ['title', 'variant', 'children', 'className'],
    preview: (
      <div className="space-y-3 max-w-xl">
        <Alert title="Deployment ready" variant="success">
          Your workspace is ready to ship with zero warnings.
        </Alert>
        <Alert title="Token update available" variant="info">
          A newer version of your theme preset is ready for sync.
        </Alert>
      </div>
    ),
    code: `import { Alert } from '@stackvibe-studio/ui';

<Alert title="Deployment ready" variant="success">
  Your workspace is ready to ship with zero warnings.
</Alert>`,
  },
  badge: {
    title: 'Badge',
    description: 'Compact metadata markers for status, labels, and quick product context.',
    props: ['variant', 'children', 'className'],
    preview: (
      <div className="flex flex-wrap items-center gap-3">
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    ),
    code: `import { Badge } from '@stackvibe-studio/ui';

<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>`,
  },
  avatar: {
    title: 'Avatar',
    description: 'User and entity profile visuals with fallback initials and multiple size presets.',
    props: ['src', 'alt', 'fallback', 'size', 'className'],
    preview: (
      <div className="flex items-center gap-5">
        <Avatar fallback="SM" size="sm" />
        <Avatar fallback="SV" size="md" />
        <Avatar fallback="LG" size="lg" />
      </div>
    ),
    code: `import { Avatar } from '@stackvibe-studio/ui';

<Avatar fallback="SV" size="sm" />
<Avatar fallback="SV" size="md" />
<Avatar fallback="SV" size="lg" />`,
  },
  skeleton: {
    title: 'Skeleton',
    description: 'Loading placeholder with smooth pulse animation to reduce perceived load time.',
    props: ['rounded', 'className'],
    preview: (
      <div className="w-full max-w-md space-y-3 rounded-2xl border border-white/10 bg-slate-950/60 p-5">
        <div className="flex items-center gap-3">
          <Skeleton rounded="full" className="h-10 w-10 shrink-0" />
          <div className="space-y-2 flex-1">
            <Skeleton rounded="md" className="h-4 w-3/4" />
            <Skeleton rounded="md" className="h-3 w-1/2" />
          </div>
        </div>
        <Skeleton rounded="lg" className="h-16 w-full" />
      </div>
    ),
    code: `import { Skeleton } from '@stackvibe-studio/ui';

<Skeleton rounded="full" className="h-10 w-10" />
<Skeleton rounded="md" className="h-4 w-3/4" />
<Skeleton rounded="lg" className="h-24 w-full" />`,
  },
  tabs: {
    title: 'Tabs',
    description: 'Segmented navigation to switch between views and content sections effortlessly.',
    props: ['items', 'defaultTab', 'className'],
    preview: (
      <Tabs
        items={[
          {
            id: 'design',
            label: 'Design Tokens',
            content: (
              <p className="text-sm text-slate-300">
                Tokens control colors, radii, spacing, and glowing gradients across themes.
              </p>
            ),
          },
          {
            id: 'motion',
            label: 'Motion Layer',
            content: (
              <p className="text-sm text-slate-300">
                Smooth transitions with hardware-accelerated Framer Motion integration.
              </p>
            ),
          },
          {
            id: 'three',
            label: '3D Canvas',
            content: (
              <p className="text-sm text-slate-300">
                Lightweight Three.js scenes and interactive floating geometry.
              </p>
            ),
          },
        ]}
      />
    ),
    code: `import { Tabs } from '@stackvibe-studio/ui';

<Tabs
  items={[
    { id: 'tab1', label: 'Overview', content: <div>Overview Content</div> },
    { id: 'tab2', label: 'Settings', content: <div>Settings Content</div> },
  ]}
/>`,
  },
} as const;

export function generateStaticParams() {
  return Object.keys(componentRegistry).map((slug) => ({ slug }));
}

export default async function ComponentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const component = componentRegistry[slug as keyof typeof componentRegistry];

  if (!component) {
    notFound();
  }

  return (
    <DocsShell title={component.title} description={component.description}>
      <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <Card className="bg-slate-900/80 p-6 border-white/10 shadow-lg">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <p className="text-xs uppercase tracking-[0.24em] font-semibold text-violet-300">
              Interactive Preview
            </p>
            <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-400 ring-1 ring-emerald-500/20">
              Live
            </span>
          </div>
          <div className="min-h-[140px] flex items-center justify-center rounded-2xl border border-white/5 bg-slate-950/50 p-6">
            {component.preview}
          </div>
        </Card>

        <Card className="bg-slate-900/80 p-6 border-white/10 shadow-lg">
          <div className="border-b border-white/10 pb-4 mb-4">
            <p className="text-xs uppercase tracking-[0.24em] font-semibold text-cyan-300">
              Component Props
            </p>
          </div>
          <ul className="space-y-2 text-sm text-slate-200">
            {component.props.map((prop) => (
              <li
                key={prop}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/60 px-3.5 py-2 font-mono text-xs text-violet-300"
              >
                <span>{prop}</span>
                <span className="text-[10px] text-slate-400 font-sans">prop</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-lg">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
          <p className="text-xs uppercase tracking-[0.24em] font-semibold text-violet-300">
            Code Example
          </p>
          <span className="text-xs font-mono text-slate-400">TypeScript / JSX</span>
        </div>
        <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-950 p-5 text-sm text-slate-200 font-mono leading-relaxed">
          {component.code}
        </pre>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
        <Button as="a" href={toSiteHref('/docs/components')} variant="outline" size="md">
          ← Back to gallery
        </Button>
        <Button as="a" href={toSiteHref('/docs')} variant="secondary" size="md">
          Docs overview →
        </Button>
      </div>
    </DocsShell>
  );
}
