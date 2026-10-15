import type { Lang } from "@/config/i18n";

type L = Record<Lang, string>;
type TrackSource = {
  id: string;
  name: L;
  subtitle: L;
  accent: "primary" | "lavender";
  items: { role: L; company: string; dates: L; description: L; result: L }[];
};

export type ExperienceTrack = {
  id: string;
  name: string;
  subtitle: string;
  accent: "primary" | "lavender";
  items: { role: string; company: string; dates: string; description: string; result: string }[];
};

const same = (v: string): L => ({ en: v, es: v, pt: v });

export const projects: {
  id: "my-job-lab";
  name: string;
  category: L;
  highlight: L;
  problem: L;
  solution: L;
  result: L;
}[] = [
  {
    id: "my-job-lab",
    name: "My Job Lab",
    category: { en: "AI agent · Career tools", es: "Agente de IA · Empleo", pt: "Agente de IA · Carreira" },
    highlight: { en: "An agent that searches for jobs for people.", es: "Un agente que busca trabajo para las personas.", pt: "Um agente que busca emprego para as pessoas." },
    problem: { en: "Finding work means spending time searching for opportunities. I wanted to help people with that search.", es: "Encontrar trabajo implica dedicar tiempo a buscar oportunidades. Quise ayudar a las personas con esa búsqueda.", pt: "Encontrar trabalho exige dedicar tempo à busca de oportunidades. Quis ajudar as pessoas nessa busca." },
    solution: { en: "I built My Job Lab with an AI agent inside the website that searches for jobs for its users.", es: "Construí My Job Lab con un agente de IA dentro de la página que busca empleo para sus usuarios.", pt: "Construí o My Job Lab com um agente de IA dentro do site que busca emprego para seus usuários." },
    result: { en: "A built product with a job-search agent, available to explore in the demo. Usage and impact metrics are not yet documented.", es: "Un producto construido con un agente de búsqueda de empleo, disponible para explorar en la demo. Las métricas de uso e impacto aún no están documentadas.", pt: "Um produto construído com um agente de busca de emprego, disponível para explorar na demo. As métricas de uso e impacto ainda não estão documentadas." },
  },
];

const tracks: TrackSource[] = [
  {
    id: "client-growth",
    name: { en: "Client & Account Growth", es: "Crecimiento de clientes y cuentas", pt: "Crescimento de clientes e contas" },
    subtitle: { en: "Growing revenue and retention on ad platforms and marketplaces", es: "Creciendo ingresos y retención en plataformas publicitarias y marketplaces", pt: "Aumentando receita e retenção em plataformas de anúncios e marketplaces" },
    accent: "primary",
    items: [
      { role: same("Microsoft Advertising Partner Manager"), company: "TP (Teleperformance), Microsoft Advertising partner operation", dates: { en: "2026–Present", es: "2026–Actual", pt: "2026–Atual" }, description: { en: "Strategic partner to 70+ U.S. media agencies; turn client goals into budget, audience and platform strategy; help shift TP from BPO-style delivery to an agency-style consultative model.", es: "Socia estratégica de más de 70 agencias de medios de EE. UU.; convierto los objetivos del cliente en estrategia de presupuesto, audiencia y plataforma; impulso el paso de TP de un modelo tipo BPO a uno consultivo tipo agencia.", pt: "Parceira estratégica de mais de 70 agências de mídia dos EUA; transformo metas dos clientes em estratégia de orçamento, público e plataforma; ajudo a TP a migrar de um modelo tipo BPO para um modelo consultivo de agência." }, result: same("[X% portfolio spend growth] · [X% retention]") },
      { role: same("Amazon Brand Manager"), company: "My Amazon Guy", dates: { en: "May–Sep 2025", es: "May–Sep 2025", pt: "Mai–Set 2025" }, description: { en: "One growth plan per brand across PPC, SEO, catalog and design; owned client relationships.", es: "Un plan de crecimiento por marca en PPC, SEO, catálogo y diseño; responsable de la relación con los clientes.", pt: "Um plano de crescimento por marca em PPC, SEO, catálogo e design; responsável pelo relacionamento com os clientes." }, result: { en: "under 5% monthly churn", es: "churn mensual inferior al 5%", pt: "churn mensal abaixo de 5%" } },
      { role: same("Amazon Account Manager"), company: "AMZ Advisers", dates: { en: "Sep 2023–Sep 2024", es: "Sep 2023–Sep 2024", pt: "Set 2023–Set 2024" }, description: { en: "KPIs and roadmap per account (TACoS, CVR, CTR), A/B tests on listings and ads, Seller Support escalations.", es: "KPIs y roadmap por cuenta (TACoS, CVR, CTR), pruebas A/B en listings y anuncios, escalamientos con Seller Support.", pt: "KPIs e roadmap por conta (TACoS, CVR, CTR), testes A/B em listings e anúncios, escalonamentos com o Seller Support." }, result: same("[X% sales growth]") },
      { role: { en: "Customer Success Manager, Amazon Ads reseller partner", es: "Customer Success Manager, partner revendedor de Amazon Ads", pt: "Customer Success Manager, parceiro revendedor de Amazon Ads" }, company: "Digimark → Adsmovil", dates: { en: "Aug 2021–Sep 2023", es: "Ago 2021–Sep 2023", pt: "Ago 2021–Set 2023" }, description: { en: "Platform adoption and training for GroupM, Publicis, Mindshare, Wavemaker, Accenture and more.", es: "Adopción de la plataforma y capacitación para GroupM, Publicis, Mindshare, Wavemaker, Accenture y más.", pt: "Adoção da plataforma e treinamento para GroupM, Publicis, Mindshare, Wavemaker, Accenture e outros." }, result: { en: "relationships retained through company transition", es: "relaciones retenidas durante la transición de la empresa", pt: "relacionamentos mantidos durante a transição da empresa" } },
      { role: { en: "E-commerce Intern", es: "Practicante de e-commerce", pt: "Estagiária de e-commerce" }, company: "The Consumer Goods Forum", dates: same("2021"), description: { en: "Built and tested digital assets and microsites for Walmart, Éxito, Jumbo and Ara.", es: "Construí y probé activos digitales y micrositios para Walmart, Éxito, Jumbo y Ara.", pt: "Criei e testei ativos digitais e microsites para Walmart, Éxito, Jumbo e Ara." }, result: same("[X SKUs linked]") },
    ],
  },
  {
    id: "product-gtm",
    name: { en: "Product & Go-to-Market", es: "Producto y go-to-market", pt: "Produto e go-to-market" },
    subtitle: { en: "Defining what to build and how it reaches the market", es: "Definiendo qué construir y cómo llega al mercado", pt: "Definindo o que construir e como chega ao mercado" },
    accent: "lavender",
    items: [
      { role: same("Product Manager"), company: "Mango Fintech", dates: { en: "Sep 2024–May 2025", es: "Sep 2024–May 2025", pt: "Set 2024–Mai 2025" }, description: { en: "User problems, value proposition and MVP scope at pre-funding stage.", es: "Problemas de usuario, propuesta de valor y alcance del MVP en etapa pre-inversión.", pt: "Problemas dos usuários, proposta de valor e escopo do MVP em fase pré-investimento." }, result: same("[MVP shipped in X months]") },
      { role: { en: "Marketing Strategist", es: "Estratega de marketing", pt: "Estrategista de marketing" }, company: "BuildERP (DevTech)", dates: { en: "Oct 2025–Aug 2026", es: "Oct 2025–Ago 2026", pt: "Out 2025–Ago 2026" }, description: { en: "Go-to-market and demand generation for a B2B construction ERP.", es: "Go-to-market y generación de demanda para un ERP B2B de construcción.", pt: "Go-to-market e geração de demanda para um ERP B2B de construção." }, result: same("[X qualified leads]") },
      { role: { en: "Strategy & Ops Consultant", es: "Consultora de estrategia y operaciones", pt: "Consultora de estratégia e operações" }, company: "Enkube ERP / Bogotá Chamber of Commerce", dates: same("2022"), description: { en: "360° product and operations roadmap; Jr. Product Owner.", es: "Roadmap 360° de producto y operaciones; Jr. Product Owner.", pt: "Roadmap 360° de produto e operações; Jr. Product Owner." }, result: { en: "Award-winning capstone + Master's scholarship", es: "Capstone premiado + beca de maestría", pt: "Capstone premiado + bolsa de mestrado" } },
    ],
  },
];

