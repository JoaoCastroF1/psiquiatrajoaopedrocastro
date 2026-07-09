# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> Mantenha este arquivo curto e factual. Detalhes profundos vão em
> `SECURITY.md`, `MIGRATION_AUDIT.md`, `MIGRATION_NOTES.md` etc.

## Contexto do projeto

Site institucional do Dr. João Pedro Castro (psiquiatra em Belo Horizonte).

- **Build**: Vite + `vite-react-ssg` (renderização estática, ~65 HTMLs em `dist/`)
- **UI**: React 18 + TypeScript + Tailwind + shadcn/ui + framer-motion
- **Hospedagem**: Vercel (`vercel.json` controla redirects 301, CSP e headers de segurança)
- **Backend**: Supabase (cliente em `src/integrations/supabase/client.ts`,
  hoje sem uso ativo no app — apenas configurado)
- **Idioma**: o site é em português brasileiro. Comunicação com o usuário
  também em pt-BR.
- O `README.md` está desatualizado (boilerplate descrevendo features que não
  existem — login, agendamento, tracker). Não o use como referência.

## Comandos

```bash
npm run dev          # dev server (porta 8080)
npm run build        # SSG build (roda prebuild: gera public/sitemap.xml)
npm run preview      # preview do build
npm run lint         # eslint
npm run typecheck    # tsc -b
npm run test         # vitest run (testes em src/**/*.{test,spec}.{ts,tsx})
npm run test:watch   # vitest em watch mode
npx vitest run src/test/errorTracking.test.ts   # um teste específico
```

O CI (`.github/workflows/ci.yml`) roda lint → typecheck → test → build em
todo PR. Rode os quatro localmente antes de pushar.

## Arquitetura

### SSG e rotas
- `src/routes.tsx` é a fonte única de rotas (`RouteRecord[]` do vite-react-ssg).
  Toda página nova entra aqui, com lazy import. Rotas dinâmicas
  (`blog/:slug`, `blog/tema/:hubSlug`) declaram `getStaticPaths` para o SSG
  saber quais HTMLs gerar.
- `src/Layout.tsx` é a raiz: providers (react-query, tooltip, toasters),
  `ScrollToTop`, schema `Person` global e Speed Insights.
- Páginas de condição (`/tdah`, `/ansiedade`, `/depressao`...) compartilham
  um único componente `src/pages/ConditionPage.tsx`, que resolve o conteúdo
  pelo pathname via `src/data/conditions.ts`. Nova condição = entrada em
  `conditions.ts` + rota em `routes.tsx` + entrada no sitemap.

### Conteúdo do blog — divisão intencional por bundle
O blog é todo dado estático em `src/data/`, dividido para não inflar o
bundle das páginas de listagem:
- `blogIndex.ts` — metadados de todos os posts (slug, título, SEO, keywords).
  Importado por rotas, sitemap, home e hubs.
- `blogContent.ts` — corpo dos artigos (`Record<slug, string[]>`; strings
  com prefixo `## `/`### ` viram headings). Importado só por quem renderiza
  o artigo completo.
- `blogFaqs.ts` — FAQs por slug; viram seção visível + schema FAQPage (JSON-LD).
- `blogPosts.ts` — junta index + content; usado pela busca (`src/lib/searchIndex.ts`).
- `blogHubs.ts` — hubs temáticos (`/blog/tema/:hubSlug`).

Post novo = entrada em `blogIndex.ts` + corpo em `blogContent.ts` (+ FAQs em
`blogFaqs.ts`). **Não** editar `blogPosts.ts`. Manter essa separação ao mexer
no blog.

### SEO
- `src/components/PageHead.tsx` — title/description/OG/Twitter por página
  (usa `<Head>` do vite-react-ssg). Toda página deve usá-lo.
- `src/components/JsonLd.tsx` + `src/data/structured-data.ts` — JSON-LD
  (Person, MedicalWebPage, FAQPage, BlogPosting...).
