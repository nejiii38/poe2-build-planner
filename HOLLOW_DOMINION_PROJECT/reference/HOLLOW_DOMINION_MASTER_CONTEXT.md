# HOLLOW DOMINION — MASTER CONTEXT

**Path of Exile 2 • version 0.5.2 • Monk — Martial Artist • Quarterstaff • by Nejib**

**Mise à jour opérationnelle : 2026-09-10 — identité du build verrouillée : Freeze boss quasi instantané + hybridation Cold/Lightning, tout en préservant dégâts, clear, survivabilité et stun déjà validés. Hollow Resonance reste à tester en bêta avant toute correction structurelle.**

Ce fichier est la **référence opérationnelle prioritaire** du projet. En cas de contradiction avec une source plus ancienne, toute décision marquée **VERROUILLÉE** ici prévaut.

## 1. Identité mécanique — VERROUILLÉE

- Build : **HOLLOW DOMINION — by Nejib**.
- Classe / Ascendancy : **Monk — Martial Artist**.
- Arme : **Quarterstaff**. Ne jamais réintroduire Hollow Palm depuis d’anciens fichiers/presets.
- **Fists of Stone** via Lochtonial Caress transformé par **Way of the Stonefist** est obligatoire.
- **Hollow Form → Whirling Assault** = source principale de DPS boss.
- **Shattering Palm** = sort principal de clearing, Cold/Freeze et overkill.
- **Charged Staff** = couche Lightning / Shock / contrôle ; cette couche doit être réellement exploitable en jeu, pas seulement correcte sur le papier.
- Défense = **Evasion + Energy Shield**, avec Freeze/Stun comme contrôle.
- Priorité vitesse : **Attack Speed >>> Cast Speed**. Ne pas chercher de Cast Speed sur le gear.
- Noms des supports dans le live build : **anglais**.

### Piliers identitaires non négociables — VERROUILLÉS

1. **Frigorification / Freeze des boss quasi instantanée.**
   - Le build doit être capable d’entrer rapidement dans son cycle de contrôle Cold sur les boss.
   - Un Freeze trop tardif, même avec de bons dégâts, est considéré comme une perte d’identité du build et doit être corrigé.
2. **Hybridation Cold + Lightning réellement jouable.**
   - Le froid ne doit pas être une simple décoration du clear.
   - La foudre ne doit pas être une couche théorique trop difficile à activer.
   - **Charged Staff** doit pouvoir être utilisé de manière fiable avec l’économie de Power Charges du build.
3. **Préserver les forces déjà validées du build actuel.**
   - **Très bons dégâts.**
   - **Très bon clearing.**
   - **Survivabilité quasi parfaite en clearing** hors faute grave de gameplay.
   - **Très bon stun sur les boss.**

### Règle d’optimisation — VERROUILLÉE

- Ne pas dénigrer ni déconstruire le build actuel sous prétexte que le Freeze ou Charged Staff doivent être améliorés : la base fonctionne déjà très bien.
- Toute optimisation doit viser à **corriger les deux piliers identitaires insuffisants — Freeze boss et accès fiable à Lightning — sans sacrifier inutilement les quatre qualités déjà validées**.
- Un gain marginal de DPS n’est pas prioritaire face à une correction qui restaure l’identité Cold/Lightning ou le Freeze boss.
- Une solution qui améliore le Freeze mais détruit le clear, la survivabilité, le stun boss ou le DPS principal doit être considérée comme mauvaise sauf absence d’alternative.

## 2. Bêta ingame ≠ stuff final BiS — VERROUILLÉ

Le personnage actuellement joué est une **version bêta non-BiS** destinée à valider le comportement réel du build, les interactions et les seuils suffisants.

- Les rolls réellement portés en bêta sont conservés comme **mesures expérimentales**.
- Ils ne deviennent jamais automatiquement des valeurs finales.
- Le build final doit utiliser, sur chaque base retenue, les **meilleurs affixes / tiers / rolls légalement disponibles en PoE2 0.5.2**, après validation du pool réel.
- Tout affixe ou tier non confirmé reste **AUDIT**.

## 3. Arbre passif — vérité validée

