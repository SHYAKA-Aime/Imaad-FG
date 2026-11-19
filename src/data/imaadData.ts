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
  category: 'all' | 'sovereign' | 'ppp' | 'corporate' | 'water_infra' | string;
  categories?: string[];
  country: { en: string; fr: string };
  flag: string;
  quarter?: string;
  isClosed?: boolean;
  statusTag: { en: string; fr: string };
  sector: { en: string; fr: string };
  amountDisplay?: string;
  amountFCFA: string;
  amountUSD: string;
  description: { en: string; fr: string };
  metaTag: string;
  image: string;
  specs: { label: string; value: string }[];
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
    line1: { en: 'Catalyst for', fr: 'Catalyseur de' },
    lineGold: { en: 'sovereignty', fr: 'souveraineté' },
    line3: { en: 'and sustainable growth', fr: 'et de croissance durable' },
    description: {
      en: 'Imaad Financial Group structures and finances sovereign, PPP and corporate projects in Africa, the Middle East and Latin America.',
      fr: 'Imaad Financial Group structure et finance des projets souverains, PPP et corporate en Afrique, au Moyen-Orient et en Amérique latine.',
    },
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85',
    coordinates: 'ABIDJAN // 5.3167° N, 4.0333° W',
  },
  {
    id: 1,
    durationMs: 7000,
    tabLabel: { en: 'SOVEREIGNTY', fr: 'SOUVERAINETÉ' },
    eyebrow: {
      en: 'PAN-AFRICAN INVESTMENT BANK & SOVEREIGN ADVISORY',
      fr: "BANQUE D'AFFAIRES PANAFRICAINE & CONSEIL SOUVERAIN",
    },
    line1: { en: 'CATALYST FOR', fr: 'CATALYSEUR DE' },
    lineGold: { en: 'SOVEREIGNTY', fr: 'SOUVERAINETÉ' },
    line3: { en: '& SUSTAINABLE GROWTH', fr: '& CROISSANCE DURABLE' },
    description: {
      en: 'Structuring, financing, and executing transformative public-private partnerships, sovereign infrastructure, and dedicated investment funds across Africa.',
      fr: "Structuration, financement et exécution de partenariats public-privé transformateurs, d'infrastructures souveraines et de fonds d'investissement dédiés en Afrique.",
    },
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85',
    coordinates: 'ABIDJAN // 5.3167° N, 4.0333° W',
  },
  {
    id: 2,
    durationMs: 7000,
    tabLabel: { en: 'IMPACT', fr: 'IMPACT' },
    eyebrow: {
      en: 'STRATEGIC INFRASTRUCTURE & CONCESSION ENGINEERING',
      fr: "INFRASTRUCTURES STRATÉGIQUES & INGÉNIERIE DE CONCESSION",
    },
    line1: { en: 'FINANCING', fr: 'FINANCER' },
    lineGold: { en: 'GENERATIONAL', fr: "L'INFRASTRUCTURE" },
    line3: { en: 'AFRICAN INFRASTRUCTURE', fr: 'GÉNÉRATIONNELLE' },
    description: {
      en: 'Mobilizing over 1,000 Billion FCFA in institutional and multilateral liquidity for transport corridors, reference hospitals, clean energy grids, and civic hubs.',
      fr: 'Mobilisation de plus de 1 000 Milliards FCFA de liquidités institutionnelles pour les corridors routiers, hôpitaux de référence, réseaux énergétiques et pôles éducatifs.',
    },
    image: 'https://images.unsplash.com/photo-1541888946425-d09bb18086f6?auto=format&fit=crop&w=2000&q=85',
    coordinates: 'DAKAR // 14.7167° N, 17.4677° W',
  },
  {
    id: 3,
    durationMs: 7000,
    tabLabel: { en: 'EXCELLENCE', fr: 'EXCELLENCE' },
    eyebrow: {
      en: 'GLOBAL CAPITAL MARKETS & DEDICATED SOVEREIGN FUNDS',
      fr: 'MARCHÉS DE CAPITAUX GLOBAUX & FONDS SOUVERAINS DÉDIÉS',
    },
    line1: { en: 'ARCHITECTS OF', fr: 'ARCHITECTES DE' },
    lineGold: { en: 'FINANCIAL', fr: "L'EXCELLENCE" },
    line3: { en: 'EXCELLENCE & TRUST', fr: 'FINANCIÈRE' },
    description: {
      en: 'Combining tier-one international investment banking rigor with deep sovereign alignment across 7 regional and international financial hubs.',
      fr: "Alliance de la rigueur bancaire internationale de premier rang et d'un ancrage souverain profond à travers 7 hubs financiers régionaux et internationaux.",
    },
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2000&q=85',
    coordinates: 'DUBAI // 25.2048° N, 55.2708° E',
  },
];

