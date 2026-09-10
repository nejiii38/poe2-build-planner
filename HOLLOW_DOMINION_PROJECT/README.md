# HOLLOW DOMINION — Project Archive

Dossier de référence persistant pour **HOLLOW DOMINION** — Path of Exile 2 **0.5.2**.

## Règle de travail

Toute reprise du projet commence par `reference/HOLLOW_DOMINION_MASTER_CONTEXT.md`. Il s’agit de l’autorité opérationnelle prioritaire.

## Identité du build — VERROUILLÉE

- Monk — Martial Artist — Quarterstaff.
- Fists of Stone / Way of the Stonefist obligatoire.
- Hollow Form → Whirling Assault = DPS boss principal.
- Shattering Palm = clearing principal / Cold / overkill.
- Charged Staff = Lightning / Shock / contrôle.
- **Frigorification / Freeze boss quasi instantané** = pilier identitaire.
- **Cold + Lightning réellement jouables ensemble** = pilier identitaire ; Charged Staff doit être fiable en pratique.

### Forces déjà validées à préserver

- Très bons dégâts.
- Très bon clearing.
- Survivabilité clearing quasi parfaite hors faute grave.
- Très bon stun boss.
- Mana sustain résolu.

La phase d’optimisation vise donc à corriger l’accès réel à Lightning et la vitesse de Freeze des boss **sans dégrader inutilement cette base déjà très performante**.

## État bêta

La bêta est non-BiS. Les rolls ingame sont des mesures expérimentales ; le stuff final doit utiliser les meilleurs affixes/tiers/rolls légaux 0.5.2 après audit.

Mana validé en jeu : +63% et +68% Mana Regeneration Rate sur les anneaux avec Ingenuity ; baseline suffisante, non cible BiS automatique.

**Hollow Resonance n’est pas encore acquis/testé** sur la bêta. Les constats actuels sur Freeze, Power Charges / Charged Staff, durée des charges, Shattering Palm et critique sont donc une baseline pré-Hollow Resonance.

## Ordre de diagnostic actuel

1. Tester Hollow Resonance.
2. Réévaluer Power Charges / Charged Staff.
3. Réévaluer le Freeze boss vers l’objectif quasi instantané.
4. Réévaluer durée/conservation des charges.
5. Retester Shattering Palm / overkill ; Rising Tempest seulement ensuite si nécessaire.
6. Auditer le critique.

## Sources actives

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

### Source topologique
- `../Skill Trees/0.5.2/data.json`

## Arbre

- 120/120 passifs principaux + 8/8 Martial Artist.
- `AscendancyMonk1Start` = origine graphique uniquement.
- Topologie toujours reconstruite de manière déterministe depuis `Skill Trees/0.5.2/data.json`.
- Ne jamais utiliser une génération d’image pour reconstruire la topologie technique.

## Synchronisation

Toute modification significative doit mettre à jour le Master Context puis les dépendances réellement affectées, et le contenu de la branche `hollow-dominion-live` doit être relu après écriture.

PoE2DB reste la source visuelle de référence pour équipements, skills et supports. Les anciens posters, anciens Master Context, anciens builds Hollow Palm et prototypes restent historiques/non autoritatifs.
