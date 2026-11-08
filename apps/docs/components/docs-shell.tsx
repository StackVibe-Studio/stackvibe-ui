'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
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
      { label: 'Card', href: '/docs/components/card' },
      { label: 'Alert', href: '/docs/components/alert' },
      { label: 'Badge', href: '/docs/components/badge' },
      { label: 'Avatar', href: '/docs/components/avatar' },
      { label: 'Skeleton', href: '/docs/components/skeleton' },
      { label: 'Tabs', href: '/docs/components/tabs' },
    ],
  },
];

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

  // Strip basePath for active matching if present
  const normalizedPath = pathname?.replace(/^\/stackvibe-ui/, '') || '';

  return (
    <div className="docs-shell-grid min-h-screen bg-slate-950 text-slate-50 selection:bg-violet-500/30 selection:text-white">
      {/* Top utility bar */}
      <div className="border-b border-white/10 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
          <Link
            href="/"
            className="flex items-center gap-3 text-sm font-semibold tracking-wider text-white transition hover:opacity-90"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 text-sm font-bold text-white shadow-md shadow-violet-500/25">
              S
            </span>
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              StackVibe UI
            </span>
            <span className="rounded-full bg-violet-500/15 px-2 py-0.5 text-[10px] font-semibold text-violet-300 ring-1 ring-violet-400/20">
              v0.2.0
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href={toSiteHref('/playground/')}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-300 hover:bg-cyan-500/20 transition"
            >
              <span>⚡</span> Playground
            </a>
            <a
              href="https://github.com/StackVibe-Studio/stackvibe-ui"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-white/10 hover:text-white transition"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 backdrop-blur-xl h-fit lg:sticky lg:top-20">
            <Link
              href="/"
              className="mb-6 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-violet-300 uppercase transition hover:text-white"
            >
              <span>←</span> Back to Overview
            </Link>

            <div className="space-y-6">
              {navigation.map((section) => (
                <div key={section.title}>
                  <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
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
                            className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm transition ${
                              isActive
                                ? 'bg-violet-500/20 font-medium text-violet-200 ring-1 ring-violet-400/30'
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
                <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Ecosystem
                </p>
                <div className="space-y-1.5 text-xs text-slate-300">
                  <a
                    href="https://www.npmjs.com/package/@stackvibe-studio/ui"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-lg p-2 hover:bg-white/5 transition"
                  >
                    <span>@stackvibe-studio/ui</span>
                    <span className="text-violet-400">npm ↗</span>
                  </a>
                  <a
                    href="https://www.npmjs.com/package/@stackvibe-studio/motion"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-lg p-2 hover:bg-white/5 transition"
                  >
                    <span>@stackvibe-studio/motion</span>
                    <span className="text-violet-400">npm ↗</span>
                  </a>
                  <a
                    href="https://www.npmjs.com/package/@stackvibe-studio/three"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-lg p-2 hover:bg-white/5 transition"
                  >
                    <span>@stackvibe-studio/three</span>
                    <span className="text-violet-400">npm ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </aside>

          <main className="section-reveal min-w-0">
            <header className="mb-8 rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 via-slate-900/60 to-slate-950 p-8 shadow-xl shadow-violet-500/5">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300">
                <span>Documentation</span>
              </div>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                {title}
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-300">{description}</p>
            </header>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
