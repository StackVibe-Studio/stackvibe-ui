export const themeTokens = {
  colors: {
    primary: 'var(--sv-primary, 139 92 246)',
    background: 'var(--sv-background, 15 23 42)',
    foreground: 'var(--sv-foreground, 248 250 252)',
    accent: 'var(--sv-accent, 34 211 238)',
  },
  radius: {
    sm: 'var(--sv-radius-sm, 0.5rem)',
    md: 'var(--sv-radius-md, 0.75rem)',
    lg: 'var(--sv-radius-lg, 1rem)',
    xl: 'var(--sv-radius-xl, 1.25rem)',
  },
};

const cx = (...classes: Array<string | false | undefined | null>) =>
  classes.filter(Boolean).join(' ');

export { cx };
