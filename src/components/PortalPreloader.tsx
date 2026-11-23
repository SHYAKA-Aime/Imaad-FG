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
        const increment =
          prev < 70
            ? Math.floor(Math.random() * 9) + 5
            : Math.floor(Math.random() * 6) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 65);

    return () => clearInterval(interval);
  }, [isOpen]);

  useEffect(() => {
    if (progress === 100 && !isEntering && isOpen) {
      const enterTimer = setTimeout(() => {
        handleTriggerEnter();
      }, 300);
      return () => clearTimeout(enterTimer);
    }
  }, [progress, isEntering, isOpen]);

  const handleTriggerEnter = () => {
    if (isEntering) return;
    setIsEntering(true);
    soundEngine.playPortalChime();
    setTimeout(() => {
      onEnter();
      setTimeout(() => setIsEntering(false), 450);
    }, 550);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[5000] flex flex-col items-center justify-center bg-[#0E1B2E] px-6 py-8"
        >
          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            <div className="relative flex items-center justify-center">
              <div className="pointer-events-none absolute h-40 w-40 rounded-full border border-[#C1A258]/25 sm:h-52 sm:w-52" />

              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative z-10 p-4"
              >
                <img
                  src="/logo-imaad.svg"
                  alt="Imaad Financial Group"
                  className="h-24 w-auto object-contain sm:h-32"
                />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.55 }}
              className="mt-7 max-w-sm sm:max-w-none font-sans text-[11px] font-medium tracking-[0.22em] text-[#C1A258] uppercase sm:text-xs"
            >
              {lang === 'en'
                ? 'Catalyst for sovereignty and sustainable growth'
                : 'Catalyseur de la souveraineté et de la croissance durable'}
            </motion.p>

            <div className="mt-7 flex flex-col items-center">
              <div className="h-[1px] w-56 overflow-hidden bg-[#F8F6F2]/15 sm:w-72">
                <motion.div
                  className="h-full bg-[#C1A258]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="mt-3 font-sans text-xs font-medium tracking-[0.18em] text-[#D8DDE6]/80">
                {progress}%
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
