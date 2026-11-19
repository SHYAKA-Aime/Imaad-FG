import React from 'react';
import { motion } from 'framer-motion';
import { Currency, Language } from '../data/imaadData';

interface SovereignMetricsBarProps {
  lang: Language;
  currency: Currency;
}

export const SovereignMetricsBar: React.FC<SovereignMetricsBarProps> = ({
  lang,
  currency,
}) => {
  return (
    <section id="metrics" className="relative z-20 border-y border-[#C4BDB0] bg-[#DDD8CE] text-[#0B1528]">
      {/* Continuous Sovereign Gold Ticker Strip */}
      <div className="overflow-hidden border-b border-[#B8903D]/40 bg-gradient-to-r from-[#A68032] via-[#C9A24D] to-[#A68032] py-2.5 text-[#0B1528]">
        <div className="animate-ticker items-center gap-10 font-display text-[10px] font-bold tracking-[0.26em] uppercase">
          {[...Array(2)].map((_, groupIdx) => (
            <React.Fragment key={groupIdx}>
              <span>SOVEREIGN ADVISORY &amp; STRUCTURING</span>
              <span>&#9670;</span>
              <span>PUBLIC-PRIVATE PARTNERSHIPS (PPP)</span>
              <span>&#9670;</span>
              <span>DEDICATED INVESTMENT FUNDS</span>
              <span>&#9670;</span>
              <span>STRATEGIC INFRASTRUCTURE &amp; CORRIDORS</span>
              <span>&#9670;</span>
              <span>INSTITUTIONAL CAPITAL MOBILIZATION</span>
              <span>&#9670;</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Spacious, Fully-Responsive Key Figures Grid (Medium Warm Stone Mode) */}
      <div className="mx-auto max-w-[1440px] px-5 py-9 sm:px-8 md:px-12 md:py-12">
        <div className="grid grid-cols-2 gap-6 sm:gap-10 lg:grid-cols-4">
          {/* Stat 1: Target Capacity */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-l-2 border-[#B38832] pl-4 sm:pl-5 md:pl-7"
          >
            <span className="block font-mono text-xs text-[#9A7428] font-bold mb-1">+</span>
            <div className="font-heading text-2xl font-bold tracking-wider text-[#0B1528] sm:text-3xl lg:text-4xl">
              {currency === 'FCFA'
                ? lang === 'en'
                  ? '1,000 BN'
                  : '1 000 Mds'
                : '$1.65 BN'}
            </div>
            <div className="mt-2 font-mono text-[10px] font-semibold tracking-[0.16em] text-[#475569] uppercase leading-snug">
              {currency === 'FCFA'
                ? lang === 'en'
                  ? 'FCFA TARGET FINANCING'
                  : 'FCFA CAPACITÉ CIBLE'
                : lang === 'en'
                ? 'USD TARGET FINANCING'
                : 'USD CAPACITÉ CIBLE'}
            </div>
          </motion.div>

          {/* Stat 2: Priority Sectors */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border-l-2 border-[#B38832] pl-4 sm:pl-5 md:pl-7"
          >
            <span className="block font-mono text-xs text-transparent mb-1">•</span>
            <div className="font-heading text-2xl font-bold text-[#0B1528] sm:text-3xl lg:text-4xl">
              +5
            </div>
            <div className="mt-2 font-mono text-[10px] font-semibold tracking-[0.16em] text-[#475569] uppercase leading-snug">
              {lang === 'en' ? 'PRIORITY SECTORS' : 'SECTEURS PRIORITAIRES'}
            </div>
          </motion.div>

          {/* Stat 3: Track Record */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-l-2 border-[#B38832] pl-4 sm:pl-5 md:pl-7"
          >
            <span className="block font-mono text-xs text-transparent mb-1">•</span>
            <div className="font-heading text-2xl font-bold text-[#0B1528] sm:text-3xl lg:text-4xl">
              15+
            </div>
            <div className="mt-2 font-mono text-[10px] font-semibold tracking-[0.16em] text-[#475569] uppercase leading-snug">
              {lang === 'en' ? 'YEARS TRACK RECORD' : "ANNÉES D'EXPÉRIENCE"}
            </div>
          </motion.div>

          {/* Stat 4: Sovereign Hubs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border-l-2 border-[#B38832] pl-4 sm:pl-5 md:pl-7"
          >
            <span className="block font-mono text-xs text-transparent mb-1">•</span>
            <div className="font-heading text-2xl font-bold text-[#0B1528] sm:text-3xl lg:text-4xl">
              7
            </div>
            <div className="mt-2 font-mono text-[10px] font-semibold tracking-[0.16em] text-[#475569] uppercase leading-snug">
              {lang === 'en' ? 'SOVEREIGN HUBS' : 'HUBS SOUVERAINS'}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
