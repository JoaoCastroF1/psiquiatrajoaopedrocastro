export interface BlogFaqItem {
  question: string;
  answer: string;
}

// Perguntas frequentes por slug do post. Importado apenas por quem renderiza
// o artigo completo (BlogPost), para nao inflar o bundle das listagens.
// Cada bloco vira uma secao visivel no artigo + schema FAQPage (JSON-LD),
// o que ajuda featured snippets no Google e citacao por assistentes de IA.
export const blogFaqs: Record<string, BlogFaqItem[]> = {
  "lamotrigina-transtorno-bipolar": [
    {
      "question": "Lamotrigina engorda?",
      "answer": "Não. A lamotrigina é neutra em relação ao peso, uma das grandes vantagens práticas sobre outros estabilizadores e antipsicóticos usados no transtorno bipolar, que frequentemente causam ganho de peso e alterações metabólicas. Para pacientes em que o ganho de peso foi motivo de abandono de tratamentos anteriores, esse perfil limpo costuma pesar na escolha."
    },
    {
      "question": "Quanto tempo demora para a lamotrigina fazer efeito?",
      "answer": "Mais do que a maioria dos psicofármacos, porque a dose precisa subir devagar por segurança. O esquema usual leva cerca de seis semanas para alcançar a faixa-alvo de 200 mg por dia, e o efeito preventivo pleno se avalia ao longo dos meses seguintes. É um investimento de médio prazo: a lamotrigina trabalha prevenindo o próximo episódio depressivo, não apagando o atual."
    },
    {
      "question": "O que é o rash da lamotrigina e quando me preocupar?",
      "answer": "Rash é uma erupção na pele que pode surgir nas primeiras semanas de uso. A maioria dos casos é benigna, mas raramente evolui para reações graves como a síndrome de Stevens-Johnson. Por isso a regra é única: qualquer mancha ou lesão de pele nas primeiras oito semanas exige contato imediato com o médico e, em geral, suspensão do medicamento até avaliação. Titulação lenta reduz muito esse risco."
    },
    {
      "question": "Lamotrigina serve para depressão comum?",
      "answer": "Não é tratamento de primeira linha para depressão unipolar — a evidência que sustenta a lamotrigina é na depressão do transtorno bipolar, sobretudo na prevenção de novos episódios depressivos. Em depressão resistente ela aparece apenas como estratégia de potencialização em casos selecionados. Se o diagnóstico é depressão unipolar, os antidepressivos convencionais continuam sendo o caminho com melhor respaldo."
    },
    {
      "question": "Posso parar a lamotrigina de uma vez?",
      "answer": "Não pare por conta própria. Além do risco de recaída depressiva, há um detalhe importante: se a lamotrigina for interrompida por mais de alguns dias, a retomada exige recomeçar a titulação do início, com 25 mg, porque a tolerância de pele se perde. Interrupções e retomadas na dose cheia aumentam o risco de rash grave. Qualquer mudança deve ser planejada com o médico."
    }
  ],
  "canabidiol-cbd-ansiedade-evidencia": [
    {
      "question": "CBD dá 'barato' ou vicia?",
      "answer": "Não. O canabidiol não é psicoativo no sentido do THC: não produz euforia, não altera a percepção e não tem potencial de dependência conhecido — a OMS o classifica como substância de baixo risco de abuso. Isso não significa ausência de efeitos: sonolência, alterações gastrointestinais, elevação de enzimas hepáticas e interações medicamentosas ocorrem, especialmente em doses altas."
    },
    {
      "question": "O CBD é aprovado pela ANVISA para ansiedade?",
      "answer": "Não. Os produtos de cannabis regulamentados pela ANVISA são autorizados como produtos sujeitos a prescrição médica, mas não existe aprovação de indicação formal para transtornos de ansiedade — a evidência ainda é considerada preliminar. A única indicação com evidência robusta e reconhecimento amplo em agências regulatórias é o tratamento de epilepsias raras e graves, como as síndromes de Dravet e Lennox-Gastaut."
    },
    {
      "question": "Preciso de receita para comprar canabidiol no Brasil?",
      "answer": "Sim. Produtos à base de cannabis vendidos em farmácia exigem prescrição médica (receituário de controle), e a importação direta pelo paciente é regulamentada pela RDC 660/2022 da ANVISA, que também exige prescrição. Produtos vendidos sem receita, em sites ou lojas de suplementos, estão fora da regulamentação — sem garantia de teor, pureza ou mesmo de conter CBD."
    },
    {
      "question": "CBD interage com antidepressivos e outros remédios?",
      "answer": "Sim, e isso é subestimado. O canabidiol inibe enzimas hepáticas do citocromo P450, podendo elevar os níveis de vários medicamentos — anticonvulsivantes como o clobazam, anticoagulantes, alguns antidepressivos e antipsicóticos. Também pode somar sedação com outros depressores. Quem usa medicação contínua deve informar o médico antes de iniciar CBD, nunca associar por conta própria."
    },
    {
      "question": "Qual a diferença entre CBD e THC?",
      "answer": "São os dois canabinoides principais da planta, com efeitos quase opostos em saúde mental. O THC é o componente psicoativo: produz a 'onda', pode desencadear ansiedade, pânico e, em pessoas vulneráveis, sintomas psicóticos — com risco maior em uso precoce e produtos de alta potência. O CBD não é psicoativo nesse sentido e vem sendo estudado justamente por possíveis efeitos ansiolíticos e antipsicóticos."
    }
  ],
  "distimia-transtorno-depressivo-persistente": [
    {
      "question": "Qual a diferença entre distimia e depressão?",
      "answer": "A depressão maior é episódica e intensa: sintomas mais numerosos e graves, presentes quase todos os dias por pelo menos duas semanas. A distimia é crônica e de menor intensidade: humor deprimido na maior parte dos dias por, no mínimo, dois anos, com menos sintomas simultâneos. A depressão derruba; a distimia desgasta lentamente, por anos."
    },
    {
      "question": "Distimia tem cura?",
      "answer": "A distimia tem tratamento eficaz. Com a combinação de medicação antidepressiva e psicoterapia, uma parcela expressiva dos pacientes alcança remissão dos sintomas ou melhora substancial, mesmo após décadas de quadro. Por ser condição crônica, falo em controle sustentado mais do que em cura definitiva, e o tratamento costuma ser mais prolongado que o da depressão episódica."
    },
    {
      "question": "O que é depressão dupla?",
      "answer": "É quando um episódio de depressão maior se sobrepõe a uma distimia já existente: a pessoa que vive cronicamente desanimada afunda, por semanas ou meses, num quadro nitidamente mais grave. É comum ao longo da vida de quem tem distimia e frequentemente é esse mergulho — e não o quadro crônico — que finalmente leva a pessoa ao psiquiatra."
    },
    {
      "question": "Como sei se sou pessimista ou se tenho distimia?",
      "answer": "Pessimismo é um traço de visão de mundo; distimia é humor deprimido na maior parte dos dias, por dois anos ou mais, acompanhado de sintomas como cansaço, sono ruim, baixa autoestima, dificuldade de concentração ou desesperança, com prejuízo real no trabalho e nos relacionamentos. Se a descrição soa familiar e constante, vale uma avaliação psiquiátrica formal."
    },
    {
      "question": "Distimia aparece em exame de sangue ou teste?",
      "answer": "Não. O diagnóstico de distimia é clínico: baseia-se na história detalhada dos sintomas, do tempo de evolução e do impacto funcional, segundo critérios do DSM-5-TR e da CID. Exames de sangue servem para excluir causas médicas que imitam o quadro, como hipotireoidismo, anemia e deficiência de vitaminas — parte obrigatória da avaliação inicial."
    }
  ],
  "apneia-do-sono-ansiedade-depressao": [
    {
      "question": "Apneia do sono pode causar depressão e ansiedade?",
      "answer": "Pode causar e pode imitar. A fragmentação do sono e as quedas repetidas de oxigênio produzem cansaço, desânimo, irritabilidade, ansiedade e falta de concentração — o mesmo cardápio de sintomas da depressão e da ansiedade. Estudos mostram taxas elevadas de sintomas depressivos em quem tem apneia, e melhora significativa do humor em muitos pacientes após o tratamento adequado com CPAP."
    },
    {
      "question": "Quais são os principais sinais de apneia do sono?",
      "answer": "Ronco alto e frequente, pausas na respiração testemunhadas pelo parceiro, engasgos ou sensação de sufocamento durante a noite, sono não restaurador, sonolência diurna excessiva, dor de cabeça ao acordar, idas repetidas ao banheiro de madrugada e dificuldade de concentração e memória. Nem todo mundo que ronca tem apneia, mas ronco com pausas e sonolência diurna exige investigação."
    },
    {
      "question": "Quem deve fazer polissonografia?",
      "answer": "Quem tem ronco com pausas respiratórias testemunhadas, sonolência diurna significativa, sono não restaurador persistente ou hipertensão de difícil controle — e, no contexto psiquiátrico, quem tem depressão que não responde bem aos tratamentos, sobretudo com fadiga desproporcional. A polissonografia mede o índice de apneias e hipopneias por hora e classifica a gravidade; há também versões domiciliares para casos selecionados."
    },
    {
      "question": "CPAP melhora a depressão?",
      "answer": "Quando os sintomas depressivos são causados ou agravados pela apneia, sim — a melhora do sono com CPAP frequentemente reduz fadiga, irritabilidade e humor deprimido, às vezes de forma marcante nas primeiras semanas. Quando existe depressão independente da apneia, o CPAP trata a parte respiratória e o quadro depressivo segue precisando de tratamento próprio. As duas condições podem e devem ser tratadas em paralelo."
    },
    {
      "question": "Remédio para dormir piora a apneia?",
      "answer": "Benzodiazepínicos (como clonazepam e diazepam) e álcool pioram, sim: relaxam ainda mais a musculatura da garganta e reduzem a capacidade do cérebro de reagir à queda de oxigênio, aumentando o número e a duração das apneias. Por isso a queixa de sono ruim deve ser investigada antes de sedada. Existem opções mais seguras para quem tem apneia, sempre com avaliação médica individual."
    }
  ],
  "antidepressivo-engorda-ganho-de-peso": [
    {
      "question": "Qual antidepressivo mais engorda?",
      "answer": "A mirtazapina é a mais associada a ganho de peso, por bloquear intensamente os receptores de histamina e estimular o apetite desde as primeiras semanas. Entre os ISRS, a paroxetina é a que mais engorda no uso prolongado. Os tricíclicos, como a amitriptilina, também têm ganho relevante. O efeito varia de pessoa para pessoa, mas essas três lideram de forma consistente os estudos comparativos."
    },
    {
      "question": "Sertralina engorda?",
      "answer": "A sertralina tem efeito intermediário e geralmente modesto sobre o peso. No curto prazo é praticamente neutra, podendo até reduzir o apetite nas primeiras semanas; no uso prolongado, parte dos pacientes ganha algo em torno de um a dois quilos, e outros não ganham nada. Ganhos maiores merecem investigação de outros fatores, como recuperação do apetite, hábitos e outras medicações associadas."
    },
    {
      "question": "Existe antidepressivo que emagrece?",
      "answer": "A bupropiona é o antidepressivo mais consistentemente associado a neutralidade ou leve perda de peso, por seu mecanismo dopaminérgico e noradrenérgico com discreto efeito redutor de apetite. A fluoxetina também tende à neutralidade, com possível perda no início do tratamento. Nenhum antidepressivo deve ser escolhido como remédio para emagrecer: a escolha se baseia na eficácia para o quadro, e o peso é um dos critérios."
    },
    {
      "question": "Por que antidepressivo engorda?",
      "answer": "Por três mecanismos principais: bloqueio dos receptores de histamina H1, que aumenta apetite e sedação; alterações serotoninérgicas de longo prazo, que favorecem desejo por carboidratos; e a própria recuperação da depressão, que devolve o apetite e o prazer de comer a quem os havia perdido. Fatores individuais, genética, sono e outras medicações associadas, como antipsicóticos, também pesam no resultado final."
    },
    {
      "question": "Devo trocar de antidepressivo se engordar?",
      "answer": "Nunca por conta própria. O ganho de peso é um motivo legítimo para rediscutir o tratamento, mas a troca precisa pesar o risco de recaída, a resposta que foi obtida e as alternativas reais. Muitas vezes ajustes de estilo de vida, correção do sono ou mudança de dose resolvem sem trocar o fármaco. Interromper ou substituir abruptamente um antidepressivo eficaz pode custar a estabilidade conquistada."
    }
  ],
  "depressao-em-homens-sinais": [
    {
      "question": "Quais são os sinais de depressão em homens?",
      "answer": "Além dos sintomas clássicos (tristeza, desânimo, perda de prazer), a depressão em homens frequentemente aparece como irritabilidade constante, explosões de raiva, aumento do consumo de álcool, mergulho excessivo no trabalho, queixas físicas sem causa aparente (dores, cansaço, insônia), afastamento da família e comportamentos de risco. Quando o comportamento de alguém muda de forma sustentada, vale investigar."
    },
    {
      "question": "Por que homens se suicidam mais que mulheres?",
      "answer": "No Brasil e no mundo, homens morrem por suicídio três a quatro vezes mais que mulheres, embora tentativas sejam mais frequentes entre elas. Contribuem o uso de meios mais letais, o maior consumo de álcool e, principalmente, a busca muito menor por ajuda: a depressão masculina é menos diagnosticada e menos tratada. É uma tragédia em grande parte evitável, porque a doença de base responde bem a tratamento."
    },
    {
      "question": "Irritabilidade pode ser depressão?",
      "answer": "Sim. A irritabilidade é um dos equivalentes depressivos mais comuns em homens: em vez de tristeza visível, aparecem pavio curto, impaciência com filhos e cônjuge, explosões desproporcionais e hostilidade no trabalho. O DSM-5 reconhece o humor irritável como manifestação depressiva. Se a irritação é persistente, representa mudança em relação ao habitual e vem com insônia, cansaço ou perda de prazer, merece avaliação."
    },
    {
      "question": "Como convencer um homem a procurar psiquiatra?",
      "answer": "Evite confronto e rótulos; funciona melhor apontar fatos concretos e reversíveis: você não está dormindo, está explodindo com as crianças, isso não é você. Enquadrar a consulta como avaliação de saúde — checar sono, energia, estresse — reduz resistência, assim como oferecer ajuda prática (marcar horário, acompanhar). A telemedicina também diminui barreiras. Em caso de menção a morte ou suicídio, a busca deve ser imediata."
    },
    {
      "question": "O tratamento da depressão funciona igual em homens?",
      "answer": "Sim. Antidepressivos e psicoterapia têm eficácia equivalente em homens e mulheres — não existe depressão mais difícil por gênero, existe depressão menos tratada. Questões específicas, como efeitos sexuais da medicação, devem ser conversadas abertamente com o médico, pois têm manejo. O maior desafio masculino não é a resposta ao tratamento, e sim começá-lo e mantê-lo."
    }
  ],
  "transtorno-bipolar-sintomas-tipos-diagnostico": [
    {
      "question": "Qual a diferença entre transtorno bipolar tipo 1 e tipo 2?",
      "answer": "O tipo I exige pelo menos um episódio de mania plena: no mínimo sete dias de humor elevado ou irritável com grande aumento de energia, frequentemente com prejuízo grave ou internação. O tipo II combina episódios de hipomania — mais curtos e sem prejuízo grave — com episódios depressivos maiores. O tipo II não é uma forma leve: a carga de depressão costuma ser tão ou mais incapacitante."
    },
    {
      "question": "Mudança rápida de humor no mesmo dia é bipolaridade?",
      "answer": "Em geral, não. O transtorno bipolar é uma doença de episódios que duram dias a semanas, não de oscilações de minutos ou horas. Irritabilidade e variação emocional ao longo do dia são mais típicas de ansiedade, depressão, TDAH ou traços de personalidade. A avaliação psiquiátrica diferencia esses padrões, porque o tratamento de cada um é completamente diferente."
    },
    {
      "question": "Quem tem transtorno bipolar pode tomar antidepressivo?",
      "answer": "Antidepressivo isolado, sem estabilizador de humor, é arriscado no transtorno bipolar: pode induzir virada maníaca ou hipomaníaca e acelerar os ciclos da doença. Quando indicado, o antidepressivo entra em combinação com um estabilizador e sob monitorização próxima. Essa é uma das razões pelas quais distinguir depressão bipolar de depressão unipolar muda por completo a conduta."
    },
    {
      "question": "Transtorno bipolar tem cura?",
      "answer": "É uma condição crônica, sem cura no sentido estrito, mas com tratamento altamente eficaz. Com estabilizador de humor adequado, psicoeducação e regularidade de sono e rotina, a maioria das pessoas alcança longos períodos de estabilidade e vida plena — trabalho, estudos, relacionamentos. O objetivo do tratamento é prevenir novos episódios, e ele é alcançável na maior parte dos casos."
    },
    {
      "question": "Como é feito o diagnóstico de transtorno bipolar?",
      "answer": "O diagnóstico é clínico, baseado nos critérios do DSM-5-TR: entrevista detalhada sobre episódios atuais e passados de depressão, mania e hipomania, história familiar, curso da doença e resposta a tratamentos anteriores. Relatos de familiares ajudam muito, porque a pessoa raramente reconhece a própria hipomania. Não há exame de sangue ou imagem que confirme o diagnóstico."
    }
  ],
  "exercicio-fisico-depressao-ansiedade-evidencia": [
    {
      "question": "Exercício físico substitui antidepressivo?",
      "answer": "Depende da gravidade. Na depressão leve, o exercício estruturado pode ser tratamento de primeira linha, com efeito comparável ao de medicação e psicoterapia nas metanálises. Nos quadros moderados a graves, ele funciona como adjuvante — soma-se ao tratamento e melhora os resultados, mas não substitui antidepressivo nem psicoterapia. Suspender medicação por conta própria para 'trocar por academia' é receita de recaída."
    },
    {
      "question": "Qual o melhor exercício para depressão e ansiedade?",
      "answer": "O melhor exercício é o que você consegue manter. Dito isso, a evidência é mais forte para exercício aeróbico (caminhada rápida, corrida, bicicleta, dança) e para treino de força, com sinal de que intensidades moderadas a vigorosas e programas supervisionados ou em grupo produzem efeitos maiores. Ioga também tem evidência favorável, especialmente em ansiedade."
    },
    {
      "question": "Quanto tempo de exercício por semana é preciso para ter efeito?",
      "answer": "A referência é a recomendação da OMS: 150 minutos semanais de atividade aeróbica moderada — por exemplo, cinco caminhadas rápidas de 30 minutos — mais fortalecimento muscular duas vezes por semana. Estudos mostram, porém, que doses menores já produzem benefício em relação ao sedentarismo: o maior salto de ganho está entre não fazer nada e fazer alguma coisa."
    },
    {
      "question": "Por que não consigo começar a me exercitar estando deprimido?",
      "answer": "Porque a depressão ataca exatamente os sistemas necessários para começar: energia, motivação e capacidade de sentir prazer (anedonia). Não é preguiça nem falta de força de vontade — é sintoma. Por isso a prescrição precisa ser realista: metas mínimas, começar com minutos e não com horas, apoio externo e, nos quadros moderados a graves, tratar a depressão em paralelo para destravar o comportamento."
    },
    {
      "question": "Musculação também ajuda ou só exercício aeróbico?",
      "answer": "Musculação ajuda. Metanálises mostram que o treinamento de força reduz sintomas depressivos e ansiosos com magnitude semelhante à do aeróbico, além dos ganhos de massa muscular, óssea e metabólica — especialmente relevantes em idosos. A combinação de aeróbico e força, recomendada pela OMS, é o arranjo com melhor suporte para saúde física e mental ao mesmo tempo."
    }
  ],
  "vortioxetina-brintellix-para-que-serve": [
    {
      "question": "Vortioxetina é melhor que os outros antidepressivos?",
      "answer": "Não em eficácia global. Para melhora do humor, a vortioxetina é comparável aos ISRS e outros antidepressivos de primeira linha. Seus diferenciais são o efeito mais bem documentado sobre sintomas cognitivos da depressão e a baixa taxa de disfunção sexual. Para muitos pacientes, um ISRS clássico resolve igualmente bem, com custo muito menor."
    },
    {
      "question": "Brintellix melhora a memória e a concentração?",
      "answer": "Em pacientes com depressão, há evidência de que a vortioxetina melhora velocidade de processamento, atenção e funções executivas, com parte do efeito independente da melhora do humor. Isso não faz dela um estimulante cognitivo para pessoas sem depressão — o benefício foi demonstrado no contexto do episódio depressivo, não como \"remédio para memória\"."
    },
    {
      "question": "Brintellix engorda?",
      "answer": "Ganho de peso não é característico da vortioxetina. Nos estudos clínicos, o peso permaneceu em média estável mesmo em uso prolongado, o que a coloca entre os antidepressivos mais neutros nesse quesito. Alterações de peso durante o uso devem ser discutidas com o médico, pois podem ter outras causas, incluindo o próprio quadro depressivo."
    },
    {
      "question": "Qual o efeito colateral mais comum da vortioxetina?",
      "answer": "Náusea, de longe. Ela ocorre em cerca de um quarto a um terço dos pacientes, é dose-dependente, costuma aparecer nos primeiros dias e melhorar em uma a duas semanas. Tomar com alimento ajuda. Vômito e constipação também podem ocorrer. Sedação, ganho de peso e disfunção sexual são menos frequentes que com outros antidepressivos."
    },
    {
      "question": "Existe genérico de vortioxetina no Brasil?",
      "answer": "Até a data deste texto, não há genérico de vortioxetina amplamente disponível no Brasil, e o Brintellix segue entre os antidepressivos mais caros do mercado. O custo mensal é limitação real para tratamento que dura muitos meses. Vale conferir preços atualizados e programas de desconto do fabricante, e discutir alternativas com o médico se o custo inviabilizar a continuidade."
    }
  ],
  "como-dormir-melhor-higiene-do-sono": [
    {
      "question": "Quantas horas de sono um adulto precisa?",
      "answer": "A recomendação consolidada para adultos é de 7 a 9 horas por noite. Existe variação individual real — algumas pessoas funcionam bem com 6 horas e meia, outras precisam de 9 —, mas a maioria de quem dorme 5 ou 6 horas está privada de sono e compensando com cafeína, não geneticamente adaptada. O teste honesto é como você funciona sem despertador e sem estimulantes."
    },
    {
      "question": "Até que horas posso tomar café sem atrapalhar o sono?",
      "answer": "A cafeína tem meia-vida de cerca de 5 a 6 horas: metade da dose ainda circula esse tempo depois. Para a maioria das pessoas, o corte seguro fica no início da tarde, por volta de 14 às 15 horas. Quem tem insônia ou metabolização lenta pode precisar limitar ao período da manhã. Vale lembrar que chá preto, mate, refrigerantes de cola e energéticos também contêm cafeína."
    },
    {
      "question": "Álcool ajuda a dormir?",
      "answer": "Não. O álcool sedou, não fez dormir melhor: ele encurta o tempo para pegar no sono, mas fragmenta a segunda metade da noite, suprime o sono REM e provoca despertares de madrugada, além de piorar ronco e apneia. Usar álcool como indutor de sono é uma das rotas mais comuns para a insônia crônica e para o uso problemático de bebida."
    },
    {
      "question": "O que é TCC-I e onde fazer?",
      "answer": "TCC-I é a terapia cognitivo-comportamental para insônia, tratamento de primeira linha para insônia crônica segundo as principais diretrizes internacionais, com eficácia igual ou superior à dos medicamentos no longo prazo. Usa técnicas como restrição de tempo na cama e controle de estímulos ao longo de 4 a 8 sessões. É feita com psicólogos ou médicos treinados, presencialmente ou por telemedicina."
    },
    {
      "question": "Fiz tudo certo e continuo sem dormir. E agora?",
      "answer": "Se a dificuldade de dormir ocorre pelo menos três vezes por semana há mais de três meses e prejudica seu dia, isso é insônia crônica — um quadro clínico que higiene do sono sozinha não resolve. O próximo passo é avaliação médica para identificar causas associadas, como apneia, ansiedade, depressão ou efeito de medicações, e indicar tratamento estruturado, em geral começando pela TCC-I."
    }
  ],
  "como-parar-antidepressivo-com-seguranca": [
    {
      "question": "Quanto tempo devo tomar antidepressivo antes de parar?",
      "answer": "No primeiro episódio depressivo, as diretrizes recomendam manter o antidepressivo por pelo menos seis a doze meses após a remissão completa dos sintomas — contando da melhora, não do início do tratamento. Em quem já teve dois ou três episódios, ou episódios graves, a manutenção recomendada sobe para dois anos ou mais, às vezes indefinidamente. A decisão é sempre individual, com o médico."
    },
    {
      "question": "O que é a síndrome de descontinuação?",
      "answer": "É o conjunto de sintomas que pode surgir dias após reduzir ou parar um antidepressivo: tontura, náusea, sintomas gripais, insônia, irritabilidade e as sensações de choque elétrico na cabeça conhecidas como brain zaps. Costuma ser leve a moderada e durar de alguns dias a duas semanas. Não é sinal de vício: é a readaptação do cérebro à ausência gradual do medicamento."
    },
    {
      "question": "Antidepressivo vicia?",
      "answer": "Não, no sentido próprio do termo. Antidepressivos não causam fissura, não exigem doses crescentes para o mesmo efeito nem levam a comportamento de busca compulsiva, ao contrário de benzodiazepínicos, álcool ou opioides. O que existe é adaptação fisiológica: parar de forma abrupta pode causar sintomas de descontinuação desconfortáveis, o que é diferente de dependência e se previne com retirada gradual."
    },
    {
      "question": "Posso parar o antidepressivo de uma vez quando me sentir bem?",
      "answer": "Não é recomendado. Sentir-se bem geralmente significa que o medicamento está funcionando, não que ele se tornou desnecessário. A interrupção abrupta aumenta o risco de síndrome de descontinuação e, principalmente, de recaída da depressão ou da ansiedade nos meses seguintes. O momento e o ritmo da retirada devem ser definidos com o médico, com redução gradual ao longo de semanas a meses."
    },
    {
      "question": "Como sei se é descontinuação ou volta da depressão?",
      "answer": "Pelo tempo e pelo tipo de sintoma. A descontinuação aparece em poucos dias após a redução, traz sintomas físicos característicos — tontura, choques, náusea — e melhora em até duas semanas ou horas após retomar a dose. A recaída demora semanas para se instalar, reproduz os sintomas originais do episódio, como tristeza persistente e perda de interesse, e não desaparece rapidamente."
    }
  ],
  "compulsao-alimentar-transtorno-tratamento": [
    {
      "question": "Como sei se tenho transtorno de compulsão alimentar?",
      "answer": "Os sinais centrais são episódios recorrentes em que você come, em um período curto, uma quantidade claramente maior do que a maioria comeria, com sensação de perda de controle — não conseguir parar. Some-se comer muito rápido, sem fome física, até desconforto, escondido dos outros, seguido de culpa e vergonha intensas. Pelo critério do DSM-5-TR, episódios ao menos semanais por três meses indicam avaliação profissional."
    },
    {
      "question": "Qual a diferença entre compulsão alimentar e bulimia?",
      "answer": "Nos dois há episódios de compulsão com perda de controle; a diferença é o que vem depois. Na bulimia nervosa, a pessoa recorre a comportamentos compensatórios — vômito autoinduzido, laxantes, jejum, exercício extremo. No transtorno de compulsão alimentar (TCAP) não há purgação: o episódio é seguido de culpa e desconforto, mas sem compensação. Essa diferença muda riscos clínicos e detalhes do tratamento."
    },
    {
      "question": "Existe remédio para compulsão alimentar?",
      "answer": "Sim. A lisdexanfetamina (Venvanse) é a única medicação aprovada pela ANVISA especificamente para o transtorno de compulsão alimentar moderado a grave em adultos, com redução significativa dos episódios em ensaios clínicos. Antidepressivos ISRS e o topiramato também são usados em situações específicas, fora de bula. Nenhum deles substitui a psicoterapia, e o uso exige prescrição e acompanhamento médico."
    },
    {
      "question": "Por que não consigo emagrecer mesmo fazendo dieta?",
      "answer": "Se existe compulsão alimentar não tratada, a dieta restritiva costuma alimentar o próprio problema: a restrição aumenta a preocupação com comida e a privação, que disparam episódios de compulsão, que geram culpa e mais restrição — um ciclo que se retroalimenta. Tratar a compulsão vem antes de qualquer projeto de emagrecimento; sem isso, a dieta tende a falhar e a piorar a relação com a comida."
    },
    {
      "question": "Compulsão alimentar é falta de força de vontade?",
      "answer": "Não. O TCAP é um transtorno psiquiátrico reconhecido, com bases neurobiológicas nos circuitos de recompensa e controle inibitório, forte relação com restrição alimentar prévia e com regulação emocional. Pessoas com compulsão frequentemente têm enorme disciplina em outras áreas da vida. Tratá-la como fraqueza moral só aumenta a vergonha e atrasa a busca por tratamento eficaz."
    }
  ],
  "tdah-em-mulheres-sinais-diagnostico": [
    {
      "question": "O TDAH é diferente em mulheres?",
      "answer": "O transtorno é o mesmo, mas a apresentação predominante difere: em mulheres, prevalece a forma desatenta, com menos hiperatividade visível e mais inquietude interna, sobrecarga mental e desorganização. Some-se a isso a tendência a compensar com esforço e perfeccionismo, e o resultado é um quadro que passa despercebido por professores, famílias e até por médicos durante décadas."
    },
    {
      "question": "Por que só descobri o TDAH depois de adulta?",
      "answer": "Porque os sinais na infância eram silenciosos: a menina distraída que tirava notas razoáveis à custa de muito esforço não chamava atenção de ninguém. O diagnóstico costuma emergir quando as demandas superam a capacidade de compensação — faculdade, carreira, maternidade — ou quando um filho recebe o diagnóstico e a mãe se reconhece nos critérios, já que a herdabilidade do TDAH é alta."
    },
    {
      "question": "O TDAH piora na TPM?",
      "answer": "Em muitas mulheres, sim. O estrogênio modula a transmissão dopaminérgica, e a queda hormonal da fase lútea tardia costuma acentuar desatenção, irritabilidade e desorganização nos dias que antecedem a menstruação. Relatar esse padrão ao médico importa: ele influencia a interpretação dos sintomas e, em alguns casos, os ajustes do tratamento ao longo do ciclo."
    },
    {
      "question": "O TDAH piora na menopausa?",
      "answer": "A perimenopausa é um período clássico de agravamento. Com o declínio do estrogênio, queixas de memória, foco e organização se intensificam, e não é raro que mulheres busquem avaliação pela primeira vez nessa fase, achando que se trata de demência precoce. A avaliação cuidadosa distingue TDAH de longa data agravado por hormônios de outras causas de queixa cognitiva."
    },
    {
      "question": "Como é feito o diagnóstico de TDAH em mulheres adultas?",
      "answer": "O diagnóstico é clínico: entrevista detalhada cobrindo os sintomas atuais e a história desde a infância, prejuízo em pelo menos dois contextos de vida, escalas de rastreio como a ASRS e, quando possível, informações de familiares e registros escolares. Também é preciso descartar ou identificar ansiedade, depressão, distúrbios do sono e alterações hormonais e tireoidianas que confundem o quadro."
    }
  ],
  "cetamina-escetamina-depressao-resistente": [
    {
      "question": "O que é depressão resistente ao tratamento?",
      "answer": "É a depressão que não respondeu a pelo menos dois antidepressivos diferentes, usados em dose adequada e por tempo suficiente — em geral 4 a 8 semanas cada, na dose terapêutica plena. A definição importa: muitos casos rotulados de resistentes na verdade nunca receberam tratamento adequado em dose e duração, ou têm diagnóstico incorreto, como transtorno bipolar tratado como depressão unipolar."
    },
    {
      "question": "Cetamina vicia?",
      "answer": "A cetamina tem potencial de abuso conhecido — é usada recreativamente em contexto ilícito. Por isso o uso terapêutico é feito exclusivamente sob supervisão, em ambiente clínico, com doses e intervalos controlados; a escetamina intranasal não pode ser levada para casa. Nesse formato supervisionado, com indicação correta e monitorização, o risco de dependência é baixo e gerenciável."
    },
    {
      "question": "Quanto custa o tratamento com Spravato?",
      "answer": "É um tratamento de alto custo: cada aplicação envolve o medicamento e cerca de duas horas de monitorização em clínica habilitada, e a fase de indução exige aplicações semanais ou duas vezes por semana durante o primeiro mês. O valor total varia conforme a clínica e a duração da manutenção. Alguns pacientes obtêm cobertura pelo plano de saúde, por vezes mediante solicitação fundamentada."
    },
    {
      "question": "A cetamina funciona já na primeira aplicação?",
      "answer": "Pode funcionar em horas a poucos dias — essa rapidez é o grande diferencial em relação aos antidepressivos convencionais, que levam semanas. Mas a resposta inicial não é permanente: o efeito de uma aplicação isolada dura em geral alguns dias a poucas semanas, por isso o protocolo prevê série de indução e depois manutenção, sempre associado a um antidepressivo oral contínuo."
    },
    {
      "question": "Eletroconvulsoterapia (ECT) ainda é usada? É segura?",
      "answer": "Sim, e continua sendo um dos tratamentos mais eficazes da psiquiatria para depressão grave e resistente, com taxas de resposta superiores às da maioria das alternativas. A ECT moderna é feita sob anestesia, com relaxamento muscular e monitorização — nada parecido com as imagens de cinema. O estigma que carrega é injusto e afasta pacientes de um recurso que salva vidas."
    }
  ],
  "mirtazapina-para-que-serve": [
    {
      "question": "Mirtazapina serve só para dormir?",
      "answer": "Não. A mirtazapina é um antidepressivo completo, com eficácia comprovada na depressão maior comparável à dos ISRS. O efeito sedativo é uma característica adicional, útil quando a depressão vem com insônia, mas usá-la apenas como indutor de sono, sem indicação psiquiátrica, desperdiça a molécula e expõe a pessoa a ganho de peso sem necessidade."
    },
    {
      "question": "Por que a mirtazapina em dose baixa dá mais sono que em dose alta?",
      "answer": "Porque em doses baixas (7,5 a 15 mg) predomina o bloqueio da histamina, que é fortemente sedativo. Em doses maiores (30 a 45 mg), cresce a ativação noradrenérgica, que compensa parte da sedação. Por isso, aumentar a dose às vezes reduz a sonolência diurna — um dos paradoxos mais contraintuitivos da psicofarmacologia."
    },
    {
      "question": "Mirtazapina engorda quanto?",
      "answer": "Varia muito. Nos estudos, o ganho médio fica em torno de 1 a 3 kg nos primeiros meses, mas há pacientes que ganham bem mais, sobretudo por aumento do apetite por doces e carboidratos. É o efeito colateral que mais leva à suspensão. Em pacientes desnutridos ou idosos com perda de peso, esse mesmo efeito vira vantagem terapêutica."
    },
    {
      "question": "Mirtazapina causa dependência?",
      "answer": "Não causa dependência química no sentido dos benzodiazepínicos: não há tolerância ao efeito antidepressivo, fissura nem busca compulsiva. A interrupção abrupta pode causar desconforto transitório, como insônia rebote, náusea e ansiedade, por isso a retirada deve ser gradual e orientada pelo médico, como com qualquer antidepressivo."
    },
    {
      "question": "Posso tomar mirtazapina com venlafaxina?",
      "answer": "A combinação existe e é usada por psiquiatras em depressão resistente — os mecanismos se complementam. Mas é uma estratégia de exceção, com mais efeitos colaterais somados e necessidade de monitorização, incluindo atenção a sinais de síndrome serotoninérgica. Nunca deve ser montada por conta própria; é decisão de especialista para casos selecionados."
    }
  ],
  "menopausa-ansiedade-depressao-saude-mental": [
    {
      "question": "A menopausa pode causar ansiedade e depressão?",
      "answer": "Pode. A transição para a menopausa — a perimenopausa — é uma janela de vulnerabilidade bem documentada: o risco de um episódio depressivo fica 2 a 4 vezes maior nesse período, mesmo em mulheres que nunca tiveram depressão. Ansiedade nova ou piorada, irritabilidade e crises de choro também são frequentes e têm relação com a flutuação errática do estrogênio."
    },
    {
      "question": "Como diferenciar sintomas da menopausa de depressão?",
      "answer": "Na prática, os quadros se sobrepõem: insônia, cansaço, irritabilidade e dificuldade de concentração aparecem nos dois. A pista vem do conjunto — fogachos, suores noturnos e irregularidade menstrual apontam para o componente hormonal, enquanto anedonia persistente, desesperança e ideias de morte indicam episódio depressivo que precisa de tratamento próprio. Muitas mulheres têm os dois ao mesmo tempo, e a avaliação deve considerar ambos."
    },
    {
      "question": "Reposição hormonal trata depressão na menopausa?",
      "answer": "A terapia hormonal, quando indicada pelo ginecologista, melhora fogachos, suores noturnos e o sono, e há evidência de benefício sobre sintomas depressivos leves na perimenopausa. Ela não substitui antidepressivo em episódio depressivo estabelecido, sobretudo moderado ou grave. Em muitos casos a melhor resposta vem da combinação das duas abordagens, cada uma prescrita pelo especialista correspondente."
    },
    {
      "question": "Existe antidepressivo que ajuda nos fogachos?",
      "answer": "Sim. Antidepressivos como venlafaxina, desvenlafaxina, escitalopram e paroxetina reduzem a frequência e a intensidade dos fogachos, com efeito demonstrado mesmo em mulheres sem depressão. São opção importante para quem tem contraindicação à terapia hormonal, como antecedente de câncer de mama, e resolvem dois problemas com um remédio quando há humor deprimido e sintomas vasomotores juntos."
    },
    {
      "question": "A névoa mental da menopausa é começo de demência?",
      "answer": "Quase nunca. A queixa de memória e concentração na perimenopausa — a névoa cognitiva — é comum, flutuante, ligada a estrogênio, sono ruim e humor, e tende a melhorar depois da transição. Demência antes dos 60 anos é rara. Se o declínio é progressivo, percebido por terceiros e interfere na autonomia, aí sim é caso de avaliação cognitiva formal."
    }
  ],
  "pregabalina-ansiedade-para-que-serve": [
    {
      "question": "Pregabalina serve para ansiedade?",
      "answer": "Sim. A pregabalina tem eficácia demonstrada em ensaios clínicos no transtorno de ansiedade generalizada, com aprovação formal para essa indicação na Europa; no Brasil, esse uso é off-label, mas respaldado por diretrizes internacionais. Ela age sobre os sintomas psíquicos e físicos da ansiedade e começa a fazer efeito em cerca de uma semana, mais rápido que os antidepressivos."
    },
    {
      "question": "Lyrica engorda?",
      "answer": "Pode engordar. O ganho de peso é um efeito colateral conhecido da pregabalina, dose-dependente e mais provável em tratamentos prolongados, junto com aumento de apetite e edema nas pernas. Não acontece com todo mundo, mas deve ser monitorado desde o início, com pesagem regular e atenção à alimentação. Se o ganho for significativo, a dose e a escolha do medicamento devem ser rediscutidas com o médico."
    },
    {
      "question": "Pregabalina vicia?",
      "answer": "Existe potencial de uso indevido, sobretudo em doses acima das terapêuticas e em pessoas com histórico de dependência de álcool, opioides ou outras substâncias, que podem buscar efeito de euforia ou sedação. No Reino Unido, a pregabalina passou a ser substância controlada em 2019. No uso terapêutico supervisionado o risco é baixo, mas a interrupção abrupta pode causar insônia, náusea e ansiedade rebote — a retirada deve ser gradual."
    },
    {
      "question": "Quanto tempo a pregabalina demora para fazer efeito na ansiedade?",
      "answer": "O efeito ansiolítico costuma aparecer já na primeira semana de dose adequada, o que é mais rápido que os antidepressivos ISRS, que levam de duas a quatro semanas. Não é, porém, um efeito imediato como o de um benzodiazepínico. A dose eficaz habitual no transtorno de ansiedade generalizada fica entre 150 e 600 mg por dia, atingida por aumento progressivo."
    },
    {
      "question": "Pregabalina é tarja preta?",
      "answer": "No Brasil, a pregabalina é medicamento de venda sob prescrição com retenção de receituário de controle especial, e não de notificação B (a chamada tarja preta dos benzodiazepínicos e hipnóticos). Isso reflete um perfil de controle diferente, mas não significa ausência de riscos: sonolência, tontura, ganho de peso e potencial de uso indevido exigem prescrição criteriosa e acompanhamento."
    }
  ],
  "transtorno-borderline-o-que-e": [
    {
      "question": "Qual a diferença entre borderline e bipolaridade?",
      "answer": "A principal diferença é o ritmo e o gatilho das oscilações. No borderline, o humor muda em minutos ou horas, quase sempre em reação a algo interpessoal — uma crítica, uma ausência, um conflito. No transtorno bipolar, as mudanças ocorrem em episódios que duram dias a semanas, com alteração sustentada de sono, energia e ritmo, muitas vezes sem gatilho claro. Os dois podem coexistir, e a distinção exige avaliação cuidadosa."
    },
    {
      "question": "Borderline tem cura?",
      "answer": "O transtorno borderline tem um prognóstico muito melhor do que sua fama sugere: estudos de seguimento longo mostram que a maioria dos pacientes atinge remissão dos critérios diagnósticos ao longo dos anos, especialmente com tratamento. A terapia dialética comportamental (DBT) e outras psicoterapias estruturadas reduzem crises, autolesão e internações de forma consistente. Não é uma sentença perpétua — é um quadro tratável."
    },
    {
      "question": "Existe remédio para transtorno borderline?",
      "answer": "Não existe medicação aprovada especificamente para o transtorno borderline — o tratamento central é a psicoterapia estruturada. Medicamentos entram como adjuvantes, para alvos específicos: estabilizadores ou antipsicóticos em baixa dose para impulsividade e raiva intensas, antidepressivos quando há depressão ou ansiedade comórbidas. O que se deve evitar é a polifarmácia que se acumula a cada crise sem plano claro."
    },
    {
      "question": "Pessoa borderline é manipuladora?",
      "answer": "Não. O rótulo de manipulação é um dos estigmas mais injustos da psiquiatria. Os comportamentos extremos do borderline — ameaças, crises, autolesão — são tentativas desesperadas e mal reguladas de aliviar uma dor real e de evitar o abandono, não estratégias frias de controle. A pessoa sofre intensamente com as próprias reações. Entender isso muda a forma de tratar e de conviver, sem significar aceitar qualquer comportamento."
    },
    {
      "question": "O que é DBT e por que é indicada para borderline?",
      "answer": "A terapia dialética comportamental (DBT) é uma psicoterapia estruturada desenvolvida especificamente para o transtorno borderline, e é o tratamento com melhor evidência para o quadro. Ela ensina, de forma prática e treinável, quatro conjuntos de habilidades: regulação emocional, tolerância ao mal-estar, efetividade interpessoal e atenção plena. Estudos mostram redução consistente de autolesão, tentativas de suicídio e internações."
    }
  ],
  "lisdexanfetamina-venvanse-tdah": [
    {
      "question": "Venvanse é mais forte que Ritalina?",
      "answer": "As anfetaminas, grupo da lisdexanfetamina, aparecem nas metanálises com tamanho de efeito um pouco maior que o metilfenidato no TDAH em adultos, mas isso não significa superioridade para todo mundo. Ambos são primeira linha, há quem responda a um e não ao outro, e a escolha considera duração de cobertura necessária, tolerabilidade individual e custo."
    },
    {
      "question": "Venvanse vicia?",
      "answer": "Em uso terapêutico, não. Por ser pró-fármaco, a lisdexanfetamina precisa de conversão enzimática lenta para se tornar ativa: triturar, aspirar ou injetar o conteúdo da cápsula não produz efeito rápido. Isso lhe confere o menor potencial de abuso entre os estimulantes. Ainda assim, é medicamento controlado, com receita amarela, e deve ser usado apenas sob prescrição."
    },
    {
      "question": "Venvanse emagrece?",
      "answer": "A redução de apetite é efeito colateral comum e pode haver perda de peso, mas o Venvanse não é nem deve ser usado como remédio para emagrecer. A aprovação em compulsão alimentar visa reduzir os episódios de perda de controle, não o peso em si. Usá-lo sem indicação expõe a riscos cardiovasculares e psiquiátricos sem benefício que os justifique."
    },
    {
      "question": "Quanto tempo o Venvanse dura no corpo?",
      "answer": "O efeito clínico de uma dose matinal dura em torno de 10 a 13 horas, cobrindo o dia inteiro de trabalho ou estudo com uma curva estável, sem picos e vales. Por isso a tomada deve ser sempre no início da manhã: doses tomadas tarde costumam causar insônia, o efeito colateral evitável mais comum na prática."
    },
    {
      "question": "Venvanse precisa de receita amarela?",
      "answer": "Sim. A lisdexanfetamina é controlada pela Portaria 344/98 da ANVISA e exige notificação de receita tipo A, a receita amarela, retida na farmácia. A prescrição pode ser feita em consulta presencial ou por telemedicina, com receita digital válida conforme a regulamentação vigente, sempre após avaliação médica adequada."
    }
  ],
  "quanto-custa-consulta-psiquiatra-particular": [
    {
      "question": "Quanto custa uma consulta com psiquiatra particular?",
      "answer": "No Brasil, os valores de mercado costumam ir de cerca de R$ 200–300, em plataformas de consulta rápida, até R$ 1.000–1.500 ou mais com especialistas experientes em grandes capitais. O que mais explica a diferença é o tempo dedicado: avaliações iniciais completas de 60 a 90 minutos custam naturalmente mais que consultas de 15 a 20 minutos."
    },
    {
      "question": "Plano de saúde cobre ou reembolsa consulta com psiquiatra?",
      "answer": "Planos com livre escolha reembolsam consultas com psiquiatras fora da rede credenciada, em valores que variam conforme o contrato — em alguns planos executivos, o reembolso cobre parte substancial ou quase a totalidade do valor. Você paga a consulta, recebe nota fiscal e recibo, e solicita o reembolso pelo aplicativo do plano. Teleconsulta entra na mesma regra."
    },
    {
      "question": "Consulta com psiquiatra pode ser deduzida no imposto de renda?",
      "answer": "Sim. Despesas médicas são integralmente dedutíveis na declaração completa do IRPF, sem limite de valor, desde que comprovadas por nota fiscal ou recibo com CPF/CNPJ do profissional. Para quem declara no modelo completo, isso devolve parte do valor pago na restituição — na prática, um desconto proporcional à sua alíquota efetiva."
    },
    {
      "question": "De quanto em quanto tempo preciso voltar ao psiquiatra?",
      "answer": "No início do tratamento, os retornos costumam ocorrer a cada 3 a 6 semanas, para ajustar medicação e acompanhar a resposta. Com o quadro estabilizado, o intervalo se espaça para 2 a 4 meses e, em manutenção de longo prazo, muitos pacientes fazem 3 a 4 consultas por ano. A frequência é individualizada — depende do diagnóstico e da fase do tratamento."
    },
    {
      "question": "Por que consulta de psiquiatra é mais cara que a de outras especialidades?",
      "answer": "Principalmente pelo tempo. A psiquiatria não tem exame de imagem ou laboratório que feche diagnóstico: o instrumento diagnóstico é a entrevista longa e detalhada. Uma avaliação inicial bem feita consome 60 a 90 minutos do médico — o equivalente a três ou quatro consultas de outras especialidades no mesmo período —, além de anos de formação especializada."
    }
  ],
  "desvenlafaxina-pristiq-para-que-serve": [
    {
      "question": "Qual a diferença entre desvenlafaxina e venlafaxina?",
      "answer": "A desvenlafaxina é o metabólito ativo da venlafaxina — a substância em que a venlafaxina se transforma no fígado. Por já vir pronta, não depende da enzima CYP2D6, o que dá níveis sanguíneos mais previsíveis e menos interações medicamentosas. A eficácia antidepressiva é semelhante; a diferença está na simplicidade de dose e no perfil de interações."
    },
    {
      "question": "Pristiq 50 mg já é dose suficiente?",
      "answer": "Para a maioria dos pacientes com depressão, sim. Os estudos de registro mostraram que 50 mg diários têm eficácia equivalente a doses maiores, com menos efeitos colaterais. Doses de 100 mg são usadas em casos selecionados, mas o ganho adicional médio é pequeno. Quem precisa de escalonamento amplo de dose talvez se beneficie mais da venlafaxina."
    },
    {
      "question": "Desvenlafaxina engorda?",
      "answer": "Ganho de peso relevante não é característico da desvenlafaxina. Nos estudos clínicos, o peso permaneceu em média estável, e no início do tratamento é mais comum discreta redução de apetite. Alterações importantes de peso durante o uso merecem reavaliação médica, porque podem refletir o próprio quadro depressivo ou outra causa."
    },
    {
      "question": "Desvenlafaxina serve para os calores da menopausa?",
      "answer": "Há evidência de que a desvenlafaxina reduz frequência e intensidade dos fogachos (sintomas vasomotores) da menopausa, e ela chegou a ser aprovada para essa indicação em alguns países. No Brasil, o uso nesse contexto é off-label e faz mais sentido quando os sintomas vasomotores coexistem com depressão ou ansiedade, ou quando a terapia hormonal está contraindicada."
    },
    {
      "question": "Parar desvenlafaxina dá sintomas de abstinência?",
      "answer": "Pode dar sintomas de descontinuação, como tontura, náusea, irritabilidade e sensação de choques na cabeça — herança da família da venlafaxina. A retirada deve ser sempre gradual e orientada pelo médico. A limitação prática é que o comprimido de liberação prolongada não pode ser partido, o que exige planejar a redução com as doses disponíveis."
    }
  ],
  "tdpm-transtorno-disforico-pre-menstrual": [
    {
      "question": "Qual a diferença entre TPM e TDPM?",
      "answer": "A TPM comum atinge a maioria das mulheres com sintomas leves e toleráveis, como inchaço, sensibilidade nas mamas e irritação passageira. O TDPM atinge 3 a 8% das mulheres e é dominado por sintomas emocionais graves — irritabilidade intensa, humor deprimido, ansiedade, labilidade — que comprometem trabalho e relacionamentos na semana ou duas antes da menstruação e desaparecem poucos dias após o início do fluxo."
    },
    {
      "question": "Como se faz o diagnóstico de TDPM?",
      "answer": "Com registro prospectivo: a mulher anota os sintomas diariamente por pelo menos dois ciclos menstruais consecutivos, em diário próprio ou aplicativo. O DSM-5-TR exige esse registro porque a memória retrospectiva superestima a ligação dos sintomas com o ciclo. O padrão típico mostra sintomas na fase lútea, alívio nos primeiros dias da menstruação e uma semana pós-menstrual essencialmente livre de sintomas."
    },
    {
      "question": "TDPM é causado por excesso de hormônio?",
      "answer": "Não. Os níveis de estrogênio e progesterona de quem tem TDPM são normais. O problema é uma sensibilidade aumentada do cérebro às flutuações hormonais normais do ciclo, envolvendo a resposta do sistema GABA à alopregnanolona, metabólito da progesterona. Por isso a dosagem hormonal não diagnostica TDPM e costuma vir normal."
    },
    {
      "question": "Antidepressivo para TDPM pode ser tomado só em parte do mês?",
      "answer": "Pode, e essa é uma particularidade do TDPM. Os ISRS, como a sertralina, funcionam tomados continuamente ou apenas na fase lútea — do 14º dia do ciclo até o início da menstruação. No TDPM a resposta surge em poucos dias, não nas 2 a 4 semanas típicas da depressão, o que sugere um mecanismo de ação diferente. O esquema deve ser definido com o médico."
    },
    {
      "question": "TDPM melhora na gravidez ou na menopausa?",
      "answer": "Em geral, sim. Como o TDPM depende da flutuação hormonal do ciclo ovulatório, os sintomas costumam desaparecer quando não há ovulação — na gestação e após a menopausa estabelecida. A perimenopausa, porém, pode piorar temporariamente o quadro, porque é uma fase de flutuações hormonais ainda mais erráticas."
    }
  ],
  "zolpidem-para-que-serve-riscos": [
    {
      "question": "Zolpidem vicia?",
      "answer": "Sim, o uso diário prolongado leva a tolerância e dependência, ainda que o zolpidem não seja quimicamente um benzodiazepínico. Ele age no mesmo receptor GABA-A, e com o tempo o efeito hipnótico diminui, a dose tende a subir e a interrupção abrupta causa insônia rebote intensa. A aprovação em bula é para uso de curto prazo, em geral até quatro semanas."
    },
    {
      "question": "Posso tomar zolpidem todos os dias?",
      "answer": "Não é o uso recomendado. A indicação aprovada é o tratamento de curto prazo da insônia, tipicamente por até quatro semanas, na menor dose eficaz. O uso diário por meses ou anos aumenta os riscos de tolerância, dependência, amnésia e comportamentos complexos do sono, e adia o tratamento da causa real da insônia, que na maioria dos casos é identificável e tratável."
    },
    {
      "question": "Zolpidem causa sonambulismo?",
      "answer": "Pode causar. Os chamados comportamentos complexos do sono — caminhar, comer, telefonar e até dirigir dormindo, sem memória do episódio — são um efeito adverso raro, porém grave, descrito em bula com alerta destacado. O risco aumenta com doses maiores, uso de álcool e privação de sono. Após um episódio desse tipo, o medicamento deve ser suspenso e o médico avisado imediatamente."
    },
    {
      "question": "Qual a diferença entre zolpidem e Rivotril?",
      "answer": "O zolpidem é um hipnótico Z, mais seletivo para o efeito de induzir sono, com meia-vida curta de cerca de duas horas e meia. O clonazepam (Rivotril) é um benzodiazepínico de meia-vida longa, com efeito ansiolítico, relaxante muscular e anticonvulsivante, que permanece no corpo por mais de um dia. Ambos agem no receptor GABA-A e ambos causam tolerância e dependência com uso contínuo."
    },
    {
      "question": "Como parar de tomar zolpidem?",
      "answer": "Com redução gradual planejada com o médico — nunca de forma abrupta após uso prolongado. O esquema costuma diminuir a dose em etapas ao longo de semanas, aceitando algumas noites piores no início, que são insônia rebote transitória e não o retorno do problema. Associar terapia cognitivo-comportamental para insônia durante a retirada aumenta de forma consistente a taxa de sucesso."
    }
  ],
  "sindrome-do-panico-sintomas-tratamento": [
    {
      "question": "Síndrome do pânico tem cura?",
      "answer": "O transtorno de pânico é um dos quadros com melhor taxa de resposta de toda a psiquiatria: com tratamento adequado — antidepressivo ISRS em dose correta e terapia cognitivo-comportamental com exposição —, a grande maioria dos pacientes fica livre das crises e retoma a vida normal. Pode haver recaídas ao longo da vida, que respondem bem a novo ciclo de tratamento."
    },
    {
      "question": "Ataque de pânico pode matar ou causar infarto?",
      "answer": "Não. O ataque de pânico é uma descarga intensa do sistema de alarme do corpo, extremamente desagradável, mas fisiologicamente autolimitada e inofensiva para um coração saudável — atinge o pico em cerca de dez minutos e cede sozinha. A sensação de morte iminente faz parte do quadro, não é um aviso real. Na primeira crise, vale investigar; após exames normais e diagnóstico feito, repetir exames a cada crise só alimenta o ciclo."
    },
    {
      "question": "Qual o melhor remédio para síndrome do pânico?",
      "answer": "A primeira linha são os antidepressivos ISRS, como paroxetina, sertralina e escitalopram, que reduzem a frequência das crises até eliminá-las, com efeito consistente após quatro a doze semanas. Benzodiazepínicos como alprazolam e clonazepam aliviam rápido, mas não tratam o transtorno e, em uso crônico, atrapalham a recuperação. A escolha e a dose exigem avaliação médica individual."
    },
    {
      "question": "Por que tenho crises de pânico do nada, sem motivo?",
      "answer": "A marca do transtorno de pânico é justamente a crise inesperada, sem gatilho identificável — inclusive durante o sono. O sistema de alarme cerebral dispara de forma espontânea, como um alarme de incêndio com defeito. Com a repetição, o cérebro passa a interpretar sensações corporais banais (coração acelerado, tontura, falta de ar leve) como início de crise, o que dispara crises de verdade e alimenta o ciclo."
    },
    {
      "question": "O que é agorafobia e qual a relação com o pânico?",
      "answer": "Agorafobia é o medo e a evitação de lugares onde escapar seria difícil ou o socorro demoraria em caso de crise: shoppings, filas, transporte público, túneis, aviões, multidões. Ela costuma se desenvolver como consequência do pânico — a pessoa vai restringindo os lugares que frequenta até, nos casos graves, não sair mais de casa. É tratável junto com o transtorno de pânico, com medicação e exposição gradual."
    }
  ],
  "metilfenidato-ritalina-concerta-tdah": [
    {
      "question": "Ritalina vicia?",
      "answer": "Em uso terapêutico, por via oral e nas doses prescritas, o metilfenidato não causa dependência. A evidência mostra o contrário: pessoas com TDAH adequadamente tratadas têm risco menor de abuso de álcool e drogas do que pessoas com TDAH sem tratamento. O potencial de abuso existe apenas em uso indevido, com doses altas e vias de administração rápidas, o que justifica o controle da receita."
    },
    {
      "question": "Qual a diferença entre Ritalina e Concerta?",
      "answer": "A molécula é a mesma, o metilfenidato. A Ritalina comum age por 3 a 4 horas e costuma exigir duas ou três tomadas diárias. A Ritalina LA libera o fármaco em dois pulsos e cobre cerca de 8 horas. O Concerta usa o sistema osmótico OROS e cobre 10 a 12 horas com uma única tomada matinal, com efeito mais estável ao longo do dia."
    },
    {
      "question": "Ritalina ajuda a estudar quem não tem TDAH?",
      "answer": "Não da forma que se imagina. Em pessoas sem TDAH, os estudos mostram efeito nulo ou marginal sobre memória e raciocínio complexo: a pessoa se sente mais alerta e confiante, mas o desempenho real não melhora e em algumas tarefas piora. O uso sem indicação soma risco cardiovascular e insônia a um benefício essencialmente ilusório."
    },
    {
      "question": "Quais os efeitos colaterais mais comuns do metilfenidato?",
      "answer": "Redução do apetite, insônia quando a dose é tomada tarde, boca seca, dor de cabeça e aumento discreto da pressão arterial e da frequência cardíaca. A maioria é dose-dependente e tende a diminuir nas primeiras semanas. Pressão e pulso devem ser aferidos antes do início do tratamento e nas consultas de acompanhamento."
    },
    {
      "question": "Precisa de receita especial para comprar Ritalina ou Concerta?",
      "answer": "Sim. O metilfenidato é controlado pela Portaria 344/98 da ANVISA e exige notificação de receita tipo A, a receita amarela, que fica retida na farmácia. A norma permite dispensação de até 60 dias de tratamento para TDAH. A prescrição também pode ser feita por telemedicina, com receita digital válida conforme a regulamentação vigente."
    }
  ],
  "consulta-psiquiatra-online-telemedicina": [
    {
      "question": "Consulta com psiquiatra online é válida no Brasil?",
      "answer": "Sim. A Resolução CFM 2.314/2022 reconhece a telemedicina como ato médico pleno. A consulta por vídeo com um psiquiatra registrado no CRM tem a mesma validade legal da presencial: gera registro em prontuário, receita, atestado e relatório com assinatura digital, além de nota fiscal que serve para reembolso e dedução no imposto de renda."
    },
    {
      "question": "Psiquiatra online pode dar receita de medicamento controlado?",
      "answer": "Pode. A receita digital assinada com certificado ICP-Brasil tem validade jurídica, inclusive para medicamentos controlados, conforme as regras vigentes da ANVISA. A farmácia valida a autenticidade do documento em plataformas oficiais. Na prática, antidepressivos, estabilizadores e a maioria dos psicofármacos são prescritos e dispensados sem dificuldade após consulta por telemedicina."
    },
    {
      "question": "Consulta psiquiátrica online funciona tão bem quanto a presencial?",
      "answer": "Para a grande maioria dos quadros, sim. Estudos comparativos e metanálises mostram equivalência entre teleconsulta e consulta presencial em precisão diagnóstica, resposta ao tratamento, adesão e satisfação do paciente, em depressão, ansiedade, TDAH e transtorno bipolar estável. As exceções são emergências e situações que exigem exame físico ou avaliação presencial detalhada."
    },
    {
      "question": "Plano de saúde reembolsa consulta psiquiátrica online?",
      "answer": "Sim, nas mesmas condições da consulta presencial. Se o seu plano tem previsão de reembolso para consultas com médicos fora da rede credenciada, a teleconsulta entra na mesma regra: você paga a consulta, recebe a nota fiscal e o recibo, envia ao plano e recebe o valor previsto em contrato. O formato online não reduz nem elimina o direito ao reembolso."
    },
    {
      "question": "Preciso ir ao consultório presencialmente em algum momento?",
      "answer": "Depende do caso. A resolução do CFM orienta que doenças crônicas em acompanhamento prolongado tenham consultas presenciais periódicas, e o médico define isso caso a caso. Na prática, muitos pacientes fazem acompanhamento predominantemente online, com avaliação presencial quando há necessidade clínica: exame físico, dúvida diagnóstica, piora importante ou situações que a tela não resolve."
    }
  ],
  "duloxetina-para-que-serve": [
    {
      "question": "Duloxetina serve para dor mesmo sem depressão?",
      "answer": "Sim. A duloxetina tem indicação aprovada para dor neuropática diabética, fibromialgia e dor musculoesquelética crônica independentemente de haver depressão. O efeito analgésico vem da ação da noradrenalina e da serotonina nas vias descendentes de modulação da dor, e ocorre mesmo em pacientes sem sintomas depressivos, geralmente nas primeiras semanas de uso."
    },
    {
      "question": "Duloxetina engorda ou emagrece?",
      "answer": "No início do tratamento é mais comum leve perda de apetite e de peso, em parte pela náusea. No uso prolongado, o peso tende a se manter estável na maioria dos pacientes; ganho de peso relevante é menos frequente do que com mirtazapina ou paroxetina. Se houver mudança importante de peso, o caso deve ser reavaliado com o médico."
    },
    {
      "question": "Duloxetina aumenta a pressão arterial?",
      "answer": "Pode aumentar discretamente, por causa do componente noradrenérgico, embora menos do que a venlafaxina em doses altas. Em pessoas com hipertensão controlada, o uso costuma ser seguro com monitorização. Recomendo medir a pressão antes de iniciar e reavaliar nas consultas de acompanhamento, especialmente após aumentos de dose."
    },
    {
      "question": "Posso parar a duloxetina de uma vez?",
      "answer": "Não recomendo. A interrupção abrupta causa com frequência sintomas de descontinuação: tontura, sensação de choques na cabeça, náusea, irritabilidade e insônia. A retirada deve ser gradual, planejada com o médico, geralmente ao longo de semanas. Isso não significa dependência no sentido químico, mas readaptação do cérebro à ausência do medicamento."
    },
    {
      "question": "Quanto tempo a duloxetina demora para fazer efeito?",
      "answer": "Para depressão e ansiedade, as primeiras melhoras costumam aparecer entre duas e quatro semanas, com resposta mais consistente entre seis e oito semanas na dose adequada. Para dor neuropática e fibromialgia, parte dos pacientes nota alívio já na primeira ou segunda semana, porque o efeito analgésico tem curso próprio."
    }
  ],
  "depressao-pos-parto-sintomas-tratamento": [
    {
      "question": "Como saber se é baby blues ou depressão pós-parto?",
      "answer": "Pela duração e pela intensidade. O baby blues atinge até 80% das mães, começa nos primeiros dias, oscila entre choro fácil e momentos bons e melhora sozinho em até duas semanas, sem impedir o cuidado com o bebê. Se os sintomas passam de duas semanas, pioram ou incluem culpa intensa, desesperança e dificuldade de se vincular ao bebê, a hipótese é depressão pós-parto e merece avaliação médica."
    },
    {
      "question": "Posso tomar antidepressivo amamentando?",
      "answer": "Na maioria dos casos, sim. A sertralina é o antidepressivo de referência na amamentação porque passa em quantidade mínima para o leite, com décadas de experiência acumulada e bom perfil de segurança para o lactente. A decisão é individualizada, feita com o médico, pesando a gravidade do quadro e as alternativas. Depressão não tratada também traz riscos para a mãe e para o bebê."
    },
    {
      "question": "Ter pensamentos ruins envolvendo o bebê significa que sou uma mãe perigosa?",
      "answer": "Não necessariamente. Pensamentos intrusivos de que algo de ruim pode acontecer ao bebê são comuns na depressão e na ansiedade pós-parto, causam pavor justamente porque contrariam o que a mãe deseja, e ela mesma os reconhece como absurdos. Diferente disso, na psicose pós-parto há convicção delirante e perda de contato com a realidade — essa situação é emergência médica."
    },
    {
      "question": "Homem tem depressão pós-parto?",
      "answer": "Tem. Estima-se que cerca de 8 a 10% dos pais desenvolvam depressão no primeiro ano do bebê, com pico entre o terceiro e o sexto mês. No homem o quadro costuma aparecer como irritabilidade, isolamento, excesso de trabalho ou de álcool, mais do que tristeza declarada. A depressão da parceira é o principal fator de risco para a paterna, e vice-versa."
    },
    {
      "question": "Depressão pós-parto começa só depois do parto?",
      "answer": "Não. O termo mais preciso hoje é depressão perinatal, porque cerca de metade dos episódios começa ainda na gestação. O DSM-5-TR marca o início na gravidez ou nas primeiras 4 semanas após o parto, mas na prática clínica episódios que surgem ao longo do primeiro ano do bebê são avaliados e tratados da mesma forma."
    }
  ],
  "clonazepam-rivotril-para-que-serve": [
    {
      "question": "Rivotril vicia?",
      "answer": "Sim, o clonazepam pode causar dependência física quando usado diariamente por mais de algumas semanas. O organismo desenvolve tolerância, o efeito diminui e a interrupção abrupta provoca abstinência, com ansiedade rebote, insônia e, em doses altas, risco de convulsão. Isso não significa que quem usa há anos esteja condenado ao remédio: a retirada gradual, planejada com o médico, funciona na maioria dos casos."
    },
    {
      "question": "Quanto tempo posso tomar clonazepam?",
      "answer": "As diretrizes internacionais recomendam benzodiazepínicos pelo menor tempo possível, em geral de duas a quatro semanas, no máximo alguns meses em situações selecionadas. O uso típico correto é cobrir uma fase aguda ou as primeiras semanas até o antidepressivo agir. Uso contínuo por anos não tem respaldo nas diretrizes e aumenta os riscos de tolerância, dependência e prejuízo cognitivo."
    },
    {
      "question": "Clonazepam serve para ansiedade?",
      "answer": "Serve para o alívio rápido e temporário de ansiedade intensa e crises de pânico, porque age em menos de uma hora. Mas não trata o transtorno de ansiedade em si: o tratamento de fundo é feito com antidepressivos, como os ISRS, e psicoterapia cognitivo-comportamental. Quando o clonazepam vira o único tratamento, a doença de base permanece sem tratamento adequado."
    },
    {
      "question": "Posso parar o Rivotril de uma vez?",
      "answer": "Não. Após uso diário prolongado, a interrupção abrupta pode causar síndrome de abstinência grave, com insônia intensa, tremores, agitação e até crise convulsiva. A retirada segura é gradual, reduzindo cerca de dez a vinte e cinco por cento da dose a cada duas a quatro semanas, com acompanhamento médico e, idealmente, com o tratamento de fundo da ansiedade já em andamento."
    },
    {
      "question": "Clonazepam causa perda de memória?",
      "answer": "O uso prolongado de benzodiazepínicos está associado a prejuízo de atenção, velocidade de processamento e memória, que muitos pacientes atribuem à idade ou ao estresse. Parte dessas alterações melhora após a retirada, embora a recuperação possa ser lenta. Em idosos, o efeito é mais pronunciado e pode simular ou agravar um quadro de declínio cognitivo."
    }
  ],
  "transtorno-ansiedade-generalizada-tag-sintomas": [
    {
      "question": "Como sei se tenho transtorno de ansiedade generalizada?",
      "answer": "O sinal central é a preocupação excessiva e difícil de controlar, presente na maior parte dos dias por pelo menos seis meses, sobre vários temas ao mesmo tempo — trabalho, saúde, família, dinheiro. Ela vem acompanhada de sintomas físicos como tensão muscular, fadiga, insônia, irritabilidade e dificuldade de concentração, e causa prejuízo real na rotina. O diagnóstico é clínico, feito em consulta psiquiátrica."
    },
    {
      "question": "TAG tem cura ou é para a vida toda?",
      "answer": "O TAG tende a ser um quadro crônico com flutuações, mas isso não significa sofrer para sempre. Com tratamento adequado — antidepressivo em dose correta, psicoterapia ou a combinação dos dois — a maioria dos pacientes alcança remissão dos sintomas e retoma a vida normal. Alguns precisarão de tratamento de manutenção prolongado, decisão que se toma caso a caso."
    },
    {
      "question": "Qual o melhor remédio para ansiedade generalizada?",
      "answer": "Não existe um único melhor remédio: a primeira linha são os antidepressivos ISRS (como escitalopram, sertralina e paroxetina) e os duais ISRN (como venlafaxina e duloxetina), escolhidos conforme o perfil de cada paciente. Benzodiazepínicos como clonazepam não são tratamento de base — servem, no máximo, como ponte breve no início. A escolha exige avaliação médica individual."
    },
    {
      "question": "Ansiedade generalizada dá sintomas físicos?",
      "answer": "Sim, e com frequência os sintomas físicos dominam o quadro: tensão muscular constante (pescoço, ombros, mandíbula), fadiga, dor de cabeça tensional, insônia, problemas digestivos, taquicardia e sensação de aperto no peito. Muitos pacientes passam anos investigando essas queixas com vários especialistas antes de alguém pensar em ansiedade como causa."
    },
    {
      "question": "Quanto tempo demora o tratamento do TAG fazer efeito?",
      "answer": "Os antidepressivos usados no TAG começam a agir de forma perceptível entre duas e quatro semanas, com resposta mais consistente entre oito e doze semanas. Nas primeiras uma a duas semanas pode haver até um leve aumento da ansiedade, efeito transitório e esperado. A psicoterapia cognitivo-comportamental também mostra ganhos graduais ao longo de dez a vinte sessões."
    }
  ]
};
