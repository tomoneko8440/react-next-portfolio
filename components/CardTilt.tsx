"use client";

import { useEffect } from "react";

// data-tilt を付けた要素を、マウスの位置に合わせて3D風に傾ける
export default function CardTilt() {
  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let current: HTMLElement | null = null;

    const reset = (el: HTMLElement) => {
      el.style.removeProperty("--rx");
      el.style.removeProperty("--ry");
      el.removeAttribute("data-tilting");
    };

    const onMove = (e: PointerEvent) => {
      if (!canHover.matches || reduce.matches) return;
      const target = (e.target as Element | null)?.closest<HTMLElement>("[data-tilt]") ?? null;
      if (current && current !== target) reset(current);
      current = target;
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width; // 0〜1
      const y = (e.clientY - rect.top) / rect.height;
      target.setAttribute("data-tilting", "");
      target.style.setProperty("--rx", `${(0.5 - y) * 10}deg`);
      target.style.setProperty("--ry", `${(x - 0.5) * 10}deg`);
      target.style.setProperty("--mx", `${x * 100}%`);
      target.style.setProperty("--my", `${y * 100}%`);
    };

    const onLeave = () => {
      if (current) reset(current);
      current = null;
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return null;
}
