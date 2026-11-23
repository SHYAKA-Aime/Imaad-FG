import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import {
  Language,
  TEAM_MEMBERS,
  TeamMemberData,
} from '../data/imaadData';
import { HoverBorderTrace, HudCorners } from './ui/BlueprintPrimitives';
import { soundEngine } from '../utils/soundEngine';

interface HomeTeamSectionProps {
  lang: Language;
  onNavigateContact: () => void;
}

type EntityFilter = 'all' | 'holding' | 'ifesa' | 'ifwca';

const ENTITY_GROUPS: {
  id: 'holding' | 'ifesa' | 'ifwca';
  code: string;
  fullTitle: { en: string; fr: string };
}[] = [
  {
    id: 'holding',
    code: '01',
    fullTitle: {
      en: 'Imaad Financial Group (Holding / Rwanda)',
      fr: 'Imaad Financial Group (Holding / Rwanda)',
    },
  },
  {
    id: 'ifesa',
    code: '02',
    fullTitle: {
      en: 'Imaad Financial Eastern & Southern Africa (IFESA / Rwanda)',
      fr: 'Imaad Financial Eastern & Southern Africa (IFESA / Rwanda)',
    },
  },
  {
    id: 'ifwca',
    code: '03',
    fullTitle: {
      en: 'Imaad Financial Western & Central Africa (IFWCA / Côte d’Ivoire)',
      fr: 'Imaad Financial Western & Central Africa (IFWCA / Côte d’Ivoire)',
    },
  },
];

const ENTITY_TABS: {
  id: EntityFilter;
  shortLabel: { en: string; fr: string };
  rulerPct: number;
}[] = [
  {
    id: 'all',
    shortLabel: { en: 'All entities', fr: 'Toutes les entités' },
    rulerPct: 12,
  },
  {
    id: 'holding',
    shortLabel: { en: 'Holding / Rwanda', fr: 'Holding / Rwanda' },
    rulerPct: 38,
  },
  {
    id: 'ifesa',
    shortLabel: { en: 'IFESA / Rwanda', fr: 'IFESA / Rwanda' },
    rulerPct: 65,
  },
  {
    id: 'ifwca',
    shortLabel: { en: 'IFWCA / Côte d’Ivoire', fr: 'IFWCA / Côte d’Ivoire' },
    rulerPct: 90,
  },
];

