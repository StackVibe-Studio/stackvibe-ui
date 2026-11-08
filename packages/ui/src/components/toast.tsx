'use client';

import { useState, useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

export interface ToastMessage {
  id: string;
  title?: string;
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
}

type ToastListener = (toasts: ToastMessage[]) => void;

let toasts: ToastMessage[] = [];
const listeners = new Set<ToastListener>();

function notify() {
  listeners.forEach((l) => l([...toasts]));
}

export const toast = {
  show(message: string, options?: Partial<Omit<ToastMessage, 'id' | 'message'>>) {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: ToastMessage = {
      id,
      message,
      type: options?.type || 'info',
      title: options?.title,
      duration: options?.duration || 4000,
    };
    toasts = [...toasts, newToast];
    notify();

    setTimeout(() => {
      toast.dismiss(id);
    }, newToast.duration);

    return id;
  },
  success(message: string, title?: string) {
    return toast.show(message, { type: 'success', title });
  },
  error(message: string, title?: string) {
    return toast.show(message, { type: 'error', title });
  },
  info(message: string, title?: string) {
    return toast.show(message, { type: 'info', title });
  },
  warning(message: string, title?: string) {
    return toast.show(message, { type: 'warning', title });
  },
  dismiss(id: string) {
    toasts = toasts.filter((t) => t.id !== id);
    notify();
  },
};

export type ToasterPosition =
  | 'bottom-right'
  | 'bottom-left'
  | 'top-right'
  | 'top-left'
  | 'top-center'
  | 'bottom-center';

const positionStyles: Record<ToasterPosition, string> = {
  'bottom-right': 'bottom-5 right-5 items-end',
  'bottom-left': 'bottom-5 left-5 items-start',
  'top-right': 'top-5 right-5 items-end',
  'top-left': 'top-5 left-5 items-start',
  'top-center': 'top-5 left-1/2 -translate-x-1/2 items-center',
  'bottom-center': 'bottom-5 left-1/2 -translate-x-1/2 items-center',
};

export function Toaster({ position = 'bottom-right' }: { position?: ToasterPosition }) {
  const [activeToasts, setActiveToasts] = useState<ToastMessage[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    listeners.add(setActiveToasts);
    return () => {
      listeners.delete(setActiveToasts);
    };
  }, []);

  if (!mounted || activeToasts.length === 0) return null;

  const typeStyles = {
    success: 'border-emerald-500/40 bg-slate-900/95 text-emerald-100 shadow-emerald-500/15',
    error: 'border-rose-500/40 bg-slate-900/95 text-rose-100 shadow-rose-500/15',
    info: 'border-[var(--primary,#8b5cf6)]/40 bg-slate-900/95 text-slate-100 shadow-[var(--glow,rgba(139,92,246,0.15))]',
    warning: 'border-amber-500/40 bg-slate-900/95 text-amber-100 shadow-amber-500/15',
  };

  const content = (
    <div
      className={[
        'fixed z-[99999] flex flex-col gap-2.5 max-w-sm w-full pointer-events-none transition-all duration-300',
        positionStyles[position],
      ].join(' ')}
    >
      {activeToasts.map((t) => (
        <div
          key={t.id}
          className={[
            'pointer-events-auto flex items-start justify-between rounded-2xl border p-4 shadow-2xl backdrop-blur-xl transition-all duration-200',
            typeStyles[t.type || 'info'],
          ].join(' ')}
        >
          <div className="space-y-1">
            {t.title && (
              <p className="font-bold text-xs tracking-wide uppercase text-white">
                {t.title}
              </p>
            )}
            <p className="text-sm font-medium leading-relaxed">{t.message}</p>
          </div>
          <button
            type="button"
            onClick={() => toast.dismiss(t.id)}
            aria-label="Close notification"
            className="ml-3 text-slate-400 hover:text-white transition cursor-pointer text-lg leading-none"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(content, document.body) : null;
}
