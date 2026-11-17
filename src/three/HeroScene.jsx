import React, { Suspense, useState, useEffect, Component } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import CyberCore from './CyberCore';
import ParticleField from './ParticleField';
import FloatingObjects from './FloatingObjects';
import FallbackHero3D from './FallbackHero3D';

// Error Boundary to catch WebGL context crashes
class WebGLErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("WebGL rendering notice, falling back to CSS 3D:", error);
  }

  render() {
    if (this.state.hasError) {
      return <FallbackHero3D />;
    }
    return this.props.children;
  }
}

function checkWebGLSupport() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
}

export default function HeroScene() {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionChange);

    // Check WebGL support
    setHasWebGL(checkWebGLSupport());

    // Mouse movement handler
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!hasWebGL || reducedMotion) {
    return <FallbackHero3D />;
  }

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] md:h-[540px] lg:h-[600px] flex items-center justify-center">
      <WebGLErrorBoundary>
        <Suspense fallback={<FallbackHero3D />}>
          <Canvas
            className="w-full h-full cursor-grab active:cursor-grabbing"
            gl={{
              antialias: true,
              powerPreference: 'high-performance',
              alpha: true,
            }}
            dpr={[1, 1.5]} // Capped at 1.5 for performance
          >
            <PerspectiveCamera makeDefault position={[0, 0, 6.2]} fov={45} />

            {/* Ambient & Directional Lighting */}
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 8, 5]} intensity={1.2} color="#ffffff" />
            <directionalLight position={[-5, -5, -2]} intensity={0.5} color="#8b5cf6" />
            <pointLight position={[0, 0, 2]} intensity={1.8} color="#00f0ff" distance={8} />

            {/* 3D Scene Components */}
            <ParticleField count={220} />
            <CyberCore mousePos={mousePos} />
            <FloatingObjects />

            {/* Subtle interactive OrbitControls with constrained angles */}
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate={false}
              maxPolarAngle={Math.PI / 1.7}
              minPolarAngle={Math.PI / 2.5}
              dampingFactor={0.05}
            />
          </Canvas>
        </Suspense>
      </WebGLErrorBoundary>
    </div>
  );
}
