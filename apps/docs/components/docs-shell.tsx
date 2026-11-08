'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, type ReactNode } from 'react';
import { applyTheme, listThemes, resolveTheme, type ThemeName } from '@stackvibe-studio/themes';
import { toSiteHref } from '../lib/site';

const navigation = [
  {
    title: 'Getting Started',
    items: [
      { label: 'Introduction', href: '/docs' },
      { label: 'Principles', href: '/docs#principles' },
    ],
  },
  {
    title: 'Core Components',
    items: [
      { label: 'All Components', href: '/docs/components' },
      { label: 'Button', href: '/docs/components/button' },
      { label: 'Input', href: '/docs/components/input' },
      { label: 'Textarea', href: '/docs/components/textarea' },
      { label: 'Select', href: '/docs/components/select' },
      { label: 'Checkbox', href: '/docs/components/checkbox' },
      { label: 'Switch', href: '/docs/components/switch' },
      { label: 'Card', href: '/docs/components/card' },
      { label: 'Dialog (Modal)', href: '/docs/components/dialog' },
      { label: 'Drawer (Sheet)', href: '/docs/components/drawer' },
      { label: 'Tooltip', href: '/docs/components/tooltip' },
      { label: 'Accordion', href: '/docs/components/accordion' },
      { label: 'Dropdown Menu', href: '/docs/components/dropdown-menu' },
      { label: 'Alert', href: '/docs/components/alert' },
      { label: 'Toast', href: '/docs/components/toast' },
      { label: 'Progress', href: '/docs/components/progress' },
      { label: 'Badge', href: '/docs/components/badge' },
      { label: 'Avatar', href: '/docs/components/avatar' },
      { label: 'Skeleton', href: '/docs/components/skeleton' },
      { label: 'Tabs', href: '/docs/components/tabs' },
    ],
  },
  {
    title: 'Motion & Interactive',
    items: [
      { label: 'Spotlight Card', href: '/docs/components/spotlight-card' },
      { label: 'Tilt Card', href: '/docs/components/tilt-card' },
      { label: 'Magnetic Button', href: '/docs/components/magnetic' },
      { label: 'Number Ticker', href: '/docs/components/number-ticker' },
      { label: 'Marquee Ticker', href: '/docs/components/marquee' },
      { label: 'Fade In Section', href: '/docs/components/fade-in' },
      { label: 'Text Reveal', href: '/docs/components/text-reveal' },
    ],
  },
  {
    title: '3D Canvas & Visuals',
    items: [
      { label: 'Glass 3D Card', href: '/docs/components/glass-3d-card' },
      { label: 'Wave Canvas', href: '/docs/components/wave-canvas' },
      { label: 'Floating Sphere', href: '/docs/components/floating-sphere' },
      { label: 'Orb Cluster', href: '/docs/components/orb-cluster' },
    ],
  },
];

// Flatten list of component links for next/previous navigation
const flatComponents = navigation
  .flatMap((section) => section.items)
  .filter((item) => item.href.startsWith('/docs/components/'));

