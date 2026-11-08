import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
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
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

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

export function Button(props: ButtonProps) {
  const { as = 'button', variant = 'primary', size = 'md', className = '', ...rest } = props;
  const commonClassName = [
    'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(' ');

  if (as === 'a') {
    const { href, ...anchorProps } = rest as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'type'>;
    return <a {...anchorProps} href={href} className={commonClassName} />;
  }

  const { type = 'button', ...buttonProps } = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return <button {...buttonProps} type={type} className={commonClassName} />;
}
