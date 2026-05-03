import { motion } from "framer-motion";

const differentials = [
  {
    title: "Dupla residência médica em saúde mental",
    text: "Psiquiatria pelo Hospital Odilon Behrens e Psicogeriatria pelo HC/UFMG, programas de referência em Minas Gerais. A combinação de duas residências em saúde mental é rara no consultório particular: amplia o repertório diagnóstico, especialmente em quadros que transitam entre a psiquiatria geral e o envelhecimento.",
  },
  {
    title: "Psicogeriatria: a especialidade que a maioria dos consultórios particulares não tem",
    text: "Após os 60 anos, o cérebro envelhece, o metabolismo de medicamentos muda, os sintomas se apresentam de formas atípicas. Confundir depressão com demência, ou delirium com psicose, tem consequências clínicas sérias. João Pedro realiza consultas domiciliares para pacientes com dificuldade de deslocamento. Para famílias que lidam com quadros avançados, isso não é conveniência: é o que torna o acompanhamento possível.",
  },
  {
    title: "A primeira consulta dura em torno de 1 hora",
    text: "O objetivo da avaliação inicial é construir uma hipótese diagnóstica fundamentada. São colhidas informações sobre sua vida, saúde pessoal e familiar, e a queixa atual. Quando indicado, exames laboratoriais são solicitados para diagnósticos diferenciais.",
  },
  {
    title: "Psicofarmacologia com raciocínio clínico transparente",
    text: "A escolha de cada medicamento tem uma lógica, e essa lógica é explicada. Perfil clínico, histórico de resposta, comorbidades, fase da vida, tolerabilidade esperada. O ajuste farmacológico é contínuo, e o paciente entende o raciocínio por trás de cada decisão ao longo do tratamento.",
  },
  {
    title: "Medicação e psicoterapia com coerência clínica",
    text: "Abordagens como TCC, terapias de terceira onda e técnicas psicodinâmicas são integradas ao tratamento de acordo com o diagnóstico e o momento clínico. Não como complemento genérico, mas como parte de um plano com direção definida. Quando o caso exige trabalho paralelo com psicólogo, João Pedro indica e articula.",
  },
  {
    title: "Atualização em fronteiras terapêuticas",
    text: "Psicodélicos assistidos, cannabis medicinal, novos modelos em psicopatologia. João Pedro acompanha essa literatura com critério e integra o que tem evidência crescente à prática. Sem conservadorismo que priva pacientes de opções válidas, e sem entusiasmo acrítico que ignora os limites do que se sabe.",
  },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-24 md:py-32 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
            Diferenciais
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight">
            O que define esta <em>prática clínica</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {differentials.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-card p-8"
            >
              <h3 className="font-display text-lg md:text-xl font-medium text-foreground mb-3">
                {d.title}
              </h3>
              <p className="font-body text-sm text-foreground/85 leading-relaxed">
                {d.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;