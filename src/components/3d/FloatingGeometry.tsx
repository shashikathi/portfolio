import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

export const FloatingGeometry = () => {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    group.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.15;
  });

  return (
    <group ref={group}>
      <Sphere args={[0.5, 32, 32]} position={[0, 0, 0]}>
        <meshPhysicalMaterial
          color="#0071c5"
          metalness={0.2}
          roughness={0.1}
          transmission={0.6}
          thickness={0.5}
        />
      </Sphere>

      <Box args={[0.3, 0.3, 0.3]} position={[1, 0.5, 0]}>
        <meshPhysicalMaterial
          color="#0284c7"
          metalness={0.3}
          roughness={0.1}
          transmission={0.6}
          thickness={0.5}
        />
      </Box>

      <Torus args={[0.3, 0.1, 16, 32]} position={[-1, -0.5, 0]} rotation={[Math.PI / 4, 0, 0]}>
        <meshPhysicalMaterial
          color="#0369a1"
          metalness={0.4}
          roughness={0.1}
          transmission={0.6}
          thickness={0.5}
        />
      </Torus>
    </group>
  );
};