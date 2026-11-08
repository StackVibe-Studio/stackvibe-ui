'use client';

import type { HTMLMotionProps } from 'motion/react';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';

export interface FadeInSectionProps extends HTMLMotionProps<'section'> {
  children: ReactNode;
  delay?: number;
  y?: number;
}

export function FadeInSection({
  children,
  delay = 0,
  y = 24,
  className = '',
  ...props
}: FadeInSectionProps) {
  return (
    <motion.section
      {...props}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
