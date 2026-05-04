# Dr. João Pedro Castro — Site Institucional

Site institucional do Dr. João Pedro Castro Martins Farias, médico psiquiatra e psicogeriatra em Belo Horizonte/MG. A aplicação é uma SPA estática (SSG) com landing pages para condições atendidas, área de conteúdo (blog), página de avaliação/contato e integrações de marketing/analytics.

URL de produção: https://drjoaopedrocastro.com.br

## Stack

- **Build/SSG**: Vite + [vite-react-ssg](https://github.com/zhongzhongkkk/vite-react-ssg)
- **UI**: React 18, TypeScript, React Router, TailwindCSS, [shadcn/ui](https://ui.shadcn.com/) (Radix UI), Framer Motion, Lucide
- **Forms/dados**: React Hook Form + Zod, TanStack Query
- **Backend/integrações**: Supabase (`@supabase/supabase-js`)
- **SEO/Analytics**: JSON-LD (`Physician`), sitemap gerado em `prebuild`, Google Tag (gtag), Vercel Speed Insights
- **Testes**: Vitest + Testing Library (unitário/JSDOM) e Playwright (E2E)
- **Deploy**: Vercel (`vercel.json` com redirects de URLs legadas)

## Estrutura

```
src/
  pages/              # Index, Atuacao, Empresas, Podcast, Avaliacao,
                      # VestibulandoEspecialista, ConditionPage,
                      # Blog, BlogHub, BlogPost, NotFound
  components/         # Seções da home + componentes shadcn em components/ui
  data/               # blogPosts, blogHubs e demais conteúdos estáticos
  integrations/       # cliente Supabase e integrações externas
  hooks/ lib/ assets/ # utilitários, hooks e mídia
  routes.tsx          # rotas (incluindo getStaticPaths para blog/temas)
  Layout.tsx main.tsx # entry e shell
supabase/             # config e migrations
scripts/              # generate-sitemap.ts (executado no prebuild)
public/               # favicons, manifest, imagens estáticas
docs/brand/           # ativos de marca
```

Rotas principais: `/`, `/atuacao`, `/empresas`, `/podcast`, `/avaliacao`, `/vestibulandos`, páginas de condição (`/depressao`, `/ansiedade`, `/tdah`, `/bipolaridade`, `/alzheimer`, `/insonia`, `/estresse-pos-traumatico`), `/blog`, `/blog/:slug` e `/blog/tema/:hubSlug`.

## Pré-requisitos

- Node.js 20+ (recomendado)
- npm (ou bun — há `bun.lock` no repo)

## Como rodar localmente

```bash
git clone https://github.com/JoaoCastroF1/psiquiatrajoaopedrocastro.git
cd psiquiatrajoaopedrocastro
npm install
npm run dev
```

O Vite sobe em `http://localhost:8080` (configurado em `vite.config.ts`).

## Variáveis de ambiente

Defina em um `.env.local` na raiz (não commitar):

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

Consulte `src/integrations/supabase` para os valores efetivamente consumidos.

## Scripts

| Script              | O que faz                                                     |
| ------------------- | ------------------------------------------------------------- |
| `npm run dev`       | Servidor de desenvolvimento (Vite, porta 8080)                |
| `npm run build`     | Gera o sitemap (`prebuild`) e faz o build estático com SSG    |
| `npm run build:dev` | Build SSG em modo development                                 |
| `npm run preview`   | Servidor local para inspecionar o build                       |
| `npm run lint`      | ESLint                                                        |
| `npm run test`      | Vitest (uma execução)                                         |
| `npm run test:watch`| Vitest em watch mode                                          |

Testes E2E usam Playwright (`playwright.config.ts`); rode com `npx playwright test`.

## Deploy

Deploy contínuo via Vercel a partir das branches principais. O `vercel.json` mantém redirects 301 para URLs legadas (ex.: `/sobre` → `/atuacao`, `/artigos/:slug` → `/blog/:slug`).

## Fluxo de branches

A organização oficial está em [BRANCHING.md](./BRANCHING.md). Resumo:

- `main` — produção
- `staging` — homologação/preview
- `feat/*`, `fix/*`, `hotfix/*` — branches de trabalho saindo de `staging` (hotfix sai de `main`)

Notas de migração e auditoria histórica estão em [MIGRATION_NOTES.md](./MIGRATION_NOTES.md) e [MIGRATION_AUDIT.md](./MIGRATION_AUDIT.md).

## Contribuição

Issues e PRs são bem-vindos. Antes de abrir um PR, rode `npm run lint` e `npm run test` localmente e siga o checklist em `BRANCHING.md`.

## Licença

Conteúdo, marca e textos são de propriedade do Dr. João Pedro Castro. O código é privado/proprietário, salvo indicação em contrário.
