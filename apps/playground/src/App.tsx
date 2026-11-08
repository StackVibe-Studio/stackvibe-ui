import { SpotlightCard } from '@stackvibe-studio/motion';
import { Glass3DCard } from '@stackvibe-studio/three';
import { Badge, Button, Card, Input } from '@stackvibe-studio/ui';
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
    <div className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28rem] text-violet-300">StackVibe UI</p>
            <h1 className="mt-2 text-3xl font-semibold">Playground</h1>
          </div>
          <div className="flex gap-2">
            {presets.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setTheme(preset)}
                className={`rounded-full px-3 py-1.5 text-sm ${theme === preset ? 'bg-violet-500 text-white' : 'bg-white/10 text-slate-200'}`}
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
                <h2 className="text-3xl font-semibold">Design beyond the ordinary.</h2>
                <Input placeholder="Search components" />
                <div className="flex gap-3">
                  <Button>Launch</Button>
                  <Button variant="secondary">Explore</Button>
                </div>
              </div>
            </Glass3DCard>
          </SpotlightCard>

          <Card className="space-y-5 p-5">
            <h3 className="text-xl font-medium">Properties</h3>
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
                <span className="text-lg font-medium">{accent}</span>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Generated code</p>
              <pre className="mt-3 overflow-auto text-xs text-slate-200">{`<Button radius={${radius}} tone="${theme}">Launch</Button>`}</pre>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
