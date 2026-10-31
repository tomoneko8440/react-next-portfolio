import Link from "next/link";
import ContentList from "@/components/ContentList";
import { site } from "@/data/site";
import { getBlogs, getWorks } from "@/lib/microcms";
import styles from "@/app/site.module.css";

export const revalidate = 60;

export default async function Home() {
  const { hero } = site;
  const [works, blogs] = await Promise.all([getWorks(3), getBlogs(3)]);

  return (
    <>
      <section className={styles.hero}>
        <p className={styles.role}>{hero.role}</p>
        <h1 className={styles.name}>{hero.name}</h1>
        <p className={styles.catchphrase}>{hero.catchphrase}</p>
        <Link href="/profile" className={styles.button}>
          プロフィールを見る
        </Link>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.heading}>Works</h2>
          <Link href="/works">作品一覧へ</Link>
        </div>
        <ContentList basePath="/works" contents={works} />
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.heading}>Blog</h2>
          <Link href="/blogs">記事一覧へ</Link>
        </div>
        <ContentList basePath="/blogs" contents={blogs} />
      </section>
    </>
  );
}
