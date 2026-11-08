import type { InputHTMLAttributes } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Checkbox({ className = '', ...props }: CheckboxProps) {
  return (
    <input
      {...props}
      type="checkbox"
      className={['h-4 w-4 rounded border border-white/20 bg-slate-900 text-violet-500 focus:ring-violet-400/40', className].join(' ')}
    />
  );
}
