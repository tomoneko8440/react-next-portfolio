// サイト全体で使う基本情報。名前や説明はここを書き換えれば全ページに反映されます。
export const site = {
  name: "tomoneko's garage",
  shortName: "tomoneko",
  description:
    "ゲームと車とものづくりが好きな tomoneko のポートフォリオ。Next.js と microCMS で作った作品やブログを掲載しています。",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  githubUrl: "https://github.com/tomoneko8440",
};

export const navItems = [
  { href: "/", label: "Top", ja: "トップ" },
  { href: "/profile", label: "Profile", ja: "プロフィール" },
  { href: "/works", label: "Works", ja: "作品" },
  { href: "/blog", label: "Blog", ja: "ブログ" },
] as const;
