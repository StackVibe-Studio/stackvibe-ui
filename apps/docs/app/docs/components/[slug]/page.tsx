import { notFound } from 'next/navigation';
import {
  Accordion,
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DropdownMenu,
  Input,
  Progress,
  Select,
  Skeleton,
  Switch,
  Tabs,
  Textarea,
  Tooltip,
} from '@stackvibe-studio/ui';
import { Magnetic, Marquee, NumberTicker, TiltCard } from '@stackvibe-studio/motion';
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

<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button as="a" href="/docs">Link Button</Button>`,
  },
  input: {
    title: 'Input',
    description: 'Clean text entry with strong contrast, accessible focus rings, and flexible field sizing.',
    props: ['placeholder', 'value', 'onChange', 'disabled', 'type', 'className'],
    preview: (
      <div className="max-w-md w-full space-y-3">
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
    preview: <Textarea rows={3} placeholder="Describe the product requirements..." className="w-full max-w-md" />,
    code: `import { Textarea } from '@stackvibe-studio/ui';

<Textarea rows={4} placeholder="Describe the design system goals..." />`,
  },
  select: {
    title: 'Select',
    description: 'Dropdown selection menu with dark mode styling and accessible options.',
    props: ['defaultValue', 'value', 'onChange', 'disabled', 'className'],
    preview: (
      <div className="max-w-xs w-full">
        <Select defaultValue="pro">
          <option value="starter">Starter Plan (Free)</option>
          <option value="pro">Pro Plan ($29/mo)</option>
          <option value="scale">Scale Plan ($99/mo)</option>
        </Select>
      </div>
    ),
    code: `import { Select } from '@stackvibe-studio/ui';

