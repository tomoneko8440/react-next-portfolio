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

- Next.js 16（App Router）
- React 19
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

## 生成AIの利用

### 利用した主な箇所

生成AI（Claude Code）を、次のコード案の作成に利用しました。

| 内容 | 主なファイル |
| --- | --- |
| 表示時・スクロール時にふわっと表示するアニメーション | [components/ScrollReveal.tsx](components/ScrollReveal.tsx)、[app/site.module.css](app/site.module.css)、[app/globals.css](app/globals.css) |
| ホバー時の動き（カード、ボタン、ナビの下線、テーマ切替ボタンなど） | [app/site.module.css](app/site.module.css) |
| ページ移動時のクロスフェード（ReactのViewTransition） | [app/layout.tsx](app/layout.tsx)、[app/globals.css](app/globals.css) |
| トップへ戻るボタン | [components/BackToTop.tsx](components/BackToTop.tsx) |
| 名前のタイピング演出 | [components/TypingName.tsx](components/TypingName.tsx) |
| トップ背景の動く図形 | [app/(lists)/page.tsx](app/(lists)/page.tsx)、[app/site.module.css](app/site.module.css) |
| マウスに合わせてカードが傾く演出 | [components/CardTilt.tsx](components/CardTilt.tsx) |
| スキルタグを順番に表示する演出 | [app/profile/page.tsx](app/profile/page.tsx) |
| 経歴のタイムライン線 | [components/TimelineProgress.tsx](components/TimelineProgress.tsx) |
| ページ移動時に一番上へ戻す処理 | [components/ScrollToTop.tsx](components/ScrollToTop.tsx) |

<!-- ほかにも生成AIを使った箇所（サイトの初期作成、エラー調査、文章の推敲など）があれば上の表に追加する -->

### 自分で確認・修正した内容

（自分の言葉で記入）

<!--
書く内容の例（実際にやったことだけを書く）:
- npm run dev で各ページを開き、アニメーションが動くか確認した
- スマートフォン幅・ダークモードでも表示が崩れないか確認した
- OSの「視差効果を減らす」をオンにしてアニメーションが止まるか確認した
- ページ移動のたびに一番上に戻るか確認した
- 速さや色など、自分で調整した値
- 各コードが何をしているかを読んで理解した点（例: IntersectionObserver で画面に入った要素に data-revealed を付けている）
-->

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
