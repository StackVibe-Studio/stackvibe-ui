import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive' | 'glass' | 'gradient';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  radius?: ButtonRadius;
  fullWidth?: boolean;
  loading?: boolean;
  loadingText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
  className?: string;
}

type ButtonAsButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
    href?: never;
  };

type ButtonAsAnchorProps = BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'type'> & {
    as: 'a';
    href?: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-[var(--primary,#8b5cf6)] text-white hover:brightness-110 shadow-lg shadow-[var(--glow,rgba(139,92,246,0.3))]',
  secondary: 'bg-[var(--secondary,#22d3ee)] text-slate-950 hover:brightness-110 shadow-md shadow-[var(--secondary,#22d3ee)]/20',
  ghost: 'bg-white/5 text-white hover:bg-white/10 hover:text-white',
  outline: 'border border-[var(--primary,#8b5cf6)]/40 bg-transparent text-white hover:bg-[var(--primary,#8b5cf6)]/10',
  destructive: 'bg-rose-600 text-white hover:bg-rose-500 shadow-md shadow-rose-600/30',
  glass: 'border border-white/15 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 shadow-lg',
  gradient: 'bg-gradient-to-r from-[var(--primary,#8b5cf6)] via-[var(--accent,#c084fc)] to-[var(--secondary,#22d3ee)] text-white shadow-xl hover:brightness-110',
};

const sizeClasses: Record<ButtonSize, string> = {
  xs: 'px-2.5 py-1 text-xs gap-1',
  sm: 'px-3 py-1.5 text-xs font-medium gap-1.5',
  md: 'px-4 py-2 text-sm font-medium gap-2',
  lg: 'px-5 py-2.5 text-base font-semibold gap-2.5',
  xl: 'px-6 py-3.5 text-lg font-bold gap-3',
};

const radiusClasses: Record<ButtonRadius, string> = {
  none: 'rounded-none',
  sm: 'rounded-md',
  md: 'rounded-xl',
  lg: 'rounded-2xl',
  xl: 'rounded-3xl',
  full: 'rounded-full',
};

export function Button(props: ButtonProps) {
  const {
    as = 'button',
    variant = 'primary',
    size = 'md',
    radius = 'md',
    fullWidth = false,
    loading = false,
    loadingText,
    leftIcon,
    rightIcon,
    children,
    className = '',
    disabled,
    ...rest
  } = props;

  const isDisabled = disabled || loading;

  const commonClassName = [
    'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary,#8b5cf6)] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    variantClasses[variant],
    sizeClasses[size],
    radiusClasses[radius],
    fullWidth ? 'w-full' : '',
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {loading && (
        <svg
          className="animate-spin h-4 w-4 shrink-0 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!loading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span>{loading && loadingText ? loadingText : children}</span>
      {!loading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </>
  );

  if (as === 'a') {
    const { href, ...anchorProps } = rest as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'type'>;
    return (
      <a {...anchorProps} href={href} className={commonClassName}>
        {content}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button {...buttonProps} disabled={isDisabled} className={commonClassName}>
      {content}
    </button>
  );
}
