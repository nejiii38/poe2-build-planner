import csv, math
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
src=ROOT/'Builds'/'tree-node-index.csv'
out=ROOT/'Builds'/'known-coordinate-map.txt'
# Similarity transform recovered from the exact Beastial Skin cluster match.
scale=0.0334671
angle=math.radians(2.021)
a=scale*math.cos(angle); b=scale*math.sin(angle)
tx=607.46; ty=410.40

points={
'REMOVE_BEASTIAL':[(919,479),(932,469),(938,465),(953,461)],
'REMOVE_CRIT':[(990,446),(994,439),(998,429),(990,435),(983,439),(980,447),(975,455),(964,461)],
'ADD_ELEMENTAL':[(723,263),(719,249),(726,253),(732,246),(747,249),(741,253)],
'ADD_FREEZE':[(716,279),(722,286),(731,283),(724,281)],
}
with src.open(encoding='utf-8',newline='') as f:
    rows=list(csv.DictReader(f))
valid=[]
for r in rows:
    try:x=float(r['x']); y=float(r['y'])
    except:continue
    # main tree only; ascendancy islands are far outside this range
    if abs(x)>13000 or abs(y)>13000: continue
    sx=a*x-b*y+tx; sy=b*x+a*y+ty
    valid.append((r,sx,sy))
lines=[f'transform scale={scale} angle_deg={math.degrees(angle)} tx={tx} ty={ty}']
for label,pts in points.items():
    lines.append('\n## '+label)
    for px,py in pts:
        cand=sorted(valid,key=lambda z:(z[1]-px)**2+(z[2]-py)**2)[:5]
        lines.append(f'screen=({px},{py})')
        for r,sx,sy in cand:
            d=math.hypot(sx-px,sy-py)
            lines.append(f'  d={d:.3f} skill={r["skill"]} id={r["id"]} name={r["name"]} world=({r["x"]},{r["y"]}) projected=({sx:.2f},{sy:.2f}) group={r["group"]}')
out.write_text('\n'.join(lines),encoding='utf-8')
print('wrote',out)
