import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { ArrowDown, ArrowDownToLine, ArrowRight, ArrowUpRight, Award, BarChart3, BriefcaseBusiness, Calendar, Check, FileText, GraduationCap, Handshake, Layers3, Linkedin, Mail, Menu, Moon, Play, Presentation, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PORTFOLIO_DECK_URL, RESUME_URL, IS_PORTFOLIO_PLACEHOLDER, CALENDLY_URL, LINKEDIN_URL, INTRO_VIDEO_URL } from "@/config/links";
import { education, experienceTracks } from "@/config/profile";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Michelle Pulido | Growth Partner & Product Ownership" },
    { name: "description", content: "Michelle Pulido turns account data into growth plans clients trust. 8+ years across Amazon, Microsoft Advertising partner operations, SaaS, and fintech." },
    { property: "og:title", content: "Michelle Pulido | Growth Partner & Product Ownership" },
    { property: "og:description", content: "Account growth. Trusted client partnerships. Product thinking. Explore Michelle Pulido’s experience across U.S. and LATAM markets." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const navigation = [["Impact", "impact"], ["Experience", "experience"], ["Portfolio", "portfolio"], ["Résumé", "resume"], ["Book a call", "book"], ["Contact", "contact"]];
const services = [
  { icon: BarChart3, title: "Account growth", copy: "Diagnose why an account is—or isn’t—growing. Build options A/B/C, align on the strongest path, and turn the plan into action." },
  { icon: Handshake, title: "Client partnership", copy: "Be the trusted advisor clients keep. Lead hard conversations with data, connect strategy to their goals, and protect the relationship." },
  { icon: Layers3, title: "Product thinking", copy: "Understand why customers buy before deciding where to invest. Turn real user problems into clear priorities and focused product decisions." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [missingAsset, setMissingAsset] = useState<"deck" | "resume" | null>(null);
  const [activeTrack, setActiveTrack] = useState(experienceTracks[0]?.id ?? "");
  const bookSectionRef = useRef<HTMLElement | null>(null);
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);
  useEffect(() => {
    const section = bookSectionRef.current;
    if (!section) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    function verifyWidget() {
      timer = setTimeout(() => { if (section.querySelector(".calendly-inline-widget iframe")) setCalendlyLoaded(true); }, 1500);
    }
    function loadScript() {
      if (document.querySelector("script[data-calendly]")) { verifyWidget(); return; }
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.dataset.calendly = "true";
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
          <nav aria-label="Main navigation" className={`nav-links ${menuOpen ? "is-open" : ""}`} id="main-navigation">{navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
          <div className="nav-actions">
            <Button variant="ghost" size="icon" aria-label={dark ? "Use light theme" : "Use dark theme"} title={dark ? "Use light theme" : "Use dark theme"} onClick={toggleTheme}>{dark ? <Sun size={16} /> : <Moon size={16} />}</Button>
            <Button asChild variant="ghost" size="icon" className="nav-linkedin"><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="Michelle Pulido on LinkedIn" title="Michelle Pulido on LinkedIn"><Linkedin size={16} /></a></Button>
            <Button asChild className="nav-resume" size="sm"><a href="#book"><Calendar />Book a call</a></Button>
            <Button className="menu-trigger" variant="ghost" size="icon" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
          </div>
        </div>
      </header>
      <main>
        <section id="home" className="hero" aria-labelledby="hero-heading">
          <div className="hero-shape shape-one" aria-hidden="true" /><div className="hero-shape shape-two" aria-hidden="true" />
          <div className="container-site hero-inner">
            <div className="hero-copy reveal">
              <div className="eyebrow"><span className="eyebrow-line" />Growth built on trust</div>
              <h1 id="hero-heading">I turn account data into growth plans clients trust — and keep the clients who fund them.</h1>
              <p className="hero-subtitle">Growth Partner · E-commerce &amp; Ad Platforms · Product Ownership</p>
              <p className="hero-details">8+ years across Amazon, Microsoft Advertising, SaaS &amp; fintech · U.S. + LATAM · EN · ES · PT</p>
              <div className="hero-buttons"><Button asChild variant="hero" size="lg"><a {...deckLink}>View portfolio deck<ArrowUpRight /></a></Button><Button asChild variant="heroOutline" size="lg"><a href="#book"><Calendar />Book a call</a></Button><Button asChild variant="heroOutline" size="lg"><a {...resumeLink}><ArrowDownToLine />Download résumé</a></Button></div>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="Michelle Pulido on LinkedIn" className="hero-linkedin"><Linkedin size={14} />LinkedIn<ArrowUpRight size={12} /></a>
            </div>
            <div className="portrait-area reveal">
              <div className="portrait-ring"><div className="portrait" role="img" aria-label="Circular photo placeholder for Michelle Pulido"><span className="portrait-monogram">mp.</span><span className="portrait-caption">Photo coming soon</span></div></div>
              <div className="portrait-badge"><span className="status-dot" />Bogotá based. U.S. focused.</div>
            </div>
          </div>
          <a href="#impact" className="hero-bottom">Explore the impact<ArrowDown size={13} /></a>
        </section>
        <section className="section video-section" aria-labelledby="video-heading">
          <div className="container-site">
            <SectionHeading number="00" title="Meet Michelle in 90 seconds" id="video-heading" note="Intro video" />
            <p className="video-sub">How I think about account growth — and what working with me looks like.</p>
            <IntroVideo />
            <p className="video-live-link">Prefer to talk live? <a href="#book">Book a call<ArrowRight size={12} /></a></p>
          </div>
        </section>
        <section id="impact" className="impact-section" aria-label="Impact at a glance">
          <div className="container-site impact-grid">
            <article className="glass-card stat reveal"><p className="stat-value highlight">70+</p><p className="stat-label">U.S. agencies managed</p></article>
            <article className="glass-card stat reveal"><p className="stat-value highlight">&lt;5%</p><p className="stat-label">Monthly client churn</p></article>
            <article className="glass-card stat reveal"><p className="stat-value">8+ years</p><p className="stat-label">In ad tech, marketplaces &amp; SaaS</p></article>
            <article className="glass-card stat reveal"><Award className="text-primary mb-2" size={20} /><p className="stat-value stat-capstone">Top capstone<br />consulting project</p><p className="stat-label">Bogotá Chamber of Commerce</p></article>
          </div>
        </section>
        <section className="section" aria-labelledby="what-heading">
          <div className="container-site"><SectionHeading number="01" title="What I do" id="what-heading" note="Clarity. Partnership. Growth." /><div className="services-grid">{services.map(({ icon: Icon, title, copy }, index) => <article key={title} className="glass-card service reveal"><span className="service-index">0{index + 1}</span><div className="service-icon"><Icon size={21} strokeWidth={1.6} /></div><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
        </section>
        <section id="experience" className="section experience-section" aria-labelledby="experience-heading">
          <div className="container-site"><SectionHeading number="02" title="Experience that moves the needle" id="experience-heading" note="U.S. + LATAM · 2021–Present" />
            <p className="track-connector">Two lenses, one outcome: accounts that grow.</p>
            <div className="track-toggle" role="tablist" aria-label="Experience tracks">
              {experienceTracks.map((track) => <button key={track.id} type="button" role="tab" aria-selected={activeTrack === track.id} className={`track-toggle-btn track-accent-${track.accent}${activeTrack === track.id ? " is-active" : ""}`} onClick={() => setActiveTrack(track.id)}>{track.name}</button>)}
            </div>
            {experienceTracks.map((track, trackIndex) => (
              <div key={track.id} className={`experience-track${activeTrack === track.id ? " is-active" : ""}`} data-accent={track.accent} role="tabpanel" aria-label={track.name}>
                <div className="track-label"><h3 className="track-name">{track.name}</h3><p className="track-subtitle">{track.subtitle}</p></div>
                <div className="timeline">{track.items.map((item, index) => <article key={item.company} className="timeline-item reveal"><span className="timeline-dot" aria-hidden="true" /><div className="timeline-date">{item.dates}{trackIndex === 0 && index === 0 && <span className="current-label">CURRENT ROLE</span>}</div><div><h3 className="timeline-role">{item.role}</h3><p className="timeline-company">{item.company}</p><p className="timeline-description">{item.description}</p><div className="result-chip"><span className="result-label">Result</span><span>{item.result}</span></div></div></article>)}</div>
              </div>
            ))}
          </div>
        </section>
        <section id="portfolio" className="section" aria-labelledby="portfolio-heading">
          <div className="container-site"><SectionHeading number="03" title="The work behind the results" id="portfolio-heading" note="Context → Action → Impact" /><div className="portfolio-layout"><article className="glass-card portfolio-info reveal"><div className="service-icon"><Presentation size={21} strokeWidth={1.6} /></div><h3>Growth Partner portfolio deck</h3><p>One slide per role: context, what I did, results, and what I can bring to your team.</p><Button asChild><a {...deckLink}>Open deck<ArrowUpRight /></a></Button></article><div className="deck-preview reveal">{IS_PORTFOLIO_PLACEHOLDER ? <><div className="deck-cover"><div className="deck-cover-label"><span>MICHELLE PULIDO</span><span>PORTFOLIO / 2026</span></div><div><h3>Growth Partner<br />portfolio.</h3><p>Client growth. Product thinking. Lasting partnerships.</p></div><div className="deck-cover-footer"><span>U.S. + LATAM</span><ArrowUpRight size={19} /></div></div><span className="deck-placeholder-label">Deck coming soon</span></> : <iframe src={PORTFOLIO_DECK_URL} title="Michelle Pulido Growth Partner portfolio deck" loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />}</div></div></div>
        </section>
        <section id="resume" className="resume-band" aria-labelledby="resume-heading"><div className="container-site resume-inner"><div className="resume-title"><FileText className="text-primary" size={28} strokeWidth={1.4} /><div><h2 id="resume-heading">Latest résumé</h2><p>Updated October 2026</p></div></div><Button asChild variant="outline"><a {...resumeLink}><ArrowDownToLine />Download PDF</a></Button></div></section>
        <section className="section" aria-labelledby="education-heading"><div className="container-site"><SectionHeading number="04" title="Education & certifications" id="education-heading" /><div className="education-grid">{education.map(([title, institution, date], index) => <article key={title} className="education-item reveal">{index === 0 || index === 5 ? <GraduationCap size={19} strokeWidth={1.5} /> : <Check size={18} strokeWidth={1.5} />}<div><h3>{title}</h3><p>{institution && `${institution} · `}{date}</p></div></article>)}</div></div></section>
        <section ref={bookSectionRef} id="book" className="section booking-section" aria-labelledby="book-heading"><div className="container-site"><SectionHeading number="05" title="Book a call with me" id="book-heading" note="30 minutes" /><p className="booking-sub">30 minutes to talk about your accounts, your growth goals, and where I can help.</p><div className="booking-chips"><span>30 min</span><span>Video call</span><span>U.S. & LATAM time zones</span></div><article className={`glass-card booking-card${calendlyLoaded ? " calendly-loaded" : ""}`}><div className="calendly-inline-widget" data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&primary_color=2662d9`} style={{ minWidth: "320px", height: "700px" }} /><Button asChild className="calendly-fallback" variant="outline"><a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Open scheduling page<ArrowUpRight /></a></Button></article></div></section>
        <section id="contact" className="contact-section" aria-labelledby="contact-heading"><div className="container-site contact-layout"><div><div className="eyebrow text-primary"><span className="eyebrow-line" />Let’s connect</div><h2 id="contact-heading">Your next growth partner.<br />Let’s talk.</h2><p className="location-note">Based in Bogotá · Works U.S. hours · Available to travel</p></div><div className="contact-details"><a href="mailto:michelleescobar2703@gmail.com"><Mail size={17} />michelleescobar2703@gmail.com<ArrowUpRight size={14} /></a><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="Michelle Pulido on LinkedIn"><Linkedin size={17} />Connect on LinkedIn<ArrowUpRight size={14} /></a></div></div></section>
      </main>
      <footer><div className="container-site footer-inner"><span>© 2026 Michelle Pulido.</span><div className="footer-links"><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="Michelle Pulido on LinkedIn" className="flex items-center gap-2"><Linkedin size={12} />LinkedIn</a><a href="#home" className="flex items-center gap-2">Back to top<ArrowRight size={12} className="-rotate-90" /></a></div></div></footer>
      <Dialog open={missingAsset !== null} onOpenChange={(open) => { if (!open) setMissingAsset(null); }}><DialogContent><DialogHeader><DialogTitle>{missingAsset === "deck" ? "Portfolio deck coming soon" : "Résumé PDF coming soon"}</DialogTitle><DialogDescription>{missingAsset === "deck" ? "The portfolio link hasn’t been added yet. Contact Michelle for her latest work." : "The résumé PDF hasn’t been uploaded yet. Contact Michelle for her latest résumé."}</DialogDescription></DialogHeader><Button asChild><a href="mailto:michelleescobar2703@gmail.com"><Mail />Contact Michelle</a></Button></DialogContent></Dialog>
    </>
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

function IntroVideo() {
  const [playing, setPlaying] = useState(false);
  const source = getVideoSource(INTRO_VIDEO_URL);
  if (!source) {
    return (
      <div className="glass-card video-card reveal">
        <div className="video-frame video-placeholder">
          <span className="video-play" aria-hidden="true"><Play size={26} fill="currentColor" /></span>
          <span className="video-placeholder-label">Intro video coming soon</span>
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
            <iframe src={source.src} title="Meet Michelle in 90 seconds — intro video" className="video-media" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
          )
        ) : (
          <button type="button" className="video-poster" onClick={() => setPlaying(true)} aria-label="Play intro video">
            <span className="video-play"><Play size={26} fill="currentColor" /></span>
            <span className="video-placeholder-label">Play intro video</span>
          </button>
        )}
      </div>
    </div>
  );
}
