import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Globe() {
  const globeRef = useRef();
  const ringsRef = useRef();
  const pinRef = useRef();

  // Palembang coordinates: -2.9761° S, 104.7754° E
  const palembangPos = useMemo(() => {
    const lat = -2.9761 * (Math.PI / 180);
    const lon = 104.7754 * (Math.PI / 180);
    const r = 2.05;
    return new THREE.Vector3(
      r * Math.cos(lat) * Math.cos(lon),
      r * Math.sin(lat),
      r * Math.cos(lat) * Math.sin(lon)
    );
  }, []);

  // Create wireframe sphere geometry points
  const spherePoints = useMemo(() => {
    const points = [];
    const segments = 30;
    // Latitude lines
    for (let i = 0; i <= segments; i++) {
      const lat = (i / segments) * Math.PI - Math.PI / 2;
      for (let j = 0; j <= segments * 2; j++) {
        const lon = (j / (segments * 2)) * Math.PI * 2;
        const r = 2;
        points.push(
          r * Math.cos(lat) * Math.cos(lon),
          r * Math.sin(lat),
          r * Math.cos(lat) * Math.sin(lon)
        );
      }
    }
    return new Float32Array(points);
  }, []);

  useFrame((state) => {
    globeRef.current.rotation.y += 0.003;
    ringsRef.current.rotation.z += 0.005;
    ringsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    pinRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 3) * 0.2);
  });

  return (
    <group>
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#00f0ff" />

      {/* Globe wireframe */}
      <group ref={globeRef}>
        <mesh>
          <sphereGeometry args={[2, 24, 24]} />
          <meshStandardMaterial color="#00f0ff" wireframe transparent opacity={0.15} />
        </mesh>
        
        {/* Solid inner sphere */}
        <mesh>
          <sphereGeometry args={[1.95, 24, 24]} />
          <meshStandardMaterial color="#0a0e1a" transparent opacity={0.8} />
        </mesh>

        {/* Palembang pin */}
        <group ref={pinRef} position={palembangPos}>
          <mesh>
            <sphereGeometry args={[0.06, 8, 8]} />
            <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={2} />
          </mesh>
          {/* Pin glow */}
          <mesh>
            <sphereGeometry args={[0.12, 8, 8]} />
            <meshStandardMaterial color="#00ff88" transparent opacity={0.3} />
          </mesh>
        </group>
      </group>

      {/* Orbital rings */}
      <group ref={ringsRef}>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.8, 0.01, 8, 64]} />
          <meshStandardMaterial color="#a855f7" transparent opacity={0.4} />
        </mesh>
        <mesh rotation={[Math.PI / 5, Math.PI / 4, 0]}>
          <torusGeometry args={[3.1, 0.008, 8, 64]} />
          <meshStandardMaterial color="#00f0ff" transparent opacity={0.3} />
        </mesh>
      </group>
    </group>
  );
}
