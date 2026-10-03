import styles from "./PageHeader.module.css";

type Props = {
  label: string;
  title: string;
  lead?: string;
};

// 各ページ先頭の見出し。「01 / WORKS」のような英字ラベル＋日本語タイトルの組み合わせ
export default function PageHeader({ label, title, lead }: Props) {
  return (
    <div className={styles.header}>
      <p className={styles.label}>{label}</p>
      <h1 className={styles.title}>{title}</h1>
      {lead && <p className={styles.lead}>{lead}</p>}
    </div>
  );
}
