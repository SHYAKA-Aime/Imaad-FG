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
  name: string;
  role: { en: string; fr: string };
}

export interface OfficeLocationData {
  id: string;
  entityLabel: { en: string; fr: string };
  cityCountry: { en: string; fr: string };
  addressLines: string[];
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
      en: 'IMAAD FINANCIAL GROUP',
      fr: 'IMAAD FINANCIAL GROUP',
    },
    line1: { en: 'Catalyst for', fr: 'Catalyseur de la' },
    lineGold: { en: 'sovereignty', fr: 'souveraineté' },
    line3: { en: 'and sustainable growth', fr: 'et de la croissance durable' },
    description: {
      en: 'Imaad Financial Group (IFG) is an independent Pan-African* Investment Bank specialized in the structuring, financing and execution of transformative projects in Africa.',
      fr: 'Imaad Financial Group (IFG) est une banque d’affaires panafricaine* indépendante spécialisée dans la structuration, le financement et la réalisation de projets structurants en Afrique.',
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

// Exact brochure order & content (Pages 6, 9, 10, 11):
// 01 Sovereign Financing -> 02 Corporate & Trade Finance -> 03 Public-Private Partnerships (PPP)
export const EXCELLENCE_MODULES: ExcellenceModuleData[] = [
  {
    id: 'excellence-01',
    num: '01',
    badgeDivision: { en: 'Sovereign Financing', fr: 'Financement Souverain' },
    accentColor: 'gold',
    reverse: false,
    title: { en: 'SOVEREIGN FINANCING', fr: 'FINANCEMENT SOUVERAIN' },
    description: {
      en: 'Infrastructure project financing and budget support. Imaad Financial Group supports States in mobilizing tailored sovereign capital.',
      fr: 'Financement de projets d’infrastructures et appuis budgétaires. Imaad Financial Group soutient les États dans la mobilisation de financements structurés.',
    },
    bullets: {
      en: [
        'Mobilizing concessional, semi-concessional and commercial financing',
        'Mobilizing budget support lines',
        'Public debt restructuring',
      ],
      fr: [
        'Mobilisation de financements concessionnels, semi-concessionnels et commerciaux',
        'Mobilisation de lignes d’appui budgétaire',
        'Restructuration de la dette publique',
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
      tag: '01 · FINANCEMENT SOUVERAIN / SOVEREIGN FINANCING',
      metrics: [
        { label: 'CÔTE D’IVOIRE', value: 'Axe routier Abidjan – San Pedro · 150 M€' },
        { label: 'CAMEROUN / CAMEROON', value: 'Réseau routier et logistique portuaire · 121 M€' },
        { label: 'NIGÉRIA / NIGERIA', value: 'Réseau de distribution de gaz naturel · 500 M$' },
        { label: 'APPROCHE / APPROACH', value: 'Concessionnel, semi-concessionnel & commercial' },
      ],
      structureNote: {
        en: 'Imaad Financial Group supports States in mobilizing concessional, semi-concessional and commercial financing, budget support lines, and public debt restructuring.',
        fr: 'Imaad Financial Group soutient les États dans la mobilisation de financements concessionnels, semi-concessionnels et commerciaux, de lignes d’appui budgétaire et la restructuration de la dette publique.',
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
      en: 'OPEX and CAPEX financing for corporations across high-growth African sectors including real estate, healthcare manufacturing and agribusiness.',
      fr: 'Financement d’OPEX et de CAPEX pour les entreprises dans des secteurs clés à fort potentiel : immobilier, industrie pharmaceutique et agro-industrie.',
    },
    bullets: {
      en: [
        'Fund mobilization (CAPEX & OPEX) for corporations',
        'Structured financing for industrial, real estate and agribusiness projects',
        'Tailored corporate & trade finance solutions',
      ],
      fr: [
        'Mobilisation de fonds (CAPEX & OPEX) pour les entreprises',
        'Financement structuré de projets industriels, immobiliers et agro-industriels',
        'Solutions sur mesure de financement corporate et trade finance',
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
      tag: '02 · CORPORATE & TRADE FINANCE',
      metrics: [
        { label: 'GUINÉE / GUINEA', value: 'Projet immobilier · 10 M$' },
        { label: 'BÉNIN / BENIN', value: 'Vaccins vétérinaires & dispositifs médicaux · 24 M€' },
        { label: 'GUINÉE / GUINEA', value: 'Programme de développement avicole · 5 M$' },
        { label: 'MANDAT / MANDATE', value: 'Mobilisation CAPEX & OPEX pour les entreprises' },
      ],
      structureNote: {
        en: 'We operate as a financial solutions integrator mobilizing CAPEX and OPEX funding for leading African corporations and industrial sponsors.',
        fr: 'Nous opérons comme un intégrateur de solutions financières mobilisant des financements CAPEX et OPEX pour les entreprises africaines de premier plan.',
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
      en: 'PUBLIC-PRIVATE PARTNERSHIPS (PPP)',
      fr: 'PARTENARIATS PUBLIC-PRIVÉ (PPP)',
    },
    description: {
      en: 'Advisory and project development within public-private partnerships for large-scale transport, housing and energy storage infrastructure.',
      fr: 'Conseil et développement de projets dans le cadre de partenariats public-privé pour les grandes infrastructures de transport, de logement et de stockage énergétique.',
    },
    bullets: {
      en: [
        'Advisory and project development within PPP',
        'Financial and legal engineering',
        'Strategic public and private multilateral partnerships',
      ],
      fr: [
        'Conseil et développement de projets dans le cadre de PPP',
        'Ingénierie financière et juridique',
        'Partenariats stratégiques multilatéraux publics et privés',
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
      tag: '03 · PARTENARIATS PUBLIC-PRIVÉ (PPP)',
      metrics: [
        { label: 'CÔTE D’IVOIRE', value: 'Gare Routière Inter-Urbaine d’Abidjan · 112 M€' },
        { label: 'CAMEROUN / CAMEROON', value: 'Programme de Logements · 100 M€' },
        { label: 'CÔTE D’IVOIRE', value: 'Bacs de stockage de produits pétroliers · 600 M€' },
        { label: 'PORTEFEUILLE / TRACK', value: '+5 projets PPP finalisés ou en cours' },
      ],
      structureNote: {
        en: 'Advisory and project development within public-private partnerships, combining international vision, local execution, and financial and legal engineering.',
        fr: 'Conseil et développement de projets dans le cadre de partenariats public-privé, alliant vision internationale, exécution locale et ingénierie financière et juridique.',
      },
    },
  },
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

// Official Governance & Team Members from Brochure Page 15 (ready for approved photos & bios)
export const TEAM_MEMBERS: TeamMemberData[] = [
  {
    name: 'Pierre Wolf',
    role: { en: 'Chairman of the Board of Directors', fr: 'Président du Conseil d’Administration' },
  },
  {
    name: 'Issa Mehmet N’Diaye',
    role: { en: 'Co-founder & Chief Executive Officer', fr: 'Co-fondateur & Président Directeur Général' },
  },
  {
    name: 'Rym Moulaye-Idriss',
    role: { en: 'Co-founder & Deputy Chief Executive Officer', fr: 'Co-fondatrice & Directrice Générale Adjointe' },
  },
  {
    name: 'Olutobi Osibodu',
    role: { en: 'Co-founder & Managing Director', fr: 'Co-fondateur & Directeur Exécutif' },
  },
  {
    name: 'Pape Baye Diop',
    role: { en: 'Chief Operating Officer', fr: 'Directeur des Opérations' },
  },
  {
    name: 'Mireille Atta',
    role: { en: 'Head of Administration and Accounting', fr: 'Responsable Administratif et Comptable' },
  },
  {
    name: 'Safietou Camara',
    role: { en: 'Senior Financial Analyst', fr: 'Analyste Financier Senior' },
  },
  {
    name: 'Hervé Rugwizangoga',
    role: { en: 'Chief Business Development Officer', fr: 'Directeur du Développement Commercial' },
  },
  {
    name: 'Frédéric Wolf',
    role: { en: 'Executive Assistant to the CEO', fr: 'Assistant Exécutif Direction Générale' },
  },
  {
    name: 'Henri Tchakoute',
    role: { en: 'Head of Business Development, Cameroon', fr: 'Responsable du Développement Commercial, Cameroun' },
  },
  {
    name: 'Korotoum Kone',
    role: { en: 'Junior Financial Analyst', fr: 'Analyste Financier Junior' },
  },
  {
    name: 'Paul-Maylis Agbahan',
    role: { en: 'Executive Assistant', fr: 'Assistante de Direction' },
  },
];

// Primary Offices from Chairman & CEO Reference Artifact
export const OFFICIAL_OFFICES: OfficeLocationData[] = [
  {
    id: 'kigali',
    entityLabel: { en: 'Headquarters · Holding & IFESA', fr: 'Siège · Holding & IFESA' },
    cityCountry: { en: 'Kigali, Rwanda', fr: 'Kigali, Rwanda' },
    addressLines: [
      '11 KG 532 ST, Brilliant Tower,',
      '7e étage, Room 703',
      'Kigali, Rwanda',
    ],
    phone: '+250 780 395 017',
    mapUrl: 'https://maps.google.com/?q=11+KG+532+ST+Brilliant+Tower+Kigali+Rwanda',
  },
  {
    id: 'abidjan',
    entityLabel: { en: 'Regional Office · IFWCA', fr: 'Bureau Régional · IFWCA' },
    cityCountry: { en: 'Abidjan, Côte d’Ivoire', fr: 'Abidjan, Côte d’Ivoire' },
    addressLines: [
      'Cocody Riviera Bonoumin,',
      'Immeuble IHBC 2, face au Collège Charles de Gaulle,',
      '4e étage, Appartement 4A',
      'Abidjan, Côte d’Ivoire',
    ],
    phone: '+225 01 42 81 26 26',
    mapUrl: 'https://maps.google.com/?q=Cocody+Riviera+Bonoumin+Abidjan+Cote+d+Ivoire',
  },
];

// 9 Offices Footprint (per Management feedback)
export const NINE_OFFICES_LIST: { en: string; fr: string }[] = [
  { en: 'Kigali', fr: 'Kigali' },
  { en: 'Abidjan', fr: 'Abidjan' },
  { en: 'Yaoundé', fr: 'Yaoundé' },
  { en: 'London', fr: 'Londres' },
  { en: 'Dakar', fr: 'Dakar' },
  { en: 'Conakry', fr: 'Conakry' },
  { en: 'Cotonou', fr: 'Cotonou' },
  { en: 'Lagos', fr: 'Lagos' },
  { en: 'Casablanca', fr: 'Casablanca' },
];

export const OFFICIAL_REGULATORY_NOTICE = {
  fr: '*La demande d’IFG en vue d’obtenir une licence de banque d’investissement au Rwanda est en cours de préparation pour être soumise à l’Autorité des marchés de capitaux (CMA). Dans l’attente de son approbation, les activités d’IFG au Rwanda sont limitées aux services de conseil. Ce site est fourni à titre d’information et ne constitue pas une offre de titres ni de services financiers.',
  en: '*IFG’s application for an investment banking licence in Rwanda is being prepared for submission to the Capital Market Authority (CMA). Pending its approval, IFG’s activities in Rwanda are limited to advisory services. This website is provided for informational purposes only and does not constitute an offer of securities or financial services.',
};

// Retained cleanly for type compatibility with archived components
export const JOURNEY_PERIODS: JourneyPeriodData[] = [];
export const DNA_MONOLITHS: DnaMonolithData[] = [];
export const REGIONAL_HUBS = OFFICIAL_OFFICES.map((o) => ({
  id: o.id,
  flag: o.id === 'kigali' ? 'RW' : 'CI',
  tab: o.cityCountry.fr.toUpperCase(),
  title: `${o.entityLabel.fr} — ${o.cityCountry.fr}`,
  address: o.addressLines.join(' '),
  phone: o.phone,
}));
