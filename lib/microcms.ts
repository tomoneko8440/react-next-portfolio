import { createClient, isMicroCMSRequestError } from "microcms-js-sdk";
import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN ?? "",
  apiKey: process.env.MICROCMS_API_KEY ?? "",
});

type Content = MicroCMSListContent & {
  title: string;
  description?: string;
  eyecatch?: MicroCMSImage;
  eyecatchAlt?: string;
  content: string;
};

export type Work = Content & { url?: string };
export type Blog = Content;

const LIST_FIELDS = "id,title,description,eyecatch,eyecatchAlt,content,publishedAt";

async function getList<T>(endpoint: string, limit: number) {
  const { contents } = await client.getList<T>({
    endpoint,
    queries: { limit, orders: "-publishedAt", fields: LIST_FIELDS },
  });
  return contents;
}

async function getDetail<T>(endpoint: string, contentId: string) {
  try {
    return await client.getListDetail<T>({ endpoint, contentId });
  } catch (error) {
    if (isMicroCMSRequestError(error) && error.status === 404) {
      return null;
    }
    throw error;
  }
}

// 説明文が未設定のときは本文の冒頭を使う
export function getDescription({ description, content }: Content) {
  if (description) {
    return description;
  }
  const text = content
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
  return text.length > 80 ? `${text.slice(0, 80)}…` : text;
}

export const getWorks = (limit = 100) => getList<Work>("works", limit);
export const getWork = (id: string) => getDetail<Work>("works", id);
export const getWorkIds = () => client.getAllContentIds({ endpoint: "works" });

export const getBlogs = (limit = 100) => getList<Blog>("blogs", limit);
export const getBlog = (id: string) => getDetail<Blog>("blogs", id);
export const getBlogIds = () => client.getAllContentIds({ endpoint: "blogs" });
