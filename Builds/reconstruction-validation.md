# Reconstruction validation — Nejiii38 Hollow Palm

## Goal
Reconstruct the original Maxroll allocation from the screenshot using the real PoE2 0.5.2 passive graph before applying the Cold + Lightning changes.

## Locked references
- Class start: Monk (`six704`)
- Ascendancy: Martial Artist (`Monk1`)
- Hollow Palm Technique: `passive_keystone_hollow_palm_technique`
- Screenshot transform: scale 0.0334671, rotation 2.021°, translation (607.46, 410.40)
- Screenshot counters: `120/98`, `22/22`, `22/22`, `8/8`

## Validation order
1. Recover common allocations by projected node highlight + graph connectivity from Monk start.
2. Recover weapon-set allocations separately (red / green) and validate their connectivity.
3. Resolve the 8 Martial Artist ascendancy allocations without guessing.
4. Verify Hollow Palm and all required bridge nodes.
5. Apply the verified delta: 12 removed / 10 added.
6. Confirm final passive budget leaves exactly 2 points available.
7. Reject orphan/disconnected allocations.
8. Serialize the validated result to `.build`.
9. Calculate cumulative passive stats from the final node list.

## Verified delta
### Remove — 12
`evasion33`, `evasion28`, `evasion21`, `evasion24_`, `criticals52`, `criticals56`, `criticals53`, `criticals59`, `criticals55_`, `criticals57_`, `criticals54_`, `dexterity50`

### Add — 10
`elemental22`, `elemental44`, `cold37`, `elemental46`, `lightning40`, `elemental42`, `chill_and_freeze1`, `chill_and_freeze2`, `chill_and_freeze3`, `chill_and_freeze8`

## Rule
No node is accepted solely because it is visually close to a screenshot marker. Every allocation must correspond to a real 0.5.2 node ID and remain valid in the real passive graph.