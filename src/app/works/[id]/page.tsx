import type { Metadata } from "next";
import Link from "next/link";
import RichText from "@/components/RichText";
import Thumbnail from "@/components/Thumbnail";
import { getWork } from "@/libs/microcms";
import styles from "@/components/Article.module.css";

export const revalidate = 60;

// ビルド時には生成せず、初めてアクセスされたときに生成してキャッシュする
export function generateStaticParams() {
  return [];
}

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const work = await getWork(id);
  const description = work.description || `${work.title} の作品紹介ページです。`;
  return {
    title: work.title,
    description,
    alternates: { canonical: `/works/${work.id}` },
    openGraph: {
      title: work.title,
      description,
      type: "article",
      images: work.thumbnail ? [{ url: work.thumbnail.url }] : undefined,
    },
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { id } = await params;
  const work = await getWork(id);

  return (
    <div className="container">
      <article className={styles.article}>
        <Link href="/works" className={styles.back}>
          <span aria-hidden="true">← </span>作品一覧へ戻る
        </Link>
        <p className={styles.label}>Works</p>
        <h1 className={styles.title}>{work.title}</h1>
        {work.description && <p className={styles.description}>{work.description}</p>}
        {work.url && (
          <p className={styles.meta}>
            <a href={work.url} target="_blank" rel="noopener noreferrer">
              作品を見る<span className="visually-hidden">（新しいタブで開きます）</span>
            </a>
          </p>
        )}
        <div className={styles.thumbnail}>
          <Thumbnail
            image={work.thumbnail}
            alt={work.thumbnailAlt || work.title}
            sizes="(min-width: 832px) 800px, 92vw"
            eager
          />
        </div>
        {work.content && <RichText html={work.content} />}
        <div className={styles.footer}>
          <Link href="/works" className="button button-ghost">
            作品一覧へ戻る
          </Link>
        </div>
      </article>
    </div>
  );
}
