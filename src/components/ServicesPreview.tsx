import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  "Depressão e depressão resistente",
  "Transtorno Bipolar",
  "Ansiedade, pânico e TOC",
  "TDAH em adultos",
  "Demências e Alzheimer",
  "Transtornos psicóticos",
  "Autismo em adultos",
  "Insônia e transtornos do sono",
  "Transtornos de personalidade",
  "Estresse pós-traumático",
  "Dependências químicas",
  "Transtornos alimentares",
  "Psicogeriatria",
  "Saúde mental corporativa",
];

const ServicesPreview = () => {
  return (
    <section id="atuacao" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-12"
        >
          <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
            Áreas de atuação
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight">
            Condições tratadas com{" "}
            <em className="text-deep-green">profundidade clínica</em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {highlights.map((h, i) => (
            <span
              key={i}
              className="font-body text-sm text-foreground border border-border px-4 py-2 hover:border-primary/30 transition-colors"
            >
              {h}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            to="/atuacao"
            className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-[0.15em] text-deep-green hover:gap-3 transition-all"
          >
            Ver todas as áreas em detalhe <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
