import { SpotlightCard } from '@stackvibe-studio/motion';
import { Glass3DCard } from '@stackvibe-studio/three';
import {
  Alert,
  Badge,
  Button,
  Card,
  Checkbox,
  Input,
  Select,
  Textarea,
} from '@stackvibe-studio/ui';
import { useMemo, useState } from 'react';

const presets = ['aurora', 'obsidian', 'neon-futuristic'];

export default function App() {
  const [theme, setTheme] = useState('aurora');
  const [radius, setRadius] = useState(20);

  const accent = useMemo(() => {
    const palette: Record<string, string> = {
      aurora: '#8b5cf6',
      obsidian: '#38bdf8',
      'neon-futuristic': '#22d3ee',
    };
    return palette[theme];
  }, [theme]);

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-6 text-white md:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-violet-300">StackVibe UI</p>
            <h1 className="mt-2 text-3xl font-semibold">Playground</h1>
          </div>

          <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <a
              href="https://stackvibe-studio.github.io/stackvibe-ui/"
              className="rounded-full border border-white/10 px-3 py-1.5 hover:text-white"
            >
              Docs
            </a>
            <a
              href="https://www.npmjs.com/settings/stackvibe-studio/packages"
              className="rounded-full border border-white/10 px-3 py-1.5 hover:text-white"
            >
              npm
            </a>
            <a
              href="https://github.com/StackVibe-Studio/stackvibe-ui"
              className="rounded-full border border-white/10 px-3 py-1.5 hover:text-white"
            >
              GitHub
            </a>
          </nav>

          <div className="flex flex-wrap gap-2">
            {presets.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setTheme(preset)}
                className={`rounded-full px-3 py-1.5 text-sm transition ${theme === preset ? 'bg-violet-500 text-white' : 'bg-white/10 text-slate-200 hover:bg-white/15'}`}
              >
                {preset}
              </button>
            ))}
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <SpotlightCard className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
            <Glass3DCard depth={42} blur={18} glow tilt interactive>
              <div className="space-y-4 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">Live preview</span>
                  <Badge variant="primary">{theme}</Badge>
                </div>
                <h2 className="text-3xl font-semibold text-white">Design beyond the ordinary.</h2>
                <Input placeholder="Search components" />
                <div className="flex gap-3">
                  <Button>Launch</Button>
                  <Button variant="secondary">Explore</Button>
                </div>
              </div>
            </Glass3DCard>
          </SpotlightCard>

          <Card className="space-y-5 bg-slate-900/80 p-5">
            <h3 className="text-xl font-medium text-white">Properties</h3>
            <div>
              <label className="mb-2 block text-sm text-slate-300">Radius</label>
              <input
                type="range"
                min="8"
                max="40"
                value={radius}
                onChange={(event) => setRadius(Number(event.target.value))}
                className="w-full accent-violet-500"
              />
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900 p-4">
              <p className="text-sm text-slate-300">Accent</p>
              <div className="mt-3 flex items-center gap-3">
                <span
                  className="h-8 w-8 rounded-full border border-white/20"
                  style={{ background: accent }}
                />
                <span className="text-lg font-medium text-white">{accent}</span>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Generated code</p>
              <pre className="mt-3 overflow-auto text-xs text-slate-200">{`<Button radius={${radius}} tone="${theme}">Launch</Button>`}</pre>
            </div>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="bg-slate-900/80 p-5">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white">Form components</h3>
              <Input placeholder="Project name" />
              <Textarea rows={3} placeholder="Describe the workflow..." />
              <Select defaultValue="pro">
                <option value="starter">Starter</option>
                <option value="pro">Professional</option>
                <option value="team">Team</option>
              </Select>
              <label className="flex items-center gap-3 text-sm text-slate-200">
                <Checkbox defaultChecked />
                Enable premium defaults
              </label>
            </div>
          </Card>

          <Alert title="System status" variant="success" className="bg-emerald-500/10">
            The component playground is synced with the design tokens and package exports used in
            production.
          </Alert>
        </div>
      </div>
    </div>
  );
}
