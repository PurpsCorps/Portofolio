import { useState, useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top = e.clientY + 'px';
      }
    };

    const onMouseOver = (e) => {
      const t = e.target;
      if (t.closest('a, button, .neon-btn, .glass-panel, .draggable-card, canvas, [data-hover]')) {
        setIsHovering(true);
      }
    };

    const onMouseOut = (e) => {
      const t = e.target;
      if (t.closest('a, button, .neon-btn, .glass-panel, .draggable-card, canvas, [data-hover]')) {
        setIsHovering(false);
      }
    };

    let raf;
    const animate = () => {
      if (cursorRef.current) {
        const cx = parseFloat(cursorRef.current.style.left || 0);
        const cy = parseFloat(cursorRef.current.style.top || 0);
        cursorRef.current.style.left = cx + (pos.current.x - cx) * 0.15 + 'px';
        cursorRef.current.style.top = cy + (pos.current.y - cy) * 0.15 + 'px';
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={`custom-cursor ${isHovering ? 'hover' : ''}`} style={{ left: 0, top: 0 }} />
      <div ref={dotRef} className="cursor-dot" style={{ left: 0, top: 0 }} />
    </>
  );
}
