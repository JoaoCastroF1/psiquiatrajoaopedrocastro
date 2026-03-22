import { motion } from "framer-motion";

const highlights = [
  {
    title: "Dupla residência em saúde mental",
    text: "Psiquiatria e Psicogeriatria por programas de referência em MG. Repertório diagnóstico ampliado para quadros que transitam entre a psiquiatria geral e o envelhecimento.",
  },
  {
    title: "Consulta inicial sem pressa",
    text: "A primeira avaliação dura o tempo necessário para construir uma hipótese diagnóstica fundamentada. Diagnósticos incompletos levam a tratamentos errados por meses.",
  },
  {
    title: "Psicofarmacologia transparente",
    text: "Cada medicamento tem uma lógica e essa lógica é explicada. O paciente entende o raciocínio por trás de cada decisão ao longo do tratamento.",
  },
];

const DifferentialsPreview = () => {
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
            <em className="text-deep-green">prática clínica</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {highlights.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card p-8 border border-border"
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

export default DifferentialsPreview;
