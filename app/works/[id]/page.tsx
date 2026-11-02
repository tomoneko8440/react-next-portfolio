import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentDetail from "@/components/ContentDetail";
import { getDescription, getWork, getWorkIds, toStaticParams } from "@/lib/microcms";

export const revalidate = 60;

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return toStaticParams(await getWorkIds());
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const work = await getWork(id);
  if (!work) {
    notFound();
  }
  return {
    title: work.title,
    description: getDescription(work),
    openGraph: work.eyecatch ? { images: [work.eyecatch.url] } : undefined,
  };
}

export default async function WorkPage({ params }: Props) {
  const { id } = await params;
  const work = await getWork(id);
  if (!work) {
    notFound();
  }

  return (
    <ContentDetail
      content={work}
      backHref="/works"
      backLabel="作品一覧へ戻る"
      externalUrl={work.url}
    />
  );
}
