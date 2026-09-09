# HOLLOW DOMINION — Live Build App

Application statique de travail pour **HOLLOW DOMINION** (PoE2 0.5.2, Monk — Martial Artist).

## But

Éviter de régénérer une image entière à chaque changement de valeur. Les décisions numériques restent centralisées dans `build-data.js`; l'interface les affiche immédiatement et `calculations.js` recalcule les statistiques du personnage.

## Visuels intégrés

- les **9 équipements** utilisent leur visuel officiel référencé par **PoE2DB** ;
- les **10 compétences** utilisent leur icône officielle référencée par **PoE2DB** ;
- chaque **gemme de soutien** affiche un petit logo à gauche de sa ligne, sans numérotation ;
- les transparences natives des images sont conservées ;
- les Lineage Supports sans seconde icône de support exposée par PoE2DB utilisent leur image de gemme officielle PoE2DB ;
- les anciens `assets/gear/*.svg` et `assets/skills/skills-sprite.svg` restent présents comme héritage/rollback, mais ne sont plus la source visuelle active.

**Règle permanente :** lors de toute modification future d’un équipement, d’une compétence ou d’une gemme de soutien, son visuel doit être revérifié/récupéré sur PoE2DB et mis à jour dans le live build.

## Correction live-1.7 — Vitalité II supprimée

- **Spirit Vessel est supprimé** du setup actif : cette aptitude est octroyée par **Forgotten Warden**, qui occuperait l’emplacement d’armure de torse à la place de notre **Veste racée**.
- **Danseur du vent** le remplace comme aptitude persistante active et réserve **30 Esprit**.
- **Vitalité II est définitivement retirée de Régulation des charges.**
- Régulation des charges réserve désormais **70 Esprit** : 30 de base + 20 Clarity II + 20 Precision II.
- Budget actuel : **100 / 226 Esprit réservés**, soit **126 Esprit libres**.
- **Elemental Conflux reste optionnel et inactif** pour la version bêta actuelle.
- Le visuel de Danseur du vent utilise temporairement le fallback de l’interface ; le sprite de référence reste inchangé tant qu’un visuel dédié n’a pas été validé.

## Correction live-1.8 — Supports de Danseur du vent

- Supports retenus : **Maim + Pin I + Lockdown**.
- Supports laissés facultatifs : **Blind II + Her Declaration**.
- Les noms des **gemmes de soutien restent désormais en anglais dans le live build**.
- `Precision II` remplace donc l'ancien libellé français `Justesse II` dans Charge Regulation.
- Ces trois supports de Danseur du vent ne modifient pas le budget actuel du live : **100 / 226 Esprit réservés**, soit **126 Esprit libres**.

## Correction live-1.9 — Moteur Freeze boss

- **Freezing Mark** est intégré comme aptitude active de setup boss.
- **Ice Bite II** est intégré sur **Shattering Palm**.
- **Ancestral Call II** passe en swap facultatif de clear pour respecter la limite de 5 supports.
- **Biting Frost II est exclu**.
- Rotation de travail : **Freezing Mark → ~4 Shattering Palm → premier Freeze → Tempest Bell → Hollow Form**.
- Statut : **PARTIELLEMENT RÉSOLU / EN TEST**.

## Source de vérité / priorité

1. `../reference/HOLLOW_DOMINION_MASTER_CONTEXT.md` — décisions de build.
2. `../reference/HOLLOW_DOMINION_reference.build` — allocations exactes.
3. `../../Skill Trees/0.5.2/data.json` — arbre structurel et stats passives.
4. **`build-data.js` — état numérique de travail actuel de l'équipement, des stats et des supports.**
5. `visual-manifest.json` identifie la politique et les sources visuelles du live build.

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

## Correction live-1.10 — Supports de Freezing Mark

Supports verrouillés :

- **Eternal Mark**
- **Prolonged Duration II**
- **Charged Mark**
- **Mark for Death II**

Le cinquième emplacement reste libre pour l'instant. **Biting Frost II reste exclu.**

## Correction live-1.11 — Refonte des supports de Danseur du vent

- **Lockdown est retiré** : indisponible dans le client actuel et désormais listé comme support désactivé par le wiki.
- Le package de supports repasse en **REWORK**.
- Supports actifs temporaires : **Maim + Pin I**.
- Candidats prioritaires : **Blind II, Rage II, Her Declaration, Seraph's Heart**.
- Le budget reste provisoirement à **30 Spirit** tant qu'aucun support avec multiplicateur/réservation supplémentaire n'est verrouillé.

## Correction live-1.12 — Supports de Danseur du vent verrouillés

- Supports retenus : **Maim + Blind II + Rage II**.
- **Pin I est retiré / exclu** du setup : le contrôle Pin n'est pas jugé suffisamment convaincant pour justifier le slot.
- **Her Declaration** et **Seraph's Heart** restent des options non verrouillées.
- `Blind II` applique un multiplicateur de coût de **110%** ; réservation de travail de Wind Dancer : **33 Spirit**.
- Budget actif mis à jour : **103 / 226 Spirit réservés**, soit **123 Spirit libres**.

## Correction live-1.15 — Visuels PoE2DB vérifiés

- Audit individuel des **9 équipements, 10 compétences et 31 supports** du setup affiché.
- Correction des mauvaises URLs du brouillon pour **Lochtonial Caress**, **Duality** et **Ingenuity**, ainsi que du chemin de base des **Daggerfoot Shoes**.
- Correction des identifiants d’icônes de **Charged Mark, Mark for Death II, Innervate, Overabundance II, Stun III et Cooldown Recovery II**.
- Les Lineage Supports **Vorana's Siege, Her Declaration, Seraph's Heart** utilisent leur image de gemme PoE2DB exacte.
- `Elemental Focus II` reste affiché tel qu’il existe dans le build actuel, mais PoE2DB courant liste **Elemental Focus** sans `II` : le visuel emploie l’icône actuelle d’Elemental Focus et le nom reste en audit séparé.
- La mise en forme générale reste inchangée : la couche `poe2db-visuals.*` est additive.
