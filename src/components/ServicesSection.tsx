import { motion } from "framer-motion";

const areas = [
  {
    title: "Psiquiatria do adulto",
    desc: "Avaliação diagnóstica aprofundada e tratamento personalizado para quadros de ansiedade, depressão, transtorno bipolar, TOC e outros.",
  },
  {
    title: "Psicogeriatria",
    desc: "Cuidado especializado na saúde mental do envelhecimento — demências, Alzheimer, depressão senil, alterações comportamentais e suporte familiar.",
  },
  {
    title: "Transtornos do humor e ansiedade",
    desc: "Manejo clínico sofisticado de quadros afetivos e ansiosos, com atenção à funcionalidade, ao contexto e à história de vida.",
  },
  {
    title: "TDAH e sofrimento funcional",
    desc: "Investigação criteriosa e acompanhamento de TDAH em adultos, com foco na produtividade, autorregulação e qualidade de vida.",
  },
  {
    title: "Burnout e saúde mental no trabalho",
    desc: "Abordagem integrada do esgotamento profissional, com leitura dos fatores individuais e organizacionais envolvidos.",
  },
  {
    title: "Dependências e hábitos",
    desc: "Tratamento de dependências químicas e comportamentais com estratégia, empatia e visão realista de mudança.",
  },
  {
    title: "Cognição e envelhecimento",
    desc: "Investigação de queixas cognitivas, rastreio de declínio, acompanhamento longitudinal e orientação para pacientes e famílias.",
  },
  {
    title: "Saúde mental corporativa",
    desc: "Programas, consultorias e palestras para empresas que desejam atuar com seriedade na saúde mental de suas equipes.",
  },
  {
    title: "Educação e palestras",
    desc: "Participações como speaker para laboratórios, congressos e eventos — comunicando ciência com clareza, densidade e linguagem de alto nível.",
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
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground leading-tight">
            Do consultório ao mundo corporativo —{" "}
            <span className="italic">com a mesma densidade</span>
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
