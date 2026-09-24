import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUp, ChevronDown, ClipboardCheck, GraduationCap, Mail, MapPin, Menu, Phone, X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-laboratoire.webp";
import logo from "@/assets/qualiup-logo.png";
import { agencies, company, domains } from "@/data/site";

type OpenMenu = "about" | "services" | null;

const SERVICE_PATHS = ["/services", "/prestations", "/conseil-formation", "/audit-expertise"];

/* =========================================================================================
   HEADER
   ========================================================================================= */

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<OpenMenu>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSection, setMobileSection] = useState<OpenMenu>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const path = useRouterState({ select: (s) => s.location.pathname });

  // Fermeture des menus + retour en haut à chaque changement de page
  useEffect(() => { setOpen(false); setMenu(null); window.scrollTo({ top: 0 }); }, [path]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Bloque le scroll de la page quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Échap ferme tout
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") { setMenu(null); setOpen(false); } };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  const openMenu = (m: OpenMenu) => { if (closeTimer.current) clearTimeout(closeTimer.current); setMenu(m); };
  const scheduleClose = () => { closeTimer.current = setTimeout(() => setMenu(null), 150); };

  const isActive = (to: string) => (to === "/" ? path === "/" : path.startsWith(to));
  const servicesActive = SERVICE_PATHS.some((p) => path.startsWith(p));
  const aboutActive = isActive("/a-propos") || isActive("/faq");

  const linkClass = (active: boolean) =>
    `relative rounded-full px-4 py-2 text-sm font-semibold transition ${active ? "text-secondary" : "text-foreground/80 hover:bg-muted hover:text-foreground"}`;
  const ActiveDot = ({ show }: { show: boolean }) =>
    show ? <motion.span layoutId="nav-dot" className="absolute -bottom-1 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-primary" /> : null;

  return <>
    {/* Barre supérieure */}
    <div className="hidden bg-navy py-2 text-xs text-primary-foreground lg:block">
      <div className="container-site flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-primary-foreground/75"><MapPin className="size-3.5 text-primary" />{company.address}</span>
        <div className="flex items-center gap-6">
          <a className="inline-flex items-center gap-2 transition hover:text-primary" href={`mailto:${company.email}`}><Mail className="size-3.5 text-primary" />{company.email}</a>
          <a className="inline-flex items-center gap-2 transition hover:text-primary" href={`tel:${company.phoneHref}`}><Phone className="size-3.5 text-primary" />{company.phone}</a>
        </div>
      </div>
    </div>

    <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? "glass border-border shadow-soft" : "border-transparent bg-background"}`}>
      <div className={`container-site flex items-center justify-between gap-4 transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}>
        <Link to="/" aria-label="QualiUp Group — Accueil" className="shrink-0">
          <img src={logo} alt="QualiUp Group" className={`w-auto transition-all duration-300 ${scrolled ? "h-8 lg:h-9" : "h-9 lg:h-11"}`} />
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          <Link to="/" className={linkClass(isActive("/"))}>Accueil<ActiveDot show={isActive("/")} /></Link>

          {/* À propos */}
          <div className="relative" onMouseEnter={() => openMenu("about")} onMouseLeave={scheduleClose}>
            <button type="button" aria-expanded={menu === "about"} onClick={() => setMenu(menu === "about" ? null : "about")} className={linkClass(aboutActive)}>
              À propos <ChevronDown className={`inline size-3 transition ${menu === "about" ? "rotate-180" : ""}`} />
              <ActiveDot show={aboutActive} />
            </button>
            <AnimatePresence>
              {menu === "about" && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                  className="absolute left-0 top-full w-72 pt-3">
                  <div className="rounded-2xl border bg-background p-2 shadow-float">
                    <DropLink to="/a-propos" title="À propos de nous" text="Notre histoire, nos valeurs, le groupe" />
                    <DropLink to="/faq" title="FAQ" text="Les réponses aux questions fréquentes" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Services (méga-menu) */}
          <div onMouseEnter={() => openMenu("services")} onMouseLeave={scheduleClose}>
            <button type="button" aria-expanded={menu === "services"} onClick={() => setMenu(menu === "services" ? null : "services")} className={linkClass(servicesActive)}>
              Services <ChevronDown className={`inline size-3 transition ${menu === "services" ? "rotate-180" : ""}`} />
              <ActiveDot show={servicesActive} />
            </button>
            <AnimatePresence>
              {menu === "services" && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                  className="absolute inset-x-0 top-full border-y bg-background shadow-float">
                  <div className="container-site grid grid-cols-[1.5fr_.75fr_.75fr] gap-8 py-8">
                    <div>
                      <div className="mb-4 flex items-center justify-between">
                        <p className="font-mono text-xs text-primary">PRESTATIONS D'ANALYSES</p>
                        <Link to="/prestations-analyses" className="inline-flex items-center gap-1 text-xs font-semibold text-secondary hover:underline">Voir tout <ArrowRight className="size-3" /></Link>
                      </div>
                      <div className="grid grid-cols-2 gap-1">
                        {domains.map((d) => (
                          <Link key={d.slug} to="/prestations/$slug" params={{ slug: d.slug }}
                            className="group flex gap-3 rounded-xl p-3 transition hover:bg-surface">
                            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-green-soft text-primary transition group-hover:bg-primary group-hover:text-white"><d.icon className="size-5" /></span>
                            <span className="min-w-0">
                              <b className="block text-sm">{d.title}</b>
                              <small className="line-clamp-1 text-muted-foreground">{d.short}</small>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="border-l pl-8">
                      <p className="font-mono text-xs text-primary">ACCOMPAGNEMENT</p>
                      <Link to="/conseil-formation" className="group mt-4 flex gap-3 rounded-xl p-3 transition hover:bg-surface">
                        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-blue-soft text-secondary"><GraduationCap className="size-5" /></span>
                        <span><b className="block text-sm">Conseil et Formation</b><small className="text-muted-foreground">HACCP, ISO 22000, hygiène</small></span>
                      </Link>
                      <Link to="/audit-expertise" className="group mt-1 flex gap-3 rounded-xl p-3 transition hover:bg-surface">
                        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-blue-soft text-secondary"><ClipboardCheck className="size-5" /></span>
                        <span><b className="block text-sm">Audit et Expertise</b><small className="text-muted-foreground">Diagnostics et recommandations</small></span>
                      </Link>
                      <Link to="/services" className="mt-5 inline-flex items-center gap-2 px-3 text-sm font-semibold text-secondary hover:underline">Tous nos services <ArrowRight className="size-4" /></Link>
                    </div>
                    <div className="relative min-h-64 overflow-hidden rounded-2xl">
                      <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/60 to-navy/10" />
                      <div className="relative flex h-full flex-col justify-end p-6 text-white">
                        <b className="text-lg">Besoin d'une analyse ?</b>
                        <p className="mt-1 text-xs text-white/75">Décrivez votre échantillon, nous vous orientons.</p>
                        <Button className="mt-4" asChild><Link to="/contact">Demander un devis</Link></Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/actualites" className={linkClass(isActive("/actualites"))}>Actualités<ActiveDot show={isActive("/actualites")} /></Link>
          <Link to="/contact" className={linkClass(isActive("/contact"))}>Contact<ActiveDot show={isActive("/contact")} /></Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a className="group inline-flex items-center gap-2 text-sm font-semibold text-secondary" href={`tel:${company.phoneHref}`}>
            <span className="grid size-9 place-items-center rounded-full bg-blue-soft transition group-hover:bg-secondary group-hover:text-white"><Phone className="size-4" /></span>
            <span className="hidden xl:inline">{company.phone}</span>
          </a>
          <Button asChild><Link to="/contact">Demander un devis <ArrowRight /></Link></Button>
        </div>

        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>

    </header>

    {/* Menu mobile plein écran — rendu dans <body> via un portail pour passer au-dessus de tout */}
    {mounted && createPortal(
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
            role="dialog" aria-modal="true" aria-label="Menu"
            className="fixed inset-0 z-[100] flex flex-col bg-background lg:hidden">
            <div className="flex h-16 shrink-0 items-center justify-between border-b px-5">
              <Link to="/" aria-label="QualiUp Group — Accueil" onClick={() => setOpen(false)}>
                <img src={logo} alt="QualiUp Group" className="h-8 w-auto" />
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Fermer le menu"><X /></Button>
            </div>
            <motion.nav initial={{ y: 12 }} animate={{ y: 0 }} className="flex-1 overflow-y-auto px-6 py-4" aria-label="Navigation mobile">
              <MobileLink to="/" active={isActive("/")}>Accueil</MobileLink>
              <MobileGroup title="À propos" open={mobileSection === "about"} active={aboutActive} onToggle={() => setMobileSection(mobileSection === "about" ? null : "about")}>
                <Link to="/a-propos" className="block py-2.5 text-muted-foreground">À propos de nous</Link>
                <Link to="/faq" className="block py-2.5 text-muted-foreground">FAQ</Link>
              </MobileGroup>
              <MobileGroup title="Services" open={mobileSection === "services"} active={servicesActive} onToggle={() => setMobileSection(mobileSection === "services" ? null : "services")}>
                <Link to="/prestations-analyses" className="block py-2.5 font-semibold text-secondary">Toutes les prestations d'analyses</Link>
                {domains.map((d) => (
                  <Link key={d.slug} to="/prestations/$slug" params={{ slug: d.slug }} className="flex items-center gap-3 py-2 text-muted-foreground">
                    <d.icon className="size-4 text-primary" />{d.title}
                  </Link>
                ))}
                <div className="mt-2 border-t pt-2">
                  <Link to="/conseil-formation" className="block py-2.5 text-muted-foreground">Conseil et Formation</Link>
                  <Link to="/audit-expertise" className="block py-2.5 text-muted-foreground">Audit et Expertise</Link>
                  <Link to="/services" className="block py-2.5 text-muted-foreground">Tous nos services</Link>
                </div>
              </MobileGroup>
              <MobileLink to="/actualites" active={isActive("/actualites")}>Actualités</MobileLink>
              <MobileLink to="/contact" active={isActive("/contact")}>Contact</MobileLink>
              <div className="mt-8 space-y-3 text-sm text-muted-foreground">
                <a className="flex items-center gap-3" href={`mailto:${company.email}`}><Mail className="size-4 text-primary" />{company.email}</a>
                <p className="flex items-start gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-primary" />{company.address}</p>
              </div>
            </motion.nav>
            <div className="grid shrink-0 grid-cols-2 gap-3 border-t bg-surface p-5">
              <Button variant="outline" asChild><a href={`tel:${company.phoneHref}`}><Phone />Appeler</a></Button>
              <Button asChild><Link to="/contact">Demander un devis</Link></Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body,
    )}
  </>;
}

function DropLink({ to, title, text }: { to: "/a-propos" | "/faq"; title: string; text: string }) {
  return <Link to={to} className="group block rounded-xl p-3 transition hover:bg-surface">
    <b className="flex items-center justify-between text-sm">{title}<ArrowRight className="size-3.5 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" /></b>
    <small className="text-muted-foreground">{text}</small>
  </Link>;
}

function MobileLink({ to, active, children }: { to: "/" | "/actualites" | "/contact"; active: boolean; children: React.ReactNode }) {
  return <Link to={to} className={`flex items-center justify-between border-b py-4 font-display text-2xl font-bold ${active ? "text-secondary" : ""}`}>
    {children}{active && <span className="size-2 rounded-full bg-primary" />}
  </Link>;
}

function MobileGroup({ title, open, active, onToggle, children }: { title: string; open: boolean; active: boolean; onToggle: () => void; children: React.ReactNode }) {
  return <div className="border-b">
    <button type="button" onClick={onToggle} aria-expanded={open}
      className={`flex w-full items-center justify-between py-4 font-display text-2xl font-bold ${active ? "text-secondary" : ""}`}>
      {title}<ChevronDown className={`size-5 transition ${open ? "rotate-180" : ""}`} />
    </button>
    <AnimatePresence initial={false}>
      {open && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
          <div className="pb-4 pl-1">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>;
}

/* =========================================================================================
   FOOTER
   ========================================================================================= */

export function SiteFooter() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 800);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return <>
    <footer className="relative overflow-hidden bg-navy pb-24 text-primary-foreground lg:pb-0">
      <div className="petri pointer-events-none absolute inset-0 opacity-30" />

      {/* Bandeau d'appel à l'action */}
      <div className="container-site relative pt-16">
        <div className="signature-bg relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl p-8 sm:p-10 lg:flex-row lg:items-center">
          <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full border border-white/20" />
          <div className="pointer-events-none absolute -right-6 -top-6 size-36 rounded-full border border-white/20" />
          <div className="relative">
            <h2 className="text-3xl font-bold">Un échantillon à analyser ?</h2>
            <p className="mt-2 max-w-xl text-white/80">Nos équipes vous orientent vers les analyses adaptées à votre produit et à vos obligations.</p>
          </div>
          <div className="relative flex flex-wrap gap-3">
            <Button size="lg" className="bg-white text-navy hover:bg-white/90" asChild><Link to="/contact">Demander un devis <ArrowRight /></Link></Button>
            <Button size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10" asChild>
              <a href={`tel:${company.phoneHref}`}><Phone />{company.phone}</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Colonnes */}
      <div className="container-site relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_.8fr_1fr_1fr]">
        <div>
          <div className="inline-block rounded-2xl bg-background px-4 py-3"><img src={logo} alt="QualiUp Group" className="h-11 w-auto" /></div>
          <p className="mt-6 max-w-sm text-sm leading-7 text-primary-foreground/70">
            Depuis sa création en 2014, QualiUp s'affirme comme un véritable partenaire de l'industrie agroalimentaire, avec un groupe de laboratoires présent du nord au sud du Royaume.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <a className="flex items-center gap-3 transition hover:text-primary" href={`mailto:${company.email}`}><Mail className="size-4 text-primary" />{company.email}</a>
            <a className="flex items-center gap-3 transition hover:text-primary" href={`tel:${company.phoneHref}`}><Phone className="size-4 text-primary" />{company.phone}</a>
            <p className="flex items-start gap-3 text-primary-foreground/70"><MapPin className="mt-0.5 size-4 shrink-0 text-primary" />{company.address}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["ELAM", "ELAM Sahara", "IQUALAB"].map((g) => (
              <span key={g} className="rounded-full border border-white/15 px-3 py-1 font-mono text-[10px] text-primary-foreground/70">{g}</span>
            ))}
          </div>
        </div>

        <FooterCol title="Liens utiles" links={[["À propos", "/a-propos"], ["FAQ", "/faq"], ["Actualités", "/actualites"], ["Tous nos services", "/services"], ["Contact", "/contact"]]} />

        <div>
          <h3 className="mb-5 font-mono text-xs text-primary">NOS PRESTATIONS</h3>
          <div className="space-y-3">
            {domains.map((d) => (
              <Link key={d.slug} to="/prestations/$slug" params={{ slug: d.slug }} className="group flex items-center gap-2 text-sm text-primary-foreground/70 transition hover:text-white">
                <span className="h-px w-0 bg-primary transition-all group-hover:w-3" />{d.title}
              </Link>
            ))}
            <Link to="/conseil-formation" className="group flex items-center gap-2 text-sm text-primary-foreground/70 transition hover:text-white"><span className="h-px w-0 bg-primary transition-all group-hover:w-3" />Conseil et Formation</Link>
            <Link to="/audit-expertise" className="group flex items-center gap-2 text-sm text-primary-foreground/70 transition hover:text-white"><span className="h-px w-0 bg-primary transition-all group-hover:w-3" />Audit et Expertise</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-mono text-xs text-primary">NOS AGENCES</h3>
          <div className="relative space-y-4 pl-6">
            <div className="absolute bottom-2 left-[7px] top-2 border-l-2 border-dashed border-white/15" />
            {agencies.map((a, i) => (
              <div key={a.name} className="relative">
                <span className={`absolute -left-6 top-1 size-4 rounded-full border-4 border-navy ${i === 2 ? "bg-primary" : "bg-white/40"}`} />
                <strong className="block text-sm">{a.name}{i === 2 ? " · Siège" : ""}</strong>
                <a className="text-sm text-primary-foreground/70 transition hover:text-primary" href={`tel:${a.phone.replace(/\s/g, "")}`}>{a.phone}</a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bas de footer */}
      <div className="container-site relative flex flex-col gap-3 border-t border-primary-foreground/15 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} QualiUp Group — Tous droits réservés</span>
        <div className="flex items-center gap-6">
          <Link to="/mentions-legales" className="transition hover:text-primary">Mentions légales</Link>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="inline-flex items-center gap-1 transition hover:text-primary">
            Haut de page <ArrowUp className="size-3" />
          </button>
        </div>
      </div>
    </footer>

    {/* Bouton retour en haut (desktop) */}
    <AnimatePresence>
      {showTop && (
        <motion.button type="button" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Revenir en haut de la page"
          className="fixed bottom-6 right-6 z-40 hidden size-12 place-items-center rounded-full bg-secondary text-white shadow-float transition hover:bg-primary lg:grid">
          <ArrowUp className="size-5" />
        </motion.button>
      )}
    </AnimatePresence>

    {/* Barre d'action fixe (mobile) */}
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-3 border-t bg-background/95 p-3 shadow-float backdrop-blur lg:hidden">
      <Button variant="outline" asChild><a href={`tel:${company.phoneHref}`}><Phone />Appeler</a></Button>
      <Button asChild><Link to="/contact">Demander un devis</Link></Button>
    </div>
  </>;
}

function FooterCol({ title, links }: { title: string; links: readonly (readonly [string, string])[] }) {
  return <div>
    <h3 className="mb-5 font-mono text-xs text-primary">{title.toUpperCase()}</h3>
    <div className="space-y-3">
      {links.map(([l, t]) => (
        <Link key={t} to={t} className="group flex items-center gap-2 text-sm text-primary-foreground/70 transition hover:text-white">
          <span className="h-px w-0 bg-primary transition-all group-hover:w-3" />{l}
        </Link>
      ))}
    </div>
  </div>;
}