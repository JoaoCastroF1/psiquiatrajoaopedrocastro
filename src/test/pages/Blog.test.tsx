import { describe, it, expect } from "vitest";
import { renderRoute } from "../render";
import Blog from "@/pages/Blog";

describe("Blog page", () => {
  it("renders the blog headline", async () => {
    const { findByRole } = renderRoute(<Blog />);
    const h1 = await findByRole("heading", { level: 1 });
    expect(h1.textContent ?? "").toMatch(/informação com.*fundamento clínico/i);
  });

  it("sets the document title", async () => {
    const { findByRole } = renderRoute(<Blog />);
    await findByRole("heading", { level: 1 });
    expect(document.title).toMatch(/Blog/);
  });

  it("injects the CollectionPage JSON-LD listing posts", () => {
    const { container } = renderRoute(<Blog />);
    const ld = container.querySelector('script[type="application/ld+json"]');
    expect(ld?.textContent ?? "").toContain('"@type":"CollectionPage"');
  });
});
