import { createClient, isMicroCMSRequestError } from "microcms-js-sdk";
import type { MicroCMSImage, MicroCMSListContent, MicroCMSQueries } from "microcms-js-sdk";
import { notFound } from "next/navigation";
import { cache } from "react";

// microCMS の API スキーマ（README の「microCMS の設定」と合わせる）
export type Work = {
  title: string;
  description?: string;
  content?: string;
  thumbnail?: MicroCMSImage;
  thumbnailAlt?: string;
  url?: string;
} & MicroCMSListContent;

export type Blog = {
  title: string;
  description?: string;
  content?: string;
  thumbnail?: MicroCMSImage;
  thumbnailAlt?: string;
} & MicroCMSListContent;

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

if (!serviceDomain || !apiKey) {
  throw new Error(
    "MICROCMS_SERVICE_DOMAIN と MICROCMS_API_KEY を環境変数に設定してください（.env.example を参照）",
  );
}

const client = createClient({ serviceDomain, apiKey });

// 一覧で使うフィールドだけ取得して、本文の転送量を減らす
const LIST_FIELDS = "id,title,description,thumbnail,thumbnailAlt,publishedAt,createdAt,updatedAt,revisedAt";

export const getWorks = (queries?: MicroCMSQueries) =>
  client.getList<Work>({ endpoint: "works", queries: { fields: LIST_FIELDS, ...queries } });

export const getBlogs = (queries?: MicroCMSQueries) =>
  client.getList<Blog>({ endpoint: "blogs", queries: { fields: LIST_FIELDS, ...queries } });

// 存在しない ID は microCMS が 404 を返すので、Next.js の Not Found 画面へつなぐ
async function getDetailOrNotFound<T>(endpoint: string, contentId: string) {
  try {
    return await client.getListDetail<T>({ endpoint, contentId });
  } catch (error) {
    if (isMicroCMSRequestError(error) && error.status === 404) notFound();
    throw error;
  }
}

// generateMetadata とページ本体で同じ記事を使うので、1 回のリクエスト内では結果を共有する
export const getWork = cache((id: string) => getDetailOrNotFound<Work>("works", id));
export const getBlog = cache((id: string) => getDetailOrNotFound<Blog>("blogs", id));
