import type { HTMLAttributes } from 'react';

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  variant?: 'primary' | 'secondary' | 'success' | 'warning';
  showLabel?: boolean;
}

const variantGradients = {
  primary: 'from-violet-600 to-indigo-500',
  secondary: 'from-cyan-500 to-blue-500',
  success: 'from-emerald-500 to-teal-400',
  warning: 'from-amber-500 to-orange-400',
};

export function Progress({
  value = 0,
  max = 100,
  variant = 'primary',
  showLabel = false,
  className = '',
  ...props
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={['w-full space-y-1.5', className].join(' ')} {...props}>
      {showLabel && (
        <div className="flex justify-between text-xs font-semibold text-slate-300">
          <span>Progress</span>
          <span className="font-mono">{Math.round(percentage)}%</span>
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        className="relative h-2.5 w-full overflow-hidden rounded-full bg-slate-800 ring-1 ring-white/10"
      >
        <div
          className={[
            'h-full rounded-full bg-gradient-to-r transition-all duration-300 ease-out shadow-sm',
            variantGradients[variant],
          ].join(' ')}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
