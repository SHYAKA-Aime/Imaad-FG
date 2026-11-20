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
import { HudCorners, VertexDots } from './ui/BlueprintPrimitives';
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
  energy: <Zap className="h-4 w-4 text-gold-400" />,
  transport: <Train className="h-4 w-4 text-gold-400" />,
  mining: <Pickaxe className="h-4 w-4 text-gold-400" />,
  education: <GraduationCap className="h-4 w-4 text-gold-400" />,
  realestate: <Building2 className="h-4 w-4 text-gold-400" />,
  healthcare: <HeartPulse className="h-4 w-4 text-gold-400" />,
  water: <Droplets className="h-4 w-4 text-gold-400" />,
  agriculture: <Sprout className="h-4 w-4 text-gold-400" />,
  recycling: <Recycle className="h-4 w-4 text-gold-400" />,
  technology: <Cpu className="h-4 w-4 text-gold-400" />,
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

  // Hero scroll parallax
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroBgY = useTransform(heroScroll, [0, 1], ['0%', '22%']);

  // Approach vertical timeline scroll progress (Teyliom Frame 12–14)
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
        en: 'Multilateral & institutional mobilisation',
        fr: 'Mobilisation multilatérale & institutionnelle',
      },
      desc: {
        en: 'Connecting mandates with DFIs, international banks, export credit agencies and institutional investors.',
        fr: 'Mobilisation des bailleurs multilatéraux, banques internationales, agences de crédit export et investisseurs.',
      },
      image: '/responsibility-banner.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-50">
      {/* =====================================================================
          1. FULL-BLEED SCROLL-PARALLAX SERVICE HERO
      ====================================================================== */}
      <section
        ref={heroRef}
        className="relative overflow-hidden border-b border-white/10 bg-[#0B1528] pt-28 pb-16 sm:pt-36 sm:pb-24"
      >
        {/* Parallax Real Photography Background */}
        {currentSlide && (
          <motion.img
            key={currentSlide.image}
            style={{ y: heroBgY, scale: 1.12 }}
            src={currentSlide.image}
            alt={activeService.title[lang]}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
          />
        )}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(3,5,8,0.82) 0%, rgba(11,21,40,0.78) 55%, #030508 100%)',
          }}
        />
        <div className="blueprint-grid-bg pointer-events-none absolute inset-0 opacity-20" />

        <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-10 lg:px-16">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                onBackToHome();
              }}
              className="group inline-flex items-center gap-2 font-heading text-xs font-semibold tracking-[0.2em] text-[#C9A24D] uppercase transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>{lang === 'en' ? 'BACK TO HOMEPAGE' : 'RETOUR À L’ACCUEIL'}</span>
            </button>

            {/* Quick Service Switcher Tabs */}
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
                    className={`border px-3.5 py-1.5 font-mono text-[10px] font-bold tracking-[0.14em] uppercase transition-all ${
                      isActive
                        ? 'border-gold-400 bg-[#C69C45] text-[#0B1528]'
                        : 'border-white/20 bg-obsidian-950/60 text-slate-300 backdrop-blur-md hover:border-gold-400/60 hover:text-gold-300'
                    }`}
                  >
                    {mod.num} · {mod.badgeDivision[lang]}
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div
            key={activeService.id + lang}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2.5 font-mono text-xs font-bold tracking-[0.24em] text-gold-400 uppercase">
              <span className="h-1.5 w-1.5 rotate-45 bg-gold-400 shadow-[0_0_8px_#C9A24D]" />
              <span>
                {activeService.num} ·{' '}
                {lang === 'en' ? 'AREA OF EXCELLENCE' : 'DOMAINE D’EXCELLENCE'}
              </span>
            </div>
            <h1 className="mt-3 font-serif text-3xl font-bold tracking-tight text-white uppercase sm:text-5xl">
              {activeService.title[lang]}
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
              {activeService.description[lang]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================================
          2. TEYLIOM SPLIT SHOWCASE: INTERACTIVE PHOTO STAGE + SCOPE CHIPS
      ====================================================================== */}
      <section className="border-b border-white/10 bg-obsidian-950 py-14 sm:py-20">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-10 lg:px-16">
          <div className="relative border border-white/15 bg-obsidian-900/65 p-5 sm:p-8 lg:p-12">
            <VertexDots color="gold" />
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Left: Interactive Teyliom Image Carousel */}
              <div className="lg:col-span-6">
                <div className="relative h-[260px] w-full overflow-hidden border border-white/15 bg-obsidian-950 sm:h-[340px]">
                  {currentSlide && (
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentSlide.image}
                        src={currentSlide.image}
                        alt={currentSlide.caption[lang]}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.45 }}
                        className="h-full w-full object-cover"
                      />
                    </AnimatePresence>
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian-950/85 via-transparent to-transparent" />

                  {/* Centered Teyliom Carousel Dots */}
                  <div className="absolute right-0 bottom-4 left-0 flex items-center justify-center gap-2">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        aria-label={lang === 'en' ? `Slide ${idx + 1}` : `Diapositive ${idx + 1}`}
                        onClick={() => {
                          soundEngine.playClick();
                          setSlideIdx(idx);
                        }}
                        className={`h-2.5 w-2.5 rounded-full border transition-all ${
                          idx === slideIdx
                            ? 'scale-110 border-gold-300 bg-gold-400 shadow-[0_0_8px_#C9A24D]'
                            : 'border-white/50 bg-obsidian-950/60 hover:border-gold-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Clean Scannable Intervention Scope Tiles */}
              <div className="lg:col-span-6">
                <div className="font-mono text-[10px] font-bold tracking-[0.22em] text-gold-400 uppercase">
                  {lang === 'en' ? 'SCOPE OF INTERVENTION' : 'CHAMPS D’INTERVENTION'}
                </div>
                <h2 className="mt-2 font-display text-xl font-bold tracking-[0.12em] text-white uppercase sm:text-2xl">
                  {activeService.badgeDivision[lang]}
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {activeService.bullets[lang].map((bullet, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 border border-white/10 border-l-2 border-l-gold-400 bg-obsidian-950/75 p-4"
                    >
                      <span className="font-mono text-[10px] font-bold text-gold-400">
                        0{idx + 1}
                      </span>
                      <span className="text-xs font-medium leading-relaxed text-slate-200">
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
          3. TEYLIOM VERTICAL SCROLL-DRAWN APPROACH TIMELINE (01/03 – 03/03)
      ====================================================================== */}
      <section className="border-b border-white/10 bg-[#060C18] py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-10 lg:px-16">
          <div className="mb-14 text-center">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold tracking-[0.24em] text-gold-400 uppercase">
              <span className="h-1.5 w-1.5 rotate-45 bg-gold-400" />
              <span>{lang === 'en' ? 'METHODOLOGY' : 'MÉTHODOLOGIE'}</span>
            </div>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-[0.16em] text-white uppercase sm:text-3xl">
              {lang === 'en' ? 'OUR APPROACH' : 'NOTRE APPROCHE'}
            </h2>
          </div>

          <div ref={timelineRef} className="relative">
            {/* Animated Vertical Spine Line (Scroll-Drawn Gold Beam) */}
            <div className="pointer-events-none absolute top-0 bottom-0 left-4 w-[1px] bg-white/10 md:left-1/2 md:-translate-x-1/2" />
            <motion.div
              style={{ scaleY: timelineScroll, transformOrigin: 'top' }}
              className="pointer-events-none absolute top-0 bottom-0 left-4 w-[2px] bg-gradient-to-b from-gold-400 via-gold-300 to-sapphire-400 shadow-[0_0_12px_rgba(201,162,77,0.6)] md:left-1/2 md:-translate-x-1/2"
            />

            <div className="space-y-12 sm:space-y-16">
              {approachSteps.map((item, idx) => {
                const isEven = idx % 2 === 1;
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55 }}
                    className="relative grid grid-cols-1 items-center gap-6 pl-12 md:grid-cols-2 md:gap-14 md:pl-0"
                  >
                    {/* Glowing Teyliom Diamond Node on Spine */}
                    <div className="absolute top-6 left-4 flex -translate-x-1/2 items-center justify-center md:top-1/2 md:left-1/2 md:-translate-y-1/2">
                      <div className="flex h-8 w-8 items-center justify-center border border-gold-400/40 bg-obsidian-950 rotate-45">
                        <span className="h-3 w-3 bg-gold-400 shadow-[0_0_12px_#C9A24D]" />
                      </div>
                    </div>

                    {/* Text Side */}
                    <div className={isEven ? 'md:order-2 md:pl-6' : 'md:order-1 md:pr-6 md:text-right'}>
                      <div className="font-mono text-xs font-bold tracking-[0.22em] text-gold-400">
                        {item.step}
                      </div>
                      <h3 className="mt-2 font-display text-lg font-bold tracking-[0.1em] text-white uppercase sm:text-xl">
                        {item.title[lang]}
                      </h3>
                      <p className="mt-2.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
                        {item.desc[lang]}
                      </p>
                    </div>

                    {/* Framed Photo Side */}
                    <div className={isEven ? 'md:order-1 md:pr-6' : 'md:order-2 md:pl-6'}>
                      <div className="relative h-48 overflow-hidden border border-white/15 bg-obsidian-950 sm:h-56">
                        <VertexDots color="gold" />
                        <img
                          src={item.image}
                          alt={item.title[lang]}
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian-950/70 via-transparent to-transparent" />
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
          4. RELATED OFFICIAL BROCHURE PROJECTS + 10 KEY SECTORS + CTA
      ====================================================================== */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-10 lg:px-16">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="font-mono text-[10px] font-semibold tracking-[0.24em] text-gold-400 uppercase">
                {lang === 'en' ? 'KEY PROJECTS' : 'QUELQUES PROJETS'}
              </div>
              <h2 className="mt-1.5 font-display text-2xl font-bold tracking-[0.14em] text-white uppercase sm:text-3xl">
                {activeService.title[lang]}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                onNavigateProjects();
              }}
              className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.16em] text-gold-300 uppercase transition-colors hover:text-white"
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
                className="group relative flex cursor-pointer flex-col justify-between overflow-hidden border border-white/15 bg-obsidian-900/75 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/60"
              >
                <VertexDots color="gold" />
                <div className="relative h-52 overflow-hidden border-b border-white/10">
                  <img
                    src={project.image}
                    alt={project.sector[lang]}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 border border-white/20 bg-obsidian-950/90 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wider text-white uppercase">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                    <span>{project.country[lang]}</span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.18em] text-gold-400 uppercase">
                      {project.sector[lang]}
                    </div>
                    <div className="mt-2 font-serif text-2xl font-bold text-gold-300">
                      {project.amountDisplay[lang]}
                    </div>
                    <p className="mt-2.5 line-clamp-3 text-xs leading-relaxed text-slate-300 sm:text-[13px]">
                      {project.description[lang]}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[10px] font-semibold tracking-[0.16em] text-gold-300/80 uppercase group-hover:text-gold-200">
                    <span>{lang === 'en' ? 'Learn more' : 'En savoir plus'}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* 10 Key Sectors Coverage Strip */}
          <div className="mt-16 border border-white/10 bg-[#0B1528]/80 p-7 sm:p-10">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
              <div className="font-mono text-[10px] font-bold tracking-[0.22em] text-gold-400 uppercase">
                {lang === 'en' ? '10 KEY SECTORS COVERED' : '10 SECTEURS CLÉS COUVERTS'}
              </div>
              <span className="font-mono text-[10px] tracking-[0.16em] text-slate-400 uppercase">
                {lang === 'en' ? '24 SUB-SAHARAN AFRICAN COUNTRIES' : '24 PAYS EN AFRIQUE SUBSAHARIENNE'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              {KEY_SECTORS.map((sector) => (
                <div
                  key={sector.id}
                  className="flex items-center gap-2.5 border border-white/10 bg-obsidian-950/60 px-3.5 py-3 text-xs font-medium text-slate-200"
                >
                  {SECTOR_ICONS[sector.id]}
                  <span>{sector.label[lang]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mandate Consultation CTA */}
          <div className="mt-14 flex flex-col items-center justify-between gap-6 border border-gold-400/35 bg-obsidian-900/90 p-7 sm:flex-row sm:p-10">
            <div>
              <h3 className="font-display text-lg font-bold tracking-[0.12em] text-white uppercase sm:text-xl">
                {lang === 'en'
                  ? `Initiate a ${activeService.badgeDivision.en} mandate`
                  : `Initier un mandat en ${activeService.badgeDivision.fr}`}
              </h3>
              <p className="mt-1.5 text-xs text-slate-300 sm:text-sm">
                {lang === 'en'
                  ? 'Discuss your financing or structuring requirements with our institutional team.'
                  : 'Échangez avec nos équipes sur vos besoins de structuration et de financement.'}
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                onNavigateContact();
              }}
              className="group relative shrink-0 bg-white/[0.05] px-7 py-3 font-heading text-xs font-bold tracking-[0.16em] text-white uppercase transition-all hover:bg-white/[0.1] hover:text-gold-200"
            >
              <HudCorners />
              <span>{lang === 'en' ? 'Contact Us' : 'Nous écrire'}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
