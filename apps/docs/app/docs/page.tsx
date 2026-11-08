import Link from 'next/link';
import { Alert, Badge, Button, Card } from '@stackvibe-studio/ui';
import { toSiteHref } from '../../lib/site';
import { DocsShell } from '../../components/docs-shell';

const principles = [
  'Accessible patterns by default',
  'Token-first customization',
  'Motion that feels premium but stays lightweight',
  'Composable components for product teams',
];

export default function DocsOverviewPage() {
  return (
    <DocsShell
      title="Build with clarity, motion, and confidence."
      description="StackVibe UI gives product teams a structured way to ship premium interfaces with consistent tokens, flexible patterns, and a doc-first workflow."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <Card className="bg-slate-900/80 p-5">
          <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Overview</p>
          <h2 className="mt-4 text-2xl font-semibold text-white">Fast setup</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">Install the package and start composing production-ready UI blocks in a single pass.</p>
        </Card>

        <Card className="bg-slate-900/80 p-5">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">System</p>
          <h2 className="mt-4 text-2xl font-semibold text-white">Composable</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">Mix primitives deliberately to create rich surfaces without fighting abstraction boundaries.</p>
        </Card>

        <Card className="bg-slate-900/80 p-5">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Motion</p>
          <h2 className="mt-4 text-2xl font-semibold text-white">Cohesive</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">Layer transitions and product motion without making the UI feel noisy or inconsistent.</p>
        </Card>

        <Card className="bg-slate-900/80 p-5">
          <p className="text-sm uppercase tracking-[0.2em] text-amber-300">Scale</p>
          <h2 className="mt-4 text-2xl font-semibold text-white">Flexible</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">Use the same design language across internal tools, landing pages, and SaaS dashboards.</p>
        </Card>
      </div>

      <div id="principles" className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Alert title="Product principles" variant="info">
          Documentation is designed to help teams move from concept to shipped UI with fewer visual inconsistencies.
        </Alert>

        <Card className="bg-slate-900/80 p-6">
          <div className="flex flex-wrap gap-2">
            {principles.map((item) => (
              <Badge key={item} variant="secondary">{item}</Badge>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button as="a" href={toSiteHref('/docs/components')} size="lg">Browse components</Button>
        <Button as="a" href={toSiteHref('/')} variant="outline" size="lg">Back to home</Button>
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-slate-900/80 p-6">
        <h2 className="text-2xl font-semibold text-white">Install</h2>
        <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-slate-950 p-4 text-sm text-slate-200">
{`npm install @stackvibe-studio/ui
npm install @stackvibe-studio/motion
npm install @stackvibe-studio/three`}
        </pre>
        <div className="mt-4">
          <Link href={toSiteHref('/docs/components')} className="text-sm text-violet-200 transition hover:text-violet-100">
            Explore the component gallery →
          </Link>
        </div>
      </div>
    </DocsShell>
  );
}
