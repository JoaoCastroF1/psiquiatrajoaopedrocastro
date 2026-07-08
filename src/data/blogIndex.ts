export type BlogTag =
  | "TDAH"
  | "Ansiedade"
  | "Depressão"
  | "Sono"
  | "Trauma"
  | "Psicogeriatria"
  | "Psiquiatria"
  | "Saúde Mental"
  | "Saúde da Mulher"
  | "Transtorno Bipolar"
  | "Dependência"
  | "Tratamento"
  | "Psicoeducação"
  | "Evidência Científica"
  | "Psicofarmacologia";

export interface BlogPostMeta {
  slug: string;
  tag: BlogTag;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  excerpt: string;
  date: string;
  lastModified?: string;
  readTime: string;
  image?: string;
  keywords?: string[];
}

// Metadados de todos os posts, sem o corpo dos artigos. Consumidores de
// listagem (rotas, sitemap, home, hubs) importam daqui para nao carregar
// o conteudo completo do blog no bundle de todas as paginas.
export const blogIndex: BlogPostMeta[] = [
  {
    "slug": "reembolso-plano-de-saude-psiquiatra",
    "tag": "Tratamento",
    "title": "Reembolso de consulta psiquiátrica pelo plano de saúde: como funciona em cada operadora",
    "metaTitle": "Reembolso de psiquiatra pelo plano de saúde: guia 2026",
    "metaDescription": "Atendimento particular com reembolso pelo plano de saúde. Nota fiscal, documentação, prazos e regras de Unimed, Bradesco, Amil, SulAmérica, IPSEMG, Cassi e outros.",
    "excerpt": "Atendimento particular não significa pagar tudo do bolso. A maior parte dos planos reembolsa, e a documentação central é a nota fiscal eletrônica. Como pedir, o que cada plano exige, o que evita a glosa e como usar o gasto na declaração do imposto de renda.",
    "date": "06 Mai 2026",
    "readTime": "11 min de leitura",
    "keywords": [
      "reembolso psiquiatra plano de saúde",
      "consulta psiquiátrica reembolso unimed",
      "reembolso bradesco psiquiatra",
      "reembolso amil psiquiatra",
      "reembolso sulamérica psiquiatra",
      "reembolso ipsemg consulta",
      "reembolso cassi consulta médica",
      "nota fiscal consulta psiquiatra",
      "receita saúde recibo médico",
      "deduzir consulta psiquiatra imposto de renda",
      "como pedir reembolso plano de saúde",
      "psiquiatra particular belo horizonte"
    ]
  },
  {
    "slug": "nota-fiscal-psiquiatra-restituicao-irpf",
    "tag": "Tratamento",
    "title": "Como deduzir a consulta com psiquiatra no imposto de renda: nota fiscal, restituição e malha fina",
    "metaTitle": "Consulta com psiquiatra na declaração do imposto de renda",
    "metaDescription": "Despesas com psiquiatra são dedutíveis sem teto na declaração completa. Como usar nota fiscal e Receita Saúde, descontar reembolso do plano e evitar malha fina.",
    "excerpt": "Tratamento psiquiátrico particular é uma das despesas mais bem tratadas pela legislação tributária brasileira. Como declarar, o que descontar do reembolso, e quanto isso muda no custo efetivo do tratamento.",
    "date": "06 Mai 2026",
    "readTime": "10 min de leitura",
    "keywords": [
      "consulta psiquiatra imposto de renda",
      "deduzir psiquiatra IRPF",
      "nota fiscal psiquiatra restituição",
      "psiquiatra dedução imposto de renda",
      "despesa médica dedução IR",
      "psiquiatra IRPF 2026",
      "saúde mental imposto de renda",
      "como declarar psiquiatra no IR",
      "DMED psiquiatra",
      "Receita Saúde recibo médico"
    ]
  },
  {
    "slug": "tdah-adultos-diferenciar-ansiedade-depressao",
    "tag": "TDAH",
    "title": "TDAH em adultos: como diferenciar de ansiedade, depressão ou só falta de foco",
    "metaTitle": "TDAH em adultos: como diferenciar de ansiedade e depressão",
    "metaDescription": "Procrastinação e falta de foco nem sempre são TDAH. Como o psiquiatra diferencia TDAH adulto de ansiedade, depressão e bipolaridade, e como é o diagnóstico.",
    "keywords": [
      "TDAH em adultos",
      "TDAH adulto sintomas",
      "TDAH ou ansiedade",
      "TDAH ou depressão",
      "diagnóstico TDAH adulto",
      "disfunção executiva",
      "hiperfoco",
      "TDAH tratamento adulto",
      "psiquiatra TDAH belo horizonte"
    ],
    "excerpt": "Procrastinação, mente acelerada e dificuldade de concentração nem sempre são TDAH. O que separa o quadro de ansiedade, depressão e cansaço crônico.",
    "date": "02 Mai 2026",
    "readTime": "9 min de leitura"
  },
  {
    "slug": "depressao-ou-tristeza",
    "tag": "Depressão",
    "title": "Depressão ou tristeza passageira? Como saber e quando procurar um psiquiatra",
    "metaTitle": "Depressão ou tristeza: como diferenciar e quando tratar",
    "metaDescription": "Tristeza cede em dias; depressão persiste por semanas, derruba sono, apetite e funcionamento. Os critérios clínicos que separam os dois quadros e quando procurar ajuda.",
    "keywords": [
      "depressão ou tristeza",
      "como saber se estou com depressão",
      "sintomas de depressão",
      "tristeza profunda",
      "depressão sem choro",
      "luto ou depressão",
      "quando procurar psiquiatra depressão"
    ],
    "excerpt": "Tristeza prolongada nem sempre é depressão. E depressão nem sempre vem com choro. Entenda os sinais que separam o luto comum do quadro clínico.",
    "date": "20 Mar 2026",
    "readTime": "6 min de leitura"
  },
  {
    "slug": "o-que-e-psicogeriatria",
    "tag": "Psicogeriatria",
    "title": "O que é psicogeriatria e por que ela importa depois dos 60",
    "metaTitle": "Psicogeriatria: o que é e quando procurar",
    "metaDescription": "Psicogeriatria é a psiquiatria do idoso: depressão que parece demência, medicação em dose certa para o cérebro envelhecido e manejo dos sintomas das demências.",
    "keywords": [
      "psicogeriatria",
      "psiquiatra geriátrico",
      "psiquiatra para idoso",
      "depressão no idoso",
      "pseudodemência depressiva",
      "sintomas comportamentais demência",
      "psicogeriatra belo horizonte"
    ],
    "excerpt": "O cérebro envelhecido funciona diferente: muda como sente, como responde à medicação e como adoece. A psicogeriatria existe para tratar essas diferenças.",
    "date": "15 Mar 2026",
    "readTime": "7 min de leitura"
  },
  {
    "slug": "insonia-cronica-saude-mental",
    "tag": "Sono",
    "title": "Insônia crônica e saúde mental: o que veio primeiro?",
    "metaTitle": "Insônia crônica: causas, riscos e tratamento",
    "metaDescription": "Insônia crônica atinge 10 a 15% dos adultos e dobra o risco de depressão. Por que a TCC-I é o tratamento de primeira linha e quando a medicação entra.",
    "keywords": [
      "insônia crônica",
      "insônia e depressão",
      "insônia e ansiedade",
      "tratamento insônia",
      "TCC-I",
      "remédio para dormir",
      "não consigo dormir",
      "psiquiatra insônia"
    ],
    "excerpt": "Insônia costuma ser o primeiro sinal de que algo está fora de eixo, e o último a ser tratado a sério. Por que o sono merece atenção clínica dedicada.",
    "date": "05 Mar 2026",
    "readTime": "5 min de leitura"
  },
  {
    "slug": "ansiedade-no-vestibular",
    "tag": "Ansiedade",
    "title": "Ansiedade no vestibular: quando é só pressão e quando é quadro clínico",
    "metaTitle": "Ansiedade no vestibular: quando procurar ajuda",
    "metaDescription": "Nervosismo pré-prova é esperado. Quando a ansiedade trava o raciocínio, rouba o sono e derruba o desempenho do vestibulando, pode haver quadro clínico tratável.",
    "keywords": [
      "ansiedade no vestibular",
      "ansiedade de prova",
      "branco na prova",
      "vestibulando ansiedade",
      "ansiedade enem",
      "psiquiatra para vestibulando"
    ],
    "excerpt": "Nervoso antes da prova é esperado. Quando a ansiedade trava o raciocínio, rouba o sono e paralisa a rotina, pode existir um quadro que merece avaliação.",
    "date": "02 Abr 2026",
    "readTime": "7 min de leitura"
  },
  {
    "slug": "bipolaridade-ciclagem-rapida",
    "tag": "Transtorno Bipolar",
    "title": "Ciclagem rápida no transtorno bipolar: o subtipo que mais engana o diagnóstico",
    "metaDescription": "Bipolares com ciclagem rápida alternam mania e depressão em dias. Padrão confundido com TAG, depressão maior ou borderline.",
    "excerpt": "Alguns pacientes bipolares alternam entre mania e depressão em dias ou horas, não em meses. Entenda esse padrão e por que ele costuma ser confundido com outros quadros.",
    "date": "28 Mar 2026",
    "readTime": "7 min de leitura"
  },
  {
    "slug": "comportamento-impulsivo-regulacao-emocional",
    "tag": "Saúde Mental",
    "title": "Comportamento impulsivo e desregulação emocional: temperamento ou diagnóstico?",
    "metaTitle": "Impulsividade e desregulação emocional: quando é diagnóstico",
    "metaDescription": "Explosões de raiva, compras impulsivas, decisões sem freio. Quando a impulsividade é traço de temperamento e quando indica TDAH, bipolaridade ou borderline.",
    "keywords": [
      "impulsividade",
      "desregulação emocional",
      "explosão de raiva",
      "descontrole emocional",
      "impulsividade tratamento",
      "transtorno explosivo intermitente"
    ],
    "excerpt": "Explodir de raiva, comprar sem pensar, agir sem medir consequência. Às vezes é jeito de ser. Às vezes é quadro clínico que se beneficia de tratamento.",
    "date": "25 Mar 2026",
    "readTime": "6 min de leitura"
  },
  {
    "slug": "medicacao-psiquiatrica-gravidez",
    "tag": "Saúde da Mulher",
    "title": "Medicação psiquiátrica na gravidez: o que as evidências dizem sobre risco e benefício",
    "metaTitle": "Antidepressivo na gravidez: riscos e evidências",
    "metaDescription": "Parar antidepressivo na gravidez por medo pode expor mãe e bebê a risco maior que o de continuar. O que os dados mostram sobre ISRS, gestação e amamentação.",
    "keywords": [
      "antidepressivo na gravidez",
      "medicação psiquiátrica gravidez",
      "sertralina gravidez",
      "grávida pode tomar antidepressivo",
      "depressão na gravidez",
      "antidepressivo amamentação",
      "psiquiatra gestante"
    ],
    "excerpt": "Parar antidepressivo ou ansiolítico na gravidez por medo pode expor mãe e bebê a um risco maior do que o de continuar. O que dizem os dados.",
    "date": "22 Mar 2026",
    "readTime": "8 min de leitura"
  },
  {
    "slug": "transtorno-adaptativo-estresse",
    "tag": "Saúde Mental",
    "title": "Transtorno adaptativo: quando a reação ao estresse vira diagnóstico",
    "metaTitle": "Transtorno adaptativo: sintomas e tratamento",
    "metaDescription": "Demissão, divórcio, luto. Quando a reação ao estressor persiste além do esperado e compromete o funcionamento, pode ser transtorno adaptativo, que tem tratamento.",
    "keywords": [
      "transtorno adaptativo",
      "transtorno de ajustamento",
      "estresse crise",
      "reação ao estresse",
      "tristeza após demissão",
      "sofrimento após separação"
    ],
    "excerpt": "Demissão, divórcio, luto. Reagir com tristeza e ansiedade é esperado. Quando a reação persiste e atrapalha o funcionamento, pode ser transtorno adaptativo.",
    "date": "18 Mar 2026",
    "readTime": "6 min de leitura"
  },
  {
    "slug": "uso-substancias-saude-mental",
    "tag": "Dependência",
    "title": "Álcool e outras substâncias: a automedicação de transtornos mentais que ninguém diagnosticou",
    "metaTitle": "Álcool como automedicação: a ligação com ansiedade e depressão",
    "metaDescription": "Boa parte do uso crônico de álcool e outras drogas é tentativa de tratar ansiedade, depressão ou TDAH sem diagnóstico. Como funciona a sobreposição e o tratamento.",
    "keywords": [
      "álcool e ansiedade",
      "álcool e depressão",
      "automedicação álcool",
      "dependência química tratamento",
      "beber para dormir",
      "uso de substâncias saúde mental",
      "psiquiatra dependência"
    ],
    "excerpt": "Boa parte dos usuários crônicos de álcool ou outras drogas está tentando tratar depressão, ansiedade ou TDAH por conta própria. Entenda a sobreposição.",
    "date": "12 Mar 2026",
    "readTime": "7 min de leitura"
  },
  {
    "slug": "transtorno-sono-paradoxal",
    "tag": "Sono",
    "title": "Comportamento durante REM: transtornos do sono que precisam de investigação",
    "metaTitle": "Transtornos do sono REM: pesadelos e movimentos anormais",
    "metaDescription": "Pesadelos recorrentes, gritos e movimentos agressivos durante o sono podem indicar transtorno comportamental do REM, que merece investigação especializada.",
    "keywords": [
      "transtorno comportamental do sono REM",
      "pesadelos recorrentes",
      "falar dormindo",
      "movimentos durante o sono",
      "acordar gritando",
      "polissonografia"
    ],
    "excerpt": "Pesadelo recorrente, movimento agressivo durante o sono, acordar gritando assustado. Conheça os transtornos da fase REM e quando investigar.",
    "date": "08 Mar 2026",
    "readTime": "6 min de leitura"
  },
  {
    "slug": "fobia-social-timidez",
    "tag": "Ansiedade",
    "title": "Timidez ou fobia social? A diferença entre traço de personalidade e transtorno",
    "metaTitle": "Fobia social ou timidez: como diferenciar e tratar",
    "metaDescription": "Timidez é temperamento; fobia social é medo intenso que faz evitar apresentações, entrevistas e convívio, com prejuízo real. A diferença clínica e o tratamento.",
    "keywords": [
      "fobia social",
      "transtorno de ansiedade social",
      "timidez excessiva",
      "medo de falar em público",
      "fobia social tratamento",
      "fobia social ou timidez"
    ],
    "excerpt": "Ser introvertido e tímido é temperamento. Evitar situação social por medo intenso a ponto de perder oportunidades é transtorno, e tem tratamento eficaz.",
    "date": "06 Mar 2026",
    "readTime": "7 min de leitura"
  },
  {
    "slug": "automutilacao-nao-suicida",
    "tag": "Saúde Mental",
    "title": "Autolesão não suicida: o que está por trás de quem machuca o próprio corpo",
    "metaTitle": "Autolesão: por que acontece e como ajudar",
    "metaDescription": "Autolesão não suicida costuma ser tentativa de regular dor emocional intensa, não busca de atenção. O que está por trás do comportamento e como o tratamento age.",
    "keywords": [
      "autolesão",
      "automutilação",
      "filho se cortando o que fazer",
      "autolesão adolescente",
      "por que as pessoas se cortam",
      "autolesão tratamento"
    ],
    "excerpt": "Corte, queimadura, soco em si mesmo. Quando alguém machuca o próprio corpo sem intenção de morrer, existe uma dinâmica psicológica que merece compreensão.",
    "date": "01 Mar 2026",
    "readTime": "7 min de leitura"
  },
  {
    "slug": "burnout-esgotamento-profissional",
    "tag": "Saúde Mental",
    "title": "Burnout: quando o esgotamento no trabalho vira problema psiquiátrico",
    "metaTitle": "Burnout: sintomas, diagnóstico e tratamento",
    "metaDescription": "Exaustão constante, cinismo com o trabalho e queda de desempenho definem o burnout. Quando o esgotamento vira depressão e como é feito o tratamento.",
    "keywords": [
      "burnout",
      "síndrome de burnout",
      "burnout sintomas",
      "esgotamento profissional",
      "burnout ou depressão",
      "burnout tratamento",
      "afastamento do trabalho saúde mental"
    ],
    "excerpt": "Exaustão constante, cinismo com o trabalho, queda de desempenho. Burnout vai além de cansaço, e quando não é tratado, costuma evoluir para depressão.",
    "date": "28 Fev 2026",
    "readTime": "7 min de leitura"
  },
  {
    "slug": "demencia-sinais-precoces",
    "tag": "Psicogeriatria",
    "title": "Sinais precoces de demência: quando o esquecimento deixa de ser normal",
    "metaTitle": "Sinais de demência: esquecimento normal ou Alzheimer?",
    "metaDescription": "Esquecer onde deixou a chave é normal; esquecer para que ela serve, não. Os sinais precoces que diferenciam envelhecimento saudável de demência e quando investigar.",
    "keywords": [
      "sinais de demência",
      "Alzheimer sintomas iniciais",
      "esquecimento idoso",
      "perda de memória quando se preocupar",
      "declínio cognitivo leve",
      "demência diagnóstico precoce",
      "avaliação cognitiva idoso"
    ],
    "excerpt": "Esquecer onde deixou a chave é uma coisa. Esquecer para que serve a chave é outra. Veja o que separa envelhecimento normal de declínio cognitivo patológico.",
    "date": "25 Fev 2026",
    "readTime": "8 min de leitura"
  },
  {
    "slug": "toc-transtorno-obsessivo-compulsivo",
    "tag": "Ansiedade",
    "title": "TOC: o transtorno por trás do que se chama de mania",
    "metaTitle": "TOC: muito além da mania de limpeza ou organização",
    "metaDescription": "Pensamentos intrusivos egodistônicos, rituais que consomem horas e obsessões que ninguém vê. O que define o TOC e por que o estereótipo da limpeza esconde o quadro.",
    "excerpt": "A imagem popular do TOC se concentra em organização e limpeza. A maior parte do sofrimento clínico, no entanto, se concentra em obsessões que o paciente esconde por vergonha. O que define o quadro é diferente do que circula.",
    "date": "20 Fev 2026",
    "readTime": "8 min de leitura"
  },
  {
    "slug": "psicofarmacos-mitos-verdades",
    "tag": "Tratamento",
    "title": "Remédio psiquiátrico vicia, muda a personalidade, é para sempre? O que pesa de verdade na decisão",
    "metaTitle": "Remédio psiquiátrico vicia ou muda a personalidade?",
    "metaDescription": "Antidepressivo não é benzodiazepínico. Síndrome de descontinuação não é dependência. O que separa os medos legítimos dos mitos que adiam tratamento.",
    "excerpt": "Boa parte das objeções à medicação psiquiátrica mistura coisas distintas: dependência farmacológica, síndrome de descontinuação e necessidade clínica continuada. Separar esses planos muda a decisão.",
    "date": "15 Fev 2026",
    "readTime": "8 min de leitura"
  },
  {
    "slug": "estresse-pos-traumatico",
    "tag": "Trauma",
    "title": "Estresse pós-traumático: como o cérebro fica preso ao que já passou",
    "metaTitle": "Estresse pós-traumático: como o cérebro fica preso ao trauma",
    "metaDescription": "Flashbacks, hipervigilância, evitação. O TEPT mantém o cérebro reagindo ao trauma como se ainda estivesse acontecendo. Como o quadro é diagnosticado e tratado.",
    "excerpt": "Flashbacks que invadem sem aviso, hipervigilância que não desliga, evitação que reorganiza a vida em torno do que se quer esquecer. O TEPT é menos sobre lembrar e mais sobre o cérebro tratar a memória como ameaça atual.",
    "date": "10 Fev 2026",
    "readTime": "8 min de leitura"
  },
  {
    "slug": "sono-e-memoria-estudantes",
    "tag": "Sono",
    "title": "Sono e memória: por que virar a noite estudando piora o desempenho na prova",
    "metaTitle": "Sono e memória: por que virar a noite estudando rende menos",
    "metaDescription": "A consolidação da memória acontece durante o sono, especialmente em fases que se perdem com privação. Por que dormir bem é parte do método de estudo.",
    "excerpt": "A consolidação do que se estudou acontece durante o sono profundo e o REM. Quem vira a noite antes da prova prejudica exatamente a fase do cérebro responsável por transformar leitura em conhecimento utilizável.",
    "date": "05 Fev 2026",
    "readTime": "7 min de leitura"
  },
  {
    "slug": "crise-de-ansiedade-o-que-acontece-no-corpo",
    "tag": "Ansiedade",
    "title": "Crise de ansiedade: por que parece infarto e como diferenciar dos dois",
    "metaTitle": "Crise de ansiedade ou infarto? Como diferenciar",
    "metaDescription": "Taquicardia, dor no peito, falta de ar, sensação de morte iminente. O ataque de pânico simula infarto, e por isso a maioria dos pacientes vai primeiro ao pronto-socorro.",
    "excerpt": "Taquicardia, dor torácica, falta de ar e sensação de morte iminente fazem o paciente correr para o pronto-socorro. A maioria dos casos é ataque de pânico. A diferenciação clínica importa, e nem sempre dispensa o cardiologista.",
    "date": "05 Abr 2026",
    "readTime": "8 min de leitura"
  },
  {
    "slug": "remedios-para-ansiedade-o-que-a-psiquiatria-usa",
    "tag": "Psicofarmacologia",
    "title": "Remédios para ansiedade: o que a psiquiatria prescreve, e por quê",
    "metaTitle": "Remédios para ansiedade: o que a psiquiatria realmente usa",
    "metaDescription": "Antidepressivo, benzodiazepínico, pregabalina, hidroxizina, propranolol. Cada classe tem indicação, tempo de ação e perfil de risco distintos. A escolha não é trivial.",
    "excerpt": "O paciente costuma chegar esperando sair com um calmante. A escolha real envolve diagnóstico específico, gravidade, tempo de tratamento previsto e perfil de risco do paciente. Entre acalmar agora e tratar a ansiedade, a diferença é grande.",
    "date": "27 Mar 2026",
    "readTime": "9 min de leitura"
  },
  {
    "slug": "tratamentos-naturais-ansiedade-evidencias",
    "tag": "Evidência Científica",
    "title": "Tratamentos 'naturais' para ansiedade: o que a ciência diz sobre fitoterápicos, chás e suplementos",
    "metaTitle": "Tratamento natural para ansiedade funciona? A evidência",
    "metaDescription": "Passiflora, valeriana, magnésio, ashwagandha: o que os ensaios clínicos mostram sobre cada opção natural para ansiedade, sem viés ideológico.",
    "keywords": [
      "tratamento natural ansiedade",
      "fitoterápico para ansiedade",
      "passiflora funciona",
      "valeriana ansiedade",
      "ashwagandha evidência",
      "magnésio ansiedade",
      "calmante natural funciona"
    ],
    "excerpt": "Passiflora, valeriana, magnésio, ashwagandha: são opções reais ou apenas placebo sofisticado? Uma análise das evidências disponíveis sem viés ideológico.",
    "date": "26 Mar 2026",
    "readTime": "8 min de leitura"
  },
  {
    "slug": "florais-de-bach-ansiedade-evidencia-cientifica",
    "tag": "Evidência Científica",
    "title": "Florais de Bach para ansiedade: o que dizem os estudos científicos",
    "metaDescription": "Florais de Bach para ansiedade: revisões sistemáticas mostram resultados indistinguíveis do placebo. O que dizem os estudos clínicos.",
    "excerpt": "Os florais de Bach são amplamente vendidos para ansiedade, insônia e estresse. Mas quando submetidos ao rigor dos ensaios clínicos, seus resultados são indistinguíveis do placebo.",
    "date": "24 Mar 2026",
    "readTime": "7 min de leitura"
  },
  {
    "slug": "sertralina-antidepressivo-isrs",
    "tag": "Psicofarmacologia",
    "title": "Sertralina: o ISRS mais usado no Brasil, indicações onde se destaca e o que esperar nas primeiras semanas",
    "metaTitle": "Sertralina: como funciona, doses e efeitos colaterais",
    "metaDescription": "Sertralina é o ISRS mais prescrito no Brasil. Dose-resposta linear, primeira escolha em TOC e TEPT, segurança em gravidez. Como ela age e o que esperar.",
    "excerpt": "Por que a sertralina segue como primeira escolha em vários cenários, como funciona o perfil dose-resposta dela, em que indicações ela se destaca dos demais ISRS e o que esperar das primeiras semanas de tratamento.",
    "date": "06 Mai 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "sertralina",
      "sertralina como funciona",
      "sertralina efeitos colaterais",
      "sertralina ISRS",
      "sertralina depressão",
      "sertralina ansiedade",
      "sertralina TOC",
      "sertralina TEPT",
      "sertralina gravidez",
      "sertralina dose",
      "sertralina retirada",
      "antidepressivo mais usado"
    ]
  },
  {
    "slug": "fluoxetina-prozac-depressao",
    "tag": "Psicofarmacologia",
    "title": "Fluoxetina: o ISRS mais antigo, e ainda um dos mais úteis",
    "metaTitle": "Fluoxetina (Prozac): por que continua sendo escolha frequente",
    "metaDescription": "Fluoxetina é o ISRS pioneiro. Meia-vida longa, perfil ativador, dados de segurança em gravidez e tolerância a doses esquecidas explicam o uso atual.",
    "excerpt": "Lançada como Prozac em 1986, virou clichê cultural. Quatro décadas depois, segue sendo escolha clínica frequente por motivos práticos: meia-vida longa, dados robustos em gravidez, perfil ativador útil em depressão apática.",
    "date": "28 Abr 2026",
    "readTime": "8 min de leitura"
  },
  {
    "slug": "paroxetina-ansiedade-panico",
    "tag": "Psicofarmacologia",
    "title": "Paroxetina: o ISRS subutilizado por motivos parcialmente justos",
    "metaTitle": "Paroxetina: quando ainda faz sentido prescrever",
    "metaDescription": "Paroxetina perdeu espaço por descontinuação difícil, ganho de peso e perfil em gravidez. Continua útil em pânico e fobia social em pacientes específicos.",
    "excerpt": "Era primeira escolha para ansiedade nos anos 1990. Hoje aparece com menos frequência por motivos clínicos legítimos. Em alguns perfis, no entanto, segue sendo o ISRS que melhor responde.",
    "date": "26 Abr 2026",
    "readTime": "8 min de leitura"
  },
  {
    "slug": "bupropiona-dopamina-depressao",
    "tag": "Psicofarmacologia",
    "title": "Bupropiona: a opção fora do espectro serotoninérgico",
    "metaTitle": "Bupropiona: para que serve e quando é a escolha certa",
    "metaDescription": "Bupropiona age em dopamina e noradrenalina, sem mexer em serotonina. Útil em depressão com fadiga, sem disfunção sexual. Limitações em ansiedade e transtorno alimentar.",
    "excerpt": "É o único antidepressivo de uso amplo que não atua na serotonina. Útil em depressão com fadiga predominante e em pacientes que não toleram disfunção sexual dos ISRS. Tem contraindicações específicas que pesam.",
    "date": "24 Abr 2026",
    "readTime": "8 min de leitura"
  },
  {
    "slug": "escitalopram-cipralex-ansiedade",
    "tag": "Psicofarmacologia",
    "title": "Escitalopram: por que virou o ISRS de uso mais frequente",
    "metaTitle": "Escitalopram: o ISRS de escolha em vários cenários",
    "metaDescription": "Escitalopram tem dose-resposta linear, poucas interações e perfil de tolerabilidade favorável. Por que se consolidou como ISRS padrão em ansiedade e depressão.",
    "excerpt": "Lançado em 2002, em uma década virou o ISRS mais escolhido em vários cenários clínicos. A combinação de eficácia, tolerabilidade e poucas interações explica boa parte do movimento, mas existem ressalvas que vale conhecer.",
    "date": "22 Abr 2026",
    "readTime": "8 min de leitura"
  },
  {
    "slug": "venlafaxina-efexor-ansiedade-severa",
    "tag": "Psicofarmacologia",
    "title": "Venlafaxina (Efexor): o ISRN com efeito que muda conforme a dose",
    "metaTitle": "Venlafaxina: mecanismo, indicações e descontinuação",
    "metaDescription": "Venlafaxina age como ISRS em doses baixas e como ISRN em doses altas. Indicada em depressão refratária e TAG, exige cuidado com pressão arterial e descontinuação.",
    "excerpt": "Por que o efeito clínico da venlafaxina muda conforme a dose, em que cenários ela é primeira escolha, o que vigiar na pressão arterial e por que a descontinuação é o capítulo mais complicado da medicação.",
    "date": "06 Mai 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "venlafaxina",
      "venlafaxina efeitos colaterais",
      "venlafaxina como funciona",
      "venlafaxina depressão",
      "venlafaxina ansiedade",
      "venlafaxina retirada",
      "venlafaxina descontinuação",
      "venlafaxina pressão arterial",
      "ISRN",
      "Efexor",
      "depressão refratária"
    ]
  },
  {
    "slug": "litio-sal-bipolar-gold-standard",
    "tag": "Psicofarmacologia",
    "title": "Lítio no transtorno bipolar: o estabilizador antigo que segue insubstituível em várias situações",
    "metaTitle": "Lítio: indicações, monitoramento e por que segue primeira linha",
    "metaDescription": "Lítio é o único psicofármaco com efeito antissuicida específico documentado. Janela terapêutica estreita, monitoramento renal e tireoidiano, decisão na gravidez.",
    "excerpt": "O lítio é o medicamento psiquiátrico mais antigo em uso de primeira linha. Por que ele segue sendo escolha em transtorno bipolar tipo I, qual a propriedade clínica que outras medicações não reproduzem, e como funciona o monitoramento que sustenta o tratamento a longo prazo.",
    "date": "06 Mai 2026",
    "readTime": "8 min de leitura",
    "keywords": [
      "lítio",
      "lítio bipolar",
      "lítio efeitos colaterais",
      "carbonato de lítio",
      "lítio antissuicida",
      "lítio função renal",
      "lítio tireoide",
      "lítio gravidez",
      "lítio Ebstein",
      "litemia",
      "transtorno bipolar tratamento",
      "estabilizador de humor"
    ]
  },
  {
    "slug": "alprazolam-xanax-panico",
    "tag": "Psicofarmacologia",
    "title": "Alprazolam (Frontal): o benzodiazepínico de meia-vida curta e por que ele costuma virar problema no Brasil",
    "metaTitle": "Alprazolam: como funciona, riscos e descontinuação",
    "metaDescription": "Alprazolam tem meia-vida curta, alta tolerância e dependência. Indicado em pânico agudo por curtos períodos. Como descontinuar e por que o uso crônico no Brasil é problema clínico.",
    "excerpt": "Por que o perfil farmacocinético do alprazolam o torna particularmente difícil de descontinuar, em quais situações ele ainda faz sentido clinicamente e por que o uso crônico disseminado no Brasil é um problema de saúde pública.",
    "date": "06 Mai 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "alprazolam",
      "alprazolam Frontal",
      "alprazolam efeitos colaterais",
      "alprazolam dependência",
      "alprazolam retirada",
      "alprazolam ansiedade",
      "alprazolam pânico",
      "benzodiazepínico curto",
      "Xanax",
      "como parar de tomar alprazolam",
      "tolerância benzodiazepínico"
    ]
  },
  {
    "slug": "melatonina-sono-sincronizacao",
    "tag": "Psicofarmacologia",
    "title": "Melatonina: hormônio circadiano, indicações reais e o que ela não trata",
    "metaTitle": "Melatonina: para que serve, dose certa e quando funciona",
    "metaDescription": "Melatonina é cronobiótico, não hipnótico. Funciona em jet lag, fase atrasada do sono e insônia em idoso. Para insônia primária do adulto, evidência é fraca.",
    "excerpt": "Por que a melatonina é cronobiótico e não hipnótico, em que indicações ela tem evidência sólida e em quais o uso popular não corresponde ao que a literatura mostra. Dose, horário e a diferença entre liberação rápida e prolongada.",
    "date": "06 Mai 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "melatonina",
      "melatonina dose",
      "melatonina insônia",
      "melatonina jet lag",
      "melatonina idoso",
      "melatonina ANVISA",
      "fase atrasada do sono",
      "cronobiótico",
      "TCC-I",
      "como tomar melatonina",
      "melatonina liberação prolongada",
      "melatonina TDAH"
    ]
  },
  {
    "slug": "quando-procurar-psiquiatra-bh",
    "tag": "Psiquiatria",
    "title": "Quando procurar um psiquiatra em Belo Horizonte?",
    "metaTitle": "Quando procurar psiquiatra em BH: sinais que justificam consulta",
    "metaDescription": "Quando procurar psiquiatra em Belo Horizonte? Os três sinais clínicos que justificam avaliação: persistência, prejuízo e recorrência.",
    "keywords": [
      "quando procurar psiquiatra",
      "psiquiatra belo horizonte",
      "psiquiatra bh",
      "preciso de psiquiatra",
      "sinais que preciso de psiquiatra",
      "consulta psiquiatra bh",
      "psiquiatra particular bh"
    ],
    "excerpt": "Muitas pessoas adiam a consulta psiquiátrica por dúvida, medo ou desinformação. Entenda os sinais que indicam a necessidade de avaliação e como funciona o atendimento psiquiátrico em BH.",
    "date": "14 Abr 2026",
    "readTime": "7 min de leitura"
  },
  {
    "slug": "como-saber-se-tenho-tdah",
    "tag": "TDAH",
    "title": "Como saber se tenho TDAH? Sinais, diagnóstico e o que fazer",
    "metaTitle": "Como saber se tenho TDAH? Sinais e diagnóstico",
    "metaDescription": "Como saber se tenho TDAH? Critérios do DSM-5, diagnóstico clínico em adultos e por que o autodiagnóstico via TikTok atrasa o tratamento.",
    "keywords": [
      "como saber se tenho TDAH",
      "teste TDAH adulto",
      "sintomas de TDAH",
      "diagnóstico TDAH",
      "TDAH adulto",
      "quem diagnostica TDAH",
      "psiquiatra TDAH"
    ],
    "excerpt": "Desatenção, procrastinação e dificuldade de organização fazem parte do TDAH ou são apenas hábitos? Entenda como o diagnóstico é feito e por que autodiagnóstico por vídeos pode ser perigoso.",
    "date": "13 Abr 2026",
    "readTime": "8 min de leitura"
  },
  {
    "slug": "psiquiatra-ou-psicologo-qual-procurar",
    "tag": "Psiquiatria",
    "title": "Psiquiatra ou psicólogo: qual profissional procurar?",
    "metaTitle": "Psiquiatra ou psicólogo: qual a diferença e qual procurar",
    "metaDescription": "Psiquiatra é médico e prescreve; psicólogo conduz psicoterapia. Quando procurar cada um, quando combinar os dois e por que a dupla costuma ser o tratamento ideal.",
    "keywords": [
      "psiquiatra ou psicólogo",
      "diferença psiquiatra psicólogo",
      "qual procurar primeiro psiquiatra ou psicólogo",
      "psicólogo pode prescrever remédio",
      "quando procurar psiquiatra",
      "psicoterapia e medicação"
    ],
    "excerpt": "Entenda a diferença entre psiquiatra e psicólogo, quando cada um é indicado e por que, em muitos casos, o tratamento mais eficaz combina os dois.",
    "date": "11 Abr 2026",
    "readTime": "6 min de leitura"
  },
  {
    "slug": "ansiedade-e-doenca-ou-normal",
    "tag": "Ansiedade",
    "title": "Ansiedade é doença ou é normal? Como diferenciar",
    "metaTitle": "Ansiedade normal ou transtorno? Critérios para diferenciar",
    "metaDescription": "Toda pessoa sente ansiedade. Ela vira transtorno quando é desproporcional, persistente e compromete o funcionamento. Os critérios clínicos e os sinais de alerta.",
    "keywords": [
      "ansiedade é doença",
      "ansiedade normal ou patológica",
      "transtorno de ansiedade sintomas",
      "quando a ansiedade vira doença",
      "sinais de transtorno de ansiedade",
      "ansiedade tratamento"
    ],
    "excerpt": "Toda pessoa sente ansiedade. Mas quando ela para de ser adaptativa e se torna um transtorno? Entenda os critérios clínicos e os sinais de alerta.",
    "date": "09 Abr 2026",
    "readTime": "7 min de leitura"
  },
  {
    "slug": "depressao-tem-cura-ou-tratamento",
    "tag": "Depressão",
    "title": "Depressão tem cura? O que a ciência diz sobre tratamento e recaída",
    "metaTitle": "Depressão tem cura? Remissão, recaída e tratamento",
    "metaDescription": "Depressão tem tratamento eficaz e remissão completa é meta realista. O que os dados dizem sobre cura, risco de recaída e por que a manutenção importa.",
    "keywords": [
      "depressão tem cura",
      "depressão tratamento",
      "remissão depressão",
      "recaída depressão",
      "quanto tempo dura tratamento depressão",
      "depressão volta depois do tratamento"
    ],
    "excerpt": "Muitos pacientes perguntam se a depressão tem cura. A resposta depende do tipo de depressão, do número de episódios e de como o tratamento é conduzido.",
    "date": "08 Abr 2026",
    "readTime": "7 min de leitura"
  },
  {
    "slug": "qual-diferenca-tristeza-depressao-ansiedade",
    "tag": "Psicoeducação",
    "title": "Qual a diferença entre tristeza, depressão e ansiedade?",
    "metaTitle": "Tristeza, depressão e ansiedade: qual a diferença?",
    "metaDescription": "Tristeza é emoção passageira; depressão e ansiedade são transtornos com critérios próprios. O que cada termo significa clinicamente e quando buscar avaliação.",
    "keywords": [
      "diferença entre tristeza e depressão",
      "diferença entre ansiedade e depressão",
      "ansiedade e depressão juntas",
      "sintomas de depressão e ansiedade",
      "transtorno misto ansioso depressivo"
    ],
    "excerpt": "Tristeza, depressão e ansiedade são frequentemente confundidas. Entenda o que cada uma significa clinicamente e quando justificam avaliação profissional.",
    "date": "06 Abr 2026",
    "readTime": "6 min de leitura"
  },
  {
    "slug": "como-funciona-consulta-psiquiatrica",
    "tag": "Psiquiatria",
    "title": "Como funciona uma consulta psiquiátrica? O que esperar da primeira vez",
    "metaTitle": "Primeira consulta com psiquiatra: como funciona",
    "metaDescription": "O que acontece na primeira consulta psiquiátrica: quanto tempo dura, o que o médico pergunta, se sai com receita e como se preparar para aproveitar melhor.",
    "keywords": [
      "como funciona consulta psiquiátrica",
      "primeira consulta psiquiatra",
      "o que falar na consulta com psiquiatra",
      "consulta psiquiatra o que esperar",
      "quanto tempo dura consulta psiquiátrica",
      "psiquiatra primeira vez"
    ],
    "excerpt": "Muitas pessoas adiam a consulta psiquiátrica por não saber o que esperar. Entenda como é a avaliação, quanto tempo dura e quando a medicação é indicada.",
    "date": "04 Abr 2026",
    "readTime": "6 min de leitura"
  },
  {
    "slug": "quanto-tempo-demora-antidepressivo-fazer-efeito",
    "tag": "Psicofarmacologia",
    "title": "Quanto tempo demora para o antidepressivo fazer efeito?",
    "metaTitle": "Quanto tempo o antidepressivo demora para fazer efeito?",
    "metaDescription": "Antidepressivo demora de 2 a 6 semanas para fazer efeito. O que esperar nas primeiras semanas e por que muitos desistem cedo demais.",
    "keywords": [
      "quanto tempo antidepressivo faz efeito",
      "antidepressivo não está fazendo efeito",
      "primeiras semanas antidepressivo",
      "efeitos colaterais início antidepressivo",
      "sertralina quanto tempo para fazer efeito",
      "escitalopram quanto tempo para fazer efeito"
    ],
    "excerpt": "Muitos pacientes abandonam o tratamento antes do antidepressivo agir. Entenda o tempo real de resposta, o que esperar nas primeiras semanas e por que a paciência é parte do tratamento.",
    "date": "01 Abr 2026",
    "readTime": "6 min de leitura"
  },
  {
    "slug": "quetiapina-guia-completo",
    "tag": "Psicofarmacologia",
    "title": "Quetiapina: o antipsicótico que virou calmante universal no Brasil",
    "metaTitle": "Quetiapina: para que serve e o problema do uso off-label",
    "metaDescription": "Quetiapina é antipsicótico atípico com indicações sérias e perfil metabólico ruim. O uso off-label em dose baixa para insônia e ansiedade virou epidemia.",
    "excerpt": "Em doses baixas, virou substituta do Rivotril em consultórios de várias especialidades. Em doses adequadas, é antipsicótico potente com perfil metabólico exigente. As duas leituras coexistem mal.",
    "date": "07 Abr 2026",
    "readTime": "8 min de leitura"
  },
  {
    "slug": "trazodona-guia-completo",
    "tag": "Psicofarmacologia",
    "title": "Trazodona: o antidepressivo que quase ninguém usa como antidepressivo",
    "metaTitle": "Trazodona: hipnótico em dose baixa, antidepressivo em dose alta",
    "metaDescription": "Trazodona em dose baixa age como hipnótico histaminérgico. Em dose antidepressiva, o perfil muda. Por que a maior parte das prescrições é off-label.",
    "excerpt": "Em dose baixa funciona como anti-histamínico potente. Em dose antidepressiva, atua como antagonista de serotonina e inibidor de recaptação. As duas faces explicam por que a trazodona ocupa hoje um lugar muito diferente do original.",
    "date": "07 Abr 2026",
    "readTime": "8 min de leitura"
  }
];
