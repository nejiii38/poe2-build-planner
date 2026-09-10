# HOLLOW DOMINION — KNOWLEDGE BASE

> Référence secondaire synchronisée avec `HOLLOW_DOMINION_MASTER_CONTEXT.md`.  
> Path of Exile 2 **0.5.2** • Monk / Martial Artist / Quarterstaff • HOLLOW DOMINION by Nejib.  
> Synchronisation : **2026-09-10 — inventaire bêta gameplay**.

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
- Shattering Palm = sort principal de clearing + setup Freeze court.
- Charged Staff = couche Lightning / Shock / contrôle.
- Défense = Evasion + Energy Shield.
- Attack Speed >>> Cast Speed.

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
- Hollow Focus : Cooldown Recovery II, Overabundance II, Magnified Area II, Close Combat II, Heft ; Overabundance II = AUDIT.
- Hollow Resonance : Stun III, Cooldown Recovery II, Close Combat II, Magnified Area II, Pinpoint Critical ; Pinpoint Critical = AUDIT.
- Tempest Bell : Heavy Swing, Close Combat II, Ancestral Call II, Overabundance II, Rage III ; Rage III = AUDIT.
- Charge Regulation : Clarity II + Precision II ; 70 Spirit ; Vitality II exclue.
- Wind Dancer : Maim + Blind II + Rage II verrouillés ; 33 Spirit ; Pin I/Lockdown exclus.
- Spirit Vessel et Convalescence exclus. Elemental Conflux optionnel/inactif.

## Mana — RÉSOLU / VALIDÉ EN JEU

Baseline avant correction : 624 Mana, Hollow Form 126 Mana, regen 67.2 Mana/s, ~5 s avant vide sans flacon, ~7 s avec Lavianga.

Solution bêta validée le 2026-09-10 : **+63% Mana Regeneration Rate sur un anneau +68% sur l’autre, Ingenuity équipée**. Résultat utilisateur : plus aucun problème de Mana. Les 63/68 sont une baseline expérimentale suffisante, pas les rolls BiS finaux.

## Inventaire bêta actif — 2026-09-10

### Freeze boss — OUVERT / EN TEST

La frigorification reste **beaucoup trop lente** malgré +75% Freeze Buildup et la direction actuelle Freezing Mark + Ice Bite II. La solution actuelle est insuffisante en pratique. Shattering Palm doit rester un setup court ; l’objectif est de rendre le premier Freeze plus rapide et/ou de faire contribuer Hollow Form de façon fiable.

### Power Charges / Charged Staff — OUVERT

Hollow Form est observé comme source principale de Power Charges mais les consomme presque immédiatement. Charged Staff devient trop difficile à activer/maintenir, ce qui rend la couche Lightning/Shock trop lourde à setup. Traiter d’abord l’économie/disponibilité des charges avant de décider de conserver ou réduire la couche Lightning.

### Durée des charges / Charge Regulation — OUVERT

Un léger allongement de durée/conservation est souhaité pour profiter plus longtemps des bonus de Charge Regulation et potentiellement améliorer la fenêtre Charged Staff. Aucune solution n’est verrouillée.

### Shattering Palm / Rising Tempest — OUVERT

Le clear est déjà bon mais l’overkill peut être amélioré. **Rising Tempest est seulement un suspect** : son apport de dégâts paraît insuffisant pour le clearing. Comparer à des alternatives avant toute suppression.

### Survivabilité clearing — VALIDÉE

Malgré l’exposition de Shattering Palm, aucune mort hors faute grave de gameplay. La couche **Evasion + ES + Wind Dancer** est une réussite et doit être préservée ; ne pas la sacrifier pour un gain offensif marginal.

### Critique — AUDIT

Les critiques ne sont pas distinguables visuellement en jeu. La décision d’augmenter ou non le critique doit venir d’un calcul du taux réel et du gain DPS marginal, pas de l’impression visuelle.

## Priorités provisoires

1. Freeze boss.
2. Économie Power Charges / Charged Staff.
3. Shattering Palm / overkill / Rising Tempest.
4. Durée des charges / Charge Regulation.
5. Audit critique.

À préserver : **Mana résolu** et **survivabilité clearing validée**. Le classement final sera refait une fois l’inventaire bêta terminé.

## Gear / Spirit

- Ingenuity = cible BiS de travail, +30% gauche / +30% droite dans le modèle, `floor-per-mod`.
- Duality = cible Quarterstaff endgame de travail ; variante 15% base crit à comparer plus tard.
- +30% Attack Speed sur Bague Topaze = AUDIT/inactif.
- Spirit actif : 103 ; total modèle 226 ; libre 123. Le +61 Spirit du torse reste candidat au remplacement.
- Working defense model : ~7168 ES / ~7159 Evasion / ~2362 Deflection.

## Visuels

PoE2DB est la source visuelle active. Audit canonique : `HOLLOW_DOMINION_PoE2DB_visual_audit_FINAL_20260910.md` ; 9 équipements, 10 skills, 31 supports couverts. Les anciens SVG/sprites sont rollback uniquement. `Elemental Focus II` reste AUDIT.

## Maintenance

Toute nouvelle problématique ou résolution significative met à jour le Master Context, cette Knowledge Base, le Reasoning Index et les fichiers live/documentaires réellement affectés. Les mesures bêta restent distinctes des projections BiS. Après toute synchronisation, vérifier la branche `hollow-dominion-live`. Pendant l’inventaire actuel, enregistrer les observations **sans modifier prématurément les mécaniques du build**.