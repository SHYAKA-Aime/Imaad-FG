import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import {
  Language,
  TEAM_MEMBERS,
  TeamMemberData,
} from '../data/imaadData';
import { HudCorners, VertexDots } from './ui/BlueprintPrimitives';
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
  code: string;
  shortLabel: { en: string; fr: string };
  rulerPct: number;
}[] = [
  {
    id: 'all',
    code: '19',
    shortLabel: { en: 'All Entities', fr: 'Toutes les entités' },
    rulerPct: 12,
  },
  {
    id: 'holding',
    code: '01',
    shortLabel: { en: 'Holding / Rwanda', fr: 'Holding / Rwanda' },
    rulerPct: 38,
  },
  {
    id: 'ifesa',
    code: '02',
    shortLabel: { en: 'IFESA / Rwanda', fr: 'IFESA / Rwanda' },
    rulerPct: 65,
  },
  {
    id: 'ifwca',
    code: '03',
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
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

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
      className="relative overflow-hidden border-b border-white/10 bg-obsidian-950"
    >
      {/* ===================================================================
          1. PARALLAX ARCHITECTURAL BANNER + 4 OFFICIAL VALUES
      ==================================================================== */}
      <div
        ref={bannerRef}
        className="relative overflow-hidden border-b border-white/10 py-16 sm:py-24"
      >
        <motion.img
          style={{ y: bgY, scale: 1.15 }}
          src="/team-banner.jpg"
          alt="Imaad Financial Group — Governance"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(3,5,8,0.88) 0%, rgba(11,21,40,0.72) 50%, rgba(3,5,8,0.96) 100%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-10 lg:px-16">
          {/* Minimal Banner Header (Clean, No Extra Text Boxes) */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-bold tracking-[0.18em] text-white uppercase sm:text-4xl lg:text-5xl">
              {lang === 'en' ? 'TEAM' : 'ÉQUIPE'}
            </h2>
          </div>
        </div>
      </div>

      {/* ===================================================================
          2. TEYLIOM ENTITY FILTER & ARCHITECTURAL RULER + PORTRAIT AVATAR CARDS
      ==================================================================== */}
      <div className="mx-auto max-w-[1360px] px-5 py-14 sm:px-10 sm:py-20 lg:px-16">
        {/* Filter Bar + Teyliom Prev/Next Controls */}
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
                  className={`border px-4 py-2 font-mono text-[10px] font-semibold tracking-[0.16em] uppercase transition-all ${
                    isActive
                      ? 'border-gold-400 bg-gold-500/15 text-gold-200 shadow-[0_0_20px_rgba(201,162,77,0.18)]'
                      : 'border-white/15 bg-obsidian-900/50 text-slate-400 hover:border-white/30 hover:text-white'
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
              className="group relative inline-flex h-10 items-center gap-2 bg-white/[0.04] px-4 font-display text-[10px] font-bold tracking-[0.2em] text-slate-200 uppercase transition-all hover:bg-white/[0.09] hover:text-gold-200"
            >
              <HudCorners />
              <ChevronLeft className="h-3.5 w-3.5 text-gold-400" />
              <span>{lang === 'en' ? 'PREV' : 'PRÉC.'}</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              onMouseEnter={() => soundEngine.playHover()}
              className="group relative inline-flex h-10 items-center gap-2 bg-white/[0.04] px-4 font-display text-[10px] font-bold tracking-[0.2em] text-slate-200 uppercase transition-all hover:bg-white/[0.09] hover:text-gold-200"
            >
              <HudCorners />
              <span>{lang === 'en' ? 'NEXT' : 'SUIV.'}</span>
              <ChevronRight className="h-3.5 w-3.5 text-gold-400" />
            </button>
          </div>
        </div>

        {/* Teyliom Architectural Tick-Mark Ruler Bar */}
        <div className="relative mt-6 mb-12 h-6 w-full overflow-hidden border-b border-white/15">
          <div
            className="h-full w-full opacity-35"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to right, rgba(201,162,77,0.5) 0px, rgba(201,162,77,0.5) 1px, transparent 1px, transparent 18px)',
            }}
          />
          <motion.div
            animate={{ left: `${activeTab.rulerPct}%` }}
            transition={{ type: 'spring', stiffness: 220, damping: 28 }}
            className="absolute bottom-0 -translate-x-1/2"
          >
            <div className="h-3 w-3 rotate-45 translate-y-1.5 bg-gold-400 shadow-[0_0_14px_#C9A24D]" />
          </motion.div>
        </div>

        {/* Exact Entity Groups with Full Editorial Portrait Avatar Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="space-y-16"
          >
            {visibleGroups.map((group) => {
              const members = TEAM_MEMBERS.filter((m) => m.entity === group.id);
              return (
                <div key={group.id}>
                  {/* Exact Official Entity Heading */}
                  <div className="mb-7 border-b border-gold-400/25 pb-3.5">
                    <h3 className="font-serif text-xl font-bold tracking-wide text-[#C9A24D] sm:text-2xl">
                      {group.fullTitle[lang]}
                    </h3>
                  </div>

                  {/* Editorial Portrait Cards (Clean Avatar Frame + Name & Exact Title) */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {members.map((member, idx) => (
                      <motion.article
                        key={member.id}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.35, delay: idx * 0.03 }}
                        onClick={() => {
                          soundEngine.playClick();
                          setSelectedMember(member);
                        }}
                        onMouseEnter={() => soundEngine.playHover()}
                        className="group relative flex cursor-pointer flex-col overflow-hidden border border-white/12 bg-[#0B1528]/90 transition-all duration-400 hover:-translate-y-1.5 hover:border-gold-400/60 hover:bg-[#0F1E38] hover:shadow-[0_22px_50px_rgba(0,0,0,0.68)]"
                      >
                        <VertexDots color="gold" />

                        {/* Pure Portrait Avatar Frame (Zero Overlay Tags) */}
                        <div className="relative aspect-[4/4.4] w-full overflow-hidden border-b border-white/10 bg-[#070E1B]">
                          <img
                            src={member.photo || '/team-avatar.svg'}
                            alt={member.name}
                            loading="lazy"
                            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          />

                          {/* Subtle Editorial Bottom Vignette */}
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1528] via-[#0B1528]/10 to-transparent" />

                          {/* Top Gold Accent Hairline on Hover */}
                          <div className="pointer-events-none absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </div>

                        {/* Clean Name & Exact Role */}
                        <div className="flex flex-1 flex-col p-5">
                          <h4 className="font-serif text-base font-bold tracking-wide text-white transition-colors group-hover:text-gold-300">
                            {member.name}
                          </h4>
                          <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                            {member.role[lang]}
                          </p>
                          {member.bio && (
                            <p className="mt-3 border-t border-white/10 pt-3 text-[11px] leading-relaxed text-slate-400">
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

        {/* Bottom Subtle CTA */}
        <div className="mt-14 flex justify-center">
          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              onNavigateContact();
            }}
            onMouseEnter={() => soundEngine.playHover()}
            className="group relative inline-flex h-12 items-center justify-center bg-white/[0.04] px-8 font-display text-[11px] font-bold tracking-[0.22em] text-gold-300 uppercase transition-all hover:bg-white/[0.09] hover:text-white"
          >
            <HudCorners />
            <span>
              {lang === 'en' ? 'START A CONVERSATION' : 'ÉCHANGER AVEC NOTRE ÉQUIPE'}
            </span>
          </button>
        </div>
      </div>

      {/* ===================================================================
          3. MEMBER BIOGRAPHY MODAL
      ==================================================================== */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
            className="fixed inset-0 z-[1200] flex items-center justify-center bg-obsidian-950/85 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl border border-gold-400/40 bg-[#0B1528] p-7 sm:p-9 shadow-[0_30px_80px_rgba(0,0,0,0.85)]"
            >
              <VertexDots color="gold" />
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                aria-label={lang === 'en' ? 'Close biography' : 'Fermer la biographie'}
                className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center border border-white/15 bg-white/[0.04] text-slate-300 transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-5">
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-[#C69C45] bg-[#081020]">
                  <img
                    src={selectedMember.photo || '/team-avatar.svg'}
                    alt={selectedMember.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div>
                  <div className="font-mono text-[10px] font-semibold tracking-[0.18em] text-gold-400 uppercase">
                    {selectedMember.entityLabel[lang]}
                  </div>
                  <h3 className="mt-1 font-serif text-xl font-bold text-white sm:text-2xl">
                    {selectedMember.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium text-slate-300 sm:text-sm">
                    {selectedMember.role[lang]}
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="font-mono text-[10px] tracking-[0.2em] text-gold-400 uppercase">
                  {lang === 'en' ? 'BIOGRAPHY' : 'BIOGRAPHIE'}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-200">
                  {selectedMember.bio
                    ? selectedMember.bio[lang]
                    : lang === 'en'
                    ? '[Biography to be completed]'
                    : '[Biographie à compléter]'}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
