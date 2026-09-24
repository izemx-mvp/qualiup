import { Link } from "@tanstack/react-router";
import {
  ArrowRight, Building2, Check, ChevronLeft, ChevronRight, ClipboardCheck, Factory, FileText,
  FlaskConical, Hotel, Mail, MapPin, PackageCheck, Pause, Phone, Play, Snowflake, Sprout,
  Thermometer, Truck, Volume2, VolumeX,
} from "lucide-react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Cta, DomainGrid, Label, Reveal } from "@/components/site/Shared";
import heroVideo from "@/assets/hero-presentation.mp4";
import heroPoster from "@/assets/hero-presentation-poster.png";
import expertise from "@/assets/expertise-echantillons.webp";
import conseil from "@/assets/conseil-formation.webp";
import audit from "@/assets/audit-expertise.webp";
import careers from "@/assets/carrieres-microscope.webp";
import { agencies, company, stats, testimonials } from "@/data/site";
import { articles as articleData } from "@/data/articles";

export function HomePage() {
  return <>
    <Hero />
    <DataBand />
    <Expertise />
    <SectorsMarquee />
    <Domains />
    <SampleJourney />
    <Group />
    <AdviceAudit />
    <Testimonials />
    <Agencies />
    <News />
    <Careers />
    <Cta />
  </>;
}

/* ------------------------------------------------------------------ HERO */

function Hero() {
  const msgs = [
    "Des résultats fiables pour décider avec confiance.",
    "Une expertise scientifique au plus près de vos activités.",
    "De l'échantillon au rapport, une traçabilité maîtrisée.",
  ];
  const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI((x) => (x + 1) % msgs.length), 4000); return () => clearInterval(t); }, [msgs.length]);

  return <section className="molecule-grid relative overflow-hidden">
    <div className="container-site grid min-h-[760px] items-center gap-12 py-16 lg:grid-cols-[1.1fr_.9fr]">
      <div className="relative z-10">
        <p className="section-label">[ QU-2014 ] LABORATOIRE D'ANALYSES · MAROC</p>
        <h1 className="mt-5 max-w-3xl text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
          Votre laboratoire agroalimentaire au Maroc <span className="text-gradient">de confiance</span>
        </h1>
        <div className="mt-6 min-h-8">
          <motion.p key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            className="text-lg font-medium text-muted-foreground sm:text-xl">{msgs[i]}</motion.p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg" asChild><Link to="/contact">Demander une analyse <ArrowRight /></Link></Button>
          <Button size="lg" variant="outline" asChild><Link to="/prestations-analyses">Découvrir nos prestations</Link></Button>
        </div>
        <div className="mt-10 grid max-w-lg grid-cols-3 divide-x rounded-2xl border bg-background/70 backdrop-blur">
          {[["10+", "ans d'expérience"], ["5", "laboratoires"], ["4", "agences"]].map(([v, l]) => (
            <div key={l} className="px-4 py-3">
              <b className="font-mono text-2xl text-secondary">{v}</b>
              <p className="text-xs text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </div>
      <HeroVideo />
    </div>
  </section>;
}

function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(false);
  const play = () => { void videoRef.current?.play(); };
  const pause = () => videoRef.current?.pause();
  const toggleMute = () => { const v = videoRef.current; if (!v) return; v.muted = !v.muted; setMuted(v.muted); };

  return <div className="relative mx-auto w-full max-w-xl">
    <div className="absolute -inset-8 -z-10 rounded-[42%_58%_48%_52%] bg-linear-to-br from-primary/20 to-secondary/20 blur-sm" />
    <video ref={videoRef} src={heroVideo} poster={heroPoster} playsInline preload="metadata"
      aria-label="Présentation de QualiUp par une porte-parole"
      onPlay={() => { setPlaying(true); setStarted(true); }} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)}
      className="aspect-[4/5] w-full rounded-[38%_18%_34%_14%] object-cover shadow-float" />

    {!playing && (
      <button type="button" onClick={play} aria-label="Lire la présentation"
        className="group absolute inset-0 z-20 m-auto grid size-24 place-items-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-primary/30" />
        <span className="glass relative grid size-20 place-items-center rounded-full border border-white/60 text-primary shadow-float transition group-hover:scale-110">
          <Play className="ml-1 size-8 fill-current" />
        </span>
      </button>
    )}

    {!started && (
      <div className="absolute left-1/2 top-[62%] z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-navy/85 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
        Découvrez QualiUp en vidéo
      </div>
    )}

    {playing && (
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        <Button type="button" size="icon" variant="outline" onClick={pause} aria-label="Mettre la présentation en pause" className="glass border-white/60 shadow-soft"><Pause /></Button>
        <Button type="button" size="icon" variant="outline" onClick={toggleMute} aria-label={muted ? "Activer le son" : "Couper le son"} className="glass border-white/60 shadow-soft">{muted ? <VolumeX /> : <Volume2 />}</Button>
      </div>
    )}

    {/* Cartes flottantes masquées pendant la lecture pour ne pas gêner la porte-parole */}
    <motion.div animate={{ opacity: playing ? 0 : 1 }} className="pointer-events-none">
      <Floating className="-left-6 top-16" icon={<FlaskConical />} title="Échantillon QU-0427" value="✓ Conforme" />
      <Floating className="-right-4 top-1/2" icon={<ClipboardCheck />} title="Microbiologie" value="Analyse terminée" />
      <Floating className="-bottom-4 left-6" icon={<Thermometer />} title="Chaîne du froid" value="4°C ✓" />
    </motion.div>
  </div>;
}

