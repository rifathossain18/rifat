import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ReadingProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none">
      {/* Background track (subtle line) */}
      <div className="absolute inset-0 bg-slate-200/60 dark:bg-[#0B1220]/40 backdrop-blur-sm" />
      {/* Glowing progress fill */}
      <motion.div
        className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 origin-left shadow-[0_0_12px_rgba(59,130,246,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
};