export const HomeTeamSection: React.FC<HomeTeamSectionProps> = ({
  lang,
  onNavigateContact,
}) => {
  const [activeEntityIdx, setActiveEntityIdx] = useState<number>(0);
  const [selectedMember, setSelectedMember] = useState<TeamMemberData | null>(null);

  const bannerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  const activeTab = ENTITY_TABS[activeEntityIdx];
  const visibleGroups =
    activeTab.id === 'all'
      ? ENTITY_GROUPS
      : ENTITY_GROUPS.filter((g) => g.id === activeTab.id);

  const handlePrev = () => {
    soundEngine.playClick();
    setActiveEntityIdx((prev) => (prev - 1 + ENTITY_TABS.length) % ENTITY_TABS.length);
  };

  const handleNext = () => {
    soundEngine.playClick();
    setActiveEntityIdx((prev) => (prev + 1) % ENTITY_TABS.length);
  };

  return (
    <section
      id="team"
      className="relative overflow-hidden border-b border-[#E5DFD3] bg-[#F8F6F2] text-[#0E1B2E]"
    >
      {/* 1. Parallax Architectural Banner */}
      <div
        ref={bannerRef}
        className="relative overflow-hidden border-b border-[#E5DFD3] bg-[#0E1B2E] py-16 sm:py-20"
      >
        <motion.img
          style={{ y: bgY, scale: 1.12 }}
          src="/team-banner.jpg"
          alt={
            lang === 'en'
              ? 'Imaad Financial Group governance'
              : 'Gouvernance Imaad Financial Group'
          }
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,27,46,0.82) 0%, rgba(17,31,56,0.72) 55%, rgba(14,27,46,0.92) 100%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1360px] px-5 text-center sm:px-10 lg:px-16">
          <div className="mb-3 font-sans text-[11px] font-semibold tracking-[0.22em] text-[#C1A258] uppercase">
            {lang === 'en' ? 'Governance' : 'Gouvernance'}
          </div>
          <h2 className="font-serif text-3xl font-medium text-[#F8F6F2] sm:text-4xl lg:text-[42px]">
            {lang === 'en' ? 'Team' : 'Équipe'}
          </h2>
        </div>
      </div>

      {/* 2. Ivory Directory with Interactive Entity Switcher & Gold Ruler */}
      <div className="mx-auto max-w-[1360px] px-5 py-16 sm:px-10 sm:py-24 lg:px-16">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
          <div className="flex flex-wrap gap-2.5">
            {ENTITY_TABS.map((tab, idx) => {
              const isActive = idx === activeEntityIdx;
              const count =
                tab.id === 'all'
                  ? TEAM_MEMBERS.length
                  : TEAM_MEMBERS.filter((m) => m.entity === tab.id).length;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    soundEngine.playClick();
                    setActiveEntityIdx(idx);
                  }}
                  className={`border px-4 py-2 font-sans text-[11px] font-semibold tracking-[0.14em] uppercase transition-all ${
                    isActive
                      ? 'border-[#0E1B2E] bg-[#0E1B2E] text-[#F8F6F2]'
                      : 'border-[#D4CCC0] bg-[#F1EDE5] text-[#3D4B5E] hover:border-[#0E1B2E] hover:text-[#0E1B2E]'
                  }`}
                >
                  {tab.shortLabel[lang]} ({count})
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              onMouseEnter={() => soundEngine.playHover()}
              className="group relative inline-flex h-10 items-center gap-2 bg-[#0E1B2E]/[0.06] px-4 font-sans text-[11px] font-semibold tracking-[0.16em] text-[#0E1B2E] uppercase transition-all hover:bg-[#0E1B2E] hover:text-[#F8F6F2]"
            >
              <HudCorners tone="on-ivory" />
              <ChevronLeft className="h-3.5 w-3.5 text-[#C1A258]" />
              <span>{lang === 'en' ? 'Prev' : 'Préc.'}</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              onMouseEnter={() => soundEngine.playHover()}
              className="group relative inline-flex h-10 items-center gap-2 bg-[#0E1B2E]/[0.06] px-4 font-sans text-[11px] font-semibold tracking-[0.16em] text-[#0E1B2E] uppercase transition-all hover:bg-[#0E1B2E] hover:text-[#F8F6F2]"
            >
              <HudCorners tone="on-ivory" />
              <span>{lang === 'en' ? 'Next' : 'Suiv.'}</span>
              <ChevronRight className="h-3.5 w-3.5 text-[#C1A258]" />
            </button>
          </div>
        </div>

        {/* Animated Gold Ruler Bar */}
        <div className="relative mt-6 mb-12 h-5 w-full overflow-hidden border-b border-[#D4CCC0]">
          <div
            className="h-full w-full opacity-40"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to right, rgba(193,162,88,0.6) 0px, rgba(193,162,88,0.6) 1px, transparent 1px, transparent 18px)',
            }}
          />
          <motion.div
            animate={{ left: `${activeTab.rulerPct}%` }}
            transition={{ type: 'spring', stiffness: 220, damping: 28 }}
            className="absolute bottom-0 -translate-x-1/2"
          >
            <div className="h-2.5 w-2.5 rotate-45 translate-y-1.5 bg-[#C1A258]" />
          </motion.div>
        </div>

        {/* Entity Groups */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="space-y-16"
          >
            {visibleGroups.map((group) => {
              const members = TEAM_MEMBERS.filter((m) => m.entity === group.id);
              return (
                <div key={group.id}>
                  <div className="mb-8 border-b border-[#E5DFD3] pb-3.5">
                    <h3 className="font-serif text-xl font-medium text-[#0E1B2E] sm:text-2xl">
                      {group.fullTitle[lang]}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {members.map((member, idx) => (
                      <motion.article
                        key={member.id}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.35, delay: idx * 0.03 }}
                        onClick={() => {
                          soundEngine.playClick();
                          setSelectedMember(member);
                        }}
                        onMouseEnter={() => soundEngine.playHover()}
                        className="group relative flex cursor-pointer flex-col overflow-hidden border border-[#E5DFD3] bg-[#FFFFFF] transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(14,27,46,0.1)]"
                      >
                        <HoverBorderTrace color="gold" />

                        <div className="relative aspect-[4/4.3] w-full overflow-hidden border-b border-[#E5DFD3] bg-[#0E1B2E]">
                          <img
                            src={member.photo || '/team-avatar.svg'}
                            alt={member.name}
                            loading="lazy"
                            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>

                        <div className="flex flex-1 flex-col p-5">
                          <h4 className="font-serif text-base font-medium text-[#0E1B2E] transition-colors group-hover:text-[#C1A258]">
                            {member.name}
                          </h4>
                          <p className="mt-1.5 font-sans text-xs leading-relaxed text-[#4B586B]">
                            {member.role[lang]}
                          </p>
                          {member.bio && (
                            <p className="mt-3 border-t border-[#E5DFD3] pt-3 font-sans text-xs leading-relaxed text-[#3D4B5E]">
                              {member.bio[lang]}
                            </p>
                          )}
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <div className="mt-16 flex justify-center">
          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              onNavigateContact();
            }}
            onMouseEnter={() => soundEngine.playHover()}
            className="group relative inline-flex h-12 items-center justify-center bg-[#0E1B2E] px-8 font-sans text-xs font-semibold tracking-[0.16em] text-[#F8F6F2] uppercase transition-all hover:bg-[#162744] hover:text-[#C1A258]"
          >
            <HudCorners tone="on-navy" />
            <span>
              {lang === 'en' ? 'Start a conversation' : 'Échanger avec notre équipe'}
            </span>
          </button>
        </div>
      </div>

      {/* 3. Member Profile Modal (No Bracketed Placeholder Text) */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
            className="fixed inset-0 z-[1200] flex items-center justify-center bg-[#0E1B2E]/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              transition={{ duration: 0.24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl border border-[#C1A258]/40 bg-[#0E1B2E] p-7 text-[#F8F6F2] shadow-2xl sm:p-9"
            >
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                aria-label={
                  lang === 'en' ? 'Close profile' : 'Fermer le profil'
                }
                className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center border border-[#F8F6F2]/15 text-[#D8DDE6] transition-colors hover:border-[#C1A258] hover:text-[#C1A258]"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-5">
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border border-[#C1A258] bg-[#111F38]">
                  <img
                    src={selectedMember.photo || '/team-avatar.svg'}
                    alt={selectedMember.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div>
                  <div className="font-sans text-[10px] font-semibold tracking-[0.18em] text-[#C1A258] uppercase">
                    {selectedMember.entityLabel[lang]}
                  </div>
                  <h3 className="mt-1 font-serif text-xl font-medium text-[#F8F6F2] sm:text-2xl">
                    {selectedMember.name}
                  </h3>
                  <p className="mt-1 font-sans text-xs text-[#D8DDE6] sm:text-sm">
                    {selectedMember.role[lang]}
                  </p>
                </div>
              </div>

              {selectedMember.bio && (
                <div className="mt-6 border-t border-[#F8F6F2]/15 pt-5">
                  <div className="font-sans text-[10px] font-semibold tracking-[0.2em] text-[#C1A258] uppercase">
                    {lang === 'en' ? 'Biography' : 'Biographie'}
                  </div>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-[#D8DDE6]">
                    {selectedMember.bio[lang]}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
