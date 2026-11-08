'use client';

import { motion } from 'motion/react';
import type { HTMLAttributes } from 'react';

export interface TextRevealProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export function TextReveal({
  as: Component = 'h1',
  children,
  className = '',
  ...props
}: TextRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Component {...props} className={className}>
        {children}
      </Component>
    </motion.div>
  );
}
