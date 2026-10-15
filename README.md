# Pulido Impact Hub

Build a one-page personal brand home for Michelle Pulido, in English, aimed at U.S. companies hiring for Growth Partner / Client Growth / Product Ownership roles. Executive, results-first tone (McKinsey "so what": every line states the impact). Must be mobile-friendly and fast.

VISUAL STYLE — match exactly the look and feel of her existing site deepskills.lovable.app:
- White background, deep navy text hsl(220 25% 10%), primary royal blue hsl(220 70% 50%), lavender accent hsl(250 60% 75%), lime-yellow highlight hsl(62 90% 65%) used sparingly (e.g. underline/marker behind key numbers), hero gradient linear-gradient(135deg, hsl(220 70% 50%), hsl(250 60% 75%)).
- Inter font, radius 0.75rem, glass cards (bg-card/80 backdrop-blur border-border/50 shadow-sm), soft organic blob shapes floating in the hero background, gentle fade-up on scroll animations, respect prefers-reduced-motion.
- Dark mode support.

SECTIONS
1. Nav: "Michelle Pulido" + links (Impact, Experience, Portfolio, Résumé, Contact) + primary button "Download résumé".
2. Hero: Headline "I turn account data into growth plans clients trust — and keep the clients who fund them." Sub: "Growth Partner · E-commerce & Ad Platforms · Product Ownership". Supporting line: "8+ years across Amazon, Microsoft Advertising, SaaS & fintech · U.S. + LATAM · EN · ES · PT". Buttons: "View portfolio deck" and "Download résumé". Leave a circular photo placeholder on the right that she can replace.
3. Impact strip (4 stat cards): "70+ U.S. agencies managed", "<5% monthly client churn", "8+ years in ad tech, marketplaces & SaaS", "Top capstone consulting project · Bogotá Chamber of Commerce".
4. What I do (3 cards): Account growth (diagnose why an account is or isn't growing, options A/B/C, act); Client partnership (trusted advisor, hard conversations backed by data); Product thinking (understand why customers buy before deciding where to invest).
5. Experience timeline — each item: role · company · dates, one-line "So what" result, and a "Result" chip. Keep bracket placeholders exactly as written so she fills real numbers:
- Microsoft Advertising Partner Manager · TP (Teleperformance), Microsoft Advertising partner operation · 2026–Present — Strategic partner to 70+ U.S. media agencies; turn client goals into budget, audience and platform strategy; help shift TP from BPO-style delivery to an agency-style consultative model. Result: [X% portfolio spend growth] · [X% retention]
- Marketing Strategist · BuildERP (DevTech) · Oct 2025–Aug 2026 — Go-to-market and demand generation for a B2B construction ERP. Result: [X qualified leads]
- Amazon Brand Manager · My Amazon Guy · May–Sep 2025 — One growth plan per brand across PPC, SEO, catalog and design; owned client relationships. Result: under 5% monthly churn
- Product Manager · Mango Fintech · Sep 2024–May 2025 — User problems, value proposition and MVP scope at pre-funding stage. Result: [MVP shipped in X months]
- Amazon Account Manager · AMZ Advisers · Sep 2023–Sep 2024 — KPIs and roadmap per account (TACoS, CVR, CTR), A/B tests on listings and ads, Seller Support escalations. Result: [X% sales growth]
- Customer Success Manager, Amazon Ads reseller partner · Digimark → Adsmovil · Aug 2021–Sep 2023 — Platform adoption and training for GroupM, Publicis, Mindshare, Wavemaker, Accenture and more. Result: relationships retained through company transition
- Strategy & Ops Consultant · Enkube ERP / Bogotá Chamber of Commerce · 2022 — 360° product and operations roadmap; Jr. Product Owner. Result: Award-winning capstone + Master's scholarship
6. Portfolio section: card titled "Growth Partner portfolio deck" with description "One slide per role: context, what I did, results, and what I can bring to your team." Button "Open deck" linking to a placeholder URL constant PORTFOLIO_DECK_URL defined at the top of a config file (src/config/links.ts) so it's easy to swap. Also an embedded iframe preview area that uses the same constant (Canva embed links end with ?embed).
7. Résumé section: "Latest résumé" with a "Download PDF" button pointing to /resume/Michelle-Pulido-Resume.pdf (put a RESUME_URL constant in the same config file) and a note "Updated October 2026".
8. Education & certifications (compact): MBIT – Universidad de los Andes (Aug 2026–Present); LAB10 AI Builders (2026); Microsoft Advertising certifications (Search, Display & Video, Retail) & MCEM (2026); Amazon Learning Console certifications (2024); Pluralsight Product Management & Scrum Product Ownership course (2025); B.A. Business Administration & Marketing – Areandina (2022).
9. Contact: email michelleescobar2703@gmail.com (mailto), LinkedIn https://www.linkedin.com/in/michellepulidoescobar/, "Based in Bogotá · Works U.S. hours · Available to travel".
Footer: © 2026 Michelle Pulido.

Important accuracy rule: she works for TP (Teleperformance) as a Microsoft Advertising partner — never say she is employed by Microsoft. Do not invent any numbers; keep the [X] placeholders visible.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://pulido-impact-hub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3ddffbcb-2f12-4fb1-b3df-f6c308a3547c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
