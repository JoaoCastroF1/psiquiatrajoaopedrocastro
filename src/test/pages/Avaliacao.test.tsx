import { describe, it, expect } from "vitest";
import { renderRoute } from "../render";
import Avaliacao from "@/pages/Avaliacao";

describe("Avaliacao page", () => {
  it("renders the assessment headline", async () => {
    const { findByRole } = renderRoute(<Avaliacao />);
    const h1 = await findByRole("heading", { level: 1 });
    expect(h1.textContent ?? "").toMatch(/avaliação de.*sintomas/i);
  });

  it("sets the document title", async () => {
    const { findByRole } = renderRoute(<Avaliacao />);
    await findByRole("heading", { level: 1 });
    expect(document.title).toMatch(/Avaliação de Sintomas/);
  });

  it("starts at the first question", async () => {
    const { findByText } = renderRoute(<Avaliacao />);
    expect(await findByText(/pergunta 1 de 6/i)).toBeInTheDocument();
  });
});
