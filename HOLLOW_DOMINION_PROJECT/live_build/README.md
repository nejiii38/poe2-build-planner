# HOLLOW DOMINION — Live Build App

Application statique de travail pour **HOLLOW DOMINION** (PoE2 0.5.2, Monk — Martial Artist).

## But

Éviter de régénérer une image entière à chaque changement de valeur. Les décisions numériques restent centralisées dans `build-data.js`; l'interface les affiche immédiatement et `calculations.js` recalcule les statistiques du personnage.

## Visuels intégrés

- les **9 équipements** affichent leur vignette extraite de l’image de référence ;
- les compétences déjà présentes sur l’image de référence utilisent leurs vignettes extraites ;
- **Danseur du vent** utilise temporairement le fallback visuel de l’interface, car il remplace Spirit Vessel qui figurait sur le poster de référence ;
- les **Implicites / Préfixes / Suffixes / Effets uniques** restent séparés visuellement ;
- les équipements sont servis depuis `assets/gear/*.svg` ;
- les compétences de référence utilisent le sprite `assets/skills/skills-sprite.svg`.

## Correction live-1.6 — Danseur du vent

- **Spirit Vessel est supprimé** du setup actif : cette aptitude est octroyée par **Forgotten Warden**, qui occuperait l’emplacement d’armure de torse à la place de notre **Veste racée**.
- **Danseur du vent** le remplace comme aptitude persistante active et réserve **30 Esprit**.
- Budget actuel : **140 / 226 Esprit réservés**, soit **86 Esprit libres**.
- Le visuel de Danseur du vent utilise temporairement le fallback de l’interface ; le sprite de référence reste inchangé tant qu’un visuel dédié n’a pas été validé.

## Source de vérité / priorité

1. `../reference/HOLLOW_DOMINION_MASTER_CONTEXT.md` — décisions de build.
2. `../reference/HOLLOW_DOMINION_reference.build` — allocations exactes.
3. `../../Skill Trees/0.5.2/data.json` — arbre structurel et stats passives.
4. **`build-data.js` — état numérique de travail actuel de l'équipement, des stats et des supports.**
5. `visual-manifest.json` identifie l’image utilisateur de référence et les zones utilisées pour les découpes visuelles.

## Règles importantes

- **Convalescence est définitivement exclue.**
- Arbre : **Default 120 + 8**, aucun Weapon Set dans le theorycraft courant.
- Les suffixes actuellement libérés sur **Masque souriant** et **Amulette solaire** restent volontairement `free` et valent 0 tant qu'ils ne sont pas verrouillés.
- Le gros mod Attack Speed de la Bague de Topaze reste marqué `audit` tant que sa légalité 0.5.2 n'est pas confirmée.
- Les fichiers visuels ne remplacent jamais la source mécanique du build.

## Utilisation

Lancer un petit serveur HTTP dans ce dossier, par exemple :

```bash
python -m http.server 8000
```

puis ouvrir `http://localhost:8000/`.

Le bouton **Modifier le stuff** ouvre le panneau d'édition. Les modifications sont conservées dans le `localStorage` du navigateur. **Exporter JSON** produit un snapshot partageable.
