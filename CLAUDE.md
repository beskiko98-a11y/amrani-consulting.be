# Site amrani-consulting.be — Règles du projet

Site vitrine d'Amrani Consulting (consultant IT freelance, Bruxelles).
Stack : HTML/CSS/JS pur, zéro framework. Hébergé sur Hostinger, déployé après push GitHub (branche main).

## Charte graphique (obligatoire)
- Palette : Navy `#0A1626` / Ivoire `#F4F1EB` / Or mat `#B08D57` / Charbon `#111111`
- Fonts : Fraunces (titres, serif) + Inter (corps, sans-serif) — Google Fonts uniquement, aucun autre CDN
- Logo : Amrani Consulting + symbole Λ (lambda doré) — favicon Λ or sur navy
- Tagline : Clarté · Structure · Impact
- Pas d'emojis dans les titres, pas de gradients criards, animations subtiles

## Structure
- Pages racine : index, services (+ dossier `services/` pages dédiées), portfolio, immoai, about, contact, privacy
- `css/` design system centralisé, `js/` interactions, `assets/` images
- `.htaccess` : redirections (les `/path/index` redirigent vers `/path/` — ne pas casser)
- robots.txt + sitemap.xml à tenir à jour quand une page est ajoutée

## Règles de développement
- Responsive mobile-first, accessibilité WCAG AA (contraste min 4.5:1 — attention or sur ivoire)
- SEO sur chaque page : title unique, meta description, JSON-LD ; un seul H1 par page
- Cible SEO locale : « freelance IT Bruxelles » et variantes
- Bouton "Retour en haut" sur toutes les pages
- Formulaires connectés à Google Sheets via Apps Script — ne pas modifier les endpoints sans vérifier le script côté Sheets
- RGPD : bannière cookies + page privacy à préserver
- Footer : mention ITBelsys obligatoire
- Tarification affichée : « sur mesure » (ne pas réintroduire de tarifs jour fixes)

## Démos prospects
- Un seul fichier HTML tout inline, données réelles du prospect
- URL : amrani-consulting.be/demo-[nom] (exception historique : /cherubini)
- Mention "Démo Amrani Consulting" en footer
- Les démos n'utilisent PAS la charte Amrani : charte adaptée au prospect

## Avant tout déploiement
1. QA : liens, formulaires, mobile 375px / tablette 768px / desktop 1440px, console sans erreur
2. Audit design : cohérence palette, hiérarchie typo, espacements
3. Push GitHub → déploiement Hostinger → tester l'URL publique

## Contexte business
Le contexte complet (clients, priorités, tarifs) vit dans
`..\Amrani Consulting - Documents\00_CONTEXTE\` — ne pas le dupliquer ici.

## Design Context (impeccable)
- Register : **brand** (portfolio/vitrine). ImmoAI peut utiliser un register product en override.
- North Star : *"The Consulting Partner"* — autorité calme, composition soignée, aucun bruit.
- Personnalité : Clarté · Structure · Impact. Émotions cibles : calme, réassurance.
- Anti-références : profils freelance transactionnels (Fiverr/Malt), esthétique agence IT générique.
- Principe cardinal : l'or est un accent de précision (≤10% de l'écran) — jamais décoratif.
- Sources de vérité design : [`PRODUCT.md`](PRODUCT.md) (stratégie) + [`DESIGN.md`](DESIGN.md) (système visuel).
