export type ExperienceTrack = {
  id: string;
  name: string;
  subtitle: string;
  accent: "primary" | "lavender";
  items: { role: string; company: string; dates: string; description: string; result: string }[];
};

export const experienceTracks: ExperienceTrack[] = [
  {
    id: "client-growth",
    name: "Client & Account Growth",
    subtitle: "Growing revenue and retention on ad platforms and marketplaces",
    accent: "primary",
    items: [
      { role: "Microsoft Advertising Partner Manager", company: "TP (Teleperformance), Microsoft Advertising partner operation", dates: "2026–Present", description: "Strategic partner to 70+ U.S. media agencies; turn client goals into budget, audience and platform strategy; help shift TP from BPO-style delivery to an agency-style consultative model.", result: "[X% portfolio spend growth] · [X% retention]" },
      { role: "Amazon Brand Manager", company: "My Amazon Guy", dates: "May–Sep 2025", description: "One growth plan per brand across PPC, SEO, catalog and design; owned client relationships.", result: "under 5% monthly churn" },
      { role: "Amazon Account Manager", company: "AMZ Advisers", dates: "Sep 2023–Sep 2024", description: "KPIs and roadmap per account (TACoS, CVR, CTR), A/B tests on listings and ads, Seller Support escalations.", result: "[X% sales growth]" },
      { role: "Customer Success Manager, Amazon Ads reseller partner", company: "Digimark → Adsmovil", dates: "Aug 2021–Sep 2023", description: "Platform adoption and training for GroupM, Publicis, Mindshare, Wavemaker, Accenture and more.", result: "relationships retained through company transition" },
      { role: "E-commerce Intern", company: "The Consumer Goods Forum", dates: "2021", description: "Built and tested digital assets and microsites for Walmart, Éxito, Jumbo and Ara.", result: "[X SKUs linked]" },
    ],
  },
  {
    id: "product-gtm",
    name: "Product & Go-to-Market",
    subtitle: "Defining what to build and how it reaches the market",
    accent: "lavender",
    items: [
      { role: "Product Manager", company: "Mango Fintech", dates: "Sep 2024–May 2025", description: "User problems, value proposition and MVP scope at pre-funding stage.", result: "[MVP shipped in X months]" },
      { role: "Marketing Strategist", company: "BuildERP (DevTech)", dates: "Oct 2025–Aug 2026", description: "Go-to-market and demand generation for a B2B construction ERP.", result: "[X qualified leads]" },
      { role: "Strategy & Ops Consultant", company: "Enkube ERP / Bogotá Chamber of Commerce", dates: "2022", description: "360° product and operations roadmap; Jr. Product Owner.", result: "Award-winning capstone + Master's scholarship" },
    ],
  },
];

export const education = [
  ["MBIT", "Universidad de los Andes", "Aug 2026–Present"],
  ["LAB10 AI Builders", "", "2026"],
  ["Microsoft Advertising certifications", "Search, Display & Video, Retail · MCEM", "2026"],
  ["Amazon Learning Console certifications", "", "2024"],
  ["Product Management & Scrum Product Ownership course", "Pluralsight", "2025"],
  ["B.A. Business Administration & Marketing", "Areandina", "2022"],
];
