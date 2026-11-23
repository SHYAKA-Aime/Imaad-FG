import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import {
  ExcellenceModuleData,
  Language,
  NINE_OFFICES_LIST,
  ProjectCardData,
} from "../data/imaadData";
import { HudButton } from "./ui/BlueprintPrimitives";
import { soundEngine } from "../utils/soundEngine";

interface ContactAndFooterProps {
  lang: Language;
  activeDossier: {
    type: "module" | "project" | "submit" | null;
    module?: ExcellenceModuleData;
    project?: ProjectCardData;
  };
  onCloseDossier: () => void;
  onOpenSubmitModal: () => void;
  onNavigateSection?: (targetHash: string) => void;
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
  onNavigateSection,
  onNavigateContact,
  onNavigateTeam,
  onNavigateService,
  onNavigateProjects,
}) => {
  const [modalFormSent, setModalFormSent] = useState(false);

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
      <footer
        id="contact"
        className="border-t border-[#F8F6F2]/10 bg-[#0E1B2E] pt-16 pb-10 text-[#F8F6F2] sm:pt-20"
      >
        <div className="mx-auto max-w-[1360px] px-5 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-10 border-b border-[#F8F6F2]/15 pb-12 sm:grid-cols-2 sm:gap-12 sm:pb-14 lg:grid-cols-[1.35fr_0.85fr_1fr_1.15fr]">
            {/* Col 1: Brand, Email & LinkedIn Only */}
            <div>
              <div className="flex items-center gap-3.5">
                <img
                  src="/logo-imaad.svg"
                  alt="Imaad Financial Group"
                  className="h-11 w-auto object-contain"
                />
                <div>
                  <div className="font-serif text-sm font-semibold tracking-[0.12em] text-[#C1A258]">
                    Imaad Financial Group
                  </div>
                  <div className="mt-0.5 font-sans text-xs text-[#D8DDE6]/80">
                    {lang === "en"
                      ? "Catalyst for sovereignty and sustainable growth"
                      : "Catalyseur de la souveraineté et de la croissance durable"}
                  </div>
                </div>
              </div>

              <a
                href="mailto:infos@imaadholding.com"
                className="mt-5 inline-block font-sans text-sm text-[#F8F6F2] underline underline-offset-4 transition-colors hover:text-[#C1A258]"
              >
                infos@imaadholding.com
              </a>

              {/* LinkedIn Only (per Management feedback) */}
              <div className="mt-6">
                <a
                  href="https://www.linkedin.com/company/104942881/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn — Imaad Financial Group"
                  className="inline-flex items-center gap-2.5 border border-[#F8F6F2]/20 bg-[#111F38] px-4 py-2.5 font-sans text-xs font-semibold tracking-[0.14em] text-[#D8DDE6] uppercase transition-colors hover:border-[#C1A258] hover:text-[#C1A258]"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Col 2: Sitemap */}
            <div>
              <h4 className="mb-5 font-serif text-base font-medium text-[#F8F6F2]">
                {lang === "en" ? "Sitemap" : "Plan du site"}
              </h4>
              <ul className="space-y-2.5 font-sans text-xs text-[#D8DDE6]/80">
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      soundEngine.playClick();
                      if (onNavigateSection) onNavigateSection("#mission");
                    }}
                    className="cursor-pointer text-left transition-colors hover:text-[#C1A258]"
                  >
                    {lang === "en" ? "About us" : "À propos"}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      soundEngine.playClick();
                      if (onNavigateSection)
                        onNavigateSection("#responsibility");
                    }}
                    className="cursor-pointer text-left transition-colors hover:text-[#C1A258]"
                  >
                    {lang === "en"
                      ? "Corporate responsibility"
                      : "Responsabilité sociétale"}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      soundEngine.playClick();
                      if (onNavigateSection) onNavigateSection("#excellence");
                    }}
                    className="cursor-pointer text-left transition-colors hover:text-[#C1A258]"
                  >
                    {lang === "en" ? "Services" : "Services"}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      soundEngine.playClick();
                      if (onNavigateProjects) onNavigateProjects();
                    }}
                    className="cursor-pointer text-left transition-colors hover:text-[#C1A258]"
                  >
                    {lang === "en"
                      ? "Projects and impact"
                      : "Projets et impact"}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      soundEngine.playClick();
                      if (onNavigateTeam) onNavigateTeam();
                    }}
                    className="cursor-pointer text-left transition-colors hover:text-[#C1A258]"
                  >
                    {lang === "en" ? "Team" : "Équipe"}
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <h4 className="mb-5 font-serif text-base font-medium text-[#F8F6F2]">
                {lang === "en" ? "Services" : "Services"}
              </h4>
              <ul className="space-y-2.5 font-sans text-xs text-[#D8DDE6]/80">
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      soundEngine.playClick();
                      if (onNavigateService) onNavigateService("excellence-01");
                    }}
                    className="cursor-pointer text-left transition-colors hover:text-[#C1A258]"
                  >
                    {lang === "en" ? "Sovereign debt" : "Dette souveraine"}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      soundEngine.playClick();
                      if (onNavigateService) onNavigateService("excellence-02");
                    }}
                    className="cursor-pointer text-left transition-colors hover:text-[#C1A258]"
                  >
                    Corporate &amp; Trade Finance
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      soundEngine.playClick();
                      if (onNavigateService) onNavigateService("excellence-03");
                    }}
                    className="cursor-pointer text-left transition-colors hover:text-[#C1A258]"
                  >
                    {lang === "en"
                      ? "Public-private partnerships"
                      : "Partenariats public-privé"}
                  </button>
                </li>
                <li className="pt-1">
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
                    className="cursor-pointer text-left text-[#C1A258] underline underline-offset-4 hover:text-[#F8F6F2]"
                  >
                    {lang === "en" ? "Contact us" : "Nous écrire"}
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 4: 9 Offices */}
            <div>
              <h4 className="mb-5 font-serif text-base font-medium text-[#F8F6F2]">
                {lang === "en" ? "Offices (9)" : "Bureaux (9)"}
              </h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 font-sans text-xs text-[#D8DDE6]">
                {NINE_OFFICES_LIST.map((office) => (
                  <div key={office.en} className="flex items-center gap-2">
                    <span className="h-[1px] w-2 shrink-0 bg-[#C1A258]" />
                    <span>{office[lang]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 font-sans text-xs text-[#9AA6B8]">
            <div>
              &copy; 2026 Imaad Financial Group Ltd &middot; Kigali &middot;
              Abidjan
            </div>
            <div className="flex flex-wrap gap-6">
              <a
                href="mailto:infos@imaadholding.com"
                className="transition-colors hover:text-[#C1A258]"
              >
                infos@imaadholding.com
              </a>
              <span>www.imaadfg.com</span>
            </div>
          </div>
        </div>
      </footer>

      {/* =====================================================================
          INTERACTIVE MANDATE DOSSIER & SUBMISSION MODAL
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
              className="absolute inset-0 bg-[#0E1B2E]/85 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 14 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-[#C1A258]/40 bg-[#111F38] p-6 text-[#F8F6F2] shadow-2xl sm:p-10"
            >
              <div className="mb-6 flex items-center justify-between border-b border-[#F8F6F2]/15 pb-4">
                <span className="font-sans text-[11px] font-semibold tracking-[0.2em] text-[#C1A258] uppercase">
                  {activeDossier.type === "module" && activeDossier.module
                    ? activeDossier.module.dossier.tag[lang]
                    : activeDossier.type === "project" && activeDossier.project
                      ? lang === "en"
                        ? `Mandate dossier · ${activeDossier.project.country[lang]}`
                        : `Dossier de mandat · ${activeDossier.project.country[lang]}`
                      : lang === "en"
                        ? "Mandate submission"
                        : "Soumission de mandat"}
                </span>
                <button
                  type="button"
                  onClick={onCloseDossier}
                  className="inline-flex items-center gap-1.5 border border-[#F8F6F2]/20 px-3 py-1 font-sans text-[11px] font-semibold tracking-[0.14em] text-[#D8DDE6] uppercase transition-colors hover:border-[#C1A258] hover:text-[#C1A258]"
                >
                  <X className="h-3.5 w-3.5" />
                  <span>{lang === "en" ? "Close" : "Fermer"}</span>
                </button>
              </div>

              {activeDossier.type === "module" && activeDossier.module && (
                <div>
                  <h3 className="font-serif text-2xl font-medium text-[#F8F6F2]">
                    {activeDossier.module.title[lang]}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-[#D8DDE6]">
                    {activeDossier.module.dossier.structureNote[lang]}
                  </p>

                  <div className="my-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    {activeDossier.module.dossier.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="border border-[#F8F6F2]/15 bg-[#0E1B2E] p-4"
                      >
                        <span className="block font-sans text-[10px] font-semibold tracking-[0.16em] text-[#C1A258] uppercase">
                          {m.label[lang]}
                        </span>
                        <span className="mt-1 block font-sans text-sm font-medium text-[#F8F6F2]">
                          {m.value[lang]}
                        </span>
                      </div>
                    ))}
                  </div>

                  <HudButton
                    tone="on-navy"
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
                    {lang === "en"
                      ? "Initiate a mandate in this division"
                      : "Soumettre un mandat dans ce pôle"}
                  </HudButton>
                </div>
              )}

              {activeDossier.type === "project" && activeDossier.project && (
                <div>
                  <h3 className="mb-4 font-serif text-2xl font-medium text-[#F8F6F2]">
                    {activeDossier.project.sector[lang]}
                  </h3>

                  <div className="mb-5 h-52 overflow-hidden border border-[#F8F6F2]/15">
                    <img
                      src={activeDossier.project.image}
                      alt={activeDossier.project.sector[lang]}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <p className="font-sans text-sm leading-relaxed text-[#D8DDE6]">
                    {activeDossier.project.description[lang]}
                  </p>

                  <div className="my-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {activeDossier.project.specs.map((s, idx) => (
                      <div
                        key={idx}
                        className="border border-[#F8F6F2]/15 bg-[#0E1B2E] p-3.5"
                      >
                        <span className="block font-sans text-[10px] font-semibold tracking-[0.16em] text-[#C1A258] uppercase">
                          {s.label[lang]}
                        </span>
                        <span className="mt-1 block font-sans text-sm font-medium text-[#F8F6F2]">
                          {s.value[lang]}
                        </span>
                      </div>
                    ))}
                  </div>

                  <HudButton
                    tone="on-navy"
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
                    {lang === "en"
                      ? "Structure a similar project"
                      : "Structurer un projet similaire"}
                  </HudButton>
                </div>
              )}

              {activeDossier.type === "submit" && (
                <div>
                  <h3 className="font-serif text-2xl font-medium text-[#F8F6F2]">
                    {lang === "en"
                      ? "Submit a sovereign or corporate mandate"
                      : "Soumettre un mandat souverain ou corporate"}
                  </h3>
                  <p className="mt-2 mb-6 font-sans text-xs text-[#D8DDE6]/80">
                    {lang === "en"
                      ? "Direct transmission to the Imaad Financial Group Executive Structuring Committee."
                      : "Transmission directe au Comité Exécutif de Structuration d’Imaad Financial Group."}
                  </p>

                  {modalFormSent ? (
                    <div className="py-10 text-center">
                      <CheckCircle2 className="mx-auto mb-3 h-11 w-11 text-[#C1A258]" />
                      <div className="font-serif text-lg font-medium text-[#F8F6F2]">
                        {lang === "en"
                          ? "Mandate transmission confirmed"
                          : "Transmission du mandat confirmée"}
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleModalSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <input
                          type="text"
                          required
                          placeholder={
                            lang === "en"
                              ? "Full name and title *"
                              : "Nom complet et fonction *"
                          }
                          className="w-full border border-[#F8F6F2]/20 bg-[#0E1B2E] px-3.5 py-2.5 font-sans text-xs text-[#F8F6F2] focus:border-[#C1A258] focus:outline-none"
                        />
                        <input
                          type="email"
                          required
                          placeholder={
                            lang === "en"
                              ? "Official email *"
                              : "E-mail officiel *"
                          }
                          className="w-full border border-[#F8F6F2]/20 bg-[#0E1B2E] px-3.5 py-2.5 font-sans text-xs text-[#F8F6F2] focus:border-[#C1A258] focus:outline-none"
                        />
                      </div>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <input
                          type="text"
                          required
                          placeholder={
                            lang === "en"
                              ? "Ministry / Institution / Sponsor *"
                              : "Ministère / Institution / Promoteur *"
                          }
                          className="w-full border border-[#F8F6F2]/20 bg-[#0E1B2E] px-3.5 py-2.5 font-sans text-xs text-[#F8F6F2] focus:border-[#C1A258] focus:outline-none"
                        />
                        <input
                          type="text"
                          required
                          placeholder={
                            lang === "en"
                              ? "Country and target amount (e.g. €100M)"
                              : "Pays et montant cible (ex. 100 M€)"
                          }
                          className="w-full border border-[#F8F6F2]/20 bg-[#0E1B2E] px-3.5 py-2.5 font-sans text-xs text-[#F8F6F2] focus:border-[#C1A258] focus:outline-none"
                        />
                      </div>
                      <textarea
                        rows={4}
                        required
                        placeholder={
                          lang === "en"
                            ? "Executive summary of the project and required structuring role..."
                            : "Résumé exécutif du projet et besoin de structuration..."
                        }
                        className="w-full border border-[#F8F6F2]/20 bg-[#0E1B2E] px-3.5 py-2.5 font-sans text-xs text-[#F8F6F2] focus:border-[#C1A258] focus:outline-none"
                      />
                      <HudButton type="submit" tone="on-navy" fullWidth>
                        {lang === "en"
                          ? "Transmit mandate dossier"
                          : "Transmettre le dossier"}
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
