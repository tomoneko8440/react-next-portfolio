import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import PageHeader from "@/components/PageHeader";
import WorkList from "@/components/WorkList";
import { getWorks } from "@/libs/microcms";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "作品一覧",
  description: "これまでに制作した Web サイトやアプリなどの作品一覧です。",
  alternates: { canonical: "/works" },
};

async function Works() {
  const { contents } = await getWorks({ limit: 100 });
  return <WorkList works={contents} />;
}

export default function WorksPage() {
  return (
    <div className="container">
      <PageHeader
        label="Works"
        title="作品一覧"
        lead="これまでに作ったものを並べています。カードを選ぶと、制作の背景や工夫した点を読めます。"
      />
      <Suspense fallback={<Loading label="作品を読み込み中…" />}>
        <Works />
      </Suspense>
    </div>
  );
}
