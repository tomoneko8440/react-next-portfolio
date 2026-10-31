import styles from "@/app/site.module.css";

export default function Loading() {
  return (
    <p className={styles.message} role="status">
      読み込み中...
    </p>
  );
}
