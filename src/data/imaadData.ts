export type Language = 'en' | 'fr';
export type Currency = 'FCFA' | 'USD';

export interface HeroSlideData {
  id: number;
  tabLabel: { en: string; fr: string };
  eyebrow: { en: string; fr: string };
  line1: { en: string; fr: string };
  lineGold: { en: string; fr: string };
  line3: { en: string; fr: string };
  description: { en: string; fr: string };
  image: string;
  coordinates: string;
  isBioSlide?: boolean;
  durationMs?: number;
}

export interface ExcellenceModuleData {
  id: string;
  num: string;
  badgeDivision: { en: string; fr: string };
  accentColor: 'gold' | 'sapphire' | 'emerald';
  reverse?: boolean;
  title: { en: string; fr: string };
  description: { en: string; fr: string };
  bullets: { en: string[]; fr: string[] };
  slides: {
    image: string;
    caption: { en: string; fr: string };
  }[];
  dossier: {
    tag: string;
    metrics: { label: string; value: string }[];
    structureNote: { en: string; fr: string };
  };
}

export interface ProjectCardData {
  id: string;
  category: 'all' | 'sovereign' | 'corporate' | 'ppp' | string;
  categories?: string[];
  country: { en: string; fr: string };
  flag: string; // Clean ISO country code (no emojis)
  statusTag: { en: string; fr: string };
  sector: { en: string; fr: string };
  amountDisplay: { en: string; fr: string };
  amountFCFA: string;
  amountUSD: string;
  description: { en: string; fr: string };
  metaTag: { en: string; fr: string };
  image: string;
  specs: { label: { en: string; fr: string }; value: { en: string; fr: string } }[];
}

export interface TeamMemberData {
  id: string;
  initials: string;
  name: string;
  role: { en: string; fr: string };
  entity: 'holding' | 'ifesa' | 'ifwca';
  entityLabel: { en: string; fr: string };
  bio?: { en: string; fr: string };
  photo?: string;
}

export interface KeySectorData {
  id: string;
  label: { en: string; fr: string };
}

export interface OfficeLocationData {
  id: string;
  entityLabel: { en: string; fr: string };
  cityCountry: { en: string; fr: string };
  addressLines: { en: string[]; fr: string[] };
  phone: string;
  mapUrl: string;
}

export interface JourneyPeriodData {
  year: string;
  progressPct: number;
  quarters: {
    q: string;
    tag: string;
    title: { en: string; fr: string };
    highlighted?: boolean;
  }[];
  verticalNode: {
    index: string;
    side: 'left' | 'right';
    image: string;
    bullets: { en: string[]; fr: string[] };
  };
}

export interface DnaMonolithData {
  index: number;
  letter: string;
  word: { en: string; fr: string };
  shortCallout: { en: string; fr: string };
  fullDescription: { en: string; fr: string };
  calloutOffset: { x: number; y: number };
}

export const HERO_SLIDES: HeroSlideData[] = [
  {
    id: 0,
    isBioSlide: true,
    durationMs: 16000,
    tabLabel: { en: 'VISION', fr: 'VISION' },
    eyebrow: {
      en: 'MERCHANT BANKING',
      fr: 'BANQUE D’AFFAIRES',
    },
    line1: { en: 'Structuring and Mobilising', fr: 'Structurer et mobiliser' },
    lineGold: { en: 'Capital in the Service', fr: 'des capitaux au service' },
    line3: {
      en: 'of African States and Businesses',
      fr: 'des États et des entreprises africaines',
    },
    description: {
      en: 'Imaad Financial Group advises private clients, institutions, investors and governments on the transactions that build infrastructure, industry and wealth across Sub-Saharan Africa.',
      fr: 'Imaad Financial Group conseille les clients privés, les institutions, les investisseurs et les gouvernements sur les opérations qui bâtissent les infrastructures, l’industrie et la richesse en Afrique subsaharienne.',
    },
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85',
    coordinates: 'KIGALI · ABIDJAN',
  },
  {
    id: 1,
    durationMs: 7000,
    tabLabel: { en: 'SOVEREIGNTY', fr: 'SOUVERAINETÉ' },
    eyebrow: {
      en: 'STRUCTURE · FINANCE · DELIVER',
      fr: 'STRUCTURER · FINANCER · RÉALISER',
    },
    line1: { en: 'ACCELERATING', fr: 'ACCÉLÉRER LA' },
    lineGold: { en: 'FINANCIAL SOVEREIGNTY', fr: 'SOUVERAINETÉ FINANCIÈRE' },
    line3: { en: 'OF AFRICAN STATES', fr: 'DES ÉTATS' },
    description: {
      en: 'Accelerate the financial sovereignty of States, strengthen investment capacities of businesses and build bridges between international capital and high-impact projects.',
      fr: 'Accélérer la souveraineté financière des États, renforcer les capacités d’investissement des entreprises et créer des ponts entre capitaux internationaux et projets à fort impact.',
    },
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85',
    coordinates: 'ABIDJAN',
  },
  {
    id: 2,
    durationMs: 7000,
    tabLabel: { en: 'IMPACT', fr: 'IMPACT' },
    eyebrow: {
      en: 'MEASURABLE RESULTS, A SUSTAINABLE VISION',
      fr: 'DES RÉSULTATS MESURABLES, UNE VISION DURABLE',
    },
    line1: { en: 'MEASURABLE', fr: 'DES RÉSULTATS' },
    lineGold: { en: 'RESULTS', fr: 'MESURABLES' },
    line3: { en: 'A SUSTAINABLE VISION', fr: 'UNE VISION DURABLE' },
    description: {
      en: 'Over €1 billion mobilized since 2020, +5 PPP projects completed or underway, and a project portfolio exceeding €3.5 billion by end of 2026 across 24 Sub-Saharan African countries.',
      fr: 'Plus d’1 milliard € mobilisés depuis 2020, +5 projets PPP finalisés ou en cours et un portefeuille projets de plus de 3,5 milliards € à fin 2026 dans 24 pays couverts en Afrique subsaharienne.',
    },
    image: 'https://images.unsplash.com/photo-1541888946425-d09bb18086f6?auto=format&fit=crop&w=2000&q=85',
    coordinates: 'KIGALI',
  },
  {
    id: 3,
    durationMs: 7000,
    tabLabel: { en: 'EXCELLENCE', fr: 'EXCELLENCE' },
    eyebrow: {
      en: 'FROM STRATEGY TO STRUCTURED OPERATIONS',
      fr: 'DE LA STRATÉGIE AUX OPÉRATIONS STRUCTURÉES',
    },
    line1: { en: 'INTERNATIONAL VISION', fr: 'VISION INTERNATIONALE' },
    lineGold: { en: 'LOCAL EXECUTION', fr: 'EXÉCUTION LOCALE' },
    line3: { en: 'FINANCIAL & LEGAL ENGINEERING', fr: 'INGÉNIERIE FINANCIÈRE ET JURIDIQUE' },
    description: {
      en: 'Combining international vision with local execution, financial and legal engineering, and strategic public and private multilateral partnerships.',
      fr: 'Allier vision internationale et exécution locale, ingénierie financière et juridique, et partenariats stratégiques multilatéraux publics et privés.',
    },
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2000&q=85',
    coordinates: 'YAOUNDÉ · LONDON',
  },
];

