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
  {
    slug: "ansiedade-no-vestibular",
    tag: "Ansiedade",
    title: "Ansiedade no vestibular: quando é só pressão e quando é um quadro clínico",
    excerpt:
      "Nervosismo antes da prova é esperado. Mas quando a ansiedade trava o raciocínio, rouba o sono e paralisa a rotina de estudos, pode haver um quadro que merece avaliação psiquiátrica.",
    date: "2 Abr 2026",
    readTime: "7 min de leitura",
    content: [
      "Sentir ansiedade diante de uma prova importante é uma resposta biológica normal. O sistema nervoso reconhece a situação como relevante, libera adrenalina e cortisol, e o corpo se prepara para responder. Em doses adequadas, essa ativação melhora o estado de alerta e pode até favorecer o desempenho. O problema começa quando a ansiedade ultrapassa esse ponto e passa a atrapalhar.",
      "No contexto do vestibular, a linha entre ansiedade funcional e ansiedade patológica nem sempre é óbvia. A pressão por aprovação, a comparação com colegas, a carga horária de cursinho, a cobrança familiar e a sensação de que o futuro inteiro depende de uma prova criam um cenário propício para o desenvolvimento de quadros ansiosos — especialmente em quem já tem vulnerabilidade biológica.",
      "Os sinais de que a ansiedade deixou de ser adaptativa incluem: dificuldade persistente de concentração mesmo em ambientes calmos, tensão muscular crônica, irritabilidade desproporcional, crises de choro sem gatilho claro, insônia de início ou manutenção, sensação de aperto no peito, taquicardia em repouso, náuseas antes de simulados e a famosa sensação de 'branco' durante provas — quando o aluno sabe o conteúdo mas não consegue acessá-lo sob pressão.",
      "Do ponto de vista clínico, esses sintomas podem configurar um Transtorno de Ansiedade Generalizada (TAG), um Transtorno de Pânico ou, em alguns casos, um quadro misto com componentes depressivos. O diagnóstico diferencial é importante porque cada condição tem manejo específico.",
      "Um aspecto que merece atenção especial é a relação entre ansiedade e sono. Muitos vestibulandos relatam que não conseguem 'desligar a cabeça' à noite, repassam mentalmente conteúdos ou cenários de fracasso, e acordam com sensação de cansaço. Esse padrão de hiperativação noturna prejudica a consolidação da memória — justamente o processo cerebral que transforma estudo em aprendizado duradouro.",
      "Outro ponto clinicamente relevante é a automedicação. Parte dos estudantes recorre a substâncias para lidar com a pressão: cafeína em doses altas, energéticos, suplementos sem orientação médica e, em alguns casos, estimulantes obtidos sem prescrição. Esse comportamento pode mascarar sintomas, piorar a ansiedade de rebote e criar riscos cardiovasculares e psiquiátricos reais.",
      "O tratamento da ansiedade em vestibulandos não significa medicalizar o esforço. Significa identificar quando existe um quadro clínico que está impedindo o estudante de funcionar no nível que ele conseguiria se estivesse bem. Em muitos casos, a intervenção combina psicoeducação, ajuste de hábitos de sono e rotina, psicoterapia focada e, quando indicado, medicação por tempo definido.",
      "Se você estuda na região de Lourdes, em BH, e percebe que a ansiedade está atrapalhando mais do que ajudando, uma avaliação psiquiátrica pode esclarecer o que está acontecendo e indicar o caminho mais adequado para o seu caso. O consultório fica na Rua dos Timbiras, 1940, sala 1515 — perto do Bernoulli, Hplus Med, SOMA, Determinante e outros cursinhos da região.",
    ],
  },
  {
    slug: "tdah-adultos-jovens-estudos",
    tag: "TDAH",
    title: "TDAH em adultos jovens: como identificar quando está atrapalhando seus estudos",
    excerpt:
      "Procrastinação crônica, dificuldade de manter foco, sensação de estar sempre atrasado. Em muitos adultos jovens, esses sinais apontam para um TDAH que nunca foi diagnosticado.",
    date: "2 Abr 2026",
    readTime: "8 min de leitura",
    content: [
      "O TDAH em adultos jovens é uma das condições mais subdiagnosticadas da psiquiatria contemporânea. Muitos estudantes universitários e vestibulandos convivem durante anos com dificuldades que atribuem à falta de disciplina, preguiça ou desorganização pessoal — quando, na verdade, podem ter um transtorno do neurodesenvolvimento que afeta diretamente a capacidade de atenção, planejamento e execução.",
      "Diferente da imagem clássica da criança hiperativa que não para quieta na sala de aula, o TDAH no adulto jovem costuma se apresentar de forma mais sutil. Os sintomas predominantes são desatenção, dificuldade de organização, procrastinação crônica, sensação de sobrecarga diante de tarefas com muitas etapas, tendência a começar projetos e não terminar, e uma dificuldade persistente de estimar o tempo necessário para completar atividades.",
      "No contexto de estudos intensivos — como a preparação para vestibulares de Medicina e outros cursos concorridos —, o TDAH pode ser particularmente prejudicial. O estudante com TDAH frequentemente relata que consegue se concentrar em assuntos que lhe interessam (o chamado hiperfoco), mas não consegue sustentar atenção em matérias que considera monótonas ou em revisões longas. Essa inconsistência gera frustração, culpa e, com o tempo, desmotivação.",
      "Outro padrão comum é a dificuldade com a gestão do tempo. Aulas, simulados, revisões, exercícios e descanso precisam caber em uma semana — e o estudante com TDAH frequentemente subestima o tempo necessário para cada tarefa, posterga atividades importantes em favor de urgências menores e chega ao final do dia com a sensação de que trabalhou muito mas produziu pouco.",
      "É importante destacar que o TDAH em adultos jovens frequentemente coexiste com outros quadros: ansiedade, depressão, baixa autoestima crônica e dificuldades de regulação emocional. Essa sobreposição pode dificultar o diagnóstico, já que os sintomas se confundem. Um estudante ansioso e desatento pode ter ansiedade primária que prejudica a concentração, TDAH que gera ansiedade secundária, ou ambos os diagnósticos coexistindo. A avaliação psiquiátrica cuidadosa é o que diferencia essas situações.",
      "O diagnóstico de TDAH em adultos é clínico e exige história detalhada dos sintomas ao longo da vida. Não existe exame de sangue ou de imagem que confirme o transtorno. A avaliação inclui revisão dos sintomas na infância e adolescência, análise do funcionamento atual em diferentes contextos, exclusão de outras condições que mimetizam o TDAH e, frequentemente, informações de familiares que conhecem a trajetória do paciente.",
      "O tratamento do TDAH, quando bem indicado, costuma ter impacto significativo na qualidade de vida e na capacidade de estudo. A combinação de psicoeducação — entender o que é o transtorno e como ele afeta o funcionamento —, estratégias de organização e planejamento, psicoterapia e, quando indicado, medicação estimulante, oferece resultados consistentes. A resposta à medicação no TDAH é uma das mais robustas da psiquiatria, com eficácia superior a 70% dos casos.",
      "Se você é estudante na região de Lourdes, em Belo Horizonte, e se identifica com essas dificuldades, uma avaliação pode trazer clareza sobre o que está acontecendo. O consultório do Dr. João Pedro Castro fica na Rua dos Timbiras, 1940, sala 1515 — próximo ao Bernoulli, Hplus Med, SOMA, Determinante e Acerta. Cuidar da saúde mental durante o período de preparação para o vestibular é investir no seu funcionamento, não em um atalho.",
    ],
  },
];
