import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Language, STRATEGY_PILLARS } from '../data/imaadData';
import { HudCorners, VertexDots } from './ui/BlueprintPrimitives';
import { soundEngine } from '../utils/soundEngine';

interface MissionAndStrategyProps {
  lang: Language;
}

const SovereigntyIcon = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-gold-400 transition-transform duration-500 group-hover:scale-110"
  >
    <circle
      cx="20"
      cy="20"
      r="17"
      stroke="#C9A24D"
      strokeWidth="0.9"
      strokeDasharray="2 3"
      className="opacity-50 transition-transform duration-700 group-hover:rotate-45"
    />
    <rect x="13" y="10" width="14" height="2" rx="0.5" fill="#C9A24D" />
    <rect
      x="15.5"
      y="13.2"
      width="9"
      height="13.6"
      fill="#C9A24D"
      fillOpacity={0.22}
      stroke="#C9A24D"
      strokeWidth="0.9"
    />
    <line x1="18.5" y1="13.2" x2="18.5" y2="26.8" stroke="#C9A24D" strokeWidth="0.8" />
    <line x1="21.5" y1="13.2" x2="21.5" y2="26.8" stroke="#C9A24D" strokeWidth="0.8" />
    <rect x="13" y="28" width="14" height="2" rx="0.5" fill="#C9A24D" />
  </svg>
);

const ImpactIcon = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-sapphire-400 transition-transform duration-500 group-hover:scale-110"
  >
    <circle
      cx="20"
      cy="20"
      r="16.5"
      stroke="#38BDF8"
      strokeWidth="0.9"
      strokeDasharray="3 3"
      className="opacity-50 transition-transform duration-700 group-hover:rotate-90"
    />
    <ellipse
      cx="20"
      cy="20"
      rx="15"
      ry="6.5"
      stroke="#38BDF8"
      strokeWidth="0.9"
      transform="rotate(-28 20 20)"
      className="opacity-80"
    />
    <ellipse
      cx="20"
      cy="20"
      rx="15"
      ry="6.5"
      stroke="#38BDF8"
      strokeWidth="0.9"
      transform="rotate(32 20 20)"
      className="opacity-80"
    />
    <circle cx="20" cy="20" r="3.2" fill="#38BDF8" />
    <circle cx="20" cy="20" r="1.4" fill="#FFFFFF" />
  </svg>
);

