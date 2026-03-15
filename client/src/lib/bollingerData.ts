/**
 * bollingerData.ts — Toutes les données CI Bollinger externalisées
 * Source: Prompt de spécifications v2.1 — Section C (données validées mars 2026)
 * Design: Art Déco Prestige Noir & Or
 */

// ─── C.1 Marché Global ───────────────────────────────────────────────────────

export const marketVolumeData = [
  { year: "2019", volume: 297, label: "297M" },
  { year: "2020", volume: 245, label: "245M" },
  { year: "2021", volume: 322, label: "322M" },
  { year: "2022", volume: 326, label: "326M" },
  { year: "2023", volume: 299, label: "299M" },
  { year: "2024", volume: 271, label: "271M" },
  { year: "2025", volume: 266, label: "266M" },
];

export const topMarketsData = [
  { market: "USA", value: 820, growth: 0.5, trend: "up" },
  { market: "UK", value: 580, growth: -3.0, trend: "down" },
  { market: "Japon", value: 210, growth: 2.0, trend: "up" },
  { market: "Belgique", value: 195, growth: 0, trend: "flat" },
  { market: "Allemagne", value: 180, growth: 0, trend: "flat" },
  { market: "Australie", value: 165, growth: 0, trend: "flat" },
  { market: "Suisse", value: 145, growth: 0, trend: "flat" },
  { market: "Italie", value: 120, growth: 0, trend: "flat" },
  { market: "Pays-Bas", value: 110, growth: 0, trend: "flat" },
  { market: "Chine", value: 95, growth: -8.0, trend: "down" },
];

// ─── C.2 Classements Prestige ─────────────────────────────────────────────────

export const mostAdmiredData = [
  { rank: 1, name: "Louis Roederer", score: 100, isBollinger: false },
  { rank: 2, name: "Krug", score: 95, isBollinger: false },
  { rank: 3, name: "Bollinger", score: 90, isBollinger: true },
  { rank: 4, name: "Dom Pérignon", score: 85, isBollinger: false },
  { rank: 5, name: "Pol Roger", score: 80, isBollinger: false },
  { rank: 6, name: "Billecart-Salmon", score: 75, isBollinger: false },
  { rank: 7, name: "Taittinger", score: 70, isBollinger: false },
  { rank: 8, name: "Laurent-Perrier", score: 65, isBollinger: false },
  { rank: 9, name: "Ruinart", score: 60, isBollinger: false },
  { rank: 10, name: "Gosset", score: 55, isBollinger: false },
];

// ─── C.4 Portefeuille Bollinger ───────────────────────────────────────────────

export interface CuveeData {
  name: string;
  range: string;
  priceMin: number;
  priceMax: number;
  priceMid: number;
  score: number;
  scoreLabel: string;
  alert: string;
}

export const portfolioData: CuveeData[] = [
  {
    name: "Special Cuvée",
    range: "NV",
    priceMin: 55,
    priceMax: 70,
    priceMid: 62,
    score: 93,
    scoreLabel: "93 pts",
    alert: "",
  },
  {
    name: "Rosé",
    range: "NV",
    priceMin: 75,
    priceMax: 90,
    priceMid: 82,
    score: 92,
    scoreLabel: "92 pts",
    alert: "",
  },
  {
    name: "La Grande Année",
    range: "Millésimé",
    priceMin: 120,
    priceMax: 160,
    priceMid: 140,
    score: 96,
    scoreLabel: "95–97 pts",
    alert: "",
  },
  {
    name: "La Grande Année Rosé",
    range: "Millésimé",
    priceMin: 160,
    priceMax: 200,
    priceMid: 180,
    score: 96,
    scoreLabel: "96 pts",
    alert: "",
  },
  {
    name: "R.D. (Récemment Dégorgé)",
    range: "Prestige",
    priceMin: 200,
    priceMax: 280,
    priceMid: 240,
    score: 98,
    scoreLabel: "97–99 pts",
    alert: "",
  },
  {
    name: "Blanc de Noirs",
    range: "Spécialité",
    priceMin: 180,
    priceMax: 220,
    priceMid: 200,
    score: 96,
    scoreLabel: "96 pts",
    alert: "",
  },
  {
    name: "Vieilles Vignes Françaises",
    range: "Ultra-prestige",
    priceMin: 500,
    priceMax: 600,
    priceMid: 550,
    score: 99,
    scoreLabel: "99 pts",
    alert: "Phylloxéra : vignes non greffées, risque de perte",
  },
];

