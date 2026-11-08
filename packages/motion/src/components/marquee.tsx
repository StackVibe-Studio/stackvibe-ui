'use client';

import { type ReactNode } from 'react';

export interface MarqueeProps {
  children: ReactNode;
  speed?: number; // seconds for one complete cycle
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  className?: string;
}

export function Marquee({
  children,
  speed = 25,
  direction = 'left',
  pauseOnHover = true,
  className = '',
}: MarqueeProps) {
  return (
    <div
      className={[
        'group flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]',
        className,
      ].join(' ')}
    >
      <div
        className={[
          'flex min-w-full shrink-0 items-center justify-around gap-8',
          direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse',
          pauseOnHover ? 'group-hover:[animation-play-state:paused]' : '',
        ].join(' ')}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={[
          'flex min-w-full shrink-0 items-center justify-around gap-8',
          direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse',
          pauseOnHover ? 'group-hover:[animation-play-state:paused]' : '',
        ].join(' ')}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
    </div>
  );
}
