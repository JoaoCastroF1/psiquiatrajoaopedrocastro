import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";

const WA_LINK_CORP =
  "https://wa.me/5531991315958?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20programa%20de%20sa%C3%BAde%20mental%20corporativa.";

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
      <Navbar />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Saúde mental corporativa
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-normal text-foreground leading-tight mb-6">
              Programas de saúde mental para empresas com{" "}
              <em className="text-deep-green">estrutura clínica e métricas de resultado</em>
            </h1>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Burnout, ansiedade ocupacional e afastamentos por transtornos mentais custam caro e, em muitos casos, são evitáveis. A diferença entre uma ação de saúde mental que gera resultado e uma que gera apenas relatório está na estrutura clínica do que é oferecido.
            </p>
            <a
              href={WA_LINK_CORP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-body text-sm uppercase tracking-[0.1em] bg-primary text-primary-foreground px-10 py-4 hover:opacity-90 transition-opacity"
            >
              Solicitar proposta
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contexto */}
      <section className="py-24 md:py-32 bg-section-alt">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Contexto
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight mb-8">
              Por que saúde mental corporativa precisa de{" "}
              <em className="text-deep-green">embasamento clínico</em>
            </h2>
            <div className="space-y-5 font-body text-base text-muted-foreground leading-[1.8]">
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
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-16"
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Serviços
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight">
              O que a empresa{" "}
              <em className="text-deep-green">pode contratar</em>
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
                className="border border-border p-8 md:p-10 hover:border-primary/20 transition-colors"
              >
                <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-4">
                  {s.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
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
              Pronto para estruturar a saúde mental da sua{" "}
              <em className="text-deep-green">equipe?</em>
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-10">
              Cada programa é desenhado a partir das necessidades da organização. O primeiro passo é uma conversa para entender o cenário e definir o escopo.
            </p>
            <a
              href={WA_LINK_CORP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-body text-sm uppercase tracking-[0.1em] bg-primary text-primary-foreground px-10 py-4 hover:opacity-90 transition-opacity"
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
