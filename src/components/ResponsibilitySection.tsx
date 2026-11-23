import React from 'react';
import { Language } from '../data/imaadData';
import { HudCorners } from './ui/BlueprintPrimitives';
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
      className="relative border-b border-[#E5DFD3] bg-[#F8F6F2] py-20 text-[#0E1B2E] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1360px] px-5 sm:px-10 lg:px-16">
        <div className="border border-[#E5DFD3] bg-[#F1EDE5]/60">
          {/* Full-width Real Infrastructure Banner */}
          <div className="relative h-56 overflow-hidden border-b border-[#E5DFD3] sm:h-72 lg:h-80">
            <img
              src="/responsibility-banner.jpg"
              alt={
                lang === 'en'
                  ? 'Clean solar energy and sustainable infrastructure'
                  : 'Énergie solaire et infrastructures durables'
              }
              className="h-full w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E1B2E]/30 via-transparent to-transparent" />
          </div>

          <div className="flex flex-col items-start justify-between gap-8 p-7 sm:p-10 lg:flex-row lg:items-end lg:p-12">
            <div className="max-w-3xl">
              <div className="mb-3 font-sans text-[11px] font-semibold tracking-[0.22em] text-[#C1A258] uppercase">
                {lang === 'en' ? 'Responsibility' : 'Responsabilité'}
              </div>

              <h2 className="font-serif text-2xl font-medium text-[#0E1B2E] sm:text-3xl lg:text-4xl leading-snug">
                {lang === 'en'
                  ? 'Corporate and sovereign responsibility'
                  : 'Responsabilité souveraine et sociétale'}
              </h2>

              <p className="mt-4 font-sans text-sm leading-relaxed text-[#3D4B5E] sm:text-base">
                {lang === 'en'
                  ? 'Every mandate structured by Imaad Financial Group is evaluated on its financial bankability and its measurable impact on communities and climate resilience:'
                  : 'Chaque mandat structuré par Imaad Financial Group est évalué selon sa bancabilité financière et son impact mesurable sur les populations et la résilience climatique :'}
              </p>

              <ul className="mt-5 space-y-3">
                <li className="flex items-start gap-3.5 font-sans text-sm font-medium text-[#0E1B2E]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-[#C1A258]" />
                  <span>
                    {lang === 'en'
                      ? 'Contribute to improving living conditions through healthcare, potable water, and transport infrastructure.'
                      : 'Contribuer à l’amélioration durable des conditions de vie (santé, eau potable, désenclavement routier).'}
                  </span>
                </li>
                <li className="flex items-start gap-3.5 font-sans text-sm font-medium text-[#0E1B2E]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-[#C1A258]" />
                  <span>
                    {lang === 'en'
                      ? 'Expand educational, scientific, and industrial prospects for future generations.'
                      : 'Élargir les perspectives éducatives, universitaires et industrielles des générations futures.'}
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
              className="group relative inline-flex h-12 shrink-0 items-center justify-center bg-[#0E1B2E] px-7 font-sans text-xs font-semibold tracking-[0.16em] text-[#F8F6F2] uppercase transition-all duration-300 hover:bg-[#162744] hover:text-[#C1A258]"
            >
              <HudCorners tone="on-navy" />
              <span>{lang === 'en' ? 'Learn more' : 'En savoir plus'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
