export type CredentialCategory = "events" | "ads" | "product" | "languages" | "education";

export type Credential = {
  title: string;
  issuer: string;
  date: string; // display string
  sortDate: string; // YYYY-MM, used for newest-first sorting
  category: CredentialCategory;
  detail?: string;
  url?: string; // optional link — shows "View credential" when set
  badge?: "Speaker" | "Event";
};

export const AD_PLATFORMS_CERTIFIED = "Microsoft · Amazon · Sizmek";

export const credentials: Credential[] = [
  // Events & Talks
  { title: "PlatziConf 2026", issuer: "Platzi", date: "2026", sortDate: "2026-01", category: "events", badge: "Event", url: "" },
  { title: "Google Cloud Next '25", issuer: "Google Cloud", date: "Apr 2025", sortDate: "2025-04", category: "events", detail: "Las Vegas", badge: "Event", url: "" },
  { title: "Speaker — Executive diagnosis presentation (Enkube ERP)", issuer: "CILAB, Bogotá Chamber of Commerce", date: "Jul 2022", sortDate: "2022-07", category: "events", badge: "Speaker", url: "" },

  // Ad Platforms & E-commerce
  { title: "Microsoft Advertising Certifications — Search, Display & Video, Retail", issuer: "Microsoft", date: "2026", sortDate: "2026-01", category: "ads", url: "" },
  { title: "Microsoft Client Engagement Methodology (MCEM)", issuer: "Microsoft", date: "2026", sortDate: "2026-01", category: "ads", url: "" },
  { title: "Amazon DSP Campaigns Certification", issuer: "Amazon Ads Learning Console", date: "May 2024", sortDate: "2024-05", category: "ads", url: "" },
  { title: "Amazon Ads Advanced Retail Certification", issuer: "Amazon Ads Learning Console", date: "May 2024", sortDate: "2024-05", category: "ads", url: "" },
  { title: "Amazon Advertising Foundations Certification", issuer: "Amazon Ads Learning Console", date: "May 2024", sortDate: "2024-05", category: "ads", url: "" },
  { title: "Amazon PPC", issuer: "MAG School (My Amazon Guy)", date: "May 2025", sortDate: "2025-05", category: "ads", url: "" },
  { title: "Amazon SEO", issuer: "MAG School (My Amazon Guy)", date: "May 2025", sortDate: "2025-05", category: "ads", url: "" },
  { title: "Launching on Amazon", issuer: "MAG School (My Amazon Guy)", date: "May 2025", sortDate: "2025-05", category: "ads", url: "" },
  { title: "Amazon Catalog", issuer: "MAG School (My Amazon Guy)", date: "May 2025", sortDate: "2025-05", category: "ads", url: "" },
  { title: "Sizmek Ad Suite Certification", issuer: "Sizmek by Amazon Ads", date: "2021", sortDate: "2021-01", category: "ads", url: "" },
  { title: "Introduction to Programmatic Advertising", issuer: "Platzi", date: "Mar 2023", sortDate: "2023-03", category: "ads", detail: "12 hours", url: "" },
  { title: "Digital Advertising & Paid Media Fundamentals", issuer: "Platzi", date: "Mar 2023", sortDate: "2023-03", category: "ads", detail: "14 hours", url: "" },
  { title: "Marketing & Sales Methodologies", issuer: "RD Station", date: "2023", sortDate: "2023-01", category: "ads", url: "" },

  // Product, Tech & AI
  { title: "LAB10 AI Builders", issuer: "LAB10", date: "2026", sortDate: "2026-01", category: "product", detail: "Prototyping, workflow automation and agent design", url: "" },
  { title: "AI Fluency", issuer: "Anthropic Academy", date: "2026", sortDate: "2026-01", category: "product", url: "" },
  { title: "Product Management", issuer: "Pluralsight", date: "Jun 2025", sortDate: "2025-06", category: "product", url: "" },
  { title: "Scrum Product Ownership (course)", issuer: "Pluralsight", date: "Jun 2025", sortDate: "2025-06", category: "product", url: "" },
  { title: "Software Development Diploma", issuer: "Universidad Sergio Arboleda & MinTIC (Misión TIC)", date: "Nov 2022", sortDate: "2022-11", category: "product", detail: "200 hours", url: "" },
  { title: "Java Programming Diploma", issuer: "Universidad Sergio Arboleda & MinTIC (Misión TIC)", date: "Sep 2022", sortDate: "2022-09", category: "product", detail: "200 hours", url: "" },
  { title: "Python Programming Fundamentals Diploma", issuer: "Universidad Sergio Arboleda & MinTIC (Misión TIC)", date: "Jul 2022", sortDate: "2022-07", category: "product", detail: "200 hours", url: "" },

  // Languages
  { title: "Portuguese (Brazil) — CEFR B2", issuer: "goFLUENT proficiency test", date: "Feb 2026", sortDate: "2026-02", category: "languages", url: "" },
  { title: "Portuguese A2", issuer: "IBRACO (Brazil–Colombia Cultural Institute)", date: "2025", sortDate: "2025-01", category: "languages", url: "" },
  { title: "English — CEFR C1 (Aptis, 4 skills)", issuer: "British Council / Centro Colombo Americano", date: "Aug 2021", sortDate: "2021-08", category: "languages", url: "" },

  // Education
  { title: "Master's in Business Information Technology (MBIT)", issuer: "Universidad de los Andes", date: "2026 – Present", sortDate: "2026-08", category: "education", url: "" },
  { title: "B.A. Marketing Administration", issuer: "Fundación Universitaria del Área Andina", date: "Nov 2022", sortDate: "2022-11", category: "education", url: "" },
  { title: "Online Business Entrepreneurship", issuer: "Hudson County Community College", date: "Dec 2020", sortDate: "2020-12", category: "education", detail: "36 hours", url: "" },
  { title: "Technologist in Market Management", issuer: "SENA", date: "Aug 2018", sortDate: "2018-08", category: "education", url: "" },
];
