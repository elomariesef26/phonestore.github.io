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
2. Double-cliquez sur index.html pour l'ouvrir dans votre navigateur.

   ⚠️ IMPORTANT — Scanner de codes-barres :
   Pour des raisons de sécurité, les navigateurs interdisent l'accès à la
   caméra quand une page est ouverte directement depuis un fichier local
   (file://). Pour que le scan par caméra fonctionne, il faut ouvrir
   l'application via une adresse "http://" ou "https://", par exemple :
     - en l'hébergeant sur un petit serveur local (ex: `python3 -m http.server`
       dans le dossier, puis ouvrir http://localhost:8000)
     - ou en la déposant sur un hébergement web (y compris gratuit)
   Si vous ouvrez le fichier directement (file://), la SAISIE MANUELLE du
   code-barres reste toujours disponible et fonctionne normalement.

CONNEXION INTERNET
--------------------
L'application a besoin d'internet pour charger :
   - les polices (Google Fonts)
   - la bibliothèque d'export Excel (xlsx)
   - la bibliothèque de scan de codes-barres (html5-qrcode)
Sans connexion, l'application reste utilisable mais ces fonctions précises
seront indisponibles.

DONNÉES
--------
Toutes les données (produits, clients, ventes, stock, utilisateurs...) sont
sauvegardées automatiquement et sont PARTAGÉES entre toute personne qui ouvre
cette même instance de l'application — pratique pour une équipe travaillant
sur la même boutique.

Premier lancement : vous serez invité à créer le compte administrateur.

SÉCURITÉ
---------
Les mots de passe sont protégés par un hachage simple, adapté à un usage
boutique léger — ce n'est pas un niveau de sécurité bancaire. Ne l'utilisez
pas pour protéger des données hautement sensibles.
