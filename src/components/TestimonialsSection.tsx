import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria S.",
    text: "O Dr. João Pedro mudou minha vida. Depois de anos sofrendo com ansiedade, finalmente encontrei um profissional que me ouviu de verdade e encontrou o tratamento certo.",
  },
  {
    name: "Carlos R.",
    text: "Minha mãe de 78 anos está sendo acompanhada pelo Dr. João Pedro. A dedicação dele com os idosos é impressionante. Toda a família se sente acolhida.",
  },
  {
    name: "Ana L.",
    text: "Profissional excepcional. Muito atencioso, explica tudo com clareza e faz a gente se sentir seguro. Recomendo de olhos fechados.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">
            Depoimentos
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            O que dizem os pacientes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-8 border border-border shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-warm text-warm" />
                ))}
              </div>
              <p className="font-body text-muted-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <p className="font-body font-semibold text-foreground">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
