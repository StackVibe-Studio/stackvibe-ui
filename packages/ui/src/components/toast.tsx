'use client';

import { useState, useEffect, type ReactNode } from 'react';

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
  dismiss(id: string) {
    toasts = toasts.filter((t) => t.id !== id);
    notify();
  },
};

export function Toaster() {
  const [activeToasts, setActiveToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    listeners.add(setActiveToasts);
    return () => {
      listeners.delete(setActiveToasts);
    };
  }, []);

  if (activeToasts.length === 0) return null;

  const typeStyles = {
    success: 'border-emerald-500/40 bg-slate-900/95 text-emerald-100 shadow-emerald-500/10',
    error: 'border-rose-500/40 bg-slate-900/95 text-rose-100 shadow-rose-500/10',
    info: 'border-cyan-500/40 bg-slate-900/95 text-cyan-100 shadow-cyan-500/10',
    warning: 'border-amber-500/40 bg-slate-900/95 text-amber-100 shadow-amber-500/10',
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {activeToasts.map((t) => (
        <div
          key={t.id}
          className={[
            'pointer-events-auto flex items-start justify-between rounded-2xl border p-4 shadow-xl backdrop-blur-md animate-in slide-in-from-bottom-5 duration-200',
            typeStyles[t.type || 'info'],
          ].join(' ')}
        >
          <div className="space-y-1">
            {t.title && <p className="font-semibold text-xs tracking-wide uppercase text-white">{t.title}</p>}
            <p className="text-sm font-medium">{t.message}</p>
          </div>
          <button
            type="button"
            onClick={() => toast.dismiss(t.id)}
            className="ml-3 text-slate-400 hover:text-white transition cursor-pointer"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
