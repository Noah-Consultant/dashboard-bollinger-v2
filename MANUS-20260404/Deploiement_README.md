# Déploiement de l'App Interactive - Noah Consultant

Ce guide explique comment déployer l'application "Noah Sales Engine 2026" (le fichier `App_Interactive.html`) sur un hébergeur public gratuit, afin d'y accéder depuis n'importe quel appareil sans nécessiter de compte Manus.

L'application étant entièrement statique (HTML/CSS/JS) et utilisant le stockage local du navigateur (`localStorage`) pour sauvegarder vos données, elle ne nécessite ni base de données externe ni serveur backend.

## Prérequis

- Le fichier `App_Interactive.html` généré.
- Un compte GitHub gratuit (https://github.com).
- (Optionnel) Un compte Vercel gratuit (https://vercel.com) si vous choisissez cette méthode.

---

## Méthode 1 : Déploiement sur GitHub Pages (Recommandé, le plus simple)

GitHub Pages permet d'héberger gratuitement des pages web statiques directement depuis un dépôt GitHub.

### Étape 1 : Créer un dépôt GitHub
1. Connectez-vous à votre compte GitHub.
2. Cliquez sur le bouton **"+"** en haut à droite, puis sur **"New repository"**.
3. Nommez le dépôt `noah-sales-engine` (ou le nom de votre choix).
4. Cochez la case **"Public"** (nécessaire pour GitHub Pages sur un compte gratuit).
5. Cliquez sur **"Create repository"**.

### Étape 2 : Ajouter le fichier
1. Sur la page de votre nouveau dépôt, cliquez sur le lien **"uploading an existing file"**.
2. Glissez-déposez le fichier `App_Interactive.html` dans la zone prévue.
3. **Important :** Renommez le fichier en `index.html` (cela permet à GitHub Pages de le charger par défaut).
4. Cliquez sur **"Commit changes"**.

### Étape 3 : Activer GitHub Pages
1. Allez dans l'onglet **"Settings"** de votre dépôt.
2. Dans le menu de gauche, descendez et cliquez sur **"Pages"**.
3. Sous la section "Build and deployment", dans le menu déroulant "Source", sélectionnez **"Deploy from a branch"**.
4. Sous "Branch", sélectionnez **`main`** (ou `master`), laissez le dossier sur `/root`, puis cliquez sur **"Save"**.
5. Patientez 1 à 2 minutes. Rafraîchissez la page : un lien apparaîtra en haut (ex: `https://votre-nom-utilisateur.github.io/noah-sales-engine/`).
6. Cliquez sur ce lien pour accéder à votre application !

---

## Méthode 2 : Déploiement sur Vercel (Alternative performante)

Vercel est une plateforme d'hébergement très rapide, idéale si vous souhaitez lier un nom de domaine personnalisé plus tard.

### Étape 1 : Préparer le dépôt GitHub
Suivez exactement les **Étapes 1 et 2 de la Méthode 1** pour créer un dépôt GitHub contenant votre fichier (idéalement renommé en `index.html`).

### Étape 2 : Connecter Vercel
1. Connectez-vous à Vercel (https://vercel.com) en utilisant votre compte GitHub.
2. Sur le tableau de bord Vercel, cliquez sur **"Add New..."** puis sélectionnez **"Project"**.
3. Dans la liste "Import Git Repository", trouvez votre dépôt `noah-sales-engine` et cliquez sur **"Import"**.

### Étape 3 : Déployer
1. Vercel détectera automatiquement qu'il s'agit d'un projet statique. Laissez les paramètres par défaut (Framework Preset: Other).
2. Cliquez sur le bouton **"Deploy"**.
3. Le déploiement prendra quelques secondes. Une fois terminé, Vercel vous fournira une URL publique (ex: `https://noah-sales-engine.vercel.app`).
4. Cliquez sur l'URL pour utiliser votre application.

---

## Notes sur la sécurité et les données

- **Stockage local :** Toutes les données que vous saisissez dans l'application (Leads, Opportunités) sont sauvegardées directement dans le navigateur de votre ordinateur via `localStorage`.
- **Confidentialité :** Aucune donnée n'est envoyée sur un serveur externe. Vous êtes le seul propriétaire de vos données.
- **Attention :** Si vous videz le cache de votre navigateur ou si vous changez d'ordinateur, vous ne retrouverez pas vos données. Pour une utilisation avancée et collaborative, il est recommandé de lier ces données à votre architecture Notion ou Airtable (décrite dans le livrable `CRM_Architecture.md`).
