import { writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { blogPosts } from "../src/data/blogPosts";
import { blogHubs } from "../src/data/blogHubs";
import { conditions } from "../src/data/conditions";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_ORIGIN = "https://drjoaopedrocastro.com.br";
const today = new Date().toISOString().slice(0, 10);

const STATIC_ROUTES: Array<{ path: string; priority: string }> = [
  { path: "/", priority: "1.0" },
  { path: "/atuacao", priority: "0.8" },
  { path: "/empresas", priority: "0.8" },
  { path: "/podcast", priority: "0.8" },
  { path: "/avaliacao", priority: "0.8" },
  { path: "/blog", priority: "0.8" },
  { path: "/vestibulandos", priority: "0.8" },
];

const urlEntry = (path: string, priority: string) =>
  `  <url>\n    <loc>${SITE_ORIGIN}${path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;

const entries: string[] = [
  ...STATIC_ROUTES.map((r) => urlEntry(r.path, r.priority)),
  ...conditions.map((c) => urlEntry(`/${c.slug}`, "0.7")),
  ...blogHubs.map((h) => urlEntry(`/blog/tema/${h.slug}`, "0.8")),
  ...blogPosts.map((p) => urlEntry(`/blog/${p.slug}`, "0.7")),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join("\n")}\n</urlset>\n`;

const outputPath = resolve(__dirname, "../public/sitemap.xml");
writeFileSync(outputPath, xml, "utf-8");
console.log(`sitemap.xml written: ${entries.length} URLs`);
