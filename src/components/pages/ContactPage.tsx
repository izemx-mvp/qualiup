import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight, Building2, Check, CheckCircle2, ClipboardCheck, Copy, FileText, FlaskConical,
  GraduationCap, HelpCircle, Mail, MapPin, MessageSquare, Phone, Receipt,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label, PageHero } from "@/components/site/Shared";
import { agencies, company, domains } from "@/data/site";

/* ------------------------------------------------------------------ SCHÉMA + ENVOI (logique inchangée) */

const schema = z.object({
  full_name: z.string().min(2, "Indiquez votre nom complet"),
  company: z.string().optional(),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().min(8, "Numéro de téléphone requis"),
  sector: z.string().min(1, "Choisissez un secteur"),
  request_type: z.string().min(1, "Choisissez le type de demande"),
  nearest_agency: z.string().optional(),
  message: z.string().min(10, "Précisez votre demande en quelques mots"),
  consent_accepted: z.literal(true, { message: "Votre accord est requis" }),
});
type FormData = z.infer<typeof schema>;

const REQUEST_TYPES = [
  { v: "Analyse", Icon: FlaskConical },
  { v: "Devis", Icon: Receipt },
  { v: "Conseil et formation", Icon: GraduationCap },
  { v: "Audit", Icon: ClipboardCheck },
  { v: "Autre", Icon: HelpCircle },
];

const selectClass = "h-11 w-full rounded-md border bg-white px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

/* ------------------------------------------------------------------ PAGE */

