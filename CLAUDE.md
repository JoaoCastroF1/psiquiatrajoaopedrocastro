# CLAUDE.md — Instruções para sessões do Claude Code neste repositório

> Este arquivo é lido automaticamente pelo Claude no início de cada sessão.
> Mantenha curto e factual. Detalhes profundos vão em `SECURITY.md`,
> `MIGRATION_AUDIT.md`, `MIGRATION_NOTES.md` etc.

## Contexto do projeto

Site institucional do Dr. João Pedro Castro (psiquiatra). Stack:

- **Build**: Vite + `vite-react-ssg` (renderização estática, ~65 HTMLs)
- **UI**: React 18 + TypeScript + Tailwind + shadcn/ui + framer-motion
- **Hospedagem**: Vercel
- **Backend**: Supabase (cliente em `src/integrations/supabase/client.ts`,
  hoje sem uso ativo no app — apenas configurado)
- **Idioma**: o site é em português brasileiro. Comunicação com o usuário
  também em pt-BR.

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
4. **Ao criar a migration**, sempre incluir `ALTER TABLE ... ENABLE ROW
   LEVEL SECURITY;` e pelo menos uma policy de SELECT no mesmo arquivo. Não
   deixar para "depois".
5. **Após implementar**, sugerir o teste de RLS com `SET ROLE anon` no SQL
   Editor (receita em `SECURITY.md`) antes de considerar a feature pronta.

Esse guardrail existe porque o usuário pediu explicitamente para ser
lembrado quando começar a usar dados (conversa de 2026-05-04).

## Convenções

### Branches
- Trabalho do Claude: `claude/<descrição-em-kebab>-<sufixo>`
- PRs criados como **draft** por padrão.

### Commits
- Convencional commits em pt-BR: `feat:`, `fix:`, `chore:`, `docs:`,
  `refactor:`. Mensagem curta no título; detalhes no corpo.

### Estilo de código
- Componentes: `PascalCase.tsx` em `src/components/`
- Páginas: `PascalCase.tsx` em `src/pages/`, listadas em `src/routes.tsx`
- Tailwind tokens semânticos (paleta DJP) — não usar valores HSL crus
- Sem comentários redundantes; comentário só quando o "porquê" não é
  óbvio (ver `MIGRATION_AUDIT.md` para padrões já adotados)

## Comandos

```bash
npm run dev        # dev server
npm run build      # build SSG (gera ~65 HTMLs em dist/)
npm run preview    # preview do build
npm run lint       # eslint
npm run test       # vitest
```

## Documentos relacionados

- `SECURITY.md` — segredos, rotação, RLS, LGPD
- `MIGRATION_AUDIT.md` — auditoria SPA → SSG (referência)
- `MIGRATION_NOTES.md` — notas da migração SSG
- `BRANCHING.md` — convenções de branch
- `README.md` — overview básico
