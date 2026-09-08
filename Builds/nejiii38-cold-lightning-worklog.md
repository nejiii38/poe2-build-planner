# Nejiii38 — Cold + Lightning Hollow Palm tree

Working record for reproducing the current Maxroll passive tree in the GitHub planner.

## Current point budget

**2 passive points available**

Accounting from the supplied Maxroll screenshot/workspace:

- 12 points removed
- 10 points added
- Net: 2 points available

## Removed nodes — 12 points

### Beastial Skin / Evasion branch — 4
Screenshot coordinates:
- (919, 479)
- (932, 469)
- (938, 465)
- (953, 461)

### Critical cluster — 8
Screenshot coordinates:
- (990, 446)
- (994, 439)
- (998, 429)
- (990, 435)
- (983, 439)
- (980, 447)
- (975, 455)
- (964, 461)

## Added nodes — 10 points

### Generic Elemental Damage — 6
Screenshot coordinates:
- (723, 263)
- (719, 249)
- (726, 253)
- (732, 246)
- (747, 249)
- (741, 253)

### Freeze — 4
Screenshot coordinates:
- (716, 279)
- (722, 286)
- (731, 283)
- (724, 281)

## Build constraints

- Hollow Palm
- Cold + Lightning
- Cold: Freeze + Shattering Palm / clear
- Lightning: Charged Staff + Shock/Electrocute / bosses
- Generic Elemental Damage is preferred when it benefits both elements
- Target notables include Resonating Frost and Resonating Thunder
- Resonating Flames / Fire is currently excluded
- Critical investment should be efficient rather than maximized
- Defense: Evasion Rating + Energy Shield
- No Armour investment
- Avoid inefficient long life/regen branches
- Preserve the passive-point counter during every iteration

## Reproduction status

The planner stores the actual PoE 2 tree in `Skill Trees/0.5.2/data.json` and indexes each node by numeric skill id. The next mapping step is to convert the Maxroll screenshot selections to those real skill ids. Do not invent or approximate node topology: only commit allocated skill ids once the mapping is verified against the real tree data.
