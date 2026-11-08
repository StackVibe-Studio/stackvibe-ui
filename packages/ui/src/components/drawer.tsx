'use client';

import { useEffect, type ReactNode } from 'react';

export interface DrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  position?: 'left' | 'right' | 'bottom';
  children: ReactNode;
  className?: string;
}

export function Drawer({
  open,
  onOpenChange,
  position = 'right',
  children,
  className = '',
}: DrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onOpenChange(false);
    };
    if (open) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  const positionClasses = {
    right: 'inset-y-0 right-0 w-full max-w-md border-l border-white/10 animate-in slide-in-from-right duration-300',
    left: 'inset-y-0 left-0 w-full max-w-md border-r border-white/10 animate-in slide-in-from-left duration-300',
    bottom: 'inset-x-0 bottom-0 max-h-[85vh] w-full border-t border-white/10 rounded-t-3xl animate-in slide-in-from-bottom duration-300',
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onOpenChange(false);
      }}
    >
      <div
        className={[
          'fixed bg-slate-900/95 p-6 shadow-2xl text-white overflow-y-auto',
          positionClasses[position],
          className,
        ].join(' ')}
      >
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          aria-label="Close drawer"
          className="absolute right-5 top-5 rounded-xl border border-white/10 bg-white/5 p-1.5 text-slate-400 hover:bg-white/10 hover:text-white transition cursor-pointer"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}

export function DrawerHeader({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={['mb-6 space-y-1.5', className].join(' ')}>{children}</div>;
}

export function DrawerTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <h2 className={['text-xl font-bold tracking-tight text-white', className].join(' ')}>{children}</h2>;
}
