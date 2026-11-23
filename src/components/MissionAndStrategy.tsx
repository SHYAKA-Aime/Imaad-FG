import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Language, STRATEGY_PILLARS } from '../data/imaadData';
import { HoverBorderTrace, HudCorners } from './ui/BlueprintPrimitives';
import { soundEngine } from '../utils/soundEngine';

interface MissionAndStrategyProps {
  lang: Language;
}

export const MissionAndStrategy: React.FC<MissionAndStrategyProps> = ({ lang }) => {
  const splitRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: splitRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section
      id="mission"
      className="relative overflow-hidden border-b border-[#F8F6F2]/10 bg-[#0E1B2E] py-20 sm:py-28 lg:py-32"
    >
      <div id="our-model" className="mx-auto max-w-[1360px] px-5 sm:px-10 lg:px-16">
        {/* 1. Editorial About Split with Parallax Architectural Frame */}
        <div
          ref={splitRef}
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16"
        >
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="mb-3.5 font-sans text-[11px] font-semibold tracking-[0.22em] text-[#C1A258] uppercase">
              {lang === 'en' ? 'About' : 'À propos'}
            </div>

            <h2 className="font-serif text-2xl font-medium text-[#F8F6F2] sm:text-3xl lg:text-4xl leading-snug">
              {lang === 'en'
                ? 'A merchant bank anchored in Sub-Saharan Africa'
                : 'Une banque d’affaires ancrée en Afrique subsaharienne'}
            </h2>

            <p className="mt-5 font-sans text-sm leading-relaxed text-[#D8DDE6] sm:text-base">
              {lang === 'en'
                ? 'Imaad Financial Group Ltd is a merchant bank based in Kigali, Rwanda, with a West and Central Africa regional office in Abidjan, Côte d’Ivoire. We combine quantitative rigour with operational knowledge of commodities, energy, mining and infrastructure.'
                : 'Imaad Financial Group Ltd est une banque d’affaires basée à Kigali, au Rwanda, dotée d’un bureau régional pour l’Afrique de l’Ouest et Centrale à Abidjan, en Côte d’Ivoire. Nous combinons rigueur quantitative et connaissance opérationnelle des matières premières, de l’énergie, des mines et des infrastructures.'}
            </p>

            {/* Anchors */}
            <div className="mt-8 grid grid-cols-1 gap-4 border-y border-[#F8F6F2]/15 py-6 sm:grid-cols-3">
              <div className="border-l border-[#C1A258] pl-4">
                <div className="font-sans text-[10px] font-semibold tracking-[0.18em] text-[#C1A258] uppercase">
                  {lang === 'en' ? 'Headquarters' : 'Siège social'}
                </div>
                <div className="mt-1 font-serif text-sm font-medium text-[#F8F6F2]">
                  Kigali, Rwanda
                </div>
              </div>
              <div className="border-l border-[#C1A258] pl-4">
                <div className="font-sans text-[10px] font-semibold tracking-[0.18em] text-[#C1A258] uppercase">
                  {lang === 'en' ? 'Regional office' : 'Bureau régional'}
                </div>
                <div className="mt-1 font-serif text-sm font-medium text-[#F8F6F2]">
                  Abidjan, Côte d’Ivoire
                </div>
              </div>
              <div className="border-l border-[#C1A258] pl-4">
                <div className="font-sans text-[10px] font-semibold tracking-[0.18em] text-[#C1A258] uppercase">
                  {lang === 'en' ? 'Coverage' : 'Couverture'}
                </div>
                <div className="mt-1 font-serif text-sm font-medium text-[#F8F6F2]">
                  {lang === 'en' ? 'Sub-Saharan Africa' : 'Afrique subsaharienne'}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href="#excellence"
                onClick={() => soundEngine.playClick()}
                onMouseEnter={() => soundEngine.playHover()}
                className="group relative inline-flex h-12 items-center justify-center bg-[#F8F6F2]/[0.05] px-7 font-sans text-xs font-semibold tracking-[0.16em] text-[#F8F6F2] uppercase transition-all hover:bg-[#C1A258] hover:text-[#0E1B2E]"
              >
                <HudCorners tone="on-navy" />
                <span>{lang === 'en' ? 'Our services' : 'Nos services'}</span>
              </a>

              <a
                href="#team"
                onClick={() => soundEngine.playClick()}
                className="inline-flex items-center gap-2.5 font-sans text-xs font-semibold tracking-[0.14em] text-[#C1A258] uppercase transition-colors hover:text-[#F8F6F2]"
              >
                <span className="h-[1px] w-5 bg-[#C1A258]" />
                <span>{lang === 'en' ? 'Meet our team' : 'Découvrir l’équipe'}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Clean Hairline Parallax Frame */}
          <div className="relative mx-auto w-full max-w-[540px] lg:col-span-6 lg:max-w-none">
            <div className="border border-[#C1A258]/25 bg-[#111F38] p-3 sm:p-4">
              <div className="relative h-[320px] w-full overflow-hidden bg-[#0E1B2E] sm:h-[400px] lg:h-[440px]">
                <motion.img
                  style={{ y: imageY, scale: 1.1 }}
                  src="/about-architecture.jpg"
                  alt={
                    lang === 'en'
                      ? 'Imaad Financial Group architecture'
                      : 'Architecture Imaad Financial Group'
                  }
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E1B2E]/50 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* 2. Strategy Pillars */}
        <div className="mt-24 sm:mt-28">
          <div className="mb-10">
            <div className="mb-2.5 font-sans text-[11px] font-semibold tracking-[0.22em] text-[#C1A258] uppercase">
              {lang === 'en' ? 'Our strategy' : 'Notre stratégie'}
            </div>
            <h3 className="font-serif text-2xl font-medium text-[#F8F6F2] sm:text-3xl">
              {lang === 'en'
                ? 'International vision, local execution'
                : 'Vision internationale, exécution locale'}
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
            {STRATEGY_PILLARS.map((pillar, idx) => (
              <motion.article
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => soundEngine.playHover()}
                className="group relative flex flex-col overflow-hidden bg-[#111F38] transition-all duration-400 hover:-translate-y-1 hover:bg-[#162744]"
              >
                <HoverBorderTrace color="gold" />

                <div className="relative h-52 w-full overflow-hidden border-b border-[#F8F6F2]/10">
                  <img
                    src={pillar.bgImage}
                    alt={pillar.title[lang]}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111F38] via-[#111F38]/20 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h4 className="font-serif text-xl font-medium text-[#F8F6F2] transition-colors group-hover:text-[#C1A258]">
                    {pillar.title[lang]}
                  </h4>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-[#D8DDE6]">
                    {pillar.description[lang]}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