export function ContactPage() {
  const params = typeof window === "undefined" ? new URLSearchParams() : new URLSearchParams(window.location.search);
  const [code, setCode] = useState("");
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      sector: params.get("secteur") || "",
      request_type: params.get("type") || "",
      consent_accepted: false as true,
    },
  });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 600));
    setCode(`QU-${Math.floor(1000 + Math.random() * 9000)}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
    };

  return <>
    <PageHero label="[ CONTACT ]" title="Contactez-nous" text="Une question, un échantillon à analyser, un devis ? Nos équipes vous répondent." />

    {/* Actions rapides */}
    <section className="container-site -mt-10 relative z-10 grid gap-4 md:grid-cols-3">
      <QuickAction Icon={Phone} title="Appeler le laboratoire" text={company.phone} href={`tel:${company.phoneHref}`} dark />
      <QuickAction Icon={FlaskConical} title="Question technique" text={company.technicalEmail} href={`mailto:${company.technicalEmail}?subject=Question%20technique`} />
      <QuickAction Icon={Mail} title="Email général" text={company.email} href={`mailto:${company.email}`} />
    </section>

    <section className="container-site section-pad grid items-start gap-10 lg:grid-cols-[1.25fr_.75fr]">
      {code ? <Success code={code} /> : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="rounded-3xl border bg-white p-6 shadow-soft sm:p-10">
          <Label>[ FORMULAIRE ]</Label>
          <h2 className="mt-3 text-3xl font-bold">Décrivez votre besoin</h2>
          <p className="mt-2 text-sm text-muted-foreground">Les champs marqués * sont obligatoires.</p>

          {/* Étape 1 : type de demande */}
          <FormStep n={1} title="Votre demande concerne">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              {REQUEST_TYPES.map(({ v, Icon }) => (
                <label key={v} className="cursor-pointer">
                  <input type="radio" value={v} {...register("request_type")} className="peer sr-only" />
                  <span className="flex h-full flex-col items-center gap-2 rounded-2xl border-2 p-4 text-center text-sm font-semibold transition hover:border-primary/50 peer-checked:border-primary peer-checked:bg-green-soft peer-checked:text-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary">
                    <Icon className="size-5" />{v}
                  </span>
                </label>
              ))}
            </div>
            {errors.request_type && <Err>{errors.request_type.message}</Err>}
          </FormStep>

          {/* Étape 2 : coordonnées */}
          <FormStep n={2} title="Vos coordonnées">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nom complet *" error={errors.full_name?.message}><Input autoComplete="name" {...register("full_name")} /></Field>
              <Field label="Société"><Input autoComplete="organization" {...register("company")} /></Field>
              <Field label="Email *" error={errors.email?.message}><Input type="email" autoComplete="email" {...register("email")} /></Field>
              <Field label="Téléphone *" error={errors.phone?.message}><Input type="tel" autoComplete="tel" placeholder="+212 6 ..." {...register("phone")} /></Field>
            </div>
          </FormStep>

          {/* Étape 3 : contexte */}
          <FormStep n={3} title="Votre contexte">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Secteur *" error={errors.sector?.message}>
                <select className={selectClass} {...register("sector")}>
                  <option value="">Choisir un secteur</option>
                  {domains.map((x) => <option key={x.slug} value={x.slug}>{x.title}</option>)}
                  <option value="autre">Autre</option>
                </select>
              </Field>
              <Field label="Agence la plus proche">
                <select className={selectClass} {...register("nearest_agency")}>
                  <option value="">Choisir une agence</option>
                  {agencies.map((x) => <option key={x.name} value={x.name}>{x.name}</option>)}
                </select>
              </Field>
              <Field label="Message *" error={errors.message?.message} wide>
                <Textarea rows={6} placeholder="Type de produit, nombre d'échantillons, analyses souhaitées, contraintes de délai…" {...register("message")} />
              </Field>
            </div>
          </FormStep>

          <label className="mt-8 flex cursor-pointer gap-3 rounded-2xl bg-surface p-4 text-sm">
            <input type="checkbox" className="mt-0.5 size-4 accent-[#52A546]" {...register("consent_accepted")} />
            <span>J'accepte que mes données soient utilisées pour traiter ma demande, conformément à la loi 09-08.</span>
          </label>
          {errors.consent_accepted && <Err>{errors.consent_accepted.message}</Err>}

          <Button size="lg" disabled={isSubmitting} className="mt-6 w-full">
            {isSubmitting ? "Envoi en cours…" : <>Envoyer ma demande <ArrowRight /></>}
          </Button>
        </form>
      )}

      {/* Colonne latérale */}
      <aside className="space-y-4 lg:sticky lg:top-28">
        <div className="rounded-3xl border bg-background p-7 shadow-soft">
          <h3 className="text-xl font-bold">Ce qui se passe ensuite</h3>
          <ol className="mt-6 space-y-5">
            {[
              { Icon: MessageSquare, t: "Réception", d: "Votre demande reçoit un code de suivi QU-XXXX." },
              { Icon: Phone, t: "Prise de contact", d: "Un interlocuteur vous rappelle pour qualifier le besoin." },
              { Icon: FileText, t: "Proposition", d: "Vous recevez une offre adaptée à votre matrice et à votre objectif." },
            ].map(({ Icon, t, d }, i) => (
              <li key={t} className="flex gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-blue-soft text-secondary"><Icon className="size-5" /></span>
                <div>
                  <p className="font-mono text-[10px] text-primary">ÉTAPE 0{i + 1}</p>
                  <strong className="block">{t}</strong>
                  <p className="text-sm leading-6 text-muted-foreground">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex gap-4 rounded-3xl border bg-background p-6 shadow-soft">
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-green-soft text-primary"><MapPin /></span>
          <div><small className="text-muted-foreground">Siège</small><strong className="block">{company.address}</strong></div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-navy p-7 text-white">
          <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full border border-white/15" />
          <Building2 className="text-primary" />
          <h3 className="mt-4 text-xl font-bold">Rejoignez l'équipe</h3>
          <p className="mt-2 text-sm text-white/70">Envoyez-nous votre CV pour une candidature spontanée.</p>
          <a className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary" href={`mailto:${company.recruitmentEmail}?subject=Candidature%20spontanée`}>
            {company.recruitmentEmail} <ArrowRight className="size-4" />
          </a>
        </div>
      </aside>
    </section>

    <AgenciesBlock />

    {/* Renvoi FAQ */}
    <section className="container-site pb-24">
      <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-blue-soft p-8 sm:flex-row sm:items-center sm:p-10">
        <div>
          <h2 className="text-2xl font-bold">Une question fréquente ?</h2>
          <p className="mt-1 text-muted-foreground">Prélèvements, transport des échantillons, réception des rapports : les réponses sont peut-être déjà en ligne.</p>
        </div>
        <Button variant="outline" asChild><Link to="/faq">Consulter la FAQ <ArrowRight /></Link></Button>
      </div>
    </section>
  </>;
}

/* ------------------------------------------------------------------ COMPOSANTS */

function QuickAction({ Icon, title, text, href, dark = false }: { Icon: typeof Phone; title: string; text: string; href: string; dark?: boolean }) {
  return <a href={href}
    className={`group flex items-center gap-4 rounded-2xl p-5 shadow-float transition hover:-translate-y-1 ${dark ? "bg-navy text-white" : "border bg-background"}`}>
    <span className={`grid size-12 shrink-0 place-items-center rounded-xl ${dark ? "bg-primary text-white" : "bg-green-soft text-primary"}`}><Icon /></span>
    <div className="min-w-0">
      <small className={dark ? "text-white/60" : "text-muted-foreground"}>{title}</small>
      <strong className="block truncate">{text}</strong>
    </div>
    <ArrowRight className="ml-auto size-4 shrink-0 opacity-50 transition group-hover:translate-x-1 group-hover:opacity-100" />
  </a>;
}

function FormStep({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return <fieldset className="mt-10 border-t pt-8">
    <legend className="sr-only">{title}</legend>
    <div className="mb-5 flex items-center gap-3">
      <span className="grid size-8 place-items-center rounded-full bg-secondary font-mono text-xs font-bold text-white">{n}</span>
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
    {children}
  </fieldset>;
}

function Field({ label, error, wide, children }: { label: string; error?: string | undefined; wide?: boolean; children: React.ReactNode }) {
  return <label className={wide ? "sm:col-span-2" : ""}>
    <span className="mb-2 block text-sm font-semibold">{label}</span>
    {children}
    {error && <small className="mt-1 block text-destructive">{error}</small>}
  </label>;
}

function Err({ children }: { children: React.ReactNode }) {
  return <p className="mt-2 text-sm text-destructive">{children}</p>;
}

function Success({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => { void navigator.clipboard?.writeText(code).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); }); };
  return <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
    className="report-lines relative overflow-hidden rounded-3xl border bg-white p-8 shadow-float sm:p-12">
    <div className="flex items-center justify-between border-b pb-5">
      <span className="font-mono text-xs text-secondary">ACCUSÉ DE RÉCEPTION</span>
      <span className="rotate-3 rounded-full border-2 border-primary px-3 py-1 text-xs font-bold text-primary">✓ ENREGISTRÉE</span>
    </div>
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}>
      <CheckCircle2 className="mt-10 size-16 text-primary" />
    </motion.div>
    <h2 className="mt-6 text-3xl font-bold">Votre demande a bien été enregistrée</h2>
    <p className="mt-3 text-muted-foreground">Conservez ce code de suivi : il vous sera utile lors de nos échanges.</p>
    <div className="mt-6 flex flex-wrap items-center gap-3">
      <strong className="rounded-2xl bg-blue-soft px-6 py-4 font-mono text-3xl text-secondary">{code}</strong>
      <Button type="button" variant="outline" onClick={copy}>{copied ? <><Check /> Copié</> : <><Copy /> Copier le code</>}</Button>
    </div>
    <div className="mt-10 grid gap-3 border-t pt-6 sm:grid-cols-2">
      <Button variant="outline" asChild><Link to="/prestations-analyses">Voir nos prestations</Link></Button>
      <Button asChild><Link to="/">Retour à l'accueil</Link></Button>
    </div>
  </motion.div>;
}

function AgenciesBlock() {
  const [i, setI] = useState(2);
  const a = agencies[i]!;
  return <section className="section-pad bg-surface">
    <div className="container-site">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <Label>[ AGENCES ]</Label>
          <h2 className="mt-4 text-4xl font-bold">Une agence près de chez vous</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {agencies.map((x, j) => (
            <button key={x.name} type="button" onClick={() => setI(j)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${i === j ? "bg-secondary text-white shadow-soft" : "border bg-background hover:border-secondary"}`}>
              {x.name}{j === 2 ? " · Siège" : ""}
            </button>
          ))}
        </div>
      </div>
      <motion.div key={a.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="mt-10 grid overflow-hidden rounded-3xl border bg-background shadow-soft lg:grid-cols-[1.4fr_.6fr]">
        <iframe title={`Carte de l'agence de ${a.name}`} src={a.map} className="h-80 w-full border-0 lg:h-full lg:min-h-96" loading="lazy" />
        <div className="flex flex-col p-8">
          <p className="font-mono text-[10px] text-primary">AGENCE {String(i + 1).padStart(2, "0")} / {String(agencies.length).padStart(2, "0")}</p>
          <h3 className="mt-3 text-3xl font-bold">{a.name}</h3>
          {a.address && <p className="mt-3 text-muted-foreground">{a.address}</p>}
          <div className="mt-auto space-y-3 pt-8">
            <Button className="w-full" asChild><a href={`tel:${a.phone.replace(/\s/g, "")}`}><Phone />{a.phone}</a></Button>
            <Button className="w-full" variant="outline" asChild>
              <a href={`mailto:${company.technicalEmail}?subject=Demande%20d'information%20-%20${encodeURIComponent(a.name)}`}><Mail />Envoyer un email</a>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>;
}