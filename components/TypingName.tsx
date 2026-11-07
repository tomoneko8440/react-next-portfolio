import type { CSSProperties } from "react";
import styles from "@/app/site.module.css";

// 名前を1文字ずつ表示する。読み上げソフトには名前全体をそのまま伝える
export default function TypingName({ name }: { name: string }) {
  const chars = Array.from(name);

  return (
    <h1
      className={`${styles.name} ${styles.typing}`}
      style={{ "--len": chars.length } as CSSProperties}
    >
      <span className={styles.visuallyHidden}>{name}</span>
      <span aria-hidden="true">
        {chars.map((char, i) => (
          <span
            key={i}
            className={styles.typingChar}
            style={{ "--i": i } as CSSProperties}
          >
            {char}
          </span>
        ))}
      </span>
    </h1>
  );
}
