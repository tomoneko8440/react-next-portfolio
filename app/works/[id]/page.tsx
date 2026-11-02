import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentDetail from "@/components/ContentDetail";
import { getDescription, getWork, getWorkIds, toStaticParams } from "@/lib/microcms";

export const revalidate = 60;

<<<<<<< HEAD
type Props = { params: Promise<{ id: string }> };
=======
type Props = { params: { id: string } };
>>>>>>> 4eb293e87d914bec09853461bc5e8a625a292990

export async function generateStaticParams() {
  return toStaticParams(await getWorkIds());
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
<<<<<<< HEAD
  const { id } = await params;
  const work = await getWork(id);
=======
  const work = await getWork(params.id);
>>>>>>> 4eb293e87d914bec09853461bc5e8a625a292990
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
<<<<<<< HEAD
  const { id } = await params;
  const work = await getWork(id);
=======
  const work = await getWork(params.id);
>>>>>>> 4eb293e87d914bec09853461bc5e8a625a292990
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
