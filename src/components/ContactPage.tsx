import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Language } from '../data/imaadData';
import { soundEngine } from '../utils/soundEngine';

interface ContactPageProps {
  lang: Language;
  onBackToHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  lang,
  onBackToHome,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
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
      fullName: '',
      email: '',
      organization: '',
      subject: '',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <div className="min-h-[82vh] bg-white pt-24 pb-16 text-slate-900 sm:pt-32 sm:pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-10 lg:px-16">
        {/* Subtle Back Link */}
        <div className="mb-8 sm:mb-10">
          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              onBackToHome();
            }}
            className="group inline-flex items-center gap-2 font-heading text-xs font-semibold tracking-[0.2em] text-[#C09A4B] uppercase transition-colors hover:text-[#0B1528]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>{lang === 'en' ? 'BACK TO HOMEPAGE' : 'RETOUR À L’ACCUEIL'}</span>
          </button>
        </div>

        {/* Two-Column Contact Layout matching reference */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Intro & Direct Email */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 lg:pt-4"
          >
            <div className="font-serif text-xs font-semibold tracking-[0.18em] text-[#C09A4B] uppercase">
              {lang === 'en' ? "LET'S WORK TOGETHER" : 'TRAVAILLONS ENSEMBLE'}
            </div>

            <h1 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#0B1528] uppercase sm:text-4xl lg:text-[42px]">
              {lang === 'en' ? 'CONTACT US' : 'CONTACTEZ-NOUS'}
            </h1>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-600 sm:text-[15px]">
              {lang === 'en'
                ? 'For any institutional request, strategic partnership or project submission, our team will respond within 48 hours.'
                : 'Pour toute demande institutionnelle, partenariat stratégique ou soumission de projet, notre équipe vous répondra sous 48 heures.'}
            </p>

            {/* E-mail Contact Row */}
            <div className="mt-9 flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#E6DFD1] bg-[#FAF8F3] text-[#C09A4B]">
                <Mail className="h-5 w-5 stroke-[1.6]" />
              </div>
              <div>
                <div className="font-serif text-[10px] font-semibold tracking-[0.18em] text-[#C09A4B] uppercase">
                  E-MAIL
                </div>
                <a
                  href="mailto:infos@imaadholding.com"
                  className="mt-0.5 block break-all sm:break-normal text-sm font-medium text-slate-700 transition-colors hover:text-[#0B1528] sm:text-[15px]"
                >
                  infos@imaadholding.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Send a Request Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="lg:col-span-7"
          >
            <div className="rounded-md border border-[#E6DFD1] bg-[#F7F5F0] p-5 sm:p-8 lg:p-10">
              <h2 className="mb-6 font-serif text-sm font-medium tracking-[0.08em] text-[#0B1528] uppercase sm:text-base">
                {lang === 'en' ? 'SEND A REQUEST' : 'ENVOYER UNE DEMANDE'}
              </h2>

              {submitted ? (
                <div className="rounded-sm border border-[#E6DFD1] bg-white px-6 py-12 text-center">
                  <CheckCircle2 className="mx-auto h-11 w-11 text-[#C09A4B]" />
                  <h3 className="mt-4 font-serif text-lg font-bold tracking-wide text-[#0B1528] uppercase">
                    {lang === 'en' ? 'REQUEST RECEIVED' : 'DEMANDE ENREGISTRÉE'}
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600">
                    {lang === 'en'
                      ? 'Thank you for reaching out to IMAAD Financial Group. Our institutional desk will review your request and respond within 48 hours.'
                      : 'Merci de votre prise de contact avec IMAAD Financial Group. Notre équipe institutionnelle vous répondra sous 48 heures.'}
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-6 rounded-sm bg-[#C09A4B] px-6 py-2.5 font-serif text-xs font-bold tracking-[0.14em] text-[#0B1528] uppercase transition-colors hover:bg-[#b38d3e]"
                  >
                    {lang === 'en' ? 'SEND ANOTHER REQUEST' : 'ENVOYER UNE AUTRE DEMANDE'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Full Name & Email */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                    <div>
                      <label
                        htmlFor="contact-fullname"
                        className="mb-1.5 block text-xs font-semibold text-[#0B1528]"
                      >
                        {lang === 'en' ? 'Full name' : 'Nom complet'}{' '}
                        <span className="text-[#C09A4B]">*</span>
                      </label>
                      <input
                        id="contact-fullname"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder={
                          lang === 'en'
                            ? 'First names and last name'
                            : 'Prénoms et nom'
                        }
                        className="w-full rounded-sm border border-[#DCD6C8] bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 transition-colors focus:border-[#C09A4B] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-1.5 block text-xs font-semibold text-[#0B1528]"
                      >
                        {lang === 'en' ? 'Email' : 'E-mail'}{' '}
                        <span className="text-[#C09A4B]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="E-mail"
                        className="w-full rounded-sm border border-[#DCD6C8] bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 transition-colors focus:border-[#C09A4B] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 2: Organization & Subject */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                    <div>
                      <label
                        htmlFor="contact-org"
                        className="mb-1.5 block text-xs font-semibold text-[#0B1528]"
                      >
                        {lang === 'en' ? 'Organization' : 'Organisation'}
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
                          lang === 'en'
                            ? 'Your organization'
                            : 'Votre organisation'
                        }
                        className="w-full rounded-sm border border-[#DCD6C8] bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 transition-colors focus:border-[#C09A4B] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="mb-1.5 block text-xs font-semibold text-[#0B1528]"
                      >
                        {lang === 'en'
                          ? 'Subject of the request'
                          : 'Objet de la demande'}
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full rounded-sm border border-[#DCD6C8] bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 transition-colors focus:border-[#C09A4B] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-xs font-semibold text-[#0B1528]"
                    >
                      Message
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
                        lang === 'en'
                          ? 'Describe your project or request...'
                          : 'Décrivez votre projet ou votre demande...'
                      }
                      className="w-full resize-y rounded-sm border border-[#DCD6C8] bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 transition-colors focus:border-[#C09A4B] focus:outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      onMouseEnter={() => soundEngine.playHover()}
                      className="w-full cursor-pointer rounded-sm bg-[#C09A4B] py-3.5 font-serif text-xs font-bold tracking-[0.14em] text-[#0B1528] uppercase transition-colors duration-200 hover:bg-[#b38d3e] sm:text-[13px]"
                    >
                      {lang === 'en'
                        ? 'SEND THE REQUEST'
                        : 'ENVOYER LA DEMANDE'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
