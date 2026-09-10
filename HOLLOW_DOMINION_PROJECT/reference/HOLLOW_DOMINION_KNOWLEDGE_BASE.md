# HOLLOW DOMINION — KNOWLEDGE BASE

> Référence secondaire synchronisée avec `HOLLOW_DOMINION_MASTER_CONTEXT.md`.  
> Path of Exile 2 **0.5.2** • Monk / Martial Artist / Quarterstaff • HOLLOW DOMINION by Nejib.  
> Synchronisation : **2026-09-10 — identité Cold/Lightning + Freeze boss quasi instantané verrouillée ; Hollow Resonance encore non testé**.

## Source precedence

1. `HOLLOW_DOMINION_MASTER_CONTEXT.md` — décisions verrouillées et état courant.
2. `HOLLOW_DOMINION_reference.build` — allocations exactes.
3. `Skill Trees/0.5.2/data.json` — topologie, IDs, stats et connexions.
4. `HOLLOW_DOMINION_identification_120_default_8_ascendancy.md` — mapping 120 + 8.
5. Cette Knowledge Base et `HOLLOW_DOMINION_REASONING_INDEX.json` — index secondaires uniquement.
6. Références visuelles approuvées — contrôle/présentation, jamais vérité mécanique supérieure.

## Identité verrouillée

- **Quarterstaff**, jamais Hollow Palm.
- **Fists of Stone / Way of the Stonefist** obligatoire.
- Hollow Form → Whirling Assault = boss DPS principal.
- Shattering Palm = clear principal / Cold / overkill.
- Charged Staff = Lightning / Shock / contrôle.
- Défense = Evasion + Energy Shield.
- Attack Speed >>> Cast Speed.

### Piliers identitaires non négociables

- **Freeze / frigorification boss quasi instantané** : le premier Freeze doit arriver assez vite pour faire partie de l’ouverture réelle du combat.
- **Cold + Lightning réellement jouables ensemble** : Charged Staff doit être activable/maintenable de manière fiable avec l’économie de Power Charges.
- Ne pas réduire cette identité à un simple build physique avec un peu de Cold/Lightning théorique.

### Forces déjà validées à préserver

- **Très bons dégâts.**
- **Très bon clearing.**
- **Survivabilité clearing quasi parfaite** hors faute grave.
- **Très bon stun boss.**
- Mana sustain résolu.

La phase d’optimisation doit corriger Freeze + Lightning sans reconstruire inutilement une base qui fonctionne déjà très bien.

## Bêta non-BiS / modèle final BiS

Le personnage joué sert à valider les interactions et les seuils suffisants. Ses rolls ne sont pas des cibles finales automatiques. Le build final doit utiliser les **meilleurs affixes, tiers et rolls légalement disponibles en 0.5.2 sur chaque base finale**, après audit du pool réel. Un affixe non validé reste `AUDIT`.

## Arbre

- 120 passifs principaux + 8 Martial Artist.
- `AscendancyMonk1Start` non compté.
- +179% Evasion, +179% ES, +14% Attack Speed, +19% Skill Speed, +48% Mana Regeneration Rate, 33% Evasion as Deflection.
- +75% increased Freeze Buildup.
- Topologie toujours issue de `data.json`; jamais de reconstruction générative.

## Skills/supports actuels

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

- **Power Charges / Charged Staff — OUVERT / PRIORITÉ IDENTITÉ :** Hollow Form génère les Power Charges mais les consomme presque immédiatement ; Charged Staff est trop difficile à activer/maintenir et la couche Lightning est trop lourde à setup.
- **Freeze boss — OUVERT / PRIORITÉ IDENTITÉ :** frigorification encore beaucoup trop lente malgré +75% Freeze Buildup et Freezing Mark + Ice Bite II. Objectif verrouillé : Freeze quasi instantané / ouverture de combat.
- **Durée des charges — OUVERT :** une légère hausse pourrait améliorer Charge Regulation et Charged Staff.
- **Shattering Palm / overkill — OUVERT / DÉPENDANT :** clear bon, overkill perfectible, mais ne pas accuser Rising Tempest avant d’avoir corrigé/validé Charged Staff puis retesté le clear avec Lightning réellement actif.
- **Survivabilité clearing — VALIDÉE :** aucune mort hors faute grave ; préserver Evasion + ES + Wind Dancer.
- **Stun boss — VALIDÉ :** très bon actuellement ; préserver ce niveau de contrôle.
- **Dégâts / clear — VALIDÉS :** très bons actuellement ; ne pas casser cette base pour un gain théorique marginal.
- **Critique — AUDIT :** feedback visuel insuffisant ; décider via calcul du taux réel et du gain marginal.

## Ordre de diagnostic verrouillé pendant la bêta

1. **Débloquer et tester Hollow Resonance.**
2. Réévaluer Power Charges / Charged Staff — premier axe structurel si le problème persiste.
3. Réévaluer Freeze boss — objectif identitaire : quasi instantané.
4. Réévaluer durée/conservation des charges / Charge Regulation.
5. Retester Shattering Palm / overkill avec setup complet ; Rising Tempest seulement si le problème persiste.
6. Audit critique.

## Gear / Spirit

Ingenuity = cible BiS de travail (+30% gauche / +30% droite dans le modèle, floor-per-mod). Duality = Quarterstaff endgame de travail. +30% Attack Speed Bague Topaze = AUDIT/inactif. Spirit actif 103 ; total modélisé 226 ; +61 Spirit du torse candidat au remplacement. Working defense ~7168 ES / ~7159 Evasion / ~2362 Deflection.

## Visuels / maintenance

PoE2DB est la source visuelle active ; audit canonique `HOLLOW_DOMINION_PoE2DB_visual_audit_FINAL_20260910.md`. Toute modification significative synchronise Master Context, Knowledge Base, Reasoning Index et fichiers live/documentaires affectés. Pendant l’inventaire bêta, enregistrer les observations sans modifier prématurément les mécaniques.
