# HOLLOW DOMINION — KNOWLEDGE BASE

> Base consolidée secondaire pour le theorycraft et les raisonnements futurs.  
> Version de jeu : **Path of Exile 2 — 0.5.2**.  
> Build : **Monk / Martial Artist / Quarterstaff — HOLLOW DOMINION by Nejib**.  
> Dernière synchronisation : **2026-09-10**.

## 1. Ordre de priorité des sources

1. **`HOLLOW_DOMINION_MASTER_CONTEXT.md`** — décisions verrouillées et état courant. Il prévaut toujours en cas de contradiction.
2. **`HOLLOW_DOMINION_reference.build`** — allocations sérialisées exactes. Utiliser les allocations, jamais un ancien texte de description comme vérité.
3. **`Skill Trees/0.5.2/data.json`** — IDs, noms, stats, coordonnées, groupes et connexions réelles.
4. **`HOLLOW_DOMINION_identification_120_default_8_ascendancy.md`** — correspondance validée 120 + 8.
5. **`HOLLOW_DOMINION_REASONING_INDEX.json`** — index structuré secondaire, synchronisé avec le Master Context.
6. **Références visuelles approuvées** — contrôle technique ou esthétique seulement ; elles ne remplacent jamais une source mécanique supérieure.

Toute nouvelle référence active doit être enregistrée dans le MASTER CONTEXT avec son rôle, son statut, son niveau d’autorité et son emplacement canonique, puis synchronisée dans le dossier GitHub approprié.

## 2. Identité mécanique verrouillée

- **Quarterstaff**, jamais Hollow Palm.
- **Fists of Stone** via **Way of the Stonefist** est obligatoire.
- **Hollow Form → Whirling Assault** = moteur principal de DPS boss.
- **Shattering Palm** = clear, setup du premier Freeze et overkill.
- **Charged Staff** = couche Lightning / Shock / contrôle.
- Défense = **Evasion + Energy Shield**.
- Priorité actuelle : **Mana sustain → validation Freeze boss → survie → optimisation offensive**.
- Règle de pruning : ne conserver que les mécaniques qui soutiennent directement Whirling Assault, le contrôle nécessaire, le sustain ou la survie.

## 3. Arbre passif validé

- **120 / 120** passifs principaux.
- **8 / 8** passifs Martial Artist dépensés.
- `AscendancyMonk1Start` = origine graphique, non comptée.
- Tous les IDs doivent être résolus depuis `Skill Trees/0.5.2/data.json`.
- Le visuel final masque les Weapon Sets et présente l’union des 120 passifs.
- La topologie doit être rendue de manière déterministe depuis `data.json` ; **aucun générateur d’images ne doit reconstruire l’arbre**.
- Agrégats de travail du live build : **+179% Evasion**, **+179% Energy Shield**, **+14% Attack Speed**, **+19% Skill Speed**, **+48% Mana Regeneration Rate**, **33% Evasion as Deflection**.
- Freeze Buildup de travail : **+75%**.

## 4. Ascendancy Martial Artist

Dépensés :
- `AscendancyMonk1Small4` — Area of Effect
- `AscendancyMonk1Small6` — Additional Power Charge Chance
- `AscendancyMonk1Small3` — Evasion and Energy Shield
- `AscendancyMonk1Notable3` — Hollow Focus Technique
- `AscendancyMonk1Notable7` — Hollow Form Technique
- `AscendancyMonk1Notable8` — Way of the Stonefist
- `AscendancyMonk1Small5` — Area of Effect
- `AscendancyMonk1Notable4` — Hollow Resonance Technique

**Way of the Mountain est retiré. Way of the Stonefist prévaut.**

## 5. Compétences / supports — état courant

| Compétence | Rôle | Supports / statut |
|---|---|---|
| Hollow Form → Whirling Assault | Boss DPS | Heavy Swing, Heightened Charges, Blindside, Vorana's Siege |
| Shattering Palm | Clear + premier Freeze | Rapid Attacks II, Magnified Area II, Elemental Armament II, Rising Tempest, **Ice Bite II** ; Ancestral Call II = clear swap |
| Freezing Mark | Setup Freeze boss | **Eternal Mark, Prolonged Duration II, Charged Mark, Mark for Death II** ; 5e slot libre |
| Charged Staff | Lightning / Blind | Blind II, Perpetual Charge, Prolonged Duration II, Elemental Armament II, Innervate |
| Hollow Focus | Stun | Cooldown Recovery II, Overabundance II, Magnified Area II, Close Combat II, Heft ; Overabundance II = AUDIT |
| Hollow Resonance | Stun / contrôle | Stun III, Cooldown Recovery II, Close Combat II, Magnified Area II, Pinpoint Critical ; Pinpoint Critical = AUDIT |
| Tempest Bell | Burst | Heavy Swing, Close Combat II, Ancestral Call II, Overabundance II, Rage III ; Rage III = AUDIT |
| Charge Regulation | Charges / sustain | **Clarity II, Precision II** ; Vitality II supprimée |
| Wind Dancer | Défense/utilitaire | **Maim, Blind II, Rage II — VERROUILLÉS** |
| Spirit Vessel | — | **EXCLU** |
| Convalescence | — | **EXCLU** |
| Elemental Conflux | Option | **Inactif**, 60 Spirit ; ne pas compter dans le budget actif |

