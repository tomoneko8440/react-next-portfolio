import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentDetail from "@/components/ContentDetail";
import { getDescription, getBlog, getBlogIds, toStaticParams } from "@/lib/microcms";

export const revalidate = 60;

<<<<<<< HEAD
type Props = { params: Promise<{ id: string }> };
=======
type Props = { params: { id: string } };
>>>>>>> 4eb293e87d914bec09853461bc5e8a625a292990

export async function generateStaticParams() {
  return toStaticParams(await getBlogIds());
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
<<<<<<< HEAD
  const { id } = await params;
  const blog = await getBlog(id);
=======
  const blog = await getBlog(params.id);
>>>>>>> 4eb293e87d914bec09853461bc5e8a625a292990
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
<<<<<<< HEAD
  const { id } = await params;
  const blog = await getBlog(id);
=======
  const blog = await getBlog(params.id);
>>>>>>> 4eb293e87d914bec09853461bc5e8a625a292990
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
