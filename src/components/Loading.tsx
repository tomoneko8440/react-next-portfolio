import styles from "./Loading.module.css";

// 一覧を取得している間に表示する。
// 詳細ページは存在しない ID に 404 ステータスを返したいので、ここを使わず取得完了まで待つ。
export default function Loading({ label = "読み込み中…" }: { label?: string }) {
  return (
    <div className={styles.loading} role="status" aria-live="polite">
      <span className={styles.bar} aria-hidden="true" />
      <span className={styles.text}>{label}</span>
    </div>
  );
}