export const STRATEGY_PILLARS = [
  {
    id: '01',
    code: '01',
    region: { en: 'SOVEREIGNTY & LEADERSHIP', fr: 'SOUVERAINETÉ & LEADERSHIP' },
    title: { en: 'Sovereignty', fr: 'Souveraineté' },
    description: {
      en: 'Accelerate the financial sovereignty of States and public institutions through innovative, structured and responsible financing solutions.',
      fr: 'Accélérer la souveraineté financière des États et des institutions publiques à travers des solutions de financement innovantes, structurées et responsables.',
    },
    accent: 'gold' as const,
    bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: '02',
    code: '02',
    region: { en: 'ECONOMIC, SOCIAL & ENVIRONMENTAL', fr: 'IMPACT ÉCONOMIQUE, SOCIAL & ENVIRONNEMENTAL' },
    title: { en: 'Impact', fr: 'Impact' },
    description: {
      en: 'Building bridges between international capital and transformative projects with high economic, social and environmental impact across 10 key sectors.',
      fr: 'Créer des ponts entre capitaux internationaux et projets structurants à fort impact économique, social et environnemental dans 10 secteurs clés.',
    },
    accent: 'sapphire' as const,
    bgImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: '03',
    code: '03',
    region: { en: 'DISCIPLINE & INTEGRITY', fr: 'DISCIPLINE & INTÉGRITÉ' },
    title: { en: 'Excellence', fr: 'Excellence' },
    description: {
      en: 'Excellence, discipline and innovation, integrity and absolute confidentiality, resilience and long-term vision at the service of every mandate.',
      fr: 'Excellence, discipline et innovation, intégrité et confidentialité absolue, résilience et vision long terme au service de chaque mandat.',
    },
    accent: 'gold' as const,
    bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
  },
];

