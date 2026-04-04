# Noah Sales Engine 2026

Bienvenue dans le **Noah Sales Engine 2026**, un système complet de prospection et de suivi client conçu pour Stanislas BASQUIN (Noah Consultant), expert Data Analytics & AI (Microsoft Fabric, Power BI, Dataiku).

Ce dépôt contient l'application interactive (Générateur de scripts & Dashboard CRM) ainsi que les livrables statiques (Playbook, Architecture CRM, Script de qualification).

## 🚀 Contenu du projet

*   `index.html` : L'application web interactive (Dashboard, Générateur de messages, CRM Pipeline, Script de qualification). Tout est contenu dans ce seul fichier (HTML/CSS/JS) pour une portabilité maximale. Les données sont sauvegardées localement dans votre navigateur (`localStorage`).
*   `Playbook_Prospection.md` : Les séquences de prospection détaillées pour les cibles DSI et DAF.
*   `Architecture_CRM_Lean.md` : La structure recommandée pour votre CRM (Notion/Airtable), le template de l'offre "Diagnostic Flash" et le script de qualification (Discovery Call).

## 🌐 Comment déployer l'application gratuitement (sans compte Manus)

L'application `index.html` est un fichier statique autonome. Vous pouvez l'héberger gratuitement et la rendre accessible via une URL publique en quelques minutes. Voici trois méthodes simples :

### Méthode 1 : Déploiement via Vercel (Recommandé, le plus rapide)
Vercel est une plateforme d'hébergement très performante pour les sites statiques.
1.  Créez un compte gratuit sur [Vercel](https://vercel.com/).
2.  Sur votre tableau de bord, cliquez sur **Add New...** > **Project**.
3.  Vous pouvez soit connecter votre compte GitHub et sélectionner ce dépôt, soit simplement glisser-déposer le dossier contenant le fichier `index.html` directement dans l'interface Vercel.
4.  Vercel déploiera le site instantanément et vous fournira une URL publique (ex: `noah-sales-engine.vercel.app`).

### Méthode 2 : Déploiement via GitHub Pages
Si vous hébergez ce code sur GitHub, vous pouvez utiliser GitHub Pages.
1.  Allez sur la page de votre dépôt GitHub.
2.  Cliquez sur l'onglet **Settings** (Paramètres).
3.  Dans le menu de gauche, cliquez sur **Pages**.
4.  Sous "Build and deployment", sélectionnez la branche `main` (ou `master`) et le dossier `/ (root)`.
5.  Cliquez sur **Save**. Votre site sera accessible sous quelques minutes à l'adresse `https://[votre-nom-utilisateur].github.io/[nom-du-depot]/`.

### Méthode 3 : Utilisation locale (Sans internet)
Vous n'êtes même pas obligé de l'héberger !
1.  Téléchargez le fichier `index.html` sur votre ordinateur.
2.  Double-cliquez dessus pour l'ouvrir dans n'importe quel navigateur web (Chrome, Edge, Safari).
3.  L'application fonctionnera parfaitement et vos données CRM seront sauvegardées dans votre navigateur.

## 💡 Utilisation de l'application

1.  **Dashboard :** Visualisez vos KPIs (Leads actifs, RDV planifiés, Valeur du pipeline).
2.  **Générateur de Scripts :** Sélectionnez votre cible (DSI ou DAF), le canal (LinkedIn ou Email) et l'étape de la séquence. Renseignez le prénom et l'entreprise pour générer un message personnalisé prêt à être copié.
3.  **CRM Pipeline :** Suivez l'avancement de vos prospects. Cliquez sur "+ Ajouter un Lead" pour enrichir votre base. Les données sont conservées dans votre navigateur.
4.  **Script Qualification :** Gardez ce script sous les yeux lors de vos appels de 20 minutes pour qualifier efficacement vos prospects (méthode BANT).

---
*Conçu pour optimiser le pipeline de vente de Noah Consultant.*