function Floating({ className, icon, title, value }: { className: string; icon: React.ReactNode; title: string; value: string }) {
  return <div className={`glass float-card absolute hidden rounded-2xl border border-white/60 p-4 shadow-float sm:block ${className}`}>
    <div className="flex items-center gap-3">
      <span className="rounded-xl bg-green-soft p-2 text-primary">{icon}</span>
      <div><p className="font-mono text-[10px] text-muted-foreground">{title}</p><strong className="text-sm">{value}</strong></div>
    </div>
  </div>;
}

/* ------------------------------------------------------------------ BANDE DE DONNÉES (compteurs animés) */

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const match = value.replace(/\s/g, "").match(/^(\D*)(\d+(?:[.,]\d+)?)(.*)$/);
  const target = match ? parseFloat(match[2]!.replace(",", ".")) : 0;
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || !match) return;
    if (reduce) { setN(target); return; }
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1400, 1);
      setN(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!match) return <span>{value}</span>;
  return <span ref={ref}>{match[1]}{Math.round(n).toLocaleString("fr-FR")}{match[3]}</span>;
}

function DataBand() {
  return <section className="relative overflow-hidden bg-navy py-12 text-primary-foreground">
    <div className="scan-line absolute inset-y-0 w-px bg-primary shadow-[0_0_24px_4px_#52A546]" />
    <div className="container-site grid grid-cols-2 gap-8 md:grid-cols-5 md:divide-x md:divide-white/10">
      {stats.map((s) => (
        <div key={s.label} className="md:px-6 md:first:pl-0">
          <strong className="font-mono text-4xl sm:text-5xl"><CountUp value={s.value} /></strong>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-primary">{s.label}</p>
        </div>
      ))}
    </div>
  </section>;
}

/* ------------------------------------------------------------------ EXPERTISE */

function Expertise() {
  return <section className="container-site section-pad grid items-center gap-14 lg:grid-cols-2">
    <Reveal className="relative">
      <img loading="lazy" src={expertise} width="1400" height="1050" alt="Préparation précise d'échantillons au laboratoire" className="rounded-[2rem] object-cover shadow-soft" />
      <div className="absolute -bottom-7 right-5 grid size-36 place-items-center rounded-full border-[10px] border-green-soft bg-background text-center shadow-float">
        <span><b className="block font-display text-3xl text-primary">10+</b><small>années<br />d'expérience</small></span>
      </div>
      <div className="glass float-card absolute -left-4 top-8 hidden rounded-2xl border border-white/60 p-4 shadow-float sm:block">
        <p className="font-mono text-[10px] text-muted-foreground">PANEL D'ANALYSES</p>
        <strong className="text-sm">7 domaines couverts</strong>
      </div>
    </Reveal>
    <Reveal>
      <Label>[ 01 ] QUI SOMMES-NOUS</Label>
      <h2 className="mt-4 text-4xl font-bold">La science au service de vos décisions</h2>
      <p className="mt-6 leading-8 text-muted-foreground">
        Laboratoire agroalimentaire au Maroc, QualiUp est reconnu pour son expertise scientifique et technique.
        Spécialisés dans les analyses et essais techniques, nous accompagnons de nombreux secteurs en fournissant
        des résultats fiables et précis.
      </p>
      <Protocol n="01" title="Laboratoire à la technologie avancée">Équipements modernes et méthodes maîtrisées pour des résultats fiables et reproductibles.</Protocol>
      <Protocol n="02" title="Large panel de tests spécialisés">Agroalimentaire, agronomie, environnement, cosmétique et matrices spécifiques.</Protocol>
      <Button variant="link" className="mt-4 px-0" asChild><Link to="/a-propos">En savoir plus sur QualiUp <ArrowRight /></Link></Button>
    </Reveal>
  </section>;
}

