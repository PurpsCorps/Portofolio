import { useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

export default function DraggableCard({ children, className = '', style = {} }) {
  const [isDragging, setIsDragging] = useState(false);
  const dragOrigin = useRef({ x: 0, y: 0 });
  const offset = useRef({ x: 0, y: 0 });

  const [spring, api] = useSpring(() => ({
    x: 0, y: 0, scale: 1, rotateZ: 0,
    config: { tension: 300, friction: 20 },
  }));

  const handlePointerDown = (e) => {
    setIsDragging(true);
    dragOrigin.current = { x: e.clientX - offset.current.x, y: e.clientY - offset.current.y };
    e.target.setPointerCapture(e.pointerId);
    api.start({ scale: 1.08, rotateZ: Math.random() * 4 - 2 });
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const x = e.clientX - dragOrigin.current.x;
    const y = e.clientY - dragOrigin.current.y;
    offset.current = { x, y };
    api.start({ x, y });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    offset.current = { x: 0, y: 0 };
    api.start({ x: 0, y: 0, scale: 1, rotateZ: 0 });
  };

  return (
    <animated.div
      className={`draggable-card ${className}`}
      style={{
        ...style,
        ...spring,
        touchAction: 'none',
        userSelect: 'none',
        cursor: isDragging ? 'grabbing' : 'grab',
        zIndex: isDragging ? 100 : 1,
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {children}
    </animated.div>
  );
}
