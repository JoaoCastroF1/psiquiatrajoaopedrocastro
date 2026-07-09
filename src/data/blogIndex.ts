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
    "slug": "lamotrigina-transtorno-bipolar",
    "tag": "Psicofarmacologia",
    "title": "Lamotrigina no transtorno bipolar: para que serve, titulação lenta e efeitos",
    "metaTitle": "Lamotrigina no transtorno bipolar: guia completo",
    "metaDescription": "Lamotrigina no transtorno bipolar: por que previne a depressão bipolar, titulação lenta contra o rash grave, interações e quem tende a se beneficiar.",
    "excerpt": "A lamotrigina é o estabilizador que protege justamente do polo em que o paciente bipolar passa mais tempo: a depressão. Explico por que a dose sobe devagar por obrigação, o que é o temido rash, e em quais perfis ela costuma ser a escolha.",
    "date": "30 Jun 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "lamotrigina para que serve",
      "lamotrigina transtorno bipolar",
      "lamotrigina depressão bipolar",
      "lamotrigina titulação",
      "rash lamotrigina",
      "síndrome de stevens-johnson lamotrigina",
      "lamotrigina engorda",
      "lamotrigina e anticoncepcional",
      "lamotrigina e valproato",
      "lamotrigina 25 50 100 200 mg",
      "estabilizador de humor sem ganho de peso",
      "lamotrigina efeitos colaterais"
    ]
  },
  {
    "slug": "canabidiol-cbd-ansiedade-evidencia",
    "tag": "Evidência Científica",
    "title": "Canabidiol (CBD) para ansiedade: o que a ciência mostra e o que a ANVISA permite",
    "metaTitle": "Canabidiol (CBD) para ansiedade: evidência e regras",
    "metaDescription": "CBD para ansiedade: evidência promissora mas preliminar, doses estudadas versus produtos de farmácia, regras da ANVISA (RDC 660) e os riscos do THC.",
    "excerpt": "O canabidiol virou promessa universal — para ansiedade, sono, dor, quase tudo. A evidência real é mais modesta: promissora em situações específicas, sólida apenas em epilepsias raras. Explico o que os estudos mostram, por que a dose importa tanto e o que a ANVISA de fato regulamenta.",
    "date": "30 Jun 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "canabidiol para ansiedade",
      "CBD ansiedade funciona",
      "CBD evidência científica",
      "canabidiol ANVISA prescrição",
      "RDC 660 importação canabidiol",
      "diferença CBD e THC",
      "óleo de CBD farmácia dose",
      "cannabis medicinal saúde mental",
      "THC ansiedade psicose",
      "CBD precisa de receita",
      "canabidiol interação medicamentos",
      "cannabis ansiedade psiquiatra"
    ]
  },
  {
    "slug": "distimia-transtorno-depressivo-persistente",
    "tag": "Depressão",
    "title": "Distimia (transtorno depressivo persistente): quando a tristeza vira traço de vida",
    "metaTitle": "Distimia: o que é o transtorno depressivo persistente",
    "metaDescription": "Distimia é a depressão crônica de baixa intensidade que dura anos. Psiquiatra explica sintomas, diferença para depressão maior e como tratar.",
    "excerpt": "\"Sempre fui assim\" é a frase que mais escuto de quem tem distimia. Explico o que é o transtorno depressivo persistente, por que ele passa décadas sem diagnóstico e por que tratá-lo muda vidas que já tinham se conformado.",
    "date": "29 Jun 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "distimia o que é",
      "transtorno depressivo persistente",
      "distimia sintomas",
      "distimia tem cura",
      "distimia tratamento",
      "diferença entre distimia e depressão",
      "depressão dupla o que é",
      "depressão crônica leve",
      "distimia teste diagnóstico",
      "sempre fui triste é depressão",
      "distimia DSM-5",
      "mau humor crônico é doença"
    ]
  },
  {
    "slug": "apneia-do-sono-ansiedade-depressao",
    "tag": "Sono",
    "title": "Apneia do sono, ansiedade e depressão: quando o problema psiquiátrico vem da respiração",
    "metaTitle": "Apneia do sono, ansiedade e depressão",
    "metaDescription": "Apneia do sono imita depressão, ansiedade e até TDAH: cansaço, irritabilidade e falta de foco. Psiquiatra explica sinais, polissonografia e o efeito do CPAP.",
    "excerpt": "Ronco alto, pausas na respiração e um cansaço que nenhum antidepressivo resolve: a apneia obstrutiva do sono produz sintomas que imitam depressão, ansiedade e TDAH. Explico quando suspeitar, quem deve fazer polissonografia e por que benzodiazepínico pode piorar tudo.",
    "date": "29 Jun 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "apneia do sono e depressão",
      "apneia do sono e ansiedade",
      "apneia do sono sintomas",
      "ronco e pausas na respiração",
      "sonolência diurna excessiva causas",
      "polissonografia quando fazer",
      "CPAP melhora depressão",
      "depressão resistente ao tratamento apneia",
      "apneia do sono e falta de concentração",
      "acordar cansado todos os dias",
      "benzodiazepínico piora apneia",
      "dor de cabeça ao acordar"
    ]
  },
  {
    "slug": "antidepressivo-engorda-ganho-de-peso",
    "tag": "Psicofarmacologia",
    "title": "Antidepressivo engorda? O que esperar de cada medicação e o que fazer",
    "metaTitle": "Antidepressivo engorda? Panorama por medicação",
    "metaDescription": "Antidepressivo engorda? Compare mirtazapina, paroxetina, sertralina, escitalopram, bupropiona e fluoxetina, e saiba o que fazer quando o peso sobe.",
    "excerpt": "Alguns antidepressivos engordam de fato, outros são neutros e um ou outro se associa a leve perda de peso. Apresento o panorama honesto por medicação, os mecanismos por trás do ganho e o que fazer — sem trocar remédio por conta própria.",
    "date": "28 Jun 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "antidepressivo engorda",
      "qual antidepressivo mais engorda",
      "antidepressivo que não engorda",
      "sertralina engorda",
      "escitalopram engorda",
      "mirtazapina ganho de peso",
      "paroxetina engorda",
      "bupropiona emagrece",
      "fluoxetina e peso",
      "ganho de peso com antidepressivo o que fazer",
      "antidepressivo e metabolismo",
      "remédio para depressão que emagrece"
    ]
  },
  {
    "slug": "depressao-em-homens-sinais",
    "tag": "Depressão",
    "title": "Depressão em homens: sinais que ninguém reconhece e por que eles não pedem ajuda",
    "metaTitle": "Depressão em homens: sinais, sintomas e tratamento",
    "metaDescription": "Depressão em homens: irritabilidade, álcool, excesso de trabalho e dor física podem ser o rosto da doença. Saiba reconhecer os sinais e como tratar.",
    "excerpt": "Nem sempre a depressão masculina se parece com tristeza. Irritabilidade, álcool, trabalho sem fim e dor que nenhum exame explica são, muitas vezes, o rosto que ela assume. Explico por que os homens são subdiagnosticados — e por que isso custa vidas.",
    "date": "28 Jun 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "depressão em homens",
      "depressão masculina sintomas",
      "sinais de depressão no homem",
      "marido irritado o tempo todo",
      "homem não quer procurar ajuda psicológica",
      "depressão e alcoolismo em homens",
      "suicídio masculino estatísticas",
      "depressão mascarada",
      "irritabilidade pode ser depressão",
      "como ajudar um homem com depressão",
      "psiquiatra depressão Belo Horizonte",
      "tratamento depressão homem"
    ]
  },
  {
    "slug": "transtorno-bipolar-sintomas-tipos-diagnostico",
    "tag": "Transtorno Bipolar",
    "title": "Transtorno bipolar: sintomas, tipos (I, II e ciclotimia) e diagnóstico",
    "metaTitle": "Transtorno bipolar: sintomas, tipos e diagnóstico",
    "metaDescription": "Transtorno bipolar: diferenças entre tipo I, tipo II e ciclotimia, sinais de mania e hipomania, por que o diagnóstico demora anos e como é o tratamento.",
    "excerpt": "Bipolaridade não é mudar de humor no mesmo dia — é uma doença de episódios, e a maior parte deles é de depressão. Explico as diferenças entre os tipos I e II e a ciclotimia, por que o diagnóstico demora em média dez anos e quando suspeitar.",
    "date": "26 Jun 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "transtorno bipolar sintomas",
      "transtorno bipolar tipo 1 e tipo 2",
      "o que é ciclotimia",
      "diferença entre mania e hipomania",
      "depressão bipolar",
      "diagnóstico de transtorno bipolar",
      "bipolaridade em adultos",
      "antidepressivo e virada maníaca",
      "estabilizador de humor",
      "quando suspeitar de bipolaridade",
      "transtorno bipolar tem cura",
      "psiquiatra transtorno bipolar"
    ]
  },
  {
    "slug": "exercicio-fisico-depressao-ansiedade-evidencia",
    "tag": "Evidência Científica",
    "title": "Exercício físico para depressão e ansiedade: o que a evidência mostra de verdade",
    "metaTitle": "Exercício físico para depressão e ansiedade: evidência",
    "metaDescription": "Exercício físico tem efeito real em depressão e ansiedade, comparável a tratamentos de primeira linha em quadros leves. Veja dose, mecanismos e limites.",
    "excerpt": "O exercício físico é um dos tratamentos mais bem documentados da saúde mental — e um dos pior prescritos. Explico o tamanho real do efeito segundo as metanálises, a dose que funciona, e por que mandar uma pessoa deprimida 'ir caminhar' costuma falhar.",
    "date": "26 Jun 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "exercício físico depressão",
      "exercício físico ansiedade",
      "atividade física saúde mental",
      "exercício substitui antidepressivo",
      "exercício para depressão funciona",
      "quanto exercício por semana depressão",
      "musculação depressão ansiedade",
      "BDNF exercício cérebro",
      "caminhada ajuda na depressão",
      "anedonia falta de energia exercício",
      "tratamento natural depressão evidência",
      "exercício aeróbico ansiedade evidência"
    ]
  },
  {
    "slug": "vortioxetina-brintellix-para-que-serve",
    "tag": "Psicofarmacologia",
    "title": "Vortioxetina (Brintellix): para que serve, cognição na depressão e limitações",
    "metaTitle": "Vortioxetina (Brintellix): para que serve",
    "metaDescription": "Vortioxetina (Brintellix) é um antidepressivo multimodal com foco em cognição. Psiquiatra explica para que serve, efeitos colaterais e custo.",
    "excerpt": "A vortioxetina chegou prometendo tratar não só o humor, mas o \"fog mental\" da depressão. Explico o que o mecanismo multimodal significa, o que a evidência sobre cognição sustenta de fato e onde o custo alto entra na decisão.",
    "date": "25 Jun 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "vortioxetina para que serve",
      "brintellix para que serve",
      "brintellix 10 mg",
      "vortioxetina efeitos colaterais",
      "vortioxetina e cognição",
      "brintellix engorda",
      "vortioxetina disfunção sexual",
      "brintellix preço genérico",
      "vortioxetina ou escitalopram",
      "antidepressivo multimodal",
      "fog mental depressão",
      "vortioxetina náusea"
    ]
  },
  {
    "slug": "como-dormir-melhor-higiene-do-sono",
    "tag": "Sono",
    "title": "Como dormir melhor: o que a ciência do sono recomenda de verdade",
    "metaTitle": "Como dormir melhor: higiene do sono e TCC-I",
    "metaDescription": "Como dormir melhor segundo a evidência: higiene do sono bem feita, seus limites e por que a TCC-I é o padrão-ouro para insônia crônica. Guia de psiquiatra.",
    "excerpt": "Horário constante, luz, cafeína, telas: a higiene do sono funciona — até certo ponto. Explico o que a ciência realmente recomenda, por que higiene sozinha não trata insônia crônica e o que é a TCC-I, tratamento de primeira linha que quase ninguém conhece.",
    "date": "25 Jun 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "como dormir melhor",
      "higiene do sono",
      "o que fazer para dormir rápido",
      "TCC-I terapia cognitivo-comportamental para insônia",
      "restrição de tempo na cama",
      "controle de estímulos insônia",
      "cafeína atrapalha o sono",
      "álcool e sono",
      "celular antes de dormir",
      "temperatura ideal para dormir",
      "remédio para dormir faz mal",
      "tratamento insônia sem remédio"
    ]
  },
  {
    "slug": "como-parar-antidepressivo-com-seguranca",
    "tag": "Psicofarmacologia",
    "title": "Como parar antidepressivo com segurança: quando e como fazer a retirada",
    "metaTitle": "Como parar antidepressivo com segurança",
    "metaDescription": "Como parar antidepressivo com segurança: tempo mínimo de tratamento, síndrome de descontinuação, esquema de redução gradual e a diferença para recaída.",
    "excerpt": "Parar antidepressivo tem hora certa e método certo. Explico quanto tempo o tratamento deve durar, o que é a síndrome de descontinuação, quais medicações mais a causam e como diferenciar sintomas de retirada de uma recaída da depressão.",
    "date": "24 Jun 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "como parar antidepressivo",
      "parar antidepressivo com segurança",
      "síndrome de descontinuação antidepressivo",
      "quanto tempo tomar antidepressivo",
      "parar sertralina de uma vez",
      "abstinência de antidepressivo",
      "retirada de venlafaxina",
      "parar paroxetina efeitos",
      "desmame de antidepressivo",
      "antidepressivo vicia",
      "recaída depressão ao parar remédio",
      "brain zaps antidepressivo"
    ]
  },
  {
    "slug": "compulsao-alimentar-transtorno-tratamento",
    "tag": "Saúde Mental",
    "title": "Compulsão alimentar: o que é o transtorno (TCAP), sintomas e tratamento",
    "metaTitle": "Compulsão alimentar (TCAP): sintomas e tratamento",
    "metaDescription": "Transtorno de compulsão alimentar (TCAP): como diferenciar do comer emocional, por que dietas falham e o que a psiquiatria usa no tratamento.",
    "excerpt": "Comer uma quantidade enorme em pouco tempo, com a sensação de não conseguir parar, e depois afundar em culpa e sigilo. O TCAP é o transtorno alimentar mais comum — e o menos diagnosticado. Explico por que dieta sozinha falha e o que realmente trata.",
    "date": "24 Jun 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "transtorno de compulsão alimentar",
      "compulsão alimentar tratamento",
      "TCAP o que é",
      "compulsão alimentar sintomas",
      "como parar de comer compulsivamente",
      "comer emocional ou compulsão",
      "remédio para compulsão alimentar",
      "Venvanse compulsão alimentar",
      "lisdexanfetamina TCAP",
      "compulsão alimentar e dieta",
      "psiquiatra transtorno alimentar Belo Horizonte",
      "culpa depois de comer"
    ]
  },
  {
    "slug": "tdah-em-mulheres-sinais-diagnostico",
    "tag": "TDAH",
    "title": "TDAH em mulheres: sinais, subdiagnóstico e por que o diagnóstico chega tarde",
    "metaTitle": "TDAH em mulheres: sinais e diagnóstico tardio",
    "metaDescription": "TDAH em mulheres: por que o diagnóstico chega tarde, sinais da apresentação desatenta, efeito dos hormônios nos sintomas e como buscar avaliação.",
    "excerpt": "Meninas desatentas não incomodam ninguém — e por isso não são diagnosticadas. Explico como o TDAH se manifesta em mulheres, o papel da compensação e do perfeccionismo, a influência hormonal nos sintomas e o caminho para um diagnóstico correto.",
    "date": "22 Jun 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "tdah em mulheres",
      "tdah feminino sintomas",
      "tdah em mulheres adultas",
      "diagnóstico tardio de tdah",
      "tdah desatento em mulheres",
      "tdah e hormônios",
      "tdah piora na tpm",
      "tdah na menopausa",
      "tdah depois da maternidade",
      "como saber se tenho tdah mulher",
      "tdah e ansiedade em mulheres",
      "subdiagnóstico de tdah"
    ]
  },
  {
    "slug": "cetamina-escetamina-depressao-resistente",
    "tag": "Tratamento",
    "title": "Cetamina e escetamina (Spravato) na depressão resistente: o que a evidência mostra",
    "metaTitle": "Cetamina e escetamina na depressão resistente",
    "metaDescription": "Depressão resistente: o que é, como a cetamina age em horas via glutamato, como funciona a escetamina intranasal (Spravato) aprovada pela ANVISA e os limites.",
    "excerpt": "Quando dois antidepressivos bem conduzidos falham, o quadro se chama depressão resistente — e é para ele que existem a cetamina e a escetamina intranasal (Spravato). Explico como esses medicamentos agem em horas em vez de semanas, o que a ANVISA aprovou, e quais são as limitações reais.",
    "date": "22 Jun 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "cetamina para depressão",
      "escetamina Spravato",
      "depressão resistente ao tratamento",
      "Spravato como funciona",
      "cetamina depressão resistente preço",
      "escetamina intranasal ANVISA",
      "STAR*D estudo depressão",
      "antidepressivo não funciona o que fazer",
      "eletroconvulsoterapia depressão",
      "cetamina efeito dissociativo",
      "tratamento para depressão que não melhora",
      "glutamato NMDA antidepressivo"
    ]
  },
  {
    "slug": "mirtazapina-para-que-serve",
    "tag": "Psicofarmacologia",
    "title": "Mirtazapina (Remeron): para que serve, sono, apetite e o paradoxo da dose",
    "metaTitle": "Mirtazapina (Remeron): para que serve e efeitos",
    "metaDescription": "Mirtazapina (Remeron) trata depressão com insônia e perda de apetite. Psiquiatra explica o paradoxo da dose, o ganho de peso e o uso no idoso.",
    "excerpt": "A mirtazapina é o antidepressivo que faz dormir e comer — o que pode ser exatamente o que o quadro pede ou a principal limitação. Explico o paradoxo da dose, o uso no idoso e quando ela entra em combinação na depressão resistente.",
    "date": "21 Jun 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "mirtazapina para que serve",
      "remeron para que serve",
      "mirtazapina 15 mg para dormir",
      "mirtazapina 30 mg",
      "mirtazapina engorda quanto",
      "mirtazapina dá sono",
      "mirtazapina para idosos",
      "mirtazapina com venlafaxina",
      "mirtazapina para insônia e depressão",
      "antidepressivo que abre o apetite",
      "mirtazapina dose baixa mais sedativa",
      "california rocket fuel"
    ]
  },
  {
    "slug": "menopausa-ansiedade-depressao-saude-mental",
    "tag": "Saúde da Mulher",
    "title": "Menopausa, ansiedade e depressão: a saúde mental na perimenopausa",
    "metaTitle": "Menopausa, ansiedade e depressão: o que fazer",
    "metaDescription": "A perimenopausa multiplica por 2 a 4 o risco de depressão e ansiedade. Psiquiatra explica os sintomas que se misturam e a abordagem com o ginecologista.",
    "excerpt": "Insônia nova, irritabilidade, névoa mental, ansiedade que nunca existiu antes: a transição para a menopausa é uma janela de vulnerabilidade psiquiátrica real, não \"coisa da idade\". Explico por que o quadro é tão confundido com estresse e como psiquiatra e ginecologista trabalham juntos.",
    "date": "21 Jun 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "menopausa e ansiedade",
      "menopausa e depressão",
      "perimenopausa sintomas emocionais",
      "climatério e saúde mental",
      "irritabilidade na menopausa",
      "névoa mental menopausa",
      "insônia na menopausa",
      "reposição hormonal depressão",
      "antidepressivo para fogachos",
      "menopausa choro fácil",
      "psiquiatra menopausa Belo Horizonte"
    ]
  },
  {
    "slug": "pregabalina-ansiedade-para-que-serve",
    "tag": "Psicofarmacologia",
    "title": "Pregabalina (Lyrica) para ansiedade: para que serve e efeitos colaterais",
    "metaTitle": "Pregabalina para ansiedade: para que serve",
    "metaDescription": "Pregabalina (Lyrica): para que serve, como age na ansiedade generalizada, dor neuropática e fibromialgia, efeitos colaterais e quando o uso faz sentido.",
    "excerpt": "A pregabalina nasceu como remédio para dor neuropática e epilepsia, mas tem evidência sólida no transtorno de ansiedade generalizada. Explico o mecanismo, o que esperar do efeito, os colaterais e em quais pacientes ela faz sentido.",
    "date": "20 Jun 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "pregabalina para que serve",
      "pregabalina para ansiedade",
      "lyrica para que serve",
      "pregabalina engorda",
      "pregabalina efeitos colaterais",
      "pregabalina vicia",
      "pregabalina dose ansiedade",
      "pregabalina fibromialgia",
      "pregabalina dor neuropática",
      "pregabalina sonolência",
      "remédio para ansiedade generalizada",
      "pregabalina é controlada"
    ]
  },
  {
    "slug": "transtorno-borderline-o-que-e",
    "tag": "Saúde Mental",
    "title": "Transtorno de personalidade borderline: o que é, sintomas e tratamento",
    "metaTitle": "Transtorno borderline: o que é, sintomas e tratamento",
    "metaDescription": "Transtorno de personalidade borderline (TPB): sintomas, diferença para bipolaridade, o peso do estigma e por que o prognóstico é melhor do que se pensa.",
    "excerpt": "Emoções que viram tempestade em minutos, terror de ser abandonado, relações intensas que começam e terminam em chamas. O transtorno borderline é um dos diagnósticos mais estigmatizados da psiquiatria — e um dos que mais melhoram com o tratamento certo.",
    "date": "20 Jun 2026",
    "readTime": "8 min de leitura",
    "keywords": [
      "transtorno de personalidade borderline",
      "borderline o que é",
      "borderline sintomas",
      "diferença entre borderline e bipolar",
      "TPB tratamento",
      "terapia dialética comportamental DBT",
      "borderline tem cura",
      "medo de abandono borderline",
      "instabilidade emocional",
      "borderline é manipulação",
      "autolesão borderline",
      "psiquiatra borderline Belo Horizonte"
    ]
  },
  {
    "slug": "lisdexanfetamina-venvanse-tdah",
    "tag": "Psicofarmacologia",
    "title": "Lisdexanfetamina (Venvanse) para TDAH e compulsão alimentar: guia completo",
    "metaTitle": "Venvanse (lisdexanfetamina): TDAH e compulsão",
    "metaDescription": "Lisdexanfetamina (Venvanse) no TDAH e na compulsão alimentar: como o pró-fármaco age, comparação com Ritalina, efeitos colaterais, custo e monitorização.",
    "excerpt": "O Venvanse é um pró-fármaco: só vira estimulante ativo dentro do corpo, o que lhe dá ação longa, estável e menor potencial de abuso. Explico como ele se compara ao metilfenidato, quem tende a responder melhor e seu papel na compulsão alimentar.",
    "date": "18 Jun 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "lisdexanfetamina",
      "venvanse para tdah",
      "venvanse como funciona",
      "venvanse ou ritalina",
      "venvanse compulsão alimentar",
      "venvanse efeitos colaterais",
      "venvanse vicia",
      "quanto custa o venvanse",
      "pró-fármaco lisdexanfetamina",
      "venvanse 30 50 70 mg",
      "venvanse emagrece",
      "remédio para compulsão alimentar"
    ]
  },
  {
    "slug": "quanto-custa-consulta-psiquiatra-particular",
    "tag": "Psiquiatria",
    "title": "Quanto custa uma consulta com psiquiatra particular? O que explica a variação de valores",
    "metaTitle": "Quanto custa consulta com psiquiatra particular?",
    "metaDescription": "Quanto custa uma consulta com psiquiatra: faixas de valores no Brasil, por que consultas longas custam mais e como reembolso e IR reduzem o custo real.",
    "excerpt": "Os valores de consulta psiquiátrica particular no Brasil variam várias vezes entre um extremo e outro — e essa variação tem lógica. Explico o que está por trás do preço, por que uma boa avaliação inicial é longa, e como reembolso do plano e dedução no IR mudam a conta real.",
    "date": "18 Jun 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "quanto custa consulta psiquiatra",
      "consulta psiquiatra particular preço",
      "valor consulta psiquiátrica",
      "quanto custa psiquiatra particular 2026",
      "consulta psiquiatra é cara",
      "psiquiatra particular vale a pena",
      "reembolso consulta psiquiatra plano de saúde",
      "consulta psiquiatra imposto de renda",
      "quanto tempo dura consulta psiquiátrica",
      "frequência de retorno psiquiatra",
      "primeira consulta psiquiatra preço"
    ]
  },
  {
    "slug": "desvenlafaxina-pristiq-para-que-serve",
    "tag": "Psicofarmacologia",
    "title": "Desvenlafaxina (Pristiq): para que serve e o que muda em relação à venlafaxina",
    "metaTitle": "Desvenlafaxina (Pristiq): para que serve",
    "metaDescription": "Desvenlafaxina (Pristiq) é o metabólito ativo da venlafaxina. Psiquiatra explica para que serve, a dose de 50 mg, interações e diferenças reais.",
    "excerpt": "A desvenlafaxina é filha direta da venlafaxina — literalmente. Explico o que o metabolismo mais previsível muda na prática, por que 50 mg costuma bastar e o que é diferença real e o que é marketing na comparação com a molécula original.",
    "date": "17 Jun 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "desvenlafaxina para que serve",
      "pristiq para que serve",
      "pristiq 50 mg",
      "desvenlafaxina 50 mg efeitos colaterais",
      "desvenlafaxina ou venlafaxina",
      "pristiq engorda",
      "desvenlafaxina para ansiedade",
      "desvenlafaxina menopausa fogachos",
      "pristiq genérico",
      "antidepressivo dual desvenlafaxina",
      "desvenlafaxina interações medicamentosas"
    ]
  },
  {
    "slug": "tdpm-transtorno-disforico-pre-menstrual",
    "tag": "Saúde da Mulher",
    "title": "TDPM: o que é o transtorno disfórico pré-menstrual e como tratar",
    "metaTitle": "TDPM: transtorno disfórico pré-menstrual",
    "metaDescription": "TDPM é a forma grave da TPM: sintomas emocionais incapacitantes na fase lútea que atingem 3 a 8% das mulheres. Psiquiatra explica diagnóstico e tratamento.",
    "excerpt": "Não é frescura nem TPM exagerada: o transtorno disfórico pré-menstrual derruba 3 a 8% das mulheres todos os meses, com irritabilidade, desespero e brigas que somem quando a menstruação desce. Explico como se faz o diagnóstico e por que o tratamento responde de um jeito peculiar.",
    "date": "17 Jun 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "TDPM",
      "transtorno disfórico pré-menstrual",
      "TDPM sintomas",
      "diferença entre TPM e TDPM",
      "TPM muito forte o que fazer",
      "TDPM tem cura",
      "TDPM tratamento",
      "sertralina para TDPM",
      "diário de sintomas menstruais",
      "irritabilidade antes da menstruação",
      "anticoncepcional para TDPM",
      "psiquiatra TDPM Belo Horizonte"
    ]
  },
  {
    "slug": "zolpidem-para-que-serve-riscos",
    "tag": "Psicofarmacologia",
    "title": "Zolpidem: para que serve, riscos do uso crônico e como parar com segurança",
    "metaTitle": "Zolpidem: para que serve, riscos e como parar",
    "metaDescription": "Zolpidem: para que serve, por que o uso aprovado é de curto prazo, riscos como sonambulismo e amnésia, e como descontinuar com segurança e sem sofrimento.",
    "excerpt": "O zolpidem foi aprovado para tratar insônia por poucas semanas, mas virou remédio de uso diário para milhões de brasileiros. Explico como ele age, o que são os comportamentos complexos do sono e por que a TCC-I é a primeira linha.",
    "date": "16 Jun 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "zolpidem para que serve",
      "zolpidem riscos",
      "zolpidem vicia",
      "zolpidem sonambulismo",
      "zolpidem todos os dias faz mal",
      "como parar de tomar zolpidem",
      "zolpidem efeitos colaterais",
      "stilnox para que serve",
      "zolpidem amnésia",
      "remédio para dormir zolpidem",
      "hipnótico z",
      "tcc-i insônia"
    ]
  },
  {
    "slug": "sindrome-do-panico-sintomas-tratamento",
    "tag": "Ansiedade",
    "title": "Síndrome do pânico: sintomas, causas e tratamento do transtorno de pânico",
    "metaTitle": "Síndrome do pânico: sintomas e tratamento eficaz",
    "metaDescription": "Síndrome do pânico: por que os ataques acontecem, como sair do ciclo do medo do medo e por que o tratamento com ISRS e TCC tem alta taxa de resposta.",
    "excerpt": "Coração disparado, falta de ar, certeza de que algo gravíssimo está acontecendo — e exames normais. O transtorno de pânico é um dos quadros mais dramáticos e mais tratáveis da psiquiatria. Explico o ciclo do medo do medo e o caminho de saída.",
    "date": "16 Jun 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "síndrome do pânico",
      "transtorno de pânico sintomas",
      "ataque de pânico o que fazer",
      "síndrome do pânico tem cura",
      "tratamento síndrome do pânico",
      "medo de ter outra crise de pânico",
      "agorafobia sintomas",
      "pânico ou infarto diferença",
      "remédio para síndrome do pânico",
      "crise de pânico do nada",
      "psiquiatra pânico Belo Horizonte",
      "exposição interoceptiva TCC"
    ]
  },
  {
    "slug": "metilfenidato-ritalina-concerta-tdah",
    "tag": "Psicofarmacologia",
    "title": "Metilfenidato (Ritalina, Concerta) para TDAH: como age, apresentações e mitos",
    "metaTitle": "Metilfenidato para TDAH: Ritalina e Concerta",
    "metaDescription": "Metilfenidato (Ritalina, Ritalina LA, Concerta) no TDAH: como age no cérebro, diferenças entre apresentações, efeitos colaterais e o mito de que vicia.",
    "excerpt": "O estimulante mais prescrito para TDAH no Brasil também é um dos mais cercados de mitos. Explico como o metilfenidato age, as diferenças reais entre Ritalina, Ritalina LA e Concerta, e o que a evidência diz sobre dependência.",
    "date": "14 Jun 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "metilfenidato",
      "ritalina para tdah",
      "concerta tdah",
      "ritalina la",
      "ritalina vicia",
      "diferença entre ritalina e concerta",
      "efeitos colaterais da ritalina",
      "receita amarela metilfenidato",
      "remédio para tdah em adultos",
      "como age o metilfenidato",
      "ritalina para estudar funciona",
      "dose de metilfenidato adulto"
    ]
  },
  {
    "slug": "consulta-psiquiatra-online-telemedicina",
    "tag": "Psiquiatria",
    "title": "Consulta com psiquiatra online funciona? Evidência, regras do CFM e como é na prática",
    "metaTitle": "Consulta com psiquiatra online funciona? | Telemedicina",
    "metaDescription": "Consulta psiquiátrica online tem eficácia equivalente à presencial para a maioria dos quadros. Veja as regras do CFM, receita digital e os limites.",
    "excerpt": "A telemedicina em psiquiatria tem eficácia comparável à consulta presencial para a maioria dos quadros e é regulamentada pelo CFM desde 2022. Explico o que a evidência mostra, como funciona a receita digital, para quem o formato é ideal e quando o presencial ainda é necessário.",
    "date": "14 Jun 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "consulta psiquiatra online",
      "psiquiatra online funciona",
      "telemedicina psiquiatria",
      "consulta psiquiátrica por vídeo",
      "Resolução CFM 2.314/2022",
      "receita digital psiquiatra",
      "receita de controlado online",
      "psiquiatra online receita controlada",
      "teleconsulta psiquiatria eficácia",
      "psiquiatra por telemedicina todo o Brasil",
      "consulta online reembolso plano de saúde"
    ]
  },
  {
    "slug": "duloxetina-para-que-serve",
    "tag": "Psicofarmacologia",
    "title": "Duloxetina (Cymbalta, Velija): para que serve, doses e efeitos colaterais",
    "metaTitle": "Duloxetina: para que serve, doses e efeitos",
    "metaDescription": "Duloxetina (Cymbalta, Velija) trata depressão, ansiedade, dor neuropática e fibromialgia. Psiquiatra explica doses, efeitos colaterais e retirada.",
    "excerpt": "A duloxetina é um dos poucos antidepressivos com indicação formal também para dor neuropática e fibromialgia. Explico como ela age, para quem faz sentido, o que esperar dos efeitos colaterais e por que a retirada exige planejamento.",
    "date": "13 Jun 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "duloxetina para que serve",
      "cymbalta para que serve",
      "velija 60 mg",
      "duloxetina 60 mg efeitos colaterais",
      "duloxetina para fibromialgia",
      "duloxetina para dor neuropática",
      "duloxetina engorda",
      "duloxetina ou venlafaxina",
      "como parar de tomar duloxetina",
      "duloxetina para ansiedade",
      "antidepressivo dual",
      "duloxetina aumenta pressão"
    ]
  },
  {
    "slug": "depressao-pos-parto-sintomas-tratamento",
    "tag": "Saúde da Mulher",
    "title": "Depressão pós-parto: sintomas, diferença para baby blues e tratamento",
    "metaTitle": "Depressão pós-parto: sintomas e tratamento",
    "metaDescription": "Depressão pós-parto atinge cerca de 1 em cada 8 mulheres. Psiquiatra explica sintomas, diferença para baby blues e tratamento compatível com amamentação.",
    "excerpt": "O baby blues passa em duas semanas; a depressão pós-parto não. Explico como diferenciar os dois quadros, os sintomas de que ninguém fala — culpa, dificuldade de vínculo, pensamentos intrusivos — e por que é possível tratar sem interromper a amamentação.",
    "date": "13 Jun 2026",
    "readTime": "9 min de leitura",
    "keywords": [
      "depressão pós-parto",
      "depressão pós-parto sintomas",
      "baby blues ou depressão pós-parto",
      "quanto tempo dura o baby blues",
      "escala de Edimburgo depressão pós-parto",
      "tratamento depressão pós-parto amamentação",
      "sertralina amamentação",
      "psicose pós-parto",
      "depressão pós-parto paterna",
      "pensamentos ruins depois do parto",
      "psiquiatra pós-parto Belo Horizonte"
    ]
  },
  {
    "slug": "clonazepam-rivotril-para-que-serve",
    "tag": "Psicofarmacologia",
    "title": "Clonazepam (Rivotril): para que serve, riscos do uso crônico e retirada",
    "metaTitle": "Clonazepam (Rivotril): para que serve e riscos",
    "metaDescription": "Clonazepam (Rivotril): para que serve, quando o benzodiazepínico é indicado, riscos de dependência e prejuízo cognitivo e como é feita a retirada gradual.",
    "excerpt": "O ansiolítico mais consumido do Brasil foi desenhado para semanas de uso, não para anos. Explico para que o clonazepam realmente serve, o que o uso crônico cobra em troca e como é feita a retirada gradual com segurança.",
    "date": "12 Jun 2026",
    "readTime": "7 min de leitura",
    "keywords": [
      "clonazepam para que serve",
      "rivotril para que serve",
      "rivotril vicia",
      "clonazepam efeitos colaterais",
      "como parar de tomar rivotril",
      "clonazepam dependência",
      "benzodiazepínico meia-vida longa",
      "rivotril todos os dias faz mal",
      "clonazepam em idosos risco de queda",
      "retirada gradual de clonazepam",
      "clonazepam para ansiedade",
      "rivotril para dormir"
    ]
  },
  {
    "slug": "transtorno-ansiedade-generalizada-tag-sintomas",
    "tag": "Ansiedade",
    "title": "Transtorno de ansiedade generalizada (TAG): sintomas, diagnóstico e tratamento",
    "metaTitle": "TAG: sintomas da ansiedade generalizada e tratamento",
    "metaDescription": "Transtorno de ansiedade generalizada (TAG): como reconhecer a preocupação excessiva, os sintomas físicos e o que a psiquiatria usa no tratamento.",
    "excerpt": "Preocupação constante com tudo, tensão muscular, insônia e a sensação de que a cabeça nunca desliga. O TAG é um dos transtornos mais comuns no Brasil — e um dos mais banalizados. Explico como diferenciá-lo da ansiedade normal e o que funciona no tratamento.",
    "date": "12 Jun 2026",
    "readTime": "8 min de leitura",
    "keywords": [
      "transtorno de ansiedade generalizada",
      "TAG sintomas",
      "ansiedade generalizada tratamento",
      "preocupação excessiva o que fazer",
      "ansiedade generalizada tem cura",
      "sintomas físicos da ansiedade",
      "TAG DSM-5",
      "diferença entre ansiedade e TAG",
      "ansiedade e depressão juntas",
      "remédio para ansiedade generalizada",
      "psiquiatra ansiedade Belo Horizonte",
      "tensão muscular ansiedade"
    ]
  },
  {
    "slug": "reembolso-plano-de-saude-psiquiatra",
    "tag": "Tratamento",
    "title": "Reembolso de consulta psiquiátrica pelo plano de saúde: como funciona em cada operadora",
    "metaTitle": "Reembolso de psiquiatra: Unimed, Bradesco, Amil, Porto e mais",
    "metaDescription": "Passo a passo do reembolso de consulta psiquiátrica em cada operadora: Unimed, Bradesco, Amil, SulAmérica, Porto Saúde, IPSEMG e Cassi. Documentos, pedido médico, prazo de 30 dias e como evitar glosa.",
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
    "metaTitle": "Psiquiatra deduz no Imposto de Renda? Nota fiscal e restituição",
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
    "metaTitle": "Bupropiona: para que serve, efeitos e diferença para os ISRS",
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
