'use client';

import { useState, type ReactNode } from 'react';

export type TabItem = {
  id: string;
  label: string;
  content: ReactNode;
};

export interface TabsProps {
  items: TabItem[];
  defaultTab?: string;
  className?: string;
}

export function Tabs({ items, defaultTab, className = '' }: TabsProps) {
  const initialTab = defaultTab ?? items[0]?.id ?? '';
  const [activeTab, setActiveTab] = useState(initialTab);

  const activeItem = items.find((item) => item.id === activeTab) ?? items[0];

  return (
    <div className={className}>
      <div className="mb-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveTab(item.id)}
            className={[
              'rounded-full px-3 py-1.5 text-sm transition',
              item.id === activeItem?.id
                ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white',
            ].join(' ')}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-200">
        {activeItem?.content}
      </div>
    </div>
  );
}
