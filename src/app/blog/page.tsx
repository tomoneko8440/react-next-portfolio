import type { Metadata } from "next";
import { Suspense } from "react";
import BlogList from "@/components/BlogList";
import Loading from "@/components/Loading";
import PageHeader from "@/components/PageHeader";
import { getBlogs } from "@/libs/microcms";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "ブログ一覧",
  description: "制作の記録や学んだこと、好きなものについて書いたブログ記事の一覧です。",
  alternates: { canonical: "/blog" },
};

async function Blogs() {
  const { contents } = await getBlogs({ limit: 100 });
  return <BlogList blogs={contents} />;
}

export default function BlogPage() {
  return (
    <div className="container">
      <PageHeader
        label="Blog"
        title="ブログ一覧"
        lead="制作の記録や、学んだこと・気になったことを書いています。"
      />
      <Suspense fallback={<Loading label="記事を読み込み中…" />}>
        <Blogs />
      </Suspense>
    </div>
  );
}
