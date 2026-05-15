import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const faces = [
  { text: 'React', color: '#61dafb', pos: [0, 0, 1.01], rot: [0, 0, 0] },
  { text: 'Laravel', color: '#ff2d20', pos: [0, 0, -1.01], rot: [0, Math.PI, 0] },
  { text: 'Node.js', color: '#339933', pos: [1.01, 0, 0], rot: [0, Math.PI / 2, 0] },
  { text: 'Python', color: '#3776ab', pos: [-1.01, 0, 0], rot: [0, -Math.PI / 2, 0] },
  { text: 'Unity', color: '#ffffff', pos: [0, 1.01, 0], rot: [-Math.PI / 2, 0, 0] },
  { text: 'MySQL', color: '#4479a1', pos: [0, -1.01, 0], rot: [Math.PI / 2, 0, 0] },
];

export default function SkillCube() {
  const cubeRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [targetRotation, setTargetRotation] = useState({ x: 0, y: 0 });
  const dragStart = useRef({ x: 0, y: 0 });
  const rotStart = useRef({ x: 0, y: 0 });

  useFrame(() => {
    if (!isDragging) {
      cubeRef.current.rotation.y += 0.008;
      cubeRef.current.rotation.x = Math.sin(Date.now() * 0.0005) * 0.15;
    } else {
      cubeRef.current.rotation.x = THREE.MathUtils.lerp(cubeRef.current.rotation.x, targetRotation.x, 0.1);
      cubeRef.current.rotation.y = THREE.MathUtils.lerp(cubeRef.current.rotation.y, targetRotation.y, 0.1);
    }
  });

  const handlePointerDown = (e) => {
    e.stopPropagation();
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    rotStart.current = { x: cubeRef.current.rotation.x, y: cubeRef.current.rotation.y };
    e.target.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const dx = (e.clientX - dragStart.current.x) * 0.01;
    const dy = (e.clientY - dragStart.current.y) * 0.01;
    setTargetRotation({
      x: rotStart.current.x + dy,
      y: rotStart.current.y + dx,
    });
  };

  const handlePointerUp = () => setIsDragging(false);

  return (
    <group>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} intensity={0.8} color="#00f0ff" />

      <group
        ref={cubeRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* Cube body */}
        <RoundedBox args={[2, 2, 2]} radius={0.08} smoothness={4}>
          <meshStandardMaterial
            color="#0f1528"
            transparent
            opacity={0.85}
            metalness={0.5}
            roughness={0.3}
          />
        </RoundedBox>

        {/* Wireframe overlay */}
        <RoundedBox args={[2.02, 2.02, 2.02]} radius={0.08} smoothness={4}>
          <meshStandardMaterial color="#00f0ff" wireframe transparent opacity={0.2} />
        </RoundedBox>

        {/* Face labels */}
        {faces.map((face, i) => (
          <Text
            key={i}
            position={face.pos}
            rotation={face.rot}
            fontSize={0.35}
            color={face.color}
            anchorX="center"
            anchorY="middle"
          >
            {face.text}
          </Text>
        ))}
      </group>
    </group>
  );
}
