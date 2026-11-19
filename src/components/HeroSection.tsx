import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Currency, HERO_SLIDES, Language } from '../data/imaadData';
import { HeroArchitectureScene } from './three/HeroArchitectureScene';
import { soundEngine } from '../utils/soundEngine';

interface HeroSectionProps {
  lang: Language;
  currency: Currency;
  onOpenSubmitModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  currency,
  onOpenSubmitModal: _onOpenSubmitModal,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const currentSlide = HERO_SLIDES[activeSlide];

  // Auto-cycle hero slides with longer dwell time on the primary bio slide (16s vs 7s)
  useEffect(() => {
    const duration = currentSlide.durationMs ?? 7000;
    const timer = setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, duration);
    return () => clearTimeout(timer);
  }, [activeSlide, currentSlide.durationMs]);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-obsidian-950 pt-[74px] sm:pt-[88px] md:pt-[104px]"
    >
      {/* 1. Deep Atmospheric Gradient & Ambient Sapphire/Gold Nebula */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 45% 45%, rgba(30,107,255,0.14) 0%, rgba(3,5,8,0.7) 55%, #030508 100%), linear-gradient(180deg, rgba(3,5,8,0.4) 0%, transparent 40%, rgba(3,5,8,0.85) 100%)',
          }}
        />
        <div className="blueprint-grid-bg absolute inset-0 opacity-25" />
      </div>

      {/* 2. Floating 3D WebGL Sovereign Architecture Geodesic Scene */}
      <HeroArchitectureScene activeSlide={activeSlide} lang={lang} />

      {/* Mobile bottom legibility gradient so text stays crisp under the upper 3D globe */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[56%] md:hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(3,5,8,0) 0%, rgba(3,5,8,0.78) 38%, rgba(3,5,8,0.96) 100%)',
        }}
      />

      {/* 3. Main Hero Stage (Mobile: Globe Top / Editorial Bottom | Desktop: Left Rail + Globe + Right Editorial) */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 items-end px-5 pb-6 sm:px-8 md:items-center md:px-12 md:py-8">
        {/* LEFT VERTICAL RAIL: Mode Switcher (Visible on md and up) */}
        <aside
          aria-label="Perspective Switcher"
          className="mr-5 hidden flex-col items-center justify-center gap-6 border-r border-white/10 py-3 pr-3.5 md:mr-10 md:flex lg:mr-14 lg:gap-9 lg:pr-4"
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
                className="group relative flex items-center justify-center py-1.5 px-1"
              >
                <span
                  className={`writing-vertical font-display text-[8px] font-bold tracking-[0.26em] uppercase transition-colors duration-300 lg:text-[9px] ${
                    isActive
                      ? 'text-gold-300'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {s.tabLabel[lang]}
                </span>
                <span
                  className={`absolute top-1/2 -right-[15px] w-[2px] -translate-y-1/2 bg-gold-400 shadow-[0_0_12px_#C9A24D] transition-all duration-300 lg:-right-[17px] ${
                    isActive ? 'h-full opacity-100' : 'h-0 opacity-0'
                  }`}
                />
              </button>
            );
          })}
        </aside>

        {/* RIGHT EDITORIAL HERO CONTENT: Compact, Refined, Balanced with 3D Globe */}
        <div className="flex w-full flex-col items-start pt-[245px] sm:pt-[290px] md:ml-auto md:w-auto md:max-w-[360px] md:pt-0 lg:max-w-md xl:max-w-lg">
          {/* Mobile Horizontal Perspective Switcher (Visible on < md) */}
          <div className="mb-3 flex flex-wrap items-center gap-1.5 md:hidden">
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
                  className={`px-2 py-0.5 font-display text-[8px] font-bold tracking-[0.16em] uppercase transition-all ${
                    isActive
                      ? 'border border-gold-400/60 bg-gold-500/15 text-gold-300'
                      : 'border border-white/10 text-slate-400'
                  }`}
                >
                  {s.tabLabel[lang]}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id + lang}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex w-full flex-col items-start"
            >
              {/* Primary Bio Slide vs Pillar Slide Headline */}
              {currentSlide.isBioSlide ? (
                <h1 className="font-display text-xl font-bold tracking-[0.1em] text-white uppercase sm:text-2xl md:text-[26px] lg:text-[30px] leading-snug">
                  {currentSlide.line1[lang]}{' '}
                  <span className="text-gold-300">
                    {currentSlide.lineGold[lang]}
                  </span>
                  <br />
                  {currentSlide.line3[lang]}
                </h1>
              ) : (
                <h1 className="font-display text-xl font-bold tracking-[0.14em] text-white uppercase sm:text-2xl md:text-3xl lg:text-[34px] leading-tight">
                  {currentSlide.tabLabel[lang]}
                </h1>
              )}

              {/* Slide Description (Visible on all slides) */}
              <p className="mt-3 max-w-md text-xs leading-relaxed text-slate-300 sm:text-[13px]">
                {currentSlide.description[lang]}
              </p>

              {/* The 2 Primary Hero Actions: Clean Modern Buttons */}
              <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-6">
                <a
                  href="#excellence"
                  onClick={() => soundEngine.playClick()}
                  onMouseEnter={() => soundEngine.playHover()}
                  className="inline-flex h-10 items-center justify-center rounded bg-[#C69C45] px-5 font-heading text-[11px] font-bold tracking-[0.14em] text-[#0B1528] uppercase shadow-[0_6px_22px_rgba(201,162,77,0.28)] transition-all duration-300 hover:bg-[#d6ad56] hover:shadow-[0_8px_28px_rgba(201,162,77,0.45)] sm:h-11 sm:px-6 sm:text-xs"
                >
                  <span>{lang === 'en' ? 'Discover our solutions' : 'Découvrir nos solutions'}</span>
                </a>

                <a
                  href="#projects-showcase"
                  onClick={() => soundEngine.playClick()}
                  onMouseEnter={() => soundEngine.playHover()}
                  className="inline-flex h-10 items-center justify-center rounded border border-white/25 bg-white/[0.06] px-5 font-heading text-[11px] font-semibold tracking-[0.14em] text-white uppercase backdrop-blur-md transition-all duration-300 hover:border-[#C69C45]/80 hover:bg-white/[0.12] hover:text-gold-200 sm:h-11 sm:px-6 sm:text-xs"
                >
                  <span>{lang === 'en' ? 'See our projects' : 'Voir nos projets'}</span>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 4. HERO STATS & CONTROLS BAR */}
      <div className="relative z-10 border-t border-white/10 bg-obsidian-950/85 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-5 py-4 sm:px-8 sm:py-5 md:px-12 lg:flex-row lg:items-center lg:justify-between">
          {/* Left: Scroll Prompt */}
          <a
            href="#mission"
            onClick={() => soundEngine.playClick()}
            className="group hidden sm:inline-flex items-center gap-3 font-mono text-[10px] sm:text-[11px] tracking-[0.22em] text-slate-400 uppercase transition-colors hover:text-gold-300"
          >
            <span className="h-1.5 w-1.5 rotate-45 bg-gold-400 shadow-[0_0_8px_#C9A24D] transition-transform group-hover:scale-125" />
            <span>
              {lang === 'en'
                ? 'Scroll down to explore more'
                : 'Faites défiler pour explorer'}
            </span>
          </a>

          {/* Right: The 4 Key Sovereign Stats */}
          <div className="grid w-full grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4 sm:gap-6 lg:w-auto lg:gap-12">
            {/* Stat 1: Target Capacity */}
            <div className="border-l-2 border-gold-500/50 pl-3 sm:pl-4">
              <span className="block font-mono text-[10px] sm:text-xs font-semibold text-gold-400 mb-0.5 leading-none">+</span>
              <div className="font-heading text-lg sm:text-2xl lg:text-3xl font-bold text-gold-300 tracking-wide drop-shadow-[0_0_15px_rgba(201,162,77,0.25)]">
                {currency === 'FCFA'
                  ? lang === 'en'
                    ? '1,000 BN'
                    : '1 000 Mds'
                  : '$1.65 BN'}
              </div>
              <div className="mt-0.5 font-mono text-[9px] sm:text-[10px] tracking-[0.14em] text-slate-300 uppercase">
                {currency === 'FCFA'
                  ? lang === 'en'
                    ? 'FCFA Capacity'
                    : 'FCFA Capacité'
                  : lang === 'en'
                    ? 'USD Capacity'
                    : 'USD Capacité'}
              </div>
            </div>

            {/* Stat 2: Priority Sectors */}
            <div className="border-l-2 border-gold-500/50 pl-3 sm:pl-4">
              <span className="block font-mono text-[10px] sm:text-xs text-transparent mb-0.5 leading-none">•</span>
              <div className="font-heading text-lg sm:text-2xl lg:text-3xl font-bold text-gold-300 drop-shadow-[0_0_15px_rgba(201,162,77,0.25)]">
                +5
              </div>
              <div className="mt-0.5 font-mono text-[9px] sm:text-[10px] tracking-[0.14em] text-slate-300 uppercase">
                {lang === 'en' ? 'Priority Sectors' : 'Secteurs Clés'}
              </div>
            </div>

            {/* Stat 3: Track Record */}
            <div className="border-l-2 border-gold-500/50 pl-3 sm:pl-4">
              <span className="block font-mono text-[10px] sm:text-xs text-transparent mb-0.5 leading-none">•</span>
              <div className="font-heading text-lg sm:text-2xl lg:text-3xl font-bold text-gold-300 drop-shadow-[0_0_15px_rgba(201,162,77,0.25)]">
                15+
              </div>
              <div className="mt-0.5 font-mono text-[9px] sm:text-[10px] tracking-[0.14em] text-slate-300 uppercase">
                {lang === 'en' ? 'Years Track Record' : "Années d'Expérience"}
              </div>
            </div>

            {/* Stat 4: Sovereign Hubs */}
            <div className="border-l-2 border-gold-500/50 pl-3 sm:pl-4">
              <span className="block font-mono text-[10px] sm:text-xs text-transparent mb-0.5 leading-none">•</span>
              <div className="font-heading text-lg sm:text-2xl lg:text-3xl font-bold text-gold-300 drop-shadow-[0_0_15px_rgba(201,162,77,0.25)]">
                7
              </div>
              <div className="mt-0.5 font-mono text-[9px] sm:text-[10px] tracking-[0.14em] text-slate-300 uppercase">
                {lang === 'en' ? 'Sovereign Hubs' : 'Hubs Souverains'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
