import Link from 'next/link';
import type { ReactNode } from 'react';

const navigation = [
  {
    title: 'Overview',
    items: [
      { label: 'Introduction', href: '/docs' },
      { label: 'Principles', href: '/docs#principles' },
    ],
  },
  {
    title: 'Components',
    items: [
      { label: 'Gallery', href: '/docs/components' },
      { label: 'Button', href: '/docs/components/button' },
      { label: 'Input', href: '/docs/components/input' },
      { label: 'Card', href: '/docs/components/card' },
      { label: 'Alert', href: '/docs/components/alert' },
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
  return (
    <div className="docs-shell-grid min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 backdrop-blur-xl">
            <Link href="/" className="mb-6 flex items-center gap-3 text-sm font-medium tracking-[0.2em] text-violet-200 uppercase">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-500/20 text-sm font-semibold text-violet-100 ring-1 ring-violet-400/30">
                S
              </span>
              StackVibe UI
            </Link>

            <div className="space-y-6">
              {navigation.map((section) => (
                <div key={section.title}>
                  <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-slate-400">{section.title}</p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="block rounded-xl border border-transparent px-3 py-2 transition hover:border-white/10 hover:bg-white/5 hover:text-white">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </aside>

          <main className="section-reveal">
            <header className="mb-8 rounded-3xl border border-violet-500/20 bg-violet-500/8 p-8">
              <p className="text-[11px] uppercase tracking-[0.28em] text-violet-200">Docs</p>
              <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">{title}</h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">{description}</p>
            </header>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
