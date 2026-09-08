import csv, itertools, math
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
src = ROOT / 'Builds' / 'tree-node-index.csv'
out = ROOT / 'Builds' / 'cluster-match-candidates.txt'

SCREEN = {
    'beastial_removed4': [(919,479),(932,469),(938,465),(953,461)],
    'freeze_added4': [(716,279),(722,286),(731,283),(724,281)],
}

with src.open(encoding='utf-8', newline='') as f:
    rows = list(csv.DictReader(f))

by_group = defaultdict(list)
for r in rows:
    try:
        x=float(r['x']); y=float(r['y']); g=r['group']
    except Exception:
        continue
    if not g: continue
    # Exclude distant ascendancy islands for the first matching pass.
    if abs(x) > 13000 or abs(y) > 13000: continue
    rr=dict(r); rr['xf']=x; rr['yf']=y
    by_group[g].append(rr)

def signature(pts):
    ds=[]
    for i in range(len(pts)):
        for j in range(i+1,len(pts)):
            dx=pts[i][0]-pts[j][0]; dy=pts[i][1]-pts[j][1]
            ds.append(math.hypot(dx,dy))
    m=max(ds) or 1.0
    return sorted(d/m for d in ds)

def sigerr(a,b):
    return sum((x-y)**2 for x,y in zip(a,b))/len(a)

def fit_similarity(srcpts, dstpts):
    n=len(srcpts)
    mx=sum(x for x,y in srcpts)/n; my=sum(y for x,y in srcpts)/n
    mu=sum(x for x,y in dstpts)/n; mv=sum(y for x,y in dstpts)/n
    den=0.0; na=0.0; nb=0.0
    for (x,y),(u,v) in zip(srcpts,dstpts):
        x-=mx; y-=my; u-=mu; v-=mv
        den += x*x+y*y
        na += x*u+y*v
        nb += x*v-y*u
    if den == 0: return None
    a=na/den; b=nb/den
    tx=mu-(a*mx-b*my); ty=mv-(b*mx+a*my)
    err=0.0
    for (x,y),(u,v) in zip(srcpts,dstpts):
        pu=a*x-b*y+tx; pv=b*x+a*y+ty
        err += (pu-u)**2+(pv-v)**2
    rms=math.sqrt(err/n)
    scale=math.hypot(a,b); angle=math.degrees(math.atan2(b,a))
    return rms,a,b,tx,ty,scale,angle

lines=[]
for label,dst in SCREEN.items():
    target_sig=signature(dst)
    pre=[]
    for g,nodes in by_group.items():
        if len(nodes)<4 or len(nodes)>24: continue
        for combo in itertools.combinations(nodes,4):
            pts=[(r['xf'],r['yf']) for r in combo]
            e=sigerr(signature(pts),target_sig)
            pre.append((e,g,combo))
    pre.sort(key=lambda z:z[0])
    lines.append(f'## {label} top shape candidates')
    scored=[]
    for e,g,combo in pre[:250]:
        srcpts=[(r['xf'],r['yf']) for r in combo]
        for perm in itertools.permutations(range(4)):
            ordered=[srcpts[i] for i in perm]
            fit=fit_similarity(ordered,dst)
            if fit:
                rms,*rest=fit
                scored.append((rms,e,g,combo,perm,rest))
    scored.sort(key=lambda z:z[0])
    for rms,e,g,combo,perm,rest in scored[:40]:
        a,b,tx,ty,scale,angle=rest
        ids=[combo[i]['skill'] for i in perm]
        names=[combo[i]['name'] or combo[i]['id'] for i in perm]
        lines.append(f'rms={rms:.3f} shape={e:.6g} group={g} scale={scale:.7f} angle={angle:.3f} tx={tx:.2f} ty={ty:.2f} ids={ids} names={names}')
    lines.append('')

out.write_text('\n'.join(lines),encoding='utf-8')
print('wrote',out)
