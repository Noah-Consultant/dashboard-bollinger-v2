# Cas d'Usage Client : Pilotage de la Performance Commerciale et Rentabilité via Power BI & Microsoft Fabric

## 1. Contexte Client Fictif Détaillé

### 1.1. Fiche d'identité
**Nom de l'entreprise :** Domaine des Terres Pourpres
**Localisation :** Vallée du Rhône (AOC Châteauneuf-du-Pape, Gigondas, Côtes du Rhône), France. Vignoble de 120 hectares.
**Chiffres clés :**
- **Chiffre d'affaires global :** 18 millions d'euros.
- **Répartition CA :** 40 % France / 60 % Export.
- **Répartition des volumes :** 35 % Grande Distribution (GD), 30 % CHR (Cafés, Hôtels, Restaurants), 25 % Export, 10 % E-commerce et vente au caveau.
- **Nombre de références :** 45 cuvées (vins rouges, blancs, rosés, différentes gammes).
- **Nombre de marchés :** 25 pays (principaux : États-Unis, Royaume-Uni, Belgique, Japon).

**Organisation :**
- **Direction Générale :** Dirigée par la famille fondatrice, axée sur la stratégie de marque et la rentabilité.
- **Direction Commerciale :** Une équipe de 8 commerciaux (France et Export).
- **Direction Financière :** Un DAF et deux contrôleurs de gestion.
- **Data / IT :** Pas de DSI dédié, un responsable informatique gérant l'infrastructure et l'ERP, avec une maturité data intermédiaire (utilisation avancée d'Excel, débuts sur Power BI Desktop).
- **Marketing :** Un service marketing de 3 personnes gérant les promotions, l'image de marque et le trade marketing.

### 1.2. Systèmes d'information & data actuels
- **ERP / Gestion commerciale :** Utilisation de l'ERP métier *VitiGestion Pro* (fictif) pour la gestion de la production, des stocks, des ventes et de la facturation.
- **Outils analytiques :** Forte dépendance aux exports CSV depuis l'ERP, retraités manuellement dans des fichiers Excel lourds et complexes par la finance et le commerce.
- **Maturité Data :** Intermédiaire. Quelques tableaux de bord Power BI Desktop existent, mais ils sont alimentés par des fichiers plats locaux, sans modèle de données centralisé ni actualisation automatisée. Microsoft Fabric n'est pas encore exploré.

### 1.3. Enjeux business & irritants data
Du point de vue de la Direction Générale et des directions métiers, plusieurs irritants majeurs freinent la croissance :
- **Manque de visibilité immédiate :** Difficulté à visualiser rapidement le chiffre d'affaires et la rentabilité nette par cuvée, par canal de distribution et par pays. Les clôtures mensuelles prennent trop de temps.
- **Opacité des marges réelles :** Manque de vision consolidée sur la performance des promotions, des remises accordées en GD et des coûts logistiques à l'export, rendant le pilotage des marges approximatif.
- **Prévisions artisanales :** Les prévisions de ventes sont réalisées "à la main" sur Excel, entraînant des ruptures de stock sur les cuvées phares ou des surstocks sur d'autres références.
- **Chronophagie du reporting :** Perte de temps considérable (plusieurs jours par mois) pour la production des reportings destinés à la DG et au DAF, au détriment de l'analyse à valeur ajoutée.

**Enjeux business majeurs :**
1. Protéger et optimiser la marge nette face à la hausse des coûts de production et logistiques.
2. Piloter finement le mix-produit et l'allocation des volumes par marché pour maximiser la rentabilité des cuvées limitées.
3. Accélérer la prise de décision grâce à des indicateurs fiables et actualisés quotidiennement.

---

## 2. Diagnostic & Proposition de Valeur Noah Consultant

### 2.1. Diagnostic synthétique
- **Forces actuelles :** Excellente qualité des vins, portefeuille clients diversifié, fort dynamisme à l'export, marque reconnue.
- **Faiblesses data / BI :** Vision fragmentée de la donnée, dépendance excessive à Excel, absence de modèle de données consolidé et automatisé ("Single Source of Truth").
- **Opportunités "quick wins" :** Mise en place d'un modèle de données centralisé via Power BI Service et automatisation des reportings commerciaux et financiers existants.
- **Risques à ne rien faire :** Érosion des marges due à un mauvais pilotage des remises, mauvaise allocation des stocks sur les marchés les plus rentables, perte de compétitivité face aux concurrents plus agiles.

### 2.2. Proposition de valeur Noah Consultant
**Promesse générale :** "Passer d'un reporting subi à un pilotage proactif de la performance commerciale et de la rentabilité, grâce à Power BI & Microsoft Fabric."

**Bénéfices concrets :**
- **Pour la Direction Générale :** Une vision consolidée et en temps réel de l'activité, permettant des arbitrages stratégiques rapides (ex: réallocation de volumes de la GD vers l'export).
- **Pour la Direction Commerciale :** Un suivi quotidien des ventes, du mix produits, de l'efficacité des promotions et de la performance par canal et par représentant.
- **Pour la Direction Financière :** La fiabilisation des chiffres, un suivi précis des marges nettes intégrant les coûts logistiques et commerciaux, et des clôtures mensuelles accélérées.

