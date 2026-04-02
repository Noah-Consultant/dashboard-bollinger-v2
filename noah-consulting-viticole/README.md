# Projet MANUS-20260402 : Cas d'Usage Client & Deck Consulting (Filière Viticole)

Ce dépôt contient l'ensemble des livrables générés pour Noah Consultant (Stanislas BASQUIN), spécialisé dans l'accompagnement Data & AI (Microsoft Fabric, Power BI) pour la filière viticole française.

## Contenu des Livrables

1. **`cas_usage_viticole.md`** : Le cas d'usage client fictif détaillé (Domaine des Terres Pourpres), incluant le contexte, le diagnostic, la proposition de valeur, l'architecture cible et les KPI.
2. **`deck_consulting.md`** : La structure complète du deck de consulting (12 slides), prête à être intégrée dans PowerPoint, Google Slides ou Canva.
3. **`index.html`** : La landing page HTML/CSS/JS full responsive, présentant l'offre et le cas d'usage.
4. **`README.md`** : Ce fichier, contenant les instructions de déploiement et les scénarios d'utilisation commerciale.

---

## Scénarios d'Utilisation Commerciale

### Scénario 1 : Rendez-vous avec un Dirigeant de Domaine Viticole (1-to-1)
**Contexte :** Stanislas rencontre le Directeur Général et le DAF d'un domaine viticole de 15 M€ de CA, qui se plaignent de la lenteur de leurs clôtures mensuelles et du manque de visibilité sur leurs marges export.

**Déroulé de la rencontre :**
1. **Introduction (10 min) :** Présentation rapide de Noah Consultant (Slide 2). Stanislas pose des questions ouvertes : *"Combien de temps vous prend la clôture mensuelle aujourd'hui ?"*, *"Comment pilotez-vous la rentabilité de vos cuvées à l'export ?"*
2. **Effet Miroir (15 min) :** Stanislas présente le cas d'usage "Domaine des Terres Pourpres" (Slides 3 & 4). Le prospect se reconnaît immédiatement dans les "irritants data" (fichiers Excel lourds, marges opaques).
3. **La Solution (15 min) :** Présentation de l'architecture cible simplifiée (Slide 6) et démonstration d'un dashboard Power BI type (Slide 7). Stanislas insiste sur le fait que la solution s'adapte à leur ERP actuel.
4. **Preuve de Valeur (10 min) :** Focus sur les cas d'usage concrets (Slide 8) et le ROI attendu (Slide 10).
5. **Conclusion & Next Steps (10 min) :** Proposition de l'offre "Diagnostic Express" ou "Pilote Power BI" (Slide 11).

**Objections possibles & Réponses :**
- *Objection :* "Nous n'avons pas les compétences en interne pour gérer ça."
  - *Réponse :* "C'est tout l'intérêt de notre accompagnement. Nous construisons l'architecture (Fabric) et les tableaux de bord (Power BI) pour vous. Vos équipes n'ont plus qu'à consommer la donnée, sans avoir à la manipuler."
- *Objection :* "Ça va coûter trop cher et prendre des mois."
  - *Réponse :* "Notre approche est itérative. Avec l'offre 'Pilote Power BI', nous déployons un premier tableau de bord en 4 semaines sur un périmètre restreint (ex: Ventes Export) pour prouver la valeur avant d'aller plus loin."

**Livrable promis :** Un compte-rendu de l'échange avec une proposition commerciale pour un "Diagnostic Express" d'une semaine.

### Scénario 2 : Webinar pour un Syndicat Viticole / Interprofession (1-to-Many)
**Contexte :** Stanislas anime un webinar de 45 minutes intitulé *"PME Viticoles : Comment Power BI peut sauver vos marges face à l'inflation"*, devant une audience de 50 dirigeants et directeurs commerciaux.

**Déroulé de la rencontre :**
1. **Accroche (5 min) :** Constat macro-économique (hausse des coûts, complexité des marchés export). Promesse du webinar (Slide 1).
2. **Le Problème (10 min) :** Sondage interactif (ex: Klaxoon/Slido) : *"Pilotez-vous votre marge nette par cuvée ?"*. Présentation des limites d'Excel (Slide 4).
3. **La Démonstration (20 min) :** Stanislas déroule les 3 cas d'usage concrets (Slide 8) en montrant comment Power BI permet de répondre à des questions complexes en quelques clics (ex: "Quel est le ROI réel de notre dernière promo en GD ?").
4. **La Méthodologie (5 min) :** Présentation du plan de mise en œuvre en 4 phases (Slide 9) pour rassurer sur la faisabilité.
5. **Q&A et Call-to-Action (5 min) :** Session de questions/réponses. Stanislas propose un "Atelier de cadrage gratuit de 2 heures" aux 5 premiers inscrits (Slide 12).

**Objections possibles & Réponses :**
- *Objection :* "Notre ERP est très ancien, est-ce compatible ?"
  - *Réponse :* "Oui, Microsoft Fabric et Power BI peuvent se connecter à quasiment n'importe quelle source de données, même via de simples exports CSV automatisés si l'ERP n'a pas d'API."

**Livrable promis :** Le replay du webinar, le deck de présentation au format PDF, et un lien Calendly pour réserver l'atelier de cadrage.

---

## Instructions de Déploiement de la Landing Page

La landing page (`index.html`) est conçue pour être déployée facilement, gratuitement et sans nécessiter de serveur complexe.

### Option 1 : Utilisation Locale (Test)
1. Copiez le code de la section "Landing page" dans un fichier nommé `index.html` sur votre ordinateur.
2. Double-cliquez sur le fichier pour l'ouvrir dans votre navigateur web (Chrome, Edge, Safari).

### Option 2 : Déploiement Gratuit via GitHub Pages
1. Créez un compte gratuit sur [GitHub](https://github.com/).
2. Créez un nouveau dépôt (repository) public, par exemple `noah-consultant-viticulture`.
3. Ajoutez le fichier `index.html` à la racine de ce dépôt.
4. Allez dans les **Settings** (Paramètres) du dépôt > **Pages**.
5. Sous "Source", sélectionnez la branche `main` (ou `master`) et le dossier `/ (root)`. Cliquez sur **Save**.
6. Votre site sera en ligne sous quelques minutes à l'adresse : `https://[votre-nom-utilisateur].github.io/noah-consultant-viticulture/`.

### Option 3 : Déploiement Gratuit via Vercel ou Netlify
1. Créez un compte gratuit sur [Vercel](https://vercel.com/) ou [Netlify](https://www.netlify.com/).
2. Vous pouvez soit lier votre dépôt GitHub, soit simplement glisser-déposer (drag & drop) le dossier contenant votre fichier `index.html` directement sur leur interface web.
3. Le site sera déployé instantanément avec une URL publique sécurisée (HTTPS).

## Personnalisation pour d'autres prospects
Le code HTML est structuré de manière claire. Pour l'adapter à un autre secteur (ex: Agroalimentaire général) ou modifier les offres :
- Ouvrez `index.html` dans un éditeur de texte (Notepad++, VS Code).
- Recherchez les textes entre les balises (ex: `<h1>...</h1>`, `<p>...</p>`).
- Modifiez les couleurs dans la section `<style>` au début du fichier (variables `:root`).
- Remplacez les liens `mailto:` et les URL LinkedIn par les vôtres dans la section "CTA" et "Footer".
