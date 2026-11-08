import type { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-violet-500 text-white hover:bg-violet-400',
  secondary: 'bg-cyan-500 text-slate-950 hover:bg-cyan-400',
  ghost: 'bg-white/5 text-white hover:bg-white/10',
  outline: 'border border-white/15 bg-transparent text-white hover:bg-white/5',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-3 text-base',
};

export function Button({ variant = 'primary', size = 'md', className = '', ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={[
        'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400',
        variantClasses[variant],
        sizeClasses[size],
        className,
      ].join(' ')}
    />
  );
}
