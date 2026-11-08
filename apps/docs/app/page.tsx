'use client';

import { useState } from 'react';
import Link from 'next/link';
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
  Input,
  Progress,
  Select,
  Skeleton,
  Switch,
  Tabs,
  Textarea,
  toast,
  Toaster,
  Tooltip,
} from '@stackvibe-studio/ui';
import { Magnetic, Marquee, NumberTicker, TiltCard } from '@stackvibe-studio/motion';
import { applyTheme, listThemes, type ThemeName } from '@stackvibe-studio/themes';
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
    title: 'Zero-Config React 19',
    text: 'Engineered with strict TypeScript types, dual ESM/CJS outputs, and modern React 19 server/client compatibility.',
  },
  {
    icon: '🎨',
    title: '11 Curated Theme Presets',
    text: 'Switch instantly between Aurora, Obsidian, Neon, Cyberpunk, Emerald Matrix, Tokyo Night, and custom brand tokens.',
  },
  {
    icon: '💫',
    title: 'Integrated Motion & Physics',
    text: 'Layer Framer Motion transitions, magnetic cursor pulls, smooth tickers, and 3D tilt without bulky runtime overhead.',
  },
  {
    icon: '🧊',
    title: 'Lightweight Three.js Canvases',
    text: 'Add glassmorphic 3D cards, spatial wave meshes, and organic floating spheres directly into your hero surfaces.',
  },
  {
    icon: '♿',
    title: 'Accessible by Default',
    text: 'Every primitive adheres to W3C WAI-ARIA standards with accessible focus rings, keyboard navigation, and high contrast.',
  },
  {
    icon: '🛠️',
    title: 'Interactive Real-Time Playground',
    text: 'Test component variants, swap theme tokens, and copy production code snippets in our interactive browser playground.',
  },
];

