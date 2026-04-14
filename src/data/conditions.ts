export interface ConditionFAQ {
  question: string;
  answer: string;
}

export interface ConditionData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  headlineAccent: string;
  subtitle: string;
  intro: string;
  symptoms: string[];
  symptomsTitle: string;
  approachTitle: string;
  approach: string[];
  differentials: string[];
  faq: ConditionFAQ[];
  relatedSlugs: string[];
  tagLabel: string;
}

const WA_LINK =
  "https://wa.me/5531991315958?text=Ol%C3%A1%2C%20vim%20do%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.";

export { WA_LINK };

export const conditions: ConditionData[] = [
  {
    slug: "depressao",
    title: "Depressão",
    tagLabel: "Depressão",
    metaTitle: "Psiquiatra Especialista em Depressão em BH — Dr. João Pedro Castro",
    metaDescription: "Tratamento especializado para depressão, distimia e depressão resistente em Belo Horizonte. Diagnóstico preciso e farmacologia baseada em evidências. CRM 83920.",
    headline: "Depressão não é fraqueza.",
    headlineAccent: "É um quadro clínico que responde a tratamento.",
    subtitle: "Psiquiatra especialista em depressão em Belo Horizonte",
    intro: "Depressão vai além de tristeza. Anedonia, fadiga que não melhora com descanso, lentidão cognitiva, isolamento progressivo, perda de sentido. Quando o quadro se instala, a pessoa muitas vezes não consegue pedir ajuda porque o próprio sintoma tira a energia para isso. A avaliação psiquiátrica identifica o tipo de depressão, investiga causas orgânicas e define o tratamento com a precisão que cada caso exige.",
    symptoms: [
      "Tristeza persistente ou sensação de vazio que dura semanas",
      "Perda de prazer em atividades que antes eram significativas",
      "Fadiga desproporcional ao esforço, mesmo com sono adequado",
      "Alterações de apetite e peso sem causa aparente",
      "Dificuldade de concentração, memória e tomada de decisão",
      "Insônia ou hipersonia que não responde a higiene do sono",
      "Pensamentos de morte ou ideação suicida",
      "Irritabilidade constante sem motivo claro",
    ],
    symptomsTitle: "Quando procurar um psiquiatra para depressão?",
    approachTitle: "Como é o tratamento da depressão",
    approach: [
      "Avaliação clínica detalhada com anamnese de 60 minutos na primeira consulta, investigando histórico pessoal, familiar, tratamentos anteriores e possíveis causas orgânicas.",
      "Solicitação de exames laboratoriais quando indicado: função tireoidiana, vitaminas, hormônios e marcadores inflamatórios que podem simular ou agravar o quadro depressivo.",
      "Escolha farmacológica baseada em evidências, considerando perfil de efeitos colaterais, interações medicamentosas e resposta a tratamentos prévios.",
      "Acompanhamento longitudinal com ajustes progressivos. Depressão resistente demanda estratégias como potencialização, combinação de antidepressivos ou troca de classe terapêutica.",
    ],
    differentials: [
      "Distimia: depressão crônica de baixa intensidade que dura anos sem diagnóstico",
      "Depressão atípica: padrão com hipersonia, hiperfagia e reatividade do humor",
      "Depressão resistente: falha a dois ou mais antidepressivos em dose e tempo adequados",
      "Depressão bipolar: episódios depressivos no contexto de transtorno bipolar, que exigem abordagem farmacológica diferente",
      "Depressão no idoso: apresentação com queixas somáticas e lentidão cognitiva, frequentemente confundida com demência",
    ],
    faq: [
      {
        question: "Quanto tempo leva para o antidepressivo fazer efeito?",
        answer: "A maioria dos antidepressivos leva de 2 a 4 semanas para apresentar efeito terapêutico. O ajuste de dose e a avaliação da resposta são feitos ao longo das primeiras semanas de tratamento.",
      },
      {
        question: "Depressão tem cura ou preciso tomar medicação para sempre?",
        answer: "Depende do quadro. Episódios únicos podem ser tratados por um período definido. Depressão recorrente ou crônica pode exigir tratamento de manutenção prolongado para prevenir recaídas.",
      },
      {
        question: "Qual a diferença entre depressão e tristeza normal?",
        answer: "A tristeza é uma reação emocional esperada diante de perdas e dificuldades. A depressão é um quadro clínico com alterações neurobiológicas que comprometem funcionamento, duram semanas e não melhoram espontaneamente.",
      },
      {
        question: "Antidepressivo causa dependência?",
        answer: "Antidepressivos não causam dependência no sentido farmacológico. Alguns podem causar sintomas de descontinuação se retirados abruptamente, por isso o desmame deve ser orientado pelo psiquiatra.",
      },
    ],
    relatedSlugs: ["ansiedade", "bipolaridade", "insonia", "tdah"],
  },
  {
    slug: "ansiedade",
    title: "Ansiedade",
    tagLabel: "Ansiedade, Pânico e TOC",
    metaTitle: "Psiquiatra Especialista em Ansiedade em BH — Dr. João Pedro Castro",
    metaDescription: "Tratamento de ansiedade generalizada, pânico, fobia social e TOC em Belo Horizonte. Abordagem com diagnóstico preciso e farmacologia baseada em evidências.",
    headline: "Ansiedade deixa de ser adaptativa",
    headlineAccent: "quando paralisa em vez de proteger.",
    subtitle: "Psiquiatra especialista em ansiedade em Belo Horizonte",
    intro: "Preocupação que não desliga, sensação de que algo ruim vai acontecer sem motivo concreto, taquicardia e falta de ar que parecem ataque cardíaco. A ansiedade patológica sequestra a capacidade de funcionar. O diagnóstico diferencial entre ansiedade generalizada, pânico, fobia social, TOC e outras apresentações é o que define se o tratamento vai funcionar.",
    symptoms: [
      "Preocupação excessiva e incontrolável sobre múltiplos assuntos",
      "Crises de pânico com sintomas físicos intensos (taquicardia, falta de ar, formigamento)",
      "Evitação de situações sociais ou de desempenho por medo de julgamento",
      "Pensamentos intrusivos repetitivos com rituais para aliviar a angústia (TOC)",
      "Tensão muscular crônica, bruxismo, dores de cabeça tensionais",
      "Dificuldade para dormir por excesso de pensamentos",
      "Irritabilidade desproporcional ao contexto",
      "Sensação constante de estar no limite, mesmo em dias tranquilos",
    ],
    symptomsTitle: "Quando procurar um psiquiatra para ansiedade?",
    approachTitle: "Como é o tratamento da ansiedade",
    approach: [
      "Avaliação clínica que diferencia o tipo de quadro ansioso: ansiedade generalizada, pânico, fobia social, TOC, ansiedade de saúde ou estresse pós-traumático.",
      "Investigação de causas orgânicas: hipertireoidismo, arritmias, uso de substâncias e medicamentos que podem mimetizar ou agravar ansiedade.",
      "Farmacoterapia quando indicada, com ISRS, ISRN ou outras classes de acordo com o quadro específico, perfil do paciente e tolerabilidade.",
      "Acompanhamento estruturado para avaliar resposta, ajustar doses e orientar sobre o tempo de tratamento necessário para cada caso.",
    ],
    differentials: [
      "Transtorno de ansiedade generalizada (TAG): preocupação crônica e difusa",
      "Transtorno de pânico: crises agudas com medo de morrer ou enlouquecer",
      "Fobia social: medo intenso de exposição e julgamento",
      "TOC: pensamentos intrusivos com compulsões ritualizadas",
      "Ansiedade de saúde (hipocondria): medo persistente de ter doença grave",
    ],
    faq: [
      {
        question: "Ansiedade tem cura?",
        answer: "Transtornos de ansiedade são tratáveis e a maioria dos pacientes apresenta melhora significativa com tratamento adequado. Em muitos casos, é possível suspender a medicação após período de estabilização.",
      },
      {
        question: "Como diferenciar ansiedade normal de transtorno de ansiedade?",
        answer: "A ansiedade normal é proporcional à situação e cessa quando o estressor passa. O transtorno de ansiedade é desproporcional, persistente e compromete o funcionamento da pessoa no dia a dia.",
      },
      {
        question: "Crise de pânico é perigosa?",
        answer: "A crise de pânico em si não oferece risco de vida, embora os sintomas físicos sejam intensos e assustadores. O tratamento adequado reduz frequência e intensidade das crises de forma significativa.",
      },
      {
        question: "Preciso tomar medicação para ansiedade ou psicoterapia resolve?",
        answer: "Depende da gravidade. Quadros leves podem responder apenas a psicoterapia. Quadros moderados a graves geralmente se beneficiam da combinação de medicação e psicoterapia.",
      },
    ],
    relatedSlugs: ["depressao", "insonia", "tdah", "estresse-pos-traumatico"],
  },
  {
    slug: "tdah",
    title: "TDAH",
    tagLabel: "TDAH em Adultos",
    metaTitle: "Psiquiatra Especialista em TDAH em BH — Dr. João Pedro Castro",
    metaDescription: "Diagnóstico e tratamento de TDAH em adultos em Belo Horizonte. Avaliação clínica criteriosa com diagnóstico diferencial preciso. CRM 83920.",
    headline: "TDAH em adultos não é falta de vontade.",
    headlineAccent: "É neurobiologia que responde a tratamento.",
    subtitle: "Psiquiatra especialista em TDAH em Belo Horizonte",
    intro: "Procrastinação crônica, dificuldade de terminar o que começou, impulsividade em decisões e instabilidade emocional que não se encaixa em depressão nem em bipolaridade. O TDAH em adultos é subdiagnosticado porque muitos profissionais ainda associam o transtorno à hiperatividade infantil. O diagnóstico diferencial é o passo mais importante: TDAH, ansiedade, bipolaridade e burnout podem se parecer muito, mas o tratamento é completamente diferente.",
    symptoms: [
      "Dificuldade crônica de manter atenção em tarefas que exigem esforço mental sustentado",
      "Procrastinação persistente, mesmo em assuntos importantes",
      "Dificuldade de organização, planejamento e gestão do tempo",
      "Impulsividade em decisões financeiras, afetivas ou profissionais",
      "Sensação constante de funcionar abaixo do potencial",
      "Instabilidade emocional com reatividade intensa a frustrações",
      "Dificuldade de concluir projetos e cumprir prazos",
      "Esquecimentos frequentes em compromissos e tarefas do cotidiano",
    ],
    symptomsTitle: "Quando procurar um psiquiatra para TDAH?",
    approachTitle: "Como é a avaliação de TDAH em adultos",
    approach: [
      "Avaliação clínica detalhada com investigação da história de desenvolvimento, funcionamento escolar, profissional e relacional ao longo da vida.",
      "Diagnóstico diferencial rigoroso: TDAH pode coexistir com ansiedade, depressão e bipolaridade, e a sobreposição de sintomas é a principal fonte de erro diagnóstico.",
      "Quando indicado, farmacoterapia com estimulantes ou não-estimulantes, com monitoramento de resposta, tolerabilidade e ajustes progressivos.",
      "Orientação sobre estratégias de organização e funcionamento executivo como complemento ao tratamento farmacológico.",
    ],
    differentials: [
      "TDAH predominantemente desatento: sem hiperatividade evidente, mais comum em mulheres",
      "TDAH combinado: desatenção e hiperatividade/impulsividade",
      "TDAH com comorbidades: ansiedade, depressão, transtornos de personalidade coexistentes",
      "Diagnóstico diferencial com bipolaridade tipo II, burnout e transtornos de ansiedade",
    ],
    faq: [
      {
        question: "TDAH pode ser diagnosticado na vida adulta?",
        answer: "Sim. Muitos adultos recebem o diagnóstico tardiamente, especialmente quando o subtipo é predominantemente desatento e não houve hiperatividade evidente na infância.",
      },
      {
        question: "Ritalina causa dependência?",
        answer: "Metilfenidato e outros estimulantes, quando usados em dose terapêutica e com acompanhamento, não causam dependência. O tratamento adequado do TDAH na verdade reduz o risco de abuso de substâncias.",
      },
      {
        question: "Como diferenciar TDAH de ansiedade?",
        answer: "A desatenção no TDAH é crônica e está presente desde a infância. Na ansiedade, a dificuldade de concentração é proporcional ao nível de preocupação e tende a flutuar. Os dois quadros podem coexistir.",
      },
      {
        question: "Preciso de teste neuropsicológico para diagnóstico de TDAH?",
        answer: "O diagnóstico de TDAH é clínico. Testes neuropsicológicos podem complementar a avaliação em casos de dúvida, mas não são obrigatórios nem suficientes isoladamente.",
      },
    ],
    relatedSlugs: ["ansiedade", "depressao", "insonia", "bipolaridade"],
  },
  {
    slug: "bipolaridade",
    title: "Transtorno Bipolar",
    tagLabel: "Transtorno Bipolar",
    metaTitle: "Psiquiatra Especialista em Bipolaridade em BH — Dr. João Pedro Castro",
    metaDescription: "Diagnóstico e tratamento de transtorno bipolar tipo I, II e ciclotimia em Belo Horizonte. Farmacologia baseada em evidências. CRM 83920.",
    headline: "Bipolaridade não é só variação de humor.",
    headlineAccent: "É um padrão que muda o tratamento por completo.",
    subtitle: "Psiquiatra especialista em transtorno bipolar em Belo Horizonte",
    intro: "Períodos de energia e produtividade que viram impulsividade e arrependimento. Quedas que imobilizam por semanas. Bipolar tipo II com hipomanias tão sutis que passam anos sem diagnóstico, tratadas como depressão unipolar sem resultado. O diagnóstico diferencial preciso aqui não é um detalhe: é o que define se o tratamento vai funcionar ou piorar o quadro.",
    symptoms: [
      "Oscilações de humor que vão de euforia ou irritabilidade intensa a depressão profunda",
      "Períodos de energia excessiva, redução da necessidade de sono e aumento de atividades",
      "Impulsividade em gastos, decisões profissionais ou relações afetivas",
      "Episódios depressivos graves que não respondem a antidepressivos convencionais",
      "Hipomanias sutis: períodos de produtividade acima do habitual sem percepção de alteração",
      "Irritabilidade desproporcional e reatividade emocional intensa",
      "Ciclagem entre estados que compromete relações, trabalho e autoestima",
      "Histórico familiar de bipolaridade ou suicídio",
    ],
    symptomsTitle: "Quando suspeitar de transtorno bipolar?",
    approachTitle: "Como é o tratamento do transtorno bipolar",
    approach: [
      "Avaliação longitudinal do humor, identificando padrões de ciclagem e episódios anteriores que podem ter passado despercebidos.",
      "Diagnóstico diferencial com depressão unipolar, TDAH, transtornos de personalidade e efeitos de substâncias.",
      "Farmacoterapia com estabilizadores de humor como base do tratamento, com critério rigoroso para uso de antidepressivos.",
      "Acompanhamento próximo com foco em prevenção de novos episódios e manutenção da funcionalidade.",
    ],
    differentials: [
      "Bipolar tipo I: episódios maníacos com impacto funcional significativo",
      "Bipolar tipo II: hipomanias sutis e episódios depressivos predominantes",
      "Ciclotimia: oscilações crônicas de menor intensidade",
      "Diagnóstico diferencial com TDAH, borderline e depressão unipolar",
    ],
    faq: [
      {
        question: "Qual a diferença entre bipolar tipo I e tipo II?",
        answer: "No tipo I, há episódios de mania franca com prejuízo funcional significativo. No tipo II, as elevações de humor são mais sutis (hipomanias) e o quadro depressivo costuma predominar.",
      },
      {
        question: "Bipolar pode tomar antidepressivo?",
        answer: "Antidepressivos em monoterapia podem piorar o quadro bipolar, induzindo ciclagem ou mania. Quando indicados, devem ser usados com cautela e sempre associados a um estabilizador de humor.",
      },
      {
        question: "Bipolaridade tem cura?",
        answer: "O transtorno bipolar é crônico, mas tratável. Com diagnóstico correto e adesão ao tratamento, a maioria dos pacientes consegue estabilidade e qualidade de vida significativa.",
      },
      {
        question: "Como saber se é bipolaridade ou só estresse?",
        answer: "A bipolaridade envolve padrões cíclicos de alteração de humor com impacto funcional. A avaliação psiquiátrica investiga duração, intensidade e padrão dos episódios ao longo do tempo.",
      },
    ],
    relatedSlugs: ["depressao", "tdah", "ansiedade", "insonia"],
  },
  {
    slug: "alzheimer",
    title: "Alzheimer e Demências",
    tagLabel: "Psicogeriatria",
    metaTitle: "Psicogeriatra Especialista em Alzheimer em BH — Dr. João Pedro Castro",
    metaDescription: "Avaliação e acompanhamento de Alzheimer, demências e declínio cognitivo em Belo Horizonte. Psicogeriatria com diagnóstico preciso e suporte familiar.",
    headline: "Declínio cognitivo merece investigação,",
    headlineAccent: "não apenas observação.",
    subtitle: "Psicogeriatra especialista em Alzheimer e demências em Belo Horizonte",
    intro: "Esquecimentos que passam de \"normal da idade\" para algo que preocupa a família. Mudanças de personalidade no idoso que ninguém esperava. Agitação noturna, apatia, agressividade que aparecem sem explicação aparente. O diagnóstico precoce de demência muda o prognóstico, o planejamento familiar e a qualidade de vida de quem está ao redor. A psicogeriatria é a especialidade que investiga esses quadros com o tempo e os instrumentos que eles exigem.",
    symptoms: [
      "Esquecimentos progressivos que comprometem atividades do dia a dia",
      "Dificuldade para realizar tarefas que antes eram automáticas",
      "Desorientação em locais conhecidos ou confusão com datas",
      "Mudanças de personalidade: apatia, irritabilidade, desinibição",
      "Agitação noturna, insônia ou inversão do ciclo sono-vigília",
      "Dificuldade de linguagem: não encontrar palavras, perder o fio da conversa",
      "Agressividade sem motivo aparente em pessoa que nunca foi assim",
      "Perda de peso, recusa alimentar ou negligência com autocuidado",
    ],
    symptomsTitle: "Quando procurar um psicogeriatra?",
    approachTitle: "Como é a avaliação de demências",
    approach: [
      "Avaliação cognitiva estruturada com instrumentos validados, incluindo rastreio de memória, função executiva, linguagem e orientação visuoespacial.",
      "Investigação de causas reversíveis de declínio cognitivo: hipotireoidismo, deficiência de B12, neurossífilis, hidrocefalia de pressão normal.",
      "Diagnóstico diferencial entre Alzheimer, demência vascular, demência com corpos de Lewy e demência frontotemporal.",
      "Manejo dos sintomas neuropsiquiátricos (agitação, psicose, apatia, insônia) com atenção à segurança e tolerabilidade no idoso.",
      "Orientação à família e cuidadores sobre expectativas, planejamento de cuidados e manejo de situações críticas em cada fase da doença.",
    ],
    differentials: [
      "Doença de Alzheimer: perda progressiva de memória episódica como sintoma inicial",
      "Demência vascular: declínio em degraus, associado a fatores cardiovasculares",
      "Demência com corpos de Lewy: flutuações cognitivas, alucinações visuais, parkinsonismo",
      "Demência frontotemporal: mudanças precoces de personalidade e comportamento",
      "Comprometimento cognitivo leve (CCL): declínio acima do esperado, sem preencher critérios para demência",
    ],
    faq: [
      {
        question: "Esquecimento sempre é sinal de Alzheimer?",
        answer: "Não. Esquecimentos podem ter causas tratáveis como depressão, hipotireoidismo, deficiência vitamínica ou efeitos de medicamentos. A avaliação diferencia o que é envelhecimento normal do que é patológico.",
      },
      {
        question: "Alzheimer tem cura?",
        answer: "Atualmente não há cura, mas o diagnóstico precoce permite intervenções que retardam a progressão, melhoram qualidade de vida e permitem planejamento familiar e jurídico adequado.",
      },
      {
        question: "O que é consulta domiciliar em psicogeriatria?",
        answer: "Pacientes com dificuldade de deslocamento, quadros avançados ou necessidade de avaliação do ambiente doméstico podem ser atendidos em casa, com a mesma qualidade e profundidade da consulta presencial.",
      },
      {
        question: "Quando a família deve procurar um psicogeriatra?",
        answer: "Quando há queixas cognitivas progressivas, mudanças de comportamento no idoso, agitação, apatia ou qualquer suspeita de que algo mudou no funcionamento mental de alguém que está envelhecendo.",
      },
    ],
    relatedSlugs: ["depressao", "insonia", "ansiedade"],
  },
  {
    slug: "insonia",
    title: "Insônia",
    tagLabel: "Insônia e Sono",
    metaTitle: "Psiquiatra Especialista em Insônia em BH — Dr. João Pedro Castro",
    metaDescription: "Tratamento de insônia crônica e transtornos do sono em Belo Horizonte. Avaliação psiquiátrica com abordagem baseada em evidências. CRM 83920.",
    headline: "Insônia crônica não é só dormir mal.",
    headlineAccent: "É um sinal de que algo precisa ser investigado.",
    subtitle: "Psiquiatra especialista em insônia em Belo Horizonte",
    intro: "O sono costuma ser a primeira coisa a quebrar quando um quadro psiquiátrico começa — e uma das últimas a receber a atenção que merece no tratamento. Insônia crônica deteriora humor, cognição e capacidade de trabalho ao longo do tempo. A avaliação psiquiátrica investiga o que está por trás da insônia antes de simplesmente prescrever um indutor de sono.",
    symptoms: [
      "Dificuldade para iniciar o sono, mesmo com cansaço",
      "Despertares frequentes durante a noite sem conseguir retomar o sono",
      "Despertar precoce (acordar de madrugada sem voltar a dormir)",
      "Sono não-reparador: acordar cansado apesar de horas suficientes",
      "Dependência de medicamentos para dormir sem investigação da causa",
      "Sonolência diurna excessiva que compromete funcionamento",
      "Irritabilidade, dificuldade de concentração e lapsos de memória por privação de sono",
      "Piora de sintomas psiquiátricos preexistentes associada à insônia",
    ],
    symptomsTitle: "Quando procurar um psiquiatra para insônia?",
    approachTitle: "Como é o tratamento da insônia",
    approach: [
      "Avaliação detalhada do padrão de sono: horários, rituais, uso de substâncias, higiene do sono e fatores ambientais.",
      "Investigação de comorbidades psiquiátricas que causam ou mantêm a insônia: depressão, ansiedade, TDAH, bipolaridade, TEPT.",
      "Revisão de medicamentos em uso que podem afetar o sono: estimulantes, corticoides, betabloqueadores, entre outros.",
      "Farmacoterapia racional, evitando dependência de benzodiazepínicos e priorizando abordagens com evidência para insônia crônica.",
    ],
    differentials: [
      "Insônia primária: dificuldade de sono sem causa psiquiátrica ou orgânica identificável",
      "Insônia comórbida: secundária a depressão, ansiedade ou outros transtornos",
      "Síndrome das pernas inquietas: desconforto nos membros que impede o início do sono",
      "Apneia obstrutiva do sono: pausas respiratórias que fragmentam o sono sem que a pessoa perceba",
      "Hipersonia: sonolência excessiva que pode indicar depressão ou outras condições",
    ],
    faq: [
      {
        question: "Insônia crônica precisa de medicação?",
        answer: "Nem sempre. A avaliação identifica a causa e define a abordagem: pode incluir mudanças comportamentais, tratamento da causa subjacente ou farmacoterapia específica quando indicada.",
      },
      {
        question: "Tomar remédio para dormir todo dia é perigoso?",
        answer: "Depende do tipo de medicamento. Benzodiazepínicos usados cronicamente oferecem risco de dependência e tolerância. Existem alternativas com melhor perfil de segurança para uso prolongado.",
      },
      {
        question: "Melatonina funciona para insônia?",
        answer: "A evidência para melatonina é limitada na insônia crônica de adultos. Pode ter utilidade em situações específicas como jet lag ou alterações do ritmo circadiano, mas não substitui avaliação da causa.",
      },
      {
        question: "Insônia pode causar problemas de saúde?",
        answer: "Sim. Insônia crônica está associada a aumento de risco cardiovascular, piora de quadros psiquiátricos, comprometimento cognitivo e redução da qualidade de vida.",
      },
    ],
    relatedSlugs: ["depressao", "ansiedade", "tdah", "alzheimer"],
  },
  {
    slug: "estresse-pos-traumatico",
    title: "Estresse Pós-Traumático",
    tagLabel: "TEPT e Trauma",
    metaTitle: "Psiquiatra Especialista em TEPT em BH — Dr. João Pedro Castro",
    metaDescription: "Tratamento de estresse pós-traumático e trauma complexo em Belo Horizonte. Diagnóstico preciso e abordagem baseada em evidências. CRM 83920.",
    headline: "Trauma não é só lembrança.",
    headlineAccent: "É um quadro que altera o funcionamento do cérebro.",
    subtitle: "Psiquiatra especialista em estresse pós-traumático em Belo Horizonte",
    intro: "Memórias que voltam sem aviso, hipervigilância constante, evitação de situações que lembram o que aconteceu. O TEPT frequentemente chega mascarado como depressão ou ansiedade generalizada, e a pessoa pode passar anos em tratamento sem que o trauma seja reconhecido como causa. Quando bem identificado, o quadro responde a abordagens específicas.",
    symptoms: [
      "Revivências intrusivas: flashbacks, pesadelos ou memórias que voltam sem aviso",
      "Hipervigilância: estado constante de alerta, sobressalto fácil",
      "Evitação de pessoas, lugares ou situações que lembram o evento traumático",
      "Entorpecimento emocional: dificuldade de sentir prazer ou conexão",
      "Irritabilidade intensa, explosões de raiva desproporcional",
      "Dificuldade de concentração e insônia por hiperativação",
      "Sentimento de culpa, vergonha ou autoculpabilização persistente",
      "Dissociação: sensação de estar desconectado de si mesmo ou do ambiente",
    ],
    symptomsTitle: "Quando procurar um psiquiatra para trauma?",
    approachTitle: "Como é o tratamento do TEPT",
    approach: [
      "Avaliação clínica com investigação detalhada da história de exposição a traumas, respeitando o ritmo do paciente.",
      "Diagnóstico diferencial: TEPT pode coexistir com depressão, ansiedade, uso de substâncias e transtornos de personalidade.",
      "Farmacoterapia baseada em evidências: ISRS como primeira linha, com manejo específico para insônia, pesadelos e hiperativação.",
      "Articulação com psicoterapia focada em trauma como parte fundamental do plano de tratamento.",
    ],
    differentials: [
      "TEPT clássico: após evento traumático único e identificável",
      "Trauma complexo (TEPT complexo): exposição prolongada a traumas repetidos, frequentemente na infância",
      "Transtorno de ajustamento: reação desproporcional a estressor, sem preencher critérios completos para TEPT",
      "Diagnóstico diferencial com ansiedade generalizada, depressão e borderline",
    ],
    faq: [
      {
        question: "Quanto tempo depois de um trauma o TEPT pode aparecer?",
        answer: "Os sintomas podem surgir semanas, meses ou até anos após o evento traumático. O diagnóstico exige que os sintomas persistam por mais de um mês e comprometam o funcionamento.",
      },
      {
        question: "TEPT tem cura?",
        answer: "A maioria dos pacientes com TEPT apresenta melhora significativa com tratamento adequado. A combinação de farmacoterapia e psicoterapia focada em trauma tem a melhor evidência.",
      },
      {
        question: "Preciso contar tudo o que aconteceu na primeira consulta?",
        answer: "Não. A avaliação respeita o ritmo do paciente. O importante na primeira consulta é entender o quadro atual, os sintomas e o impacto no funcionamento.",
      },
    ],
    relatedSlugs: ["depressao", "ansiedade", "insonia"],
  },
];

export function getConditionBySlug(slug: string): ConditionData | undefined {
  return conditions.find((c) => c.slug === slug);
}