const ExcellenceIcon = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-gold-400 transition-transform duration-700 group-hover:rotate-45 group-hover:scale-110"
  >
    <circle
      cx="20"
      cy="20"
      r="16.5"
      stroke="#C9A24D"
      strokeWidth="0.9"
      strokeDasharray="1.5 3"
      className="opacity-55"
    />
    <path
      d="M20 5 L22.8 16.5 L34.5 16.5 L25 22.8 L28.5 34.5 L20 27.5 L11.5 34.5 L15 22.8 L5.5 16.5 L17.2 16.5 Z"
      fill="#C9A24D"
      fillOpacity={0.22}
      stroke="#C9A24D"
      strokeWidth="0.9"
    />
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
  const splitRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: splitRef,
    offset: ['start end', 'end start'],
  });

  // Smooth Teyliom-style vertical parallax on the framed architectural photograph
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const frameY = useTransform(scrollYProgress, [0, 1], ['18px', '-18px']);

  return (
    <section
      id="mission"
      className="relative overflow-hidden border-b border-white/10 bg-obsidian-950 py-16 sm:py-24 lg:py-32"
    >
      {/* Subtle Ambient Radial Aura */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-35 blur-[140px]"
        style={{
          background:
            'radial-gradient(circle, rgba(30,107,255,0.18) 0%, rgba(201,162,77,0.12) 50%, transparent 70%)',
        }}
      />

      <div id="our-model" className="mx-auto max-w-[1360px] px-5 sm:px-10 lg:px-16">
        {/* ===================================================================
            1. TEYLIOM-INSPIRED ABOUT EDITORIAL SPLIT WITH PARALLAX FRAME
        ==================================================================== */}
        <div
          ref={splitRef}
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16"
        >
          {/* Left Column: Concise Institutional Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-6"
          >
            <div className="mb-3.5 inline-flex items-center gap-2.5 font-mono text-[10px] tracking-[0.24em] text-gold-400 uppercase">
              <span className="h-1.5 w-1.5 rotate-45 bg-gold-400 shadow-[0_0_8px_#C9A24D]" />
              <span>{lang === 'en' ? 'ABOUT' : 'À PROPOS'}</span>
            </div>

            <h2 className="font-display text-2xl font-bold tracking-[0.12em] text-white uppercase sm:text-3xl lg:text-4xl leading-tight">
              {lang === 'en'
                ? 'A MERCHANT BANK BUILT FOR SUB-SAHARAN AFRICA'
                : 'UNE BANQUE D’AFFAIRES ANCRÉE EN AFRIQUE SUBSAHARIENNE'}
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">
              {lang === 'en'
                ? 'Based in Kigali with a West and Central Africa regional office in Abidjan, Imaad Financial Group Ltd combines quantitative rigour with operational depth across commodities, energy, mining and infrastructure.'
                : 'Basée à Kigali avec un bureau régional pour l’Afrique de l’Ouest et Centrale à Abidjan, Imaad Financial Group Ltd combine rigueur quantitative et maîtrise opérationnelle des matières premières, de l’énergie, des mines et des infrastructures.'}
            </p>

            {/* Compact Anchor Strip (Visual, Scannable — Not a PDF Box) */}
            <div className="mt-7 grid grid-cols-1 gap-3 border-y border-white/10 py-5 sm:grid-cols-3">
              <div className="border-l-2 border-gold-400 pl-3.5">
                <div className="font-mono text-[9px] tracking-[0.2em] text-gold-400 uppercase">
                  {lang === 'en' ? 'HEADQUARTERS' : 'SIÈGE SOCIAL'}
                </div>
                <div className="mt-1 font-serif text-sm font-semibold text-white">
                  Kigali, Rwanda
                </div>
              </div>
              <div className="border-l-2 border-gold-400/70 pl-3.5">
                <div className="font-mono text-[9px] tracking-[0.2em] text-gold-400 uppercase">
                  {lang === 'en' ? 'REGIONAL OFFICE' : 'BUREAU RÉGIONAL'}
                </div>
                <div className="mt-1 font-serif text-sm font-semibold text-white">
                  Abidjan, Côte d’Ivoire
                </div>
              </div>
              <div className="border-l-2 border-sapphire-400/70 pl-3.5">
                <div className="font-mono text-[9px] tracking-[0.2em] text-sapphire-300 uppercase">
                  {lang === 'en' ? 'COVERAGE' : 'COUVERTURE'}
                </div>
                <div className="mt-1 font-serif text-sm font-semibold text-white">
                  {lang === 'en' ? 'Sub-Saharan Africa' : 'Afrique subsaharienne'}
                </div>
              </div>
            </div>

            {/* Teyliom Corner-Bracketed Action */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href="#excellence"
                onClick={() => soundEngine.playClick()}
                onMouseEnter={() => soundEngine.playHover()}
                className="group relative inline-flex h-12 items-center justify-center bg-white/[0.04] px-7 font-display text-[11px] font-bold tracking-[0.22em] text-white uppercase backdrop-blur-md transition-all hover:bg-white/[0.09] hover:text-gold-200"
              >
                <HudCorners />
                <span>{lang === 'en' ? 'OUR SERVICES' : 'NOS SERVICES'}</span>
              </a>

              <a
                href="#team"
                onClick={() => soundEngine.playClick()}
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] text-slate-400 uppercase transition-colors hover:text-gold-300"
              >
                <span className="h-1.5 w-1.5 rotate-45 bg-gold-400" />
                <span>{lang === 'en' ? 'Meet our team' : 'Découvrir l’équipe'}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Teyliom Double-Wireframe Parallax Architectural Image */}
          <motion.div
            style={{ y: frameY }}
            className="relative mx-auto w-full max-w-[540px] lg:col-span-6 lg:max-w-none"
          >
            {/* Outer Blueprint Frame with Glowing Reticle Diamonds */}
            <div className="relative border border-white/15 bg-obsidian-900/35 p-4 sm:p-6">
              <VertexDots color="gold" />
              {/* Inner Precision Offset Frame */}
              <div className="relative border border-gold-400/25 p-2.5 sm:p-3.5">
                <span className="pointer-events-none absolute -top-1.5 -left-1.5 h-2.5 w-2.5 rotate-45 bg-gold-400 shadow-[0_0_10px_#C9A24D]" />
                <span className="pointer-events-none absolute -right-1.5 -bottom-1.5 h-2.5 w-2.5 rotate-45 bg-gold-400 shadow-[0_0_10px_#C9A24D]" />

                {/* Parallax Image Viewport (Pure, Uncluttered) */}
                <div className="relative h-[320px] w-full overflow-hidden bg-obsidian-950 sm:h-[400px] lg:h-[440px]">
                  <motion.img
                    style={{ y: imageY, scale: 1.14 }}
                    src="/about-architecture.jpg"
                    alt="Imaad Financial Group — Architecture"
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian-950/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===================================================================
            2. THE STRATEGY — 3 VISUAL IMAGE-BACKED PILLARS
        ==================================================================== */}
        <div className="mt-20 sm:mt-28">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.24em] text-gold-400 uppercase">
                <span className="h-1.5 w-1.5 rotate-45 bg-gold-400" />
                <span>{lang === 'en' ? 'OUR STRATEGY' : 'NOTRE STRATÉGIE'}</span>
              </div>
              <h3 className="font-display text-xl font-bold tracking-[0.14em] text-white uppercase sm:text-2xl lg:text-3xl">
                {lang === 'en'
                  ? 'INTERNATIONAL VISION, LOCAL EXECUTION'
                  : 'VISION INTERNATIONALE, EXÉCUTION LOCALE'}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {STRATEGY_PILLARS.map((pillar, idx) => {
              const isPillar1 = idx === 0;
              const isPillar2 = idx === 1;
              const isSapphire = pillar.accent === 'sapphire';

              return (
                <motion.article
                  key={pillar.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: idx * 0.12 }}
                  onClick={() => soundEngine.playClick()}
                  onMouseEnter={() => soundEngine.playHover()}
                  className="group relative flex flex-col overflow-hidden border border-transparent bg-obsidian-900/65 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/50 hover:bg-obsidian-900/90 hover:shadow-[0_22px_50px_rgba(0,0,0,0.65)]"
                >
                  <div className="pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <VertexDots color={isSapphire ? 'sapphire' : 'gold'} />
                  </div>

                  {/* Visible Editorial Image Header (Clean, No Extra Corner Tag) */}
                  <div className="relative h-48 w-full overflow-hidden border-b border-white/10 sm:h-52">
                    <img
                      src={pillar.bgImage}
                      alt={pillar.title[lang]}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/30 to-transparent" />

                    {/* Floating Emblem Badge */}
                    <div
                      className={`absolute right-4 bottom-3 flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-500 group-hover:scale-110 ${
                        isSapphire
                          ? 'border-sapphire-400/50 bg-obsidian-950/85'
                          : 'border-gold-400/50 bg-obsidian-950/85'
                      }`}
                    >
                      {isPillar1 ? (
                        <SovereigntyIcon />
                      ) : isPillar2 ? (
                        <ImpactIcon />
                      ) : (
                        <ExcellenceIcon />
                      )}
                    </div>
                  </div>

                  {/* Concise Visual Card Body */}
                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                    <div>
                      <h4 className="font-heading text-lg font-bold tracking-wider text-white uppercase transition-colors group-hover:text-gold-300">
                        {pillar.title[lang]}
                      </h4>
                      <p className="mt-2.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
                        {pillar.description[lang]}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