// Exact order & content of services from CEO reference artifact (Screenshot 2):
// A. Sovereign Debt -> B. Corporate & Trade Finance -> C. Public-Private Partnerships
export const EXCELLENCE_MODULES: ExcellenceModuleData[] = [
  {
    id: 'excellence-01',
    num: '01',
    badgeDivision: { en: 'Sovereign Debt', fr: 'Dette Souveraine' },
    accentColor: 'gold',
    reverse: false,
    title: { en: 'SOVEREIGN DEBT', fr: 'DETTE SOUVERAINE' },
    description: {
      en: 'We advise states and public agencies on structuring and managing their borrowing: issuance strategy, Eurobonds, bilateral and multilateral loans, liability management and restructuring, and dialogue with investors and rating agencies.',
      fr: 'Nous conseillons les États et les organismes publics dans la structuration et la gestion de leur endettement : stratégie d’émission, euro-obligations, prêts bilatéraux et multilatéraux, gestion de passif et restructuration, et dialogue avec les investisseurs et agences de notation.',
    },
    bullets: {
      en: [
        'Issuance strategy & Eurobonds',
        'Bilateral, multilateral & concessional loans',
        'Liability management and public debt restructuring',
        'Dialogue with international investors and rating agencies',
      ],
      fr: [
        'Stratégie d’émission et euro-obligations',
        'Prêts bilatéraux, multilatéraux et concessionnels',
        'Gestion de passif et restructuration de la dette publique',
        'Dialogue avec les investisseurs et agences de notation',
      ],
    },
    slides: [
      {
        image: '/projects/infrastructure-routiere.png',
        caption: {
          en: 'Abidjan – San Pedro Road / Côte d’Ivoire (150M€)',
          fr: 'Axe routier Abidjan – San Pedro / Côte d’Ivoire (150 M€)',
        },
      },
    ],
    dossier: {
      tag: 'A · DETTE SOUVERAINE / SOVEREIGN DEBT',
      metrics: [
        { label: 'CÔTE D’IVOIRE', value: 'Axe routier Abidjan – San Pedro · 150 M€' },
        { label: 'CAMEROUN / CAMEROON', value: 'Réseau routier et logistique portuaire · 121 M€' },
        { label: 'NIGÉRIA / NIGERIA', value: 'Réseau de distribution de gaz naturel · 500 M$' },
        { label: 'EXPERTISE', value: 'Eurobonds, prêts multilatéraux & restructuration' },
      ],
      structureNote: {
        en: 'We advise states and public agencies on structuring and managing their borrowing: issuance strategy, Eurobonds, bilateral and multilateral loans, liability management and restructuring, and dialogue with investors and rating agencies.',
        fr: 'Nous conseillons les États et les organismes publics dans la structuration et la gestion de leur endettement : stratégie d’émission, euro-obligations, prêts bilatéraux et multilatéraux, gestion de passif et restructuration, et dialogue avec les investisseurs et agences de notation.',
      },
    },
  },
  {
    id: 'excellence-02',
    num: '02',
    badgeDivision: { en: 'Corporate & Trade Finance', fr: 'Corporate & Trade Finance' },
    accentColor: 'sapphire',
    reverse: true,
    title: { en: 'CORPORATE & TRADE FINANCE', fr: 'CORPORATE & TRADE FINANCE' },
    description: {
      en: 'We help companies finance their growth and their commodity flows: corporate debt, asset- or contract-backed structured finance, trade finance (letters of credit, export pre-financing), working capital, and introductions to lenders and investors.',
      fr: 'Nous accompagnons les entreprises dans le financement de leur croissance et de leurs flux de matières premières : dette corporate, financements structurés adossés à des actifs ou contrats, trade finance (lettres de crédit, préfinancement export), fonds de roulement et mise en relation avec les prêteurs et investisseurs.',
    },
    bullets: {
      en: [
        'Corporate debt (CAPEX & OPEX)',
        'Asset- or contract-backed structured finance',
        'Trade finance (letters of credit, export pre-financing)',
        'Working capital & introductions to lenders and investors',
      ],
      fr: [
        'Dette corporate (CAPEX & OPEX)',
        'Financements structurés adossés à des actifs ou contrats',
        'Trade finance (lettres de crédit, préfinancement export)',
        'Fonds de roulement et mise en relation prêteurs & investisseurs',
      ],
    },
    slides: [
      {
        image: '/projects/immobilier-guinee.png',
        caption: {
          en: 'Real Estate Project / Guinea (10M$)',
          fr: 'Projet immobilier / Guinée (10 M$)',
        },
      },
    ],
    dossier: {
      tag: 'B · CORPORATE & TRADE FINANCE',
      metrics: [
        { label: 'GUINÉE / GUINEA', value: 'Projet immobilier · 10 M$' },
        { label: 'BÉNIN / BENIN', value: 'Vaccins vétérinaires & dispositifs médicaux · 24 M€' },
        { label: 'GUINÉE / GUINEA', value: 'Programme de développement avicole · 5 M$' },
        { label: 'EXPERTISE', value: 'Dette corporate, trade finance & financements structurés' },
      ],
      structureNote: {
        en: 'We help companies finance their growth and their commodity flows: corporate debt, asset- or contract-backed structured finance, trade finance (letters of credit, export pre-financing), working capital, and introductions to lenders and investors.',
        fr: 'Nous accompagnons les entreprises dans le financement de leur croissance et de leurs flux de matières premières : dette corporate, financements structurés adossés à des actifs ou contrats, trade finance (lettres de crédit, préfinancement export), fonds de roulement et mise en relation avec les prêteurs et investisseurs.',
      },
    },
  },
  {
    id: 'excellence-03',
    num: '03',
    badgeDivision: { en: 'Public-Private Partnerships', fr: 'Partenariats Public-Privé' },
    accentColor: 'gold',
    reverse: false,
    title: {
      en: 'PUBLIC-PRIVATE PARTNERSHIPS',
      fr: 'PARTENARIATS PUBLIC-PRIVÉ',
    },
    description: {
      en: 'We build infrastructure projects with public authorities: legal and financial structuring of concessions and BOT schemes, risk allocation, financial modelling, and mobilisation of lenders and investors until financial close.',
      fr: 'Nous construisons des projets d’infrastructures avec les autorités publiques : structuration juridique et financière de concessions et de schémas BOT, allocation des risques, modélisation financière et mobilisation des prêteurs et investisseurs jusqu’au bouclage financier.',
    },
    bullets: {
      en: [
        'Legal and financial structuring of concessions and BOT schemes',
        'Risk allocation and bankability optimization',
        'Financial modelling',
        'Mobilisation of lenders and investors until financial close',
      ],
      fr: [
        'Structuration juridique et financière de concessions et schémas BOT',
        'Allocation des risques et optimisation de la bancabilité',
        'Modélisation financière',
        'Mobilisation des prêteurs et investisseurs jusqu’au bouclage financier',
      ],
    },
    slides: [
      {
        image: '/projects/real-estate-cameroon.jpeg',
        caption: {
          en: 'Housing Program / Cameroon (100M€)',
          fr: 'Programme de Logements / Cameroun (100 M€)',
        },
      },
    ],
    dossier: {
      tag: 'C · PARTENARIATS PUBLIC-PRIVÉ / PUBLIC-PRIVATE PARTNERSHIPS',
      metrics: [
        { label: 'CÔTE D’IVOIRE', value: 'Gare Routière Inter-Urbaine d’Abidjan · 112 M€' },
        { label: 'CAMEROUN / CAMEROON', value: 'Programme de Logements · 100 M€' },
        { label: 'CÔTE D’IVOIRE', value: 'Bacs de stockage de produits pétroliers · 600 M€' },
        { label: 'PORTEFEUILLE', value: '+5 projets PPP finalisés ou en cours' },
      ],
      structureNote: {
        en: 'We build infrastructure projects with public authorities: legal and financial structuring of concessions and BOT schemes, risk allocation, financial modelling, and mobilisation of lenders and investors until financial close.',
        fr: 'Nous construisons des projets d’infrastructures avec les autorités publiques : structuration juridique et financière de concessions et de schémas BOT, allocation des risques, modélisation financière et mobilisation des prêteurs et investisseurs jusqu’au bouclage financier.',
      },
    },
  },
];

export const WHO_WE_SERVE: { en: string; fr: string }[] = [
  { en: 'Private clients', fr: 'Clients privés' },
  { en: 'Institutions', fr: 'Institutions' },
  { en: 'Investors', fr: 'Investisseurs' },
  { en: 'Governments', fr: 'Gouvernements' },
];

