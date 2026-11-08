'use client';

import type { HTMLMotionProps } from 'motion/react';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';

export interface SpotlightCardProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  glowColor?: string;
  intensity?: number;
}

export function SpotlightCard({
  children,
  glowColor = '#8b5cf6',
  intensity = 0.6,
  style,
  className = '',
  ...props
}: SpotlightCardProps) {
  return (
    <motion.div
      {...props}
      whileHover={{ scale: 1.01, y: -4 }}
      transition={{ type: 'spring', stiffness: 180, damping: 18 }}
      className={['relative overflow-hidden rounded-3xl', className].join(' ')}
      style={{
        ...style,
        background: 'linear-gradient(135deg, rgba(15,23,42,0.78), rgba(15,23,42,0.42))',
      }}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background: `radial-gradient(circle at var(--pointer-x, 50%) var(--pointer-y, 50%), ${glowColor}${Math.round(
            intensity * 255
          )
            .toString(16)
            .padStart(2, '0')}, rgba(255,255,255,0) 38%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
