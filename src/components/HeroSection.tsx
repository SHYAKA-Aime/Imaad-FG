import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Currency, HERO_SLIDES, Language } from '../data/imaadData';
import { HudCorners } from './ui/BlueprintPrimitives';
import { soundEngine } from '../utils/soundEngine';

interface HeroSectionProps {
  lang: Language;
  currency: Currency;
  onOpenSubmitModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Calm scroll parallax on the full-bleed background media
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  const currentSlide = HERO_SLIDES[activeSlide];

  useEffect(() => {
    const duration = currentSlide.durationMs ?? 8000;
    const timer = setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, duration);
    return () => clearTimeout(timer);
  }, [activeSlide, currentSlide.durationMs]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-[#0E1B2E] pt-[74px] sm:pt-[86px] md:pt-[96px]"
    >
      {/* 1. Full-Bleed Background Video Stage (Swap /public/hero-bg.mp4 anytime with your final footage) */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute -top-[15%] inset-x-0 bottom-0 z-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-bg-poster.jpg"
          aria-hidden="true"
          className="h-full w-full object-cover object-center brightness-[0.55] contrast-[1.12]"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Deep Dark Low-Opacity Foreground Layer Covering the Entire Hero Video */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ backgroundColor: 'rgba(6, 12, 22, 0.48)' }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(180deg, rgba(14,27,46,0.45) 0%, rgba(14,27,46,0.0) 38%, rgba(14,27,46,0.55) 100%)',
        }}
      />

      {/* 2. Main Reference Stage: Far-Left Vertical Rail | Open Center for Video | Middle-Right Editorial Stack */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 items-end px-5 py-6 sm:px-10 sm:py-10 md:items-center md:px-12 lg:px-16">
        {/* FAR-LEFT VERTICAL RAIL (Desktop) */}
        <aside
          aria-label={
            lang === 'en' ? 'Slide navigation' : 'Navigation des diapositives'
          }
          className="hidden flex-col items-center justify-center gap-7 py-2 md:flex lg:gap-9"
        >
          {HERO_SLIDES.map((s, idx) => {
            const isActive = idx === activeSlide;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  soundEngine.playClick();
                  setActiveSlide(idx);
                }}
                onMouseEnter={() => soundEngine.playHover()}
                className="group relative flex items-center justify-center px-2.5 py-2"
              >
                {/* Active Side Hairline Ticks (Reference-inspired, gold #C1A258) */}
                <span
                  className={`pointer-events-none absolute left-0 top-1/2 h-4 w-[1.5px] -translate-y-1/2 bg-[#C1A258] transition-all duration-300 ${
                    isActive ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                  }`}
                />
                <span
                  className={`writing-vertical font-sans text-[10px] font-semibold tracking-[0.24em] uppercase transition-colors duration-300 ${
                    isActive
                      ? 'text-[#C1A258]'
                      : 'text-[#F8F6F2]/60 hover:text-[#F8F6F2]'
                  }`}
                >
                  {s.tabLabel[lang]}
                </span>
                <span
                  className={`pointer-events-none absolute right-0 top-1/2 h-full w-[1.5px] -translate-y-1/2 overflow-hidden bg-[#F8F6F2]/15 transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      key={`rail-${activeSlide}-${lang}`}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{
                        duration: (currentSlide.durationMs ?? 8000) / 1000,
                        ease: 'linear',
                      }}
                      style={{ transformOrigin: 'top' }}
                      className="block h-full w-full bg-[#C1A258]"
                    />
                  )}
                </span>
              </button>
            );
          })}
        </aside>

        {/* EDITORIAL BLOCK (Left-aligned & bottom-weighted on mobile for clear video framing; lower-middle right on desktop) */}
        <div className="flex w-full max-w-xl flex-col items-start text-left md:ml-auto md:mt-24 md:items-end md:text-right lg:mt-28 lg:max-w-[740px]">
          {/* Mobile Horizontal Hairline Switcher */}
          <div
            aria-label={
              lang === 'en' ? 'Slide navigation' : 'Navigation des diapositives'
            }
            className="mb-5 flex w-full items-center gap-5 overflow-x-auto border-b border-[#F8F6F2]/15 md:hidden"
          >
            {HERO_SLIDES.map((s, idx) => {
              const isActive = idx === activeSlide;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    soundEngine.playClick();
                    setActiveSlide(idx);
                  }}
                  className="relative shrink-0 pb-3 font-sans text-[10px] font-semibold tracking-[0.16em] uppercase transition-colors"
                >
                  <span
                    className={
                      isActive
                        ? 'text-[#C1A258]'
                        : 'text-[#F8F6F2]/60 hover:text-[#F8F6F2]'
                    }
                  >
                    {s.tabLabel[lang]}
                  </span>
                  {isActive && (
                    <motion.span
                      key={`mob-rail-${activeSlide}-${lang}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: (currentSlide.durationMs ?? 8000) / 1000,
                        ease: 'linear',
                      }}
                      style={{ transformOrigin: 'left' }}
                      className="absolute right-0 bottom-0 left-0 h-[2px] bg-[#C1A258]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Compact Masked Sentence-Case Cinzel Headline & Short Subtitle */}
          <div className="relative min-h-[178px] w-full sm:min-h-[172px] md:min-h-[168px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${currentSlide.id}-${lang}`}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: {},
                  visible: {},
                  exit: {
                    opacity: 0,
                    y: -10,
                    transition: { duration: 0.3, ease: [0.4, 0, 1, 1] },
                  },
                }}
                className="flex w-full flex-col items-start text-left md:items-end md:text-right"
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="mb-2 font-sans text-[10px] font-semibold tracking-[0.22em] text-[#C1A258] uppercase sm:mb-2.5 sm:text-[11px] sm:tracking-[0.24em]"
                >
                  {currentSlide.eyebrow[lang]}
                </motion.div>

                <h1 className="font-serif text-[26px] font-medium tracking-[0.02em] text-[#F8F6F2] leading-[1.2] sm:text-4xl sm:leading-[1.16] lg:text-[46px]">
                  <span className="block overflow-hidden">
                    <motion.span
                      className="block"
                      variants={{
                        hidden: { y: '105%', opacity: 0 },
                        visible: {
                          y: '0%',
                          opacity: 1,
                          transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
                        },
                      }}
                    >
                      {currentSlide.line1[lang]}{' '}
                      <span className="text-[#C1A258]">
                        {currentSlide.lineGold[lang]}
                      </span>
                    </motion.span>
                  </span>
                  {currentSlide.line3[lang] && (
                    <span className="block overflow-hidden">
                      <motion.span
                        className="block"
                        variants={{
                          hidden: { y: '105%', opacity: 0 },
                          visible: {
                            y: '0%',
                            opacity: 1,
                            transition: {
                              duration: 0.72,
                              delay: 0.1,
                              ease: [0.22, 1, 0.36, 1],
                            },
                          },
                        }}
                      >
                        {currentSlide.line3[lang]}
                      </motion.span>
                    </span>
                  )}
                </h1>

                <motion.p
                  variants={{
                    hidden: { y: 10, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.65,
                        delay: 0.18,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  className="mt-3 max-w-xl font-sans text-[13px] leading-relaxed text-[#D8DDE6] sm:mt-3.5 sm:text-sm lg:max-w-[640px]"
                >
                  {currentSlide.description[lang]}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Persistent Unified 2-Corner CTA Buttons (Full-width stack on mobile, right-aligned row on desktop) */}
          <div className="mt-5 flex w-full flex-col items-stretch gap-3 sm:mt-6 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5 md:justify-end">
            <a
              href="#excellence"
              onClick={() => soundEngine.playClick()}
              onMouseEnter={() => soundEngine.playHover()}
              className="group relative inline-flex h-11 w-full items-center justify-center bg-[#C1A258]/20 px-5 font-sans text-[11px] font-semibold tracking-[0.16em] text-[#F8F6F2] uppercase backdrop-blur-sm transition-all duration-300 hover:bg-[#C1A258] hover:text-[#0E1B2E] sm:h-12 sm:w-auto sm:px-7 sm:tracking-[0.18em]"
            >
              <HudCorners tone="on-navy" />
              <span>
                {lang === 'en' ? 'Discover our solutions' : 'Découvrir nos solutions'}
              </span>
            </a>

            <a
              href="#projects-showcase"
              onClick={() => soundEngine.playClick()}
              onMouseEnter={() => soundEngine.playHover()}
              className="group relative inline-flex h-11 w-full items-center justify-center bg-[#F8F6F2]/[0.06] px-5 font-sans text-[11px] font-semibold tracking-[0.16em] text-[#F8F6F2] uppercase backdrop-blur-sm transition-all duration-300 hover:bg-[#F8F6F2]/[0.14] hover:text-[#C1A258] sm:h-12 sm:w-auto sm:px-7 sm:tracking-[0.18em]"
            >
              <HudCorners tone="on-navy" />
              <span>{lang === 'en' ? 'See our projects' : 'Voir nos projets'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3. Minimal Bottom-Left Scroll Prompt (Reference-Matched, Floating Cleanly Over Media) */}
      <div className="relative z-10 pb-6 pt-2 sm:pb-8">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 sm:px-10 md:px-12 lg:px-16">
          <a
            href="#metrics"
            onClick={() => soundEngine.playClick()}
            className="group inline-flex flex-col items-start gap-2.5 font-sans text-xs font-normal tracking-[0.06em] text-[#F8F6F2]/80 transition-colors hover:text-[#C1A258]"
          >
            <span className="flex flex-col gap-1.5 pl-0.5">
              <span className="h-[3px] w-[3px] bg-[#C1A258]" />
              <span className="h-[3px] w-[3px] bg-[#C1A258]/65" />
              <span className="h-[3px] w-[3px] bg-[#C1A258]/35" />
            </span>
            <span>
              {lang === 'en'
                ? 'Scroll down to explore more'
                : 'Faites défiler pour explorer'}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
