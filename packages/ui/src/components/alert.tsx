import type { HTMLAttributes } from 'react';

export type AlertVariant = 'info' | 'success' | 'warning' | 'danger';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  variant?: AlertVariant;
}

const variantClasses: Record<AlertVariant, string> = {
  info: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-50',
  success: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-50',
  warning: 'border-amber-500/40 bg-amber-500/10 text-amber-50',
  danger: 'border-rose-500/40 bg-rose-500/10 text-rose-50',
};

export function Alert({ title, variant = 'info', className = '', children, ...props }: AlertProps) {
  return (
    <div
      {...props}
      className={['rounded-2xl border p-4 text-sm', variantClasses[variant], className].join(' ')}
      role="alert"
    >
      {title ? <p className="mb-1 font-medium">{title}</p> : null}
      <div>{children}</div>
    </div>
  );
}
