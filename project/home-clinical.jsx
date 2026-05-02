/* global React, Eyebrow, Navbar, Footer, JpLogo, WhatsAppFloat */

/* HOME — Variant C: "Clínica" — split hero, dense first impression
   For users who want the practice information up front. Functional, fast.
*/

window.HomeClinical = function HomeClinical({ tweaks }) {
  return (
    <div className="djp-body" style={{ minHeight: "100%" }}>
      <Navbar overlay />

      {/* Split hero: left = warm cream w/ copy, right = dark green w/ key facts */}
      <section style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", minHeight: 720 }}>
        <div style={{ padding: "120px 64px 64px", background: "var(--bg)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ maxWidth: 560 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 12px", background: "var(--lime)", marginBottom: 24, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--primary)" }} />
              Aceitando novos pacientes
            </div>
            <h1 className="djp-h1" style={{ marginBottom: 24 }}>
              Psiquiatra e psicogeriatra em <em className="djp-em">Belo Horizonte.</em>
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--fg-muted)", marginBottom: 32 }}>
              Atendimento para depressão, ansiedade, TDAH, bipolaridade, demências e Alzheimer. Consulta de uma hora, particular, com nota fiscal para reembolso.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
              <a className="djp-btn djp-btn-primary">Agendar pelo WhatsApp</a>
              <a className="djp-btn djp-btn-ghost">Como funciona a consulta</a>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, paddingTop: 24, borderTop: "1px solid var(--border)" }}>
              {[["1h", "duração da primeira consulta"], ["3.000+", "consultas realizadas"], ["5,0", "no Google · 47 reviews"]].map(([n, l]) => (
                <div key={l}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 500, color: "var(--primary)" }}>{n}</span>
                  <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--fg-muted)", marginTop: 4 }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img src="assets/jp-portrait.jpg" alt="" className="brand-photo" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(29,59,31,0.25) 0%, rgba(29,59,31,0.85) 100%)" }} />
          <div style={{ position: "relative", padding: 48, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", color: "var(--cream)" }}>
            <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(245,241,232,0.7)", marginBottom: 16 }}>Dr. João Pedro Castro Martins Farias</p>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 24, lineHeight: 1.3, marginBottom: 24 }}>
              Psiquiatria e Psicogeriatria. Dupla residência médica em saúde mental — combinação rara no consultório particular.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(245,241,232,0.6)" }}>
              <span>CRM-MG 83920</span>
              <span>RQE 62148 — Psiquiatria</span>
              <span>RQE 66521 — Psicogeriatria</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick-pick conditions strip */}
      <section style={{ padding: "48px 64px", background: "var(--primary)", color: "var(--cream)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(245,241,232,0.6)", marginBottom: 20 }}>Estou tratando de —</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {["Depressão", "Ansiedade", "TDAH no adulto", "Bipolaridade", "Insônia", "Esquizofrenia", "Alzheimer e demências", "TEPT", "Transtornos alimentares"].map(c => (
              <a key={c} href="#" style={{
                padding: "10px 18px", border: "1px solid rgba(245,241,232,0.3)",
                fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 16,
                color: "var(--cream)", textDecoration: "none",
              }}>{c} →</a>
            ))}
          </div>
        </div>
      </section>

      {/* Two-column trust block */}
      <section style={{ padding: "var(--section-y, 5rem) 64px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          <div>
            <Eyebrow>Para adultos</Eyebrow>
            <h2 className="djp-h2" style={{ marginTop: 12, marginBottom: 16 }}>Sintomas que já interferem na vida.</h2>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--fg-muted)" }}>
              Depressão que não cede com dois ou três antidepressivos. Ansiedade que antecipa o pior mesmo sem motivo. TDAH que sabota projetos importantes. Bipolaridade com oscilações que ninguém ao redor entende. O tratamento começa por entender o que está de fato acontecendo.
            </p>
            <a className="djp-btn djp-btn-ghost" style={{ marginTop: 24 }}>Áreas de atuação →</a>
          </div>
          <div>
            <Eyebrow>Para idosos e famílias</Eyebrow>
            <h2 className="djp-h2" style={{ marginTop: 12, marginBottom: 16 }}>Quando algo mudou em alguém que você ama.</h2>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--fg-muted)" }}>
              Esquecimentos progressivos. Comportamento que mudou. Apatia, agitação, confusão mental. Psicogeriatria investiga e acompanha Alzheimer, demências, depressão no envelhecimento. Consultas domiciliares disponíveis quando o deslocamento não é possível.
            </p>
            <a className="djp-btn djp-btn-ghost" style={{ marginTop: 24 }}>Psicogeriatria →</a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};
