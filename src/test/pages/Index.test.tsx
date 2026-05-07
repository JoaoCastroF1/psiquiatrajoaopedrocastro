import { describe, it, expect } from "vitest";
import { renderRoute } from "../render";
import Index from "@/pages/Index";

describe("Index page", () => {
  it("renders the home headline", async () => {
    const { findByRole } = renderRoute(<Index />);
    const h1 = await findByRole("heading", { level: 1 });
    expect(h1.textContent ?? "").toMatch(/psiquiatria.*ciência/i);
  });

  it("sets the document title", async () => {
    const { findByRole } = renderRoute(<Index />);
    await findByRole("heading", { level: 1 });
    expect(document.title).toMatch(/Dr\. João Pedro Castro/);
  });

  it("injects the FAQPage JSON-LD", () => {
    const { container } = renderRoute(<Index />);
    const ld = container.querySelector('script[type="application/ld+json"]');
    expect(ld?.textContent ?? "").toContain('"@type":"FAQPage"');
  });
});
