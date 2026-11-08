import type { TextareaHTMLAttributes } from 'react';

export type TextareaVariant = 'default' | 'filled';
export type TextareaSize = 'sm' | 'md' | 'lg';
export type TextareaRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export type TextareaResize = 'none' | 'vertical' | 'horizontal' | 'both';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: TextareaVariant;
  size?: TextareaSize;
  radius?: TextareaRadius;
  resize?: TextareaResize;
  error?: boolean | string;
}

const variantStyles: Record<TextareaVariant, string> = {
  default: 'border border-white/10 bg-slate-900/80 text-white placeholder:text-slate-500 focus:border-[var(--primary,#8b5cf6)] focus:ring-2 focus:ring-[var(--primary,#8b5cf6)]/25',
  filled: 'border border-transparent bg-white/5 text-white placeholder:text-slate-500 hover:bg-white/10 focus:bg-slate-900 focus:border-[var(--primary,#8b5cf6)] focus:ring-2 focus:ring-[var(--primary,#8b5cf6)]/25',
};

const sizeStyles: Record<TextareaSize, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-3.5 py-2.5 text-sm',
  lg: 'px-4 py-3 text-base',
};

const radiusStyles: Record<TextareaRadius, string> = {
  none: 'rounded-none',
  sm: 'rounded-lg',
  md: 'rounded-xl',
  lg: 'rounded-2xl',
  xl: 'rounded-3xl',
};

const resizeStyles: Record<TextareaResize, string> = {
  none: 'resize-none',
  vertical: 'resize-y',
  horizontal: 'resize-x',
  both: 'resize',
};

export function Textarea({
  variant = 'default',
  size = 'md',
  radius = 'md',
  resize = 'vertical',
  error,
  className = '',
  disabled,
  ...props
}: TextareaProps) {
  const textareaElement = (
    <textarea
      {...props}
      disabled={disabled}
      className={[
        'w-full transition-all duration-200 outline-none disabled:opacity-50 disabled:cursor-not-allowed',
        variantStyles[variant],
        sizeStyles[size],
        radiusStyles[radius],
        resizeStyles[resize],
        error ? '!border-rose-500 !ring-rose-500/30' : '',
        className,
      ].filter(Boolean).join(' ')}
    />
  );

  if (!error) return textareaElement;

  return (
    <div className="w-full">
      {textareaElement}
      {typeof error === 'string' && (
        <p className="mt-1 text-xs text-rose-400">{error}</p>
      )}
    </div>
  );
}
