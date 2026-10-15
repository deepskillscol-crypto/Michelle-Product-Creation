import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { ArrowDown, ArrowDownToLine, ArrowRight, ArrowUpRight, Award, BarChart3, Bot, BriefcaseBusiness, Calendar, Check, ChevronDown, FileText, Github, GraduationCap, Handshake, Layers3, Linkedin, Mail, Menu, MessageCircle, Moon, Play, Presentation, Quote, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PORTFOLIO_DECK_URL, RESUME_URL, IS_PORTFOLIO_PLACEHOLDER, CALENDLY_URL, LINKEDIN_URL, GITHUB_URL, INTRO_VIDEO_URL, WHATSAPP_URL, PROJECT_LINKS } from "@/config/links";
import { credentials, AD_PLATFORMS_CERTIFIED, type CredentialCategory } from "@/data/credentials";
import { getExperienceTracks, projects, testimonials, type ExperienceTrack } from "@/config/profile";
import { dictionaries, LANGS, type Lang, type Dict } from "@/config/i18n";
import michellePhoto from "@/assets/michelle-pulido.jpg.asset.json";
import uniandesLogo from "@/assets/uniandes-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Michelle Pulido | AI Product Engineering Portfolio" },
    { name: "description", content: "Michelle Pulido is transitioning to AI Product Engineer. Explore My Job Lab, her job-search agent project, and her background in growth and product." },
    { property: "og:title", content: "Michelle Pulido | AI Product Engineering Portfolio" },
    { property: "og:description", content: "Explore Michelle’s built projects, starting with My Job Lab: a website with an AI agent that helps people search for jobs." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const navIds = ["portfolio", "impact", "experience", "resume", "credentials", "book", "contact"] as const;
const serviceIcons = [BarChart3, Handshake, Layers3];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [missingAsset, setMissingAsset] = useState<"deck" | "resume" | null>(null);
  const [lang, setLang] = useState<Lang>("en");
  const t = dictionaries[lang];
  const experienceTracks = getExperienceTracks(lang);
  const [activeTrack, setActiveTrack] = useState(experienceTracks[0]?.id ?? "");
  useEffect(() => {
    const saved = window.localStorage.getItem("michelle-lang") as Lang | null;
    const browser = navigator.language.slice(0, 2) as Lang;
    const initial = saved && LANGS.includes(saved) ? saved : LANGS.includes(browser) ? browser : "en";
    setLang(initial);
  }, []);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  function changeLang(next: Lang) { setLang(next); window.localStorage.setItem("michelle-lang", next); }
  const bookSectionRef = useRef<HTMLElement | null>(null);
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);
  useEffect(() => {
    const section = bookSectionRef.current;
    if (!section) return;
    const widgetRoot: HTMLElement = section;
    let timer: ReturnType<typeof setTimeout> | undefined;
    function verifyWidget() {
      timer = setTimeout(() => { if (widgetRoot.querySelector(".calendly-inline-widget iframe")) setCalendlyLoaded(true); }, 1500);
    }
    function loadScript() {
      if (document.querySelector("script[data-calendly]")) { verifyWidget(); return; }
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.dataset["calendly"] = "true";
      script.addEventListener("load", verifyWidget);
      document.body.appendChild(script);
    }
    const observer = new IntersectionObserver((entries) => { if (entries.some((entry) => entry.isIntersecting)) { loadScript(); observer.disconnect(); } }, { rootMargin: "240px" });
    observer.observe(section);
    return () => { observer.disconnect(); if (timer) clearTimeout(timer); };
  }, []);
  useEffect(() => {
    const isDark = window.localStorage.getItem("michelle-theme") === "dark" || (!window.localStorage.getItem("michelle-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("michelle-theme", next ? "dark" : "light");
  }
  function openDeck(event: MouseEvent<HTMLAnchorElement>) {
    if (IS_PORTFOLIO_PLACEHOLDER) { event.preventDefault(); setMissingAsset("deck"); }
  }
  async function downloadResume(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    try {
      const response = await fetch(RESUME_URL, { method: "HEAD" });
      if (!response.ok || !response.headers.get("content-type")?.includes("application/pdf")) { setMissingAsset("resume"); return; }
      const link = document.createElement("a"); link.href = RESUME_URL; link.download = "Michelle-Pulido-Resume.pdf"; link.click();
    } catch { setMissingAsset("resume"); }
  }
  const resumeLink = { href: RESUME_URL, onClick: downloadResume, download: "Michelle-Pulido-Resume.pdf" };
  const deckLink = { href: PORTFOLIO_DECK_URL, onClick: openDeck, target: "_blank", rel: "noopener noreferrer" };
  return (
    <>
      <header className="site-nav">
        <div className="container-site nav-inner">
          <a href="#home" className="brand" aria-label="Michelle Pulido home"><span className="brand-mark">mp.</span>Michelle Pulido<span className="text-primary">.</span></a>
          <nav aria-label="Main navigation" className={`nav-links ${menuOpen ? "is-open" : ""}`} id="main-navigation">{navIds.map((id) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{t.nav[id]}</a>)}</nav>
          <div className="nav-actions">
            <div className="lang-switch" role="group" aria-label={t.langLabel}>{LANGS.map((l) => <button key={l} type="button" className={lang === l ? "is-active" : ""} aria-pressed={lang === l} onClick={() => changeLang(l)}>{l.toUpperCase()}</button>)}</div>
            <Button variant="ghost" size="icon" aria-label={dark ? t.lightTheme : t.darkTheme} title={dark ? t.lightTheme : t.darkTheme} onClick={toggleTheme}>{dark ? <Sun size={16} /> : <Moon size={16} />}</Button>
            <Button asChild variant="ghost" size="icon" className="nav-linkedin"><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label={t.linkedinAria} title={t.linkedinAria}><Linkedin size={16} /></a></Button>
            <Button asChild variant="ghost" size="icon" className="nav-github"><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label={t.githubAria} title={t.githubAria}><Github size={16} /></a></Button>
            <Button asChild className="nav-resume" size="sm"><a href="#book"><Calendar />{t.bookCall}</a></Button>
            <Button className="menu-trigger" variant="ghost" size="icon" aria-label={menuOpen ? t.closeMenu : t.openMenu} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
          </div>
        </div>
      </header>
      <main>
        <section id="home" className="hero" aria-labelledby="hero-heading">
          <div className="hero-shape shape-one" aria-hidden="true" /><div className="hero-shape shape-two" aria-hidden="true" />
          <div className="container-site hero-inner">
            <div className="hero-copy reveal">
              <div className="eyebrow"><span className="eyebrow-line" />{t.eyebrow}</div>
              <h1 id="hero-heading">{t.heroTitle}</h1>
              <p className="hero-subtitle">{t.heroSubtitle}</p>
              <p className="hero-focus">{t.heroFocus}</p>
              <p className="hero-details">{t.heroDetails}</p>
              <div className="hero-buttons"><Button asChild variant="hero" size="lg"><a href="#portfolio">{t.projectsCta}<ArrowDown /></a></Button><Button asChild variant="heroOutline" size="lg"><a href="#book"><Calendar />{t.bookCall}</a></Button><Button asChild variant="heroOutline" size="lg"><a {...resumeLink}><ArrowDownToLine />{t.downloadResume}</a></Button></div>
              <div className="hero-social"><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label={t.linkedinAria} className="hero-linkedin"><Linkedin size={14} />LinkedIn<ArrowUpRight size={12} /></a><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label={t.githubAria} className="hero-linkedin"><Github size={14} />GitHub<ArrowUpRight size={12} /></a></div>
            </div>
            <div className="portrait-area reveal">
              <div className="portrait-ring"><img className="portrait-photo" src={michellePhoto.url} alt={t.portraitAlt} width={290} height={290} loading="eager" /></div>
              <div className="portrait-badge"><span className="status-dot" />{t.badge}</div>
            </div>
          </div>
          <a href="#portfolio" className="hero-bottom">{t.projectsCta}<ArrowDown size={13} /></a>
        </section>
        <section id="portfolio" className="section projects-section" aria-labelledby="portfolio-heading">
          <div className="container-site">
            <SectionHeading number="01" title={t.projectsTitle} id="portfolio-heading" note={t.projectsNote} />
            <p className="projects-intro">{t.projectsIntro}</p>
            <div className="projects-grid">
              {projects.map((project) => {
                const links = PROJECT_LINKS[project.id];
                return <article key={project.id} className="glass-card project-card">
                  <div className="project-overview">
                    <span className="project-featured"><Bot size={16} />{t.projectFeatured}</span>
                    <h3>{project.name}</h3>
                    <p className="project-category">{project.category[lang]}</p>
                    <p className="project-highlight">{project.highlight[lang]}</p>
                    <div className="project-actions">
                      <Button asChild><a href={links.demo} target="_blank" rel="noopener noreferrer" aria-label={`${t.projectDemo}: ${project.name}`}>{t.projectDemo}<ArrowUpRight /></a></Button>
                      {links.github ? <Button asChild variant="outline"><a href={links.github} target="_blank" rel="noopener noreferrer" aria-label={`${t.projectGithub}: ${project.name}`}><Github />{t.projectGithub}</a></Button> : <span className="project-link-pending"><Github size={15} />{t.projectGithubPending}</span>}
                    </div>
                  </div>
                  <dl className="project-case-study">
                    <div><dt><span>01</span>{t.projectProblem}</dt><dd>{project.problem[lang]}</dd></div>
                    <div><dt><span>02</span>{t.projectSolution}</dt><dd>{project.solution[lang]}</dd></div>
                    <div><dt><span>03</span>{t.projectResult}</dt><dd>{project.result[lang]}</dd></div>
                  </dl>
                </article>;
              })}
            </div>
          </div>
        </section>
        <section className="section video-section" aria-labelledby="video-heading">
          <div className="container-site">
            <SectionHeading number="02" title={t.videoTitle} id="video-heading" note={t.videoNote} />
            <p className="video-sub">{t.videoSub}</p>
            <IntroVideo t={t} />
            <p className="video-live-link">{t.liveTalk} <a href="#book">{t.bookCall}<ArrowRight size={12} /></a></p>
          </div>
        </section>
        <section id="impact" className="impact-section" aria-label={t.impactAria}>
          <div className="container-site impact-grid">
            <article className="glass-card stat reveal"><p className="stat-value highlight">70+</p><p className="stat-label">{t.stats[0]}</p></article>
            <article className="glass-card stat reveal"><p className="stat-value highlight">&lt;5%</p><p className="stat-label">{t.stats[1]}</p></article>
            <article className="glass-card stat reveal"><p className="stat-value">{t.stats[2]}</p><p className="stat-label">{t.stats[3]}</p></article>
            <article className="glass-card stat reveal"><Award className="text-primary mb-2" size={20} /><p className="stat-value stat-capstone">{t.stats[4]}<br />{t.stats[5]}</p><p className="stat-label">{t.stats[6]}</p></article>
          </div>
        </section>
        <section className="section" aria-labelledby="what-heading">
          <div className="container-site"><SectionHeading number="03" title={t.whatTitle} id="what-heading" note={t.whatNote} /><div className="services-grid">{t.services.map(([title, copy], index) => { const Icon = serviceIcons[index] ?? BarChart3; return <article key={title} className="glass-card service reveal"><span className="service-index">0{index + 1}</span><div className="service-icon"><Icon size={21} strokeWidth={1.6} /></div><h3>{title}</h3><p>{copy}</p></article>; })}</div></div>
        </section>
        <section id="experience" className="section experience-section" aria-labelledby="experience-heading">
          <div className="container-site"><SectionHeading number="04" title={t.expTitle} id="experience-heading" note={t.expNote} />
            <p className="track-connector">{t.connector}</p>
            <div className="track-toggle" role="tablist" aria-label={t.tracksAria}>
              {experienceTracks.map((track) => <button key={track.id} type="button" role="tab" aria-selected={activeTrack === track.id} className={`track-toggle-btn track-accent-${track.accent}${activeTrack === track.id ? " is-active" : ""}`} onClick={() => setActiveTrack(track.id)}>{track.name}</button>)}
            </div>
            {experienceTracks.map((track, trackIndex) => (
              <div key={track.id} className={`experience-track${activeTrack === track.id ? " is-active" : ""}`} data-accent={track.accent} role="tabpanel" aria-label={track.name}>
                <div className="track-label"><h3 className="track-name">{track.name}</h3><p className="track-subtitle">{track.subtitle}</p></div>
                <div className="timeline">{track.items.map((item, index) => <TimelineItem key={item.company} item={item} current={trackIndex === 0 && index === 0} t={t} />)}</div>
              </div>
            ))}
          </div>
        </section>
        <section className="section testimonials-section" aria-labelledby="testimonials-heading">
          <div className="container-site">
            <SectionHeading number="05" title={t.testiTitle} id="testimonials-heading" note={t.testiNote} />
            <div className="testimonials-grid">
              {testimonials.map((t) => (
                <figure key={t.company + t.name} className="glass-card testimonial reveal">
                  <Quote className="testimonial-icon" size={20} strokeWidth={1.6} />
                  <blockquote>{t.quote}</blockquote>
                  <figcaption><span className="testimonial-name">{t.name}</span><span className="testimonial-role">{t.role} · {t.company}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
        <section id="resume" className="resume-band" aria-labelledby="resume-heading"><div className="container-site resume-inner"><div className="resume-title"><FileText className="text-primary" size={28} strokeWidth={1.4} /><div><h2 id="resume-heading">{t.resumeTitle}</h2><p>{t.resumeUpdated}</p></div></div><Button asChild variant="outline"><a {...resumeLink}><ArrowDownToLine />{t.downloadPdf}</a></Button></div></section>
        <section className="section mbit-section" aria-labelledby="mbit-heading">
          <div className="container-site">
            <article className="glass-card mbit-card reveal">
              <div className="mbit-logo"><img src={uniandesLogo.url} alt="Universidad de los Andes logo" width={84} height={84} loading="lazy" /></div>
              <div className="mbit-copy">
                <span className="mbit-eyebrow">{t.mbitEyebrow}</span>
                <h2 id="mbit-heading">MBIT · Universidad de los Andes</h2>
                <p>{t.mbitCopy}</p>
                <div className="mbit-chips">{t.mbitChips.map((c) => <span key={c}>{c}</span>)}</div>
              </div>
            </article>
          </div>
        </section>
        <CredentialsSection t={t} />
        <section ref={bookSectionRef} id="book" className="section booking-section" aria-labelledby="book-heading"><div className="container-site"><SectionHeading number="07" title={t.bookTitle} id="book-heading" note={t.bookNote} /><p className="booking-sub">{t.bookSub}</p><div className="booking-chips">{t.bookChips.map((c) => <span key={c}>{c}</span>)}</div><article className={`glass-card booking-card${calendlyLoaded ? " calendly-loaded" : ""}`}><div className="calendly-inline-widget" data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&primary_color=2662d9`} style={{ minWidth: "320px", height: "700px" }} /><Button asChild className="calendly-fallback" variant="outline"><a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">{t.openScheduling}<ArrowUpRight /></a></Button></article></div></section>
        <section id="contact" className="contact-section" aria-labelledby="contact-heading"><div className="container-site contact-layout"><div><div className="eyebrow text-primary"><span className="eyebrow-line" />{t.connect}</div><h2 id="contact-heading">{t.contactTitle1}<br />{t.contactTitle2}</h2><p className="location-note">{t.location}</p></div><div className="contact-details"><a href="mailto:michelleescobar2703@gmail.com"><Mail size={17} />michelleescobar2703@gmail.com<ArrowUpRight size={14} /></a><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label={t.linkedinAria}><Linkedin size={17} />{t.linkedinConnect}<ArrowUpRight size={14} /></a><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label={t.githubAria}><Github size={17} />{t.githubCode}<ArrowUpRight size={14} /></a><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label={t.whatsappAria}><MessageCircle size={17} />{t.whatsappChat}<ArrowUpRight size={14} /></a></div></div></section>
      </main>
      <footer><div className="container-site footer-inner"><span>© 2026 Michelle Pulido.</span><div className="footer-links"><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label={t.linkedinAria} className="flex items-center gap-2"><Linkedin size={12} />LinkedIn</a><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label={t.githubAria} className="flex items-center gap-2"><Github size={12} />GitHub</a><a href="#home" className="flex items-center gap-2">{t.backTop}<ArrowRight size={12} className="-rotate-90" /></a></div></div></footer>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="whatsapp-fab" aria-label={t.whatsappAria} title={t.whatsappChat}><MessageCircle size={24} /></a>
      <Dialog open={missingAsset !== null} onOpenChange={(open) => { if (!open) setMissingAsset(null); }}><DialogContent><DialogHeader><DialogTitle>{missingAsset === "deck" ? t.deckSoonTitle : t.resumeSoonTitle}</DialogTitle><DialogDescription>{missingAsset === "deck" ? t.deckSoonDesc : t.resumeSoonDesc}</DialogDescription></DialogHeader><Button asChild><a href="mailto:michelleescobar2703@gmail.com"><Mail />{t.contactMichelle}</a></Button></DialogContent></Dialog>
    </>
  );
}
function TimelineItem({ item, current, t }: { item: ExperienceTrack["items"][number]; current?: boolean; t: Dict }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="timeline-item reveal">
      <span className="timeline-dot" aria-hidden="true" />
      <div className="timeline-date">{item.dates}{current && <span className="current-label">{t.currentRole}</span>}</div>
      <div>
        <h3 className="timeline-role">{item.role}</h3>
        <p className="timeline-company">{item.company}</p>
        <p className="timeline-description">{item.description}</p>
        <button type="button" className="result-toggle" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="result-label">{t.resultLabel}</span>{t.resultsAchieved}<ChevronDown size={13} className={`result-chevron${open ? " is-open" : ""}`} />
        </button>
        {open && <div className="result-chip result-panel"><span>{item.result}</span></div>}
      </div>
    </article>
  );
}
const credentialFilters: ("all" | CredentialCategory)[] = ["all", "events", "ads", "product", "languages", "education"];
function CredentialsSection({ t }: { t: Dict }) {
  const [filter, setFilter] = useState<"all" | CredentialCategory>("all");
  const items = credentials.filter((c) => filter === "all" || c.category === filter).sort((a, b) => b.sortDate.localeCompare(a.sortDate));
  return (
    <section id="credentials" className="section" aria-labelledby="credentials-heading"><div className="container-site">
       <SectionHeading number="06" title={t.credTitle} id="credentials-heading" />
      <p className="booking-sub">{t.credSub}</p>
      <p className="cred-strip"><Award size={15} />{t.credStrip} <strong>{AD_PLATFORMS_CERTIFIED}</strong></p>
      <div className="cred-filters" role="group" aria-label={t.credTitle}>{credentialFilters.map((f) => <button key={f} type="button" aria-pressed={filter === f} className={filter === f ? "is-active" : ""} onClick={() => setFilter(f)}>{t.credFilters[f]}</button>)}</div>
      <div className="cred-grid">{items.map((c) => (
        <article key={c.title} className={`glass-card cred-card${c.category === "events" ? " is-event" : ""}`}>
          <div className="cred-top"><span className="cred-issuer">{c.issuer}</span>{c.badge && <span className="cred-badge">{c.badge === "Speaker" ? t.credSpeaker : t.credEvent}</span>}</div>
          <h3>{c.title}</h3>
          {c.detail && <p className="cred-detail">{c.detail}</p>}
          <div className="cred-bottom"><span className="cred-date">{c.date}</span>{c.url && <a href={c.url} target="_blank" rel="noopener noreferrer">{t.credView}<ArrowUpRight size={12} /></a>}</div>
        </article>
      ))}</div>
    </div></section>
  );
}
function SectionHeading({ number, title, id, note }: { number: string; title: string; id: string; note?: string }) {
  return <div className="section-heading"><span className="section-number">{number} /</span><h2 id={id}>{title}</h2>{note && <span className="section-note">{note}</span>}</div>;
}

type VideoSource = { kind: "embed" | "mp4"; src: string };
function getVideoSource(url: string): VideoSource | null {
  const value = url.trim();
  if (!value) return null;
  const youtube = value.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{6,})/);
  if (youtube) return { kind: "embed", src: `https://www.youtube-nocookie.com/embed/${youtube[1]}?rel=0` };
  const vimeo = value.match(/vimeo\.com\/(\d+)/);
  if (vimeo) return { kind: "embed", src: `https://player.vimeo.com/video/${vimeo[1]}` };
  const loom = value.match(/loom\.com\/(?:share|embed)\/([\w-]+)/);
  if (loom) return { kind: "embed", src: `https://www.loom.com/embed/${loom[1]}` };
  if (/\.mp4(\?|#|$)/i.test(value)) return { kind: "mp4", src: value };
  return { kind: "embed", src: value };
}

function IntroVideo({ t }: { t: Dict }) {
  const [playing, setPlaying] = useState(false);
  const source = getVideoSource(INTRO_VIDEO_URL);
  if (!source) {
    return (
      <div className="glass-card video-card reveal">
        <div className="video-frame video-placeholder">
          <span className="video-play" aria-hidden="true"><Play size={26} fill="currentColor" /></span>
          <span className="video-placeholder-label">{t.videoSoon}</span>
        </div>
      </div>
    );
  }
  return (
    <div className="glass-card video-card reveal">
      <div className="video-frame">
        {playing ? (
          source.kind === "mp4" ? (
            <video src={source.src} controls playsInline autoPlay className="video-media" />
          ) : (
            <iframe src={source.src} title={t.videoTitle} className="video-media" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
          )
        ) : (
          <button type="button" className="video-poster" onClick={() => setPlaying(true)} aria-label={t.playVideo}>
            <span className="video-play"><Play size={26} fill="currentColor" /></span>
            <span className="video-placeholder-label">{t.playVideo}</span>
          </button>
        )}
      </div>
    </div>
  );
}
