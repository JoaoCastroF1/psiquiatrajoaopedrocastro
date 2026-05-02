/* global React, Eyebrow, Navbar, Footer, WhatsAppFloat */

/* Subpages — Avaliação (assessment funnel), Empresas, Vestibulandos,
   Condition page (Depressão), Blog hub + post, Podcast.
   Each is a single component on the design canvas. */

window.AvaliacaoPage = function AvaliacaoPage() {
  const [step, setStep] = React.useState(0);
  const steps = [
    { q: "Para quem é a consulta?", opts: ["Para mim mesmo", "Para um familiar adulto", "Para um idoso (psicogeriatria)", "Para um adolescente / vestibulando"] },
    { q: "O que você está sentindo ou observando?", opts: ["Tristeza, falta de prazer, isolamento", "Ansiedade, preocupação que não desliga, pânico", "Falta de foco, procrastinação, esquecimento", "Oscilações de humor", "Mudança de comportamento ou cognição em idoso", "Outro / mais de um"] },
    { q: "Há quanto tempo isso vem acontecendo?", opts: ["Algumas semanas", "Há meses", "Há mais de um ano", "Variável — vai e volta"] },
    { q: "Você já fez tratamento psiquiátrico antes?", opts: ["Nunca", "Sim, mas parei", "Estou em tratamento e quero segunda opinião", "Estou em tratamento e quero trocar de médico"] },
  ];
  const isResult = step >= steps.length;

  return (
    <div className="djp-body" style={{ minHeight: "100%" }}>
      <Navbar />
      <section style={{ padding: "120px 64px 64px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <Eyebrow>Avaliação inicial</Eyebrow>
          <h1 className="djp-h1" style={{ marginTop: 16, marginBottom: 16, fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
            Quatro perguntas <em className="djp-em">antes de agendar.</em>
          </h1>
          <p style={{ fontSize: 16, color: "var(--fg-muted)", lineHeight: 1.6, marginBottom: 48 }}>
            Não é triagem clínica nem diagnóstico. É só uma forma de chegar à consulta com clareza sobre o que trazer — e de ajustar o plano de avaliação ao seu caso.
          </p>

          {/* progress */}
          <div style={{ display: "flex", gap: 8, marginBottom: 48 }}>
            {steps.map((_, i) => (
              <div key={i} style={{
                flex: 1, height: 3,
                background: i < step ? "var(--primary)" : i === step ? "var(--coral)" : "var(--border)",
              }} />
            ))}
          </div>

          {!isResult && (
            <div>
              <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--fg-muted)", marginBottom: 8 }}>
                {String(step + 1).padStart(2, "0")} de {String(steps.length).padStart(2, "0")}
              </p>
              <h2 className="djp-h2" style={{ marginBottom: 32 }}>{steps[step].q}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {steps[step].opts.map(o => (
                  <button key={o} onClick={() => setStep(step + 1)} style={{
                    background: "var(--card)", border: "1px solid var(--border)",
                    padding: "20px 24px", textAlign: "left",
                    fontFamily: "var(--font-display)", fontSize: 18, color: "var(--fg)",
                    cursor: "pointer", transition: "all 200ms ease",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.background = "var(--lime)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "var(--card)"; }}>
                    {o}
                  </button>
                ))}
              </div>
              {step > 0 && (
                <button onClick={() => setStep(step - 1)} style={{ marginTop: 32, background: "transparent", border: "none", cursor: "pointer", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--fg-muted)" }}>
                  ← Voltar
                </button>
              )}
            </div>
          )}

          {isResult && (
            <div style={{ background: "var(--bg-alt)", padding: 48, border: "1px solid var(--border)" }}>
              <Eyebrow>Próximo passo</Eyebrow>
              <h2 className="djp-h2" style={{ marginTop: 12, marginBottom: 16 }}>
                Seu caso <em className="djp-em">cabe na primeira consulta.</em>
              </h2>
              <p style={{ fontSize: 15, color: "var(--fg-muted)", lineHeight: 1.7, marginBottom: 24 }}>
                Com base no que você descreveu, a avaliação inicial de uma hora é o passo certo. Vou conduzir anamnese detalhada, revisar tratamentos anteriores e — se indicado — solicitar exames laboratoriais para diagnósticos diferenciais. Plano terapêutico construído ao final.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a className="djp-btn djp-btn-primary">Agendar pelo WhatsApp</a>
                <button onClick={() => setStep(0)} className="djp-btn djp-btn-ghost">Refazer avaliação</button>
              </div>
              <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--fg-muted)", marginTop: 32 }}>
                Particular · Nota fiscal para reembolso · Presencial / telemedicina / domiciliar
              </p>
            </div>
          )}
        </div>
      </section>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

window.EmpresasPage = function EmpresasPage() {
  return (
    <div className="djp-body" style={{ minHeight: "100%" }}>
      <Navbar />
      <section style={{ padding: "120px 64px 64px", background: "var(--bg-alt)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <Eyebrow>Saúde mental corporativa</Eyebrow>
            <h1 className="djp-h1" style={{ marginTop: 16, marginBottom: 24, fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}>
              Burnout não se resolve com <em className="djp-em">workshop de mindfulness.</em>
            </h1>
            <p style={{ fontSize: 17, color: "var(--fg-muted)", lineHeight: 1.65, marginBottom: 32 }}>
              Programas, palestras e consultoria para empresas que querem lidar com burnout, ansiedade ocupacional e afastamentos com embasamento clínico — não com pop-psicologia. Diagnóstico situacional, intervenções com lógica científica, resultados acompanháveis.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="djp-btn djp-btn-primary">Solicitar proposta</a>
              <a className="djp-btn djp-btn-ghost">Baixar one-pager</a>
            </div>
          </div>
          <div style={{ background: "var(--primary)", color: "var(--cream)", padding: 40 }}>
            <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(245,241,232,0.6)", marginBottom: 16 }}>O que está incluído</p>
            {["Diagnóstico situacional anônimo", "Palestra in-company (60–90 min)", "Trilha de capacitação para lideranças", "Canal clínico de retaguarda", "Relatórios trimestrais"].map((s, i) => (
              <div key={s} style={{ borderTop: i === 0 ? "1px solid rgba(245,241,232,0.2)" : "none", borderBottom: "1px solid rgba(245,241,232,0.2)", padding: "16px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 16 }}>{s}</span>
                <span style={{ color: "var(--lime)" }}>→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "var(--section-y, 5rem) 64px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48 }}>
            {[
              ["Diagnóstico", "Mapeamento dos sintomas mais frequentes na sua equipe — ansiedade, insônia, sintomas depressivos, sinais de burnout — com instrumentos validados e leitura clínica."],
              ["Intervenção", "Programas estruturados: palestras temáticas, capacitação de lideranças para identificar quadros de risco, encaminhamento clínico quando indicado."],
              ["Acompanhamento", "Relatórios periódicos de prevalência e resposta. Não é vendedor de bem-estar: é leitura clínica honesta do que está acontecendo dentro da empresa."],
            ].map(([t, b], i) => (
              <div key={t}>
                <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--coral)", fontSize: 56, lineHeight: 0.8 }}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="djp-h3" style={{ marginTop: 16, marginBottom: 12, fontSize: 20 }}>{t}</h3>
                <p style={{ fontSize: 14, color: "var(--fg-muted)", lineHeight: 1.65 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

window.VestibulandosPage = function VestibulandosPage() {
  return (
    <div className="djp-body" style={{ minHeight: "100%" }}>
      <Navbar />
      <section style={{ padding: "120px 64px 80px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ display: "inline-block", padding: "6px 12px", background: "var(--coral)", color: "var(--cream)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 24 }}>
            Para vestibulandos e estudantes de medicina
          </div>
          <h1 className="djp-h1" style={{ marginBottom: 24, fontSize: "clamp(2.25rem, 5vw, 4rem)" }}>
            Estudar 12 horas por dia <em className="djp-em">não é normal.</em><br/>
            Funcionar abaixo do potencial, <em className="djp-em">também não.</em>
          </h1>
          <p style={{ fontSize: 17, color: "var(--fg-muted)", lineHeight: 1.65, maxWidth: 720, marginBottom: 32 }}>
            Para vestibulandos e estudantes em fases intensas: ansiedade refratária, insônia crônica, TDAH não diagnosticado, depressão mascarada de cansaço. O objetivo do tratamento não é aumentar nota artificialmente — é tratar o que está atrapalhando funcionamento, sono, foco e estabilidade emocional.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a className="djp-btn djp-btn-primary">Agendar avaliação</a>
            <a className="djp-btn djp-btn-ghost">Quando procurar?</a>
          </div>
        </div>
      </section>

      <section style={{ padding: "var(--section-y, 5rem) 64px", background: "var(--bg-alt)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <Eyebrow>Quadros que aparecem nessa fase</Eyebrow>
          <h2 className="djp-h2" style={{ marginTop: 12, marginBottom: 40 }}>Não é só "estresse de prova".</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }}>
            {[
              ["TDAH não diagnosticado", "Procrastinação que parece preguiça, dificuldade de manter foco em material denso, sensação de funcionar abaixo do potencial. O diferencial de TDAH muda completamente o tratamento."],
              ["Ansiedade refratária", "Branco em prova mesmo sabendo a matéria. Ataques de pânico antes do simulado. Ruminação que não desliga à noite."],
              ["Insônia crônica", "Dormir 5 horas por noite, perder 3 horas no trânsito, e ainda esperar render. O cérebro está operando num ambiente em que cérebro nenhum rende bem."],
              ["Depressão mascarada", "Anedonia que a pessoa interpreta como \"falta de motivação\". Cansaço que não passa com fim de semana. Estado que se confunde com burnout estudantil."],
            ].map(([t, b]) => (
              <div key={t} style={{ background: "var(--card)", padding: 32, border: "1px solid var(--border)" }}>
                <h3 className="djp-h3" style={{ marginBottom: 12, fontSize: 19 }}>{t}</h3>
                <p style={{ fontSize: 14, color: "var(--fg-muted)", lineHeight: 1.65 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

window.ConditionPage = function ConditionPage() {
  return (
    <div className="djp-body" style={{ minHeight: "100%" }}>
      <Navbar />
      <section style={{ padding: "120px 64px 64px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--fg-muted)", marginBottom: 16 }}>
            Áreas de atuação · <span style={{ color: "var(--primary)" }}>Depressão</span>
          </p>
          <h1 className="djp-h1" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", marginBottom: 32 }}>
            Depressão. <em className="djp-em">Inclusive a que já passou por dois antidepressivos.</em>
          </h1>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 64, alignItems: "start", marginTop: 48 }}>
            <div>
              <p style={{ fontSize: 17, lineHeight: 1.7, marginBottom: 20 }}>
                Anedonia. Isolamento. A incapacidade de sentir prazer no que antes funcionava. Distimia — o peso baixo e constante que dura anos sem nome claro. Depressão atípica com padrão de sono e humor que confunde. Cada apresentação tem uma lógica farmacológica e psicoterápica própria, e merece ser investigada por inteiro.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-muted)", marginBottom: 32 }}>
                Depressão resistente — a que já passou por dois ou três antidepressivos sem resposta adequada — pede investigação diferencial cuidadosa: bipolar tipo II que foi tratado como unipolar; comorbidade com ansiedade ou TDAH; causas orgânicas pouco investigadas; psicoterapia desencaixada do quadro. O ajuste farmacológico nesses casos é matéria de subespecialista.
              </p>
              <h2 className="djp-h2" style={{ marginBottom: 16, fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>O que esperar da avaliação</h2>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Anamnese clínica detalhada com revisão de tratamentos anteriores e respostas observadas",
                  "Diferencial entre depressão unipolar, bipolar tipo II, distimia e quadros mistos",
                  "Investigação de causas orgânicas — tireoide, anemia, deficiências, medicações em uso",
                  "Avaliação de comorbidade com ansiedade, TDAH, transtorno de personalidade",
                  "Plano farmacológico explicado: por que essa molécula, em que dose, com que expectativa",
                ].map(c => (
                  <li key={c} style={{ display: "flex", gap: 12, fontSize: 15, lineHeight: 1.55 }}>
                    <span style={{ color: "var(--primary)", fontWeight: 700 }}>—</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <aside style={{ background: "var(--bg-alt)", padding: 32, position: "sticky", top: 100 }}>
              <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--fg-muted)", marginBottom: 12 }}>Agendar avaliação</p>
              <p style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
                Primeira consulta de uma hora. Particular, com nota fiscal para reembolso.
              </p>
              <a className="djp-btn djp-btn-primary" style={{ width: "100%" }}>WhatsApp</a>
              <a className="djp-btn djp-btn-ghost" style={{ width: "100%", marginTop: 8 }}>Formulário</a>
              <div style={{ marginTop: 24, paddingTop: 16, borderTop: "1px solid var(--border)" }}>
                <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--fg-muted)", marginBottom: 8 }}>Áreas relacionadas</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {["Bipolaridade", "Ansiedade", "Insônia", "Distimia", "TDAH"].map(c => (
                    <a key={c} href="#" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 15, color: "var(--primary)" }}>→ {c}</a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

window.BlogHubPage = function BlogHubPage() {
  const posts = [
    { kicker: "Psicofarmacologia", t: "Por que dois antidepressivos não responderam — e o que investigar antes do terceiro", d: "11 min · Mar 2026" },
    { kicker: "Psicogeriatria", t: "Esquecimento normal, comprometimento cognitivo leve, demência inicial: como diferenciar", d: "9 min · Fev 2026" },
    { kicker: "TDAH", t: "TDAH no adulto não é \"falta de disciplina\". É um diagnóstico clínico com critérios", d: "7 min · Fev 2026" },
    { kicker: "Bipolaridade", t: "Bipolar tipo II: a hipomania que passa anos sem ser percebida", d: "13 min · Jan 2026" },
    { kicker: "Sono", t: "Insônia crônica e o efeito cascata sobre humor, cognição e funcionamento", d: "8 min · Jan 2026" },
    { kicker: "Ansiedade", t: "Pânico não é \"frescura\". É um quadro neurobiológico bem caracterizado", d: "6 min · Dez 2025" },
  ];
  return (
    <div className="djp-body" style={{ minHeight: "100%" }}>
      <Navbar />
      <section style={{ padding: "120px 64px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Eyebrow>Blog</Eyebrow>
          <h1 className="djp-h1" style={{ marginTop: 16, fontSize: "clamp(2.25rem, 5vw, 4rem)" }}>
            Notas <em className="djp-em">clínicas.</em>
          </h1>
          <p style={{ fontSize: 16, color: "var(--fg-muted)", lineHeight: 1.65, maxWidth: 600, marginTop: 16 }}>
            Textos sobre os quadros que aparecem no consultório, escritos para pacientes que querem entender o que está acontecendo. Não é conteúdo motivacional. É raciocínio clínico em linguagem honesta.
          </p>
        </div>
      </section>

      <section style={{ padding: "32px 64px var(--section-y, 5rem)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* tag strip */}
          <div style={{ display: "flex", gap: 8, marginBottom: 48, flexWrap: "wrap", borderBottom: "1px solid var(--border)", paddingBottom: 24 }}>
            {["Todos", "Psicofarmacologia", "Psicogeriatria", "TDAH", "Bipolaridade", "Ansiedade", "Sono", "Vestibulandos"].map((t, i) => (
              <a key={t} href="#" style={{
                padding: "6px 14px",
                background: i === 0 ? "var(--primary)" : "transparent",
                color: i === 0 ? "var(--cream)" : "var(--fg)",
                border: i === 0 ? "1px solid var(--primary)" : "1px solid var(--border)",
                fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em",
              }}>{t}</a>
            ))}
          </div>

          {/* Featured + grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 48, marginBottom: 64 }}>
            <article style={{ borderTop: "1px solid var(--fg)", paddingTop: 24 }}>
              <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--coral)", marginBottom: 16 }}>Em destaque · {posts[0].kicker}</p>
              <h2 className="djp-h1" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.1, marginBottom: 16 }}>
                {posts[0].t}
              </h2>
              <p style={{ fontSize: 15, color: "var(--fg-muted)", lineHeight: 1.65, marginBottom: 16 }}>
                Quando duas tentativas farmacológicas adequadas não respondem, a primeira coisa a fazer não é trocar a molécula. É revisar o diagnóstico. Bipolar tipo II tratado como unipolar é a causa mais comum de "depressão resistente" no consultório.
              </p>
              <p style={{ fontSize: 12, color: "var(--fg-muted)", textTransform: "uppercase", letterSpacing: "0.12em" }}>{posts[0].d} · Ler →</p>
            </article>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {posts.slice(1, 4).map(p => (
                <article key={p.t} style={{ borderTop: "1px solid var(--border)", paddingTop: 16 }}>
                  <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--coral)", marginBottom: 8 }}>{p.kicker}</p>
                  <h3 className="djp-h3" style={{ fontSize: 18, marginBottom: 8 }}>{p.t}</h3>
                  <p style={{ fontSize: 11, color: "var(--fg-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{p.d}</p>
                </article>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {posts.slice(4).map(p => (
              <article key={p.t} style={{ borderTop: "1px solid var(--border)", paddingTop: 16 }}>
                <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--coral)", marginBottom: 8 }}>{p.kicker}</p>
                <h3 className="djp-h3" style={{ fontSize: 19, marginBottom: 12, lineHeight: 1.25 }}>{p.t}</h3>
                <p style={{ fontSize: 11, color: "var(--fg-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{p.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

window.PodcastPage = function PodcastPage() {
  const eps = [
    { n: "12", t: "Psicogeriatria: o que muda quando o paciente tem 75 anos", g: "com Dr. R. Andrade", d: "47 min" },
    { n: "11", t: "Bipolar tipo II — o diagnóstico que demora dez anos para chegar", g: "solo", d: "38 min" },
    { n: "10", t: "Psicodélicos assistidos: o que tem evidência e o que ainda é entusiasmo", g: "com Dra. L. Ferreira", d: "1h 02 min" },
    { n: "09", t: "TDAH no adulto: do diagnóstico ao plano farmacológico", g: "solo", d: "44 min" },
  ];
  return (
    <div className="djp-body" style={{ minHeight: "100%", background: "var(--graphite)", color: "var(--cream)" }}>
      <Navbar overlay />
      <section style={{ padding: "140px 64px 64px", color: "var(--cream)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.25em", color: "var(--lime)", marginBottom: 16 }}>Podcast · Notas Clínicas</p>
          <h1 className="djp-h1" style={{ color: "var(--cream)", fontSize: "clamp(3rem, 7vw, 5.5rem)", marginBottom: 24 }}>
            Conversas <em style={{ color: "var(--lime)" }}>longas</em> sobre saúde mental.
          </h1>
          <p style={{ fontSize: 17, color: "rgba(245,241,232,0.7)", maxWidth: 640, lineHeight: 1.65 }}>
            Episódios mensais com colegas de psiquiatria, psicogeriatria e neurociência. Sem patrocinador, sem sound bite, sem "5 dicas para sua saúde mental".
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            {["Spotify", "Apple Podcasts", "YouTube"].map(p => (
              <a key={p} className="djp-btn" style={{ border: "1px solid rgba(245,241,232,0.3)", color: "var(--cream)" }}>{p} →</a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "var(--section-y, 5rem) 64px", background: "var(--bg)", color: "var(--fg)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <Eyebrow>Episódios recentes</Eyebrow>
          <div style={{ marginTop: 32 }}>
            {eps.map((e, i) => (
              <div key={e.n} style={{ display: "grid", gridTemplateColumns: "80px 1fr auto auto", alignItems: "center", gap: 24, padding: "24px 0", borderTop: i === 0 ? "1px solid var(--fg)" : "1px solid var(--border)", borderBottom: i === eps.length - 1 ? "1px solid var(--fg)" : "none" }}>
                <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--coral)", fontSize: 36 }}>#{e.n}</span>
                <div>
                  <h3 className="djp-h3" style={{ fontSize: 19, marginBottom: 4 }}>{e.t}</h3>
                  <p style={{ fontSize: 12, color: "var(--fg-muted)", textTransform: "uppercase", letterSpacing: "0.12em" }}>{e.g} · {e.d}</p>
                </div>
                <a style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--primary)" }}>Notas →</a>
                <a style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "var(--primary)", color: "var(--cream)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16,
                }}>▶</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
