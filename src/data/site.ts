import { Atom, ChefHat, Droplets, FlaskConical, Package, Sprout, Wheat } from "lucide-react";
import agro from "@/assets/domaines-agro-environnement.webp";
import environnement from "@/assets/environnement-eau.webp";
import cosmetique from "@/assets/cosmetique-pharmacie.webp";
import hotellerie from "@/assets/hotellerie-restauration.webp";
import agronomie from "@/assets/agronomie-sol.webp";
import emballage from "@/assets/emballage-textiles.webp";
import metaux from "@/assets/metaux-lourds.webp";

export const company = {
  name: "QualiUp Group",
  address: "Bloc D1 N°171, Agadir 80060, Maroc",
  email: "contact@qualiup.com",
  technicalEmail: "qualiup.technique@gmail.com",
  recruitmentEmail: "qualiuprh@gmail.com",
  phone: "+212 6 61 36 10 08",
  phoneHref: "+212661361008",
};

export const agencies = [
  { name: "Larache", phone: "+212 6 61 36 10 08", map: "https://www.google.com/maps?q=Larache%2C%20Maroc&output=embed" },
  { name: "Casablanca", phone: "+212 6 77 88 30 61", map: "https://www.google.com/maps?q=Casablanca%2C%20Maroc&output=embed" },
  { name: "Agadir", phone: "+212 6 61 36 10 08", address: company.address, map: "https://www.google.com/maps?q=Agadir%2C%20Maroc&output=embed" },
  { name: "Dakhla", phone: "+212 6 61 36 10 08", map: "https://www.google.com/maps?q=Dakhla%2C%20Maroc&output=embed" },
];

export const stats = [
  { value: "10+", label: "années d’expérience" },
  { value: "5", label: "laboratoires" },
  { value: "10+", label: "points de proximité" },
  { value: "4", label: "agences" },
  { value: "7", label: "domaines d’analyses" },
];
// À CONFIRMER PAR LE CLIENT
export const provisionalStats = [
  { value: "500+", label: "paramètres analysés" },
  { value: "25K+", label: "échantillons / an" },
  { value: "800+", label: "clients accompagnés" },
];

