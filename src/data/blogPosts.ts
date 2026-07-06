import { blogIndex, type BlogPostMeta } from "./blogIndex";
import { blogContent } from "./blogContent";

export type { BlogTag, BlogPostMeta } from "./blogIndex";

export interface BlogPost extends BlogPostMeta {
  content: string[];
}

export const blogPosts: BlogPost[] = blogIndex.map((meta) => ({
  ...meta,
  content: blogContent[meta.slug] ?? [],
}));
