import type { Metadata } from "next";
import Link from "next/link";
import styles from "./site.module.css";

export const metadata: Metadata = {
  title: "ページが見つかりません",
  description: "お探しのページは見つかりませんでした。",
};

export default function NotFound() {
  return (
    <div className={styles.message}>
      <p className={styles.role}>404</p>
      <h1 className={styles.pageTitle}>ページが見つかりません</h1>
      <p className={styles.muted}>
        削除されたか、URLが間違っている可能性があります。
      </p>
      <Link href="/" className={styles.button}>
        トップページへ戻る
      </Link>
    </div>
  );
}
