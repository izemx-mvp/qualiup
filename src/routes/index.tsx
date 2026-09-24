import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages/HomePage";
export const Route = createFileRoute("/")({
  head:()=>({meta:[{title:"QualiUp Group — Laboratoire agroalimentaire au Maroc"},{name:"description",content:"Analyses agroalimentaires, environnementales et spécialisées au Maroc. QualiUp allie précision, fiabilité et proximité depuis 2014."}]}),
  component: HomePage,
});
