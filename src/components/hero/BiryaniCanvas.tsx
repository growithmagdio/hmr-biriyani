import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ProceduralHandi } from './ProceduralHandi';
import { SteamParticles } from './SteamParticles';
import { FloatingSpices } from './FloatingSpices';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface BiryaniCanvasProps {
  isOpen: boolean;
  onToggleOpen?: () => void;
}

export const BiryaniCanvas: React.FC<BiryaniCanvasProps> = ({ isOpen }) => {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  // Test WebGL support & check viewport width
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch (e) {
      setHasWebGL(false);
    }

    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  // Track mouse pointer for gentle parallax
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width) * 2 - 1;
    const y = -(((clientY - top) / height) * 2 - 1);
    setPointer({ x, y });
  };

  if (!hasWebGL || prefersReducedMotion) {
    // Graceful WebGL / Reduced-motion Fallback
    return (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero-handi.webp"
          alt="HMR Biriyani Hut authentic dum handi"
          className="w-full h-full object-cover object-center filter brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-charcoal-900/60" />
        <div className="absolute inset-x-0 bottom-1/4 flex justify-center pointer-events-none">
          <div className="w-56 h-56 rounded-full bg-saffron-gold/25 blur-3xl animate-pulse-warm" />
        </div>
      </div>
    );
  }

  // Offset 3D Pot to the right on desktop to clear text area
  const potPosition: [number, number, number] = isDesktop ? [1.2, -0.15, 0] : [0, 0.45, 0];
  const potScale = isDesktop ? 1.05 : 0.78;

  return (
    <div
      className="relative w-full h-full cursor-grab active:cursor-grabbing select-none"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setPointer({ x: 0, y: 0 })}
    >
      <Canvas
        camera={{ position: [0, 1.4, 5.8], fov: 42 }}
        dpr={[1, 1.5]} // Cap DPR at 1.5 for performance
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          {/* Studio Ambient & Key Lighting */}
          <ambientLight intensity={1.1} color="#FFF8EB" />
          
          {/* Warm Key Light casting copper sheen */}
          <directionalLight
            position={[5, 7, 5]}
            intensity={2.8}
            color="#FFF4DD"
            castShadow
          />

          {/* Saffron Side Fill */}
          <pointLight position={[-4, 3, 2]} intensity={1.8} color="#FFAE34" />

          {/* Teal Brand Rim Light from Back/Left */}
          <spotLight
            position={[-2, 5, -4]}
            intensity={3.2}
            color="#28B8B0"
            angle={0.7}
            penumbra={0.8}
          />

          {/* Front Soft Specular Highlight */}
          <directionalLight position={[0, 2, 4]} intensity={1.2} color="#FFFFFF" />

          {/* Group container for Handi, Steam, and Spices */}
          <group position={potPosition} scale={potScale}>
            {/* Realistic Contact Shadow on floor */}
            <mesh position={[0, -1.24, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <circleGeometry args={[1.7, 32]} />
              <meshBasicMaterial color="#000000" transparent opacity={0.45} />
            </mesh>

            {/* 3D Handi Model with Dum Lid and Saffron Biryani Core */}
            <ProceduralHandi isOpen={isOpen} pointer={pointer} />

            {/* Rising Steam Wisps */}
            <SteamParticles isOpen={isOpen} count={75} />

            {/* Recognizable Floating Orbiting Spices */}
            <FloatingSpices pointer={pointer} />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};
