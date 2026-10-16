import React, { useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';

interface ProceduralBiryaniProps {
  isOpen: boolean;
}

export const ProceduralBiryani: React.FC<ProceduralBiryaniProps> = ({ isOpen }) => {
  // Load the authentic dum-layer texture for high-fidelity rice & masala
  const [biryaniTexture, setBiryaniTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      '/images/dum-layer.webp',
      (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1.2, 1.2);
        setBiryaniTexture(texture);
      },
      undefined,
      (err) => console.warn('Could not load biryani texture, falling back to procedural:', err)
    );
  }, []);

  // 1. Mounded Biryani Rice Bed Geometry
  const moundGeo = useMemo(() => {
    // Parabolic mound for natural heaped biryani
    const geo = new THREE.CylinderGeometry(1.42, 1.36, 0.35, 48, 4);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);
      if (y > 0) {
        // Displace top vertices to form a soft mounded heap
        const dist = Math.sqrt(x * x + z * z);
        const mound = Math.max(0, 1.4 - dist) * 0.22;
        const noise = (Math.sin(x * 12) + Math.cos(z * 12)) * 0.025;
        pos.setY(i, y + mound + noise);
      }
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  // 2. Biryani Rice Material
  const biryaniMat = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: biryaniTexture ? '#FFFFFF' : '#E8A329', // saffron golden tint
      map: biryaniTexture,
      roughness: 0.75,
      metalness: 0.08,
    });
  }, [biryaniTexture]);

  // 3. 3D Succulent Chicken Piece (Roasted Masala Glaze)
  const chickenGeo = useMemo(() => {
    const geo = new THREE.SphereGeometry(0.38, 24, 20);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      let x = pos.getX(i);
      let y = pos.getY(i);
      let z = pos.getZ(i);
      // Elongate and contour into authentic chicken cut shape
      x *= 1.4;
      y *= 0.85 + Math.sin(x * 4) * 0.15;
      z *= 0.95;
      pos.setXYZ(i, x, y, z);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  const chickenMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#A03816', // roasted tandoori red-brown masala glaze
        roughness: 0.45,
        metalness: 0.12,
      }),
    []
  );

  // 4. 3D Fresh Garden Mint Leaves
  const mintGeo = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.15);
    shape.bezierCurveTo(0.12, -0.05, 0.12, 0.12, 0, 0.22);
    shape.bezierCurveTo(-0.12, 0.12, -0.12, -0.05, 0, -0.15);
    return new THREE.ExtrudeGeometry(shape, {
      depth: 0.008,
      bevelEnabled: true,
      bevelSegments: 1,
      bevelSize: 0.005,
      bevelThickness: 0.005,
    });
  }, []);

  const mintMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#348218', // vibrant fresh garden mint
        roughness: 0.5,
        metalness: 0.05,
        side: THREE.DoubleSide,
      }),
    []
  );

  // 5. 3D Crispy Fried Onion (Birista) Strips
  const onionGeo = useMemo(() => new THREE.TorusGeometry(0.12, 0.02, 8, 16, Math.PI * 1.3), []);
  const onionMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#632B0D', // caramelized golden brown fried onion
        roughness: 0.6,
        metalness: 0.1,
      }),
    []
  );

  return (
    <group position={[0, 0.52, 0]}>
      {/* 1. Mounded Saffron Biryani Rice Bed */}
      <mesh geometry={moundGeo} material={biryaniMat} receiveShadow castShadow />

      {/* 2. Juicy Chicken Drumstick / Cut Pieces */}
      <group position={[0.2, 0.22, 0.15]} rotation={[0.2, 0.5, -0.1]}>
        <mesh geometry={chickenGeo} material={chickenMat} castShadow receiveShadow />
      </group>
      <group position={[-0.35, 0.2, -0.2]} rotation={[-0.3, -0.6, 0.2]} scale={0.85}>
        <mesh geometry={chickenGeo} material={chickenMat} castShadow receiveShadow />
      </group>

      {/* 3. Fresh Green Mint Leaves */}
      <group position={[0.05, 0.28, 0.25]} rotation={[-Math.PI / 2 + 0.3, 0.2, 0.4]}>
        <mesh geometry={mintGeo} material={mintMat} castShadow />
      </group>
      <group position={[-0.15, 0.27, 0.3]} rotation={[-Math.PI / 2 - 0.2, -0.4, -0.3]} scale={0.85}>
        <mesh geometry={mintGeo} material={mintMat} castShadow />
      </group>
      <group position={[0.35, 0.24, -0.1]} rotation={[-Math.PI / 2 + 0.1, 0.6, 0.8]} scale={0.75}>
        <mesh geometry={mintGeo} material={mintMat} castShadow />
      </group>

      {/* 4. Fried Onion (Birista) Crisps */}
      <group position={[0.25, 0.25, 0.32]} rotation={[0.4, 0.8, -0.2]}>
        <mesh geometry={onionGeo} material={onionMat} />
      </group>
      <group position={[-0.2, 0.24, 0.12]} rotation={[-0.2, 0.4, 0.9]}>
        <mesh geometry={onionGeo} material={onionMat} />
      </group>
      <group position={[0.0, 0.28, -0.3]} rotation={[0.7, -0.5, 0.3]}>
        <mesh geometry={onionGeo} material={onionMat} />
      </group>
      <group position={[-0.45, 0.22, -0.05]} rotation={[0.1, 1.2, -0.4]}>
        <mesh geometry={onionGeo} material={onionMat} />
      </group>

      {/* 5. Direct Saffron Spotlight Illuminating the Food */}
      <spotLight
        position={[0, 2.5, 0.5]}
        target-position={[0, 0.2, 0]}
        intensity={isOpen ? 8.5 : 0.8}
        color="#FFAE34"
        angle={0.7}
        penumbra={0.6}
        distance={5}
        castShadow
      />
    </group>
  );
};
