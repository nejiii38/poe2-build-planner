# HOLLOW DOMINION — MASTER CONTEXT

**Path of Exile 2 • Martial Artist • Cold / Lightning • version 0.5.2 • by Nejib**

**Mise à jour opérationnelle : 2026-09-10 — politique de références et synchronisation GitHub verrouillée.**

Ce fichier est la référence opérationnelle prioritaire du projet HOLLOW DOMINION. Il sert à poursuivre le theorycraft, la validation technique, la reconstruction de l’arbre, le live build et le futur guide/diaporama.

> En cas de contradiction avec une information plus ancienne, une décision indiquée ici comme **verrouillée** prévaut.

## 1. Identité et règles verrouillées

- Nom : **HOLLOW DOMINION — by Nejib**.
- Version de référence : **Path of Exile 2 — 0.5.2**.
- Classe / Ascendancy : **Monk — Martial Artist**.
- Arme : **Quarterstaff**. Ne pas réintroduire Hollow Palm malgré les anciens noms de fichiers/presets.
- **Fists of Stone** (Lochtonial Caress transformé via Way of the Stonefist) est une pièce mécanique obligatoire.
- Pour le visuel de l’arbre : travailler comme un arbre Default unique de **120 passifs + 8 passifs d’Ascendancy**. Ne pas afficher ni commenter les Weapon Sets.
- Priorité du build : **Hollow Form → Whirling Assault** pour le boss DPS ; **Shattering Palm** pour clear/Cold/Freeze ; Lightning pour Shock/contrôle et **Charged Staff**.
- Philosophie : build très offensif, avec contrôle Freeze/Stun et une vraie couche **Evasion + Energy Shield**.
- Constat bêta : avec les uniques clés mais des rares encore lambda, **les dégâts sont déjà impressionnants et le clear est très fluide**. Ne pas chercher à augmenter l’offense tant que Mana / contrôle boss / survie ne sont pas fiabilisés.
- Convention live build : **les noms des gemmes de soutien restent en anglais**.

## 2. Arbre passif — vérité validée

- **120/120** passifs de l’arbre principal.
- **8/8** passifs Martial Artist dépensés.
- `AscendancyMonk1Start` est conservé uniquement comme point de départ graphique et n’est pas compté comme point dépensé.
- Tous les IDs utilisés existent dans `Skill Trees/0.5.2/data.json`.
- Méthode obligatoire pour le visuel : rendu déterministe depuis les IDs, coordonnées et connexions du `data.json`, contrôlé par les screenshots du vrai Build Planner.
- **Ne jamais utiliser un générateur d’images pour redessiner la topologie de l’arbre.**
- Le détail complet des 120 IDs, noms, types et coordonnées est conservé dans `HOLLOW_DOMINION_identification_120_default_8_ascendancy.md`.
- Agrégats de travail actuellement utilisés par le live build : **+179% Evasion**, **+179% Energy Shield**, **+14% Attack Speed**, **+19% Skill Speed**, **+48% Mana Regeneration Rate**, **33% Evasion as Deflection**.
- Le chemin actuel contient bien les quatre allocations de Freeze prévues, pour un total de travail de **+75% increased Freeze Buildup**.

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

## 4. Compétences et supports — état actuel

### Hollow Form → Whirling Assault

**Heavy Swing • Heightened Charges • Blindside • Vorana’s Siege**

Rôle : moteur principal de DPS boss.

### Shattering Palm

**Rapid Attacks II • Magnified Area II • Elemental Armament II • Rising Tempest • Ice Bite II**

Support de swap clear : **Ancestral Call II**.

Rôle : clear, setup du premier Freeze boss et overkill. **Ice Bite II est verrouillé dans le setup boss de travail.**

**Problème en cours :** malgré les **+75% Freeze Buildup** de l’arbre présents sur la bêta, les boss ne Freeze pas aussi rapidement qu’attendu.

**Test bêta n°1 — sans Freeze support, Charged Staff actif :**
- Hollow Form n’a montré aucune contribution visible à l’accumulation de Gel du boss.
- Pendant le combat : **4 utilisations de Shattering Palm**, **Tempest Bell posée**, puis Hollow Form utilisé comme source principale de dégâts.
- Le boss est mort **avant d’être Gelé**.
- Ce test renforce fortement l’hypothèse que le Freeze boss dépend surtout de Shattering Palm / des dégâts de froid réellement appliqués, et non du DPS brut de Hollow Form.
- Ce test sert de baseline avant la correction désormais retenue : **Freezing Mark + Ice Bite II**.

