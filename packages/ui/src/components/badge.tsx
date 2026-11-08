import type { HTMLAttributes, ReactNode } from 'react';

export type BadgeVariant = 'primary' | 'secondary' | 'outline' | 'destructive' | 'success' | 'warning' | 'glass';
export type BadgeSize = 'sm' | 'md' | 'lg';
export type BadgeRadius = 'sm' | 'md' | 'lg' | 'full';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  radius?: BadgeRadius;
  dot?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const variants: Record<BadgeVariant, string> = {
  primary: 'bg-[var(--primary,#8b5cf6)]/20 text-[var(--primary,#c084fc)] ring-1 ring-[var(--primary,#8b5cf6)]/30',
  secondary: 'bg-[var(--secondary,#22d3ee)]/20 text-[var(--secondary,#22d3ee)] ring-1 ring-[var(--secondary,#22d3ee)]/30',
  outline: 'bg-transparent text-slate-200 ring-1 ring-white/15',
  destructive: 'bg-rose-500/15 text-rose-300 ring-1 ring-rose-500/30',
  success: 'bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30',
  warning: 'bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/30',
  glass: 'bg-white/10 text-white backdrop-blur-md ring-1 ring-white/20',
};

const dotColors: Record<BadgeVariant, string> = {
  primary: 'bg-[var(--primary,#8b5cf6)]',
  secondary: 'bg-[var(--secondary,#22d3ee)]',
  outline: 'bg-slate-400',
  destructive: 'bg-rose-400',
  success: 'bg-emerald-400',
  warning: 'bg-amber-400',
  glass: 'bg-white',
};

const sizes: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-[10px] gap-1',
  md: 'px-2.5 py-1 text-xs gap-1.5',
  lg: 'px-3 py-1.5 text-sm gap-2',
};

const radiuses: Record<BadgeRadius, string> = {
  sm: 'rounded-md',
  md: 'rounded-lg',
  lg: 'rounded-xl',
  full: 'rounded-full',
};

export function Badge({
  variant = 'primary',
  size = 'md',
  radius = 'full',
  dot = false,
  leftIcon,
  rightIcon,
  children,
  className = '',
  ...props
}: BadgeProps) {
  return (
    <span
      {...props}
      className={[
        'inline-flex items-center font-medium select-none',
        variants[variant],
        sizes[size],
        radiuses[radius],
        className,
      ].filter(Boolean).join(' ')}
    >
      {dot && (
        <span
          className={['h-1.5 w-1.5 rounded-full shrink-0 animate-pulse', dotColors[variant]].join(' ')}
        />
      )}
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </span>
  );
}
