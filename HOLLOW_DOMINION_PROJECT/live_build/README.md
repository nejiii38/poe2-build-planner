# HOLLOW DOMINION — Live Build App

Application statique de travail pour **HOLLOW DOMINION** — Path of Exile 2 **0.5.2**, Monk — Martial Artist.

Dernière synchronisation : **2026-09-10 — live-1.19-identity-pillars**.

## Source de vérité

1. `../reference/HOLLOW_DOMINION_MASTER_CONTEXT.md` — décisions verrouillées et état courant.
2. `../reference/HOLLOW_DOMINION_reference.build` — allocations exactes.
3. `../../Skill Trees/0.5.2/data.json` — topologie, coordonnées, connexions et stats passives.
4. `../reference/HOLLOW_DOMINION_identification_120_default_8_ascendancy.md` — mapping 120 + 8.
5. `build-data.js` — état numérique et expérimental courant.

## Identité verrouillée

- Quarterstaff ; jamais Hollow Palm.
- Hollow Form → Whirling Assault = DPS boss principal.
- Shattering Palm = clear principal / Cold / overkill.
- Charged Staff = Lightning / Shock / contrôle.
- **Freeze/frigorification boss quasi instantané** = objectif identitaire non négociable.
- **Cold + Lightning doivent être réellement jouables ensemble** ; Charged Staff ne peut pas rester une couche théorique bloquée par l’économie des Power Charges.

## Forces déjà validées à préserver

- Très bons dégâts.
- Très bon clearing.
- Survivabilité clearing quasi parfaite hors faute grave.
- Très bon stun boss.
- Mana sustain résolu.

L’optimisation ne consiste donc pas à reconstruire le build depuis zéro. Elle doit restaurer pleinement l’identité Freeze + Cold/Lightning sans sacrifier inutilement ces acquis.

## État bêta actuel

La bêta est non-BiS. Les rolls ingame servent de mesures expérimentales ; le stuff final utilisera les meilleurs affixes/tiers/rolls légaux 0.5.2 après audit.

Mana : résolu avec **+63% et +68% Mana Regeneration Rate sur les anneaux + Ingenuity**. Ces valeurs sont une baseline suffisante, pas les rolls BiS finaux.

**Hollow Resonance n’est pas encore acquis/testé sur la bêta.** Tous les problèmes actuels sont donc une baseline pré-Hollow Resonance et aucune correction structurelle définitive ne doit être verrouillée avant ce test.

## Problèmes actifs / ordre de diagnostic

1. Débloquer et tester Hollow Resonance.
2. Réévaluer **Power Charges / Charged Staff** ; si le problème persiste, rendre Charged Staff fiable en priorité.
3. Réévaluer **Freeze boss** ; cible : frigorification / premier Freeze quasi instantané dans l’ouverture.
4. Réévaluer la durée/conservation des charges / Charge Regulation.
5. Retester Shattering Palm / overkill avec Charged Staff réellement actif ; Rising Tempest seulement ensuite si nécessaire.
6. Auditer le critique via taux réel et gain marginal.

## Setup courant

- Hollow Form → Whirling Assault : Heavy Swing • Heightened Charges • Blindside • Vorana's Siege.
- Shattering Palm : Rapid Attacks II • Magnified Area II • Elemental Armament II • Rising Tempest • Ice Bite II ; Ancestral Call II = clear swap.
- Freezing Mark : Eternal Mark • Prolonged Duration II • Charged Mark • Mark for Death II ; 5e slot libre ; Biting Frost II exclu.
- Charged Staff : Blind II • Perpetual Charge • Prolonged Duration II • Elemental Armament II • Innervate.
- Hollow Resonance : Stun III • Cooldown Recovery II • Close Combat II • Magnified Area II • Pinpoint Critical ; Pinpoint Critical = AUDIT.
- Charge Regulation : Clarity II • Precision II ; 70 Spirit ; Vitality II exclue.
- Wind Dancer : Maim • Blind II • Rage II verrouillés ; 33 Spirit.
- Spirit Vessel / Convalescence exclus. Elemental Conflux optionnel/inactif.

## Défense / Spirit

- Evasion + Energy Shield à préserver.
- Modèle de travail : ~7168 ES / ~7159 Evasion / ~2362 Deflection.
- Spirit actif : 103 / 226 ; 123 libres. Le +61 Spirit du torse reste candidat au remplacement.

## Politique de synchronisation

Toute décision verrouillée affectant le live build doit mettre à jour dans la même séquence le Master Context et les fichiers dépendants concernés. Après écriture, relire la branche `hollow-dominion-live` avant de considérer la synchronisation terminée.

PoE2DB reste la source visuelle de référence ; aucune modification visuelle n’est requise pour cette mise à jour d’identité, car aucun item/skill/support n’a été remplacé.
