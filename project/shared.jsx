/* global React */
const { useState, useEffect, useRef } = React;

/* ============================================================
   Shared visual primitives — used across all variants
   ============================================================ */

window.Eyebrow = function Eyebrow({ children, color, className = "" }) {
  return (
    <p className={`djp-eyebrow ${className}`} style={{ color: color || undefined }}>
      {children}
    </p>
  );
};

window.Rule = function Rule({ width = 32, color, className = "" }) {
  return (
    <span
      className={`djp-rule ${className}`}
      style={{ width, background: color || undefined, display: "inline-block" }}
    />
  );
};

window.SectionLabel = function SectionLabel({ kicker, title, em, max = "44rem" }) {
  return (
    <div style={{ maxWidth: max, marginBottom: "2.5rem" }}>
      <Eyebrow>{kicker}</Eyebrow>
      <h2 className="djp-h2" style={{ marginTop: "1rem" }}>
        {title} {em && <em className="djp-em not-italic" style={{ color: "var(--primary)" }}>{em}</em>}
      </h2>
    </div>
  );
};

/* SVG scribbles — translated from the repo's brand/scribbles/* */

window.SpiralScribble = function SpiralScribble({ size = 48, color = "currentColor", strokeWidth = 1.5 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 32c0-6 5-11 11-11s11 5 11 11-5 11-11 11-11-5-11-11 5-11 11-11" />
      <path d="M32 32c0-9 7-16 16-16s16 7 16 16" opacity="0.6" />
      <path d="M32 32c-4 0-8 3-8 8s4 8 8 8 8-3 8-8" />
      <path d="M32 32c-7 0-13 5-13 13s6 13 13 13" opacity="0.4" />
    </svg>
  );
};

window.TangleScribble = function TangleScribble({ size = 80, color = "currentColor", strokeWidth = 1.5 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 50c0-8 6-15 15-15s15 7 15 15-6 15-15 15c-5 0-10-2-12-6" />
      <path d="M50 50c0-8 6-15 15-15s15 7 15 15-6 15-15 15c-5 0-10-2-12-6" />
      <path d="M30 35c5-10 15-15 25-10s15 18 8 27" opacity="0.7" />
      <path d="M70 70c-5 8-15 12-25 5" opacity="0.6" />
    </svg>
  );
};

window.SpeechBubbleScribble = function SpeechBubbleScribble({ size = 100, color = "currentColor", strokeWidth = 1.5 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 25c0-5 4-9 9-9h42c5 0 9 4 9 9v30c0 5-4 9-9 9H45l-12 12v-12h-4c-5 0-9-4-9-9z" />
      <circle cx="40" cy="40" r="2" fill={color} />
      <circle cx="50" cy="40" r="2" fill={color} />
      <circle cx="60" cy="40" r="2" fill={color} />
    </svg>
  );
};

window.StarScribble = function StarScribble({ size = 40, color = "currentColor", strokeWidth = 1.5 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 4v32M4 20h32M8 8l24 24M32 8L8 32" />
    </svg>
  );
};

/* Logo — wordmark approximation in serif type, matching the SVG in tone */
window.JpLogo = function JpLogo({ highlightDr = true, color = "var(--fg)", size = "md" }) {
  const sizes = { sm: 14, md: 18, lg: 24 };
  const s = sizes[size];
  return (
    <span style={{
      fontFamily: "var(--font-display)",
      fontSize: s,
      letterSpacing: "0.02em",
      color,
      lineHeight: 1,
      display: "inline-flex",
      alignItems: "baseline",
      gap: 6,
      whiteSpace: "nowrap",
    }}>
      <em style={{ color: highlightDr ? "var(--primary)" : color, fontStyle: "italic" }}>Dr.</em>
      <span>João Pedro Castro</span>
      <span style={{ color: highlightDr ? "var(--primary)" : color, marginLeft: 2 }}>—</span>
    </span>
  );
};

