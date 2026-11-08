export type RegistryComponent = {
  name: string;
  packageName: string;
  category: 'core' | 'motion' | '3d' | 'theme';
  description: string;
  dependencies: string[];
  tags: string[];
};

export const componentRegistry: RegistryComponent[] = [
  // Core UI
  {
    name: 'button',
    packageName: '@stackvibe-studio/ui',
    category: 'core',
    description: 'Primary action control with accessible focus, anchor support, and 4 variants.',
    dependencies: [],
    tags: ['button', 'cta', 'action'],
  },
  {
    name: 'input',
    packageName: '@stackvibe-studio/ui',
    category: 'core',
    description: 'Text input with dark styling, accessible focus rings, and validation states.',
    dependencies: [],
    tags: ['input', 'form', 'text'],
  },
  {
    name: 'textarea',
    packageName: '@stackvibe-studio/ui',
    category: 'core',
    description: 'Multi-line text area with auto-flowing layout and strong contrast.',
    dependencies: [],
    tags: ['textarea', 'form', 'multiline'],
  },
  {
    name: 'select',
    packageName: '@stackvibe-studio/ui',
    category: 'core',
    description: 'Dropdown selection menu with accessible option lists and dark theme tokens.',
    dependencies: [],
    tags: ['select', 'dropdown', 'form'],
  },
  {
    name: 'checkbox',
    packageName: '@stackvibe-studio/ui',
    category: 'core',
    description: 'Accessible toggle control designed for settings, lists, and multi-selection.',
    dependencies: [],
    tags: ['checkbox', 'form', 'toggle'],
  },
  {
    name: 'card',
    packageName: '@stackvibe-studio/ui',
    category: 'core',
    description: 'Layout surface container with subtle glassmorphic borders and soft backdrop blur.',
    dependencies: [],
    tags: ['card', 'layout', 'surface'],
  },
  {
    name: 'alert',
    packageName: '@stackvibe-studio/ui',
    category: 'core',
    description: 'Status messaging banners with success, info, warning, and error tones.',
    dependencies: [],
    tags: ['alert', 'feedback', 'notification'],
  },
  {
    name: 'badge',
    packageName: '@stackvibe-studio/ui',
    category: 'core',
    description: 'Compact metadata markers for status tags, versions, and highlights.',
    dependencies: [],
    tags: ['badge', 'meta', 'pill'],
  },
  {
    name: 'avatar',
    packageName: '@stackvibe-studio/ui',
    category: 'core',
    description: 'User profile thumbnail with fallback initials and multiple size presets.',
    dependencies: [],
    tags: ['avatar', 'profile', 'media'],
  },
  {
    name: 'tabs',
    packageName: '@stackvibe-studio/ui',
    category: 'core',
    description: 'Segmented tabs to cleanly separate complex views and workflows.',
    dependencies: [],
    tags: ['tabs', 'navigation', 'content'],
  },
  {
    name: 'skeleton',
    packageName: '@stackvibe-studio/ui',
    category: 'core',
    description: 'Smooth pulsing placeholders that match the visual rhythm of the library.',
    dependencies: [],
    tags: ['loading', 'placeholder', 'skeleton'],
  },
  {
    name: 'dialog',
    packageName: '@stackvibe-studio/ui',
    category: 'core',
    description: 'Accessible modal dialog with overlay backdrop blur, escape key, and header/footer.',
    dependencies: [],
    tags: ['dialog', 'modal', 'overlay'],
  },
  {
    name: 'drawer',
    packageName: '@stackvibe-studio/ui',
    category: 'core',
    description: 'Slide-out drawer panel from left, right, or bottom with smooth animation.',
    dependencies: [],
    tags: ['drawer', 'sheet', 'slideout'],
  },
  {
    name: 'tooltip',
    packageName: '@stackvibe-studio/ui',
    category: 'core',
    description: 'Hover/focus floating tooltip with arrow and directional positioning.',
    dependencies: [],
    tags: ['tooltip', 'popover', 'hover'],
  },
  {
    name: 'accordion',
    packageName: '@stackvibe-studio/ui',
    category: 'core',
    description: 'Collapsible accordion panels with smooth rotation and single/multi expand.',
    dependencies: [],
    tags: ['accordion', 'collapse', 'faq'],
  },
  {
    name: 'switch',
    packageName: '@stackvibe-studio/ui',
    category: 'core',
    description: 'Modern sliding toggle switch with animated thumb and keyboard accessibility.',
    dependencies: [],
    tags: ['switch', 'toggle', 'form'],
  },
  {
    name: 'progress',
    packageName: '@stackvibe-studio/ui',
    category: 'core',
    description: 'Linear progress bar with gradient fills and percentage display.',
    dependencies: [],
    tags: ['progress', 'meter', 'loading'],
  },
  {
    name: 'toast',
    packageName: '@stackvibe-studio/ui',
    category: 'core',
    description: 'Notification toast system with toast.success(), toast.error(), and auto-dismiss.',
    dependencies: [],
    tags: ['toast', 'notification', 'feedback'],
  },
  {
    name: 'dropdown-menu',
    packageName: '@stackvibe-studio/ui',
    category: 'core',
    description: 'Action popover menu with click-outside listener and keyboard navigation.',
    dependencies: [],
    tags: ['dropdown', 'menu', 'popover'],
  },

  // Motion
  {
    name: 'spotlight-card',
    packageName: '@stackvibe-studio/motion',
    category: 'motion',
    description: 'Interactive card with dynamic cursor-following radial spotlight illumination.',
    dependencies: ['framer-motion'],
    tags: ['card', 'hover', 'glow', 'spotlight'],
  },
  {
    name: 'fade-in',
    packageName: '@stackvibe-studio/motion',
    category: 'motion',
    description: 'Scroll-aware reveal wrapper for onboarding sections and storytelling layouts.',
    dependencies: ['framer-motion'],
    tags: ['reveal', 'fade', 'motion'],
  },
  {
    name: 'text-reveal',
    packageName: '@stackvibe-studio/motion',
    category: 'motion',
    description: 'Typography reveal effect that animates text elements smoothly on entry.',
    dependencies: ['framer-motion'],
    tags: ['typography', 'text', 'reveal'],
  },
  {
    name: 'magnetic',
    packageName: '@stackvibe-studio/motion',
    category: 'motion',
    description: 'Physics-based magnetic attraction that draws elements toward the cursor.',
    dependencies: ['framer-motion'],
    tags: ['magnetic', 'cursor', 'physics'],
  },
  {
    name: 'number-ticker',
    packageName: '@stackvibe-studio/motion',
    category: 'motion',
    description: 'Smooth animated counter from 0 to N with cubic easing for metric counters.',
    dependencies: [],
    tags: ['counter', 'ticker', 'numbers'],
  },
  {
    name: 'marquee',
    packageName: '@stackvibe-studio/motion',
    category: 'motion',
    description: 'Infinite looping ticker with pause-on-hover for partners, logos, or news.',
    dependencies: [],
    tags: ['marquee', 'ticker', 'infinite'],
  },
  {
    name: 'tilt-card',
    packageName: '@stackvibe-studio/motion',
    category: 'motion',
    description: '3D perspective mouse-tracking tilt card with realistic specular glare.',
    dependencies: [],
    tags: ['tilt', '3d', 'perspective'],
  },

  // 3D
  {
    name: 'glass-3d-card',
    packageName: '@stackvibe-studio/three',
    category: '3d',
    description: 'Transparent glass surface with configurable depth and lighting.',
    dependencies: ['three', '@react-three/fiber', '@react-three/drei'],
    tags: ['glass', '3d', 'card'],
  },
  {
    name: 'floating-sphere',
    packageName: '@stackvibe-studio/three',
    category: '3d',
    description: 'Organic floating distorted sphere with metallic reflection.',
    dependencies: ['three', '@react-three/fiber', '@react-three/drei'],
    tags: ['sphere', '3d', 'float'],
  },
  {
    name: 'orb-cluster',
    packageName: '@stackvibe-studio/three',
    category: '3d',
    description: 'Layered floating orb scene for hero backgrounds and product visuals.',
    dependencies: ['three', '@react-three/fiber', '@react-three/drei'],
    tags: ['orb', '3d', 'hero'],
  },
  {
    name: 'wave-canvas',
    packageName: '@stackvibe-studio/three',
    category: '3d',
    description: 'Undulating sinusoidal mesh wave canvas responsive to scene time and lighting.',
    dependencies: ['three', '@react-three/fiber'],
    tags: ['wave', 'mesh', 'canvas'],
  },
];

export function getRegistryEntry(name: string) {
  return componentRegistry.find((item) => item.name === name);
}

export function listComponentsByCategory(category?: RegistryComponent['category']) {
  if (!category) return componentRegistry;
  return componentRegistry.filter((item) => item.category === category);
}
