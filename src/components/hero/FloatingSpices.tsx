import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingSpicesProps {
  pointer: { x: number; y: number };
}

export const FloatingSpices: React.FC<FloatingSpicesProps> = ({ pointer }) => {
  const groupRef = useRef<THREE.Group>(null);

  // Orbit centers offset towards the handi (right side, x ~ 0.8), avoiding left text
  const spiceData = useMemo(() => {
    return [
      // 1. Green Cardamom Pods (Western Ghats)
      { type: 'cardamom', baseRadius: 2.3, speed: 0.22, height: 0.9, phase: 0.2, scale: 0.16 },
      { type: 'cardamom', baseRadius: 2.8, speed: -0.18, height: -0.3, phase: 2.4, scale: 0.14 },
      { type: 'cardamom', baseRadius: 2.1, speed: 0.25, height: 1.6, phase: 4.1, scale: 0.15 },

      // 2. Star Anise (Distinct 8-Pod Cluster)
      { type: 'star_anise', baseRadius: 2.6, speed: -0.16, height: 0.4, phase: 1.1, scale: 0.24 },
      { type: 'star_anise', baseRadius: 3.1, speed: 0.14, height: 1.3, phase: 3.5, scale: 0.26 },
      { type: 'star_anise', baseRadius: 2.4, speed: -0.19, height: -0.6, phase: 5.2, scale: 0.22 },

      // 3. Cinnamon Sticks (Rolled Bark Quills)
      { type: 'cinnamon', baseRadius: 2.7, speed: 0.17, height: 0.7, phase: 0.8, scale: 0.32 },
      { type: 'cinnamon', baseRadius: 2.5, speed: -0.21, height: -0.2, phase: 3.1, scale: 0.28 },

      // 4. Bay Leaves (Organic Laurel Leaf with Midrib)
      { type: 'bay_leaf', baseRadius: 2.9, speed: -0.15, height: 1.5, phase: 1.7, scale: 0.32 },
      { type: 'bay_leaf', baseRadius: 2.4, speed: 0.18, height: -0.5, phase: 4.6, scale: 0.28 },

      // 5. Kashmir Saffron Threads (Crimson Curves)
      { type: 'saffron', baseRadius: 2.0, speed: 0.28, height: 1.0, phase: 0.5, scale: 0.25 },
      { type: 'saffron', baseRadius: 2.2, speed: -0.32, height: 0.3, phase: 2.8, scale: 0.22 },
      { type: 'saffron', baseRadius: 1.9, speed: 0.26, height: -0.4, phase: 4.8, scale: 0.24 },
    ];
  }, []);

  // --- RECOGNIZABLE PROCEDURAL GEOMETRIES ---

  // 1. Cardamom: Ribbed capsule with longitudinal ridges
  const cardamomGeo = useMemo(() => {
    const geo = new THREE.CapsuleGeometry(0.45, 0.75, 12, 16);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);
      const angle = Math.atan2(z, x);
      // 6 ribbed ridges along the pod
      const rib = 1.0 + Math.sin(angle * 6) * 0.08;
      pos.setXYZ(i, x * rib, y, z * rib);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  const cardamomMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#5C882F', // fresh green cardamom
        roughness: 0.65,
        metalness: 0.1,
      }),
    []
  );

  // 2. Star Anise: 8 pointed rays with central seed indentation
  const starAniseGeo = useMemo(() => {
    const shape = new THREE.Shape();
    const points = 8;
    for (let i = 0; i < points * 2; i++) {
      const isTip = i % 2 === 0;
      const r = isTip ? 0.85 : 0.32;
      const a = (i / (points * 2)) * Math.PI * 2;
      const x = Math.cos(a) * r;
      const y = Math.sin(a) * r;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    shape.closePath();
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.16,
      bevelEnabled: true,
      bevelSegments: 2,
      bevelSize: 0.04,
      bevelThickness: 0.04,
    });
    geo.computeVertexNormals();
    return geo;
  }, []);

  const starAniseMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#422415', // dark woody star anise
        roughness: 0.8,
        metalness: 0.08,
      }),
    []
  );

  // 3. Cinnamon Stick: Rolled hollow bark tube
  const cinnamonGeo = useMemo(() => {
    const geo = new THREE.CylinderGeometry(0.18, 0.2, 1.6, 16, 1, true); // hollow tube
    geo.computeVertexNormals();
    return geo;
  }, []);

  const cinnamonMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#6B381C', // Ceylon cinnamon bark brown
        roughness: 0.85,
        metalness: 0.05,
        side: THREE.DoubleSide,
      }),
    []
  );

  // 4. Bay Leaf: Organic laurel shape with gentle curve
  const bayLeafGeo = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.95);
    shape.bezierCurveTo(0.38, -0.4, 0.42, 0.35, 0, 0.95);
    shape.bezierCurveTo(-0.42, 0.35, -0.38, -0.4, 0, -0.95);
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.015,
      bevelEnabled: true,
      bevelSegments: 1,
      bevelSize: 0.01,
      bevelThickness: 0.01,
    });
    // Add subtle curvature
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);
      const curve = (1 - (y * y) / 1.0) * 0.12;
      pos.setZ(i, z + curve);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  const bayLeafMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#6E7640', // dried olive herbal bay leaf
        roughness: 0.65,
        metalness: 0.08,
        side: THREE.DoubleSide,
      }),
    []
  );

  // 5. Kashmir Saffron: Delicate curved thread
  const saffronGeo = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, -0.4, 0),
      new THREE.Vector3(0.08, -0.1, 0.04),
      new THREE.Vector3(-0.06, 0.2, -0.02),
      new THREE.Vector3(0.04, 0.5, 0.01),
    ]);
    return new THREE.TubeGeometry(curve, 16, 0.018, 6, false);
  }, []);

  const saffronMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#C72418', // royal Kashmir saffron crimson-gold
        emissive: '#701008',
        emissiveIntensity: 0.3,
        roughness: 0.4,
        metalness: 0.1,
      }),
    []
  );

  const meshesRef = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;

    // Gentle overall parallax reaction
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.15,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointer.y * 0.1,
        0.05
      );
    }

    // Individual orbiting motion keeping mostly on the right side
    spiceData.forEach((item, idx) => {
      const mesh = meshesRef.current[idx];
      if (!mesh) return;

      const angle = item.phase + time * item.speed;
      // Soft orbit around handi
      mesh.position.x = Math.cos(angle) * item.baseRadius;
      mesh.position.z = Math.sin(angle) * item.baseRadius;
      mesh.position.y = item.height + Math.sin(time * 0.9 + idx) * 0.18;

      // Tumbling rotation
      mesh.rotation.x += delta * 0.35;
      mesh.rotation.y += delta * 0.45;
    });
  });

  return (
    <group ref={groupRef} position={[0.2, 0, 0]}>
      {spiceData.map((item, idx) => {
        let geo: THREE.BufferGeometry = cardamomGeo;
        let mat: THREE.Material = cardamomMat;

        if (item.type === 'star_anise') {
          geo = starAniseGeo;
          mat = starAniseMat;
        } else if (item.type === 'cinnamon') {
          geo = cinnamonGeo;
          mat = cinnamonMat;
        } else if (item.type === 'bay_leaf') {
          geo = bayLeafGeo;
          mat = bayLeafMat;
        } else if (item.type === 'saffron') {
          geo = saffronGeo;
          mat = saffronMat;
        }

        return (
          <mesh
            key={idx}
            ref={(el) => (meshesRef.current[idx] = el)}
            geometry={geo}
            material={mat}
            scale={item.scale}
            castShadow
          />
        );
      })}
    </group>
  );
};
