'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function WaveMesh({ color = '#8b5cf6', wireframe = false }: { color?: string; wireframe?: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);

  const { positions, originalZ } = useMemo(() => {
    const geo = new THREE.PlaneGeometry(6, 6, 32, 32);
    const pos = geo.attributes.position;
    const orig = new Float32Array(pos.count);
    for (let i = 0; i < pos.count; i++) {
      orig[i] = pos.getZ(i);
    }
    return { positions: pos, originalZ: orig };
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime() * 1.5;
    const geom = meshRef.current.geometry;
    const pos = geom.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      const u = pos.getX(i);
      const v = pos.getY(i);
      const z = Math.sin(u * 1.5 + t) * 0.25 + Math.cos(v * 1.5 + t) * 0.25;
      pos.setZ(i, z);
    }
    pos.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 3, 0, 0]}>
      <planeGeometry args={[6, 6, 32, 32]} />
      <meshStandardMaterial
        color={color}
        wireframe={wireframe}
        roughness={0.3}
        metalness={0.5}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export interface WaveCanvasProps {
  color?: string;
  wireframe?: boolean;
  className?: string;
}

export function WaveCanvas({ color = '#8b5cf6', wireframe = false, className = '' }: WaveCanvasProps) {
  return (
    <div className={['h-64 w-full rounded-3xl overflow-hidden bg-slate-950/50', className].join(' ')}>
      <Canvas camera={{ position: [0, -1, 3], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 5, 4]} intensity={1.5} />
        <pointLight position={[-3, -3, 2]} intensity={0.5} color="#22d3ee" />
        <WaveMesh color={color} wireframe={wireframe} />
      </Canvas>
    </div>
  );
}
