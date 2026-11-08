import { notFound } from 'next/navigation';
import { Alert, Badge, Button, Card, Checkbox, Input, Select, Textarea } from '@stackvibe-studio/ui';
import { DocsShell } from '../../../../components/docs-shell';

const componentRegistry = {
  button: {
    title: 'Button',
    description: 'Action-focused controls for launches, navigation, and CTA moments across product surfaces.',
    props: ['variant', 'size', 'as', 'href', 'type'],
    preview: (
      <div className="flex flex-wrap gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button as="a" href="/docs/components" variant="ghost">Docs</Button>
      </div>
    ),
    code: `import { Button } from '@stackvibe-studio/ui';\n\n<Button>Primary</Button>\n<Button variant="secondary">Secondary</Button>`,
  },
  input: {
    title: 'Input',
    description: 'Clean text entry with strong contrast, accessible focus rings, and flexible field sizing.',
    props: ['placeholder', 'value', 'disabled', 'type'],
    preview: <Input placeholder="Workspace name" />,
    code: `import { Input } from '@stackvibe-studio/ui';\n\n<Input placeholder="Workspace name" />`,
  },
  card: {
    title: 'Card',
    description: 'Layout shells for marketing blocks, form groups, dashboards, and content containers.',
    props: ['className', 'as'],
    preview: (
      <Card className="bg-slate-900/90 p-5">
        <p className="text-sm uppercase tracking-[0.24em] text-violet-300">Overview</p>
        <h3 className="mt-3 text-xl font-semibold text-white">Team workspace</h3>
        <p className="mt-3 text-sm text-slate-300">Keep product surfaces clear and flexible while preserving design consistency.</p>
      </Card>
    ),
    code: `import { Card } from '@stackvibe-studio/ui';\n\n<Card className="p-5">...</Card>`,
  },
  alert: {
    title: 'Alert',
    description: 'Status messaging for confirmation states, warnings, and informative product feedback.',
    props: ['title', 'variant'],
    preview: <Alert title="Deployment ready" variant="success">Your workspace is ready to ship.</Alert>,
    code: `import { Alert } from '@stackvibe-studio/ui';\n\n<Alert title="Deployment ready" variant="success">...</Alert>`,
  },
  badge: {
    title: 'Badge',
    description: 'Compact metadata markers for status, labels, and quick product context.',
    props: ['variant'],
    preview: (
      <div className="flex flex-wrap gap-3">
        <Badge variant="primary">Stable</Badge>
        <Badge variant="secondary">New</Badge>
        <Badge variant="outline">Beta</Badge>
      </div>
    ),
    code: `import { Badge } from '@stackvibe-studio/ui';\n\n<Badge variant="primary">Stable</Badge>`,
  },
  textarea: {
    title: 'Textarea',
    description: 'Multi-line input fields suited for notes, product briefs, and long-form form content.',
    props: ['rows', 'placeholder', 'disabled'],
    preview: <Textarea rows={4} placeholder="Describe the product idea..." />,
    code: `import { Textarea } from '@stackvibe-studio/ui';\n\n<Textarea rows={4} placeholder="Describe the product idea..." />`,
  },
} as const;

export function generateStaticParams() {
  return Object.keys(componentRegistry).map((slug) => ({ slug }));
}

export default async function ComponentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const component = componentRegistry[slug as keyof typeof componentRegistry];

  if (!component) {
    notFound();
  }

  return (
    <DocsShell title={component.title} description={component.description}>
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="bg-slate-900/80 p-6">
          <p className="text-sm uppercase tracking-[0.24em] text-violet-300">Preview</p>
          <div className="mt-5">{component.preview}</div>
        </Card>

        <Card className="bg-slate-900/80 p-6">
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Props</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            {component.props.map((prop) => (
              <li key={prop} className="rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2">
                {prop}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-slate-900/80 p-6">
        <p className="text-sm uppercase tracking-[0.24em] text-violet-300">Usage</p>
        <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-slate-950 p-4 text-sm text-slate-200">
          {component.code}
        </pre>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button as="a" href="/docs/components" size="lg">Back to gallery</Button>
        <Button as="a" href="/docs" variant="secondary" size="lg">Docs home</Button>
      </div>
    </DocsShell>
  );
}
