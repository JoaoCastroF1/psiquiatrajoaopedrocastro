import { blogPosts } from "@/data/blogPosts";
import { blogHubs } from "@/data/blogHubs";
import { conditions } from "@/data/conditions";

export type SearchKind = "blog" | "tema" | "condicao" | "pagina";

export interface SearchItem {
  kind: SearchKind;
  kindLabel: string;
  title: string;
  description: string;
  url: string;
  haystack: string;
}

const staticPages: Array<Omit<SearchItem, "haystack" | "kind" | "kindLabel"> & {
  keywords?: string[];
}> = [
  {
    title: "Início",
    description: "Página inicial — Dr. João Pedro Castro, psiquiatra e psicogeriatra em BH.",
    url: "/",
    keywords: ["home", "inicio", "psiquiatra bh"],
  },
  {
    title: "Atuação",
    description: "Áreas de atuação clínica: psiquiatria de adultos, psicogeriatria e mais.",
    url: "/atuacao",
    keywords: ["áreas de atuação", "especialidades"],
  },
  {
    title: "Empresas",
    description: "Atendimento corporativo e saúde mental no trabalho.",
    url: "/empresas",
    keywords: ["corporativo", "saúde mental no trabalho", "RH"],
  },
  {
    title: "Podcast",
    description: "Episódios e conversas sobre psiquiatria e saúde mental.",
    url: "/podcast",
  },
  {
    title: "Avaliação",
    description: "Como funciona a avaliação psiquiátrica completa.",
    url: "/avaliacao",
    keywords: ["primeira consulta", "anamnese"],
  },
  {
    title: "Vestibulandos",
    description: "Atendimento psiquiátrico para vestibulandos e estudantes em alta pressão.",
    url: "/vestibulandos",
    keywords: ["estudantes", "vestibular", "ansiedade no vestibular"],
  },
  {
    title: "Blog",
    description: "Artigos sobre saúde mental com fundamento clínico.",
    url: "/blog",
  },
];

const normalize = (s: string): string =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, " ")
    .trim();

const buildIndex = (): SearchItem[] => {
  const items: SearchItem[] = [];

  for (const page of staticPages) {
    items.push({
      kind: "pagina",
      kindLabel: "Página",
      title: page.title,
      description: page.description,
      url: page.url,
      haystack: normalize(
        [page.title, page.description, ...(page.keywords ?? [])].join(" ")
      ),
    });
  }

  for (const c of conditions) {
    items.push({
      kind: "condicao",
      kindLabel: "Condição",
      title: c.title,
      description: c.subtitle ?? c.metaDescription,
      url: `/${c.slug}`,
      haystack: normalize(
        [
          c.title,
          c.tagLabel,
          c.subtitle,
          c.intro,
          c.metaTitle,
          c.metaDescription,
          c.symptoms.join(" "),
          c.differentials.join(" "),
          c.faq.map((f) => `${f.question} ${f.answer}`).join(" "),
        ].join(" ")
      ),
    });
  }

  for (const hub of blogHubs) {
    items.push({
      kind: "tema",
      kindLabel: "Tema do blog",
      title: hub.title,
      description: hub.description,
      url: `/blog/tema/${hub.slug}`,
      haystack: normalize(
        [hub.title, hub.highlight, hub.description, hub.metaDescription, hub.tags.join(" ")].join(
          " "
        )
      ),
    });
  }

  for (const post of blogPosts) {
    items.push({
      kind: "blog",
      kindLabel: "Artigo",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      haystack: normalize(
        [
          post.title,
          post.metaTitle ?? "",
          post.metaDescription ?? "",
          post.excerpt,
          post.tag,
          (post.keywords ?? []).join(" "),
          post.content.join(" "),
        ].join(" ")
      ),
    });
  }

  return items;
};

let cachedIndex: SearchItem[] | null = null;

const getIndex = (): SearchItem[] => {
  if (!cachedIndex) cachedIndex = buildIndex();
  return cachedIndex;
};

export interface SearchResult extends SearchItem {
  score: number;
}

export const searchSite = (rawQuery: string, limit = 8): SearchResult[] => {
  const query = normalize(rawQuery);
  if (query.length < 2) return [];

  const tokens = query.split(" ").filter((t) => t.length >= 2);
  if (tokens.length === 0) return [];

  const index = getIndex();
  const results: SearchResult[] = [];

  for (const item of index) {
    let score = 0;
    let allMatched = true;
    const normalizedTitle = normalize(item.title);

    for (const token of tokens) {
      if (item.haystack.includes(token)) {
        score += 1;
        if (normalizedTitle.includes(token)) score += 4;
        if (normalizedTitle.startsWith(token)) score += 3;
      } else {
        allMatched = false;
        break;
      }
    }

    if (!allMatched) continue;

    if (item.kind === "blog") score += 1;
    if (item.kind === "condicao") score += 0.5;

    results.push({ ...item, score });
  }

  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit);
};
