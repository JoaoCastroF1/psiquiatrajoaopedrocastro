type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

// GA4 limita valores de parâmetro de evento a 100 caracteres.
const MAX_DESCRIPTION = 100;

// Evita inundar o GA com a mesma falha repetida na mesma navegação.
const reported = new Set<string>();

function report(description: string, fatal: boolean) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  const desc = description.slice(0, MAX_DESCRIPTION);
  if (reported.has(desc)) return;
  reported.add(desc);
  window.gtag("event", "exception", { description: desc, fatal });
}

function describe(value: unknown, fallback: string): string {
  if (value instanceof Error) return `${value.name}: ${value.message}`;
  if (typeof value === "string" && value) return value;
  return fallback;
}

export function initErrorTracking() {
  if (typeof window === "undefined") return;

  window.addEventListener("error", (event) => {
    report(describe(event.error ?? event.message, "Erro desconhecido"), true);
  });

  window.addEventListener("unhandledrejection", (event) => {
    report(`unhandledrejection: ${describe(event.reason, "motivo desconhecido")}`, false);
  });
}
