import type { MetadataRoute } from "next";
import { getBlogs, getWorks } from "@/libs/microcms";
import { site } from "@/libs/site";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [works, blogs] = await Promise.all([
    getWorks({ limit: 100, fields: "id,updatedAt" }),
    getBlogs({ limit: 100, fields: "id,updatedAt" }),
  ]);

  return [
    ...["", "/profile", "/works", "/blog"].map((path) => ({ url: `${site.url}${path}` })),
    ...works.contents.map((w) => ({ url: `${site.url}/works/${w.id}`, lastModified: w.updatedAt })),
    ...blogs.contents.map((b) => ({ url: `${site.url}/blog/${b.id}`, lastModified: b.updatedAt })),
  ];
}
