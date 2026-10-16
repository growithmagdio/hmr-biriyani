import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SteamParticlesProps {
  isOpen: boolean;
  count?: number;
}

export const SteamParticles: React.FC<SteamParticlesProps> = ({ isOpen, count = 75 }) => {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate particle positions, velocities, and lifespans
  const [positions, velocities, lifeData] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    const life = new Float32Array(count); // progress 0 to 1

    for (let i = 0; i < count; i++) {
      // Start near the handi rim radius (r ~ 0.8 - 1.2, y ~ 0.8)
      const radius = 0.2 + Math.random() * 0.8;
      const angle = Math.random() * Math.PI * 2;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = 0.8 + Math.random() * 0.4;
      pos[i * 3 + 2] = Math.sin(angle) * radius;

      vel[i * 3] = (Math.random() - 0.5) * 0.015;
      vel[i * 3 + 1] = 0.02 + Math.random() * 0.03; // upward speed
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.015;

      life[i] = Math.random(); // staggered initial life
    }
    return [pos, vel, life];
  }, [count]);

  const pPositions = useMemo(() => new Float32Array(positions), [positions]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const geo = pointsRef.current.geometry;
    const posAttr = geo.attributes.position;
    const targetAlpha = isOpen ? 1 : 0.2;

    for (let i = 0; i < count; i++) {
      lifeData[i] += delta * 0.6;
      if (lifeData[i] > 1.0) {
        // Reset particle
        lifeData[i] = 0;
        const radius = 0.2 + Math.random() * 0.7;
        const angle = Math.random() * Math.PI * 2;
        pPositions[i * 3] = Math.cos(angle) * radius;
        pPositions[i * 3 + 1] = 0.8 + Math.random() * 0.2;
        pPositions[i * 3 + 2] = Math.sin(angle) * radius;
      } else {
        // Rise and swirl
        pPositions[i * 3] += velocities[i * 3] + Math.sin(state.clock.elapsedTime + i) * 0.003;
        pPositions[i * 3 + 1] += velocities[i * 3 + 1] * (isOpen ? 1.4 : 0.6);
        pPositions[i * 3 + 2] += velocities[i * 3 + 2] + Math.cos(state.clock.elapsedTime + i) * 0.003;
      }
    }

    posAttr.needsUpdate = true;

    // Soft opacity transition
    const mat = pointsRef.current.material as THREE.PointsMaterial;
    mat.opacity = THREE.MathUtils.lerp(mat.opacity, targetAlpha * 0.65, 0.05);
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={pPositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.16}
        color="#F5D082" // warm saffron steam glow
        transparent
        opacity={0.3}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};