function Protocol({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return <div className="mt-7 flex gap-4 border-t pt-5">
    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-green-soft font-mono text-sm font-bold text-primary">{n}</span>
    <div><h3 className="text-lg font-bold">{title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{children}</p></div>
  </div>;
}

/* ------------------------------------------------------------------ SECTEURS (bandeau défilant) */

function SectorsMarquee() {
  const reduce = useReducedMotion();
  const items = [
    { Icon: Factory, t: "Industriels agroalimentaires" },
    { Icon: Snowflake, t: "Unités de surgélation" },
    { Icon: PackageCheck, t: "Stations de conditionnement" },
    { Icon: Truck, t: "Exportateurs" },
    { Icon: Hotel, t: "Hôtels et restaurants" },
    { Icon: Sprout, t: "Exploitations agricoles" },
    { Icon: FlaskConical, t: "Cosmétique et pharmacie" },
    { Icon: Building2, t: "Collectivités" },
  ];
  const row = [...items, ...items];
  return <section className="overflow-hidden border-y bg-background py-6">
    <motion.div className="flex w-max gap-4"
      animate={reduce ? { x: "0%" } : { x: ["0%", "-50%"] }}
      transition={reduce ? { duration: 0 } : { repeat: Infinity, duration: 40, ease: "linear" }}>
      {row.map(({ Icon, t }, k) => (
        <span key={`${t}-${k}`} className="flex shrink-0 items-center gap-3 rounded-full border bg-surface px-5 py-3 text-sm font-semibold">
          <Icon className="size-4 text-primary" /> {t}
        </span>
      ))}
    </motion.div>
  </section>;
}

/* ------------------------------------------------------------------ DOMAINES */

function Domains() {
  return <section className="bg-surface section-pad">
    <div className="container-site">
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <Label>[ 02 ] NOS DOMAINES</Label>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">7 domaines d'analyses, une seule exigence : la fiabilité</h2>
        </div>
        <Button variant="outline" asChild><Link to="/prestations-analyses">Toutes les prestations <ArrowRight /></Link></Button>
      </div>
      <DomainGrid />
    </div>
  </section>;
}

/* ------------------------------------------------------------------ PARCOURS ÉCHANTILLON */

const steps = [
  ["Prélèvement", "Sur site par nos équipes ou dépôt au laboratoire", MapPin],
  ["Transport", "Acheminement sous chaîne du froid", Snowflake],
  ["Réception & codification", "Chaque échantillon reçoit un code de traçabilité unique", PackageCheck],
  ["Analyse", "Microbiologie, physico-chimie, contaminants selon votre besoin", FlaskConical],
  ["Rapport", "Des résultats clairs, fiables et transmis dans les délais", FileText],
] as const;

function SampleJourney() {
  const [active, setActive] = useState(0);
  const Current = steps[active]![2];
  return <section className="section-pad overflow-hidden bg-blue-soft">
    <div className="container-site">
      <div className="text-center">
        <Label>[ 03 ] PARCOURS ÉCHANTILLON</Label>
        <h2 className="mt-4 text-4xl font-bold">Du prélèvement au rapport : un parcours maîtrisé</h2>
      </div>
      <div className="relative mt-14 grid gap-4 md:grid-cols-5">
        <div className="absolute left-[10%] right-[10%] top-9 hidden h-1 rounded-full bg-white md:block">
          <motion.div className="h-full rounded-full bg-primary" initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 1.5 }} />
        </div>
        {steps.map(([t, , I], i) => (
          <button key={t} type="button" onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)}
            className="relative rounded-2xl border bg-background p-5 text-left md:border-0 md:bg-transparent md:text-center">
            <div className={`relative z-10 mb-4 grid size-18 place-items-center rounded-full border-8 border-blue-soft shadow-soft transition md:mx-auto ${active === i ? "bg-secondary text-white scale-110" : "bg-background text-secondary"}`}><I /></div>
            <p className="font-mono text-[10px] text-primary">ÉTAPE 0{i + 1}</p>
            <h3 className="mt-2 text-lg font-bold">{t}</h3>
          </button>
        ))}
      </div>
      <motion.div key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
        className="mx-auto mt-8 flex max-w-2xl items-center gap-5 rounded-2xl bg-background p-6 shadow-soft">
        <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-green-soft text-primary"><Current /></span>
        <div>
          <p className="font-mono text-[10px] text-muted-foreground">ÉTAPE 0{active + 1} / 05</p>
          <p className="font-semibold">{steps[active]![1]}</p>
        </div>
      </motion.div>
    </div>
  </section>;
}

