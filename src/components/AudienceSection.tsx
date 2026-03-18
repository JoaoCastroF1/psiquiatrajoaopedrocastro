import { motion } from "framer-motion";

const audiences = [
  {
    title: "Pacientes adultos",
    description:
      "Para quem busca psiquiatria com profundidade, escuta real e um olhar que vai além do diagnóstico. Atendimento particular com tempo, atenção e sofisticação clínica.",
  },
  {
    title: "Idosos e famílias",
    description:
      "Psicogeriatria com experiência em quadros complexos — demências, depressão senil, alterações cognitivas. Acompanhamento próximo do paciente e orientação dedicada à família.",
  },
  {
    title: "Empresas e lideranças",
    description:
      "Soluções em saúde mental para organizações que levam a sério o cuidado com seus times. Diagnóstico institucional, palestras, programas de prevenção e suporte estratégico.",
  },
  {
    title: "Instituições e educação médica",
    description:
      "Participação como speaker, consultor e educador em eventos médicos, congressos e iniciativas de formação continuada em saúde mental.",
  },
];

const AudienceSection = () => {
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
            Para quem é este trabalho
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground leading-tight">
            Quem procura um cuidado à altura da{" "}
            <span className="italic">própria complexidade</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {audiences.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="border-l-2 border-primary/30 pl-8 py-2"
            >
              <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-3">
                {a.title}
              </h3>
              <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                {a.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
