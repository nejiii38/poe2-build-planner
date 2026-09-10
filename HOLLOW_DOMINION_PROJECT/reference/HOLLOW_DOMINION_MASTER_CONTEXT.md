# HOLLOW DOMINION — MASTER CONTEXT

**Path of Exile 2 • Martial Artist • Cold / Lightning • version 0.5.2 • by Nejib**

**Mise à jour opérationnelle : 2026-09-10 — inventaire bêta : Mana résolu, Freeze boss trop lent, économie des Power Charges, clear Shattering Palm, durée des charges, survivabilité et critique.**

Ce fichier est la référence opérationnelle prioritaire du projet HOLLOW DOMINION. En cas de contradiction avec une information plus ancienne, toute décision indiquée ici comme **VERROUILLÉE** prévaut.

## 1. Identité et règles verrouillées

- Nom : **HOLLOW DOMINION — by Nejib**.
- Version de référence : **Path of Exile 2 — 0.5.2**.
- Classe / Ascendancy : **Monk — Martial Artist**.
- Arme : **Quarterstaff**. Ne jamais réintroduire Hollow Palm à partir d’anciens fichiers/presets.
- **Fists of Stone** (Lochtonial Caress transformé via Way of the Stonefist) est obligatoire.
- Boss DPS : **Hollow Form → Whirling Assault**.
- Clear / Cold / Freeze : **Shattering Palm**.
- Lightning / Shock / contrôle : **Charged Staff**.
- Philosophie défensive : **Evasion + Energy Shield**, avec Freeze/Stun comme couches de contrôle.
- Priorité vitesse : **Attack Speed >>> Cast Speed**. Ne pas chercher de Cast Speed sur le gear.
- Convention live build : noms des supports en **anglais**.
- Les dégâts et le clear de la bêta sont déjà très élevés avec du gear non-BiS : ne pas chercher de DPS supplémentaire au prix du sustain, du contrôle ou de la survivabilité.

### Bêta ingame ≠ stuff final BiS — VERROUILLÉ

- Le personnage actuellement joué est une **version bêta non-BiS** destinée à valider les interactions, la jouabilité et les seuils réellement suffisants.
- Les valeurs réellement portées en bêta sont conservées comme **mesures expérimentales**, jamais comme plafond ou roll final automatique.
- Pour le stuff final, chaque emplacement doit utiliser les **meilleurs affixes / tiers / rolls légalement disponibles en PoE2 0.5.2 sur la base finale retenue**, après validation du pool réel.
- Tout affixe/tier non encore validé reste **AUDIT** et ne contribue pas comme vérité certaine.

## 2. Arbre passif — vérité validée

- **120/120** passifs principaux + **8/8** passifs Martial Artist.
- `AscendancyMonk1Start` = origine graphique uniquement, non comptée.
- Tous les IDs doivent exister dans `Skill Trees/0.5.2/data.json`.
- Le visuel final est un arbre Default unique ; ne pas afficher/commenter les Weapon Sets.
- Topologie : rendu déterministe depuis les IDs, coordonnées et connexions du `data.json`, contrôlé contre le vrai Build Planner.
- **Interdiction d’utiliser un générateur d’images pour reconstruire la topologie de l’arbre.**
- Mapping exact : `HOLLOW_DOMINION_identification_120_default_8_ascendancy.md`.
- Agrégats de travail live : **+179% Evasion, +179% ES, +14% Attack Speed, +19% Skill Speed, +48% Mana Regeneration Rate, 33% Evasion as Deflection**.
- Les quatre allocations Freeze sont présentes : **+75% increased Freeze Buildup**.

### Ascendancy dépensée — exact

1. `AscendancyMonk1Small4` — Area of Effect
2. `AscendancyMonk1Small6` — Additional Power Charge Chance
3. `AscendancyMonk1Small3` — Evasion and Energy Shield
4. `AscendancyMonk1Notable3` — Hollow Focus Technique
5. `AscendancyMonk1Notable7` — Hollow Form Technique
6. `AscendancyMonk1Notable8` — Way of the Stonefist
7. `AscendancyMonk1Small5` — Area of Effect
8. `AscendancyMonk1Notable4` — Hollow Resonance Technique

