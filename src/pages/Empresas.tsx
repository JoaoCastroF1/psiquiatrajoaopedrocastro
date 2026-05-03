import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHead from "@/components/PageHead";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WA_LINK_CORP =
  "https://wa.me/5531991315958?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20programa%20de%20sa%C3%BAde%20mental%20corporativa.";

const includedItems = [
  "Diagnóstico situacional anônimo",
  "Palestra in-company (60–90 min)",
  "Trilha de capacitação para lideranças",
  "Canal clínico de retaguarda",
  "Relatórios trimestrais",
];

const services = [
  {
    title: "Diagnóstico situacional",
    text: "Avaliação do cenário de saúde mental na organização com instrumentos validados. Mapeamento de fatores de risco psicossocial, indicadores de absenteísmo e presenteísmo, e identificação de áreas críticas. Laudo técnico com recomendações práticas.",
  },
  {
    title: "Consultoria em NR-1 e riscos psicossociais",
    text: "Adequação da empresa às exigências da NR-1 no que tange aos fatores de risco psicossociais. Elaboração de políticas, protocolos de identificação e encaminhamento, e documentação técnica para auditorias.",
  },
  {
    title: "Palestras e workshops",
    text: "Conteúdo sob medida para lideranças, equipes de RH/SESMT ou colaboradores em geral. Temas incluem burnout, ansiedade ocupacional, manejo de crises, saúde mental no trabalho remoto e construção de ambientes psicologicamente seguros.",
  },
  {
    title: "Programas de acompanhamento",
    text: "Programas estruturados com duração definida, métricas de resultado e acompanhamento longitudinal. Indicados para empresas que querem ir além da palestra pontual e construir uma política de saúde mental com sustentação.",
  },
];

const Empresas = () => {
  return (
    <div className="min-h-screen">
      <PageHead
        title="Saúde Mental Corporativa — Dr. João Pedro Castro | Psiquiatra em BH"
        description="Programas de saúde mental para empresas: diagnóstico situacional, NR-1, palestras e acompanhamento. Consultoria psiquiátrica especializada."
        url="https://drjoaopedrocastro.com.br/empresas"
      />
      <Navbar />

      {/* Hero — split layout with included-services dark card */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: "Empresas" }]} />
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start mt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
                Saúde mental corporativa
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-foreground leading-[1.05] mb-6">
                Burnout não se resolve com <em>workshop de mindfulness.</em>
              </h1>
              <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed max-w-xl mb-8">
                Programas, palestras e consultoria para empresas que querem lidar com burnout, ansiedade ocupacional e afastamentos com embasamento clínico — não com pop-psicologia. Diagnóstico situacional, intervenções com lógica científica, resultados acompanháveis.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK_CORP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-sm px-8 py-4"
                >
                  Solicitar proposta
                </a>
                <a
                  href={WA_LINK_CORP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost text-sm px-8 py-4"
                >
                  Conversar antes
                </a>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="bg-graphite text-cream p-8 md:p-10"
              aria-label="O que está incluído nos programas"
            >
              <p className="font-body text-[11px] uppercase tracking-[0.18em] text-cream/55 mb-6">
                O que está incluído
              </p>
              <ul className="divide-y divide-cream/10">
                {includedItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    <span className="font-display italic text-base md:text-lg text-cream leading-snug">
                      {item}
                    </span>
                    <ArrowRight className="w-4 h-4 text-cream/60 shrink-0" aria-hidden="true" />
                  </li>
                ))}
              </ul>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Contexto */}
      <section className="py-16 md:py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-10"
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Contexto
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight mb-8">
              Por que saúde mental corporativa precisa de <em>embasamento clínico</em>
            </h2>
            <div className="space-y-5 font-body text-base text-foreground/85 leading-[1.8]">
              <p>
                Transtornos mentais são a terceira principal causa de afastamento do trabalho no Brasil. Em ambientes de alta pressão, as taxas de burnout, ansiedade e depressão são significativamente superiores à média populacional. A NR-1 passou a exigir que empresas identifiquem e gerenciem riscos psicossociais no ambiente de trabalho.
              </p>
              <p>
                A maioria das ações corporativas em saúde mental opera sem diagnóstico situacional, sem métrica de resultado e sem profissional com formação clínica conduzindo o processo. O resultado são programas genéricos que não mudam indicadores e não protegem a empresa juridicamente.
              </p>
              <p>
                João Pedro Castro conduz programas corporativos com a mesma lógica que aplica no consultório: investigação antes de intervenção, escolha de ferramentas baseada em evidências e acompanhamento de resultados ao longo do tempo.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-10"
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Serviços
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight">
              O que a empresa <em>pode contratar</em>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card p-8 md:p-10"
              >
                <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-4">
                  {s.title}
                </h3>
                <p className="font-body text-sm text-foreground/85 leading-relaxed">
                  {s.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight mb-6">
              Pronto para estruturar a saúde mental da sua <em>equipe?</em>
            </h2>
            <p className="font-body text-base text-foreground/85 leading-relaxed mb-10">
              Cada programa é desenhado a partir das necessidades da organização. O primeiro passo é uma conversa para entender o cenário e definir o escopo.
            </p>
            <a
              href={WA_LINK_CORP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-sm px-10 py-4"
            >
              Solicitar proposta
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Empresas;