// ─── C.5 Prix Comparatif ──────────────────────────────────────────────────────

export const priceComparisonData = [
  { name: "Bollinger", entry: 55, prestige: 600, isBollinger: true },
  { name: "L. Roederer", entry: 45, prestige: 500, isBollinger: false },
  { name: "Krug", entry: 180, prestige: 2000, isBollinger: false },
  { name: "Pol Roger", entry: 45, prestige: 300, isBollinger: false },
  { name: "Billecart-S.", entry: 55, prestige: 400, isBollinger: false },
  { name: "Dom Pérignon", entry: 180, prestige: 5000, isBollinger: false },
  { name: "Ruinart", entry: 65, prestige: 500, isBollinger: false },
  { name: "Taittinger", entry: 45, prestige: 300, isBollinger: false },
  { name: "L.-Perrier", entry: 50, prestige: 400, isBollinger: false },
  { name: "Gosset", entry: 45, prestige: 350, isBollinger: false },
];

// ─── C.6 Social & Digital ─────────────────────────────────────────────────────

export const instagramData = [
  { name: "Moët & Chandon", followers: 1200, trend: "up" },
  { name: "Veuve Clicquot", followers: 980, trend: "up" },
  { name: "Dom Pérignon", followers: 850, trend: "up" },
  { name: "Ruinart", followers: 420, trend: "up" },
  { name: "Krug", followers: 310, trend: "flat" },
  { name: "Bollinger", followers: 285, trend: "up" },
  { name: "L. Roederer", followers: 245, trend: "up" },
  { name: "Taittinger", followers: 195, trend: "flat" },
  { name: "Billecart-S.", followers: 165, trend: "flat" },
  { name: "L.-Perrier", followers: 145, trend: "flat" },
  { name: "Pol Roger", followers: 125, trend: "flat" },
];

export const bollingerCampaigns = [
  {
    name: "Made of More",
    date: "2024",
    description: "Campagne de marque institutionnelle valorisant l'indépendance et l'authenticité de Bollinger.",
    type: "Brand",
  },
  {
    name: "Special Cuvée 007",
    date: "Oct. 2025",
    description: "Édition limitée célébrant 45+ ans de partenariat avec James Bond.",
    type: "Produit",
  },
  {
    name: "Aston Martin Partnership",
    date: "Sept. 2025",
    description: "Annonce du partenariat mondial avec Aston Martin — cible masculine premium.",
    type: "Partenariat",
  },
  {
    name: "B Corp Anniversary",
    date: "Sept. 2023",
    description: "Célébration de la certification B Corp (score 83,9) — positionnement RSE.",
    type: "RSE",
  },
];

// ─── C.7 Distribution ─────────────────────────────────────────────────────────

export const distributionChannels = [
  { name: "On-trade", value: 65, color: "#b8960c" },
  { name: "Off-trade", value: 25, color: "#6b7280" },
  { name: "E-commerce", value: 10, color: "#4b5563" },
];

export const marketSegments = [
  { name: "Prestige", value: 45, color: "#b8960c" },
  { name: "Super-premium", value: 30, color: "#9ca3af" },
  { name: "Premium", value: 20, color: "#6b7280" },
  { name: "Entrée prestige", value: 5, color: "#4b5563" },
];

// ─── C.8 Signaux Faibles & Risques ───────────────────────────────────────────

