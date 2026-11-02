import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentDetail from "@/components/ContentDetail";
import { getDescription, getBlog, getBlogIds, toStaticParams } from "@/lib/microcms";

export const revalidate = 60;

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return toStaticParams(await getBlogIds());
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const blog = await getBlog(id);
  if (!blog) {
    notFound();
  }
  return {
    title: blog.title,
    description: getDescription(blog),
    openGraph: blog.eyecatch ? { images: [blog.eyecatch.url] } : undefined,
  };
}

export default async function BlogPage({ params }: Props) {
  const { id } = await params;
  const blog = await getBlog(id);
  if (!blog) {
    notFound();
  }

  return (
    <ContentDetail
      content={blog}
      backHref="/blogs"
      backLabel="ブログ一覧へ戻る"
    />
  );
}
