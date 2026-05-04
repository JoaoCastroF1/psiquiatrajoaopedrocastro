# MIGRATION_NOTES.md — Migração SPA → SSG

> Registro técnico das decisões e desvios da migração de `drjoaopedrocastro.com.br`
> de SPA Vite + React para Static Site Generation com `vite-react-ssg`.
> Concluída em maio/2026 em quatro PRs sequenciais. Documento companheiro do
> `MIGRATION_AUDIT.md`, que mapeou o estado pré-migração.

---

## 1. Resumo do que mudou

| Antes | Depois |
|---|---|
| HTML servido pelo Vercel é um shell vazio (`<div id="root"></div>`) | HTML pré-renderizado por rota com conteúdo completo + meta tags específicas |
| Meta tags genéricas em todas as URLs (eram do `index.html`) | `<title>` / `og:*` / `twitter:*` / canonical específicos por rota |
| Crawlers sem JS recebem markup vazio | Crawlers recebem HTML semanticamente completo no primeiro byte |
| 1 HTML em `dist/` (`index.html`) | 64 HTMLs em `dist/` (14 estáticas + 7 condition pages + 4 hubs + 46 blog posts + 1 página 404) |
| `PageHead.tsx` mutava o DOM via `useEffect` | `PageHead.tsx` declarativo via `<Head>` (Helmet) — tags entram no HTML pré-renderizado |
| Build: `vite build` | Build: `vite-react-ssg build` |
| Roteamento: `<BrowserRouter><Routes><Route .../></Routes></BrowserRouter>` em `App.tsx` | Data routes em `src/routes.tsx` + providers em `src/Layout.tsx` |

---

## 2. Decisões técnicas e desvios do plano original

### 2.1 Substituir `@unhead/react` (PR 2) pelo `<Head>` do `vite-react-ssg` (PR 3)

**Plano original**: usar `@unhead/react` para gerenciar meta tags de forma SSR-aware, integrando com `vite-react-ssg` no callback de setup.

**Realidade**: ao instalar `vite-react-ssg@0.9.0`, descobri que o pacote já traz seu próprio gerenciador de head — um componente `<Head>` que é wrapper de `react-helmet-async` (incluído como dependência transitiva). É o caminho oficial e testado-com-o-framework.

**Decisão**: trocar `@unhead/react` (PR 2) pelo `<Head>` (PR 3). PR 2 virou um stepping stone — provou que o objetivo arquitetural ("head SSR-aware") era viável e necessário, mas a implementação final usa Helmet.

**Trade-off aceito**: `react-helmet-async` é mais antigo e em modo de manutenção, mas é o caminho oficial de `vite-react-ssg` e elimina risco de incompatibilidade com a renderização SSR interna do framework.

### 2.2 Downgrade de Vite 8 → 7 e `@vitejs/plugin-react` 6 → 5

**Causa**: `vite-react-ssg@0.9.0` declara peer-dep `vite: ^2-^7`. Não suporta Vite 8 (que é o que o projeto tinha). `@vitejs/plugin-react@^6` exige Vite 8, então foi necessário downgrade dos dois.

**Verificação**: Vite 8 tinha sido pinado pelo template, sem uso de features Vite-8-only no `vite.config.ts`. Downgrade não introduziu regressão funcional. Anotado como item 6.3 do `MIGRATION_AUDIT.md`.

### 2.3 Helper `lazyDefault` em `src/routes.tsx`

**Causa**: `vite-react-ssg@0.9.0` quebra com `Component: React.lazy(() => import(...))` em rotas dinâmicas com `getStaticPaths` retornando múltiplos paths.

**Diagnóstico**: ao processar a 2ª path da rota dinâmica, o framework tenta `route.Component._payload._result.toString()` em `collectAssets`. No 1º render, `_result` é a função loader (tem `.toString`). No 2º, a `lazy()` já está resolvida e `_result` virou o module namespace ESM, que **tem prototype `null`** — então `.toString` é `undefined` e a chamada explode com `TypeError: ... is not a function`.

