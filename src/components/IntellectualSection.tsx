import { motion } from "framer-motion";
import jpCoat from "@/assets/jp-coat.jpg";

const IntellectualSection = () => {
  return (
    <section className="py-24 md:py-32 bg-graphite">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-primary-foreground/50 mb-5">
              Presença intelectual e autoral
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-primary-foreground leading-tight mb-8">
              Medicina, música, escrita{" "}
              <em className="text-lime">e pensamento</em>
            </h2>
            <div className="space-y-5 font-body text-base text-primary-foreground/75 leading-[1.8]">
              <p>
                A prática clínica de João Pedro é alimentada por um repertório que ultrapassa a medicina. Músico, compositor e multi-instrumentista, transita entre MPB, rock inglês, bossa nova, chorinho e música clássica. É também escritor — com um livro escrito e uma busca constante por integrar arte, linguagem e pensamento à sua atuação profissional.
              </p>
              <p>
                Esse trânsito entre disciplinas não é acessório. A sensibilidade estética, a escuta treinada pela música e a capacidade narrativa informam diretamente a qualidade de sua clínica — e a profundidade de sua comunicação. É a presença de alguém que pensa com amplitude e trabalha com precisão.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src={jpCoat}
              alt="Dr. João Pedro Castro"
              className="w-72 md:w-80 lg:w-[380px] aspect-[3/4] object-cover object-top grayscale-[15%] brightness-110"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntellectualSection;
