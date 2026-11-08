'use client';

import { useState, type ReactNode } from 'react';

export type TabItem = {
  id: string;
  label: string;
  icon?: ReactNode;
  badge?: ReactNode;
  content: ReactNode;
};

export type TabsVariant = 'pills' | 'underline' | 'bordered' | 'segmented';
export type TabsSize = 'sm' | 'md' | 'lg';

export interface TabsProps {
  items: TabItem[];
  defaultTab?: string;
  variant?: TabsVariant;
  size?: TabsSize;
  fullWidth?: boolean;
  className?: string;
}

const sizeStyles: Record<TabsSize, string> = {
  sm: 'px-3 py-1 text-xs gap-1.5',
  md: 'px-4 py-2 text-sm gap-2',
  lg: 'px-5 py-2.5 text-base gap-2.5',
};

export function Tabs({
  items,
  defaultTab,
  variant = 'pills',
  size = 'md',
  fullWidth = false,
  className = '',
}: TabsProps) {
  const initialTab = defaultTab ?? items[0]?.id ?? '';
  const [activeTab, setActiveTab] = useState(initialTab);

  const activeItem = items.find((item) => item.id === activeTab) ?? items[0];

  const getTabButtonClass = (isActive: boolean) => {
    switch (variant) {
      case 'underline':
        return [
          'border-b-2 font-medium transition cursor-pointer flex items-center justify-center',
          isActive
            ? 'border-[var(--primary,#8b5cf6)] text-white font-bold'
            : 'border-transparent text-slate-400 hover:text-white hover:border-white/20',
          sizeStyles[size],
          fullWidth ? 'flex-1' : '',
        ].join(' ');
      case 'bordered':
        return [
          'rounded-xl border font-medium transition cursor-pointer flex items-center justify-center',
          isActive
            ? 'border-[var(--primary,#8b5cf6)] bg-[var(--primary,#8b5cf6)]/15 text-white shadow-md'
            : 'border-white/10 bg-slate-900/40 text-slate-400 hover:bg-white/5 hover:text-white',
          sizeStyles[size],
          fullWidth ? 'flex-1' : '',
        ].join(' ');
      case 'segmented':
        return [
          'rounded-xl font-medium transition cursor-pointer flex items-center justify-center',
          isActive
            ? 'bg-slate-900 text-white shadow-lg shadow-black/40 font-bold'
            : 'text-slate-400 hover:text-white',
          sizeStyles[size],
          fullWidth ? 'flex-1' : '',
        ].join(' ');
      case 'pills':
      default:
        return [
          'rounded-full font-medium transition cursor-pointer flex items-center justify-center',
          isActive
            ? 'bg-[var(--primary,#8b5cf6)] text-white shadow-lg shadow-[var(--glow,rgba(139,92,246,0.25))] font-bold'
            : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white',
          sizeStyles[size],
          fullWidth ? 'flex-1' : '',
        ].join(' ');
    }
  };

  return (
    <div className={['w-full space-y-4', className].join(' ')}>
      <div
        className={[
          'flex flex-wrap gap-2 select-none',
          variant === 'underline' ? 'border-b border-white/10 gap-4' : '',
          variant === 'segmented' ? 'rounded-2xl border border-white/10 bg-slate-950/80 p-1.5' : '',
        ].join(' ')}
      >
        {items.map((item) => {
          const isActive = item.id === activeItem?.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={getTabButtonClass(isActive)}
            >
              {item.icon && <span className="shrink-0">{item.icon}</span>}
              <span>{item.label}</span>
              {item.badge && <span className="shrink-0">{item.badge}</span>}
            </button>
          );
        })}
      </div>

      <div className="rounded-2xl border border-white/10 bg-[var(--surface,rgba(15,23,42,0.6))] p-5 text-sm text-slate-200 shadow-xl backdrop-blur-md">
        {activeItem?.content}
      </div>
    </div>
  );
}
