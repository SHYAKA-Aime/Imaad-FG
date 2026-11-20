import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import {
  Currency,
  Language,
  PROJECTS_PORTFOLIO,
  ProjectCardData,
} from '../data/imaadData';
import { soundEngine } from '../utils/soundEngine';

interface ProjectsPageProps {
  lang: Language;
  currency: Currency;
  onBackToHome: () => void;
  onInspectProject: (proj: ProjectCardData) => void;
  onNavigateContact: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  lang,
  onBackToHome,
  onInspectProject,
  onNavigateContact,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Official brochure business lines in exact order
  const filterTabs = [
    { id: 'all', label: lang === 'en' ? 'ALL' : 'TOUS' },
    {
      id: 'sovereign',
      label: lang === 'en' ? 'SOVEREIGN DEBT' : 'DETTE SOUVERAINE',
    },
    {
      id: 'corporate',
      label: 'CORPORATE & TRADE FINANCE',
    },
    {
      id: 'ppp',
      label: lang === 'en' ? 'PUBLIC-PRIVATE PARTNERSHIPS (PPP)' : 'PARTENARIATS PUBLIC-PRIVÉ (PPP)',
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS_PORTFOLIO
      : PROJECTS_PORTFOLIO.filter(
          (p) =>
            p.category === activeFilter ||
            p.categories?.includes(activeFilter)
        );

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* =====================================================================
          1. TOP HERO SECTION
      ====================================================================== */}
      <section className="relative overflow-hidden bg-[#0B1528] pt-24 pb-16 text-white sm:pt-32 sm:pb-24 md:pt-36 md:pb-28">
        <div className="absolute inset-0 z-0">
          <img
            src="/projects/hydraulique-abidjan-ivory.png"
            alt="Infrastructure Impact"
            className="h-full w-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1528]/95 via-[#0B1528]/85 to-[#0B1528]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,162,77,0.12)_0%,transparent_70%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-10 lg:px-16">
          {/* Breadcrumb Back Link */}
          <div className="mb-6 sm:mb-8">
            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                onBackToHome();
              }}
              className="group inline-flex items-center gap-2 font-heading text-xs font-semibold tracking-[0.2em] text-[#C9A24D] uppercase transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>{lang === 'en' ? 'BACK TO HOMEPAGE' : 'RETOUR À L’ACCUEIL'}</span>
            </button>
          </div>

          {/* Centered Hero Narrative */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="font-heading text-xs font-bold tracking-[0.24em] text-[#C9A24D] uppercase sm:text-sm">
              {lang === 'en' ? 'OUR IMPACT' : 'NOTRE IMPACT'}
            </div>

            <h1 className="mt-2.5 sm:mt-3 font-serif text-2xl font-bold tracking-tight text-white uppercase sm:text-4xl md:text-5xl lg:text-6xl">
              {lang === 'en' ? 'PROJECTS & IMPACT' : 'PROJETS & IMPACT'}
            </h1>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-slate-300 font-light">
              {lang === 'en'
                ? 'Measurable results, a sustainable vision — proven expertise, transformative projects and a pan-African presence across 10 key sectors.'
                : 'Des résultats mesurables, une vision durable — une expertise éprouvée, des projets structurants et une présence panafricaine dans 10 secteurs clés.'}
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. GOLD STATS RIBBON BAR (EXACT BROCHURE FIGURES + 9 OFFICES)
      ====================================================================== */}
      <section className="bg-[#C69C45] py-7 sm:py-8 text-[#0B1528] shadow-md">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-5 text-center sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            {/* Stat 1 */}
            <div className="border-b border-[#0B1528]/15 pb-4 sm:border-b-0 sm:pb-0 lg:border-r lg:px-3">
              <div className="font-serif text-2xl font-extrabold tracking-tight sm:text-[26px] xl:text-[30px] text-[#0B1528] whitespace-nowrap">
                {lang === 'fr' ? '+1 Md €' : '+€1 Bn'}
              </div>
              <div className="mt-1 font-heading text-[10px] font-bold tracking-wider text-[#0B1528]/85 uppercase sm:text-[11px]">
                {lang === 'en' ? 'MOBILIZED SINCE 2020' : 'MOBILISÉS DEPUIS 2020'}
              </div>
            </div>

            {/* Stat 2 */}
            <div className="border-b border-[#0B1528]/15 pb-4 sm:border-b-0 sm:pb-0 lg:border-r lg:px-3">
              <div className="font-serif text-2xl font-extrabold tracking-tight sm:text-[26px] xl:text-[30px] text-[#0B1528]">
                +5
              </div>
              <div className="mt-1 font-heading text-[10px] font-bold tracking-wider text-[#0B1528]/85 uppercase sm:text-[11px]">
                {lang === 'en'
                  ? 'PPP PROJECTS COMPLETED OR UNDERWAY'
                  : 'PROJETS PPP FINALISÉS OU EN COURS'}
              </div>
            </div>

            {/* Stat 3 */}
            <div className="border-b border-[#0B1528]/15 pb-4 sm:border-b-0 sm:pb-0 lg:border-r lg:px-3">
              <div className="font-serif text-2xl font-extrabold tracking-tight sm:text-[26px] xl:text-[30px] text-[#0B1528] whitespace-nowrap">
                {lang === 'fr' ? '+3,5 Mds €' : '+€3.5 Bn'}
              </div>
              <div className="mt-1 font-heading text-[10px] font-bold tracking-wider text-[#0B1528]/85 uppercase sm:text-[11px]">
                {lang === 'en'
                  ? 'PROJECT PORTFOLIO BY END OF 2026'
                  : 'PORTEFEUILLE PROJETS À FIN 2026'}
              </div>
            </div>

            {/* Stat 4 */}
            <div className="border-b border-[#0B1528]/15 pb-4 sm:border-b-0 sm:pb-0 lg:border-r lg:px-3">
              <div className="font-serif text-2xl font-extrabold tracking-tight sm:text-[26px] xl:text-[30px] text-[#0B1528]">
                24
              </div>
              <div className="mt-1 font-heading text-[10px] font-bold tracking-wider text-[#0B1528]/85 uppercase sm:text-[11px]">
                {lang === 'en'
                  ? 'COUNTRIES COVERED IN SUB-SAHARAN AFRICA'
                  : 'PAYS COUVERTS EN AFRIQUE SUBSAHARIENNE'}
              </div>
            </div>

            {/* Stat 5 */}
            <div className="sm:col-span-2 lg:col-span-1 lg:px-3">
              <div className="font-serif text-2xl font-extrabold tracking-tight sm:text-[26px] xl:text-[30px] text-[#0B1528]">
                9
              </div>
              <div className="mt-1 font-heading text-[10px] font-bold tracking-wider text-[#0B1528]/85 uppercase sm:text-[11px]">
                {lang === 'en' ? 'OFFICES' : 'BUREAUX'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. MAIN CONTENT: FILTERS, HEADER & 9 OFFICIAL BROCHURE PROJECTS
      ====================================================================== */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-10 lg:px-16">
          {/* Rounded Pill Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 border-b border-slate-200 pb-6 sm:pb-8">
            <span className="mr-1 sm:mr-2 w-full sm:w-auto font-heading text-xs font-bold tracking-wider text-slate-800 uppercase">
              {lang === 'en' ? 'BUSINESS LINES:' : 'MÉTIERS :'}
            </span>

            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    soundEngine.playClick();
                    setActiveFilter(tab.id);
                  }}
                  className={`rounded-full px-3.5 py-1.5 sm:px-5 sm:py-2 font-heading text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                    isActive
                      ? 'border border-[#0B1528] bg-[#0B1528] text-white shadow-sm'
                      : 'border border-slate-300 bg-white text-slate-700 hover:border-slate-800 hover:text-slate-900 shadow-[0_1px_2px_rgba(0,0,0,0.04)]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Sub-header below filters */}
          <div className="mt-12 mb-10">
            <div className="font-heading text-xs font-bold tracking-[0.2em] text-[#C69C45] uppercase">
              {lang === 'en' ? 'KEY PROJECTS' : 'QUELQUES PROJETS'}
            </div>
            <h2 className="mt-1 font-serif text-2xl font-bold tracking-tight text-[#0B1528] uppercase sm:text-3xl lg:text-4xl">
              {lang === 'en' ? 'PROJECTS & IMPACT' : 'PROJETS & IMPACT'}
            </h2>
          </div>

          {/* 9 Official Brochure Project Cards Grid (No Emojis, No Closed/Closing Status) */}
          <motion.div
            layout
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence>
              {filteredProjects.map((project, idx) => (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, delay: idx * 0.04 }}
                  onClick={() => {
                    soundEngine.playClick();
                    onInspectProject(project);
                  }}
                  onMouseEnter={() => soundEngine.playHover()}
                  className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-lg border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
                >
                  {/* Top Image with Clean Badges (No Emojis, No Closed/Closing Status) */}
                  <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.sector[lang]}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                    {/* Country Badge (Bottom Left — Clean Text, Zero Emojis) */}
                    <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded bg-[#0B1528]/90 px-2.5 py-1 font-heading text-[11px] font-semibold tracking-wider text-white backdrop-blur-sm uppercase">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C69C45]" />
                      <span>{project.country[lang]}</span>
                    </div>

                    {/* Business Line Badge (Bottom Right) */}
                    <div className="absolute bottom-3 right-3 rounded bg-[#C69C45] px-2.5 py-1 font-heading text-[10px] font-bold tracking-wider text-[#0B1528] uppercase shadow-sm">
                      {project.category === 'ppp'
                        ? 'PPP'
                        : project.category === 'corporate'
                          ? 'CORPORATE'
                          : lang === 'en'
                            ? 'SOVEREIGN'
                            : 'SOUVERAIN'}
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                    <div>
                      {/* Sector Title */}
                      <div className="font-heading text-xs font-bold tracking-widest text-[#0B1528] uppercase">
                        {project.sector[lang]}
                      </div>

                      {/* Capital Amount in Gold */}
                      <div className="mt-2 font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#C69C45]">
                        {project.amountDisplay[lang]}
                      </div>

                      {/* Description */}
                      <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-slate-600 font-normal">
                        {project.description[lang]}
                      </p>
                    </div>

                    {/* Subtle Inspect link */}
                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 font-heading text-[11px] font-bold tracking-wider text-slate-400 uppercase group-hover:text-[#C69C45] transition-colors">
                      <span>{lang === 'en' ? 'LEARN MORE' : 'EN SAVOIR PLUS'}</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Bottom Mandate Consultation Callout */}
          <div className="mt-20 overflow-hidden rounded-xl border border-slate-200 bg-[#F9FAFB] p-8 sm:p-12 text-center">
            <div className="font-heading text-xs font-bold tracking-[0.24em] text-[#C69C45] uppercase">
              {lang === 'en' ? 'PARTNERSHIP & STRUCTURING' : 'PARTENARIAT & STRUCTURATION'}
            </div>
            <h3 className="mt-2 font-serif text-2xl font-bold text-[#0B1528] uppercase sm:text-3xl">
              {lang === 'en'
                ? 'HAVE A STRATEGIC INFRASTRUCTURE MANDATE?'
                : 'VOUS AVEZ UN PROJET STRUCTURANT ?'}
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 font-normal">
              {lang === 'en'
                ? 'Our teams structure and finance sovereign, corporate & trade finance, and Public-Private Partnership projects across Africa.'
                : 'Nos équipes structurent et financent des projets souverains, corporate & trade finance et Partenariats Public-Privé à travers l’Afrique.'}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => {
                  soundEngine.playClick();
                  onNavigateContact();
                }}
                className="cursor-pointer rounded bg-[#C69C45] px-7 py-3 font-heading text-xs font-bold tracking-wider text-[#0B1528] uppercase transition-all hover:bg-[#d4ab53] hover:shadow-lg"
              >
                {lang === 'en' ? 'SUBMIT A PROJECT MANDATE' : 'SOUMETTRE UN PROJET'}
              </button>
              <button
                type="button"
                onClick={() => {
                  soundEngine.playClick();
                  onBackToHome();
                }}
                className="rounded border border-slate-300 bg-white px-7 py-3 font-heading text-xs font-bold tracking-wider text-slate-700 uppercase transition-all hover:border-slate-800 hover:text-slate-900"
              >
                {lang === 'en' ? 'RETURN TO HOMEPAGE' : 'RETOUR À L’ACCUEIL'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
