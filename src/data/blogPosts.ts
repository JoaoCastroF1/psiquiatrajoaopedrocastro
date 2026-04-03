export interface BlogPost {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "depressao-ou-tristeza",
    tag: "Depressão",
    title: "Depressão ou tristeza passageira? Como distinguir e quando procurar ajuda",
    excerpt:
      "Nem toda tristeza prolongada é depressão, e nem toda depressão se manifesta com tristeza. Entenda os sinais que diferenciam um luto normal de um quadro que precisa de tratamento.",
    date: "20 Mar 2026",
    readTime: "6 min de leitura",
    content: [
      "Sentir tristeza faz parte da experiência humana. Perdas, frustrações e mudanças de vida naturalmente geram desconforto emocional. Mas quando a tristeza se estende por semanas, compromete o funcionamento diário e vem acompanhada de outros sintomas, pode ser sinal de depressão — um transtorno que exige atenção clínica.",
      "A depressão é um transtorno psiquiátrico com base neurobiológica. Diferente da tristeza reativa, ela não depende proporcionalmente de um evento externo para surgir e, quando surge, costuma persistir independentemente de mudanças positivas no ambiente. O paciente muitas vezes descreve uma sensação de vazio, apatia ou exaustão emocional que vai além do \"estar triste\".",
      "Do ponto de vista clínico, o diagnóstico de Episódio Depressivo Maior exige a presença de pelo menos cinco sintomas por um período mínimo de duas semanas. Entre eles: humor deprimido na maior parte do dia, perda de interesse ou prazer nas atividades habituais, alterações no sono e apetite, fadiga, dificuldade de concentração, sentimentos de culpa excessiva e, em casos mais graves, pensamentos de morte.",
      "Um ponto frequentemente negligenciado é que a depressão nem sempre se apresenta com choro ou tristeza aparente. Em muitos adultos — especialmente homens e idosos — o quadro se manifesta como irritabilidade, dores físicas sem causa identificável, isolamento social ou queda de produtividade. Esses chamados \"equivalentes depressivos\" atrasam o diagnóstico, porque o paciente e seu entorno não reconhecem os sintomas como psiquiátricos.",
      "O luto, por outro lado, é um processo natural com ondas de tristeza que tendem a diminuir em intensidade e frequência ao longo do tempo. A pessoa enlutada geralmente preserva a capacidade de sentir momentos de alegria e mantém a autoestima relativamente intacta. Quando o luto se complica — com sintomas persistentes por mais de 12 meses, prejuízo funcional significativo ou ideação suicida — ele pode evoluir para o que chamamos de Transtorno de Luto Prolongado.",
      "Quando procurar ajuda? Se a tristeza persiste por mais de duas semanas, se você percebe que não consegue funcionar como antes, se o sono, o apetite ou a concentração estão prejudicados de forma consistente, é hora de buscar avaliação. O tratamento da depressão combina psicoterapia e, quando indicado, psicofarmacologia — com taxas de resposta que superam 70% quando bem conduzido.",
      "Buscar ajuda não é sinal de fraqueza. É uma decisão baseada em evidência e no cuidado consigo mesmo.",
    ],
  },
  {
    slug: "o-que-e-psicogeriatria",
    tag: "Psicogeriatria",
    title: "O que é psicogeriatria e por que ela importa depois dos 60",
    excerpt:
      "O envelhecimento muda a forma como o cérebro processa emoções, responde a medicamentos e manifesta doenças psiquiátricas. A psicogeriatria existe para lidar com essas diferenças.",
    date: "15 Mar 2026",
    readTime: "7 min de leitura",
    content: [
      "A psicogeriatria — também chamada de psiquiatria geriátrica — é a especialidade que trata transtornos mentais em idosos, levando em conta as particularidades biológicas, farmacológicas e sociais do envelhecimento. Não se trata apenas de aplicar a psiquiatria convencional em pacientes mais velhos: é uma abordagem que reconhece que o cérebro envelhecido funciona de forma diferente.",
      "Com o avanço da idade, ocorrem mudanças neuroquímicas que alteram a vulnerabilidade a transtornos como depressão, ansiedade, insônia e quadros demenciais. A metabolização de medicamentos se torna mais lenta, o risco de interações medicamentosas aumenta e os efeitos colaterais ganham relevância clínica diferente. Um antidepressivo seguro para um adulto de 35 anos pode causar confusão mental, quedas ou arritmias em um paciente de 75.",
      "A depressão no idoso é particularmente traiçoeira. Ela se apresenta com mais frequência como queixas somáticas (dores, cansaço, problemas digestivos), prejuízo cognitivo que mimetiza demência (a chamada \"pseudodemência depressiva\") e retraimento social que é erroneamente atribuído ao \"normal do envelhecimento\". Essa apresentação atípica faz com que muitos casos passem despercebidos por anos.",
      "Outro campo central da psicogeriatria é o manejo dos sintomas comportamentais e psicológicos das demências (SCPD): agitação, agressividade, delírios, alucinações e alterações do ciclo sono-vigília que afetam pacientes com Alzheimer e outras demências. O tratamento desses sintomas exige conhecimento farmacológico específico e cuidado extremo com a segurança do paciente.",
      "A avaliação psicogeriatria também inclui o rastreio cognitivo — identificar precocemente sinais de declínio que possam indicar um processo demencial em estágio inicial. Essa detecção precoce permite intervenções que retardam a progressão, orientam a família e preservam a autonomia do paciente pelo maior tempo possível.",
      "O trabalho do psicogeriatra é sempre multidisciplinar: envolve a comunicação com geriatras, neurologistas, cuidadores e familiares. A família é parte central do tratamento, tanto como fonte de informação quanto como rede de suporte que precisa ser orientada e, muitas vezes, acolhida.",
      "Se você tem um familiar idoso com mudanças de comportamento, humor ou cognição, a avaliação psicogeriatria pode oferecer clareza diagnóstica e um plano de cuidado que respeite a complexidade dessa fase da vida.",
    ],
  },
  {
    slug: "tdah-em-adultos",
    tag: "TDAH",
    title: "TDAH em adultos: por que tantos diagnósticos chegam tarde",
    excerpt:
      "Procrastinação, impulsividade, dificuldade de foco. Em adultos, o TDAH raramente se apresenta como a hiperatividade infantil clássica, o que atrasa o diagnóstico por anos.",
    date: "10 Mar 2026",
    readTime: "6 min de leitura",
    content: [
      "O Transtorno de Déficit de Atenção e Hiperatividade (TDAH) é uma condição do neurodesenvolvimento que, ao contrário do que se acreditava há décadas, não desaparece na idade adulta. Estudos mostram que cerca de 60% das crianças com TDAH mantêm sintomas clinicamente significativos na vida adulta — muitas vezes sem jamais terem recebido o diagnóstico.",
      "No adulto, o TDAH raramente se manifesta como a hiperatividade motora clássica da infância. O que predomina são sintomas de desatenção: dificuldade em manter o foco em tarefas longas ou repetitivas, procrastinação crônica, esquecimentos frequentes, dificuldade de organização e uma sensação persistente de que o potencial não é plenamente realizado.",
      "A hiperatividade, quando presente, costuma se expressar como inquietação interna, dificuldade de relaxar, impaciência e uma tendência a buscar estímulos constantes. A impulsividade pode se manifestar em decisões financeiras precipitadas, interrupções em conversas, trocas frequentes de emprego ou relacionamento e dificuldade de controlar reações emocionais.",
      "Um dos maiores obstáculos ao diagnóstico é que muitos adultos com TDAH desenvolveram estratégias compensatórias ao longo da vida. São pessoas inteligentes que \"deram um jeito\" de funcionar — até que a demanda aumenta (um novo cargo, a chegada de filhos, o acúmulo de responsabilidades) e as estratégias deixam de ser suficientes. É nesse ponto de ruptura que a maioria busca ajuda.",
      "O diagnóstico de TDAH em adultos é essencialmente clínico. Não existe exame de imagem ou teste laboratorial que confirme o transtorno. A avaliação envolve história detalhada dos sintomas desde a infância, análise do impacto funcional atual, exclusão de outros transtornos que podem mimetizar o TDAH (como ansiedade, depressão, bipolaridade e uso de substâncias) e, frequentemente, informações colaterais de familiares.",
      "O tratamento, quando bem indicado, costuma ser transformador. A combinação de psicoeducação, estratégias comportamentais e, em muitos casos, medicação estimulante oferece melhora significativa na atenção, organização e qualidade de vida. A resposta à medicação no TDAH é uma das mais robustas em toda a psiquiatria, com taxas de eficácia superiores a 70%.",
      "Se você se identifica com esses sintomas e percebe que eles afetam sua vida de forma consistente, a avaliação psiquiátrica pode trazer clareza e abrir caminhos concretos de melhora.",
    ],
  },
  {
    slug: "insonia-cronica-saude-mental",
    tag: "Sono",
    title: "Insônia crônica e saúde mental: o que veio primeiro?",
    excerpt:
      "A insônia costuma ser o primeiro sinal de que algo está errado e o último problema a ser tratado com seriedade. Entenda por que o sono merece atenção clínica dedicada.",
    date: "5 Mar 2026",
    readTime: "5 min de leitura",
    content: [
      "A insônia é o transtorno de sono mais prevalente na população adulta, afetando entre 10% e 15% das pessoas de forma crônica. Mais do que um incômodo noturno, a insônia persistente está associada ao aumento do risco de depressão, ansiedade, hipertensão, diabetes e declínio cognitivo. Tratá-la como um sintoma menor é um erro clínico frequente.",
      "A relação entre insônia e transtornos mentais é bidirecional. A insônia pode ser um sintoma precoce de depressão ou ansiedade — muitas vezes precedendo o quadro clínico completo em semanas ou meses. Ao mesmo tempo, a privação crônica de sono altera o funcionamento do córtex pré-frontal e da amígdala, aumentando a reatividade emocional e diminuindo a capacidade de regulação afetiva. Em outras palavras: dormir mal piora a saúde mental, e a saúde mental prejudicada piora o sono.",
      "Na prática clínica, é comum encontrar pacientes que usam benzodiazepínicos há anos para dormir — medicações que, embora eficazes no curto prazo, perdem eficácia com o tempo, geram dependência e aumentam o risco de quedas e comprometimento cognitivo, especialmente em idosos. A revisão e racionalização dessas prescrições é parte fundamental do trabalho psiquiátrico.",
      "O tratamento de primeira linha para insônia crônica, segundo as diretrizes internacionais, é a Terapia Cognitivo-Comportamental para Insônia (TCC-I). Essa abordagem atua sobre os hábitos e crenças que perpetuam o problema: restrição de tempo na cama, controle de estímulos, higiene do sono e reestruturação cognitiva sobre o ato de dormir.",
      "Quando a medicação é necessária, existem opções mais seguras que os benzodiazepínicos tradicionais — incluindo moduladores de melatonina, antagonistas de orexina e antidepressivos em doses baixas com perfil sedativo. A escolha depende do perfil do paciente, das comorbidades presentes e da meta terapêutica.",
      "O sono não é luxo, é um pilar biológico. Se você dorme mal há mais de três meses, com impacto na sua energia, humor ou desempenho diurno, uma avaliação especializada pode identificar causas tratáveis e propor soluções que vão além do \"tome um chá e desligue o celular\".",
    ],
  },
];
