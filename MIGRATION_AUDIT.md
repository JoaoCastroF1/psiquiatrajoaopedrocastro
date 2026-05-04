# MIGRATION_AUDIT.md — Auditoria pré-migração SPA → SSG

> Fase 1 do plano `vite-react-ssg`. Documento de mapeamento, sem alterações de código.
> Data da auditoria: 2026-05-01. Branch: `claude/audit-spa-to-ssg-HVuwl`.

---

## 1. Metodologia

Foram executadas as seguintes buscas em `src/`:

```bash
grep -rn "window\."     src/ --include="*.tsx" --include="*.ts"
grep -rn "document\."   src/ --include="*.tsx" --include="*.ts"
grep -rn "localStorage" src/ --include="*.tsx" --include="*.ts"
grep -rn "sessionStorage" src/ --include="*.tsx" --include="*.ts"
grep -rn "navigator"    src/ --include="*.tsx" --include="*.ts"
```

Buscas adicionais (fora do roteiro original, mas relevantes para SSR):

```bash
grep -rn "Math\.random\|Date\.now\|new Date\|crypto\." src/ --include="*.tsx" --include="*.ts"
grep -rn "useMotionValue\|useScroll\|useTransform\|useInView" src/ --include="*.tsx" --include="*.ts"
grep -rn "useEffect\|useLayoutEffect" src/components --include="*.tsx"
```

Cada ocorrência foi classificada em três categorias:

- **Seguro** — código já está dentro de `useEffect`, event handler, ou outro escopo que só executa no client. SSG não vai tentar avaliar.
- **Risco** — código é executado no corpo do componente, no escopo de módulo, ou na renderização inicial. SSG vai falhar ou produzir HTML divergente do client (hydration mismatch).
- **Substituir** — código funciona no client mas não produz o efeito esperado no HTML pré-renderizado (ex.: `PageHead` que escreve meta tags via DOM API só executa no browser, então o HTML estático não recebe as meta tags). Precisa ser refatorado.

Componentes que existem na árvore mas **não estão montados em nenhuma rota** foram marcados como **Dead code**: o tree-shaking do Vite vai removê-los do bundle final, então não causam risco no SSG mesmo com APIs do client. Estão listados no apêndice apenas para registro.

---

## 2. Catálogo de ocorrências em código montado

### 2.1 `window.*`

| Arquivo | Linha | Código | Escopo | Categoria | Tratamento |
|---|---|---|---|---|---|
| `src/components/Navbar.tsx` | 15 | `setScrolled(window.scrollY > 40)` | dentro de `useEffect` | Seguro | nenhum |
| `src/components/Navbar.tsx` | 16 | `window.addEventListener("scroll", handleScroll)` | dentro de `useEffect` | Seguro | nenhum |
| `src/components/Navbar.tsx` | 17 | `window.removeEventListener(...)` | cleanup do `useEffect` | Seguro | nenhum |

### 2.2 `document.*`

| Arquivo | Linha | Código | Escopo | Categoria | Tratamento |
|---|---|---|---|---|---|
| `src/main.tsx` | 5 | `document.getElementById("root")!` | top-level do entry | Risco | Será substituído pelo entry `ViteReactSSG` na Fase 3. |
| `src/components/PageHead.tsx` | 21 | `document.title = title` | dentro de `useEffect` | Substituir | A manipulação direta do DOM via `useEffect` não popula o HTML pré-renderizado. Trocar por `useHead` do `@unhead/react` na Fase 5 (PR 2). |
| `src/components/PageHead.tsx` | 44, 49, 51 | `document.querySelector` / `document.createElement` / `document.head.appendChild` para meta tags | dentro de `useEffect` | Substituir | idem acima |
| `src/components/PageHead.tsx` | 59, 63, 64, 66 | mesma manipulação para `<link rel="canonical">` | dentro de `useEffect` | Substituir | idem acima |

