'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Badge, Button, Card } from '@stackvibe-studio/ui';
import { toSiteHref } from '../../../lib/site';
import { DocsShell } from '../../../components/docs-shell';

const allComponents = [
  // Core UI
  { name: 'Button', href: '/docs/components/button', category: 'core', tag: 'Action', desc: 'Action control with 4 variants, 3 sizes, loading indicators, and anchor mode.' },
  { name: 'Input', href: '/docs/components/input', category: 'core', tag: 'Form', desc: 'Text input with dark styling, accessible focus states, and seamless validation.' },
  { name: 'Textarea', href: '/docs/components/textarea', category: 'core', tag: 'Form', desc: 'Multi-line text area with auto-flowing layout and strong contrast.' },
  { name: 'Select', href: '/docs/components/select', category: 'core', tag: 'Form', desc: 'Dropdown selector with native keyboard support and modern styling.' },
  { name: 'Checkbox', href: '/docs/components/checkbox', category: 'core', tag: 'Form', desc: 'Accessible boolean toggle for settings, lists, and multi-selection.' },
  { name: 'Switch', href: '/docs/components/switch', category: 'core', tag: 'Form', desc: 'Sliding toggle switch with animated thumb for fast preference changes.' },
  { name: 'Card', href: '/docs/components/card', category: 'core', tag: 'Layout', desc: 'Surface container with glassmorphic borders and soft backdrop blur.' },
  { name: 'Dialog', href: '/docs/components/dialog', category: 'core', tag: 'Overlay', desc: 'Accessible modal dialog with overlay backdrop blur, escape key, and header/footer.' },
  { name: 'Drawer', href: '/docs/components/drawer', category: 'core', tag: 'Overlay', desc: 'Slide-out panel from left, right, or bottom with smooth animation.' },
  { name: 'Tooltip', href: '/docs/components/tooltip', category: 'core', tag: 'Overlay', desc: 'Hover/focus floating tooltip with arrow and directional positioning.' },
  { name: 'Accordion', href: '/docs/components/accordion', category: 'core', tag: 'Disclosure', desc: 'Collapsible accordion panels with smooth rotation and single/multi expand.' },
  { name: 'Dropdown Menu', href: '/docs/components/dropdown-menu', category: 'core', tag: 'Navigation', desc: 'Action popover menu with click-outside listener and keyboard navigation.' },
  { name: 'Tabs', href: '/docs/components/tabs', category: 'core', tag: 'Navigation', desc: 'Tabbed interface for organizing multi-view panels and complex layouts.' },
  { name: 'Alert', href: '/docs/components/alert', category: 'core', tag: 'Feedback', desc: 'Contextual notification banners with success, info, warning, and error tones.' },
  { name: 'Toast', href: '/docs/components/toast', category: 'core', tag: 'Feedback', desc: 'Notification toast system with toast.success(), toast.error(), and auto-dismiss.' },
  { name: 'Progress', href: '/docs/components/progress', category: 'core', tag: 'Feedback', desc: 'Linear progress bar with gradient fills, percentage display, and multiple tones.' },
  { name: 'Badge', href: '/docs/components/badge', category: 'core', tag: 'Meta', desc: 'Compact indicators for status tags, versions, and highlights.' },
  { name: 'Avatar', href: '/docs/components/avatar', category: 'core', tag: 'Media', desc: 'User profile thumbnail with fallback initials and multiple size presets.' },
  { name: 'Skeleton', href: '/docs/components/skeleton', category: 'core', tag: 'Feedback', desc: 'Pulsing loading placeholders for asynchronous data fetching.' },

  // Motion
  { name: 'Spotlight Card', href: '/docs/components/spotlight-card', category: 'motion', tag: 'Motion', desc: 'Interactive card with dynamic cursor-following radial spotlight illumination.' },
  { name: 'Tilt Card', href: '/docs/components/tilt-card', category: 'motion', tag: 'Motion', desc: '3D perspective mouse-tracking tilt card with realistic specular glare reflection.' },
  { name: 'Magnetic Button', href: '/docs/components/magnetic', category: 'motion', tag: 'Motion', desc: 'Physics-based magnetic attraction that draws elements toward the cursor.' },
  { name: 'Number Ticker', href: '/docs/components/number-ticker', category: 'motion', tag: 'Motion', desc: 'Smooth animated counter from 0 to N with cubic easing for metric counters.' },
  { name: 'Marquee', href: '/docs/components/marquee', category: 'motion', tag: 'Motion', desc: 'Infinite looping ticker with pause-on-hover for partners, logos, or news.' },
  { name: 'Fade In Section', href: '/docs/components/fade-in', category: 'motion', tag: 'Motion', desc: 'Scroll-aware reveal wrapper for onboarding sections and storytelling layouts.' },
  { name: 'Text Reveal', href: '/docs/components/text-reveal', category: 'motion', tag: 'Motion', desc: 'Typography reveal effect that animates text elements smoothly on entry.' },

  // 3D
  { name: 'Glass 3D Card', href: '/docs/components/glass-3d-card', category: '3d', tag: '3D Canvas', desc: 'Transparent glass surface with configurable depth and lighting.' },
  { name: 'Wave Canvas', href: '/docs/components/wave-canvas', category: '3d', tag: '3D Canvas', desc: 'Undulating sinusoidal mesh wave canvas responsive to scene time and lighting.' },
  { name: 'Floating Sphere', href: '/docs/components/floating-sphere', category: '3d', tag: '3D Canvas', desc: 'Organic floating distorted sphere with metallic reflection in Three.js.' },
  { name: 'Orb Cluster', href: '/docs/components/orb-cluster', category: '3d', tag: '3D Canvas', desc: 'Layered floating orb scene for hero backgrounds and product visuals.' },
];