export const STRATEGY_PILLARS = [
  {
    id: '01',
    code: 'PILLAR // 01',
    region: { en: 'ECONOMIC AUTONOMY', fr: 'AUTONOMIE ÉCONOMIQUE' },
    title: { en: 'Sovereignty', fr: 'Souveraineté' },
    description: {
      en: 'Strengthening the financial autonomy of States and public institutions through innovative and responsible financing solutions.',
      fr: "Renforcer l'autonomie financière des États et des institutions publiques à travers des solutions de financement innovantes et responsables.",
    },
    accent: 'gold' as const,
    bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: '02',
    code: 'PILLAR // 02',
    region: { en: 'SDGS & REGIONAL DEVELOPMENT', fr: 'ODD & DÉVELOPPEMENT RÉGIONAL' },
    title: { en: 'Impact', fr: 'Impact' },
    description: {
      en: 'Sustainable projects creating jobs and social value, aligned with the SDGs and regional development goals.',
      fr: "Des projets durables créateurs d'emplois et de valeur sociale, alignés sur les ODD et les objectifs de développement régional.",
    },
    accent: 'sapphire' as const,
    bgImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: '03',
    code: 'PILLAR // 03',
    region: { en: 'GLOBAL EXPERTISE', fr: 'EXPERTISE INTERNATIONALE' },
    title: { en: 'Excellence', fr: 'Excellence' },
    description: {
      en: 'High-precision execution delivered by multidisciplinary teams and international financial expertise.',
      fr: "Une exécution de haute précision portée par des équipes pluridisciplinaires et une expertise financière internationale.",
    },
    accent: 'gold' as const,
    bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
  },
];

export const EXCELLENCE_MODULES: ExcellenceModuleData[] = [
  {
    id: 'excellence-01',
    num: '01',
    badgeDivision: { en: 'sovereign financing', fr: 'financement souverain' },
    accentColor: 'gold',
    reverse: false,
    title: { en: 'SOVEREIGN FINANCING', fr: 'FINANCEMENT SOUVERAIN' },
    description: {
      en: 'Mobilization of concessional financing, restructuring and optimization of public debt, and budgetary support for states and public institutions.',
      fr: 'Mobilisation de financements concessionnels, restructuration et optimisation de la dette publique, et appui budgétaire aux États et institutions publiques.',
    },
    bullets: {
      en: [
        'Public debt restructuring',
        'Access to international capital markets',
        'Mobilizing multilateral funding',
        'Budgetary support and sovereign guarantees',
      ],
      fr: [
        'Restructuration de la dette publique',
        'Accès aux marchés internationaux de capitaux',
        'Mobilisation de financements multilatéraux',
        'Appui budgétaire et garanties souveraines',
      ],
    },
    slides: [
      {
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
        caption: { en: 'Sovereign Debt & Capital Markets Advisory', fr: 'Conseil en Dette Souveraine & Marchés de Capitaux' },
      },
      {
        image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1200&q=85',
        caption: { en: 'Cross-Border Institutional Syndication & DFI Alignment', fr: 'Syndication Institutionnelle Transfrontalière & IFD' },
      },
      {
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
        caption: { en: 'Credit Enhancement & Sovereign Guarantee Modeling', fr: 'Rehaussement de Crédit & Garanties Souveraines' },
      },
      {
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85',
        caption: { en: 'Macro-Financial Feasibility & Bankability Optimization', fr: 'Faisabilité Macro-Financière & Bancabilité' },
      },
    ],
    dossier: {
      tag: 'DIVISION 01 // SOVEREIGN & PUBLIC DEBT ADVISORY',
      metrics: [
        { label: 'TYPICAL TICKET SIZE', value: '25 Bn – 250 Bn FCFA ($40M – $400M)' },
        { label: 'INSTRUMENTS', value: 'Syndicated Loans, Sukuk, Eurobonds, Blended Finance' },
        { label: 'RISK MITIGATION', value: 'MIGA, ATI/ACA, AfDB & ECAs' },
        { label: 'TARGET CLIENTS', value: 'Ministries of Finance, Public Utilities, National Champions' },
      ],
      structureNote: {
        en: 'Our Sovereign Financing desk serves as the strategic architect from initial debt audit through credit enhancement, guarantee negotiation, and international capital market issuance.',
        fr: "Notre pôle Financement Souverain accompagne les États et institutions de l'audit de dette jusqu'à la levée de capitaux internationaux et au closing financier.",
      },
    },
  },
  {
    id: 'excellence-02',
    num: '02',
    badgeDivision: { en: 'public-private partnerships', fr: 'partenariats public-privé (PPP)' },
    accentColor: 'sapphire',
    reverse: true,
    title: { en: 'PUBLIC-PRIVATE PARTNERSHIPS (PPP)', fr: 'PARTENARIATS PUBLIC-PRIVÉ (PPP)' },
    description: {
      en: 'Consulting, structuring and infrastructure development in public and private partnerships. Roads, hospitals, energy, water: we support each stage of the project cycle.',
      fr: "Conseil, structuration et développement d'infrastructures en partenariat public-privé. Routes, hôpitaux, énergie, eau : nous accompagnons chaque étape du cycle de projet.",
    },
    bullets: {
      en: [
        'Legal and financial structuring of PPPs',
        'Partner identification and selection',
        'Structuring of concessions and BOT',
        'Financial closing support',
      ],
      fr: [
        'Structuration juridique et financière des PPP',
        'Identification et sélection de partenaires',
        'Structuration de concessions et BOT',
        'Accompagnement au closing financier',
      ],
    },
    slides: [
      {
        image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=85',
        caption: { en: 'Sovereign Transport Corridors & Bridge Concessions', fr: 'Corridors Routiers Souverains & Concessions' },
      },
      {
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85',
        caption: { en: 'Utility-Scale Solar & Independent Power Producer (IPP) PPPs', fr: 'Centrales Solaires & Producteurs Indépendants (IPP)' },
      },
      {
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85',
        caption: { en: 'Turnkey Healthcare & Regional Reference Hospitals', fr: 'Hôpitaux de Référence & Infrastructures de Santé Clés en Main' },
      },
      {
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85',
        caption: { en: 'University Campuses & Ministerial Administrative Precincts', fr: 'Campus Universitaires & Cités Administratives' },
      },
    ],
    dossier: {
      tag: 'DIVISION 02 // CONCESSION & PPP ENGINEERING',
      metrics: [
        { label: 'CONCESSION HORIZON', value: '15 to 30 Years (BOT / DBFOM)' },
        { label: 'CORE SECTORS', value: 'Highways, Ports, Hospitals, Universities, Energy' },
        { label: 'PARTNER ECOSYSTEM', value: 'Tier-1 International EPCs & DFI Co-Lenders' },
        { label: 'FISCAL IMPACT', value: 'Off-Balance-Sheet & Sustainable Sovereign Debt Profile' },
      ],
      structureNote: {
        en: 'IMAAD structures bankable PPP frameworks that preserve sovereign debt sustainability while accelerating critical infrastructure delivery.',
        fr: "IMAAD structure des cadres PPP bancables qui préservent la soutenabilité de la dette publique tout en accélérant la livraison d'infrastructures critiques.",
      },
    },
  },
  {
    id: 'excellence-03',
    num: '03',
    badgeDivision: { en: 'corporate & trade finance', fr: 'finance d’entreprise & du commerce' },
    accentColor: 'emerald',
    reverse: false,
    title: { en: 'CORPORATE & TRADE FINANCE', fr: 'FINANCE D’ENTREPRISE & DU COMMERCE' },
    description: {
      en: 'CAPEX & OPEX financing for companies in the industrial, logistics and real estate sectors. Structured solutions adapted to emerging markets.',
      fr: 'Financement CAPEX & OPEX pour les entreprises des secteurs industriel, logistique et immobilier. Solutions structurées adaptées aux marchés émergents.',
    },
    bullets: {
      en: [
        'Financing of industrial projects',
        'Structured trade finance solutions',
        'M&A and acquisition support',
        'Equity and mezzanine fundraising',
      ],
      fr: [
        'Financement de projets industriels',
        'Solutions de financement du commerce structuré',
        'Accompagnement M&A et acquisitions',
        'Levée de fonds en fonds propres et mezzanine',
      ],
    },
    slides: [
      {
        image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=85',
        caption: { en: 'Thematic Infrastructure & Green Transition Funds', fr: 'Fonds Infrastructures & Transition Verte' },
      },
      {
        image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=85',
        caption: { en: 'Port, Logistics & Regional Trade Corridor Vehicles', fr: 'Fonds Logistique, Ports & Corridors Commerciaux' },
      },
      {
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85',
        caption: { en: 'Strategic Growth Capital for National Industrial Champions', fr: 'Capital Croissance pour Champions Industriels Nationaux' },
      },
    ],
    dossier: {
      tag: 'DIVISION 03 // SOVEREIGN & THEMATIC ASSET MANAGEMENT',
      metrics: [
        { label: 'TARGET FUND CAPACITY', value: '100 Bn – 500 Bn FCFA ($165M – $825M)' },
        { label: 'LP BASE', value: 'Regional Pension Funds, Sovereign Funds, DFIs, Family Offices' },
        { label: 'STRATEGIES', value: 'Greenfield Infrastructure, Mezzanine & Growth Equity' },
        { label: 'GOVERNANCE', value: 'International AIFM & IFC Performance Standards' },
      ],
      structureNote: {
        en: 'Our Dedicated Funds platform unlocks domestic institutional savings and matches them with international co-investors to build long-term African equity.',
        fr: "Nos fonds dédiés mobilisent l'épargne institutionnelle régionale aux côtés de co-investisseurs internationaux pour bâtir des actifs souverains durables.",
      },
    },
  },
];

