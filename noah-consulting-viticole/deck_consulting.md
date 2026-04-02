# Structure du Deck de Consulting : Pilotage Data-Driven pour la Filière Viticole

## Slide 1 – Titre & Promesse
**Objectif :** Accrocher l'audience avec une promesse forte et claire, orientée ROI.
**Idées clés :**
- Titre principal : Passer d'un reporting subi à un pilotage proactif de la performance commerciale et de la rentabilité.
- Sous-titre : Cas d'usage Power BI & Microsoft Fabric pour les PME viticoles françaises.
- Promesse : Accélérez vos clôtures, fiabilisez vos marges par cuvée et optimisez vos allocations de volumes sur les marchés les plus rentables.
**Visuels recommandés :** Une image de fond élégante (vignoble ou chai moderne) avec le logo de Noah Consultant et un encart texte épuré.

## Slide 2 – À propos de Noah Consultant
**Objectif :** Asseoir la légitimité et l'expertise de l'agence sur le double domaine Data/AI et Viticulture.
**Idées clés :**
- Qui sommes-nous ? Micro-agence Data Analytics & AI basée en France.
- Notre expertise : Spécialistes de l'écosystème Microsoft (Power BI, Azure, Fabric).
- Notre ADN sectoriel : Une connaissance pointue des enjeux de la filière viticole (domaines, maisons de négoce, coopératives).
- Notre approche : Pragmatique, orientée ROI et adoption par les équipes métiers (DG, DAF, Commerce).
**Visuels recommandés :** Logos des technologies maîtrisées (Microsoft Fabric, Power BI, Azure) et quelques icônes illustrant l'expertise métier (grappe de raisin, graphique de croissance, engrenages).

## Slide 3 – Contexte & Enjeux du Client Viticole
**Objectif :** Montrer que Noah Consultant comprend parfaitement la réalité quotidienne d'une PME viticole exportatrice.
**Idées clés :**
- Le client type : Domaine des Terres Pourpres (18 M€ CA, 60% Export, 45 cuvées).
- Les canaux de distribution : Une complexité croissante entre la Grande Distribution (GD), le CHR et l'Export.
- Les enjeux majeurs :
  - Protéger la marge nette face à l'inflation des coûts (matières sèches, logistique).
  - Piloter finement le mix-produit pour maximiser la rentabilité des volumes limités.
  - Accélérer la prise de décision stratégique.
**Visuels recommandés :** Un schéma circulaire ou une carte mentale illustrant la complexité de la distribution (GD, CHR, Export) autour du domaine viticole.

## Slide 4 – Irritants Data & Limites des Reportings Actuels
**Objectif :** Faire écho aux douleurs (pain points) vécues par les directions générales et financières.
**Idées clés :**
- Dépendance excessive à Excel : Fichiers lourds, chronophages et sources d'erreurs.
- Opacité des marges : Difficulté à isoler la rentabilité réelle d'une cuvée après déduction des remises GD et des coûts logistiques export.
- Vision fragmentée : Les données de l'ERP (VitiGestion Pro) ne communiquent pas facilement avec les budgets marketing ou les prévisions commerciales.
- Conséquences : Des clôtures mensuelles qui s'éternisent et des décisions prises "au doigt mouillé".
**Visuels recommandés :** Un tableau comparatif "Avant / Après" ou des icônes d'alerte (sablier pour le temps perdu, fichier Excel complexe barré).

## Slide 5 – Vision Cible "Pilotage Data-Driven"
**Objectif :** Présenter la solution globale et ses bénéfices directs pour chaque direction.
**Idées clés :**
- La solution : Un modèle de données centralisé ("Single Source of Truth") automatisé via Microsoft Fabric et restitué dans Power BI.
- Bénéfices pour la DG : Vision consolidée en temps réel, arbitrages stratégiques facilités.
- Bénéfices pour la DAF : Fiabilisation des chiffres, suivi précis des marges nettes, clôtures accélérées.
- Bénéfices pour la DirCo : Suivi quotidien des ventes, efficacité des promotions, performance par représentant.
**Visuels recommandés :** Un schéma en entonnoir montrant la donnée brute se transformant en insights actionnables pour les trois directions (DG, DAF, DirCo).

## Slide 6 – Architecture Data Proposée
**Objectif :** Rassurer sur la robustesse technique tout en restant pédagogique pour des non-techniciens.
**Idées clés :**
- Sources : ERP métier (ventes, stocks) + Fichiers Excel (budgets, prévisions).
- Ingestion & Stockage : Utilisation de Microsoft Fabric (Data Factory Pipelines) pour centraliser les données dans un Lakehouse sécurisé.
- Modélisation : Création d'un modèle en étoile performant (couche Gold).
- Restitution : Tableaux de bord interactifs Power BI accessibles sur PC, tablette et smartphone.
**Visuels recommandés :** Un schéma d'architecture simplifié de gauche à droite : Sources (Icônes ERP/Excel) -> Fabric (Lakehouse) -> Power BI (Dashboards) -> Utilisateurs finaux.