### 2.3 `localStorage` / `sessionStorage`

| Arquivo | Linha | Código | Escopo | Categoria | Tratamento |
|---|---|---|---|---|---|
| `src/integrations/supabase/client.ts` | 13 | `storage: localStorage` (no `auth` do `createClient`) | top-level do módulo | Risco latente | Atualmente o módulo **não é importado por nenhum arquivo do app** (verificado com `grep -rn "@/integrations/supabase"`). O tree-shaking do Vite remove o módulo do bundle, então o build SSG não tenta avaliá-lo. **Mas se qualquer código futuro importar `supabase`, o build SSG vai quebrar** porque `localStorage` é referenciado na avaliação top-level. Tratamento recomendado (defensivo, mesmo sem uso atual): adicionar guard `typeof window !== "undefined"` ou mover a configuração para um getter lazy. Pode ser feito no PR 2 ou adiado. |

`sessionStorage`: nenhuma ocorrência.

### 2.4 `navigator`

Nenhuma ocorrência. Apenas a string "Navegação" / "Navbar" aparece em comentários e nomes de classe — não há acesso programático ao objeto `navigator`.

---

## 3. Achados adicionais (fora do escopo dos 4 greps originais)

### 3.1 `new Date()` em render — risco de hydration mismatch

| Arquivo | Linha | Código | Categoria | Tratamento |
|---|---|---|---|---|
| `src/components/Footer.tsx` | 79 | `© {new Date().getFullYear()} Dr. João Pedro Castro...` | Risco | `new Date().getFullYear()` no JSX produz output dependente do momento de renderização. No SSG o ano fica congelado no momento do build. Se o usuário acessar o site em um ano diferente (ex.: build em 31/12, visita em 01/01), o React vai detectar mismatch durante hidratação e refazer o render, perdendo parte do ganho de performance. **Tratamento**: substituir por uma constante calculada no build (`new Date().getFullYear()` no escopo de módulo, avaliado no servidor) ou mover para `useEffect` com fallback. Decidir no PR 3. |

### 3.2 `framer-motion`

Usado por: `MethodSection`, `BlogSection`, `ProjectsSection`, `ApproachSection`, `DifferentialsSection`, `AuthorityStrip`, `HeroSection`, `ServicesSection`, `AudienceSection`, `DifferentialsPreview`, `FAQSection`, `WhatsAppButton`, `CTASection`, `StudentsLocalSection`, `AboutSection`, `IntellectualSection`, `ServicesPreview`, `TestimonialsSection`, `HowItWorksSection`, `BlogPost`, `Empresas`, `ConditionPage`, `Atuacao`, `BlogHub`, `Avaliacao`, `VestibulandoEspecialista`, `Blog`.

Padrão: `motion.div`/`motion.article`/`motion.a` com `initial`, `animate`, `whileInView`, `transition`. Nenhuma chamada a `useMotionValue`, `useScroll`, `useTransform`, `useInView` ou `useAnimationFrame` (verificado por grep).

| Categoria | Tratamento |
|---|---|
| Seguro com observação | `framer-motion` tem suporte a SSR. Componentes `motion.*` renderizam o estado `initial` no HTML estático e iniciam animações no client após hidratação. **Observação UX**: o estado inicial em muitos lugares é `opacity: 0`. Crawlers que executam JS verão a animação normalmente. Crawlers sem JS lêem o markup, mas o snapshot visual (Lighthouse, ferramentas que apenas tiram screenshot) pode capturar o estado invisível. Não impacta SEO porque o conteúdo está no DOM. Não há ação obrigatória. |

### 3.3 Embla Carousel (via `TestimonialsSection`)

| Arquivo | Linha | Categoria | Tratamento |
|---|---|---|---|
| `src/components/ui/carousel.tsx` | 83-89, 91-103 | Seguro | Dois `React.useEffect` que inicializam o Embla. Roda só no client. Sem ação. |

