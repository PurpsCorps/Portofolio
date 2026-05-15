import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';

export default function Text3DComponent() {
  const textRef = useRef();
  const glowRef = useRef();

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      textRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.03;
      textRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#00f0ff" />
      <pointLight position={[-5, 3, 5]} intensity={0.6} color="#a855f7" />
      
      <group ref={textRef}>
        <Center>
          <mesh>
            <boxGeometry args={[5, 1.2, 0.4]} />
            <meshStandardMaterial
              color="#00f0ff"
              wireframe
              transparent
              opacity={0.15}
            />
          </mesh>
        </Center>
        <Center>
          <mesh>
            <boxGeometry args={[4.8, 1, 0.3]} />
            <meshStandardMaterial
              color="#0f1528"
              transparent
              opacity={0.9}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        </Center>
      </group>
    </group>
  );
}
