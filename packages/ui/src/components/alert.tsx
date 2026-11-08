import { useState, type HTMLAttributes, type ReactNode } from 'react';

export type AlertVariant = 'info' | 'success' | 'warning' | 'destructive' | 'primary';
export type AlertRadius = 'sm' | 'md' | 'lg' | 'xl';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  variant?: AlertVariant;
  radius?: AlertRadius;
  icon?: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}

const variantClasses: Record<AlertVariant, string> = {
  info: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-100',
  success: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-100',
  warning: 'border-amber-500/30 bg-amber-500/10 text-amber-100',
  destructive: 'border-rose-500/30 bg-rose-500/10 text-rose-100',
  primary: 'border-[var(--primary,#8b5cf6)]/30 bg-[var(--primary,#8b5cf6)]/10 text-slate-100',
};

const defaultIcons: Record<AlertVariant, string> = {
  info: 'ℹ',
  success: '✓',
  warning: '⚠',
  destructive: '✕',
  primary: '⚡',
};

const radiusClasses: Record<AlertRadius, string> = {
  sm: 'rounded-lg',
  md: 'rounded-xl',
  lg: 'rounded-2xl',
  xl: 'rounded-3xl',
};

export function Alert({
  title,
  variant = 'info',
  radius = 'lg',
  icon,
  dismissible = false,
  onDismiss,
  className = '',
  children,
  ...props
}: AlertProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const handleDismiss = () => {
    setVisible(false);
    onDismiss?.();
  };

  return (
    <div
      {...props}
      role="alert"
      className={[
        'relative flex items-start gap-3 border p-4 text-sm shadow-md backdrop-blur-sm transition-all duration-200',
        variantClasses[variant],
        radiusClasses[radius],
        className,
      ].filter(Boolean).join(' ')}
    >
      <div className="flex h-5 w-5 shrink-0 items-center justify-center font-bold">
        {icon || defaultIcons[variant]}
      </div>
      <div className="flex-1">
        {title && <p className="mb-1 font-bold tracking-tight">{title}</p>}
        <div className="leading-relaxed opacity-90">{children}</div>
      </div>
      {dismissible && (
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Dismiss alert"
          className="shrink-0 rounded-lg p-1 text-current opacity-60 hover:opacity-100 hover:bg-white/10 transition cursor-pointer"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}