export default function HomePage() {
  const [copied, setCopied] = useState(false);
  const [selectedDemoTab, setSelectedDemoTab] = useState('buttons');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('aurora');

  const copyInstallCommand = () => {
    navigator.clipboard.writeText('npm install @stackvibe-studio/ui @stackvibe-studio/motion @stackvibe-studio/three');
    setCopied(true);
    toast.success('Install command copied to clipboard!', 'Success');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleThemeChange = (theme: ThemeName) => {
    setCurrentTheme(theme);
    applyTheme(theme);
    toast.info(`Switched theme preset to "${theme.replace('-', ' ')}"`, 'Theme Updated');
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-violet-500/30 selection:text-white">
      <Toaster />

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
                v0.3.0
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 lg:flex">
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
            {/* Live Theme Switcher */}
            <div className="hidden sm:flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-2.5 py-1">
              <span className="text-[11px] text-slate-400 font-medium">Theme:</span>
              <select
                value={currentTheme}
                onChange={(e) => handleThemeChange(e.target.value as ThemeName)}
                className="bg-transparent text-xs font-semibold text-violet-300 focus:outline-none cursor-pointer capitalize"
              >
                {listThemes().map((t) => (
                  <option key={t} value={t} className="bg-slate-900 text-white">
                    {t.replace('-', ' ')}
                  </option>
                ))}
              </select>
            </div>

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
              target="_blank"
              rel="noreferrer"
              size="sm"
              className="bg-violet-600 hover:bg-violet-500"
            >
              GitHub ↗
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="overview" className="relative mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        {/* Ambient background glows */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-violet-600/20 via-cyan-500/10 to-transparent blur-3xl" />

        <div className="mb-6 flex flex-wrap items-center gap-2.5">
          <Badge variant="secondary">MIT Open Source</Badge>
          <Badge variant="primary">React 19 & Next.js 15 Ready</Badge>
          <Badge variant="outline">Tailwind CSS v4 Native</Badge>
          <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-300 border border-emerald-500/20">
            30+ Primitives Available
          </span>
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
              Build high-converting product surfaces, developer dashboards, and modern landing pages with composable UI primitives, fluid physics, and 3D spatial depth.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Magnetic strength={0.25}>
                <Button as="a" href={toSiteHref('/docs')} size="lg" className="shadow-lg shadow-violet-500/25">
                  Get Started →
                </Button>
              </Magnetic>
              <Button as="a" href={toSiteHref('/playground/')} variant="secondary" size="lg">
                Interactive Playground ⚡
              </Button>
              <Button as="a" href={toSiteHref('/docs/components')} variant="outline" size="lg">
                Explore 30 Components
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

            {/* Animated Metrics */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 max-w-lg">
              <div>
                <div className="text-3xl font-extrabold text-white">
                  <NumberTicker value={30} suffix="+" />
                </div>
                <div className="text-xs text-slate-400 mt-1">Primitives</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white">
                  <NumberTicker value={11} />
                </div>
                <div className="text-xs text-slate-400 mt-1">Theme Presets</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white">
                  <NumberTicker value={100} suffix="%" />
                </div>
                <div className="text-xs text-slate-400 mt-1">Strict TypeScript</div>
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
                { id: 'buttons', label: 'Buttons & Controls' },
                { id: 'interactive', label: 'Modals & Toasts' },
                { id: 'feedback', label: 'Feedback & Progress' },
                { id: 'composed', label: 'Composed Surface' },
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

            <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/80 p-5 min-h-[240px] flex flex-col justify-center">
              {selectedDemoTab === 'buttons' && (
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2.5">
                    <Magnetic strength={0.3}>
                      <Button variant="primary" size="md">Magnetic Button</Button>
                    </Magnetic>
                    <Button variant="secondary" size="md">Secondary</Button>
                    <Button variant="outline" size="md">Outline</Button>
                    <Button variant="ghost" size="md">Ghost</Button>
                  </div>
                  <div className="flex items-center gap-6 pt-2">
                    <div className="flex items-center gap-2.5">
                      <Switch defaultChecked id="s_demo" />
                      <span className="text-xs text-slate-200">Hardware Accel</span>
                    </div>
                    <Tooltip content="Tooltip attached to element" side="top">
                      <Button variant="outline" size="sm">Hover for Tooltip</Button>
                    </Tooltip>
                  </div>
                </div>
              )}

              {selectedDemoTab === 'interactive' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-300">Click below to trigger interactive notifications and overlays:</p>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      size="sm"
                      onClick={() => setDialogOpen(true)}
                    >
                      Open Modal Dialog
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => toast.success('Deployed version v0.3.0 successfully!', 'Production Alert')}
                    >
                      Trigger Toast Alert
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => toast.info('System tokens synchronized.', 'Notice')}
                    >
                      Info Toast
                    </Button>
                  </div>
                </div>
              )}

              {selectedDemoTab === 'feedback' && (
                <div className="space-y-4">
                  <Alert title="Tokens compiled" variant="success">
                    All style tokens and components are synchronized with your bundle.
                  </Alert>
                  <div className="space-y-2">
                    <Progress value={82} variant="primary" showLabel />
                    <Progress value={95} variant="success" />
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
                        <p className="text-[10px] text-slate-400">Design System Suite</p>
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
              <span>Try all 30 primitives in the gallery</span>
              <Link href="/docs/components" className="text-violet-300 hover:text-white font-medium">
                Browse gallery →
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Infinite Marquee Ticker */}
      <section className="border-y border-white/10 bg-slate-900/50 py-5">
        <Marquee speed={28} pauseOnHover>
          <span className="flex items-center gap-2 font-mono text-xs text-violet-300">
            <span className="h-2 w-2 rounded-full bg-violet-400" /> React 19 Tested
          </span>
          <span className="flex items-center gap-2 font-mono text-xs text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400" /> Next.js 15 App Router
          </span>
          <span className="flex items-center gap-2 font-mono text-xs text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Tailwind CSS v4 Native
          </span>
          <span className="flex items-center gap-2 font-mono text-xs text-amber-300">
            <span className="h-2 w-2 rounded-full bg-amber-400" /> Framer Motion Layer
          </span>
          <span className="flex items-center gap-2 font-mono text-xs text-rose-300">
            <span className="h-2 w-2 rounded-full bg-rose-400" /> Three.js 3D Acceleration
          </span>
          <span className="flex items-center gap-2 font-mono text-xs text-indigo-300">
            <span className="h-2 w-2 rounded-full bg-indigo-400" /> Turborepo Monorepo
          </span>
        </Marquee>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] font-bold text-violet-300">
              Why StackVibe UI
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
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
                className="bg-slate-900/80 p-6 border-white/10 hover:border-violet-500/40 transition duration-200 hover:shadow-lg hover:shadow-violet-500/5"
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

      {/* Interactive Tilt Card Showcase Section */}
      <section className="border-y border-white/10 bg-slate-900/30 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.25em] font-bold text-cyan-300">
              Motion & Depth
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white">
              Physics-Based 3D Perspective Tilt
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Move your mouse over the cards below to preview dynamic specular reflection.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <TiltCard maxTilt={18} glare>
              <div className="space-y-3">
                <Badge variant="secondary">Physics Engine</Badge>
                <h3 className="text-xl font-bold text-white">Magnetic Attraction</h3>
                <p className="text-xs leading-relaxed text-slate-300">
                  Buttons and elements dynamically follow user cursor movements for tactile feedback.
                </p>
              </div>
            </TiltCard>

            <TiltCard maxTilt={18} glare>
              <div className="space-y-3">
                <Badge variant="primary">WebGL Surface</Badge>
                <h3 className="text-xl font-bold text-white">Spatial Geometry</h3>
                <p className="text-xs leading-relaxed text-slate-300">
                  Integrate lightweight Three.js wave geometry and floating spheres without bundling weight.
                </p>
              </div>
            </TiltCard>

            <TiltCard maxTilt={18} glare>
              <div className="space-y-3">
                <Badge variant="outline">Accessibility</Badge>
                <h3 className="text-xl font-bold text-white">WAI-ARIA Compliant</h3>
                <p className="text-xs leading-relaxed text-slate-300">
                  Dialogs, tooltips, accordions, and drawers follow strict keyboard and screen reader patterns.
                </p>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Component Gallery Grid */}
      <section id="components" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] font-bold text-violet-300">
              Component System
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
              Production primitives for everyday shipping.
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Click any component to inspect props, accessibility guidelines, and interactive live previews.
            </p>
          </div>
          <Button as="a" href={toSiteHref('/docs/components')} variant="outline" size="sm">
            View all 30 components →
          </Button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[
            { name: 'Button', slug: 'button', tag: 'Core', desc: '4 variants, sizes, and anchor support.' },
            { name: 'Dialog (Modal)', slug: 'dialog', tag: 'Overlay', desc: 'Accessible modal dialog with overlay backdrop blur.' },
            { name: 'Drawer (Sheet)', slug: 'drawer', tag: 'Overlay', desc: 'Slide-out panel from left, right, or bottom.' },
            { name: 'Tooltip', slug: 'tooltip', tag: 'Overlay', desc: 'Hover floating tooltip with directional positioning.' },
            { name: 'Accordion', slug: 'accordion', tag: 'Disclosure', desc: 'Collapsible accordion panels with smooth rotation.' },
            { name: 'Switch', slug: 'switch', tag: 'Form', desc: 'Sliding toggle switch with animated thumb.' },
            { name: 'Progress', slug: 'progress', tag: 'Feedback', desc: 'Linear progress bar with gradient fills.' },
            { name: 'Toast', slug: 'toast', tag: 'Feedback', desc: 'Toast system with toast.success() and auto-dismiss.' },
            { name: 'Magnetic', slug: 'magnetic', tag: 'Motion', desc: 'Physics-based magnetic attraction toward cursor.' },
            { name: 'Tilt Card', slug: 'tilt-card', tag: 'Motion', desc: '3D mouse-tracking tilt with realistic specular glare.' },
            { name: 'Wave Canvas', slug: 'wave-canvas', tag: '3D Canvas', desc: 'Sinusoidal mesh wave canvas in WebGL.' },
            { name: 'Tabs', slug: 'tabs', tag: 'Navigation', desc: 'Segmented tabs to cleanly separate views.' },
          ].map((item) => (
            <Link
              key={item.name}
              href={`/docs/components/${item.slug}`}
              className="group block h-full"
            >
              <Card className="h-full bg-slate-900/80 p-5 transition duration-200 group-hover:border-violet-500/50 group-hover:bg-slate-900 group-hover:shadow-lg group-hover:shadow-violet-500/10">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300">
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
            <p className="text-xs uppercase tracking-[0.25em] font-bold text-violet-300">
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
                <Switch defaultChecked />
              </div>
              <Select defaultValue="enterprise">
                <option value="starter">Starter Architecture</option>
                <option value="pro">Pro Micro-Frontend</option>
                <option value="enterprise">Enterprise Design System</option>
              </Select>
              <div className="flex gap-3 pt-2">
                <Button className="w-full" onClick={() => toast.success('Changes applied to studio.')}>Preview Changes</Button>
                <Button variant="outline" className="w-full" onClick={() => toast.info('Exported token manifest.')}>Export Code</Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Modal Dialog Demo Instance */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogHeader>
          <DialogTitle>Deploy to Global Edge</DialogTitle>
          <DialogDescription>
            This action will compile and deploy all component packages to your production CDN with zero downtime.
          </DialogDescription>
        </DialogHeader>
        <div className="my-4 rounded-xl border border-white/10 bg-slate-950 p-4 font-mono text-xs text-violet-300">
          pnpm run build &amp;&amp; pnpm run deploy
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button
            onClick={() => {
              setDialogOpen(false);
              toast.success('Deployment queued to production network!', 'Edge Deploy');
            }}
          >
            Confirm &amp; Deploy
          </Button>
        </DialogFooter>
      </Dialog>

      {/* Install Section */}
      <section id="install" className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-600/10 via-slate-900/70 to-slate-950 p-8 md:p-12 shadow-2xl shadow-violet-500/5">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] font-bold text-violet-300">
                Installation &amp; Packages
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
                <p className="text-sm font-bold text-white">StackVibe UI v0.3.0</p>
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
