# HOLLOW DOMINION — MASTER CONTEXT

**Path of Exile 2 • Martial Artist • Cold / Lightning • version 0.5.2 • by Nejib**

Ce fichier est la transcription opérationnelle du document maître fourni par Nejib. Il sert de référence prioritaire pour poursuivre le theorycraft, la validation technique, la reconstruction de l’arbre et la création du futur guide/diaporama HOLLOW DOMINION.

> En cas de contradiction avec une information plus ancienne, une décision indiquée ici comme verrouillée prévaut.

## 1. Identité et règles verrouillées

- Nom : **HOLLOW DOMINION — by Nejib**.
- Version de référence : **Path of Exile 2 — 0.5.2**.
- Classe / Ascendancy : **Monk — Martial Artist**.
- Arme : **Quarterstaff**. Ne pas réintroduire Hollow Palm malgré les anciens noms de fichiers/presets.
- **Fists of Stone** (Lochtonial Caress transformé via Way of the Stonefist) est une pièce mécanique obligatoire.
- Pour le visuel de l’arbre : travailler comme un arbre Default unique de **120 passifs + 8 passifs d’Ascendancy**. Ne pas afficher ni commenter les Weapon Sets.
- Priorité du build : **Hollow Form → Whirling Assault** pour le boss DPS ; **Shattering Palm** pour clear/Cold/Freeze ; Lightning pour Shock/contrôle et **Charged Staff**.
- Philosophie : build très offensif, avec contrôle Freeze/Stun et une vraie couche **Evasion + Energy Shield**.

## 2. Arbre passif — vérité validée

- **120/120** passifs de l’arbre principal.
- **8/8** passifs Martial Artist dépensés.
- `AscendancyMonk1Start` est conservé uniquement comme point de départ graphique et n’est pas compté comme point dépensé.
- Tous les IDs utilisés existent dans `Skill Trees/0.5.2/data.json`.
- Méthode obligatoire pour le visuel : rendu déterministe depuis les IDs, coordonnées et connexions du `data.json`, contrôlé par les screenshots du vrai Build Planner.
- **Ne jamais utiliser un générateur d’images pour redessiner la topologie de l’arbre.**
- Le détail complet des 120 IDs, noms, types et coordonnées est conservé dans `HOLLOW_DOMINION_identification_120_default_8_ascendancy.md`.

## 3. Ascendancy Martial Artist

- Way of the Stonefist — retenu ; indispensable au moteur Fists of Stone / charges.
- Hollow Form Technique.
- Hollow Focus Technique.
- Hollow Resonance Technique.
- Evasion and Energy Shield small node.
- Trois autres petits passifs de cheminement de l’Ascendancy.
- Way of the Mountain a été retiré au profit de Stonefist.

### 8 passifs dépensés

1. `AscendancyMonk1Small4` — Area of Effect
2. `AscendancyMonk1Small6` — Additional Power Charge Chance
3. `AscendancyMonk1Small3` — Evasion and Energy Shield
4. `AscendancyMonk1Notable3` — Hollow Focus Technique
5. `AscendancyMonk1Notable7` — Hollow Form Technique
6. `AscendancyMonk1Notable8` — Way of the Stonefist
7. `AscendancyMonk1Small5` — Area of Effect
8. `AscendancyMonk1Notable4` — Hollow Resonance Technique

## 4. Compétences et supports — état de travail

### Hollow Form → Whirling Assault

**Heavy Swing • Heightened Charges • Blindside • Vorana’s Siege**

Rôle : moteur principal de DPS boss.

### Shattering Palm

**Ancestral Call II • Rapid Attacks II • Magnified Area II • Elemental Armament II • Rising Tempest**

Rôle : clear, Chill/Freeze et overkill.

### Charged Staff

**Blind II • Perpetual Charge • Prolonged Duration II • Elemental Armament II • Innervate**

Rôle : couche Lightning et application de Blind.

### Hollow Focus

**Cooldown Recovery II • Overabundance II • Magnified Area II • Close Combat II • Heft**

`Overabundance II` reste à auditer.

### Hollow Resonance

**Stun III • Cooldown Recovery II • Close Combat II • Magnified Area II • Pinpoint Critical**

`Pinpoint Critical` reste à auditer.

### Tempest Bell

**Heavy Swing • Close Combat II • Ancestral Call II • Overabundance II • Rage III**

`Rage III` reste à auditer ; `Magnified Area II` est une alternative.

### Charge Regulation

**Vitality II • Clarity II • Precision II** provisoires.

Le coût Spirit exact des supports doit être audité avant verrouillage.

### Convalescence

**Prolonged Duration II • Cooldown Recovery II** uniquement.

Rôle : bouton d’urgence Energy Shield.

### Spirit Vessel

**Meat Shield II • Wing Blast • Romira’s Requital • Amanamu’s Tithe**

Rôle : package passif défensif/utilitaire.

### Elemental Conflux — optionnel

- 60 Spirit.
- Aucun support essentiel verrouillé.
- Bonus de luxe si le budget Spirit le permet.

## 5. Défense / Energy Shield

