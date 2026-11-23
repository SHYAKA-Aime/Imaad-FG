import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Zap,
  Train,
  Pickaxe,
  GraduationCap,
  Building2,
  HeartPulse,
  Droplets,
  Sprout,
  Recycle,
  Cpu,
} from 'lucide-react';
import {
  EXCELLENCE_MODULES,
  ExcellenceModuleData,
  KEY_SECTORS,
  Language,
  PROJECTS_PORTFOLIO,
  ProjectCardData,
} from '../data/imaadData';
import { HoverBorderTrace, HudCorners } from './ui/BlueprintPrimitives';
import { soundEngine } from '../utils/soundEngine';

interface ServiceDetailPageProps {
  lang: Language;
  serviceId: string;
  onSelectService: (id: string) => void;
  onBackToHome: () => void;
  onInspectProject: (proj: ProjectCardData) => void;
  onNavigateProjects: () => void;
  onNavigateContact: () => void;
}

const SECTOR_ICONS: Record<string, React.ReactNode> = {
  energy: <Zap className="h-4 w-4 text-[#C1A258]" />,
  transport: <Train className="h-4 w-4 text-[#C1A258]" />,
  mining: <Pickaxe className="h-4 w-4 text-[#C1A258]" />,
  education: <GraduationCap className="h-4 w-4 text-[#C1A258]" />,
  realestate: <Building2 className="h-4 w-4 text-[#C1A258]" />,
  healthcare: <HeartPulse className="h-4 w-4 text-[#C1A258]" />,
  water: <Droplets className="h-4 w-4 text-[#C1A258]" />,
  agriculture: <Sprout className="h-4 w-4 text-[#C1A258]" />,
  recycling: <Recycle className="h-4 w-4 text-[#C1A258]" />,
  technology: <Cpu className="h-4 w-4 text-[#C1A258]" />,
};

