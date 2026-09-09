# HOLLOW DOMINION — Live Build App

Application statique de travail pour **HOLLOW DOMINION** (PoE2 0.5.2, Monk — Martial Artist).

## But

Éviter de régénérer une image entière à chaque changement de valeur. Les décisions numériques sont centralisées dans `build-data.js`; l'interface les affiche immédiatement et `calculations.js` recalcule les statistiques du personnage.

## Nouveauté visuelle

- les **9 équipements** affichent désormais leur **vignette extraite de l’image de référence** ;
- les **9 compétences** affichent désormais leur **vignette extraite de l’image de référence** ;
- les **Implicites / Préfixes / Suffixes / Effets uniques** restent séparés visuellement ;
- les visuels sont stockés dans `assets-data.js` sous forme de data-URIs pour rester compatibles avec le déploiement statique RawGitHack.

## Source de vérité / priorité

1. `../reference/HOLLOW_DOMINION_MASTER_CONTEXT.md` — décisions de build.
2. `../reference/HOLLOW_DOMINION_reference.build` — allocations exactes.
3. `../../Skill Trees/0.5.2/data.json` — arbre structurel et stats passives.
4. **`build-data.js` — état numérique de travail actuel de l'équipement, des stats et des supports.**
5. `visual-manifest.json` identifie l’image utilisateur de référence ; elle sert maintenant aussi de base aux découpes visuelles affichées dans l’application.

## Règles importantes

- **Convalescence est définitivement exclue.**
- Arbre : **Default 120 + 8**, aucun Weapon Set dans le theorycraft courant.
- Les suffixes actuellement libérés sur **Masque souriant** et **Amulette solaire** sont volontairement `free` et valent 0 tant qu'ils ne sont pas verrouillés.
- Le gros mod Attack Speed de la Bague de Topaze reste marqué `audit` tant que sa légalité 0.5.2 n'est pas confirmée.
- Le prochain axe actif est la **chance de critique réelle**.

## Utilisation

Lancer un petit serveur HTTP dans ce dossier, par exemple :

```bash
python -m http.server 8000
```

puis ouvrir `http://localhost:8000/`.

Le bouton **Modifier le stuff** ouvre un panneau d'édition. Les modifications sont conservées dans le `localStorage` du navigateur. **Exporter JSON** produit un snapshot partageable.

Pour rendre un changement persistant pour le projet GitHub/ChatGPT, modifier `build-data.js` puis committer.
