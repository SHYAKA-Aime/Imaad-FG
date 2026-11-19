import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, RefreshCw } from 'lucide-react';
import {
  DNA_MONOLITHS,
  JOURNEY_PERIODS,
  Language,
} from '../data/imaadData';
import { DnaMonolithScene } from './three/DnaMonolithScene';
import { HudButton, HudCorners, ScrollPrompt, VertexDots } from './ui/BlueprintPrimitives';
import { soundEngine } from '../utils/soundEngine';

interface JourneyAndDnaProps {
  lang: Language;
}

export const JourneyAndDna: React.FC<JourneyAndDnaProps> = ({ lang }) => {
  // Timeline State
  const [periodIdx, setPeriodIdx] = useState(0);
  const [detailedOpen, setDetailedOpen] = useState(false);

  // I.M.A.A.D. 3D Isometric Acronym State
  const [activeDnaIdx, setActiveDnaIdx] = useState(0);

  const currentPeriod = JOURNEY_PERIODS[periodIdx];
  const currentDna = DNA_MONOLITHS[activeDnaIdx];

  const handlePrevPeriod = () => {
    soundEngine.playClick();
    setPeriodIdx((prev) => (prev - 1 + JOURNEY_PERIODS.length) % JOURNEY_PERIODS.length);
  };

  const handleNextPeriod = () => {
    soundEngine.playClick();
    setPeriodIdx((prev) => (prev + 1) % JOURNEY_PERIODS.length);
  };

  // Compute dynamic SVG 3D Isometric projection coordinates for the active I-M-A-A-D letter block (Teyliom 01:05 - 01:13)
  const cubeXStart = 15 + activeDnaIdx * 124;
  const cubeXEnd = cubeXStart + 118;
  const calloutX = 115 + activeDnaIdx * 48;
  const calloutY = 26 + (activeDnaIdx % 2) * 14;

  return (
    <>
      {/* =====================================================================
          SECTION 5: OUR JOURNEY — INTERACTIVE HORIZONTAL RULER TIMELINE
          + EXPANDABLE VERTICAL CIRCUIT TIMELINE (00:52 - 01:01 & 01:21 - 01:43)
      ====================================================================== */}
      <section
        id="journey"
        className="relative overflow-hidden border-b border-white/5 py-28"
      >
        <div
          className="pointer-events-none absolute top-10 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-50 blur-[140px]"
          style={{
            background:
              'radial-gradient(circle, rgba(30,107,255,0.24) 0%, transparent 70%)',
          }}
        />

        <div className="mx-auto max-w-[1360px] px-5 md:px-9">
          <div className="text-center">
            <div className="mb-3 inline-flex items-center justify-center gap-3 font-mono text-xs tracking-[0.22em] text-gold-400">
              <span className="h-2 w-2 rotate-45 bg-gold-400 shadow-[0_0_10px_#C9A24D]" />
              <span>
                {lang === 'en'
                  ? 'INSTITUTIONAL EVOLUTION // MILESTONES'
                  : 'ÉVOLUTION INSTITUTIONNELLE // JALONS'}
              </span>
            </div>
            <h2 className="font-display text-2xl font-bold tracking-[0.24em] text-white uppercase sm:text-4xl">
              {lang === 'en' ? 'OUR JOURNEY' : 'NOTRE PARCOURS'}
            </h2>
          </div>

          {/* Active Year Display + [ < PREV PERIOD ] [ NEXT PERIOD > ] (00:52 - 00:58 in video) */}
          <div className="mx-auto mt-12 mb-7 flex max-w-4xl flex-wrap items-center justify-between gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPeriod.year}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="font-display text-4xl font-bold tracking-[0.18em] text-white sm:text-5xl"
              >
                {currentPeriod.year}
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={handlePrevPeriod}
                onMouseEnter={() => soundEngine.playHover()}
                className="group relative inline-flex h-12 items-stretch border border-white/15 bg-white/[0.02] font-display text-[10px] font-bold tracking-[0.22em] text-white transition-all hover:border-sapphire-400 hover:bg-sapphire-400/10"
              >
                <HudCorners variant="sapphire" />
                <span className="flex w-11 items-center justify-center border-r border-white/15 text-sapphire-400">
                  <ChevronLeft className="h-4 w-4" />
                </span>
                <span className="flex items-center px-6">
                  {lang === 'en' ? 'PREV PERIOD' : 'PÉRIODE PRÉC.'}
                </span>
              </button>

              <button
                type="button"
                onClick={handleNextPeriod}
                onMouseEnter={() => soundEngine.playHover()}
                className="group relative inline-flex h-12 items-stretch border border-white/15 bg-white/[0.02] font-display text-[10px] font-bold tracking-[0.22em] text-white transition-all hover:border-sapphire-400 hover:bg-sapphire-400/10"
              >
                <HudCorners variant="sapphire" />
                <span className="flex items-center px-6">
                  {lang === 'en' ? 'NEXT PERIOD' : 'PÉRIODE SUIV.'}
                </span>
                <span className="flex w-11 items-center justify-center border-l border-white/15 text-sapphire-400">
                  <ChevronRight className="h-4 w-4" />
                </span>
              </button>
            </div>
          </div>

          {/* Interactive Precision Ruler Scrubber with Glowing Diamond Marker (00:52 - 00:58) */}
          <div className="relative my-10">
            <div className="flex h-12 items-end justify-between border-b border-white/20 px-2">
              {[...Array(61)].map((_, idx) => {
                const isMajor = idx % 12 === 0;
                const majorIndex = Math.floor(idx / 12);
                const periodForMajor = JOURNEY_PERIODS[majorIndex];
                const isActiveMajor = isMajor && majorIndex === periodIdx;

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      soundEngine.playClick();
                      const nearest = Math.min(
                        JOURNEY_PERIODS.length - 1,
                        Math.round((idx / 60) * (JOURNEY_PERIODS.length - 1))
                      );
                      setPeriodIdx(nearest);
                    }}
                    className="group relative flex flex-col items-center focus:outline-none"
                  >
                    {isMajor && periodForMajor && (
                      <span
                        className={`mb-2 font-mono text-[11px] transition-colors ${
                          isActiveMajor
                            ? 'font-bold text-gold-300'
                            : 'text-slate-500 group-hover:text-slate-300'
                        }`}
                      >
                        {periodForMajor.year}
                      </span>
                    )}
                    <span
                      className={`transition-all ${
                        isMajor
                          ? isActiveMajor
                            ? 'h-6 w-[2px] bg-gold-300 shadow-[0_0_10px_#C9A24D]'
                            : 'h-5 w-[1.5px] bg-white/50 group-hover:bg-gold-300'
                          : 'h-2.5 w-[1px] bg-white/20 group-hover:bg-white/60'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Animated Progress Bar & Diamond Marker */}
            <div
              className="pointer-events-none absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-sapphire-400 to-gold-400 shadow-[0_0_14px_#38BDF8] transition-all duration-500"
              style={{ width: `${currentPeriod.progressPct}%` }}
            />
            <div
              className="pointer-events-none absolute -bottom-[6px] -translate-x-1/2 transition-all duration-500"
              style={{ left: `${currentPeriod.progressPct}%` }}
            >
              <span className="block h-3.5 w-3.5 rotate-45 border-2 border-white bg-sapphire-400 shadow-[0_0_18px_#38BDF8]" />
            </div>
          </div>

          {/* 3 Quarterly Milestone Cards for the Active Year (00:53 - 00:59 in video) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPeriod.year + lang}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 gap-7 md:grid-cols-3"
            >
              {currentPeriod.quarters.map((qItem, i) => (
                <div
                  key={i}
                  onMouseEnter={() => soundEngine.playHover()}
                  className={`group relative flex min-h-[210px] flex-col justify-between border p-7 transition-all hover:-translate-y-1 ${
                    qItem.highlighted
                      ? 'border-sapphire-400/45 bg-obsidian-800/90 shadow-[0_0_35px_rgba(56,189,248,0.12)]'
                      : 'border-white/15 bg-obsidian-900/75 hover:border-gold-400/40'
                  }`}
                >
                  <VertexDots color={qItem.highlighted ? 'sapphire' : 'white'} />

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-gold-400">
                      {qItem.tag}
                    </span>
                    <span
                      className={`font-display text-2xl font-bold ${
                        qItem.highlighted ? 'text-white' : 'text-white/30'
                      }`}
                    >
                      {qItem.q}
                    </span>
                  </div>

                  <p className="mt-6 text-sm font-semibold leading-relaxed text-slate-100">
                    {qItem.title[lang]}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Full-Width [ VIEW DETAILED ] Architectural Button (00:59 - 01:01) */}
          <div className="mt-10">
            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                setDetailedOpen(!detailedOpen);
              }}
              onMouseEnter={() => soundEngine.playHover()}
              className="group relative flex h-14 w-full items-center justify-center border border-white/15 bg-white/[0.02] font-display text-xs font-bold tracking-[0.28em] text-white transition-all hover:border-sapphire-400 hover:bg-sapphire-400/10 hover:text-gold-300"
            >
              <HudCorners variant="sapphire" />
              <span>
                {detailedOpen
                  ? lang === 'en'
                    ? 'HIDE DETAILED TIMELINE'
                    : 'MASQUER LA CHRONOLOGIE DÉTAILLÉE'
                  : lang === 'en'
                  ? 'VIEW DETAILED'
                  : 'VOIR LA CHRONOLOGIE DÉTAILLÉE'}
              </span>
            </button>
          </div>

          {/* EXPANDABLE VERTICAL BLUEPRINT CIRCUIT TIMELINE (01:21 - 01:43 in Teyliom Recording) */}
          <AnimatePresence>
            {detailedOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-20 border-t border-sapphire-400/25 pt-16">
                  <div className="mb-16 text-center">
                    <h3 className="font-display text-3xl font-bold tracking-[0.32em] text-white sm:text-5xl">
                      TIMELINE
                    </h3>
                    <p className="mt-3 text-sm text-slate-400">
                      {lang === 'en'
                        ? 'Chronological Blueprint of IMAAD Financial Group Sovereign Mandates & Institutional Milestones'
                        : 'Chronologie Architecturale des Mandats Souverains et Jalons Institutionnels IMAAD Financial Group'}
                    </p>
                  </div>

                  <div className="relative mx-auto max-w-5xl space-y-14 before:absolute before:top-0 before:bottom-0 before:left-4 before:w-[1px] before:bg-gradient-to-b before:from-sapphire-400 before:via-gold-400 before:to-sapphire-400 before:opacity-45 md:before:left-1/2">
                    {JOURNEY_PERIODS.map((p) => {
                      const isRight = p.verticalNode.side === 'right';
                      return (
                        <div
                          key={p.year}
                          className={`relative flex flex-col md:w-[46%] ${
                            isRight
                              ? 'pl-10 md:ml-auto md:pl-0'
                              : 'pl-10 md:mr-auto md:pl-0'
                          }`}
                        >
                          {/* Glowing Blue Diamond Node Header (01 / 06) */}
                          <div className="mb-4 inline-flex items-center gap-4">
                            <span className="h-4 w-4 rotate-45 bg-sapphire-400 shadow-[0_0_18px_#38BDF8]" />
                            <span className="font-mono text-xs tracking-[0.24em] text-slate-400">
                              {p.verticalNode.index}
                            </span>
                          </div>

                          <div className="group relative border border-sapphire-400/35 bg-obsidian-900/90 p-7">
                            <VertexDots color="sapphire" />
                            <div className="font-display text-2xl font-bold tracking-[0.2em] text-gold-300 sm:text-3xl">
                              {p.year}
                            </div>

                            <div className="my-5 h-48 overflow-hidden border border-white/15">
                              <img
                                src={p.verticalNode.image}
                                alt={p.year}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                            </div>

                            <ul className="space-y-2.5">
                              {p.verticalNode.bullets[lang].map((b, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2.5 text-sm text-slate-200"
                                >
                                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-300" />
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: SOVEREIGN COMMITMENT & CORPORATE RESPONSIBILITY (01:02 - 01:04)
      ====================================================================== */}
      <section
        id="responsibility"
        className="relative border-b border-white/5 py-24"
      >
        <div className="mx-auto max-w-[1360px] px-5 md:px-9">
          <div className="mb-10 flex justify-center">
            <ScrollPrompt
              centered
              href="#imaad-dna"
              text={
                lang === 'en'
                  ? 'Scroll down to explore more'
                  : 'Faites défiler pour explorer'
              }
            />
          </div>

          {/* Floating Emblem Box Above Banner (Matching Teyliom 01:02) */}
          <div className="mb-6 flex justify-center">
            <div className="group relative flex h-16 w-20 flex-col items-center justify-center border border-white/15 bg-obsidian-900">
              <VertexDots />
              <span className="font-serif text-base font-bold text-gold-300">
                I&middot;I
              </span>
              <span className="font-mono text-[8px] tracking-[0.14em] text-slate-400">
                ESG IMPACT
              </span>
            </div>
          </div>

          <div className="group relative border border-white/15 bg-obsidian-900/85">
            <VertexDots />

            <div className="relative h-64 overflow-hidden border-b border-white/15 sm:h-80">
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1600&q=85"
                alt="Generational Impact Across Africa"
                className="h-full w-full object-cover object-center brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-transparent to-transparent" />
            </div>

            <div className="flex flex-col items-start justify-between gap-8 p-8 sm:p-12 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <h2 className="font-display text-xl font-bold tracking-[0.22em] text-white uppercase sm:text-3xl">
                  {lang === 'en'
                    ? 'CORPORATE & SOVEREIGN RESPONSIBILITY'
                    : 'RESPONSABILITÉ SOUVERAINE & SOCIÉTALE'}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {lang === 'en'
                    ? 'Every mandate structured by IMAAD Financial Group is evaluated not only by its financial bankability, but by its generational impact on communities, human capital, and climate resilience:'
                    : 'Chaque mandat structuré par IMAAD Financial Group est évalué non seulement selon sa bancabilité financière, mais aussi selon son impact générationnel sur les populations :'}
                </p>

                <ul className="mt-5 space-y-3">
                  <li className="flex items-center gap-4 text-sm font-semibold text-white">
                    <span className="h-2.5 w-2.5 shrink-0 rotate-45 bg-sapphire-400 shadow-[0_0_10px_#38BDF8]" />
                    <span>
                      {lang === 'en'
                        ? 'Contribute to improving living conditions through healthcare, potable water, and transport infrastructure.'
                        : "Contribuer à l'amélioration durable des conditions de vie (santé, eau potable, désenclavement routier)."}
                    </span>
                  </li>
                  <li className="flex items-center gap-4 text-sm font-semibold text-white">
                    <span className="h-2.5 w-2.5 shrink-0 rotate-45 bg-sapphire-400 shadow-[0_0_10px_#38BDF8]" />
                    <span>
                      {lang === 'en'
                        ? 'Enlarge educational, scientific, and industrial prospects for future African generations.'
                        : "Élargir les perspectives éducatives, universitaires et industrielles des générations futures."}
                    </span>
                  </li>
                </ul>
              </div>

              <HudButton variant="sapphire" href="#contact">
                {lang === 'en' ? 'LEARN MORE' : 'EN SAVOIR PLUS'}
              </HudButton>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: THE FUTURE OF IMAAD — INTERACTIVE 3D ISOMETRIC I.M.A.A.D.
          WIREFRAME MATRIX (Inspired by Teyliom's B.U.I.L.D. at 01:05 - 01:13)
      ====================================================================== */}
      <section
        id="imaad-dna"
        className="relative flex min-h-[680px] items-center overflow-hidden border-b border-white/5 py-28"
      >
        {/* 3D WebGL Topographic Particle Wave Background */}
        <DnaMonolithScene activeIndex={activeDnaIdx} />

        <div className="relative z-10 mx-auto w-full max-w-[1360px] px-5 md:px-9">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.88fr_1.12fr]">
            {/* Left Explanation Column */}
            <div>
              <div className="mb-3 inline-flex items-center gap-3 font-mono text-xs tracking-[0.22em] text-gold-400">
                <span className="h-2 w-2 rotate-45 bg-gold-400 shadow-[0_0_10px_#C9A24D]" />
                <span>
                  {lang === 'en'
                    ? 'INSTITUTIONAL DOCTRINE // CODE'
                    : 'DOCTRINE INSTITUTIONNELLE // CODE'}
                </span>
              </div>

              <h2 className="font-display text-2xl font-bold tracking-[0.2em] text-white uppercase sm:text-4xl leading-[1.35]">
                {lang === 'en' ? 'THE FUTURE OF IMAAD' : "L'AVENIR D'IMAAD"}
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                {lang === 'en' ? (
                  <>
                    The foundational idea was to make the{' '}
                    <strong className="text-white">IMAAD Financial Group</strong> brand an
                    architectural benchmark for sovereign trust and financial excellence.
                    This led to the creation of the interactive{' '}
                    <strong className="text-gold-300">I.M.A.A.D.</strong> doctrine.
                  </>
                ) : (
                  <>
                    L&apos;ambition fondatrice est d&apos;ériger{' '}
                    <strong className="text-white">IMAAD Financial Group</strong> en
                    référence continentale de confiance souveraine et d&apos;excellence
                    financière, incarnée par le concept interactif{' '}
                    <strong className="text-gold-300">I.M.A.A.D.</strong>
                  </>
                )}
              </p>

              {/* Active Letter Detailed Specification Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDnaIdx + lang}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 12 }}
                  transition={{ duration: 0.25 }}
                  className="my-7 border-l-2 border-gold-400 bg-gold-500/[0.07] p-5"
                >
                  <div className="font-mono text-xs font-semibold tracking-[0.2em] text-gold-300">
                    0{activeDnaIdx + 1} // {currentDna.letter} &mdash;{' '}
                    {currentDna.word[lang]}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200">
                    {currentDna.fullDescription[lang]}
                  </p>
                </motion.div>
              </AnimatePresence>

              <HudButton
                variant="sapphire"
                onClick={() =>
                  setActiveDnaIdx((prev) => (prev + 1) % DNA_MONOLITHS.length)
                }
              >
                <RefreshCw className="h-3.5 w-3.5" />
                <span>
                  {lang === 'en' ? 'CYCLE I.M.A.A.D. MATRIX' : 'PARCOURIR LA MATRICE'}
                </span>
              </HudButton>
            </div>

            {/* Right Interactive 3D Isometric Wireframe Monoliths: [ I ][ M ][ A ][ A ][ D ] (01:05 - 01:13) */}
            <div className="relative mx-auto h-[380px] w-full max-w-[650px]">
              {/* Floating Callout Box that shifts position & connects via 3D diagonal wireframe projection lines */}
              <motion.div
                animate={{
                  left: `${calloutX}px`,
                  top: `${calloutY}px`,
                }}
                transition={{ type: 'spring', stiffness: 180, damping: 24 }}
                className="group absolute z-30 flex h-[92px] w-[310px] items-center border border-white/30 bg-obsidian-900/95 px-6 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-md"
              >
                <VertexDots />
                <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                  <strong className="mr-1.5 font-display tracking-[0.1em] text-white">
                    {currentDna.word[lang]}
                  </strong>
                  {currentDna.shortCallout[lang]}
                </p>
              </motion.div>

              {/* Dynamic SVG 3D Isometric Projection Lines between Active Cube and Floating Callout Box */}
              <svg
                viewBox="0 0 650 380"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 z-10 hidden h-full w-full sm:block"
              >
                <polygon
                  points={`${cubeXStart},220 ${calloutX},${calloutY + 92} ${
                    calloutX + 310
                  },${calloutY + 92} ${cubeXEnd},220`}
                  fill="rgba(16, 185, 129, 0.05)"
                />
                <line
                  x1={cubeXStart}
                  y1={220}
                  x2={calloutX}
                  y2={calloutY}
                  stroke="rgba(201, 162, 77, 0.42)"
                  strokeWidth="1"
                />
                <line
                  x1={cubeXEnd}
                  y1={220}
                  x2={calloutX + 310}
                  y2={calloutY}
                  stroke="rgba(201, 162, 77, 0.42)"
                  strokeWidth="1"
                />
                <line
                  x1={cubeXStart}
                  y1={340}
                  x2={calloutX}
                  y2={calloutY + 92}
                  stroke="rgba(52, 211, 153, 0.32)"
                  strokeWidth="1"
                />
                <line
                  x1={cubeXEnd}
                  y1={340}
                  x2={calloutX + 310}
                  y2={calloutY + 92}
                  stroke="rgba(52, 211, 153, 0.32)"
                  strokeWidth="1"
                />
              </svg>

              {/* 5 Interactive Wireframe Letter Cubes: [ I ][ M ][ A ][ A ][ D ] */}
              <div className="absolute right-[15px] bottom-[40px] left-[15px] z-20 grid h-[120px] grid-cols-5">
                {DNA_MONOLITHS.map((item, idx) => {
                  const isActive = idx === activeDnaIdx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onMouseEnter={() => {
                        soundEngine.playHover();
                        setActiveDnaIdx(idx);
                      }}
                      onClick={() => {
                        soundEngine.playClick();
                        setActiveDnaIdx(idx);
                      }}
                      className="group relative h-[120px] focus:outline-none"
                    >
                      {/* Back Isometric Extruded Wireframe Face */}
                      <span
                        className={`pointer-events-none absolute inset-0 border transition-all duration-500 ${
                          isActive
                            ? 'translate-x-3 -translate-y-3 border-emerald-400/60 bg-emerald-500/10'
                            : 'border-emerald-500/35 bg-emerald-950/15 group-hover:translate-x-2 group-hover:-translate-y-2'
                        }`}
                      />

                      {/* Connecting 3D Corner Struts when Active */}
                      {isActive && (
                        <svg
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
                        >
                          <line
                            x1="-12"
                            y1="12"
                            x2="12"
                            y2="-12"
                            stroke="#34d399"
                            strokeWidth="1"
                          />
                          <line
                            x1="88"
                            y1="12"
                            x2="112"
                            y2="-12"
                            stroke="#34d399"
                            strokeWidth="1"
                          />
                          <line
                            x1="-12"
                            y1="112"
                            x2="12"
                            y2="88"
                            stroke="#34d399"
                            strokeWidth="1"
                          />
                          <line
                            x1="88"
                            y1="112"
                            x2="112"
                            y2="88"
                            stroke="#34d399"
                            strokeWidth="1"
                          />
                        </svg>
                      )}

                      {/* Front Isometric Extruded Wireframe Face */}
                      <span
                        className={`relative z-10 flex h-full w-full items-center justify-center border transition-all duration-500 ${
                          isActive
                            ? '-translate-x-3.5 translate-y-3.5 border-gold-300 bg-obsidian-800/90 shadow-[0_0_32px_rgba(201,162,77,0.35)]'
                            : 'border-emerald-400/55 bg-obsidian-900/75 group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:border-gold-300'
                        }`}
                      >
                        <VertexDots color={isActive ? 'gold' : 'white'} />
                        <span
                          className={`font-display text-2xl font-bold transition-transform duration-300 ${
                            isActive
                              ? 'scale-110 text-gold-300'
                              : 'text-white group-hover:text-gold-200'
                          }`}
                        >
                          {item.letter}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
