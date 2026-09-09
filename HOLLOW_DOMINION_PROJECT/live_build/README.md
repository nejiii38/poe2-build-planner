# HOLLOW DOMINION — Live Build App

Application statique de travail pour **HOLLOW DOMINION** (PoE2 0.5.2, Monk — Martial Artist).

## But

Éviter de régénérer une image entière à chaque changement de valeur. Les décisions numériques sont centralisées dans `build-data.js`; l'interface les affiche immédiatement et `calculations.js` recalcule les résistances endgame, le critique et le budget Spirit.

## Source de vérité / priorité

1. `../reference/HOLLOW_DOMINION_MASTER_CONTEXT.md` — décisions de build.
2. `../reference/HOLLOW_DOMINION_reference.build` — allocations exactes.
3. `../../Skill Trees/0.5.2/data.json` — arbre structurel et stats passives.
4. **`build-data.js` — état numérique de travail actuel de l'équipement, des stats et des supports.**
5. `visual-manifest.json` identifie l’image utilisateur de référence ; elle reste une référence visuelle/snapshot, pas une source mécanique supérieure aux fichiers ci-dessus.

## Règles importantes

- **Convalescence est définitivement exclue.**
- Arbre : **Default 120 + 8**, aucun Weapon Set dans le theorycraft courant.
- Les suffixes actuellement libérés sur **Masque souriant** et **Amulette solaire** sont volontairement `free` et valent 0 tant qu'ils ne sont pas verrouillés.
- Résistances virtuelles actuelles : répartition optimisée autour de 75/75/75/~75 après pénalité endgame, en intégrant Ingéniosité 30/30.
- Le gros mod Attack Speed de la Bague de Topaze reste marqué `audit` tant que sa légalité 0.5.2 n'est pas confirmée.
- Le prochain axe actif est la **chance de critique réelle**.

## Utilisation

Lancer un petit serveur HTTP dans ce dossier, par exemple :

```bash
python -m http.server 8000
```

puis ouvrir `http://localhost:8000/`.

Le bouton **Modifier les valeurs** ouvre un panneau d'édition. Les modifications sont conservées dans le `localStorage` du navigateur. **Exporter JSON** produit un snapshot partageable.

Pour rendre un changement persistant pour le projet GitHub/ChatGPT, modifier `build-data.js` puis committer.

## Structure

- `index.html` — interface.
- `style.css` — thème HOLLOW DOMINION.
- `build-data.js` — état courant lisible par humain/ChatGPT.
- `calculations.js` — calculs dynamiques.
- `app.js` — rendu + édition locale/export JSON.
- `visual-manifest.json` — identifie l’image de référence utilisateur et les zones équipement/skills.
- Les binaires visuels restent des références de conversation ; l’application GitHub reste entièrement exploitable sans eux et peut les rematérialiser plus tard.
