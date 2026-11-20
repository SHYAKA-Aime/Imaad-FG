import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {
  Currency,
  EXCELLENCE_MODULES,
  ExcellenceModuleData,
  Language,
  PROJECTS_PORTFOLIO,
  ProjectCardData,
  WHO_WE_SERVE,
} from '../data/imaadData';
import { HoverBorderTrace, HudCorners, VertexDots } from './ui/BlueprintPrimitives';
import { soundEngine } from '../utils/soundEngine';

interface ExcellenceAndProjectsProps {
  lang: Language;
  currency: Currency;
  onInspectModule: (mod: ExcellenceModuleData) => void;
  onInspectProject: (proj: ProjectCardData) => void;
  onViewAllProjects: () => void;
}

const ServiceVisualCard: React.FC<{
  mod: ExcellenceModuleData;
  idx: number;
  lang: Language;
  onInspectModule: (mod: ExcellenceModuleData) => void;
}> = ({ mod, idx, lang, onInspectModule }) => {
  const [slideIdx, setSlideIdx] = useState(0);
  const slides = mod.slides.length > 0 ? mod.slides : [];
  const activeSlide = slides[slideIdx] || slides[0];
  const isSapphire = mod.accentColor === 'sapphire';

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: idx * 0.12 }}
      className="group relative flex flex-col overflow-hidden bg-obsidian-900/65 transition-all duration-500 hover:-translate-y-1.5 hover:bg-obsidian-900/90 hover:shadow-[0_24px_55px_rgba(0,0,0,0.75)]"
    >
      <HoverBorderTrace color={isSapphire ? 'sapphire' : 'gold'} />
      <div className="pointer-events-none opacity-0 transition-opacity duration-300 delay-200 group-hover:opacity-100">
        <VertexDots color={isSapphire ? 'sapphire' : 'gold'} />
      </div>

      {/* Interactive Photo Stage with Pure Teyliom Carousel Dots (No Extra Text Overlays) */}
      <div className="relative h-56 w-full overflow-hidden border-b border-white/10 bg-obsidian-950 sm:h-60">
        {activeSlide && (
          <AnimatePresence mode="wait">
            <motion.img
              key={activeSlide.image}
              src={activeSlide.image}
              alt={mod.title[lang]}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </AnimatePresence>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian-950/85 via-transparent to-transparent" />

        {/* Centered Teyliom Carousel Dots */}
        {slides.length > 1 && (
          <div className="absolute right-0 bottom-3.5 left-0 flex items-center justify-center gap-2">
            {slides.map((_, sIdx) => (
              <button
                key={sIdx}
                type="button"
                aria-label={lang === 'en' ? `Slide ${sIdx + 1}` : `Diapositive ${sIdx + 1}`}
                onClick={(e) => {
                  e.stopPropagation();
                  soundEngine.playClick();
                  setSlideIdx(sIdx);
                }}
                className={`h-2.5 w-2.5 rounded-full border transition-all ${
                  sIdx === slideIdx
                    ? 'scale-110 border-gold-300 bg-gold-400 shadow-[0_0_8px_#C9A24D]'
                    : 'border-white/50 bg-obsidian-950/60 hover:border-gold-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Concise Editorial Copy + Corner-Bracketed Learn More CTA */}
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
        <div>
          <h3 className="font-heading text-lg font-bold tracking-[0.1em] text-white uppercase transition-colors duration-300 group-hover:text-gold-300 sm:text-xl leading-snug">
            {mod.title[lang]}
          </h3>
          <p className="mt-3 line-clamp-4 text-xs leading-relaxed text-slate-300 sm:text-[13px]">
            {mod.description[lang]}
          </p>
        </div>

        <div className="mt-6 pt-2">
          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              onInspectModule(mod);
            }}
            onMouseEnter={() => soundEngine.playHover()}
            className="group/btn group relative inline-flex h-11 items-center justify-center gap-2.5 bg-white/[0.04] px-6 font-display text-[11px] font-bold tracking-[0.18em] text-white uppercase transition-all hover:bg-white/[0.09] hover:text-gold-200"
          >
            <HudCorners />
            <span>{lang === 'en' ? 'LEARN MORE' : 'EN SAVOIR PLUS'}</span>
            <ArrowRight className="h-3.5 w-3.5 text-gold-400 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export const ExcellenceAndProjects: React.FC<ExcellenceAndProjectsProps> = ({
  lang,
  onInspectModule,
  onInspectProject,
  onViewAllProjects,
}) => {
  const [activeClientIdx, setActiveClientIdx] = useState(0);
  const activeClient = WHO_WE_SERVE[activeClientIdx] || WHO_WE_SERVE[0];

  // 3 Flagship Official Brochure Projects for the Homepage (one from each core business line)
  const featuredIds = ['proj-ci-storage', 'proj-ng-gas', 'proj-bj-vaccines'];
  const featuredProjects = featuredIds
    .map((id) => PROJECTS_PORTFOLIO.find((p) => p.id === id))
    .filter((p): p is ProjectCardData => Boolean(p));

  return (
    <>
      {/* =====================================================================
          SECTION 3: AREAS OF EXCELLENCE (A, B, C) — TEYLIOM VISUAL SHOWCASE
      ====================================================================== */}
      <section
        id="excellence"
        className="relative overflow-hidden border-b border-white/10 bg-obsidian-950 py-16 sm:py-24 lg:py-32"
      >
        {/* Subtle Ambient Radial Lighting */}
        <div
          className="pointer-events-none absolute top-1/3 -left-48 h-[600px] w-[600px] rounded-full opacity-30 blur-[140px]"
          style={{
            background: 'radial-gradient(circle, rgba(30,107,255,0.2) 0%, transparent 70%)',
          }}
        />
        <div
          className="pointer-events-none absolute bottom-10 -right-48 h-[600px] w-[600px] rounded-full opacity-25 blur-[140px]"
          style={{
            background: 'radial-gradient(circle, rgba(201,162,77,0.18) 0%, transparent 70%)',
          }}
        />

        <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-16">
          {/* Concise Centered Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16 text-center"
          >
            <div className="mb-3 inline-flex items-center gap-2.5 font-mono text-[10px] tracking-[0.24em] text-gold-400 uppercase">
              <span className="h-1.5 w-1.5 rotate-45 bg-gold-400 shadow-[0_0_8px_#C9A24D]" />
              <span>{lang === 'en' ? 'OUR SERVICES' : 'NOS SERVICES'}</span>
            </div>

            <h2 className="mx-auto max-w-4xl font-display text-2xl font-bold tracking-[0.16em] text-white uppercase sm:text-3xl lg:text-4xl leading-tight">
              {lang === 'en'
                ? 'THREE CORE BUSINESSES, ONE INTEGRATED PLATFORM'
                : 'TROIS MÉTIERS, UNE PLATEFORME INTÉGRÉE'}
            </h2>

            <p className="mx-auto mt-3.5 max-w-xl text-sm text-slate-400 sm:text-base">
              {lang === 'en'
                ? 'We provide advisory services in three areas across Sub-Saharan Africa.'
                : 'Nous intervenons en conseil et structuration dans trois domaines clés en Afrique subsaharienne.'}
            </p>
          </motion.div>

          {/* 3 Visual Interactive Service Showcase Cards */}
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
            {EXCELLENCE_MODULES.map((mod, idx) => (
              <ServiceVisualCard
                key={mod.id}
                mod={mod}
                idx={idx}
                lang={lang}
                onInspectModule={onInspectModule}
              />
            ))}
          </div>

          {/* Teyliom B.U.I.L.D.-Inspired Interactive WHO WE SERVE Monolith Strip */}
          <div className="mt-14 sm:mt-16 border border-white/15 bg-obsidian-900/50 p-6 sm:p-8 lg:p-10 backdrop-blur-md">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              {/* Left: Dynamic Illuminated Callout */}
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold tracking-[0.24em] text-gold-400 uppercase">
                  <span className="h-1.5 w-1.5 rotate-45 bg-gold-400" />
                  <span>{lang === 'en' ? 'WHO WE SERVE' : 'NOS CLIENTS'}</span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeClient.code + lang}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28 }}
                    className="mt-3"
                  >
                    <h3 className="font-serif text-xl font-bold text-white sm:text-2xl">
                      {activeClient[lang]}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                      {activeClient.detail[lang]}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right: 4 Interactive Monolith Blocks */}
              <div className="grid grid-cols-2 gap-0 border border-white/15 sm:grid-cols-4 lg:col-span-7">
                {WHO_WE_SERVE.map((client, cIdx) => {
                  const isActive = cIdx === activeClientIdx;
                  return (
                    <button
                      key={client.code}
                      type="button"
                      onMouseEnter={() => {
                        soundEngine.playHover();
                        setActiveClientIdx(cIdx);
                      }}
                      onClick={() => {
                        soundEngine.playClick();
                        setActiveClientIdx(cIdx);
                      }}
                      className={`group relative flex min-h-[104px] flex-col items-start justify-between border-r border-b border-white/10 p-4 text-left transition-all duration-300 last:border-r-0 sm:border-b-0 ${
                        isActive
                          ? 'bg-gold-500/15 text-gold-200 shadow-[inset_0_0_25px_rgba(201,162,77,0.18)]'
                          : 'bg-obsidian-950/60 text-slate-400 hover:bg-white/[0.04] hover:text-white'
                      }`}
                    >
                      {isActive && (
                        <span className="pointer-events-none absolute top-0 right-0 left-0 h-[2px] bg-gold-400 shadow-[0_0_12px_#C9A24D]" />
                      )}
                      <span
                        className={`font-mono text-[10px] font-bold tracking-[0.2em] ${
                          isActive ? 'text-gold-300' : 'text-slate-500'
                        }`}
                      >
                        {client.code}
                      </span>
                      <span className="font-heading text-xs font-bold tracking-wider uppercase sm:text-[13px]">
                        {client[lang]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: PROJECTS & IMPACT — 3 FLAGSHIP PORTFOLIO SHOWCASES
          (Teyliom Style Alternating Split Rows + [VIEW ALL PROJECTS] CTA)
          Aligned with Reference media_1795098880532_d1e00d2e.jpg
      ====================================================================== */}
      <section
        id="projects-showcase"
        className="relative overflow-hidden border-b border-white/10 bg-obsidian-950 py-16 sm:py-24 lg:py-32"
      >
        {/* Ambient Radial Spotlight */}
        <div
          className="pointer-events-none absolute top-1/4 -right-48 h-[600px] w-[600px] rounded-full opacity-40 blur-[150px]"
          style={{
            background:
              'radial-gradient(circle, rgba(201,162,77,0.18) 0%, transparent 70%)',
          }}
        />
        <div
          className="pointer-events-none absolute bottom-1/4 -left-48 h-[600px] w-[600px] rounded-full opacity-35 blur-[150px]"
          style={{
            background:
              'radial-gradient(circle, rgba(30,107,255,0.18) 0%, transparent 70%)',
          }}
        />

        <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-16">
          {/* Section Header */}
          <div className="mb-16 sm:mb-20 text-center">
            <div className="mb-3.5 inline-flex items-center gap-2.5 font-mono text-[10px] tracking-[0.24em] text-gold-400 uppercase">
              <span className="h-1.5 w-1.5 rotate-45 bg-gold-400 shadow-[0_0_8px_#C9A24D]" />
              <span>
                {lang === 'en' ? 'PORTFOLIO' : 'PORTEFEUILLE'}
              </span>
            </div>
            <h2 className="font-display text-2xl font-bold tracking-[0.18em] text-white uppercase sm:text-4xl lg:text-5xl">
              {lang === 'en' ? 'PROJECTS & IMPACT' : 'PROJETS & IMPACT'}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              {lang === 'en'
                ? 'Strategic energy storage and gas infrastructure, transport corridors, industrial healthcare, and housing programs structured across Sub-Saharan Africa.'
                : 'Infrastructures énergétiques et gazières, corridors de transport, santé industrielle et programmes de logements structurés en Afrique subsaharienne.'}
            </p>
          </div>

          {/* 3 Alternating Blueprint Split Showcase Items (Teyliom Style) */}
          <div className="space-y-16 sm:space-y-24">
            {featuredProjects.map((project, idx) => {
              const isReverse = idx % 2 === 1;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.65 }}
                  className="relative"
                >
                  {/* Floating Architectural Wireframe Badge Box (Teyliom Reference) */}
                  <div
                    className={`-mb-[1px] flex ${
                      isReverse ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <div className="group relative z-20 inline-flex flex-wrap items-center gap-2 sm:gap-3 border border-white/15 bg-obsidian-900 px-4 py-2.5 sm:px-6 sm:py-3.5 backdrop-blur-md shadow-lg">
                      <VertexDots color="gold" />
                      <span className="font-serif text-xs sm:text-sm font-bold tracking-widest text-white">
                        IMAAD
                      </span>
                      <span className="font-mono text-[11px] sm:text-xs font-medium text-gold-400 tracking-wider uppercase">
                        {project.country[lang]}
                      </span>
                    </div>
                  </div>

                  {/* Main Blueprint Wireframe Body */}
                  <div className="group relative border border-white/15 bg-obsidian-900/70 p-5 sm:p-9 lg:p-12 backdrop-blur-md transition-colors hover:border-gold-400/40">
                    <VertexDots />

                    <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-14">
                      {/* Narrative Column */}
                      <div
                        className={`flex flex-col items-start lg:col-span-6 ${
                          isReverse ? 'lg:order-2' : 'lg:order-1'
                        }`}
                      >
                        {/* Business Line Eyebrow */}
                        <div className="mb-3 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] sm:tracking-[0.24em] text-gold-400 uppercase">
                          <span className="h-1.5 w-1.5 rotate-45 bg-gold-400 shadow-[0_0_8px_#C9A24D]" />
                          <span>{project.statusTag[lang]}</span>
                        </div>

                        {/* Project Sector Title */}
                        <h3 className="font-display text-xl font-bold tracking-[0.12em] text-white uppercase sm:text-2xl md:text-3xl sm:tracking-[0.14em] leading-snug">
                          {project.sector[lang]}
                        </h3>

                        {/* Capital Amount */}
                        <div className="mt-2 font-serif text-lg font-bold tracking-wide text-gold-300 sm:text-2xl">
                          {project.amountDisplay[lang]}
                        </div>

                        {/* Description */}
                        <p className="mt-3.5 sm:mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                          {project.description[lang]}
                        </p>

                        {/* Specs Pill Tag */}
                        <div className="mt-4 sm:mt-5 inline-flex max-w-full items-center gap-2 border border-white/10 bg-white/[0.02] px-3 py-1.5 font-mono text-[10px] sm:text-[11px] tracking-[0.14em] text-slate-400 uppercase break-words">
                          <span>{project.metaTag[lang]}</span>
                        </div>

                        {/* Bracketed CTA Button */}
                        <button
                          type="button"
                          onClick={() => {
                            soundEngine.playClick();
                            onInspectProject(project);
                          }}
                          onMouseEnter={() => soundEngine.playHover()}
                          className="group/btn group relative mt-6 sm:mt-8 flex h-11 items-center justify-center bg-white/[0.04] px-6 font-display text-[11px] font-bold tracking-[0.2em] text-white uppercase backdrop-blur-md transition-all hover:bg-white/[0.09] hover:text-gold-200 sm:h-12 sm:px-8 sm:text-xs"
                        >
                          <HudCorners />
                          <span>{lang === 'en' ? 'LEARN MORE' : 'EN SAVOIR PLUS'}</span>
                        </button>
                      </div>

                      {/* Photo Blueprint Frame Column */}
                      <div
                        className={`lg:col-span-6 ${
                          isReverse ? 'lg:order-1' : 'lg:order-2'
                        }`}
                      >
                        <div className="relative h-[230px] w-full overflow-hidden border border-white/15 bg-obsidian-950 sm:h-[340px] lg:h-[400px]">
                          <VertexDots />
                          <img
                            src={project.image}
                            alt={project.sector[lang]}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian-950/85 via-transparent to-transparent" />

                          {/* Country Pill (Clean Text, Zero Emojis) */}
                          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 inline-flex items-center gap-2 border border-white/20 bg-obsidian-950/90 px-3 py-1 sm:px-3.5 sm:py-1.5 font-mono text-[11px] sm:text-xs font-semibold tracking-wider text-white uppercase backdrop-blur-md">
                            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                            <span>{project.country[lang]}</span>
                          </div>

                          {/* Business Line Tag (No Closed/Closing status) */}
                          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 border border-gold-400/50 bg-obsidian-950/90 px-2.5 py-1 sm:px-3 font-mono text-[9px] sm:text-[10px] tracking-widest text-gold-300 uppercase backdrop-blur-md">
                            {project.statusTag[lang]}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Centered Grand [VIEW ALL PROJECTS] Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-20 flex justify-center"
          >
            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                onViewAllProjects();
              }}
              onMouseEnter={() => soundEngine.playHover()}
              className="group relative flex h-12 items-center justify-center bg-white/[0.04] px-7 font-display text-[11px] font-bold tracking-[0.2em] text-gold-300 uppercase backdrop-blur-md transition-all hover:bg-white/[0.09] hover:text-white sm:h-14 sm:px-12 sm:text-sm sm:tracking-[0.24em]"
            >
              <HudCorners />
              <span className="flex items-center gap-3">
                <span>{lang === 'en' ? 'VIEW ALL PROJECTS' : 'VOIR TOUS LES PROJETS'}</span>
                <ArrowRight className="h-4 w-4 text-gold-400 transition-transform duration-300 group-hover:translate-x-1.5" />
              </span>
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};
