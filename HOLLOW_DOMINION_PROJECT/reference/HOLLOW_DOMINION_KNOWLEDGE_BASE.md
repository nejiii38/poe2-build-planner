# HOLLOW DOMINION — KNOWLEDGE BASE

> Référence secondaire. Le `HOLLOW_DOMINION_MASTER_CONTEXT.md` prévaut toujours.  
> PoE2 **0.5.2** • Monk / Martial Artist / Quarterstaff • by Nejib.  
> Sync : **2026-09-10 — Hollow Resonance non encore testé**.

## Sources

1. `HOLLOW_DOMINION_MASTER_CONTEXT.md` — autorité opérationnelle.
2. `HOLLOW_DOMINION_reference.build` — allocations exactes.
3. `Skill Trees/0.5.2/data.json` — topologie réelle.
4. `HOLLOW_DOMINION_identification_120_default_8_ascendancy.md` — mapping 120+8.
5. `HOLLOW_DOMINION_REASONING_INDEX.json` — index secondaire.

## Identité

Quarterstaff uniquement. Fists of Stone / Way of the Stonefist obligatoire. Hollow Form → Whirling Assault = boss DPS. Shattering Palm = clear principal / Cold / overkill. Charged Staff = Lightning / Shock / contrôle. Défense = Evasion + ES. Attack Speed >>> Cast Speed.

## Bêta vs BiS

La bêta actuelle est **non-BiS** et sert à valider le comportement. Les rolls bêta sont des mesures expérimentales. Le modèle final utilise les **meilleurs affixes / tiers / rolls légaux 0.5.2** après audit du pool réel ; un affixe non validé reste `AUDIT`.

## Arbre

120 principaux + 8 Martial Artist. +179% Evasion, +179% ES, +14% Attack Speed, +19% Skill Speed, +48% Mana Regen Rate, 33% Evasion as Deflection, +75% Freeze Buildup. Topologie uniquement depuis `data.json`, jamais générée.

## Setup actuel

- Hollow Form → Whirling Assault : Heavy Swing, Heightened Charges, Blindside, Vorana's Siege.
- Shattering Palm : Rapid Attacks II, Magnified Area II, Elemental Armament II, Rising Tempest, Ice Bite II ; Ancestral Call II = clear swap.
- Freezing Mark : Eternal Mark, Prolonged Duration II, Charged Mark, Mark for Death II ; 5e slot libre ; Biting Frost II exclu.
- Charged Staff : Blind II, Perpetual Charge, Prolonged Duration II, Elemental Armament II, Innervate.
- Hollow Resonance : Stun III, Cooldown Recovery II, Close Combat II, Magnified Area II, Pinpoint Critical ; Pinpoint Critical = AUDIT.
- Charge Regulation : Clarity II + Precision II, 70 Spirit ; Vitality II exclue.
- Wind Dancer : Maim + Blind II + Rage II verrouillés, 33 Spirit.
- Spirit Vessel / Convalescence exclus. Elemental Conflux optionnel/inactif.

## Mana — RÉSOLU / VALIDÉ EN JEU

Baseline avant correction : 624 Mana, Hollow Form 126 Mana, regen 67.2 Mana/s, vide ~5 s sans flacon / ~7 s avec Lavianga.

Solution bêta : **+63% et +68% Mana Regeneration Rate sur les deux anneaux + Ingenuity**. Résultat : plus aucun problème de Mana. Ces rolls sont une baseline suffisante, pas les rolls BiS finaux.

## Baseline bêta pré-Hollow Resonance

**Hollow Resonance n’est pas encore acquis ni testé en jeu.** Les problèmes ci-dessous ont donc tous été observés **sans Hollow Resonance** et doivent être réévalués après son déblocage.

- **Power Charges / Charged Staff — OUVERT :** Hollow Form génère les Power Charges mais les consomme presque immédiatement ; Charged Staff est trop difficile à activer/maintenir et la couche Lightning est trop lourde à setup.
- **Freeze boss — OUVERT / EN TEST :** frigorification encore beaucoup trop lente malgré +75% Freeze Buildup et Freezing Mark + Ice Bite II.
- **Durée des charges — OUVERT :** une légère hausse pourrait améliorer Charge Regulation et Charged Staff.
- **Shattering Palm / overkill — OUVERT / DÉPENDANT :** clear bon, overkill perfectible, mais ne pas accuser Rising Tempest avant d’avoir corrigé/validé Charged Staff puis retesté le clear avec Lightning réellement actif.
- **Survivabilité clearing — VALIDÉE :** aucune mort hors faute grave ; préserver Evasion + ES + Wind Dancer.
- **Critique — AUDIT :** feedback visuel insuffisant ; décider via calcul du taux réel et du gain marginal.

## Ordre de diagnostic verrouillé pendant la bêta

1. **Débloquer et tester Hollow Resonance.**
2. Réévaluer Power Charges / Charged Staff.
3. Réévaluer Freeze boss.
4. Réévaluer durée/conservation des charges / Charge Regulation.
5. Retester Shattering Palm / overkill avec setup complet ; Rising Tempest seulement si le problème persiste.
6. Audit critique.

À préserver : **Mana résolu** et **survivabilité clearing validée**.

## Gear / Spirit

Ingenuity = cible BiS de travail (+30% gauche / +30% droite dans le modèle, floor-per-mod). Duality = Quarterstaff endgame de travail. +30% Attack Speed Bague Topaze = AUDIT/inactif. Spirit actif 103 ; total modélisé 226 ; +61 Spirit du torse candidat au remplacement. Working defense ~7168 ES / 7159 Evasion / 2362 Deflection.

## Visuels / maintenance

PoE2DB est la source visuelle active ; audit canonique `HOLLOW_DOMINION_PoE2DB_visual_audit_FINAL_20260910.md`. Toute modification significative synchronise Master Context, Knowledge Base, Reasoning Index et fichiers live/documentaires affectés. Pendant l’inventaire bêta, enregistrer les observations sans modifier prématurément les mécaniques.