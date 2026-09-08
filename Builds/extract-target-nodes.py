import csv
from pathlib import Path
src=Path('Builds/tree-node-index.csv')
out=Path('Builds/target-node-index.csv')
terms=('bestial','beastial','frost','freeze','cold','thunder','lightning','elemental','critical','evasion','energy shield','resonating')
with src.open(encoding='utf-8',newline='') as f:
    rows=list(csv.DictReader(f))
sel=[r for r in rows if any(t in (r.get('name') or '').lower() for t in terms)]
with out.open('w',encoding='utf-8',newline='') as f:
    w=csv.DictWriter(f,fieldnames=rows[0].keys());w.writeheader();w.writerows(sel)
print('selected',len(sel),'of',len(rows))
