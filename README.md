# QualiUp Precision Labs

# PROJET : Refonte du site QualiUp Group — MVP moderne multi-pages

Tu vas construire la refonte complète du site de QualiUp Group (qualiup.com), un groupe de 
laboratoires d'analyses agroalimentaires basé au Maroc. Le site actuel est un WordPress 
générique et daté. L'objectif est un site vitrine MODERNE, premium et scientifique qui 
reprend tout le contenu existant en l'améliorant, garde l'identité visuelle (logo + couleurs) 
et reflète l'univers du laboratoire à travers ses interactions, ses visuels et ses 
micro-animations.

Ce n'est PAS un template corporate classique. Chaque section doit avoir une mise en page 
DIFFÉRENTE de la précédente (pas de succession de "titre + 3 cartes" identiques) et chaque 
section doit évoquer le domaine du laboratoire : échantillons, codes de traçabilité, 
rapports d'analyse, instruments de mesure, ADN, molécules, boîtes de Petri, chaîne du froid.

Langue du site : français. Ton : professionnel, scientifique, rassurant, orienté fiabilité, 
précision, réactivité et proximité.

---------------------------------------------------------------------------------------------

## 1. LOGO (FICHIER JOINT)

Le logo QualiUp est joint à ce message. Utilise-le TEL QUEL, ne le redessine pas et ne le 
régénère pas.
- Composition : feuille verte stylisée + double hélice ADN bleue + texte "Quali" en vert, 
  "up group" en bleu. Fond transparent.
- Header : hauteur ~44px desktop, ~36px mobile.
- Footer (fond sombre) : place le logo sur une pastille/carte blanche arrondie (radius 16px, 
  padding 12px 18px), car la partie bleue du logo manque de contraste sur fond foncé.
- Favicon : recadre uniquement le symbole feuille + ADN.
- Le motif de la double hélice ADN du logo sert aussi de fil conducteur graphique dans le 
  site (voir section motifs).

---------------------------------------------------------------------------------------------

## 2. DESIGN SYSTEM

