'use client';

import { Environment, Float, RoundedBox } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import type { CSSProperties, ReactNode } from 'react';

export interface Glass3DCardProps {
  children: ReactNode;
  className?: string;
  depth?: number;
  blur?: number;
  glow?: boolean;
  tilt?: boolean;
  interactive?: boolean;
}

export function Glass3DCard({
  children,
  className = '',
  depth = 40,
  blur = 18,
  glow = true,
  tilt = true,
  interactive = true,
}: Glass3DCardProps) {
  const style: CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '1.5rem',
    background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.66), rgba(30, 41, 59, 0.3))',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    backdropFilter: `blur(${blur}px)`,
    boxShadow: glow ? '0 0 30px rgba(139, 92, 246, 0.2)' : undefined,
    transform: tilt ? 'perspective(1200px) rotateX(4deg) rotateY(-8deg)' : undefined,
    minHeight: '300px',
  };

  return (
    <div className={['relative', className].join(' ')} style={style}>
      <div className="absolute inset-0 opacity-80 pointer-events-none">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[3, 3, 3]} intensity={1.2} />
          <Float speed={1.5} floatIntensity={1.2} rotationIntensity={tilt ? 0.6 : 0.1}>
            <RoundedBox args={[2.6, 2.8, 0.5]} radius={0.18}>
              <meshPhysicalMaterial
                color={glow ? '#8b5cf6' : '#dbeafe'}
                roughness={0.08}
                metalness={0.45}
                transmission={0.8}
                thickness={depth}
                transparent
                opacity={0.55}
              />
            </RoundedBox>
          </Float>
          <Environment preset="city" />
        </Canvas>
      </div>
      <div className="relative z-10 h-full w-full p-5">{children}</div>
      {!interactive ? null : (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />
      )}
    </div>
  );
}
