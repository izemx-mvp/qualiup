import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, FileText, FlaskConical, PackageCheck } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Label, Reveal } from "@/components/site/Shared";
import { domains, type Domain } from "@/data/site";

export function DomainPage({domain}:{domain:Domain}){
  const [tab,setTab]=useState(0);
  const idx=domains.findIndex(d=>d.slug===domain.slug);
  const prev=domains[(idx+domains.length-1)%domains.length]!;
  const next=domains[(idx+1)%domains.length]!;
  const accent = idx % 2 === 0 ? "primary" : "secondary"; // vert / bleu en alternance
  const accentSoft = accent === "primary" ? "bg-green-soft" : "bg-blue-soft";
  const accentText = accent === "primary" ? "text-primary" : "text-secondary";

  return <>
    {/* HERO — inchangé, juste badge accent dynamique */}
    <section className="relative min-h-[620px] overflow-hidden text-white">
      <img src={domain.image} alt={`Analyses ${domain.title}`} className="absolute inset-0 h-full w-full object-cover"/>
      <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/80 to-navy/20"/>
      <div className="container-site relative z-10 flex min-h-[620px] max-w-4xl flex-col justify-center py-16">
        <p className={`font-mono text-xs ${accentText}`}>ACCUEIL / PRESTATIONS / {domain.title.toUpperCase()}</p>
        <domain.icon className={`mt-8 size-12 ${accentText}`}/>
        <h1 className="mt-5 text-5xl font-extrabold sm:text-6xl">Analyses {domain.title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{domain.short}</p>
        <Button className="mt-8 w-fit" asChild><Link to="/contact" search={{secteur:domain.slug}}>Demander un devis pour ce domaine <ArrowRight/></Link></Button>
      </div>
    </section>

    {/* [01] ENJEUX — split avec citation/chiffre mis en avant au lieu d'un simple paragraphe */}
    <section className="container-site section-pad grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
      <Reveal className={`relative rounded-[2.5rem] ${accentSoft} p-10`}>
        <span className={`font-mono text-xs ${accentText}`}>[ 01 ] ENJEUX DU SECTEUR</span>
        <p className="mt-6 font-display text-2xl font-semibold leading-9">
          « {domain.short} »
        </p>
        <div className="mt-8 flex items-center gap-3 border-t border-black/10 pt-6">
          <FlaskConical className={accentText}/>
          <span className="text-sm font-semibold">Domaine {domain.title} · QualiUp Group</span>
        </div>
      </Reveal>
      <Reveal>
        <h2 className="text-4xl font-bold">Des données fiables pour mieux maîtriser vos décisions</h2>
        <p className="mt-6 text-lg leading-9 text-muted-foreground">
          {domain.intro} Nos équipes prennent le temps de qualifier votre demande et d'orienter
          le choix des analyses selon la matrice et l'objectif recherché.
        </p>
      </Reveal>
    </section>

    {/* [02] MATRICES — cartes à hauteur naturelle, remplies avec une icône en filigrane */}
<section className="bg-surface section-pad">
  <div className="container-site">
    <Label>[ 02 ] CE QUE NOUS ANALYSONS</Label>
    <h2 className="mt-4 text-4xl font-bold">Matrices prises en charge</h2>
    <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
      {domain.matrices.map((x,i)=>(
        <Reveal
          key={x}
          className={`group relative min-h-[180px] overflow-hidden rounded-2xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-float ${i===0?'col-span-2 lg:col-span-2':''}`}
        >
          <domain.icon className={`absolute -bottom-4 -right-4 size-24 opacity-[0.06] transition group-hover:opacity-10 ${accentText}`}/>
          <div className="relative z-10 flex h-full flex-col justify-between">
            <span className={`font-mono text-xs ${accentText}`}>MAT-{String(i+1).padStart(2,'0')}</span>
            <h3 className={`mt-4 font-bold ${i===0?'text-2xl':'text-lg'}`}>{x}</h3>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>

    {/* [03] PARAMÈTRES — présenté comme un rapport de labo (façon carte témoignage home) */}
    <section className="section-pad bg-navy text-white">
      <div className="container-site">
        <Label>[ 03 ] PARAMÈTRES ANALYSÉS</Label>
        <h2 className="mt-4 text-4xl font-bold">Ce que couvre chaque famille d'analyses</h2>
        <div className="mt-8 flex flex-wrap gap-2">
          {domain.categories.map((x,i)=>(
            <button
              key={x.name}
              onClick={()=>setTab(i)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${tab===i?`${accent==='primary'?'bg-primary':'bg-secondary'} text-white`:'border border-white/20 text-white/70 hover:border-white/50'}`}
            >
              {x.name}
            </button>
          ))}
        </div>
        <motion.div
          key={tab}
          initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}
          className="report-lines mt-7 overflow-hidden rounded-2xl bg-white text-foreground shadow-float"
        >
          <div className="flex items-center justify-between border-b p-5">
            <span className="font-mono text-xs text-muted-foreground">RAPPORT · {domain.categories[tab]!.name.toUpperCase()}</span>
            <span className={`rounded-full border-2 px-3 py-1 text-xs font-bold ${accentText} ${accent==='primary'?'border-primary':'border-secondary'}`}>✓ COUVERT</span>
          </div>
          {domain.categories[tab]!.items.map((x,i)=>(
            <div key={x} className="flex items-center justify-between border-b p-5 last:border-0">
              <span className="font-semibold">{x}</span>
              <span className="font-mono text-xs text-muted-foreground">
                {domain.categories[tab]!.name.toUpperCase().slice(0,5)}-{String(i+1).padStart(2,'0')}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* [04] POUR QUI — chips avec icône + reveal en cascade au lieu d'un simple wrap */}
    <section className="container-site section-pad">
      <Label>[ 04 ] POUR QUI ?</Label>
      <h2 className="mt-4 text-4xl font-bold">Ils font appel à nous pour ce domaine</h2>
      <div className="mt-8 flex flex-wrap gap-3">
        {domain.clients.map((x)=>(
            <Reveal key={x} className={`flex items-center gap-2 rounded-full border px-5 py-3 font-semibold shadow-soft ${accentSoft}`}>
                <Check className={`size-4 ${accentText}`}/> {x}
            </Reveal>
        ))}
      </div>
    </section>

    {/* MINI-PARCOURS — timeline avec ligne de progression, comme le parcours échantillon home */}
    <section className={`section-pad ${accentSoft}`}>
      <div className="container-site">
        <Label>[ 05 ] COMMENT ÇA SE PASSE</Label>
        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-9 hidden h-0.5 bg-black/10 md:block">
            <motion.div className={`h-full ${accent==='primary'?'bg-primary':'bg-secondary'}`} initial={{width:0}} whileInView={{width:"100%"}} viewport={{once:true}} transition={{duration:1.2}}/>
          </div>
          {[
            {Icon:PackageCheck,title:"Prélèvement",text:"Conditions adaptées à la matrice"},
            {Icon:FlaskConical,title:"Analyse",text:"Paramètres ciblés selon le besoin"},
            {Icon:FileText,title:"Rapport",text:"Résultats structurés et lisibles"},
          ].map(({Icon,title,text},i)=>(
            <Reveal key={title} className="relative rounded-2xl border bg-background p-6 text-center md:border-0 md:bg-transparent">
              <div className="relative z-10 mx-auto mb-4 grid size-16 place-items-center rounded-full border-8 border-background bg-white shadow-soft">
                <Icon className={accentText}/>
              </div>
              <p className={`font-mono text-[10px] ${accentText}`}>ÉTAPE 0{i+1}</p>
              <h3 className="mt-2 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ — inchangé dans le fond, juste motif décoratif ajouté en fond */}
    <section className="section-pad relative overflow-hidden bg-surface">
      <div className="molecule-grid absolute inset-0 opacity-40"/>
      <div className="container-site relative max-w-4xl">
        <Label>[ FAQ ]</Label>
        <Accordion type="single" collapsible className="mt-6">
          {[
            ["Comment préparer mon échantillon ?","Contactez notre équipe technique : les conditions dépendent de la matrice et des paramètres recherchés."],
            ["Pouvez-vous réaliser le prélèvement ?","Un prélèvement sur site peut être organisé selon la demande et la localisation."],
            ["Comment recevoir mon rapport ?","Le canal de transmission est défini avec votre interlocuteur lors de la prise en charge."],
          ].map(([q,a],i)=>(
            <AccordionItem key={q} value={`${i}`}>
              <AccordionTrigger>{q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* CTA — motif cercles concentriques type boîte de Petri, comme le CTA final de la home */}
    <section className="container-site section-pad">
      <div className="signature-bg relative overflow-hidden rounded-3xl p-8 text-white sm:p-12">
        <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full border border-white/20"/>
        <div className="pointer-events-none absolute -right-8 -top-8 size-48 rounded-full border border-white/20"/>
        <div className="text-white/80">
            <Label>[ DEVIS ] {domain.title}</Label>
        </div>
        <h2 className="mt-4 max-w-xl text-4xl font-bold">Parlez-nous de votre matrice</h2>
        <p className="mt-4 max-w-2xl text-white/70">Le domaine est déjà pré-sélectionné pour vous faire gagner du temps.</p>
        <Button className="mt-7 bg-white text-navy hover:bg-white/90" asChild>
          <Link to="/contact" search={{secteur:domain.slug,type:"Analyse"}}>Commencer ma demande <ArrowRight/></Link>
        </Button>
      </div>
    </section>

    {/* NAV PREV/NEXT — cartes avec image miniature au lieu de simples liens texte */}
    <nav className="container-site mb-20 grid gap-4 border-t pt-8 sm:grid-cols-2">
      <Link to="/prestations/$slug" params={{slug:prev.slug}} className="group flex items-center gap-4 rounded-2xl border p-4 transition hover:shadow-soft">
        <img src={prev.image} alt="" className="size-16 rounded-xl object-cover"/>
        <div>
          <span className="flex items-center gap-1 text-xs text-muted-foreground"><ArrowLeft className="size-3"/> Domaine précédent</span>
          <strong className="text-lg">{prev.title}</strong>
        </div>
      </Link>
      <Link to="/prestations/$slug" params={{slug:next.slug}} className="group flex items-center justify-end gap-4 rounded-2xl border p-4 text-right transition hover:shadow-soft">
        <div>
          <span className="flex items-center justify-end gap-1 text-xs text-muted-foreground">Domaine suivant <ArrowRight className="size-3"/></span>
          <strong className="text-lg">{next.title}</strong>
        </div>
        <img src={next.image} alt="" className="size-16 rounded-xl object-cover"/>
      </Link>
    </nav>
  </>
}