- Armures prévues : **Evasion Rating + Energy Shield** lorsque possible.
- Arbre : **+99% increased maximum Energy Shield** identifiés sur le chemin de référence.
- **Spectral Ward** : +1 Maximum ES par 12 Item Evasion sur le Body Armour.
- Recharge : **18% faster start** inconditionnel identifié ; jusqu’à **38%** lorsque la condition `not Full Life` s’applique.
- Convalescence est réintégré car le pool ES est suffisamment important.
- Estimation de travail avant jewels : environ **2300–2450 ES**.
- Objectif ambitieux : environ **2500 ES avant jewels**, si le DPS reste intact.
- Faiblesse à surveiller : **gros coups physiques / slams**.

## 6. Vitesse, mana et charges

- Arbre Default : **+16% increased Skill Speed** identifié.
- Ne pas chercher de Cast Speed sur l’équipement.
- Priorité : **Attack Speed >>> Cast Speed**.
- Cible de confort provisoire : environ **+40–50% Attack Speed permanent total**, autour de +45%, sans sacrifier Mana/Combo.
- Le Mana est un risque majeur : les images de Hollow Form dépensent **80% du coût de Whirling Assault** ; davantage d’Attack Speed augmente la pression.
- Charge Regulation exploite Power / Endurance / Frenzy ; qualité et coûts Spirit des supports doivent être vérifiés précisément.

## 7. Spirit — contrainte non résolue

Ancien budget de travail :

- Charge Regulation : 30
- Convalescence : 30
- Spirit Vessel : 87
- Total : **147 Spirit**
- Avec Elemental Conflux : **207 Spirit**

Ces totaux n’intègrent pas nécessairement les réservations supplémentaires de Vitality II / Clarity II / Precision II. Le budget Spirit doit être **réaudité avant le gear final**.

## 8. Quarterstaff / cible endgame

- **Duality Warding Quarterstaff** est un candidat endgame sérieux.
- Rolls prioritaires : **Physical Damage + Attack Speed**.
- Critical Damage Bonus et Guard sont secondaires.
- Référence observée : Runemastered Duality ~**948.66 physical DPS**, **1.63 APS**, **275% increased Physical Damage**, **+30% Critical Damage Bonus**, **16% increased Attack Speed**, **998 Guard/Combo**.
- Recipe connue : Duality Warding Quarterstaff + **20 Exceptional Verisium + 1 Olroth’s Crest of the Sun**.
- Warding Starlit Ore Duality Warding Quarterstaff au Verisium Anvil.
- Farming envisagé plutôt qu’achat.

## 9. Ingenuity / anneaux — ne pas survalider

- **Ingenuity** est un candidat BiS conditionnel.
- Screenshot de référence : **+23% bonuses from left equipped Ring**, **+29% from right equipped Ring**, **+20% Charm Charges gained**, **+7% Charm Charges used**.
- Réserver le meilleur anneau au **slot droit** si la ceinture est retenue.
- Les deux anneaux conceptuels déjà illustrés **ne sont pas techniquement validés** contre le pool réel d’affixes 0.5.2.
- Ne pas reprendre leurs affixes comme vérité avant audit.

## 10. Évaluation et risques

- Évaluation actuelle de travail : **~8.8/10**.
- Potentiel estimé : **~9.5/10** après résolution Mana/Spirit et optimisation gear.
- Risques principaux : **Mana, Spirit, surinvestissement Shattering Palm, surinvestissement Stun, gros dégâts physiques**.
- Règle de pruning : ne pas ajouter de mécanique qui ne soutient pas directement **Whirling Assault**, le contrôle nécessaire ou la survie.

## 11. Visuels et futur diaporama

- Conserver le visuel compétences/supports validé comme référence esthétique, mais corriger Spirit/attributs avant publication.
- Conserver le visuel Ingenuity + anneaux pour le style seulement ; contenu des affixes à revalider.
- Pour l’arbre : **120 passifs principaux + 8 Ascendancy**, chemin réel lumineux, Notables importants en rouge, Ascendancy en violet, non-alloué en gris sombre.
- Le visuel final doit rester **reproductible nœud par nœud par un débutant**.
- Créer ensuite un second visuel de levelling depuis exactement le même master, avec **8–12 grandes étapes** plutôt que 120 numéros.

## 12. Checklist avant build final 100%

- Auditer précisément le coût Spirit des supports de Charge Regulation.
- Tester Mana en situation réelle avec Hollow Form → Whirling Assault et Attack Speed final.
- Valider les supports encore marqués provisoires.
- Fixer le Quarterstaff final et les seuils Attack Speed / crit / Freeze / Stun.
- Valider chaque affixe des anneaux et du reste du gear contre le pool 0.5.2.
- Corriger les chiffres Spirit et attributs du futur infographic.
- Après seulement : créer le diaporama final HOLLOW DOMINION.

## Sources associées du projet

- `HOLLOW_DOMINION_reference.build` — allocations de référence.
- `HOLLOW_DOMINION_identification_120_default_8_ascendancy.md` — rapport exact 120 + 8, IDs/noms/types/coordonnées.
- `../../Skill Trees/0.5.2/data.json` — topologie officielle de l’arbre PoE2 0.5.2.

Ce fichier doit être lu avant toute modification majeure du build, de l’arbre, du gear ou du guide final.