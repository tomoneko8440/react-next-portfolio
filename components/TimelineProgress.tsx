"use client";

import { useEffect } from "react";

// data-timeline を付けた要素に、どこまでスクロールしたか（0〜1）を --progress として渡す
export default function TimelineProgress() {
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.75; // 画面の上から75%の位置を基準にする
      document.querySelectorAll<HTMLElement>("[data-timeline]").forEach((el) => {
        const rect = el.getBoundingClientRect();
        const progress = Math.min(Math.max((line - rect.top) / rect.height, 0), 1);
        el.style.setProperty("--progress", progress.toFixed(3));
      });
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // ページ移動で新しいタイムラインが表示されたときも計算し直す
    const mo = new MutationObserver(onScroll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mo.disconnect();
    };
  }, []);

  return null;
}