### Freezing Mark

**Eternal Mark • Prolonged Duration II • Charged Mark • Mark for Death II**

- Ces quatre supports sont **VERROUILLÉS**.
- Le cinquième emplacement reste **libre / non verrouillé** pour l'instant.
- **Biting Frost II reste exclu**.
- Rôle : accélérer et prolonger le setup Freeze boss avant le passage sur Hollow Form.

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

**Clarity II • Precision II**

- **Vitality II est définitivement supprimée.**
- Réservation de travail : **70 Spirit** = 30 base + 20 Clarity II + 20 Precision II.
- Rôle : charges + utilitaire + support du sustain Mana via Clarity II.

### Danseur du vent / Wind Dancer — VERROUILLÉ

**Maim • Blind II • Rage II**

- Supports retenus et **VERROUILLÉS** : **Maim, Blind II, Rage II**.
- **Pin I est exclu** : le contrôle Pin n'est pas jugé suffisamment convaincant pour justifier un emplacement.
- **Lockdown reste INVALIDÉ / exclu** : indisponible dans le client actuel.
- Options non verrouillées : **Her Declaration**, **Seraph's Heart**.
- `Blind II` utilise un multiplicateur de coût de **110%** ; réservation de travail : **33 Spirit** pour Wind Dancer.
- Rôle : couche Evasion persistante + Gale utilitaire, avec **Maim**, **Blind** renforcé et génération de **Rage**.

### Spirit Vessel — EXCLU

- **Définitivement retiré du build actuel.**
- Motif : l’aptitude est octroyée par **Forgotten Warden**, ce qui entrerait en conflit avec notre armure de torse **Veste racée**.
- Remplacement retenu : **Danseur du vent**.

### Convalescence — EXCLU

- **Définitivement exclu du setup actif.**
- Ne pas le réintroduire sur la base d’anciens documents.

### Elemental Conflux — optionnel / inactif

- 60 Spirit.
- **Non utilisé dans la bêta actuelle.**
- Ne pas le considérer dans le budget Spirit actif tant qu’il n’est pas explicitement activé.

## 5. Défense / Energy Shield

- Armures prévues : **Evasion Rating + Energy Shield** lorsque possible.
- Arbre de travail : **+179% increased Energy Shield** et **+179% increased Evasion**.
- **Spectral Ward** : +1 Maximum ES par 12 Item Evasion sur le Body Armour.
- Recharge : **40% faster start** permanent dans l’agrégat actuel, avec **+20% supplémentaire** sous la condition de travail correspondante.
- Working gear final actuel : environ **7168 ES**, **7159 Evasion**, **2362 Deflection** avant conditions supplémentaires.
- Danseur du vent devient la couche persistante défensive/utilitaire retenue à la place de Spirit Vessel.
- Faiblesse toujours à surveiller : **gros coups physiques / slams**.

## 6. Mana, vitesse et charges — problème majeur quantifié

### Orientation verrouillée

- Ne pas chercher de Cast Speed sur l’équipement.
- Priorité : **Attack Speed >>> Cast Speed**.
- Les dégâts et le clear bêta sont déjà excellents : **ne pas ralentir le build offensivement pour résoudre le Mana tant qu’une solution de sustain existe**.
- Direction retenue pour la résolution : **Mana Regeneration Rate** en priorité, soutenue par un flacon de Mana adapté.

### Valeurs du modèle final actuel

- Mana final modélisé : environ **834**.
- Régénération de base naturelle : environ **33.36 Mana/s**.
- Bonus permanent actuel : **+73%** hors Clarity II = +48% arbre +25% campagne.
- Avec **Clarity II** : environ **+123% total**, soit **~74.4 Mana/s**.
- Avec condition “Shock récemment” du modèle : environ **~82.7 Mana/s**.

### Test bêta réel — 2026-09-09

Mesures en jeu sur Hollow Form :

