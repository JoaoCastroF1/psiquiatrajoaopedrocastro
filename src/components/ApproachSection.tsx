import { motion } from "framer-motion";

const pillars = [
  {
    title: "Investigação diagnóstica aprofundada",
    text: "O diagnóstico correto é o alicerce de qualquer tratamento eficaz. A avaliação inclui análise detalhada da história clínica, revisão de hipóteses diagnósticas anteriores e, quando indicado, instrumentos de rastreio validados. Quadros que coexistem com outros transtornos, como ansiedade mascarando TDAH ou depressão sobreposta a demência inicial, exigem esse nível de atenção.",
  },
  {
    title: "Farmacologia baseada em evidências",
    text: "A escolha de cada medicamento é guiada pelo perfil clínico do paciente, pelo histórico de resposta a tratamentos prévios e pela literatura científica atualizada. O objetivo é eficácia com o menor custo de efeitos colaterais. Cada ajuste é explicado ao paciente com o raciocínio clínico que o sustenta.",
  },
  {
    title: "Acompanhamento longitudinal",
    text: "Transtornos psiquiátricos raramente se resolvem em uma consulta. O acompanhamento ao longo do tempo permite identificar padrões, ajustar medicação com precisão progressiva e monitorar a evolução do tratamento. Para quadros como bipolaridade, demências e depressão recorrente, o vínculo longitudinal é parte do tratamento.",
  },
];

const ApproachSection = () => {
  return (
    <section className="py-24 md:py-32 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
            Abordagem
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight">
            Como funciona o{" "}
            <em className="text-deep-green">tratamento psiquiátrico</em> nesta prática
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card p-8 border border-border"
            >
              <h3 className="font-display text-lg md:text-xl font-medium text-foreground mb-3">
                {p.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
