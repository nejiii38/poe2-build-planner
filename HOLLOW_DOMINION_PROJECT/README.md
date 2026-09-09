# HOLLOW DOMINION — Project Archive

Dossier de référence persistant pour le projet **HOLLOW DOMINION** (Path of Exile 2, version 0.5.2).

## Règle de travail

Toute nouvelle conversation ChatGPT qui reprend ce projet doit commencer par consulter ce dossier avant de modifier le build, l’arbre, les visuels, le gear ou le futur diaporama.

## Base de connaissance consolidée

- `reference/HOLLOW_DOMINION_KNOWLEDGE_BASE.md` — synthèse humaine consolidée destinée au theorycraft et aux raisonnements futurs.
- `reference/HOLLOW_DOMINION_REASONING_INDEX.json` — index structuré des décisions, métriques mécaniques dérivées, skills/supports, gear, risques et audits ouverts.
- `live_build/` — **application et état numérique vivant du build**. Pour toute question sur les valeurs courantes du stuff, les résistances, le crit, le Spirit ou les priorités d’optimisation, lire `live_build/build-data.js` puis `live_build/calculations.js`.

Les index et l’application accélèrent les raisonnements mais ne remplacent pas les sources mécaniques de vérité.

## Ordre de priorité des sources

1. `reference/HOLLOW_DOMINION_MASTER_CONTEXT.md` — **contexte maître actuel**. Les décisions verrouillées priment sur les informations plus anciennes.
2. `reference/HOLLOW_DOMINION_reference.build` — allocations exactes ; le champ `description` interne est ancien.
3. `../Skill Trees/0.5.2/data.json` — source structurelle officielle pour IDs, noms, stats, coordonnées, groupes et connexions réelles de l’arbre.
4. `reference/HOLLOW_DOMINION_identification_120_default_8_ascendancy.md` — rapport validé ID ↔ nom ↔ type ↔ coordonnées.
5. `live_build/build-data.js` — **état numérique de travail courant** du gear, des stats, des supports et des slots libres ; à mettre à jour lorsqu’une décision numérique est validée.

En cas de conflit mécanique, les quatre premières sources priment. En cas de conflit entre une ancienne infographie et `live_build/build-data.js`, utiliser le live state.

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
- **Convalescence est définitivement exclue du build.**

## Arbre passif — vérité validée

- **120/120 passifs principaux**.
- **8/8 passifs Martial Artist dépensés**.
- `AscendancyMonk1Start` est seulement le point de départ graphique et n’est pas compté.
- Tous les IDs utilisés existent dans `Skill Trees/0.5.2/data.json`.
- **122 connexions réelles** relient les 120 passifs sélectionnés et les 120 forment un seul composant connecté.
- Ne pas afficher ni commenter les Weapon Sets dans le visuel final.
- Pour l’arbre passif, ne jamais inventer ou déplacer un nœud. Utiliser les coordonnées et connexions réelles de `Skill Trees/0.5.2/data.json`.
- **Ne jamais utiliser un générateur d’images pour reconstruire la topologie technique de l’arbre.**

## Compétences / supports — état de travail actuel

- Hollow Form → Whirling Assault : Heavy Swing, Heightened Charges, Blindside, Vorana’s Siege.
- Shattering Palm : Ancestral Call II, Rapid Attacks II, Magnified Area II, Elemental Armament II, Rising Tempest.
- Charged Staff : Blind II, Perpetual Charge, Prolonged Duration II, Elemental Armament II, Innervate.
- Hollow Resonance, Hollow Focus et Tempest Bell : packages documentés dans le Master Context et le live state.
- Charge Regulation : Vitality II / Clarity II / Precision II — à auditer côté Spirit.
- Spirit Vessel : package passif/utilitaire conservé.
- Elemental Conflux reste **optionnel**.
- **Convalescence : supprimée, ne plus la réintroduire.**

## Live Build App

Dossier : `HOLLOW_DOMINION_PROJECT/live_build/`

- `index.html` — interface live.
- `build-data.js` — source numérique courante, lisible par humain/ChatGPT.
- `calculations.js` — résistances endgame, critique et Spirit.
- `app.js` — rendu, édition locale et export JSON.
- `visual-manifest.json` — identifie l’image de référence utilisateur et ses zones de crop.

État virtuel courant important : Ingéniosité 30/30 ; résistances optimisées vers **75/75/75/~75 après pénalité endgame** ; un suffixe libre sur **Masque souriant** et un suffixe libre sur **Amulette solaire**, volontairement laissés à 0 en attendant l’optimisation critique.

## Contraintes encore ouvertes

Priorités actuelles : 1) **chance de critique réelle**, 2) sustain **Mana**, 3) budget **Spirit**, 4) gros hits physiques, 5) supports secondaires, 6) clear final. Le gros mod Attack Speed de la Bague de Topaze reste à auditer contre le pool réel 0.5.2.

## Références visuelles

- `images/passive_tree_master.webp` : master de l’arbre validé.
- Le fichier indiqué dans `live_build/visual-manifest.json` est l’image de référence actuelle pour la mise en page et le snapshot des valeurs du build.
- Les anciens arbres générés, anciens fichiers Hollow Palm et workspaces intermédiaires sont historiques et ne doivent pas servir de vérité mécanique.

## Politique de raisonnement

Toujours distinguer **verrouillé**, **configuration de travail** et **provisoire / à auditer**. Ne jamais transformer une condition en bonus permanent. Pour une question sur l’arbre, revenir à `data.json`; pour l’allocation, au `.build`; pour une décision de build, au Master Context ; pour les **valeurs courantes modifiables**, lire et mettre à jour `live_build/build-data.js`.
