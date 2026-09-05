"use client";

import { motion } from "framer-motion";

// A subtle binary-tree traversal visual, standing in for algorithmic
// problem-solving rather than a generic progress bar.
const NODES = [
  { x: 140, y: 20, id: "root" },
  { x: 70, y: 80, id: "l1" },
  { x: 210, y: 80, id: "r1" },
  { x: 30, y: 140, id: "l2" },
  { x: 110, y: 140, id: "l3" },
  { x: 170, y: 140, id: "r2" },
  { x: 250, y: 140, id: "r3" },
];

const EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
  [2, 5],
  [2, 6],
];

export function LeetCodeVisual({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 170" className={className} aria-hidden="true" role="presentation">
      {EDGES.map(([a, b], i) => (
        <line
          key={i}
          x1={NODES[a].x}
          y1={NODES[a].y}
          x2={NODES[b].x}
          y2={NODES[b].y}
          stroke="var(--color-border-strong)"
          strokeWidth={1.2}
        />
      ))}
      {NODES.map((n, i) => (
        <motion.circle
          key={n.id}
          cx={n.x}
          cy={n.y}
          r={6}
          fill="var(--color-bg-elevated)"
          stroke="var(--color-accent)"
          strokeWidth={1.4}
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            delay: i * 0.35,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}
