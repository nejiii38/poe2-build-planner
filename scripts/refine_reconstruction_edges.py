#!/usr/bin/env python3
"""Add edge-brightness evidence to the screenshot reconstruction.

This deliberately does not auto-delete nodes. A selected passive can have a weak
ring score or a curved/orbit connection that makes a straight-line sample dark.
The output is therefore a review table used to distinguish strong allocations,
weak leaves and likely false positives before serialising a .build.
"""

from __future__ import annotations

import argparse
import csv
import json
import math
from collections import defaultdict
from pathlib import Path
from statistics import mean

from PIL import Image

SCALE = 0.0334671
ANGLE_DEG = 2.021
TX = 607.46
TY = 410.40


def project(x: float, y: float) -> tuple[float, float]:
    ang = math.radians(ANGLE_DEG)
    a = SCALE * math.cos(ang)
    b = SCALE * math.sin(ang)
    return a * x - b * y + TX, b * x + a * y + TY


def graph_from_tree(nodes: dict) -> dict[str, set[str]]:
    graph: dict[str, set[str]] = defaultdict(set)
    for skill, node in nodes.items():
        skill = str(skill)
        for other in node.get("in", []) + node.get("out", []):
            other = str(other)
            graph[skill].add(other)
            graph[other].add(skill)
    return graph


def edge_brightness(rgb, p1, p2, trim=0.25, samples=25, radius=1) -> float:
    x1, y1 = p1
    x2, y2 = p2
    vals = []
    for i in range(samples):
        t = trim + (1 - 2 * trim) * i / max(1, samples - 1)
        x = x1 + (x2 - x1) * t
        y = y1 + (y2 - y1) * t
        for dx in range(-radius, radius + 1):
            for dy in range(-radius, radius + 1):
                xx, yy = int(round(x + dx)), int(round(y + dy))
                if 0 <= xx < rgb.width and 0 <= yy < rgb.height:
                    r, g, b = rgb.getpixel((xx, yy))
                    vals.append((r + g + b) / 3)
    return mean(vals) if vals else 0.0


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("screenshot", type=Path)
    ap.add_argument("--tree-json", type=Path, default=Path("Skill Trees/0.5.2/data.json"))
    ap.add_argument("--node-index", type=Path, default=Path("Builds/tree-node-index.csv"))
    ap.add_argument("--candidates", type=Path, default=Path("Builds/reconstruction-connected-111.csv"))
    ap.add_argument("--output", type=Path, default=Path("Builds/reconstruction-edge-review.csv"))
    args = ap.parse_args()

    tree = json.loads(args.tree_json.read_text(encoding="utf-8"))
    graph = graph_from_tree(tree["nodes"])
    rgb = Image.open(args.screenshot).convert("RGB")

    coords = {}
    with args.node_index.open(newline="", encoding="utf-8") as fh:
        for row in csv.DictReader(fh):
            if row.get("x") and row.get("y"):
                coords[str(row["skill"])] = project(float(row["x"]), float(row["y"]))

    with args.candidates.open(newline="", encoding="utf-8") as fh:
        rows = list(csv.DictReader(fh))
    candidate_ids = {str(r["skill"]) for r in rows}

    out = []
    for row in rows:
        skill = str(row["skill"])
        neighbours = [n for n in graph.get(skill, set()) if n in candidate_ids and n in coords]
        scores = [edge_brightness(rgb, coords[skill], coords[n]) for n in neighbours if skill in coords]
        max_edge = max(scores) if scores else 0.0
        avg_edge = mean(scores) if scores else 0.0
        cream = float(row.get("cream", 0) or 0)
        # Review labels only; never treat these as allocation truth.
        if max_edge >= 55 and cream >= 0.09:
            confidence = "strong"
        elif max_edge >= 30 or cream >= 0.14:
            confidence = "medium"
        else:
            confidence = "review"
        out.append({**row, "max_edge_brightness": f"{max_edge:.3f}",
                    "avg_edge_brightness": f"{avg_edge:.3f}",
                    "candidate_neighbours": len(neighbours),
                    "confidence": confidence})

    fields = list(out[0].keys()) if out else []
    args.output.parent.mkdir(parents=True, exist_ok=True)
    with args.output.open("w", newline="", encoding="utf-8") as fh:
        writer = csv.DictWriter(fh, fieldnames=fields)
        writer.writeheader()
        writer.writerows(out)

    counts = defaultdict(int)
    for row in out:
        counts[row["confidence"]] += 1
    print(dict(counts))


if __name__ == "__main__":
    main()
