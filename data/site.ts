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
      themeToggle: string;
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
  title: "藤居　知樹のポートフォリオ",
  description: "藤居　知樹のプロフィールと制作実績を紹介するポートフォリオサイトです。",

  // サイトの色（カラーコードで指定）
  theme: {
    background: "#edf1da", // 背景色
    surface: "#ffffff", // コンテンツの背景色
    foreground: "#1f1d1a",  // 文字色
    muted: "#68635b", // 薄い文字色
    border: "#000000",    // 枠線の色
    accent: "#d9480f", // アクセントカラー
    dark: { // ダークモードの色
      background: "#16140f", // 背景色
      surface: "#211e18", // コンテンツの背景色
      foreground: "#f3efe8", // 文字色
      muted: "#a9a297", // 薄い文字色
      border: "#38332a", // 枠線の色
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
      themeToggle: "ライト/ダークモードを切り替え",
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
    name: "藤居 知樹",
    role: "Webエンジニア",
    catchphrase: "Web開発の基礎を学んでいる学生です。将来はホワイトハッカーとして活躍することを目指しています。",
  },

  // 自己紹介（1要素が1段落）
  about: [
    "藤居知樹です。京都デザイン&テクノロジー専門学校でPythonやWeb開発の基礎を学んでいます。",
    "年齢-19歳",
    "趣味-ゲーム、アニメ、映画鑑賞",
    "将来の夢-ホワイトハッカーとして活躍すること",
  ],

  // スキル（グループを増やす場合は { } ごとコピー）
  skills: [
    { category: "フロントエンド", items: ["HTML", "CSS", "TypeScript", "React", "Next.js","Python"] },
    { category: "ツール", items: ["Git", "GitHub", "VS Code"] },
    { category: "資格", items: ["MOS Excel"] },
  ],

  // 経歴
  career: [
    { period: "2026年 - 現在", title: "京都デザイン&テクノロジー専門学校", description: "PythonやWeb開発の基礎を学んでいます。" },
    { period: "2023年 - 2026年", title: "屋久島おおぞら高等学校", description: "通信制の学校で建築系の勉強をしていました" },
  ],

  // 連絡先
  contact: {
    message: "お仕事のご相談やご連絡は、こちらからお願いします。",
    links: [
      { label: "メール", url: "mailto:exsample@example.com" },
      { label: "GitHub", url: "https://github.com/tomoneko8440" },
    ],
  },
};
