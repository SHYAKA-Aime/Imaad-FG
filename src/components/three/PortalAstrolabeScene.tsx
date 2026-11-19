import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AstrolabeRig: React.FC<{ isEntering: boolean }> = ({ isEntering }) => {
  const groupRef = useRef<THREE.Group>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const midRingRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  // Create a 3D dot matrix field (inspired by Teyliom's central grid matrix in 00:00-00:10)
  const gridPoints = useMemo(() => {
    const pts: number[] = [];
    const size = 11;
    const step = 0.65;
    for (let x = -size; x <= size; x += 1) {
      for (let y = -size; y <= size; y += 1) {
        pts.push(x * step, y * step, -1.5);
      }
    }
    return new Float32Array(pts);
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = t * 0.14;
      outerRingRef.current.rotation.x = Math.sin(t * 0.4) * 0.18;
    }
    if (midRingRef.current) {
      midRingRef.current.rotation.z = -t * 0.22;
      midRingRef.current.rotation.y = Math.cos(t * 0.35) * 0.24;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * (isEntering ? 3.5 : 0.45);
      coreRef.current.rotation.x += delta * (isEntering ? 2.2 : 0.25);
    }
    if (groupRef.current) {
      const targetX = state.pointer.x * 0.35;
      const targetY = state.pointer.y * 0.35;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.06);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.06);
      if (isEntering) {
        groupRef.current.scale.lerp(new THREE.Vector3(1.65, 1.65, 1.65), 0.08);
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* 3D Architectural Dot Matrix */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={gridPoints.length / 3}
            array={gridPoints}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          color="#64748b"
          transparent
          opacity={0.45}
          sizeAttenuation
        />
      </points>

      {/* Outer Golden Astrolabe Ring */}
      <mesh ref={outerRingRef}>
        <torusGeometry args={[2.55, 0.008, 16, 120]} />
        <meshBasicMaterial color="#C9A24D" transparent opacity={0.45} />
      </mesh>

      {/* Mid Sapphire Astrolabe Ring */}
      <mesh ref={midRingRef}>
        <torusGeometry args={[1.85, 0.007, 16, 100]} />
        <meshBasicMaterial color="#38BDF8" transparent opacity={0.35} />
      </mesh>

      {/* Inner Wireframe Sovereign Polyhedron Core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshBasicMaterial color="#C9A24D" wireframe transparent opacity={0.14} />
      </mesh>
    </group>
  );
};

export const PortalAstrolabeScene: React.FC<{ isEntering: boolean }> = ({ isEntering }) => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6.5], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={0.8} />
        <AstrolabeRig isEntering={isEntering} />
      </Canvas>
    </div>
  );
};
