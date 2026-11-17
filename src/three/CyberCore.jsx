import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export default function CyberCore({ mousePos }) {
  const outerRef = useRef();
  const innerRef = useRef();
  const ringRef1 = useRef();
  const ringRef2 = useRef();

  useFrame((state, delta) => {
    // Smooth idle rotation
    if (outerRef.current) {
      outerRef.current.rotation.x += delta * 0.25;
      outerRef.current.rotation.y += delta * 0.35;
      
      // Subtle mouse follow tilt
      if (mousePos) {
        outerRef.current.rotation.y += (mousePos.x * 0.3 - outerRef.current.rotation.y) * 0.05;
        outerRef.current.rotation.x += (-mousePos.y * 0.3 - outerRef.current.rotation.x) * 0.05;
      }
    }

    if (innerRef.current) {
      innerRef.current.rotation.x -= delta * 0.4;
      innerRef.current.rotation.z += delta * 0.3;
    }

    if (ringRef1.current) {
      ringRef1.current.rotation.z += delta * 0.5;
      ringRef1.current.rotation.x += delta * 0.2;
    }

    if (ringRef2.current) {
      ringRef2.current.rotation.y -= delta * 0.45;
      ringRef2.current.rotation.z -= delta * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
      <group scale={[1.4, 1.4, 1.4]}>
        {/* Core Inner Crystal */}
        <mesh ref={innerRef}>
          <octahedronGeometry args={[0.9, 0]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#4c1d95"
            emissiveIntensity={0.6}
            roughness={0.15}
            metalness={0.85}
            wireframe={false}
          />
        </mesh>

        {/* Outer Wireframe Icosahedron */}
        <mesh ref={outerRef}>
          <icosahedronGeometry args={[1.5, 1]} />
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#0284c7"
            emissiveIntensity={0.4}
            roughness={0.2}
            metalness={0.9}
            wireframe={true}
            transparent={true}
            opacity={0.7}
          />
        </mesh>

        {/* Orbiting Orbital Ring 1 */}
        <mesh ref={ringRef1} rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[2.0, 0.02, 16, 100]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#9333ea"
            emissiveIntensity={0.8}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>

        {/* Orbiting Orbital Ring 2 */}
        <mesh ref={ringRef2} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
          <torusGeometry args={[2.3, 0.018, 16, 100]} />
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={0.8}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>

        {/* Central Pulsing Point Light */}
        <pointLight color="#a855f7" intensity={2} distance={5} />
        <pointLight color="#00f0ff" intensity={1.5} distance={6} />
      </group>
    </Float>
  );
}
