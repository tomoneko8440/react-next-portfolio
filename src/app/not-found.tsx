import type { Metadata } from "next";
import Link from "next/link";
import StatusScreen from "@/components/StatusScreen";

export const metadata: Metadata = {
  title: "ページが見つかりません",
  description: "お探しのページは見つかりませんでした。",
};

export default function NotFound() {
  return (
    <StatusScreen
      code="404"
      title="ページが見つかりません"
      actions={
        <>
          <Link href="/" className="button">
            トップへ戻る
          </Link>
          <Link href="/works" className="button button-ghost">
            作品一覧
          </Link>
          <Link href="/blog" className="button button-ghost">
            ブログ一覧
          </Link>
        </>
      }
    >
      <p>
        お探しの作品や記事は、削除されたか URL が変わった可能性があります。
        <br />
        一覧ページから探してみてください。
      </p>
    </StatusScreen>
  );
}