- Mana maximum : **624**.
- Coût affiché de Hollow Form / aptitude enchâssée : **126 Mana**.
- Régénération affichée : **67.2 Mana/s**.
- Temps avant Mana vide sans flacon : **~5 s**.
- Temps avant Mana vide avec **Esprit de Levianga / Lavianga** : **~7 s**.

Estimation empirique dérivée des mesures :

- Déficit net sans flacon : **~124.8 Mana/s**.
- Consommation effective moyenne estimée de Hollow Form : **~192 Mana/s**.
- Avec le flacon, récupération totale effective : **~102.9 Mana/s**.
- Apport observé du flacon par rapport à la regen naturelle : **~35.7 Mana/s**.

### Statut

**OUVERT / PRIORITAIRE.** Le flacon aide nettement mais ne résout pas seul le sustain. La régénération de Mana doit devenir un critère majeur lors de la prochaine révision de l’arbre et/ou du gear final.

## 7. Spirit — problème largement désamorcé

Budget actif actuel :

- Charge Regulation : **70 Spirit**
- Danseur du vent : **33 Spirit**
- Total réservé : **103 Spirit**
- Spirit total modélisé avec gear actuel : **226**
- Libre : **123 Spirit**
- Elemental Conflux : **inactif**, donc non compté.

Conséquence importante :

- Le préfixe **+61 Spirit** du torse n’est plus nécessaire pour faire fonctionner le setup actif actuel.
- Si ce préfixe est retiré sans autre changement, le total descendrait à **165 Spirit** pour **103 réservés**, soit **62 Spirit libres**.
- Ce préfixe du torse est donc **candidat à remplacement**, avec priorité potentielle à une solution de Mana / sustain si le pool d’affixes le permet.

## 8. Quarterstaff / cible endgame

- **Duality Warding Quarterstaff** est la cible de travail endgame.
- Version du live build : base crit 10%, base 1.40 APS, +300% local Physical Damage, +22% local Attack Speed, +30% Critical Damage Bonus, 50 Runic Ward.
- Variante 15% base crit à comparer plus tard.
- Ne pas sacrifier le sustain Mana uniquement pour gagner davantage d’Attack Speed tant que la consommation de Hollow Form n’est pas stabilisée.

## 9. Ingenuity / anneaux — état de travail

- **Ingenuity** est retenue comme cible BiS de travail, avec hypothèse de **+30% bonus bague gauche / +30% bague droite** dans le live build.
- L’effet est modélisé avec arrondi `floor-per-mod`.
- Bague Améthyste gauche : concept de travail déjà intégré.
- Bague Topaze droite : le mod **+30% Attack Speed** reste marqué **audit / inactive** tant que sa légalité exacte n’est pas confirmée.
- Ne pas transformer un affixe “audit” en vérité mécanique sans validation.

## 10. Freeze boss — problème actif à diagnostiquer

### Observation bêta

- La bêta possède bien les **4 passifs Freeze** prévus, soit **+75% increased Freeze Buildup**.
- Malgré cela, les boss ne sont pas Gelés aussi rapidement qu’attendu.
- Le clear reste excellent ; le problème est spécifique au contrôle / Freeze des boss.

### Hypothèse structurelle — fortement renforcée par le test n°1

- Hollow Form → Whirling Assault est principalement une source de dégâts physiques et, dans le test bêta n°1, **n’a montré aucune contribution visible à la jauge de Freeze du boss**.
- Même avec **4 Shattering Palm**, **Tempest Bell** et **Charged Staff actif**, le boss est mort avant le premier Freeze.
- **Nouvelle contrainte de design verrouillée :** Shattering Palm ne doit pas devenir la source principale continue de Freeze en boss. Son rôle est le **setup initial** : environ **4 coups** pour construire le Combo / préparer le contrôle, puis **Tempest Bell**, puis le reste du combat doit être assuré principalement par **Hollow Form → Whirling Assault**.
- L’objectif de correction est donc désormais de **faire contribuer Hollow Form / Whirling Assault à l’accumulation de Gel**, plutôt que de simplement empiler davantage de Freeze Buildup sur Shattering Palm.
- Toute solution devra préserver autant que possible le rôle Lightning de **Charged Staff** et le DPS boss de Hollow Form.
- **Direction mécanique validée : Freezing Mark + Ice Bite II.**
  - **Freezing Mark** devient l'outil de setup boss : les Hits contre la cible marquée génèrent davantage de Freeze Buildup ; après le Freeze, le buff octroie **30% des dégâts gagnés sous forme de Cold pendant 10 s**.
  - **Ice Bite II** est intégré à **Shattering Palm** : lorsqu'une aptitude supportée Freeze, le personnage gagne **30% des dégâts sous forme de Cold pendant 6 s**, ce qui donne ensuite à Hollow Form une composante Cold capable de participer au Freeze Buildup.
  - Shattering Palm ayant déjà 5 supports, **Ancestral Call II passe en clear swap facultatif** afin de libérer le slot d'Ice Bite II.
  - **Biting Frost II est rejeté / exclu** : ce support empêche l'aptitude supportée de générer du Freeze Buildup et consomme le Freeze, contraire à notre objectif.