- **120/120** passifs principaux.
- **8/8** passifs Martial Artist.
- `AscendancyMonk1Start` = origine graphique uniquement, non dépensée.
- Tous les IDs viennent de `Skill Trees/0.5.2/data.json`.
- Mapping exact : `HOLLOW_DOMINION_identification_120_default_8_ascendancy.md`.
- Rendu final : arbre Default unique, Weapon Sets masqués/non commentés.
- Topologie déterministe depuis `data.json` ; **interdiction d’utiliser un générateur d’images pour reconstruire l’arbre**.
- Agrégats live de travail : **+179% Evasion, +179% ES, +14% Attack Speed, +19% Skill Speed, +48% Mana Regeneration Rate, 33% Evasion as Deflection**.
- Freeze : **+75% increased Freeze Buildup** depuis quatre allocations.

### Ascendancy exacte

1. `AscendancyMonk1Small4` — Area of Effect
2. `AscendancyMonk1Small6` — Additional Power Charge Chance
3. `AscendancyMonk1Small3` — Evasion and Energy Shield
4. `AscendancyMonk1Notable3` — Hollow Focus Technique
5. `AscendancyMonk1Notable7` — Hollow Form Technique
6. `AscendancyMonk1Notable8` — Way of the Stonefist
7. `AscendancyMonk1Small5` — Area of Effect
8. `AscendancyMonk1Notable4` — Hollow Resonance Technique

**Way of the Mountain est retiré.**

## 4. Compétences / supports — état de travail

- **Hollow Form → Whirling Assault** : Heavy Swing • Heightened Charges • Blindside • Vorana’s Siege.
- **Shattering Palm** : Rapid Attacks II • Magnified Area II • Elemental Armament II • Rising Tempest • Ice Bite II. `Ancestral Call II` = clear swap facultatif.
- **Freezing Mark** : Eternal Mark • Prolonged Duration II • Charged Mark • Mark for Death II — **VERROUILLÉS**. 5e slot libre. `Biting Frost II` exclu.
- **Charged Staff** : Blind II • Perpetual Charge • Prolonged Duration II • Elemental Armament II • Innervate.
- **Hollow Focus** : Cooldown Recovery II • Overabundance II • Magnified Area II • Close Combat II • Heft. `Overabundance II` = **AUDIT**.
- **Hollow Resonance** : Stun III • Cooldown Recovery II • Close Combat II • Magnified Area II • Pinpoint Critical. `Pinpoint Critical` = **AUDIT**.
- **Tempest Bell** : Heavy Swing • Close Combat II • Ancestral Call II • Overabundance II • Rage III. `Rage III` = **AUDIT** ; Magnified Area II alternative.
- **Charge Regulation** : Clarity II • Precision II. Vitality II définitivement supprimée. Réservation de travail : **70 Spirit**.
- **Wind Dancer** : Maim • Blind II • Rage II — **VERROUILLÉS**. Réservation de travail : **33 Spirit**. `Pin I` et `Lockdown` exclus ; Her Declaration / Seraph’s Heart optionnels.
- **Spirit Vessel** : **EXCLU**.
- **Convalescence** : **EXCLU**.
- **Elemental Conflux** : optionnel / inactif, 60 Spirit. `Elemental Focus II` reste **AUDIT** de nomenclature.

## 5. Défense / Spirit / gear de travail

- Gear final : Evasion + Energy Shield autant que possible.
- Spectral Ward : +1 Maximum ES par 12 Item Evasion sur le Body Armour.
- Modèle actuel : environ **7168 ES / 7159 Evasion / 2362 Deflection** avant conditions supplémentaires.
- ES recharge : 40% faster start permanent +20% sous condition correspondante.
- Spirit actif : Charge Regulation 70 + Wind Dancer 33 = **103 réservés**.
- Total modélisé actuel : **226 Spirit**, donc **123 libres**.
- Sans le +61 Spirit du torse : ~165 total / 103 réservés / **62 libres**. Le +61 Spirit reste candidat au remplacement.
- **Ingenuity** = cible BiS de travail ; modèle +30% bague gauche / +30% bague droite, `floor-per-mod`.
- **Duality Warding Quarterstaff** = cible endgame de travail : base crit 10%, base 1.40 APS, +300% local Physical Damage, +22% local Attack Speed, +30% Critical Damage Bonus, 50 Runic Ward. Variante 15% base crit à comparer plus tard.
- +30% Attack Speed sur la Bague Topaze : **AUDIT / inactif** jusqu’à validation de légalité 0.5.2.

## 6. Mana — RÉSOLU / VALIDÉ EN JEU

### Baseline avant correction — 2026-09-09

- 624 Mana max.
- Hollow Form affiché : 126 Mana.
- Regen affichée : 67.2 Mana/s.
- Vide en ~5 s sans flacon, ~7 s avec Lavianga.
- Estimation empirique : ~192 Mana/s de consommation effective.

### Solution bêta — 2026-09-10

