import { motion } from "framer-motion";

const pillars = [
  {
    title: "Investigação diagnóstica aprofundada",
    text: "O diagnóstico correto é o alicerce de qualquer tratamento eficaz. A avaliação inclui análise detalhada da história clínica, revisão de hipóteses anteriores e instrumentos de rastreio validados. Quadros sobrepostos — como ansiedade mascarando TDAH ou depressão sobreposta a demência inicial — exigem esse nível de atenção.",
  },
  {
    title: "Farmacologia baseada em evidências",
    text: "A escolha de cada medicamento é guiada pelo perfil clínico, histórico de resposta a tratamentos prévios e literatura científica atualizada. Cada ajuste é explicado ao paciente com o raciocínio clínico que o sustenta.",
  },
  {
    title: "Consulta de ~1 hora",
    text: "A primeira avaliação dura em torno de 1 hora, tempo suficiente para construir uma hipótese diagnóstica fundamentada. Diagnósticos incompletos levam a tratamentos errados por meses. O acompanhamento longitudinal permite ajustes com precisão progressiva.",
  },
  {
    title: "Dupla formação em saúde mental",
    text: "Psiquiatria e Psicogeriatria por programas de referência em MG. Repertório diagnóstico ampliado para quadros que transitam entre a psiquiatria geral e o envelhecimento, com mestrando em Neurociências.",
  },
];

const MethodSection = () => {
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
            Abordagem e diferenciais
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight">
            O que define esta{" "}
            <em className="text-deep-green">prática clínica</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
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

export default MethodSection;
