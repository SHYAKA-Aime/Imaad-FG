import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X } from 'lucide-react';
import {
  Language,
  OFFICIAL_VALUES,
  TEAM_MEMBERS,
  TeamMemberData,
} from '../data/imaadData';
import { VertexDots } from './ui/BlueprintPrimitives';
import { soundEngine } from '../utils/soundEngine';

interface TeamPageProps {
  lang: Language;
  onBackToHome: () => void;
  onNavigateContact: () => void;
}

const ENTITY_GROUPS: {
  id: 'holding' | 'ifesa' | 'ifwca';
  eyebrow: { en: string; fr: string };
  title: { en: string; fr: string };
}[] = [
  {
    id: 'holding',
    eyebrow: { en: '01 · HOLDING', fr: '01 · HOLDING' },
    title: {
      en: 'Imaad Financial Group (Holding / Rwanda)',
      fr: 'Imaad Financial Group (Holding / Rwanda)',
    },
  },
  {
    id: 'ifesa',
    eyebrow: { en: '02 · EASTERN & SOUTHERN AFRICA', fr: '02 · AFRIQUE DE L’EST ET AUSTRALE' },
    title: {
      en: 'Imaad Financial Eastern & Southern Africa (IFESA / Rwanda)',
      fr: 'Imaad Financial Eastern & Southern Africa (IFESA / Rwanda)',
    },
  },
  {
    id: 'ifwca',
    eyebrow: { en: '03 · WESTERN & CENTRAL AFRICA', fr: '03 · AFRIQUE DE L’OUEST ET CENTRALE' },
    title: {
      en: 'Imaad Financial Western & Central Africa (IFWCA / Côte d’Ivoire)',
      fr: 'Imaad Financial Western & Central Africa (IFWCA / Côte d’Ivoire)',
    },
  },
];

