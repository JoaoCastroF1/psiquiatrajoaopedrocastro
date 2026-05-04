# Site Dr. João Pedro Castro — Psiquiatra e Psicogeriatra em BH

Site institucional do Dr. João Pedro Castro Martins Farias (CRM 83920, RQE 62148 — Psiquiatria, RQE 66521 — Psicogeriatria), atendendo em Belo Horizonte/MG. A aplicação é uma SPA com landing pages para condições atendidas, blog, página de avaliação/contato e integrações de SEO/analytics.

Domínio de produção: https://drjoaopedrocastro.com.br

## Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** + **shadcn/ui** (Radix UI), **Framer Motion**, **Lucide**
- **React Router v6** para navegação
- **React Hook Form** + **Zod** para formulários
- **TanStack Query** para data fetching
- **Supabase** (`@supabase/supabase-js`) — cliente configurado
- **Vitest** + **@testing-library/react** (JSDOM) para unit tests
- **Playwright** para E2E (configurado em `playwright.config.ts`)
- **ESLint** + **Husky** + **lint-staged** no fluxo de commit
- **Sharp** + script `optimize-images` para gerar variantes WebP
- Deploy na **Vercel** (`vercel.json` com redirects 301 de URLs legadas)

## Pré-requisitos

- Node.js 20+ (mesma versão usada na CI)
- npm (há `bun.lock` no repositório, mas o fluxo padrão é npm)

## Como rodar localmente

```bash
git clone https://github.com/JoaoCastroF1/psiquiatrajoaopedrocastro.git
cd psiquiatrajoaopedrocastro
npm install
npm run dev
```

O Vite sobe em `http://localhost:8080` (definido em `vite.config.ts`).

## Variáveis de ambiente

Defina em um `.env.local` na raiz (não commitar):

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

Consulte `src/integrations/supabase` para os valores efetivamente consumidos.

## Scripts

| Script                     | O que faz                                                  |
| -------------------------- | ---------------------------------------------------------- |
| `npm run dev`              | Servidor de desenvolvimento (Vite, porta 8080)             |
| `npm run build`            | Build de produção (`prebuild` regenera o sitemap antes)    |
| `npm run build:dev`        | Build em modo development                                  |
| `npm run preview`          | Servir o build localmente                                  |
| `npm run generate:sitemap` | Gera `public/sitemap.xml` a partir de rotas e blog posts   |
| `npm run lint`             | ESLint                                                     |
| `npm run test`             | Vitest (uma execução)                                      |
| `npm run test:watch`       | Vitest em watch mode                                       |

Testes E2E com Playwright: `npx playwright test`. Otimização de imagens: `tsx scripts/optimize-images.ts`.

## Estrutura

```
src/
├── pages/               # Index, Atuacao, Empresas, Podcast, Avaliacao,
│                        # VestibulandoEspecialista, ConditionPage,
│                        # Blog, BlogHub, BlogPost, NotFound
├── components/          # Seções da home, Navbar, Footer, WhatsAppButton, JsonLd, etc.
│   └── ui/              # primitives shadcn/ui
├── data/                # blogPosts.ts, blogHubs.ts, conditions.ts (conteúdo estático)
├── hooks/               # use-toast, use-mobile
├── integrations/
│   └── supabase/        # client.ts + types.ts (gerado)
├── lib/                 # utils, analytics
├── assets/              # imagens (jpg + variantes webp)
├── test/                # setup Vitest + testes
├── routes.tsx           # rotas (incl. getStaticPaths para blog/temas)
├── Layout.tsx
└── main.tsx
public/                  # favicons, manifest, sitemap.xml
supabase/                # config.toml + migrations SQL
scripts/                 # generate-sitemap.ts, optimize-images.ts
docs/brand/              # ativos de marca
```

Rotas: `/`, `/atuacao`, `/empresas`, `/podcast`, `/avaliacao`, `/vestibulandos`, condições (`/depressao`, `/ansiedade`, `/tdah`, `/bipolaridade`, `/alzheimer`, `/insonia`, `/estresse-pos-traumatico`), `/blog`, `/blog/:slug` e `/blog/tema/:hubSlug`.

## Conteúdo principal

- **Blog** com posts em `src/data/blogPosts.ts` agrupados por hubs (`src/data/blogHubs.ts`).
- **Páginas de condição** em `src/data/conditions.ts` renderizadas por `src/pages/ConditionPage.tsx`.
- **Avaliação de sintomas** (`/avaliacao`) — questionário que finaliza encaminhando as respostas para o WhatsApp do Dr.
- **Empresas** (`/empresas`) — programas corporativos (NR-1, palestras, diagnóstico).
- **Vestibulandos** (`/vestibulandos`) — programa para estudantes em preparação.

## SEO

- JSON-LD estruturado: `Physician`, `FAQPage`, `MedicalWebPage` (em `index.html` e em `src/components/JsonLd.tsx`).
- OpenGraph + Twitter Card no `index.html`.
- `public/sitemap.xml` regerado automaticamente pelo `prebuild` (`scripts/generate-sitemap.ts`).
- Meta tags por rota via `src/components/PageHead.tsx`.
- Google Tag (gtag) e Vercel Speed Insights instrumentados.

## Deploy

Deploy contínuo via Vercel. O `vercel.json` mantém redirects 301 para URLs legadas (ex.: `/sobre` → `/atuacao`, `/artigos/:slug` → `/blog/:slug`).

## Fluxo de branches

Detalhes em [BRANCHING.md](./BRANCHING.md). Resumo:

- `main` → produção (sem commits diretos).
- `staging` → preview/homologação. Toda feature passa por aqui antes de `main`.
- Branches de trabalho: `feat/<descricao>`, `fix/<descricao>`, `hotfix/<descricao>` (hotfix sai de `main`).
- Mensagens de commit seguem **Conventional Commits**.

Notas históricas estão em [MIGRATION_NOTES.md](./MIGRATION_NOTES.md) e [MIGRATION_AUDIT.md](./MIGRATION_AUDIT.md).

## Contribuindo

PRs bem-vindos. Antes de abrir:

1. Branch a partir de `staging`.
2. `npm run lint && npm run build && npm run test` localmente.
3. PR aponta para `staging` (apenas releases ou hotfix podem ir para `main`).
4. Descrição inclui escopo e como validar.

## Licença

Conteúdo, marca e textos são de propriedade do Dr. João Pedro Castro. O código é privado/proprietário, salvo indicação em contrário.
