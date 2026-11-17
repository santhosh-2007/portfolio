import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

function FloatingMesh({ position, geometry, color, speed = 1.5, rotationSpeed = 0.3, scale = 1, wireframe = false }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * rotationSpeed;
      meshRef.current.rotation.y += delta * (rotationSpeed * 1.2);
    }
  });

  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {geometry}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.8}
          wireframe={wireframe}
          transparent={wireframe}
          opacity={wireframe ? 0.6 : 0.9}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingObjects() {
  return (
    <group>
      {/* Top right floating wireframe torus knot */}
      <FloatingMesh
        position={[3.2, 1.8, -1]}
        scale={0.4}
        speed={1.8}
        rotationSpeed={0.4}
        color="#00f0ff"
        wireframe={true}
        geometry={<torusKnotGeometry args={[0.9, 0.25, 64, 16]} />}
      />

      {/* Bottom left floating mini octahedron */}
      <FloatingMesh
        position={[-3.0, -1.6, 0.5]}
        scale={0.5}
        speed={1.4}
        rotationSpeed={-0.3}
        color="#8b5cf6"
        wireframe={false}
        geometry={<octahedronGeometry args={[1, 0]} />}
      />

      {/* Top left floating tetrahedron */}
      <FloatingMesh
        position={[-2.8, 2.0, -1.5]}
        scale={0.45}
        speed={1.6}
        rotationSpeed={0.25}
        color="#a855f7"
        wireframe={true}
        geometry={<tetrahedronGeometry args={[1, 0]} />}
      />

      {/* Bottom right floating ring */}
      <FloatingMesh
        position={[2.9, -2.1, 0.2]}
        scale={0.5}
        speed={1.2}
        rotationSpeed={-0.35}
        color="#38bdf8"
        wireframe={true}
        geometry={<torusGeometry args={[0.8, 0.2, 16, 32]} />}
      />
    </group>
  );
}
