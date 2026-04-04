# Architecture CRM Lean - Noah Consultant

Cette architecture est conçue pour être implémentée sur Notion ou Airtable. Elle permet de piloter l'activité commerciale de manière fluide, sans usine à gaz, en se concentrant sur les indicateurs clés de performance (KPIs) et le suivi des opportunités.

## Structure de la Base de Données

L'architecture repose sur trois tables principales interconnectées : Contacts & Leads, Entreprises (Comptes), et Opportunités (Deals).

### 1. Base de Données : Contacts & Leads

Cette table centralise les informations sur les individus prospectés.

| Champ | Type | Description |
| :--- | :--- | :--- |
| **Nom, Prénom** | Texte | Identité du contact. |
| **Entreprise** | Relation | Lien vers la table "Entreprises". |
| **Rôle** | Sélection | DSI, DAF, ou Autre. |
| **Source** | Sélection | LinkedIn, Email, Événement, Recommandation. |
| **Statut** | État | Nouveau, Contacté, Qualifié, Négociation, Gagné, Perdu. |
| **Dernière interaction** | Date | Date du dernier échange (email, appel, message). |
| **Prochaine action** | Date & Texte | Date et nature de la prochaine relance prévue. |

### 2. Base de Données : Entreprises (Comptes)

Cette table regroupe les informations au niveau de l'organisation.

| Champ | Type | Description |
| :--- | :--- | :--- |
| **Nom de l'entreprise** | Texte | Raison sociale. |
| **Taille** | Sélection | CA estimé ou tranche d'effectif. |
| **Stack Technologique** | Sélection multiple | Microsoft Fabric, Dataiku, Power BI, Azure, etc. |
| **Enjeux identifiés** | Texte riche | Dette technique, ROI, Pilotage, Gouvernance des données. |
| **Contacts associés** | Relation | Lien vers la table "Contacts & Leads". |

### 3. Base de Données : Opportunités (Deals)

Cette table suit le cycle de vente et le pipeline commercial.

| Champ | Type | Description |
| :--- | :--- | :--- |
| **Nom de l'opportunité** | Texte | Ex: "Audit Dataiku - Acme Corp". |
| **Compte associé** | Relation | Lien vers la table "Entreprises". |
| **Contact principal** | Relation | Lien vers la table "Contacts & Leads". |
| **Montant estimé** | Nombre | Valeur potentielle du contrat en euros. |
| **Probabilité** | Pourcentage | Chances de succès (ex: 20%, 50%, 80%). |
| **Date de clôture** | Date | Date estimée de signature. |
| **Étape du pipeline** | État | Diagnostic Flash, Proposition, Négociation, Signature. |

## Vues Recommandées pour le Pilotage

Pour exploiter efficacement ces données, trois vues principales sont recommandées dans votre outil CRM :

1. **Vue Kanban (Pipeline) :** Un tableau visuel des opportunités classées par étape du pipeline (Diagnostic Flash -> Proposition -> Négociation -> Signature). Cela permet d'identifier rapidement les goulots d'étranglement.
2. **Vue Calendrier (Relances) :** Un affichage chronologique basé sur le champ "Prochaine action" de la table Contacts. Idéal pour planifier la journée de prospection.
3. **Vue Tableau de Bord (KPIs) :** Une synthèse chiffrée affichant le nombre de leads par statut, la répartition par rôle (DSI vs DAF), et le montant total pondéré du pipeline en cours.
