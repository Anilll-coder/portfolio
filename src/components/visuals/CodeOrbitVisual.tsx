"use client";

import { motion } from "framer-motion";

// A stylized code-graph: a central "repo" node with modules branching into
// files/functions, connected by dependency edges. Purely decorative (aria-hidden).
const CORE = { x: 210, y: 150 };

const MODULES = [
  { x: 90, y: 60, label: "api/" },
  { x: 330, y: 60, label: "core/" },
  { x: 60, y: 150, label: "models/" },
  { x: 360, y: 150, label: "graph/" },
  { x: 90, y: 240, label: "utils/" },
  { x: 330, y: 240, label: "review/" },
];

const LEAVES: { x: number; y: number; from: number }[] = [
  { x: 40, y: 30, from: 0 },
  { x: 120, y: 20, from: 0 },
  { x: 300, y: 20, from: 1 },
  { x: 380, y: 30, from: 1 },
  { x: 20, y: 190, from: 2 },
  { x: 20, y: 120, from: 2 },
  { x: 400, y: 190, from: 3 },
  { x: 400, y: 120, from: 3 },
  { x: 60, y: 280, from: 4 },
  { x: 140, y: 290, from: 4 },
  { x: 280, y: 290, from: 5 },
  { x: 360, y: 280, from: 5 },
];

export function CodeOrbitVisual({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 320"
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* edges: core -> modules */}
      {MODULES.map((m, i) => (
        <motion.line
          key={`core-${i}`}
          x1={CORE.x}
          y1={CORE.y}
          x2={m.x}
          y2={m.y}
          stroke="var(--color-accent)"
          strokeOpacity={0.28}
          strokeWidth={1}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.28 }}
          transition={{ duration: 1, delay: 0.15 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}

      {/* edges: modules -> leaves */}
      {LEAVES.map((l, i) => {
        const m = MODULES[l.from];
        return (
          <motion.line
            key={`leaf-${i}`}
            x1={m.x}
            y1={m.y}
            x2={l.x}
            y2={l.y}
            stroke="var(--color-ink-muted)"
            strokeOpacity={0.16}
            strokeWidth={1}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.16 }}
            transition={{ duration: 0.8, delay: 0.5 + i * 0.03, ease: [0.16, 1, 0.3, 1] }}
          />
        );
      })}

      {/* leaves */}
      {LEAVES.map((l, i) => (
        <motion.circle
          key={`leaf-node-${i}`}
          cx={l.x}
          cy={l.y}
          r={2.2}
          fill="var(--color-ink-faint)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.7 + i * 0.03 }}
        />
      ))}

      {/* module nodes */}
      {MODULES.map((m, i) => (
        <g key={`mod-${i}`}>
          <motion.circle
            cx={m.x}
            cy={m.y}
            r={5}
            fill="var(--color-bg-elevated)"
            stroke="var(--color-accent)"
            strokeWidth={1.3}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
          />
          <motion.text
            x={m.x}
            y={m.y - 12}
            textAnchor="middle"
            fontSize="9"
            fontFamily="var(--font-mono)"
            fill="var(--color-ink-muted)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 0.5, delay: 0.6 + i * 0.06 }}
          >
            {m.label}
          </motion.text>
        </g>
      ))}

      {/* core */}
      <circle cx={CORE.x} cy={CORE.y} r={40} fill="url(#core-glow)" />
      <motion.circle
        cx={CORE.x}
        cy={CORE.y}
        r={9}
        fill="var(--color-accent)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.circle
        cx={CORE.x}
        cy={CORE.y}
        r={9}
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth={1}
        animate={{ r: [9, 26], opacity: [0.5, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
      />
      <text
        x={CORE.x}
        y={CORE.y + 24}
        textAnchor="middle"
        fontSize="10"
        fontFamily="var(--font-mono)"
        fill="var(--color-ink)"
        opacity={0.85}
      >
        codeorbit/
      </text>
    </svg>
  );
}
