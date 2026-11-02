import type { Metadata } from "next";
import ContentList from "@/components/ContentList";
import { getWorks } from "@/lib/microcms";
import styles from "@/app/site.module.css";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "作品一覧",
  description: "これまでに制作した作品を紹介します。",
};

export default async function WorksPage() {
  const contents = await getWorks();

  return (
    <>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>作品一覧</h1>
        <p className={styles.muted}>これまでに制作した作品を紹介します。</p>
      </div>
      <ContentList basePath="/works" contents={contents} />
    </>
  );
}
