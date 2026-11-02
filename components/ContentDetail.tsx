import Link from "next/link";
import type { Blog, Work } from "@/lib/microcms";
import { formatDate } from "@/lib/date";
import { site } from "@/data/site";
import Thumbnail from "./Thumbnail";
import styles from "@/app/site.module.css";

type Props = {
  content: Work | Blog;
  backHref: string;
  backLabel: string;
  externalUrl?: string;
};

export default function ContentDetail({
  content,
  backHref,
  backLabel,
  externalUrl,
}: Props) {
  return (
    <article className={styles.detail}>
      <Link href={backHref} className={styles.backLink}>
        ← {backLabel}
      </Link>
      <h1 className={styles.pageTitle}>{content.title}</h1>
      {content.publishedAt && (
        <time className={styles.date} dateTime={content.publishedAt}>
          {formatDate(content.publishedAt)}
        </time>
      )}
      {content.description && <p className={styles.lead}>{content.description}</p>}
      <div className={styles.detailImage}>
        <Thumbnail
          title={content.title}
          image={content.eyecatch}
          alt={content.eyecatchAlt}
          sizes="(max-width: 768px) 100vw, 720px"
          priority
        />
      </div>
      {/* 本文は自分で管理するmicroCMSのリッチエディタのHTML */}
      <div
        className={styles.richText}
        dangerouslySetInnerHTML={{ __html: content.content }}
      />
      {externalUrl && (
        <p>
          <a
            href={externalUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.button}
          >
            {site.labels.common.viewWork}
          </a>
        </p>
      )}
    </article>
  );
}
