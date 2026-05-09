import { describe, it, expect } from "vitest";
import { renderRoute } from "../render";
import NotFound from "@/pages/NotFound";

describe("NotFound page", () => {
  it("renders the 404 message", async () => {
    const { findByRole } = renderRoute(<NotFound />);
    const h1 = await findByRole("heading", { level: 1 });
    expect(h1.textContent).toBe("404");
  });

  it("offers a link back to home", async () => {
    const { findByRole } = renderRoute(<NotFound />);
    const link = await findByRole("link", { name: /return to home/i });
    expect(link).toHaveAttribute("href", "/");
  });
});
