import type { CSSProperties } from "react";
import Link from "next/link";
import { getDescription } from "@/lib/microcms";
import type { Blog, Work } from "@/lib/microcms";
import { formatDate } from "@/lib/date";
import { site } from "@/data/site";
import Thumbnail from "./Thumbnail";
import styles from "@/app/site.module.css";

type Props = {
  basePath: "/works" | "/blogs";
  contents: (Work | Blog)[];
  // 見出しの階層を飛ばさないよう、置く場所に合わせて変える
  headingLevel?: "h2" | "h3";
};

export default function ContentList({
  basePath,
  contents,
  headingLevel: Heading = "h3",
}: Props) {
  if (contents.length === 0) {
    return <p className={styles.muted}>{site.labels.common.emptyList}</p>;
  }

  return (
    <ul className={styles.cards}>
      {contents.map((content, index) => (
        <li
          key={content.id}
          data-reveal
          style={{ "--i": index % 3 } as CSSProperties}
        >
          <Link
            href={`${basePath}/${content.id}`}
            className={styles.card}
            data-tilt
          >
            <Thumbnail
              title={content.title}
              image={content.eyecatch}
              alt={content.eyecatchAlt}
              sizes="(max-width: 640px) 100vw, 300px"
            />
            <div className={styles.cardBody}>
              <Heading className={styles.cardTitle}>{content.title}</Heading>
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