export interface RiskSignal {
  signal: string;
  impact: string;
  impactScore: number;
  probability: string;
  probabilityScore: number;
  level: "CRITIQUE" | "MODÉRÉ" | "FAIBLE";
  description: string;
}

export const riskSignals: RiskSignal[] = [
  {
    signal: "Tarifs douaniers USA (Trump)",
    impact: "Très élevé",
    impactScore: 5,
    probability: "Élevée",
    probabilityScore: 4,
    level: "CRITIQUE",
    description: "−39% exports vins français Q4 2025. Premier marché export champagne (820M€). Impact direct sur les volumes et marges.",
  },
  {
    signal: "Phylloxéra VVF",
    impact: "Très élevé",
    impactScore: 5,
    probability: "Faible",
    probabilityScore: 1,
    level: "CRITIQUE",
    description: "Vignes Vieilles Vignes Françaises non greffées (seules en France). Risque de perte irréversible du cru le plus prestigieux (99 pts, 500–600€).",
  },
  {
    signal: "Contraction marché 3e année",
    impact: "Élevé",
    impactScore: 4,
    probability: "Élevée",
    probabilityScore: 4,
    level: "MODÉRÉ",
    description: "266M bouteilles en 2025 (−2% vs 2024). 3e année consécutive de baisse depuis le pic 2022 (326M).",
  },
  {
    signal: "Réglementation alcool (OMS)",
    impact: "Élevé",
    impactScore: 4,
    probability: "Moyenne",
    probabilityScore: 3,
    level: "MODÉRÉ",
    description: "Pression réglementaire croissante sur la consommation d'alcool. Risque d'étiquetage obligatoire et de restrictions publicitaires.",
  },
  {
    signal: "Changement climatique (millésimes)",
    impact: "Élevé",
    impactScore: 4,
    probability: "Élevée",
    probabilityScore: 4,
    level: "MODÉRÉ",
    description: "Perturbation des cycles de maturation du Pinot Noir (60% du blend Bollinger). Risque sur la régularité des millésimes.",
  },
  {
    signal: "Contrefaçon e-commerce",
    impact: "Moyen",
    impactScore: 3,
    probability: "Moyenne",
    probabilityScore: 3,
    level: "FAIBLE",
    description: "Prolifération de faux Bollinger sur les marketplaces asiatiques et plateformes non-officielles.",
  },
];

// ─── C.9 Recommandations ─────────────────────────────────────────────────────

export interface Recommendation {
  id: number;
  title: string;
  impact: string;
  impactScore: number;
  effort: string;
  effortScore: number;
  kpi: string;
  horizon: string;
  horizonType: "court" | "moyen" | "long";
  description: string;
}