<Select defaultValue="pro">
  <option value="starter">Starter Plan</option>
  <option value="pro">Pro Plan</option>
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
      </div>
    ),
    code: `import { Checkbox } from '@stackvibe-studio/ui';

<label className="flex items-center gap-2">
  <Checkbox defaultChecked />
  <span>Enable design tokens</span>
</label>`,
  },
  switch: {
    title: 'Switch',
    description: 'Modern sliding toggle switch for boolean settings and fast preference changes.',
    props: ['checked', 'defaultChecked', 'onCheckedChange', 'disabled', 'className'],
    preview: (
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <Switch defaultChecked id="s1" />
          <span className="text-sm text-slate-200">Hardware Accel</span>
        </div>
        <div className="flex items-center gap-3">
          <Switch defaultChecked={false} id="s2" />
          <span className="text-sm text-slate-400">Dark Mode</span>
        </div>
      </div>
    ),
    code: `import { Switch } from '@stackvibe-studio/ui';

<div className="flex items-center gap-3">
  <Switch defaultChecked onCheckedChange={(val) => console.log(val)} />
  <span>Auto Sync</span>
</div>`,
  },
  card: {
    title: 'Card',
    description: 'Layout shells for marketing blocks, form groups, dashboards, and content containers.',
    props: ['className', 'children'],
    preview: (
      <Card className="max-w-md bg-slate-900/90 p-6 border-white/10 shadow-lg">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.24em] text-violet-300">Surface</span>
          <Badge variant="primary">Active</Badge>
        </div>
        <h3 className="mt-3 text-lg font-bold text-white">Production Container</h3>
        <p className="mt-2 text-sm text-slate-300">
          Provides structural containment with backdrop blur and sleek borders.
        </p>
      </Card>
    ),
    code: `import { Card } from '@stackvibe-studio/ui';

<Card className="p-6">
  <h3>Card Title</h3>
  <p>Content goes here.</p>
</Card>`,
  },
  dialog: {
    title: 'Dialog (Modal)',
    description: 'Accessible modal dialog with overlay backdrop blur, escape key handling, and headers.',
    props: ['open', 'onOpenChange', 'children', 'className'],
    preview: (
      <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6 max-w-md w-full space-y-3">
        <DialogHeader>
          <DialogTitle>Deploy to Production</DialogTitle>
          <DialogDescription>
            This action will publish all changes live to your global CDN distribution.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button size="sm">Confirm & Deploy</Button>
        </DialogFooter>
      </div>
    ),
    code: `import { useState } from 'react';
import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogFooter, Button } from '@stackvibe-studio/ui';

export function Example() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogHeader>
          <DialogTitle>Confirm Action</DialogTitle>
          <DialogDescription>Are you sure you want to proceed?</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Confirm</Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}`,
  },
  drawer: {
    title: 'Drawer (Sheet)',
    description: 'Slide-out contextual panel from left, right, or bottom with smooth animation.',
    props: ['open', 'onOpenChange', 'position', 'children', 'className'],
    preview: (
      <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6 max-w-md w-full space-y-2">
        <DrawerHeader>
          <DrawerTitle>Configuration Sheet</DrawerTitle>
        </DrawerHeader>
        <p className="text-xs text-slate-300">Slide-out sheet configured with position=&quot;right&quot;.</p>
        <div className="pt-2 flex gap-2">
          <Button size="sm">Save Settings</Button>
        </div>
      </div>
    ),
    code: `import { useState } from 'react';
import { Drawer, DrawerHeader, DrawerTitle, Button } from '@stackvibe-studio/ui';

export function Example() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer open={open} onOpenChange={setOpen} position="right">
        <DrawerHeader>
          <DrawerTitle>Workspace Settings</DrawerTitle>
        </DrawerHeader>
        <p>Edit workspace details here.</p>
      </Drawer>
    </>
  );
}`,
  },
  tooltip: {
    title: 'Tooltip',
    description: 'Hover/focus floating tooltip with arrow and directional positioning.',
    props: ['content', 'children', 'side', 'className'],
    preview: (
      <div className="flex gap-4">
        <Tooltip content="Quick documentation shortcut" side="top">
          <Button variant="outline" size="sm">Hover Me (Top)</Button>
        </Tooltip>
        <Tooltip content="Verified package checksum" side="bottom">
          <Badge variant="primary">Hover Me (Bottom)</Badge>
        </Tooltip>
      </div>
    ),
    code: `import { Tooltip, Button } from '@stackvibe-studio/ui';

<Tooltip content="Copy command to clipboard" side="top">
  <Button size="sm">Copy</Button>
</Tooltip>`,
  },
  accordion: {
    title: 'Accordion',
    description: 'Collapsible accordion panels with smooth rotation and single or multi-expand modes.',
    props: ['items', 'type', 'defaultOpen', 'className'],
    preview: (
      <div className="w-full max-w-md">
        <Accordion
          items={[
            { id: '1', title: 'What is StackVibe UI?', content: 'A modern design system with motion and 3D extensions.' },
            { id: '2', title: 'Is it React 19 compatible?', content: 'Yes, fully compatible with React 19 and Next.js 15 App Router.' },
          ]}
          defaultOpen={['1']}
        />
      </div>
    ),
    code: `import { Accordion } from '@stackvibe-studio/ui';

<Accordion
  items={[
    { id: 'q1', title: 'How to install?', content: 'Run npm install @stackvibe-studio/ui' },
    { id: 'q2', title: 'TypeScript ready?', content: 'Yes, 100% strictly typed.' },
  ]}
  type="single"
/>`,
  },
  progress: {
    title: 'Progress',
    description: 'Linear progress bar with gradient fills, percentage display, and multiple color tones.',
    props: ['value', 'max', 'variant', 'showLabel', 'className'],
    preview: (
      <div className="w-full max-w-md space-y-4">
        <Progress value={78} variant="primary" showLabel />
        <Progress value={92} variant="success" />
        <Progress value={45} variant="secondary" />
      </div>
    ),
    code: `import { Progress } from '@stackvibe-studio/ui';

<Progress value={75} variant="primary" showLabel />
<Progress value={90} variant="success" />`,
  },
  toast: {
    title: 'Toast',
    description: 'Notification toast system with toast.success(), toast.error(), and auto-dismissal.',
    props: ['title', 'message', 'type', 'duration'],
    preview: (
      <div className="flex flex-wrap gap-2.5">
        <div className="rounded-xl border border-emerald-500/40 bg-slate-900/90 px-4 py-2.5 text-xs text-emerald-300 font-medium">
          ✓ Deployment successful!
        </div>
        <div className="rounded-xl border border-rose-500/40 bg-slate-900/90 px-4 py-2.5 text-xs text-rose-300 font-medium">
          ✕ Network timeout error
        </div>
      </div>
    ),
    code: `import { toast, Toaster, Button } from '@stackvibe-studio/ui';

export function App() {
  return (
    <>
      <Button onClick={() => toast.success('Changes saved successfully!')}>
        Trigger Toast
      </Button>
      <Toaster />
    </>
  );
}`,
  },
  'dropdown-menu': {
    title: 'Dropdown Menu',
    description: 'Action popover menu with click-outside listener, destructive item states, and icons.',
    props: ['trigger', 'items', 'align', 'className'],
    preview: (
      <DropdownMenu
        trigger={<Button variant="outline" size="sm">Menu Options ▾</Button>}
        items={[
          { id: 'view', label: 'View Analytics' },
          { id: 'export', label: 'Export Tokens' },
          { id: 'del', label: 'Delete Item', destructive: true },
        ]}
      />
    ),
    code: `import { DropdownMenu, Button } from '@stackvibe-studio/ui';

<DropdownMenu
  trigger={<Button size="sm">Actions ▾</Button>}
  items={[
    { id: '1', label: 'Edit Profile', onClick: () => {} },
    { id: '2', label: 'Delete Account', destructive: true },
  ]}
/>`,
  },
  alert: {
    title: 'Alert',
    description: 'Status messaging for confirmation states, warnings, and informative product feedback.',
    props: ['title', 'variant', 'children', 'className'],
    preview: (
      <div className="space-y-3 max-w-md w-full">
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
          { id: 'design', label: 'Design Tokens', content: <p className="text-xs text-slate-300">Tokens control theme colors.</p> },
          { id: 'motion', label: 'Motion Layer', content: <p className="text-xs text-slate-300">Framer Motion transitions.</p> },
        ]}
      />
    ),
    code: `import { Tabs } from '@stackvibe-studio/ui';

<Tabs
  items={[
    { id: 'tab1', label: 'Overview', content: <div>Content 1</div> },
    { id: 'tab2', label: 'Settings', content: <div>Content 2</div> },
  ]}
/>`,
  },

  // Motion components
  'spotlight-card': {
    title: 'Spotlight Card',
    description: 'Interactive container with dynamic radial cursor spotlight illumination.',
    props: ['children', 'className'],
    preview: (
      <div className="rounded-2xl border border-violet-500/30 bg-slate-900/90 p-6 text-center max-w-sm w-full">
        <h4 className="font-bold text-white">Spotlight Effect</h4>
        <p className="mt-2 text-xs text-slate-300">Cursor position creates smooth radial lighting.</p>
      </div>
    ),
    code: `import { SpotlightCard } from '@stackvibe-studio/motion';

<SpotlightCard className="p-6">
  <h3>Interactive Spotlight</h3>
</SpotlightCard>`,
  },
  'tilt-card': {
    title: 'Tilt Card',
    description: '3D perspective mouse-tracking tilt card with realistic specular glare reflection.',
    props: ['children', 'maxTilt', 'glare', 'className'],
    preview: (
      <TiltCard className="max-w-sm">
        <h4 className="font-bold text-white">3D Tilt Interaction</h4>
        <p className="mt-2 text-xs text-slate-300">Move your cursor over this card to see perspective depth.</p>
      </TiltCard>
    ),
    code: `import { TiltCard } from '@stackvibe-studio/motion';

<TiltCard maxTilt={15} glare>
  <h3>Perspective Card</h3>
</TiltCard>`,
  },
  magnetic: {
    title: 'Magnetic Button',
    description: 'Physics-based magnetic attraction that draws elements toward the cursor on hover.',
    props: ['children', 'strength', 'className'],
    preview: (
      <Magnetic strength={0.4}>
        <Button size="lg" className="shadow-lg shadow-violet-500/30">
          Magnetic Hover ✨
        </Button>
      </Magnetic>
    ),
    code: `import { Magnetic } from '@stackvibe-studio/motion';
import { Button } from '@stackvibe-studio/ui';

<Magnetic strength={0.35}>
  <Button>Hover Over Me</Button>
</Magnetic>`,
  },
  'number-ticker': {
    title: 'Number Ticker',
    description: 'Smooth animated counter from 0 to N with cubic easing for metrics and stats.',
    props: ['value', 'duration', 'prefix', 'suffix', 'className'],
    preview: (
      <div className="flex gap-8 text-center">
        <div>
          <div className="text-3xl font-extrabold text-white">
            <NumberTicker value={14500} suffix="+" />
          </div>
          <div className="text-xs text-slate-400 mt-1">Active Developers</div>
        </div>
        <div>
          <div className="text-3xl font-extrabold text-violet-300">
            <NumberTicker value={99} suffix="%" />
          </div>
          <div className="text-xs text-slate-400 mt-1">Uptime SLA</div>
        </div>
      </div>
    ),
    code: `import { NumberTicker } from '@stackvibe-studio/motion';

<NumberTicker value={50000} prefix="$" suffix="+" duration={2000} />`,
  },
  marquee: {
    title: 'Marquee Ticker',
    description: 'Infinite looping ticker with pause-on-hover for partners, logos, or news.',
    props: ['children', 'speed', 'direction', 'pauseOnHover', 'className'],
    preview: (
      <div className="w-full max-w-md">
        <Marquee speed={20}>
          <span className="font-semibold text-xs text-violet-300">⚡ React 19</span>
          <span className="font-semibold text-xs text-cyan-300">🚀 Next.js 15</span>
          <span className="font-semibold text-xs text-emerald-300">🎨 Tailwind v4</span>
          <span className="font-semibold text-xs text-amber-300">📦 Turborepo</span>
        </Marquee>
      </div>
    ),
    code: `import { Marquee } from '@stackvibe-studio/motion';

<Marquee speed={25} pauseOnHover>
  <span>Item 1</span>
  <span>Item 2</span>
  <span>Item 3</span>
</Marquee>`,
  },
  'fade-in': {
    title: 'Fade In Section',
    description: 'Scroll-aware reveal wrapper for onboarding sections and storytelling layouts.',
    props: ['children', 'delay', 'direction', 'className'],
    preview: (
      <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-center">
        <p className="text-sm font-medium text-white">Animated scroll entry with hardware acceleration.</p>
      </div>
    ),
    code: `import { FadeIn } from '@stackvibe-studio/motion';

<FadeIn direction="up">
  <div>Animated content</div>
</FadeIn>`,
  },
  'text-reveal': {
    title: 'Text Reveal',
    description: 'Typography reveal effect that animates text elements smoothly on entry.',
    props: ['children', 'className'],
    preview: (
      <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
        Design beyond the ordinary.
      </h3>
    ),
    code: `import { TextReveal } from '@stackvibe-studio/motion';

<TextReveal>Design beyond the ordinary.</TextReveal>`,
  },

  // 3D components
  'glass-3d-card': {
    title: 'Glass 3D Card',
    description: 'Transparent glass surface with configurable depth and spatial lighting in Three.js.',
    props: ['depth', 'blur', 'glow', 'tilt', 'interactive', 'children'],
    preview: (
      <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/80 p-6 text-center max-w-sm">
        <h4 className="font-bold text-white">Three.js Glass Surface</h4>
        <p className="mt-2 text-xs text-slate-300">Web-GL accelerated glassmorphic spatial depth.</p>
      </div>
    ),
    code: `import { Glass3DCard } from '@stackvibe-studio/three';

<Glass3DCard depth={42} blur={18} glow tilt interactive>
  <h3>3D Card Content</h3>
</Glass3DCard>`,
  },
  'wave-canvas': {
    title: 'Wave Canvas',
    description: 'Undulating sinusoidal mesh wave canvas responsive to scene time and lighting.',
    props: ['color', 'wireframe', 'className'],
    preview: (
      <div className="rounded-2xl border border-violet-500/30 bg-slate-950 p-6 text-center max-w-sm">
        <h4 className="font-bold text-white">WebGL Wave Surface</h4>
        <p className="mt-2 text-xs text-slate-300">Sinusoidal mesh geometry with dynamic vertex shader.</p>
      </div>
    ),
    code: `import { WaveCanvas } from '@stackvibe-studio/three';

<WaveCanvas color="#8b5cf6" wireframe={false} />`,
  },
  'floating-sphere': {
    title: 'Floating Sphere',
    description: 'Organic floating distorted sphere with metallic reflection in Three.js.',
    props: ['color', 'scale', 'speed'],
    preview: (
      <div className="rounded-2xl border border-white/10 bg-slate-950 p-6 text-center max-w-sm">
        <h4 className="font-bold text-white">Floating 3D Sphere</h4>
        <p className="mt-2 text-xs text-slate-300">MeshDistortMaterial physics with subtle float oscillation.</p>
      </div>
    ),
    code: `import { FloatingSphere } from '@stackvibe-studio/three';

<FloatingSphere color="#8b5cf6" scale={1.2} speed={1.5} />`,
  },
  'orb-cluster': {
    title: 'Orb Cluster',
    description: 'Layered floating orb scene for hero backgrounds and product visuals.',
    props: ['count', 'colors', 'className'],
    preview: (
      <div className="rounded-2xl border border-white/10 bg-slate-950 p-6 text-center max-w-sm">
        <h4 className="font-bold text-white">Orb Cluster</h4>
        <p className="mt-2 text-xs text-slate-300">Multiple spatial orbs rendered with soft ambient lighting.</p>
      </div>
    ),
    code: `import { OrbCluster } from '@stackvibe-studio/three';

<OrbCluster />`,
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
        <Card className="bg-slate-900/80 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border-white/10 shadow-lg">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 sm:pb-4 mb-4 sm:mb-6">
            <p className="text-xs uppercase tracking-[0.24em] font-bold text-violet-300">
              Interactive Preview
            </p>
            <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400 ring-1 ring-emerald-500/20">
              Live
            </span>
          </div>
          <div className="min-h-[160px] flex items-center justify-center rounded-xl sm:rounded-2xl border border-white/5 bg-slate-950/50 p-4 sm:p-6 overflow-x-auto max-w-full">
            {component.preview}
          </div>
        </Card>

        <Card className="bg-slate-900/80 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border-white/10 shadow-lg">
          <div className="border-b border-white/10 pb-3 sm:pb-4 mb-4">
            <p className="text-xs uppercase tracking-[0.24em] font-bold text-cyan-300">
              Component Props
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-2 text-sm text-slate-200">
            {component.props.map((prop) => (
              <li
                key={prop}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/60 px-3 py-1.5 sm:px-3.5 sm:py-2 font-mono text-xs text-violet-300"
              >
                <span className="truncate">{prop}</span>
                <span className="text-[10px] text-slate-400 font-sans ml-2 shrink-0">prop</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="mt-6 sm:mt-8 rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-900/80 p-4 sm:p-6 shadow-lg">
        <div className="flex items-center justify-between border-b border-white/10 pb-3 sm:pb-4 mb-4">
          <p className="text-xs uppercase tracking-[0.24em] font-bold text-violet-300">
            Usage Code
          </p>
          <span className="text-xs font-mono text-slate-400">TypeScript / JSX</span>
        </div>
        <pre className="overflow-x-auto rounded-xl sm:rounded-2xl border border-white/10 bg-slate-950 p-3.5 sm:p-5 text-xs sm:text-sm text-slate-200 font-mono leading-relaxed max-w-full">
          {component.code}
        </pre>
      </div>

      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 border-t border-white/10 pt-6">
        <Button as="a" href={toSiteHref('/docs/components')} variant="outline" size="md" className="w-full sm:w-auto">
          ← Back to gallery
        </Button>
        <Button as="a" href={toSiteHref('/docs')} variant="secondary" size="md" className="w-full sm:w-auto">
          Docs overview →
        </Button>
      </div>
    </DocsShell>
  );
}
