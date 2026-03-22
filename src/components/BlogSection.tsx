import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    tag: "Depressão",
    title: "Depressão ou tristeza passageira? Como distinguir e quando procurar ajuda",
    excerpt:
      "Nem toda tristeza prolongada é depressão, e nem toda depressão se manifesta com tristeza. Entenda os sinais que diferenciam um luto normal de um quadro que precisa de tratamento.",
  },
  {
    tag: "Psicogeriatria",
    title: "O que é psicogeriatria e por que ela importa depois dos 60",
    excerpt:
      "O envelhecimento muda a forma como o cérebro processa emoções, responde a medicamentos e manifesta doenças psiquiátricas. A psicogeriatria existe para lidar com essas diferenças.",
  },
  {
    tag: "TDAH",
    title: "TDAH em adultos: por que tantos diagnósticos chegam tarde",
    excerpt:
      "Procrastinação, impulsividade, dificuldade de foco. Em adultos, o TDAH raramente se apresenta como a hiperatividade infantil clássica, o que atrasa o diagnóstico por anos.",
  },
  {
    tag: "Sono",
    title: "Insônia crônica e saúde mental: o que veio primeiro?",
    excerpt:
      "A insônia costuma ser o primeiro sinal de que algo está errado e o último problema a ser tratado com seriedade. Entenda por que o sono merece atenção clínica dedicada.",
  },
];

interface BlogSectionProps {
  showHeader?: boolean;
}

const BlogSection = ({ showHeader = true }: BlogSectionProps) => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-16"
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Conteúdo
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight">
              Informação com{" "}
              <em className="text-deep-green">fundamento clínico</em>
            </h2>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group border border-border p-8 md:p-10 hover:border-primary/20 transition-colors cursor-pointer"
            >
              <span className="font-body text-[11px] uppercase tracking-[0.2em] text-steel">
                {post.tag}
              </span>
              <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mt-3 mb-4 leading-snug">
                {post.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.15em] text-deep-green group-hover:gap-3 transition-all">
                Em breve <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
