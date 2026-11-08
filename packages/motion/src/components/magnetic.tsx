'use client';

import { motion, useMotionValue, useSpring } from 'motion/react';
import { useRef, type MouseEvent, type ReactNode } from 'react';

export interface MagneticProps {
  children: ReactNode;
  strength?: number;
  damping?: number;
  stiffness?: number;
  mass?: number;
  disabled?: boolean;
  className?: string;
}

export function Magnetic({
  children,
  strength = 0.35,
  damping = 15,
  stiffness = 150,
  mass = 0.1,
  disabled = false,
  className = '',
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping, stiffness, mass };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (disabled || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * strength);
    y.set(middleY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={['inline-block', className].join(' ')}
    >
      {children}
    </motion.div>
  );
}
