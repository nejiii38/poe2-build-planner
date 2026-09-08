import csv
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
src = ROOT / 'Skill Trees' / '0.5.2' / 'data.json'
out = ROOT / 'Builds' / 'tree-node-index.csv'

with src.open(encoding='utf-8') as f:
    data = json.load(f)

nodes = data.get('nodes', {})
with out.open('w', newline='', encoding='utf-8') as f:
    w = csv.writer(f)
    w.writerow(['skill','id','name','x','y','group','orbit','orbitIndex','isNotable','isKeystone','isJewelSocket'])
    for skill, n in nodes.items():
        w.writerow([
            skill, n.get('id',''), n.get('name',''), n.get('x',''), n.get('y',''),
            n.get('group',''), n.get('orbit',''), n.get('orbitIndex',''),
            bool(n.get('isNotable', False)), bool(n.get('isKeystone', False)), bool(n.get('isJewelSocket', False))
        ])
print(f'wrote {len(nodes)} nodes to {out}')
