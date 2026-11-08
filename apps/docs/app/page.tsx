'use client';

import { useState } from 'react';
import Link from 'next/link';
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
import { toSiteHref } from '../lib/site';

const navItems = [
  { label: 'Overview', href: '#overview', isInternal: false },
  { label: 'Components', href: '#components', isInternal: false },
  { label: 'Documentation', href: '/docs', isInternal: true },
  { label: 'Playground', href: '#playground', isInternal: false },
  { label: 'Installation', href: '#install', isInternal: false },
];

const featureCards = [
  {
    icon: '⚡',
    title: 'Zero-Config & React 19 Ready',
    text: 'Engineered with strict TypeScript types, dual ESM/CJS outputs, and modern React 19 server/client compatibility.',
  },
  {
    icon: '🎨',
    title: 'Token-First Customization',
    text: 'Built around modular CSS variables and presets (Aurora, Obsidian, Neon) so your brand stays consistent everywhere.',
  },
  {
    icon: '✨',
    title: 'Integrated Motion & 3D',
    text: 'Layer Framer Motion transitions and Three.js spatial depth into your UI without bundling heavyweight dependencies into the core package.',
  },
  {
    icon: '♿',
    title: 'Accessible by Default',
    text: 'Every primitive follows W3C WAI-ARIA standards with accessible focus rings, keyboard navigation, and high contrast.',
  },
  {
    icon: '📦',
    title: 'Independent Modular Packages',
    text: 'Pick only what you need: @stackvibe-studio/ui for core primitives, /motion for animations, and /three for 3D canvases.',
  },
  {
    icon: '🛠️',
    title: 'Interactive Real-Time Playground',
    text: 'Test component variants, swap theme tokens, and copy production code snippets in our interactive browser playground.',
  },
];

const componentCards = [
  { name: 'Buttons', slug: 'button', tag: 'Action', desc: 'Primary, secondary, outline, and ghost variants with anchor support.' },
  { name: 'Inputs', slug: 'input', tag: 'Form', desc: 'Sleek dark-mode text fields with clear focus indicators.' },
  { name: 'Textarea', slug: 'textarea', tag: 'Form', desc: 'Multi-line form fields for notes and descriptive inputs.' },
  { name: 'Select', slug: 'select', tag: 'Form', desc: 'Accessible dropdown selects with customizable option lists.' },
  { name: 'Checkbox', slug: 'checkbox', tag: 'Form', desc: 'Modern toggle check elements with custom active styling.' },
  { name: 'Cards', slug: 'card', tag: 'Layout', desc: 'Structured surface containers with backdrop blur and border glow.' },
  { name: 'Alerts', slug: 'alert', tag: 'Feedback', desc: 'Status banners for success, info, warning, and error messages.' },
  { name: 'Badges', slug: 'badge', tag: 'Meta', desc: 'Compact pills for categories, status tags, and versions.' },
  { name: 'Avatars', slug: 'avatar', tag: 'Media', desc: 'User profiles with auto-fallback initials and multiple size presets.' },
  { name: 'Skeleton', slug: 'skeleton', tag: 'Feedback', desc: 'Smooth pulsing placeholders that enhance perceived performance.' },
  { name: 'Tabs', slug: 'tabs', tag: 'Navigation', desc: 'Segmented tabs to cleanly separate complex views and workflows.' },
  { name: 'Design Tokens', slug: 'card', tag: 'Theme', desc: 'Flexible color, radius, and elevation tokens ready for any palette.' },
];

