'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  if (!open || !mounted) return null;

  const positionClasses = {
    right: 'inset-y-0 right-0 w-full max-w-md border-l border-white/10 shadow-2xl',
    left: 'inset-y-0 left-0 w-full max-w-md border-r border-white/10 shadow-2xl',
    bottom: 'inset-x-0 bottom-0 max-h-[85vh] w-full border-t border-white/10 rounded-t-3xl shadow-2xl',
  };

  const content = (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm transition-opacity duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onOpenChange(false);
      }}
    >
      <div
        className={[
          'fixed z-[10000] bg-slate-900/95 p-5 sm:p-6 text-white backdrop-blur-xl overflow-y-auto transition-transform duration-300',
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

  return typeof document !== 'undefined' ? createPortal(content, document.body) : null;
}

export function DrawerHeader({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={['mb-4 space-y-1.5', className].join(' ')}>{children}</div>;
}

export function DrawerTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <h2 className={['text-xl font-bold tracking-tight text-white', className].join(' ')}>{children}</h2>;
}