export const PROJECTS_PORTFOLIO: ProjectCardData[] = [
  {
    id: 'proj-ci-road',
    category: 'water_infra',
    categories: ['ppp', 'water_infra'],
    country: { en: 'IVORY COAST', fr: "CÔTE D'IVOIRE" },
    flag: '🇨🇮',
    quarter: 'Q3 2023',
    isClosed: true,
    statusTag: { en: 'PPP INFRASTRUCTURE', fr: 'INFRASTRUCTURE PPP' },
    sector: { en: 'ROAD INFRASTRUCTURE', fr: 'INFRASTRUCTURES ROUTIÈRES' },
    amountDisplay: '€150 MILLION',
    amountFCFA: '98,400,000,000 FCFA',
    amountUSD: '$162,000,000 USD',
    description: {
      en: 'Structuring and coordinating financing for the strategic road linking the cities of Abidjan and San Pedro.',
      fr: 'Structuration et coordination du financement de la route stratégique reliant les villes d’Abidjan et San Pedro.',
    },
    metaTag: 'ABIDJAN - SAN PEDRO // PPP',
    image: '/projects/infrastructure-routiere.png',
    specs: [
      { label: 'COUNTRY', value: 'Ivory Coast' },
      { label: 'CAPITAL', value: '€150,000,000' },
      { label: 'TIMELINE', value: 'Q3 2023' },
    ],
  },
  {
    id: 'proj-gn-re',
    category: 'corporate',
    categories: ['corporate'],
    country: { en: 'GUINEA', fr: 'GUINÉE' },
    flag: '🇬🇳',
    quarter: 'Q2 2024',
    isClosed: true,
    statusTag: { en: 'CORPORATE FINANCE', fr: 'FINANCE D’ENTREPRISE' },
    sector: { en: 'REAL ESTATE', fr: 'IMMOBILIER' },
    amountDisplay: '$10 MILLION',
    amountFCFA: '6,100,000,000 FCFA',
    amountUSD: '$10,000,000 USD',
    description: {
      en: 'Structuring and coordinating financing for the acquisition of the headquarters of a large Guinean private group.',
      fr: 'Structuration et coordination du financement pour l’acquisition du siège d’un grand groupe privé guinéen.',
    },
    metaTag: 'HEADQUARTERS ACQUISITION',
    image: '/projects/immobilier-guinee.png',
    specs: [
      { label: 'COUNTRY', value: 'Guinea' },
      { label: 'CAPITAL', value: '$10,000,000' },
      { label: 'TIMELINE', value: 'Q2 2024' },
    ],
  },
  {
    id: 'proj-gn-logistics',
    category: 'corporate',
    categories: ['corporate'],
    country: { en: 'GUINEA', fr: 'GUINÉE' },
    flag: '🇬🇳',
    quarter: 'Q2 2024',
    statusTag: { en: 'EQUIPMENT FINANCE', fr: 'FINANCEMENT D’ÉQUIPEMENT' },
    sector: { en: 'LOGISTICS', fr: 'LOGISTIQUE' },
    amountDisplay: '$5 MILLION',
    amountFCFA: '3,050,000,000 FCFA',
    amountUSD: '$5,000,000 USD',
    description: {
      en: 'Project to acquire 60 dump trucks.',
      fr: 'Projet d’acquisition de 60 camions bennes.',
    },
    metaTag: '60 DUMP TRUCKS // FLEET EXPANSION',
    image: '/projects/logistique-minerais.png',
    specs: [
      { label: 'COUNTRY', value: 'Guinea' },
      { label: 'CAPITAL', value: '$5,000,000' },
      { label: 'TIMELINE', value: 'Q2 2024' },
    ],
  },
  {
    id: 'proj-dj-health',
    category: 'sovereign',
    categories: ['sovereign', 'ppp'],
    country: { en: 'DJIBOUTI', fr: 'DJIBOUTI' },
    flag: '🇩🇯',
    quarter: 'Q3 2024',
    statusTag: { en: 'SOVEREIGN FINANCING', fr: 'FINANCEMENT SOUVERAIN' },
    sector: { en: 'HEALTH', fr: 'SANTÉ' },
    amountDisplay: '$25 MILLION',
    amountFCFA: '15,250,000,000 FCFA',
    amountUSD: '$25,000,000 USD',
    description: {
      en: 'Construction of the Djibouti Regional Referral Hospital.',
      fr: 'Construction du Centre Hospitalier Régional de Référence de Djibouti.',
    },
    metaTag: 'REGIONAL REFERRAL HOSPITAL',
    image: '/projects/sante-djibouti.png',
    specs: [
      { label: 'COUNTRY', value: 'Djibouti' },
      { label: 'CAPITAL', value: '$25,000,000' },
      { label: 'TIMELINE', value: 'Q3 2024' },
    ],
  },
  {
    id: 'proj-gn-diaspora',
    category: 'corporate',
    categories: ['corporate'],
    country: { en: 'GUINEA', fr: 'GUINÉE' },
    flag: '🇬🇳',
    quarter: 'Q3 2024',
    statusTag: { en: 'HOUSING FINANCE', fr: 'FINANCEMENT IMMOBILIER' },
    sector: { en: 'REAL ESTATE', fr: 'IMMOBILIER' },
    amountDisplay: '$15 MILLION',
    amountFCFA: '9,150,000,000 FCFA',
    amountUSD: '$15,000,000 USD',
    description: {
      en: 'Housing construction project for the Diaspora.',
      fr: 'Projet de construction de logements pour la Diaspora.',
    },
    metaTag: 'DIASPORA HOUSING // RESIDENTIAL',
    image: '/projects/immobilier-diaspora.png',
    specs: [
      { label: 'COUNTRY', value: 'Guinea' },
      { label: 'CAPITAL', value: '$15,000,000' },
      { label: 'TIMELINE', value: 'Q3 2024' },
    ],
  },
  {
    id: 'proj-bj-health',
    category: 'sovereign',
    categories: ['sovereign'],
    country: { en: 'BENIN', fr: 'BÉNIN' },
    flag: '🇧🇯',
    quarter: 'Q4 2024',
    statusTag: { en: 'PUBLIC HEALTHCARE', fr: 'SANTÉ PUBLIQUE' },
    sector: { en: 'HEALTH', fr: 'SANTÉ' },
    amountDisplay: '€25 MILLION',
    amountFCFA: '16,400,000,000 FCFA',
    amountUSD: '$27,000,000 USD',
    description: {
      en: 'Project to equip 10 secondary health care units.',
      fr: 'Projet d’équipement de 10 unités de soins de santé secondaires.',
    },
    metaTag: '10 SECONDARY HEALTH UNITS',
    image: '/projects/sante-vaccins.png',
    specs: [
      { label: 'COUNTRY', value: 'Benin' },
      { label: 'CAPITAL', value: '€25,000,000' },
      { label: 'TIMELINE', value: 'Q4 2024' },
    ],
  },
  {
    id: 'proj-bj-industry',
    category: 'corporate',
    categories: ['corporate'],
    country: { en: 'BENIN', fr: 'BÉNIN' },
    flag: '🇧🇯',
    quarter: 'Q4 2024',
    statusTag: { en: 'INDUSTRIAL CAPEX', fr: 'INDUSTRIE & ÉNERGIE' },
    sector: { en: 'INDUSTRY', fr: 'INDUSTRIE' },
    amountDisplay: '€137 MILLION',
    amountFCFA: '89,870,000,000 FCFA',
    amountUSD: '$148,000,000 USD',
    description: {
      en: 'Project for the construction of an electrical cable production unit.',
      fr: 'Projet de construction d’une unité de production de câbles électriques.',
    },
    metaTag: 'ELECTRICAL CABLE MANUFACTURING',
    image: '/projects/industrie-cables-benin.png',
    specs: [
      { label: 'COUNTRY', value: 'Benin' },
      { label: 'CAPITAL', value: '€137,000,000' },
      { label: 'TIMELINE', value: 'Q4 2024' },
    ],
  },
  {
    id: 'proj-rw-mines',
    category: 'corporate',
    categories: ['corporate'],
    country: { en: 'RWANDA', fr: 'RWANDA' },
    flag: '🇷🇼',
    quarter: 'Q4 2024',
    statusTag: { en: 'MINING FINANCE', fr: 'FINANCEMENT MINIER' },
    sector: { en: 'MINES', fr: 'MINES' },
    amountDisplay: '$10 MILLION',
    amountFCFA: '6,100,000,000 FCFA',
    amountUSD: '$10,000,000 USD',
    description: {
      en: 'Project to acquire mining equipment for a coltan mine.',
      fr: 'Projet d’acquisition d’équipements miniers pour une mine de coltan.',
    },
    metaTag: 'COLTAN MINE // HEAVY MACHINERY',
    image: '/projects/mines-rwanda.png',
    specs: [
      { label: 'COUNTRY', value: 'Rwanda' },
      { label: 'CAPITAL', value: '$10,000,000' },
      { label: 'TIMELINE', value: 'Q4 2024' },
    ],
  },
  {
    id: 'proj-sn-housing',
    category: 'ppp',
    categories: ['ppp', 'corporate'],
    country: { en: 'SENEGAL', fr: 'SÉNÉGAL' },
    flag: '🇸🇳',
    quarter: 'Q1 2025',
    statusTag: { en: 'AFFORDABLE HOUSING PPP', fr: 'PPP LOGEMENTS' },
    sector: { en: 'REAL ESTATE', fr: 'IMMOBILIER' },
    amountDisplay: '€25 MILLION',
    amountFCFA: '16,400,000,000 FCFA',
    amountUSD: '$27,000,000 USD',
    description: {
      en: 'Construction of a block of affordable and connected housing.',
      fr: 'Construction d’un îlot de logements abordables et connectés.',
    },
    metaTag: 'AFFORDABLE & CONNECTED HOUSING',
    image: '/projects/immobilier-cite-senegal.png',
    specs: [
      { label: 'COUNTRY', value: 'Senegal' },
      { label: 'CAPITAL', value: '€25,000,000' },
      { label: 'TIMELINE', value: 'Q1 2025' },
    ],
  },
  {
    id: 'proj-sn-agri',
    category: 'corporate',
    categories: ['corporate'],
    country: { en: 'SENEGAL', fr: 'SÉNÉGAL' },
    flag: '🇸🇳',
    quarter: 'Q1 2025',
    statusTag: { en: 'AGRI-INFRASTRUCTURE', fr: 'AGRO-INDUSTRIE' },
    sector: { en: 'AGRICULTURE', fr: 'AGRICULTURE' },
    amountDisplay: '€17 MILLION',
    amountFCFA: '11,150,000,000 FCFA',
    amountUSD: '$18,500,000 USD',
    description: {
      en: 'Construction of grain silos.',
      fr: 'Construction de silos à grains.',
    },
    metaTag: 'GRAIN SILOS // STORAGE FACILITY',
    image: '/projects/agriculture-silos-senegal.png',
    specs: [
      { label: 'COUNTRY', value: 'Senegal' },
      { label: 'CAPITAL', value: '€17,000,000' },
      { label: 'TIMELINE', value: 'Q1 2025' },
    ],
  },
  {
    id: 'proj-cm-re',
    category: 'corporate',
    categories: ['corporate'],
    country: { en: 'CAMEROON', fr: 'CAMEROUN' },
    flag: '🇨🇲',
    quarter: 'Q1 2025',
    statusTag: { en: 'RESIDENTIAL DEVELOPMENT', fr: 'DÉVELOPPEMENT RÉSIDENTIEL' },
    sector: { en: 'REAL ESTATE', fr: 'IMMOBILIER' },
    amountDisplay: '€20 MILLION',
    amountFCFA: '13,120,000,000 FCFA',
    amountUSD: '$21,500,000 USD',
    description: {
      en: 'Housing construction.',
      fr: 'Construction de logements.',
    },
    metaTag: 'URBAN HOUSING PRECINCT',
    image: '/projects/real-estate-cameroon.jpeg',
    specs: [
      { label: 'COUNTRY', value: 'Cameroon' },
      { label: 'CAPITAL', value: '€20,000,000' },
      { label: 'TIMELINE', value: 'Q1 2025' },
    ],
  },
  {
    id: 'proj-ci-hydraulic',
    category: 'water_infra',
    categories: ['water_infra', 'sovereign', 'ppp'],
    country: { en: 'IVORY COAST', fr: "CÔTE D'IVOIRE" },
    flag: '🇨🇮',
    quarter: 'Q1 2025',
    statusTag: { en: 'WATER INFRASTRUCTURE', fr: 'HYDRAULIQUE URBAINE' },
    sector: { en: 'HYDRAULIC', fr: 'HYDRAULIQUE' },
    amountDisplay: '€278 MILLION',
    amountFCFA: '182,350,000,000 FCFA',
    amountUSD: '$300,000,000 USD',
    description: {
      en: 'Abidjan South drinking water supply project.',
      fr: 'Projet d’alimentation en eau potable d’Abidjan Sud.',
    },
    metaTag: 'ABIDJAN SOUTH // DRINKING WATER',
    image: '/projects/hydraulique-abidjan-ivory.png',
    specs: [
      { label: 'COUNTRY', value: 'Ivory Coast' },
      { label: 'CAPITAL', value: '€278,000,000' },
      { label: 'TIMELINE', value: 'Q1 2025' },
    ],
  },
];

