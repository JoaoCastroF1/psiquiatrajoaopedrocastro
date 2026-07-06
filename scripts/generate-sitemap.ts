import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { blogIndex } from "../src/data/blogIndex";
import { blogHubs } from "../src/data/blogHubs";
import { brDateToIso } from "../src/lib/blogDates";

const SITE = "https://www.drjoaopedrocastro.com.br";

// Data fixa por página: atualizar manualmente quando o conteúdo mudar de
// verdade. lastmod que muda a cada build ensina o Google a ignorá-lo.
const STATIC_LASTMOD = "2026-07-06";

interface UrlEntry {
  loc: string;
  lastmod: string;
  priority: string;
}

const staticRoutes: UrlEntry[] = [
  { loc: "/", lastmod: STATIC_LASTMOD, priority: "1.0" },
  { loc: "/atuacao", lastmod: STATIC_LASTMOD, priority: "0.9" },
  { loc: "/avaliacao", lastmod: STATIC_LASTMOD, priority: "0.9" },
  { loc: "/curriculo", lastmod: STATIC_LASTMOD, priority: "0.7" },
  { loc: "/empresas", lastmod: STATIC_LASTMOD, priority: "0.8" },
  { loc: "/podcast", lastmod: STATIC_LASTMOD, priority: "0.7" },
  { loc: "/vestibulandos", lastmod: STATIC_LASTMOD, priority: "0.8" },
  { loc: "/depressao", lastmod: STATIC_LASTMOD, priority: "0.8" },
  { loc: "/ansiedade", lastmod: STATIC_LASTMOD, priority: "0.8" },
  { loc: "/tdah", lastmod: STATIC_LASTMOD, priority: "0.8" },
  { loc: "/bipolaridade", lastmod: STATIC_LASTMOD, priority: "0.8" },
  { loc: "/alzheimer", lastmod: STATIC_LASTMOD, priority: "0.8" },
  { loc: "/insonia", lastmod: STATIC_LASTMOD, priority: "0.8" },
  { loc: "/estresse-pos-traumatico", lastmod: STATIC_LASTMOD, priority: "0.8" },
  { loc: "/blog", lastmod: STATIC_LASTMOD, priority: "0.8" },
];

const hubEntries: UrlEntry[] = blogHubs.map((h) => ({
  loc: `/blog/tema/${h.slug}`,
  lastmod: STATIC_LASTMOD,
  priority: "0.7",
}));

const postEntries: UrlEntry[] = blogIndex.map((p) => ({
  loc: `/blog/${p.slug}`,
  lastmod: brDateToIso(p.lastModified ?? p.date),
  priority: "0.6",
}));

const allEntries = [...staticRoutes, ...hubEntries, ...postEntries];

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...allEntries.map(
    (e) =>
      `  <url>\n    <loc>${SITE}${e.loc}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <priority>${e.priority}</priority>\n  </url>`,
  ),
  "</urlset>",
  "",
].join("\n");

const outPath = resolve(process.cwd(), "public/sitemap.xml");
writeFileSync(outPath, xml, "utf8");
console.log(
  `sitemap.xml gerado: ${allEntries.length} URLs (${staticRoutes.length} estáticas, ${hubEntries.length} hubs, ${postEntries.length} posts)`,
);
