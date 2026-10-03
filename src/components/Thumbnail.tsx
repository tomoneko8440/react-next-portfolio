import Image from "next/image";
import type { MicroCMSImage } from "microcms-js-sdk";
import styles from "./Thumbnail.module.css";

type Props = {
  image?: MicroCMSImage;
  alt: string;
  sizes: string;
  /** ファーストビューに出る画像（詳細ページのメイン画像など）は true */
  eager?: boolean;
  label?: string;
};

// サムネイル未設定でも 16:9 の枠を保ち、レイアウトが崩れないようにする
export default function Thumbnail({ image, alt, sizes, eager = false, label = "No Image" }: Props) {
  return (
    <div className={styles.frame}>
      {image ? (
        <Image
          src={image.url}
          alt={alt}
          fill
          sizes={sizes}
          className={styles.image}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : undefined}
        />
      ) : (
        <div className={styles.placeholder} role="img" aria-label={`${alt}（画像なし）`}>
          <span aria-hidden="true">{label}</span>
        </div>
      )}
    </div>
  );
}
