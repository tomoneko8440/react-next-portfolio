"use client";

import styles from "./site.module.css";
import { site } from "@/data/site";

type Props = {
  reset: () => void;
};

export default function Error({ reset }: Props) {
  return (
    <div className={styles.message}>
      <h1 className={styles.pageTitle}>{site.labels.errors.errorTitle}</h1>
      <p className={styles.muted}>{site.labels.errors.errorDescription}</p>
      <button type="button" onClick={reset} className={styles.button}>
        {site.labels.errors.reload}
      </button>
    </div>
  );
}
