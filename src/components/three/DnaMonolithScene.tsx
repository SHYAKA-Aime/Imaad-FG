import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const TopographicMesh: React.FC<{ activeIndex: number }> = ({ activeIndex }) => {
  const meshRef = useRef<THREE.Points>(null);

  const { positions, count } = useMemo(() => {
    const cols = 46;
    const rows = 26;
    const total = cols * rows;
    const arr = new Float32Array(total * 3);
    let idx = 0;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        arr[idx * 3] = (i - cols / 2) * 0.35;
        arr[idx * 3 + 1] = (j - rows / 2) * 0.35;
        arr[idx * 3 + 2] = 0;
        idx++;
      }
    }
    return { positions: arr, count: total };
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!meshRef.current) return;
    const posAttr = meshRef.current.geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < count; i++) {
      const x = posAttr.getX(i);
      const y = posAttr.getY(i);
      const z =
        Math.sin(x * 0.65 + t * 0.8 + activeIndex * 0.7) * 0.35 +
        Math.cos(y * 0.75 + t * 0.6) * 0.35;
      posAttr.setZ(i, z);
    }
    posAttr.needsUpdate = true;
    meshRef.current.rotation.x = -0.55 + state.pointer.y * 0.08;
    meshRef.current.rotation.z = state.pointer.x * 0.08;
  });

  return (
    <points ref={meshRef} position={[0, -0.5, -1]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.038}
        color={activeIndex % 2 === 0 ? '#10B981' : '#C9A24D'}
        transparent
        opacity={0.45}
        sizeAttenuation
      />
    </points>
  );
};

export const DnaMonolithScene: React.FC<{ activeIndex: number }> = ({ activeIndex }) => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 opacity-65">
      <Canvas camera={{ position: [0, 0, 6.2], fov: 50 }} dpr={[1, 1.5]}>
        <ambientLight intensity={1} />
        <TopographicMesh activeIndex={activeIndex} />
      </Canvas>
    </div>
  );
};
