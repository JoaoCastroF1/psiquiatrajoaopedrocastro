import { describe, it, expect } from "vitest";
import { renderRoute } from "../render";
import Empresas from "@/pages/Empresas";

describe("Empresas page", () => {
  it("renders the corporate headline", async () => {
    const { findByRole } = renderRoute(<Empresas />);
    const h1 = await findByRole("heading", { level: 1 });
    expect(h1.textContent ?? "").toMatch(/burnout/i);
  });

  it("sets the document title", async () => {
    const { findByRole } = renderRoute(<Empresas />);
    await findByRole("heading", { level: 1 });
    expect(document.title).toMatch(/Saúde Mental Corporativa/);
  });
});
