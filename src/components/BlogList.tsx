import ContentCard from "./ContentCard";
import type { Blog } from "@/libs/microcms";
import styles from "./CardGrid.module.css";

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  if (blogs.length === 0) return <p className={styles.empty}>まだ公開中の記事はありません。</p>;
  return (
    <ul className={styles.grid}>
      {blogs.map((blog) => (
        <li key={blog.id}>
          <ContentCard
            href={`/blog/${blog.id}`}
            title={blog.title}
            description={blog.description}
            thumbnail={blog.thumbnail}
            thumbnailAlt={blog.thumbnailAlt}
            date={blog.publishedAt ?? blog.createdAt}
          />
        </li>
      ))}
    </ul>
  );
}
