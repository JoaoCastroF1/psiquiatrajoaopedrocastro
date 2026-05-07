import { describe, it, expect } from "vitest";
import { renderRoute } from "../render";
import ConditionPage from "@/pages/ConditionPage";
import { conditions } from "@/data/conditions";

describe("ConditionPage", () => {
  it.each(conditions.map((c) => c.slug))(
    "renders the condition headline for /%s",
    async (slug) => {
      const condition = conditions.find((c) => c.slug === slug)!;
      const { findByRole } = renderRoute(<ConditionPage />, {
        path: "/:slug",
        initialPath: `/${condition.slug}`,
      });
      const h1 = await findByRole("heading", { level: 1 });
      expect(h1.textContent ?? "").toContain(condition.headline);
    },
  );

  it("injects FAQ and MedicalWebPage JSON-LD", () => {
    const condition = conditions[0];
    const { container } = renderRoute(<ConditionPage />, {
      path: "/:slug",
      initialPath: `/${condition.slug}`,
    });
    const scripts = Array.from(
      container.querySelectorAll('script[type="application/ld+json"]'),
    )
      .map((s) => s.textContent ?? "")
      .join("\n");
    expect(scripts).toContain('"@type":"FAQPage"');
    expect(scripts).toContain('"@type":"MedicalWebPage"');
  });

  it("redirects to /atuacao when the slug is unknown", () => {
    const { container } = renderRoute(<ConditionPage />, {
      path: "/:slug",
      initialPath: "/slug-inexistente",
    });
    expect(container.querySelector("h1")).toBeNull();
  });
});
