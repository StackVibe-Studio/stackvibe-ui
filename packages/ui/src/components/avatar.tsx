import type { ImgHTMLAttributes } from 'react';

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses: Record<NonNullable<AvatarProps['size']>, string> = {
  sm: 'h-9 w-9 text-xs',
  md: 'h-12 w-12 text-sm',
  lg: 'h-16 w-16 text-base',
};

export function Avatar({ src, alt = 'avatar', fallback = 'SV', size = 'md', className = '', ...props }: AvatarProps) {
  return src ? (
    <img
      {...props}
      src={src}
      alt={alt}
      className={['rounded-full object-cover ring-1 ring-white/10', sizeClasses[size], className].join(' ')}
    />
  ) : (
    <div
      className={['flex items-center justify-center rounded-full bg-violet-500/20 font-semibold text-violet-100 ring-1 ring-violet-400/20', sizeClasses[size], className].join(' ')}
    >
      {fallback}
    </div>
  );
}