**Way of the Mountain est retiré. Way of the Stonefist prévaut.**

## 3. Compétences / supports — état courant

- **Hollow Form → Whirling Assault** : Heavy Swing • Heightened Charges • Blindside • Vorana’s Siege. Rôle : boss DPS principal.
- **Shattering Palm** : Rapid Attacks II • Magnified Area II • Elemental Armament II • Rising Tempest • Ice Bite II. `Ancestral Call II` = clear swap facultatif. Rôle : sort principal de clearing + setup initial Freeze/overkill.
- **Freezing Mark** : Eternal Mark • Prolonged Duration II • Charged Mark • Mark for Death II — **VERROUILLÉS**. 5e slot libre. `Biting Frost II` exclu.
- **Charged Staff** : Blind II • Perpetual Charge • Prolonged Duration II • Elemental Armament II • Innervate.
- **Hollow Focus** : Cooldown Recovery II • Overabundance II • Magnified Area II • Close Combat II • Heft. `Overabundance II` = **AUDIT**.
- **Hollow Resonance** : Stun III • Cooldown Recovery II • Close Combat II • Magnified Area II • Pinpoint Critical. `Pinpoint Critical` = **AUDIT**.
- **Tempest Bell** : Heavy Swing • Close Combat II • Ancestral Call II • Overabundance II • Rage III. `Rage III` = **AUDIT** ; Magnified Area II alternative.
- **Charge Regulation** : Clarity II • Precision II. Vitality II définitivement supprimée. Réservation : **70 Spirit**.
- **Wind Dancer** : Maim • Blind II • Rage II — **VERROUILLÉS**. Réservation : **33 Spirit**. `Pin I` et `Lockdown` exclus ; Her Declaration / Seraph’s Heart optionnels.
- **Spirit Vessel** : **EXCLU** car dépend de Forgotten Warden et entre en conflit avec la Veste racée.
- **Convalescence** : **EXCLU**.
- **Elemental Conflux** : optionnel/inactif, 60 Spirit. `Elemental Focus II` reste **AUDIT** de nomenclature.

## 4. Défense / Spirit / gear de travail

- Gear défensif : privilégier **Evasion + Energy Shield**.
- Spectral Ward : +1 Maximum ES par 12 Item Evasion sur le Body Armour.
- Working gear final actuel : environ **7168 ES / 7159 Evasion / 2362 Deflection** avant conditions supplémentaires.
- Recharge ES de travail : **40% faster start** permanent +20% sous condition correspondante.
- Budget Spirit actif : Charge Regulation 70 + Wind Dancer 33 = **103 Spirit réservés**.
- Modèle total actuel : **226 Spirit**, donc **123 libres**.
- Sans le +61 Spirit du torse : environ **165 total / 103 réservés / 62 libres** ; le +61 Spirit de la Veste racée reste candidat au remplacement.
- **Ingenuity** = cible BiS de travail, hypothèse live +30% gauche / +30% droite, calcul `floor-per-mod`.
- **Duality Warding Quarterstaff** = cible endgame de travail : base crit 10%, base 1.40 APS, +300% local Physical Damage, +22% local Attack Speed, +30% Critical Damage Bonus, 50 Runic Ward. Variante 15% base crit à comparer plus tard.
- Bague Topaze : +30% Attack Speed reste **AUDIT / inactif** jusqu’à validation de sa légalité 0.5.2.

## 5. Mana — RÉSOLU / VALIDÉ EN JEU

### Baseline avant correction — 2026-09-09

