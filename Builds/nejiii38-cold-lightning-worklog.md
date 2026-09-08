# Nejiii38 — Cold + Lightning Hollow Palm tree

Working record for reproducing the current Maxroll passive tree in the GitHub planner.

## Current point budget

**2 passive points available**

- 12 points removed
- 10 points added
- Net: 2 points available

## Verified removed nodes — Beastial Skin / Evasion branch — 4

- `evasion33` — Beastial Skin — 100% increased Evasion Rating from Equipped Body Armour
- `evasion28` — Evasion — 15% increased Evasion Rating
- `evasion21` — Evasion — 15% increased Evasion Rating
- `evasion24_` — Evasion — 15% increased Evasion Rating

## Verified critical/pathing branch being removed — 8

- `criticals52` — Critical Damage — 15% increased Critical Damage Bonus
- `criticals56` — Critical Chance — 10% increased Critical Hit Chance
- `criticals53` — Heartstopping — +10 Intelligence, 20% increased Critical Hit Chance
- `criticals59` — Attack Critical Chance — 10% increased Critical Hit Chance for Attacks
- `criticals55_` — Struck Through — Attacks have +1% to Critical Hit Chance
- `criticals57_` — Attack Critical Damage — 15% increased Critical Damage Bonus for Attack Damage
- `criticals54_` — Heartbreaking — 25% increased Critical Damage Bonus, +10 Strength
- `dexterity50` — Attribute pathing node

The adjacent `criticals58` and Critical Mastery are not substituted merely because they are nearby; the screenshot branch maps coherently to the eight IDs above.

## Verified target Elemental wheel — group 1113 — 6

Final Cold + Lightning route excludes Fire:

- `elemental22` — Elemental Damage — 10%
- `elemental44` — Elemental Damage — 10%
- `cold37` — Echoing Frost — 30% increased Elemental Damage if you've Chilled an Enemy Recently
- `elemental46` — Elemental Damage — 10%
- `lightning40` — Echoing Thunder — 30% increased Elemental Damage if you've Shocked an Enemy Recently
- `elemental42` — Elemental Damage — 10%

`fire34` — Echoing Flames is deliberately excluded.

Contribution of this six-point target: **40% unconditional increased Elemental Damage**, plus **30% after Chill** and **30% after Shock**, for up to **100% increased Elemental Damage from this wheel while both conditions are active**.

## Verified target Freeze branch — group 1093 — 4

- `chill_and_freeze1` — 15% increased Freeze Buildup
- `chill_and_freeze2` — 15% increased Freeze Buildup
- `chill_and_freeze3` — 15% increased Freeze Buildup
- `chill_and_freeze8` — Shattering — 30% increased Freeze Buildup, 20% increased Chill Duration on Enemies, 20% increased Magnitude of Chill you inflict

Contribution of this four-point target: **75% increased Freeze Buildup**, **20% increased Chill Duration**, and **20% increased Chill Magnitude**.

## Class / Ascendancy — verified

The tree start at the centre maps to internal node `six704`, which is the **Monk** start in the 0.5.2 data.

The build's Hollow Form target resolves the ascendancy unambiguously to **Martial Artist (`Monk1`)**:

- `AscendancyMonk1Start` — Martial Artist
- `AscendancyMonk1Small6` — 10% chance when gaining a Power Charge to gain an additional Power Charge
- `AscendancyMonk1Notable7` — **Hollow Form Technique** — Grants Skill: Hollow Form

Other Martial Artist branches in the data include Hollow Focus Technique, Hollow Resonance Technique, Martial Adept/Martial Master, Runic Meridians, Way of the Mountain, and Way of the Stonefist. The exact remaining 6 ascendancy-point allocation is still being matched rather than guessed.

## Full allocation reconstruction pass — started

The next-stage image/topology pass is now running against the real 0.5.2 graph rather than against approximate screenshot coordinates alone.

Current raw visual detection finds **132 candidate allocated nodes** after excluding the obvious Maxroll UI and bottom-bar regions. They split into:

- 99 cream/common candidates
- 25 red weapon-set candidates
- 8 green weapon-set candidates

These are deliberately treated as candidates, not as final allocations. On the real passive-tree graph they currently form large connected components of 40 and 26 nodes plus several smaller components. The next cleanup step is to use graph continuity from the Monk start and the known highlighted branches to eliminate UI/colour false positives and restore any visually weak bridge nodes.

This pass is also what will resolve the exact weapon-set ownership before serialization, so the final `.build` can use the planner's real `weapon_set` field instead of flattening the two sets together.

## Build constraints

- Hollow Palm
- Cold + Lightning
- Cold: Freeze + Shattering Palm / clear
- Lightning: Charged Staff + Shock/Electrocute / bosses
- Generic Elemental Damage preferred when it benefits both elements
- Echoing Frost + Echoing Thunder targeted
- Echoing Flames / Fire excluded
- Critical investment efficient rather than maximized
- Defense: Evasion Rating + Energy Shield
- No Armour investment
- Preserve the passive-point counter

## Reproduction status

The screenshot-to-real-tree coordinate transform has been validated against exact node centres, including Beastial Skin and the removed critical branch. The Elemental and Freeze target groups are resolved to real 0.5.2 node IDs, real topology and real stats. The class is confirmed as Monk and the ascendancy as Martial Artist (`Monk1`). The full common/weapon-set reconstruction pass has now started; after graph cleanup and the remaining ascendancy match, the verified 12-out / 10-in delta will be applied and the final `.build` serialized.