import React from 'react';
import { Language } from '../data/imaadData';
import { HudButton, VertexDots } from './ui/BlueprintPrimitives';

interface ResponsibilitySectionProps {
  lang: Language;
  onNavigateContact?: () => void;
}

export const ResponsibilitySection: React.FC<ResponsibilitySectionProps> = ({
  lang,
  onNavigateContact,
}) => {
  return (
    <section
      id="responsibility"
      className="relative border-b border-white/5 bg-obsidian-950 py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 md:px-9">
        <div className="group relative border border-white/15 bg-obsidian-900/85">
          <VertexDots />

          {/* Full-width Banner Image */}
          <div className="relative h-52 overflow-hidden border-b border-white/15 sm:h-72 lg:h-80">
            <img
              src="/responsibility-banner.jpg"
              alt="Clean Solar Energy and Sustainable Infrastructure"
              className="h-full w-full object-cover object-center brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-transparent to-transparent" />
          </div>

          <div className="flex flex-col items-start justify-between gap-7 p-6 sm:p-10 lg:flex-row lg:items-end lg:gap-8 lg:p-12">
            <div className="max-w-3xl">
              <h2 className="font-display text-lg font-bold tracking-[0.14em] text-white uppercase sm:text-2xl sm:tracking-[0.18em] lg:text-3xl lg:tracking-[0.22em]">
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

            <HudButton
              variant="sapphire"
              onClick={onNavigateContact}
            >
              {lang === 'en' ? 'LEARN MORE' : 'EN SAVOIR PLUS'}
            </HudButton>
          </div>
        </div>
      </div>
    </section>
  );
};
