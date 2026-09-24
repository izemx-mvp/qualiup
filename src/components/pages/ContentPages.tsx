import { Link } from "@tanstack/react-router";
import {
  ArrowRight, Atom, BadgeCheck, BookOpenCheck, Check, ClipboardCheck, FileSearch, FileText,
  FlaskConical, GraduationCap, Handshake, Leaf, Mail, MapPin, Microscope, Phone, Search,
  ShieldAlert, ShieldCheck, Target, Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Cta, DomainGrid, Label, PageHero, Reveal } from "@/components/site/Shared";
import team from "@/assets/equipe-laboratoire.webp";
import conseil from "@/assets/conseil-formation.webp";
import audit from "@/assets/audit-expertise.webp";
import { domains, stats } from "@/data/site";
import { faq } from "@/data/faq";

const PHONE = "+212 6 61 36 10 08";
const TECH_EMAIL = "qualiup.technique@gmail.com";

/* =========================================================================================
   À PROPOS — élément fort : histoire racontée comme une frise qui se remplit
   ========================================================================================= */

export function AboutPage() {
  return <>
    <PageHero dark label="ACCUEIL / À PROPOS" title="À propos de QualiUp"
      text="Un partenaire scientifique de proximité au service de la qualité, de la sécurité et de la confiance." image={team} />

    {/* Histoire : photo + badge 2014 + texte */}
    <section className="container-site section-pad grid items-center gap-14 lg:grid-cols-2">
      <Reveal className="relative">
        <img src={team} alt="Équipe du laboratoire QualiUp" width="1400" height="1050" loading="lazy"
          className="rounded-[2rem] object-cover shadow-soft" />
        <div className="absolute -bottom-7 right-5 grid size-36 place-items-center rounded-full border-[10px] border-green-soft bg-background text-center shadow-float">
          <span><b className="block font-display text-3xl text-primary">2014</b><small>année de<br />création</small></span>
        </div>
      </Reveal>
      <Reveal>
        <Label>[ 01 ] NOTRE HISTOIRE</Label>
        <h2 className="mt-4 text-4xl font-bold">Une ambition construite autour de la fiabilité</h2>
        <p className="mt-5 leading-8 text-muted-foreground">
          Depuis sa création en 2014, QualiUp s'affirme comme un véritable partenaire de l'industrie
          agroalimentaire. Notre développement répond à une même volonté : apporter une expertise claire,
          rigoureuse et accessible à chaque acteur de la chaîne, du producteur au distributeur.
        </p>
        <p className="mt-4 leading-8 text-muted-foreground">
          Cette exigence s'est traduite par une structuration progressive : élargissement du panel
          d'analyses, renforcement des équipes techniques et construction d'un maillage national pour
          rester au plus près de nos clients.
        </p>
      </Reveal>
    </section>

    {/* Frise horizontale qui se remplit */}
    <section className="section-pad bg-blue-soft">
      <div className="container-site">
        <h2 className="text-center text-4xl font-bold">De 2014 à aujourd'hui</h2>
        <div className="relative mt-14 grid gap-6 md:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-8 hidden h-0.5 bg-secondary/20 md:block">
            <motion.div className="h-full bg-secondary" initial={{ width: 0 }} whileInView={{ width: "100%" }}
              viewport={{ once: true }} transition={{ duration: 1.6 }} />
          </div>
          {[
            ["01", "Création en 2014", "Naissance de QualiUp, laboratoire d'analyses agroalimentaires"],
            ["02", "Analyses spécialisées", "Élargissement vers l'environnement, la cosmétique et l'agronomie"],
            ["03", "Structuration du groupe", "ELAM, ELAM Sahara et IQUALAB rejoignent une même vision"],
            ["04", "Maillage national", "4 agences et 10+ points de proximité au Maroc"],
          ].map(([n, t, d]) => (
            <div key={n} className="relative rounded-2xl border bg-background p-5 text-center md:border-0 md:bg-transparent">
              <div className="relative z-10 mx-auto mb-4 grid size-16 place-items-center rounded-full border-8 border-blue-soft bg-white font-mono text-sm font-bold text-secondary shadow-soft">{n}</div>
              <h3 className="text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Capabilities />
    <GroupRecap />
    <Values />
    <Numbers />
    <Cta />
  </>;
}

function Capabilities() {
  const items = [
    { Icon: Microscope, title: "Analyses bactériologiques", text: "Recherche et dénombrement des micro-organismes d'intérêt sanitaire." },
    { Icon: FlaskConical, title: "Analyses physico-chimiques", text: "Composition, humidité, pH, matières grasses, protéines et plus." },
    { Icon: ShieldAlert, title: "Détection des contaminants", text: "Résidus de pesticides, mycotoxines et substances indésirables." },
    { Icon: BadgeCheck, title: "Authenticité", text: "Vérification de la conformité des produits à leur déclaration." },
    { Icon: Leaf, title: "Allergènes", text: "Recherche d'allergènes pour sécuriser l'étiquetage." },
    { Icon: Atom, title: "Métaux lourds", text: "Plomb, cadmium, mercure, arsenic et éléments traces." },
  ];
  return <section className="bg-surface section-pad">
    <div className="container-site">
      <Label>[ 02 ] CAPACITÉS ANALYTIQUES</Label>
      <h2 className="mt-4 text-4xl font-bold">Une lecture complète de vos matrices</h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ Icon, title, text }) => (
          <div key={title} className="group relative min-h-[200px] overflow-hidden rounded-2xl border bg-background p-7 transition hover:-translate-y-1 hover:shadow-float">
            <Icon className="absolute -bottom-5 -right-5 size-28 text-primary opacity-[0.07] transition group-hover:opacity-15" />
            <span className="grid size-11 place-items-center rounded-xl bg-green-soft text-primary"><Icon className="size-5" /></span>
            <h3 className="mt-5 text-xl font-bold">{title}</h3>
            <p className="relative mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>;
}

function GroupRecap() {
  const groups = [
    { n: "ELAM", d: "Analyses en agronomie, agroalimentaire et environnement, et fourniture d'expertises.", url: "https://elamlaboratory.com/" },
    { n: "ELAM Sahara", d: "La même exigence scientifique, avec une présence de proximité dans le sud du Royaume.", url: "https://elamlaboratory.com/" },
    { n: "IQUALAB", d: "Acteur majeur des analyses et tests pour l'agroalimentaire.", url: "https://iqualaboratory.com/" },
  ];
  return <section className="container-site section-pad">
    <Label>[ 03 ] LE GROUPE</Label>
    <h2 className="mt-4 text-4xl font-bold">Trois laboratoires, une même exigence</h2>
    <div className="mt-10 divide-y overflow-hidden rounded-2xl border">
      {groups.map((g) => (
        <a key={g.n} href={g.url} target="_blank" rel="noreferrer"
          className="group flex flex-col items-start justify-between gap-4 p-7 transition hover:bg-surface sm:flex-row sm:items-center">
          <div>
            <h3 className="text-3xl font-bold transition group-hover:text-primary">{g.n}</h3>
            <p className="mt-1 max-w-xl text-sm text-muted-foreground">{g.d}</p>
          </div>
          <span className="inline-flex items-center gap-2 whitespace-nowrap font-semibold text-secondary">
            Visiter le site <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </span>
        </a>
      ))}
    </div>
  </section>;
}

function Values() {
  const v = [
    { Icon: Target, a: "Précision", b: "Des protocoles maîtrisés et une attention constante portée à chaque étape." },
    { Icon: ShieldCheck, a: "Fiabilité", b: "Des données cohérentes, tracées et présentées avec clarté." },
    { Icon: BookOpenCheck, a: "Réactivité", b: "Une équipe disponible pour comprendre le besoin et orienter la demande." },
    { Icon: MapPin, a: "Proximité", b: "Un réseau national et des interlocuteurs proches de vos activités." },
  ];
  return <section className="section-pad bg-green-soft">
    <div className="container-site">
      <Label>[ 04 ] NOS VALEURS</Label>
      <h2 className="mt-4 text-4xl font-bold">Ce qui guide chacune de nos analyses</h2>
      <div className="mt-9 grid gap-5 md:grid-cols-4">
        {v.map(({ Icon, a, b }) => (
          <div key={a} className="group rounded-2xl bg-background p-7 shadow-soft transition hover:-translate-y-2">
            <span className="grid size-12 place-items-center rounded-xl bg-green-soft text-primary transition group-hover:bg-primary group-hover:text-white"><Icon /></span>
            <h3 className="mt-6 text-2xl font-bold">{a}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{b}</p>
          </div>
        ))}
      </div>
    </div>
  </section>;
}

function Numbers() {
  return <section className="relative overflow-hidden bg-navy py-14 text-primary-foreground">
    <div className="scan-line absolute inset-y-0 w-px bg-primary shadow-[0_0_24px_4px_#52A546]" />
    <div className="container-site grid grid-cols-2 gap-8 md:grid-cols-5">
      {stats.map((s) => (
        <div key={s.label}>
          <strong className="font-mono text-4xl sm:text-5xl">{s.value}</strong>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-primary">{s.label}</p>
        </div>
      ))}
    </div>
  </section>;
}

/* =========================================================================================
   PRESTATIONS D'ANALYSES — élément fort : "tableau périodique" des familles d'analyses
   ========================================================================================= */

export function AnalysesPage() {
  const [i, setI] = useState(0);
  const d = domains[i]!;
  return <>
    <PageHero label="[ PRESTATIONS ] ANALYSES" title="Prestations d'analyses" text="Un large panel de tests spécialisés pour chaque secteur." />

    {/* Explorateur de secteurs : liste verticale à gauche, aperçu à droite */}
    <section className="container-site section-pad">
      <h2 className="text-4xl font-bold">Choisissez votre secteur</h2>
      <div className="mt-10 grid gap-6 lg:grid-cols-[320px_1fr]">
        <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
          {domains.map((x, j) => (
            <button key={x.slug} onClick={() => setI(j)}
              className={`flex shrink-0 items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${i === j ? "bg-navy text-white shadow-float" : "border bg-background hover:border-primary"}`}>
              <span className={`grid size-9 place-items-center rounded-xl ${i === j ? "bg-primary text-white" : "bg-green-soft text-primary"}`}><x.icon className="size-4" /></span>
              {x.title}
            </button>
          ))}
        </div>
        <motion.div key={d.slug} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          className="relative grid overflow-hidden rounded-3xl bg-navy text-white xl:grid-cols-2">
          <div className="relative min-h-80">
            <img src={d.image} alt={`Analyses ${d.title}`} className="absolute inset-0 h-full w-full object-cover" />
            <div className="glass float-card absolute bottom-5 left-5 rounded-2xl border border-white/40 p-4 text-foreground">
              <p className="font-mono text-[10px] text-muted-foreground">{d.matrices.length} matrices</p>
              <strong className="text-sm">{d.categories.length} familles d'analyses</strong>
            </div>
          </div>
          <div className="p-8 lg:p-10">
            <h3 className="text-3xl font-bold">{d.title}</h3>
            <p className="mt-4 leading-7 text-white/70">{d.intro}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {d.categories.flatMap((x) => x.items).slice(0, 6).map((x) => (
                <li key={x} className="flex items-start gap-2 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{x}</li>
              ))}
            </ul>
            <Button className="mt-8" asChild><Link to="/prestations/$slug" params={{ slug: d.slug }}>Voir le domaine <ArrowRight /></Link></Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Tableau périodique des familles d'analyses */}
    <section className="section-pad relative overflow-hidden bg-surface">
      <div className="molecule-grid absolute inset-0 opacity-50" />
      <div className="container-site relative">
        <h2 className="max-w-2xl text-4xl font-bold">Six familles d'analyses, combinables selon votre besoin</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">Chaque demande associe les familles pertinentes pour votre matrice et votre objectif : conformité, export, autocontrôle ou investigation.</p>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {[
            { n: 1, sym: "Mb", name: "Microbiologie", tone: "green" },
            { n: 2, sym: "Pc", name: "Physico-chimie", tone: "blue" },
            { n: 3, sym: "Ct", name: "Contaminants", tone: "green" },
            { n: 4, sym: "Al", name: "Allergènes", tone: "blue" },
            { n: 5, sym: "Au", name: "Authenticité", tone: "green" },
            { n: 6, sym: "Ml", name: "Métaux lourds", tone: "blue" },
          ].map((e) => (
            <div key={e.sym}
              className={`group aspect-square rounded-2xl border-2 bg-background p-4 transition hover:-translate-y-1 hover:shadow-float ${e.tone === "green" ? "border-primary/40 hover:border-primary" : "border-secondary/40 hover:border-secondary"}`}>
              <div className="flex h-full flex-col justify-between">
                <span className="font-mono text-xs text-muted-foreground">{e.n}</span>
                <span className={`font-display text-5xl font-extrabold ${e.tone === "green" ? "text-primary" : "text-secondary"}`}>{e.sym}</span>
                <span className="text-sm font-semibold">{e.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container-site section-pad">
      <h2 className="mb-10 text-4xl font-bold">Tous nos domaines</h2>
      <DomainGrid limit={7} />
    </section>
    <Cta />
  </>;
}

/* =========================================================================================
   TOUS NOS SERVICES — élément fort : trois panneaux qui s'élargissent au survol
   ========================================================================================= */

export function ServicesPage() {
  const pillars = [
    { title: "Analyses", Icon: FileSearch, image: domains[0]!.image, to: "/prestations-analyses",
      text: "Sept domaines pour contrôler vos matrices, surveiller les risques et étayer vos décisions.",
      items: domains.map((d) => d.title) },
    { title: "Conseil et Formation", Icon: GraduationCap, image: conseil, to: "/conseil-formation",
      text: "Des accompagnements sur mesure pour faire vivre la qualité au quotidien.",
      items: ["HACCP", "ISO 22000", "Bonnes pratiques d'hygiène", "Plan de maîtrise sanitaire", "Formation du personnel"] },
    { title: "Audit et Expertise", Icon: ClipboardCheck, image: audit, to: "/audit-expertise",
      text: "Une lecture structurée de vos pratiques et des recommandations exploitables.",
      items: ["Audit hygiène", "Audit fournisseurs", "Diagnostic de conformité", "Audit des process", "Expertise en cas de non-conformité"] },
  ];
  return <>
    <PageHero label="[ SERVICES ]" title="Trois piliers, une exigence commune"
      text="QualiUp réunit analyses, accompagnement et expertise pour répondre aux enjeux de votre activité." />

    <section className="flex flex-col gap-3 px-3 py-3 lg:h-[640px] lg:flex-row">
      {pillars.map(({ title, Icon, image, to, text, items }) => (
        <Link key={title} to={to}
          className="group relative min-h-[520px] flex-1 overflow-hidden rounded-3xl text-white transition-all duration-700 lg:hover:flex-[1.6]">
          <img src={image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/75 to-navy/20" />
          <div className="relative flex h-full flex-col justify-end p-8 sm:p-10">
            <span className="grid size-14 place-items-center rounded-2xl bg-primary"><Icon /></span>
            <h2 className="mt-6 text-3xl font-bold sm:text-4xl">{title}</h2>
            <p className="mt-3 max-w-md leading-7 text-white/75">{text}</p>
            <ul className="mt-5 flex max-w-lg flex-wrap gap-2 lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:transition-all lg:duration-700 lg:group-hover:max-h-60 lg:group-hover:opacity-100">
              {items.map((x) => <li key={x} className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur">{x}</li>)}
            </ul>
            <span className="mt-6 inline-flex items-center gap-2 font-semibold text-primary">Explorer <ArrowRight className="size-4 transition group-hover:translate-x-1" /></span>
          </div>
        </Link>
      ))}
    </section>

    {/* Comment nous travaillons ensemble */}
    <section className="container-site section-pad grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
      <div>
        <h2 className="text-4xl font-bold">Un seul interlocuteur, du besoin à la solution</h2>
        <p className="mt-5 leading-8 text-muted-foreground">Analyses, conseil et audit se complètent : un résultat d'analyse peut révéler un besoin de formation, un audit peut orienter un plan de contrôle. Nous construisons l'accompagnement avec vous.</p>
        <Button className="mt-8" asChild><Link to="/contact">Exposer mon besoin <ArrowRight /></Link></Button>
      </div>
      <ol className="space-y-4">
        {[
          { Icon: Handshake, t: "Qualification du besoin", d: "Nous échangeons sur votre activité, vos obligations et vos objectifs." },
          { Icon: FlaskConical, t: "Proposition adaptée", d: "Analyses, accompagnement ou audit : une offre construite pour votre situation." },
          { Icon: FileText, t: "Réalisation et restitution", d: "Des résultats et des recommandations clairs, directement exploitables." },
        ].map(({ Icon, t, d }, i) => (
          <li key={t} className="flex gap-5 rounded-2xl border p-6">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-blue-soft text-secondary"><Icon /></span>
            <div>
              <p className="font-mono text-[10px] text-primary">ÉTAPE 0{i + 1}</p>
              <h3 className="mt-1 text-lg font-bold">{t}</h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{d}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
    <Cta />
  </>;
}

/* =========================================================================================
   CONSEIL ET FORMATION — élément fort : parcours d'accompagnement en zigzag
   ========================================================================================= */

export function AdvicePage() {
  const services = [
    { t: "Mise en place et suivi HACCP", d: "Analyse des dangers, points critiques et suivi dans le temps, adaptés à votre production." },
    { t: "Accompagnement ISO 22000", d: "Structurer votre système de management de la sécurité des denrées alimentaires." },
    { t: "Bonnes pratiques d'hygiène", d: "Des règles claires, comprises et appliquées par toutes les équipes." },
    { t: "Plan de maîtrise sanitaire", d: "Formaliser vos procédures d'hygiène, de traçabilité et de contrôle." },
    { t: "Formation du personnel", d: "Des sessions concrètes sur l'hygiène alimentaire, au plus près de vos postes de travail." },
  ];
  return <>
    <PageHero label="[ ACCOMPAGNEMENT ]" title="Conseil et Formation"
      text="Transformez les exigences qualité en pratiques comprises, appliquées et durables." image={conseil} />

    {/* Parcours zigzag */}
    <section className="container-site section-pad">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold">Nos accompagnements</h2>
        <p className="mt-4 text-muted-foreground">Chaque entreprise avance à son rythme : nous intervenons là où vous en avez besoin, de la première démarche à la certification.</p>
      </div>
      <div className="relative mt-14">
        <div className="absolute inset-y-0 left-6 w-0.5 bg-primary/25 md:left-1/2 md:-translate-x-1/2" />
        {services.map((s, i) => (
          <div key={s.t} className={`relative mb-8 flex pl-16 md:pl-0 ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
            <span className="absolute left-6 top-6 z-10 grid size-5 -translate-x-1/2 place-items-center rounded-full bg-primary ring-8 ring-green-soft md:left-1/2" />
            <Reveal className="w-full rounded-3xl border bg-background p-7 shadow-soft md:w-[calc(50%-3rem)]">
              <span className="font-mono text-xs text-primary">ACC-0{i + 1}</span>
              <h3 className="mt-3 text-2xl font-bold">{s.t}</h3>
              <p className="mt-3 leading-7 text-muted-foreground">{s.d}</p>
            </Reveal>
          </div>
        ))}
      </div>
    </section>

    {/* Déroulement d'une formation */}
    <section className="section-pad bg-green-soft">
      <div className="container-site">
        <h2 className="text-4xl font-bold">Comment se déroule une formation</h2>
        <div className="relative mt-14 grid gap-6 md:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-8 hidden h-0.5 bg-primary/20 md:block">
            <motion.div className="h-full bg-primary" initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 1.4 }} />
          </div>
          {[
            { Icon: Search, t: "Diagnostic des besoins", d: "Nous identifions les écarts et les priorités de vos équipes." },
            { Icon: FileText, t: "Programme sur mesure", d: "Un contenu construit autour de vos produits et de vos postes." },
            { Icon: Users, t: "Formation sur site", d: "Des sessions concrètes, dans votre environnement de travail." },
            { Icon: BadgeCheck, t: "Évaluation et suivi", d: "Vérification des acquis et recommandations pour la suite." },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="relative text-center">
              <div className="relative z-10 mx-auto mb-4 grid size-16 place-items-center rounded-full border-8 border-green-soft bg-white text-primary shadow-soft"><Icon /></div>
              <h3 className="text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Bénéfices : bande sombre */}
    <section className="bg-navy section-pad text-white">
      <div className="container-site grid gap-10 md:grid-cols-3">
        {[
          { Icon: ShieldCheck, t: "Conformité", d: "Répondre aux exigences réglementaires et aux attentes de vos clients." },
          { Icon: BookOpenCheck, t: "Montée en compétences", d: "Des équipes qui comprennent le pourquoi de chaque bonne pratique." },
          { Icon: Target, t: "Confiance clients", d: "Une démarche qualité visible, qui rassure vos partenaires et marchés." },
        ].map(({ Icon, t, d }) => (
          <div key={t} className="border-l-2 border-primary pl-6">
            <Icon className="size-10 text-primary" />
            <h3 className="mt-5 text-2xl font-bold">{t}</h3>
            <p className="mt-3 leading-7 text-white/70">{d}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container-site section-pad">
      <div className="signature-bg relative overflow-hidden rounded-3xl p-8 text-white sm:p-12">
        <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full border border-white/20" />
        <div className="pointer-events-none absolute -right-8 -top-8 size-48 rounded-full border border-white/20" />
        <h2 className="max-w-xl text-4xl font-bold">Planifions votre accompagnement</h2>
        <p className="mt-4 max-w-2xl text-white/75">Décrivez votre activité et vos objectifs : nous revenons vers vous avec une proposition adaptée.</p>
        <Button className="mt-7 bg-white text-navy hover:bg-white/90" asChild>
          <Link to="/contact" search={{ type: "Conseil et formation" }}>Planifier un accompagnement <ArrowRight /></Link>
        </Button>
      </div>
    </section>
  </>;
}

/* =========================================================================================
   AUDIT ET EXPERTISE — élément fort : checklist qui se coche + anneau de progression
   ========================================================================================= */

export function AuditPage() {
  const checks = ["Audit hygiène", "Audit fournisseurs", "Diagnostic de conformité", "Audit des process de production"];
  return <>
    <PageHero dark label="[ EXPERTISE ]" title="Audit et Expertise"
      text="Évaluer avec méthode, comprendre les écarts et définir un plan d'action réaliste." image={audit} />

    <section className="container-site section-pad grid items-center gap-12 lg:grid-cols-2">
      <div>
        <Label>[ 01 ] NOS AUDITS</Label>
        <h2 className="mt-4 text-4xl font-bold">Une checklist reliée à votre réalité</h2>
        <p className="mt-4 leading-7 text-muted-foreground">Nos audits s'appuient sur vos contraintes de production et vos exigences clients, pas sur une grille générique.</p>
        <div className="mt-8 space-y-3">
          {checks.map((x, i) => (
            <motion.div key={x} initial={{ opacity: 0.35 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.35 }} className="flex items-center gap-4 rounded-2xl border bg-background p-5">
              <motion.span initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.35, type: "spring" }}
                className="grid size-8 place-items-center rounded-full bg-primary text-white"><Check className="size-4" /></motion.span>
              <b className="text-lg">{x}</b>
              <span className="ml-auto font-mono text-[10px] text-muted-foreground">PT-0{i + 1}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="relative grid place-items-center rounded-[2.5rem] bg-blue-soft p-10">
        <svg viewBox="0 0 200 200" className="size-64 -rotate-90">
          <circle cx="100" cy="100" r="84" fill="none" stroke="#FFFFFF" strokeWidth="18" />
          <motion.circle cx="100" cy="100" r="84" fill="none" stroke="#254F9C" strokeWidth="18" strokeLinecap="round"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.8, delay: 0.3 }} />
        </svg>
        <div className="absolute text-center">
          <b className="block font-mono text-4xl text-secondary">4/4</b>
          <small className="text-muted-foreground">points évalués</small>
        </div>
        <div className="glass float-card absolute bottom-6 right-6 hidden rounded-2xl border border-white/60 p-4 shadow-float sm:block">
          <p className="font-mono text-[10px] text-muted-foreground">RAPPORT D'AUDIT</p>
          <strong className="text-sm">Plan d'actions prêt</strong>
        </div>
      </div>
    </section>

    {/* Expertise */}
    <section className="section-pad bg-navy text-white">
      <div className="container-site">
        <Label>[ 02 ] EXPERTISE</Label>
        <h2 className="mt-4 max-w-2xl text-4xl font-bold">Quand un écart survient, nous vous aidons à comprendre et à agir</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { Icon: ShieldAlert, t: "Non-conformité", d: "Accompagnement suite à un résultat non conforme ou une réclamation." },
            { Icon: Search, t: "Analyse des causes", d: "Identification de l'origine du problème, du process à la matière première." },
            { Icon: Target, t: "Recommandations", d: "Des actions correctives concrètes et priorisées." },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur">
              <Icon className="size-8 text-primary" />
              <h3 className="mt-5 text-xl font-bold">{t}</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Livrables : aperçu de document stylisé */}
    <section className="container-site section-pad grid items-center gap-14 lg:grid-cols-2">
      <div>
        <Label>[ 03 ] LIVRABLES</Label>
        <h2 className="mt-4 text-4xl font-bold">Un rapport que vos équipes peuvent utiliser dès le lendemain</h2>
        <ul className="mt-8 space-y-4">
          {["Rapport détaillé des constats", "Points forts identifiés", "Axes d'amélioration", "Plan d'actions priorisé"].map((x) => (
            <li key={x} className="flex items-center gap-3 font-semibold"><span className="grid size-7 place-items-center rounded-full bg-green-soft text-primary"><Check className="size-4" /></span>{x}</li>
          ))}
        </ul>
      </div>
      <div className="relative mx-auto w-full max-w-md">
        <div className="absolute -left-4 top-6 h-full w-full rotate-[-4deg] rounded-2xl border bg-surface" />
        <div className="relative rounded-2xl border bg-background p-7 shadow-float">
          <div className="flex items-center justify-between border-b pb-4">
            <span className="font-mono text-xs text-secondary">RAPPORT D'AUDIT · QU-AUD</span>
            <span className="rotate-3 rounded-full border-2 border-primary px-3 py-1 text-xs font-bold text-primary">VALIDÉ</span>
          </div>
          {["Constats", "Points forts", "Axes d'amélioration", "Plan d'actions"].map((s, i) => (
            <div key={s} className="mt-5">
              <p className="text-sm font-bold">{i + 1}. {s}</p>
              <div className="mt-2 space-y-1.5">
                <div className="h-2 w-full rounded-full bg-surface" />
                <div className="h-2 w-4/5 rounded-full bg-surface" />
                {i === 3 && <div className="h-2 w-3/5 rounded-full bg-green-soft" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container-site pb-24">
      <div className="signature-bg rounded-3xl p-8 text-white sm:p-12">
        <h2 className="max-w-xl text-4xl font-bold">Demandez un audit adapté à votre activité</h2>
        <Button className="mt-7 bg-white text-navy hover:bg-white/90" asChild>
          <Link to="/contact" search={{ type: "Audit" }}>Demander un audit <ArrowRight /></Link>
        </Button>
      </div>
    </section>
  </>;
}

/* =========================================================================================
   FAQ — élément fort : recherche instantanée + carte d'aide collante
   ========================================================================================= */

export function FaqPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Tous");
  const cats = ["Tous", "Général", "Analyses", "Prélèvements", "Résultats et rapports", "Conseil et Audit"];
  const count = (c: string) => (c === "Tous" ? faq.length : faq.filter(([x]) => x === c).length);
  const shown = useMemo(
    () => faq.filter(([c, x, a]) => (cat === "Tous" || c === cat) &&
      (x.toLowerCase().includes(q.toLowerCase()) || a.toLowerCase().includes(q.toLowerCase()))),
    [q, cat],
  );
  return <>
    <PageHero label="[ AIDE ]" title="Questions fréquentes"
      text="Trouvez rapidement une réponse sur les analyses, prélèvements, rapports et accompagnements." />

    <section className="container-site section-pad grid gap-10 lg:grid-cols-[1fr_340px]">
      <div>
        <div className="relative">
          <Search className="absolute left-5 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Rechercher : prélèvement, rapport, métaux lourds…"
            aria-label="Rechercher une question"
            className="h-16 w-full rounded-full border-2 bg-background pl-14 pr-6 text-base shadow-soft outline-none transition focus:border-primary" />
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {cats.map((x) => (
            <button key={x} onClick={() => setCat(x)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${cat === x ? "bg-secondary text-white" : "border hover:border-secondary"}`}>
              {x} <span className="ml-1 font-mono text-[10px] opacity-70">{count(x)}</span>
            </button>
          ))}
        </div>
        <p className="mt-8 font-mono text-xs text-muted-foreground">{shown.length} RÉSULTAT{shown.length > 1 ? "S" : ""}</p>

        {shown.length === 0 ? (
          <div className="mt-4 rounded-3xl border-2 border-dashed p-10 text-center">
            <FlaskConical className="mx-auto size-10 text-primary" />
            <h3 className="mt-4 text-xl font-bold">Aucune question ne correspond à « {q} »</h3>
            <p className="mt-2 text-muted-foreground">Essayez un autre mot-clé ou posez directement votre question à notre équipe technique.</p>
            <Button className="mt-6" variant="outline" onClick={() => { setQ(""); setCat("Tous"); }}>Afficher toutes les questions</Button>
          </div>
        ) : (
          <Accordion type="single" collapsible className="mt-4 space-y-3">
            {shown.map(([c, x, a]) => (
              <AccordionItem key={x} value={x} className="rounded-2xl border bg-background px-6 data-[state=open]:border-primary data-[state=open]:shadow-soft">
                <AccordionTrigger className="text-left text-base hover:no-underline">
                  <span><small className="mb-1 block font-mono text-[10px] text-primary">{c.toUpperCase()}</small>{x}</span>
                </AccordionTrigger>
                <AccordionContent className="max-w-3xl leading-7 text-muted-foreground">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>

      <aside className="lg:sticky lg:top-28 lg:self-start">
        <div className="overflow-hidden rounded-3xl bg-navy text-white shadow-float">
          <div className="signature-bg p-7">
            <h3 className="text-2xl font-bold">Vous ne trouvez pas votre réponse ?</h3>
            <p className="mt-2 text-sm text-white/80">Notre équipe technique vous oriente vers l'analyse adaptée.</p>
          </div>
          <div className="space-y-3 p-7">
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="flex items-center gap-3 rounded-xl bg-white/5 p-4 transition hover:bg-white/10">
              <Phone className="size-5 text-primary" /><span className="font-semibold">{PHONE}</span>
            </a>
            <a href={`mailto:${TECH_EMAIL}?subject=Question`} className="flex items-center gap-3 rounded-xl bg-white/5 p-4 transition hover:bg-white/10">
              <Mail className="size-5 text-primary" /><span className="break-all text-sm font-semibold">{TECH_EMAIL}</span>
            </a>
            <Button className="w-full" asChild><Link to="/contact">Poser ma question <ArrowRight /></Link></Button>
          </div>
        </div>
      </aside>
    </section>
    <Cta />
  </>;
}