"use client";

// ルートレイアウト自体でエラーが起きたときの最終手段の画面
export default function GlobalError({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <html lang="ja">
      <body style={{ fontFamily: "sans-serif", padding: "64px 16px", textAlign: "center" }}>
        <h1>エラーが発生しました</h1>
        <p>時間をおいてから、もう一度お試しください。</p>
        <button type="button" onClick={() => retry()} style={{ marginTop: 16, padding: "8px 16px" }}>
          もう一度読み込む
        </button>
      </body>
    </html>
  );
}