// Strictly the 9 official projects from the IMAAD Financial Group Brochure (Pages 9, 10, 11)
// No emojis, no "Closed" / "Closing" status
export const PROJECTS_PORTFOLIO: ProjectCardData[] = [
  // --- 1. SOVEREIGN FINANCING (Page 9) ---
  {
    id: 'proj-ci-road',
    category: 'sovereign',
    categories: ['sovereign'],
    country: { en: 'Côte d’Ivoire', fr: 'Côte d’Ivoire' },
    flag: 'CI',
    statusTag: { en: 'Sovereign Financing', fr: 'Financement Souverain' },
    sector: { en: 'Transport & Road Infrastructure', fr: 'Infrastructures Routières' },
    amountDisplay: { en: '150M€', fr: '150 M€' },
    amountFCFA: '150 M€',
    amountUSD: '150M€',
    description: {
      en: 'Abidjan – San Pedro Road: structuring and mobilizing sovereign financing for this strategic national transport corridor.',
      fr: 'Axe routier Abidjan – San Pedro : structuration et mobilisation de financements souverains pour cet axe stratégique national.',
    },
    metaTag: {
      en: 'Abidjan – San Pedro Road · Sovereign Financing',
      fr: 'Axe routier Abidjan – San Pedro · Financement Souverain',
    },
    image: '/projects/infrastructure-routiere.png',
    specs: [
      { label: { en: 'COUNTRY', fr: 'PAYS' }, value: { en: 'Côte d’Ivoire', fr: 'Côte d’Ivoire' } },
      { label: { en: 'AMOUNT', fr: 'MONTANT' }, value: { en: '150M€', fr: '150 M€' } },
      { label: { en: 'BUSINESS LINE', fr: 'MÉTIER' }, value: { en: 'Sovereign Financing', fr: 'Financement Souverain' } },
    ],
  },
  {
    id: 'proj-cm-road-port',
    category: 'sovereign',
    categories: ['sovereign'],
    country: { en: 'Cameroon', fr: 'Cameroun' },
    flag: 'CM',
    statusTag: { en: 'Sovereign Financing', fr: 'Financement Souverain' },
    sector: { en: 'Road & Port Logistics', fr: 'Réseau Routier & Logistique Portuaire' },
    amountDisplay: { en: '121M€', fr: '121 M€' },
    amountFCFA: '121 M€',
    amountUSD: '121M€',
    description: {
      en: 'Road Infrastructure and Port Logistics: sovereign financing mobilized to strengthen road connectivity and port logistics capacity.',
      fr: 'Réseau routier et logistique portuaire : mobilisation de financements souverains pour renforcer la connectivité routière et la logistique portuaire.',
    },
    metaTag: {
      en: 'Road Infrastructure & Port Logistics · Sovereign Financing',
      fr: 'Réseau routier & logistique portuaire · Financement Souverain',
    },
    image: '/projects/logistique-minerais.png',
    specs: [
      { label: { en: 'COUNTRY', fr: 'PAYS' }, value: { en: 'Cameroon', fr: 'Cameroun' } },
      { label: { en: 'AMOUNT', fr: 'MONTANT' }, value: { en: '121M€', fr: '121 M€' } },
      { label: { en: 'BUSINESS LINE', fr: 'MÉTIER' }, value: { en: 'Sovereign Financing', fr: 'Financement Souverain' } },
    ],
  },
  {
    id: 'proj-ng-gas',
    category: 'sovereign',
    categories: ['sovereign'],
    country: { en: 'Nigeria', fr: 'Nigéria' },
    flag: 'NG',
    statusTag: { en: 'Sovereign Financing', fr: 'Financement Souverain' },
    sector: { en: 'Energy & Gas Infrastructure', fr: 'Énergie & Gaz Naturel' },
    amountDisplay: { en: '500M$', fr: '500 M$' },
    amountFCFA: '500 M$',
    amountUSD: '500M$',
    description: {
      en: 'Natural gas distribution network reinforcement: large-scale sovereign energy financing supporting national gas infrastructure.',
      fr: 'Renforcement du réseau de distribution de gaz naturel : financement souverain d’envergure à l’appui des infrastructures gazières nationales.',
    },
    metaTag: {
      en: 'Natural Gas Distribution Network · Sovereign Financing',
      fr: 'Réseau de distribution de gaz naturel · Financement Souverain',
    },
    image: '/projects/industrie-cables-benin.png',
    specs: [
      { label: { en: 'COUNTRY', fr: 'PAYS' }, value: { en: 'Nigeria', fr: 'Nigéria' } },
      { label: { en: 'AMOUNT', fr: 'MONTANT' }, value: { en: '500M$', fr: '500 M$' } },
      { label: { en: 'BUSINESS LINE', fr: 'MÉTIER' }, value: { en: 'Sovereign Financing', fr: 'Financement Souverain' } },
    ],
  },

  // --- 2. CORPORATE & TRADE FINANCE (Page 10) ---
  {
    id: 'proj-gn-re',
    category: 'corporate',
    categories: ['corporate'],
    country: { en: 'Guinea', fr: 'Guinée' },
    flag: 'GN',
    statusTag: { en: 'Corporate & Trade Finance', fr: 'Corporate & Trade Finance' },
    sector: { en: 'Real Estate', fr: 'Immobilier' },
    amountDisplay: { en: '10M$', fr: '10 M$' },
    amountFCFA: '10 M$',
    amountUSD: '10M$',
    description: {
      en: 'Real estate project in Guinea: CAPEX & OPEX fund mobilization structured for a leading private corporate sponsor.',
      fr: 'Projet immobilier en Guinée : mobilisation de fonds CAPEX & OPEX structurée au service d’un acteur privé de référence.',
    },
    metaTag: {
      en: 'Real Estate Project · Corporate & Trade Finance',
      fr: 'Projet immobilier · Corporate & Trade Finance',
    },
    image: '/projects/immobilier-guinee.png',
    specs: [
      { label: { en: 'COUNTRY', fr: 'PAYS' }, value: { en: 'Guinea', fr: 'Guinée' } },
      { label: { en: 'AMOUNT', fr: 'MONTANT' }, value: { en: '10M$', fr: '10 M$' } },
      { label: { en: 'BUSINESS LINE', fr: 'MÉTIER' }, value: { en: 'Corporate & Trade Finance', fr: 'Corporate & Trade Finance' } },
    ],
  },
  {
    id: 'proj-bj-vaccines',
    category: 'corporate',
    categories: ['corporate'],
    country: { en: 'Benin', fr: 'Bénin' },
    flag: 'BJ',
    statusTag: { en: 'Corporate & Trade Finance', fr: 'Corporate & Trade Finance' },
    sector: { en: 'Healthcare & Manufacturing', fr: 'Santé & Industrie Pharmaceutique' },
    amountDisplay: { en: '24M€', fr: '24 M€' },
    amountFCFA: '24 M€',
    amountUSD: '24M€',
    description: {
      en: 'Veterinary Vaccine and Medical Device Manufacturing Project: industrial CAPEX financing reinforcing regional health sovereignty.',
      fr: 'Projet d’unité de production de vaccins vétérinaires et dispositifs médicaux : financement industriel renforçant la souveraineté sanitaire régionale.',
    },
    metaTag: {
      en: 'Veterinary Vaccine & Medical Device Unit · Corporate Finance',
      fr: 'Unité de vaccins vétérinaires & dispositifs médicaux · Corporate',
    },
    image: '/projects/sante-vaccins.png',
    specs: [
      { label: { en: 'COUNTRY', fr: 'PAYS' }, value: { en: 'Benin', fr: 'Bénin' } },
      { label: { en: 'AMOUNT', fr: 'MONTANT' }, value: { en: '24M€', fr: '24 M€' } },
      { label: { en: 'BUSINESS LINE', fr: 'MÉTIER' }, value: { en: 'Corporate & Trade Finance', fr: 'Corporate & Trade Finance' } },
    ],
  },
  {
    id: 'proj-gn-poultry',
    category: 'corporate',
    categories: ['corporate'],
    country: { en: 'Guinea', fr: 'Guinée' },
    flag: 'GN',
    statusTag: { en: 'Corporate & Trade Finance', fr: 'Corporate & Trade Finance' },
    sector: { en: 'Agriculture & Agribusiness', fr: 'Agriculture & Agro-Industrie' },
    amountDisplay: { en: '5M$', fr: '5 M$' },
    amountFCFA: '5 M$',
    amountUSD: '5M$',
    description: {
      en: 'Poultry Development Program: structured corporate financing supporting agro-industrial production and national food security.',
      fr: 'Programme de développement avicole : financement corporate structuré à l’appui de la production agro-industrielle et de la souveraineté alimentaire.',
    },
    metaTag: {
      en: 'Poultry Development Program · Corporate & Trade Finance',
      fr: 'Programme de développement avicole · Corporate & Trade Finance',
    },
    image: '/projects/agriculture-silos-senegal.png',
    specs: [
      { label: { en: 'COUNTRY', fr: 'PAYS' }, value: { en: 'Guinea', fr: 'Guinée' } },
      { label: { en: 'AMOUNT', fr: 'MONTANT' }, value: { en: '5M$', fr: '5 M$' } },
      { label: { en: 'BUSINESS LINE', fr: 'MÉTIER' }, value: { en: 'Corporate & Trade Finance', fr: 'Corporate & Trade Finance' } },
    ],
  },

  // --- 3. PUBLIC-PRIVATE PARTNERSHIPS — PPP (Page 11) ---
  {
    id: 'proj-ci-bus-terminal',
    category: 'ppp',
    categories: ['ppp'],
    country: { en: 'Côte d’Ivoire', fr: 'Côte d’Ivoire' },
    flag: 'CI',
    statusTag: { en: 'Public-Private Partnership (PPP)', fr: 'Partenariat Public-Privé (PPP)' },
    sector: { en: 'Urban & Inter-Urban Transport', fr: 'Transport Inter-Urbain' },
    amountDisplay: { en: '112M€', fr: '112 M€' },
    amountFCFA: '112 M€',
    amountUSD: '112M€',
    description: {
      en: 'Abidjan Inter-Urban Bus Terminal: advisory, structuring and project development delivered within a Public-Private Partnership.',
      fr: 'Gare Routière Inter-Urbaine d’Abidjan : conseil, structuration et développement de projet dans le cadre d’un Partenariat Public-Privé.',
    },
    metaTag: {
      en: 'Abidjan Inter-Urban Bus Terminal · PPP',
      fr: 'Gare Routière Inter-Urbaine d’Abidjan · PPP',
    },
    image: '/projects/hydraulique-abidjan-ivory.png',
    specs: [
      { label: { en: 'COUNTRY', fr: 'PAYS' }, value: { en: 'Côte d’Ivoire', fr: 'Côte d’Ivoire' } },
      { label: { en: 'AMOUNT', fr: 'MONTANT' }, value: { en: '112M€', fr: '112 M€' } },
      { label: { en: 'BUSINESS LINE', fr: 'MÉTIER' }, value: { en: 'Public-Private Partnerships (PPP)', fr: 'Partenariats Public-Privé (PPP)' } },
    ],
  },
  {
    id: 'proj-cm-housing',
    category: 'ppp',
    categories: ['ppp'],
    country: { en: 'Cameroon', fr: 'Cameroun' },
    flag: 'CM',
    statusTag: { en: 'Public-Private Partnership (PPP)', fr: 'Partenariat Public-Privé (PPP)' },
    sector: { en: 'Housing & Urban Development', fr: 'Programme de Logements' },
    amountDisplay: { en: '100M€', fr: '100 M€' },
    amountFCFA: '100 M€',
    amountUSD: '100M€',
    description: {
      en: 'Housing Program in Cameroon: large-scale residential infrastructure structured and developed under a Public-Private Partnership framework.',
      fr: 'Programme de Logements au Cameroun : développement d’infrastructures résidentielles d’envergure structuré dans le cadre d’un Partenariat Public-Privé.',
    },
    metaTag: {
      en: 'Housing Program · PPP',
      fr: 'Programme de Logements · PPP',
    },
    image: '/projects/real-estate-cameroon.jpeg',
    specs: [
      { label: { en: 'COUNTRY', fr: 'PAYS' }, value: { en: 'Cameroon', fr: 'Cameroun' } },
      { label: { en: 'AMOUNT', fr: 'MONTANT' }, value: { en: '100M€', fr: '100 M€' } },
      { label: { en: 'BUSINESS LINE', fr: 'MÉTIER' }, value: { en: 'Public-Private Partnerships (PPP)', fr: 'Partenariats Public-Privé (PPP)' } },
    ],
  },
  {
    id: 'proj-ci-storage',
    category: 'ppp',
    categories: ['ppp'],
    country: { en: 'Côte d’Ivoire', fr: 'Côte d’Ivoire' },
    flag: 'CI',
    statusTag: { en: 'Public-Private Partnership (PPP)', fr: 'Partenariat Public-Privé (PPP)' },
    sector: { en: 'Energy Storage Infrastructure', fr: 'Stockage de Produits Pétroliers' },
    amountDisplay: { en: '600M€', fr: '600 M€' },
    amountFCFA: '600 M€',
    amountUSD: '600M€',
    description: {
      en: 'Construction of petroleum product storage tanks: strategic energy storage infrastructure structured as a flagship Public-Private Partnership.',
      fr: 'Construction de bacs de stockage de produits pétroliers : infrastructure énergétique stratégique structurée en Partenariat Public-Privé.',
    },
    metaTag: {
      en: 'Petroleum Product Storage Tanks · PPP',
      fr: 'Bacs de stockage de produits pétroliers · PPP',
    },
    image: '/projects/immobilier-cite-senegal.png',
    specs: [
      { label: { en: 'COUNTRY', fr: 'PAYS' }, value: { en: 'Côte d’Ivoire', fr: 'Côte d’Ivoire' } },
      { label: { en: 'AMOUNT', fr: 'MONTANT' }, value: { en: '600M€', fr: '600 M€' } },
      { label: { en: 'BUSINESS LINE', fr: 'MÉTIER' }, value: { en: 'Public-Private Partnerships (PPP)', fr: 'Partenariats Public-Privé (PPP)' } },
    ],
  },
];

