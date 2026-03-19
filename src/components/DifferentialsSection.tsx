import { motion } from "framer-motion";

const differentials = [
  {
    title: "Formação médica de elite",
    text: "Médico formado pela UFMG, com residências em Psiquiatria e Psicogeriatria, além de mestrado em Neurociências em andamento.",
  },
  {
    title: "Atualização científica constante",
    text: "Estudioso de psicofarmacologia, psicopatologia, psicoterapias, psicodélicos e cannabis medicinal, mantendo-se sempre na vanguarda dos tratamentos.",
  },
  {
    title: "Escuta ativa e empatia",
    text: "Abordagem que prioriza a compreensão profunda de cada paciente, indo além dos sintomas para encontrar soluções personalizadas.",
  },
  {
    title: "Domínio de diagnósticos diferenciais",
    text: "Grande expertise em psicofarmacologia e clínica médica, permitindo investigação precisa e manejo eficaz de quadros complexos.",
  },
  {
    title: "Integração de abordagens",
    text: "Combina com maestria diversas psicoterapias à medicação, trazendo o melhor de cada abordagem para cada caso.",
  },
  {
    title: "Visão contemporânea",
    text: "Práticas inovadoras como uso de psicodélicos e cannabis medicinal, aliadas a um olhar holístico sobre a saúde mental.",
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
          <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight">
            O que define esta{" "}
            <em className="text-lime">prática clínica</em>
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