export const JOURNEY_PERIODS: JourneyPeriodData[] = [
  {
    year: '2026',
    progressPct: 12,
    quarters: [
      {
        q: 'Q1',
        tag: 'SOVEREIGN PIPELINE',
        title: {
          en: 'Scaling of IMAAD Sovereign Infrastructure Pipeline toward the 1,000 Bn FCFA target across 7 regional & international hubs.',
          fr: "Accélération du portefeuille d'infrastructures souveraines IMAAD vers le cap des 1 000 Mds FCFA sur 7 hubs.",
        },
      },
      {
        q: 'Q2',
        tag: 'DEDICATED FUNDS',
        title: {
          en: 'Launch of the IMAAD Clean Energy & Sovereign Resilience Co-Investment Platform alongside international DFIs.',
          fr: 'Lancement de la plateforme de co-investissement Énergie Propre & Résilience Souveraine avec les IFD.',
        },
        highlighted: true,
      },
      {
        q: 'Q4',
        tag: 'REGIONAL INTEGRATION',
        title: {
          en: 'Cross-border corridor syndication linking WAEMU institutional liquidity with Gulf and European capital partners.',
          fr: 'Syndication de corridors transfrontaliers reliant la liquidité UEMOA aux partenaires du Golfe et européens.',
        },
      },
    ],
    verticalNode: {
      index: '01 / 06',
      side: 'right',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
      bullets: {
        en: [
          'Scaling of IMAAD Sovereign Infrastructure Pipeline toward the 1,000 Bn FCFA milestone across 7 hubs.',
          'Launch of Dedicated Clean Energy & Sovereign Resilience Co-Investment Platform with international DFIs.',
        ],
        fr: [
          'Déploiement du pipeline souverain vers le cap des 1 000 Milliards FCFA à travers 7 hubs.',
          'Création du véhicule dédié Énergie Propre & Résilience Souveraine.',
        ],
      },
    },
  },
  {
    year: '2024',
    progressPct: 28,
    quarters: [
      {
        q: 'Q1',
        tag: "CÔTE D'IVOIRE",
        title: {
          en: 'Financial structuring & syndication of 150 Bn FCFA Road Infrastructure Corridor in Côte d’Ivoire.',
          fr: "Structuration financière et syndication du corridor routier de 150 Mds FCFA en Côte d'Ivoire.",
        },
      },
      {
        q: 'Q3',
        tag: 'DUBAI & INTERNATIONAL',
        title: {
          en: 'Expansion of the International Capital Markets & Sovereign Syndication Desk in Dubai (UAE).',
          fr: 'Expansion du bureau international Marchés de Capitaux & Syndication Souveraine à Dubaï (EAU).',
        },
        highlighted: true,
      },
      {
        q: 'Q4',
        tag: 'GUINEA IPP',
        title: {
          en: 'Mandate awarded for 120 Bn FCFA (100 MW) Hybrid Solar & Industrial Transmission Grid in Guinea.',
          fr: 'Mandat obtenu pour le projet solaire hybride et réseau haute tension de 120 Mds FCFA (100 MW) en Guinée.',
        },
      },
    ],
    verticalNode: {
      index: '02 / 06',
      side: 'left',
      image: 'https://images.unsplash.com/photo-1541888946425-d09bb18086f6?auto=format&fit=crop&w=900&q=80',
      bullets: {
        en: [
          'Structuring and financial syndication of 150 Bn FCFA Road Infrastructure Corridor in Côte d’Ivoire.',
          'Expansion of International Institutional Desk connecting Gulf, European, and African liquidity pools.',
        ],
        fr: [
          "Structuration et syndication du corridor routier de 150 Mds FCFA en Côte d'Ivoire.",
          'Ouverture de la passerelle institutionnelle Golfe – Europe – Afrique.',
        ],
      },
    },
  },
  {
    year: '2022',
    progressPct: 45,
    quarters: [
      {
        q: 'Q2',
        tag: 'SENEGAL PPP',
        title: {
          en: 'Financial close of 85 Bn FCFA Institutional, Administrative & Higher-Education PPP Precinct in Senegal.',
          fr: 'Closing financier du pôle institutionnel et universitaire PPP de 85 Mds FCFA au Sénégal.',
        },
      },
      {
        q: 'Q3',
        tag: 'CREDIT ENHANCEMENT',
        title: {
          en: 'Establishment of the Dedicated Sovereign Guarantee & Multilateral Risk Mitigation Taskforce.',
          fr: "Mise en place de l'unité spécialisée en garanties souveraines et rehaussement de crédit multilatéral.",
        },
        highlighted: true,
      },
      {
        q: 'Q4',
        tag: 'TOGO LOGISTICS',
        title: {
          en: 'Concession structuring initiated for 95 Bn FCFA Multimodal Dry Port & Logistics Platform in Togo.',
          fr: 'Structuration de la concession du port sec et plateforme logistique multimodale de 95 Mds FCFA au Togo.',
        },
      },
    ],
    verticalNode: {
      index: '03 / 06',
      side: 'right',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80',
      bullets: {
        en: [
          'Financial close of 85 Bn FCFA Institutional & Higher-Education PPP Precinct in Senegal.',
          'Establishment of the Dedicated Sovereign Advisory & Credit Enhancement Taskforce.',
        ],
        fr: [
          'Closing financier du complexe institutionnel et éducatif de 85 Mds FCFA au Sénégal.',
          'Création du pôle Garanties Souveraines & Rehaussement de Crédit.',
        ],
      },
    },
  },
  {
    year: '2020',
    progressPct: 62,
    quarters: [
      {
        q: 'Q1',
        tag: 'BENIN HEALTHCARE',
        title: {
          en: 'Origination of 65 Bn FCFA Turnkey Regional Hospital & Biomedical Infrastructure Program in Benin.',
          fr: 'Origination du programme hospitalier régional et biomédical clé en main de 65 Mds FCFA au Bénin.',
        },
      },
      {
        q: 'Q2',
        tag: 'SOVEREIGN RESILIENCE',
        title: {
          en: 'Deployment of rapid sovereign liquidity and health-infrastructure advisory across WAEMU states.',
          fr: 'Déploiement de solutions rapides de liquidité souveraine et résilience sanitaire dans la zone UEMOA.',
        },
        highlighted: true,
      },
      {
        q: 'Q4',
        tag: 'WATER UTILITIES',
        title: {
          en: 'Structuring of 55 Bn FCFA blended finance facility for urban potable water infrastructure in Burkina Faso.',
          fr: "Structuration de 55 Mds FCFA en financement mixte pour l'hydraulique urbaine au Burkina Faso.",
        },
      },
    ],
    verticalNode: {
      index: '04 / 06',
      side: 'left',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80',
      bullets: {
        en: [
          'Origination of 65 Bn FCFA Turnkey Regional Hospital & Biomedical Infrastructure Program in Benin.',
          'Deployment of rapid sovereign liquidity and resilience advisory across WAEMU member states.',
        ],
        fr: [
          'Origination du programme hospitalier régional de 65 Mds FCFA au Bénin.',
          'Accompagnement souverain des États membres de l’UEMOA.',
        ],
      },
    },
  },
  {
    year: '2016',
    progressPct: 78,
    quarters: [
      {
        q: 'Q2',
        tag: 'REGIONAL EXPANSION',
        title: {
          en: 'Cross-border advisory & structuring presence established across Guinea, Togo, Benin, and Burkina Faso.',
          fr: 'Implantation des activités de conseil et structuration en Guinée, au Togo, au Bénin et au Burkina Faso.',
        },
      },
      {
        q: 'Q3',
        tag: 'DFI SYNDICATION',
        title: {
          en: 'First multi-donor sovereign infrastructure syndicate structured alongside regional development banks.',
          fr: 'Première syndication souveraine multi-bailleurs structurée avec les banques régionales de développement.',
        },
        highlighted: true,
      },
      {
        q: 'Q4',
        tag: 'PPP FRAMEWORK',
        title: {
          en: 'Advisory support on national Public-Private Partnership regulatory and bankability frameworks.',
          fr: 'Appui conseil sur les cadres réglementaires et la bancabilité des Partenariats Public-Privé.',
        },
      },
    ],
    verticalNode: {
      index: '05 / 06',
      side: 'right',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=80',
      bullets: {
        en: [
          'Cross-border structuring partnerships established in Guinea, Togo, and Burkina Faso.',
          'First multi-donor sovereign infrastructure syndicate structured with regional development banks.',
        ],
        fr: [
          'Déploiement régional en Guinée, au Togo et au Burkina Faso.',
          'Première syndication multi-bailleurs avec les banques régionales de développement.',
        ],
      },
    },
  },
  {
    year: '2011',
    progressPct: 94,
    quarters: [
      {
        q: 'Q1',
        tag: 'FOUNDING VISION',
        title: {
          en: 'Inception of the executive investment banking and sovereign financial engineering practice.',
          fr: "Genèse de la pratique exécutive de banque d'affaires et d'ingénierie financière souveraine.",
        },
      },
      {
        q: 'Q2',
        tag: 'CORE DOCTRINE',
        title: {
          en: 'Formulation of the three foundational pillars: Sovereignty, Sustainable Impact, and Financial Excellence.',
          fr: 'Formulation des trois piliers fondateurs : Souveraineté, Impact Durable et Excellence Financière.',
        },
        highlighted: true,
      },
      {
        q: 'Q4',
        tag: 'FIRST MANDATES',
        title: {
          en: 'Execution of inaugural sovereign debt advisory and strategic infrastructure feasibility mandates in West Africa.',
          fr: 'Exécution des premiers mandats de conseil souverain et de structuration en Afrique de l’Ouest.',
        },
      },
    ],
    verticalNode: {
      index: '06 / 06',
      side: 'left',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
      bullets: {
        en: [
          'Founding of the executive advisory practice by senior African & international investment bankers.',
          'Inception of the core doctrine: Financial Sovereignty & Sustainable African Growth.',
        ],
        fr: [
          "Fondation de la pratique par des banquiers d'affaires seniors africains et internationaux.",
          'Établissement de la doctrine : Catalyseur de Souveraineté et de Croissance Durable.',
        ],
      },
    },
  },
];