export function getExperienceTracks(lang: Lang): ExperienceTrack[] {
  return tracks.map((t) => ({ id: t.id, accent: t.accent, name: t.name[lang], subtitle: t.subtitle[lang], items: t.items.map((i) => ({ role: i.role[lang], company: i.company, dates: i.dates[lang], description: i.description[lang], result: i.result[lang] })) }));
}

export type Testimonial = { quote: string; name: string; role: string; company: string };

// Replace the bracketed placeholders with real client quotes.
export const testimonials: Testimonial[] = [
  { quote: "[Client quote about Michelle’s work at Enkube — e.g. how the 360° roadmap helped the team.]", name: "[Name]", role: "[Role]", company: "Enkube ERP" },
  { quote: "[Client quote about account growth or client partnership.]", name: "[Name]", role: "[Role]", company: "[Company]" },
  { quote: "[Client quote about results achieved together.]", name: "[Name]", role: "[Role]", company: "[Company]" },
];

const educationSource: [L, string, L][] = [
  [same("MBIT"), "Universidad de los Andes", { en: "Aug 2026–Present", es: "Ago 2026–Actual", pt: "Ago 2026–Atual" }],
  [same("LAB10 AI Builders"), "", same("2026")],
  [{ en: "Microsoft Advertising certifications", es: "Certificaciones de Microsoft Advertising", pt: "Certificações Microsoft Advertising" }, "Search, Display & Video, Retail · MCEM", same("2026")],
  [{ en: "Amazon Learning Console certifications", es: "Certificaciones de Amazon Learning Console", pt: "Certificações Amazon Learning Console" }, "", same("2024")],
  [{ en: "Product Management & Scrum Product Ownership course", es: "Curso de Product Management y Scrum Product Ownership", pt: "Curso de Product Management e Scrum Product Ownership" }, "Pluralsight", same("2025")],
  [{ en: "B.A. Business Administration & Marketing", es: "Profesional en Administración de Empresas y Mercadeo", pt: "Bacharelado em Administração e Marketing" }, "Areandina", same("2022")],
];

export function getEducation(lang: Lang): [string, string, string][] {
  return educationSource.map(([t, i, d]) => [t[lang], i, d[lang]]);
}
