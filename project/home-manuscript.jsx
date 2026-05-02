/* global React, Eyebrow, Rule, Navbar, Footer, JpLogo, SpiralScribble, TangleScribble, WhatsAppFloat */

/* HOME — Variant B: "Manuscript"
   Bold editorial. Big single-column thesis statement; numbered sections like a journal article.
   Hero is text-only with a serif drop-cap. Photo arrives later as a portrait plate. */

window.HomeManuscript = function HomeManuscript({ tweaks }) {
  return (
    <div className="djp-body paper" style={{ minHeight: "100%" }}>
      <Navbar />

      {/* HERO — manuscript opening */}
      <section style={{ padding: "140px 64px 80px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 32 }}>
            <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--coral)", fontSize: 36 }}>I</span>
            <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--fg-muted)" }}>Sobre o trabalho</span>
            <span style={{ flex: 1, height: 1, background: "var(--border)" }} />
            <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--fg-muted)" }}>Belo Horizonte · 2026</span>
          </div>
          <h1 className="djp-h1" style={{ fontSize: "clamp(2.5rem, 6vw, 5.25rem)", lineHeight: 1.02, letterSpacing: "-0.02em", marginBottom: 48 }}>
            Cinco minutos não <em className="djp-em">cabem</em> em uma vida inteira.
            <br />
            <span style={{ color: "var(--fg-muted)" }}>Por isso a primeira consulta dura</span> <em className="djp-em">uma hora.</em>
          </h1>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 19, lineHeight: 1.55 }}>
              <span style={{ float: "left", fontSize: 78, lineHeight: 0.85, marginRight: 12, marginTop: 6, fontStyle: "italic", color: "var(--primary)" }}>P</span>
              siquiatria de consultório particular para adultos com depressão, ansiedade, TDAH, bipolaridade e transtornos do humor. E para famílias que acompanham o declínio cognitivo de alguém que amam — Alzheimer, demências, psicogeriatria.
            </p>
            <div>
              <p style={{ fontSize: 14, color: "var(--fg-muted)", lineHeight: 1.7, marginBottom: 24 }}>
                Diagnóstico construído com tempo. Farmacologia explicada. Psicogeriatria como segunda residência — a especialidade que a maioria dos consultórios particulares não tem. Mais de 3.000 consultas realizadas em todos os níveis da Rede de Atenção Psicossocial de BH.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a className="djp-btn djp-btn-primary">Agendar consulta</a>
                <a className="djp-btn djp-btn-ghost">Áreas de atuação →</a>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 64, display: "flex", gap: 32, alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 56, color: "var(--coral)", lineHeight: 0.7 }}>3.000+</span>
            <p style={{ fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.5, maxWidth: 220 }}>consultas psiquiátricas realizadas em urgência, ambulatório e consultório.</p>
            <span style={{ flex: 1, height: 1, background: "var(--border)" }} />
            <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--fg-muted)" }}>CRM-MG 83920 · RQE 62148 · RQE 66521</span>
          </div>
        </div>
      </section>

      {/* CHAPTER II — portrait plate */}
      <section style={{ padding: "80px 64px", background: "var(--bg-alt)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "5fr 7fr", gap: 80, alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <img src="assets/jp-coat.jpg" alt="" className="brand-photo" style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover" }} />
            <div style={{ position: "absolute", bottom: -16, left: -16, background: "var(--lime)", padding: "8px 14px", fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 13 }}>
              Dr. João Pedro Castro
            </div>
          </div>
          <div>
            <Eyebrow>II — Sobre o médico</Eyebrow>
            <h2 className="djp-h1" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", marginTop: 16, marginBottom: 32 }}>
              Dupla residência médica em <em className="djp-em">saúde mental.</em>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fg-muted)", marginBottom: 20 }}>
              Psiquiatria pelo Hospital Odilon Behrens. Psicogeriatria pelo HC/UFMG. Mestrado em andamento em Neurociências na UFMG. A combinação de duas residências em saúde mental é rara no consultório particular: amplia o repertório diagnóstico, especialmente em quadros que transitam entre a psiquiatria geral e o envelhecimento.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fg-muted)", marginBottom: 32 }}>
              Já realizei mais de 3.000 consultas, com passagem por todos os níveis da Rede de Atenção Psicossocial de Belo Horizonte. Produção científica em periódicos nacionais e internacionais, incluindo trabalho apresentado no <em>International Psychogeriatrics Congress</em> em Buenos Aires.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, fontFamily: "var(--font-body)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--fg)" }}>
              {["Medicina — UFMG", "Psiquiatria — HOB", "Psicogeriatria — HC/UFMG", "Mestrando — Neurociências"].map(c => (
                <div key={c} style={{ borderTop: "1px solid var(--border)", paddingTop: 8 }}>{c}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER III — areas as a continuous catalogue */}
      <section style={{ padding: "var(--section-y, 5rem) 64px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, borderBottom: "1px solid var(--border)", paddingBottom: 24 }}>
            <div>
              <Eyebrow>III — Áreas de atuação</Eyebrow>
              <h2 className="djp-h1" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginTop: 12 }}>
                Catálogo <em className="djp-em">clínico</em>
              </h2>
            </div>
            <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--fg-muted)" }}>14 condições</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0 64px" }}>
            {[
              ["Depressão e depressão resistente", "Anedonia, isolamento, distimia. Quadros que já passaram por dois ou três antidepressivos sem resposta adequada."],
              ["Transtorno Afetivo Bipolar", "Bipolar tipo II com hipomanias sutis que passam anos sem diagnóstico. Ciclotimia. Diagnóstico diferencial preciso define o tratamento."],
              ["Ansiedade, pânico, fobia social, TOC", "Cada quadro ansioso tem especificidades que mudam a escolha do tratamento."],
              ["TDAH em adultos", "Procrastinação crônica que não é preguiça. Diferencial de ansiedade e bipolaridade muda completamente o tratamento."],
              ["Esquizofrenia e psicoses", "Diagnóstico precoce. Acompanhamento longitudinal com foco em funcionalidade e tolerabilidade."],
              ["Demências e Alzheimer", "Investigação cognitiva precoce. Acompanhamento de Alzheimer, demência vascular, frontotemporal, corpos de Lewy."],
              ["Insônia e transtornos do sono", "Insônia crônica que deteriora humor e cognição. Hipersonia. Síndrome das pernas inquietas."],
              ["TEA em adultos", "Diagnóstico tardio depois de anos com ansiedade refratária ou depressão sem resposta."],
              ["Transtornos de personalidade", "Borderline com instabilidade emocional. Personalidade evitativa. Distinção precisa de transtornos do humor."],
              ["TEPT e trauma complexo", "Quadros que chegam mascarados como depressão e respondem a abordagens específicas."],
            ].map(([t, b], i) => (
              <div key={t} style={{ borderBottom: "1px solid var(--border)", padding: "24px 0" }}>
                <div style={{ display: "flex", gap: 24, alignItems: "baseline" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--coral)", fontSize: 24 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div style={{ flex: 1 }}>
                    <h3 className="djp-h3" style={{ fontSize: 17, marginBottom: 6 }}>{t}</h3>
                    <p style={{ fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.55 }}>{b}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE TESTIMONIAL */}
      <section style={{ padding: "var(--section-y, 5rem) 64px", background: "var(--bg-alt)" }}>
        <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--coral)", fontSize: 120, lineHeight: 0.5, display: "block", marginBottom: 16 }}>"</span>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.4vw, 2rem)", fontStyle: "italic", lineHeight: 1.4 }}>
            Durante anos passei por vários médicos procurando pela estabilidade. Só o Dr. João Pedro conseguiu estabilizar o meu humor. Hoje estou muito bem e sigo em acompanhamento.
          </p>
          <p style={{ marginTop: 32, fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 14, color: "var(--fg-muted)" }}>— Julia A., paciente · 5 estrelas no Google</p>
          <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--fg-muted)", marginTop: 32 }}>5,0 / 47 avaliações ★★★★★</p>
        </div>
      </section>

      {/* FOOTNOTE CTA */}
      <section id="contato" style={{ padding: "var(--section-y, 5rem) 64px", background: "var(--primary)", color: "var(--primary-fg)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <Eyebrow color="rgba(245,241,232,0.5)">IV — Como agendar</Eyebrow>
            <h2 className="djp-h1" style={{ color: "var(--primary-fg)", fontSize: "clamp(2rem, 4vw, 3.25rem)", marginTop: 16 }}>
              Comece pela <em style={{ color: "var(--lime)" }}>avaliação inicial.</em>
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 16, color: "rgba(245,241,232,0.75)", lineHeight: 1.7, marginBottom: 24 }}>
              Uma hora de consulta. Anamnese, histórico, queixa atual. Quando indicado, exames laboratoriais para diagnósticos diferenciais. O objetivo é entender o que está acontecendo antes de qualquer prescrição.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="djp-btn djp-btn-lime">Agendar consulta</a>
              <a className="djp-btn" style={{ border: "1px solid rgba(245,241,232,0.3)", color: "var(--primary-fg)" }}>WhatsApp (31) 99131-5958</a>
            </div>
            <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(245,241,232,0.4)", marginTop: 24 }}>
              Presencial · Telemedicina · Domiciliar
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};
