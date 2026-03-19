import { motion } from "framer-motion";

const projects = [
  {
    label: "Pesquisa",
    title: "Pesquisa e Inovação",
    description:
      "Como mestrando em Neurociências, João Pedro conduz estudos que expandem as fronteiras do conhecimento em saúde mental, buscando soluções cada vez mais eficazes.",
  },
  {
    label: "Empreendimento",
    title: "Saúde mental corporativa",
    description:
      "Desenvolve programas e consultorias para empresas que desejam cuidar da saúde mental de seus colaboradores com seriedade e embasamento científico.",
  },
  {
    label: "Atuação",
    title: "Palestras e educação",
    description:
      "Participa ativamente como palestrante em congressos, eventos médicos e iniciativas de formação continuada, comunicando ciência com clareza e impacto.",
  },
  {
    label: "Visão",
    title: "Psiquiatria e desenvolvimento humano",
    description:
      "Sua prática clínica é apenas o início de uma obra mais ampla, que articula pesquisa, educação e projetos autorais voltados ao bem-estar integral.",
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
            <em className="text-lime">uma obra em construção</em>
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
