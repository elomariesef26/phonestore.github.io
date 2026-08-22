PhoneStock — Gestion boutique téléphones & accessoires
========================================================

CONTENU DE L'ARCHIVE
---------------------
- index.html   Structure de la page
- style.css    Toute l'apparence (thème sombre/clair, mise en page, responsive)
- app.js       Toute la logique de l'application

POUR UTILISER L'APPLICATION
-----------------------------
1. Gardez les 3 fichiers dans le même dossier (ne les séparez pas).
2. Ouvrez index.html dans votre navigateur (double-clic, ou via votre
   hébergement web si vous en utilisez un).

   ⚠️ IMPORTANT — Scanner de codes-barres :
   Les navigateurs interdisent l'accès à la caméra sur une page ouverte en
   fichier local (file://). Il faut une adresse "http://" ou "https://"
   pour que le scan par caméra fonctionne (hébergement web, ou serveur
   local via `python3 -m http.server`). La saisie manuelle du code reste
   toujours disponible en file://.

   📷 Photo produit : contrairement au scanner, la prise de photo (bouton
   "Prendre une photo" dans la fiche produit) fonctionne même en ouvrant
   le fichier directement (file://), sur mobile comme sur ordinateur.

CONNEXION INTERNET
--------------------
Nécessaire pour charger les polices, l'export Excel et le scanner de
codes-barres. Sans connexion, l'application reste utilisable mais ces
fonctions précises seront indisponibles.

DONNÉES — BASE DE DONNÉES LOCALE
-----------------------------------
En dehors de Claude.ai, les données sont automatiquement sauvegardées dans
une vraie base de données intégrée à votre navigateur (IndexedDB), attachée
à une seule ADRESSE EXACTE (protocole + domaine). Si l'écran "Créer le
compte administrateur" réapparaît alors que vous avez déjà créé un compte,
c'est presque toujours parce que la page a été rouverte depuis une adresse
légèrement différente — utilisez systématiquement la MÊME adresse exacte
pour accéder à la boutique au quotidien.

Un petit texte technique en bas de l'écran de connexion indique le mode de
stockage actif et l'adresse détectée.

Premier lancement : vous serez invité à créer le compte administrateur.
Les lancements suivants retrouveront automatiquement ce compte et vos
données, et vous resterez connecté d'une session à l'autre.

Pensez à utiliser régulièrement le bouton de sauvegarde (Paramètres →
Sauvegarde) pour exporter vos données en sécurité. Les photos des produits
sont incluses dans cette sauvegarde.

SÉCURITÉ
---------
Les mots de passe sont protégés par un hachage simple, adapté à un usage
boutique léger — ce n'est pas un niveau de sécurité bancaire.
