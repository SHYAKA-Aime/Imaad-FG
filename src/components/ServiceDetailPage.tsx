import React from 'react';
import { motion } from 'framer-motion';
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
import { VertexDots } from './ui/BlueprintPrimitives';
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

  const categoryKey = MODULE_CATEGORY_MAP[activeService.id] || 'sovereign';
  const relatedProjects = PROJECTS_PORTFOLIO.filter(
    (p) => p.category === categoryKey
  );

  const approachPillars = [
    {
      num: '01',
      title: {
        en: 'International vision, local execution',
        fr: 'Vision internationale, exécution locale',
      },
      desc: {
        en: 'Combining global financial standards with on-the-ground presence across Sub-Saharan Africa.',
        fr: 'Alliance des meilleurs standards financiers internationaux et d’une exécution locale de proximité.',
      },
    },
    {
      num: '02',
      title: {
        en: 'Financial and legal engineering',
        fr: 'Ingénierie financière et juridique',
      },
      desc: {
        en: 'Bespoke structuring, bankability optimization, risk allocation and transaction documentation.',
        fr: 'Structuration sur mesure, optimisation de la bancabilité, allocation des risques et documentation.',
      },
    },
    {
      num: '03',
      title: {
        en: 'Strategic public and private multilateral partnerships',
        fr: 'Partenariats stratégiques multilatéraux publics et privés',
      },
      desc: {
        en: 'Mobilizing multilateral DFIs, international banks, export credit agencies and institutional investors.',
        fr: 'Mobilisation des bailleurs multilatéraux, banques internationales, agences de crédit export et investisseurs.',
      },
    },
  ];

  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-50">
      {/* =====================================================================
          1. SERVICE HERO HEADER + SERVICE SWITCHER
      ====================================================================== */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#0B1528] pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 30% 40%, rgba(201,162,77,0.14) 0%, rgba(11,21,40,0.92) 60%, #0B1528 100%)',
          }}
        />
        <div className="blueprint-grid-bg pointer-events-none absolute inset-0 opacity-20" />

        <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-10 lg:px-16">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 sm:mb-8">
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
                    className={`rounded px-3.5 py-1.5 font-mono text-[10px] font-bold tracking-[0.14em] uppercase transition-all ${
                      isActive
                        ? 'bg-[#C69C45] text-[#0B1528]'
                        : 'border border-white/15 bg-white/[0.03] text-slate-300 hover:border-gold-400/60 hover:text-gold-300'
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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-4xl"
          >
            <div className="font-mono text-xs font-bold tracking-[0.24em] text-gold-400 uppercase">
              {activeService.num} · {lang === 'en' ? 'AREA OF EXCELLENCE' : 'DOMAINE D’EXCELLENCE'}
            </div>
            <h1 className="mt-3 font-serif text-3xl font-bold tracking-tight text-white uppercase sm:text-4xl md:text-5xl">
              {activeService.title[lang]}
            </h1>
            <p className="mt-5 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-300">
              {activeService.dossier.structureNote[lang]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================================
          2. CORE CAPABILITIES & APPROACH (MEDIUM WARM STONE BAND)
      ====================================================================== */}
      <section className="border-b border-[#C4BDB0] bg-[#DDD8CE] py-14 text-[#0B1528] sm:py-20">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left: Service Scope & Capabilities */}
            <div className="border border-[#C4BDB0] bg-[#EAE6DE] p-7 sm:p-10 lg:col-span-6">
              <div className="font-mono text-[10px] font-bold tracking-[0.22em] text-[#9A7428] uppercase">
                {lang === 'en' ? 'SCOPE OF INTERVENTION' : 'CHAMPS D’INTERVENTION'}
              </div>
              <h2 className="mt-2 font-display text-xl font-bold tracking-[0.1em] text-[#0B1528] uppercase sm:text-2xl">
                {activeService.badgeDivision[lang]}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#3A4659]">
                {activeService.description[lang]}
              </p>

              <ul className="mt-6 space-y-3.5">
                {activeService.bullets[lang].map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-[#B38832]" />
                    <span className="text-sm font-medium leading-relaxed text-[#0B1528]">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Our Approach (Brochure Page 7) */}
            <div className="flex flex-col justify-between space-y-4 lg:col-span-6">
              <div className="font-mono text-[10px] font-bold tracking-[0.22em] text-[#9A7428] uppercase">
                {lang === 'en' ? 'OUR APPROACH' : 'NOTRE APPROCHE'}
              </div>
              {approachPillars.map((pillar) => (
                <div
                  key={pillar.num}
                  className="border-l-2 border-[#B38832] bg-[#EAE6DE] p-5 sm:p-6"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-[#9A7428]">
                      {pillar.num}
                    </span>
                    <h3 className="font-heading text-sm font-bold tracking-wide text-[#0B1528] uppercase">
                      {pillar.title[lang]}
                    </h3>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[#3A4659] sm:text-sm">
                    {pillar.desc[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. KEY PROJECTS IN THIS BUSINESS LINE (OFFICIAL BROCHURE PROJECTS)
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
                    <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-[13px]">
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

          {/* 10 Key Sectors Coverage Strip (Brochure Page 13) */}
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
              className="shrink-0 rounded bg-[#C69C45] px-7 py-3 font-heading text-xs font-bold tracking-[0.16em] text-[#0B1528] uppercase transition-all hover:bg-[#d6ad56]"
            >
              {lang === 'en' ? 'Contact Us' : 'Nous écrire'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
