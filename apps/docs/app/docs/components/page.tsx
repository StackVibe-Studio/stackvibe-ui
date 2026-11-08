import Link from 'next/link';
import { Alert, Badge, Button, Card, Checkbox, Input, Select, Textarea } from '@stackvibe-studio/ui';
import { DocsShell } from '../../../components/docs-shell';

const components = [
  { name: 'Button', href: '/docs/components/button', tag: 'Action' },
  { name: 'Input', href: '/docs/components/input', tag: 'Form' },
  { name: 'Card', href: '/docs/components/card', tag: 'Layout' },
  { name: 'Alert', href: '/docs/components/alert', tag: 'Status' },
  { name: 'Badge', href: '/docs/components/badge', tag: 'Meta' },
  { name: 'Textarea', href: '/docs/components/textarea', tag: 'Form' },
];

export default function DocsComponentsPage() {
  return (
    <DocsShell
      title="Component gallery"
      description="Explore the building blocks already tuned for SaaS, dashboards, and product surfaces, with patterns that stay consistent across apps."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {components.map((item) => (
          <Link key={item.name} href={item.href} className="block">
            <Card className="h-full bg-slate-900/80 p-5 transition hover:border-violet-400/40 hover:bg-slate-900">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.24em] text-violet-200">{item.tag}</span>
                <Badge variant="outline">{item.name}</Badge>
              </div>
              <h3 className="text-2xl font-semibold text-white">{item.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Premium primitives with consistent spacing, accessible focus, and a product-ready visual system.
              </p>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-slate-900/80 p-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Live preview</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Common product patterns</h2>
          </div>
          <Button as="a" href="/docs/components/button" variant="secondary">See button docs</Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 rounded-2xl border border-white/10 bg-slate-950/60 p-5">
            <div className="flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
            </div>
            <Input placeholder="Project name" />
            <Textarea rows={3} placeholder="Add launch notes" />
            <Select defaultValue="pro">
              <option value="starter">Starter</option>
              <option value="pro">Pro</option>
              <option value="scale">Scale</option>
            </Select>
            <label className="flex items-center gap-3 text-sm text-slate-200">
              <Checkbox defaultChecked />
              Enable premium defaults
            </label>
          </div>

          <Alert title="Ready for production" variant="success">
            Every component in the gallery is designed to feel premium without forcing a heavy setup or opinionated styling layer.
          </Alert>
        </div>
      </div>
    </DocsShell>
  );
}
