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

## Critical branch being removed — 8 points

The screenshot-to-tree transform maps the branch to the real group 1534 plus its Attribute pathing node. Verified nearby real IDs are:

- `criticals52` — Critical Damage
- `criticals56` — Critical Chance
- `criticals53` — Heartstopping
- `criticals59` — Attack Critical Chance
- `criticals55_` — Struck Through
- `criticals57_` — Attack Critical Damage
- `criticals54_` — Heartbreaking
- pathing node near screenshot coordinate (964,461): `dexterity50` — Attribute

The adjacent `criticals58` / Critical Mastery nodes are not substituted merely because they are nearby; topology is being used to preserve the exact eight-point branch.

## Verified target Elemental wheel — group 1113

Final Cold + Lightning route excludes Fire and is built from real tree IDs. Preferred six-node connected allocation:

- `elemental22` — Elemental Damage — 10%
- `elemental44` — Elemental Damage — 10%
- `cold37` — Echoing Frost — 30% increased Elemental Damage if you've Chilled an Enemy Recently
- `elemental46` — Elemental Damage — 10%
- `lightning40` — Echoing Thunder — 30% increased Elemental Damage if you've Shocked an Enemy Recently
- `elemental42` — Elemental Damage — 10%

`fire34` — Echoing Flames is deliberately excluded.

This six-point route contributes 40% unconditional increased Elemental Damage plus up to 60% conditional increased Elemental Damage when both Chill and Shock conditions are active.

## Verified target Freeze branch — group 1093 — 4

- `chill_and_freeze1` — 15% increased Freeze Buildup
- `chill_and_freeze2` — 15% increased Freeze Buildup
- `chill_and_freeze3` — 15% increased Freeze Buildup
- `chill_and_freeze8` — Shattering — 30% increased Freeze Buildup, 20% increased Chill Duration on Enemies, 20% increased Magnitude of Chill you inflict

Total from these four nodes: **75% increased Freeze Buildup**, plus the Chill bonuses from Shattering.

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

The screenshot-to-real-tree coordinate transform has been validated against exact node centres, including Beastial Skin. The Elemental and Freeze target groups above are now resolved to real 0.5.2 node IDs and real stats. Remaining work is reconstructing and validating the complete original allocation (including weapon-set colouring and ascendancy) before writing the final `.build`; no unverified node IDs will be presented as final.