## Slide 7 – Exemple de KPI & Dashboard Power BI
**Objectif :** Projeter le client dans l'outil avec des indicateurs métiers concrets.
**Idées clés :**
- Indicateurs globaux : CA, Volume (hl / cols), Marge brute, Marge nette.
- Analyses croisées : Performance par cuvée, par canal (GD vs Export), par pays.
- Suivi opérationnel : Taux de démarque, rotation des stocks, couverture de stock.
**Visuels recommandés :** Une maquette (mockup) d'un tableau de bord Power BI épuré, intégrant des graphiques en barres (CA par pays), un graphique en cascade (Waterfall) pour la décomposition de la marge, et des jauges pour l'atteinte des objectifs.

## Slide 8 – Cas d'Usage Concrets
**Objectif :** Démontrer la valeur ajoutée sur des scénarios métiers spécifiques.
**Idées clés :**
- Scénario 1 : Pilotage Export. Identifier immédiatement les marchés les plus rentables en intégrant les coûts de transport et de douane.
- Scénario 2 : Optimisation Promo en GD. Mesurer le ROI réel d'une mise en avant en supermarché (volume additionnel vs coût de la remise).
- Scénario 3 : Gestion des Stocks. Anticiper les ruptures sur les cuvées phares avant le prochain millésime grâce aux prévisions de ventes croisées avec les stocks actuels.
**Visuels recommandés :** Trois blocs distincts (cartes) avec une icône représentative pour chaque scénario (globe pour l'export, étiquette de prix pour la promo, caisse de vin pour les stocks).

## Slide 9 – Plan de Mise en Œuvre
**Objectif :** Rassurer sur la maîtrise des délais et la méthodologie projet.
**Idées clés :**
- Phase 1 (Semaines 1-2) : Cadrage métier, définition des KPI et audit des sources de données.
- Phase 2 (Semaines 3-5) : Connexion à l'ERP, modélisation dans Fabric et création du premier flux automatisé.
- Phase 3 (Semaines 6-8) : Développement des dashboards Power BI (Ventes & Marges).
- Phase 4 (Semaine 9) : Recette, formation des utilisateurs et déploiement.
**Visuels recommandés :** Une frise chronologique (timeline) ou un diagramme de Gantt simplifié montrant les 4 phases sur 2 mois.

## Slide 10 – Estimation du ROI & Bénéfices Business
**Objectif :** Prouver que le projet s'autofinance rapidement.
**Idées clés :**
- Gain de temps : Passage de 5 jours de reporting manuel par mois à 1 heure (automatisation).
- Optimisation de la marge : Récupération de 1 à 2 points de marge nette grâce à un meilleur pilotage des remises et de l'allocation géographique.
- Réduction des ruptures : Baisse de 30% des ruptures de stock sur les références stratégiques.
**Visuels recommandés :** Des chiffres clés mis en exergue (gros caractères) avec des flèches de progression (hausse de la marge, baisse du temps passé).

## Slide 11 – Options d'Accompagnement Noah Consultant
**Objectif :** Présenter l'offre commerciale de manière claire et packagée.
**Idées clés :**
- Offre "Diagnostic Express" : Audit de l'existant et feuille de route data (1 semaine).
- Offre "Pilote Power BI" : Déploiement d'un premier tableau de bord sur un périmètre restreint (ex: Ventes Export) pour prouver la valeur (4 semaines).
- Offre "Déploiement Fabric Complet" : Mise en place de l'architecture cible complète et accompagnement au changement (2 à 3 mois).
**Visuels recommandés :** Un tableau de tarification ou trois colonnes distinctes comparant les offres (livrables, durée, budget estimatif).

## Slide 12 – Call-to-Action
**Objectif :** Engager la prochaine étape avec le prospect.
**Idées clés :**
- Prochaine étape recommandée : Un atelier de cadrage gratuit de 2 heures pour identifier vos 3 KPI prioritaires.
- Contact : Stanislas BASQUIN, Consultant Senior Data & AI.
- Coordonnées : Email, Téléphone, Lien LinkedIn.
**Visuels recommandés :** Une photo professionnelle du consultant, un QR code renvoyant vers la prise de rendez-vous (Calendly) et les informations de contact claires.
