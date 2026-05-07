import { describe, it, expect } from "vitest";
import { renderRoute } from "../render";
import Atuacao from "@/pages/Atuacao";

describe("Atuacao page", () => {
  it("renders the headline", async () => {
    const { findByRole } = renderRoute(<Atuacao />);
    const h1 = await findByRole("heading", { level: 1 });
    expect(h1.textContent ?? "").toMatch(/condições tratadas/i);
  });

  it("sets the document title", async () => {
    const { findByRole } = renderRoute(<Atuacao />);
    await findByRole("heading", { level: 1 });
    expect(document.title).toMatch(/Áreas de Atuação/);
  });
});
