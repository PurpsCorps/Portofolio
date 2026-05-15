import { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ParticleMorph() {
  const pointsRef = useRef();
  const count = 500;
  const [shape, setShape] = useState(0);
  const shapes = ['sphere', 'cube', 'torus', 'helix'];
  const transitionProgress = useRef(0);
  const currentPositions = useRef(null);
  const targetPositions = useRef(null);

  const generatePositions = (shapeName) => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const t = i / count;
      let x, y, z;
      switch (shapeName) {
        case 'sphere': {
          const phi = Math.acos(2 * t - 1);
          const theta = Math.sqrt(count * Math.PI) * phi;
          x = 2 * Math.sin(phi) * Math.cos(theta);
          y = 2 * Math.sin(phi) * Math.sin(theta);
          z = 2 * Math.cos(phi);
          break;
        }
        case 'cube': {
          const face = Math.floor(Math.random() * 6);
          const u = (Math.random() - 0.5) * 3;
          const v = (Math.random() - 0.5) * 3;
          if (face === 0) { x = 1.5; y = u; z = v; }
          else if (face === 1) { x = -1.5; y = u; z = v; }
          else if (face === 2) { x = u; y = 1.5; z = v; }
          else if (face === 3) { x = u; y = -1.5; z = v; }
          else if (face === 4) { x = u; y = v; z = 1.5; }
          else { x = u; y = v; z = -1.5; }
          break;
        }
        case 'torus': {
          const angle1 = t * Math.PI * 2 * 3;
          const angle2 = t * Math.PI * 2 * 8;
          const r = 1.8 + 0.6 * Math.cos(angle2);
          x = r * Math.cos(angle1);
          y = 0.6 * Math.sin(angle2);
          z = r * Math.sin(angle1);
          break;
        }
        case 'helix': {
          const helixT = t * Math.PI * 6;
          x = 1.5 * Math.cos(helixT);
          y = (t - 0.5) * 5;
          z = 1.5 * Math.sin(helixT);
          break;
        }
        default: x = 0; y = 0; z = 0;
      }
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
    }
    return pos;
  };

  const allShapePositions = useMemo(() => shapes.map(s => generatePositions(s)), []);

  if (!currentPositions.current) {
    currentPositions.current = new Float32Array(allShapePositions[0]);
    targetPositions.current = new Float32Array(allShapePositions[0]);
  }

  const handleClick = () => {
    const next = (shape + 1) % shapes.length;
    setShape(next);
    currentPositions.current = new Float32Array(pointsRef.current.geometry.attributes.position.array);
    targetPositions.current = new Float32Array(allShapePositions[next]);
    transitionProgress.current = 0;
  };

  useFrame((state) => {
    if (!pointsRef.current) return;
    const positions = pointsRef.current.geometry.attributes.position.array;

    if (transitionProgress.current < 1) {
      transitionProgress.current = Math.min(transitionProgress.current + 0.015, 1);
      const ease = 1 - Math.pow(1 - transitionProgress.current, 3);
      for (let i = 0; i < positions.length; i++) {
        positions[i] = currentPositions.current[i] + (targetPositions.current[i] - currentPositions.current[i]) * ease;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }

    pointsRef.current.rotation.y += 0.003;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
  });

  const colors = useMemo(() => {
    const c = new Float32Array(count * 3);
    const palette = [
      [0, 0.94, 1],
      [0.66, 0.33, 0.97],
      [0, 1, 0.53],
      [1, 0, 0.43],
    ];
    for (let i = 0; i < count; i++) {
      const col = palette[i % palette.length];
      c[i * 3] = col[0];
      c[i * 3 + 1] = col[1];
      c[i * 3 + 2] = col[2];
    }
    return c;
  }, []);

  return (
    <group onClick={handleClick}>
      <ambientLight intensity={0.3} />
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={count} array={allShapePositions[0]} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.06} vertexColors transparent opacity={0.9} sizeAttenuation />
      </points>
    </group>
  );
}
