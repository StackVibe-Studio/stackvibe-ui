'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
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
  Switch,
  Textarea,
  Toaster,
  Tooltip,
  toast,
} from '@stackvibe-studio/ui';
import { Magnetic, Marquee, NumberTicker, TiltCard } from '@stackvibe-studio/motion';
import { applyTheme, listThemes, resolveTheme, type ThemeName } from '@stackvibe-studio/themes';
import { toSiteHref } from '../lib/site';

const navItems = [
  { label: 'Overview', href: '#overview', isInternal: false },
  { label: 'Features', href: '#features', isInternal: false },
  { label: 'Components', href: '#components', isInternal: false },
  { label: 'Themes', href: '#themes', isInternal: false },
  { label: 'Installation', href: '#install', isInternal: false },
  { label: 'Playground', href: toSiteHref('/playground/'), isInternal: false },
];

const featureCards = [
  {
    title: 'Accessible by Default',
    text: 'Every primitive strictly implements WAI-ARIA authoring practices, focus traps, and keyboard navigation standards.',
    icon: '🛡️',
  },
  {
    title: 'Token-First Architecture',
    text: 'Zero hardcoded colors. Runtime CSS custom properties adapt smoothly to 11 curated aesthetic themes.',
    icon: '🎨',
  },
  {
    title: 'Spring Physics & Depth',
    text: 'Subtle magnetic attraction, 3D cursor tilt with specular glare, and smooth cubic-bezier number counters.',
    icon: '✨',
  },
  {
    title: 'WebGL & Three.js Canvas',
    text: 'Undulating sinusoidal mesh wave canvases and organic floating spheres optimized for 60fps performance.',
    icon: '🌐',
  },
  {
    title: 'React 19 & Next.js 15 Ready',
    text: 'Engineered for React Server Components, Concurrent Mode, and lightning fast Turbopack compilation.',
    icon: '⚡',
  },
  {
    title: 'Dual Bundle Tree-Shaking',
    text: 'Import individual components with zero runtime overhead via optimized ESM and CJS bundle exports.',
    icon: '📦',
  },
];

