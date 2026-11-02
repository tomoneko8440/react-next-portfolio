import type { Metadata } from "next";
import ContentList from "@/components/ContentList";
import { getBlogs } from "@/lib/microcms";
import { site } from "@/data/site";
import styles from "@/app/site.module.css";

export const revalidate = 60;

export const metadata: Metadata = {
  title: site.labels.blogs.title,
  description: site.labels.blogs.description,
};

export default async function BlogsPage() {
  const contents = await getBlogs();

  return (
    <>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>{site.labels.blogs.title}</h1>
        <p className={styles.muted}>{site.labels.blogs.description}</p>
      </div>
      <ContentList basePath="/blogs" contents={contents} />
    </>
  );
}
