import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Um profissional que escuta de verdade. Depois de anos buscando um psiquiatra que fosse além da receita, encontrei no Dr. João Pedro a profundidade e a seriedade que eu precisava.",
    name: "Paciente, 38 anos",
  },
  {
    text: "O cuidado com a minha mãe foi extraordinário. Ele explicou tudo com clareza, envolveu a família no processo e trouxe uma dignidade ao tratamento que não tínhamos encontrado antes.",
    name: "Familiar de paciente, 62 anos",
  },
  {
    text: "Contratamos o Dr. João Pedro para um programa de saúde mental na empresa. A abordagem foi séria, sem clichês, e gerou um impacto real nas nossas lideranças.",
    name: "Diretora de RH",
  },
];

const credentials = [
  "Consulta particular",
  "Posicionamento premium",
  "Atendimento presencial e telemedicina",
  "Recibo para reembolso",
];

const TestimonialsSection = () => {
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
            Confiança
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight">
            O que dizem sobre{" "}
            <em className="text-lime">este trabalho</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-card border border-border p-8"
            >
              <p className="font-display text-lg italic text-foreground leading-relaxed mb-6">
                "{t.text}"
              </p>
              <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {t.name}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 pt-8 border-t border-border"
        >
          {credentials.map((c, i) => (
            <span
              key={i}
              className="font-body text-xs uppercase tracking-[0.12em] text-muted-foreground"
            >
              {c}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
