import { Badge, Button, Card, Input, Textarea, Select, Checkbox, Alert } from '@stackvibe-studio/ui';

const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Components', href: '#components' },
  { label: 'Docs', href: '/docs' },
  { label: 'Playground', href: '#playground' },
  { label: 'Install', href: '#install' },
];

const featureCards = [
  {
    title: 'Design system ready',
    text: 'Rapidly ship premium interfaces with reusable primitives, clear tokens, and consistent motion.',
  },
  {
    title: 'Motion-first interactions',
    text: 'Bring polished transitions and immersive storytelling into UIs without coupling the core package to heavy motion stacks.',
  },
  {
    title: '3D depth without bloat',
    text: 'Lift hero sections and product surfaces with optional 3D enhancements that stay modular and light.',
  },
];

const componentCards = [
  'Buttons',
  'Inputs',
  'Badges',
  'Cards',
  'Alerts',
  'Forms',
  'Layouts',
  'Motion',
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#overview" className="flex items-center gap-3 text-sm font-medium tracking-[0.2em] text-violet-200 uppercase">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/20 text-base font-semibold text-violet-100 ring-1 ring-violet-400/30">
              S
            </span>
            StackVibe UI
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button as="a" href="https://stackvibe-studio.github.io/stackvibe-ui/playground/" variant="outline" size="sm">
              Open playground
            </Button>
            <Button as="a" href="https://www.npmjs.com/settings/stackvibe-studio/packages" size="sm">
              npm
            </Button>
          </div>
        </div>
      </header>

      <section id="overview" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-6 flex flex-wrap gap-3">
          <Badge variant="secondary">Open-source-first</Badge>
          <Badge variant="outline">React 19</Badge>
          <Badge variant="primary">Tailwind UI</Badge>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
              Design beyond the ordinary.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Build premium interfaces with layers of motion, theme presets, and flexible primitives that work across docs, dashboards, and product experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button as="a" href="#components" size="lg">Explore components</Button>
              <Button as="a" href="/docs" variant="secondary" size="lg">
                View docs
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-300">
              <div>
                <div className="text-2xl font-semibold text-white">12+</div>
                <div>Core primitives</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">3</div>
                <div>Distribution packs</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">100%</div>
                <div>Design-system focused</div>
              </div>
            </div>
          </div>

          <Card className="overflow-hidden border-violet-500/20 bg-slate-900/80 p-6 shadow-2xl shadow-violet-500/10">
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-300">Live preview</span>
                <Badge variant="primary">Ready</Badge>
              </div>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/20 text-sm font-semibold text-violet-100">
                      SV
                    </div>
                    <div>
                      <p className="font-medium text-white">StackVibe UI</p>
                      <p className="text-xs text-slate-400">Component system</p>
                    </div>
                  </div>
                </div>
                <Input placeholder="Search components" />
                <div className="flex gap-3">
                  <Button variant="primary">Launch</Button>
                  <Button variant="secondary">Preview</Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/40">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:grid-cols-3">
          {featureCards.map((card) => (
            <Card key={card.title} className="bg-slate-950/70 p-5">
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{card.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="components" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-violet-300">Component library</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Everyday building blocks for product teams.</h2>
          </div>
          <Button as="a" href="#playground" variant="ghost" size="sm">Try in playground</Button>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {componentCards.map((name) => (
            <Card key={name} className="group bg-slate-900/80 p-5 transition hover:border-violet-400/40 hover:bg-slate-900">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/15 text-lg text-violet-200 ring-1 ring-violet-400/20">
                {name.slice(0, 1)}
              </div>
              <h3 className="text-lg font-medium text-white">{name}</h3>
              <p className="mt-2 text-sm text-slate-300">
                Flexible primitives that feel premium, accessible, and ready to extend.
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section id="playground" className="border-y border-white/10 bg-slate-900/40">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Playground</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Test ideas in real time.</h2>
            <p className="mt-4 max-w-xl text-slate-300">
              Try variants, compare surfaces, adjust states, and preview product patterns before shipping them into an app.
            </p>
            <div className="mt-8 space-y-4">
              <Alert title="Follows your design tokens" variant="info">
                The playground mirrors the same styling model used by the library release.
              </Alert>
              <div className="flex flex-wrap gap-3">
                <Button as="a" href="https://stackvibe-studio.github.io/stackvibe-ui/playground/" size="lg">
                  Launch playground
                </Button>
                <Button as="a" href="https://github.com/StackVibe-Studio/stackvibe-ui" variant="outline" size="lg">
                  View repo
                </Button>
              </div>
            </div>
          </div>

          <Card className="bg-slate-950/80 p-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-300">Form demo</span>
                <Badge variant="secondary">Live</Badge>
              </div>
              <Input placeholder="Workspace name" />
              <Textarea rows={4} placeholder="Describe the design system goals..." />
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <Checkbox defaultChecked />
                <span>Enable premium tokens</span>
              </div>
              <Select defaultValue="starter">
                <option value="starter">Starter plan</option>
                <option value="pro">Pro plan</option>
                <option value="scale">Scale plan</option>
              </Select>
            </div>
          </Card>
        </div>
      </section>

      <section id="install" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-violet-500/20 bg-violet-500/5 p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-violet-200">Install</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Ship polished interfaces in minutes.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button as="a" href="https://www.npmjs.com/package/@stackvibe-studio/ui" size="lg">@stackvibe-studio/ui</Button>
              <Button as="a" href="https://www.npmjs.com/package/@stackvibe-studio/motion" variant="secondary" size="lg">@stackvibe-studio/motion</Button>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm text-slate-200">
            <code className="block overflow-x-auto whitespace-pre-wrap">npm install @stackvibe-studio/ui @stackvibe-studio/motion @stackvibe-studio/three</code>
          </div>
        </div>
      </section>
    </main>
  );
}