- Anneau 1 : **+63% Mana Regeneration Rate**.
- Anneau 2 : **+68% Mana Regeneration Rate**.
- **Ingenuity équipée**.
- Résultat réel : **plus aucun problème de Mana**.
- Cette solution permet de conserver l’Attack Speed de Hollow Form / Whirling Assault.
- Les 63/68 sont une **baseline bêta suffisante**, pas des rolls BiS finaux. Le stuff final doit employer les meilleurs rolls légaux 0.5.2 compatibles avec le build et maintenir au minimum ce sustain.
- Revalider seulement après changement important de Mana, coût de skill ou Attack Speed.

## 7. Inventaire bêta actuel — observations réelles

### EN ATTENTE DE TEST — Hollow Resonance

- **Hollow Resonance n’est pas encore acquis sur le personnage bêta et n’a jamais été testé en jeu.**
- Tous les retours actuels sur Freeze, Power Charges / Charged Staff, durée des charges, overkill de Shattering Palm et ressenti critique constituent donc une **baseline pré-Hollow Resonance**.
- Hollow Resonance reste prévu dans le build final mais son apport réel est **NON TESTÉ / EN ATTENTE DE VALIDATION BÊTA**.
- Il peut potentiellement modifier le contrôle, le rythme de combat ou la gestion pratique des charges ; **aucune correction structurelle ne doit être verrouillée avant son test**.

### OUVERT / PRIORITÉ IDENTITÉ — Freeze / frigorification boss trop lente

- Le Freeze boss reste **beaucoup trop long** malgré +75% Freeze Buildup.
- Baseline initiale : ~4 Shattering Palm + Tempest Bell + Charged Staff actif, puis Hollow Form ; boss mort avant Freeze, Hollow Form sans contribution visible à la jauge.
- Direction actuelle : **Freezing Mark + Ice Bite II**.
- Rotation de test : Freezing Mark → ~4 Shattering Palm → premier Freeze → Tempest Bell → Hollow Form.
- Retour bêta : la direction actuelle reste **trop lente en pratique**.
- Contrainte verrouillée : Shattering Palm ne doit pas devenir un spam boss permanent ; Hollow Form reste le DPS principal.
- **Critère de réussite : viser une frigorification / un premier Freeze quasi instantané ou suffisamment rapide pour constituer réellement l’ouverture du combat boss.**
- Ce problème est désormais considéré comme un **écart majeur à l’identité du build**, pas comme un simple manque d’optimisation.
- Réévaluer après ajout de Hollow Resonance avant nouvelle correction structurelle.

### OUVERT / PRIORITÉ IDENTITÉ — Power Charges / Charged Staff

- Observation réelle : **Hollow Form est la source principale de génération des Power Charges mais les consomme presque immédiatement**.
- Conséquence : Charged Staff est trop difficile à activer / maintenir.
- Impact : la couche Lightning / Shock construite devient trop lourde à setup en jeu.
- Cette difficulté empêche le build d’exprimer correctement son identité **Cold + Lightning**.
- Ce problème reste mis en attente du test Hollow Resonance, car cette compétence pourrait modifier la dynamique de contrôle/charges.
- **Si le problème persiste après Hollow Resonance, il redevient la première correction structurelle à traiter.**
- Objectif : rendre Charged Staff naturellement disponible dans la rotation sans casser Hollow Form ni supprimer l’intérêt de Charge Regulation.

### OUVERT — durée utile des charges / Charge Regulation

- Les charges pourraient durer **un peu plus longtemps** pour profiter davantage des bonus liés à Charge Regulation.
- Une augmentation modérée de durée/conservation peut également réduire la friction Charged Staff.
- Aucune solution verrouillée ; réévaluer après test Hollow Resonance.

### OUVERT / DÉPENDANT — Shattering Palm / overkill

- Shattering Palm est confirmé comme **sort principal de clearing**.
- Le clear est bon mais l’overkill paraît perfectible.
- **Rising Tempest n’est qu’un suspect secondaire**, pas une cause validée.
- **Dépendance verrouillée : ne pas modifier Rising Tempest avant d’avoir obtenu un Charged Staff fiable et retesté le clear avec la couche Lightning réellement active.**
- Le manque d’overkill actuel peut provenir en partie de l’impossibilité de profiter correctement de Charged Staff.
- Après test Hollow Resonance puis correction/validation Charged Staff, refaire un test de clear. N’auditer Rising Tempest qu’ensuite si le problème persiste.

### VALIDÉ — survivabilité clearing