// Exact 19 Team Members, Titles & Entity Groupings from Chairman & CEO Reference Artifact
export const TEAM_MEMBERS: TeamMemberData[] = [
  // --- Entity 1: Imaad Financial Group (Holding / Rwanda) ---
  {
    id: 'issa-ndiaye',
    initials: 'IN',
    name: 'Issa Mehmet NDIAYE',
    role: {
      en: 'Co-Founder, Group Chairman & CEO',
      fr: 'Co-fondateur, Président-Directeur Général du Groupe',
    },
    entity: 'holding',
    entityLabel: {
      en: 'Imaad Financial Group (Holding / Rwanda)',
      fr: 'Imaad Financial Group (Holding / Rwanda)',
    },
    bio: {
      en: 'Co-founder of Imaad Financial Group and IMAAD Holdings. Background in quantitative finance (algorithmic trading, actuarial mathematics) and commodity markets, working across francophone and anglophone Africa.',
      fr: 'Co-fondateur d’Imaad Financial Group et d’IMAAD Holdings. Parcours en finance quantitative (trading algorithmique, mathématiques actuarielles) et sur les marchés de matières premières, intervenant en Afrique francophone et anglophone.',
    },
  },
  {
    id: 'rym-moulaye-idriss',
    initials: 'RM',
    name: 'Rym MOULAYE IDRISS',
    role: {
      en: 'Co-Founder, Group Executive Director, Head of Business Development',
      fr: 'Co-fondatrice, Directrice Exécutive Groupe, Directrice du Développement Commercial',
    },
    entity: 'holding',
    entityLabel: {
      en: 'Imaad Financial Group (Holding / Rwanda)',
      fr: 'Imaad Financial Group (Holding / Rwanda)',
    },
  },
  {
    id: 'olutobi-osibodu',
    initials: 'OO',
    name: 'Olutobi OSIBODU',
    role: {
      en: 'Co-Founder, Group Executive Director, Head of Investment Banking, Distribution & Portfolio Management',
      fr: 'Co-fondateur, Directeur Exécutif Groupe, Directeur Banque d’Investissement, Distribution & Gestion de Portefeuille',
    },
    entity: 'holding',
    entityLabel: {
      en: 'Imaad Financial Group (Holding / Rwanda)',
      fr: 'Imaad Financial Group (Holding / Rwanda)',
    },
  },
  {
    id: 'ines-umulisa',
    initials: 'IU',
    name: 'Ines UMULISA',
    role: {
      en: 'Group COO / Head of Compliance & Risk Management',
      fr: 'Directrice des Opérations Groupe / Responsable Conformité & Gestion des Risques',
    },
    entity: 'holding',
    entityLabel: {
      en: 'Imaad Financial Group (Holding / Rwanda)',
      fr: 'Imaad Financial Group (Holding / Rwanda)',
    },
  },
  {
    id: 'frederic-wolf',
    initials: 'FW',
    name: 'Frederic WOLF',
    role: {
      en: 'Group Assistant Manager / Administration & Finance',
      fr: 'Adjoint de Direction Groupe / Administration & Finance',
    },
    entity: 'holding',
    entityLabel: {
      en: 'Imaad Financial Group (Holding / Rwanda)',
      fr: 'Imaad Financial Group (Holding / Rwanda)',
    },
  },
  {
    id: 'walid-touahri',
    initials: 'WT',
    name: 'Walid TOUAHRI',
    role: {
      en: 'Financial Analyst / Group Head of AI Integration',
      fr: 'Analyste Financier / Responsable Intégration IA Groupe',
    },
    entity: 'holding',
    entityLabel: {
      en: 'Imaad Financial Group (Holding / Rwanda)',
      fr: 'Imaad Financial Group (Holding / Rwanda)',
    },
  },

  // --- Entity 2: Imaad Financial Eastern & Southern Africa (IFESA / Rwanda) ---
  {
    id: 'abdoul-younoussi',
    initials: 'AY',
    name: 'Abdoul Moumoune YOUNOUSSI',
    role: {
      en: 'Chairman, IFESA',
      fr: 'Président, IFESA',
    },
    entity: 'ifesa',
    entityLabel: {
      en: 'Imaad Financial Eastern & Southern Africa (IFESA / Rwanda)',
      fr: 'Imaad Financial Eastern & Southern Africa (IFESA / Rwanda)',
    },
  },
  {
    id: 'herve-rugwizangoga',
    initials: 'HR',
    name: 'Hervé RUGWIZANGOGA',
    role: {
      en: 'Chief Business Development Officer',
      fr: 'Directeur du Développement Commercial',
    },
    entity: 'ifesa',
    entityLabel: {
      en: 'Imaad Financial Eastern & Southern Africa (IFESA / Rwanda)',
      fr: 'Imaad Financial Eastern & Southern Africa (IFESA / Rwanda)',
    },
  },
  {
    id: 'ange-felix-iradukunda',
    initials: 'AI',
    name: 'Ange Felix de Valois IRADUKUNDA',
    role: {
      en: 'Compliance Manager',
      fr: 'Responsable Conformité',
    },
    entity: 'ifesa',
    entityLabel: {
      en: 'Imaad Financial Eastern & Southern Africa (IFESA / Rwanda)',
      fr: 'Imaad Financial Eastern & Southern Africa (IFESA / Rwanda)',
    },
  },
  {
    id: 'mohamed-yassine',
    initials: 'MY',
    name: 'Mohamed YASSINE',
    role: {
      en: 'Business Developer / Mozambique, Angola, Cape Verde, São Tomé',
      fr: 'Responsable Développement Commercial / Mozambique, Angola, Cap-Vert, São Tomé',
    },
    entity: 'ifesa',
    entityLabel: {
      en: 'Imaad Financial Eastern & Southern Africa (IFESA / Rwanda)',
      fr: 'Imaad Financial Eastern & Southern Africa (IFESA / Rwanda)',
    },
  },

  // --- Entity 3: Imaad Financial Western & Central Africa (IFWCA / Côte d’Ivoire) ---
  {
    id: 'pape-boye-diack-diop',
    initials: 'PD',
    name: 'Pape Boye Diack DIOP',
    role: {
      en: 'Regional Manager, IFWCA',
      fr: 'Directeur Régional, IFWCA',
    },
    entity: 'ifwca',
    entityLabel: {
      en: 'Imaad Financial Western & Central Africa (IFWCA / Côte d’Ivoire)',
      fr: 'Imaad Financial Western & Central Africa (IFWCA / Côte d’Ivoire)',
    },
  },
  {
    id: 'mireille-olivia-atta',
    initials: 'MA',
    name: 'Mireille Olivia ATTA',
    role: {
      en: 'Chief Business Development Manager',
      fr: 'Directrice du Développement Commercial',
    },
    entity: 'ifwca',
    entityLabel: {
      en: 'Imaad Financial Western & Central Africa (IFWCA / Côte d’Ivoire)',
      fr: 'Imaad Financial Western & Central Africa (IFWCA / Côte d’Ivoire)',
    },
  },
  {
    id: 'safietou-camara',
    initials: 'SC',
    name: 'Safietou CAMARA',
    role: {
      en: 'Financial Analyst',
      fr: 'Analyste Financier',
    },
    entity: 'ifwca',
    entityLabel: {
      en: 'Imaad Financial Western & Central Africa (IFWCA / Côte d’Ivoire)',
      fr: 'Imaad Financial Western & Central Africa (IFWCA / Côte d’Ivoire)',
    },
  },
  {
    id: 'korotoum-kone',
    initials: 'KK',
    name: 'Korotoum KONÉ',
    role: {
      en: 'Junior Financial Analyst',
      fr: 'Analyste Financier Junior',
    },
    entity: 'ifwca',
    entityLabel: {
      en: 'Imaad Financial Western & Central Africa (IFWCA / Côte d’Ivoire)',
      fr: 'Imaad Financial Western & Central Africa (IFWCA / Côte d’Ivoire)',
    },
  },
  {
    id: 'maylis-agbahan',
    initials: 'MG',
    name: 'Maylis AGBAHAN',
    role: {
      en: 'Executive Assistant',
      fr: 'Assistante de Direction',
    },
    entity: 'ifwca',
    entityLabel: {
      en: 'Imaad Financial Western & Central Africa (IFWCA / Côte d’Ivoire)',
      fr: 'Imaad Financial Western & Central Africa (IFWCA / Côte d’Ivoire)',
    },
  },
  {
    id: 'mireille-tedjong',
    initials: 'MT',
    name: 'Mireille TEDJONG',
    role: {
      en: 'Business Developer / Cameroon, Gabon',
      fr: 'Responsable Développement Commercial / Cameroun, Gabon',
    },
    entity: 'ifwca',
    entityLabel: {
      en: 'Imaad Financial Western & Central Africa (IFWCA / Côte d’Ivoire)',
      fr: 'Imaad Financial Western & Central Africa (IFWCA / Côte d’Ivoire)',
    },
  },
  {
    id: 'karim-aminou',
    initials: 'KA',
    name: 'Karim AMINOU',
    role: {
      en: 'Business Developer / Cameroon',
      fr: 'Responsable Développement Commercial / Cameroun',
    },
    entity: 'ifwca',
    entityLabel: {
      en: 'Imaad Financial Western & Central Africa (IFWCA / Côte d’Ivoire)',
      fr: 'Imaad Financial Western & Central Africa (IFWCA / Côte d’Ivoire)',
    },
  },
  {
    id: 'henri-tchakoute',
    initials: 'HT',
    name: 'Henri TCHAKOUTE',
    role: {
      en: 'Business Developer / Cameroon',
      fr: 'Responsable Développement Commercial / Cameroun',
    },
    entity: 'ifwca',
    entityLabel: {
      en: 'Imaad Financial Western & Central Africa (IFWCA / Côte d’Ivoire)',
      fr: 'Imaad Financial Western & Central Africa (IFWCA / Côte d’Ivoire)',
    },
  },
  {
    id: 'arthur-tapsoba',
    initials: 'AT',
    name: 'Arthur TAPSOBA',
    role: {
      en: 'Business Developer / Burkina Faso & Côte d’Ivoire',
      fr: 'Responsable Développement Commercial / Burkina Faso & Côte d’Ivoire',
    },
    entity: 'ifwca',
    entityLabel: {
      en: 'Imaad Financial Western & Central Africa (IFWCA / Côte d’Ivoire)',
      fr: 'Imaad Financial Western & Central Africa (IFWCA / Côte d’Ivoire)',
    },
  },
];

