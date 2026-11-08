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
import { toSiteHref } from '../../../lib/site';
import { DocsShell } from '../../../components/docs-shell';

const components = [
  { name: 'Button', href: '/docs/components/button', tag: 'Action', desc: 'Flexible action controls with 4 variants, 3 sizes, and anchor support.' },
  { name: 'Input', href: '/docs/components/input', tag: 'Form', desc: 'Text input with dark styling, accessible focus states, and seamless validation.' },
  { name: 'Textarea', href: '/docs/components/textarea', tag: 'Form', desc: 'Multi-line text area with auto-flowing layout and strong contrast.' },
  { name: 'Select', href: '/docs/components/select', tag: 'Form', desc: 'Dropdown selector with native keyboard support and modern styling.' },
  { name: 'Checkbox', href: '/docs/components/checkbox', tag: 'Form', desc: 'Accessible boolean toggle for settings, lists, and multi-selection.' },
  { name: 'Card', href: '/docs/components/card', tag: 'Layout', desc: 'Surface container with glassmorphic borders and soft backdrop blur.' },
  { name: 'Tabs', href: '/docs/components/tabs', tag: 'Navigation', desc: 'Tabbed interface for organizing multi-view panels and complex layouts.' },
  { name: 'Alert', href: '/docs/components/alert', tag: 'Feedback', desc: 'Contextual notification banners with success, info, warning, and error tones.' },
  { name: 'Badge', href: '/docs/components/badge', tag: 'Meta', desc: 'Compact indicators for status tags, versions, and highlights.' },
  { name: 'Avatar', href: '/docs/components/avatar', tag: 'Media', desc: 'User profile thumbnail with fallback initials and multiple size presets.' },
  { name: 'Skeleton', href: '/docs/components/skeleton', tag: 'Feedback', desc: 'Pulsing loading placeholders for asynchronous data fetching.' },
];

export default function DocsComponentsPage() {
  return (
    <DocsShell
      title="Component Gallery"
      description="Explore production-ready primitives with consistent tokens, accessible focus states, and zero runtime overhead."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {components.map((item) => (
          <Link key={item.name} href={item.href} className="group block h-full">
            <Card className="h-full bg-slate-900/80 p-5 transition duration-200 group-hover:border-violet-500/50 group-hover:bg-slate-900 group-hover:shadow-lg group-hover:shadow-violet-500/10">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-violet-300">
                  {item.tag}
                </span>
                <Badge variant="outline">{item.name}</Badge>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-violet-200 transition">
                {item.name}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                {item.desc}
              </p>
              <div className="mt-4 flex items-center text-xs font-semibold text-violet-400 group-hover:text-violet-300">
                View documentation →
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-xl">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-cyan-300">
              Live Playground
            </p>
            <h2 className="mt-1 text-2xl font-bold text-white">Interactive Composed Form</h2>
          </div>
          <Button as="a" href={toSiteHref('/playground/')} variant="secondary" size="sm">
            Open full playground ⚡
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 rounded-2xl border border-white/10 bg-slate-950/70 p-6">
            <div className="flex flex-wrap gap-2.5">
              <Button size="sm">Primary</Button>
              <Button variant="secondary" size="sm">Secondary</Button>
              <Button variant="outline" size="sm">Outline</Button>
              <Button variant="ghost" size="sm">Ghost</Button>
            </div>
            <Input placeholder="Project or repository name" />
            <Textarea rows={3} placeholder="Add release description or patch notes..." />
            <Select defaultValue="pro">
              <option value="starter">Starter Plan (Free)</option>
              <option value="pro">Pro Plan ($29/mo)</option>
              <option value="scale">Scale Plan ($99/mo)</option>
            </Select>
            <label className="flex items-center gap-3 text-sm text-slate-200 cursor-pointer">
              <Checkbox defaultChecked />
              <span>Enable automatic CDN caching and assets optimization</span>
            </label>
          </div>

          <div className="space-y-4">
            <Alert title="Ready for production" variant="success">
              Every component in the gallery is designed to feel premium without forcing a heavy setup or opinionated CSS architecture.
            </Alert>
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Avatar fallback="SV" size="md" />
                <div>
                  <p className="font-semibold text-sm text-white">StackVibe Studio</p>
                  <p className="text-xs text-slate-400">@stackvibe-studio/ui</p>
                </div>
              </div>
              <Skeleton rounded="md" className="h-3 w-4/5" />
              <Skeleton rounded="md" className="h-3 w-3/5" />
            </div>
          </div>
        </div>
      </div>
    </DocsShell>
  );
}