- Mana max : **624**.
- Hollow Form affiché : **126 Mana**.
- Regen affichée : **67.2 Mana/s**.
- Mana vide en ~5 s sans flacon, ~7 s avec Lavianga.
- Estimation empirique : consommation effective ~192 Mana/s, déficit net ~124.8 Mana/s, récupération totale avec flacon ~102.9 Mana/s, contribution observée du flacon ~35.7 Mana/s.

### Solution bêta validée — 2026-09-10

- Un anneau : **+63% Mana Regeneration Rate**.
- Autre anneau : **+68% Mana Regeneration Rate**.
- **Ingenuity équipée** et amplifiant les bonus des anneaux.
- Résultat utilisateur : **plus aucun problème de Mana** dans l’utilisation réelle du build bêta.
- La solution permet de conserver l’Attack Speed et le rythme de Hollow Form / Whirling Assault.
- **63% / 68% sont une baseline expérimentale suffisante, pas les rolls BiS finaux.** Les anneaux finaux devront utiliser les meilleurs rolls légaux 0.5.2 compatibles avec le reste du build et reproduire au minimum ce niveau de sustain.
- Ne pas inventer de valeur post-Ingenuity exacte sans mesure/calcul validé.

**Statut : RÉSOLU / VALIDÉ EN JEU.** Recontrôler seulement après une modification importante de Mana, Attack Speed ou coût de Hollow Form.

## 6. Inventaire bêta — problématiques actives du 2026-09-10

### OUVERT / EN TEST — Freeze / frigorification des boss beaucoup trop lente

- Le temps nécessaire pour frigorifier / Freeze un boss reste **beaucoup trop long** pour le rythme visé.
- La bêta possède pourtant les +75% Freeze Buildup du tree.
- Baseline précédente : Charged Staff actif, ~4 Shattering Palm, Tempest Bell puis Hollow Form ; le boss mourait avant le premier Freeze et Hollow Form ne faisait pas progresser visiblement la jauge.
- Direction actuellement intégrée : **Freezing Mark + Ice Bite II**.
- Rotation de test actuelle : **Freezing Mark → ~4 Shattering Palm → premier Freeze → Tempest Bell → Hollow Form**.
- **Nouveau retour bêta : même avec cette direction, le Freeze reste trop lent. La solution actuelle est donc insuffisante en pratique.**
- Contrainte toujours verrouillée : Shattering Palm ne doit pas devenir un spam boss permanent ; il doit rester un setup court puis laisser Hollow Form assurer le DPS.
- Objectif optimisation : réduire fortement le temps jusqu’au premier Freeze et/ou faire contribuer Hollow Form/Whirling Assault au Freeze de façon fiable sans casser le DPS boss.

### OUVERT — économie des Power Charges / Charged Staff

- Observation réelle : **Hollow Form est actuellement la source principale de génération des Power Charges mais les consomme presque immédiatement**.
- Conséquence : il est trop difficile de garder des charges disponibles assez longtemps pour rendre **Charged Staff** simple et fiable à activer/maintenir.
- Impact : la couche Lightning / Shock construite autour de Charged Staff devient **trop difficile à setup en jeu**.
- Ne pas supprimer automatiquement Lightning : traiter d’abord le problème comme une **économie/disponibilité des charges**.

### OUVERT — durée utile des charges / Charge Regulation

- L’utilisateur souhaite que les charges durent **un peu plus longtemps** pour profiter davantage des bonus de **Charge Regulation**.
- Hypothèse à tester : une augmentation modérée de durée/conservation des charges pourrait aussi réduire la friction de Charged Staff.
- Aucune source de durée/conservation n’est encore verrouillée ; auditer le coût d’opportunité avant changement.

### OUVERT — Shattering Palm : clear bon, overkill perfectible

- **Shattering Palm est confirmé comme sort principal de clearing.**
- Le clear est déjà bon, mais l’overkill / la puissance de nettoyage peut encore progresser.
- **Rising Tempest est un suspect, pas une cause validée** : son apport de dégâts paraît insuffisant pour le clearing.
- Pendant l’optimisation, comparer Rising Tempest à des alternatives qui augmentent réellement clear/overkill sans détériorer le rôle Freeze/setup de Shattering Palm.
- Ne pas retirer Rising Tempest avant comparaison mécanique et test en jeu.

