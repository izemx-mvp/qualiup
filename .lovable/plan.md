# Refonte multi-pages QualiUp Group

## Objectif
Créer le site vitrine français complet de QualiUp Group, moderne, scientifique et premium, en respectant strictement le logo fourni, la palette de marque, les informations d’entreprise et l’interdiction d’inventer certifications ou délais.

## Lot 1 — Fondations visuelles et contenus
- Installer les dépendances d’animation nécessaires et conserver le routeur natif TanStack du projet, équivalent multi-pages de la demande sans introduire un second système de navigation.
- Définir dans le système global les couleurs QualiUp, les trois typographies, les rayons, ombres, boutons, états, motifs ADN/molécules/Petri et animations accessibles.
- Centraliser services, domaines, chiffres, agences, témoignages, FAQ et articles dans `src/data` ; signaler clairement les trois statistiques provisoires à confirmer.
- Importer le logo original via le stockage d’assets, créer le favicon recadré sur feuille + ADN, puis retirer l’icône générique.
- Générer les 16 visuels demandés dans une direction photographique cohérente, les convertir en WebP optimisés et appliquer chargement différé sauf au visuel principal.

## Lot 2 — Navigation et accueil complet
- Construire la barre d’informations, le header sticky transparent puis vitré, le méga-menu Services, les menus À propos, le panneau mobile plein écran et le footer complet.
- Construire l’accueil avec ses 12 compositions distinctes : scène principale, bande instrumentée, expertise, bento des domaines, parcours d’échantillon, groupe, conseil/audit, témoignages, agences, actualités, carrières et appel final.
- Ajouter les interactions prévues : textes alternés, compteurs, ligne de scan, timeline progressive, cartes flottantes, carrousel, carte SVG intégrale du Maroc sans séparation du Sud, onglets agences et cartes Google.

## Lot 3 — Pages de services
- Créer `/services`, `/prestations-analyses`, `/conseil-formation` et `/audit-expertise`.
- Créer les 7 pages de domaines depuis un modèle partagé, avec image, accent, contenus, onglets de paramètres, FAQ, formulaire pré-sélectionné et navigation précédent/suivant propres à chaque domaine.
- Garantir des URL réelles, des fils d’Ariane, des liens fonctionnels et une présentation mobile adaptée.

## Lot 4 — Pages éditoriales et contact
- Créer `/a-propos`, `/faq`, `/actualites`, les 3 pages article, `/contact` et `/mentions-legales`.
- Rédiger les trois articles de 400–600 mots, avec progression de lecture, partage, articles liés et appel au devis.
- Mettre en place recherche et filtres FAQ/actualités, accordéons et préremplissage du formulaire par URL.
- Créer `contact_requests` dans Lovable Cloud avec droits minimaux, validation serveur et client, consentement obligatoire, état succès/erreur et code de suivi `QU-XXXX`.

## Lot 5 — Qualité, SEO et validation
- Ajouter un titre, une description, Open Graph, type Open Graph et carte Twitter uniques sur chaque page publique, ainsi qu’un seul H1 par page.
- Créer sitemap et robots adaptés aux routes publiques, sans URL fictive tant que le site n’est pas publié.
- Ajouter le retour en haut lors des changements de page, les focus visibles, libellés accessibles, liens téléphone/email et gestion de réduction des animations.
- Créer la page 404 « Échantillon introuvable » avec `ERR-404`.
- Vérifier compilation, erreurs d’exécution, navigation, formulaires et rendu visuel à 375 px et sur grand écran ; corriger débordements, chevauchements et médias manquants.

## Détails techniques
- Le projet impose TanStack Start/TanStack Router ; toutes les routes seront de vraies pages rendues côté serveur, sans `react-router-dom`.
- Les images générées seront stockées comme assets du projet et converties en WebP ; le logo fourni ne sera ni redessiné ni régénéré.
- Le formulaire public passera par une fonction serveur avec schéma Zod avant écriture ; les visiteurs ne pourront ni lire ni modifier les demandes enregistrées.
- Google Maps sera utilisé uniquement pour l’affichage des villes, sans exposer de clé serveur ni créer de relais public coûteux.
