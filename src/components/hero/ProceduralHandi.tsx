import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { ProceduralBiryani } from './ProceduralBiryani';

interface ProceduralHandiProps {
  isOpen: boolean;
  pointer: { x: number; y: number };
}

export const ProceduralHandi: React.FC<ProceduralHandiProps> = ({ isOpen, pointer }) => {
  const groupRef = useRef<THREE.Group>(null);
  const lidGroupRef = useRef<THREE.Group>(null);
  const doughSealRef = useRef<THREE.Mesh>(null);
  const internalGlowRef = useRef<THREE.PointLight>(null);

  // 1. High-Definition Smooth Copper Handi Profile
  const potGeo = useMemo(() => {
    // Generate smooth 2D curve points along the silhouette of a classic South Indian dum pot
    const curve = new THREE.SplineCurve([
      new THREE.Vector2(0.0, -1.2),     // Center base
      new THREE.Vector2(1.1, -1.2),     // Base outer flat
      new THREE.Vector2(1.45, -0.95),   // Lower belly curve
      new THREE.Vector2(1.78, -0.5),    // Expanding mid belly
      new THREE.Vector2(1.92, -0.1),    // Peak belly equator
      new THREE.Vector2(1.82, 0.3),     // Upper belly taper
      new THREE.Vector2(1.48, 0.6),     // Pinched neck collar
      new THREE.Vector2(1.68, 0.8),     // Flared outer trumpet lip
      new THREE.Vector2(1.58, 0.84),    // Rolled lip top
      new THREE.Vector2(1.44, 0.78),    // Inner rim notch
      new THREE.Vector2(1.38, 0.45),    // Inner neck wall
      new THREE.Vector2(0.0, 0.45),     // Inner floor
    ]);

    const splinePoints = curve.getPoints(42);
    const geo = new THREE.LatheGeometry(splinePoints, 64);
    geo.computeVertexNormals();
    return geo;
  }, []);

  // 2. High-Definition Fitted Dome Lid
  const lidGeo = useMemo(() => {
    const curve = new THREE.SplineCurve([
      new THREE.Vector2(0.0, 1.48),    // Handle brass knob top
      new THREE.Vector2(0.2, 1.45),    // Knob outer rim
      new THREE.Vector2(0.12, 1.32),   // Knob neck
      new THREE.Vector2(0.32, 1.28),   // Dome apex
      new THREE.Vector2(0.85, 1.18),   // Upper dome curvature
      new THREE.Vector2(1.35, 0.98),   // Mid dome
      new THREE.Vector2(1.64, 0.84),   // Outer rim flare
      new THREE.Vector2(1.5, 0.82),    // Inner seating groove
      new THREE.Vector2(0.0, 1.08),    // Inner dome ceiling
    ]);

    const splinePoints = curve.getPoints(36);
    const geo = new THREE.LatheGeometry(splinePoints, 64);
    geo.computeVertexNormals();
    return geo;
  }, []);

  // 3. Authentic Dough Seal (Wheat Flour Dum Seal Ring with Surface Texture)
  const doughGeo = useMemo(() => {
    const geo = new THREE.TorusGeometry(1.54, 0.09, 20, 64);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const u = pos.getX(i);
      const v = pos.getY(i);
      const w = pos.getZ(i);
      const bump = Math.sin(u * 18) * Math.cos(w * 18) * 0.018;
      pos.setXYZ(i, u + bump, v + bump, w + bump);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  // 4. Cast Brass Handles & Collars
  const handleGeo = useMemo(() => new THREE.TorusGeometry(0.36, 0.07, 16, 32, Math.PI), []);
  const rivetGeo = useMemo(() => new THREE.CylinderGeometry(0.06, 0.06, 0.12, 16), []);
  const neckBandGeo = useMemo(() => new THREE.CylinderGeometry(1.49, 1.5, 0.08, 64), []);

  // Materials
  const copperMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#BD5F2A', // authentic glowing South Indian copper
        metalness: 0.86,
        roughness: 0.28,
      }),
    []
  );

  const brassTrimMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#E0B543', // rich metallic brass/gold
        metalness: 0.92,
        roughness: 0.22,
      }),
    []
  );

  const doughMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#E0D0AD', // raw wheat flour dough
        roughness: 0.95,
        metalness: 0.0,
        transparent: true,
        opacity: 0.95,
      }),
    []
  );

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;

    // Slow orbital turn + gentle mouse parallax
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.07 + pointer.x * 0.18;
      groupRef.current.rotation.x = -0.04 + pointer.y * 0.08;
    }

    // Smooth, realistic chef lifting and tilting of the lid
    if (lidGroupRef.current) {
      const targetY = isOpen ? 2.15 : 0;
      const targetRotX = isOpen ? -0.55 : 0;
      const targetZ = isOpen ? -0.7 : 0;

      lidGroupRef.current.position.y = THREE.MathUtils.lerp(
        lidGroupRef.current.position.y,
        targetY,
        0.05
      );
      lidGroupRef.current.position.z = THREE.MathUtils.lerp(
        lidGroupRef.current.position.z,
        targetZ,
        0.05
      );
      lidGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        lidGroupRef.current.rotation.x,
        targetRotX,
        0.05
      );
    }

    // Dough seal opacity fade
    if (doughSealRef.current) {
      const targetOpacity = isOpen ? 0.08 : 0.95;
      const mat = doughSealRef.current.material as THREE.MeshStandardMaterial;
      mat.opacity = THREE.MathUtils.lerp(mat.opacity, targetOpacity, 0.08);
      doughSealRef.current.scale.setScalar(isOpen ? 1.05 : 1.0);
    }

    // Internal Saffron Glow Point Light
    if (internalGlowRef.current) {
      const targetIntensity = isOpen ? 5.5 : 0.7;
      internalGlowRef.current.intensity = THREE.MathUtils.lerp(
        internalGlowRef.current.intensity,
        targetIntensity,
        0.08
      );
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* 1. Main Smooth Hammered Copper Handi Body */}
      <mesh geometry={potGeo} material={copperMat} castShadow receiveShadow />

      {/* Decorative Brass Collar Ring around Neck */}
      <mesh geometry={neckBandGeo} material={brassTrimMat} position={[0, 0.6, 0]} />

      {/* 2. Heavy Brass Ear Handles on Left and Right with Rivets */}
      <group position={[1.82, 0.18, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <mesh geometry={handleGeo} material={brassTrimMat} castShadow />
        <mesh geometry={rivetGeo} material={copperMat} position={[0, 0.28, 0]} />
        <mesh geometry={rivetGeo} material={copperMat} position={[0, -0.28, 0]} />
      </group>

      <group position={[-1.82, 0.18, 0]} rotation={[0, 0, Math.PI / 2]}>
        <mesh geometry={handleGeo} material={brassTrimMat} castShadow />
        <mesh geometry={rivetGeo} material={copperMat} position={[0, 0.28, 0]} />
        <mesh geometry={rivetGeo} material={copperMat} position={[0, -0.28, 0]} />
      </group>

      {/* 3. Clearly Visible Food: Layered Rice, Chicken & Mint Leaves */}
      <ProceduralBiryani isOpen={isOpen} />

      {/* Internal Saffron Glow Point Light */}
      <pointLight
        ref={internalGlowRef}
        color="#F8C046"
        intensity={0.7}
        distance={5}
        position={[0, 0.8, 0]}
      />

      {/* 4. Textured Wheat Dough Dum Seal */}
      <mesh
        ref={doughSealRef}
        geometry={doughGeo}
        material={doughMat}
        position={[0, 0.82, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />

      {/* 5. Fitted Dome Lid with Brass Knob */}
      <group ref={lidGroupRef}>
        <mesh geometry={lidGeo} material={copperMat} castShadow receiveShadow />
        {/* Brass Knob Accent */}
        <mesh position={[0, 1.48, 0]}>
          <cylinderGeometry args={[0.22, 0.22, 0.06, 32]} />
          <primitive object={brassTrimMat} />
        </mesh>
      </group>
    </group>
  );
};
