"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// ページを移動するたびに、一番上へ（アニメーションなしで）戻す
export default function ScrollToTop() {
  const pathname = usePathname();
  const isFirst = useRef(true);

  useEffect(() => {
    // 最初の表示では何もしない（ブラウザの位置復元やURLの#を優先する）
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    // #付きのリンクは、その場所へ移動させる
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