export const TeamPage: React.FC<TeamPageProps> = ({
  lang,
  onBackToHome,
  onNavigateContact,
}) => {
  const [selectedMember, setSelectedMember] = useState<TeamMemberData | null>(null);

  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-50">
      {/* =====================================================================
          1. GOVERNANCE & TEAM HERO HEADER
      ====================================================================== */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#0B1528] pt-24 pb-16 sm:pt-32 sm:pb-24 md:pt-36 md:pb-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 35%, rgba(201,162,77,0.14) 0%, rgba(11,21,40,0.92) 65%, #0B1528 100%)',
          }}
        />
        <div className="blueprint-grid-bg pointer-events-none absolute inset-0 opacity-20" />

        <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-10 lg:px-16">
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

          <div className="mx-auto max-w-3xl text-center">
            <div className="font-mono text-xs font-bold tracking-[0.24em] text-[#C9A24D] uppercase">
              {lang === 'en' ? 'OUR GOVERNANCE' : 'NOTRE GOUVERNANCE'}
            </div>

            <h1 className="mt-3 font-serif text-3xl font-bold tracking-tight text-white uppercase sm:text-4xl md:text-5xl lg:text-6xl">
              {lang === 'en' ? 'TEAM' : 'ÉQUIPE'}
            </h1>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-slate-300">
              {lang === 'en'
                ? 'Leadership, integrity and continental influence — structured across our Holding, Eastern & Southern Africa (IFESA), and Western & Central Africa (IFWCA) entities.'
                : 'Leadership, intégrité et influence continentale — organisée autour de notre Holding et de nos entités Afrique de l’Est et Australe (IFESA) et Afrique de l’Ouest et Centrale (IFWCA).'}
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. OFFICIAL VALUES STRIP (MEDIUM WARM STONE MODE — BROCHURE PAGE 4)
      ====================================================================== */}
      <section className="border-b border-[#C4BDB0] bg-[#DDD8CE] py-10 text-[#0B1528] sm:py-12">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-10 lg:px-16">
          <div className="mb-6">
            <div className="font-mono text-[10px] font-bold tracking-[0.22em] text-[#9A7428] uppercase">
              {lang === 'en' ? 'OUR VALUES' : 'NOS VALEURS'}
            </div>
            <p className="mt-1 text-sm font-medium text-[#3A4659]">
              {lang === 'en'
                ? 'We place Finance at the service of Development, Competitiveness and Sustainability of our Projects.'
                : 'Nous plaçons la Finance au service du Développement, de la Compétitivité et de la Durabilité de nos Projets.'}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {OFFICIAL_VALUES.map((val) => (
              <div
                key={val.num}
                className="border-l-2 border-[#B38832] bg-[#EAE6DE] px-5 py-4"
              >
                <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#9A7428]">
                  {val.num}
                </span>
                <div className="mt-1.5 font-heading text-xs font-bold tracking-wide text-[#0B1528] sm:text-sm">
                  {val.title[lang]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. ALL 19 TEAM MEMBERS GROUPED BY EXACT ENTITY (HOLDING / IFESA / IFWCA)
      ====================================================================== */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1360px] space-y-16 px-5 sm:px-10 lg:space-y-20 lg:px-16">
          {ENTITY_GROUPS.map((group) => {
            const members = TEAM_MEMBERS.filter((m) => m.entity === group.id);
            return (
              <div key={group.id}>
                {/* Entity Group Header */}
                <div className="mb-8 border-b border-gold-400/25 pb-4">
                  <div className="font-mono text-[10px] font-semibold tracking-[0.22em] text-slate-400 uppercase">
                    {group.eyebrow[lang]}
                  </div>
                  <h2 className="mt-1.5 font-serif text-xl font-bold tracking-wide text-gold-300 sm:text-2xl lg:text-[26px]">
                    {group.title[lang]}
                  </h2>
                </div>

                {/* 3-Column Entity Cards matching CEO Reference Structure */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {members.map((member, idx) => (
                    <motion.article
                      key={member.id}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.4, delay: idx * 0.04 }}
                      onClick={() => {
                        soundEngine.playClick();
                        setSelectedMember(member);
                      }}
                      onMouseEnter={() => soundEngine.playHover()}
                      className="group relative flex cursor-pointer flex-col justify-between border border-white/10 border-t-2 border-t-[#C69C45] bg-[#0B1528]/90 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/50 hover:bg-[#0F1D36] hover:shadow-[0_18px_45px_rgba(0,0,0,0.6)]"
                    >
                      <VertexDots color="gold" />

                      <div>
                        {/* Header: Circular Portrait / Monogram + Name & Exact Role */}
                        <div className="flex items-start gap-4">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#C69C45]/70 bg-[#081020] transition-colors group-hover:border-gold-300">
                            {member.photo ? (
                              <img
                                src={member.photo}
                                alt={member.name}
                                className="h-full w-full object-cover object-top"
                              />
                            ) : (
                              <span className="font-serif text-base font-semibold tracking-wider text-[#C69C45]">
                                {member.initials}
                              </span>
                            )}
                          </div>

                          <div className="min-w-0">
                            <h3 className="font-serif text-base font-bold tracking-wide text-white transition-colors group-hover:text-gold-300 sm:text-[17px]">
                              {member.name}
                            </h3>
                            <p className="mt-1 text-xs leading-relaxed text-slate-300">
                              {member.role[lang]}
                            </p>
                          </div>
                        </div>

                        {/* Divider + Biography / Placeholder */}
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

          {/* Bottom Contact CTA */}
          <div className="relative overflow-hidden border border-gold-400/30 bg-[#0B1528] p-8 text-center sm:p-12">
            <VertexDots color="gold" />
            <div className="font-mono text-[10px] font-semibold tracking-[0.24em] text-gold-400 uppercase">
              {lang === 'en' ? 'INSTITUTIONAL CONTACT' : 'CONTACT INSTITUTIONNEL'}
            </div>
            <h3 className="mt-2 font-display text-xl font-bold tracking-[0.14em] text-white uppercase sm:text-2xl lg:text-3xl">
              {lang === 'en'
                ? 'START A CONVERSATION WITH OUR TEAM'
                : 'ÉCHANGER AVEC NOTRE ÉQUIPE'}
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
              {lang === 'en'
                ? 'For any institutional mandate, strategic partnership or financing inquiry across Sub-Saharan Africa, contact our teams in Kigali and Abidjan.'
                : 'Pour tout mandat institutionnel, partenariat stratégique ou demande de financement en Afrique subsaharienne, contactez nos équipes à Kigali et Abidjan.'}
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => {
                  soundEngine.playClick();
                  onNavigateContact();
                }}
                className="rounded bg-[#C69C45] px-7 py-3 font-heading text-xs font-bold tracking-[0.16em] text-[#0B1528] uppercase transition-all hover:bg-[#d6ad56] hover:shadow-[0_0_24px_rgba(201,162,77,0.4)]"
              >
                {lang === 'en' ? 'Write to us' : 'Nous écrire'}
              </button>
              <button
                type="button"
                onClick={() => {
                  soundEngine.playClick();
                  onBackToHome();
                }}
                className="rounded border border-white/20 bg-white/[0.04] px-7 py-3 font-heading text-xs font-bold tracking-[0.16em] text-slate-200 uppercase transition-all hover:border-gold-400/60 hover:text-white"
              >
                {lang === 'en' ? 'Back to homepage' : 'Retour à l’accueil'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Member Biography Detail Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[4000] flex items-center justify-center p-4"
          >
            <div
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-obsidian-950/85 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto border border-gold-400/50 bg-[#0B1528] p-7 shadow-2xl sm:p-9"
            >
              <VertexDots color="gold" />
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-[10px] tracking-[0.18em] text-gold-300 uppercase">
                  {selectedMember.entityLabel[lang]}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedMember(null)}
                  className="inline-flex items-center gap-1 border border-white/15 px-2.5 py-1 font-mono text-[11px] text-slate-300 hover:border-gold-400 hover:text-gold-300"
                >
                  <X className="h-3.5 w-3.5" />
                  <span>{lang === 'en' ? 'CLOSE' : 'FERMER'}</span>
                </button>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-gold-400/60 bg-obsidian-950">
                  {selectedMember.photo ? (
                    <img
                      src={selectedMember.photo}
                      alt={selectedMember.name}
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <span className="font-serif text-lg font-bold text-gold-300">
                      {selectedMember.initials}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">
                    {selectedMember.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-gold-300">
                    {selectedMember.role[lang]}
                  </p>
                </div>
              </div>

              <div className="mt-6 text-sm leading-relaxed text-slate-300">
                {selectedMember.bio ? (
                  <p>{selectedMember.bio[lang]}</p>
                ) : (
                  <p className="italic text-slate-400">
                    {lang === 'en'
                      ? '[Biography to be completed]'
                      : '[Biographie à compléter]'}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
