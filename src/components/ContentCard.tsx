import Link from "next/link";
import type { MicroCMSImage } from "microcms-js-sdk";
import Thumbnail from "./Thumbnail";
import { formatDate } from "@/libs/format";
import styles from "./ContentCard.module.css";

type Props = {
  href: string;
  title: string;
  description?: string;
  thumbnail?: MicroCMSImage;
  thumbnailAlt?: string;
  date?: string;
};

export default function ContentCard({ href, title, description, thumbnail, thumbnailAlt, date }: Props) {
  return (
    <article className={styles.card}>
      <Link href={href} className={styles.link}>
        <Thumbnail
          image={thumbnail}
          alt={thumbnailAlt || title}
          sizes="(min-width: 1080px) 340px, (min-width: 640px) 45vw, 92vw"
        />
        <div className={styles.body}>
          {date && (
            <time className={styles.date} dateTime={date}>
              {formatDate(date)}
            </time>
          )}
          <h3 className={styles.title}>{title}</h3>
          {description && <p className={styles.description}>{description}</p>}
        </div>
      </Link>
    </article>
  );
}
