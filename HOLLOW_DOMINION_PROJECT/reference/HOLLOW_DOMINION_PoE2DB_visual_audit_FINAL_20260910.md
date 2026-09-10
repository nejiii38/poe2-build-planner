# HOLLOW DOMINION — Audit final des visuels PoE2DB

**Date : 2026-09-10**  
**Branche : `hollow-dominion-live`**  
**Déploiement : `live-1.15-poe2db-visuals-verified`**  
**Commit final : `d8e6b45301be523261d9d4bbfbb868df0662a2ec`**

## Résultat

- **9/9 équipements couverts et vérifiés**.
- **10/10 compétences couvertes et vérifiées**.
- **31/31 gemmes de soutien couvertes**.
- Les lignes des supports sont maintenant **sans numérotation** et affichent un **petit logo à gauche**.
- La couche visuelle est **additive** : `app.js`, `style.css`, `build-data.js` et `tree-state.js` sont restés inchangés.
- Les transparences natives des assets PoE2DB sont conservées.

## Corrections importantes par rapport au brouillon initial

### Équipement
- **Lochtonial Caress** : ancien mapping erroné remplacé par l’image exacte exposée par PoE2DB.
- **Duality** : ancien mapping erroné remplacé par l’image exacte de `Stjorvar` exposée par PoE2DB.
- **Ingenuity** : ancien mapping erroné remplacé par l’image exacte `Widowmaker` exposée par PoE2DB.
- **Daggerfoot Shoes** : chemin corrigé en `BootsDexInt04`.

### Supports
Les identifiants d’icône suivants ont été corrigés après vérification PoE2DB :
- Charged Mark → `chargedmark`
- Mark for Death II → `singleoutsupport`
- Innervate → `innervate`
- Overabundance II → `increaselimitsupport`
- Stun III → `overpowersupport`
- Cooldown Recovery II → `cooldownreductionsupport`

Les Lineage Supports utilisent leur image de gemme officielle PoE2DB :
- Vorana's Siege
- Her Declaration
- Seraph's Heart

## Audit séparé — Elemental Focus II

Le live build contient encore le libellé **Elemental Focus II** sur Elemental Conflux. La base PoE2DB courante expose **Elemental Focus** sans variante `II`.

Décision actuelle :
- le visuel utilise l’icône officielle actuelle d’**Elemental Focus** ;
- le nom/support du build **n’est pas modifié automatiquement** ;
- statut : **AUDIT**, en attente de validation explicite.

## Vérification technique locale vs GitHub

Les blobs actifs suivants correspondent exactement à la branche GitHub après publication :

- `index.html` — `e27f5e0d472e704fe3e97ca231ebed853348b28d`
- `README.md` — `c781d4bc4d5a7dcb2728110cf62d921a12ee7b56`
- `visual-manifest.json` — `7e692bc3b2e23d6036d0d85169300b8ff30c2471`
- `poe2db-visuals.js` — `62a00f1aa606349b62d26faa529e4e44a91b7670`
- `poe2db-visuals.css` — `3e7a56814981058e16d54d15acf8ac009288e3a8`
- `app.js` — inchangé : `6241e55c2cda56be79b2dc1349d4608a495e7893`
- `build-data.js` — inchangé : `c851e96a52a225dc8dcb482edb2b4acb8fd2be19`
- `style.css` — inchangé : `76b7daff296e16141c488829a8e50a06dc49d404`
- `tree-state.js` — inchangé : `0c9795bbaa82e63a1c234366ba459a38b82f4b9b`
- MASTER CONTEXT — `a677319057a9adb406d82b70b9e73ab995606f30`

L’ancien `assets/skills/skills-sprite.svg` est désormais un **asset de rollback non actif**. La copie locale historique de cet asset n’est pas utilisée par `live-1.15`; le commit GitHub indiqué ci-dessus reste l’autorité exacte pour ce fichier legacy.
