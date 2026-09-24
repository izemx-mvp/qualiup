import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Clipboard, Clock, Facebook, FlaskConical, Linkedin, MessageCircle } from "lucide-react";
import { motion, useScroll } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Cta, Label, PageHero } from "@/components/site/Shared";
import { articles } from "@/data/articles";

type Article = (typeof articles)[number];

const slugify = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/* =========================================================================================
   LISTE DES ACTUALITÉS
   ========================================================================================= */

export function NewsPage() {
  const lead = articles[0]!;
  const categories = useMemo(() => ["Tous", ...Array.from(new Set(articles.map((a) => a.category)))], []);
  const [cat, setCat] = useState("Tous");
  const rest = articles.slice(1).filter((a) => cat === "Tous" || a.category === cat);
  const showLead = cat === "Tous" || lead.category === cat;

  return <>
    <PageHero label="[ RESSOURCES ]" title="Actualités & expertise"
      text="Décryptages scientifiques, bonnes pratiques et repères pour éclairer vos décisions qualité." />

    <section className="container-site section-pad">
      {/* Filtres */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button key={c} type="button" onClick={() => setCat(c)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${cat === c ? "bg-secondary text-white shadow-soft" : "border hover:border-secondary"}`}>
              {c}
            </button>
          ))}
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          {(showLead ? 1 : 0) + rest.length} ARTICLE{(showLead ? 1 : 0) + rest.length > 1 ? "S" : ""}
        </p>
      </div>

      {/* À la une */}
      {showLead && (
        <Link to="/actualites/$slug" params={{ slug: lead.slug }}
          className="group relative mt-10 grid overflow-hidden rounded-3xl bg-navy text-white shadow-float lg:grid-cols-[1.15fr_.85fr]">
          <div className="relative min-h-80 overflow-hidden lg:min-h-[480px]">
            <img src={lead.image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <span className="absolute left-5 top-5 rounded-full bg-primary px-4 py-1.5 text-xs font-bold">À la une</span>
          </div>
          <div className="relative flex flex-col p-8 lg:p-12">
            <div className="molecule-grid pointer-events-none absolute inset-0 opacity-10" />
            <div className="relative flex flex-wrap gap-3 font-mono text-[10px] text-white/60">
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-primary">{lead.category}</span>
              <span>{lead.date}</span>
              <span className="inline-flex items-center gap-1"><Clock className="size-3" />{lead.read}</span>
            </div>
            <h2 className="relative mt-5 text-3xl font-bold leading-tight sm:text-4xl">{lead.title}</h2>
            <p className="relative mt-5 leading-7 text-white/70">{lead.intro}</p>
            <span className="relative mt-auto inline-flex items-center gap-2 pt-8 font-semibold text-primary">
              Lire l'article <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      )}

      {/* Autres articles */}
      {rest.length > 0 && (
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {rest.map((a) => <ArticleCard key={a.slug} a={a} />)}
        </div>
      )}

      {!showLead && rest.length === 0 && (
        <div className="mt-10 rounded-3xl border-2 border-dashed p-12 text-center">
          <FlaskConical className="mx-auto size-10 text-primary" />
          <h3 className="mt-4 text-xl font-bold">Aucun article dans cette catégorie pour le moment</h3>
          <Button className="mt-6" variant="outline" onClick={() => setCat("Tous")}>Voir tous les articles</Button>
        </div>
      )}
    </section>

    {/* Bande thématique */}
    <section className="section-pad bg-blue-soft">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2">
        <div>
          <Label>[ EXPERTISE ]</Label>
          <h2 className="mt-4 text-4xl font-bold">Une question sur un article ou une analyse ?</h2>
          <p className="mt-4 max-w-lg leading-7 text-muted-foreground">Nos équipes techniques vous aident à choisir les analyses adaptées à votre produit et à vos obligations.</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Button size="lg" asChild><Link to="/contact">Poser ma question <ArrowRight /></Link></Button>
          <Button size="lg" variant="outline" asChild><Link to="/prestations-analyses">Voir nos prestations</Link></Button>
        </div>
      </div>
    </section>
    <Cta />
  </>;
}

function ArticleCard({ a }: { a: Article }) {
  return <Link to="/actualites/$slug" params={{ slug: a.slug }}
    className="group flex flex-col overflow-hidden rounded-3xl border bg-background shadow-soft transition hover:-translate-y-1 hover:shadow-float">
    <div className="relative overflow-hidden">
      <img loading="lazy" src={a.image} alt="" className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105" />
      <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 font-mono text-[10px] font-bold text-primary backdrop-blur">{a.category}</span>
    </div>
    <div className="flex flex-1 flex-col p-7">
      <div className="flex gap-3 font-mono text-[10px] text-muted-foreground">
        <span>{a.date}</span><span className="inline-flex items-center gap-1"><Clock className="size-3" />{a.read}</span>
      </div>
      <h2 className="mt-3 text-2xl font-bold group-hover:text-secondary">{a.title}</h2>
      <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">{a.intro}</p>
      <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-primary">
        Lire l'article <ArrowRight className="size-4 transition group-hover:translate-x-1" />
      </span>
    </div>
  </Link>;
}

/* =========================================================================================
   PAGE ARTICLE
   ========================================================================================= */

export function ArticlePage({ article }: { article: Article }) {
  const [url, setUrl] = useState("https://qualiup.com");
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll();
  useEffect(() => { setUrl(window.location.href); }, [article.slug]);

  const copy = () => {
    void navigator.clipboard?.writeText(url).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2);
  const shares = [
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, Icon: Linkedin },
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, Icon: Facebook },
    { label: "WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(article.title + " " + url)}`, Icon: MessageCircle },
  ];

  return <>
    {/* Barre de progression de lecture */}
    <motion.div className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-primary" style={{ scaleX: scrollYProgress }} />

    {/* En-tête */}
    <section className="relative overflow-hidden bg-navy pb-40 pt-16 text-white">
      <div className="molecule-grid pointer-events-none absolute inset-0 opacity-10" />
      <div className="container-site relative max-w-5xl">
        <Link to="/actualites" className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-primary">
          <ArrowLeft className="size-4" /> Toutes les actualités
        </Link>
        <div className="mt-8 flex flex-wrap gap-3 font-mono text-[11px] text-white/60">
          <span className="rounded-full bg-primary px-3 py-1 font-bold text-white">{article.category}</span>
          <span className="py-1">{article.date}</span>
          <span className="inline-flex items-center gap-1 py-1"><Clock className="size-3" />{article.read} de lecture</span>
        </div>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-6xl">{article.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">{article.intro}</p>
      </div>
    </section>

    <div className="container-site relative -mt-28 max-w-6xl">
      <img src={article.image} alt="" className="max-h-[620px] w-full rounded-3xl object-cover shadow-float" />
    </div>

    {/* Corps : sommaire + texte + partage */}
    <div className="container-site section-pad grid max-w-6xl gap-12 lg:grid-cols-[220px_1fr]">
      <aside className="hidden lg:block">
        <div className="sticky top-28 space-y-8">
          <nav aria-label="Sommaire">
            <p className="font-mono text-[10px] text-muted-foreground">SOMMAIRE</p>
            <ol className="mt-4 space-y-3 border-l-2 pl-4">
              {article.sections.map((s) => (
                <li key={s.title}><a href={`#${slugify(s.title)}`} className="text-sm font-semibold text-muted-foreground transition hover:text-primary">{s.title}</a></li>
              ))}
            </ol>
          </nav>
          <div>
            <p className="font-mono text-[10px] text-muted-foreground">PARTAGER</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {shares.map(({ label, href, Icon }) => <Share key={label} href={href} label={label}><Icon className="size-4" /></Share>)}
              <CopyButton copied={copied} onClick={copy} />
            </div>
          </div>
        </div>
      </aside>

      <article className="max-w-3xl">
        {/* Partage mobile */}
        <div className="mb-10 flex gap-2 lg:hidden">
          {shares.map(({ label, href, Icon }) => <Share key={label} href={href} label={label}><Icon className="size-4" /></Share>)}
          <CopyButton copied={copied} onClick={copy} />
        </div>

        {article.sections.map((s, i) => (
          <section key={s.title} id={slugify(s.title)} className="mb-14 scroll-mt-28">
            <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
            <h2 className="mt-2 text-3xl font-bold">{s.title}</h2>
            <p className="mt-5 text-lg leading-9 text-muted-foreground">{s.text}</p>
            {i === 0 && (
              <blockquote className="relative my-12 overflow-hidden rounded-3xl bg-green-soft p-8 font-display text-2xl font-semibold leading-snug">
                <span className="absolute -right-2 -top-10 font-display text-[10rem] leading-none text-primary/15">“</span>
                <span className="relative">Une analyse pertinente commence toujours par une question clairement posée.</span>
              </blockquote>
            )}
          </section>
        ))}

        {/* CTA intégré */}
        <div className="signature-bg relative overflow-hidden rounded-3xl p-8 text-white sm:p-10">
          <div className="pointer-events-none absolute -right-12 -top-12 size-48 rounded-full border border-white/20" />
          <h3 className="text-2xl font-bold">Besoin de ce type d'analyse ?</h3>
          <p className="mt-2 max-w-lg text-white/80">Décrivez votre produit et votre objectif : notre équipe technique vous oriente vers les analyses adaptées.</p>
          <Button className="mt-6 bg-white text-navy hover:bg-white/90" asChild>
            <Link to="/contact" search={{ type: "Analyse" }}>Demander une analyse <ArrowRight /></Link>
          </Button>
        </div>
      </article>
    </div>

    {/* Articles liés */}
    {related.length > 0 && (
      <section className="section-pad bg-surface">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-bold">À lire aussi</h2>
            <Button variant="outline" asChild><Link to="/actualites">Toutes les actualités <ArrowRight /></Link></Button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {related.map((a) => <ArticleCard key={a.slug} a={a} />)}
          </div>
        </div>
      </section>
    )}
  </>;
}

function Share({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer" aria-label={`Partager sur ${label}`}
    className="grid size-10 place-items-center rounded-full border transition hover:border-primary hover:bg-green-soft hover:text-primary">
    {children}
  </a>;
}

function CopyButton({ copied, onClick }: { copied: boolean; onClick: () => void }) {
  return <button type="button" onClick={onClick} aria-label={copied ? "Lien copié" : "Copier le lien"}
    className={`grid size-10 place-items-center rounded-full border transition ${copied ? "border-primary bg-primary text-white" : "hover:border-primary hover:bg-green-soft hover:text-primary"}`}>
    {copied ? <Check className="size-4" /> : <Clipboard className="size-4" />}
  </button>;
}