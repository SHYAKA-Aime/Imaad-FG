import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '../data/imaadData';
import { soundEngine } from '../utils/soundEngine';

interface PortalPreloaderProps {
  isOpen: boolean;
  onEnter: () => void;
  lang: Language;
}

export const PortalPreloader: React.FC<PortalPreloaderProps> = ({
  isOpen,
  onEnter,
  lang,
}) => {
  const [progress, setProgress] = useState(0);
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setProgress(0);
      setIsEntering(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate smoothly
        const increment = prev < 70 ? Math.floor(Math.random() * 8) + 4 : Math.floor(Math.random() * 6) + 3;
        const next = Math.min(prev + increment, 100);
        return next;
      });
    }, 70);

    return () => clearInterval(interval);
  }, [isOpen]);

  // When progress reaches 100%, trigger automatic portal entrance
  useEffect(() => {
    if (progress === 100 && !isEntering && isOpen) {
      const enterTimer = setTimeout(() => {
        handleTriggerEnter();
      }, 350);
      return () => clearTimeout(enterTimer);
    }
  }, [progress, isEntering, isOpen]);

  const handleTriggerEnter = () => {
    if (isEntering) return;
    setIsEntering(true);
    soundEngine.playPortalChime();
    setTimeout(() => {
      onEnter();
      setTimeout(() => setIsEntering(false), 500);
    }, 650);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[5000] flex flex-col items-center justify-center bg-obsidian-950 px-6 py-8"
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(201,162,77,0.12) 0%, rgba(3,5,8,0.85) 65%, #030508 100%)',
            }}
          />

          {/* Center Stage: Logo, Slogan & Loading Bar + Counter */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            {/* Elegant Pulsing Aura */}
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.35, 0.65, 0.35],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute h-52 w-52 rounded-full bg-gold-500/10 blur-2xl sm:h-64 sm:w-64"
              />

              {/* Decorative Architectural Ring */}
              <div className="pointer-events-none absolute h-40 w-40 rounded-full border border-gold-500/20 sm:h-56 sm:w-56" />
              <div className="pointer-events-none absolute h-44 w-44 rounded-full border border-dashed border-white/10 sm:h-60 sm:w-60" />

              {/* Authentic IMAAD Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative z-10 p-4"
              >
                <img
                  src="/logo-imaad.svg"
                  alt="IMAAD Financial Group"
                  className="h-24 w-auto object-contain sm:h-36 drop-shadow-[0_0_35px_rgba(201,162,77,0.35)]"
                />
              </motion.div>
            </div>

            {/* Sovereign Slogan */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 max-w-xs sm:max-w-none font-display text-[11px] leading-relaxed tracking-[0.22em] text-gold-300 uppercase sm:text-sm sm:tracking-[0.28em]"
            >
              {lang === 'en'
                ? 'CATALYST FOR SOVEREIGNTY & SUSTAINABLE GROWTH'
                : 'CATALYSEUR DE SOUVERAINETÉ & CROISSANCE DURABLE'}
            </motion.p>

            {/* Minimal Luxury Loading Bar & Counter */}
            <div className="mt-7 flex flex-col items-center">
              <div className="h-[2px] w-56 overflow-hidden rounded-full bg-white/10 sm:w-80">
                <motion.div
                  className="h-full bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500 shadow-[0_0_12px_#C9A24D]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="mt-3 font-mono text-xs font-bold tracking-[0.2em] text-gold-300">
                {progress}%
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
