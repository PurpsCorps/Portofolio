import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const circumference = 2 * Math.PI * 20;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg className="scroll-progress-ring" viewBox="0 0 50 50">
      <circle className="bg" cx="25" cy="25" r="20" />
      <circle
        className="progress"
        cx="25" cy="25" r="20"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
      <text x="25" y="26" textAnchor="middle" dominantBaseline="middle"
        fill="#00f0ff" fontSize="9" fontFamily="var(--font-code)">
        {Math.round(progress)}%
      </text>
    </svg>
  );
}