const MODULE_CATEGORY_MAP: Record<string, string> = {
  'excellence-01': 'sovereign',
  'excellence-02': 'corporate',
  'excellence-03': 'ppp',
};

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  lang,
  serviceId,
  onSelectService,
  onBackToHome,
  onInspectProject,
  onNavigateProjects,
  onNavigateContact,
}) => {
  const activeService: ExcellenceModuleData =
    EXCELLENCE_MODULES.find((m) => m.id === serviceId) || EXCELLENCE_MODULES[0];

  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
    setSlideIdx(0);
  }, [activeService.id]);

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroBgY = useTransform(heroScroll, [0, 1], ['0%', '20%']);

  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: timelineScroll } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 70%'],
  });

  const categoryKey = MODULE_CATEGORY_MAP[activeService.id] || 'sovereign';
  const relatedProjects = PROJECTS_PORTFOLIO.filter(
    (p) => p.category === categoryKey
  );

  const slides = activeService.slides;
  const currentSlide = slides[slideIdx] || slides[0];

  const approachSteps = [
    {
      step: '01 / 03',
      title: {
        en: 'International vision, local execution',
        fr: 'Vision internationale, exécution locale',
      },
      desc: {
        en: 'Global financial standards paired with direct local presence in Kigali, Abidjan and 9 offices.',
        fr: 'Standards financiers internationaux alliés à une présence opérationnelle à Kigali, Abidjan et dans 9 bureaux.',
      },
      image: '/about-architecture.jpg',
    },
    {
      step: '02 / 03',
      title: {
        en: 'Financial and legal engineering',
        fr: 'Ingénierie financière et juridique',
      },
      desc: {
        en: 'Bespoke structuring, bankability optimization, risk allocation and financial modelling.',
        fr: 'Structuration sur mesure, optimisation de la bancabilité, allocation des risques et modélisation financière.',
      },
      image: '/team-banner.jpg',
    },
    {
      step: '03 / 03',
      title: {
        en: 'Multilateral and institutional mobilisation',
        fr: 'Mobilisation multilatérale et institutionnelle',
      },
      desc: {
        en: 'Connecting mandates with DFIs, international banks, export credit agencies and institutional investors.',
        fr: 'Mobilisation des bailleurs multilatéraux, banques internationales, agences de crédit export et investisseurs.',
      },
      image: '/responsibility-banner.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0E1B2E] text-[#F8F6F2]">
      {/* =====================================================================
          1. NAVY PARALLAX SERVICE HERO (#0E1B2E)
      ====================================================================== */}
      <section
        ref={heroRef}
        className="relative overflow-hidden border-b border-[#F8F6F2]/10 bg-[#0E1B2E] pt-28 pb-16 sm:pt-36 sm:pb-24"
      >
        {currentSlide && (
          <motion.img
            key={currentSlide.image}
            style={{ y: heroBgY, scale: 1.1 }}
            src={currentSlide.image}
            alt={activeService.title[lang]}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
          />
        )}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,27,46,0.86) 0%, rgba(17,31,56,0.78) 55%, #0E1B2E 100%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-10 lg:px-16">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                onBackToHome();
              }}
              className="group inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.16em] text-[#C1A258] uppercase transition-colors hover:text-[#F8F6F2]"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>{lang === 'en' ? 'Back to homepage' : 'Retour à l’accueil'}</span>
            </button>

            <div className="flex flex-wrap gap-2">
              {EXCELLENCE_MODULES.map((mod) => {
                const isActive = mod.id === activeService.id;
                return (
                  <button
                    key={mod.id}
                    type="button"
                    onClick={() => {
                      soundEngine.playClick();
                      onSelectService(mod.id);
                    }}
                    className={`border px-4 py-1.5 font-sans text-[11px] font-semibold tracking-[0.14em] uppercase transition-all ${
                      isActive
                        ? 'border-[#C1A258] bg-[#C1A258] text-[#0E1B2E]'
                        : 'border-[#F8F6F2]/20 bg-[#111F38]/75 text-[#D8DDE6] hover:border-[#C1A258] hover:text-[#C1A258]'
                    }`}
                  >
                    {mod.badgeDivision[lang]}
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div
            key={activeService.id + lang}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl"
          >
            <div className="font-sans text-[11px] font-semibold tracking-[0.22em] text-[#C1A258] uppercase">
              {lang === 'en' ? 'Services' : 'Services'}
            </div>
            <h1 className="mt-3 font-serif text-3xl font-medium text-[#F8F6F2] sm:text-5xl leading-tight">
              {activeService.title[lang]}
            </h1>
            <p className="mt-5 font-sans text-sm leading-relaxed text-[#D8DDE6] sm:text-base">
              {activeService.description[lang]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================================
          2. IVORY SCOPE & INTERACTIVE GALLERY (#F8F6F2)
      ====================================================================== */}
      <section className="border-b border-[#E5DFD3] bg-[#F8F6F2] py-16 text-[#0E1B2E] sm:py-24">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-10 lg:px-16">
          <div className="border border-[#E5DFD3] bg-[#FFFFFF] p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Interactive Photo Carousel */}
              <div className="lg:col-span-6">
                <div className="relative h-[260px] w-full overflow-hidden border border-[#E5DFD3] bg-[#0E1B2E] sm:h-[340px]">
                  {currentSlide && (
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentSlide.image}
                        src={currentSlide.image}
                        alt={currentSlide.caption[lang]}
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.45 }}
                        className="h-full w-full object-cover"
                      />
                    </AnimatePresence>
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E1B2E]/65 via-transparent to-transparent" />

                  <div className="absolute right-0 bottom-4 left-0 flex items-center justify-center gap-2">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        aria-label={
                          lang === 'en' ? `Slide ${idx + 1}` : `Diapositive ${idx + 1}`
                        }
                        onClick={() => {
                          soundEngine.playClick();
                          setSlideIdx(idx);
                        }}
                        className={`h-2.5 w-2.5 rounded-full border transition-all ${
                          idx === slideIdx
                            ? 'scale-110 border-[#C1A258] bg-[#C1A258]'
                            : 'border-[#F8F6F2]/60 bg-[#0E1B2E]/60 hover:border-[#C1A258]'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Scope of Intervention */}
              <div className="lg:col-span-6">
                <div className="font-sans text-[11px] font-semibold tracking-[0.22em] text-[#C1A258] uppercase">
                  {lang === 'en' ? 'Scope of intervention' : 'Champs d’intervention'}
                </div>
                <h2 className="mt-2 font-serif text-2xl font-medium text-[#0E1B2E] sm:text-3xl">
                  {activeService.badgeDivision[lang]}
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  {activeService.bullets[lang].map((bullet, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 border border-[#E5DFD3] border-l-2 border-l-[#C1A258] bg-[#F8F6F2] p-4"
                    >
                      <span className="font-sans text-xs font-semibold text-[#C1A258]">
                        0{idx + 1}
                      </span>
                      <span className="font-sans text-xs font-medium leading-relaxed text-[#0E1B2E]">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. NAVY SCROLL-DRAWN APPROACH TIMELINE (#0E1B2E)
      ====================================================================== */}
      <section className="border-b border-[#F8F6F2]/10 bg-[#0E1B2E] py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-10 lg:px-16">
          <div className="mb-14 text-center">
            <div className="font-sans text-[11px] font-semibold tracking-[0.22em] text-[#C1A258] uppercase">
              {lang === 'en' ? 'Methodology' : 'Méthodologie'}
            </div>
            <h2 className="mt-2 font-serif text-2xl font-medium text-[#F8F6F2] sm:text-3xl lg:text-4xl">
              {lang === 'en' ? 'Our approach' : 'Notre approche'}
            </h2>
          </div>

          <div ref={timelineRef} className="relative">
            <div className="pointer-events-none absolute top-0 bottom-0 left-4 w-[1px] bg-[#F8F6F2]/15 md:left-1/2 md:-translate-x-1/2" />
            <motion.div
              style={{ scaleY: timelineScroll, transformOrigin: 'top' }}
              className="pointer-events-none absolute top-0 bottom-0 left-4 w-[1.5px] bg-[#C1A258] md:left-1/2 md:-translate-x-1/2"
            />

            <div className="space-y-12 sm:space-y-16">
              {approachSteps.map((item, idx) => {
                const isEven = idx % 2 === 1;
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.5 }}
                    className="relative grid grid-cols-1 items-center gap-6 pl-12 md:grid-cols-2 md:gap-14 md:pl-0"
                  >
                    <div className="absolute top-6 left-4 flex -translate-x-1/2 items-center justify-center md:top-1/2 md:left-1/2 md:-translate-y-1/2">
                      <div className="flex h-7 w-7 rotate-45 items-center justify-center border border-[#C1A258]/60 bg-[#0E1B2E]">
                        <span className="h-2.5 w-2.5 bg-[#C1A258]" />
                      </div>
                    </div>

                    <div
                      className={
                        isEven
                          ? 'md:order-2 md:pl-6'
                          : 'md:order-1 md:pr-6 md:text-right'
                      }
                    >
                      <div className="font-sans text-xs font-semibold tracking-[0.2em] text-[#C1A258]">
                        {item.step}
                      </div>
                      <h3 className="mt-2 font-serif text-xl font-medium text-[#F8F6F2] sm:text-2xl">
                        {item.title[lang]}
                      </h3>
                      <p className="mt-2.5 font-sans text-sm leading-relaxed text-[#D8DDE6]">
                        {item.desc[lang]}
                      </p>
                    </div>

                    <div className={isEven ? 'md:order-1 md:pr-6' : 'md:order-2 md:pl-6'}>
                      <div className="relative h-48 overflow-hidden border border-[#F8F6F2]/15 bg-[#111F38] sm:h-56">
                        <img
                          src={item.image}
                          alt={item.title[lang]}
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E1B2E]/60 via-transparent to-transparent" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. IVORY RELATED PROJECTS + 10 KEY SECTORS + CTA (#F8F6F2)
      ====================================================================== */}
      <section className="border-b border-[#E5DFD3] bg-[#F8F6F2] py-20 text-[#0E1B2E] sm:py-24">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-10 lg:px-16">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="font-sans text-[11px] font-semibold tracking-[0.22em] text-[#C1A258] uppercase">
                {lang === 'en' ? 'Key projects' : 'Quelques projets'}
              </div>
              <h2 className="mt-1.5 font-serif text-2xl font-medium text-[#0E1B2E] sm:text-3xl">
                {activeService.title[lang]}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                onNavigateProjects();
              }}
              className="inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.16em] text-[#C1A258] uppercase transition-colors hover:text-[#0E1B2E]"
            >
              <span>{lang === 'en' ? 'View all projects' : 'Voir tous les projets'}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
            {relatedProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => {
                  soundEngine.playClick();
                  onInspectProject(project);
                }}
                onMouseEnter={() => soundEngine.playHover()}
                className="group relative flex cursor-pointer flex-col justify-between overflow-hidden border border-[#E5DFD3] bg-[#FFFFFF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(14,27,46,0.1)]"
              >
                <HoverBorderTrace color="gold" />
                <div className="relative h-52 overflow-hidden border-b border-[#E5DFD3]">
                  <img
                    src={project.image}
                    alt={project.sector[lang]}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E1B2E]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 bg-[#0E1B2E]/90 px-3 py-1 font-sans text-[10px] font-semibold tracking-[0.16em] text-[#F8F6F2] uppercase">
                    {project.country[lang]}
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-[#0E1B2E]">
                      {project.sector[lang]}
                    </h3>
                    <div className="mt-1.5 font-serif text-xl font-medium text-[#C1A258]">
                      {project.amountDisplay[lang]}
                    </div>
                    <p className="mt-2.5 line-clamp-3 font-sans text-xs leading-relaxed text-[#4B586B] sm:text-sm">
                      {project.description[lang]}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-[#E5DFD3] pt-4 font-sans text-[11px] font-semibold tracking-[0.16em] text-[#C1A258] uppercase group-hover:text-[#0E1B2E]">
                    <span>{lang === 'en' ? 'Learn more' : 'En savoir plus'}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* 10 Key Sectors Coverage Strip */}
          <div className="mt-16 border border-[#E5DFD3] bg-[#FFFFFF] p-7 sm:p-10">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
              <div className="font-sans text-[11px] font-semibold tracking-[0.22em] text-[#C1A258] uppercase">
                {lang === 'en' ? '10 key sectors covered' : '10 secteurs clés couverts'}
              </div>
              <span className="font-sans text-[11px] font-medium tracking-[0.16em] text-[#6B7688] uppercase">
                {lang === 'en'
                  ? '24 Sub-Saharan African countries'
                  : '24 pays en Afrique subsaharienne'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              {KEY_SECTORS.map((sector) => (
                <div
                  key={sector.id}
                  className="flex items-center gap-2.5 border border-[#E5DFD3] bg-[#F8F6F2] px-3.5 py-3 font-sans text-xs font-medium text-[#0E1B2E]"
                >
                  {SECTOR_ICONS[sector.id]}
                  <span>{sector.label[lang]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Consultation CTA */}
          <div className="mt-12 flex flex-col items-start justify-between gap-6 border border-[#E5DFD3] bg-[#0E1B2E] p-8 text-[#F8F6F2] sm:flex-row sm:items-center sm:p-10">
            <div>
              <h3 className="font-serif text-xl font-medium text-[#F8F6F2] sm:text-2xl">
                {lang === 'en'
                  ? `Initiate a ${activeService.badgeDivision.en} mandate`
                  : `Initier un mandat en ${activeService.badgeDivision.fr}`}
              </h3>
              <p className="mt-2 font-sans text-sm text-[#D8DDE6]">
                {lang === 'en'
                  ? 'Discuss your financing or structuring requirements with our team.'
                  : 'Échangez avec nos équipes sur vos besoins de structuration et de financement.'}
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                onNavigateContact();
              }}
              className="group relative inline-flex h-12 shrink-0 items-center justify-center bg-[#C1A258]/20 px-7 font-sans text-xs font-semibold tracking-[0.16em] text-[#F8F6F2] uppercase transition-all hover:bg-[#C1A258] hover:text-[#0E1B2E]"
            >
              <HudCorners tone="on-navy" />
              <span>{lang === 'en' ? 'Contact us' : 'Nous écrire'}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
