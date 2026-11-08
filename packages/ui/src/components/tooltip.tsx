'use client';

import { useState, useRef, type ReactNode } from 'react';

export type TooltipSide = 'top' | 'bottom' | 'left' | 'right';
export type TooltipTheme = 'dark' | 'light' | 'primary';

export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  side?: TooltipSide;
  position?: TooltipSide;
  theme?: TooltipTheme;
  arrow?: boolean;
  delay?: number;
  className?: string;
}

const sideClasses: Record<TooltipSide, string> = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
};

const themeClasses: Record<TooltipTheme, string> = {
  dark: 'border border-white/10 bg-slate-900/95 text-slate-100 shadow-xl',
  light: 'border border-slate-200 bg-white text-slate-900 shadow-xl font-semibold',
  primary: 'border border-[var(--primary,#8b5cf6)]/40 bg-[var(--primary,#8b5cf6)] text-white shadow-lg shadow-[var(--glow,rgba(139,92,246,0.3))]',
};

export function Tooltip({
  content,
  children,
  side,
  position = 'top',
  theme = 'dark',
  arrow = true,
  delay = 100,
  className = '',
}: TooltipProps) {
  const activeSide = side || position;
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
  };

  const hide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      {isVisible && (
        <div
          role="tooltip"
          className={[
            'absolute z-50 whitespace-nowrap rounded-lg px-2.5 py-1 text-xs font-medium shadow-2xl backdrop-blur-md transition-all duration-150 pointer-events-none',
            sideClasses[activeSide],
            themeClasses[theme],
            className,
          ].join(' ')}
        >
          {content}
        </div>
      )}
    </div>
  );
}
