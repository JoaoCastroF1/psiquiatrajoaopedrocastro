import { describe, it, expect } from "vitest";
import { renderRoute } from "../render";
import BlogPost from "@/pages/BlogPost";
import { blogPosts } from "@/data/blogPosts";

describe("BlogPost page", () => {
  it("renders an article with the post title", async () => {
    const post = blogPosts[0];
    const { findByRole } = renderRoute(<BlogPost />, {
      path: "/blog/:slug",
      initialPath: `/blog/${post.slug}`,
    });
    const h1 = await findByRole("heading", { level: 1 });
    expect(h1.textContent).toBe(post.title);
  });

  it("injects an Article JSON-LD", () => {
    const post = blogPosts[0];
    const { container } = renderRoute(<BlogPost />, {
      path: "/blog/:slug",
      initialPath: `/blog/${post.slug}`,
    });
    const ld = container.querySelector('script[type="application/ld+json"]');
    expect(ld?.textContent ?? "").toContain('"@type":"Article"');
  });

  it("redirects to /blog when the slug is unknown", () => {
    const { container } = renderRoute(<BlogPost />, {
      path: "/blog/:slug",
      initialPath: "/blog/slug-que-nao-existe",
    });
    expect(container.querySelector("h1")).toBeNull();
  });
});
