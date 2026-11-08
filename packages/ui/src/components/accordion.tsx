'use client';

import { useState, type ReactNode } from 'react';

export interface AccordionItemData {
  id: string;
  title: ReactNode;
  content: ReactNode;
}

export interface AccordionProps {
  items: AccordionItemData[];
  type?: 'single' | 'multiple';
  defaultOpen?: string[];
  className?: string;
}

export function Accordion({
  items,
  type = 'single',
  defaultOpen = [],
  className = '',
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

  return (
    <div className={['divide-y divide-white/10 rounded-2xl border border-white/10 bg-slate-900/60 overflow-hidden', className].join(' ')}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className="transition duration-150">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between px-5 py-4 text-left font-medium text-white hover:bg-white/5 transition cursor-pointer"
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <svg
                className={`h-4 w-4 transform text-slate-400 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-violet-400' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <div className="px-5 pb-4 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
