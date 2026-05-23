import { createClient } from "microcms-js-sdk";
import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "rekinote",
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export type Category = {
  name: string;
} & MicroCMSListContent;

export type BlogRaw = {
  title?: string;
  title_ja?: string;
  title_en?: string;
  description?: string;
  description_ja?: string;
  description_en?: string;
  body?: string;
  body_ja?: string;
  body_en?: string;
  eyecatch?: MicroCMSImage;
  category?: Category;
} & MicroCMSListContent;

export type Blog = {
  title: string;
  description?: string;
  body: string;
  eyecatch?: MicroCMSImage;
  category?: Category;
} & MicroCMSListContent;

const categoryMap: Record<string, string> = {
  "更新情報": "Updates",
  "お知らせ": "News",
};

export function localizeBlog(raw: BlogRaw, lang: "ja" | "en"): Blog | null {
  const title = lang === "ja" ? (raw.title_ja || raw.title) : (raw.title_en || raw.title);
  const body = lang === "ja" ? (raw.body_ja || raw.body) : (raw.body_en || raw.body);
  const description = lang === "ja" ? (raw.description_ja || raw.description) : (raw.description_en || raw.description);

  if (!title || !body) return null;

  return {
    ...raw,
    title,
    body,
    description: description || undefined,
    category: raw.category ? {
      ...raw.category,
      name: lang === "en" ? (categoryMap[raw.category.name] || raw.category.name) : raw.category.name,
    } : undefined,
  };
}

export async function getBlogsRaw(limit = 100, offset = 0) {
  return client.getList<BlogRaw>({
    endpoint: "blogs",
    queries: { limit, offset, orders: "-publishedAt" },
  });
}

export async function getBlogs(lang: "ja" | "en", limit = 20) {
  const res = await getBlogsRaw(100);
  const localized = res.contents
    .map((raw) => localizeBlog(raw, lang))
    .filter((b): b is Blog => b !== null);
  return { contents: localized.slice(0, limit), totalCount: localized.length };
}

export async function getAllBlogsRaw() {
  const all: BlogRaw[] = [];
  let offset = 0;
  const limit = 100;
  while (true) {
    const res = await getBlogsRaw(limit, offset);
    all.push(...res.contents);
    if (all.length >= res.totalCount) break;
    offset += limit;
  }
  return all;
}
