import { motion } from "framer-motion";

const areas = [
  {
    title: "Depressão, distimia e depressão resistente",
    desc: "Depressão com anedonia, isolamento e incapacidade de sentir prazer. Distimia, o peso baixo e constante que dura anos sem nome claro. Depressão atípica com padrão de sono e humor que confunde. Depressão que já passou por dois, três antidepressivos sem resposta adequada. Cada apresentação tem uma lógica farmacológica e psicoterápica própria e merece ser investigada por inteiro.",
  },
  {
    title: "Transtorno Afetivo Bipolar",
    desc: "Oscilações de humor que vão além do \"estou mal hoje\". Períodos de energia e produtividade que viram impulsividade e decisões das quais a pessoa se arrepende. Quedas que imobilizam por semanas. Bipolar tipo II com hipomanias tão sutis que passam anos sem diagnóstico, e a pessoa acaba tratada como depressão unipolar, sem resultado. Ciclotimia. O diagnóstico diferencial preciso aqui define o tratamento.",
  },
  {
    title: "Ansiedade, pânico, fobia social e TOC",
    desc: "Preocupação que não desliga mesmo quando não há motivo real. Crises de pânico que chegam do nada e parecem ataques cardíacos. Fobia social que restringe carreira e relações. TOC com pensamentos intrusivos que voltam mesmo sendo reconhecidos como irracionais, e rituais que consomem horas. Cada quadro ansioso tem especificidades que mudam a escolha do tratamento.",
  },
  {
    title: "TDAH em adultos",
    desc: "Procrastinação crônica que não é preguiça. Dificuldade de terminar o que começou, mesmo quando o assunto importa. Impulsividade em decisões financeiras, afetivas ou profissionais. Instabilidade emocional marcante. Sensação constante de funcionar abaixo do potencial. O diagnóstico diferencial distingue TDAH de ansiedade, bipolaridade e outros quadros que se parecem, e isso muda completamente o tratamento.",
  },
  {
    title: "Transtornos psicóticos",
    desc: "Esquizofrenia, transtorno esquizoafetivo, transtorno delirante, primeiro episódio psicótico. Diagnóstico precoce e acompanhamento longitudinal com foco em funcionalidade e autonomia, com atenção especial à tolerabilidade do tratamento farmacológico, que é o principal motivo de abandono nesses quadros.",
  },
  {
    title: "Transtorno do Espectro Autista em adultos",
    desc: "Muitos adultos chegam ao diagnóstico de TEA depois de anos com ansiedade refratária, depressão sem resposta satisfatória, ou simplesmente a sensação de que algo não se encaixa. A avaliação considera a história do desenvolvimento, os padrões de funcionamento e o contexto atual. O plano de cuidado é construído a partir do que faz sentido para aquele perfil.",
  },
  {
    title: "Transtornos de personalidade",
    desc: "Borderline com instabilidade emocional intensa, relações turbulentas e dificuldade crônica de regulação. Personalidade evitativa com isolamento que se aprofunda. O diagnóstico preciso, e principalmente sua distinção de transtornos do humor, define se o tratamento vai ter alguma direção coerente.",
  },
  {
    title: "Estresse pós-traumático e trauma complexo",
    desc: "Memórias que voltam sem aviso, hipervigilância constante, evitação de situações que lembram o que aconteceu. TEPT após eventos únicos. Trauma complexo por exposição prolongada. Quadros que frequentemente chegam mascarados como depressão ou ansiedade generalizada e que respondem a abordagens específicas quando bem identificados.",
  },
  {
    title: "Insônia e transtornos do sono",
    desc: "Insônia crônica que deteriora humor, cognição e capacidade de trabalho ao longo do tempo. Hipersonia. Síndrome das pernas inquietas. O sono costuma ser a primeira coisa a quebrar quando um quadro psiquiátrico começa, e uma das últimas a receber a atenção que merece no tratamento.",
  },
  {
    title: "Transtornos alimentares",
    desc: "Anorexia, bulimia e compulsão alimentar frequentemente coexistem com depressão, ansiedade e TOC. O manejo psiquiátrico nesses casos exige atenção às interações farmacológicas, monitoramento clínico próximo e articulação com outras especialidades.",
  },
  {
    title: "Dependências químicas e comportamentais",
    desc: "Álcool, estimulantes, opioides, benzodiazepínicos, às vezes iniciados como automedicação para ansiedade ou insônia. Jogo patológico. Compulsão sexual. Tratamento sem julgamento, com atenção às comorbidades psiquiátricas que sustentam o uso e acompanhamento nos momentos mais críticos do processo.",
  },
  {
    title: "Demências e Alzheimer",
    desc: "Investigação de queixas cognitivas com o tempo e os instrumentos adequados, porque o diagnóstico precoce muda o prognóstico e o planejamento familiar. Acompanhamento de Alzheimer, demência vascular, demência com corpos de Lewy e demência frontotemporal. Manejo clínico dos sintomas comportamentais: agitação noturna, apatia, agressividade, psicose, delirium sobreposto. Orientação especializada à família e aos cuidadores em cada fase.",
  },
  {
    title: "Depressão, ansiedade e psicose no envelhecimento",
    desc: "No idoso, a depressão frequentemente se apresenta com queixas físicas, lentidão cognitiva e irritabilidade, sem o humor triste que levaria a uma suspeita imediata. A psicose de início tardio exige investigação para afastar causas orgânicas e neurológicas. O envelhecimento altera o metabolismo de praticamente todos os psicofármacos, e a psicogeriatria é a especialidade que leva isso em conta desde a primeira prescrição.",
  },
  {
    title: "Saúde mental corporativa",
    desc: "Programas, consultorias e palestras para empresas que querem lidar com burnout, ansiedade ocupacional e afastamentos com embasamento clínico. Diagnóstico situacional, intervenções com lógica científica e resultados que podem ser acompanhados.",
  },
];

interface ServicesSectionProps {
  showHeader?: boolean;
}

const ServicesSection = ({ showHeader = true }: ServicesSectionProps) => {
  return (
    <section id={showHeader ? "atuacao" : undefined} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-16"
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Áreas de atuação
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight">
              Condições tratadas com <em>profundidade clínica</em>
            </h2>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((a, i) => {
            const cardBg = ["bg-card", "bg-section-alt/60", "bg-salmon/25"][i % 3];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`p-6 md:p-8 ${cardBg}`}
              >
                <h3 className="font-display text-lg md:text-xl font-medium text-foreground mb-3">
                  {a.title}
                </h3>
                <p className="font-body text-sm text-foreground/85 leading-relaxed">
                  {a.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
