# Lover's Luxury — Guide complet (Instagram, site, paiements)

Studio d'ongles + boutique (rouges à lèvres, glosses) à North Miami Beach, FL.
Téléphone / WhatsApp : (786) 459-7612 · Instagram : @loversluxury1 · Site : loversluxury.online

---

## 1. Où en est le compte (analyse faite depuis Chrome)

- 12 publications · 11 abonnés · 10 abonnements
- Bio : « Luxe pour les amoureux », rouges à lèvres, glosses, crayons à lèvres, ongles. Lien : loversluxury.online
- Points forts : belles poses, identité or et noir, offre claire (acrylique ou Gel-X 50 $ + rouge à lèvres offert).
- À corriger : flyer répété 3 fois sur 12 posts, ancien flyer avec le mauvais pseudo (@loverluxury), bio qui promet des produits peu visibles, aucune story à la une, très peu d'abonnés (preuve sociale).

Les flyers v3 à v6 de ce dépôt affichent déjà le bon pseudo : **@loversluxury1**.

---

## 2. Bio Instagram (prête à copier)

**Nom affiché** (c'est ce qui est cherché) :
`Lover's Luxury | Nails Miami`

**Bio** (moins de 150 caractères) :
```
💅 Acrylic & Gel-X · North Miami Beach
🎁 Holiday set $50 + free lipstick
💄 Lipsticks & glosses
📲 Text/DM (786) 459-7612
⬇️ Book & shop
```

**Lien** : `loversluxury.online` · **Bouton** : Réserver ou WhatsApp.

### Stories à la une
1. **Prices** : capture du menu du site
2. **Before/After** : 3 à 4 transformations
3. **Reviews** : captures de messages de clientes (avec accord)
4. **Book** : comment réserver en 3 étapes
5. **Shop** : rouges à lèvres et glosses avec leur numéro

---

## 3. Calendrier de 14 jours

| Jour | Contenu | Accroche |
|---|---|---|
| 1 | Épingler le flyer, une seule fois | « Holiday set $50 + free lipstick » |
| 2 | Reel : pose en accéléré, ongles jaune fluo | « 3D butterfly set 🦋 $50 » |
| 3 | Photo : rouge à lèvres + ongles assortis | « Match your lips to your set » |
| 4 | Story : sondage | « Square ou stiletto ? » |
| 5 | Reel : avant/après | « Natural nails → this » |
| 6 | Photo : French rouge et chrome | « Red French, any length » |
| 7 | Reel : elle présente le studio (visage + voix) | « Meet your nail tech » |
| 8 | Story : créneaux libres | « 3 spots left » |
| 9 | Reel : swatches des rouges à lèvres | « Which shade are you? » |
| 10 | Photo : cliente (avec accord) | Tag de la cliente |
| 11 | Reel : timelapse d'une pose complète | « 2 hours in 15 seconds » |
| 12 | Story : avis client | Capture du message |
| 13 | Photo : gloss #29 et #57 | « Shiny gloss » |
| 14 | Reel : rappel de l'offre | « Last chance for the holiday set » |

**Légende type** : une ligne d'accroche, le prix, « DM to book », puis 3 à 5 hashtags
(`#miaminails #northmiamibeachnails #gelxmiami #acrylicnails`).

### À faire en parallèle
- Suivre et commenter 10 à 15 comptes de Miami par jour (salons, clientes, influenceuses beauté).
- Parrainage : « Tag a friend, you both get $5 off ».
- Demander à chaque cliente de taguer la page, republier avec accord.
- Photos sur fond uni ou fourrure blanche : c'est ce qui donne le rendu le plus pro.

---

## 4. Mettre le site en ligne sur Hostinger

Fichier prêt : `lovers-luxury-site.zip` (contient `index.html`, `config.js`, `images/`).

1. hPanel → **Sites web** → `loversluxury.online` → **Gestionnaire de fichiers** → `public_html`.
2. **Sauvegarde l'ancien site** (Compresser puis télécharger).
3. Supprime l'ancien contenu (et `default.php` s'il existe).
4. **Importer** le ZIP, puis **Extraire** dans `public_html`. `index.html` doit être directement dans `public_html`.
5. Ouvre `https://loversluxury.online` sur un téléphone et teste.

Si l'ancien site vient du **Website Builder** Hostinger, il peut passer devant : garde une copie, puis désactive-le ou passe sur l'hébergement classique.

### Modifier le site plus tard
Tout se change dans `config.js` (prix, produits, photos, horaires, liens de paiement). Pour modifier : gestionnaire de fichiers → clic droit sur `config.js` → Modifier.

---

## 5. Encaisser et retirer l'argent

**Les comptes doivent être au nom de la propriétaire** (compte bancaire américain, identité, numéro fiscal). Ne jamais partager un mot de passe : utiliser un accès collaborateur.
Frais indicatifs : à vérifier sur les sites, ils changent.

| Moyen | Comment ça marche | Retrait | Frais |
|---|---|---|---|
| **Stripe** | Créer un lien de paiement « Deposit 15 $ », le coller dans `depositLink` | Virement automatique vers la banque, ~2 jours ouvrés | ~2,9 % + 0,30 $ |
| **Zelle** | Intégré à l'appli de la banque, donner téléphone ou e-mail (`zelle`) | Direct sur le compte bancaire | Aucun en général |
| **Cash App** | Choisir un $cashtag (`cashApp`) | Vers la banque : 1 à 3 jours gratuit, instantané avec frais (~1,5 %) | Gratuit en perso, ~2,75 % en business |

- Zelle et Cash App personnel : peu de protection en cas d'erreur ou d'arnaque. Vérifier le nom de la cliente.
- Tous les revenus sont imposables : garder un tableau simple (date, cliente, montant).

---

## 6. À confirmer / à fournir

Dans `site/config.js`, les lignes marquées « ⚠ CONFIRM » :

- [ ] Prix de la boutique (18 $ rouges à lèvres, 14 $ glosses = valeurs de départ)
- [ ] Noms des teintes sans numéro (Burgundy, Classic red, Hot pink, Brick red, Peach nude…)
- [ ] Prix des services (sauf les 50 $ de l'offre)
- [ ] Pseudo TikTok (`loverluxury` = supposition)
- [ ] Adresse exacte (présente sur l'ancien flyer, à reprendre)
- [ ] Horaires
- [ ] Lien Stripe, Zelle, Cash App
- [ ] Le numéro (786) 459-7612 est bien sur WhatsApp
- [ ] Photo de pieds pour le service « Toes »
- [ ] De vrais avis de clientes (la section reste cachée tant qu'il n'y en a pas)

---

## 7. Fichiers du dépôt

| Dossier / fichier | Contenu |
|---|---|
| `site/` | Le site (index.html, config.js, images) |
| `lovers-luxury-site.zip` | Le site compressé pour Hostinger |
| `flyer/` | Flyers v2 à v6 (PNG 1080×1350) et leurs sources HTML |
| `PLAN-LOVERS-LUXURY.md` | Premier diagnostic et plan 400-500 $/semaine |
| `GUIDE-LOVERS-LUXURY.md` | Ce guide |
