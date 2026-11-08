export type ThemeName =
  | 'aurora'
  | 'obsidian'
  | 'holographic'
  | 'soft-minimal'
  | 'neon-futuristic'
  | 'sunset-glow'
  | 'midnight-gold';

export type ThemeTokens = {
  background: string;
  foreground: string;
  primary: string;
  secondary: string;
  accent: string;
  surface: string;
  radius: string;
  glow: string;
};

export const themePresets: Record<ThemeName, ThemeTokens> = {
  aurora: {
    background: '#050816',
    foreground: '#e2e8f0',
    primary: '#8b5cf6',
    secondary: '#22d3ee',
    accent: '#c084fc',
    surface: '#111827',
    radius: '1rem',
    glow: 'rgba(139,92,246,0.4)',
  },
  obsidian: {
    background: '#020617',
    foreground: '#f8fafc',
    primary: '#a78bfa',
    secondary: '#64748b',
    accent: '#38bdf8',
    surface: '#0f172a',
    radius: '0.9rem',
    glow: 'rgba(59,130,246,0.34)',
  },
  holographic: {
    background: '#040b1d',
    foreground: '#dbeafe',
    primary: '#34d399',
    secondary: '#60a5fa',
    accent: '#f0abfc',
    surface: '#0f172a',
    radius: '1.2rem',
    glow: 'rgba(52,211,153,0.35)',
  },
  'soft-minimal': {
    background: '#f8fafc',
    foreground: '#0f172a',
    primary: '#7c3aed',
    secondary: '#0ea5e9',
    accent: '#a78bfa',
    surface: '#ffffff',
    radius: '0.8rem',
    glow: 'rgba(124,58,237,0.12)',
  },
  'neon-futuristic': {
    background: '#030712',
    foreground: '#ecfeff',
    primary: '#22d3ee',
    secondary: '#a78bfa',
    accent: '#f472b6',
    surface: '#0f172a',
    radius: '1.4rem',
    glow: 'rgba(34,211,238,0.35)',
  },
  'sunset-glow': {
    background: '#1c0b13',
    foreground: '#fff7ed',
    primary: '#fb7185',
    secondary: '#fbbf24',
    accent: '#fdba74',
    surface: '#2b1221',
    radius: '1.1rem',
    glow: 'rgba(251,113,133,0.35)',
  },
  'midnight-gold': {
    background: '#0b1220',
    foreground: '#f8fafc',
    primary: '#fbbf24',
    secondary: '#a78bfa',
    accent: '#f59e0b',
    surface: '#111827',
    radius: '1rem',
    glow: 'rgba(251,191,36,0.26)',
  },
};

export function resolveTheme(theme: ThemeName = 'aurora'): ThemeTokens {
  return themePresets[theme];
}

export function listThemes(): ThemeName[] {
  return Object.keys(themePresets) as ThemeName[];
}
