# HOLLOW DOMINION — Live Build App

Application statique de travail pour **HOLLOW DOMINION** — Path of Exile 2 **0.5.2**, Monk — Martial Artist.

Dernière synchronisation : **2026-09-10 — live-1.18-hollow-resonance-test-gate**.

## Source de vérité

1. `../reference/HOLLOW_DOMINION_MASTER_CONTEXT.md`
2. `../reference/HOLLOW_DOMINION_reference.build`
3. `../../Skill Trees/0.5.2/data.json`
4. `../reference/HOLLOW_DOMINION_identification_120_default_8_ascendancy.md`
5. `build-data.js`
6. `calculations.js` / `tree-state.js`

Le MASTER CONTEXT prévaut toujours.

## Identité verrouillée

- Quarterstaff, jamais Hollow Palm.
- Fists of Stone / Way of the Stonefist obligatoire.
- Hollow Form → Whirling Assault = boss DPS principal.
- Shattering Palm = clear principal / Cold / overkill.
- Charged Staff = Lightning / Shock / contrôle.
- Défense = Evasion + Energy Shield.

## Bêta / BiS

La bêta actuelle est **non-BiS**. Elle sert à valider le comportement réel. Les valeurs bêta sont des mesures expérimentales ; le stuff final emploie les **meilleurs affixes / tiers / rolls légaux 0.5.2** après audit.

## Validation actuelle

### Mana — RÉSOLU

Un anneau bêta porte **+63% Mana Regeneration Rate**, l’autre **+68%**, avec **Ingenuity équipée**. Résultat : plus aucun problème de Mana. Ces valeurs sont une baseline suffisante, pas des rolls BiS finaux.

### Survivabilité clear — VALIDÉE

Evasion + ES + Wind Dancer donnent une survivabilité jugée parfaite en clearing hors grosse erreur de gameplay. Cette couche doit être préservée.

## Hollow Resonance — EN ATTENTE DE TEST BÊTA

**Hollow Resonance est prévu dans le build final mais n’est pas encore acquis ni testé sur le personnage bêta.**

Tous les problèmes actifs actuels sont donc une **baseline pré-Hollow Resonance**. Ne pas verrouiller de correction structurelle avant son test.

## Problèmes à réévaluer après Hollow Resonance

- **Power Charges / Charged Staff** : Hollow Form génère principalement les Power Charges mais les consomme presque immédiatement ; Charged Staff est difficile à activer/maintenir.
- **Freeze boss** : encore beaucoup trop lent malgré +75% Freeze Buildup et Freezing Mark + Ice Bite II.
- **Durée des charges** : peut-être légèrement trop courte pour Charge Regulation et Charged Staff.
- **Shattering Palm / overkill** : clear bon mais perfectible ; ne pas auditer Rising Tempest avant d’avoir un Charged Staff fiable et d’avoir retesté le clear avec Lightning réellement actif.
- **Critique** : audit mécanique à faire ; le ressenti visuel ingame ne suffit pas.

## Ordre de diagnostic

1. Débloquer et tester **Hollow Resonance**.
2. Réévaluer **Power Charges / Charged Staff**.
3. Réévaluer **Freeze boss**.
4. Réévaluer **durée des charges / Charge Regulation**.
5. Retester **Shattering Palm / overkill**, puis Rising Tempest seulement si nécessaire.
6. Audit critique.

## Setup skills/supports actuel

- Hollow Form → Whirling Assault : Heavy Swing • Heightened Charges • Blindside • Vorana's Siege.
- Shattering Palm : Rapid Attacks II • Magnified Area II • Elemental Armament II • Rising Tempest • Ice Bite II ; Ancestral Call II = clear swap.
- Freezing Mark : Eternal Mark • Prolonged Duration II • Charged Mark • Mark for Death II ; 5e slot libre ; Biting Frost II exclu.
- Charged Staff : Blind II • Perpetual Charge • Prolonged Duration II • Elemental Armament II • Innervate.
- Hollow Resonance : Stun III • Cooldown Recovery II • Close Combat II • Magnified Area II • Pinpoint Critical ; Pinpoint Critical = AUDIT.
- Charge Regulation : Clarity II • Precision II ; 70 Spirit.
- Wind Dancer : Maim • Blind II • Rage II ; 33 Spirit.
- Spirit Vessel / Convalescence / Vitality II exclus. Elemental Conflux optionnel/inactif.

## Spirit / défense

Réservation active : **103 Spirit**. Modèle total actuel : **226**, soit **123 libres**. Le +61 Spirit du torse reste candidat au remplacement. Modèle défensif actuel : ~7168 ES / ~7159 Evasion / ~2362 Deflection.

## Visuels

PoE2DB est la source visuelle active. Audit canonique : `../reference/HOLLOW_DOMINION_PoE2DB_visual_audit_FINAL_20260910.md`. Toute modification d’item/skill/support implique validation du visuel puis synchronisation.

## Synchronisation

Toute décision verrouillée affectant le live build doit mettre à jour dans la même séquence le MASTER CONTEXT et les fichiers réellement concernés, puis être vérifiée sur la branche `hollow-dominion-live`.