export default function DocsComponentsPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'core' | 'motion' | '3d'>('all');

  const filtered = selectedCategory === 'all'
    ? allComponents
    : allComponents.filter((c) => c.category === selectedCategory);

  return (
    <DocsShell
      title="Component Gallery"
      description="Explore 30 production-ready primitives with consistent tokens, accessible focus states, and zero runtime bloat."
    >
      {/* Category selector */}
      <div className="mb-6 sm:mb-8 flex overflow-x-auto no-scrollbar sm:flex-wrap gap-2 border-b border-white/10 pb-3 sm:pb-4">
        {[
          { id: 'all', label: `All Components (${allComponents.length})` },
          { id: 'core', label: 'Core UI (19)' },
          { id: 'motion', label: 'Motion & Physics (7)' },
          { id: '3d', label: '3D WebGL (4)' },
        ].map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id as any)}
            className={`rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold transition cursor-pointer whitespace-nowrap ${
              selectedCategory === cat.id
                ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/25 ring-1 ring-violet-400/40'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((item) => (
          <Link key={item.name} href={item.href} className="group block h-full">
            <Card className="h-full bg-slate-900/80 p-5 transition duration-200 group-hover:border-violet-500/50 group-hover:bg-slate-900 group-hover:shadow-lg group-hover:shadow-violet-500/10">
              <div className="mb-3.5 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-violet-300">
                  {item.tag}
                </span>
                <Badge variant={item.category === 'motion' ? 'secondary' : item.category === '3d' ? 'primary' : 'outline'}>
                  {item.category}
                </Badge>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-violet-200 transition">
                {item.name}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                {item.desc}
              </p>
              <div className="mt-4 flex items-center text-xs font-semibold text-violet-400 group-hover:text-violet-300">
                Inspect component →
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-6 mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] font-bold text-cyan-300">
              Interactive Workbench
            </p>
            <h2 className="mt-1 text-2xl font-bold text-white">Full Playground Experience</h2>
          </div>
          <Button as="a" href={toSiteHref('/playground/')} variant="secondary" size="md">
            Launch Sandbox ⚡
          </Button>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
          Use the live Vite-powered playground to test spatial coordinates, customize border radii, switch theme tokens, and immediately generate production snippets.
        </p>
      </div>
    </DocsShell>
  );
}
