import { SpotlightCard } from '@stackvibe-studio/motion';
import { Glass3DCard } from '@stackvibe-studio/three';
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
import { useMemo, useState } from 'react';

const presets = [
  'aurora',
  'obsidian',
  'neon-futuristic',
  'sunset-glow',
  'midnight-gold',
  'holographic',
];

export default function App() {
  const [theme, setTheme] = useState('aurora');
  const [radius, setRadius] = useState(20);

  const accent = useMemo(() => {
    const palette: Record<string, string> = {
      aurora: '#8b5cf6',
      obsidian: '#38bdf8',
      'neon-futuristic': '#22d3ee',
      'sunset-glow': '#f97316',
      'midnight-gold': '#f59e0b',
      holographic: '#34d399',
    };
    return palette[theme] || '#8b5cf6';
  }, [theme]);

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 text-white md:px-8 selection:bg-violet-500/30 selection:text-white">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-slate-900/80 p-5 backdrop-blur-xl md:flex-row md:items-center md:justify-between shadow-xl">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-500 text-lg font-bold text-white shadow-lg shadow-violet-500/30 ring-1 ring-violet-400/30">
              S
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight">StackVibe Studio</span>
                <span className="rounded-full bg-violet-500/20 px-2.5 py-0.5 text-xs font-semibold text-violet-300 ring-1 ring-violet-400/30">
                  Playground
                </span>
              </div>
              <p className="text-xs text-slate-400">Interactive Design & Token Sandbox</p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-2.5 text-xs text-slate-300">
            <a
              href="../"
              className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 hover:bg-white/10 hover:text-white transition font-medium"
            >
              ← Documentation Home
            </a>
            <a
              href="../docs/components/"
              className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 hover:bg-white/10 hover:text-white transition font-medium"
            >
              Components Gallery
            </a>
            <a
              href="https://github.com/StackVibe-Studio/stackvibe-ui"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 hover:bg-white/10 hover:text-white transition font-medium"
            >
              GitHub ↗
            </a>
          </nav>
        </header>

        {/* Theme presets bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <span>Theme Preset:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {presets.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setTheme(preset)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-medium transition cursor-pointer capitalize ${
                  theme === preset
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/25 ring-1 ring-violet-400/40'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {preset.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <SpotlightCard className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-xl">
            <Glass3DCard depth={42} blur={18} glow tilt interactive>
              <div className="space-y-4 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Live 3D & Motion Card
                  </span>
                  <Badge variant="primary">{theme}</Badge>
                </div>
                <h2 className="text-3xl font-bold text-white tracking-tight">
                  Design beyond the ordinary.
                </h2>
                <p className="text-sm text-slate-300">
                  Real-time interactive canvas with depth, tilt, and spotlight cursor tracking.
                </p>
                <Input placeholder="Type to preview input state..." />
                <div className="flex flex-wrap gap-3 pt-1">
                  <Button variant="primary">Launch Experience</Button>
                  <Button variant="secondary">Explore Features</Button>
                  <Button variant="outline">Docs</Button>
                </div>
              </div>
            </Glass3DCard>
          </SpotlightCard>

          <Card className="space-y-5 bg-slate-900/80 p-6 border-white/10 shadow-xl">
            <h3 className="text-lg font-bold text-white border-b border-white/10 pb-3">
              Design Token Controls
            </h3>
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Border Radius
                </label>
                <span className="font-mono text-xs text-violet-300">{radius}px</span>
              </div>
              <input
                type="range"
                min="6"
                max="36"
                value={radius}
                onChange={(event) => setRadius(Number(event.target.value))}
                className="w-full accent-violet-500 cursor-pointer"
              />
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-950/70 p-4">
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Active Accent</p>
              <div className="mt-3 flex items-center gap-3">
                <span
                  className="h-8 w-8 rounded-xl border border-white/20 shadow-md"
                  style={{ background: accent }}
                />
                <span className="font-mono text-base font-semibold text-white">{accent}</span>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-950/70 p-4">
              <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                Generated Snippet
              </p>
              <pre className="mt-2.5 overflow-auto font-mono text-xs text-violet-200">{`<Button\n  style={{ borderRadius: '${radius}px' }}\n  theme="${theme}"\n>\n  Launch\n</Button>`}</pre>
            </div>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="bg-slate-900/80 p-6 border-white/10 shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-lg font-bold text-white">Form Primitives</h3>
                <Badge variant="secondary">Interactive</Badge>
              </div>
              <Input placeholder="Project name" defaultValue="Cloud Micro-Frontend" />
              <Textarea rows={3} placeholder="Describe the deployment..." defaultValue="Production deployment with automated token sync." />
              <Select defaultValue="pro">
                <option value="starter">Starter Plan (Free)</option>
                <option value="pro">Professional Plan ($29/mo)</option>
                <option value="enterprise">Enterprise Plan (Custom)</option>
              </Select>
              <label className="flex items-center gap-3 text-sm text-slate-200 cursor-pointer">
                <Checkbox defaultChecked />
                <span>Enable hardware-accelerated shaders</span>
              </label>
            </div>
          </Card>

          <div className="space-y-6">
            <Alert title="System Status: Operational" variant="success" className="bg-emerald-500/10 border-emerald-500/30">
              The playground runs real production components compiled directly from the `@stackvibe-studio/ui` workspace package.
            </Alert>

            <Card className="bg-slate-900/80 p-6 border-white/10 shadow-xl">
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-4">
                Interactive Tabs & Profiles
              </p>
              <div className="flex items-center gap-4 mb-4">
                <Avatar fallback="SV" size="lg" />
                <div>
                  <h4 className="font-bold text-white">StackVibe Studio</h4>
                  <p className="text-xs text-slate-400">Design System Suite</p>
                </div>
              </div>
              <Tabs
                items={[
                  {
                    id: 'overview',
                    label: 'Overview',
                    content: <p className="text-xs text-slate-300">Ready to compose high-impact SaaS surfaces.</p>,
                  },
                  {
                    id: 'tokens',
                    label: 'Tokens',
                    content: <p className="font-mono text-xs text-violet-300">radius: {radius}px | accent: {accent}</p>,
                  },
                ]}
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
