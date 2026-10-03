"use client";

import Link from "next/link";
import { useEffect } from "react";
import StatusScreen from "@/components/StatusScreen";

export default function Error({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <StatusScreen
      code="ERROR"
      title="読み込みに失敗しました"
      actions={
        <>
          <button type="button" className="button" onClick={() => retry()}>
            もう一度読み込む
          </button>
          <Link href="/" className="button button-ghost">
            トップへ戻る
          </Link>
        </>
      }
    >
      <p>
        一時的な問題でコンテンツを取得できませんでした。
        <br />
        時間をおいてから、もう一度お試しください。
      </p>
    </StatusScreen>
  );
}
