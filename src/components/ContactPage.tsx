import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  CheckCircle2,
  ArrowLeft,
  MapPin,
  Phone,
  ExternalLink,
} from "lucide-react";
import { Language, OFFICIAL_OFFICES } from "../data/imaadData";
import { HudCorners } from "./ui/BlueprintPrimitives";
import { soundEngine } from "../utils/soundEngine";

interface ContactPageProps {
  lang: Language;
  onBackToHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  lang,
  onBackToHome,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEngine.playClick();
    setSubmitted(true);
  };

  const handleReset = () => {
    soundEngine.playClick();
    setFormData({
      fullName: "",
      email: "",
      organization: "",
      subject: "",
      message: "",
    });
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#0E1B2E]">
      {/* =====================================================================
          1. NAVY HEADER BANNER (MATCHES HOME, SERVICES & PROJECTS)
      ====================================================================== */}
      <section className="relative overflow-hidden border-b border-[#F8F6F2]/10 bg-[#0E1B2E] pt-28 pb-16 text-[#F8F6F2] sm:pt-36 sm:pb-20">
        <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-10 lg:px-16">
          <div className="mb-8">
            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                onBackToHome();
              }}
              className="group inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.16em] text-[#C1A258] uppercase transition-colors hover:text-[#F8F6F2]"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>
                {lang === "en" ? "Back to homepage" : "Retour à l’accueil"}
              </span>
            </button>
          </div>

          <div className="max-w-3xl">
            <div className="font-sans text-[11px] font-semibold tracking-[0.22em] text-[#C1A258] uppercase">
              {lang === "en" ? "Contact" : "Contact"}
            </div>
            <h1 className="mt-3 font-serif text-3xl font-medium text-[#F8F6F2] sm:text-5xl">
              {lang === "en" ? "Contact us" : "Contactez-nous"}
            </h1>
            <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-[#D8DDE6] sm:text-base">
              {lang === "en"
                ? "For any institutional request, strategic partnership or project submission, our teams in Kigali and Abidjan respond within 48 hours."
                : "Pour toute demande institutionnelle, partenariat stratégique ou soumission de projet, nos équipes à Kigali et Abidjan vous répondent sous 48 heures."}
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. IVORY CONTACT DESK & OFFICES (#F8F6F2)
      ====================================================================== */}
      <section className="bg-[#F8F6F2] py-16 sm:py-24">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Direct Email & Official Offices */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-5"
            >
              <div className="flex items-center gap-4 border border-[#E5DFD3] bg-[#FFFFFF] p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#E5DFD3] bg-[#F8F6F2] text-[#C1A258]">
                  <Mail className="h-5 w-5 stroke-[1.6]" />
                </div>
                <div>
                  <div className="font-sans text-[10px] font-semibold tracking-[0.18em] text-[#C1A258] uppercase">
                    {lang === "en" ? "Email" : "E-mail"}
                  </div>
                  <a
                    href="mailto:infos@imaadholding.com"
                    className="mt-0.5 block break-all font-sans text-sm font-medium text-[#0E1B2E] transition-colors hover:text-[#C1A258] sm:break-normal sm:text-[15px]"
                  >
                    infos@imaadholding.com
                  </a>
                </div>
              </div>

              <div className="mt-6 space-y-5">
                {OFFICIAL_OFFICES.map((office) => (
                  <div
                    key={office.id}
                    className="border border-[#E5DFD3] border-t-2 border-t-[#C1A258] bg-[#FFFFFF] p-6"
                  >
                    <div className="font-sans text-[10px] font-semibold tracking-[0.18em] text-[#C1A258] uppercase">
                      {office.entityLabel[lang]}
                    </div>
                    <h2 className="mt-1.5 font-serif text-lg font-medium text-[#0E1B2E]">
                      {office.cityCountry[lang]}
                    </h2>
                    <div className="mt-3 flex items-start gap-2.5 font-sans text-xs leading-relaxed text-[#4B586B] sm:text-sm">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C1A258]" />
                      <div>
                        {office.addressLines[lang].map((line, i) => (
                          <div key={i}>{line}</div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#E5DFD3] pt-3">
                      <a
                        href={`tel:${office.phone.replace(/\s+/g, "")}`}
                        className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-[#0E1B2E] transition-colors hover:text-[#C1A258]"
                      >
                        <Phone className="h-3.5 w-3.5 text-[#C1A258]" />
                        <span>{office.phone}</span>
                      </a>
                      <a
                        href={office.mapUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-sans text-[11px] font-semibold tracking-[0.14em] text-[#C1A258] uppercase underline underline-offset-4 transition-colors hover:text-[#0E1B2E]"
                      >
                        <span>
                          {lang === "en" ? "View on map" : "Voir sur la carte"}
                        </span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Institutional Request Form */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="lg:col-span-7"
            >
              <div className="border border-[#E5DFD3] bg-[#FFFFFF] p-6 sm:p-10">
                <div className="font-sans text-[11px] font-semibold tracking-[0.2em] text-[#C1A258] uppercase">
                  {lang === "en"
                    ? "Institutional desk"
                    : "Contact institutionnel"}
                </div>
                <h2 className="mt-1.5 mb-7 font-serif text-2xl font-medium text-[#0E1B2E]">
                  {lang === "en" ? "Send a request" : "Envoyer une demande"}
                </h2>

                {submitted ? (
                  <div className="border border-[#E5DFD3] bg-[#F8F6F2] px-6 py-12 text-center">
                    <CheckCircle2 className="mx-auto h-11 w-11 text-[#C1A258]" />
                    <h3 className="mt-4 font-serif text-xl font-medium text-[#0E1B2E]">
                      {lang === "en"
                        ? "Request received"
                        : "Demande enregistrée"}
                    </h3>
                    <p className="mx-auto mt-2 max-w-md font-sans text-sm leading-relaxed text-[#4B586B]">
                      {lang === "en"
                        ? "Thank you for contacting Imaad Financial Group. Our institutional team will respond within 48 hours."
                        : "Merci de votre prise de contact avec Imaad Financial Group. Notre équipe institutionnelle vous répondra sous 48 heures."}
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="group relative mt-7 inline-flex h-11 items-center justify-center bg-[#0E1B2E] px-7 font-sans text-xs font-semibold tracking-[0.16em] text-[#F8F6F2] uppercase transition-colors hover:bg-[#162744] hover:text-[#C1A258]"
                    >
                      <HudCorners tone="on-navy" />
                      <span>
                        {lang === "en"
                          ? "Send another request"
                          : "Envoyer une autre demande"}
                      </span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-fullname"
                          className="mb-1.5 block font-sans text-xs font-semibold text-[#0E1B2E]"
                        >
                          {lang === "en" ? "Full name" : "Nom complet"}{" "}
                          <span className="text-[#C1A258]">*</span>
                        </label>
                        <input
                          id="contact-fullname"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              fullName: e.target.value,
                            })
                          }
                          placeholder={
                            lang === "en"
                              ? "First name and last name"
                              : "Prénom et nom"
                          }
                          className="w-full border border-[#D4CCC0] bg-[#F8F6F2] px-3.5 py-2.5 font-sans text-sm text-[#0E1B2E] placeholder:text-[#6B7688]/70 transition-colors focus:border-[#C1A258] focus:bg-[#FFFFFF] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="mb-1.5 block font-sans text-xs font-semibold text-[#0E1B2E]"
                        >
                          {lang === "en" ? "Email" : "E-mail"}{" "}
                          <span className="text-[#C1A258]">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder={
                            lang === "en" ? "Email address" : "Adresse e-mail"
                          }
                          className="w-full border border-[#D4CCC0] bg-[#F8F6F2] px-3.5 py-2.5 font-sans text-sm text-[#0E1B2E] placeholder:text-[#6B7688]/70 transition-colors focus:border-[#C1A258] focus:bg-[#FFFFFF] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-org"
                          className="mb-1.5 block font-sans text-xs font-semibold text-[#0E1B2E]"
                        >
                          {lang === "en" ? "Organization" : "Organisation"}
                        </label>
                        <input
                          id="contact-org"
                          type="text"
                          value={formData.organization}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              organization: e.target.value,
                            })
                          }
                          placeholder={
                            lang === "en"
                              ? "Your organization"
                              : "Votre organisation"
                          }
                          className="w-full border border-[#D4CCC0] bg-[#F8F6F2] px-3.5 py-2.5 font-sans text-sm text-[#0E1B2E] placeholder:text-[#6B7688]/70 transition-colors focus:border-[#C1A258] focus:bg-[#FFFFFF] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-subject"
                          className="mb-1.5 block font-sans text-xs font-semibold text-[#0E1B2E]"
                        >
                          {lang === "en"
                            ? "Subject of the request"
                            : "Objet de la demande"}
                        </label>
                        <input
                          id="contact-subject"
                          type="text"
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              subject: e.target.value,
                            })
                          }
                          placeholder={
                            lang === "en"
                              ? "Mandate or inquiry"
                              : "Mandat ou demande"
                          }
                          className="w-full border border-[#D4CCC0] bg-[#F8F6F2] px-3.5 py-2.5 font-sans text-sm text-[#0E1B2E] placeholder:text-[#6B7688]/70 transition-colors focus:border-[#C1A258] focus:bg-[#FFFFFF] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="mb-1.5 block font-sans text-xs font-semibold text-[#0E1B2E]"
                      >
                        Message <span className="text-[#C1A258]">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder={
                          lang === "en"
                            ? "Describe your project or request..."
                            : "Décrivez votre projet ou votre demande..."
                        }
                        className="w-full resize-y border border-[#D4CCC0] bg-[#F8F6F2] px-3.5 py-2.5 font-sans text-sm text-[#0E1B2E] placeholder:text-[#6B7688]/70 transition-colors focus:border-[#C1A258] focus:bg-[#FFFFFF] focus:outline-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        onMouseEnter={() => soundEngine.playHover()}
                        className="group relative inline-flex h-12 w-full cursor-pointer items-center justify-center bg-[#0E1B2E] font-sans text-xs font-semibold tracking-[0.16em] text-[#F8F6F2] uppercase transition-all duration-300 hover:bg-[#162744] hover:text-[#C1A258]"
                      >
                        <HudCorners tone="on-navy" />
                        <span>
                          {lang === "en"
                            ? "Send the request"
                            : "Envoyer la demande"}
                        </span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
