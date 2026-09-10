# HOLLOW DOMINION — Live Build App

Application statique de travail pour **HOLLOW DOMINION** — Path of Exile 2 **0.5.2**, Monk — Martial Artist.

Dernière synchronisation documentaire : **2026-09-10 — live-1.16-reference-sync**.

## Source de vérité / priorité

1. `../reference/HOLLOW_DOMINION_MASTER_CONTEXT.md` — décisions verrouillées et état courant.
2. `../reference/HOLLOW_DOMINION_reference.build` — allocations exactes.
3. `../../Skill Trees/0.5.2/data.json` — arbre structurel, coordonnées, connexions et stats passives.
4. `../reference/HOLLOW_DOMINION_identification_120_default_8_ascendancy.md` — mapping validé 120 + 8.
5. `build-data.js` — état numérique de travail actuel du gear, des skills/supports et des priorités.
6. `calculations.js` et `tree-state.js` — calculs et agrégats programmables.

En cas de contradiction, le MASTER CONTEXT prévaut sur toute ancienne documentation du live build.

## État actuel verrouillé

- **Quarterstaff**, jamais Hollow Palm.
- **Fists of Stone / Way of the Stonefist** obligatoire.
- Boss DPS : **Hollow Form → Whirling Assault**.
- Clear / premier Freeze : **Shattering Palm**.
- Lightning / Shock : **Charged Staff**.
- Défense : **Evasion + Energy Shield**.
- **Spirit Vessel exclu**.
- **Convalescence exclue**.
- **Vitality II supprimée** de Charge Regulation.

## Compétences / supports

- Hollow Form → Whirling Assault : **Heavy Swing • Heightened Charges • Blindside • Vorana's Siege**.
- Shattering Palm : **Rapid Attacks II • Magnified Area II • Elemental Armament II • Rising Tempest • Ice Bite II**. `Ancestral Call II` = clear swap facultatif.
- Freezing Mark : **Eternal Mark • Prolonged Duration II • Charged Mark • Mark for Death II**. Cinquième slot libre. `Biting Frost II` exclu.
- Charged Staff : **Blind II • Perpetual Charge • Prolonged Duration II • Elemental Armament II • Innervate**.
- Hollow Focus : Cooldown Recovery II, Overabundance II, Magnified Area II, Close Combat II, Heft. `Overabundance II` = AUDIT.
- Hollow Resonance : Stun III, Cooldown Recovery II, Close Combat II, Magnified Area II, Pinpoint Critical. `Pinpoint Critical` = AUDIT.
- Tempest Bell : Heavy Swing, Close Combat II, Ancestral Call II, Overabundance II, Rage III. `Rage III` = AUDIT ; Magnified Area II alternative.
- Charge Regulation : **Clarity II • Precision II**, réservation de travail **70 Spirit**.
- Wind Dancer : **Maim • Blind II • Rage II — VERROUILLÉS**, réservation de travail **33 Spirit**. `Pin I` et `Lockdown` exclus ; Her Declaration / Seraph's Heart optionnels.
- Elemental Conflux : optionnel / inactif, 60 Spirit. `Elemental Focus II` reste en **AUDIT** de nomenclature.

## Freeze boss

Direction mécanique retenue : **Freezing Mark + Ice Bite II**.

Rotation de test : **Freezing Mark → ~4 Shattering Palm → premier Freeze → Tempest Bell → Hollow Form**.

Statut : **PARTIELLEMENT RÉSOLU / EN TEST**. Il reste à confirmer que les buffs Cold permettent à Hollow Form / Whirling Assault de poursuivre l’accumulation de Gel après le premier Freeze.

## Mana / Spirit / défense

### Mana
Priorité n°1. Test bêta : **624 Mana**, Hollow Form affiché à **126 Mana**, regen **67.2 Mana/s**, Mana vide en ~5 s sans flacon et ~7 s avec Lavianga. Direction : **Mana Regeneration Rate + flacon**, sans réduire l’Attack Speed tant qu’une solution de sustain reste possible.

### Spirit
- Charge Regulation : 70
- Wind Dancer : 33
- Total actif : **103 / 226**
- Libre : **123 Spirit**
- Elemental Conflux inactif
- Le **+61 Spirit** du torse est candidat au remplacement.

### Défense
Préserver **Evasion + Energy Shield**. Faiblesse principale à surveiller : **gros hits physiques / slams**.

## Priorités live actuelles

1. **Sustain Mana**.
2. **Valider le moteur Freeze Freezing Mark + Ice Bite II → Hollow Form**.
3. **Préserver Evasion + ES / surveiller les gros hits physiques**.
4. **Seulement ensuite** reprendre critique et affixes offensifs.
5. Finaliser les audits de supports et de légalité des affixes.

## Visuels intégrés

- **9 équipements**, **10 compétences** et **31 supports** couverts par l’audit PoE2DB.
- Les supports sont affichés sans numérotation avec une petite icône à gauche.
- Les transparences natives sont conservées.
- Les Lineage Supports utilisent leur image de gemme officielle lorsque nécessaire.
- Les anciens SVG/sprites sont uniquement des fallbacks/rollbacks.

Référence canonique : `../reference/HOLLOW_DOMINION_PoE2DB_visual_audit_FINAL_20260910.md`.

**Règle permanente :** toute modification d’un équipement, skill ou support doit entraîner la vérification de son visuel PoE2DB puis la synchronisation du live build et du registre de références si nécessaire.

## Fichiers du live build

- `index.html` — interface.
- `build-data.js` — données de travail.
- `calculations.js` — calculs du personnage.
- `tree-state.js` — agrégats de l’arbre.
- `app.js` — logique de rendu/édition.
- `style.css` — styles principaux.
- `poe2db-visuals.js` / `poe2db-visuals.css` — couche visuelle PoE2DB.
- `visual-manifest.json` — manifeste visuel.

## Politique de synchronisation

Toute décision verrouillée affectant le live build doit mettre à jour les fichiers concernés **dans la même séquence de travail**, puis le contenu publié sur la branche `hollow-dominion-live` doit être relu/vérifié avant de considérer la synchronisation terminée.

Les anciens changelogs live-1.7 à live-1.15 restent disponibles dans l’historique Git ; ce README décrit uniquement **l’état courant** afin d’éviter qu’une correction ancienne soit prise pour une configuration active.