export const DNA_MONOLITHS: DnaMonolithData[] = [
  {
    index: 0,
    letter: 'I',
    word: { en: 'INNOVATE', fr: 'INNOVER' },
    shortCallout: {
      en: 'sovereign financial engineering & bespoke capital structures',
      fr: 'ingénierie financière souveraine & structuration sur mesure',
    },
    fullDescription: {
      en: 'Engineering bespoke sovereign financial instruments, blended finance vehicles, and risk-mitigation frameworks tailored to African macroeconomic realities.',
      fr: "Conception d'instruments financiers souverains sur mesure, de véhicules de financement mixte et de mécanismes d'atténuation des risques adaptés aux réalités africaines.",
    },
    calloutOffset: { x: 40, y: 24 },
  },
  {
    index: 1,
    letter: 'M',
    word: { en: 'MOBILIZE', fr: 'MOBILISER' },
    shortCallout: {
      en: 'global institutional, pension & DFI liquidity at scale',
      fr: 'la liquidité institutionnelle globale, fonds de pension & IFD',
    },
    fullDescription: {
      en: 'Unlocking international capital markets, multilateral Development Finance Institutions (DFIs), regional pension funds, and sovereign co-investment pools.',
      fr: 'Mobilisation des marchés de capitaux internationaux, des Institutions Financières de Développement (IFD), des caisses de retraite et fonds souverains.',
    },
    calloutOffset: { x: 110, y: 12 },
  },
  {
    index: 2,
    letter: 'A',
    word: { en: 'ANCHOR', fr: 'ANCRER' },
    shortCallout: {
      en: 'economic sovereignty & strategic national asset ownership',
      fr: 'la souveraineté économique & la maîtrise des actifs stratégiques',
    },
    fullDescription: {
      en: 'Strengthening national fiscal resilience so African states and domestic champions retain long-term control and value creation of critical infrastructure.',
      fr: 'Renforcement de la résilience budgétaire afin que les États et champions nationaux conservent la maîtrise durable de leurs infrastructures critiques.',
    },
    calloutOffset: { x: 185, y: 20 },
  },
  {
    index: 3,
    letter: 'A',
    word: { en: 'ACCELERATE', fr: 'ACCÉLÉRER' },
    shortCallout: {
      en: 'transformative Public-Private Partnerships (PPPs) to close',
      fr: "les Partenariats Public-Privé (PPP) jusqu'au closing financier",
    },
    fullDescription: {
      en: 'Fast-tracking complex infrastructure mandates from early feasibility and concession structuring to syndicated financial close and execution.',
      fr: 'Accélération des mandats complexes depuis les études de bancabilité et la structuration de concession jusqu’au bouclage financier syndiqué.',
    },
    calloutOffset: { x: 240, y: 28 },
  },
  {
    index: 4,
    letter: 'D',
    word: { en: 'DELIVER', fr: 'DÉLIVRER' },
    shortCallout: {
      en: 'durable generational impact & tier-one ESG excellence',
      fr: 'un impact générationnel durable & une gouvernance ESG de 1er plan',
    },
    fullDescription: {
      en: 'Ensuring disciplined execution, transparent governance, and measurable socioeconomic impact across transport, healthcare, education, and clean energy.',
      fr: 'Garantie d’une exécution rigoureuse, d’une gouvernance transparente et d’un impact socio-économique mesurable (routes, santé, éducation, énergie).',
    },
    calloutOffset: { x: 280, y: 18 },
  },
];