export const recommendations: Recommendation[] = [
  {
    id: 1,
    title: "Diversification géographique USA → Asie-Pacifique",
    impact: "Très élevé",
    impactScore: 5,
    effort: "Élevé",
    effortScore: 4,
    kpi: "+15% volume Japon/Australie",
    horizon: "Court terme (0–6 mois)",
    horizonType: "court",
    description: "Réorienter les ressources commerciales et marketing vers le Japon (+2% 2024) et l'Australie pour compenser l'impact des tarifs Trump sur le marché américain (−39% Q4 2025).",
  },
  {
    id: 2,
    title: "Accélérer la stratégie digitale",
    impact: "Élevé",
    impactScore: 4,
    effort: "Moyen",
    effortScore: 3,
    kpi: "+50K abonnés Instagram",
    horizon: "Court terme (0–6 mois)",
    horizonType: "court",
    description: "Bollinger (285K) est en retard sur Dom Pérignon (850K) et Ruinart (420K). Renforcer la production de contenu, les collaborations créateurs et la présence sur les marchés asiatiques.",
  },
  {
    id: 3,
    title: "Monétiser le partenariat Aston Martin",
    impact: "Élevé",
    impactScore: 4,
    effort: "Faible",
    effortScore: 2,
    kpi: "+20% notoriété masculine premium",
    horizon: "Court terme (0–6 mois)",
    horizonType: "court",
    description: "Activer le partenariat Aston Martin (annoncé sept. 2025) avec des éditions limitées co-brandées, des expériences VIP et une campagne digitale ciblant le segment masculin premium.",
  },
  {
    id: 4,
    title: "Développer le wine tourism (Bicentenaire 2029)",
    impact: "Élevé",
    impactScore: 4,
    effort: "Élevé",
    effortScore: 5,
    kpi: "5 000 visiteurs/an",
    horizon: "Long terme (18 mois+)",
    horizonType: "long",
    description: "Accélérer la construction de l'hôtel 20 chambres + centre touristique à Aÿ pour capitaliser sur le Bicentenaire 2029. Créer un pilier d'expérience de marque différenciant.",
  },
  {
    id: 5,
    title: "Renforcer la certification B Corp",
    impact: "Moyen",
    impactScore: 3,
    effort: "Moyen",
    effortScore: 3,
    kpi: "Score > 90",
    horizon: "Moyen terme (6–18 mois)",
    horizonType: "moyen",
    description: "Améliorer le score B Corp (actuellement 83,9) pour dépasser le seuil symbolique de 90 et renforcer le positionnement RSE face à une clientèle premium de plus en plus sensible à l'impact environnemental.",
  },
];

// ─── C.10 Sources Validées ────────────────────────────────────────────────────

export interface Source {
  id: number;
  title: string;
  publisher: string;
  date: string;
  url: string;
  category: "Institutionnel" | "Presse" | "Digital" | "ESG" | "N/D";
}