### 3.4 `next-themes` (via Sonner toaster)

| Arquivo | Linha | Categoria | Tratamento |
|---|---|---|---|
| `src/components/ui/sonner.tsx` | 7 | Seguro com observação | `useTheme()` é chamado no corpo do componente. `next-themes` tem guards internos `typeof window`. Sem `<ThemeProvider>` no projeto, retorna `theme = "system"` consistentemente em SSR e client. **Validar no smoke-test do PR 3** (build local + abrir console do browser) que não há warning de hydration mismatch oriundo deste hook. |

### 3.5 JSON-LD duplicado entre `index.html` e `Index.tsx`

`index.html` (linhas 110-174) contém um bloco JSON-LD `FAQPage` com 7 perguntas. `src/pages/Index.tsx` (linhas 19-104) contém outro bloco JSON-LD `FAQPage` via `<JsonLd>` com 10 perguntas.

| Categoria | Tratamento |
|---|---|
| Observação | Hoje, no SPA, as duas tags coexistem no DOM da home. Após o SSG, o HTML pré-renderizado da `/` vai conter ambas (o `index.html` já tem a primeira; o React injeta a segunda durante o build). Crawlers/Google podem interpretar como duplicação. Recomenda-se remover o bloco do `index.html` e manter apenas o `<JsonLd>` por rota (que tem mais perguntas e é gerenciado em código). Decisão no PR 4 (Cleanup). |

### 3.6 `index.html` — script gtag inline

| Arquivo | Linha | Categoria | Tratamento |
|---|---|---|---|
| `index.html` | 8-15 | Seguro | `gtag('js', new Date())` está dentro de `<script>`, executa só no browser. Sem efeito no SSG. Mantém. |

---

## 4. Apêndice — Dead code (não montado em nenhuma rota)

Os arquivos abaixo contêm APIs do client mas **não são importados por nenhum código que entra no bundle**. Listados aqui para registro, **sem necessidade de ação**. O tree-shaking do Vite os remove.

| Arquivo | APIs do client | Por que é dead code |
|---|---|---|
| `src/components/ui/sidebar.tsx` | `window.addEventListener("keydown")` (l. 87, dentro de `useEffect`); `document.cookie` (l. 68, dentro de callback); `Math.random()` (l. 536, dentro de `useMemo` em `SidebarMenuSkeleton`) | Verificado com `grep -rn "from.*ui/sidebar"`: nenhum import fora do próprio arquivo. Boilerplate shadcn não removido. |
| `src/hooks/use-mobile.tsx` | `window.matchMedia` (l. 9), `window.innerWidth` (l. 11, 14) | Único consumidor é `ui/sidebar.tsx`, que também é dead code. |
| `src/components/ui/calendar.tsx` | `react-day-picker` | Verificado com `grep`: não importado. |
| `src/components/ui/chart.tsx` | `recharts` | Verificado com `grep`: não importado. |
| `src/components/SymptomAssessment.tsx` | nenhuma | Componente stub (formulário sem submit handler). Não é montado. |

> Recomendação opcional para o PR 4 (Cleanup): remover esses arquivos para reduzir ruído. Não bloqueia a migração.

---

## 5. Inventário de rotas para SSG

### 5.1 Rotas estáticas (em `src/App.tsx`)

| Rota | Componente |
|---|---|
| `/` | `pages/Index` |
| `/atuacao` | `pages/Atuacao` |
| `/blog` | `pages/Blog` |
| `/empresas` | `pages/Empresas` |
| `/podcast` | `pages/Podcast` |
| `/avaliacao` | `pages/Avaliacao` |
| `/vestibulandos` | `pages/VestibulandoEspecialista` |
| `/depressao` | `pages/ConditionPage` |
| `/ansiedade` | `pages/ConditionPage` |
| `/tdah` | `pages/ConditionPage` |
| `/bipolaridade` | `pages/ConditionPage` |
| `/alzheimer` | `pages/ConditionPage` |
| `/insonia` | `pages/ConditionPage` |
| `/estresse-pos-traumatico` | `pages/ConditionPage` |
| `*` (404) | `pages/NotFound` |