- Rotation de travail verrouillée pour test : **Freezing Mark → ~4 Shattering Palm → premier Freeze → Tempest Bell → Hollow Form**.
- Statut : **PARTIELLEMENT RÉSOLU / EN TEST**. Le mécanisme choisi est intégré ; il reste à mesurer en jeu si Hollow Form entretient suffisamment le Freeze après le premier proc.

### Protocole de test

**Test n°1 effectué :**
- setup antérieur sans Ice Bite II / Freezing Mark ;
- Charged Staff actif ;
- 4 Shattering Palm ;
- Tempest Bell posée ;
- Hollow Form pour le DPS ;
- aucun Freeze avant la mort du boss ;
- aucune contribution visible de Hollow Form à la jauge.

**Test n°2 à faire — moteur validé :**
1. Appliquer **Freezing Mark** au boss.
2. Utiliser environ **4 Shattering Palm** avec **Ice Bite II**.
3. Noter le moment du **premier Freeze** et confirmer l'activation des buffs Cold.
4. Poser **Tempest Bell**, puis passer sur **Hollow Form**.
5. Observer si Hollow Form fait progresser visiblement la nouvelle jauge de Freeze et si un second Freeze est obtenu avant expiration des buffs.
6. Garder **Charged Staff actif** pour rester comparable au test n°1.

### Statut

**PARTIELLEMENT RÉSOLU / EN TEST.**
- La direction mécanique est maintenant verrouillée : **Freezing Mark + Ice Bite II**.
- **Biting Frost II est exclu**.
- Shattering Palm reste un setup court avant **Tempest Bell**.
- La validation restante est expérimentale : confirmer que les buffs Cold permettent réellement à **Hollow Form → Whirling Assault** de reprendre et entretenir l'accumulation de Gel sur boss.

## 11. Problèmes résolus / décisions récentes

### RÉSOLU — Spirit Vessel inutilisable avec le torse prévu
- Cause : Spirit Vessel dépend de Forgotten Warden.
- Solution : **Spirit Vessel supprimé**, **Danseur du vent ajouté**.

### RÉSOLU — Vitality II inutile
- Cause : regen Life peu pertinente pour un build reposant massivement sur ES.
- Solution : **Vitality II supprimée définitivement de Charge Regulation**.
- Effet secondaire positif : économie de **40 Spirit**.

### RÉSOLU / VERROUILLÉ — Supports de Danseur du vent
- Package final retenu : **Maim + Blind II + Rage II**.
- **Pin I est exclu** du setup.
- **Lockdown reste exclu / invalide**.
- **Her Declaration** et **Seraph's Heart** restent facultatifs et non verrouillés.
- Réservation active de Wind Dancer : **33 Spirit**.

### PARTIELLEMENT RÉSOLU — Pression Spirit
- Les réservations actives sont désormais à **103 Spirit**.
- Elemental Conflux reste inactif.
- Le +61 Spirit du torse est maintenant probablement superflu pour la bêta actuelle.

### OUVERT — Mana
- Problème confirmé et quantifié par test réel.
- Direction de résolution : **Mana Regeneration Rate + Lavianga**, puis révision arbre/gear.

### RÉSOLU — Supports de Freezing Mark
- Supports verrouillés : **Eternal Mark + Prolonged Duration II + Charged Mark + Mark for Death II**.
- Cinquième slot laissé libre.
- **Biting Frost II** reste exclu.

