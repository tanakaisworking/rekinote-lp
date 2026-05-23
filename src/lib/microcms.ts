import { createClient } from "microcms-js-sdk";
import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "rekinote",
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export type Category = {
  name: string;
} & MicroCMSListContent;

export type Blog = {
  title: string;
  description?: string;
  body: string;
  eyecatch?: MicroCMSImage;
  category?: Category;
} & MicroCMSListContent;

export async function getBlogs(limit = 20, offset = 0) {
  return client.getList<Blog>({
    endpoint: "blogs",
    queries: { limit, offset, orders: "-publishedAt" },
  });
}

export async function getBlogDetail(contentId: string) {
  return client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
  });
}

export async function getAllBlogs() {
  const all: Blog[] = [];
  let offset = 0;
  const limit = 100;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const res = await client.getList<Blog>({
      endpoint: "blogs",
      queries: { limit, offset, orders: "-publishedAt" },
    });
    all.push(...res.contents);
    if (all.length >= res.totalCount) break;
    offset += limit;
  }
  return all;
}
