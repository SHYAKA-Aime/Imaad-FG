import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, User, X } from 'lucide-react';
import {
  Language,
  OFFICIAL_VALUES,
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

// Clean Architectural Avatar Badge (supports real photo drop-in when approved)
const MemberAvatar: React.FC<{
  member: TeamMemberData;
  size?: 'md' | 'lg';
}> = ({ member, size = 'md' }) => {
  const dim = size === 'lg' ? 'h-16 w-16' : 'h-14 w-14';
  return (
    <div
      className={`relative flex ${dim} shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#C69C45]/80 bg-gradient-to-b from-[#11203B] to-[#070E1B] shadow-[0_0_18px_rgba(201,162,77,0.14)] transition-all duration-300 group-hover:border-gold-300 group-hover:shadow-[0_0_24px_rgba(201,162,77,0.28)]`}
    >
      {member.photo ? (
        <img
          src={member.photo}
          alt={member.name}
          className="h-full w-full object-cover object-top"
        />
      ) : (
        <>
          <User className="pointer-events-none absolute -bottom-1 h-9 w-9 text-gold-400/15" />
          <span className="relative z-10 font-serif text-sm font-semibold tracking-wider text-[#C9A24D] sm:text-base">
            {member.initials}
          </span>
        </>
      )}
    </div>
  );
};

export const HomeTeamSection: React.FC<HomeTeamSectionProps> = ({
  lang,
  onNavigateContact,
}) => {
  // Default to 'all' so all 3 entity groups & 19 members match the CEO screenshots immediately
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
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2.5 font-mono text-[10px] tracking-[0.24em] text-gold-400 uppercase">
              <span className="h-1.5 w-1.5 rotate-45 bg-gold-400 shadow-[0_0_8px_#C9A24D]" />
              <span>{lang === 'en' ? 'GOVERNANCE & TEAM' : 'GOUVERNANCE & ÉQUIPE'}</span>
            </div>

            <h2 className="font-display text-2xl font-bold tracking-[0.18em] text-white uppercase sm:text-4xl lg:text-5xl">
              {lang === 'en' ? 'TEAM' : 'ÉQUIPE'}
            </h2>

            <p className="mt-3.5 text-sm leading-relaxed text-slate-300 sm:text-base">
              {lang === 'en'
                ? 'Three integrated entities uniting executive governance in Kigali and regional execution in Abidjan.'
                : 'Trois entités intégrées alliant gouvernance à Kigali et exécution régionale à Abidjan.'}
            </p>
          </div>

          {/* 4 Official Values Strip */}
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {OFFICIAL_VALUES.map((val) => (
              <div
                key={val.num}
                className="flex items-center gap-3 border border-white/15 bg-obsidian-950/75 px-4 py-3 backdrop-blur-md"
              >
                <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-gold-400">
                  {val.num}
                </span>
                <span className="h-3 w-[1px] bg-white/15" />
                <span className="text-xs font-medium text-slate-200">
                  {val.title[lang]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===================================================================
          2. TEYLIOM ENTITY FILTER & ARCHITECTURAL RULER + EXACT 3 ENTITY GROUPS
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
              className="group relative inline-flex h-10 items-center gap-2 border border-white/15 bg-obsidian-900/80 px-4 font-display text-[10px] font-bold tracking-[0.2em] text-slate-200 uppercase transition-all hover:border-gold-400 hover:bg-gold-500/10 hover:text-gold-200"
            >
              <HudCorners variant="gold" />
              <ChevronLeft className="h-3.5 w-3.5 text-gold-400" />
              <span>{lang === 'en' ? 'PREV' : 'PRÉC.'}</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              onMouseEnter={() => soundEngine.playHover()}
              className="group relative inline-flex h-10 items-center gap-2 border border-white/15 bg-obsidian-900/80 px-4 font-display text-[10px] font-bold tracking-[0.2em] text-slate-200 uppercase transition-all hover:border-gold-400 hover:bg-gold-500/10 hover:text-gold-200"
            >
              <HudCorners variant="gold" />
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

        {/* Exact Entity Groups & 19 Member Cards matching CEO Screenshots */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="space-y-14"
          >
            {visibleGroups.map((group) => {
              const members = TEAM_MEMBERS.filter((m) => m.entity === group.id);
              return (
                <div key={group.id}>
                  {/* Exact Official Entity Heading */}
                  <div className="mb-7 flex items-baseline justify-between gap-4 border-b border-gold-400/25 pb-3.5">
                    <h3 className="font-serif text-xl font-bold tracking-wide text-[#C9A24D] sm:text-2xl">
                      {group.fullTitle[lang]}
                    </h3>
                    <span className="shrink-0 font-mono text-[10px] tracking-[0.2em] text-slate-400 uppercase">
                      {group.code} · {members.length}
                    </span>
                  </div>

                  {/* 3-Column Architectural Cards with Clean Avatar + Exact Details */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                        className="group relative flex cursor-pointer flex-col justify-between border border-white/12 border-t-2 border-t-[#C69C45] bg-[#0B1528]/90 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/60 hover:bg-[#0F1E38] hover:shadow-[0_20px_45px_rgba(0,0,0,0.65)]"
                      >
                        <VertexDots color="gold" />

                        <div>
                          {/* Header: Avatar + Exact Name & Exact Title */}
                          <div className="flex items-start gap-4">
                            <MemberAvatar member={member} />
                            <div className="min-w-0">
                              <h4 className="font-serif text-base font-bold tracking-wide text-white transition-colors group-hover:text-gold-300 sm:text-[17px]">
                                {member.name}
                              </h4>
                              <p className="mt-1 text-xs leading-relaxed text-slate-300">
                                {member.role[lang]}
                              </p>
                            </div>
                          </div>

                          {/* Divider + Exact Bio / Placeholder matching CEO Screenshots */}
                          <div className="mt-5 border-t border-white/10 pt-4">
                            {member.bio ? (
                              <p className="text-xs leading-relaxed text-slate-300 sm:text-[13px]">
                                {member.bio[lang]}
                              </p>
                            ) : (
                              <p className="text-xs italic text-slate-500">
                                {lang === 'en'
                                  ? '[Biography to be completed]'
                                  : '[Biographie à compléter]'}
                              </p>
                            )}
                          </div>
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
            className="group relative inline-flex h-12 items-center justify-center border border-gold-400/50 bg-obsidian-900/80 px-8 font-display text-[11px] font-bold tracking-[0.22em] text-gold-300 uppercase transition-all hover:border-gold-300 hover:bg-gold-500/15 hover:text-white"
          >
            <HudCorners variant="gold" />
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
                aria-label="Close biography"
                className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center border border-white/15 bg-white/[0.04] text-slate-300 transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-4">
                <MemberAvatar member={selectedMember} size="lg" />
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
