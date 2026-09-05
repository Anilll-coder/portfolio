"use client";

import { motion } from "framer-motion";

// LawBot: chat / retrieval visual — message bubbles resolving from a
// vector-search field into a grounded response.
export function LawBotVisual({ className }: { className?: string }) {
  const dots = [0, 1, 2, 3, 4, 5];

  return (
    <svg viewBox="0 0 280 160" className={className} aria-hidden="true" role="presentation">
      <rect x="1" y="1" width="278" height="158" rx="10" fill="none" stroke="var(--color-border)" />
      {/* vector field */}
      {dots.map((i) => {
        const cols = 6;
        const col = i % cols;
        const row = Math.floor(i / cols);
        return (
          <motion.circle
            key={i}
            cx={30 + col * 20}
            cy={30 + row * 20}
            r={2}
            fill="var(--color-ink-faint)"
            initial={{ opacity: 0.25 }}
            animate={{ opacity: [0.25, 0.7, 0.25] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.15 }}
          />
        );
      })}
      <motion.circle
        cx={70}
        cy={50}
        r={4}
        fill="var(--color-accent)"
        initial={{ scale: 0.8 }}
        animate={{ scale: [0.8, 1.15, 0.8] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      />

      {/* chat bubbles */}
      <rect x="150" y="24" width="104" height="20" rx="6" fill="var(--color-surface-hover)" stroke="var(--color-border)" />
      <rect x="162" y="31" width="70" height="6" rx="3" fill="var(--color-border-strong)" />

      <motion.g
        initial={{ opacity: 0, x: -6 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <rect x="130" y="56" width="120" height="24" rx="6" fill="var(--color-surface)" stroke="var(--color-accent)" strokeOpacity={0.4} />
        <rect x="142" y="64" width="90" height="6" rx="3" fill="var(--color-accent)" fillOpacity={0.5} />
      </motion.g>

      <rect x="150" y="94" width="104" height="20" rx="6" fill="var(--color-surface-hover)" stroke="var(--color-border)" />
      <rect x="162" y="101" width="60" height="6" rx="3" fill="var(--color-border-strong)" />

      <motion.g
        initial={{ opacity: 0, x: -6 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <rect x="130" y="126" width="120" height="24" rx="6" fill="var(--color-surface)" stroke="var(--color-accent)" strokeOpacity={0.4} />
        <rect x="142" y="134" width="80" height="6" rx="3" fill="var(--color-accent)" fillOpacity={0.5} />
      </motion.g>
    </svg>
  );
}

// ClickConnect: social feed visual — post cards streaming in with
// like/comment activity and a pulsing chatbot affordance.
export function ClickConnectVisual({ className }: { className?: string }) {
  const cards = [0, 1, 2];

  return (
    <svg viewBox="0 0 280 160" className={className} aria-hidden="true" role="presentation">
      <rect x="1" y="1" width="278" height="158" rx="10" fill="none" stroke="var(--color-border)" />

      {cards.map((i) => {
        const y = 20 + i * 42;
        return (
          <motion.g
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.25 }}
          >
            <rect x="20" y={y} width="170" height="30" rx="7" fill="var(--color-surface)" stroke="var(--color-border)" />
            <circle cx={34} cy={y + 15} r={6} fill="var(--color-border-strong)" />
            <rect x={48} y={y + 8} width="80" height="5" rx="2.5" fill="var(--color-border-strong)" />
            <rect x={48} y={y + 18} width="120" height="5" rx="2.5" fill="var(--color-border)" />
            <motion.circle
              cx={175}
              cy={y + 15}
              r={2.2}
              fill="var(--color-accent)"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.3 }}
            />
          </motion.g>
        );
      })}

      {/* AI chatbot affordance */}
      <motion.g
        initial={{ scale: 0.85, opacity: 0.7 }}
        animate={{ scale: [0.85, 1, 0.85], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        <circle cx={228} cy={128} r={16} fill="var(--color-surface)" stroke="var(--color-accent)" strokeOpacity={0.6} />
        <circle cx={222} cy={126} r={2} fill="var(--color-accent)" />
        <circle cx={234} cy={126} r={2} fill="var(--color-accent)" />
        <path d="M221 133q7 5 14 0" stroke="var(--color-accent)" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      </motion.g>
    </svg>
  );
}

// NextWork: cloud deployment visual — origin -> S3 -> CloudFront edges.
export function NextWorkVisual({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 160" className={className} aria-hidden="true" role="presentation">
      <rect x="1" y="1" width="278" height="158" rx="10" fill="none" stroke="var(--color-border)" />

      <rect x="24" y="70" width="54" height="30" rx="6" fill="var(--color-surface)" stroke="var(--color-border-strong)" />
      <text x="51" y="89" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--color-ink-muted)">
        build/
      </text>

      <rect x="113" y="70" width="54" height="30" rx="6" fill="var(--color-surface)" stroke="var(--color-accent)" strokeOpacity={0.5} />
      <text x="140" y="89" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--color-ink)">
        S3
      </text>

      <rect x="202" y="70" width="54" height="30" rx="6" fill="var(--color-surface)" stroke="var(--color-border-strong)" />
      <text x="229" y="89" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--color-ink-muted)">
        CDN
      </text>

      <line x1="78" y1="85" x2="113" y2="85" stroke="var(--color-border-strong)" strokeWidth={1.2} />
      <line x1="167" y1="85" x2="202" y2="85" stroke="var(--color-border-strong)" strokeWidth={1.2} />

      <motion.circle
        r={2.6}
        fill="var(--color-accent)"
        initial={{ cx: 78, cy: 85 }}
        animate={{ cx: [78, 113], cy: 85 }}
        transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 0.6, ease: "easeInOut" }}
      />
      <motion.circle
        r={2.6}
        fill="var(--color-accent)"
        initial={{ cx: 167, cy: 85 }}
        animate={{ cx: [167, 202], cy: 85 }}
        transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 0.6, delay: 0.8, ease: "easeInOut" }}
      />
    </svg>
  );
}
