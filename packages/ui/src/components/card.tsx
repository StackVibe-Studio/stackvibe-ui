import type { ElementType, HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType;
}

export function Card({ as: Component = 'div', className = '', ...props }: CardProps) {
  return (
    <Component
      {...props}
      className={[
        'rounded-2xl border border-white/10 bg-slate-950/50 p-4 shadow-lg shadow-slate-950/20 backdrop-blur-sm',
        className,
      ].join(' ')}
    />
  );
}
