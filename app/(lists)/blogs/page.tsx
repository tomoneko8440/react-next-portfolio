import type { Metadata } from "next";
import ContentList from "@/components/ContentList";
import { getBlogs } from "@/lib/microcms";
import styles from "@/app/site.module.css";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "ブログ一覧",
  description: "学んだことや制作の記録をまとめた記事です。",
};

export default async function BlogsPage() {
  const contents = await getBlogs();

  return (
    <>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>ブログ一覧</h1>
        <p className={styles.muted}>学んだことや制作の記録をまとめた記事です。</p>
      </div>
      <ContentList basePath="/blogs" contents={contents} />
    </>
  );
}
