import Link from 'next/link';
import { Alert, Badge, Button, Card } from '@stackvibe-studio/ui';
import { toSiteHref } from '../../lib/site';
import { DocsShell } from '../../components/docs-shell';

const principles = [
  'Accessible patterns by default (WAI-ARIA compliant)',
  'Token-first customization with CSS variables',
  'Motion that feels premium but stays lightweight',
  'Composable components designed for product teams',
  'Full TypeScript and React 19 support',
  'Tree-shakeable ESM & CJS exports',
];

export default function DocsOverviewPage() {
  return (
    <DocsShell
      title="Build with clarity, motion, and confidence."
      description="StackVibe UI gives product teams a structured way to ship premium interfaces with consistent tokens, flexible patterns, and a doc-first workflow."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <Card className="bg-slate-900/80 p-5 border-white/10 shadow-lg">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-violet-300">Overview</p>
          <h2 className="mt-3 text-xl font-bold text-white">Fast Setup</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            Install the package and start composing production-ready UI blocks in a single command.
          </p>
        </Card>

        <Card className="bg-slate-900/80 p-5 border-white/10 shadow-lg">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-cyan-300">System</p>
          <h2 className="mt-3 text-xl font-bold text-white">Composable</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            Mix primitives deliberately to create rich surfaces without fighting abstraction boundaries.
          </p>
        </Card>

        <Card className="bg-slate-900/80 p-5 border-white/10 shadow-lg">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-emerald-300">Motion</p>
          <h2 className="mt-3 text-xl font-bold text-white">Cohesive</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            Layer transitions and product motion without making the UI feel noisy or inconsistent.
          </p>
        </Card>

        <Card className="bg-slate-900/80 p-5 border-white/10 shadow-lg">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-amber-300">Scale</p>
          <h2 className="mt-3 text-xl font-bold text-white">Flexible</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            Use the same design language across internal tools, landing pages, and SaaS dashboards.
          </p>
        </Card>
      </div>

      <div id="principles" className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Alert title="Product Principles" variant="info">
          Documentation is designed to help teams move from concept to shipped UI with fewer visual inconsistencies and total component reusability.
        </Alert>

        <Card className="bg-slate-900/80 p-6 border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 mb-4">
            Guiding Standards
          </p>
          <div className="flex flex-wrap gap-2.5">
            {principles.map((item) => (
              <Badge key={item} variant="secondary">
                {item}
              </Badge>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-slate-900/80 p-7 shadow-xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
          <div>
            <h2 className="text-xl font-bold text-white">Quick Installation</h2>
            <p className="text-xs text-slate-400 mt-1">Add StackVibe packages to your React project</p>
          </div>
          <span className="font-mono text-xs text-violet-300 bg-violet-500/10 px-2.5 py-1 rounded-md border border-violet-500/20">
            pnpm / npm
          </span>
        </div>
        <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-950 p-5 font-mono text-sm text-slate-200 leading-relaxed">
{`# Install core UI primitives
npm install @stackvibe-studio/ui

# Optional: Add motion and 3D extensions
npm install @stackvibe-studio/motion @stackvibe-studio/three`}
        </pre>
        <div className="mt-5 flex items-center justify-between">
          <Link
            href="/docs/components"
            className="text-sm font-medium text-violet-300 transition hover:text-violet-200"
          >
            Explore the component gallery →
          </Link>
          <a
            href="https://www.npmjs.com/package/@stackvibe-studio/ui"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-slate-400 hover:text-slate-200"
          >
            View on npm ↗
          </a>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button as="a" href={toSiteHref('/docs/components')} size="lg">
          Browse all components
        </Button>
        <Button as="a" href={toSiteHref('/')} variant="outline" size="lg">
          Back to homepage
        </Button>
      </div>
    </DocsShell>
  );
}
