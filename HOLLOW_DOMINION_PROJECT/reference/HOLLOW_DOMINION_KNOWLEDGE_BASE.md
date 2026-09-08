# HOLLOW DOMINION — KNOWLEDGE BASE

> Base de référence consolidée pour le theorycraft et les raisonnements futurs.  
> Version de jeu de référence : **Path of Exile 2 — 0.5.2**.  
> Build : **Monk / Martial Artist / Quarterstaff — HOLLOW DOMINION by Nejib**.

## 1. Ordre de priorité des sources

1. **MASTER CONTEXT** — décisions verrouillées et état courant.
2. **`.build` de référence** — allocations sérialisées exactes. Le champ `description` est ancien et ne doit pas être utilisé comme vérité.
3. **`Skill Trees/0.5.2/data.json`** — IDs, noms, stats, coordonnées, groupes et connexions.
4. **Rapport `120 default + 8 ascendancy`** — correspondance validée ID / nom / type / coordonnées.
5. **Trace/master technique** — contrôle géométrique.
6. **Posters approuvés** — style et présentation seulement lorsqu'ils contredisent une source supérieure.

## 2. Identité mécanique verrouillée

- **Quarterstaff**, pas Hollow Palm.
- **Fists of Stone** via **Way of the Stonefist** est obligatoire.
- **Hollow Form → Whirling Assault** = moteur principal de DPS boss.
- **Shattering Palm** = clear / Cold / Chill / Freeze / overkill.
- **Charged Staff / Lightning / Shock** = dégâts secondaires, contrôle et charges.
- Défense : **Evasion + Energy Shield**, avec Freeze/Daze/Stun comme contrôle.
- Règle de pruning : ne conserver que ce qui soutient Whirling Assault, le contrôle nécessaire ou la survie.

## 3. Arbre passif validé

- **120 / 120** passifs principaux.
- **8 / 8** passifs Martial Artist dépensés.
- `AscendancyMonk1Start` = origine graphique, non comptée.
- **0 ID manquant** dans `data.json`.
- **122 connexions réelles** entre les 120 passifs sélectionnés.
- **120/120** nœuds dans un seul composant connecté.
- Jewel Sockets : `jewel_slot1961`, `jewel_slot1976`.

Le `.build` conserve les tags sérialisés d'origine : **88 common + 14 Weapon Set 1 + 18 Weapon Set 2**. Pour le **visuel final**, ces tags sont volontairement masqués et l'arbre est présenté comme l'union des 120 passifs.

## 4. Index mécanique dérivé du vrai `data.json`

Ces chiffres sont des sommes arithmétiques des modificateurs explicites sélectionnés. Les conditions restent séparées.

### Baseline commun + Ascendancy

- **+99% maximum Energy Shield**
- **+99% Evasion Rating**
- **18% faster start of ES Recharge** inconditionnel
- **38%** avec la condition *not Full Life* de Mending Deflection
- Skill Speed brut commun : **+13%** ; le MASTER CONTEXT retient **+16%** comme valeur de travail de l'arbre Default
- **24% Cold Penetration**
- **75% Freeze Buildup**
- **76% increased Shock chance**
- **50% Shock magnitude**
- **30% Chill magnitude**
- **+27% chance to inflict Ailments** inconditionnel, plus **+20% contre les ennemis avec Exposure**
- **20% chance to Daze** sur le tronc commun
- **30% Daze magnitude**
- **+115% Critical Damage Bonus** commun
- **-20% Critical Hit Chance** commun via Throatseeker
- **+136% Attack Damage** inconditionnel
- **+70% Elemental Damage** inconditionnel
- +30% Elemental Damage si Chill récent
- +30% Elemental Damage si Shock récent
- **+67% Physical Damage**
- **+41% Attack Area Damage**
- **+32% Attack AoE** commun + **+16% generic AoE** d'Ascendancy
- **+33% Mana Regeneration Rate** commun, plus **+25%** si Shock récent
- Deflection Rating = **10% de l'Evasion** sur le tronc commun
- Spectral Ward : **+1 Maximum ES par 12 Item Evasion du Body Armour**

### Lignes conditionnelles structurantes

- Crashing Wave : +25% Damage après un Critical Hit récent.
- Killer Instinct : +40% Attack Damage à Full Life / +60% à Low Life.
- Electrifying Daze : 12% du Physical comme Extra Lightning contre Dazed.
- Shattering Daze : 12% du Physical comme Extra Cold contre Dazed.
- Chakra of Impact : +8% Damage par Combo consommé, jusqu'à +40%.
- Material Solidification : 8% du Damage comme Extra Physical.

### Métadonnées Weapon Set conservées pour les futurs calculs

**Weapon Set 1** ajoute notamment : +3% Skill Speed, +12% Attack AoE, +3% Quarterstaff Attack Speed, +2 Maximum Power Charges, +25% Daze chance, +25% Crit Chance vs Dazed et +30% Damage vs Dazed.

**Weapon Set 2** ajoute notamment : +3% Skill Speed, +8% Attack/Cast Speed, +80% ES, +80% Evasion, +60% Critical Damage Bonus après consommation récente de Power Charge, des couches Deflection/ES recharge, +4% Movement Speed et The Hollowkeeper.

> Ne pas utiliser ces deux blocs pour le visuel final. Les conserver seulement pour les raisonnements mécaniques où les Weapon Sets deviennent pertinents.

## 5. Ascendancy Martial Artist

