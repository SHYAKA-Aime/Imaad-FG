import React from 'react';
import { motion } from 'framer-motion';
import { Language, STRATEGY_PILLARS } from '../data/imaadData';
import { VertexDots } from './ui/BlueprintPrimitives';
import { soundEngine } from '../utils/soundEngine';

interface MissionAndStrategyProps {
  lang: Language;
}

// Pillar 1: Sovereign Architectural Column with Calibrated Coordinate Orbit
const SovereigntyIcon = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7 text-gold-400 transition-all duration-500 group-hover:scale-110"
  >
    {/* Calibrated Celestial Coordinate Orbit */}
    <circle
      cx="20"
      cy="20"
      r="17"
      stroke="#C9A24D"
      strokeWidth="0.8"
      strokeDasharray="2 3"
      className="opacity-40 transition-transform duration-700 group-hover:rotate-45"
    />
    <circle
      cx="20"
      cy="20"
      r="13"
      stroke="#C9A24D"
      strokeWidth="0.8"
      className="opacity-25"
    />
    {/* Capital */}
    <rect x="13" y="10" width="14" height="2" rx="0.5" fill="#C9A24D" />
    <rect x="14.5" y="12" width="11" height="1.2" fill="#C9A24D" />
    {/* Fluted Column Shaft */}
    <rect
      x="15.5"
      y="13.2"
      width="9"
      height="13.6"
      fill="#C9A24D"
      fillOpacity={0.18}
      stroke="#C9A24D"
      strokeWidth="0.8"
    />
    <line x1="18.5" y1="13.2" x2="18.5" y2="26.8" stroke="#C9A24D" strokeWidth="0.7" />
    <line x1="21.5" y1="13.2" x2="21.5" y2="26.8" stroke="#C9A24D" strokeWidth="0.7" />
    {/* Base */}
    <rect x="14.5" y="26.8" width="11" height="1.2" fill="#C9A24D" />
    <rect x="13" y="28" width="14" height="2" rx="0.5" fill="#C9A24D" />
  </svg>
);

// Pillar 2: Generational Impact Interlocking Catalyst Rings & Core
const ImpactIcon = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7 text-sapphire-400 transition-all duration-500 group-hover:scale-110"
  >
    {/* Outer Expanding Ripple Ring */}
    <circle
      cx="20"
      cy="20"
      r="16.5"
      stroke="#38BDF8"
      strokeWidth="0.8"
      strokeDasharray="3 3"
      className="opacity-40 transition-transform duration-700 group-hover:rotate-90"
    />
    {/* Interlocking Orbital Energy Paths */}
    <ellipse
      cx="20"
      cy="20"
      rx="15"
      ry="6.5"
      stroke="#38BDF8"
      strokeWidth="0.8"
      transform="rotate(-28 20 20)"
      className="opacity-70 transition-transform duration-500 group-hover:rotate-0"
    />
    <ellipse
      cx="20"
      cy="20"
      rx="15"
      ry="6.5"
      stroke="#38BDF8"
      strokeWidth="0.8"
      transform="rotate(32 20 20)"
      className="opacity-70 transition-transform duration-500 group-hover:rotate-45"
    />
    {/* Radiant Center Nexus */}
    <circle cx="20" cy="20" r="3.5" fill="#38BDF8" />
    <circle cx="20" cy="20" r="1.5" fill="#FFFFFF" />
  </svg>
);

// Pillar 3: Precision Astrolabe Compass & 8-Pointed Star of Excellence
const ExcellenceIcon = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7 text-gold-400 transition-all duration-700 group-hover:rotate-45 group-hover:scale-110"
  >
    {/* Outer Precision Degree Gauge */}
    <circle
      cx="20"
      cy="20"
      r="16.5"
      stroke="#C9A24D"
      strokeWidth="0.8"
      strokeDasharray="1.5 3"
      className="opacity-50"
    />
    <circle
      cx="20"
      cy="20"
      r="12"
      stroke="#C9A24D"
      strokeWidth="0.8"
      className="opacity-30"
    />
    {/* 8-Pointed Geometric Star of Execution Rigor */}
    <path
      d="M20 5 L22.8 16.5 L34.5 16.5 L25 22.8 L28.5 34.5 L20 27.5 L11.5 34.5 L15 22.8 L5.5 16.5 L17.2 16.5 Z"
      fill="#C9A24D"
      fillOpacity={0.16}
      stroke="#C9A24D"
      strokeWidth="0.8"
    />
    {/* Center Core Spark */}
    <rect
      x="18.5"
      y="18.5"
      width="3"
      height="3"
      transform="rotate(45 20 20)"
      fill="#FFFFFF"
    />
  </svg>
);

