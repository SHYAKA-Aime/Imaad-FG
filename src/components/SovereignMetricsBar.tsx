import React from 'react';
import { motion } from 'framer-motion';
import { Currency, Language } from '../data/imaadData';

interface SovereignMetricsBarProps {
  lang: Language;
  currency: Currency;
}

export const SovereignMetricsBar: React.FC<SovereignMetricsBarProps> = ({
  lang,
}) => {
  const metrics = [
    {
      value: lang === 'fr' ? '+1 Md €' : '+€1 Bn',
      label: lang === 'fr' ? 'Mobilisés depuis 2020' : 'Mobilized since 2020',
    },
    {
      value: '+5',
      label:
        lang === 'fr'
          ? 'Projets PPP finalisés ou en cours'
          : 'PPP projects completed or underway',
    },
    {
      value: lang === 'fr' ? '+3,5 Mds €' : '+€3.5 Bn',
      label:
        lang === 'fr'
          ? 'Portefeuille projets à fin 2026'
          : 'Project portfolio by end of 2026',
    },
    {
      value: '24',
      label:
        lang === 'fr'
          ? 'Pays couverts en Afrique subsaharienne'
          : 'Countries covered in Sub-Saharan Africa',
    },
    {
      value: '9',
      label: lang === 'fr' ? 'Bureaux' : 'Offices',
    },
  ];

  return (
    <section
      id="metrics"
      className="relative z-20 border-y border-[#C4BDB0] bg-[#DDD8CE] text-[#0B1528]"
    >
      {/* Official Brochure Key Figures + 9 Offices (Medium Warm Stone Mode) */}
      <div className="mx-auto max-w-[1440px] px-5 py-9 sm:px-8 md:px-12 md:py-12">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 lg:grid-cols-5">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`border-l-2 border-[#B38832] pl-4 sm:pl-5 ${
                idx === 4 ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              <div className="font-heading text-2xl font-bold tracking-tight text-[#0B1528] sm:text-3xl lg:text-[32px]">
                {metric.value}
              </div>
              <div className="mt-2 font-mono text-[10px] font-semibold tracking-[0.14em] text-[#475569] uppercase leading-snug">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