export const sources: Source[] = [
  {
    id: 1,
    title: "Champagne shipments fall again for third successive year, down 2% in 2025",
    publisher: "The Finest Bubble / Comité Champagne",
    date: "Janvier 2026",
    url: "https://thefinestbubble.com/news-and-reviews/champagne-shipments-fall-again-for-third-successive-year-down-2-in-2025/",
    category: "Institutionnel",
  },
  {
    id: 2,
    title: "Most Admired Champagne Brands 2026 — Roederer, Krug and Bollinger lead again",
    publisher: "Wine Intelligence / Drinks International",
    date: "Mars 2026",
    url: "https://wine-intelligence.com/blogs/wine-news-insights-wine-intelligence-trends-data-reports/most-admired-champagne-brands-2026-roederer-krug-and-bollinger-lead-again",
    category: "Presse",
  },
  {
    id: 3,
    title: "The World's Most Admired Champagne Brands 2025",
    publisher: "The Finest Bubble / Drinks International",
    date: "Décembre 2024",
    url: "https://thefinestbubble.com/news-and-reviews/the-worlds-most-admired-champagne-brands-2025-drinks-international-report/",
    category: "Presse",
  },
  {
    id: 4,
    title: "Bollinger & Aston Martin — Partenariat mondial annoncé",
    publisher: "Aston Martin Official",
    date: "Septembre 2025",
    url: "https://www.astonmartin.com/en-gb/news/2025/bollinger-aston-martin-partnership",
    category: "Institutionnel",
  },
  {
    id: 5,
    title: "French wine exports hit by US tariffs — Bloomberg analysis",
    publisher: "Bloomberg",
    date: "Février 2026",
    url: "https://www.bloomberg.com/news/articles/2026-02/french-wine-exports-us-tariffs",
    category: "Presse",
  },
  {
    id: 6,
    title: "Bollinger Royal Warrant renewed — Charles III, 140 years of supply",
    publisher: "Royal Warrant Holders Association",
    date: "Décembre 2024",
    url: "https://www.royalwarrant.org/",
    category: "Institutionnel",
  },
  {
    id: 7,
    title: "Bollinger B Corp certification — Score 83.9",
    publisher: "B Lab / B Corporation",
    date: "Septembre 2023",
    url: "https://www.bcorporation.net/en-us/find-a-b-corp/company/bollinger/",
    category: "ESG",
  },
  {
    id: 8,
    title: "The Top 10 Markets for Champagne in 2024",
    publisher: "The Drinks Business",
    date: "Mars 2025",
    url: "https://www.thedrinksbusiness.com/2025/03/the-top-10-markets-for-champagne-in-2024/",
    category: "Presse",
  },
  {
    id: 9,
    title: "Most Admired Champagne Brands 2026 — Wine Intelligence",
    publisher: "Wine Intelligence",
    date: "Mars 2026",
    url: "https://wine-intelligence.com/",
    category: "Digital",
  },
  {
    id: 10,
    title: "Bollinger — Vieilles Vignes Françaises (vignes non greffées)",
    publisher: "Champagne Bollinger Official",
    date: "N/D",
    url: "https://www.champagne-bollinger.com/en/wines/vieilles-vignes-francaises",
    category: "Institutionnel",
  },
  {
    id: 11,
    title: "Bollinger R.D. 2007 — Wine Spectator review",
    publisher: "Wine Spectator",
    date: "N/D",
    url: "https://www.winespectator.com/",
    category: "Presse",
  },
  {
    id: 12,
    title: "Bollinger La Grande Année 2015 — Decanter review",
    publisher: "Decanter",
    date: "N/D",
    url: "https://www.decanter.com/",
    category: "Presse",
  },
  {
    id: 13,
    title: "Comité Champagne — Exports 2024 (données officielles)",
    publisher: "Comité Champagne",
    date: "2025",
    url: "https://www.champagne.fr/",
    category: "Institutionnel",
  },
  {
    id: 14,
    title: "Champagne market 2025 — Annual shipments report",
    publisher: "The Finest Bubble",
    date: "Janvier 2026",
    url: "https://thefinestbubble.com/",
    category: "Institutionnel",
  },
  {
    id: 15,
    title: "SimilarWeb — Trafic champagne-bollinger.com",
    publisher: "SimilarWeb",
    date: "Mars 2026",
    url: "#",
    category: "N/D",
  },
  {
    id: 16,
    title: "IWSR — Données marché alcool premium",
    publisher: "IWSR Drinks Market Analysis",
    date: "N/D",
    url: "#",
    category: "N/D",
  },
  {
    id: 17,
    title: "Bollinger Special Cuvée 007 — Édition limitée oct. 2025",
    publisher: "Champagne Bollinger / 007.com",
    date: "Octobre 2025",
    url: "https://www.champagne-bollinger.com/",
    category: "Digital",
  },
  {
    id: 18,
    title: "Bollinger Bicentenaire 2029 — Hôtel & centre touristique Aÿ",
    publisher: "Presse spécialisée",
    date: "2025",
    url: "https://www.champagne-bollinger.com/",
    category: "Institutionnel",
  },
];

// ─── Competitive Set ──────────────────────────────────────────────────────────

export interface CompetitorData {
  name: string;
  type: "Indépendant" | "Groupe";
  group?: string;
  entryPrice: number;
  prestigePrice: number;
  flagship: string;
  bcorp: boolean;
  royalWarrant: boolean;
  jamesBond: boolean;
  admiredRank: number;
  instagram: number;
  notes: string;
}