export const MissionAndStrategy: React.FC<MissionAndStrategyProps> = ({ lang }) => {
  return (
    <section
      id="mission"
      className="relative overflow-hidden border-b border-white/10 bg-obsidian-950 py-16 sm:py-24 lg:py-32"
    >
      {/* Center Ambient Spotlight */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[140px]"
        style={{
          background:
            'radial-gradient(circle, rgba(30,107,255,0.2) 0%, rgba(201,162,77,0.12) 50%, transparent 70%)',
        }}
      />

      <div id="our-model" className="mx-auto max-w-[1360px] px-5 sm:px-10 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14 text-center"
        >
          {/* Eyebrow */}
          <div className="mb-3 inline-flex items-center gap-2.5 font-mono text-[10px] tracking-[0.24em] text-gold-400 uppercase">
            <span className="h-1.5 w-1.5 rotate-45 bg-gold-400 shadow-[0_0_8px_#C9A24D]" />
            <span>{lang === 'en' ? 'OUR MODEL' : 'NOTRE MODÈLE'}</span>
          </div>

          {/* Headline from Screenshot */}
          <h2 className="mx-auto max-w-4xl font-display text-xl font-bold tracking-[0.12em] text-white uppercase sm:text-3xl sm:tracking-[0.16em] lg:text-4xl leading-tight">
            {lang === 'en'
              ? 'AN INVESTMENT BANK AT THE SERVICE OF SUSTAINABLE DEVELOPMENT'
              : 'UNE BANQUE D’AFFAIRES AU SERVICE DU DÉVELOPPEMENT DURABLE'}
          </h2>

          {/* Subtitle / Intro Copy from Screenshot */}
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {lang === 'en'
              ? 'Imaad Financial Group puts finance at the service of development, competitiveness, and sustainability. We combine international vision with local execution.'
              : 'Imaad Financial Group place la finance au service du développement, de la compétitivité et de la durabilité. Nous combinons vision internationale et exécution locale.'}
          </p>
        </motion.div>

        {/* 3 Architectural Pillar Cards with Rich Interactive Hover */}
        <div className="grid grid-cols-1 border border-white/15 md:grid-cols-3">
          {STRATEGY_PILLARS.map((pillar, idx) => {
            const isPillar1 = idx === 0;
            const isPillar2 = idx === 1;

            return (
              <motion.article
                key={pillar.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
                onClick={() => soundEngine.playClick()}
                onMouseEnter={() => soundEngine.playHover()}
                className="group relative flex min-h-[260px] sm:min-h-[320px] cursor-pointer flex-col justify-between overflow-hidden border-b last:border-b-0 border-white/15 bg-obsidian-900/60 p-6 sm:p-8 lg:p-10 transition-all duration-500 md:border-r md:border-b-0 last:md:border-r-0 hover:bg-obsidian-900/90"
              >
                <VertexDots color={pillar.accent === 'sapphire' ? 'sapphire' : 'gold'} />

                {/* Top Glowing Shimmer Line on Hover */}
                <div
                  className={`pointer-events-none absolute top-0 left-0 right-0 h-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                    pillar.accent === 'sapphire'
                      ? 'bg-gradient-to-r from-transparent via-sapphire-400 to-transparent shadow-[0_0_12px_#38BDF8]'
                      : 'bg-gradient-to-r from-transparent via-gold-400 to-transparent shadow-[0_0_12px_#C9A24D]'
                  }`}
                />

                {/* Subtle Hover Radial Aura */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      pillar.accent === 'sapphire'
                        ? 'radial-gradient(circle at 50% 30%, rgba(56,189,248,0.12) 0%, transparent 70%)'
                        : 'radial-gradient(circle at 50% 30%, rgba(201,162,77,0.12) 0%, transparent 70%)',
                  }}
                />

                {/* Background Texture with Smooth Scale Lift */}
                <div
                  className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-10 transition-all duration-700 group-hover:scale-105 group-hover:opacity-25"
                  style={{ backgroundImage: `url('${pillar.bgImage}')` }}
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(circle at center, rgba(10,15,28,0.25) 0%, rgba(3,5,8,0.92) 85%)',
                  }}
                />

                {/* Center Creative Emblem */}
                <div className="relative z-10 my-4 flex items-center justify-center">
                  <div
                    className={`relative flex h-16 w-16 items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-110 ${
                      pillar.accent === 'sapphire'
                        ? 'border-sapphire-400/30 bg-sapphire-500/[0.05] group-hover:border-sapphire-400 group-hover:bg-sapphire-500/15 group-hover:shadow-[0_0_28px_rgba(56,189,248,0.35)]'
                        : 'border-gold-400/30 bg-gold-500/[0.05] group-hover:border-gold-400 group-hover:bg-gold-500/15 group-hover:shadow-[0_0_28px_rgba(201,162,77,0.35)]'
                    }`}
                  >
                    {/* Architectural Crosshair Reticles */}
                    <span className="absolute -top-1 left-1/2 h-2 w-[1px] -translate-x-1/2 bg-white/25 transition-colors group-hover:bg-white/60" />
                    <span className="absolute -bottom-1 left-1/2 h-2 w-[1px] -translate-x-1/2 bg-white/25 transition-colors group-hover:bg-white/60" />
                    <span className="absolute top-1/2 -left-1 h-[1px] w-2 -translate-y-1/2 bg-white/25 transition-colors group-hover:bg-white/60" />
                    <span className="absolute top-1/2 -right-1 h-[1px] w-2 -translate-y-1/2 bg-white/25 transition-colors group-hover:bg-white/60" />

                    {isPillar1 ? (
                      <SovereigntyIcon />
                    ) : isPillar2 ? (
                      <ImpactIcon />
                    ) : (
                      <ExcellenceIcon />
                    )}
                  </div>
                </div>

                {/* Bottom Title & Description (Exact Texts from Screenshot) */}
                <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1">
                  <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider transition-colors duration-300 group-hover:text-gold-300 sm:text-xl">
                    {pillar.title[lang]}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate-300 transition-colors duration-300 group-hover:text-slate-200 sm:text-sm">
                    {pillar.description[lang]}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
