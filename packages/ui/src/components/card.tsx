import type { ElementType, HTMLAttributes } from 'react';

export type CardVariant = 'default' | 'glass' | 'gradient' | 'bordered' | 'interactive' | 'elevated';
export type CardRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType;
  variant?: CardVariant;
  radius?: CardRadius;
  padding?: CardPadding;
  glow?: boolean;
}

const variantStyles: Record<CardVariant, string> = {
  default: 'border border-white/10 bg-[var(--surface,rgba(15,23,42,0.6))] backdrop-blur-md shadow-lg shadow-black/20',
  glass: 'border border-white/15 bg-white/5 backdrop-blur-xl shadow-2xl',
  gradient: 'border border-white/10 bg-gradient-to-br from-[var(--surface,rgba(15,23,42,0.8))] to-[var(--background,rgba(2,6,23,0.9))] shadow-xl',
  bordered: 'border-2 border-[var(--primary,#8b5cf6)]/30 bg-[var(--surface,rgba(15,23,42,0.5))] shadow-md',
  interactive: 'border border-white/10 bg-[var(--surface,rgba(15,23,42,0.6))] backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl cursor-pointer',
  elevated: 'border border-white/10 bg-slate-900/90 shadow-2xl shadow-black/40',
};

const radiusStyles: Record<CardRadius, string> = {
  none: 'rounded-none',
  sm: 'rounded-lg',
  md: 'rounded-xl',
  lg: 'rounded-2xl',
  xl: 'rounded-3xl',
  '2xl': 'rounded-[2rem]',
  '3xl': 'rounded-[2.5rem]',
};

const paddingStyles: Record<CardPadding, string> = {
  none: 'p-0',
  sm: 'p-3',
  md: 'p-5',
  lg: 'p-7',
  xl: 'p-10',
};

export function Card({
  as: Component = 'div',
  variant = 'default',
  radius = 'lg',
  padding = 'md',
  glow = false,
  className = '',
  style,
  ...props
}: CardProps) {
  return (
    <Component
      {...props}
      style={{
        ...(glow ? { boxShadow: '0 0 30px var(--glow, rgba(139, 92, 246, 0.25))' } : {}),
        ...style,
      }}
      className={[
        variantStyles[variant],
        radiusStyles[radius],
        paddingStyles[padding],
        className,
      ].filter(Boolean).join(' ')}
    />
  );
}
