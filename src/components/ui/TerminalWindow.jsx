import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { terminalCommands } from '../../data/portfolio';

export default function TerminalWindow() {
  const [lines, setLines] = useState([]);
  const [currentCmd, setCurrentCmd] = useState(0);
  const [typing, setTyping] = useState('');
  const [showOutput, setShowOutput] = useState(false);
  const bodyRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, px: 0, py: 0 });

  useEffect(() => {
    if (currentCmd >= terminalCommands.length) return;
    const cmd = terminalCommands[currentCmd];
    let i = 0;
    setShowOutput(false);
    setTyping('');
    const typeInterval = setInterval(() => {
      if (i < cmd.cmd.length) {
        setTyping(cmd.cmd.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setShowOutput(true);
          setLines(prev => [...prev, { cmd: cmd.cmd, output: cmd.output }]);
          setTyping('');
          setTimeout(() => setCurrentCmd(prev => prev + 1), 600);
        }, 300);
      }
    }, 50);
    return () => clearInterval(typeInterval);
  }, [currentCmd]);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines, typing]);

  const handleBarDown = (e) => {
    setDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY, px: position.x, py: position.y };
  };

  useEffect(() => {
    const onMove = (e) => {
      if (!dragging) return;
      setPosition({
        x: dragStart.current.px + e.clientX - dragStart.current.x,
        y: dragStart.current.py + e.clientY - dragStart.current.y,
      });
    };
    const onUp = () => setDragging(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); };
  }, [dragging]);

  return (
    <motion.div
      className="terminal"
      style={{ transform: `translate(${position.x}px, ${position.y}px)`, maxWidth: 600, width: '100%' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="terminal-bar" onMouseDown={handleBarDown}>
        <div className="terminal-dot red" />
        <div className="terminal-dot yellow" />
        <div className="terminal-dot green" />
        <span className="terminal-title">guest@fahri-portfolio ~ zsh</span>
      </div>
      <div className="terminal-body" ref={bodyRef}>
        {lines.map((line, i) => (
          <div key={i} className="terminal-line">
            <div><span className="terminal-prompt">$ </span><span className="terminal-cmd">{line.cmd}</span></div>
            <div className="terminal-output">{line.output}</div>
          </div>
        ))}
        {currentCmd < terminalCommands.length && (
          <div className="terminal-line">
            <span className="terminal-prompt">$ </span>
            <span className="terminal-cmd">{typing}</span>
            <span className="terminal-cursor" />
          </div>
        )}
        {currentCmd >= terminalCommands.length && (
          <div className="terminal-line">
            <span className="terminal-prompt">$ </span>
            <span className="terminal-cursor" />
          </div>
        )}
      </div>
    </motion.div>
  );
}
