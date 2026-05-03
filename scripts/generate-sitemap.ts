import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { blogPosts } from "../src/data/blogPosts";
import { blogHubs } from "../src/data/blogHubs";
import { brDateToIso } from "../src/lib/blogDates";

const SITE = "https://drjoaopedrocastro.com.br";
const TODAY = new Date().toISOString().slice(0, 10);

interface UrlEntry {
  loc: string;
  lastmod: string;
  priority: string;
}

const staticRoutes: UrlEntry[] = [
  { loc: "/", lastmod: TODAY, priority: "1.0" },
  { loc: "/atuacao", lastmod: TODAY, priority: "0.9" },
  { loc: "/avaliacao", lastmod: TODAY, priority: "0.9" },
  { loc: "/empresas", lastmod: TODAY, priority: "0.8" },
  { loc: "/podcast", lastmod: TODAY, priority: "0.7" },
  { loc: "/vestibulandos", lastmod: TODAY, priority: "0.8" },
  { loc: "/depressao", lastmod: TODAY, priority: "0.8" },
  { loc: "/ansiedade", lastmod: TODAY, priority: "0.8" },
  { loc: "/tdah", lastmod: TODAY, priority: "0.8" },
  { loc: "/bipolaridade", lastmod: TODAY, priority: "0.8" },
  { loc: "/alzheimer", lastmod: TODAY, priority: "0.8" },
  { loc: "/insonia", lastmod: TODAY, priority: "0.8" },
  { loc: "/estresse-pos-traumatico", lastmod: TODAY, priority: "0.8" },
  { loc: "/blog", lastmod: TODAY, priority: "0.8" },
];

const hubEntries: UrlEntry[] = blogHubs.map((h) => ({
  loc: `/blog/tema/${h.slug}`,
  lastmod: TODAY,
  priority: "0.7",
}));

const postEntries: UrlEntry[] = blogPosts.map((p) => ({
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