export const competitiveSet: CompetitorData[] = [
  {
    name: "Bollinger",
    type: "Indépendant",
    entryPrice: 55,
    prestigePrice: 600,
    flagship: "Special Cuvée / R.D.",
    bcorp: true,
    royalWarrant: true,
    jamesBond: true,
    admiredRank: 3,
    instagram: 285,
    notes: "Fondée 1829 · Aÿ · Pinot Noir dominant · Bicentenaire 2029",
  },
  {
    name: "Louis Roederer",
    type: "Indépendant",
    entryPrice: 45,
    prestigePrice: 500,
    flagship: "Cristal",
    bcorp: false,
    royalWarrant: false,
    jamesBond: false,
    admiredRank: 1,
    instagram: 245,
    notes: "#1 Most Admired · Biodynamie · Cristal 2015 = 100 pts",
  },
  {
    name: "Krug",
    type: "Groupe",
    group: "LVMH",
    entryPrice: 180,
    prestigePrice: 2000,
    flagship: "Grande Cuvée",
    bcorp: false,
    royalWarrant: false,
    jamesBond: false,
    admiredRank: 2,
    instagram: 310,
    notes: "Ultra-prestige · 100+ vins assemblés · Clos du Mesnil 2000€+",
  },
  {
    name: "Pol Roger",
    type: "Indépendant",
    entryPrice: 45,
    prestigePrice: 300,
    flagship: "Sir Winston Churchill",
    bcorp: false,
    royalWarrant: false,
    jamesBond: false,
    admiredRank: 5,
    instagram: 125,
    notes: "Élégance britannique · Churchill historique · Reims",
  },
  {
    name: "Billecart-Salmon",
    type: "Indépendant",
    entryPrice: 55,
    prestigePrice: 400,
    flagship: "Blanc de Blancs",
    bcorp: false,
    royalWarrant: false,
    jamesBond: false,
    admiredRank: 6,
    instagram: 165,
    notes: "Prestige familial · Rosé de référence · Mareuil-sur-Aÿ",
  },
  {
    name: "Dom Pérignon",
    type: "Groupe",
    group: "LVMH",
    entryPrice: 180,
    prestigePrice: 5000,
    flagship: "Vintage / P3 Plénitude",
    bcorp: false,
    royalWarrant: false,
    jamesBond: false,
    admiredRank: 4,
    instagram: 850,
    notes: "Ultra-prestige · Vintage only · Collaborations artistiques · 850K Instagram",
  },
  {
    name: "Ruinart",
    type: "Groupe",
    group: "LVMH",
    entryPrice: 65,
    prestigePrice: 500,
    flagship: "Dom Ruinart",
    bcorp: false,
    royalWarrant: false,
    jamesBond: false,
    admiredRank: 9,
    instagram: 420,
    notes: "Plus ancienne maison de Champagne · Art contemporain · Blanc de Blancs",
  },
  {
    name: "Taittinger",
    type: "Indépendant",
    entryPrice: 45,
    prestigePrice: 300,
    flagship: "Comtes de Champagne",
    bcorp: false,
    royalWarrant: false,
    jamesBond: false,
    admiredRank: 7,
    instagram: 195,
    notes: "Prestige familial · Chardonnay dominant · Reims",
  },
  {
    name: "Laurent-Perrier",
    type: "Indépendant",
    entryPrice: 50,
    prestigePrice: 400,
    flagship: "Grand Siècle",
    bcorp: false,
    royalWarrant: false,
    jamesBond: false,
    admiredRank: 8,
    instagram: 145,
    notes: "Grand Siècle multi-millésimes · Rosé de référence · Tours-sur-Marne",
  },
  {
    name: "Gosset",
    type: "Indépendant",
    entryPrice: 45,
    prestigePrice: 350,
    flagship: "Grand Millésime",
    bcorp: false,
    royalWarrant: false,
    jamesBond: false,
    admiredRank: 10,
    instagram: 0,
    notes: "Plus ancienne maison de vins de Champagne (1584) · Grande Réserve · Aÿ",
  },
];

// ─── KPIs Executive Snapshot ──────────────────────────────────────────────────

