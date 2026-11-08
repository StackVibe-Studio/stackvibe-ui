'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
  className?: string;
}

export function Dialog({ open, onOpenChange, children, className = '' }: DialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onOpenChange(false);
      }
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

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onOpenChange(false);
      }}
    >
      <div
        ref={dialogRef}
        className={[
          'relative w-full max-w-lg rounded-3xl border border-white/10 bg-slate-900/95 p-6 shadow-2xl shadow-violet-500/10 text-white animate-in zoom-in-95 duration-200',
          className,
        ].join(' ')}
      >
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          aria-label="Close dialog"
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

export function DialogHeader({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={['mb-4 space-y-1.5', className].join(' ')}>{children}</div>;
}

export function DialogTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <h2 className={['text-xl font-bold tracking-tight text-white', className].join(' ')}>{children}</h2>;
}

export function DialogDescription({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={['text-sm text-slate-300 leading-relaxed', className].join(' ')}>{children}</p>;
}

export function DialogFooter({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={['mt-6 flex flex-wrap items-center justify-end gap-3', className].join(' ')}>{children}</div>;
}
