import ContentCard from "./ContentCard";
import type { Work } from "@/libs/microcms";
import styles from "./CardGrid.module.css";

export default function WorkList({ works }: { works: Work[] }) {
  if (works.length === 0) return <p className={styles.empty}>まだ公開中の作品はありません。</p>;
  return (
    <ul className={styles.grid}>
      {works.map((work) => (
        <li key={work.id}>
          <ContentCard
            href={`/works/${work.id}`}
            title={work.title}
            description={work.description}
            thumbnail={work.thumbnail}
            thumbnailAlt={work.thumbnailAlt}
          />
        </li>
      ))}
    </ul>
  );
}
