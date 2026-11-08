import type { HTMLAttributes } from 'react';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  rounded?: 'sm' | 'md' | 'lg' | 'full';
}

const roundedClasses = {
  sm: 'rounded-md',
  md: 'rounded-xl',
  lg: 'rounded-2xl',
  full: 'rounded-full',
};

export function Skeleton({ className = '', rounded = 'md', ...props }: SkeletonProps) {
  return (
    <div
      {...props}
      className={['animate-pulse bg-slate-700/70', roundedClasses[rounded], className].join(' ')}
      aria-hidden="true"
    />
  );
}
