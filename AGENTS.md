<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application rules
- Keep this personal brand site as one index route with section anchors, since the requested experience is one scrolling page.
- Keep outbound document URLs in src/config/links.ts and career content in src/config/profile.ts so downloads and previews share their sources.
- Keep portfolio project links in src/config/links.ts and localized project records in src/config/profile.ts; render projects from those records so additional projects use the same case-study structure without duplicating markup.
- Define visual styles and both color themes in src/styles.css; use shared Button variants for interactive controls.
- Keep UI copy for all languages (en/es/pt) in src/config/i18n.ts and localized career content in src/config/profile.ts, so every language stays complete and in sync.
- Keep tech-stack records and their evidence in src/config/profile.ts; distinguish project technologies from training rather than implying unverified proficiency.
- Keep the repository identity in one constant in src/config/links.ts and derive every GitHub URL from it, so renaming the repository changes a single line; the repository section must still render when its live stats cannot be read.
