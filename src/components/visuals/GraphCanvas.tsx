"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  depth: number;
};

const NODE_COUNT = 34;
const MAX_LINK_DIST = 150;
const MOUSE_RADIUS = 140;

function readAccentRgb(): string {
  if (typeof window === "undefined") return "124, 156, 255";
  const hex = getComputedStyle(document.documentElement).getPropertyValue("--color-accent").trim();
  const parts = hex.replace("#", "").match(/.{1,2}/g);
  if (!parts || parts.length < 3) return "124, 156, 255";
  const [r, g, b] = parts.map((h) => parseInt(h, 16));
  return `${r}, ${g}, ${b}`;
}

export function GraphCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const maybeCtx = canvas.getContext("2d");
    if (!maybeCtx) return;
    const ctx: CanvasRenderingContext2D = maybeCtx;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let mouse = { x: -9999, y: -9999, active: false };
    let raf = 0;
    let accentRgb = readAccentRgb();

    function seed() {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.6 + 1.2,
        depth: Math.random(),
      }));
    }

    function resize() {
      if (!canvas || !container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      // Assigning canvas.width/height (even to the same value) clears the
      // bitmap. ResizeObserver always fires once right after observe(), so
      // without an explicit repaint here the canvas would be wiped and, under
      // reduced motion (no rAF loop running), stay blank forever.
      draw();
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // update
      if (!prefersReducedMotion) {
        for (const n of nodes) {
          n.x += n.vx;
          n.y += n.vy;

          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;

          if (mouse.active) {
            const dx = n.x - mouse.x;
            const dy = n.y - mouse.y;
            const dist = Math.hypot(dx, dy);
            if (dist < MOUSE_RADIUS && dist > 0.01) {
              const force = (1 - dist / MOUSE_RADIUS) * 0.55;
              n.x += (dx / dist) * force;
              n.y += (dy / dist) * force;
            }
          }
        }
      }

      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < MAX_LINK_DIST) {
            const alpha = (1 - dist / MAX_LINK_DIST) * 0.22;
            ctx.strokeStyle = `rgba(${accentRgb}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        const glow = 0.35 + n.depth * 0.5;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accentRgb}, ${glow})`;
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        raf = requestAnimationFrame(draw);
      }
    }

    function onMouseMove(e: MouseEvent) {
      const rect = container!.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top, active: true };
    }

    function onMouseLeave() {
      mouse.active = false;
    }

    function onThemeChange() {
      accentRgb = readAccentRgb();
      if (prefersReducedMotion) draw();
    }

    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(container);

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("themechange", onThemeChange);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("themechange", onThemeChange);
    };
  }, []);

  return (
    <div ref={containerRef} className={className} aria-hidden="true">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
