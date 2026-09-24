import { createFileRoute, notFound } from "@tanstack/react-router";
import { DomainPage } from "@/components/pages/DomainPage";
import { domains } from "@/data/site";
export const Route=createFileRoute("/prestations/$slug")({
  loader:({params})=>{const d=domains.find(x=>x.slug===params.slug);if(!d)throw notFound();return {slug:d.slug,title:d.title,intro:d.intro}},
  head:({loaderData:d})=>({meta:[{title:`Analyses ${d?.title} — QualiUp Group`},{name:"description",content:d?.intro}]}),
  component:DomainRoute,
});
function DomainRoute(){const {slug}=Route.useLoaderData();return <DomainPage domain={domains.find(d=>d.slug===slug)!}/>}
