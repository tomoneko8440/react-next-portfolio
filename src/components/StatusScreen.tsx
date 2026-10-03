import styles from "./StatusScreen.module.css";

type Props = {
  code: string;
  title: string;
  children: React.ReactNode;
  actions: React.ReactNode;
};

// 404・エラー画面の共通レイアウト
export default function StatusScreen({ code, title, children, actions }: Props) {
  return (
    <div className="container">
      <div className={styles.screen}>
        <p className={styles.code} aria-hidden="true">
          {code}
        </p>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.text}>{children}</div>
        <div className={styles.actions}>{actions}</div>
      </div>
    </div>
  );
}
