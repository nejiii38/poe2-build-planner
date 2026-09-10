# HOLLOW DOMINION — Project Archive

Dossier de référence persistant pour **HOLLOW DOMINION** — Path of Exile 2, version **0.5.2**.

## Règle de travail

Toute reprise du projet doit commencer par `reference/HOLLOW_DOMINION_MASTER_CONTEXT.md`. Ce fichier est l’autorité opérationnelle prioritaire ; toute décision verrouillée qu’il contient prévaut sur les anciens documents, posters, prototypes et descriptions historiques.

À chaque nouvelle référence ou modification significative :

1. mettre à jour le MASTER CONTEXT et son registre de sources ;
2. synchroniser les fichiers secondaires concernés ;
3. placer chaque référence active dans son emplacement GitHub canonique ;
4. vérifier le contenu réellement publié sur la branche `hollow-dominion-live`.

## Ordre de priorité des sources

1. `reference/HOLLOW_DOMINION_MASTER_CONTEXT.md` — décisions verrouillées et état courant.
2. `reference/HOLLOW_DOMINION_reference.build` — allocations exactes de l’arbre.
3. `../Skill Trees/0.5.2/data.json` — IDs, stats, coordonnées, groupes et connexions réelles.
4. `reference/HOLLOW_DOMINION_identification_120_default_8_ascendancy.md` — mapping validé 120 + 8.
5. `reference/HOLLOW_DOMINION_KNOWLEDGE_BASE.md` et `reference/HOLLOW_DOMINION_REASONING_INDEX.json` — index secondaires synchronisés.
6. Références techniques/visuelles approuvées — présentation et contrôle seulement.

## Références actives

### `reference/`
- `HOLLOW_DOMINION_MASTER_CONTEXT.md`
- `HOLLOW_DOMINION_reference.build`
- `HOLLOW_DOMINION_identification_120_default_8_ascendancy.md`
- `HOLLOW_DOMINION_KNOWLEDGE_BASE.md`
- `HOLLOW_DOMINION_REASONING_INDEX.json`
- `HOLLOW_DOMINION_PoE2DB_visual_audit_FINAL_20260910.md`

### `images/`
- `passive_tree_master.webp`

### `live_build/`
- `build-data.js`
- `tree-state.js`
- `calculations.js`
- `app.js`
- `index.html`
- `style.css`
- `poe2db-visuals.js`
- `poe2db-visuals.css`
- `visual-manifest.json`
- `README.md`

### Source topologique canonique
- `../Skill Trees/0.5.2/data.json`

## Identité verrouillée du build

- **HOLLOW DOMINION — by Nejib**
- **Monk — Martial Artist — Quarterstaff**
- **Fists of Stone / Way of the Stonefist** obligatoire
- Boss DPS : **Hollow Form → Whirling Assault**
- Clear / premier Freeze : **Shattering Palm**
- Lightning / Shock : **Charged Staff**
- Défense : **Evasion + Energy Shield**
- Hollow Palm : **exclu**
- Spirit Vessel : **exclu**
- Convalescence : **exclu**

## Arbre passif

- **120/120** passifs principaux.
- **8/8** passifs Martial Artist dépensés.
- `AscendancyMonk1Start` est uniquement l’origine graphique.
- Ne pas afficher ni commenter les Weapon Sets dans le visuel final.
- Toute reconstruction de la topologie doit être déterministe depuis `Skill Trees/0.5.2/data.json`.
- **Interdiction d’utiliser un générateur d’images pour reconstruire la topologie technique de l’arbre.**

## Compétences / état courant

- Hollow Form → Whirling Assault : Heavy Swing, Heightened Charges, Blindside, Vorana’s Siege.
- Shattering Palm : Rapid Attacks II, Magnified Area II, Elemental Armament II, Rising Tempest, **Ice Bite II** ; Ancestral Call II = clear swap.
- Freezing Mark : **Eternal Mark, Prolonged Duration II, Charged Mark, Mark for Death II** ; 5e slot libre.
- Charge Regulation : **Clarity II + Precision II** ; Vitality II supprimée.
- Wind Dancer : **Maim + Blind II + Rage II** verrouillés.
- `Biting Frost II`, `Pin I` et `Lockdown` sont exclus dans leurs setups concernés.
- Elemental Conflux reste optionnel / inactif.

## Priorités actuelles

1. **Sustain Mana**.
2. Valider en jeu **Freezing Mark + Ice Bite II → Hollow Form** pour le Freeze boss.
3. Préserver Evasion + ES et surveiller les gros hits physiques.
4. Ensuite seulement reprendre critique et affixes offensifs.

## Politique visuelle

**PoE2DB** est la source visuelle de référence pour les équipements, compétences et supports du live build. L’audit canonique est `reference/HOLLOW_DOMINION_PoE2DB_visual_audit_FINAL_20260910.md`.

Les anciens posters, anciens arbres générés, anciens `.build` Hollow Palm, anciennes versions du Master Context et workspaces HTML sont **historiques / non autoritatifs**.

Pour toute décision détaillée ou valeur en conflit, revenir au MASTER CONTEXT puis aux sources techniques selon l’ordre ci-dessus.
