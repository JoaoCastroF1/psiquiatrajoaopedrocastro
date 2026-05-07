import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { INDEXNOW_KEY } from "../src/lib/indexnow-key";

const SITE = "https://drjoaopedrocastro.com.br";
const HOST = "drjoaopedrocastro.com.br";
const SITEMAP_PATH = resolve(process.cwd(), "dist/sitemap.xml");
const CACHE_PATH = resolve(process.cwd(), ".indexnow-cache.json");
const ENDPOINT = "https://api.indexnow.org/indexnow";

interface SitemapEntry {
  loc: string;
  lastmod: string;
}

type Snapshot = Record<string, string>;

function parseSitemap(xml: string): SitemapEntry[] {
  const entries: SitemapEntry[] = [];
  const urlBlocks = xml.match(/<url>[\s\S]*?<\/url>/g) ?? [];
  for (const block of urlBlocks) {
    const loc = block.match(/<loc>([\s\S]*?)<\/loc>/)?.[1]?.trim();
    const lastmod = block.match(/<lastmod>([\s\S]*?)<\/lastmod>/)?.[1]?.trim() ?? "";
    if (loc) entries.push({ loc, lastmod });
  }
  return entries;
}

function toSnapshot(entries: SitemapEntry[]): Snapshot {
  const snap: Snapshot = {};
  for (const e of entries) snap[e.loc] = e.lastmod;
  return snap;
}

function diff(prev: Snapshot, next: Snapshot): { added: string[]; changed: string[] } {
  const added: string[] = [];
  const changed: string[] = [];
  for (const [loc, lastmod] of Object.entries(next)) {
    if (!(loc in prev)) added.push(loc);
    else if (prev[loc] !== lastmod) changed.push(loc);
  }
  return { added, changed };
}

async function main() {
  if (!existsSync(SITEMAP_PATH)) {
    console.warn(`[indexnow] dist/sitemap.xml nao encontrado em ${SITEMAP_PATH}, abortando.`);
    return;
  }

  const xml = readFileSync(SITEMAP_PATH, "utf8");
  const entries = parseSitemap(xml);
  const snapshot = toSnapshot(entries);
  console.log(`[indexnow] sitemap: ${entries.length} URLs`);

  if (!existsSync(CACHE_PATH)) {
    writeFileSync(CACHE_PATH, JSON.stringify(snapshot, null, 2), "utf8");
    console.log("[indexnow] primeiro run, cache criado — ping pulado para evitar spam.");
    return;
  }

  let prev: Snapshot = {};
  try {
    prev = JSON.parse(readFileSync(CACHE_PATH, "utf8")) as Snapshot;
  } catch (err) {
    console.warn("[indexnow] cache corrompido, recriando sem ping:", err);
    writeFileSync(CACHE_PATH, JSON.stringify(snapshot, null, 2), "utf8");
    return;
  }

  const { added, changed } = diff(prev, snapshot);
  console.log(`[indexnow] novas: ${added.length} | alteradas: ${changed.length}`);

  const urlList = [...added, ...changed];
  if (urlList.length === 0) {
    console.log("[indexnow] nada a notificar.");
    writeFileSync(CACHE_PATH, JSON.stringify(snapshot, null, 2), "utf8");
    return;
  }

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE}/${INDEXNOW_KEY}.txt`,
    urlList,
  };

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });
    console.log(`[indexnow] ping enviado: ${res.status} ${res.statusText}`);
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.warn(`[indexnow] resposta nao-OK: ${body.slice(0, 500)}`);
    }
  } catch (err) {
    console.warn("[indexnow] falha ao chamar a API (ignorada):", err);
  }

  writeFileSync(CACHE_PATH, JSON.stringify(snapshot, null, 2), "utf8");
}

main().catch((err) => {
  console.warn("[indexnow] erro inesperado (ignorado):", err);
});
