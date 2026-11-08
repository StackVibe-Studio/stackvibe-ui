'use client';

import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export interface OrbClusterProps {
  colors?: string[];
  scale?: number;
  speed?: number;
}

export function OrbCluster({
  colors = ['#8b5cf6', '#22d3ee', '#f472b6', '#34d399'],
  scale = 1,
  speed = 1.2,
}: OrbClusterProps) {
  return (
    <div className="h-72 w-full overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 3, 3]} intensity={1.5} />
        {colors.map((color, index) => (
          <Float
            key={color + index}
            speed={speed + index * 0.2}
            rotationIntensity={1.2}
            floatIntensity={2}
            position={[(index - 1.5) * 1.6, (index % 2 === 0 ? 1 : -1) * 0.7, -1]}
          >
            <Sphere args={[0.8, 48, 48]} scale={scale * (index === 0 ? 1.1 : 0.8)}>
              <MeshDistortMaterial
                color={color}
                roughness={0.15}
                metalness={0.5}
                distort={0.35}
                speed={2}
                transparent
                opacity={0.82}
              />
            </Sphere>
          </Float>
        ))}
      </Canvas>
    </div>
  );
}