**Biting Frost II est exclu.** `Lockdown` et `Pin I` sont exclus de Wind Dancer.

## 6. Freeze boss

### Baseline bêta

Avec Charged Staff actif, 4 Shattering Palm, Tempest Bell puis Hollow Form, le boss est mort avant le premier Freeze et Hollow Form n’a montré aucune contribution visible à la jauge.

### Direction verrouillée

**Freezing Mark + Ice Bite II**.

Rotation de test : **Freezing Mark → ~4 Shattering Palm → premier Freeze → Tempest Bell → Hollow Form**.

Objectif : le premier Freeze doit déclencher les gains Cold permettant ensuite à Hollow Form / Whirling Assault de participer à l’accumulation de Gel. Statut : **PARTIELLEMENT RÉSOLU / EN TEST**.

## 7. Mana / Spirit / défense

### Mana
- Problème **OUVERT / PRIORITAIRE**.
- Test réel : 624 Mana, coût Hollow Form 126, regen 67.2 Mana/s, vide en ~5 s sans flacon et ~7 s avec Lavianga.
- Consommation effective estimée : ~192 Mana/s.
- Direction : **Mana Regeneration Rate + flacon**, sans sacrifier prématurément l’Attack Speed.

### Spirit
- Charge Regulation : **70 Spirit**.
- Wind Dancer : **33 Spirit**.
- Total actif : **103 Spirit**.
- Modèle gear actuel : **226 Spirit**, soit **123 libres**.
- Le +61 Spirit du torse est candidat au remplacement.

### Défense
- Direction : armures **Evasion + Energy Shield**.
- Working gear : ~7168 ES, ~7159 Evasion, ~2362 Deflection avant conditions supplémentaires.
- Faiblesse à surveiller : gros coups physiques / slams.

## 8. Gear

### Quarterstaff
**Duality Warding Quarterstaff** = cible endgame de travail.

Live model : base crit 10%, base 1.40 APS, +300% local Physical Damage, +22% local Attack Speed, +30% Critical Damage Bonus, 50 Runic Ward. Variante 15% crit à comparer ultérieurement.

### Ingenuity
Cible BiS de travail : **+30% bague gauche / +30% bague droite**, calcul `floor-per-mod`.

La Bague Topaze possède encore un **+30% Attack Speed AUDIT / inactif** tant que sa légalité exacte n’est pas validée contre le pool 0.5.2.

## 9. Visuels et audit PoE2DB

- **PoE2DB** est la source visuelle de référence pour gear, skills et supports.
- Audit canonique : `HOLLOW_DOMINION_PoE2DB_visual_audit_FINAL_20260910.md`.
- Résultat audit : **9 équipements, 10 compétences, 31 supports** couverts.
- Les supports s’affichent sans numérotation avec une petite icône à gauche.
- Les assets transparents doivent rester transparents.
- `Elemental Focus II` reste **AUDIT** : visuel officiel Elemental Focus utilisé, nom du build non modifié sans validation.

## 10. Références GitHub actives

### `HOLLOW_DOMINION_PROJECT/reference/`
- `HOLLOW_DOMINION_MASTER_CONTEXT.md`
- `HOLLOW_DOMINION_reference.build`
- `HOLLOW_DOMINION_identification_120_default_8_ascendancy.md`
- `HOLLOW_DOMINION_KNOWLEDGE_BASE.md`
- `HOLLOW_DOMINION_REASONING_INDEX.json`
- `HOLLOW_DOMINION_PoE2DB_visual_audit_FINAL_20260910.md`

### `Skill Trees/0.5.2/`
- `data.json`

### `HOLLOW_DOMINION_PROJECT/live_build/`
- `build-data.js`, `tree-state.js`, `calculations.js`, `app.js`, `index.html`, `style.css`, `poe2db-visuals.js`, `poe2db-visuals.css`, `visual-manifest.json`, `README.md`

### `HOLLOW_DOMINION_PROJECT/images/`
- `passive_tree_master.webp`

Les anciens posters, anciens Master Context, anciens fichiers Hollow Palm et anciens workspaces HTML sont **historiques / non autoritatifs**.

## 11. Politique de maintenance

Toujours distinguer **VERROUILLÉ**, **configuration de travail**, **EN TEST**, **AUDIT** et **historique**.

Pour chaque modification significative :
1. mettre à jour le MASTER CONTEXT ;
2. ajouter/mettre à jour les références associées dans sa section dédiée ;
3. synchroniser Knowledge Base, Reasoning Index, live build ou visuels si impactés ;
4. synchroniser le dossier GitHub canonique ;
5. vérifier le contenu réellement publié sur `hollow-dominion-live`.

Une hypothèse ne devient jamais une vérité verrouillée sans validation.
