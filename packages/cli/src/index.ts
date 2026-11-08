#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const args = process.argv.slice(2);
const command = args[0] ?? 'help';

const projectRoot = process.cwd();
const cliRoot = dirname(fileURLToPath(import.meta.url));

const packageMap: Record<string, string> = {
  // Core UI
  button: '@stackvibe-studio/ui',
  input: '@stackvibe-studio/ui',
  textarea: '@stackvibe-studio/ui',
  select: '@stackvibe-studio/ui',
  checkbox: '@stackvibe-studio/ui',
  card: '@stackvibe-studio/ui',
  alert: '@stackvibe-studio/ui',
  badge: '@stackvibe-studio/ui',
  avatar: '@stackvibe-studio/ui',
  tabs: '@stackvibe-studio/ui',
  skeleton: '@stackvibe-studio/ui',
  dialog: '@stackvibe-studio/ui',
  drawer: '@stackvibe-studio/ui',
  tooltip: '@stackvibe-studio/ui',
  accordion: '@stackvibe-studio/ui',
  switch: '@stackvibe-studio/ui',
  progress: '@stackvibe-studio/ui',
  toast: '@stackvibe-studio/ui',
  'dropdown-menu': '@stackvibe-studio/ui',

  // Motion
  'spotlight-card': '@stackvibe-studio/motion',
  'fade-in': '@stackvibe-studio/motion',
  'text-reveal': '@stackvibe-studio/motion',
  magnetic: '@stackvibe-studio/motion',
  'number-ticker': '@stackvibe-studio/motion',
  marquee: '@stackvibe-studio/motion',
  'tilt-card': '@stackvibe-studio/motion',

  // 3D
  'glass-3d-card': '@stackvibe-studio/three',
  'floating-sphere': '@stackvibe-studio/three',
  'orb-cluster': '@stackvibe-studio/three',
  'wave-canvas': '@stackvibe-studio/three',
};

function printHelp() {
  console.log(`StackVibe CLI v0.3.0

Usage:
  npx @stackvibe-studio/cli init
  npx @stackvibe-studio/cli list
  npx @stackvibe-studio/cli add <component>

Examples:
  npx @stackvibe-studio/cli add button
  npx @stackvibe-studio/cli add dialog
  npx @stackvibe-studio/cli add tilt-card
  npx @stackvibe-studio/cli add wave-canvas
`);
}

function ensurePackageJson() {
  const pkgPath = join(projectRoot, 'package.json');
  try {
    const raw = readFileSync(pkgPath, 'utf8');
    return JSON.parse(raw);
  } catch {
    console.error(
      'No package.json found in the target project. Run this inside a React app directory.'
    );
    process.exit(1);
  }
}

function listComponents() {
  console.log('Available components in StackVibe Registry:');
  Object.entries(packageMap).forEach(([name, pkg]) => {
    console.log(`  - ${name.padEnd(16)} (${pkg})`);
  });
}

function addComponent(component: string) {
  const pkg = ensurePackageJson();
  const selected = packageMap[component];
  if (!selected) {
    console.error(`Component "${component}" is not available in the registry.`);
    console.log('Run "npx @stackvibe-studio/cli list" to see all available components.');
    process.exit(1);
  }

  pkg.dependencies ??= {};
  pkg.dependencies[selected] = pkg.dependencies[selected] ?? '^0.3.0';
  writeFileSync(join(projectRoot, 'package.json'), `${JSON.stringify(pkg, null, 2)}\n`);

  console.log(`✓ Added ${component} via ${selected} (^0.3.0).`);
}

switch (command) {
  case 'init': {
    const pkg = ensurePackageJson();
    pkg.dependencies ??= {};
    pkg.dependencies['@stackvibe-studio/ui'] ??= '^0.3.0';
    pkg.dependencies['@stackvibe-studio/themes'] ??= '^0.3.0';
    writeFileSync(join(projectRoot, 'package.json'), `${JSON.stringify(pkg, null, 2)}\n`);
    console.log('✓ StackVibe UI & Themes initialized in this project.');
    break;
  }
  case 'list': {
    listComponents();
    break;
  }
  case 'add': {
    const component = args[1];
    if (!component) {
      console.error('Please provide a component name, for example: npx @stackvibe-studio/cli add dialog');
      process.exit(1);
    }
    addComponent(component);
    break;
  }
  case 'help':
  default:
    printHelp();
    break;
  }