### PARTIELLEMENT RÉSOLU / EN TEST — Freeze boss
- Problème confirmé malgré les +75% Freeze Buildup de l’arbre.
- Test n°1 : aucun Freeze avant la mort du boss malgré 4 Shattering Palm + Tempest Bell, Charged Staff actif.
- Hollow Form n’a montré aucune contribution visible à l’accumulation de Gel avant correction.
- **Contrainte verrouillée :** Shattering Palm = ~4 coups de setup, puis Tempest Bell ; Hollow Form doit ensuite assurer le DPS et participer lui-même au Freeze Buildup.
- **Solution de travail intégrée : Freezing Mark + Ice Bite II sur Shattering Palm.**
- Supports de **Freezing Mark verrouillés** : **Eternal Mark • Prolonged Duration II • Charged Mark • Mark for Death II**.
- Le 5e slot de Freezing Mark reste libre pour l'instant.
- **Ancestral Call II** passe en swap clear facultatif pour respecter la limite de 5 supports.
- **Biting Frost II est exclu.**
- Prochain test : vérifier le premier Freeze avec Freezing Mark + Ice Bite II, puis observer si la jauge continue à progresser sous Hollow Form pendant les buffs Cold.

### RÉSOLU / EN TEST — Visuels PoE2DB cassés dans le navigateur
- Observation utilisateur : plusieurs icônes PoE2DB affichaient le texte alternatif / une vignette cassée sur le live build malgré une correspondance logique correcte.
- Cause retenue : certaines URLs directes de CDN PoE2DB sont fragiles selon le navigateur/cache et peuvent renvoyer 403 ou cache miss.
- Correctif : chaque visuel utilise désormais une chaîne de fallback (`webp` puis `png` quand applicable) ; les skills reviennent au visuel local précédent si toutes les URLs PoE2DB échouent, et le gear garde également son visuel local comme dernier recours.
- La mise en forme générale reste inchangée.
- Statut : **RÉSOLU / EN TEST** — à confirmer visuellement sur le navigateur utilisateur après cache-bust.

## 12. Évaluation et priorités actuelles

- Les dégâts bêta et le clear sont déjà **très élevés / très fluides** avec un équipement non-BiS.
- Priorité n°1 : **sustain Mana**.
- Priorité n°2 : **valider en jeu le moteur Freeze Freezing Mark + Ice Bite II → Hollow Form**.
- Priorité n°3 : conserver la défense Evasion + ES et surveiller les gros hits physiques.
- Priorité n°4 : seulement ensuite reprendre critique / affixes offensifs / optimisation fine.
- Règle de pruning : ne pas ajouter de mécanique qui ne soutient pas directement **Whirling Assault**, le contrôle nécessaire, le sustain ou la survie.

## 13. Checklist avant build final 100%

- Terminer les tests Freeze boss.
- Mesurer le sustain Hollow Form après chaque modification importante de Mana / Attack Speed.
- Réviser l’arbre si nécessaire pour intégrer davantage de **Mana Regeneration Rate** sans dégrader inutilement le DPS.
- Auditer le meilleur remplacement du **+61 Spirit** sur la Veste racée.
- Valider les supports encore marqués provisoires.
- Fixer les seuils finaux Attack Speed / crit / Freeze / Stun.
- Valider chaque affixe du gear contre le pool réel 0.5.2.
- Recalculer Spirit, Mana, ES, Evasion et Deflection après chaque modification verrouillée.
- Après seulement : créer le diaporama final HOLLOW DOMINION.

## 14. Protocole automatique de maintenance du MASTER CONTEXT — VERROUILLÉ

À partir du 2026-09-09 :

