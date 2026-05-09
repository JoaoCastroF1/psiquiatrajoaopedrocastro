import { describe, it, expect } from "vitest";
import { renderRoute } from "../render";
import VestibulandoEspecialista from "@/pages/VestibulandoEspecialista";

describe("VestibulandoEspecialista page", () => {
  it("renders the headline", async () => {
    const { findByRole } = renderRoute(<VestibulandoEspecialista />);
    const h1 = await findByRole("heading", { level: 1 });
    expect(h1.textContent ?? "").toMatch(/estudar 12 horas/i);
  });

  it("sets the document title", async () => {
    const { findByRole } = renderRoute(<VestibulandoEspecialista />);
    await findByRole("heading", { level: 1 });
    expect(document.title).toMatch(/Vestibulandos/);
  });
});
