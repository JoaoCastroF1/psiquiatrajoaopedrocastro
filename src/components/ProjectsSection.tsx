import { motion } from "framer-motion";

const projects = [
  {
    label: "Projeto",
    title: "Anti-Inércia",
    description:
      "Programa voltado ao desenvolvimento de habilidades concretas em pessoas comuns — inteligência emocional, melhora do sono, enfrentamento de dependências, mudança de hábitos e capacidade de ação. Uma ponte entre conhecimento clínico e transformação prática.",
  },
  {
    label: "Empreendimento",
    title: "Saúde mental para empresas",
    description:
      "Hub de soluções para organizações que desejam tratar saúde mental com seriedade: diagnóstico institucional, programas de prevenção, suporte a lideranças e cultura de cuidado com base em evidência.",
  },
  {
    label: "Atuação",
    title: "Palestras e educação",
    description:
      "Participação como speaker para laboratórios farmacêuticos, congressos e eventos. Comunicação científica com linguagem sofisticada, acessibilidade real e impacto na audiência.",
  },
  {
    label: "Visão",
    title: "Psiquiatria, desenvolvimento humano e criação",
    description:
      "Uma prática que não se encerra no consultório. João constrói um ecossistema que articula clínica, educação, conteúdo, produtos digitais e projetos autorais — com consistência e visão de longo prazo.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
            Projetos e visão
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight">
            Além da clínica —{" "}
            <em className="text-lime">construção de obra</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="border border-border p-8 md:p-10 hover:border-primary/20 transition-colors"
            >
              <span className="font-body text-[11px] uppercase tracking-[0.2em] text-warm">
                {p.label}
              </span>
              <h3 className="font-display text-2xl md:text-[1.65rem] font-medium text-foreground mt-3 mb-4">
                {p.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
