import styles from "./RichText.module.css";

// microCMS のリッチエディタの HTML を表示する（自分で管理する CMS の内容のみを渡す）
export default function RichText({ html }: { html: string }) {
  return <div className={styles.body} dangerouslySetInnerHTML={{ __html: html }} />;
}
