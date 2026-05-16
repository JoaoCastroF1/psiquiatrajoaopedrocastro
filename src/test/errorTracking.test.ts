import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { initErrorTracking } from "@/lib/errorTracking";

type GtagMock = ReturnType<typeof vi.fn>;

beforeAll(() => {
  window.gtag = vi.fn();
  initErrorTracking();
});

beforeEach(() => {
  (window.gtag as GtagMock).mockClear();
});

function callsWith(description: string) {
  return (window.gtag as GtagMock).mock.calls.filter(
    (c) => (c[2] as { description: string })?.description === description
  );
}

describe("errorTracking", () => {
  it("reporta window.error como exception fatal no GA4", () => {
    window.dispatchEvent(
      new ErrorEvent("error", { error: new Error("boom"), message: "boom" })
    );
    expect(callsWith("Error: boom")).toEqual([
      ["event", "exception", { description: "Error: boom", fatal: true }],
    ]);
  });

  it("reporta unhandledrejection como exception não-fatal", () => {
    const ev = new Event("unhandledrejection");
    (ev as unknown as { reason: unknown }).reason = new Error("nope");
    window.dispatchEvent(ev);
    expect(callsWith("unhandledrejection: Error: nope")).toEqual([
      [
        "event",
        "exception",
        { description: "unhandledrejection: Error: nope", fatal: false },
      ],
    ]);
  });

  it("deduplica a mesma falha na mesma navegação", () => {
    const fire = () =>
      window.dispatchEvent(
        new ErrorEvent("error", { error: new Error("dup"), message: "dup" })
      );
    fire();
    fire();
    expect(callsWith("Error: dup")).toHaveLength(1);
  });

  it("trunca a descrição em 100 caracteres", () => {
    const long = "x".repeat(300);
    window.dispatchEvent(
      new ErrorEvent("error", { error: new Error(long), message: long })
    );
    const desc = `Error: ${long}`.slice(0, 100);
    expect(callsWith(desc)).toHaveLength(1);
    expect(desc.length).toBe(100);
  });
});
