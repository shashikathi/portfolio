import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  PerspectiveCamera, 
  Environment, 
  Float, 
  OrbitControls, 
  useTexture,
  Text,
  Box,
  Sphere,
  Stars,
  Cloud,
  useHelper
} from '@react-three/drei';
import * as THREE from 'three';

interface PortfolioSceneProps {
  activeSection: string;
}

const SceneContent = ({ activeSection }: { activeSection: string }) => {
  const groupRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.DirectionalLight>(null);
  
  // Camera positions for each section
  const cameraPositions = {
    hero: [0, 2, 10],
    experience: [-5, 2, 10],
    projects: [5, 3, 8],
    skills: [3, 1, 5],
    certifications: [-3, 0, 8],
    education: [0, -2, 10],
    resume: [2, 2, 7],
    contact: [0, 0, 6]
  };
  
  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Enhanced floating animation
    groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05;
    
    // Smooth camera transitions based on active section
    const targetPosition = cameraPositions[activeSection as keyof typeof cameraPositions] || cameraPositions.hero;
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetPosition[0], 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetPosition[1], 0.05);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetPosition[2], 0.05);
    
    state.camera.lookAt(0, 0, 0);
  });

  // Dynamic color based on dark mode
  const isDarkMode = document.documentElement.classList.contains('dark');
  const primaryColor = isDarkMode ? '#0284c7' : '#0071c5';
  const glassColor = isDarkMode ? '#1f2937' : '#ffffff';
  const textColor = isDarkMode ? '#e5e7eb' : '#1f2937';

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Experience Atrium */}
      <group position={[-6, 2, -2]} rotation={[0, Math.PI / 4, 0]}>
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <Box args={[3, 2, 0.2]} position={[0, 0, 0]}>
            <meshPhysicalMaterial 
              color={glassColor}
              metalness={0.2}
              roughness={0.1}
              transmission={0.6}
              thickness={0.5}
            />
          </Box>
          <Text
            position={[0, 0, 0.2]}
            fontSize={0.3}
            color={primaryColor}
            anchorX="center"
            anchorY="middle"
            font="/fonts/Inter-Bold.woff"
          >
            EXPERIENCE
          </Text>
        </Float>
      </group>
      
      {/* Project Gallery */}
      <group position={[6, 3, -1]} rotation={[0, -Math.PI / 4, 0]}>
        <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.3}>
          <Box args={[3, 2, 0.2]} position={[0, 0, 0]}>
            <meshPhysicalMaterial 
              color={glassColor}
              metalness={0.3}
              roughness={0.1}
              transmission={0.6}
              thickness={0.5}
            />
          </Box>
          <Text
            position={[0, 0, 0.2]}
            fontSize={0.3}
            color={primaryColor}
            anchorX="center"
            anchorY="middle"
            font="/fonts/Inter-Bold.woff"
          >
            PROJECTS
          </Text>
        </Float>
      </group>
      
      {/* Skills Pavilion */}
      <group position={[3, -1, -3]} rotation={[0, -Math.PI / 6, 0]}>
        <Float speed={1.3} rotationIntensity={0.15} floatIntensity={0.4}>
          <Sphere args={[1.2, 64, 64]} position={[0, 0, 0]}>
            <meshPhysicalMaterial 
              color={glassColor}
              metalness={0.2}
              roughness={0.1}
              transmission={0.8}
              thickness={0.5}
            />
          </Sphere>
          <Text
            position={[0, 0, 1.3]}
            fontSize={0.3}
            color={primaryColor}
            anchorX="center"
            anchorY="middle"
            font="/fonts/Inter-Bold.woff"
          >
            SKILLS
          </Text>
        </Float>
      </group>
      
      {/* Central sphere with data visualization effect */}
      <group position={[0, 0, 0]}>
        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
          <Sphere args={[0.8, 64, 64]}>
            <meshPhysicalMaterial 
              color={primaryColor}
              metalness={0.9}
              roughness={0.1}
              clearcoat={1}
              clearcoatRoughness={0.1}
              emissive={primaryColor}
              emissiveIntensity={0.5}
            />
          </Sphere>
          
          {/* Data flow effect */}
          {Array.from({ length: 20 }).map((_, i) => (
            <Float 
              key={i}
              speed={Math.random() * 2 + 1}
              rotationIntensity={0.2}
              floatIntensity={0.5}
              position={[
                (Math.random() - 0.5) * 4,
                (Math.random() - 0.5) * 4,
                (Math.random() - 0.5) * 4
              ]}
            >
              <Box args={[0.05, 0.05, 0.05]}>
                <meshPhysicalMaterial 
                  color={primaryColor}
                  emissive={primaryColor}
                  emissiveIntensity={1}
                  transparent
                  opacity={0.6}
                />
              </Box>
            </Float>
          ))}
        </Float>
      </group>
      
      {/* Ambient particles with enhanced effect */}
      <Stars 
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      
      {/* Atmospheric clouds */}
      <Cloud
        opacity={0.5}
        speed={0.4}
        width={10}
        depth={1.5}
        segments={20}
      />
    </group>
  );
};

export const PortfolioScene: React.FC<PortfolioSceneProps> = ({ activeSection }) => {
  return (
    <Canvas dpr={[1, 2]} style={{ background: 'transparent' }}>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      <SceneContent activeSection={activeSection} />
      <Environment preset="city" />
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  );
};