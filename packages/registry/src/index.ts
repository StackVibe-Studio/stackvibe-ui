export type RegistryComponent = {
  name: string;
  packageName: string;
  category: 'core' | 'motion' | '3d' | 'theme';
  description: string;
  dependencies: string[];
  tags: string[];
};

export const componentRegistry: RegistryComponent[] = [
  {
    name: 'button',
    packageName: '@stackvibe-studio/ui',
    category: 'core',
    description: 'Primary action control with accessible focus and size variants.',
    dependencies: [],
    tags: ['button', 'cta', 'action'],
  },
  {
    name: 'spotlight-card',
    packageName: '@stackvibe-studio/motion',
    category: 'motion',
    description: 'Interactive card with layered light and subtle hover motion.',
    dependencies: ['motion'],
    tags: ['card', 'hover', 'glow'],
  },
  {
    name: 'glass-3d-card',
    packageName: '@stackvibe-studio/three',
    category: '3d',
    description: 'Transparent glass surface with configurable depth and lighting.',
    dependencies: ['three', '@react-three/fiber', '@react-three/drei'],
    tags: ['glass', '3d', 'card'],
  },
  {
    name: 'fade-in-section',
    packageName: '@stackvibe-studio/motion',
    category: 'motion',
    description: 'Scroll-aware reveal wrapper for onboarding sections and storytelling layouts.',
    dependencies: ['motion'],
    tags: ['reveal', 'fade', 'section'],
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
    name: 'tabs',
    packageName: '@stackvibe-studio/ui',
    category: 'core',
    description: 'Tabbed content surfaces for dashboards, settings, and product sections.',
    dependencies: [],
    tags: ['tabs', 'navigation', 'content'],
  },
  {
    name: 'skeleton',
    packageName: '@stackvibe-studio/ui',
    category: 'core',
    description: 'Loading placeholders that match the visual rhythm of the library.',
    dependencies: [],
    tags: ['loading', 'placeholder', 'skeleton'],
  },
];

export function getRegistryEntry(name: string) {
  return componentRegistry.find((item) => item.name === name);
}
