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

CONNEXION INTERNET
--------------------
Nécessaire pour charger les polices, l'export Excel et le scanner de
codes-barres. Sans connexion, l'application reste utilisable mais ces
fonctions précises seront indisponibles.

DONNÉES — BASE DE DONNÉES LOCALE
-----------------------------------
En dehors de Claude.ai, les données (comptes, produits, ventes, stock,
clients...) sont automatiquement sauvegardées dans une vraie base de
données intégrée à votre navigateur (IndexedDB), attachée à une seule
ADRESSE EXACTE (protocole + domaine). Si l'écran "Créer le compte
administrateur" réapparaît alors que vous avez déjà créé un compte, c'est
presque toujours parce que la page a été rouverte depuis une adresse
légèrement différente de celle utilisée la première fois — par exemple :
   - http://monsite.com   vs   https://monsite.com
   - monsite.com          vs   www.monsite.com
   - une URL d'aperçu qui change à chaque génération (certains outils
     d'hébergement rapide/preview attribuent une nouvelle adresse à
     chaque déploiement)

→ Solution : utilisez systématiquement la MÊME adresse exacte (idéalement
  https://votredomaine.com, sans variante) pour accéder à la boutique au
  quotidien.

Un petit texte technique en bas de l'écran de connexion indique le mode de
stockage actif et l'adresse détectée — utile pour vérifier que vous êtes
bien sur la même adresse à chaque fois.

Premier lancement : vous serez invité à créer le compte administrateur,
sans mot de passe préalable. Les lancements suivants retrouveront
automatiquement ce compte et vos données, et vous resterez même connecté
d'une session à l'autre tant que vous ne vous déconnectez pas.

La base de données locale peut être vidée si vous effacez les données de
navigation, utilisez la navigation privée, ou changez de navigateur/
appareil. Pensez à utiliser régulièrement le bouton de sauvegarde
(Paramètres → Sauvegarde) pour exporter vos données en sécurité.

SÉCURITÉ
---------
Les mots de passe sont protégés par un hachage simple, adapté à un usage
boutique léger — ce n'est pas un niveau de sécurité bancaire.