**Fix**: usar o campo `lazy:` do data router do React Router (não `Component:`), que percorre um caminho diferente em `collectAssets`. Como nossas pages exportam `default`, escrevi um helper:

```ts
const lazyDefault =
  (importFn: () => Promise<{ default: ComponentType }>) => async () => {
    const mod = await importFn();
    return { Component: mod.default };
  };
```

E todas as rotas usam `lazy: lazyDefault(() => import("./pages/X"))`.

**Implicação**: se em algum momento subir o `vite-react-ssg` para uma versão que corrija o bug, o helper continua válido — é o padrão recomendado da própria doc do framework. Não há débito técnico aqui.

### 2.4 `Footer.tsx` — `new Date().getFullYear()` agora é constante de módulo

**Antes**: `© {new Date().getFullYear()} Dr. ...` no JSX. No SSG, isso seria avaliado **uma vez no build** e ficaria congelado no HTML pré-renderizado, mas no client React reavaliaria a cada render. Risco de hydration mismatch em virada de ano (build em 31/dez 23:59 → cache servido em 01/jan 00:01 com `2025` no HTML mas `2026` no client).

**Depois**:
```tsx
const COPYRIGHT_YEAR = new Date().getFullYear();
// ...
<p>© {COPYRIGHT_YEAR} ...</p>
```

A constante é avaliada no momento do build (ou quando o módulo é avaliado no client, se hidratado). No SSG, o valor que entra no HTML é o do build. No client, o módulo é o mesmo bundle — mesmo valor. Sem mismatch até o próximo deploy.

Trata o item 3.1 do `MIGRATION_AUDIT.md`.

### 2.5 `index.html` — limpeza de tags duplicadas pós-Helmet

