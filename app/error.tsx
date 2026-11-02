"use client";

import styles from "./site.module.css";

type Props = {
  reset: () => void;
};

export default function Error({ reset }: Props) {
  return (
    <div className={styles.message}>
      <h1 className={styles.pageTitle}>読み込みに失敗しました</h1>
      <p className={styles.muted}>時間をおいて、もう一度お試しください。</p>
      <button type="button" onClick={reset} className={styles.button}>
        再読み込み
      </button>
    </div>
  );
}
