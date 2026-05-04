import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const featured = [
  {
    title: "Depressão e depressão resistente",
    description:
      "Anedonia, isolamento, distimia. Quadros que já passaram por dois ou três antidepressivos sem resposta adequada.",
    href: "/depressao",
  },
  {
    title: "Transtorno Afetivo Bipolar",
    description:
      "Oscilações além do \"estou mal hoje\". Bipolar tipo II com hipomanias sutis. Ciclotimia.",
    href: "/bipolaridade",
  },
  {
    title: "Ansiedade, pânico, fobia social, TOC",
    description:
      "Preocupação que não desliga. Crises de pânico. TOC com pensamentos intrusivos e rituais.",
    href: "/ansiedade",
  },
  {
    title: "TDAH em adultos",
    description:
      "Procrastinação crônica que não é preguiça. Diagnóstico diferencial preciso entre TDAH, ansiedade e bipolaridade.",
    href: "/tdah",
  },
  {
    title: "Demências e Alzheimer",
    description:
      "Investigação cognitiva precoce. Acompanhamento de Alzheimer, demência vascular, frontotemporal e corpos de Lewy.",
    href: "/alzheimer",
  },
  {
    title: "Insônia e transtornos do sono",
    description:
      "Insônia crônica que deteriora humor e cognição. Hipersonia. Síndrome das pernas inquietas.",
    href: "/insonia",
  },
];

const additional: { label: string; href?: string }[] = [
  { label: "Estresse pós-traumático", href: "/estresse-pos-traumatico" },
  { label: "Transtornos psicóticos" },
  { label: "Autismo em adultos" },
  { label: "Transtornos de personalidade" },
  { label: "Dependências químicas" },
  { label: "Transtornos alimentares" },
  { label: "Saúde mental corporativa", href: "/empresas" },
  { label: "Psicogeriatria", href: "/alzheimer" },
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

        {/* 6-card grid with lime rule accent */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 lg:gap-y-12 mb-16">
          {featured.map((s, i) => {
            const Inner = (
              <>
                <span
                  aria-hidden="true"
                  className="block w-12 h-[2px] bg-deep-green/40 mb-5"
                />
                <h3 className="font-display text-xl md:text-[1.4rem] font-medium text-foreground leading-snug mb-3 group-hover:text-deep-green transition-colors">
                  {s.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
              </>
            );
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                {s.href ? (
                  <Link to={s.href} className="group block">
                    {Inner}
                  </Link>
                ) : (
                  <div className="group">{Inner}</div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Additional conditions as chips */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-10 pt-10 border-t border-border"
        >
          <span className="font-body text-xs uppercase tracking-[0.18em] text-muted-foreground self-center mr-2">
            Também atendo:
          </span>
          {additional.map((h, i) =>
            h.href ? (
              <Link
                key={i}
                to={h.href}
                className="font-body text-sm text-foreground border border-border px-4 py-2 hover:border-primary/30 hover:text-deep-green transition-colors"
              >
                {h.label}
              </Link>
            ) : (
              <span
                key={i}
                className="font-body text-sm text-foreground border border-border px-4 py-2 transition-colors"
              >
                {h.label}
              </span>
            )
          )}
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
