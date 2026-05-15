import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Icosahedron({ position, color, speed = 1, onClick }) {
  const ref = useRef();
  const [hovered, setHovered] = React.useState(false);
  
  useFrame((state) => {
    ref.current.rotation.x += 0.003 * speed;
    ref.current.rotation.y += 0.005 * speed;
    if (hovered) {
      ref.current.scale.lerp(new THREE.Vector3(1.3, 1.3, 1.3), 0.1);
    } else {
      ref.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh
        ref={ref}
        position={position}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color={color}
          wireframe
          distort={hovered ? 0.4 : 0.2}
          speed={3}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
}

function TorusKnot({ position, color, speed = 1 }) {
  const ref = useRef();
  const [hovered, setHovered] = React.useState(false);

  useFrame(() => {
    ref.current.rotation.x += 0.004 * speed;
    ref.current.rotation.z += 0.003 * speed;
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
      <mesh
        ref={ref}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <torusKnotGeometry args={[0.6, 0.2, 100, 16]} />
        <MeshWobbleMaterial
          color={color}
          wireframe
          factor={hovered ? 1 : 0.3}
          speed={hovered ? 3 : 1}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

function Octahedron({ position, color, speed = 1 }) {
  const ref = useRef();
  const [hovered, setHovered] = React.useState(false);

  useFrame(() => {
    ref.current.rotation.y += 0.006 * speed;
    ref.current.rotation.z += 0.002 * speed;
  });

  return (
    <Float speed={2.5} rotationIntensity={2} floatIntensity={2.5}>
      <mesh
        ref={ref}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <octahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={hovered ? 0.9 : 0.5}
        />
      </mesh>
    </Float>
  );
}

function Dodecahedron({ position, color }) {
  const ref = useRef();
  const [hovered, setHovered] = React.useState(false);

  useFrame((state) => {
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
    ref.current.rotation.y += 0.004;
  });

  return (
    <Float speed={1.8} floatIntensity={2}>
      <mesh
        ref={ref}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <dodecahedronGeometry args={[0.7, 0]} />
        <MeshDistortMaterial
          color={color}
          wireframe
          distort={hovered ? 0.5 : 0.15}
          speed={2}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const count = 200;
  const ref = useRef();
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#00f0ff" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

import React from 'react';

export default function FloatingShapes() {
  return (
    <group>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#00f0ff" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#a855f7" />
      
      <Icosahedron position={[3, 1, -2]} color="#00f0ff" speed={1.2} />
      <TorusKnot position={[-3, -1, -1]} color="#a855f7" speed={0.8} />
      <Octahedron position={[2, -2, -3]} color="#00ff88" speed={1} />
      <Dodecahedron position={[-2, 2, -2]} color="#ff006e" />
      
      <ParticleField />
    </group>
  );
}
