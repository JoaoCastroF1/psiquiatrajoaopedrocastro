import { describe, it, expect } from "vitest";
import { renderRoute } from "../render";
import BlogHub from "@/pages/BlogHub";
import { blogHubs } from "@/data/blogHubs";

describe("BlogHub page", () => {
  it("renders a valid hub by slug", async () => {
    const hub = blogHubs[0];
    const { findByRole } = renderRoute(<BlogHub />, {
      path: "/blog/tema/:hubSlug",
      initialPath: `/blog/tema/${hub.slug}`,
    });
    const h1 = await findByRole("heading", { level: 1 });
    expect(h1.textContent?.toLowerCase()).toContain(hub.title.toLowerCase());
  });

  it("redirects to /blog when the hub slug is unknown", () => {
    const { container } = renderRoute(<BlogHub />, {
      path: "/blog/tema/:hubSlug",
      initialPath: "/blog/tema/slug-que-nao-existe",
    });
    // Navigate replaces the route without rendering content; the hub headline
    // should not appear.
    expect(container.querySelector("h1")).toBeNull();
  });
});
