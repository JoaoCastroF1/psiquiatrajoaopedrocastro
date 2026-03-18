import { motion } from "framer-motion";

const differentials = [
  {
    title: "Leitura diagnóstica sofisticada",
    text: "Cada paciente é singular. A avaliação vai além do checklist de sintomas — integra história, personalidade, contexto, funcionamento e sentido.",
  },
  {
    title: "Integração clínica real",
    text: "Sintomas, personalidade, contexto de vida, vínculos, sono, hábitos e projeto existencial são lidos de forma articulada, não fragmentada.",
  },
  {
    title: "Experiência com quadros complexos",
    text: "Formação e prática com casos que exigem raciocínio clínico apurado — comorbidades, refratariedade, polifarmácia, quadros geriátricos e situações de difícil manejo.",
  },
  {
    title: "Comunicação de alto nível",
    text: "Capacidade de traduzir ciência em linguagem clara, precisa e acessível — no consultório, no palco e nos meios digitais.",
  },
  {
    title: "Repertório humanístico",
    text: "Uma clínica informada por sensibilidade cultural, leitura ampla e interesse genuíno pela condição humana — para além do estritamente médico.",
  },
  {
    title: "Cuidado orientado para potência",
    text: "Não se trata apenas de reduzir sofrimento. O objetivo é funcionalidade, direção de vida e construção de uma existência com mais presença e propósito.",
  },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-24 md:py-32 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
            Diferenciais
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground leading-tight">
            O que define esta{" "}
            <span className="italic">prática clínica</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {differentials.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-card p-8 border border-border hover:border-primary/20 transition-colors"
            >
              <h3 className="font-display text-lg md:text-xl font-medium text-foreground mb-3">
                {d.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {d.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
