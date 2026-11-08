import { useState, useMemo, useEffect } from 'react';
import {
  FadeInSection,
  Magnetic,
  Marquee,
  NumberTicker,
  SpotlightCard,
  TextReveal,
  TiltCard,
} from '@stackvibe-studio/motion';
import {
  FloatingSphere,
  Glass3DCard,
  OrbCluster,
  WaveCanvas,
} from '@stackvibe-studio/three';
import {
  Accordion,
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DropdownMenu,
  Input,
  Progress,
  Select,
  Skeleton,
  Switch,
  Tabs,
  Textarea,
  toast,
  Toaster,
  Tooltip,
} from '@stackvibe-studio/ui';
import {
  applyTheme,
  getThemeCSSVariables,
  listThemes,
  resolveTheme,
  type ThemeName,
} from '@stackvibe-studio/themes';

export default function App() {
  // Theme & token state
  const [theme, setTheme] = useState<ThemeName>('aurora');
  const [radius, setRadius] = useState(16);
  const [activeTab, setActiveTab] = useState<'ui' | 'motion' | 'three'>('ui');

  // UI Interactive States
  const [dialogOpen, setDialogOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerPosition, setDrawerPosition] = useState<'left' | 'right' | 'bottom'>('right');
  const [codeModalOpen, setCodeModalOpen] = useState(false);
  const [isLoadingSkeleton, setIsLoadingSkeleton] = useState(false);
  const [progressValue, setProgressValue] = useState(72);
  const [switchHardware, setSwitchHardware] = useState(true);
  const [switchTelemetry, setSwitchTelemetry] = useState(false);
  const [checkboxAccepted, setCheckboxAccepted] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);

  // Motion Interactive States
  const [magneticStrength, setMagneticStrength] = useState(0.35);
  const [marqueeSpeed, setMarqueeSpeed] = useState(25);
  const [marqueeDirection, setMarqueeDirection] = useState<'left' | 'right'>('left');
  const [tiltGlare, setTiltGlare] = useState(true);
  const [counterBase, setCounterBase] = useState(14800);

  // 3D Canvas States
  const [waveWireframe, setWaveWireframe] = useState(false);
  const [sphereSpeed, setSphereSpeed] = useState(1.2);
  const [sphereScale, setSphereScale] = useState(1.1);

  const themeTokens = useMemo(() => resolveTheme(theme), [theme]);
  const presets = useMemo(() => listThemes(), []);

  // Synchronize CSS custom properties and apply theme to DOM
  useEffect(() => {
    applyTheme(theme);
    if (typeof document !== 'undefined') {
      document.documentElement.style.setProperty('--radius', `${radius}px`);
      document.documentElement.style.setProperty('--sv-radius', `${radius}px`);
    }
  }, [theme, radius]);

  // Determine safe base URLs for GitHub Pages vs Localhost
  const isGithubPages = typeof window !== 'undefined' && window.location.hostname.includes('github.io');
  const docsHomeUrl = isGithubPages ? '/stackvibe-ui/' : '/';
  const componentsGalleryUrl = isGithubPages ? '/stackvibe-ui/docs/components/' : '/docs/components/';

  const generatedCode = useMemo(() => {
    return `// StackVibe UI - ${theme.toUpperCase()} Preset Configuration
import { Button, Card, Dialog, Toast, Toaster } from '@stackvibe-studio/ui';
import { Magnetic, TiltCard, NumberTicker } from '@stackvibe-studio/motion';
import { WaveCanvas, FloatingSphere } from '@stackvibe-studio/three';
import { applyTheme } from '@stackvibe-studio/themes';

export default function MyComponent() {
  // Theme initialization
  useEffect(() => {
    applyTheme('${theme}');
  }, []);

  return (
    <div style={{ borderRadius: '${radius}px' }}>
      <Toaster />
      <Card className="p-6">
        <h2 className="text-xl font-bold">StackVibe UI Showcase</h2>
        <Magnetic strength={${magneticStrength}}>
          <Button variant="primary">Interactive Magnetic</Button>
        </Magnetic>
        <NumberTicker value={${counterBase}} />
      </Card>
    </div>
  );
}`;
  }, [theme, radius, magneticStrength, counterBase]);

  return (
    <div
      className="min-h-screen px-3 sm:px-6 py-4 sm:py-8 text-white md:px-8 selection:bg-violet-500/30 selection:text-white transition-colors duration-500 overflow-x-hidden"
      style={{
        background: `radial-gradient(circle at top, ${themeTokens.primary}26, transparent 40%), radial-gradient(circle at bottom right, ${themeTokens.secondary}22, transparent 35%), #030712`,
      }}
    >
      <Toaster />

      <div className="mx-auto max-w-7xl space-y-6 sm:space-y-8">
        {/* Navigation Bar */}
        <header className="flex flex-col gap-4 rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-900/80 p-4 sm:p-5 backdrop-blur-xl md:flex-row md:items-center md:justify-between shadow-2xl">
          <div className="flex items-center gap-3">
            <span
              className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl text-base sm:text-lg font-bold text-white shadow-xl transition-all shrink-0"
              style={{
                background: `linear-gradient(135deg, ${themeTokens.primary}, ${themeTokens.secondary})`,
                boxShadow: `0 0 25px ${themeTokens.glow}`,
              }}
            >
              S
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-bold tracking-tight">StackVibe Studio</span>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] sm:text-[11px] font-semibold text-slate-200 ring-1 ring-white/15">
                  Playground v0.3.2
                </span>
              </div>
              <p className="text-xs text-slate-400">Interactive Design System, Physics &amp; WebGL Sandbox</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <a
              href={docsHomeUrl}
              className="rounded-xl border border-white/10 bg-white/5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 font-medium text-slate-200 transition hover:bg-white/15 hover:text-white"
            >
              ← Docs
            </a>
            <a
              href={componentsGalleryUrl}
              className="rounded-xl border border-white/10 bg-white/5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 font-medium text-slate-200 transition hover:bg-white/15 hover:text-white"
            >
              30 Components
            </a>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setCodeModalOpen(true)}
              className="flex items-center gap-1.5 text-xs px-2.5 sm:px-3"
            >
              <span>Export Code ⎘</span>
            </Button>
            <a
              href="https://github.com/StackVibe-Studio/stackvibe-ui"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 font-medium text-slate-200 transition hover:bg-white/15 hover:text-white"
            >
              GitHub ↗
            </a>
          </div>
        </header>

        {/* Global Controls & Theme Palettes Bar */}
        <div className="space-y-4 rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-900/70 p-4 sm:p-5 backdrop-blur-xl shadow-xl">
          <div className="flex flex-col gap-3 sm:gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Theme Presets:</span>
              <span className="font-mono text-xs font-bold capitalize text-white" style={{ color: themeTokens.primary }}>
                {theme.replace('-', ' ')}
              </span>
            </div>

            {/* Radius & Quick Action Controls */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-xs text-slate-300">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <span className="font-semibold text-slate-400">Radius:</span>
                <input
                  type="range"
                  min="4"
                  max="32"
                  value={radius}
                  onChange={(e) => setRadius(Number(e.target.value))}
                  className="w-24 sm:w-28 accent-violet-500 cursor-pointer"
                />
                <span className="font-mono font-bold text-white w-8">{radius}px</span>
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => {
                  toast.success(`Theme tokens active: ${theme}`);
                }}
              >
                Inspect Tokens
              </Button>
            </div>
          </div>

          {/* Theme Palette Buttons with Swatches */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {presets.map((preset) => {
              const pTokens = resolveTheme(preset);
              const isActive = theme === preset;
              return (
                <button
                  key={preset}
                  type="button"
                  onClick={() => {
                    setTheme(preset);
                    toast.info(`Theme set to ${preset.replace('-', ' ')}`);
                  }}
                  className={`flex items-center gap-1.5 sm:gap-2 rounded-xl px-2.5 sm:px-3 py-1.5 text-xs font-medium transition cursor-pointer capitalize border ${
                    isActive
                      ? 'border-white/30 text-white font-bold shadow-lg'
                      : 'border-white/5 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                  style={
                    isActive
                      ? {
                          backgroundColor: `${pTokens.primary}25`,
                          borderColor: pTokens.primary,
                          boxShadow: `0 0 16px ${pTokens.glow}`,
                        }
                      : {}
                  }
                >
                  <span
                    className="h-2 sm:h-2.5 w-2 sm:w-2.5 rounded-full ring-1 ring-white/30 shrink-0"
                    style={{ backgroundColor: pTokens.primary }}
                  />
                  <span className="truncate">{preset.replace('-', ' ')}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex overflow-x-auto no-scrollbar sm:flex-wrap gap-2 border-b border-white/10 pb-3">
          {[
            { id: 'ui', label: 'Core UI', fullLabel: '1. Core UI Primitives & Overlays', count: '14+' },
            { id: 'motion', label: 'Motion & Physics', fullLabel: '2. Motion, Physics & Spring Dynamics', count: '6+' },
            { id: 'three', label: '3D WebGL', fullLabel: '3. 3D WebGL Canvases & Shaders', count: '4+' },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 rounded-2xl px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs font-semibold transition cursor-pointer border whitespace-nowrap ${
                  isActive
                    ? 'border-white/20 bg-white/10 text-white shadow-lg'
                    : 'border-transparent text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
                style={
                  isActive
                    ? {
                        borderColor: `${themeTokens.primary}60`,
                        boxShadow: `0 0 18px ${themeTokens.glow}`,
                      }
                    : {}
                }
              >
                <span className="sm:hidden">{tab.label}</span>
                <span className="hidden sm:inline">{tab.fullLabel}</span>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-slate-300">
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* TAB 1: Core UI Primitives & Overlays */}
        {/* ========================================================= */}
        {activeTab === 'ui' && (
          <div className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              {/* Left Column: Interactive Controls */}
              <div className="space-y-6">
                {/* Modal Triggers & Notification Dispatches */}
                <Card
                  className="space-y-5 bg-slate-900/80 p-6 border-white/10 shadow-xl"
                  style={{ borderRadius: `${radius}px` }}
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white">Interactive Overlays & Dialogs</h3>
                      <p className="text-xs text-slate-400">Accessible modals, slide-out sheets, and notification triggers</p>
                    </div>
                    <Badge variant="primary">WAI-ARIA</Badge>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      onClick={() => setDialogOpen(true)}
                      style={{ borderRadius: `${radius}px` }}
                    >
                      Open Modal Dialog
                    </Button>

                    <Button
                      variant="secondary"
                      onClick={() => setDrawerOpen(true)}
                      style={{ borderRadius: `${radius}px` }}
                    >
                      Slide-out Drawer ({drawerPosition})
                    </Button>

                    <DropdownMenu
                      trigger={<Button variant="outline" style={{ borderRadius: `${radius}px` }}>Drawer Position ▾</Button>}
                      items={[
                        { id: 'right', label: 'Position: Right (Default)', onClick: () => { setDrawerPosition('right'); setDrawerOpen(true); } },
                        { id: 'left', label: 'Position: Left', onClick: () => { setDrawerPosition('left'); setDrawerOpen(true); } },
                        { id: 'bottom', label: 'Position: Bottom Sheet', onClick: () => { setDrawerPosition('bottom'); setDrawerOpen(true); } },
                      ]}
                    />

                    <DropdownMenu
                      trigger={<Button variant="ghost" style={{ borderRadius: `${radius}px` }}>Actions Menu ▾</Button>}
                      items={[
                        { id: '1', label: 'User Profile & Preferences', onClick: () => toast.info('Opened User Profile') },
                        { id: '2', label: 'Export Current Theme Config', onClick: () => toast.success('Theme manifest exported!') },
                        { id: '3', label: 'Purge Local Sandbox Cache', destructive: true, onClick: () => toast.error('Cache purged successfully') },
                      ]}
                    />
                  </div>

                  {/* Toast Notification Row */}
                  <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 space-y-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Toast Dispatch Engine
                    </span>
                    <div className="flex flex-wrap gap-2.5">
                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() => toast.success('Deployment verified and live on CDN!', 'Success')}
                      >
                        ✓ Success Toast
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => toast.info('Token updates applied across workspace.', 'Info')}
                      >
                        ℹ Info Toast
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => toast.error('Connection timed out on secondary node.', 'Error')}
                      >
                        ✕ Error Toast
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* Form Controls & Inputs */}
                <Card
                  className="space-y-5 bg-slate-900/80 p-6 border-white/10 shadow-xl"
                  style={{ borderRadius: `${radius}px` }}
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white">Form Inputs & Responsive Controls</h3>
                      <p className="text-xs text-slate-400">Real-time state binding and interactive validation</p>
                    </div>
                    <Badge variant="secondary">Forms</Badge>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-300">Text Input</label>
                      <Input
                        placeholder="Type to test input..."
                        style={{ borderRadius: `${radius}px` }}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-300">Select Architecture</label>
                      <Select defaultValue="monorepo" style={{ borderRadius: `${radius}px` }}>
                        <option value="monorepo">Turborepo + pnpm (Monorepo)</option>
                        <option value="nextjs">Next.js 15 App Router</option>
                        <option value="vite">Vite 6 + React 19</option>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300">Multiline Textarea</label>
                    <Textarea
                      rows={2}
                      placeholder="Write your custom notes or tokens here..."
                      style={{ borderRadius: `${radius}px` }}
                    />
                  </div>

                  {/* Switches & Checkboxes */}
                  <div className="grid gap-4 sm:grid-cols-2 pt-2">
                    <div className="rounded-xl border border-white/10 bg-slate-950/50 p-3.5 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-medium text-white">Hardware Acceleration</p>
                          <p className="text-[10px] text-slate-400">Force WebGL compositing</p>
                        </div>
                        <Switch
                          checked={switchHardware}
                          onCheckedChange={(v) => {
                            setSwitchHardware(v);
                            toast.info(`Hardware acceleration: ${v ? 'ON' : 'OFF'}`);
                          }}
                        />
                      </div>
                      <div className="flex items-center justify-between border-t border-white/10 pt-3">
                        <div>
                          <p className="text-xs font-medium text-white">Real-time Telemetry</p>
                          <p className="text-[10px] text-slate-400">Stream performance metrics</p>
                        </div>
                        <Switch
                          checked={switchTelemetry}
                          onCheckedChange={(v) => {
                            setSwitchTelemetry(v);
                            toast.info(`Telemetry streaming: ${v ? 'ON' : 'OFF'}`);
                          }}
                        />
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-slate-950/50 p-3.5 flex flex-col justify-between">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          checked={checkboxAccepted}
                          onCheckedChange={(c) => setCheckboxAccepted(!!c)}
                          id="terms"
                        />
                        <label htmlFor="terms" className="text-xs text-slate-300 cursor-pointer">
                          <span className="font-semibold text-white">Accept license terms</span>
                          <p className="text-[10px] text-slate-400 mt-0.5">StackVibe UI is released under the permissive MIT License.</p>
                        </label>
                      </div>

                      <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                        <Tooltip content="Tooltip attached to Badge primitive" position="top">
                          <Badge variant="outline" className="cursor-help">Hover for Tooltip</Badge>
                        </Tooltip>
                        <Tooltip content="Secondary button tooltip" position="bottom">
                          <Button size="sm" variant="ghost">Bottom Tooltip</Button>
                        </Tooltip>
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Progress Bar */}
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-300">Live Progress Bar:</span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setProgressValue((prev) => Math.max(0, prev - 10))}
                          className="rounded bg-white/10 px-2 py-0.5 font-bold hover:bg-white/20"
                        >
                          -10%
                        </button>
                        <span className="font-mono font-bold text-violet-300">{progressValue}%</span>
                        <button
                          type="button"
                          onClick={() => setProgressValue((prev) => Math.min(100, prev + 10))}
                          className="rounded bg-white/10 px-2 py-0.5 font-bold hover:bg-white/20"
                        >
                          +10%
                        </button>
                      </div>
                    </div>
                    <Progress value={progressValue} variant="primary" showLabel />
                  </div>
                </Card>
              </div>

              {/* Right Column: Feedback, Skeletons, Accordions & Avatars */}
              <div className="space-y-6">
                {/* Skeleton Loader Simulation Card */}
                <Card
                  className="space-y-4 bg-slate-900/80 p-6 border-white/10 shadow-xl"
                  style={{ borderRadius: `${radius}px` }}
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <h3 className="text-sm font-bold text-white">Skeleton Loading Simulation</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-slate-400">Toggle Skeleton:</span>
                      <Switch
                        checked={isLoadingSkeleton}
                        onCheckedChange={setIsLoadingSkeleton}
                      />
                    </div>
                  </div>

                  {isLoadingSkeleton ? (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-1.5 flex-1">
                          <Skeleton className="h-4 w-3/4" />
                          <Skeleton className="h-3 w-1/2" />
                        </div>
                      </div>
                      <Skeleton className="h-16 w-full rounded-xl" />
                      <div className="flex gap-2">
                        <Skeleton className="h-8 w-20 rounded-lg" />
                        <Skeleton className="h-8 w-24 rounded-lg" />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Avatar
                          alt="Alex Chen"
                          fallback="AC"
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                        />
                        <div>
                          <p className="text-sm font-bold text-white">Alex Chen</p>
                          <p className="text-xs text-slate-400">Design Systems Architect</p>
                        </div>
                      </div>
                      <p className="text-xs leading-relaxed text-slate-300">
                        Content loaded dynamically. All styles adapt fluidly to the active theme palette.
                      </p>
                      <div className="flex gap-2">
                        <Badge variant="primary">Verified</Badge>
                        <Badge variant="secondary">Pro Member</Badge>
                      </div>
                    </div>
                  )}
                </Card>

                {/* System Alerts */}
                <div className="space-y-3">
                  <Alert variant="info" title="Zero Layout Shift">
                    All components are engineered with deterministic aspect ratios.
                  </Alert>
                  <Alert variant="success" title="React 19 Concurrent Mode">
                    Fully optimized for concurrent rendering and Next.js static generation.
                  </Alert>
                </div>

                {/* Collapsible Accordion */}
                <Card
                  className="space-y-4 bg-slate-900/80 p-6 border-white/10 shadow-xl"
                  style={{ borderRadius: `${radius}px` }}
                >
                  <h3 className="text-sm font-bold text-white border-b border-white/10 pb-2">
                    Interactive FAQ Accordion
                  </h3>
                  <Accordion
                    items={[
                      {
                        id: 'faq-1',
                        title: 'How does StackVibe resolve tokens?',
                        content: 'Design tokens are resolved via CSS custom properties and can be overridden dynamically at runtime or injected via Tailwind utilities.',
                      },
                      {
                        id: 'faq-2',
                        title: 'Can I add custom themes?',
                        content: 'Yes! Define your ThemeTokens object and register it with the theme presets dictionary.',
                      },
                      {
                        id: 'faq-3',
                        title: 'Are these components accessible?',
                        content: 'Yes. All interactive primitives adhere strictly to W3C WAI-ARIA standards with full keyboard navigation and focus management.',
                      },
                    ]}
                    defaultOpen={['faq-1']}
                  />
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: Motion, Physics & Spring Dynamics */}
        {/* ========================================================= */}
        {activeTab === 'motion' && (
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* 3D Tilt Card with Controls */}
              <Card
                className="space-y-4 bg-slate-900/80 p-6 border-white/10 shadow-xl"
                style={{ borderRadius: `${radius}px` }}
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">3D Specular Tilt Card</h3>
                    <p className="text-xs text-slate-400">Cursor coordinate tracking with realistic specular lighting</p>
                  </div>
                  <Badge variant="secondary">Physics</Badge>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span>Enable Specular Glare:</span>
                  <Switch checked={tiltGlare} onCheckedChange={setTiltGlare} />
                </div>

                <TiltCard maxTilt={22} glare={tiltGlare} className="h-64 flex flex-col justify-center items-center text-center p-6">
                  <div className="space-y-2">
                    <span className="text-2xl font-black text-white">Interactive 3D Depth</span>
                    <p className="text-xs text-slate-300 max-w-xs">
                      Move your mouse across this card to see real-time perspective distortion and reflection shine.
                    </p>
                    <div className="pt-3">
                      <Magnetic strength={0.4}>
                        <Button size="sm" variant="primary">Magnetic Inner Button ⚡</Button>
                      </Magnetic>
                    </div>
                  </div>
                </TiltCard>
              </Card>

              {/* Magnetic Attraction Controls */}
              <Card
                className="space-y-5 bg-slate-900/80 p-6 border-white/10 shadow-xl"
                style={{ borderRadius: `${radius}px` }}
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">Magnetic Cursor Attraction</h3>
                    <p className="text-xs text-slate-400">Physics spring pulling elements toward the cursor</p>
                  </div>
                  <Badge variant="primary">Springs</Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="font-semibold">Attraction Strength:</span>
                    <span className="font-mono font-bold text-violet-300">{magneticStrength}</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="0.8"
                    step="0.05"
                    value={magneticStrength}
                    onChange={(e) => setMagneticStrength(Number(e.target.value))}
                    className="w-full accent-violet-500 cursor-pointer"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 py-6 rounded-2xl border border-white/10 bg-slate-950/60">
                  <Magnetic strength={magneticStrength}>
                    <Button variant="primary">Primary Magnetic</Button>
                  </Magnetic>
                  <Magnetic strength={magneticStrength}>
                    <Button variant="secondary">Secondary</Button>
                  </Magnetic>
                  <Magnetic strength={magneticStrength}>
                    <Button variant="outline">Outline</Button>
                  </Magnetic>
                </div>
              </Card>
            </div>

            {/* Live Animated Number Ticker Card */}
            <Card
              className="space-y-5 bg-slate-900/80 p-6 border-white/10 shadow-xl"
              style={{ borderRadius: `${radius}px` }}
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <h3 className="text-lg font-bold text-white">Smooth Animated Counters</h3>
                  <p className="text-xs text-slate-400">Cubic bezier ease-out numeric animation</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setCounterBase((prev) => prev + 2500)}
                  >
                    +2,500
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setCounterBase(10000)}
                  >
                    Reset
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4 text-center">
                  <div className="text-3xl font-extrabold text-white">
                    <NumberTicker value={counterBase} suffix="+" />
                  </div>
                  <p className="text-xs text-slate-400 mt-1">NPM Downloads</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4 text-center">
                  <div className="text-3xl font-extrabold text-violet-300">
                    <NumberTicker value={30} suffix=" Components" />
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Design System Scope</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4 text-center">
                  <div className="text-3xl font-extrabold text-cyan-300">
                    <NumberTicker value={100} suffix="%" />
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Strict TypeScript</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4 text-center">
                  <div className="text-3xl font-extrabold text-emerald-300">
                    <NumberTicker value={60} suffix=" FPS" />
                  </div>
                  <p className="text-xs text-slate-400 mt-1">WebGL Animation</p>
                </div>
              </div>
            </Card>

            {/* Infinite Marquee Controls */}
            <Card
              className="space-y-4 bg-slate-900/80 p-6 border-white/10 shadow-xl"
              style={{ borderRadius: `${radius}px` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-white/10 pb-3">
                <div>
                  <h3 className="text-lg font-bold text-white">Infinite Looping Marquee</h3>
                  <p className="text-xs text-slate-400">Silky smooth infinite horizontal marquee with pause-on-hover</p>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Direction:</span>
                    <button
                      type="button"
                      onClick={() => setMarqueeDirection(marqueeDirection === 'left' ? 'right' : 'left')}
                      className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-white capitalize hover:bg-white/15"
                    >
                      {marqueeDirection} ⇄
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Speed:</span>
                    <input
                      type="range"
                      min="10"
                      max="50"
                      value={marqueeSpeed}
                      onChange={(e) => setMarqueeSpeed(Number(e.target.value))}
                      className="w-20 accent-violet-500 cursor-pointer"
                    />
                    <span className="font-mono text-white">{marqueeSpeed}s</span>
                  </div>
                </div>
              </div>

              <div className="py-2">
                <Marquee speed={marqueeSpeed} direction={marqueeDirection} pauseOnHover>
                  {[
                    '⚡ Next.js 15 Ready',
                    '🎨 11 Curated Themes',
                    '💎 Glassmorphism 3D',
                    '✨ Zero Layout Shift',
                    '⚛️ React 19 Native',
                    '🔒 Strict TypeScript',
                    '🚀 WAI-ARIA Accessible',
                    '📦 Modular Tree-shaking',
                  ].map((text, i) => (
                    <span
                      key={i}
                      className="mx-3 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/80 px-4 py-2 text-xs font-semibold text-slate-200"
                    >
                      {text}
                    </span>
                  ))}
                </Marquee>
              </div>
            </Card>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: 3D WebGL Canvases & Shaders */}
        {/* ========================================================= */}
        {activeTab === 'three' && (
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* WaveCanvas */}
              <Card
                className="space-y-4 bg-slate-900/80 p-6 border-white/10 shadow-xl"
                style={{ borderRadius: `${radius}px` }}
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">WaveCanvas Mesh</h3>
                    <p className="text-xs text-slate-400">Real-time undulating sinusoidal plane with dynamic light</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">Wireframe:</span>
                    <Switch checked={waveWireframe} onCheckedChange={setWaveWireframe} />
                  </div>
                </div>

                <WaveCanvas
                  color={themeTokens.primary}
                  wireframe={waveWireframe}
                  className="h-72"
                />
              </Card>

              {/* FloatingSphere */}
              <Card
                className="space-y-4 bg-slate-900/80 p-6 border-white/10 shadow-xl"
                style={{ borderRadius: `${radius}px` }}
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">Floating Organic Sphere</h3>
                    <p className="text-xs text-slate-400">Mesh distort material with physics-based floating</p>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="text-slate-400">Scale:</span>
                    <input
                      type="range"
                      min="0.8"
                      max="1.5"
                      step="0.1"
                      value={sphereScale}
                      onChange={(e) => setSphereScale(Number(e.target.value))}
                      className="w-20 accent-violet-500 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="flex justify-center items-center h-72 rounded-3xl border border-white/10 bg-slate-950/60 overflow-hidden">
                  <FloatingSphere
                    color={themeTokens.secondary}
                    scale={sphereScale}
                    speed={sphereSpeed}
                  />
                </div>
              </Card>
            </div>

            {/* OrbCluster & Glass3DCard Showcase */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card
                className="space-y-4 bg-slate-900/80 p-6 border-white/10 shadow-xl"
                style={{ borderRadius: `${radius}px` }}
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">OrbCluster System</h3>
                    <p className="text-xs text-slate-400">Multi-layered spatial ambient spheres</p>
                  </div>
                  <Badge variant="primary">Hero Element</Badge>
                </div>
                <OrbCluster
                  colors={[
                    themeTokens.primary,
                    themeTokens.secondary,
                    themeTokens.accent,
                    '#38bdf8',
                  ]}
                />
              </Card>

              <Card
                className="space-y-4 bg-slate-900/80 p-6 border-white/10 shadow-xl"
                style={{ borderRadius: `${radius}px` }}
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">Glass3DCard</h3>
                    <p className="text-xs text-slate-400">Frosted glass 3D card container with specular transmission</p>
                  </div>
                  <Badge variant="secondary">Glassmorphism</Badge>
                </div>
                <Glass3DCard className="p-8 flex flex-col justify-between">
                  <div>
                    <Badge variant="outline">Next-Gen Surface</Badge>
                    <h4 className="text-2xl font-black text-white mt-3">Interactive Glass Layer</h4>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      Renders depth blur and specular transmission over real WebGL geometries.
                    </p>
                  </div>
                  <div className="flex gap-2 pt-4">
                    <Button size="sm">Explore Shaders</Button>
                    <Button size="sm" variant="outline">Inspect Buffer</Button>
                  </div>
                </Glass3DCard>
              </Card>
            </div>
          </div>
        )}

        {/* Modal Dialog Instance */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogHeader>
            <DialogTitle>Production Release Confirmation</DialogTitle>
            <DialogDescription>
              Deploying theme &quot;{theme}&quot; and 30 component primitives to production.
            </DialogDescription>
          </DialogHeader>
          <div className="my-4 rounded-xl border border-white/10 bg-slate-950 p-4 font-mono text-xs space-y-2">
            <div className="text-slate-400">Active Palette Tokens:</div>
            <div className="text-violet-300">--primary: {themeTokens.primary}</div>
            <div className="text-cyan-300">--secondary: {themeTokens.secondary}</div>
            <div className="text-white">--radius: {radius}px</div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button
              onClick={() => {
                setDialogOpen(false);
                toast.success('Successfully deployed to production CDN!');
              }}
            >
              Confirm Deployment
            </Button>
          </DialogFooter>
        </Dialog>

        {/* Drawer Sheet Instance */}
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} position={drawerPosition}>
          <DrawerHeader>
            <DrawerTitle>Design System Properties ({drawerPosition})</DrawerTitle>
          </DrawerHeader>
          <div className="space-y-4 text-xs text-slate-300">
            <p>Customize spatial depth, shadow radii, and theme presets directly from this slide-out drawer panel.</p>
            <div className="space-y-2">
              <label className="font-semibold text-white">Active Theme Preset</label>
              <p className="capitalize font-mono text-violet-300 font-bold">{theme}</p>
            </div>
            <div className="space-y-2">
              <label className="font-semibold text-white">CSS Custom Properties Manifest</label>
              <pre className="rounded-xl border border-white/10 bg-slate-950 p-3 font-mono text-[11px] text-slate-200 overflow-x-auto max-h-60">
                {JSON.stringify(getThemeCSSVariables(theme), null, 2)}
              </pre>
            </div>
            <div className="flex gap-2 pt-2">
              <Button
                size="sm"
                className="w-full"
                onClick={() => {
                  navigator.clipboard?.writeText(JSON.stringify(getThemeCSSVariables(theme), null, 2));
                  toast.success('Tokens copied to clipboard!');
                }}
              >
                Copy JSON
              </Button>
              <Button size="sm" variant="outline" className="w-full" onClick={() => setDrawerOpen(false)}>
                Close Drawer
              </Button>
            </div>
          </div>
        </Drawer>

        {/* Export TSX Code Modal */}
        <Dialog open={codeModalOpen} onOpenChange={setCodeModalOpen}>
          <DialogHeader>
            <DialogTitle>Generated Component Code (TSX)</DialogTitle>
            <DialogDescription>
              Ready-to-use snippet incorporating your active &quot;{theme}&quot; theme and settings.
            </DialogDescription>
          </DialogHeader>
          <div className="my-3">
            <pre className="rounded-2xl border border-white/10 bg-slate-950 p-4 font-mono text-xs text-slate-200 overflow-x-auto max-h-80 leading-relaxed">
              {generatedCode}
            </pre>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCodeModalOpen(false)}>Close</Button>
            <Button
              onClick={() => {
                navigator.clipboard?.writeText(generatedCode);
                toast.success('Code copied to clipboard!');
                setCodeModalOpen(false);
              }}
            >
              Copy TSX Code
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  );
}
