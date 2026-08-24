# PhoneStock — Gestion boutique téléphones & accessoires

Application web de gestion de boutique (produits, stock, ventes, clients, fournisseurs, utilisateurs) fonctionnant entièrement dans le navigateur — aucun serveur requis.

## Structure du projet

```
├── index.html   → page principale (structure HTML + liens vers les fichiers ci-dessous)
├── style.css    → toute l'apparence visuelle de l'application
├── app.js       → toute la logique applicative (données, écrans, actions)
└── README.md    → ce fichier
```

## Lancer l'application

Aucune installation n'est nécessaire.

1. Gardez les 4 fichiers dans le **même dossier** (les chemins entre eux sont relatifs).
2. Ouvrez `index.html` directement dans un navigateur (double-clic), **ou** servez le dossier avec un petit serveur local si votre navigateur bloque les fichiers locaux :
   ```bash
   python3 -m http.server 8000
   # puis ouvrir http://localhost:8000
   ```

Une connexion internet est utilisée uniquement pour charger les polices Google Fonts et deux bibliothèques externes (SheetJS pour l'export/import Excel, html5-qrcode pour le scanner de codes-barres). Le reste de l'application fonctionne hors-ligne une fois la page chargée.

## Stockage des données

Toutes les données (produits, stock, ventes, clients...) sont enregistrées **dans le navigateur** (IndexedDB avec repli sur `localStorage`). Il n'y a pas de base de données externe.

⚠️ Important :
- Les données sont **propres à chaque navigateur et à chaque appareil**. Ouvrir `index.html` sur un autre ordinateur ou dans un autre navigateur ne montrera pas les mêmes données.
- Vider le cache / les données du site dans le navigateur **efface définitivement** les données de l'application. Pensez à faire des sauvegardes régulières (voir ci-dessous).

## Fonctionnalités principales

- **Produits** : catalogue avec catégories, marque, modèle, SKU, seuil de stock bas, photo.
- **Stock & achats** : gestion du stock par lots d'achat (FIFO), prix d'achat et prix de vente par lot.
- **Ventes (caisse)** : encaissement, paiement partiel/à crédit, reçus imprimables.
- **Clients / Fournisseurs / Utilisateurs & privilèges**.
- **Scanner de codes-barres** (via la caméra) pour rechercher ou vendre un produit rapidement.
- **Paramètres → Sauvegarde** :
  - Export / import d'une sauvegarde complète au format JSON.
  - **Export / import d'un classeur Excel (.xlsx)** avec feuilles liées par formules (Tableau de bord, Catégories, Stock & Prix, Produits, Clients, Ventes) — pratique pour éditer le catalogue dans Excel puis le réimporter.
  - **Zone dangereuse — Vider le stockage du site** : ouvre une fenêtre de confirmation proposant trois actions irréversibles séparées : supprimer uniquement les achats et remettre le stock à zéro, supprimer uniquement les ventes et paiements, ou tout vider (produits, stock, achats, ventes, clients, fournisseurs, utilisateurs...) et recharger la page sur une base neuve.

## Base de données au premier lancement

Cette version démarre avec une **base de données totalement vide** : aucun produit, aucun stock, aucun fournisseur, aucun achat, aucune vente, aucun client. Ajoutez vos propres données depuis l'application, ou importez-les via Paramètres → Sauvegarde (fichier JSON ou classeur Excel).

## Développement

Le projet est en JavaScript natif (aucun framework, aucune étape de build). Pour modifier l'application :
- Modifiez `style.css` pour l'apparence.
- Modifiez `app.js` pour le comportement (l'organisation interne suit les commentaires de sections, ex. `/* ---------------- Stock lots ---------------- */`).
- Rechargez simplement `index.html` dans le navigateur pour voir les changements.