/* ------------------------------------------------------------------ LE GROUPE */

function Group() {
  const groups = [
    { n: "ELAM", d: "Une référence incontournable dans les analyses en agronomie, agroalimentaire et environnement, ainsi que dans la fourniture d'expertises.", url: "https://elamlaboratory.com/" },
    { n: "ELAM Sahara", d: "La même exigence scientifique, portée par une présence de proximité dans le sud du Royaume.", url: "https://elamlaboratory.com/" },
    { n: "IQUALAB", d: "Membre du groupe QualiUp, Iqua'Lab se positionne comme un acteur majeur des analyses et tests pour l'agroalimentaire.", url: "https://iqualaboratory.com/" },
  ];
  return <section className="container-site section-pad">
    <Label>[ 04 ] LE GROUPE</Label>
    <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <h2 className="max-w-2xl text-4xl font-bold">Trois expertises, une ambition commune</h2>
      <p className="max-w-md text-muted-foreground">Un groupe structuré pour rapprocher la compétence analytique des entreprises partout au Maroc.</p>
    </div>
    <div className="mt-12 grid gap-6 lg:grid-cols-3">
      {groups.map((g, i) => (
        <a target="_blank" rel="noreferrer" href={g.url} key={g.n}
          className="group relative min-h-96 overflow-hidden rounded-[5rem_5rem_1.5rem_1.5rem] border bg-background p-8 pt-20 shadow-soft">
          <div className="absolute inset-x-0 bottom-0 h-2 bg-linear-to-t from-secondary to-primary transition-all duration-700 group-hover:h-full" />
          {/* Bulles qui montent dans le "flacon" au survol */}
          <span className="absolute bottom-6 left-10 size-3 rounded-full bg-white/60 opacity-0 transition-all duration-1000 group-hover:bottom-40 group-hover:opacity-100" />
          <span className="absolute bottom-6 right-14 size-2 rounded-full bg-white/60 opacity-0 transition-all delay-150 duration-1000 group-hover:bottom-56 group-hover:opacity-100" />
          <div className="relative z-10 transition-colors group-hover:text-primary-foreground">
            <span className="font-mono text-xs">LABO 0{i + 1}</span>
            <h3 className="mt-5 text-3xl font-bold">{g.n}</h3>
            <p className="mt-5 leading-7 opacity-75">{g.d}</p>
            <span className="mt-8 inline-flex items-center gap-2 font-semibold">Visiter le site <ArrowRight className="size-4 transition group-hover:translate-x-1" /></span>
          </div>
        </a>
      ))}
    </div>
  </section>;
}

/* ------------------------------------------------------------------ CONSEIL / AUDIT */

function AdviceAudit() {
  return <section className="flex flex-col gap-3 p-3 lg:flex-row">
    <ServicePanel image={conseil} title="Conseil et Formation" tags={["HACCP", "ISO 22000", "Hygiène"]}
      text="Des programmes conçus pour vos équipes, pour transformer les exigences qualité en pratiques du quotidien." to="/conseil-formation" />
    <ServicePanel image={audit} title="Audit et Expertise" tags={["Hygiène", "Fournisseurs", "Conformité"]}
      text="Diagnostics structurés, analyse des écarts et recommandations directement exploitables." to="/audit-expertise" />
  </section>;
}

function ServicePanel({ image, title, text, tags, to }: { image: string; title: string; text: string; tags: string[]; to: string }) {
  return <Link to={to} className="group relative min-h-[520px] flex-1 overflow-hidden rounded-3xl transition-all duration-700 lg:hover:flex-[1.3]">
    <img loading="lazy" src={image} width="1400" height="1050" alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
    <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/60 to-transparent" />
    <div className="absolute inset-x-8 bottom-10 text-primary-foreground sm:inset-x-12">
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => <span key={t} className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur">{t}</span>)}
      </div>
      <h2 className="mt-5 text-4xl font-bold">{title}</h2>
      <p className="mt-4 max-w-lg leading-7 text-primary-foreground/80">{text}</p>
      <span className="mt-6 inline-flex items-center gap-2 font-semibold text-primary">Découvrir <ArrowRight className="size-4 transition group-hover:translate-x-1" /></span>
    </div>
  </Link>;
}

