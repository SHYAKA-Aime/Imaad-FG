import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Globe2, Mail, Send, X } from 'lucide-react';
import {
  ExcellenceModuleData,
  Language,
  NINE_OFFICES_LIST,
  ProjectCardData,
  REGIONAL_HUBS,
} from '../data/imaadData';
import { HudButton, VertexDots } from './ui/BlueprintPrimitives';
import { soundEngine } from '../utils/soundEngine';

interface ContactAndFooterProps {
  lang: Language;
  activeDossier: {
    type: 'module' | 'project' | 'submit' | null;
    module?: ExcellenceModuleData;
    project?: ProjectCardData;
  };
  onCloseDossier: () => void;
  onOpenSubmitModal: () => void;
  onNavigateContact?: () => void;
  onNavigateTeam?: () => void;
  onNavigateService?: (serviceId: string) => void;
  onNavigateProjects?: () => void;
}

export const ContactAndFooter: React.FC<ContactAndFooterProps> = ({
  lang,
  activeDossier,
  onCloseDossier,
  onOpenSubmitModal,
  onNavigateContact,
  onNavigateTeam,
  onNavigateService,
  onNavigateProjects,
}) => {
  const [selectedHub, setSelectedHub] = useState(REGIONAL_HUBS[0]);
  const [contactSent, setContactSent] = useState(false);
  const [modalFormSent, setModalFormSent] = useState(false);

  const handleMainContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEngine.playPortalChime();
    setContactSent(true);
    setTimeout(() => setContactSent(false), 6000);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEngine.playPortalChime();
    setModalFormSent(true);
    setTimeout(() => {
      setModalFormSent(false);
      onCloseDossier();
    }, 2600);
  };

  return (
    <>
      <footer id="contact" className="border-t border-white/10 bg-obsidian-950 pt-14 pb-10 sm:pt-20">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 md:px-9">
          <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 sm:gap-12 sm:pb-14 lg:grid-cols-[1.3fr_0.85fr_1fr_1.15fr]">
            {/* Col 1: Brand, Email & Wireframe Socials */}
            <div>
              <div className="flex items-center gap-3.5">
                <img
                  src="/logo-imaad.svg"
                  alt="IMAAD Financial Group"
                  className="h-10 w-auto object-contain drop-shadow-[0_0_12px_rgba(201,162,77,0.3)]"
                />
                <div>
                  <div className="font-display text-xs font-bold tracking-[0.2em] text-gold-300">
                    IMAAD FINANCIAL GROUP
                  </div>
                  <div className="text-xs text-slate-400">
                    {lang === 'en'
                      ? 'Catalyst for sovereignty and sustainable growth'
                      : 'Catalyseur de la souveraineté et de la croissance durable'}
                  </div>
                </div>
              </div>

              <a
                href="mailto:infos@imaadholding.com"
                className="mt-5 inline-block text-sm text-white underline underline-offset-4 transition-colors hover:text-gold-300"
              >
                infos@imaadholding.com
              </a>

              <div className="mt-6">
                <div className="group relative inline-flex border border-white/15">
                  <VertexDots />
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center border-r border-white/15 text-slate-400 transition-colors hover:bg-gold-500/15 hover:text-gold-300"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="X (Twitter)"
                    className="flex h-11 w-11 items-center justify-center border-r border-white/15 text-slate-400 transition-colors hover:bg-gold-500/15 hover:text-gold-300"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="flex h-11 w-11 items-center justify-center text-slate-400 transition-colors hover:bg-gold-500/15 hover:text-gold-300"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Col 2: Sitemap */}
            <div>
              <h4 className="mb-5 font-heading text-sm font-bold text-white">
                {lang === 'en' ? 'Sitemap' : 'Plan du Site'}
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li>
                  <a href="#mission" className="transition-colors hover:text-gold-300">
                    {lang === 'en' ? 'About Us & Mission' : 'À Propos & Mission'}
                  </a>
                </li>
                <li>
                  <a href="#responsibility" className="transition-colors hover:text-gold-300">
                    {lang === 'en' ? 'Corporate Responsibility' : 'Responsabilité Sociétale'}
                  </a>
                </li>
                <li>
                  <a href="#excellence" className="transition-colors hover:text-gold-300">
                    {lang === 'en' ? 'Areas of Excellence' : "Domaines d'Excellence"}
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      soundEngine.playClick();
                      if (onNavigateProjects) onNavigateProjects();
                    }}
                    className="cursor-pointer text-left transition-colors hover:text-gold-300"
                  >
                    {lang === 'en' ? 'Projects & Impact' : 'Projets & Impact'}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      soundEngine.playClick();
                      if (onNavigateTeam) onNavigateTeam();
                    }}
                    className="cursor-pointer text-left transition-colors hover:text-gold-300"
                  >
                    {lang === 'en' ? 'Governance & Team' : 'Gouvernance & Équipe'}
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Areas of Excellence (Exact Brochure Order, linked to dedicated Service Detail pages) */}
            <div>
              <h4 className="mb-5 font-heading text-sm font-bold text-white">
                {lang === 'en' ? 'Areas of Excellence' : 'Domaines d’Excellence'}
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      soundEngine.playClick();
                      if (onNavigateService) onNavigateService('excellence-01');
                    }}
                    className="cursor-pointer text-left transition-colors hover:text-gold-300"
                  >
                    01. {lang === 'en' ? 'Sovereign Debt' : 'Dette Souveraine'}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      soundEngine.playClick();
                      if (onNavigateService) onNavigateService('excellence-02');
                    }}
                    className="cursor-pointer text-left transition-colors hover:text-gold-300"
                  >
                    02. Corporate &amp; Trade Finance
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      soundEngine.playClick();
                      if (onNavigateService) onNavigateService('excellence-03');
                    }}
                    className="cursor-pointer text-left transition-colors hover:text-gold-300"
                  >
                    03. {lang === 'en' ? 'Public-Private Partnerships' : 'Partenariats Public-Privé'}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      soundEngine.playClick();
                      if (onNavigateContact) {
                        onNavigateContact();
                      } else {
                        onOpenSubmitModal();
                      }
                    }}
                    className="cursor-pointer text-left text-gold-300 underline underline-offset-4 hover:text-white"
                  >
                    {lang === 'en' ? 'Submit a Sovereign Mandate' : 'Soumettre un Mandat'}
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 4: 9 Offices Footprint (Clean Text, Zero Emojis) */}
            <div>
              <h4 className="mb-5 font-heading text-sm font-bold text-white">
                {lang === 'en' ? 'Offices (9)' : 'Bureaux (9)'}
              </h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs text-slate-300">
                {NINE_OFFICES_LIST.map((office) => (
                  <div key={office.en} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-400/80" />
                    <span>{office[lang]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Legal & Copyright */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
            <div>&copy; 2026 Imaad Financial Group Ltd &middot; Kigali &middot; Abidjan</div>
            <div className="flex flex-wrap gap-6">
              <a href="mailto:infos@imaadholding.com" className="hover:text-gold-300">
                infos@imaadholding.com
              </a>
              <span className="text-slate-600">www.imaadfg.com</span>
            </div>
          </div>
        </div>
      </footer>

      {/* =====================================================================
          INTERACTIVE MANDATE DOSSIER & PROJECT SUBMISSION MODAL
      ====================================================================== */}
      <AnimatePresence>
        {activeDossier.type && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[3000] flex items-center justify-center p-4 sm:p-6"
          >
            <div
              onClick={onCloseDossier}
              className="absolute inset-0 bg-obsidian-950/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-gold-400/45 bg-obsidian-900 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.9)] sm:p-10"
            >
              <VertexDots color="gold" />

              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-xs tracking-[0.2em] text-gold-300">
                  {activeDossier.type === 'module' && activeDossier.module
                    ? activeDossier.module.dossier.tag
                    : activeDossier.type === 'project' && activeDossier.project
                    ? `MANDATE DOSSIER // ${activeDossier.project.country[lang]}`
                    : 'DIRECT MANDATE DESK // SUBMISSION'}
                </span>
                <button
                  type="button"
                  onClick={onCloseDossier}
                  className="inline-flex items-center gap-1.5 border border-white/15 px-3 py-1 font-mono text-xs text-slate-400 transition-colors hover:border-gold-400 hover:text-gold-300"
                >
                  <X className="h-3.5 w-3.5" />
                  <span>CLOSE</span>
                </button>
              </div>

              {/* CASE 1: EXCELLENCE DIVISION DOSSIER */}
              {activeDossier.type === 'module' && activeDossier.module && (
                <div>
                  <h3 className="font-display text-xl font-bold tracking-[0.18em] text-white sm:text-2xl">
                    {activeDossier.module.title[lang]}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {activeDossier.module.dossier.structureNote[lang]}
                  </p>

                  <div className="my-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    {activeDossier.module.dossier.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="border border-white/10 bg-white/[0.02] p-3.5"
                      >
                        <span className="block font-mono text-[10px] tracking-[0.15em] text-slate-400">
                          {m.label}
                        </span>
                        <span className="mt-1 block font-heading text-sm font-semibold text-gold-200">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <HudButton
                    variant="gold"
                    fullWidth
                    onClick={() => {
                      onCloseDossier();
                      if (onNavigateContact) {
                        onNavigateContact();
                      } else {
                        onOpenSubmitModal();
                      }
                    }}
                  >
                    {lang === 'en'
                      ? 'INITIATE A MANDATE IN THIS DIVISION'
                      : 'SOUMETTRE UN MANDAT DANS CE PÔLE'}
                  </HudButton>
                </div>
              )}

              {/* CASE 2: PROJECT CASE STUDY DOSSIER */}
              {activeDossier.type === 'project' && activeDossier.project && (
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="border border-gold-400/50 bg-gold-500/10 px-2 py-0.5 font-mono text-[11px] font-bold tracking-wider text-gold-300">
                      {activeDossier.project.flag}
                    </span>
                    <h3 className="font-display text-xl font-bold tracking-[0.14em] text-white uppercase">
                      {activeDossier.project.sector[lang]}
                    </h3>
                  </div>

                  <div className="mb-4 h-48 overflow-hidden border border-white/15">
                    <img
                      src={activeDossier.project.image}
                      alt={activeDossier.project.sector[lang]}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <p className="text-sm leading-relaxed text-slate-300">
                    {activeDossier.project.description[lang]}
                  </p>

                  <div className="my-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {activeDossier.project.specs.map((s, idx) => (
                      <div
                        key={idx}
                        className="border border-white/10 bg-white/[0.02] p-3"
                      >
                        <span className="block font-mono text-[10px] tracking-[0.15em] text-slate-400">
                          {s.label[lang]}
                        </span>
                        <span className="mt-1 block font-heading text-sm font-semibold text-gold-300">
                          {s.value[lang]}
                        </span>
                      </div>
                    ))}
                  </div>

                  <HudButton
                    variant="gold"
                    fullWidth
                    onClick={() => {
                      onCloseDossier();
                      if (onNavigateContact) {
                        onNavigateContact();
                      } else {
                        onOpenSubmitModal();
                      }
                    }}
                  >
                    {lang === 'en'
                      ? 'STRUCTURE A SIMILAR PROJECT'
                      : 'STRUCTURER UN PROJET SIMILAIRE'}
                  </HudButton>
                </div>
              )}

              {/* CASE 3: SUBMIT A PROJECT MODAL */}
              {activeDossier.type === 'submit' && (
                <div>
                  <h3 className="font-display text-xl font-bold tracking-[0.18em] text-white">
                    {lang === 'en'
                      ? 'SUBMIT A SOVEREIGN OR CORPORATE MANDATE'
                      : 'SOUMETTRE UN MANDAT SOUVERAIN OU CORPORATE'}
                  </h3>
                  <p className="mt-2 mb-6 text-xs text-slate-400">
                    {lang === 'en'
                      ? 'Direct transmission to the IMAAD Financial Group Executive Structuring Committee.'
                      : "Transmission directe au Comité Exécutif de Structuration d'IMAAD Financial Group."}
                  </p>

                  {modalFormSent ? (
                    <div className="py-10 text-center">
                      <CheckCircle2 className="mx-auto mb-3 h-12 w-12 text-emerald-400" />
                      <div className="font-display text-sm font-bold tracking-[0.2em] text-gold-300">
                        {lang === 'en'
                          ? 'MANDATE TRANSMISSION CONFIRMED'
                          : 'TRANSMISSION DU MANDAT CONFIRMÉE'}
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleModalSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <input
                          type="text"
                          required
                          placeholder={lang === 'en' ? 'Full Name & Title *' : 'Nom Complet & Fonction *'}
                          className="w-full border border-white/15 bg-obsidian-950 px-3.5 py-2.5 text-xs text-white focus:border-gold-400 focus:outline-none"
                        />
                        <input
                          type="email"
                          required
                          placeholder={lang === 'en' ? 'Official Email *' : 'Email Officiel *'}
                          className="w-full border border-white/15 bg-obsidian-950 px-3.5 py-2.5 text-xs text-white focus:border-gold-400 focus:outline-none"
                        />
                      </div>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <input
                          type="text"
                          required
                          placeholder={
                            lang === 'en'
                              ? 'Ministry / Institution / Sponsor *'
                              : 'Ministère / Institution / Promoteur *'
                          }
                          className="w-full border border-white/15 bg-obsidian-950 px-3.5 py-2.5 text-xs text-white focus:border-gold-400 focus:outline-none"
                        />
                        <input
                          type="text"
                          required
                          placeholder={
                            lang === 'en'
                              ? 'Country & Target Capital (e.g. 100 Bn FCFA)'
                              : 'Pays & Montant Cible (ex. 100 Mds FCFA)'
                          }
                          className="w-full border border-white/15 bg-obsidian-950 px-3.5 py-2.5 text-xs text-white focus:border-gold-400 focus:outline-none"
                        />
                      </div>
                      <textarea
                        rows={4}
                        required
                        placeholder={
                          lang === 'en'
                            ? 'Executive summary of the project, current feasibility stage, and required structuring role...'
                            : 'Résumé exécutif du projet, stade de maturité et besoin de structuration...'
                        }
                        className="w-full border border-white/15 bg-obsidian-950 px-3.5 py-2.5 text-xs text-white focus:border-gold-400 focus:outline-none"
                      />
                      <HudButton type="submit" variant="gold" fullWidth>
                        {lang === 'en'
                          ? 'TRANSMIT MANDATE DOSSIER'
                          : 'TRANSMETTRE LE DOSSIER'}
                      </HudButton>
                    </form>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
