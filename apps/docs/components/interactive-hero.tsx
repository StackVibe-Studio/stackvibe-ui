'use client';

import { Badge, Button, Card, Input } from '@stackvibe-studio/ui';
import dynamic from 'next/dynamic';

const SpotlightCard = dynamic(
  () => import('@stackvibe-studio/motion').then((module) => module.SpotlightCard),
  { ssr: false }
);

const TextReveal = dynamic(
  () => import('@stackvibe-studio/motion').then((module) => module.TextReveal),
  { ssr: false }
);

const Glass3DCard = dynamic(
  () => import('@stackvibe-studio/three').then((module) => module.Glass3DCard),
  { ssr: false }
);

export function InteractiveHero() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8 flex flex-wrap gap-3">
          <Badge variant="secondary">Open-source-first</Badge>
          <Badge variant="outline">React 19</Badge>
          <Badge variant="primary">Tailwind UI</Badge>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <TextReveal className="max-w-2xl text-5xl font-semibold tracking-tight md:text-7xl">
              Design beyond the ordinary.
            </TextReveal>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              An entirely new way to build React interfaces. Explore customizable components, fluid
              motion, and immersive 3D experiences in one powerful ecosystem.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg">Explore Components</Button>
              <Button size="lg" variant="secondary">
                Get Started
              </Button>
            </div>
          </div>

          <SpotlightCard className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-violet-500/20">
            <Glass3DCard depth={42} blur={18} glow tilt interactive>
              <div className="space-y-4 p-2">
                <Card className="bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">StackVibe UI</span>
                    <Badge variant="primary">Live</Badge>
                  </div>
                  <h2 className="mt-4 text-2xl font-medium">Premium motion, core UX, 3D depth.</h2>
                  <div className="mt-4">
                    <Input placeholder="Search components" />
                  </div>
                </Card>
              </div>
            </Glass3DCard>
          </SpotlightCard>
        </div>
      </section>
    </main>
  );
}