- `scripts/generate-sitemap.ts` roda no `prebuild` e gera `public/sitemap.xml`
  a partir de `blogIndex` + `blogHubs` + rotas estáticas hardcoded. `lastmod`
  das páginas estáticas é fixo de propósito — atualizar manualmente só quando
  o conteúdo mudar de verdade.
- URLs antigas redirecionam via `vercel.json` (não criar rota de redirect no app).
- Erros de runtime vão para o GA4 via `src/lib/errorTracking.ts`.

## Variáveis de ambiente

Apenas duas, ambas no client:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY` (chave `anon` do Supabase, segura para
  bundle desde que RLS esteja configurado — ver abaixo)

`.env.example` é o template. `.env.local` é o real (gitignored).
**Nunca** comitar valores reais. **Nunca** colocar `service_role` em
variável `VITE_*`.

## ⚠️ GUARDRAIL: trabalho com dados (LEIA ANTES DE CODAR)

Hoje o projeto **não persiste dados de usuário**. Quando o usuário pedir
para adicionar QUALQUER feature que envolva persistência — formulário de
contato que salva, agendamento online, login, comentários, prontuário,
métricas por usuário, etc. — **PAUSE antes de escrever código** e:

1. **Avise explicitamente** que vai precisar configurar RLS no Supabase
   antes de a feature ser segura.
2. **Pergunte qual a natureza do dado**:
   - Lead/contato simples? → policy de INSERT-only para `anon`
   - Dado de usuário logado? → RLS por `auth.uid() = user_id` + Supabase Auth
   - **Dado clínico de paciente** (sintoma, medicação, prontuário,
     CPF/RG)? → ALERTA LGPD. Ver `SECURITY.md` seção "Dados de saúde".
     Recomendar fortemente que o prontuário em si fique num sistema de
     saúde certificado, e este site cuide só de captação/agendamento.
3. **Aponte para `SECURITY.md`** seção "Quando começar a usar dados — RLS
   obrigatório", que tem migrations prontas para os 5 cenários comuns.
4. **Ao criar a migration** (em `supabase/migrations/`), sempre incluir
   `ALTER TABLE ... ENABLE ROW LEVEL SECURITY;` e pelo menos uma policy de
   SELECT no mesmo arquivo. Não deixar para "depois".
5. **Após implementar**, sugerir o teste de RLS com `SET ROLE anon` no SQL
   Editor (receita em `SECURITY.md`) antes de considerar a feature pronta.

Esse guardrail existe porque o usuário pediu explicitamente para ser
lembrado quando começar a usar dados (conversa de 2026-05-04).

## Convenções

### Branches e PRs
- Trabalho do Claude: `claude/<descrição-em-kebab>-<sufixo>`, PR criado
  como **draft** direto para `main` (o fluxo com `staging` descrito em
  `BRANCHING.md` não está em uso — não existe branch `staging` no remoto).
- **Sempre** enviar ao usuário o link do preview do Vercel a cada deploy
  de PR (o usuário pediu explicitamente — conversa de 2026-05-16).

### Commits
- Conventional commits em pt-BR: `feat:`, `fix:`, `chore:`, `docs:`,
  `refactor:`. Mensagem curta no título; detalhes no corpo.

### Estilo de código
- Componentes: `PascalCase.tsx` em `src/components/`; primitivos shadcn/ui
  em `src/components/ui/`; marca em `src/components/brand/`.
- Páginas: `PascalCase.tsx` em `src/pages/`, registradas em `src/routes.tsx`.
- Import alias `@/` → `src/`.
- Tailwind com tokens semânticos (paleta DJP em `tailwind.config.ts` e
  `src/index.css`) — não usar valores HSL crus.
- Sem comentários redundantes; comentário só quando o "porquê" não é
  óbvio (ver `MIGRATION_AUDIT.md` para padrões já adotados).

## Documentos relacionados

- `SECURITY.md` — segredos, rotação, RLS, LGPD
- `MIGRATION_AUDIT.md` — auditoria SPA → SSG (referência)
- `MIGRATION_NOTES.md` — notas da migração SSG
- `BRANCHING.md` — convenções de branch (fluxo `staging` não adotado na prática)
- `docs/brand/` — manuais da identidade visual DJP (PDFs)
