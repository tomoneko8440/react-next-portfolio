// 日付を「2026.10.03」形式で表示する（サーバーとブラウザで結果がずれないよう日本時間で固定）
export function formatDate(iso: string | undefined) {
  if (!iso) return "";
  const parts = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date(iso));
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return `${get("year")}.${get("month")}.${get("day")}`;
}
