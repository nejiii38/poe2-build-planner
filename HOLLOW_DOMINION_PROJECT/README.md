# HOLLOW DOMINION — Project Archive

Dossier de référence persistant pour le projet **HOLLOW DOMINION** (Path of Exile 2, version 0.5.2).

## Règle de travail

Toute nouvelle conversation ChatGPT qui reprend ce projet doit commencer par consulter ce dossier avant de modifier le build, l’arbre, les visuels, le gear ou le futur diaporama.

## Base de connaissance consolidée

- `reference/HOLLOW_DOMINION_KNOWLEDGE_BASE.md` — synthèse humaine consolidée destinée au theorycraft et aux raisonnements futurs.
- `reference/HOLLOW_DOMINION_REASONING_INDEX.json` — index structuré des décisions, métriques mécaniques dérivées, skills/supports, gear, risques et audits ouverts.

Ces deux fichiers sont des **index dérivés** des sources ci-dessous : ils accélèrent les raisonnements mais ne remplacent pas les sources de vérité. En cas de conflit, appliquer l’ordre de priorité suivant.

## Ordre de priorité des sources

1. `reference/HOLLOW_DOMINION_MASTER_CONTEXT.md` — **contexte maître actuel**. Les décisions marquées verrouillées dans ce fichier priment sur les informations plus anciennes.
2. `reference/HOLLOW_DOMINION_reference.build` — fichier `.build` de référence désigné par Nejib. Le champ `description` interne est ancien ; les allocations sérialisées sont la vérité.
3. `../Skill Trees/0.5.2/data.json` — source structurelle officielle pour les IDs, noms, stats, coordonnées, groupes et connexions réelles de l’arbre.
4. `reference/HOLLOW_DOMINION_identification_120_default_8_ascendancy.md` — rapport validé ID ↔ nom ↔ type ↔ coordonnées.

## Identité verrouillée du build

- **HOLLOW DOMINION — by Nejib**
- Path of Exile 2 — **0.5.2**
- **Monk — Martial Artist**
- **Quarterstaff**
- Ne pas réintroduire Hollow Palm malgré les anciens noms de fichiers/presets.
- **Fists of Stone** via Way of the Stonefist est une pièce mécanique obligatoire.
- Priorité DPS boss : **Hollow Form → Whirling Assault**.
- Clear / Cold / Freeze : **Shattering Palm**.
- Lightning / Shock / contrôle : **Charged Staff**.
- Philosophie défensive : **Evasion + Energy Shield**, avec contrôle Freeze/Stun.

## Arbre passif — vérité validée

- **120/120 passifs principaux**.
- **8/8 passifs Martial Artist dépensés**.
- `AscendancyMonk1Start` est seulement le point de départ graphique et n’est pas compté.
- Tous les IDs utilisés existent dans `Skill Trees/0.5.2/data.json`.
- **122 connexions réelles** relient les 120 passifs sélectionnés et les 120 forment un seul composant connecté.
- Ne pas afficher ni commenter les Weapon Sets dans le visuel final.
- Pour l’arbre passif, ne jamais inventer ou déplacer un nœud. Utiliser les coordonnées et connexions réelles de `Skill Trees/0.5.2/data.json`.
- **Ne jamais utiliser un générateur d’images pour reconstruire la topologie technique de l’arbre.**
- Les labels peuvent être déplacés pour la lisibilité ; les nœuds non.

## Compétences / supports — état de travail actuel

Le détail complet se trouve dans `reference/HOLLOW_DOMINION_MASTER_CONTEXT.md` et dans la base consolidée. Les packages actuels incluent notamment :

- Hollow Form → Whirling Assault : Heavy Swing, Heightened Charges, Blindside, Vorana’s Siege.
- Shattering Palm : Ancestral Call II, Rapid Attacks II, Magnified Area II, Elemental Armament II, Rising Tempest.
- Charged Staff : Blind II, Perpetual Charge, Prolonged Duration II, Elemental Armament II, Innervate.
- Hollow Focus, Hollow Resonance, Tempest Bell, Charge Regulation, Convalescence et Spirit Vessel ont leurs supports de travail documentés dans le Master Context.
- Elemental Conflux reste **optionnel** et aucun package de supports essentiel n’est actuellement verrouillé pour lui.

Certains supports restent à auditer avant verrouillage définitif : notamment Overabundance II, Pinpoint Critical, Rage III et les supports Spirit de Charge Regulation.

## Contraintes encore ouvertes

Les sujets non résolus à traiter avant le build final sont : budget **Spirit**, pression **Mana** avec Whirling Assault + Attack Speed final, supports provisoires, Quarterstaff endgame, seuils crit/Freeze/Daze/Stun et validation des affixes du gear contre le pool réel 0.5.2.

## Références visuelles

- `images/passive_tree_master.webp` : master de l’arbre validé, avec les Notables importants replacés sur leurs coordonnées réelles.
- Les planches **Skills / Supports** et **Anneaux + Ingenuity** font partie du projet et doivent conserver l’identité visuelle HOLLOW DOMINION : noir/bleu électrique, Cold bleu, Lightning or, cadres métalliques et typographie fantasy PoE.
- Le visuel anneaux + Ingenuity reste une **référence esthétique** tant que ses affixes n’ont pas été validés contre le pool 0.5.2.
- Les anciens arbres générés, anciens fichiers Hollow Palm et workspaces intermédiaires sont historiques et ne doivent pas servir de vérité mécanique.

## Politique de raisonnement

Toujours distinguer **verrouillé**, **configuration de travail** et **provisoire / à auditer**. Ne jamais transformer une condition en bonus permanent. Pour une question précise sur l’arbre, revenir aux stats de `data.json`; pour une question sur l’allocation, revenir au `.build`; pour une décision de build, le Master Context prévaut.

## Avant publication finale

Lire le Master Context et terminer sa checklist : audit Spirit, test Mana, supports provisoires, Quarterstaff final, seuils de stats, validation de chaque affixe, correction des chiffres Spirit/attributs des infographies. Le diaporama final ne doit être produit qu’après ces validations.
