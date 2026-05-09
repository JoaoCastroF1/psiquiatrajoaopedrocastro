export interface FormationItem {
  title: string;
  institution: string;
  period: string;
  detail?: string;
}

export interface ComplementaryFormationItem {
  title: string;
  institution: string;
  year: string;
  hours?: string;
  detail?: string;
}

export interface InstitutionalLink {
  name: string;
  description: string;
  since: string;
}

export interface CorporateLecture {
  client: string;
  topic: string;
}

export interface ConferenceProceeding {
  authors: string;
  title: string;
  venue: string;
  year: number;
  details: string;
}

export interface JournalArticle {
  authors: string;
  title: string;
  journal: string;
  year: number;
}

export interface Monograph {
  authors: string;
  title: string;
  institution: string;
  year: number;
}

export interface ScientificEvent {
  name: string;
  year: number;
}

export const curriculumProfile = {
  fullName: "João Pedro Castro Martins Farias",
  citationShort: "FARIAS, J. P. C. M.",
  citationFull: "FARIAS, JOÃO PEDRO CASTRO MARTINS",
  lattesId: "9030272431938137",
  lattesUrl: "http://lattes.cnpq.br/9030272431938137",
  crm: "CRM-MG 83920",
  rqePsiquiatria: "RQE 62148",
  rqePsicogeriatria: "RQE 66521",
  officeAddress: {
    streetAddress: "Rua dos Timbiras, 1940, sala 1515",
    neighborhood: "Lourdes",
    city: "Belo Horizonte",
    state: "MG",
    country: "BR",
  },
  phone: "(31) 99131-5958",
  instagram: "https://www.instagram.com/joaocastrof/",
};

export const principalFormation: FormationItem[] = [
  {
    title: "Graduação em Medicina",
    institution: "Universidade Federal de Minas Gerais (UFMG)",
    period: "2014 a 2020",
  },
  {
    title: "Residência médica em Psiquiatria",
    institution: "Hospital Municipal Odilon Behrens (HOB)",
    period: "2021 a 2024",
    detail: "RQE 62148",
  },
  {
    title: "Residência médica em Psicogeriatria",
    institution: "Hospital das Clínicas da UFMG/Ebserh",
    period: "2024 a 2025",
    detail: "RQE 66521",
  },
];

export const complementaryFormation: ComplementaryFormationItem[] = [
  {
    title: "Pós-graduação Lato Sensu em Terapia Cognitivo-Comportamental",
    institution:
      "Centro Universitário União das Américas (Uniamérica/Descomplica)",
    year: "2022 a 2023",
    hours: "390 horas",
  },
  {
    title: "VII Curso de Atualização em Psicogeriatria",
    institution: "UFMG",
    year: "2024",
    hours: "92 horas",
  },
  {
    title: "Curso O Sono e seus Transtornos",
    institution: "UFMG",
    year: "2023",
    hours: "30 horas",
  },
  {
    title: "Fellowship em Estimulação Magnética Transcraniana",
    institution: "UFMG e Clínica Mangabeiras",
    year: "2024",
    hours: "12 horas teóricas e 48 horas de prática supervisionada",
    detail:
      "Avaliação de pacientes, protocolos de neuromodulação não invasiva e acompanhamento clínico em transtornos neuropsiquiátricos.",
  },
  {
    title: "Saúde Mental e Psicodélicos",
    institution: "Instituto Phaneros",
    year: "2022",
  },
  {
    title: "ACLS, Suporte Avançado de Vida em Cardiologia",
    institution: "American Heart Association",
    year: "2020",
    hours: "16 horas",
  },
];

export const academicActivity = {
  monitorship: {
    title: "Monitoria em Semiologia e Nosologia Psiquiátrica",
    institution: "UFMG",
    year: "2017",
    role: "Bolsista de monitoria",
  },
};

export const institutionalLinks: InstitutionalLink[] = [
  {
    name: "Consultório particular",
    description: "Rua dos Timbiras, 1940, sala 1515, Lourdes, Belo Horizonte",
    since: "2021",
  },
  {
    name: "Clínica Mangabeiras",
    description: "Belo Horizonte",
    since: "2021",
  },
];

export const languages = [
  { language: "Português", proficiency: "nativo" },
  {
    language: "Inglês",
    proficiency: "fluente",
    detail: "TOEIC, 2020",
  },
  { language: "Espanhol", proficiency: "fluente" },
];

export const clinicalAreas: string[] = [
  "Depressão e depressão resistente",
  "Transtorno de ansiedade generalizada e transtornos ansiosos em geral",
  "Transtorno bipolar",
  "Esquizofrenia e transtornos psicóticos",
  "TDAH em adultos",
  "Transtorno do espectro autista em adultos",
  "Síndromes demenciais e demais transtornos neuropsiquiátricos do envelhecimento",
];

export const corporateLectures: CorporateLecture[] = [
  {
    client: "Project Management Institute (PMI)",
    topic: "Burnout e saúde mental no trabalho",
  },
  {
    client: "Banco Fibra",
    topic:
      "Mente em Movimento: estresse, cortisol, eixo HPA e estratégias de regulação",
  },
];

export const conferenceProceedings: ConferenceProceeding[] = [
  {
    authors:
      "Fernandes DNF, Paulino GHB, Farias JPCM, Prado PHT, Romano-Silva MA, Bicalho MAC, Viana BM",
    title:
      "P16: Hippocampus Atrophy due to Treatment Resistant Depression in an Older Adult",
    venue: "International Psychogeriatrics Congress, Buenos Aires",
    year: 2024,
    details:
      "International Psychogeriatrics, v. 36, Supplement 1, Poster Session 1, p. 91. Cambridge University Press.",
  },
];

export const journalArticles: JournalArticle[] = [
  {
    authors:
      "Paiva SPC, Nery SF, Marques AMS, Silveira CTB, Fiuza IM, Farias JPCM",
    title:
      "Intervenções Baseadas em Mindfulness para Profissionais de Saúde na Pandemia da COVID-19: uma estratégia para redução do estresse e promoção de saúde mental",
    journal: "Revista Médica de Minas Gerais",
    year: 2021,
  },
];

export const monographs: Monograph[] = [
  {
    authors: "Farias JPCM, Giudice ELF",
    title:
      "O uso de antipsicóticos de primeira e segunda gerações, associado à medicação anticolinérgica, em um serviço de atenção à crise da Rede de Atenção Psicossocial de Belo Horizonte",
    institution:
      "Monografia de conclusão de Residência Médica em Psiquiatria, Hospital Municipal Odilon Behrens",
    year: 2024,
  },
];

export const scientificEvents: ScientificEvent[] = [
  { name: "BRAIN Congress", year: 2025 },
  { name: "Masterclass de Atualização Terapêutica em Psiquiatria", year: 2025 },
  {
    name: "XXVII Simpósio Internacional de Atualização em Psiquiatria Geriátrica, IPq HC-FMUSP",
    year: 2024,
  },
  { name: "XL Congresso Brasileiro de Psiquiatria", year: 2023 },
  {
    name: "26ª Jornada da Escola Brasileira de Psicanálise, Seção Minas Gerais",
    year: 2023,
  },
];

export const eventOrganization = [
  {
    name: "Jornada Acadêmica de Saúde Mental",
    institution: "UFMG",
    year: 2018,
  },
];
