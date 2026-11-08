'use client';

import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export interface FloatingSphereProps {
  color?: string;
  scale?: number;
  speed?: number;
}

export function FloatingSphere({ color = '#8b5cf6', scale = 1, speed = 1.2 }: FloatingSphereProps) {
  return (
    <div className="h-56 w-56 sm:h-64 sm:w-64 max-w-full rounded-full touch-pan-y">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 2, 2]} intensity={1.5} />
        <Float speed={speed} rotationIntensity={1.5} floatIntensity={2}>
          <Sphere args={[1, 64, 64]} scale={scale}>
            <MeshDistortMaterial
              color={color}
              roughness={0.2}
              metalness={0.4}
              distort={0.35}
              speed={2}
            />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
}
