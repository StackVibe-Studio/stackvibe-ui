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
];

export function getRegistryEntry(name: string) {
  return componentRegistry.find((item) => item.name === name);
}
