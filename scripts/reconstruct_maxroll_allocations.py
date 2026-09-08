#!/usr/bin/env python3
"""Reconstruct candidate passive allocations from a Maxroll screenshot.

The script projects the real PoE2 0.5.2 passive graph onto the screenshot, scores
node-ring colours, keeps the connected component from the Monk start, and emits
preliminary common / weapon-set colour evidence. It remains conservative: colour
classification is evidence, not a substitute for graph validation.
"""

from __future__ import annotations

import argparse
import csv
import json
import math
from collections import defaultdict, deque
from pathlib import Path
from typing import Dict, Set

from PIL import Image

SCALE = 0.0334671
ANGLE_DEG = 2.021
TX = 607.46
TY = 410.40
MONK_START = "44683"  # six704 / Monk
REVIEW_IDS = {
    "64601",  # Hollow Palm Technique
    "59720",  # Beastial Skin
}


def project(x: float, y: float) -> tuple[float, float]:
    ang = math.radians(ANGLE_DEG)
    a = SCALE * math.cos(ang)
    b = SCALE * math.sin(ang)
    return a * x - b * y + TX, b * x + a * y + TY


def ring_score(rgb, cx: float, cy: float, r1: float = 5.0, r2: float = 9.0) -> dict:
    width, height = rgb.size
    x0 = max(0, int(cx - r2 - 1)); x1 = min(width - 1, int(cx + r2 + 1))
    y0 = max(0, int(cy - r2 - 1)); y1 = min(height - 1, int(cy + r2 + 1))
    cream = red = green = bright = total = 0
    for y in range(y0, y1 + 1):
        for x in range(x0, x1 + 1):
            d = math.hypot(x - cx, y - cy)
            if d < r1 or d > r2:
                continue
            r, g, b = rgb.getpixel((x, y))
            total += 1
            cream += int(r > 80 and g > 70 and b < r * 0.9)
            red += int(r > g * 1.3 and r > b * 1.2 and r > 70)
            green += int(g > r * 1.25 and g > b * 1.15 and g > 60)
            bright += int((r + g + b) / 3 > 100)
    if not total:
        return {"cream": 0.0, "red": 0.0, "green": 0.0, "bright": 0.0}
    return {k: v / total for k, v in {
        "cream": cream, "red": red, "green": green, "bright": bright
    }.items()}


def build_graph(nodes: dict) -> Dict[str, Set[str]]:
    graph: Dict[str, Set[str]] = defaultdict(set)
    for skill, node in nodes.items():
        skill = str(skill)
        for other in node.get("out", []) + node.get("in", []):
            other = str(other)
            graph[skill].add(other)
            graph[other].add(skill)
    return graph


def connected_component(start: str, allowed: Set[str], graph: Dict[str, Set[str]]) -> Set[str]:
    if start not in allowed:
        return set()
    seen = {start}; q = deque([start])
    while q:
        cur = q.popleft()
        for nxt in graph[cur]:
            if nxt in allowed and nxt not in seen:
                seen.add(nxt); q.append(nxt)
    return seen


def colour_class(row: dict) -> str:
    """Preliminary visual class only; graph validation is authoritative later."""
    c, r, g = row["cream"], row["red"], row["green"]
    if r >= 0.14 and r > c * 1.15 and r > g * 1.5:
        return "weapon_set_red"
    if g >= 0.09 and g > c * 0.75 and g > r * 1.15:
        return "weapon_set_green"
    return "common_or_uncertain"


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("screenshot", type=Path)
    ap.add_argument("--tree-json", type=Path, default=Path("Skill Trees/0.5.2/data.json"))
    ap.add_argument("--node-index", type=Path, default=Path("Builds/tree-node-index.csv"))
    # 0.07 preserves the visible Monk-connected allocation; 0.08 breaks the
    # component near the start because several genuine pathing rings score 0.07x.
    ap.add_argument("--cream-threshold", type=float, default=0.07)
    ap.add_argument("--output", type=Path, default=Path("Builds/reconstruction-candidates.csv"))
    args = ap.parse_args()

    tree = json.loads(args.tree_json.read_text(encoding="utf-8"))
    graph = build_graph(tree["nodes"])
    image = Image.open(args.screenshot).convert("RGB")
    width, height = image.size

    rows = []
    with args.node_index.open(newline="", encoding="utf-8") as fh:
        for row in csv.DictReader(fh):
            if not row.get("x") or not row.get("y"):
                continue
            skill = str(row["skill"])
            sx, sy = project(float(row["x"]), float(row["y"]))
            if not (0 <= sx < width and 0 <= sy < height):
                continue
            score = ring_score(image, sx, sy)
            rows.append({
                "skill": skill, "id": row.get("id", ""), "name": row.get("name", ""),
                "sx": round(sx, 3), "sy": round(sy, 3),
                **{k: round(v, 6) for k, v in score.items()},
            })

    first_pass = {
        r["skill"] for r in rows
        if r["sx"] > 590 and 90 < r["sy"] < 560 and r["cream"] >= args.cream_threshold
    }
    first_pass.add(MONK_START)
    connected = connected_component(MONK_START, first_pass, graph)

    counts = defaultdict(int)
    for r in rows:
        skill = r["skill"]
        r["first_pass"] = int(skill in first_pass)
        r["connected_to_monk"] = int(skill in connected)
        r["manual_review"] = int(skill in REVIEW_IDS)
        r["visual_class"] = colour_class(r) if skill in connected else "outside_component"
        if skill in connected:
            counts[r["visual_class"]] += 1

    args.output.parent.mkdir(parents=True, exist_ok=True)
    fields = [
        "skill", "id", "name", "sx", "sy", "cream", "red", "green", "bright",
        "first_pass", "connected_to_monk", "manual_review", "visual_class",
    ]
    with args.output.open("w", newline="", encoding="utf-8") as fh:
        writer = csv.DictWriter(fh, fieldnames=fields)
        writer.writeheader(); writer.writerows(rows)

    print(f"first-pass candidates: {len(first_pass)}")
    print(f"connected to Monk start: {len(connected)}")
    for key in ("common_or_uncertain", "weapon_set_red", "weapon_set_green"):
        print(f"{key}: {counts[key]}")
    print("manual-review nodes:")
    for r in rows:
        if r["manual_review"]:
            print(f"  {r['skill']} {r['name']} cream={r['cream']:.4f} at ({r['sx']:.1f},{r['sy']:.1f})")


if __name__ == "__main__":
    main()