### Couleurs (extraites du logo, à respecter strictement)
- --green-500 : #52A546 (couleur principale, CTA, accents "qualité / nature / conforme")
- --green-600 : #3E8A35 (hover des CTA verts)
- --green-50  : #EEF7EC (fonds teintés verts)
- --blue-600  : #254F9C (couleur secondaire, titres, liens, éléments "technique / confiance")
- --blue-800  : #173672 (hover bleu)
- --blue-50   : #EAF0FA (fonds teintés bleus)
- --navy-950  : #0B1B38 (sections sombres "laboratoire", footer)
- --ink-900   : #14213D (texte principal)
- --slate-500 : #5B6B82 (texte secondaire)
- --line      : #E3E8EF (bordures)
- --surface   : #F6F8FB (fond de sections alternées)
- Blanc #FFFFFF pour le fond principal
- Dégradé signature : linear-gradient(135deg, #52A546 0%, #2E7D6B 45%, #254F9C 100%) — 
  à utiliser avec parcimonie (bande carrières, CTA final, détails)

### Typographie (Google Fonts)
- Titres : "Plus Jakarta Sans" (600/700/800), letter-spacing légèrement négatif sur les H1/H2
- Texte : "Inter" (400/500/600)
- Données / codes / chiffres de labo : "JetBrains Mono" (500) — pour les compteurs, codes 
  d'échantillon type "QU-2014", labels de sections, valeurs de mesure
- Échelle : H1 56–64px desktop / 36–40px mobile ; H2 40–44px / 28–32px ; H3 22–24px ; 
  corps 16–18px, interligne 1.6

### Langage visuel
- Coins arrondis : 20–28px pour les grands blocs, 12–16px pour les cartes, pilules pour les boutons
- Ombres douces et diffuses (jamais d'ombres dures grises)
- Beaucoup d'espace blanc, sections de 96–128px de padding vertical desktop
- Labels de section en monospace style "code d'échantillon" : 
  ex. "[ 01 ] EXPERTISE", "[ 02 ] DOMAINES", en petites capitales vert ou bleu
- Glassmorphism léger uniquement pour le header sticky et quelques cartes flottantes du hero

### Motifs graphiques liés au métier (SVG, légers, décoratifs)
- Double hélice ADN animée (reprend le symbole du logo), en traits fins bleu/vert
- Grille de molécules hexagonales en filigrane (opacité 4–6 %) sur certains fonds
- Cercles concentriques type boîte de Petri
- Ligne de "scan" horizontale qui balaie les blocs de données (effet instrument de mesure)
- Codes de traçabilité en monospace (ex. "LOT QU-0427 · 12°C · CONFORME")
Utilise ces motifs pour DIFFÉRENCIER les sections, pas partout à la fois.

### Animations (framer-motion)
- Apparition au scroll : fade + translateY 24px, stagger léger sur les listes
- Compteurs qui s'incrémentent quand ils entrent à l'écran
- Hover des cartes : légère élévation + bordure qui passe au vert
- Respecter prefers-reduced-motion (désactiver les animations non essentielles)
- Aucune animation ne doit gêner la lecture ni ralentir la page

### Composants de base
- Bouton primaire : fond vert #52A546, texte blanc, pilule, icône flèche qui glisse au hover
- Bouton secondaire : contour bleu #254F9C, fond transparent
- Bouton tertiaire : lien texte bleu avec soulignement animé
- Badges "statut" style résultat de labo : ✓ Conforme (vert), ● En cours (bleu)

---------------------------------------------------------------------------------------------

## 3. IMAGES — TOUTES GÉNÉRÉES PAR IA

AUCUNE photo stock, AUCUN placeholder gris, AUCUNE image d'exemple Unsplash. 
Génère TOUTES les images du site avec ton outil de génération d'images.

Style commun de toutes les images générées :
- Photoréaliste, éditorial, haut de gamme, lumière naturelle froide et propre
- Laboratoire moderne, blanc et lumineux, avec touches de vert et de bleu rappelant la marque
- Contexte marocain crédible (personnel marocain, homme et femme, en blouse blanche, 
  gants, lunettes de protection)
- AUCUN texte, AUCUN logo, AUCUNE marque visible dans les images
- Profondeur de champ, cadrage soigné, pas d'aspect "image IA" plastique

Liste des images à générer :
1. Hero accueil : une scientifique marocaine en blouse blanche pipetant un échantillon 
   dans un laboratoire moderne très lumineux, reflets verts et bleus, vue 3/4
2. Expertise : gros plan sur des tubes à essai et des flacons d'échantillons étiquetés 
   sur un portoir, fond flou de laboratoire
3. Agroalimentaire : échantillons alimentaires (produits laitiers, poisson, fruits) préparés 
   pour analyse sur une paillasse inox
4. Environnement : prélèvement d'eau dans un flacon stérile au bord d'une rivière au Maroc
5. Cosmétique et Pharmacie : crèmes et flacons cosmétiques en cours de contrôle, pipette, 
   verrerie de laboratoire
6. Hôtellerie et Restauration : technicienne réalisant un prélèvement de surface avec un 
   écouvillon dans une cuisine professionnelle inox
7. Agronomie : mains gantées prélevant un échantillon de sol dans un champ agricole marocain, 
   cultures en arrière-plan
8. Emballage et Textiles : échantillons d'emballages alimentaires et de tissus disposés 
   pour essai en laboratoire
9. Métaux lourds : instrument d'analyse spectrométrique moderne avec échantillons en 
   tubes, lumière bleue
10. Conseil et Formation : formatrice présentant les bonnes pratiques d'hygiène à une petite 
    équipe en tenue d'agroalimentaire (charlottes, blouses)
11. Audit et Expertise : auditeur avec tablette inspectant une ligne de production 
    agroalimentaire
12. À propos : équipe de laboratoire (4–5 personnes) souriante dans le laboratoire, portrait 
    de groupe naturel
13. Carrières : jeune technicien au microscope, ambiance motivante
14. Articles de blog (3 images) : boîtes de Petri avec cultures (microbiologie) ; analyse 
    de métaux lourds ; session de formation en hygiène
15. Contact : façade/accueil moderne d'un laboratoire (sans texte ni logo)

Toutes les images en WebP optimisé, lazy loading (sauf hero), attribut alt descriptif en français.

---------------------------------------------------------------------------------------------

## 4. STACK & ARCHITECTURE

- React + TypeScript + Vite + Tailwind + shadcn/ui
- react-router-dom pour le routing multi-pages (vraies routes, pas une one-page)
- framer-motion pour les animations, lucide-react pour les icônes
- react-hook-form + zod pour les formulaires
- Tout le contenu (services, agences, témoignages, articles, FAQ, chiffres) centralisé dans 
  des fichiers de données (src/data/*.ts) pour être facile à modifier
- Formulaires connectés à Lovable Cloud (table "contact_requests") avec état de succès et 
  d'erreur clair
- SEO : balise title + meta description uniques par page, un seul H1 par page, 
  mot-clé principal "laboratoire agroalimentaire au Maroc", Open Graph, sitemap
- Scroll to top automatique au changement de page
- 100 % responsive (mobile d'abord), accessible (contrastes AA, focus visibles, aria)
- Page 404 personnalisée ("Échantillon introuvable" avec un code "ERR-404" en monospace)

---------------------------------------------------------------------------------------------

## 5. INFORMATIONS DE L'ENTREPRISE (À UTILISER EXACTEMENT)

- Nom : QualiUp Group — créé en 2014
- Groupe de laboratoires : ELAM, ELAM Sahara, IQUALAB
  - ELAM et ELAM Sahara → lien externe https://elamlaboratory.com/
  - IQUALAB → lien externe https://iqualaboratory.com/
- Siège : Bloc D1 N°171, Agadir 80060, Maroc
- Email général : contact@qualiup.com
- Email technique (demandes d'information) : qualiup.technique@gmail.com
- Email recrutement : qualiuprh@gmail.com
- Téléphone principal : +212 6 61 36 10 08
- Agences :
  - Larache — +212 6 61 36 10 08
  - Casablanca — +212 6 77 88 30 61
  - Agadir (siège) — Bloc D1 N°171, Agadir 80060 — +212 6 61 36 10 08
  - Dakhla — +212 6 61 36 10 08
- Chiffres confirmés : 10+ années d'expérience, 5 laboratoires, 10+ points de proximité, 
  4 agences, 7 domaines d'analyses
- Chiffres À CONFIRMER PAR LE CLIENT (mettre dans src/data/stats.ts avec un commentaire 
  "// À CONFIRMER PAR LE CLIENT") : nombre de paramètres analysés, échantillons par an, 
  nombre de clients. Utilise des valeurs provisoires réalistes.

---------------------------------------------------------------------------------------------

## 6. NAVIGATION GLOBALE

### Barre supérieure (desktop uniquement, fond navy #0B1B38, texte blanc 13px)
Adresse du siège · contact@qualiup.com · +212 6 61 36 10 08

### Header sticky
- Transparent sur le hero, puis fond blanc glassmorphism + ombre légère au scroll
- Logo à gauche
- Menu :
  - Accueil
  - À propos (dropdown : À propos de nous, FAQ)
  - Services → MÉGA-MENU sur toute la largeur :
    - Colonne 1 "Prestations d'analyses" : les 7 domaines, chacun avec son icône lucide et 
      une ligne de description
    - Colonne 2 : Conseil et Formation, Audit et Expertise, Tous nos services
    - Colonne 3 : carte mise en avant "Besoin d'une analyse ?" avec image + bouton devis
  - Actualités
  - Contact
- À droite : numéro de téléphone cliquable + bouton vert "Demander un devis"
- Mobile : menu burger → panneau plein écran avec accordéons, téléphone et CTA en bas

### Footer (fond navy #0B1B38 avec motif hélice ADN en filigrane)
- Colonne 1 : logo (sur pastille blanche) + texte "Depuis sa création en 2014, QualiUp 
  s'affirme comme un véritable partenaire de l'industrie agroalimentaire..." + email + tél
- Colonne 2 : Liens utiles (À propos, FAQ, Contact, Actualités, Tous nos services)
- Colonne 3 : Nos prestations (les 7 domaines + Conseil et Formation + Audit et Expertise)
- Colonne 4 : Nos agences (Larache, Casablanca, Agadir, Dakhla avec téléphones)
- Bas de footer : "© 2026 QualiUp Group — Tous droits réservés" + lien Mentions légales

---------------------------------------------------------------------------------------------

## 7. PAGE ACCUEIL ( / )

Chaque section ci-dessous a une mise en page DIFFÉRENTE.

### 7.1 Hero — "Le laboratoire en action"
- Layout asymétrique : texte à gauche (55 %), visuel à droite (45 %)
- Label monospace : "[ QU-2014 ] LABORATOIRE D'ANALYSES · MAROC"
- H1 : "Votre laboratoire agroalimentaire au Maroc de confiance"
- Sous-titre qui défile (fondu toutes les 4s) entre les messages du site actuel :
  - "La précision à chaque test, la confiance à chaque résultat."
  - "Confiance et précision dans chaque analyse réalisée."
  - "Une expertise reconnue pour des résultats fiables et certifiés."
- 2 CTA : "Demander une analyse" (vert) + "Découvrir nos prestations" (contour bleu)
- 3 puces de confiance en ligne : ✓ 10+ ans d'expérience · ✓ 5 laboratoires · ✓ 4 agences
- Visuel droit : image hero générée dans un masque arrondi organique, avec :
  - Une double hélice ADN SVG animée qui passe derrière l'image
  - 2–3 cartes flottantes en glassmorphism, légèrement animées (flottement), façon 
    résultats de labo : "Échantillon QU-0427 · ✓ Conforme", "Microbiologie · Analyse 
    terminée", "Chaîne du froid · 4°C ✓"
- Fond : blanc avec grille de molécules hexagonales très discrète

### 7.2 Bande de données — "Lecture instrument"
- Pleine largeur, fond navy #0B1B38, style écran d'instrument de mesure
- 4–5 indicateurs en JetBrains Mono, grands chiffres blancs + légende verte :
  10+ ans d'expérience · 5 laboratoires · 10+ points de proximité · [paramètres analysés] · 
  [échantillons / an]
- Compteurs animés à l'apparition + une fine ligne verte de "scan" qui balaie la bande 
  de gauche à droite en boucle lente
- Séparateurs verticaux fins entre les indicateurs

### 7.3 Expertise — "Qualiup : Expertise scientifique et technique"
- Layout image + texte : image générée "tubes à essai" à gauche avec un badge circulaire 
  en surimpression "10+ années d'expérience" (anneau de progression animé)
- À droite : label "[ 01 ] QUI SOMMES-NOUS", H2, texte amélioré :
  "Laboratoire agroalimentaire au Maroc, QualiUp est reconnu pour son expertise scientifique 
  et technique. Spécialisés dans les analyses et essais techniques, nous accompagnons de 
  nombreux secteurs en fournissant des résultats fiables et précis."
- 2 points forts présentés comme des lignes de protocole numérotées (01, 02) avec icône :
  - 01 — Laboratoire à la technologie avancée : équipements modernes et performants 
    garantissant des résultats rapides, fiables et reproductibles
  - 02 — Large panel de tests spécialisés : une gamme complète d'analyses pour 
    l'agroalimentaire, l'agronomie, l'environnement, la cosmétique et bien d'autres
- Lien "En savoir plus sur QualiUp" → /a-propos

### 7.4 Domaines d'analyses — grille "bento"
- Label "[ 02 ] NOS DOMAINES", H2 "7 domaines d'analyses, une seule exigence : la fiabilité"
- Grille bento asymétrique (tailles de tuiles différentes) : Agroalimentaire en grande 
  tuile (2x2), les 6 autres en tuiles de tailles variées
- Chaque tuile : image générée du domaine, overlay dégradé sombre, icône, titre, une ligne 
  de description ; au hover l'image zoome légèrement et un bouton "Voir les analyses →" apparaît
- Chaque tuile renvoie vers sa sous-page

### 7.5 Parcours de l'échantillon — timeline interactive
- Fond #F6F8FB, H2 "Du prélèvement au rapport : un parcours maîtrisé"
- Timeline horizontale (verticale sur mobile) en 5 étapes, reliées par une ligne qui se 
  "remplit" en vert au scroll, comme un tube qui se remplit :
  1. Prélèvement — sur site par nos équipes ou dépôt au laboratoire
  2. Transport — acheminement sous chaîne du froid
  3. Réception & codification — chaque échantillon reçoit un code de traçabilité unique
  4. Analyse — microbiologie, physico-chimie, contaminants selon votre besoin
  5. Rapport — résultats clairs, fiables et transmis dans les délais
- Chaque étape : icône dans un cercle type boîte de Petri + petit code monospace (ex. "ÉTAPE 03")

### 7.6 Le groupe — "Un groupe, trois laboratoires"
- Section sur fond blanc, 3 cartes verticales ELAM, ELAM Sahara, IQUALAB présentées comme 
  des flacons / tubes stylisés : au hover, un "liquide" coloré (vert → bleu) monte dans la 
  carte en animation
- Textes :
  - ELAM : "Une référence incontournable dans la réalisation d'analyses en agronomie, 
    agroalimentaire et environnement, ainsi que dans la fourniture d'expertises."
  - ELAM Sahara : même positionnement, présence dans le sud du Royaume
  - IQUALAB : "Membre du groupe QualiUp, Iqua'Lab se positionne comme un acteur majeur des 
    analyses et tests pour l'agroalimentaire."
- Bouton "Visiter le site" (lien externe, nouvel onglet) sur chaque carte

### 7.7 Au-delà de l'analyse — Conseil & Audit
- Split screen en 2 grands panneaux côte à côte (empilés sur mobile) :
  - Gauche, fond vert clair #EEF7EC : "Conseil et Formation" — image générée, texte court, 
    lien → /conseil-formation
  - Droite, fond bleu clair #EAF0FA : "Audit et Expertise" — image générée, texte court, 
    lien → /audit-expertise
- Au hover, le panneau survolé s'élargit légèrement (flex-grow animé)

### 7.8 Témoignages — "Rapports de satisfaction"
- Fond navy, cartes blanches présentées comme des rapports d'analyse : en-tête avec un 
  code monospace (ex. "AVIS-001"), petit tampon rond "✓ VÉRIFIÉ" en vert incliné
- Carrousel avec flèches + pagination, défilement auto lent (pause au hover)
- Témoignages (texte réel, légèrement allégé) :
  1. Jihane Almouatamid — cliente : "Je collabore avec Iqualab depuis plusieurs années et 
     suis pleinement satisfaite. Leur professionnalisme, leur rigueur scientifique et leur 
     réactivité sont exemplaires. Le sérieux des analyses, la clarté des rapports et la 
     ponctualité des prélèvements ont grandement contribué à la conformité de mes 
     établissements."
  2. Houria Bouadllaoui — Responsable qualité, unité de surgélation : "Une équipe très 
     réactive, toujours disponible et à l'écoute. Les résultats fournis sont fiables, 
     cohérents et transmis dans les délais. Un partenaire de confiance pour la qualité de 
     nos analyses."
  3. Mohamed Fouad Jaafari — Directeur qualité, station : "Dans le domaine des analyses, où 
     chaque heure compte, la capacité du laboratoire ELAM à fournir des résultats fiables 
     dans des délais très courts est un véritable atout. Un partenaire de confiance que je 
     recommande."
- Avatars : initiales dans un cercle (pas de photo)

### 7.9 Nos agences — carte interactive du Maroc
- Layout : carte SVG du Maroc à gauche, panneau d'infos à droite
- IMPORTANT : la carte doit représenter le Maroc dans son intégralité territoriale, 
  provinces du Sud (Sahara marocain) incluses, SANS aucune ligne de séparation ni pointillé. 
  Dakhla doit apparaître sur le territoire marocain.
- 4 points pulsants (vert) : Larache, Casablanca, Agadir (siège, point plus grand), Dakhla
- Clic sur un point (ou sur un onglet au-dessus) → le panneau de droite affiche : nom de 
  l'agence, téléphone cliquable, bouton "Envoyer un email" (qualiup.technique@gmail.com 
  avec sujet pré-rempli "Demande d'information"), et la carte Google Maps intégrée de la ville
- Agadir sélectionnée par défaut

### 7.10 Actualités
- H2 "Actualités & expertise"
- Layout : 1 grand article mis en avant à gauche + 2 articles empilés à droite
- Articles : "Analyse microbiologique", "Analyse des métaux lourds", "Conseil et Formation"
  (images générées, date, catégorie en badge, temps de lecture)
- Lien "Toutes les actualités" → /actualites

### 7.11 Carrières — bande CTA
- Bande pleine largeur au dégradé signature, image générée "technicien au microscope" en 
  découpe sur le côté
- Texte : "Envie de rejoindre un laboratoire dynamique et innovant au Maroc ? Envoyez-nous 
  votre CV et faites partie de notre équipe."
- Bouton blanc "Envoyer mon CV" → mailto:qualiuprh@gmail.com?subject=Candidature%20spontanée

### 7.12 CTA final — "Besoin d'une analyse ?"
- Bloc carte arrondi centré sur fond blanc, cercles concentriques type boîte de Petri en fond
- H2 "Un échantillon à analyser ? Parlons-en."
- 2 boutons : "Demander un devis" (→ /contact) et "Appeler le +212 6 61 36 10 08"

---------------------------------------------------------------------------------------------

## 8. PAGE À PROPOS ( /a-propos )

- Hero de page : fond navy, fil d'Ariane, H1 "À propos de QualiUp", sous-titre, image 
  d'équipe générée à droite en masque arrondi
- Section "Notre histoire" : texte enrichi à partir de : "Depuis sa création en 2014, QualiUp 
  s'affirme comme un véritable partenaire de l'industrie agroalimentaire." + timeline 
  verticale en "chapitres" (sans dates inventées sauf 2014) : Création en 2014 → 
  Développement des analyses spécialisées → Structuration du groupe (ELAM, ELAM Sahara, 
  IQUALAB) → Maillage national (4 agences, 10+ points de proximité)
- Section "Nos capacités analytiques" présentée comme une matrice / tableau de capacités 
  moderne (lignes avec icônes et coches) :
  analyses bactériologiques · analyses physico-chimiques · détection de contaminants · 
  vérification d'authenticité · recherche d'allergènes · analyses des métaux lourds
- Section "Nos valeurs" : 4 valeurs en grandes cartes avec icônes animées au hover : 
  Précision, Fiabilité, Réactivité, Proximité (chacune avec 2 lignes d'explication)
- Section "Le groupe" : rappel des 3 laboratoires (format différent de l'accueil : 
  liste horizontale avec logos-texte et liens)
- Bande chiffres + CTA contact

---------------------------------------------------------------------------------------------

## 9. PAGE PRESTATIONS D'ANALYSES ( /prestations-analyses )

- Hero : H1 "Prestations d'analyses", sous-titre "Un large panel de tests spécialisés pour 
  chaque secteur", fond blanc avec hélice ADN en filigrane
- Sélecteur de secteur interactif : rangée de 7 "puces" (chips) avec icône ; au clic, un 
  panneau d'aperçu s'anime (image, description, 4 analyses clés, bouton vers la page détail)
- Section "Types d'analyses" : 6 familles en grille avec icônes : Microbiologie, 
  Physico-chimie, Contaminants, Allergènes, Authenticité, Métaux lourds
- Grille complète des 7 domaines (cartes avec images générées)
- CTA devis

---------------------------------------------------------------------------------------------

## 10. LES 7 SOUS-PAGES DE DOMAINES

Routes :
- /prestations/agroalimentaire — Laboratoire agroalimentaire (icône : Wheat / Milk)
- /prestations/environnement — Environnement (icône : Droplets / Leaf)
- /prestations/cosmetique-pharmacie — Cosmétique et Pharmacie (icône : FlaskConical / Pill)
- /prestations/hotellerie-restauration — Hôtellerie et Restauration (icône : ChefHat)
- /prestations/agronomie — Agronomie (icône : Sprout)
- /prestations/emballage-textiles — Emballage et Textiles (icône : Package)
- /prestations/metaux-lourds — Analyses métaux lourds (icône : Atom)

Utilise UN template commun, mais chaque page a sa propre image hero générée, son icône et 
une nuance d'accent (alterner vert / bleu) pour qu'elles ne soient pas identiques.

Structure du template :
1. Hero : image du domaine en plein fond avec overlay, fil d'Ariane, H1, sous-titre, 
   CTA "Demander un devis pour ce domaine"
2. Introduction : paragraphe expliquant les enjeux du secteur et le rôle de QualiUp
3. "Ce que nous analysons" : grille des matrices / types d'échantillons (icônes)
4. "Paramètres analysés" : ONGLETS par famille d'analyses (ex. Microbiologie | 
   Physico-chimie | Contaminants), chaque onglet affiche une liste de paramètres sous forme 
   de "lignes de rapport" (nom du paramètre en texte, catégorie en monospace)
5. "Pour qui ?" : types de clients sous forme de chips
6. Mini-parcours en 3 étapes (Prélèvement → Analyse → Rapport)
7. Mini-FAQ du domaine (3 questions en accordéon)
8. Formulaire de devis court avec le domaine PRÉ-SÉLECTIONNÉ
9. Navigation "Domaine précédent / Domaine suivant" en bas de page

Contenus par domaine (à rédiger proprement, sans inventer d'accréditation ni de délai chiffré) :

- Agroalimentaire — Matrices : produits laitiers, viandes et volailles, produits de la mer, 
  fruits et légumes frais et surgelés, céréales et dérivés, boissons, plats cuisinés. 
  Microbiologie : flore totale, coliformes, E. coli, Salmonella, Listeria monocytogenes, 
  staphylocoques, levures et moisissures. Physico-chimie : humidité, pH, matières grasses, 
  protéines, cendres, acidité. Contaminants : résidus de pesticides, mycotoxines, histamine. 
  Aussi : allergènes, authenticité. Clients : industriels, stations de conditionnement, 
  unités de surgélation, exportateurs.
- Environnement — Eaux (potable, de process, usées, de piscine), surfaces, air ambiant, sols. 
  Paramètres microbiologiques et physico-chimiques de l'eau, contrôle d'hygiène des surfaces. 
  Clients : industriels, collectivités, établissements recevant du public.
- Cosmétique et Pharmacie — Contrôle microbiologique des matières premières et produits finis, 
  paramètres physico-chimiques, recherche de métaux lourds. Clients : fabricants de 
  cosmétiques, coopératives (argan, plantes aromatiques), laboratoires.
- Hôtellerie et Restauration — Analyses des plats témoins, prélèvements de surfaces, 
  contrôle de l'eau, suivi de l'hygiène, accompagnement HACCP. Clients : hôtels, 
  restaurants, restauration collective, traiteurs.
- Agronomie — Analyses de sols, eaux d'irrigation, analyses foliaires, engrais, résidus de 
  pesticides sur fruits et légumes. Clients : exploitations agricoles, stations de 
  conditionnement, coopératives.
- Emballage et Textiles — Aptitude au contact alimentaire, essais de migration, contrôle 
  microbiologique des emballages, contrôles sur textiles. Clients : fabricants d'emballages, 
  industriels agroalimentaires, industrie textile.
- Analyses métaux lourds — Plomb, cadmium, mercure, arsenic et autres éléments traces, dans 
  les aliments, les eaux, les sols et les cosmétiques. Clients : exportateurs, industriels, 
  producteurs.

---------------------------------------------------------------------------------------------

## 11. PAGE CONSEIL ET FORMATION ( /conseil-formation )

- Hero split : image générée "formation hygiène" + texte
- Section "Nos accompagnements" en cartes "parcours" reliées par une ligne (style chemin 
  d'apprentissage) : mise en place et suivi HACCP, accompagnement ISO 22000, bonnes 
  pratiques d'hygiène (BPH), plan de maîtrise sanitaire, formation du personnel à 
  l'hygiène alimentaire
- Section "Comment se déroule une formation" : 4 étapes (diagnostic des besoins → programme 
  sur mesure → formation sur site → évaluation et suivi)
- Section bénéfices : 3 blocs avec grandes icônes (conformité, montée en compétences des 
  équipes, confiance des clients)
- CTA "Planifier un accompagnement" → formulaire contact pré-rempli "Conseil / Formation"

---------------------------------------------------------------------------------------------

## 12. PAGE AUDIT ET EXPERTISE ( /audit-expertise )

- Hero : fond bleu profond, image "auditeur avec tablette", H1
- Section "Nos audits" avec un visuel interactif type CHECKLIST D'AUDIT : les points 
  se cochent un à un à l'apparition au scroll, avec un anneau de progression qui passe de 
  0 à 100 % (audit hygiène, audit fournisseurs, diagnostic de conformité, audit des 
  process de production)
- Section "Expertise" : accompagnement en cas de non-conformité, analyse des causes, 
  expertise technique et recommandations
- Section "Livrables" : rapport détaillé, points forts, axes d'amélioration, plan d'actions 
  (présentés comme un aperçu de document stylisé)
- CTA "Demander un audit"

---------------------------------------------------------------------------------------------

## 13. PAGE TOUS NOS SERVICES ( /services )

- Vue d'ensemble des 3 piliers : Analyses (7 domaines), Conseil et Formation, Audit et 
  Expertise
- Layout en 3 grandes colonnes-piliers avec liste des sous-services, puis rappel du 
  parcours de l'échantillon, puis CTA

---------------------------------------------------------------------------------------------

## 14. PAGE FAQ ( /faq )

- Hero compact avec barre de RECHERCHE (filtre les questions en temps réel)
- Filtres par catégorie (chips) : Général, Analyses, Prélèvements, Résultats et rapports, 
  Conseil et Audit
- Accordéons animés, une question ouverte à la fois
- Contenu dans src/data/faq.ts avec le commentaire "// Remplacer par la FAQ du site actuel". 
  Questions de départ : Quels types d'analyses réalisez-vous ? Comment faire analyser un 
  échantillon ? Réalisez-vous les prélèvements sur site ? Comment les échantillons 
  sont-ils transportés ? Comment recevoir mes résultats ? Dans quelles villes êtes-vous 
  présents ? Proposez-vous des formations en entreprise ? Comment demander un devis ?
- Bloc final : "Vous ne trouvez pas votre réponse ?" + bouton contact + téléphone

---------------------------------------------------------------------------------------------

## 15. PAGE ACTUALITÉS ( /actualites ) + ARTICLE ( /actualites/:slug )

- Liste : article mis en avant en grand format, puis grille, filtres par catégorie
- Page article : image hero, titre, date, temps de lecture, contenu riche (H2, listes, 
  citation), barre de progression de lecture en haut, partage (LinkedIn, Facebook, WhatsApp, 
  copier le lien), articles liés, CTA devis en fin d'article
- 3 articles de départ rédigés (400–600 mots chacun) : "Analyse microbiologique : pourquoi 
  est-elle essentielle ?", "Métaux lourds : comprendre les risques et les analyses", 
  "Conseil et formation : bâtir une culture de la sécurité alimentaire"

---------------------------------------------------------------------------------------------

## 16. PAGE CONTACT ( /contact )

- Hero court : H1 "Contactez-nous", sous-titre "Une question, un échantillon à analyser, 
  un devis ? Nos équipes vous répondent."
- Layout 2 colonnes :
  - Gauche : FORMULAIRE en carte blanche :
    Nom complet*, Société, Email*, Téléphone*, Secteur d'activité (select : les 7 domaines + 
    Autre), Type de demande* (Analyse / Devis / Conseil et formation / Audit / Autre), 
    Agence la plus proche (Larache, Casablanca, Agadir, Dakhla), Message*, case RGPD/loi 09-08
    Validation zod, messages d'erreur en français, bouton "Envoyer ma demande", état de 
    chargement, écran de succès animé (coche verte + "Votre demande a bien été enregistrée, 
    code de suivi : QU-XXXX" généré aléatoirement)
    Les champs se pré-remplissent via les paramètres d'URL (?secteur=... &type=...) quand 
    on arrive depuis une sous-page
  - Droite : cartes de contact rapide (téléphone, email général, email technique, siège) 
    avec icônes et actions en un clic
- Section agences : onglets Larache / Casablanca / Agadir / Dakhla → carte Google Maps 
  intégrée + téléphone + bouton email
- Bloc recrutement discret : "Vous souhaitez nous rejoindre ?" → qualiuprh@gmail.com

---------------------------------------------------------------------------------------------

## 17. EXIGENCES DE QUALITÉ

- Aucune section vide, aucun "Lorem ipsum", aucun lien mort (#)
- Aucune image placeholder : toutes les images sont générées
- Mise en page variée : deux sections consécutives ne doivent jamais avoir la même structure
- Cohérence stricte avec les couleurs du logo
- Tous les numéros en liens tel:, tous les emails en liens mailto:
- Performance : images optimisées, polices en display=swap, lazy loading
- Mobile parfait : tester chaque section en 375px (pas de débordement horizontal, 
  bento et timeline repensés pour mobile)
- Ne pas inventer de certifications, d'accréditations ni de délais chiffrés

Construis l'ensemble du site : layout (header, méga-menu, footer), design system, toutes 
les pages et toutes les images générées. Si tu dois procéder par étapes, commence par le 
design system + layout + page d'accueil complète, puis les pages de services, puis le reste.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/63e2ab80-c5b5-42d7-826c-d2ecc483ad93).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
