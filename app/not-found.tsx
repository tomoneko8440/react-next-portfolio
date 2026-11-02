import type { Metadata } from "next";
import Link from "next/link";
import styles from "./site.module.css";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: site.labels.errors.notFoundTitle,
  description: site.labels.errors.notFoundDescription,
};

export default function NotFound() {
  return (
    <div className={styles.message}>
      <p className={styles.role}>404</p>
      <h1 className={styles.pageTitle}>{site.labels.errors.notFoundTitle}</h1>
      <p className={styles.muted}>{site.labels.errors.notFoundDescription}</p>
      <Link href="/" className={styles.button}>{site.labels.errors.backToHome}</Link>
    </div>
  );
}
