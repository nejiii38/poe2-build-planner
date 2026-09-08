# Upstream render parity — Nejiii38 build workspace

Baseline: `poe2-tools/poe2-build-planner@master` / https://poe2-tools.github.io/poe2-build-planner/

The build workspace must preserve the original planner's visual/rendering layer. The following files/directories were compared against upstream and currently match the upstream blobs/content:

- `src/App.tsx`
- `src/index.css`
- `src/ui/AppHeader.tsx`
- `src/ui/BuildScreen.tsx`
- `src/ui/LoadSave.tsx`
- `src/ui/TreeScreen.tsx`
- `src/ui/WeaponSetToggle.tsx`
- `src/ui/RangeBar.tsx`
- `src/ui/Overlays.tsx`
- core `src/render/*` files, including `TreeView.tsx`, `draw.ts`, `arc.ts`, `ascendancy.ts`, `lod.ts`, and `nodeVisual.ts`
- `src/state/*`
- `src/tree/*`
- `src/buildfile/types.ts`
- `src/buildfile/parse.ts`
- `vite.config.ts`
- `package.json`
- `.github/workflows/deploy.yml`

## Hard constraint

Do not modify the visual renderer or planner UI for the passive-tree reconstruction. The final tree must render through the original planner code and original theme/assets. Any convenience mechanism added later to open a predefined `.build` must be isolated from the renderer/UI and must not change the normal planner appearance or interactions.

Before final merge/deploy, re-check these upstream parity points. The generated `.build` is data; it must be the thing that changes the highlighted tree, not a custom screenshot overlay or replacement renderer.
