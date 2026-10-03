import type { Metadata } from "next";
import Link from "next/link";
import RichText from "@/components/RichText";
import Thumbnail from "@/components/Thumbnail";
import { formatDate } from "@/libs/format";
import { getBlog } from "@/libs/microcms";
import styles from "@/components/Article.module.css";

export const revalidate = 60;

// ビルド時には生成せず、初めてアクセスされたときに生成してキャッシュする
export function generateStaticParams() {
  return [];
}

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const blog = await getBlog(id);
  const description = blog.description || `${blog.title} のブログ記事です。`;
  return {
    title: blog.title,
    description,
    alternates: { canonical: `/blog/${blog.id}` },
    openGraph: {
      title: blog.title,
      description,
      type: "article",
      publishedTime: blog.publishedAt,
      images: blog.thumbnail ? [{ url: blog.thumbnail.url }] : undefined,
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params;
  const blog = await getBlog(id);
  const published = blog.publishedAt ?? blog.createdAt;
  const updated = blog.revisedAt ?? blog.updatedAt;

  return (
    <div className="container">
      <article className={styles.article}>
        <Link href="/blog" className={styles.back}>
          <span aria-hidden="true">← </span>ブログ一覧へ戻る
        </Link>
        <p className={styles.label}>Blog</p>
        <h1 className={styles.title}>{blog.title}</h1>
        <p className={styles.meta}>
          <span>
            公開 <time dateTime={published}>{formatDate(published)}</time>
          </span>
          {updated && formatDate(updated) !== formatDate(published) && (
            <span>
              更新 <time dateTime={updated}>{formatDate(updated)}</time>
            </span>
          )}
        </p>
        <div className={styles.thumbnail}>
          <Thumbnail
            image={blog.thumbnail}
            alt={blog.thumbnailAlt || blog.title}
            sizes="(min-width: 832px) 800px, 92vw"
            eager
          />
        </div>
        {blog.content && <RichText html={blog.content} />}
        <div className={styles.footer}>
          <Link href="/blog" className="button button-ghost">
            ブログ一覧へ戻る
          </Link>
        </div>
      </article>
    </div>
  );
}