**Résultats mesurables attendus (KPI avant / après) :**
- Temps de production du reporting mensuel : de 5 jours à 1 heure (automatisé).
- Précision du pilotage de la marge : passage d'une marge brute globale à une marge nette par cuvée/client.
- Taux de rupture de stock sur les cuvées stratégiques : réduction de 30 % grâce à de meilleures prévisions.

---

## 3. Architecture Cible Data & Analytics (Microsoft)

### 3.1. Sources de données
- **ERP VitiGestion Pro :** Données de ventes, factures, clients, référentiel produits (cuvées, millésimes).
- **Fichiers Excel / CSV :** Fichiers "off" gérés par les métiers (objectifs commerciaux annuels, budgets marketing, prévisions de ventes).
- **Données externes (optionnel) :** Taux de change pour l'export, données de marché.

### 3.2. Ingestion & stockage
**Scénario Microsoft Fabric (Lakehouse) :**
Pour une PME viticole structurant sa donnée, Microsoft Fabric offre une approche unifiée et évolutive.
- **Ingestion :** Utilisation des Data Factory Pipelines dans Fabric pour extraire les données de l'ERP (via API ou connecteur SQL) et les fichiers Excel (stockés sur SharePoint/OneDrive) de manière planifiée (ex: rafraîchissement nocturne).
- **Stockage (OneLake / Lakehouse) :** Les données brutes sont stockées dans la couche *Bronze*. Elles sont ensuite nettoyées et transformées (via des Notebooks Spark ou des Dataflows Gen2) dans la couche *Silver*, puis modélisées en étoile dans la couche *Gold* (Data Warehouse ou Lakehouse SQL Endpoint) prête pour l'analyse.

### 3.3. Modèle de données & gouvernance
- **Modélisation en étoile :**
  - *Table de Faits :* Ventes (Lignes de factures), Objectifs, Stocks.
  - *Tables de Dimensions :* Temps (Calendrier), Produits (Cuvées, Millésimes, Couleurs, Formats), Clients (Comptes, Canaux GD/CHR/Export, Pays), Commerciaux.
- **Gouvernance et Sécurité :** Mise en place du Row-Level Security (RLS) dans Power BI. Un commercial ne voit que ses clients ; le directeur commercial et la DG voient l'ensemble du périmètre.
- **Fréquence d'actualisation :** Quotidienne (la nuit) pour les ventes et les stocks, mensuelle pour les budgets.

### 3.4. KPI & indicateurs clés
- **Performance Globale :** Chiffre d'affaires (CA), Volume (hectolitres et équivalent cols/bouteilles), Marge brute, Marge nette.
- **Analyse Granulaire :** CA et Marge par cuvée, par canal de distribution, par pays, par client et par représentant.
- **Efficacité Commerciale :** Taux de démarque / remises accordées, efficacité des campagnes promotionnelles (ROI promo).
- **Supply Chain :** Rotation des stocks, couverture de stock par cuvée (pour anticiper les ruptures ou surstocks avant le prochain millésime).
