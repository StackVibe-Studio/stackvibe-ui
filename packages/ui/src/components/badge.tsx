import type { HTMLAttributes } from 'react';

export type BadgeVariant = 'primary' | 'secondary' | 'outline';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variants: Record<BadgeVariant, string> = {
  primary: 'bg-violet-500/20 text-violet-200 ring-1 ring-violet-400/20',
  secondary: 'bg-cyan-500/15 text-cyan-200 ring-1 ring-cyan-400/20',
  outline: 'bg-transparent text-slate-200 ring-1 ring-white/10',
};

export function Badge({ variant = 'primary', className = '', ...props }: BadgeProps) {
  return (
    <span
      {...props}
      className={['inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium', variants[variant], className].join(' ')}
    />
  );
}
