import { motion } from "framer-motion";

const steps = [
  {
    title: "Primeiro contato",
    text: "Você entra em contato pelo formulário ou WhatsApp. A equipe confirma o agendamento e orienta sobre o que trazer para a primeira consulta.",
  },
  {
    title: "Avaliação detalhada",
    text: "A primeira consulta dura em torno de 1 hora. São colhidas informações sobre sua vida, saúde pessoal e familiar, e a queixa atual. Quando indicado, exames laboratoriais são solicitados para diagnósticos diferenciais.",
  },
  {
    title: "Plano de tratamento personalizado",
    text: "Com base na avaliação, é definido um plano terapêutico individualizado — com farmacologia explicada, metas claras e cronograma de acompanhamento.",
  },
  {
    title: "Suporte contínuo",
    text: "Entre as consultas, dúvidas sobre medicação ou sintomas podem ser esclarecidas por WhatsApp. O acompanhamento longitudinal garante ajustes precisos ao longo do tempo.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
            Passo a passo
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight">
            Como funciona a{" "}
            <em className="text-deep-green">consulta</em>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span
                aria-hidden="true"
                className="font-display italic text-coral text-6xl md:text-7xl leading-none block mb-3"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="border-t border-foreground/15 mb-5" />
              <h3 className="font-display text-lg md:text-xl font-medium text-foreground mb-3">
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
  );
};

export default HowItWorksSection;
