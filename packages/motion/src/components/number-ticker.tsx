'use client';

import { useEffect, useRef, useState } from 'react';

export interface NumberTickerProps {
  value: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export function NumberTicker({
  value,
  duration = 1500,
  className = '',
  prefix = '',
  suffix = '',
}: NumberTickerProps) {
  const [current, setCurrent] = useState(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(easeOut * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCurrent(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return (
    <span className={['tabular-nums font-mono', className].join(' ')}>
      {prefix}
      {current.toLocaleString()}
      {suffix}
    </span>
  );
}
