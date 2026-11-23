import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import {
  Currency,
  Language,
  PROJECTS_PORTFOLIO,
  ProjectCardData,
} from '../data/imaadData';
import { HoverBorderTrace, HudCorners } from './ui/BlueprintPrimitives';
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

  const filterTabs = [
    { id: 'all', label: lang === 'en' ? 'All' : 'Tous' },
    {
      id: 'sovereign',
      label: lang === 'en' ? 'Sovereign debt' : 'Dette souveraine',
    },
    {
      id: 'corporate',
      label: 'Corporate & Trade Finance',
    },
    {
      id: 'ppp',
      label:
        lang === 'en'
          ? 'Public-Private Partnerships (PPP)'
          : 'Partenariats Public-Privé (PPP)',
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
    <div className="min-h-screen bg-[#F8F6F2] text-[#0E1B2E]">
      {/* =====================================================================
          1. NAVY HERO SECTION (#0E1B2E)
      ====================================================================== */}
      <section className="relative overflow-hidden border-b border-[#F8F6F2]/10 bg-[#0E1B2E] pt-28 pb-16 text-[#F8F6F2] sm:pt-36 sm:pb-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/projects/hydraulique-abidjan-ivory.png"
            alt={
              lang === 'en' ? 'Infrastructure impact' : 'Impact des infrastructures'
            }
            className="h-full w-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E1B2E]/90 via-[#0E1B2E]/80 to-[#0E1B2E]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-10 lg:px-16">
          <div className="mb-8">
            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                onBackToHome();
              }}
              className="group inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.16em] text-[#C1A258] uppercase transition-colors hover:text-[#F8F6F2]"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>{lang === 'en' ? 'Back to homepage' : 'Retour à l’accueil'}</span>
            </button>
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <div className="font-sans text-[11px] font-semibold tracking-[0.22em] text-[#C1A258] uppercase">
              {lang === 'en' ? 'Our impact' : 'Notre impact'}
            </div>

            <h1 className="mt-3 font-serif text-3xl font-medium text-[#F8F6F2] sm:text-4xl lg:text-5xl">
              {lang === 'en' ? 'Projects and impact' : 'Projets et impact'}
            </h1>

            <p className="mt-5 font-sans text-sm leading-relaxed text-[#D8DDE6] sm:text-base">
              {lang === 'en'
                ? 'Measurable results, a sustainable vision — proven expertise, transformative projects and a pan-African presence across 10 key sectors.'
                : 'Des résultats mesurables, une vision durable — une expertise éprouvée, des projets structurants et une présence panafricaine dans 10 secteurs clés.'}
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. GOLD STATS RIBBON (#C1A258 — "à fin 2026" REMOVED)
      ====================================================================== */}
      <section className="bg-[#C1A258] py-7 text-[#0E1B2E] sm:py-8">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-5 text-center sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            <div className="border-b border-[#0E1B2E]/15 pb-4 sm:border-b-0 sm:pb-0 lg:border-r lg:px-3">
              <div className="font-serif text-2xl font-semibold text-[#0E1B2E] sm:text-[28px] whitespace-nowrap">
                {lang === 'fr' ? '+1 Md €' : '+€1 Bn'}
              </div>
              <div className="mt-1 font-sans text-[11px] font-semibold tracking-[0.12em] text-[#0E1B2E]/85 uppercase">
                {lang === 'en' ? 'Mobilized since 2020' : 'Mobilisés depuis 2020'}
              </div>
            </div>

            <div className="border-b border-[#0E1B2E]/15 pb-4 sm:border-b-0 sm:pb-0 lg:border-r lg:px-3">
              <div className="font-serif text-2xl font-semibold text-[#0E1B2E] sm:text-[28px]">
                +5
              </div>
              <div className="mt-1 font-sans text-[11px] font-semibold tracking-[0.12em] text-[#0E1B2E]/85 uppercase">
                {lang === 'en'
                  ? 'PPP projects completed or underway'
                  : 'Projets PPP finalisés ou en cours'}
              </div>
            </div>

            <div className="border-b border-[#0E1B2E]/15 pb-4 sm:border-b-0 sm:pb-0 lg:border-r lg:px-3">
              <div className="font-serif text-2xl font-semibold text-[#0E1B2E] sm:text-[28px] whitespace-nowrap">
                {lang === 'fr' ? '+3,5 Mds €' : '+€3.5 Bn'}
              </div>
              <div className="mt-1 font-sans text-[11px] font-semibold tracking-[0.12em] text-[#0E1B2E]/85 uppercase">
                {lang === 'en' ? 'Project portfolio' : 'Portefeuille de projets'}
              </div>
            </div>

            <div className="border-b border-[#0E1B2E]/15 pb-4 sm:border-b-0 sm:pb-0 lg:border-r lg:px-3">
              <div className="font-serif text-2xl font-semibold text-[#0E1B2E] sm:text-[28px]">
                24
              </div>
              <div className="mt-1 font-sans text-[11px] font-semibold tracking-[0.12em] text-[#0E1B2E]/85 uppercase">
                {lang === 'en'
                  ? 'Countries in Sub-Saharan Africa'
                  : 'Pays en Afrique subsaharienne'}
              </div>
            </div>

            <div className="sm:col-span-2 lg:col-span-1 lg:px-3">
              <div className="font-serif text-2xl font-semibold text-[#0E1B2E] sm:text-[28px]">
                9
              </div>
              <div className="mt-1 font-sans text-[11px] font-semibold tracking-[0.12em] text-[#0E1B2E]/85 uppercase">
                {lang === 'en' ? 'Offices' : 'Bureaux'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. IVORY PORTFOLIO GRID (#F8F6F2)
      ====================================================================== */}
      <section className="bg-[#F8F6F2] py-16 sm:py-24">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-10 lg:px-16">
          {/* Interactive Filter Bar */}
          <div className="flex flex-wrap items-center gap-2.5 border-b border-[#E5DFD3] pb-8">
            <span className="mr-2 w-full font-sans text-[11px] font-semibold tracking-[0.18em] text-[#6B7688] uppercase sm:w-auto">
              {lang === 'en' ? 'Business lines:' : 'Métiers :'}
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
                  className={`border px-4 py-2 font-sans text-[11px] font-semibold tracking-[0.14em] uppercase transition-all duration-200 ${
                    isActive
                      ? 'border-[#0E1B2E] bg-[#0E1B2E] text-[#F8F6F2]'
                      : 'border-[#D4CCC0] bg-[#FFFFFF] text-[#3D4B5E] hover:border-[#0E1B2E] hover:text-[#0E1B2E]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="mt-12 mb-10">
            <div className="font-sans text-[11px] font-semibold tracking-[0.22em] text-[#C1A258] uppercase">
              {lang === 'en' ? 'Key projects' : 'Quelques projets'}
            </div>
            <h2 className="mt-1.5 font-serif text-2xl font-medium text-[#0E1B2E] sm:text-3xl lg:text-4xl">
              {lang === 'en' ? 'Projects and impact' : 'Projets et impact'}
            </h2>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence>
              {filteredProjects.map((project, idx) => (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4, delay: idx * 0.03 }}
                  onClick={() => {
                    soundEngine.playClick();
                    onInspectProject(project);
                  }}
                  onMouseEnter={() => soundEngine.playHover()}
                  className="group relative flex cursor-pointer flex-col justify-between overflow-hidden border border-[#E5DFD3] bg-[#FFFFFF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(14,27,46,0.1)]"
                >
                  <HoverBorderTrace color="gold" />

                  <div className="relative h-56 w-full overflow-hidden border-b border-[#E5DFD3] bg-[#0E1B2E] sm:h-60">
                    <img
                      src={project.image}
                      alt={project.sector[lang]}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E1B2E]/55 via-transparent to-transparent" />

                    <div className="absolute bottom-3 left-3 bg-[#0E1B2E]/90 px-3 py-1 font-sans text-[10px] font-semibold tracking-[0.14em] text-[#F8F6F2] uppercase">
                      {project.country[lang]}
                    </div>

                    <div className="absolute right-3 bottom-3 bg-[#C1A258] px-2.5 py-1 font-sans text-[10px] font-semibold tracking-[0.14em] text-[#0E1B2E] uppercase">
                      {project.category === 'ppp'
                        ? 'PPP'
                        : project.category === 'corporate'
                        ? 'Corporate'
                        : lang === 'en'
                        ? 'Sovereign'
                        : 'Souverain'}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                    <div>
                      <h3 className="font-serif text-lg font-medium text-[#0E1B2E]">
                        {project.sector[lang]}
                      </h3>

                      <div className="mt-2 font-serif text-xl font-medium text-[#C1A258] sm:text-2xl">
                        {project.amountDisplay[lang]}
                      </div>

                      <p className="mt-3 font-sans text-xs leading-relaxed text-[#4B586B] sm:text-sm">
                        {project.description[lang]}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-[#E5DFD3] pt-4 font-sans text-[11px] font-semibold tracking-[0.16em] text-[#C1A258] uppercase transition-colors group-hover:text-[#0E1B2E]">
                      <span>{lang === 'en' ? 'Learn more' : 'En savoir plus'}</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Bottom Mandate Callout */}
          <div className="mt-20 border border-[#E5DFD3] bg-[#0E1B2E] p-8 text-center text-[#F8F6F2] sm:p-12">
            <div className="font-sans text-[11px] font-semibold tracking-[0.22em] text-[#C1A258] uppercase">
              {lang === 'en'
                ? 'Partnership and structuring'
                : 'Partenariat et structuration'}
            </div>
            <h3 className="mt-2.5 font-serif text-2xl font-medium text-[#F8F6F2] sm:text-3xl">
              {lang === 'en'
                ? 'Have a strategic infrastructure mandate?'
                : 'Vous avez un projet structurant ?'}
            </h3>
            <p className="mx-auto mt-3 max-w-2xl font-sans text-sm leading-relaxed text-[#D8DDE6]">
              {lang === 'en'
                ? 'Our teams structure and finance sovereign, corporate & trade finance, and Public-Private Partnership projects across Sub-Saharan Africa.'
                : 'Nos équipes structurent et financent des projets souverains, corporate & trade finance et Partenariats Public-Privé en Afrique subsaharienne.'}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => {
                  soundEngine.playClick();
                  onNavigateContact();
                }}
                className="group relative inline-flex h-12 items-center justify-center bg-[#C1A258]/20 px-7 font-sans text-xs font-semibold tracking-[0.16em] text-[#F8F6F2] uppercase transition-all hover:bg-[#C1A258] hover:text-[#0E1B2E]"
              >
                <HudCorners tone="on-navy" />
                <span>
                  {lang === 'en' ? 'Submit a project' : 'Soumettre un projet'}
                </span>
              </button>
              <button
                type="button"
                onClick={() => {
                  soundEngine.playClick();
                  onBackToHome();
                }}
                className="group relative inline-flex h-12 items-center justify-center bg-[#F8F6F2]/[0.05] px-7 font-sans text-xs font-semibold tracking-[0.16em] text-[#F8F6F2] uppercase transition-all hover:bg-[#F8F6F2]/[0.12] hover:text-[#C1A258]"
              >
                <HudCorners tone="on-navy" />
                <span>
                  {lang === 'en' ? 'Return to homepage' : 'Retour à l’accueil'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