- Malgré l’exposition de Shattering Palm, **aucune mort hors faute grave de gameplay**.
- La couche **Evasion + ES + Wind Dancer** est validée en clearing et doit être préservée.
- Ne pas sacrifier cette robustesse pour un gain offensif marginal.
- Les gros hits physiques / slams restent seulement un point de vigilance boss/endgame.

### VALIDÉ — stun boss

- Retour bêta : le build possède déjà un **très bon stun sur les boss**.
- Cette qualité fait partie des acquis à préserver pendant l’optimisation du Freeze et de l’économie des charges.
- Ne pas modifier lourdement les éléments de contrôle/stun sans mesurer le coût réel sur cette force déjà validée.

### VALIDÉ — dégâts généraux et clearing

- Retour bêta : les **dégâts généraux sont très bons**.
- Le **clearing est très bon**, même si l’overkill de Shattering Palm peut encore être perfectionné.
- La phase d’optimisation n’a donc pas pour objectif de reconstruire l’offense depuis zéro ; elle doit surtout remettre le Freeze et Lightning au niveau attendu de l’identité du build.

### AUDIT — critique

- Les hits critiques ne sont pas distinguables visuellement de façon fiable en jeu.
- Ne pas conclure à partir du ressenti.
- Décider d’augmenter ou non le critique via audit du taux réel, base crit, multiplicateurs et gain DPS marginal, puis test ciblé si nécessaire.

## 8. Ordre de diagnostic temporaire — VERROUILLÉ

1. **Débloquer et tester Hollow Resonance en jeu.**
2. Réévaluer **Power Charges / Charged Staff** — priorité structurelle Cold/Lightning si le problème persiste.
3. Réévaluer et corriger **Freeze boss** — objectif identitaire : frigorification quasi instantanée.
4. Réévaluer **durée/conservation des charges / Charge Regulation**.
5. Retester **Shattering Palm / overkill** avec setup complet ; auditer Rising Tempest uniquement si le problème persiste.
6. Auditer le **critique** si toujours pertinent.

### Acquis à préserver pendant toutes les étapes

- **Mana : RÉSOLU / VALIDÉ EN JEU.**
- **Dégâts : TRÈS BONS.**
- **Clearing : TRÈS BON.**
- **Survivabilité clearing : QUASI PARFAITE / VALIDÉE.**
- **Stun boss : TRÈS BON / VALIDÉ.**

## 9. Checklist avant build final 100%

- Tester Hollow Resonance en conditions réelles.
- Refaire l’inventaire des symptômes après Hollow Resonance.
- Si nécessaire, corriger l’économie Power Charges / Charged Staff sans casser Hollow Form.
- Obtenir une **frigorification boss quasi instantanée ou réellement immédiate dans la rotation prévue**.
- Conserver une vraie identité **Cold + Lightning**, avec Charged Staff suffisamment fiable pour être utilisé en pratique.
- Auditer une augmentation modérée de durée/conservation des charges.
- Retester Shattering Palm / overkill avec Charged Staff réellement actif ; Rising Tempest ensuite seulement.
- Auditer le critique réel.
- Préserver les très bons dégâts, le très bon clear, la survivabilité quasi parfaite et le très bon stun boss.
- Auditer les meilleurs rolls légaux de Mana Regeneration Rate sur les anneaux finaux ; maintenir au minimum la baseline bêta 63/68 + Ingenuity.
- Auditer le remplacement du +61 Spirit du torse.
- Valider Overabundance II, Pinpoint Critical, Rage III et Elemental Focus II.
- Valider chaque affixe final contre le pool réel 0.5.2.
- Recalculer Spirit, Mana, ES, Evasion, Deflection et toute stat touchée après chaque modification verrouillée.
- Créer le diaporama final seulement après stabilisation complète.

## 10. Protocole automatique de maintenance — VERROUILLÉ

- Toute nouvelle problématique significative de theorycraft ou bêta est ajoutée automatiquement au MASTER CONTEXT.
- Toute problématique résolue conserve cause, solution, impact et statut final.
- Statuts : **OUVERT, EN TEST, PARTIELLEMENT RÉSOLU, RÉSOLU, VERROUILLÉ, AUDIT**.
- Mesures réelles en jeu et projections théoriques restent séparées.
- Une hypothèse ne devient jamais une décision verrouillée sans validation.
- Avant modification du MASTER CONTEXT : synchroniser l’état actuel, créer un **backup local daté / point de restauration exact**, modifier la copie locale, appliquer à GitHub puis vérifier la branche.
- Une décision verrouillée affectant le live build doit synchroniser automatiquement les fichiers live concernés.
- Chaque nouveau fichier de référence doit être enregistré ici avec **rôle, niveau d’autorité, statut et emplacement canonique**.
- Chaque référence active doit exister dans son dossier GitHub canonique.
- Toute modification d’une référence active synchronise les dépendances concernées : MASTER CONTEXT, Knowledge Base, Reasoning Index, live build, manifestes/visuels et documentation.
- Après synchronisation, relire réellement la branche `hollow-dominion-live`.
- Pendant la phase actuelle d’inventaire bêta, **enregistrer les observations sans modifier prématurément les mécaniques du build**.

