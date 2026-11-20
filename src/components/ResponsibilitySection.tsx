import React from 'react';
import { Language } from '../data/imaadData';
import { VertexDots } from './ui/BlueprintPrimitives';
import { soundEngine } from '../utils/soundEngine';

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
      className="relative border-y border-[#C4BDB0] bg-[#DDD8CE] py-14 text-[#0B1528] sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 md:px-9">
        <div className="group relative border border-[#C4BDB0] bg-[#EAE6DE] shadow-[0_14px_40px_rgba(11,21,40,0.08)]">
          <VertexDots color="gold" />

          {/* Full-width Banner Image */}
          <div className="relative h-52 overflow-hidden border-b border-[#C4BDB0] sm:h-72 lg:h-80">
            <img
              src="/responsibility-banner.jpg"
              alt="Clean Solar Energy and Sustainable Infrastructure"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/35 via-transparent to-transparent" />
          </div>

          <div className="flex flex-col items-start justify-between gap-7 p-6 sm:p-10 lg:flex-row lg:items-end lg:gap-8 lg:p-12">
            <div className="max-w-3xl">
              <h2 className="font-display text-lg font-bold tracking-[0.14em] text-[#0B1528] uppercase sm:text-2xl sm:tracking-[0.18em] lg:text-3xl lg:tracking-[0.2em]">
                {lang === 'en'
                  ? 'CORPORATE & SOVEREIGN RESPONSIBILITY'
                  : 'RESPONSABILITÉ SOUVERAINE & SOCIÉTALE'}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#3A4659] sm:text-base">
                {lang === 'en'
                  ? 'Every mandate structured by IMAAD Financial Group is evaluated not only by its financial bankability, but by its generational impact on communities, human capital, and climate resilience:'
                  : 'Chaque mandat structuré par IMAAD Financial Group est évalué non seulement selon sa bancabilité financière, mais aussi selon son impact générationnel sur les populations :'}
              </p>

              <ul className="mt-5 space-y-3">
                <li className="flex items-start gap-3.5 text-sm font-semibold text-[#0B1528]">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rotate-45 bg-[#B38832]" />
                  <span>
                    {lang === 'en'
                      ? 'Contribute to improving living conditions through healthcare, potable water, and transport infrastructure.'
                      : 'Contribuer à l’amélioration durable des conditions de vie (santé, eau potable, désenclavement routier).'}
                  </span>
                </li>
                <li className="flex items-start gap-3.5 text-sm font-semibold text-[#0B1528]">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rotate-45 bg-[#B38832]" />
                  <span>
                    {lang === 'en'
                      ? 'Enlarge educational, scientific, and industrial prospects for future African generations.'
                      : "Élargir les perspectives éducatives, universitaires et industrielles des générations futures."}
                  </span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                if (onNavigateContact) onNavigateContact();
              }}
              onMouseEnter={() => soundEngine.playHover()}
              className="inline-flex h-11 shrink-0 items-center justify-center rounded bg-[#0B1528] px-7 font-heading text-xs font-bold tracking-[0.18em] text-gold-300 uppercase shadow-[0_8px_22px_rgba(11,21,40,0.18)] transition-all duration-300 hover:bg-[#172847] hover:text-white sm:h-12 sm:px-8"
            >
              {lang === 'en' ? 'LEARN MORE' : 'EN SAVOIR PLUS'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
