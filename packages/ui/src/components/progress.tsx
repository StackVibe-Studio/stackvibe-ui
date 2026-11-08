import type { HTMLAttributes } from 'react';

export type ProgressVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'destructive' | 'gradient';
export type ProgressSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  variant?: ProgressVariant;
  size?: ProgressSize;
  striped?: boolean;
  animated?: boolean;
  showLabel?: boolean;
  label?: string;
}

const variantGradients: Record<ProgressVariant, string> = {
  primary: 'from-[var(--primary,#8b5cf6)] to-[var(--accent,#c084fc)]',
  secondary: 'from-[var(--secondary,#22d3ee)] to-blue-500',
  success: 'from-emerald-500 to-teal-400',
  warning: 'from-amber-500 to-orange-400',
  destructive: 'from-rose-500 to-red-600',
  gradient: 'from-[var(--primary,#8b5cf6)] via-[var(--secondary,#22d3ee)] to-emerald-400',
};

const sizeStyles: Record<ProgressSize, string> = {
  xs: 'h-1',
  sm: 'h-1.5',
  md: 'h-2.5',
  lg: 'h-4',
  xl: 'h-6',
};

export function Progress({
  value = 0,
  max = 100,
  variant = 'primary',
  size = 'md',
  striped = false,
  animated = false,
  showLabel = false,
  label = 'Progress',
  className = '',
  ...props
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={['w-full space-y-1.5', className].join(' ')} {...props}>
      {showLabel && (
        <div className="flex justify-between text-xs font-semibold text-slate-300">
          <span>{label}</span>
          <span className="font-mono">{Math.round(percentage)}%</span>
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        className={[
          'relative w-full overflow-hidden rounded-full bg-slate-800 ring-1 ring-white/10 shadow-inner',
          sizeStyles[size],
        ].join(' ')}
      >
        <div
          className={[
            'h-full rounded-full bg-gradient-to-r transition-all duration-300 ease-out shadow-sm',
            variantGradients[variant],
            striped ? 'bg-[length:1rem_1rem] bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)]' : '',
            animated ? 'animate-pulse' : '',
          ].filter(Boolean).join(' ')}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
