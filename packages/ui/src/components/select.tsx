import type { SelectHTMLAttributes } from 'react';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export function Select({ className = '', children, ...props }: SelectProps) {
  return (
    <select
      {...props}
      className={[
        'w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400/30',
        className,
      ].join(' ')}
    >
      {children}
    </select>
  );
}