**Removidos** do template:
- `<title>` (agora per-route via Helmet)
- `<meta name="description">`
- Todas as tags `og:*` e `twitter:*` (per-route)
- `<link rel="canonical">` (per-route)
- O bloco `<script type="application/ld+json">` com `FAQPage` (era duplicado com `Index.tsx`'s `<JsonLd>`, e com SSG **iria parar em todas as 64 páginas** — regressão evitada)

**Mantidos** (ainda globais):
- `<meta charset>`, `<meta name="viewport">`
- `<meta name="author">`, `<meta name="robots">`
- Favicons, manifest, theme-color
- Preload do `jp-portrait.jpg`
- Google Analytics (gtag)
- O bloco JSON-LD `Physician` (sempre faz sentido em qualquer página)

### 2.6 `og:image:width` / `og:image:height` migrados para `PageHead`

Antes ficavam estáticos no `index.html`. Como removi tudo o resto de OG dali, mantê-los soltos não fazia sentido (eles modificam a `og:image` mais próxima na ordem do DOM, e a `og:image` agora vem do Helmet). Movi para o `PageHead.tsx` como tags constantes (são as dimensões fixas do `og-image.jpg`).

### 2.7 Sitemap regenerado a partir das fontes de dados

O `public/sitemap.xml` antigo tinha problemas:
- XML malformado: a entrada de `/vestibulandos` estava aninhada incorretamente (um `<url>` dentro de outro `<url>`), tornando o documento inválido.
- Faltavam: as 7 condition pages (`/depressao`, `/ansiedade`, `/tdah`, `/bipolaridade`, `/alzheimer`, `/insonia`, `/estresse-pos-traumatico`).
- Lista de blog posts dessincronizada da fonte (`src/data/blogPosts.ts`).

**Solução**: regenerei via script Node lendo `blogPosts.ts`, `blogHubs.ts` e `conditions.ts` para garantir paridade com os dados. Resultado: 64 entries, batendo 1:1 com os 64 HTMLs gerados pelo SSG. Prioridades: home `1.0`, atuação/avaliação `0.9`, demais estáticas e condition pages `0.8`, hubs `0.7`, blog posts `0.6`.

(Esse item estava marcado como "out of scope" no audit, mas o user pediu "tudo que melhorar" no PR 4. Mantém o sitemap consistente com o SSG.)

### 2.8 Dead code removido (PR 4)

Verificados via `grep` como não-importados em runtime, então tree-shaken hoje. Removidos para reduzir ruído no editor / lint:

- `src/components/ui/sidebar.tsx` (~640 linhas, boilerplate shadcn não usado)
- `src/components/ui/calendar.tsx`
- `src/components/ui/chart.tsx`
- `src/components/SymptomAssessment.tsx` (stub com formulário sem submit handler)
- `src/hooks/use-mobile.tsx` (único consumidor era `sidebar.tsx`)
- `App.tsx` na raiz do projeto (NÃO `src/App.tsx`, que tem outro motivo) — stub órfão importando `./VestibulandoEspecialista` que não existia

**Nota**: caso algum componente shadcn-style seja necessário no futuro, basta reinstalar via CLI (`npx shadcn-ui add sidebar`). Eles são stateless de geração.

### 2.9 Supabase client — guard `typeof window`

```ts
storage: typeof window !== 'undefined' ? window.localStorage : undefined
```

Hoje o módulo é tree-shaken (nenhum import). Adicionei o guard de forma defensiva: se algum código futuro importar `supabase`, a avaliação top-level não vai quebrar o build SSG por falta de `localStorage` no servidor.

Quando `storage` é `undefined`, o Supabase usa `MemoryStorage` internamente — sessão funciona durante o ciclo de vida do servidor (irrelevante para SSG, que apenas pré-renderiza páginas).

Trata o item 2.3 do `MIGRATION_AUDIT.md`.

### 2.10 `ui/sonner.tsx` — remoção de re-export não utilizado

O arquivo importava e re-exportava `toast` do `sonner`, mas nada no app consumia (o `toast` usado é o do shadcn em `src/hooks/use-toast.ts`, baseado em radix). Build emitia warning `"toast" is imported but never used`. Removido tanto o import quanto o re-export.

---

## 3. Itens do MIGRATION_AUDIT.md endereçados

| Audit | Tratamento | PR |
|---|---|---|
| 2.2 — `PageHead.tsx` mutando DOM via useEffect | Substituído por `<Head>` (Helmet via vite-react-ssg) | PR 2 (unhead) → PR 3 (Helmet) |
| 2.2 — `main.tsx` `document.getElementById("root")` | Substituído por `ViteReactSSG({ routes })` | PR 3 |
| 2.3 — `supabase/client.ts:13` `localStorage` top-level | Guard `typeof window` | PR 4 |
| 3.1 — `Footer.tsx:79` `new Date().getFullYear()` em JSX | Movido para constante de módulo | PR 3 |
| 3.5 — JSON-LD FAQPage duplicado entre `index.html` e `Index.tsx` | Removido do `index.html`. `Index.tsx` mantém via `<JsonLd>` (10 perguntas) | PR 3 |
| 4 — Dead code (sidebar/calendar/chart/SymptomAssessment/use-mobile) | Arquivos removidos | PR 4 |
| 6.1 — `public/sitemap.xml` malformado e incompleto | Regenerado a partir das fontes de dados | PR 4 |
| 6.2 — `vercel.json` rewrite SPA | Não havia rewrite (só redirects 301). Confirmado válido pós-SSG | (sem ação) |

Itens 2.1 (Navbar), 3.2 (framer-motion), 3.3 (Embla), 3.4 (next-themes via Sonner) — classificados como "Seguro" no audit, sem ação necessária. Confirmados ok no SSR build.

---

## 4. O que NÃO foi feito (intencionalmente)

- **Bundle size**: o chunk principal `app-*.js` ainda passa de 500 KB minificado. Otimização à parte (manualChunks no Rollup), fora do escopo da migração SSG.
- **Imagens grandes**: `jp-writing.jpg` (2.2 MB) e `jp-portrait.jpg` (2.8 MB). Pedem otimização (responsive images, WebP/AVIF), mas é tarefa de performance separada.
- **Slug `lítio-sal-bipolar-gold-standard`**: contém caractere acentuado. O SSG renderiza corretamente (`dist/blog/lítio-sal-bipolar-gold-standard.html` é gerado e servido). URLs com Unicode funcionam no Vercel. Se um dia precisar normalizar para `litio-` (compatibilidade com sistemas que tratam mal Unicode em URLs), criar redirect 301.

---

## 5. Validação local e em preview

### 5.1 Build local (PR 3 e PR 4)

```bash
$ npm run build
[vite-react-ssg] Rendering Pages... (64)
✓ Build finished.

$ find dist -name "*.html" | wc -l
64
```

Spot checks que passaram:
- `dist/index.html`: `<title>Dr. João Pedro Castro — Psiquiatra...</title>`
- `dist/depressao.html`: `<title>Psiquiatra Especialista em Depressão em BH...</title>`
- `dist/blog/depressao-ou-tristeza.html`: `<title>Depressão ou tristeza passageira?...</title>`
- Cada HTML tem exatamente 1 `<title>` (sem duplicatas).
- `<div id="root" data-server-rendered="true">` contém o markup completo da rota (h1, parágrafos, JSON-LD, footer, navbar).

### 5.2 Preview Vercel

Cada PR foi testado em preview do Vercel (deploys automáticos). Após o merge dos 4 PRs, produção (`drjoaopedrocastro.com.br`) está em SSG.

### 5.3 Comandos de verificação pós-deploy

```bash
# HTML completo no primeiro byte
curl -s https://www.drjoaopedrocastro.com.br/ | grep -E "<h1|Castro" | head

# Meta tags por rota
curl -s https://www.drjoaopedrocastro.com.br/depressao | grep "og:title"

# Simulação de crawler sem JS
curl -s -A "Mozilla/5.0 (compatible; Googlebot/2.1)" \
  https://www.drjoaopedrocastro.com.br/atuacao | head -100
```

### 5.4 Pós-deploy (a fazer no Search Console)

- Re-submeter `https://drjoaopedrocastro.com.br/sitemap.xml` no Google Search Console.
- "Inspecionar URL" em 5 rotas (home, condição, blog post, empresas, vestibulandos) e confirmar que "HTML renderizado" = "HTML em tempo real" na 1ª passada.
- Solicitar reindexação das rotas críticas.
- Validar previews em WhatsApp / LinkedIn / Threads (cada rota com sua imagem OG e descrição).

---

## 6. Próximos passos (fora do escopo da migração)

Sugeridos para PRs subsequentes:

1. **Otimização de imagens** — converter `jp-portrait.jpg`/`jp-writing.jpg` para WebP/AVIF, gerar versões responsivas (`srcset`).
2. **Code splitting do bundle principal** — manualChunks no Rollup para reduzir o `app-*.js` de 500+ KB.
3. **Refatoração visual** — mencionada pelo briefing original como o "próximo trabalho" após a migração SSG.
4. **Sitemap dinâmico** — converter o regenerador atual (script one-shot) em um plugin do build, para que o sitemap seja sempre regenerado junto com o `dist/`.

---

## 7. Como revisitar esta migração

Se algo der errado em produção e for necessário rollback rápido:

```bash
git revert <merge-commit-do-PR-3>  # reverte SSG, volta para SPA
# (PR 1 e PR 2 não impactam funcionalmente — PR 1 é só doc, PR 2 já foi
# substituído pelo PR 3)
```

Para entender uma decisão específica, este documento está organizado por seção.
Para o estado pré-migração e a auditoria que fundamentou as decisões, ver
`MIGRATION_AUDIT.md`. Para o briefing original que orientou o trabalho, ver
o histórico de PRs #17, #18, #19 e o PR de cleanup correspondente.
