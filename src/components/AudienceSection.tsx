import { motion } from "framer-motion";

const audiences = [
  {
    title: "Adultos",
    description:
      "Para quem carrega sintomas que já interferem no trabalho, nos relacionamentos ou no sono — seja depressão que não cede, ansiedade que antecipa o pior, TDAH que sabota projetos, bipolaridade com oscilações que ninguém ao redor entende, ou TOC que ocupa cada vez mais espaço no dia. O tratamento começa por entender o que está de fato acontecendo, antes de qualquer prescrição.",
  },
  {
    title: "Idosos e famílias",
    description:
      "Para famílias que percebem que algo mudou — os esquecimentos ficaram mais frequentes, o comportamento alterou, a pessoa ficou mais irritável, apática, ou simplesmente diferente. A psicogeriatria investiga e acompanha Alzheimer, demências, depressão no envelhecimento, psicose tardia e alterações cognitivas. O paciente recebe cuidado clínico especializado. A família recebe orientação sobre o que está acontecendo e o que vem pela frente. Consultas domiciliares disponíveis quando o deslocamento não é possível.",
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
          <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight">
            Cuidado especializado para dois momentos{" "}
            <em className="text-deep-green">distintos da vida</em>
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
