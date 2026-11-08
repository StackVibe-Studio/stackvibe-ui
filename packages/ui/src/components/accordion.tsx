'use client';

import { useState, type ReactNode } from 'react';

export interface AccordionItemData {
  id: string;
  title: ReactNode;
  content: ReactNode;
  icon?: ReactNode;
}

export type AccordionVariant = 'bordered' | 'separated' | 'ghost';
export type AccordionRadius = 'sm' | 'md' | 'lg' | 'xl';

export interface AccordionProps {
  items: AccordionItemData[];
  type?: 'single' | 'multiple';
  variant?: AccordionVariant;
  radius?: AccordionRadius;
  defaultOpen?: string[];
  className?: string;
  customIcon?: (isOpen: boolean) => ReactNode;
}

const radiusClasses: Record<AccordionRadius, string> = {
  sm: 'rounded-lg',
  md: 'rounded-xl',
  lg: 'rounded-2xl',
  xl: 'rounded-3xl',
};

export function Accordion({
  items,
  type = 'single',
  variant = 'bordered',
  radius = 'lg',
  defaultOpen = [],
  className = '',
  customIcon,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpen);

  const toggle = (id: string) => {
    if (type === 'single') {
      setOpenIds(openIds.includes(id) ? [] : [id]);
    } else {
      setOpenIds(
        openIds.includes(id) ? openIds.filter((item) => item !== id) : [...openIds, id]
      );
    }
  };

  const isSeparated = variant === 'separated';
  const isGhost = variant === 'ghost';

  return (
    <div
      className={[
        isSeparated
          ? 'space-y-3'
          : isGhost
            ? 'divide-y divide-white/10'
            : 'divide-y divide-white/10 border border-white/10 bg-slate-900/60 overflow-hidden shadow-lg backdrop-blur-md',
        !isSeparated && !isGhost ? radiusClasses[radius] : '',
        className,
      ].filter(Boolean).join(' ')}
    >
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className={[
              'transition duration-200',
              isSeparated
                ? ['border border-white/10 bg-slate-900/60 overflow-hidden shadow-md backdrop-blur-sm', radiusClasses[radius]].join(' ')
                : '',
            ].filter(Boolean).join(' ')}
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between px-5 py-4 text-left font-medium text-white hover:bg-white/5 transition cursor-pointer select-none"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                {item.icon && <span className="text-[var(--primary,#8b5cf6)] shrink-0">{item.icon}</span>}
                <span className="text-sm font-semibold">{item.title}</span>
              </div>
              {customIcon ? (
                customIcon(isOpen)
              ) : (
                <svg
                  className={`h-4 w-4 transform text-slate-400 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[var(--primary,#8b5cf6)]' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </button>
            {isOpen && (
              <div className="border-t border-white/5 px-5 pb-5 pt-3 text-xs leading-relaxed text-slate-300">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
