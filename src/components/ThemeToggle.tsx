"use client";

import { useSyncExternalStore } from "react";
import { THEME_STORAGE_KEY, type Theme } from "@/libs/theme";
import styles from "./ThemeToggle.module.css";

const darkQuery = "(prefers-color-scheme: dark)";
const listeners = new Set<() => void>();

// <html data-theme> があればそれを、なければ OS の設定を「今のテーマ」とする
function getTheme(): Theme {
  const chosen = document.documentElement.dataset.theme;
  if (chosen === "light" || chosen === "dark") return chosen;
  return window.matchMedia(darkQuery).matches ? "dark" : "light";
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  const media = window.matchMedia(darkQuery);
  media.addEventListener("change", onChange);
  return () => {
    listeners.delete(onChange);
    media.removeEventListener("change", onChange);
  };
}

function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // 保存できない環境（プライベートブラウズなど）でも切り替え自体はできる
  }
  listeners.forEach((l) => l());
}

export default function ThemeToggle() {
  // サーバーでは今のテーマが分からないので null にしておき、ブラウザで確定させる
  const theme = useSyncExternalStore<Theme | null>(subscribe, getTheme, () => null);
  const next: Theme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={() => setTheme(next)}
      aria-label={theme ? `${next === "dark" ? "ダーク" : "ライト"}モードに切り替える` : "表示モードを切り替える"}
      title={theme ? `${next === "dark" ? "ダーク" : "ライト"}モードに切り替える` : undefined}
    >
      <span className={styles.icon} aria-hidden="true">
        {theme === "dark" ? "☀" : "☾"}
      </span>
      <span className={styles.text} aria-hidden="true">
        {theme === "dark" ? "Light" : "Dark"}
      </span>
    </button>
  );
}
