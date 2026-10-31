import Link from "next/link";
import { getDescription } from "@/lib/microcms";
import type { Blog, Work } from "@/lib/microcms";
import { formatDate } from "@/lib/date";
import Thumbnail from "./Thumbnail";
import styles from "@/app/site.module.css";

type Props = {
  basePath: "/works" | "/blogs";
  contents: (Work | Blog)[];
};

export default function ContentList({ basePath, contents }: Props) {
  if (contents.length === 0) {
    return <p className={styles.muted}>まだ公開されているものはありません。</p>;
  }

  return (
    <ul className={styles.cards}>
      {contents.map((content) => (
        <li key={content.id}>
          <Link href={`${basePath}/${content.id}`} className={styles.card}>
            <Thumbnail
              title={content.title}
              image={content.eyecatch}
              alt={content.eyecatchAlt}
              sizes="(max-width: 640px) 100vw, 300px"
            />
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{content.title}</h3>
              <p className={styles.cardDescription}>
                {getDescription(content)}
              </p>
              {content.publishedAt && (
                <time className={styles.date} dateTime={content.publishedAt}>
                  {formatDate(content.publishedAt)}
                </time>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
