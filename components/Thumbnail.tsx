import Image from "next/image";
import type { MicroCMSImage } from "microcms-js-sdk";
import styles from "@/app/site.module.css";

type Props = {
  title: string;
  image?: MicroCMSImage;
  alt?: string;
  sizes: string;
  priority?: boolean;
};

export default function Thumbnail({ title, image, alt, sizes, priority }: Props) {
  return (
    <div className={styles.thumbnail}>
      {image ? (
        <Image
          src={image.url}
          alt={alt || title}
          fill
          sizes={sizes}
          priority={priority}
        />
      ) : (
        <span aria-hidden="true">{title.charAt(0)}</span>
      )}
    </div>
  );
}