/* ------------------------------------------------------------------ TÉMOIGNAGES */

function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = testimonials.length;
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((x) => (x + 1) % n), 7000);
    return () => clearInterval(t);
  }, [paused, n]);
  const t = testimonials[i]!;

  return <section className="section-pad relative overflow-hidden bg-navy text-primary-foreground"
    onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
    <div className="molecule-grid absolute inset-0 opacity-10" />
    <div className="container-site relative grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr]">
      <div>
        <Label>[ 05 ] TÉMOIGNAGES</Label>
        <h2 className="mt-4 text-4xl font-bold">La confiance se mesure sur le terrain</h2>
        <p className="mt-5 max-w-md leading-7 text-white/70">Responsables qualité, directeurs de station, professionnels de l'hygiène : ils nous confient leurs analyses au quotidien.</p>
        <div className="mt-8 flex items-center gap-3">
          <Button size="icon" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10" onClick={() => setI((i + n - 1) % n)} aria-label="Avis précédent"><ChevronLeft /></Button>
          <Button size="icon" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10" onClick={() => setI((i + 1) % n)} aria-label="Avis suivant"><ChevronRight /></Button>
          <div className="ml-3 flex gap-2">
            {testimonials.map((x, j) => (
              <button key={x.name} onClick={() => setI(j)} aria-label={`Afficher l'avis ${j + 1}`}
                className={`h-2 rounded-full transition-all ${i === j ? "w-8 bg-primary" : "w-2 bg-white/30"}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -right-3 top-4 h-full w-full rotate-2 rounded-2xl bg-white/10" />
        <motion.article key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
          className="report-lines relative rounded-2xl bg-background p-7 text-foreground shadow-float sm:p-10">
          <div className="flex justify-between">
            <span className="font-mono text-xs text-secondary">AVIS-00{i + 1} / 00{n}</span>
            <span className="rotate-3 rounded-full border-2 border-primary px-3 py-1 text-xs font-bold text-primary">✓ VÉRIFIÉ</span>
          </div>
          <blockquote className="mt-8 font-display text-xl font-semibold leading-9 sm:text-2xl">“{t.text}”</blockquote>
          <div className="mt-8 flex items-center gap-3 border-t pt-6">
            <span className="grid size-11 place-items-center rounded-full bg-secondary font-bold text-primary-foreground">
              {t.name.split(" ").slice(0, 2).map((x) => x[0]).join("")}
            </span>
            <div><strong>{t.name}</strong><p className="text-xs text-muted-foreground">{t.role}</p></div>
          </div>
        </motion.article>
      </div>
    </div>
  </section>;
}

/* ------------------------------------------------------------------ AGENCES (réseau nord → sud) */

function Agencies() {
  const [i, setI] = useState(2);
  const a = agencies[i]!;
  const regions = ["Nord", "Centre", "Sud · Siège", "Grand Sud"];
  return <section className="section-pad bg-surface">
    <div className="container-site">
      <div className="max-w-2xl">
        <Label>[ 06 ] NOTRE PRÉSENCE</Label>
        <h2 className="mt-4 text-4xl font-bold">À vos côtés, du nord au sud du Royaume</h2>
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
        {/* Réseau vertical : Larache → Casablanca → Agadir → Dakhla */}
        <div className="relative rounded-3xl bg-navy p-8 text-white">
          <div className="molecule-grid absolute inset-0 rounded-3xl opacity-10" />
          <p className="relative font-mono text-[10px] text-primary">RÉSEAU QUALIUP · NORD → SUD</p>
          <div className="relative mt-8">
            <div className="absolute bottom-6 left-[19px] top-6 w-0.5 border-l-2 border-dashed border-white/20" />
            {agencies.map((x, j) => (
              <button key={x.name} type="button" onClick={() => setI(j)}
                className={`relative mb-3 flex w-full items-center gap-5 rounded-2xl p-3 text-left transition last:mb-0 ${i === j ? "bg-white/10" : "hover:bg-white/5"}`}>
                <span className="relative grid size-10 shrink-0 place-items-center">
                  {i === j && <span className="absolute inset-0 animate-ping rounded-full bg-primary/40" />}
                  <span className={`relative grid size-10 place-items-center rounded-full border-4 border-navy ${i === j ? "bg-primary" : "bg-white/25"}`}><MapPin className="size-4" /></span>
                </span>
                <span>
                  <strong className="block text-lg">{x.name}</strong>
                  <span className="font-mono text-[10px] text-white/50">{regions[j] ?? ""}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <motion.div key={a.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="overflow-hidden rounded-3xl border bg-background shadow-soft">
          <iframe title={`Carte de ${a.name}`} src={a.map} className="h-72 w-full border-0" loading="lazy" />
          <div className="p-7">
            <h3 className="text-2xl font-bold">Agence de {a.name}{i === 2 ? " · Siège" : ""}</h3>
            {a.address && <p className="mt-2 text-muted-foreground">{a.address}</p>}
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild><a href={`tel:${a.phone.replace(/\s/g, "")}`}><Phone />{a.phone}</a></Button>
              <Button variant="outline" asChild><a href={`mailto:${company.technicalEmail}?subject=Demande%20d'information%20-%20${encodeURIComponent(a.name)}`}><Mail />Envoyer un email</a></Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
}

/* ------------------------------------------------------------------ ACTUALITÉS */

function News() {
  return <section className="container-site section-pad">
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div><Label>[ 07 ] RESSOURCES</Label><h2 className="mt-4 text-4xl font-bold">Actualités & expertise</h2></div>
      <Button variant="outline" asChild><Link to="/actualites">Toutes les actualités <ArrowRight /></Link></Button>
    </div>
    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      <ArticleCard a={articleData[0]!} big />
      <div className="grid gap-6">{articleData.slice(1, 3).map((a) => <ArticleCard a={a} key={a.slug} />)}</div>
    </div>
  </section>;
}

function ArticleCard({ a, big = false }: { a: (typeof articleData)[number]; big?: boolean }) {
  return <Link to="/actualites/$slug" params={{ slug: a.slug }}
    className={`group grid overflow-hidden rounded-2xl border bg-background shadow-soft transition hover:shadow-float ${big ? "" : "sm:grid-cols-[.8fr_1.2fr]"}`}>
    <div className="overflow-hidden">
      <img loading="lazy" src={a.image} alt="" className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${big ? "aspect-[16/10]" : "min-h-52"}`} />
    </div>
    <div className="flex flex-col p-6">
      <div className="flex flex-wrap gap-3 font-mono text-[10px] text-muted-foreground">
        <span className="rounded-full bg-green-soft px-2 py-0.5 text-primary">{a.category}</span><span>{a.date}</span><span>{a.read}</span>
      </div>
      <h3 className={`mt-3 font-bold group-hover:text-secondary ${big ? "text-2xl" : "text-xl"}`}>{a.title}</h3>
      <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-primary">Lire l'article <ArrowRight className="size-4 transition group-hover:translate-x-1" /></span>
    </div>
  </Link>;
}

/* ------------------------------------------------------------------ CARRIÈRES */

function Careers() {
  return <section className="signature-bg relative overflow-hidden text-primary-foreground">
    <div className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full border border-white/15" />
    <div className="pointer-events-none absolute -left-10 -top-10 size-52 rounded-full border border-white/15" />
    <div className="container-site relative grid items-center gap-8 pt-12 lg:grid-cols-2">
      <div className="pb-12">
        <p className="font-mono text-xs">[ CARRIÈRES ]</p>
        <h2 className="mt-4 text-4xl font-bold">Grandissez avec un laboratoire dynamique et innovant</h2>
        <p className="mt-5 max-w-lg leading-7 text-primary-foreground/80">Techniciens, analystes, préleveurs, qualiticiens : envoyez-nous votre CV et faites partie de notre équipe.</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {["Laboratoire moderne", "Équipes pluridisciplinaires", "Présence nationale"].map((x) => (
            <span key={x} className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold"><Check className="size-3" />{x}</span>
          ))}
        </div>
        <Button className="mt-8 bg-background text-navy hover:bg-background/90" asChild>
          <a href={`mailto:${company.recruitmentEmail}?subject=Candidature%20spontanée`}>Envoyer mon CV <ArrowRight /></a>
        </Button>
      </div>
      <img loading="lazy" src={careers} width="1400" height="1050" alt="Technicien marocain travaillant au microscope"
        className="max-h-[460px] w-full self-end rounded-t-[6rem] object-cover object-top" />
    </div>
  </section>;
}