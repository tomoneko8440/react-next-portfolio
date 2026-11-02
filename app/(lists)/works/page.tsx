import type { Metadata } from "next";
import ContentList from "@/components/ContentList";
import { getWorks } from "@/lib/microcms";
import { site } from "@/data/site";
import styles from "@/app/site.module.css";

export const revalidate = 60;

export const metadata: Metadata = {
  title: site.labels.works.title,
  description: site.labels.works.description,
};

export default async function WorksPage() {
  const contents = await getWorks();

  return (
    <>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>{site.labels.works.title}</h1>
        <p className={styles.muted}>{site.labels.works.description}</p>
      </div>
      <ContentList basePath="/works" contents={contents} />
    </>
  );
}
