import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a primeira consulta psiquiátrica?",
    answer:
      "A primeira consulta é uma avaliação ampla que dura o tempo necessário para construir uma hipótese diagnóstica fundamentada. Inclui anamnese detalhada, revisão de tratamentos anteriores e análise do contexto de vida. O objetivo é entender o que está acontecendo antes de qualquer prescrição.",
  },
  {
    question: "O atendimento aceita plano de saúde?",
    answer:
      "O atendimento é particular. Após cada consulta, é emitida nota fiscal que pode ser utilizada para solicitar reembolso ao plano de saúde, conforme as regras da operadora.",
  },
  {
    question: "Qual a diferença entre psiquiatra e psicólogo?",
    answer:
      "O psiquiatra é médico, com formação em Medicina e residência em Psiquiatria. Pode prescrever medicamentos, solicitar exames e investigar causas orgânicas dos sintomas. O psicólogo conduz psicoterapia. Em muitos casos, o tratamento mais eficaz combina os dois profissionais trabalhando de forma articulada.",
  },
  {
    question: "A consulta pode ser feita por telemedicina?",
    answer:
      "Sim. Consultas por telemedicina estão disponíveis para pacientes em acompanhamento ou para primeiras avaliações, quando adequado ao caso clínico. A modalidade segue as normas do CFM.",
  },
  {
    question: "São realizadas consultas domiciliares?",
    answer:
      "Sim. Consultas domiciliares são disponibilizadas especialmente para pacientes idosos com dificuldade de deslocamento, quadros demenciais avançados ou outras condições que impeçam o comparecimento ao consultório.",
  },
  {
    question: "Quando procurar um psicogeriatra?",
    answer:
      "Quando há queixas de memória progressivas, mudança de comportamento no idoso, agitação, apatia, confusão mental ou suspeita de demência. Também quando um idoso apresenta depressão, ansiedade ou psicose com início tardio. A psicogeriatria leva em conta as particularidades do envelhecimento cerebral e do metabolismo de medicamentos nessa faixa etária.",
  },
  {
    question: "Como agendar uma consulta?",
    answer:
      "O agendamento pode ser feito pelo WhatsApp (31) 99131-5958 ou pelo formulário de contato no site. O retorno é feito em horário comercial.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
            Perguntas frequentes
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight">
            O que você precisa saber{" "}
            <em className="text-deep-green">antes de agendar</em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="font-display text-base md:text-lg font-medium text-foreground text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
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