**Total estático: 14 rotas + 1 catch-all (404).**

`ConditionPage` deriva o slug via `useLocation().pathname.replace("/", "")` e procura em `src/data/conditions.ts`. As 7 rotas declaradas em `App.tsx` cobrem todos os 7 slugs presentes em `conditions` (`depressao`, `ansiedade`, `tdah`, `bipolaridade`, `alzheimer`, `insonia`, `estresse-pos-traumatico`). Sem mismatch.

### 5.2 Rotas dinâmicas

#### `/blog/:slug` — fonte: `src/data/blogPosts.ts`

`blogPosts` exporta **46 entradas**. Slugs:

```
depressao-ou-tristeza, o-que-e-psicogeriatria, tdah-em-adultos,
insonia-cronica-saude-mental, ansiedade-no-vestibular,
tdah-adultos-jovens-estudos, bipolaridade-ciclagem-rapaida,
comportamento-impulsivo-regulacao-emocional, medicacao-psiquiatrica-gravidez,
transtorno-adaptativo-estresse, uso-substancias-saude-mental,
transtorno-sono-paradoxal, fobia-social-timidez, automutilacao-nao-suicida,
burnout-esgotamento-profissional, demencia-sinais-precoces,
toc-transtorno-obsessivo-compulsivo, psicofarmacos-mitos-verdades,
estresse-pos-traumatico, sono-e-memoria-estudantes,
crise-de-ansiedade-o-que-acontece-no-corpo,
remedios-para-ansiedade-o-que-a-psiquiatria-usa,
tratamentos-naturais-ansiedade-evidencias,
florais-de-bach-ansiedade-evidencia-cientifica,
sertralina-antidepressivo-isrs, fluoxetina-prozac-depressao,
paroxetina-ansiedade-panico, bupropiona-dopamina-depressao,
escitalopram-cipralex-ansiedade, venlafaxina-efexor-ansiedade-severa,
quetiapina-seroquel-bipolar-psicose, lítio-sal-bipolar-gold-standard,
alprazolam-xanax-panico-anxiety, melatonina-sono-sincronizacao,
quando-procurar-psiquiatra-bh, como-saber-se-tenho-tdah,
psiquiatra-ou-psicologo-qual-procurar, ansiedade-e-doenca-ou-normal,
depressao-tem-cura-ou-tratamento, qual-diferenca-tristeza-depressao-ansiedade,
como-funciona-consulta-psiquiatrica, remedio-psiquiatrico-vicia,
quanto-tempo-demora-antidepressivo-fazer-efeito,
o-que-e-psicogeriatra-quando-consultar, quetiapina-guia-completo,
trazodona-guia-completo
```

Implementação na Fase 4:

```ts
{
  path: "blog/:slug",
  Component: lazy(() => import("./pages/BlogPost")),
  entry: "src/pages/BlogPost.tsx",
  getStaticPaths: () => blogPosts.map(p => `/blog/${p.slug}`),
}
```

**Atenção**: o slug `lítio-sal-bipolar-gold-standard` contém caractere acentuado (`í`). Isso vai gerar uma pasta com nome `lítio-...` em `dist/`. URLs com caracteres não-ASCII funcionam mas alguns sistemas (GitHub Pages, certos CDNs) tratam mal. Vercel suporta. Se o build SSG falhar nesse slug, considerar normalizar para `litio-` em uma migração subsequente (com redirect 301 do antigo).

#### `/blog/tema/:hubSlug` — fonte: `src/data/blogHubs.ts`

`blogHubs` exporta **4 entradas**: `ansiedade`, `psicogeriatria`, `tdah`, `psicofarmacologia`.

Implementação:

```ts
{
  path: "blog/tema/:hubSlug",
  Component: lazy(() => import("./pages/BlogHub")),
  entry: "src/pages/BlogHub.tsx",
  getStaticPaths: () => blogHubs.map(h => `/blog/tema/${h.slug}`),
}
```

(O briefing original sugeria 3 hubs — verificar e ajustar para 4.)

### 5.3 Total esperado de HTMLs em `dist/`

- 14 estáticas
- 7 condition pages (parte das 14, já contadas acima — listadas só para clareza)
- 46 blog posts
- 4 blog hubs
- 1 página 404 (gerada pelo SSG via fallback)

**Total: 65 HTMLs** (≈), bem acima da estimativa inicial do briefing de "≥15".

---

## 6. Achados secundários (não bloqueantes mas relevantes para os PRs seguintes)

1. **`public/sitemap.xml` está malformado.** Na linha 281-287 a entrada de `/vestibulandos` está aninhada incorretamente: o `<url>` de abertura aparece após o `<priority>` da entrada anterior, sem `</url>` fechado. Isso quebra o XML. Corrigir num PR separado (escopo de SEO, não de SSG). Adicionalmente, faltam no sitemap as 7 condition pages (`/depressao`, `/ansiedade`, `/tdah`, `/bipolaridade`, `/alzheimer`, `/insonia`, `/estresse-pos-traumatico`), `/podcast` e `/avaliacao`. Esses gaps reduzem cobertura de indexação independentemente do SSG.

2. **`vercel.json` não tem rewrite SPA.** Apenas redirects 301. A Fase 10 do plano não precisa remover rewrite catch-all (ele já não existe). Confirmar que `vercel.json` continua válido após o build SSG (cada rota terá seu HTML próprio em `dist/`, e o Vercel resolve por path).

3. **`vite@^8` no `package.json`.** Versão major incomum (Vite estável estava em 5/6 em 2025). Antes da Fase 2, verificar peer-deps de `vite-react-ssg` e `@unhead/react` contra Vite 8 — pode exigir downgrade do Vite ou `--legacy-peer-deps`.

4. **`@vitejs/plugin-react@^6.0.0`.** Mesma observação — versão major incomum, verificar compatibilidade.

5. **Após instalar `@unhead/react`, conferir** se a API `createHead` + `UnheadProvider` é a correta para a versão atual. Em versões recentes do unhead a integração com React mudou (ex.: `UnheadProvider` virou `UnheadContext.Provider`, ou `createHead` ficou em `@unhead/dom` ou `@unhead/ssr`). Validar no momento da instalação.

---

## 7. Plano de tratamento por PR

| PR | Mudança principal | Itens deste audit endereçados |
|---|---|---|
| **PR 1 (este)** | `MIGRATION_AUDIT.md` apenas. Sem mudanças de código. | — |
| **PR 2** | Setup `@unhead/react` + refatoração de `PageHead.tsx`. | 2.2 (PageHead.tsx). Opcional: 2.3 (guard no Supabase client). |
| **PR 3** | Migração para `vite-react-ssg`: novo `main.tsx`, `routes.tsx`, `Layout.tsx`, ajuste de `App.tsx`/`vite.config.ts`/`package.json`. Build SSG funcionando localmente. | 2.2 (main.tsx), 3.1 (Footer date), 3.4 (smoke-test sonner/next-themes). |
| **PR 4** | Cleanup: remover `App.tsx` antigo se aplicável, deduplicar JSON-LD entre `index.html` e `Index.tsx`, opcionalmente remover dead code shadcn (sidebar/calendar/chart/SymptomAssessment), atualizar README, finalizar `MIGRATION_NOTES.md`. | 3.5 (JSON-LD duplicado), seção 4 (dead code). Sitemap (item 6.1) fica para PR separado de SEO, fora do escopo do SSG. |

Cada PR ficará em draft para validação manual antes do merge.