Dépensés :
- Area of Effect (+8%)
- Additional Power Charge Chance (10%)
- Evasion and Energy Shield (+15% / +15%)
- Hollow Focus Technique
- Hollow Form Technique
- Way of the Stonefist
- Area of Effect (+8%)
- Hollow Resonance Technique

**Way of the Mountain est retiré. Way of the Stonefist prévaut.**

## 6. Compétences / supports — état courant

| Compétence | Rôle | Supports actuels | À auditer |
|---|---|---|---|
| Hollow Form → Whirling Assault | Boss DPS | Heavy Swing, Heightened Charges, Blindside, Vorana's Siege | — |
| Shattering Palm | Clear / Freeze | Ancestral Call II, Rapid Attacks II, Magnified Area II, Elemental Armament II, Rising Tempest | — |
| Charged Staff | Lightning / Shock | Blind II, Perpetual Charge, Prolonged Duration II, Elemental Armament II, Innervate | — |
| Hollow Focus | Heavy Stun | Cooldown Recovery II, Overabundance II, Magnified Area II, Close Combat II, Heft | Overabundance II |
| Hollow Resonance | Stun / contrôle | Stun III, Cooldown Recovery II, Close Combat II, Magnified Area II, Pinpoint Critical | Pinpoint Critical |
| Tempest Bell | Burst / élémental | Heavy Swing, Close Combat II, Ancestral Call II, Overabundance II, Rage III | Rage III ; Magnified Area II alternative |
| Charge Regulation | Charges / crit | Vitality II, Clarity II, Precision II | **provisoires**, Spirit à auditer |
| Convalescence | Urgence ES | Prolonged Duration II, Cooldown Recovery II | — |
| Spirit Vessel | Défense/utilitaire | Meat Shield II, Wing Blast, Romira's Requital, Amanamu's Tithe | — |
| Elemental Conflux | Option luxe | aucun support verrouillé | 60 Spirit, package final à définir |

Le poster Skills/Supports reste une référence esthétique. **Elemental Conflux y affiche Elemental Focus II + Innervate, mais ce package n'est pas verrouillé.**

## 7. Défense, vitesse, Mana, Spirit

- Gear prévu : Evasion + ES lorsque possible.
- ES avant jewels : **~2300–2450**, objectif ambitieux ~2500 si le DPS reste intact.
- Faiblesse : gros coups physiques / slams.
- Attack Speed permanent visé : **~40–50%, autour de 45%**.
- **Attack Speed >>> Cast Speed** ; ne pas chercher Cast Speed sur le gear.
- Mana = risque majeur, particulièrement avec Whirling Assault et l'augmentation d'Attack Speed.
- Ancien budget Spirit : 30 + 30 + 87 = **147**, +60 Elemental Conflux = **207**.
- Ce budget **n'intègre pas forcément** les réservations de Vitality II / Clarity II / Precision II : il reste à réauditer.

## 8. Gear

### Quarterstaff
**Duality Warding Quarterstaff** = candidat endgame sérieux, pas encore définitivement verrouillé.

Priorités : Physical Damage + Attack Speed. Secondaires : Critical Damage Bonus + Guard.

Référence observée : ~948.66 pDPS, 1.63 APS, 275% increased Physical Damage, +30% Critical Damage Bonus, 16% Attack Speed, 998 Guard/Combo.

### Ingenuity
Candidat BiS **conditionnel** :
- +23% bonus bague gauche
- +29% bonus bague droite
- +20% Charm Charges gained
- +7% Charm Charges used
- 1 Charm slot

Si retenue : meilleur anneau à droite.

**Les affixes des deux anneaux illustrés ne sont PAS validés contre le pool réel 0.5.2.** Ils sont des concepts visuels, pas une source de vérité mécanique.

## 9. Registre des visuels

**Techniques :**
- `HOLLOW_DOMINION_trace_exact_120_plus_8_v2(2).png`
- `HOLLOW_DOMINION_MASTER_PASSIVE_TREE_0.5.2_v2_NOTABLES_EXACTS(1).png`

**Approuvés pour le style :**
- `a_wide_graphic_poster_infographic_style_image_dar.png` — poster arbre thématisé
- `hollow dominion by nejib(1).png` — skills/supports
- `Guide des anneaux Ingenuity du Moine(1).png` — Ingenuity / anneaux

Les anciens arbres générés, anciens fichiers Hollow Palm et workspaces HTML sont **historiques / non autoritatifs**.

## 10. Points ouverts obligatoires

1. Réauditer le Spirit réel de Charge Regulation et de ses supports.
2. Tester le Mana avec l'Attack Speed final de Whirling Assault.
3. Valider Overabundance II, Pinpoint Critical et Rage III.
4. Fixer le Quarterstaff final et les seuils Attack Speed / crit / Freeze / Daze/Stun.
5. Auditer chaque affixe de gear, en particulier les anneaux, contre le pool 0.5.2.
6. Corriger Spirit et attributs sur l'infographie avant publication.
7. Définir le package d'Elemental Conflux si l'option est conservée.
8. Créer le guide/diaporama final seulement après résolution de ces points.

## 11. Règle pour les raisonnements futurs

Toujours distinguer :
- **verrouillé**
- **configuration de travail**
- **provisoire / à auditer**

Ne jamais transformer une valeur conditionnelle en bonus permanent. Ne jamais prendre le texte d'un ancien poster ou d'un ancien `.build` comme vérité s'il contredit le MASTER CONTEXT ou `data.json`.

Le fichier JSON compagnon contient l'index mécanique structuré et pointe vers les sources exactes pour les 120 passifs, leurs stats/coordonnées et les connexions.