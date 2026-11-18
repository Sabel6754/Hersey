# Site Lover's Luxury — mise en ligne

Site statique (HTML + 1 fichier de config). Aucune installation, aucun build.

## Ce que le site fait
- **Met en avant ses travaux** : galerie avec filtres (French, Acrylic, Gel-X, Toes, Art) et zoom.
- **Prend des réservations** : formulaire (service, date, heure, forme, art, inspiration) → message pré-rempli envoyé sur **WhatsApp**.
- **Encaisse** : acompte via lien de paiement (Stripe/Square/PayPal), Zelle ou Cash App ; boutique avec panier → commande sur WhatsApp.
- **Rassure** : prix clairs, avis, horaires, carte Google Maps, boutons Instagram/TikTok.

## Personnaliser (fichier `config.js` uniquement)
1. **Téléphone/WhatsApp** (`whatsapp`, chiffres seulement avec indicatif, ex. `17864597612`).
2. **Adresse, horaires, TikTok**.
3. **Paiement** : colle ton lien dans `depositLink`, et/ou `zelle`, `cashApp`.
4. **Prix** (`SERVICES`) et **produits** (`PRODUCTS`).
5. **Photos** :
   - travaux → dossier `images/work/` (01.jpg, 02.jpg…), puis liste-les dans `GALLERY` ;
   - produits → dossier `images/`, puis `image: "images/nom.jpg"`.
   - Compresse les photos (≈ 1200 px de large, < 300 Ko) avant de les envoyer.
6. **Avis** : remplace par de vrais avis de clientes (`REVIEWS`).

## Créer un lien de paiement Stripe (5 min, sans coder)
Stripe → Produits → *Créer un lien de paiement* → produit « Deposit » 15 $ → copier l'URL dans `depositLink`.

## Mettre en ligne sur Hostinger
1. hPanel → **Sites web** → ton domaine → **Gestionnaire de fichiers**.
2. Ouvre `public_html`. **Sauvegarde d'abord** l'ancien contenu (télécharge-le en ZIP).
3. Envoie `index.html`, `config.js` et le dossier `images/`.
4. Ouvre `https://loversluxury.online` et teste sur téléphone.

> Si le site actuel a été fait avec le **Website Builder** Hostinger, il peut remplacer `public_html` : garde une copie avant.

## À faire ensuite
- Ajouter ses vraies photos et vrais avis.
- Ajouter le lien du site dans la bio Instagram/TikTok.
- Créer le Google Business Profile avec le même lien.
