import { motion } from "framer-motion";

const credentials = [
  "Medicina pela UFMG",
  "Residência em Psiquiatria — Hospital Odilon Behrens",
  "Residência em Psicogeriatria — HC/UFMG",
  "Mestrando em Neurociências — UFMG",
  "CRM 83920 · RQE 62148 · RQE 66521",
];

const AuthorityStrip = () => {
  return (
    <section className="bg-primary py-6 md:py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {credentials.map((c, i) => (
            <span
              key={i}
              className="font-body text-xs md:text-sm text-primary-foreground/80 uppercase tracking-[0.12em]"
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
