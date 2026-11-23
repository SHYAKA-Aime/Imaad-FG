import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Currency,
  EXCELLENCE_MODULES,
  ExcellenceModuleData,
  Language,
  PROJECTS_PORTFOLIO,
  ProjectCardData,
  WHO_WE_SERVE,
} from "../data/imaadData";
import { HoverBorderTrace, HudCorners } from "./ui/BlueprintPrimitives";
import { soundEngine } from "../utils/soundEngine";

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

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: idx * 0.1 }}
      className="group relative flex flex-col overflow-hidden bg-[#111F38] transition-all duration-400 hover:-translate-y-1 hover:bg-[#162744]"
    >
      <HoverBorderTrace color="gold" />

      {/* Interactive Photo Stage with Clean Carousel Dots */}
      <div className="relative h-56 w-full overflow-hidden border-b border-[#F8F6F2]/10 bg-[#0E1B2E] sm:h-60">
        {activeSlide && (
          <AnimatePresence mode="wait">
            <motion.img
              key={activeSlide.image}
              src={activeSlide.image}
              alt={mod.title[lang]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </AnimatePresence>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111F38]/80 via-transparent to-transparent" />

        {slides.length > 1 && (
          <div className="absolute right-0 bottom-3.5 left-0 flex items-center justify-center gap-2">
            {slides.map((_, sIdx) => (
              <button
                key={sIdx}
                type="button"
                aria-label={
                  lang === "en"
                    ? `Slide ${sIdx + 1}`
                    : `Diapositive ${sIdx + 1}`
                }
                onClick={(e) => {
                  e.stopPropagation();
                  soundEngine.playClick();
                  setSlideIdx(sIdx);
                }}
                className={`h-2.5 w-2.5 rounded-full border transition-all ${
                  sIdx === slideIdx
                    ? "scale-110 border-[#C1A258] bg-[#C1A258]"
                    : "border-[#F8F6F2]/55 bg-[#0E1B2E]/60 hover:border-[#C1A258]"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Editorial Copy + Unified CTA */}
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
        <div>
          <h3 className="font-serif text-xl font-medium text-[#F8F6F2] transition-colors duration-300 group-hover:text-[#C1A258] leading-snug">
            {mod.title[lang]}
          </h3>
          <p className="mt-3 line-clamp-4 font-sans text-sm leading-relaxed text-[#D8DDE6]">
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
            className="group/btn group relative inline-flex h-11 items-center justify-center gap-2.5 bg-[#F8F6F2]/[0.05] px-6 font-sans text-xs font-semibold tracking-[0.16em] text-[#F8F6F2] uppercase transition-all hover:bg-[#C1A258] hover:text-[#0E1B2E]"
          >
            <HudCorners tone="on-navy" />
            <span>{lang === "en" ? "Learn more" : "En savoir plus"}</span>
            <ArrowRight className="h-3.5 w-3.5 text-[#C1A258] transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:text-[#0E1B2E]" />
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
  const featuredIds = ["proj-ci-storage", "proj-ng-gas", "proj-bj-vaccines"];
  const featuredProjects = featuredIds
    .map((id) => PROJECTS_PORTFOLIO.find((p) => p.id === id))
    .filter((p): p is ProjectCardData => Boolean(p));

  return (
    <>
      {/* =====================================================================
          SECTION 3: OUR SERVICES — NAVY #0E1B2E
      ====================================================================== */}
      <section
        id="excellence"
        className="relative overflow-hidden border-b border-[#F8F6F2]/10 bg-[#0E1B2E] py-20 sm:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-[1360px] px-5 sm:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <div className="mb-3 font-sans text-[11px] font-semibold tracking-[0.22em] text-[#C1A258] uppercase">
              {lang === "en" ? "Our services" : "Nos services"}
            </div>

            <h2 className="mx-auto max-w-3xl font-serif text-2xl font-medium text-[#F8F6F2] sm:text-3xl lg:text-4xl leading-snug">
              {lang === "en"
                ? "Three core businesses, one integrated platform"
                : "Trois métiers, une plateforme intégrée"}
            </h2>

            <p className="mx-auto mt-3.5 max-w-xl font-sans text-sm text-[#D8DDE6] sm:text-base">
              {lang === "en"
                ? "We provide advisory services in three areas across Sub-Saharan Africa."
                : "Nous intervenons en conseil et structuration dans trois domaines clés en Afrique subsaharienne."}
            </p>
          </motion.div>

          {/* 3 Visual Interactive Service Cards */}
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

          {/* Editorial 4-Column WHO WE SERVE Index (Calm, Open, Interactive Hairline Reveal) */}
          <div className="mt-20 border-t border-[#F8F6F2]/15 pt-14">
            <div className="mb-10 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <div className="font-sans text-[11px] font-semibold tracking-[0.22em] text-[#C1A258] uppercase">
                  {lang === "en" ? "Who we serve" : "Nos clients"}
                </div>
                <h3 className="mt-2 font-serif text-2xl font-medium text-[#F8F6F2] sm:text-3xl">
                  {lang === "en"
                    ? "Institutional mandates across four constituencies"
                    : "Un accompagnement dédié à quatre types d’acteurs"}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
              {WHO_WE_SERVE.map((client, cIdx) => (
                <motion.div
                  key={client.code}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: cIdx * 0.08 }}
                  onMouseEnter={() => soundEngine.playHover()}
                  className="group relative pt-6"
                >
                  {/* Base Hairline + Animated Gold Sweep on Hover */}
                  <div className="absolute top-0 right-0 left-0 h-[1px] bg-[#F8F6F2]/15" />
                  <div className="absolute top-0 right-0 left-0 h-[1.5px] origin-left scale-x-0 bg-[#C1A258] transition-transform duration-500 ease-out group-hover:scale-x-100" />

                  <div className="font-sans text-[11px] font-semibold tracking-[0.18em] text-[#C1A258]/80 transition-colors duration-300 group-hover:text-[#C1A258]">
                    {client.code}
                  </div>
                  <h4 className="mt-3 font-serif text-xl font-medium text-[#F8F6F2] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#C1A258]">
                    {client[lang]}
                  </h4>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-[#D8DDE6]/85 transition-colors duration-300 group-hover:text-[#F8F6F2]">
                    {client.detail[lang]}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: PROJECTS & IMPACT — ELEVATED NAVY #111F38
      ====================================================================== */}
      <section
        id="projects-showcase"
        className="relative overflow-hidden border-b border-[#F8F6F2]/10 bg-[#111F38] py-20 sm:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-[1360px] px-5 sm:px-10 lg:px-16">
          <div className="mb-16 text-center sm:mb-20">
            <div className="mb-3 font-sans text-[11px] font-semibold tracking-[0.22em] text-[#C1A258] uppercase">
              {lang === "en" ? "Portfolio" : "Portefeuille"}
            </div>
            <h2 className="font-serif text-3xl font-medium text-[#F8F6F2] sm:text-4xl lg:text-[42px]">
              {lang === "en" ? "Projects and impact" : "Projets et impact"}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-sans text-sm leading-relaxed text-[#D8DDE6] sm:text-base">
              {lang === "en"
                ? "Strategic energy storage and gas infrastructure, transport corridors, industrial healthcare, and housing programs structured across Sub-Saharan Africa."
                : "Infrastructures énergétiques et gazières, corridors de transport, santé industrielle et programmes de logements structurés en Afrique subsaharienne."}
            </p>
          </div>

          {/* 3 Alternating Split Showcase Rows */}
          <div className="space-y-14 sm:space-y-20">
            {featuredProjects.map((project, idx) => {
              const isReverse = idx % 2 === 1;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55 }}
                  className="group relative border border-[#F8F6F2]/15 bg-[#0E1B2E] p-6 transition-colors duration-400 hover:border-[#C1A258]/45 sm:p-10 lg:p-12"
                >
                  <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
                    {/* Narrative Column */}
                    <div
                      className={`flex flex-col items-start lg:col-span-6 ${
                        isReverse ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="mb-3 font-sans text-[11px] font-semibold tracking-[0.2em] text-[#C1A258] uppercase">
                        {project.statusTag[lang]} · {project.country[lang]}
                      </div>

                      <h3 className="font-serif text-2xl font-medium text-[#F8F6F2] sm:text-3xl leading-snug">
                        {project.sector[lang]}
                      </h3>

                      <div className="mt-2 font-serif text-xl font-medium text-[#C1A258] sm:text-2xl">
                        {project.amountDisplay[lang]}
                      </div>

                      <p className="mt-4 font-sans text-sm leading-relaxed text-[#D8DDE6] sm:text-base">
                        {project.description[lang]}
                      </p>

                      <button
                        type="button"
                        onClick={() => {
                          soundEngine.playClick();
                          onInspectProject(project);
                        }}
                        onMouseEnter={() => soundEngine.playHover()}
                        className="group/btn group relative mt-7 inline-flex h-11 items-center justify-center bg-[#F8F6F2]/[0.05] px-7 font-sans text-xs font-semibold tracking-[0.16em] text-[#F8F6F2] uppercase transition-all hover:bg-[#C1A258] hover:text-[#0E1B2E]"
                      >
                        <HudCorners tone="on-navy" />
                        <span>
                          {lang === "en" ? "Learn more" : "En savoir plus"}
                        </span>
                      </button>
                    </div>

                    {/* Real Infrastructure Photo Column */}
                    <div
                      className={`lg:col-span-6 ${
                        isReverse ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="relative h-[240px] w-full overflow-hidden border border-[#F8F6F2]/15 bg-[#0E1B2E] sm:h-[340px] lg:h-[380px]">
                        <img
                          src={project.image}
                          alt={project.sector[lang]}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E1B2E]/65 via-transparent to-transparent" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Centered View All Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 flex justify-center sm:mt-16"
          >
            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                onViewAllProjects();
              }}
              onMouseEnter={() => soundEngine.playHover()}
              className="group relative inline-flex h-12 items-center justify-center gap-3 bg-[#C1A258]/15 px-9 font-sans text-xs font-semibold tracking-[0.18em] text-[#F8F6F2] uppercase transition-all hover:bg-[#C1A258] hover:text-[#0E1B2E]"
            >
              <HudCorners tone="on-navy" />
              <span>
                {lang === "en" ? "View all projects" : "Voir tous les projets"}
              </span>
              <ArrowRight className="h-4 w-4 text-[#C1A258] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#0E1B2E]" />
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};
