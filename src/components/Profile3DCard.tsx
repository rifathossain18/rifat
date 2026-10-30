import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Star, Code2 } from 'lucide-react';

interface Profile3DCardProps {
  className?: string;
  imageSrc?: string;
}

export const Profile3DCard: React.FC<Profile3DCardProps> = ({
  className = '',
  imageSrc = '/assets/me.png'
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation angles (max +/- 12 degrees)
    const rotX = ((y - centerY) / centerY) * -12;
    const rotY = ((x - centerX) / centerX) * 12;

    setRotateX(rotX);
    setRotateY(rotY);

    // Glare coordinates
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlarePos({ x: glareX, y: glareY, opacity: 0.35 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      className={`relative select-none ${className}`}
      style={{ perspective: 1000 }}
    >
      {/* Ambient background backlight aura */}
      <div
        className="absolute -inset-3 bg-gradient-to-tr from-blue-600/30 via-indigo-600/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-60 transition-opacity duration-500 pointer-events-none"
        style={{
          transform: isHovered ? 'scale(1.05)' : 'scale(0.98)'
        }}
      />

      {/* Main 3D Tilted Card Container with Framer Motion whileHover & mouse tracking */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          scale: 1.025,
          rotateX: isHovered && rotateX !== 0 ? rotateX : -6,
          rotateY: isHovered && rotateY !== 0 ? rotateY : 6,
          transition: { type: 'spring', stiffness: 260, damping: 20 }
        }}
        animate={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          scale: isHovered ? 1.025 : 1
        }}
        transition={{
          type: 'spring',
          stiffness: 220,
          damping: 22,
          mass: 0.6
        }}
        style={{
          transformPerspective: 1000,
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center'
        }}
        className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-3xl bg-white dark:bg-[#0B1220] border-2 border-slate-200 dark:border-[#1E293B] hover:border-blue-400 dark:hover:border-blue-500/50 p-3 sm:p-4 shadow-2xl shadow-blue-950/10 dark:shadow-blue-950/40 cursor-grab active:cursor-grabbing overflow-hidden transition-colors"
      >
        {/* Dynamic Glass Glare Sheen that follows mouse coordinates */}
        <div
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-200 rounded-3xl"
          style={{
            background: `radial-gradient(circle 280px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, ${glarePos.opacity}), transparent 70%)`
          }}
        />

        {/* 3D-Perspective Hover Image Frame */}
        <motion.div
          whileHover={{
            rotateX: -4,
            rotateY: 5,
            scale: 1.02,
            transition: { type: 'spring', stiffness: 300, damping: 20 }
          }}
          style={{
            transformPerspective: 1000,
            transformStyle: 'preserve-3d',
            transform: 'translateZ(25px)'
          }}
          className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-700/60 shadow-inner"
        >
          {/* Portrait Image with depth */}
          <img
            src={imageSrc}
            alt="Rifat – Web &amp; Flutter App Developer"
            className="w-full h-full object-cover object-top transition-transform duration-500 scale-100 hover:scale-105"
            loading="eager"
          />

          {/* Bottom Gradient Shade for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

          {/* Subtle Corner Hologram Watermark */}
          <div
            className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 dark:bg-[#0B1220]/80 backdrop-blur-md border border-slate-200 dark:border-[#1E293B] text-[11px] font-semibold text-slate-900 dark:text-white shadow-md"
            style={{ transform: 'translateZ(30px)' }}
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span>RIFAT.</span>
          </div>
        </motion.div>

        {/* 3D Floating Badge 1: Top Right - Availability (Floating on Z-axis) */}
        <div
          className="absolute top-5 right-5 z-40 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#0B1220]/90 backdrop-blur-md border border-emerald-500/40 shadow-xl flex items-center gap-2 pointer-events-none transition-transform duration-300"
          style={{
            transform: 'translateZ(48px)'
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 tracking-wide">
            Available for Hire
          </span>
        </div>

        {/* 3D Floating Badge 2: Bottom Left - Specialty */}
        <div
          className="absolute bottom-6 left-5 z-40 p-3 rounded-2xl bg-white/95 dark:bg-[#0B1220]/92 backdrop-blur-md border border-slate-200 dark:border-[#1E293B] shadow-2xl pointer-events-none transition-transform duration-300 max-w-[210px]"
          style={{
            transform: 'translateZ(55px)'
          }}
        >
          <div className="flex items-center gap-2 mb-1 text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <Code2 className="w-3.5 h-3.5" />
            <span>Core Expertise</span>
          </div>
          <div className="text-xs font-extrabold text-slate-900 dark:text-white leading-tight">
            React &amp; Flutter
          </div>
          <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
            Web &amp; Mobile App Expert
          </div>
        </div>

        {/* 3D Floating Badge 3: Bottom Right - Client Rating */}
        <div
          className="absolute bottom-6 right-5 z-40 px-3 py-2 rounded-2xl bg-white/95 dark:bg-[#0B1220]/92 backdrop-blur-md border border-slate-200 dark:border-[#1E293B] shadow-2xl pointer-events-none transition-transform duration-300"
          style={{
            transform: 'translateZ(50px)'
          }}
        >
          <div className="flex items-center gap-0.5 text-amber-400 mb-0.5">
            <Star className="w-3 h-3 fill-amber-400" />
            <Star className="w-3 h-3 fill-amber-400" />
            <Star className="w-3 h-3 fill-amber-400" />
            <Star className="w-3 h-3 fill-amber-400" />
            <Star className="w-3 h-3 fill-amber-400" />
          </div>
          <div className="text-[10px] font-bold text-slate-700 dark:text-slate-200">
            Top Rated Developer
          </div>
        </div>
      </motion.div>

      {/* Interactive Helper Text */}
      <div className="mt-4 text-center">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-600 dark:text-slate-400 bg-white dark:bg-[#111827] px-3 py-1 rounded-full border border-slate-200 dark:border-[#1E293B] shadow-sm">
          <Sparkles className="w-3 h-3 text-blue-600 dark:text-blue-400 animate-spin" style={{ animationDuration: '4s' }} />
          <span>Interactive 3D Depth Card · Hover &amp; move cursor</span>
        </span>
      </div>
    </div>
  );
};