- **Chaque nouvelle problématique significative soulevée pendant le theorycraft ou les tests en jeu doit être ajoutée automatiquement à ce fichier.**
- **Chaque problématique solutionnée doit être mise à jour automatiquement**, avec la cause retenue, la solution, l’impact sur le build et son nouveau statut.
- Statuts à utiliser : **OUVERT**, **EN TEST**, **PARTIELLEMENT RÉSOLU**, **RÉSOLU**, **VERROUILLÉ**, **AUDIT**.
- Les mesures réelles en jeu doivent être conservées séparément des projections théoriques.
- Une hypothèse ne doit jamais être transformée en décision verrouillée sans validation.
- Pour toute modification du MASTER CONTEXT : synchroniser la version actuelle, créer un backup local daté, modifier la copie locale, puis appliquer la même mise à jour sur la branche GitHub du projet et vérifier le résultat.
- Ce fichier doit rester cohérent avec le live build ; lorsqu’une décision est verrouillée, **MASTER CONTEXT et live build doivent être alignés automatiquement**.
- **Chaque fichier nouvellement désigné comme référence du projet doit être ajouté automatiquement à la section “Sources associées du projet”, avec son rôle, son niveau d’autorité, son statut et son emplacement canonique.**
- **Chaque référence active doit être présente dans le dossier GitHub approprié du projet** (`reference/`, `images/`, `live_build/` ou emplacement canonique existant comme `Skill Trees/0.5.2/`). Si une référence est remplacée ou devient obsolète, son statut doit être indiqué explicitement et la structure GitHub mise à jour en conséquence.
- **Toute modification d’une référence active doit entraîner la synchronisation des fichiers dépendants concernés** : MASTER CONTEXT, Knowledge Base, Reasoning Index, live build, manifestes/visuels et documentation de projet selon le cas.
- **Après chaque synchronisation GitHub, vérifier le contenu réellement présent sur la branche de travail avant de considérer l’opération terminée.**

## 15. Visuels et futur diaporama

- Conserver le visuel compétences/supports validé comme référence esthétique, mais ne jamais utiliser un poster ancien comme source mécanique.
- Pour l’arbre : **120 passifs principaux + 8 Ascendancy**, chemin réel lumineux, Notables importants en rouge, Ascendancy en violet, non-alloué en gris sombre.
- Le visuel final doit rester **reproductible nœud par nœud par un débutant**.
- Créer ensuite un second visuel de levelling depuis exactement le même master, avec **8–12 grandes étapes** plutôt que 120 numéros.

## Sources associées du projet

### Niveau 1 — autorité opérationnelle
- `HOLLOW_DOMINION_MASTER_CONTEXT.md` — **source prioritaire** des décisions verrouillées et de l’état courant. Emplacement canonique : `HOLLOW_DOMINION_PROJECT/reference/`. Statut : **ACTIF / VERROUILLÉ**.

### Niveau 2 — allocations et topologie de l’arbre
- `HOLLOW_DOMINION_reference.build` — allocations passives sérialisées de référence. Emplacement canonique : `HOLLOW_DOMINION_PROJECT/reference/`. Statut : **ACTIF**.
- `Skill Trees/0.5.2/data.json` — IDs, noms, stats, coordonnées, groupes et connexions de l’arbre PoE2 0.5.2. Emplacement canonique : `Skill Trees/0.5.2/`. Statut : **ACTIF / SOURCE TOPOLOGIQUE**.
- `HOLLOW_DOMINION_identification_120_default_8_ascendancy.md` — correspondance validée des 120 passifs principaux + 8 Ascendancy. Emplacement canonique : `HOLLOW_DOMINION_PROJECT/reference/`. Statut : **ACTIF**.

### Niveau 3 — index, raisonnement et audits
- `HOLLOW_DOMINION_KNOWLEDGE_BASE.md` — base consolidée de theorycraft et hiérarchie des sources. Emplacement canonique : `HOLLOW_DOMINION_PROJECT/reference/`. Statut : **ACTIF SECONDAIRE** ; doit rester synchronisé avec le MASTER CONTEXT et ne peut jamais le contredire.
- `HOLLOW_DOMINION_REASONING_INDEX.json` — index mécanique structuré et liens vers les sources exactes. Emplacement canonique : `HOLLOW_DOMINION_PROJECT/reference/`. Statut : **ACTIF SECONDAIRE** ; doit rester synchronisé avec le MASTER CONTEXT.
- `HOLLOW_DOMINION_PoE2DB_visual_audit_FINAL_20260910.md` — audit des visuels PoE2DB du live build. Emplacement canonique : `HOLLOW_DOMINION_PROJECT/reference/`. Statut : **ACTIF — AUDIT VISUEL**.

