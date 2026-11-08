#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const args = process.argv.slice(2);
const command = args[0] ?? 'help';

const projectRoot = process.cwd();
const cliRoot = dirname(fileURLToPath(import.meta.url));

function printHelp() {
  console.log(`StackVibe CLI

Usage:
  npx @stackvibe-studio/cli init
  npx @stackvibe-studio/cli add <component>

Available components:
  button
  tabs
  skeleton
  spotlight-card
  fade-in-section
  glass-3d-card
  orb-cluster
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

function addComponent(component: string) {
  const pkg = ensurePackageJson();
  const packageMap: Record<string, string> = {
    button: '@stackvibe-studio/ui',
    tabs: '@stackvibe-studio/ui',
    skeleton: '@stackvibe-studio/ui',
    'spotlight-card': '@stackvibe-studio/motion',
    'fade-in-section': '@stackvibe-studio/motion',
    'glass-3d-card': '@stackvibe-studio/three',
    'orb-cluster': '@stackvibe-studio/three',
  };

  const selected = packageMap[component];
  if (!selected) {
    console.error(`Component "${component}" is not available in the registry.`);
    process.exit(1);
  }

  pkg.dependencies ??= {};
  pkg.dependencies[selected] = pkg.dependencies[selected] ?? 'latest';
  writeFileSync(join(projectRoot, 'package.json'), `${JSON.stringify(pkg, null, 2)}\n`);

  console.log(`Added ${component} via ${selected}.`);
}

switch (command) {
  case 'init': {
    const pkg = ensurePackageJson();
    pkg.dependencies ??= {};
    pkg.dependencies['@stackvibe-studio/ui'] ??= 'latest';
    writeFileSync(join(projectRoot, 'package.json'), `${JSON.stringify(pkg, null, 2)}\n`);
    console.log('StackVibe UI initialized in this project.');
    break;
  }
  case 'add': {
    const component = args[1];
    if (!component) {
      console.error('Please provide a component name, for example: stackvibe add button');
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