// Official 4 Values from Brochure Page 4
export const OFFICIAL_VALUES = [
  {
    num: '01',
    title: {
      en: 'Sovereignty and economic leadership',
      fr: 'Souveraineté et leadership économique',
    },
  },
  {
    num: '02',
    title: {
      en: 'Excellence, discipline and innovation',
      fr: 'Excellence, discipline et innovation',
    },
  },
  {
    num: '03',
    title: {
      en: 'Integrity and absolute confidentiality',
      fr: 'Intégrité et confidentialité absolue',
    },
  },
  {
    num: '04',
    title: {
      en: 'Resilience and long-term vision',
      fr: 'Résilience et vision long terme',
    },
  },
];

// Official 10 Key Sectors from Brochure Page 13
export const KEY_SECTORS: KeySectorData[] = [
  { id: 'energy', label: { en: 'Energy', fr: 'Énergie' } },
  { id: 'transport', label: { en: 'Transport', fr: 'Transport' } },
  { id: 'mining', label: { en: 'Mining', fr: 'Mines' } },
  { id: 'education', label: { en: 'Education', fr: 'Éducation' } },
  { id: 'realestate', label: { en: 'Real Estate', fr: 'Immobilier' } },
  { id: 'healthcare', label: { en: 'Healthcare', fr: 'Santé' } },
  { id: 'water', label: { en: 'Water', fr: 'Eau' } },
  { id: 'agriculture', label: { en: 'Agriculture', fr: 'Agriculture' } },
  { id: 'recycling', label: { en: 'Recycling', fr: 'Recyclage' } },
  { id: 'technology', label: { en: 'Technology', fr: 'Technologie' } },
];