export default function HomePage() {
  const [copied, setCopied] = useState(false);
  const [selectedDemoTab, setSelectedDemoTab] = useState('buttons');

  const copyInstallCommand = () => {
    navigator.clipboard.writeText('npm install @stackvibe-studio/ui');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-violet-500/30 selection:text-white">
      {/* Sticky Top Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 text-base font-bold text-white shadow-lg shadow-violet-500/30 ring-1 ring-violet-400/40">
              S
            </span>
            <div className="flex items-center gap-2">
              <span className="text-base font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                StackVibe UI
              </span>
              <span className="rounded-full bg-violet-500/15 px-2 py-0.5 text-[10px] font-semibold text-violet-300 ring-1 ring-violet-400/20">
                v0.2.0
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            {navItems.map((item) =>
              item.isInternal ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-white hover:text-violet-200"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-white hover:text-violet-200"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              as="a"
              href={toSiteHref('/playground/')}
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Playground ⚡
            </Button>
            <Button
              as="a"
              href="https://github.com/StackVibe-Studio/stackvibe-ui"
              size="sm"
              className="bg-violet-600 hover:bg-violet-500"
            >
              GitHub
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="overview" className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
        {/* Subtle background ambient glows */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-violet-600/20 via-cyan-500/10 to-transparent blur-3xl" />

        <div className="mb-8 flex flex-wrap items-center gap-3">
          <Badge variant="secondary">Open Source (MIT)</Badge>
          <Badge variant="primary">React 19 & Next.js Ready</Badge>
          <Badge variant="outline">Tailwind UI Architecture</Badge>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl leading-[1.1]">
              Design beyond{' '}
              <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                the ordinary.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Build premium, production-ready interfaces with composable UI primitives, fluid
              micro-interactions, and modular 3D enhancements. Designed for high-performing product teams.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button as="a" href={toSiteHref('/docs')} size="lg" className="shadow-lg shadow-violet-500/25">
                Get Started
              </Button>
              <Button as="a" href={toSiteHref('/playground/')} variant="secondary" size="lg">
                Interactive Playground ⚡
              </Button>
              <Button as="a" href="#components" variant="outline" size="lg">
                View Components
              </Button>
            </div>

            {/* Quick Install Bar */}
            <div className="mt-8 flex items-center gap-3 max-w-md rounded-2xl border border-white/10 bg-slate-900/90 p-2.5 backdrop-blur-md">
              <span className="pl-3 font-mono text-xs text-slate-400 select-none">$</span>
              <code className="font-mono text-xs text-violet-200 select-all flex-1">
                npm install @stackvibe-studio/ui
              </code>
              <button
                type="button"
                onClick={copyInstallCommand}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:bg-white/10 hover:text-white transition cursor-pointer"
              >
                {copied ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 max-w-lg">
              <div>
                <div className="text-3xl font-extrabold text-white">12+</div>
                <div className="text-xs text-slate-400 mt-1">Core Primitives</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white">3</div>
                <div className="text-xs text-slate-400 mt-1">Modular Packages</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white">100%</div>
                <div className="text-xs text-slate-400 mt-1">TypeScript Coverage</div>
              </div>
            </div>
          </div>

          {/* Interactive Live Component Showcase */}
          <Card className="relative overflow-hidden border-violet-500/30 bg-slate-900/80 p-6 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-medium text-slate-400">Live Component Sandbox</span>
              </div>
              <Badge variant="primary">Interactive</Badge>
            </div>

            {/* Showcase tab controls */}
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { id: 'buttons', label: 'Buttons' },
                { id: 'inputs', label: 'Inputs' },
                { id: 'feedback', label: 'Feedback' },
                { id: 'composed', label: 'Composed' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedDemoTab(tab.id)}
                  className={`rounded-lg px-3 py-1 text-xs font-medium transition cursor-pointer ${
                    selectedDemoTab === tab.id
                      ? 'bg-violet-500 text-white shadow-md shadow-violet-500/30'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/80 p-5 min-h-[220px] flex flex-col justify-center">
              {selectedDemoTab === 'buttons' && (
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2.5">
                    <Button variant="primary" size="md">Primary</Button>
                    <Button variant="secondary" size="md">Secondary</Button>
                    <Button variant="outline" size="md">Outline</Button>
                    <Button variant="ghost" size="md">Ghost</Button>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    <Button variant="primary" size="sm">Small</Button>
                    <Button variant="primary" size="md">Medium</Button>
                    <Button variant="primary" size="lg">Large</Button>
                  </div>
                </div>
              )}

              {selectedDemoTab === 'inputs' && (
                <div className="space-y-3">
                  <Input placeholder="Enter workspace name..." />
                  <Input type="email" placeholder="you@company.com" />
                  <Select defaultValue="pro">
                    <option value="pro">Pro Plan (Activated)</option>
                    <option value="starter">Starter Plan</option>
                  </Select>
                </div>
              )}

              {selectedDemoTab === 'feedback' && (
                <div className="space-y-3">
                  <Alert title="Tokens compiled" variant="success">
                    All style tokens and components are in sync with your bundle.
                  </Alert>
                  <div className="flex items-center gap-3">
                    <Skeleton rounded="full" className="h-9 w-9 shrink-0" />
                    <div className="space-y-1.5 flex-1">
                      <Skeleton rounded="md" className="h-3.5 w-3/4" />
                      <Skeleton rounded="md" className="h-2.5 w-1/2" />
                    </div>
                  </div>
                </div>
              )}

              {selectedDemoTab === 'composed' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar fallback="SV" size="sm" />
                      <div>
                        <p className="text-xs font-semibold text-white">StackVibe Studio</p>
                        <p className="text-[10px] text-slate-400">Design System Ready</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                  <label className="flex items-center gap-2.5 text-xs text-slate-200 cursor-pointer pt-1">
                    <Checkbox defaultChecked />
                    <span>Auto-sync design tokens across micro-frontends</span>
                  </label>
                  <div className="flex gap-2 pt-1">
                    <Button size="sm" className="w-full">Deploy</Button>
                    <Button variant="outline" size="sm" className="w-full">Settings</Button>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
              <span>Try all variants in the component gallery</span>
              <Link href="/docs/components" className="text-violet-300 hover:text-white font-medium">
                Browse gallery →
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Features Grid */}
      <section className="border-y border-white/10 bg-slate-900/40 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-violet-300">
              Why StackVibe UI
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Everything modern product teams need.
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Designed to eliminate friction between design systems, motion prototyping, and production engineering.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((card) => (
              <Card
                key={card.title}
                className="bg-slate-950/70 p-6 border-white/10 hover:border-violet-500/40 transition duration-200 hover:shadow-lg hover:shadow-violet-500/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-2xl ring-1 ring-violet-500/20">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{card.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Component Gallery Grid */}
      <section id="components" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-cyan-300">
              Component System
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
              Everyday building blocks for production apps.
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Click any component to inspect props, accessibility guidelines, and interactive live previews.
            </p>
          </div>
          <Button as="a" href={toSiteHref('/docs/components')} variant="outline" size="sm">
            View full gallery →
          </Button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {componentCards.map((item) => (
            <Link
              key={item.name}
              href={`/docs/components/${item.slug}`}
              className="group block h-full"
            >
              <Card className="h-full bg-slate-900/80 p-5 transition duration-200 group-hover:border-violet-500/50 group-hover:bg-slate-900 group-hover:shadow-lg group-hover:shadow-violet-500/10">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-300">
                    {item.tag}
                  </span>
                  <span className="text-xs text-slate-400 group-hover:text-violet-300 transition">
                    Docs ↗
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-violet-200 transition">
                  {item.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  {item.desc}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Playground Feature Section */}
      <section id="playground" className="border-y border-white/10 bg-slate-900/40 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-violet-300">
              Interactive Workspace
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Test ideas and themes in real time.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Our live Vite-powered playground lets you test tokens, tweak corner radii, switch presets
              between Aurora, Obsidian, and Neon, and immediately copy the resulting JSX snippet.
            </p>

            <div className="mt-8 space-y-4">
              <Alert title="Token Sync Guarantee" variant="info">
                The playground runs the exact same CSS custom properties and components as the published npm registry.
              </Alert>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button as="a" href={toSiteHref('/playground/')} size="lg" className="shadow-lg shadow-cyan-500/20 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold">
                  Launch Live Playground ⚡
                </Button>
                <Button
                  as="a"
                  href="https://github.com/StackVibe-Studio/stackvibe-ui"
                  target="_blank"
                  rel="noreferrer"
                  variant="outline"
                  size="lg"
                >
                  View GitHub Repository
                </Button>
              </div>
            </div>
          </div>

          <Card className="bg-slate-950/90 p-6 border-white/10 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-violet-500 animate-pulse" />
                <span className="text-xs font-semibold text-white">Theme & Radius Studio</span>
              </div>
              <Badge variant="secondary">Live Preview</Badge>
            </div>

            <div className="space-y-4">
              <Input placeholder="Application or workspace name" defaultValue="NextGen Dashboard" />
              <Textarea rows={3} placeholder="Describe the design system goals..." defaultValue="Crafting clean, motion-enhanced surfaces for SaaS." />
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/60 p-3">
                <span className="text-xs text-slate-300">Enable Hardware Acceleration</span>
                <Checkbox defaultChecked />
              </div>
              <Select defaultValue="enterprise">
                <option value="starter">Starter Architecture</option>
                <option value="pro">Pro Micro-Frontend</option>
                <option value="enterprise">Enterprise Design System</option>
              </Select>
              <div className="flex gap-3 pt-2">
                <Button className="w-full">Preview Changes</Button>
                <Button variant="outline" className="w-full">Export Code</Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Install Section */}
      <section id="install" className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-600/10 via-slate-900/70 to-slate-950 p-8 md:p-12 shadow-2xl shadow-violet-500/5">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-violet-300">
                Installation & Packages
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Ready to ship polished interfaces in minutes?
              </h2>
              <p className="mt-2 text-sm text-slate-300 max-w-xl">
                Install our published packages via npm, pnpm, yarn, or bun with zero configuration required.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                as="a"
                href="https://www.npmjs.com/package/@stackvibe-studio/ui"
                target="_blank"
                rel="noreferrer"
                size="lg"
              >
                @stackvibe-studio/ui ↗
              </Button>
              <Button
                as="a"
                href="https://www.npmjs.com/package/@stackvibe-studio/motion"
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                size="lg"
              >
                @stackvibe-studio/motion ↗
              </Button>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/90 p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
              <span className="text-xs font-mono text-slate-400">Terminal</span>
              <span className="text-xs text-violet-300">pnpm / npm / bun</span>
            </div>
            <code className="block overflow-x-auto whitespace-pre-wrap font-mono text-sm text-slate-200 leading-relaxed">
              npm install @stackvibe-studio/ui @stackvibe-studio/motion @stackvibe-studio/three
            </code>
          </div>
        </div>
      </section>

      {/* Professional Footer */}
      <footer className="border-t border-white/10 bg-slate-950 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-600 text-sm font-bold text-white">
                S
              </span>
              <div>
                <p className="text-sm font-bold text-white">StackVibe UI</p>
                <p className="text-xs text-slate-400">Design beyond the ordinary.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              <Link href="/docs" className="hover:text-white transition">
                Documentation
              </Link>
              <Link href="/docs/components" className="hover:text-white transition">
                Components
              </Link>
              <a href={toSiteHref('/playground/')} className="hover:text-white transition">
                Playground
              </a>
              <a
                href="https://github.com/StackVibe-Studio/stackvibe-ui"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                GitHub
              </a>
              <a
                href="https://www.npmjs.com/package/@stackvibe-studio/ui"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                npm Registry
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-white/5 pt-6 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} StackVibe Studio. Released under the MIT License.
          </div>
        </div>
      </footer>
    </main>
  );
}