export type Domain = {
  slug: string; title: string; short: string; intro: string; image: string; icon: typeof Wheat;
  matrices: string[]; clients: string[]; categories: { name: string; items: string[] }[];
};
export const domains: Domain[] = [
  { slug:"agroalimentaire", title:"Agroalimentaire", short:"Sécurité, qualité et conformité des denrées.", intro:"Nous accompagnons les acteurs de la chaîne alimentaire dans la maîtrise des risques microbiologiques, physico-chimiques et contaminants.", image:agro, icon:Wheat, matrices:["Produits laitiers","Viandes et volailles","Produits de la mer","Fruits et légumes","Céréales","Boissons","Plats cuisinés"], clients:["Industriels","Stations de conditionnement","Unités de surgélation","Exportateurs"], categories:[{name:"Microbiologie",items:["Flore totale","Coliformes","E. coli","Salmonella","Listeria monocytogenes","Staphylocoques","Levures et moisissures"]},{name:"Physico-chimie",items:["Humidité","pH","Matières grasses","Protéines","Cendres","Acidité"]},{name:"Contaminants",items:["Résidus de pesticides","Mycotoxines","Histamine","Allergènes","Authenticité"]}]},
  { slug:"environnement", title:"Environnement", short:"Surveillance de l’eau, des surfaces, de l’air et des sols.", intro:"Des analyses adaptées permettent de surveiller la qualité des milieux et de sécuriser les activités des collectivités et établissements.", image:environnement, icon:Droplets, matrices:["Eau potable","Eau de process","Eaux usées","Eau de piscine","Surfaces","Air ambiant","Sols"], clients:["Industriels","Collectivités","Établissements recevant du public"], categories:[{name:"Microbiologie",items:["Flore totale","Coliformes","E. coli","Entérocoques"]},{name:"Physico-chimie",items:["pH","Conductivité","Turbidité","Nitrates"]},{name:"Hygiène",items:["Contrôle des surfaces","Qualité de l’air intérieur","Ambiance de travail"]}]},
  { slug:"cosmetique-pharmacie", title:"Cosmétique et Pharmacie", short:"Contrôle des matières premières et produits finis.", intro:"Nous contrôlons la qualité microbiologique et physico-chimique des produits pour aider les fabricants à maîtriser leurs procédés.", image:cosmetique, icon:FlaskConical, matrices:["Matières premières","Crèmes","Huiles","Savons","Produits finis"], clients:["Fabricants de cosmétiques","Coopératives d’argan","Coopératives de plantes aromatiques","Laboratoires"], categories:[{name:"Microbiologie",items:["Flore aérobie","Levures et moisissures","Germes indicateurs"]},{name:"Physico-chimie",items:["pH","Viscosité","Stabilité"]},{name:"Contaminants",items:["Plomb","Cadmium","Mercure","Arsenic"]}]},
  { slug:"hotellerie-restauration", title:"Hôtellerie et Restauration", short:"Maîtrise de l’hygiène en cuisine professionnelle.", intro:"Nos contrôles aident les professionnels à surveiller leurs pratiques, leurs surfaces, leur eau et leurs plats témoins.", image:hotellerie, icon:ChefHat, matrices:["Plats témoins","Surfaces","Eau","Matières premières"], clients:["Hôtels","Restaurants","Restauration collective","Traiteurs"], categories:[{name:"Aliments",items:["Contrôle microbiologique des plats","Recherche de germes indicateurs"]},{name:"Surfaces",items:["Écouvillonnage","Contrôle de l’efficacité du nettoyage"]},{name:"Accompagnement",items:["Suivi de l’hygiène","Accompagnement HACCP"]}]},
  { slug:"agronomie", title:"Agronomie", short:"Décisions culturales éclairées par l’analyse.", intro:"L’analyse des sols, de l’eau et des végétaux apporte des données utiles à la conduite des cultures et à la maîtrise des résidus.", image:agronomie, icon:Sprout, matrices:["Sols","Eaux d’irrigation","Feuilles","Engrais","Fruits et légumes"], clients:["Exploitations agricoles","Stations de conditionnement","Coopératives"], categories:[{name:"Sols",items:["pH","Matière organique","Éléments nutritifs"]},{name:"Eaux",items:["Salinité","Conductivité","Composition minérale"]},{name:"Résidus",items:["Résidus de pesticides","Éléments traces"]}]},
  { slug:"emballage-textiles", title:"Emballage et Textiles", short:"Essais de matériaux et aptitude au contact.", intro:"Nous accompagnons les fabricants et utilisateurs dans le contrôle des emballages alimentaires et des matériaux textiles.", image:emballage, icon:Package, matrices:["Films","Barquettes","Cartons","Textiles","Matériaux au contact"], clients:["Fabricants d’emballages","Industriels agroalimentaires","Industrie textile"], categories:[{name:"Contact",items:["Aptitude au contact alimentaire","Essais de migration"]},{name:"Microbiologie",items:["Contrôle microbiologique des emballages"]},{name:"Textiles",items:["Contrôles physiques","Contrôles chimiques"]}]},
  { slug:"metaux-lourds", title:"Analyses métaux lourds", short:"Mesure précise des éléments traces.", intro:"La recherche des métaux lourds contribue à caractériser les risques dans les aliments, les eaux, les sols et les cosmétiques.", image:metaux, icon:Atom, matrices:["Aliments","Eaux","Sols","Cosmétiques"], clients:["Exportateurs","Industriels","Producteurs"], categories:[{name:"Éléments",items:["Plomb","Cadmium","Mercure","Arsenic","Autres éléments traces"]},{name:"Matrices",items:["Denrées alimentaires","Eaux","Sols","Produits cosmétiques"]}]},
];

export const testimonials = [
  { name:"Jihane Almouatamid", role:"Cliente", text:"Je collabore avec Iqualab depuis plusieurs années et suis pleinement satisfaite. Leur professionnalisme, leur rigueur scientifique et leur réactivité sont exemplaires. Le sérieux des analyses, la clarté des rapports et la ponctualité des prélèvements ont grandement contribué à la conformité de mes établissements." },
  { name:"Houria Bouadllaoui", role:"Responsable qualité, unité de surgélation", text:"Une équipe très réactive, toujours disponible et à l’écoute. Les résultats fournis sont fiables, cohérents et transmis dans les délais. Un partenaire de confiance pour la qualité de nos analyses." },
  { name:"Mohamed Fouad Jaafari", role:"Directeur qualité, station", text:"Dans le domaine des analyses, où chaque heure compte, la capacité du laboratoire ELAM à fournir des résultats fiables dans des délais très courts est un véritable atout. Un partenaire de confiance que je recommande." },
];
