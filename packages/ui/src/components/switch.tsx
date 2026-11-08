'use client';

import type { ReactNode } from 'react';

export type SwitchSize = 'sm' | 'md' | 'lg';

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  size?: SwitchSize;
  color?: string;
  checkedIcon?: ReactNode;
  uncheckedIcon?: ReactNode;
  disabled?: boolean;
  className?: string;
  id?: string;
  'aria-label'?: string;
}

const sizeTrackStyles: Record<SwitchSize, string> = {
  sm: 'h-5 w-9',
  md: 'h-6 w-11',
  lg: 'h-7 w-14',
};

const sizeThumbStyles: Record<SwitchSize, string> = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
};

const sizeTranslateStyles: Record<SwitchSize, string> = {
  sm: 'translate-x-4',
  md: 'translate-x-5',
  lg: 'translate-x-7',
};

export function Switch({
  checked,
  defaultChecked = false,
  onCheckedChange,
  size = 'md',
  color,
  checkedIcon,
  uncheckedIcon,
  disabled = false,
  className = '',
  id,
  'aria-label': ariaLabel,
}: SwitchProps) {
  const isChecked = checked ?? defaultChecked;

  return (
    <button
      type="button"
      role="switch"
      id={id}
      aria-label={ariaLabel}
      aria-checked={isChecked}
      disabled={disabled}
      onClick={() => onCheckedChange?.(!isChecked)}
      style={
        isChecked
          ? { backgroundColor: color || 'var(--primary, #8b5cf6)' }
          : undefined
      }
      className={[
        'relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary,#8b5cf6)] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-50',
        sizeTrackStyles[size],
        isChecked ? '' : 'bg-slate-800',
        className,
      ].filter(Boolean).join(' ')}
    >
      <span
        className={[
          'pointer-events-none flex items-center justify-center transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out text-slate-900',
          sizeThumbStyles[size],
          isChecked ? sizeTranslateStyles[size] : 'translate-x-0',
        ].join(' ')}
      >
        {isChecked ? checkedIcon : uncheckedIcon}
      </span>
    </button>
  );
}
