import type { InputHTMLAttributes, ReactNode } from 'react';

export type InputVariant = 'default' | 'filled' | 'flushed';
export type InputSize = 'sm' | 'md' | 'lg';
export type InputRadius = 'none' | 'sm' | 'md' | 'lg' | 'full';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: InputVariant;
  size?: InputSize;
  radius?: InputRadius;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  error?: boolean | string;
  fullWidth?: boolean;
}

const variantStyles: Record<InputVariant, string> = {
  default: 'border border-white/10 bg-slate-900/80 text-white placeholder:text-slate-500 focus:border-[var(--primary,#8b5cf6)] focus:ring-2 focus:ring-[var(--primary,#8b5cf6)]/25',
  filled: 'border border-transparent bg-white/5 text-white placeholder:text-slate-500 hover:bg-white/10 focus:bg-slate-900 focus:border-[var(--primary,#8b5cf6)] focus:ring-2 focus:ring-[var(--primary,#8b5cf6)]/25',
  flushed: 'border-0 border-b-2 border-white/15 bg-transparent rounded-none px-0 text-white placeholder:text-slate-500 focus:border-[var(--primary,#8b5cf6)] focus:ring-0',
};

const sizeStyles: Record<InputSize, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-3.5 py-2 text-sm',
  lg: 'px-4 py-3 text-base',
};

const radiusStyles: Record<InputRadius, string> = {
  none: 'rounded-none',
  sm: 'rounded-lg',
  md: 'rounded-xl',
  lg: 'rounded-2xl',
  full: 'rounded-full',
};

export function Input({
  variant = 'default',
  size = 'md',
  radius = 'md',
  leftElement,
  rightElement,
  error,
  fullWidth = true,
  className = '',
  disabled,
  ...props
}: InputProps) {
  const isFlushed = variant === 'flushed';

  const inputElement = (
    <input
      {...props}
      disabled={disabled}
      className={[
        'w-full transition-all duration-200 outline-none disabled:opacity-50 disabled:cursor-not-allowed',
        variantStyles[variant],
        sizeStyles[size],
        !isFlushed ? radiusStyles[radius] : '',
        leftElement ? 'pl-9' : '',
        rightElement ? 'pr-9' : '',
        error ? '!border-rose-500 !ring-rose-500/30' : '',
        className,
      ].filter(Boolean).join(' ')}
    />
  );

  if (!leftElement && !rightElement && !error) {
    return inputElement;
  }

  return (
    <div className={['relative', fullWidth ? 'w-full' : 'inline-block'].join(' ')}>
      {leftElement && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none flex items-center justify-center">
          {leftElement}
        </div>
      )}
      {inputElement}
      {rightElement && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 flex items-center justify-center">
          {rightElement}
        </div>
      )}
      {typeof error === 'string' && (
        <p className="mt-1 text-xs text-rose-400">{error}</p>
      )}
    </div>
  );
}
