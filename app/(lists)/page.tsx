import Link from "next/link";
import ContentList from "@/components/ContentList";
import TypingName from "@/components/TypingName";
import { site } from "@/data/site";
import { getBlogs, getWorks } from "@/lib/microcms";
import styles from "@/app/site.module.css";

export const revalidate = 60;

export default async function Home() {
  const { hero, labels } = site;
  const [works, blogs] = await Promise.all([getWorks(3), getBlogs(3)]);

  return (
    <>
      <section className={styles.hero}>
        {/* 背景でゆっくり動くぼかした図形 */}
        <div className={styles.heroBg} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p className={styles.role}>{hero.role}</p>
        <TypingName name={hero.name} />
        <p className={styles.catchphrase}>{hero.catchphrase}</p>
        <Link href="/profile" className={styles.button}>{labels.home.profileButton}</Link>
      </section>

      <section className={styles.section} data-reveal>
        <div className={styles.sectionHeader}>
          <h2 className={styles.heading}>{labels.home.worksHeading}</h2>
          <Link href="/works">{labels.home.worksLink}</Link>
        </div>
        <ContentList basePath="/works" contents={works} />
      </section>

      <section className={styles.section} data-reveal>
        <div className={styles.sectionHeader}>
          <h2 className={styles.heading}>{labels.home.blogsHeading}</h2>
          <Link href="/blogs">{labels.home.blogsLink}</Link>
        </div>
        <ContentList basePath="/blogs" contents={blogs} />
      </section>
    </>
  );
}