// Primary Offices from Chairman & CEO Reference Artifact (Bilingual Addresses)
export const OFFICIAL_OFFICES: OfficeLocationData[] = [
  {
    id: 'kigali',
    entityLabel: { en: 'Headquarters · Holding & IFESA', fr: 'Siège · Holding & IFESA' },
    cityCountry: { en: 'Kigali, Rwanda', fr: 'Kigali, Rwanda' },
    addressLines: {
      en: ['11 KG 532 ST, Brilliant Tower,', '7th floor, Room 703', 'Kigali, Rwanda'],
      fr: ['11 KG 532 ST, Brilliant Tower,', '7e étage, Room 703', 'Kigali, Rwanda'],
    },
    phone: '+250 780 395 017',
    mapUrl: 'https://maps.google.com/?q=11+KG+532+ST+Brilliant+Tower+Kigali+Rwanda',
  },
  {
    id: 'abidjan',
    entityLabel: { en: 'Regional Office · IFWCA', fr: 'Bureau Régional · IFWCA' },
    cityCountry: { en: 'Abidjan, Côte d’Ivoire', fr: 'Abidjan, Côte d’Ivoire' },
    addressLines: {
      en: [
        'Cocody Riviera Bonoumin,',
        'Immeuble IHBC 2, opposite Collège Charles de Gaulle,',
        '4th floor, Apartment 4A',
        'Abidjan, Côte d’Ivoire',
      ],
      fr: [
        'Cocody Riviera Bonoumin,',
        'Immeuble IHBC 2, face au Collège Charles de Gaulle,',
        '4e étage, Appartement 4A',
        'Abidjan, Côte d’Ivoire',
      ],
    },
    phone: '+225 01 42 81 26 26',
    mapUrl: 'https://maps.google.com/?q=Cocody+Riviera+Bonoumin+Abidjan+Cote+d+Ivoire',
  },
];

