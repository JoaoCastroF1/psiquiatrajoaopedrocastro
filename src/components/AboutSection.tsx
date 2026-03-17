import { motion } from "framer-motion";
import { GraduationCap, Heart, Brain, Users } from "lucide-react";

const credentials = [
  { icon: GraduationCap, text: "Residência em Psiquiatria" },
  { icon: Brain, text: "Especialista em Psicogeriatria" },
  { icon: Heart, text: "Atendimento Humanizado" },
  { icon: Users, text: "Acompanhamento Familiar" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">
              Sobre o Dr. João Pedro
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Comprometido com a sua <span className="text-primary">saúde mental</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Com mais de 15 anos de experiência em psiquiatria clínica, o Dr. João Pedro Castro
              dedica-se ao cuidado integral da saúde mental, unindo ciência e empatia para
              proporcionar o melhor tratamento a cada paciente. Especialista em psicogeriatria,
              oferece acompanhamento personalizado para idosos e suas famílias.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="font-body font-semibold text-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
