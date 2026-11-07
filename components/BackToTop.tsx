"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import styles from "@/app/site.module.css";

// 少しスクロールすると右下に出てくる「トップへ戻る」ボタン
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      className={styles.backToTop}
      data-visible={visible || undefined}
      onClick={scrollToTop}
      aria-label={site.labels.common.backToTop}
      title={site.labels.common.backToTop}
      tabIndex={visible ? 0 : -1}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
