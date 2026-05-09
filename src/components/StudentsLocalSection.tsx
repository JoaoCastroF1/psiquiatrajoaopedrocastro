import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const StudentsLocalSection = () => {
  return (
    <section className="py-20 md:py-24 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
            Vestibulandos e estudantes
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight mb-6">
            Atendimento psiquiátrico perto dos{" "}
            <em className="text-deep-green">cursinhos de Lourdes</em>
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
            Ansiedade, TDAH, insônia ou esgotamento podem atrapalhar a rotina
            de estudos quando existe um quadro clínico por trás. O consultório
            fica na região dos principais cursinhos da cidade.
          </p>
          <a
            href="/vestibulandos"
            className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-[0.15em] text-deep-green hover:gap-3 transition-all"
          >
            Saiba mais sobre o atendimento
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default StudentsLocalSection;