### VALIDÉ EN CLEARING — survivabilité

- Malgré l’exposition créée par Shattering Palm au corps-à-corps, l’utilisateur juge la survivabilité **parfaite en clearing**.
- Aucune mort hors faute grave de gameplay.
- La couche **Evasion + Energy Shield + Wind Dancer** est donc une réussite fonctionnelle et doit être **préservée pendant l’optimisation**.
- Ne pas sacrifier cette robustesse pour un gain offensif marginal.
- Les gros hits physiques / slams restent un point de vigilance boss/endgame, pas un échec confirmé du clear.

### AUDIT — chance de critique réelle

- En jeu, l’utilisateur ne distingue pas visuellement un hit normal d’un hit critique.
- Ce manque de feedback ne permet pas de conclure que le taux de critique est trop faible ou suffisant.
- La décision d’augmenter ou non le critique doit venir d’un **audit mécanique du taux réel, de la base crit, des multiplicateurs et du gain DPS marginal**, puis éventuellement d’un test ciblé.
- Ne pas investir davantage en critique avant cet audit.

## 7. Priorités après l’inventaire actuel

1. **Freeze boss** — trop lent, solution actuelle insuffisante.
2. **Économie des Power Charges / Charged Staff** — rendre Lightning réellement exploitable en jeu.
3. **Shattering Palm clear / overkill** — auditer Rising Tempest et alternatives.
4. **Durée/conservation des charges / Charge Regulation** — améliorer la fenêtre utile si rentable.
5. **Critique** — audit du taux réel et de la valeur d’un investissement supplémentaire.

Points à préserver : **Mana résolu** et **survivabilité clearing validée**.

Ce classement reste provisoire jusqu’à la fin de l’inventaire complet des problématiques bêta fourni par l’utilisateur. L’optimisation générale commencera ensuite, **une étape à la fois**.

## 8. Checklist avant build final 100%

- Reprendre le moteur Freeze boss ; Freezing Mark + Ice Bite II reste trop lent en pratique.
- Auditer l’économie des Power Charges pour Charged Staff et Charge Regulation sans casser Hollow Form.
- Auditer une augmentation modérée de durée/conservation des charges.
- Comparer Rising Tempest à des alternatives de support pour Shattering Palm.
- Auditer le taux de critique réel et son gain marginal.
- Revalider Mana seulement après changement susceptible d’affecter le sustain.
- Auditer les meilleurs rolls légaux de Mana Regeneration Rate sur les deux anneaux finaux ; reproduire au minimum la baseline bêta 63/68 + Ingenuity.
- Auditer le remplacement du +61 Spirit du torse.
- Valider Overabundance II, Pinpoint Critical, Rage III et `Elemental Focus II`.
- Valider chaque affixe final contre le pool réel 0.5.2.
- Recalculer Spirit, Mana, ES, Evasion, Deflection et toute stat touchée après chaque modification verrouillée.
- Créer le diaporama final seulement après stabilisation complète.

## 9. Protocole automatique de maintenance — VERROUILLÉ

