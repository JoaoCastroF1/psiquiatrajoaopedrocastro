import { motion } from "framer-motion";
import { MessageSquare, ClipboardList, Pill, Headset } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Primeiro contato",
    text: "Você entra em contato pelo formulário ou WhatsApp. A equipe confirma o agendamento e orienta sobre o que trazer para a primeira consulta.",
  },
  {
    icon: ClipboardList,
    title: "Avaliação detalhada",
    text: "A primeira consulta dura em torno de 1 hora. São colhidas informações sobre sua vida, saúde pessoal e familiar, e a queixa atual. Quando indicado, exames laboratoriais são solicitados para diagnósticos diferenciais.",
  },
  {
    icon: Pill,
    title: "Plano de tratamento personalizado",
    text: "Com base na avaliação, é definido um plano terapêutico individualizado — com farmacologia explicada, metas claras e cronograma de acompanhamento.",
  },
  {
    icon: Headset,
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
              className="relative group"
            >
              {/* Step number + connector line */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                  <s.icon className="w-5 h-5 text-deep-green" />
                </div>
                <span className="font-display text-2xl font-light text-border">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="font-display text-lg font-medium text-foreground mb-2">
                {s.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {s.text}
              </p>

              {/* Connector line for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(100%+0.5rem)] w-[calc(100%-3rem)] h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
