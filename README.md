# 智猫のポートフォリオ

## サイトURL

https://tomoneko8440.github.io/react-next-portfolio/

## 概要

自己紹介、制作した作品、ブログ記事を紹介するポートフォリオサイトです。作品と記事はmicroCMSで管理しています。

## ページ構成

| ページ | パス | 内容 |
| --- | --- | --- |
| TOP | `/` | 導入文、新着の作品と記事 |
| プロフィール | `/profile` | 自己紹介、スキル、経歴、連絡先 |
| 作品一覧 | `/works` | 公開中の作品 |
| 作品詳細 | `/works/[id]` | 作品の説明と本文 |
| ブログ一覧 | `/blogs` | 公開中の記事 |
| ブログ詳細 | `/blogs/[id]` | 記事の本文 |

## 使用技術

- Next.js 14（App Router）
- React 18
- TypeScript
- CSS Modules
- microCMS（`microcms-js-sdk`）
- GitHub Pages（GitHub Actionsでデプロイ）

## デザイン方針

（自分の言葉で記入）生成りの背景に朱色のアクセントを合わせ、内容が読みやすい落ち着いた配色にしました。ダークモードとスマートフォンにも対応しています。

## 選んだ理由

（自分の言葉で記入）

## 力を入れた点

（自分の言葉で記入）

## ローカルでの起動

```bash
cp .env.example .env.local
npm install
npm run dev
```

`.env.local` にmicroCMSのサービスドメインとAPIキーを設定してから、http://localhost:3000 を開きます。

## 内容の変更

- 作品と記事: microCMSの管理画面（サイトへの反映には再デプロイが必要。GitHubのActionsタブから「Deploy to GitHub Pages」を手動実行）
- プロフィール、サイト名、メインカラー: [data/site.ts](data/site.ts)

## microCMSのAPI設定

`works` と `blogs` の2つをリスト形式で作成します。

| フィールドID | 種類 | 必須 | 内容 |
| --- | --- | --- | --- |
| `title` | テキストフィールド | はい | タイトル |
| `content` | リッチエディタ | はい | 本文 |
| `eyecatch` | 画像 | いいえ | サムネイル |
| `eyecatchAlt` | テキストフィールド | いいえ | サムネイルの代替テキスト（未設定ならタイトル） |
| `description` | テキストエリア | いいえ | 説明文（未設定なら本文の冒頭） |
| `url` | テキストフィールド | いいえ | 作品のURL（`works` のみ） |
