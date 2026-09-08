import csv
from pathlib import Path

src = Path('Builds/tree-node-index.csv')
out = Path('Builds/target-node-index.csv')
terms = (
    'bestial','beastial','beast','skin','frost','freeze','cold','thunder','lightning',
    'elemental','critical','evasion','energy shield','resonating'
)

with src.open(encoding='utf-8', newline='') as f:
    rows = list(csv.DictReader(f))

# First pass: directly relevant named nodes.
direct = [r for r in rows if any(t in ((r.get('name') or '') + ' ' + (r.get('id') or '')).lower() for t in terms)]
# Second pass: include every node sharing a group with a direct match so cluster topology is preserved.
groups = {r.get('group') for r in direct if r.get('group') not in (None, '')}
sel = [r for r in rows if r in direct or r.get('group') in groups]

with out.open('w', encoding='utf-8', newline='') as f:
    w = csv.DictWriter(f, fieldnames=rows[0].keys())
    w.writeheader()
    w.writerows(sel)

print('direct', len(direct), 'groups', len(groups), 'selected', len(sel), 'of', len(rows))
