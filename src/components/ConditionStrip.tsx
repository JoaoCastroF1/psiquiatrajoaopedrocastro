import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const conditions: { label: string; href?: string }[] = [
  { label: "Depressão", href: "/depressao" },
  { label: "Ansiedade", href: "/ansiedade" },
  { label: "TDAH", href: "/tdah" },
  { label: "Bipolaridade", href: "/bipolaridade" },
  { label: "Insônia", href: "/insonia" },
  { label: "Alzheimer", href: "/alzheimer" },
  { label: "TEPT", href: "/estresse-pos-traumatico" },
];

const ConditionStrip = () => {
  return (
    <section
      aria-label="Condições tratadas — atalho rápido"
      className="bg-graphite py-5 md:py-6 border-b border-cream/5"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-x-2 gap-y-3"
        >
          <span className="font-body text-[11px] uppercase tracking-[0.18em] text-cream/55 mr-2 md:mr-4">
            Estou tratando de:
          </span>
          {conditions.map((c, i) => {
            const inner = (
              <span className="inline-flex items-center gap-1.5 group">
                {c.label}
                <ArrowRight
                  className="w-3 h-3 text-lime/70 group-hover:translate-x-0.5 transition-transform"
                  aria-hidden="true"
                />
              </span>
            );
            return c.href ? (
              <Link
                key={i}
                to={c.href}
                className="font-body text-xs md:text-sm text-cream/85 hover:text-lime transition-colors px-2.5 py-1"
              >
                {inner}
              </Link>
            ) : (
              <span
                key={i}
                className="font-body text-xs md:text-sm text-cream/85 px-2.5 py-1"
              >
                {c.label}
              </span>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ConditionStrip;
