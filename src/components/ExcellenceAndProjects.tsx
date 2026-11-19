import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {
  Currency,
  EXCELLENCE_MODULES,
  ExcellenceModuleData,
  Language,
  PROJECTS_PORTFOLIO,
  ProjectCardData,
} from '../data/imaadData';
import { HudCorners, VertexDots } from './ui/BlueprintPrimitives';
import { soundEngine } from '../utils/soundEngine';

interface ExcellenceAndProjectsProps {
  lang: Language;
  currency: Currency;
  onInspectModule: (mod: ExcellenceModuleData) => void;
  onInspectProject: (proj: ProjectCardData) => void;
  onViewAllProjects: () => void;
}

export const ExcellenceAndProjects: React.FC<ExcellenceAndProjectsProps> = ({
  lang,
  onInspectModule,
  onInspectProject,
  onViewAllProjects,
}) => {
  // 3 Flagship Real Projects for the Homepage (Ivory Coast Road €150M, Guinea Real Estate $10M, Djibouti Health $25M)
  const featuredIds = ['proj-ci-road', 'proj-gn-re', 'proj-dj-health'];
  const featuredProjects = featuredIds
    .map((id) => PROJECTS_PORTFOLIO.find((p) => p.id === id))
    .filter((p): p is ProjectCardData => Boolean(p));

  return (
    <>
      {/* =====================================================================
          SECTION 3: AREAS OF EXCELLENCE (01, 02, 03) — ARCHITECTURAL VAULT CARDS
          Aligned with Reference media_1795096516687_2509cf54.jpg
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
          {/* Top Section Header & Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            {/* Minimal Eyebrow */}
            <div className="mb-3.5 inline-flex items-center gap-2.5 font-mono text-[10px] tracking-[0.24em] text-gold-400 uppercase">
              <span className="h-1.5 w-1.5 rotate-45 bg-gold-400 shadow-[0_0_8px_#C9A24D]" />
              <span>{lang === 'en' ? 'OUR EXPERTISE' : 'NOTRE EXPERTISE'}</span>
            </div>

            {/* Grand Headline */}
            <h2 className="font-display text-2xl font-bold tracking-[0.16em] text-white uppercase sm:text-3xl lg:text-4xl leading-tight max-w-4xl">
              {lang === 'en'
                ? 'A PAN-AFRICAN INVESTMENT BANK WITH AN INTERNATIONAL FOCUS'
                : "UNE BANQUE D'AFFAIRES PANAFRICAINE À VOCATION INTERNATIONALE"}
            </h2>

            {/* Two-Column Editorial Briefing Grid from Reference */}
            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
              {/* Left Column: Institutional Pedigree & Network */}
              <div className="relative border border-white/10 bg-obsidian-900/50 p-6 sm:p-8 backdrop-blur-md lg:col-span-7">
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-gold-400 via-gold-500/80 to-transparent" />
                <div className="mb-3 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-gold-400 uppercase">
                  <span>{lang === 'en' ? 'ESTABLISHED 2021 // SOVEREIGN MANDATE' : 'DEPUIS 2021 // MANDAT SOUVERAIN'}</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                  {lang === 'en'
                    ? 'Since 2021, Imaad Financial Group has been supporting states, institutions and companies in structuring and financing their most strategic projects in emerging markets.'
                    : 'Depuis 2021, Imaad Financial Group accompagne les États, institutions et entreprises dans la structuration et le financement de leurs projets les plus stratégiques sur les marchés émergents.'}
                </p>
                <p className="mt-3.5 text-sm leading-relaxed text-slate-400 sm:text-base">
                  {lang === 'en'
                    ? 'We combine the rigor of international standards, in-depth knowledge of African markets and direct access to a network of leading investors and institutional partners.'
                    : "Nous combinons la rigueur des standards internationaux, une connaissance approfondie des marchés africains et un accès direct à un réseau d'investisseurs de premier plan et partenaires institutionnels."}
                </p>
              </div>

              {/* Right Column: Areas of Excellence Strategic Summary */}
              <div className="relative flex flex-col justify-center border border-white/10 bg-obsidian-900/40 p-6 sm:p-8 backdrop-blur-md lg:col-span-5">
                <div>
                  <div className="mb-2 font-serif text-lg font-bold tracking-[0.14em] text-gold-300 sm:text-xl">
                    {lang === 'en' ? 'AREAS OF EXCELLENCE' : "DOMAINES D'EXCELLENCE"}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {lang === 'en'
                      ? 'Tailor-made financing solutions for states, companies and investors, structured around three complementary strategic axes.'
                      : 'Des solutions de financement sur mesure pour les États, entreprises et investisseurs, structurées autour de trois axes stratégiques complémentaires.'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* The 3 Architectural Vault Cards (01, 02, 03) */}
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
            {EXCELLENCE_MODULES.map((mod, idx) => {
              const isSapphire = mod.accentColor === 'sapphire';
              const cardAccentBorder = isSapphire ? 'group-hover:border-sapphire-400/50' : 'group-hover:border-gold-400/50';
              const cardTopGlow = isSapphire
                ? 'bg-gradient-to-r from-transparent via-sapphire-400 to-transparent shadow-[0_0_14px_#38BDF8]'
                : 'bg-gradient-to-r from-transparent via-gold-400 to-transparent shadow-[0_0_14px_#C9A24D]';

              return (
                <motion.article
                  key={mod.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  onMouseEnter={() => soundEngine.playHover()}
                  className={`group relative flex flex-col justify-start overflow-hidden border border-white/15 bg-obsidian-900/70 p-7 sm:p-9 transition-all duration-500 hover:-translate-y-1.5 hover:bg-obsidian-900/95 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)] ${cardAccentBorder}`}
                >
                  <VertexDots color={isSapphire ? 'sapphire' : 'gold'} />

                  {/* Top Glowing Laser Horizon on Hover */}
                  <div
                    className={`pointer-events-none absolute top-0 left-0 right-0 h-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${cardTopGlow}`}
                  />

                  {/* Background Watermark Numeral */}
                  <span className="pointer-events-none absolute top-2 right-4 select-none font-serif text-7xl font-bold text-white/[0.03] transition-colors duration-500 group-hover:text-gold-400/[0.08]">
                    {mod.num}
                  </span>

                  {/* Low Opacity Linear Gradient (No Image) */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-700 group-hover:opacity-80"
                    style={{
                      background: isSapphire
                        ? 'linear-gradient(180deg, rgba(56,189,248,0.06) 0%, rgba(10,15,28,0) 65%, rgba(56,189,248,0.03) 100%)'
                        : 'linear-gradient(180deg, rgba(201,162,77,0.06) 0%, rgba(10,15,28,0) 65%, rgba(201,162,77,0.03) 100%)',
                    }}
                  />

                  {/* Content: Pill & Title */}
                  <div className="relative z-10">
                    <div className="mb-4 inline-flex items-center gap-2.5">
                      <span className="font-serif text-3xl font-bold text-gold-300 tracking-wider">
                        {mod.num}
                      </span>
                      <span className="h-4 w-[1px] bg-white/20" />
                      <span className="font-mono text-[10px] tracking-[0.2em] text-slate-400 uppercase">
                        {mod.badgeDivision[lang]}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg font-bold tracking-[0.1em] text-white uppercase transition-colors duration-300 group-hover:text-gold-300 sm:text-xl leading-snug">
                      {mod.title[lang]}
                    </h3>

                    <p className="mt-3.5 text-xs sm:text-[13px] leading-relaxed text-slate-300">
                      {mod.description[lang]}
                    </p>

                    {/* Interactive Capability Bullet Checklist (No Underline) */}
                    <ul className="mt-6 space-y-3">
                      {mod.bullets[lang].map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2.5 transition-transform duration-300 group-hover:translate-x-1"
                        >
                          <span
                            className={`mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 transition-colors ${
                              isSapphire ? 'bg-sapphire-400' : 'bg-gold-400'
                            }`}
                          />
                          <span className="text-xs sm:text-[13px] leading-relaxed text-slate-300 transition-colors group-hover:text-slate-100">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
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
                {lang === 'en'
                  ? 'PORTFOLIO // FLAGSHIP MANDATES'
                  : 'PORTEFEUILLE // MANDATS PHARES'}
              </span>
            </div>
            <h2 className="font-display text-2xl font-bold tracking-[0.18em] text-white uppercase sm:text-4xl lg:text-5xl">
              {lang === 'en' ? 'PROJECTS & IMPACT' : 'PROJETS & IMPACT'}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              {lang === 'en'
                ? 'High-impact sovereign road corridors, turnkey healthcare complexes, and civic institutions financed across Africa.'
                : 'Corridors routiers souverains, complexes hospitaliers de référence et cités administratives structurés en Afrique.'}
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
                        {project.sector[lang]} {project.flag}
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
                        {/* Sector Eyebrow */}
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
                          {project.amountDisplay || project.amountUSD}
                        </div>

                        {/* Description */}
                        <p className="mt-3.5 sm:mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                          {project.description[lang]}
                        </p>

                        {/* Specs Pill Tag */}
                        <div className="mt-4 sm:mt-5 inline-flex max-w-full items-center gap-2 border border-white/10 bg-white/[0.02] px-3 py-1.5 font-mono text-[10px] sm:text-[11px] tracking-[0.14em] text-slate-400 uppercase break-words">
                          <span>{project.metaTag}</span>
                        </div>

                        {/* Bracketed CTA Button (Teyliom Style) */}
                        <button
                          type="button"
                          onClick={() => {
                            soundEngine.playClick();
                            onInspectProject(project);
                          }}
                          onMouseEnter={() => soundEngine.playHover()}
                          className="group/btn relative mt-6 sm:mt-8 flex h-11 items-center justify-center border border-white/20 bg-obsidian-900/80 px-6 font-display text-[11px] font-bold tracking-[0.2em] text-white uppercase backdrop-blur-md transition-all hover:border-gold-400 hover:bg-gold-500/10 hover:text-gold-200 hover:shadow-[0_0_25px_rgba(201,162,77,0.25)] sm:h-12 sm:px-8 sm:text-xs"
                        >
                          <HudCorners variant="gold" />
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

                          {/* Country Flag Pill */}
                          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 inline-flex items-center gap-1.5 sm:gap-2 border border-white/20 bg-obsidian-950/90 px-2.5 py-1 sm:px-3.5 sm:py-1.5 font-mono text-[11px] sm:text-xs font-semibold tracking-wider text-white backdrop-blur-md">
                            <span>{project.flag}</span>
                            <span>{project.country[lang]}</span>
                          </div>

                          {/* Quarter / Closed Tag */}
                          {project.quarter && (
                            <div
                              className={`absolute bottom-3 right-3 sm:bottom-4 sm:right-4 px-2 py-1 sm:px-2.5 font-mono text-[10px] sm:text-[11px] font-bold tracking-wider shadow-md ${
                                project.isClosed
                                  ? 'bg-[#2D6A4F]/95 text-white'
                                  : 'bg-[#C69C45] text-[#0B1528] uppercase'
                              }`}
                            >
                              {project.isClosed
                                ? `${lang === 'en' ? 'Closed' : 'Clôturé'} ${project.quarter}`
                                : project.quarter}
                            </div>
                          )}

                          {/* Status Tag */}
                          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 border border-gold-400/50 bg-obsidian-950/90 px-2.5 py-1 sm:px-3 font-mono text-[9px] sm:text-[10px] tracking-widest text-gold-300 backdrop-blur-md">
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
              className="group relative flex h-12 items-center justify-center border border-gold-400/60 bg-obsidian-900/90 px-7 font-display text-[11px] font-bold tracking-[0.2em] text-gold-300 uppercase backdrop-blur-md transition-all hover:border-gold-300 hover:bg-gold-500/15 hover:text-white hover:shadow-[0_0_35px_rgba(201,162,77,0.35)] sm:h-14 sm:px-12 sm:text-sm sm:tracking-[0.24em]"
            >
              <HudCorners variant="gold" />
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
