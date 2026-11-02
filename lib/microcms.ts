import { createClient, isMicroCMSRequestError } from "microcms-js-sdk";
import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

<<<<<<< HEAD
const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN ?? "";
const apiKey = process.env.MICROCMS_API_KEY ?? "";

// キーが未設定のときは0件として扱い、ビルドを止めない
const client = serviceDomain && apiKey ? createClient({ serviceDomain, apiKey }) : null;
=======
const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN ?? "",
  apiKey: process.env.MICROCMS_API_KEY ?? "",
});
>>>>>>> 4eb293e87d914bec09853461bc5e8a625a292990

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
<<<<<<< HEAD
  if (!client) {
    return [];
  }
=======
>>>>>>> 4eb293e87d914bec09853461bc5e8a625a292990
  const { contents } = await client.getList<T>({
    endpoint,
    queries: { limit, orders: "-publishedAt", fields: LIST_FIELDS },
  });
  return contents;
}

<<<<<<< HEAD
async function getIds(endpoint: string) {
  return client ? client.getAllContentIds({ endpoint }) : [];
}

async function getDetail<T>(endpoint: string, contentId: string) {
  if (!client) {
    return null;
  }
=======
async function getDetail<T>(endpoint: string, contentId: string) {
>>>>>>> 4eb293e87d914bec09853461bc5e8a625a292990
  try {
    return await client.getListDetail<T>({ endpoint, contentId });
  } catch (error) {
    if (isMicroCMSRequestError(error) && error.status === 404) {
      return null;
    }
    throw error;
  }
}

// APIが未作成のときは0件として扱い、ビルドを止めない
async function emptyIfMissing<T>(request: Promise<T[]>) {
  try {
    return await request;
  } catch (error) {
    if (isMicroCMSRequestError(error) && error.status === 404) {
      return [];
    }
    throw error;
  }
}

// output: export は空配列だとビルドエラーになるので、0件ならダミーを返す（そのURLは404になる）
export function toStaticParams(ids: string[]) {
  return (ids.length > 0 ? ids : ["none"]).map((id) => ({ id }));
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
<<<<<<< HEAD
export const getWorkIds = () => getIds("works");

export const getBlogs = (limit = 100) => emptyIfMissing(getList<Blog>("blogs", limit));
export const getBlog = (id: string) => getDetail<Blog>("blogs", id);
export const getBlogIds = () => emptyIfMissing(getIds("blogs"));
=======
export const getWorkIds = () => client.getAllContentIds({ endpoint: "works" });

export const getBlogs = (limit = 100) => emptyIfMissing(getList<Blog>("blogs", limit));
export const getBlog = (id: string) => getDetail<Blog>("blogs", id);
export const getBlogIds = () => emptyIfMissing(client.getAllContentIds({ endpoint: "blogs" }));
>>>>>>> 4eb293e87d914bec09853461bc5e8a625a292990
