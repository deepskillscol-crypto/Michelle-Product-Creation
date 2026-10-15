# Michelle Pulido — Personal Brand Site

A one-page personal brand home for **Michelle Pulido** — Growth Partner, E-commerce & Ad Platforms, Product Owner — aimed at U.S. companies hiring for Growth Partner / Client Growth / Product Ownership roles.

**Live site:** https://pulido-impact-hub.lovable.app

## Highlights

- **Multilingual:** English, Spanish and Portuguese, with instant language switching and browser-language detection.
- **Results-first copy:** every experience item leads with a "So what" outcome, in an executive tone.
- **Portfolio case studies:** one card per project — problem, solution, result, demo and GitHub links.
- **Interactive elements:** Calendly booking embed, intro video player (YouTube / Vimeo / Loom / MP4 auto-detection, lazy-loaded), filterable credentials grid, expandable experience results, WhatsApp quick contact.
- **Accessible & fast:** respects `prefers-reduced-motion`, dark mode support, mobile-first responsive layout.

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React 19, SSR) + [TanStack Router](https://tanstack.com/router)
- [Tailwind CSS v4](https://tailwindcss.com) with semantic design tokens and dual light/dark themes
- TypeScript, Vite

## Project structure

```
src/
  routes/index.tsx      # One-page site, section anchors
  config/               # Links, profile data, i18n dictionaries
  data/credentials.ts   # Credentials & learning records
  styles.css            # Design tokens, glass cards, both themes
  components/ui/        # Shared UI components
```

## Customization

All external links (demo, GitHub, Calendly, LinkedIn, WhatsApp, résumé, portfolio deck) live in `src/config/links.ts`. Copy for all three languages lives in `src/config/i18n.ts` and `src/config/profile.ts`.

---

© 2026 Michelle Pulido
