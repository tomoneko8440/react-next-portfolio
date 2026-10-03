import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { site } from "@/libs/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "プロフィール",
  description: `${site.shortName} の自己紹介、スキル、好きなことを紹介するページです。`,
  alternates: { canonical: "/profile" },
};

// ここを書き換えると自己紹介の内容が変わります
const skills = [
  { name: "HTML / CSS", note: "レスポンシブなレイアウトとアクセシビリティを意識したマークアップ" },
  { name: "TypeScript / React", note: "コンポーネント分割と型で、読みやすいコードを書く練習中" },
  { name: "Next.js / microCMS", note: "このサイトの実装で、データ取得とページ生成を学習" },
  { name: "Excel", note: "MOS Excel 取得。関数や集計で、データの整理が得意" },
];

const favorites = [
  {
    title: "ゲーム",
    body: "フォートナイト、Apex Legends、マインクラフト。シミュレーションゲームも好きで、仕組みを考えながら遊ぶのが楽しみです。",
  },
  {
    title: "車",
    body: "アセットコルサや首都高バトルなどのドライブ・レースゲーム。このサイトの配色も、夜のガレージとレーシングカーをイメージしています。",
  },
  {
    title: "音楽",
    body: "ギターとピアノの経験があります。練習を重ねて少しずつ上達していく感覚は、プログラミングにも通じると感じています。",
  },
];

export default function ProfilePage() {
  return (
    <div className="container">
      <PageHeader
        label="Profile"
        title="プロフィール"
        lead="ゲーム・車・音楽が好きで、好きなものを自分で形にしたくて Web 制作を学んでいます。"
      />

      <div className={styles.layout}>
        <section className={styles.card} aria-labelledby="about-title">
          <h2 id="about-title" className={styles.heading}>
            <span className={styles.headingEn}>About</span>
            自己紹介
          </h2>
          <dl className={styles.facts}>
            <div>
              <dt>名前</dt>
              <dd>{site.shortName}</dd>
            </div>
            <div>
              <dt>GitHub</dt>
              <dd>
                <a href={site.githubUrl} target="_blank" rel="noopener noreferrer">
                  {site.githubUrl.replace("https://", "")}
                  <span className="visually-hidden">（新しいタブで開きます）</span>
                </a>
              </dd>
            </div>
          </dl>
          <p>
            遊ぶ側から作る側へ。ゲームや車の世界で「どうやって動いているんだろう」と気になったことをきっかけに、プログラミングを学び始めました。このサイトでは、作ったものと、その過程で学んだことを記録しています。
          </p>
        </section>

        <section className={styles.card} aria-labelledby="skills-title">
          <h2 id="skills-title" className={styles.heading}>
            <span className={styles.headingEn}>Skills</span>
            できること
          </h2>
          <ul className={styles.skills}>
            {skills.map((skill) => (
              <li key={skill.name}>
                <strong>{skill.name}</strong>
                <span>{skill.note}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className={styles.favorites} aria-labelledby="favorites-title">
        <h2 id="favorites-title" className={styles.heading}>
          <span className={styles.headingEn}>Favorites</span>
          好きなこと
        </h2>
        <ul className={styles.favoriteList}>
          {favorites.map((item, i) => (
            <li key={item.title} className={styles.card}>
              <p className={styles.number} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
