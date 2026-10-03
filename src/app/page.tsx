import Link from "next/link";
import { Suspense } from "react";
import BlogList from "@/components/BlogList";
import Loading from "@/components/Loading";
import WorkList from "@/components/WorkList";
import { getBlogs, getWorks } from "@/libs/microcms";
import { site } from "@/libs/site";
import styles from "./page.module.css";

export const revalidate = 60;

async function LatestWorks() {
  const { contents } = await getWorks({ limit: 3 });
  return <WorkList works={contents} />;
}

async function LatestBlogs() {
  const { contents } = await getBlogs({ limit: 3 });
  return <BlogList blogs={contents} />;
}

export default function Home() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className="container">
          <p className={styles.heroLabel}>Portfolio / {site.shortName}</p>
          <h1 id="hero-title" className={styles.heroTitle}>
            好きなものを、
            <br />
            <span className={styles.heroAccent}>自分の手で</span>つくる。
          </h1>
          <p className={styles.heroLead}>
            ゲームや車、音楽が好きな {site.shortName} のポートフォリオです。
            <br className={styles.pcOnly} />
            Next.js と microCMS で、作ったものと学んだことを記録しています。
          </p>
          <div className={styles.heroActions}>
            <Link href="/works" className="button">
              作品を見る
            </Link>
            <Link href="/profile" className="button button-ghost">
              プロフィール
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="works-title">
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.sectionLabel}>01 / Works</p>
              <h2 id="works-title" className={styles.sectionTitle}>
                最新の作品
              </h2>
            </div>
            <Link href="/works" className={styles.more}>
              作品一覧へ<span aria-hidden="true"> →</span>
            </Link>
          </div>
          <Suspense fallback={<Loading label="作品を読み込み中…" />}>
            <LatestWorks />
          </Suspense>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="blog-title">
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.sectionLabel}>02 / Blog</p>
              <h2 id="blog-title" className={styles.sectionTitle}>
                最新のブログ
              </h2>
            </div>
            <Link href="/blog" className={styles.more}>
              ブログ一覧へ<span aria-hidden="true"> →</span>
            </Link>
          </div>
          <Suspense fallback={<Loading label="記事を読み込み中…" />}>
            <LatestBlogs />
          </Suspense>
        </div>
      </section>
    </>
  );
}
