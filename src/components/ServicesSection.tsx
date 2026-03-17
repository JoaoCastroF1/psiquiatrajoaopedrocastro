import { motion } from "framer-motion";
import { Brain, Clock, Stethoscope, Pill, HeartPulse, Users } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Transtornos de Ansiedade",
    desc: "Diagnóstico e tratamento personalizado para transtorno de ansiedade generalizada, pânico, fobias e TOC.",
  },
  {
    icon: HeartPulse,
    title: "Depressão e Bipolaridade",
    desc: "Acompanhamento completo para transtornos do humor com abordagem medicamentosa e suporte terapêutico.",
  },
  {
    icon: Clock,
    title: "Insônia e Distúrbios do Sono",
    desc: "Avaliação e manejo dos transtornos do sono, com foco na qualidade de vida do paciente.",
  },
  {
    icon: Users,
    title: "Psicogeriatria",
    desc: "Cuidado especializado em saúde mental do idoso, incluindo demências, Alzheimer e depressão senil.",
  },
  {
    icon: Pill,
    title: "Manejo Medicamentoso",
    desc: "Ajuste fino de medicações psiquiátricas com acompanhamento próximo e minimização de efeitos colaterais.",
  },
  {
    icon: Stethoscope,
    title: "Avaliação Psiquiátrica",
    desc: "Consulta completa para investigação diagnóstica, laudos e pareceres psiquiátricos.",
  },
];

const ServicesSection = () => {
  return (
    <section id="especialidades" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">
            Especialidades
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Como posso te ajudar
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card rounded-xl p-8 border border-border hover:shadow-xl hover:border-primary/20 transition-all group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