// Exact 9 Offices List from Chairman & CEO Reference Artifact
export const NINE_OFFICES_LIST: { en: string; fr: string }[] = [
  { en: 'Kigali', fr: 'Kigali' },
  { en: 'Abidjan', fr: 'Abidjan' },
  { en: 'Yaoundé', fr: 'Yaoundé' },
  { en: 'Conakry', fr: 'Conakry' },
  { en: 'Libreville', fr: 'Libreville' },
  { en: 'Cotonou', fr: 'Cotonou' },
  { en: 'Dakar', fr: 'Dakar' },
  { en: 'Lagos', fr: 'Lagos' },
  { en: 'London', fr: 'Londres' },
];

export const OFFICIAL_REGULATORY_NOTICE = {
  fr: 'Statut réglementaire et références de licence à compléter avant publication. Ce site est fourni à titre d’information et ne constitue pas une offre de titres ni de services financiers.',
  en: 'Regulatory status and licence references to be completed before publication. This site is for information only and is not an offer of securities or financial services.',
};

// Retained cleanly for type compatibility with archived components
export const JOURNEY_PERIODS: JourneyPeriodData[] = [];
export const DNA_MONOLITHS: DnaMonolithData[] = [];
export const REGIONAL_HUBS = OFFICIAL_OFFICES.map((o) => ({
  id: o.id,
  flag: o.id === 'kigali' ? 'RW' : 'CI',
  tab: o.cityCountry.fr.toUpperCase(),
  title: `${o.entityLabel.fr} — ${o.cityCountry.fr}`,
  address: o.addressLines.fr.join(' '),
  phone: o.phone,
}));