### Niveau 4 — état exécutable du live build
- `live_build/build-data.js` — état courant gear / compétences / supports.
- `live_build/tree-state.js` — agrégats programmables de l’arbre.
- `live_build/calculations.js` — moteur de calcul du personnage.
- `live_build/app.js` — logique de l’interface live build.
- `live_build/index.html` — page principale.
- `live_build/style.css` — mise en forme principale.
- `live_build/poe2db-visuals.js` — mapping/fallbacks des visuels PoE2DB.
- `live_build/poe2db-visuals.css` — styles des visuels PoE2DB.
- `live_build/visual-manifest.json` — manifeste des visuels.
- `live_build/README.md` — documentation du live build.
- Tous ces fichiers sont **ACTIFS** et doivent être synchronisés lorsqu’une décision verrouillée les affecte.

### Niveau 5 — références visuelles techniques / esthétiques
- `images/passive_tree_master.webp` — visuel maître actuellement présent dans le dépôt. Statut : **ACTIF**.
- `HOLLOW_DOMINION_trace_exact_120_plus_8_v2(2).png` — trace technique historique connue. Statut : **RÉFÉRENCE CONNUE / FICHIER À RESTAURER SI MAINTENU ACTIF** ; ne pas prétendre qu’il est disponible tant qu’il n’est pas présent dans le dépôt.
- `HOLLOW_DOMINION_MASTER_PASSIVE_TREE_0.5.2_v2_NOTABLES_EXACTS(1).png` — validation technique historique connue. Statut : **RÉFÉRENCE CONNUE / FICHIER À RESTAURER SI MAINTENU ACTIF**.
- `hollow dominion by nejib(1).png` — référence esthétique skills/supports historique connue. Statut : **RÉFÉRENCE CONNUE / FICHIER À RESTAURER SI MAINTENU ACTIF**.
- `Guide des anneaux Ingenuity du Moine.png` — référence esthétique Ingenuity / anneaux disponible en Library. Statut : **RÉFÉRENCE ESTHÉTIQUE SECONDAIRE** ; ne remplace jamais les validations mécaniques.

### Références historiques / non autoritatives
- Anciens MASTER CONTEXT, anciens posters, anciens `.build` Hollow Palm, workspaces HTML et prototypes restent des archives uniquement.
- Ils ne doivent jamais écraser une décision ou une donnée issue d’une source de niveau supérieur.

Ce fichier doit être lu avant toute modification majeure du build, de l’arbre, du gear ou du guide final.


## Politique visuelle du live build — VERROUILLÉE (2026-09-10)

- **PoE2DB est la source visuelle de référence** pour les équipements, compétences et gemmes de soutien du site.
- À chaque modification future d’un **item**, d’un **sort/skill** ou d’une **support gem**, le visuel correspondant doit être recherché/vérifié sur PoE2DB puis répercuté automatiquement dans la copie locale et le live build.
- Les **fonds transparents natifs** doivent être conservés.
- Les supports sont affichés **sans numérotation**, avec un **petit logo à gauche de leur ligne**, sans modifier la mise en forme générale du site.
- Pour un **Lineage Support** dont PoE2DB n’expose pas une seconde icône de support, utiliser l’image officielle de la gemme publiée par PoE2DB.
- Les anciens SVG/sprites issus du poster sont conservés uniquement comme **rollback**, mais ne constituent plus la source visuelle active.

### RÉSOLU — audit des visuels PoE2DB
- Les visuels ont été contrôlés individuellement pour **9 équipements, 10 compétences et 31 supports** du live build.
- Les mauvais liens du brouillon pour **Lochtonial Caress, Duality et Ingenuity** ont été remplacés par les images exactes exposées par leurs fiches PoE2DB.
- Le chemin de **Daggerfoot Shoes** a été corrigé en `BootsDexInt04`.
- Les identifiants visuels incorrects de **Charged Mark, Mark for Death II, Innervate, Overabundance II, Stun III et Cooldown Recovery II** ont été corrigés à partir des liens d’images PoE2DB.
- **Vorana's Siege, Her Declaration et Seraph's Heart** utilisent leur image officielle de Lineage Support.

### AUDIT — Elemental Focus II
- Le live build contient encore le libellé **Elemental Focus II** sur Elemental Conflux.
- La base PoE2DB courante expose **Elemental Focus** sans variante `II`.
- Le visuel du site est donc relié à l’icône officielle actuelle d’Elemental Focus, mais **le nom/support du build n’est pas modifié sans validation explicite**.
