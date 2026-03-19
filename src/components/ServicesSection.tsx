import { motion } from "framer-motion";

const areas = [
  {
    title: "Transtornos do humor e ansiedade",
    desc: "Manejo clínico sofisticado de quadros afetivos e ansiosos, com atenção à funcionalidade, ao contexto e à história de vida.",
  },
  {
    title: "TDAH e sofrimento funcional",
    desc: "Investigação criteriosa e acompanhamento de TDAH em adultos, com foco na produtividade, autorregulação e qualidade de vida.",
  },
  {
    title: "Transtornos psicóticos",
    desc: "Diagnóstico precoce e acompanhamento compassivo de quadros como esquizofrenia, visando a melhora da funcionalidade e da qualidade de vida.",
  },
  {
    title: "Transtorno do Espectro Autista",
    desc: "Avaliação abrangente e plano de cuidados individualizado para adultos com TEA, integrando medicação, psicoterapia e orientação familiar.",
  },
  {
    title: "Demências e Alzheimer",
    desc: "Investigação precisa de queixas cognitivas, rastreio precoce, acompanhamento longitudinal e suporte especializado para pacientes e famílias.",
  },
  {
    title: "Dependências e hábitos",
    desc: "Tratamento de dependências químicas e comportamentais com estratégia, empatia e visão realista de mudança.",
  },
  {
    title: "Saúde mental corporativa",
    desc: "Programas, consultorias e palestras para empresas que desejam atuar com seriedade na saúde mental de suas equipes.",
  },
];

const ServicesSection = () => {
  return (
    <section id="atuacao" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
            Áreas de atuação
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight">
            Expertise em uma ampla gama de{" "}
            <em className="text-lime">transtornos mentais</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {areas.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group"
            >
              <div className="w-8 h-px bg-primary/40 mb-5 group-hover:w-12 transition-all duration-300" />
              <h3 className="font-display text-lg md:text-xl font-medium text-foreground mb-2">
                {a.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {a.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