export function DocsShell({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const [search, setSearch] = useState('');
  const [activeTheme, setActiveTheme] = useState<ThemeName>('aurora');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Strip basePath for active matching if present
  const normalizedPath = pathname?.replace(/^\/stackvibe-ui/, '') || '';

  useEffect(() => {
    try {
      const saved = localStorage.getItem('sv-theme') as ThemeName | null;
      if (saved && listThemes().includes(saved)) {
        setActiveTheme(saved);
        applyTheme(saved);
      } else {
        applyTheme('aurora');
      }
    } catch {
      applyTheme('aurora');
    }
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

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

  const handleThemeChange = (theme: ThemeName) => {
    setActiveTheme(theme);
    applyTheme(theme);
    try {
      localStorage.setItem('sv-theme', theme);
    } catch {}
  };

  const currentTokens = resolveTheme(activeTheme);

  const filteredNavigation = navigation
    .map((section) => ({
      ...section,
      items: section.items.filter((item) =>
        item.label.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((section) => section.items.length > 0);

  // Calculate current component and prev/next for mobile bar
  const currentIndex = flatComponents.findIndex(
    (item) => normalizedPath === item.href || normalizedPath === `${item.href}/`
  );
  const currentItem = currentIndex !== -1 ? flatComponents[currentIndex] : null;
  const prevItem = currentIndex > 0 ? flatComponents[currentIndex - 1] : null;
  const nextItem = currentIndex < flatComponents.length - 1 ? flatComponents[currentIndex + 1] : null;

  return (
    <div className="docs-shell-grid min-h-screen text-slate-50 selection:bg-violet-500/30 selection:text-white bg-transparent">
      {/* Top utility bar */}
      <header
        className="border-b border-white/10 backdrop-blur-xl sticky top-0 z-40 transition-colors duration-300"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--background, #050816) 85%, transparent)',
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-3.5">
          <div className="flex items-center gap-3">
            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-200 transition hover:bg-white/10 hover:text-white lg:hidden cursor-pointer"
              aria-label="Open mobile navigation"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 text-sm font-semibold tracking-wider text-white transition hover:opacity-90"
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${currentTokens.primary}, ${currentTokens.secondary})`,
                  boxShadow: `0 0 15px ${currentTokens.glow}`,
                }}
              >
                S
              </span>
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent font-bold">
                StackVibe UI
              </span>
              <span className="hidden xs:inline-block rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-slate-200 ring-1 ring-white/15">
                v0.3.2
              </span>
            </Link>
          </div>

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
              <span className="hidden md:inline text-[11px] text-slate-300 font-medium">Theme:</span>
              <select
                value={activeTheme}
                onChange={(e) => handleThemeChange(e.target.value as ThemeName)}
                className="bg-transparent text-xs font-bold focus:outline-none cursor-pointer capitalize max-w-[90px] sm:max-w-none"
                style={{ color: currentTokens.primary }}
              >
                {listThemes().map((t) => (
                  <option key={t} value={t} className="bg-slate-900 text-white">
                    {t.replace('-', ' ')}
                  </option>
                ))}
              </select>
            </div>

            <a
              href={toSiteHref('/playground/')}
              className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-2.5 sm:px-3 py-1.5 text-xs font-medium text-cyan-300 hover:bg-cyan-500/20 transition"
            >
              <span>⚡</span> <span className="hidden sm:inline">Playground</span>
            </a>
            <a
              href="https://github.com/StackVibe-Studio/stackvibe-ui"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-white/10 hover:text-white transition"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Slide-Over Navigation) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="relative flex w-full max-w-xs flex-1 flex-col bg-slate-900 border-r border-white/10 p-5 shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-xs font-semibold tracking-wider text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold text-white shadow-sm"
                  style={{
                    background: `linear-gradient(135deg, ${currentTokens.primary}, ${currentTokens.secondary})`,
                  }}
                >
                  S
                </span>
                <span className="font-bold text-white">StackVibe UI</span>
                <span className="rounded-full bg-white/10 px-2 py-0.2 text-[10px] text-slate-300">v0.3.2</span>
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-white transition"
                aria-label="Close menu"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Quick Search in Mobile Drawer */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search 30 components..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-3.5 py-2 text-xs text-white placeholder-slate-400 focus:border-violet-500 focus:outline-none"
              />
            </div>

            {/* Links hierarchy */}
            <div className="flex-1 space-y-6 overflow-y-auto">
              {filteredNavigation.map((section) => (
                <div key={section.title}>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
                    {section.title}
                  </p>
                  <ul className="space-y-1 text-sm text-slate-300">
                    {section.items.map((item) => {
                      const isActive =
                        item.href === '/docs'
                          ? normalizedPath === '/docs' || normalizedPath === '/docs/'
                          : normalizedPath === item.href || normalizedPath === `${item.href}/`;

                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex items-center justify-between rounded-xl px-3 py-2 text-xs transition ${
                              isActive
                                ? 'bg-violet-500/20 font-semibold text-violet-200 ring-1 ring-violet-400/30'
                                : 'hover:bg-white/5 hover:text-white text-slate-300'
                            }`}
                          >
                            <span>{item.label}</span>
                            {isActive && (
                              <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            {/* Mobile Footer Links */}
            <div className="pt-4 border-t border-white/10 mt-4 space-y-2 text-xs">
              <a
                href={toSiteHref('/playground/')}
                className="flex items-center justify-between rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 font-medium text-cyan-300"
              >
                <span>⚡ Interactive Playground</span>
                <span>→</span>
              </a>
              <a
                href="https://github.com/StackVibe-Studio/stackvibe-ui"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-300"
              >
                <span>GitHub Repository</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8">
        {/* Mobile Quick Action Pill (when viewing on small screens) */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-3 lg:hidden backdrop-blur-md">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-violet-600/20 border border-violet-500/30 px-3 py-1.5 text-xs font-semibold text-violet-200 hover:bg-violet-600/30 transition cursor-pointer"
          >
            <span>☰</span>
            <span>{currentItem ? currentItem.label : 'Browse 30 Components'}</span>
            <span className="text-[10px] text-violet-300">▾</span>
          </button>

          <div className="flex items-center gap-2 text-xs">
            {prevItem ? (
              <Link
                href={prevItem.href}
                className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-slate-300 hover:bg-white/10 hover:text-white transition"
              >
                <span>←</span>
                <span className="hidden xs:inline">{prevItem.label}</span>
              </Link>
            ) : null}
            {nextItem ? (
              <Link
                href={nextItem.href}
                className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-slate-300 hover:bg-white/10 hover:text-white transition"
              >
                <span className="hidden xs:inline">{nextItem.label}</span>
                <span>→</span>
              </Link>
            ) : null}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          {/* Desktop Sidebar (hidden on mobile, replaced by slide-over drawer) */}
          <aside
            className="hidden lg:block rounded-3xl border border-white/10 p-5 backdrop-blur-xl h-fit sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto transition-colors duration-300"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--surface, #0f172a) 70%, transparent)',
            }}
          >
            <Link
              href="/"
              className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase transition hover:text-white"
              style={{ color: currentTokens.primary }}
            >
              <span>←</span> Back to Overview
            </Link>

            {/* Quick Search */}
            <div className="mb-5">
              <input
                type="text"
                placeholder="Search components..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-3.5 py-2 text-xs text-white placeholder-slate-400 focus:border-violet-500 focus:outline-none"
              />
            </div>

            <div className="space-y-6">
              {filteredNavigation.map((section) => (
                <div key={section.title}>
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
                    {section.title}
                  </p>
                  <ul className="space-y-1 text-sm text-slate-300">
                    {section.items.map((item) => {
                      const isActive =
                        item.href === '/docs'
                          ? normalizedPath === '/docs' || normalizedPath === '/docs/'
                          : normalizedPath === item.href || normalizedPath === `${item.href}/`;

                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={`flex items-center justify-between rounded-xl px-3 py-1.5 text-xs transition ${
                              isActive
                                ? 'bg-violet-500/20 font-semibold text-violet-200 ring-1 ring-violet-400/30'
                                : 'hover:bg-white/5 hover:text-white text-slate-300'
                            }`}
                          >
                            <span>{item.label}</span>
                            {isActive && (
                              <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}

              <div className="pt-4 border-t border-white/10">
                <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
                  Packages
                </p>
                <div className="space-y-1.5 text-xs text-slate-300">
                  <a
                    href="https://www.npmjs.com/package/@stackvibe-studio/ui"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-lg p-2 hover:bg-white/5 transition"
                  >
                    <span>@stackvibe-studio/ui</span>
                    <span className="text-violet-400">v0.3.2 ↗</span>
                  </a>
                  <a
                    href="https://www.npmjs.com/package/@stackvibe-studio/motion"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-lg p-2 hover:bg-white/5 transition"
                  >
                    <span>@stackvibe-studio/motion</span>
                    <span className="text-violet-400">v0.3.2 ↗</span>
                  </a>
                  <a
                    href="https://www.npmjs.com/package/@stackvibe-studio/three"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-lg p-2 hover:bg-white/5 transition"
                  >
                    <span>@stackvibe-studio/three</span>
                    <span className="text-violet-400">v0.3.2 ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Documentation Area */}
          <main className="section-reveal min-w-0">
            <header className="mb-8 rounded-2xl sm:rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 via-slate-900/60 to-slate-950 p-5 sm:p-8 shadow-xl shadow-violet-500/5">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300">
                <span>Documentation & Primitives</span>
              </div>
              <h1 className="mt-4 text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                {title}
              </h1>
              <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-300">{description}</p>
            </header>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
