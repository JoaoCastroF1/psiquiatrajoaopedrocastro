/* global React, Eyebrow, Rule, SectionLabel, Navbar, Footer, JpLogo, SpiralScribble, TangleScribble, SpeechBubbleScribble, WhatsAppFloat */

/* ============================================================
   HOME — Variant A: "Editorial" (close to current site)
   Refined version of the existing layout.
   ============================================================ */
window.HomeEditorial = function HomeEditorial({ tweaks }) {
  const showPhoto = tweaks?.showPhoto !== false;
  const heroCopy = tweaks?.heroCopy || "default";
  const ctaPlacement = tweaks?.ctaPlacement || "left";

  const headlines = {
    default: ["Psiquiatria feita com ciência de ponta e a escuta que seu caso", "precisa."],
    direct: ["Diagnóstico psiquiátrico que leva o tempo que o seu caso", "exige."],
    clinical: ["Avaliação psiquiátrica de uma hora. Conduta com lógica", "explicada."],
    family: ["Para quem percebeu que algo mudou em alguém que", "ama."],
  };
  const h = headlines[heroCopy];

  return (
    <div className="djp-body paper" style={{ minHeight: "100%", position: "relative" }}>
      <Navbar />
      {/* HERO */}
      <section style={{ padding: "120px 64px 80px", position: "relative" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: showPhoto ? "1fr 420px" : "1fr", gap: 64, alignItems: "center" }}>
          <div>
            <Eyebrow>Psiquiatra · Psicogeriatria · Belo Horizonte</Eyebrow>
            <h1 className="djp-h1" style={{ marginTop: 24, marginBottom: 28 }}>
              {h[0]} <em className="djp-em">{h[1]}</em>
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--fg-muted)", maxWidth: 580, marginBottom: 24 }}>
              Para adultos que convivem com depressão, ansiedade, TDAH, bipolaridade ou transtornos do humor. E para famílias que acompanham o declínio cognitivo de alguém que amam. Diagnóstico preciso, farmacologia baseada em evidências e tempo de consulta suficiente para entender o que está acontecendo.
            </p>
            <div style={{ display: "flex", gap: 24, marginBottom: 32, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "color-mix(in srgb, var(--fg) 70%, transparent)" }}>Atendimento particular</span>
              <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "color-mix(in srgb, var(--fg) 70%, transparent)" }}>Nota fiscal para reembolso</span>
            </div>
            <div style={{ display: "flex", gap: 16, justifyContent: ctaPlacement === "center" ? "center" : "flex-start" }}>
              <a className="djp-btn djp-btn-primary">Agendar consulta</a>
              <a className="djp-btn djp-btn-ghost">Conheça minha abordagem</a>
            </div>
            <p style={{ fontSize: 10, color: "var(--fg-subtle)", marginTop: 16, letterSpacing: "0.05em" }}>
              Presencial em Belo Horizonte · Telemedicina · Consulta domiciliar
            </p>
          </div>
          {showPhoto && (
            <div style={{ position: "relative" }}>
              <img src="assets/jp-portrait.jpg" alt="" className="brand-photo"
                style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", objectPosition: "top" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 96, background: "linear-gradient(to top, var(--bg), transparent)" }} />
            </div>
          )}
        </div>
      </section>

      {/* AUTHORITY STRIP */}
      <div style={{ background: "var(--primary)", padding: "20px 32px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
          {["Medicina pela UFMG", "Residência em Psiquiatria — HOB", "Residência em Psicogeriatria — HC/UFMG", "Mestrando em Neurociências"].map(c => (
            <span key={c} style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(245,241,232,0.7)" }}>{c}</span>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section style={{ padding: "var(--section-y, 5rem) 64px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionLabel kicker="Passo a passo" title="Como funciona a" em="consulta" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
            {[
              ["Primeiro contato", "Você entra em contato pelo formulário ou WhatsApp. A equipe confirma o agendamento e orienta sobre o que trazer."],
              ["Avaliação detalhada", "A primeira consulta dura em torno de 1 hora. Anamnese, histórico familiar, queixa atual. Exames quando indicados."],
              ["Plano personalizado", "Plano terapêutico individualizado — com farmacologia explicada, metas claras e cronograma de acompanhamento."],
              ["Suporte contínuo", "Entre as consultas, dúvidas sobre medicação ou sintomas podem ser esclarecidas por WhatsApp."],
            ].map(([t, b], i) => (
              <div key={t}>
                <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--coral)", fontSize: 64, lineHeight: 1, display: "block", marginBottom: 12 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div style={{ borderTop: "1px solid color-mix(in srgb, var(--fg) 15%, transparent)", marginBottom: 20 }} />
                <h3 className="djp-h3" style={{ marginBottom: 12 }}>{t}</h3>
                <p style={{ fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.6 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "var(--section-y, 5rem) 64px", background: "var(--bg-alt)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ maxWidth: 720, marginBottom: 48 }}>
            <Eyebrow>Sobre</Eyebrow>
            <h2 className="djp-h1" style={{ marginTop: 16, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              <em className="djp-em" style={{ fontStyle: "normal" }}>Dr.</em> João Pedro Castro
            </h2>
            <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.18em", color: "color-mix(in srgb, var(--fg-muted) 80%, transparent)", marginTop: 8 }}>
              Psiquiatria · Psicogeriatria · CRM-MG 83920 · RQE 62148 · RQE 66521
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: 64 }}>
            <img src="assets/jp-writing.jpg" className="brand-photo" alt="" style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover" }} />
            <div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Graduação em Medicina pela UFMG",
                  "Residência em Psiquiatria — Hospital Odilon Behrens (RQE 62148)",
                  "Residência em Psicogeriatria — HC/UFMG (RQE 66521)",
                  "Mestrando em Neurociências — UFMG",
                  "Pós-graduação em Terapia Cognitivo-Comportamental",
                  "Formação em Estimulação Magnética Transcraniana",
                ].map(c => (
                  <li key={c} style={{ display: "flex", gap: 12, fontSize: 14, lineHeight: 1.5 }}>
                    <span style={{ color: "var(--primary)", fontWeight: 700, marginTop: 2 }}>✓</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: 24, display: "flex", flexDirection: "column", gap: 16, fontSize: 14, color: "var(--fg-muted)", lineHeight: 1.7 }}>
                <p>Atuo na interface entre psiquiatria clínica e neurociências, com interesse particular em transtornos do humor, ansiedade, TDAH no adulto, esquizofrenia, neuropsiquiatria e síndromes demenciais.</p>
                <p>Já realizei mais de 3.000 consultas, com passagem por todos os níveis da Rede de Atenção Psicossocial de Belo Horizonte — urgência, ambulatório e consultório particular.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section style={{ padding: "var(--section-y, 5rem) 64px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionLabel kicker="Para quem é este trabalho" title="Cuidado especializado para dois momentos" em="distintos da vida" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            {[
              ["Adultos", "Para quem carrega sintomas que já interferem no trabalho, nos relacionamentos ou no sono. Depressão que não cede, ansiedade que antecipa o pior, TDAH que sabota projetos, bipolaridade com oscilações que ninguém ao redor entende, ou TOC que ocupa cada vez mais espaço no dia."],
              ["Idosos e famílias", "Para famílias que percebem que algo mudou. Os esquecimentos ficaram mais frequentes, o comportamento alterou, a pessoa ficou apática. A psicogeriatria investiga e acompanha Alzheimer, demências, depressão no envelhecimento e psicose tardia. Consultas domiciliares disponíveis."],
            ].map(([t, b]) => (
              <div key={t} style={{ borderLeft: "2px solid color-mix(in srgb, var(--primary) 30%, transparent)", paddingLeft: 32, paddingTop: 8, paddingBottom: 8 }}>
                <h3 className="djp-h3" style={{ fontSize: 22, marginBottom: 12 }}>{t}</h3>
                <p style={{ fontSize: 15, color: "var(--fg-muted)", lineHeight: 1.65 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section style={{ padding: "var(--section-y, 5rem) 64px", background: "var(--bg-alt)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionLabel kicker="Áreas de atuação" title="Condições tratadas com" em="profundidade clínica" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px 48px" }}>
            {[
              ["Depressão e depressão resistente", "Anedonia, isolamento. Distimia. Quadros que já passaram por dois ou três antidepressivos sem resposta adequada."],
              ["Transtorno Afetivo Bipolar", "Oscilações além do \"estou mal hoje\". Bipolar tipo II com hipomanias sutis. Ciclotimia."],
              ["Ansiedade, pânico, fobia social, TOC", "Preocupação que não desliga. Crises de pânico. TOC com pensamentos intrusivos e rituais."],
              ["TDAH em adultos", "Procrastinação crônica que não é preguiça. Diagnóstico diferencial preciso entre TDAH, ansiedade, bipolaridade."],
              ["Demências e Alzheimer", "Investigação cognitiva precoce. Acompanhamento de Alzheimer, demência vascular, frontotemporal, corpos de Lewy."],
              ["Insônia e transtornos do sono", "Insônia crônica que deteriora humor e cognição. Hipersonia. Síndrome das pernas inquietas."],
            ].map(([t, b]) => (
              <div key={t}>
                <Rule />
                <h3 className="djp-h3" style={{ marginTop: 18, marginBottom: 8, fontSize: 17 }}>{t}</h3>
                <p style={{ fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.6 }}>{b}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 48 }}>
            <a className="djp-btn djp-btn-ghost">Ver todas as áreas de atuação</a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "var(--section-y, 5rem) 64px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionLabel kicker="Confiança" title="O que dizem sobre" em="este trabalho" />
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 600 }}>5,0</span>
            <span style={{ color: "#fbbc05", fontSize: 18 }}>★★★★★</span>
            <span style={{ fontSize: 13, color: "var(--fg-muted)" }}>(47 avaliações no Google)</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              ["Excelente profissional. Dr. João é um médico humano, com empatia sobre cada vírgula que a gente descreve, mas com profissionalismo de um dos melhores doutores que já conheci.", "Thalissa Geely", "nov 2024"],
              ["Sinto-me acolhida. Escuta atenta, curiosa e verdadeiramente interessada. Tenho experienciado bastante melhora nos sintomas e na qualidade de vida desde o início do acompanhamento.", "Ana Rafaela Faria", "2024"],
              ["Super estudioso, atencioso e atualizado. Sabe tudo de novos estudos, novos remédios, tratamentos. Acertou em todas as minhas medicações e sou uma pessoa muito melhor.", "Karina Matulevicius", "2025"],
            ].map(([t, n, d]) => (
              <div key={n} style={{ background: "var(--card)", border: "1px solid var(--border)", padding: "48px 32px 32px", position: "relative" }}>
                <span style={{ position: "absolute", top: 8, left: 16, fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--coral)", fontSize: 80, lineHeight: 0.7 }}>"</span>
                <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 16, lineHeight: 1.55, marginBottom: 24 }}>{t}</p>
                <div style={{ borderTop: "1px solid color-mix(in srgb, var(--border) 70%, transparent)", paddingTop: 12, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 13 }}>{n}</p>
                    <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 11, color: "var(--fg-muted)" }}>{d}</p>
                  </div>
                  <span style={{ color: "#fbbc05", fontSize: 12 }}>★★★★★</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "var(--section-y, 5rem) 64px", background: "var(--primary)", color: "var(--primary-fg)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, var(--primary-fg) 1px, transparent 0)", backgroundSize: "40px 40px", opacity: 0.05 }} />
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <h2 className="djp-h1" style={{ color: "var(--primary-fg)", fontSize: "clamp(2rem, 4.5vw, 3.25rem)", marginBottom: 24 }}>
            Psiquiatria com a <em style={{ color: "var(--lime)" }}>precisão que o seu caso merece</em>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(245,241,232,0.7)", maxWidth: 560, margin: "0 auto 32px" }}>
            Se você carrega sintomas sem resposta, quer revisar um tratamento que não está funcionando, ou acompanha alguém com declínio cognitivo: o primeiro passo é uma avaliação com tempo e profundidade suficientes.
          </p>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
            <SpiralScribble color="var(--lime)" size={48} />
          </div>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="djp-btn djp-btn-lime">Agendar consulta</a>
            <a className="djp-btn" style={{ border: "1px solid rgba(245,241,232,0.3)", color: "var(--primary-fg)" }}>Empresas, palestras ou projetos</a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};
