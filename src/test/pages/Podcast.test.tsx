import { describe, it, expect } from "vitest";
import { renderRoute } from "../render";
import Podcast from "@/pages/Podcast";

describe("Podcast page", () => {
  it("renders the show name", async () => {
    const { findByRole } = renderRoute(<Podcast />);
    const h1 = await findByRole("heading", { level: 1 });
    expect(h1.textContent ?? "").toMatch(/antivírus/i);
  });

  it("sets the document title", async () => {
    const { findByRole } = renderRoute(<Podcast />);
    await findByRole("heading", { level: 1 });
    expect(document.title).toMatch(/Podcast Antivírus/);
  });

  it("injects the PodcastSeries JSON-LD", () => {
    const { container } = renderRoute(<Podcast />);
    const ld = container.querySelector('script[type="application/ld+json"]');
    expect(ld?.textContent ?? "").toContain('"@type":"PodcastSeries"');
  });
});
