import { motion } from "framer-motion";

const credentials = [
  "Medicina pela UFMG",
  "Residência em Psiquiatria, HOB",
  "Residência em Psicogeriatria, HC-UFMG/Ebserh",
  "Mestrando em Neurociências",
];

const AuthorityStrip = () => {
  return (
    <section className="bg-primary py-5 md:py-6 border-b border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:gap-x-10"
        >
          {credentials.map((c, i) => (
            <span
              key={i}
              className="font-body text-[11px] md:text-xs text-primary-foreground/70 uppercase tracking-[0.15em]"
            >
              {c}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorityStrip;
