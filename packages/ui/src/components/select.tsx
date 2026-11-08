import type { ReactNode, SelectHTMLAttributes } from 'react';

export type SelectVariant = 'default' | 'filled';
export type SelectSize = 'sm' | 'md' | 'lg';
export type SelectRadius = 'none' | 'sm' | 'md' | 'lg' | 'full';

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  variant?: SelectVariant;
  size?: SelectSize;
  radius?: SelectRadius;
  error?: boolean | string;
  icon?: ReactNode;
}

const variantStyles: Record<SelectVariant, string> = {
  default: 'border border-white/10 bg-slate-900/80 text-white focus:border-[var(--primary,#8b5cf6)] focus:ring-2 focus:ring-[var(--primary,#8b5cf6)]/25',
  filled: 'border border-transparent bg-white/5 text-white hover:bg-white/10 focus:bg-slate-900 focus:border-[var(--primary,#8b5cf6)] focus:ring-2 focus:ring-[var(--primary,#8b5cf6)]/25',
};

const sizeStyles: Record<SelectSize, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-3.5 py-2 text-sm',
  lg: 'px-4 py-3 text-base',
};

const radiusStyles: Record<SelectRadius, string> = {
  none: 'rounded-none',
  sm: 'rounded-lg',
  md: 'rounded-xl',
  lg: 'rounded-2xl',
  full: 'rounded-full',
};

export function Select({
  variant = 'default',
  size = 'md',
  radius = 'md',
  error,
  icon,
  className = '',
  children,
  disabled,
  ...props
}: SelectProps) {
  const selectElement = (
    <div className="relative w-full">
      <select
        {...props}
        disabled={disabled}
        className={[
          'w-full appearance-none transition-all duration-200 outline-none pr-9 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
          variantStyles[variant],
          sizeStyles[size],
          radiusStyles[radius],
          error ? '!border-rose-500 !ring-rose-500/30' : '',
          className,
        ].filter(Boolean).join(' ')}
      >
        {children}
      </select>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
        {icon || (
          <svg className="h-4 w-4 fill-none stroke-current" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </div>
    </div>
  );

  if (!error) return selectElement;

  return (
    <div className="w-full">
      {selectElement}
      {typeof error === 'string' && (
        <p className="mt-1 text-xs text-rose-400">{error}</p>
      )}
    </div>
  );
}