export const REGIONAL_HUBS = [
  {
    id: 'abidjan',
    flag: '🇨🇮',
    tab: "ABIDJAN (CI)",
    title: "IMAAD GROUP CÔTE D'IVOIRE — HEADQUARTERS",
    address: 'Cocody Ambassades / Plateau Financial District, Abidjan, Côte d’Ivoire',
    phone: 'Tel: (+225) 27 22 40 00 00 • WAEMU Sovereign Desk',
  },
  {
    id: 'dakar',
    flag: '🇸🇳',
    tab: 'DAKAR (SN)',
    title: 'IMAAD GROUP SENEGAL — ATLANTIC HUB',
    address: 'Plateau Business District & Diamniadio Hub, Dakar, Senegal',
    phone: 'Tel: (+221) 33 820 00 00 • PPP & Institutional Structuring',
  },
  {
    id: 'cotonou',
    flag: '🇧🇯',
    tab: 'COTONOU (BJ)',
    title: 'IMAAD GROUP BENIN & TOGO CORRIDOR',
    address: 'Boulevard de la Marina, Cotonou, Benin / Lomé Hub',
    phone: 'Tel: (+229) 21 30 00 00 • Healthcare & Port Concessions',
  },
  {
    id: 'dubai',
    flag: '🇦🇪',
    tab: 'DUBAI (UAE)',
    title: 'IMAAD INTERNATIONAL — CAPITAL MARKETS DESK',
    address: 'DIFC / Financial Center Road, Dubai, United Arab Emirates',
    phone: 'Tel: (+971) 4 300 00 00 • DFI & Sovereign Syndication',
  },
];