## 11. Sources associées du projet

### Niveau 1 — autorité opérationnelle
- `HOLLOW_DOMINION_PROJECT/reference/HOLLOW_DOMINION_MASTER_CONTEXT.md` — **ACTIF / VERROUILLÉ**.

### Niveau 2 — arbre
- `HOLLOW_DOMINION_PROJECT/reference/HOLLOW_DOMINION_reference.build` — allocations passives exactes — **ACTIF**.
- `Skill Trees/0.5.2/data.json` — topologie / IDs / stats / coordonnées / connexions — **ACTIF / SOURCE TOPOLOGIQUE**.
- `HOLLOW_DOMINION_PROJECT/reference/HOLLOW_DOMINION_identification_120_default_8_ascendancy.md` — mapping validé 120 + 8 — **ACTIF**.

### Niveau 3 — index / audits
- `HOLLOW_DOMINION_PROJECT/reference/HOLLOW_DOMINION_KNOWLEDGE_BASE.md` — synthèse secondaire — **ACTIF SECONDAIRE**.
- `HOLLOW_DOMINION_PROJECT/reference/HOLLOW_DOMINION_REASONING_INDEX.json` — index mécanique structuré — **ACTIF SECONDAIRE**.
- `HOLLOW_DOMINION_PROJECT/reference/HOLLOW_DOMINION_PoE2DB_visual_audit_FINAL_20260910.md` — audit visuel — **ACTIF — AUDIT VISUEL**.

### Niveau 4 — live build actif
- `live_build/build-data.js`
- `live_build/tree-state.js`
- `live_build/calculations.js`
- `live_build/app.js`
- `live_build/index.html`
- `live_build/style.css`
- `live_build/poe2db-visuals.js`
- `live_build/poe2db-visuals.css`
- `live_build/visual-manifest.json`
- `live_build/README.md`

### Niveau 5 — visuels
- `images/passive_tree_master.webp` — **ACTIF**.
- `HOLLOW_DOMINION_trace_exact_120_plus_8_v2(2).png` — référence connue ; fichier à restaurer si maintenu actif.
- `HOLLOW_DOMINION_MASTER_PASSIVE_TREE_0.5.2_v2_NOTABLES_EXACTS(1).png` — référence connue ; fichier à restaurer si maintenu actif.
- `hollow dominion by nejib(1).png` — référence esthétique connue ; fichier à restaurer si maintenu actif.
- `Guide des anneaux Ingenuity du Moine.png` — référence esthétique secondaire disponible en Library.

Les anciens Master Context, posters, builds Hollow Palm, workspaces HTML et prototypes sont **historiques / non autoritatifs**.

## 12. Politique visuelle du live build — VERROUILLÉE

- **PoE2DB** est la source visuelle de référence pour gear, skills et supports.
- Toute modification d’un item/skill/support doit entraîner la vérification/récupération de son visuel PoE2DB puis la synchronisation du live build.
- Conserver les fonds transparents natifs.
- Supports sans numérotation, petit logo à gauche.
- Pour les Lineage Supports sans seconde icône exposée, utiliser l’image officielle de gemme PoE2DB.
- Anciens SVG/sprites = rollback uniquement.
- Audit actuel : **9 équipements / 10 compétences / 31 supports**.
- `Elemental Focus II` reste **AUDIT** : visuel Elemental Focus actuel utilisé, mais le nom/support n’est pas modifié sans validation explicite.

## 13. Futur visuel / diaporama

- Conserver la référence esthétique skills/supports validée, sans jamais l’utiliser comme source mécanique.
- Arbre final : 120 principaux + 8 Ascendancy ; chemin réel lumineux, Notables importants rouges, Ascendancy violet, non-alloué gris sombre.
- Le visuel doit être reproductible nœud par nœud par un débutant.
- Ensuite créer un visuel de levelling depuis exactement le même master, en 8–12 grandes étapes.
