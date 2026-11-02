// サイトの文章・色など、編集したい内容はこのファイルで変更できます。
// 作品とブログ記事はmicroCMSの管理画面で編集します。
// 「" "」の中の文字を書き換えて保存すると、サイトに反映されます。
// about / skills / career / links を空の配列 [] にすると、その項目は非表示になります。

type Site = {
  title: string;
  description: string;
  theme: {
    background: string;
    surface: string;
    foreground: string;
    muted: string;
    border: string;
    accent: string;
    dark: {
      background: string;
      surface: string;
      foreground: string;
      muted: string;
      border: string;
    };
  };
  labels: {
    nav: { top: string; profile: string; works: string; blogs: string };
    home: {
      profileButton: string;
      worksHeading: string;
      blogsHeading: string;
      worksLink: string;
      blogsLink: string;
    };
    profile: {
      title: string;
      description: string;
      about: string;
      skills: string;
      career: string;
      contact: string;
    };
    works: { title: string; description: string };
    blogs: { title: string; description: string };
    common: {
      skipToContent: string;
      emptyList: string;
      backToWorks: string;
      backToBlogs: string;
      viewWork: string;
    };
    errors: {
      notFoundTitle: string;
      notFoundDescription: string;
      backToHome: string;
      errorTitle: string;
      errorDescription: string;
      reload: string;
    };
  };
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

  // サイトの色（カラーコードで指定）
  theme: {
    background: "#faf8f5",
    surface: "#ffffff",
    foreground: "#1f1d1a",
    muted: "#68635b",
    border: "#e4dfd7",
    accent: "#d9480f",
    dark: {
      background: "#16140f",
      surface: "#211e18",
      foreground: "#f3efe8",
      muted: "#a9a297",
      border: "#38332a",
    },
  },

  // ナビゲーションやボタンなど、画面に表示する固定文言
  labels: {
    nav: { top: "Top", profile: "Profile", works: "Works", blogs: "Blog" },
    home: {
      profileButton: "プロフィールを見る",
      worksHeading: "Works",
      blogsHeading: "Blog",
      worksLink: "作品一覧へ",
      blogsLink: "記事一覧へ",
    },
    profile: {
      title: "プロフィール",
      description: "自己紹介、スキル、経歴、連絡先を紹介します。",
      about: "About",
      skills: "Skills",
      career: "Career",
      contact: "Contact",
    },
    works: {
      title: "作品一覧",
      description: "これまでに制作した作品を紹介します。",
    },
    blogs: {
      title: "ブログ一覧",
      description: "学んだことや制作の記録をまとめた記事です。",
    },
    common: {
      skipToContent: "本文へ移動",
      emptyList: "まだ公開されているものはありません。",
      backToWorks: "作品一覧へ戻る",
      backToBlogs: "ブログ一覧へ戻る",
      viewWork: "作品を見る",
    },
    errors: {
      notFoundTitle: "ページが見つかりません",
      notFoundDescription: "削除されたか、URLが間違っている可能性があります。",
      backToHome: "トップページへ戻る",
      errorTitle: "読み込みに失敗しました",
      errorDescription: "時間をおいて、もう一度お試しください。",
      reload: "再読み込み",
    },
  },

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