export default function HomePage() {
  const [copied, setCopied] = useState(false);
  const [selectedDemoTab, setSelectedDemoTab] = useState('buttons');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('aurora');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('sv-theme') as ThemeName | null;
      if (saved && listThemes().includes(saved)) {
        setCurrentTheme(saved);
        applyTheme(saved);
      } else {
        applyTheme('aurora');
      }
    } catch {
      applyTheme('aurora');
    }
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const copyInstallCommand = async () => {
    try {
      await navigator.clipboard.writeText('npm install @stackvibe-studio/ui');
      setCopied(true);
      toast.success('Install command copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleThemeChange = (theme: ThemeName) => {
    setCurrentTheme(theme);
    applyTheme(theme);
    try {
      localStorage.setItem('sv-theme', theme);
    } catch {}
    toast.info(`Switched theme preset to "${theme.replace('-', ' ')}"`, 'Theme Updated');
  };

  const currentTokens = resolveTheme(currentTheme);

  return (
    <main className="min-h-screen text-slate-50 selection:bg-violet-500/30 selection:text-white bg-transparent">
      <Toaster />

      {/* Sticky Top Navigation */}
      <header
        className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl transition-colors duration-300"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--background, #050816) 85%, transparent)',
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-200 transition hover:bg-white/10 hover:text-white lg:hidden cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <Link href="/" className="flex items-center gap-2.5 sm:gap-3">
              <span
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl text-sm sm:text-base font-bold text-white shadow-lg ring-1 ring-white/20 transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${currentTokens.primary}, ${currentTokens.secondary})`,
                  boxShadow: `0 0 18px ${currentTokens.glow}`,
                }}
              >
                S
              </span>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-sm sm:text-base font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                  StackVibe UI
                </span>
                <span className="hidden xs:inline-block rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-slate-200 ring-1 ring-white/15">
                  v0.3.2
                </span>
              </div>
            </Link>
          </div>

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

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live Theme Switcher */}
            <div
              className="flex items-center gap-1.5 sm:gap-2 rounded-xl border border-white/15 px-2.5 sm:px-3 py-1.5 transition-all duration-300 shadow-sm"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--surface, #0f172a) 60%, transparent)',
                borderColor: `${currentTokens.primary}50`,
                boxShadow: `0 0 12px ${currentTokens.glow}`,
              }}
            >
              <span
                className="h-2.5 w-2.5 rounded-full ring-1 ring-white/40"
                style={{ backgroundColor: currentTokens.primary }}
              />
              <span className="text-[11px] text-slate-300 font-medium hidden md:inline">Theme:</span>
              <select
                value={currentTheme}
                onChange={(e) => handleThemeChange(e.target.value as ThemeName)}
                className="bg-transparent text-xs font-bold focus:outline-none cursor-pointer capitalize max-w-[85px] sm:max-w-none"
                style={{ color: currentTokens.primary }}
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
              className="bg-violet-600 hover:bg-violet-500 text-xs px-2.5 sm:px-3"
            >
              GitHub ↗
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Slide-Over Navigation for Landing Page) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="relative flex w-full max-w-xs flex-1 flex-col bg-slate-900 border-r border-white/10 p-5 shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
              <div className="flex items-center gap-2">
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold text-white shadow-sm"
                  style={{
                    background: `linear-gradient(135deg, ${currentTokens.primary}, ${currentTokens.secondary})`,
                  }}
                >
                  S
                </span>
                <span className="font-bold text-white text-sm">StackVibe UI</span>
                <span className="rounded-full bg-white/10 px-2 py-0.2 text-[10px] text-slate-300">v0.3.2</span>
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-white transition cursor-pointer"
                aria-label="Close menu"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-1">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Navigation</p>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white transition"
                >
                  {item.label}
                </a>
              ))}
              <Link
                href="/docs"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white transition"
              >
                Documentation Home
              </Link>
              <Link
                href="/docs/components"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white transition"
              >
                30 Components Gallery
              </Link>
            </div>

            {/* Theme Selector inside Mobile Drawer */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Aesthetic Palette</p>
              <div className="grid grid-cols-2 gap-2">
                {listThemes().map((t) => {
                  const resolved = resolveTheme(t);
                  const isCur = currentTheme === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => handleThemeChange(t)}
                      className={`flex items-center gap-2 rounded-xl px-2.5 py-1.5 text-xs font-semibold capitalize border transition text-left cursor-pointer ${
                        isCur
                          ? 'border-white/30 text-white bg-white/10 shadow-sm'
                          : 'border-white/5 bg-slate-950 text-slate-300 hover:bg-white/5'
                      }`}
                    >
                      <span className="h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: resolved.primary }} />
                      <span className="truncate">{t.replace('-', ' ')}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="mt-6 pt-5 border-t border-white/10 space-y-2.5">
              <Button as="a" href={toSiteHref('/docs')} size="md" className="w-full">
                Get Started →
              </Button>
              <Button as="a" href={toSiteHref('/playground/')} variant="secondary" size="md" className="w-full">
                Launch Playground ⚡
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="overview" className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-12 pb-16 sm:pt-20 sm:pb-24 md:pt-24 md:pb-28 overflow-hidden">
        {/* Ambient background glows */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-violet-600/20 via-cyan-500/10 to-transparent blur-3xl" />

        <div className="mb-6 flex flex-wrap items-center gap-2">
          <Badge variant="secondary">MIT Open Source</Badge>
          <Badge variant="primary">React 19 &amp; Next.js 15 Ready</Badge>
          <Badge variant="outline">Tailwind CSS v4 Native</Badge>
          <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-300 border border-emerald-500/20">
            30+ Primitives Available
          </span>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h1 className="max-w-3xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] break-words">
              Design beyond{' '}
              <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                the ordinary.
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-300">
              Build high-converting product surfaces, developer dashboards, and modern landing pages with composable UI primitives, fluid physics, and 3D spatial depth.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Magnetic strength={0.25}>
                <Button as="a" href={toSiteHref('/docs')} size="lg" className="shadow-lg shadow-violet-500/25 w-full sm:w-auto">
                  Get Started →
                </Button>
              </Magnetic>
              <Button as="a" href={toSiteHref('/playground/')} variant="secondary" size="lg" className="w-full sm:w-auto">
                Interactive Playground ⚡
              </Button>
              <Button as="a" href={toSiteHref('/docs/components')} variant="outline" size="lg" className="w-full sm:w-auto">
                Explore 30 Components
              </Button>
            </div>

            {/* Quick Install Bar */}
            <div className="mt-6 sm:mt-8 flex items-center gap-2 sm:gap-3 max-w-md rounded-2xl border border-white/10 bg-slate-900/90 p-2 sm:p-2.5 backdrop-blur-md">
              <span className="pl-2 sm:pl-3 font-mono text-xs text-slate-400 select-none">$</span>
              <code className="font-mono text-xs text-violet-200 select-all flex-1 truncate">
                npm install @stackvibe-studio/ui
              </code>
              <button
                type="button"
                onClick={copyInstallCommand}
                className="rounded-xl border border-white/10 bg-white/5 px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-slate-200 hover:bg-white/10 hover:text-white transition cursor-pointer shrink-0"
              >
                {copied ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            {/* Animated Metrics */}
            <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-3 sm:gap-6 border-t border-white/10 pt-6 sm:pt-8 max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">
                  <NumberTicker value={30} suffix="+" />
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-1">Primitives</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">
                  <NumberTicker value={11} />
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-1">Theme Presets</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">
                  <NumberTicker value={100} suffix="%" />
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-1">Strict TypeScript</div>
              </div>
            </div>
          </div>

          {/* Interactive Live Component Showcase */}
          <Card className="relative overflow-hidden border-violet-500/30 bg-slate-900/80 p-4 sm:p-6 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 sm:pb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-1 sm:ml-2 text-xs font-medium text-slate-400">Live Component Sandbox</span>
              </div>
              <Badge variant="primary">Interactive</Badge>
            </div>

            {/* Showcase tab controls */}
            <div className="mt-4 flex overflow-x-auto no-scrollbar pb-1 sm:flex-wrap gap-1.5 sm:gap-2">
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
                  className={`rounded-lg px-2.5 sm:px-3 py-1 text-xs font-medium transition cursor-pointer whitespace-nowrap ${
                    selectedDemoTab === tab.id
                      ? 'bg-violet-500 text-white shadow-md shadow-violet-500/30'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="mt-4 sm:mt-5 rounded-2xl border border-white/10 bg-slate-950/80 p-4 sm:p-5 min-h-[220px] sm:min-h-[240px] flex flex-col justify-center">
              {selectedDemoTab === 'buttons' && (
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    <Magnetic strength={0.3}>
                      <Button variant="primary" size="md">Magnetic Button</Button>
                    </Magnetic>
                    <Button variant="secondary" size="md">Secondary</Button>
                    <Button variant="outline" size="md">Outline</Button>
                    <Button variant="ghost" size="md">Ghost</Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
                    <div className="flex items-center gap-2">
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
                  <div className="flex flex-wrap gap-2.5 sm:gap-3">
                    <Button
                      size="sm"
                      onClick={() => setDialogOpen(true)}
                    >
                      Open Modal Dialog
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => toast.success('Deployed version v0.3.2 successfully!', 'Production Alert')}
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
      <section className="border-y border-white/10 bg-slate-900/50 py-4 sm:py-5">
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
      <section id="features" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 sm:mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] font-bold text-violet-300">
              Why StackVibe UI
            </p>
            <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Everything modern product teams need.
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Designed to eliminate friction between design systems, motion prototyping, and production engineering.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((card) => (
              <Card
                key={card.title}
                className="bg-slate-900/80 p-5 sm:p-6 border-white/10 hover:border-violet-500/40 transition duration-200 hover:shadow-lg hover:shadow-violet-500/5"
              >
                <div className="mb-4 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-xl sm:text-2xl ring-1 ring-violet-500/20">
                  {card.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">{card.title}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">{card.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tilt Card Showcase Section */}
      <section className="border-y border-white/10 bg-slate-900/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 sm:mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.25em] font-bold text-cyan-300">
              Motion &amp; Depth
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
              Physics-Based 3D Perspective Tilt
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              Move your mouse or drag across the cards to preview dynamic specular reflection.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-3">
            <TiltCard maxTilt={18} glare>
              <div className="space-y-3">
                <Badge variant="secondary">Physics Engine</Badge>
                <h3 className="text-lg sm:text-xl font-bold text-white">Magnetic Attraction</h3>
                <p className="text-xs leading-relaxed text-slate-300">
                  Buttons and elements dynamically follow user cursor movements for tactile feedback.
                </p>
              </div>
            </TiltCard>

            <TiltCard maxTilt={18} glare>
              <div className="space-y-3">
                <Badge variant="primary">WebGL Surface</Badge>
                <h3 className="text-lg sm:text-xl font-bold text-white">Spatial Geometry</h3>
                <p className="text-xs leading-relaxed text-slate-300">
                  Integrate lightweight Three.js wave geometry and floating spheres without bundling weight.
                </p>
              </div>
            </TiltCard>

            <TiltCard maxTilt={18} glare>
              <div className="space-y-3">
                <Badge variant="outline">Accessibility</Badge>
                <h3 className="text-lg sm:text-xl font-bold text-white">WAI-ARIA Compliant</h3>
                <p className="text-xs leading-relaxed text-slate-300">
                  Dialogs, tooltips, accordions, and drawers follow strict keyboard and screen reader patterns.
                </p>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Component Gallery Grid */}
      <section id="components" className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="mb-8 sm:mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] font-bold text-violet-300">
              Component System
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Production primitives for everyday shipping.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              Click any component to inspect props, accessibility guidelines, and interactive live previews.
            </p>
          </div>
          <Button as="a" href={toSiteHref('/docs/components')} variant="outline" size="sm" className="w-fit">
            View all 30 components →
          </Button>
        </div>

        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
              <Card className="h-full bg-slate-900/80 p-4 sm:p-5 transition duration-200 group-hover:border-violet-500/50 group-hover:bg-slate-900 group-hover:shadow-lg group-hover:shadow-violet-500/10">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300">
                    {item.tag}
                  </span>
                  <span className="text-xs text-slate-400 group-hover:text-violet-300 transition">
                    Docs ↗
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-violet-200 transition">
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
      <section id="playground" className="border-y border-white/10 bg-slate-900/40 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 sm:gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] font-bold text-violet-300">
              Interactive Workspace
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Test ideas and themes in real time.
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
              Our live Vite-powered playground lets you test tokens, tweak corner radii, switch presets
              between Aurora, Obsidian, and Neon, and immediately copy the resulting JSX snippet.
            </p>

            <div className="mt-6 sm:mt-8 space-y-4">
              <Alert title="Token Sync Guarantee" variant="info">
                The playground runs the exact same CSS custom properties and components as the published npm registry.
              </Alert>

              <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
                <Button as="a" href={toSiteHref('/playground/')} size="lg" className="shadow-lg shadow-cyan-500/20 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold w-full sm:w-auto">
                  Launch Live Playground ⚡
                </Button>
                <Button
                  as="a"
                  href="https://github.com/StackVibe-Studio/stackvibe-ui"
                  target="_blank"
                  rel="noreferrer"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  View GitHub Repository
                </Button>
              </div>
            </div>
          </div>

          <Card className="bg-slate-950/90 p-5 sm:p-6 border-white/10 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 sm:pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-violet-500 animate-pulse" />
                <span className="text-xs font-semibold text-white">Theme &amp; Radius Studio</span>
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
              <div className="flex gap-2 sm:gap-3 pt-2">
                <Button className="w-full text-xs sm:text-sm" onClick={() => toast.success('Changes applied to studio.')}>Preview Changes</Button>
                <Button variant="outline" className="w-full text-xs sm:text-sm" onClick={() => toast.info('Exported token manifest.')}>Export Code</Button>
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
        <div className="my-4 rounded-xl border border-white/10 bg-slate-950 p-4 font-mono text-xs text-violet-300 overflow-x-auto">
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
      <section id="install" className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="rounded-2xl sm:rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-600/10 via-slate-900/70 to-slate-950 p-6 sm:p-8 md:p-12 shadow-2xl shadow-violet-500/5">
          <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] font-bold text-violet-300">
                Installation &amp; Packages
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Ready to ship polished interfaces in minutes?
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl">
                Install our published packages via npm, pnpm, yarn, or bun with zero configuration required.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              <Button
                as="a"
                href="https://www.npmjs.com/package/@stackvibe-studio/ui"
                target="_blank"
                rel="noreferrer"
                size="lg"
                className="w-full sm:w-auto text-xs sm:text-sm"
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
                className="w-full sm:w-auto text-xs sm:text-sm"
              >
                @stackvibe-studio/motion ↗
              </Button>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 rounded-2xl border border-white/10 bg-slate-950/90 p-4 sm:p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
              <span className="text-xs font-mono text-slate-400">Terminal</span>
              <span className="text-xs text-violet-300">pnpm / npm / bun</span>
            </div>
            <code className="block overflow-x-auto whitespace-pre-wrap font-mono text-xs sm:text-sm text-slate-200 leading-relaxed">
              npm install @stackvibe-studio/ui @stackvibe-studio/motion @stackvibe-studio/three
            </code>
          </div>
        </div>
      </section>

      {/* Professional Responsive Footer */}
      <footer className="border-t border-white/10 bg-slate-950 py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-600 text-sm font-bold text-white">
                S
              </span>
              <div>
                <p className="text-sm font-bold text-white">StackVibe UI v0.3.2</p>
                <p className="text-xs text-slate-400">Design beyond the ordinary.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400">
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
