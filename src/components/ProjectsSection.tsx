import { motion } from "framer-motion";

const projects = [
  {
    label: "Pesquisa",
    title: "Pesquisa e Inovação",
    description:
      "Como mestrando em Neurociências na UFMG, João Pedro conduz pesquisa em psicopatologia e novas abordagens terapêuticas — conectando o que está sendo produzido nos laboratórios à lógica do consultório.",
  },
  {
    label: "Empreendimento",
    title: "Saúde mental corporativa",
    description:
      "Ambientes de alta pressão têm taxas elevadas de burnout, ansiedade e afastamentos. João Pedro desenvolve programas e consultorias para empresas com estrutura clínica real — intervenções baseadas em evidências, diagnóstico situacional e acompanhamento de resultados.",
  },
  {
    label: "Atuação",
    title: "Palestras e formação",
    description:
      "Palestrante em congressos médicos e eventos de formação continuada, com foco em traduzir a ciência atual para a prática clínica — especialmente em psicofarmacologia, psicogeriatria e novas abordagens terapêuticas.",
  },
  {
    label: "Visão",
    title: "Visão de longo prazo",
    description:
      "A prática clínica é o núcleo, mas não o limite. João Pedro trabalha para construir uma atuação mais ampla — articulando pesquisa, educação e iniciativas autorais em saúde mental com impacto além do consultório.",
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
            <em className="text-deep-green">uma obra em construção</em>
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
              <span className="font-body text-[11px] uppercase tracking-[0.2em] text-steel">
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