- Chaque nouvelle problématique significative de theorycraft ou bêta est ajoutée automatiquement au MASTER CONTEXT.
- Chaque problème résolu conserve cause, solution, impact et nouveau statut.
- Statuts : **OUVERT, EN TEST, PARTIELLEMENT RÉSOLU, RÉSOLU, VERROUILLÉ, AUDIT**.
- Mesures réelles en jeu et projections théoriques restent séparées.
- Une hypothèse ne devient jamais une décision verrouillée sans validation.
- Avant toute modification du MASTER CONTEXT : synchroniser l’état actuel, créer un **backup local daté**, modifier la copie locale, appliquer la même mise à jour à GitHub, puis vérifier la branche.
- MASTER CONTEXT et live build doivent rester cohérents ; toute décision verrouillée affectant le live build doit être répercutée automatiquement.
- Chaque nouveau fichier de référence doit être enregistré dans le MASTER CONTEXT avec **rôle, niveau d’autorité, statut et emplacement canonique**.
- Toute référence active doit exister dans le bon dossier GitHub (`reference/`, `images/`, `live_build/` ou emplacement canonique existant comme `Skill Trees/0.5.2/`).
- Toute modification d’une référence active doit synchroniser les dépendances concernées : MASTER CONTEXT, Knowledge Base, Reasoning Index, live build, manifestes/visuels et documentation.
- Après toute synchronisation GitHub, relire/vérifier le contenu réellement présent sur `hollow-dominion-live` avant de considérer l’opération terminée.
- Pendant la phase d’inventaire bêta actuelle, **enregistrer les observations sans modifier prématurément les mécaniques du build**. Les changements d’optimisation commenceront après l’inventaire complet.

## 10. Sources associées du projet

### Niveau 1 — autorité opérationnelle
- `HOLLOW_DOMINION_PROJECT/reference/HOLLOW_DOMINION_MASTER_CONTEXT.md` — source prioritaire. **ACTIF / VERROUILLÉ**.

### Niveau 2 — allocations et topologie
- `HOLLOW_DOMINION_PROJECT/reference/HOLLOW_DOMINION_reference.build` — allocations passives exactes. **ACTIF**.
- `Skill Trees/0.5.2/data.json` — IDs, noms, stats, coordonnées, groupes et connexions. **ACTIF / SOURCE TOPOLOGIQUE**.
- `HOLLOW_DOMINION_PROJECT/reference/HOLLOW_DOMINION_identification_120_default_8_ascendancy.md` — mapping validé 120 + 8. **ACTIF**.

### Niveau 3 — index / audits
- `HOLLOW_DOMINION_PROJECT/reference/HOLLOW_DOMINION_KNOWLEDGE_BASE.md` — synthèse secondaire. **ACTIF SECONDAIRE**, toujours subordonné au Master.
- `HOLLOW_DOMINION_PROJECT/reference/HOLLOW_DOMINION_REASONING_INDEX.json` — index mécanique structuré. **ACTIF SECONDAIRE**.
- `HOLLOW_DOMINION_PROJECT/reference/HOLLOW_DOMINION_PoE2DB_visual_audit_FINAL_20260910.md` — audit visuel. **ACTIF — AUDIT VISUEL**.

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

## 11. Politique visuelle du live build — VERROUILLÉE

- **PoE2DB** est la source visuelle de référence pour gear, skills et supports.
- Toute modification d’un item/skill/support doit entraîner la vérification/récupération de son visuel PoE2DB puis la synchronisation du live build.
- Conserver les fonds transparents natifs.
- Supports sans numérotation, petit logo à gauche.
- Pour les Lineage Supports sans seconde icône exposée, utiliser l’image officielle de gemme PoE2DB.
- Anciens SVG/sprites = rollback uniquement.
- Audit actuel : **9 équipements / 10 compétences / 31 supports**.
- Lochtonial Caress, Duality, Ingenuity, Daggerfoot Shoes et plusieurs IDs de supports ont déjà été corrigés dans l’audit canonique.
- `Elemental Focus II` reste **AUDIT** : visuel Elemental Focus actuel utilisé, mais le nom/support n’est pas modifié sans validation explicite.

## 12. Futur visuel / diaporama

- Conserver la référence esthétique skills/supports validée, sans jamais l’utiliser comme source mécanique.
- Arbre final : 120 principaux + 8 Ascendancy ; chemin réel lumineux, Notables importants rouges, Ascendancy violet, non-alloué gris sombre.
- Le visuel doit être reproductible nœud par nœud par un débutant.
- Ensuite créer un visuel de levelling depuis exactement le même master, en 8–12 grandes étapes.