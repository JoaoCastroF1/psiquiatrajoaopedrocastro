# Site Dr. João Pedro Castro — Psiquiatra e Psicogeriatra em BH

Site institucional do Dr. João Pedro Castro Martins Farias (CRM 83920, RQE 62148 — Psiquiatria, RQE 66521 — Psicogeriatria), atendendo em Belo Horizonte/MG.

Domínio de produção: https://drjoaopedrocastro.com.br

## Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** + **shadcn/ui** (Radix)
- **React Router v6** para navegação
- **TanStack Query** para data fetching
- **Framer Motion** para animações
- **Supabase** (cliente configurado; sem tabelas ativas no schema atual)
- **Vitest** + **@testing-library/react** para unit tests
- **Playwright** para E2E (configurado, ainda sem suítes)

## Scripts

```bash
npm install        # instala dependências
npm run dev        # dev server em http://localhost:8080
npm run build      # build de produção
npm run lint       # ESLint
npm run test       # Vitest run
npm run test:watch # Vitest em watch mode
npm run preview    # preview do build local
```

## Estrutura

```
src/
├── App.tsx              # router principal (11 rotas)
├── pages/               # Páginas: Index, Atuacao, Blog, BlogPost, BlogHub,
│                        # Empresas, Podcast, Avaliacao, Vestibulandos,
│                        # ConditionPage (depressao, ansiedade, tdah,
│                        # bipolaridade, alzheimer, insonia, estresse-pos-traumatico),
│                        # NotFound
├── components/          # Seções, Navbar, Footer, WhatsAppButton, JsonLd, etc.
│   └── ui/              # shadcn/ui primitives
├── data/                # blogPosts.ts, conditions.ts, blogHubs.ts (conteúdo estático)
├── hooks/               # use-toast, use-mobile
├── integrations/
│   └── supabase/        # client.ts + types.ts (gerado)
├── lib/                 # utils
└── test/                # setup Vitest + testes
public/                  # favicon, sitemap.xml
supabase/migrations/     # migrations SQL (atualmente sem tabelas ativas)
```

## Conteúdo principal

- **Blog** com posts em `src/data/blogPosts.ts` agrupados por hubs (`src/data/blogHubs.ts`).
- **Páginas de condição** em `src/data/conditions.ts` renderizadas por `src/pages/ConditionPage.tsx` para `/depressao`, `/ansiedade`, `/tdah`, `/bipolaridade`, `/alzheimer`, `/insonia`, `/estresse-pos-traumatico`.
- **Avaliação de sintomas** (`/avaliacao`) — questionário de 6 perguntas que termina enviando as respostas para o WhatsApp do Dr.
- **Empresas** (`/empresas`) — programas corporativos (NR-1, palestras, diagnóstico).
- **Vestibulandos** (`/vestibulandos`) — programa especializado.

## SEO

- JSON-LD estruturado: `Physician`, `FAQPage`, `MedicalWebPage` (em `index.html` e `JsonLd.tsx`).
- OpenGraph + Twitter Card no `index.html`.
- `public/sitemap.xml` com todas as URLs públicas (regenerar manualmente ao adicionar páginas/posts).
- Meta tags por rota via `src/components/PageHead.tsx`.

## Fluxo de branches

Detalhes em [BRANCHING.md](./BRANCHING.md). Resumo:

- `main` → produção (sem commits diretos).
- `staging` → preview/homologação. Toda feature passa por aqui antes de `main`.
- Branches de feature: `feat/<descricao>`, fix: `fix/<descricao>`, hotfix saindo de `main`: `hotfix/<descricao>`.
- Mensagens de commit seguem **Conventional Commits**.

## Deploy

TBD — configuração de hospedagem a documentar.

## Contribuindo

PRs bem-vindos. Antes de abrir:

1. Branch a partir de `staging`.
2. `npm run lint && npm run build && npm run test` localmente.
3. PR aponta para `staging` (apenas releases ou hotfix podem ir para `main`).
4. Descrição inclui escopo e como validar.
