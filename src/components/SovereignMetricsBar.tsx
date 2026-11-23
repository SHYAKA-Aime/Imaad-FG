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
  // Exact official brochure figures (with "à fin 2026" removed per Management guidance) + 9 Offices
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
      label: lang === 'fr' ? 'Portefeuille de projets' : 'Project portfolio',
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
      className="relative z-20 border-b border-[#E5DFD3] bg-[#F8F6F2] text-[#0E1B2E]"
    >
      <div className="mx-auto max-w-[1360px] px-5 py-12 sm:px-10 md:py-16 lg:px-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className={`border-l border-[#C1A258] pl-5 ${
                idx === 4 ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              <div className="font-serif text-3xl font-medium tracking-tight text-[#0E1B2E] sm:text-[34px]">
                {metric.value}
              </div>
              <div className="mt-2 font-sans text-xs leading-snug text-[#4B586B]">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
