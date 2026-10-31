// プロフィールなど、サイト共通の内容はこのファイルで編集できます。
// 作品とブログ記事はmicroCMSの管理画面で編集します。
// 「" "」の中の文字を書き換えて保存すると、サイトに反映されます。
// about / skills / career / links を空の配列 [] にすると、その項目は非表示になります。

type Site = {
  title: string;
  description: string;
  accentColor: string;
  hero: { name: string; role: string; catchphrase: string };
  about: string[];
  skills: { category: string; items: string[] }[];
  career: { period: string; title: string; description: string }[];
  contact: { message: string; links: { label: string; url: string }[] };
};

export const site: Site = {
  // ブラウザのタブや検索結果に表示される情報
  title: "智猫のポートフォリオ",
  description: "智猫のプロフィールと制作実績を紹介するポートフォリオサイトです。",

  // サイト全体のメインカラー（カラーコードで指定）
  accentColor: "#d9480f",

  // TOPページの上部
  hero: {
    name: "智猫",
    role: "Webエンジニア",
    catchphrase: "ここにキャッチコピーを入れます。",
  },

  // 自己紹介（1要素が1段落）
  about: [
    "ここに自己紹介を入れます。これまでの経験や得意なことを書きましょう。",
    "段落を増やしたいときは、この行をコピーして追加します。",
  ],

  // スキル（グループを増やす場合は { } ごとコピー）
  skills: [
    { category: "フロントエンド", items: ["HTML", "CSS", "TypeScript", "React", "Next.js"] },
    { category: "ツール", items: ["Git", "GitHub", "VS Code"] },
  ],

  // 経歴
  career: [
    { period: "20XX年 - 現在", title: "会社名・学校名など", description: "ここに内容を入れます。" },
    { period: "20XX年 - 20XX年", title: "会社名・学校名など", description: "ここに内容を入れます。" },
  ],

  // 連絡先
  contact: {
    message: "お仕事のご相談やご連絡は、こちらからお願いします。",
    links: [
      { label: "メール", url: "mailto:your-email@example.com" },
      { label: "GitHub", url: "https://github.com/tomoneko8440" },
    ],
  },
};