export const kpiData = [
  {
    id: "market-volume",
    value: 266,
    unit: "M",
    label: "Expéditions 2025",
    sub: "−2% vs 2024",
    trend: "down",
    source: "Comité Champagne, jan. 2026",
  },
  {
    id: "bollinger-rank",
    value: 3,
    unit: "e",
    label: "Most Admired 2026",
    sub: "Drinks International",
    trend: "flat",
    source: "Wine Intelligence, mars 2026",
  },
  {
    id: "bcorp-score",
    value: 83.9,
    unit: "",
    label: "Score B Corp",
    sub: "Certifié sept. 2023",
    trend: "up",
    source: "B Lab, 2023",
  },
  {
    id: "instagram",
    value: 285,
    unit: "K",
    label: "Abonnés Instagram",
    sub: "↑ tendance positive",
    trend: "up",
    source: "Instagram, mars 2026",
  },
  {
    id: "bond-years",
    value: 45,
    unit: "+",
    label: "Ans James Bond",
    sub: "Depuis 1979",
    trend: "up",
    source: "Bollinger Official",
  },
  {
    id: "vineyard",
    value: 180,
    unit: "ha",
    label: "Vignoble propre",
    sub: "Pinot Noir ~60%",
    trend: "flat",
    source: "Bollinger Official",
  },
];

export const insightCards = [
  {
    id: "tariffs",
    icon: "⚠️",
    color: "danger",
    title: "Tarifs Trump — Impact critique",
    body: "Les exportations de vins français vers les USA ont chuté de 39% au Q4 2025 suite aux tarifs douaniers. Le marché américain représente 820M€ (1er marché export champagne).",
    impact: "Diversification géographique urgente vers l'Asie-Pacifique",
    source: "Bloomberg, fév. 2026",
    sourceUrl: "https://www.bloomberg.com/",
  },
  {
    id: "market-decline",
    icon: "📉",
    color: "warning",
    title: "3e année consécutive de baisse",
    body: "Le marché champagne enregistre 266M bouteilles en 2025, soit −2% vs 2024. Depuis le pic 2022 (326M), le marché a perdu 60M bouteilles (−18%).",
    impact: "Premiumisation comme levier de valeur face à la contraction des volumes",
    source: "Comité Champagne, jan. 2026",
    sourceUrl: "https://thefinestbubble.com/",
  },
  {
    id: "admired",
    icon: "🏆",
    color: "success",
    title: "#3 Most Admired Champagne 2026",
    body: "Bollinger conserve sa 3e place au classement Drinks International Most Admired 2026, derrière Louis Roederer (#1) et Krug (#2). Stabilité remarquable depuis 3 ans.",
    impact: "Renforcer les actifs de notoriété pour viser le Top 2",
    source: "Wine Intelligence, mars 2026",
    sourceUrl: "https://wine-intelligence.com/",
  },
  {
    id: "aston",
    icon: "🚗",
    color: "gold",
    title: "Partenariat Aston Martin — Levier inexploité",
    body: "Le partenariat mondial Aston Martin (annoncé sept. 2025) cible le segment masculin premium. Aucune activation produit majeure n'a encore été lancée.",
    impact: "+20% notoriété masculine premium via éditions limitées co-brandées",
    source: "Aston Martin, sept. 2025",
    sourceUrl: "https://www.astonmartin.com/",
  },
  {
    id: "bcorp",
    icon: "🌿",
    color: "success",
    title: "B Corp 83,9 — Avantage différenciant",
    body: "Bollinger est l'une des rares grandes maisons de Champagne certifiées B Corp (score 83,9). Aucun concurrent direct du competitive set n'est certifié.",
    impact: "Atteindre le score 90 pour renforcer le positionnement RSE premium",
    source: "B Lab, sept. 2023",
    sourceUrl: "https://www.bcorporation.net/",
  },
  {
    id: "bicentennial",
    icon: "🏰",
    color: "gold",
    title: "Bicentenaire 2029 — Opportunité unique",
    body: "La préparation du Bicentenaire 2029 (hôtel 20 chambres + centre touristique à Aÿ) représente une opportunité de positionnement unique dans le wine tourism premium.",
    impact: "5 000 visiteurs/an · Nouveau pilier d'expérience de marque",
    source: "Bollinger Official, 2025",
    sourceUrl: "https://www.champagne-bollinger.com/",
  },
];
