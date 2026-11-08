import type { ImgHTMLAttributes } from 'react';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type AvatarShape = 'circle' | 'rounded' | 'square';
export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away';

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  status?: AvatarStatus;
}

const sizeClasses: Record<AvatarSize, string> = {
  xs: 'h-6 w-6 text-[10px]',
  sm: 'h-8 w-8 text-xs',
  md: 'h-11 w-11 text-sm',
  lg: 'h-14 w-14 text-base',
  xl: 'h-18 w-18 text-lg',
  '2xl': 'h-24 w-24 text-xl',
};

const shapeClasses: Record<AvatarShape, string> = {
  circle: 'rounded-full',
  rounded: 'rounded-2xl',
  square: 'rounded-lg',
};

const statusColors: Record<AvatarStatus, string> = {
  online: 'bg-emerald-500',
  offline: 'bg-slate-500',
  busy: 'bg-rose-500',
  away: 'bg-amber-500',
};

export function Avatar({
  src,
  alt = 'avatar',
  fallback = 'SV',
  size = 'md',
  shape = 'circle',
  status,
  className = '',
  ...props
}: AvatarProps) {
  const commonShape = shapeClasses[shape];

  const content = src ? (
    <img
      {...props}
      src={src}
      alt={alt}
      className={['object-cover ring-1 ring-white/10 shadow-md', sizeClasses[size], commonShape, className].join(' ')}
    />
  ) : (
    <div
      className={[
        'flex items-center justify-center bg-[var(--primary,#8b5cf6)]/20 font-bold text-[var(--primary,#c084fc)] ring-1 ring-[var(--primary,#8b5cf6)]/30 shadow-md',
        sizeClasses[size],
        commonShape,
        className,
      ].join(' ')}
    >
      {fallback}
    </div>
  );

  if (!status) return content;

  return (
    <div className="relative inline-block">
      {content}
      <span
        className={[
          'absolute bottom-0 right-0 h-3 w-3 rounded-full ring-2 ring-slate-950',
          statusColors[status],
        ].join(' ')}
      />
    </div>
  );
}
