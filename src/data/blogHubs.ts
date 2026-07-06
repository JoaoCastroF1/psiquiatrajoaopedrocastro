import type { BlogTag } from "./blogIndex";

export interface BlogHub {
  slug: string;
  title: string;
  highlight: string;
  description: string;
  metaDescription: string;
  tags: BlogTag[];
}

export const blogHubs: BlogHub[] = [
  {
    slug: "ansiedade",
    title: "Ansiedade",
    highlight: "Tudo sobre ansiedade",
    description:
      "Artigos sobre crises de ansiedade, tratamentos baseados em evidência, farmacologia e mitos sobre abordagens alternativas.",
    metaDescription:
      "Guia completo sobre ansiedade: crises, sintomas, tratamentos com antidepressivos e benzodiazepínicos, e a verdade sobre florais e tratamentos naturais.",
    tags: ["Ansiedade", "Evidência Científica"],
  },
  {
    slug: "psicogeriatria",
    title: "Psicogeriatria",
    highlight: "Saúde mental no envelhecimento",
    description:
      "Artigos sobre demência, depressão no idoso, avaliação psicogeriátrica e cuidados com a saúde mental na terceira idade.",
    metaDescription:
      "Artigos sobre psicogeriatria: demência, depressão no idoso, quando procurar um psicogeriatra e cuidados com a saúde mental no envelhecimento.",
    tags: ["Psicogeriatria"],
  },
  {
    slug: "tdah",
    title: "TDAH",
    highlight: "Transtorno de Déficit de Atenção",
    description:
      "Artigos sobre diagnóstico de TDAH em adultos, tratamento, medicações e como distinguir TDAH de outras condições.",
    metaDescription:
      "Guia sobre TDAH em adultos: como saber se tenho TDAH, diagnóstico, tratamentos e o papel do psiquiatra na avaliação.",
    tags: ["TDAH"],
  },
  {
    slug: "psicofarmacologia",
    title: "Psicofarmacologia",
    highlight: "Medicações psiquiátricas",
    description:
      "Artigos sobre antidepressivos, estabilizadores de humor, ansiolíticos e outros psicofármacos: como funcionam, indicações e efeitos colaterais.",
    metaDescription:
      "Guia sobre medicações psiquiátricas: antidepressivos, benzodiazepínicos, estabilizadores de humor, pregabalina, quetiapina e trazodona.",
    tags: ["Psicofarmacologia"],
  },
];
