import type { HTMLAttributes } from 'react';

export type SkeletonRounded = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type SkeletonAnimation = 'pulse' | 'shimmer' | 'none';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  rounded?: SkeletonRounded;
  animation?: SkeletonAnimation;
}

const roundedClasses: Record<SkeletonRounded, string> = {
  none: 'rounded-none',
  sm: 'rounded-md',
  md: 'rounded-xl',
  lg: 'rounded-2xl',
  xl: 'rounded-3xl',
  full: 'rounded-full',
};

export function Skeleton({
  className = '',
  rounded = 'md',
  animation = 'pulse',
  ...props
}: SkeletonProps) {
  return (
    <div
      {...props}
      className={[
        'bg-slate-800/80 ring-1 ring-white/5',
        animation === 'pulse' ? 'animate-pulse' : '',
        animation === 'shimmer' ? 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent' : '',
        roundedClasses[rounded],
        className,
      ].filter(Boolean).join(' ')}
      aria-hidden="true"
    />
  );
}
