import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Como funciona a primeira consulta?",
    a: "A primeira consulta dura em torno de 60 minutos. Nela, faço uma avaliação detalhada do seu histórico de saúde, sintomas atuais e estilo de vida para chegar ao melhor plano de tratamento.",
  },
  {
    q: "Você atende por telemedicina?",
    a: "Sim! Ofereço consultas por telemedicina para pacientes que já passaram pela consulta inicial presencial, com a mesma qualidade e atenção.",
  },
  {
    q: "Quais convênios são aceitos?",
    a: "Atendo de forma particular. Emito recibo para reembolso nos principais convênios de saúde.",
  },
  {
    q: "Qual a diferença entre psiquiatra e psicólogo?",
    a: "O psiquiatra é médico, podendo diagnosticar doenças e prescrever medicamentos. O psicólogo trabalha com psicoterapia. Muitas vezes, o tratamento ideal combina os dois profissionais.",
  },
  {
    q: "O que é Psicogeriatria?",
    a: "É a especialidade da psiquiatria voltada para a saúde mental do idoso. Trata condições como demência, depressão, ansiedade e alterações comportamentais na terceira idade.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">
            Dúvidas Frequentes
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Perguntas e Respostas
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="font-body font-semibold text-foreground text-left hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
