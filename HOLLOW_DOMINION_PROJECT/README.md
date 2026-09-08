# HOLLOW DOMINION — Project Reference Hub

Ce dossier est la référence centrale du projet **HOLLOW DOMINION** afin qu'une autre conversation ChatGPT puisse retrouver rapidement les éléments essentiels sans reconstruire le contexte depuis zéro.

## Sources de vérité

1. `reference/HOLLOW_DOMINION_reference.build`
   - `.build` de référence désigné par l'utilisateur.
   - Contient 120 passifs principaux et 9 entrées d'Ascendancy en comptant `AscendancyMonk1Start`; cela correspond à 8 points d'Ascendancy dépensés.
   - La description interne du fichier est ancienne et ne doit PAS être utilisée pour recompter les allocations.

2. `reference/HOLLOW_DOMINION_identification_120_default_8_ascendancy.md`
   - Rapport validé : IDs, noms, types et coordonnées des 120 passifs + 8 passifs Martial Artist.

3. `../Skill Trees/0.5.2/data.json`
   - Vérité structurelle pour la géométrie, les coordonnées et les connexions de l'arbre PoE 2 version 0.5.2.

## Références visuelles

- `visuals/HOLLOW_DOMINION_passive_tree_master.webp`
  - Master technique de l'arbre passif validé.
  - Les Notables importants sont placés sur leurs coordonnées réelles 0.5.2.
  - Ne jamais déplacer un nœud pour l'esthétique; seuls les labels peuvent être décalés.

- `visuals/HOLLOW_DOMINION_skills_supports_reference.webp`
  - Planche du build : Hollow Form, Shattering Palm, Charged Staff, Tempest Bell, Hollow Resonance, Hollow Focus, Charge Regulation, Convalescence, Spirit Vessel, Elemental Conflux, supports, réservations et prérequis.

- `visuals/HOLLOW_DOMINION_ingenuity_rings_reference.webp`
  - Planche équipement dédiée aux deux bagues Cold/Lightning et à la ceinture Ingenuity.

## Identité visuelle à conserver

- Fond sombre noir / bleu électrique.
- Cold : bleu / cyan.
- Lightning : or / jaune électrique.
- Cadres métalliques / fantasy PoE.
- Typographie fantasy lisible avec hiérarchie très structurée.
- Informations techniques denses mais organisées en panneaux.

## Règles importantes pour les futures conversations

- Ne jamais inventer la géométrie de l'arbre passif.
- Pour l'arbre, utiliser `Skill Trees/0.5.2/data.json` + le `.build` de référence + le rapport d'identification.
- 120 passifs principaux + 8 points Martial Artist dépensés.
- `AscendancyMonk1Start` est un repère graphique et n'est pas compté comme point dépensé.
- Ne pas se fier au texte de description obsolète intégré au `.build` pour les comptes.
- Les visuels présents dans `visuals/` sont des références de direction artistique et de contenu.

## Note sur les images

Les fichiers WebP de ce dossier sont des copies de référence optimisées pour consultation rapide depuis GitHub. Les originaux PNG haute résolution peuvent rester dans la conversation de production, mais ces versions sont suffisantes pour transmettre le contenu, la mise en page et la direction artistique à une autre conversation.
