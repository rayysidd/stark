'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Cylinder } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';
import { Resume } from '@/app/types/types'; // Import the standardized type

// The local Resume type is now removed

function ArmorPedestal({ resume, position, onClick }: { resume: Resume, position: [number, number, number], onClick: () => void }) {
  // ... component code remains the same
  const meshRef = useRef<THREE.Mesh>(null!);
  const [isHovered, setIsHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group position={position} onClick={onClick} onPointerOver={() => setIsHovered(true)} onPointerOut={() => setIsHovered(false)}>
      <Cylinder args={[1.5, 1.5, 0.2, 64]} ref={meshRef}>
        <meshStandardMaterial
          color={isHovered ? '#06b6d4' : '#0891b2'}
          emissive={isHovered ? '#06b6d4' : '#0891b2'}
          emissiveIntensity={isHovered ? 1 : 0.5}
          toneMapped={false}
        />
      </Cylinder>
      <Text position={[0, 0.8, 0]} fontSize={0.4} color="white" anchorX="center">
        Mark {resume.version}
      </Text>
      <Text position={[0, 0.4, 0]} fontSize={0.2} color="cyan" anchorX="center" maxWidth={3}>
        {resume.name}
      </Text>
    </group>
  );
}

function SceneContent({ resumes, onPedestalClick }: { resumes: Resume[], onPedestalClick: (resume: Resume) => void }) {
  // ... component code remains the same
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  const radius = 5;

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 10, 0]} intensity={100} color="#06b6d4" />
      <directionalLight position={[-10, 5, -10]} intensity={2} />
      <group ref={groupRef}>
        {resumes.map((resume, index) => {
          const angle = (index / resumes.length) * Math.PI * 2;
          const x = radius * Math.cos(angle);
          const z = radius * Math.sin(angle);
          return (
            <ArmorPedestal
              key={resume.id}
              resume={resume}
              position={[x, 0, z]}
              onClick={() => onPedestalClick(resume)}
            />
          );
        })}
      </group>
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
}

export const ArmorScene = ({ resumes, onPedestalClick }: { resumes: Resume[], onPedestalClick: (resume: Resume) => void }) => {
  return (
    <Canvas camera={{ position: [0, 5, 12], fov: 60 }}>
      <SceneContent resumes={resumes} onPedestalClick={onPedestalClick} />
    </Canvas>
  );
};