/* ============================================================
   Navbar — used by every page mock
   ============================================================ */
window.Navbar = function Navbar({ overlay = false }) {
  const links = ["Sobre", "Atuação", "Empresas", "Podcast", "Vestibulandos", "Blog", "Contato"];
  return (
    <nav style={{
      position: "absolute",
      top: 0, left: 0, right: 0,
      padding: "20px 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: overlay ? "transparent" : "color-mix(in srgb, var(--bg) 95%, transparent)",
      backdropFilter: overlay ? undefined : "blur(8px)",
      borderBottom: overlay ? "none" : "1px solid var(--border)",
      zIndex: 10,
    }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <JpLogo size="md" />
        <span style={{
          fontFamily: "var(--font-body)",
          fontSize: 9, textTransform: "uppercase", letterSpacing: "0.15em",
          color: "color-mix(in srgb, var(--fg-muted) 80%, transparent)",
        }}>
          Psiquiatra · Psicogeriatra · CRM-MG 83920 · RQE 62148 / 66521
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
        {links.map(l => (
          <a key={l} href="#" style={{
            fontFamily: "var(--font-body)",
            fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em",
            color: "var(--fg-muted)", textDecoration: "none",
          }}>{l}</a>
        ))}
        <a href="#" className="djp-btn djp-btn-primary" style={{ padding: "10px 20px", fontSize: 11 }}>Agendar</a>
      </div>
    </nav>
  );
};

window.Footer = function Footer({ tweaks }) {
  return (
    <footer style={{ background: "var(--graphite)", color: "var(--cream)" }}>
      <div style={{ height: 200, background: "linear-gradient(180deg, #444 0%, #2a2a2a 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }} />
        <div style={{
          position: "absolute", left: "30%", top: "40%",
          width: 24, height: 32,
          background: "var(--coral)",
          clipPath: "path('M12 0C5 0 0 5 0 12c0 8 12 20 12 20s12-12 12-20C24 5 19 0 12 0z')",
        }} />
        <span style={{
          position: "absolute", bottom: 12, left: 16,
          fontFamily: "var(--font-body)", fontSize: 10,
          color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.1em",
        }}>
          Rua dos Timbiras, 1940 · Lourdes · Belo Horizonte
        </span>
      </div>
      <div style={{ padding: "48px 32px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 48, maxWidth: 1280, margin: "0 auto" }}>
        <div>
          <JpLogo highlightDr color="var(--cream)" size="md" />
          <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.4)", marginTop: 12 }}>
            Psiquiatra · Psicogeriatra
          </p>
          <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.6)", marginTop: 6 }}>CRM-MG 83920</p>
          <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.6)" }}>RQE 62148 (Psiquiatria)</p>
          <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.6)" }}>RQE 66521 (Psicogeriatria)</p>
        </div>
        <div>
          <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.5)", marginBottom: 12 }}>Localização</p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>Rua dos Timbiras, 1940, sala 1515</p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>Lourdes · Belo Horizonte — MG</p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 8 }}>Seg–Sex · 8h às 18h</p>
        </div>
        <div>
          <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.5)", marginBottom: 12 }}>Contato</p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>(31) 99131-5958</p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 8 }}>@joaocastrof</p>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: "16px 32px", textAlign: "center", fontSize: 10, color: "rgba(255,255,255,0.25)" }}>
        © 2026 Dr. João Pedro Castro Martins Farias — Todos os direitos reservados
      </div>
    </footer>
  );
};

window.WhatsAppFloat = function WhatsAppFloat() {
  return (
    <div style={{
      position: "absolute", right: 24, bottom: 24,
      width: 52, height: 52, borderRadius: "50%",
      background: "#25D366", color: "white",
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 6px 20px rgba(0,0,0,0.18)",
      fontFamily: "sans-serif", fontWeight: 700, fontSize: 22,
      zIndex: 30,
    }}>W</div>
  );
};
