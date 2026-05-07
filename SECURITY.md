# Segurança — segredos e credenciais

Este projeto não armazena nenhuma credencial em código. Todos os segredos
ficam em variaveis de ambiente (`.env.local` em desenvolvimento, painel do
Vercel/host em produção).

## Estado atual

- Nenhum segredo está hardcoded em arquivos versionados.
- Nenhum segredo está presente no histórico do git (auditado em 2026-05-04).
- `.gitignore` bloqueia `.env*` exceto `.env.example`.
- `src/integrations/supabase/client.ts` consome `VITE_SUPABASE_URL` e
  `VITE_SUPABASE_PUBLISHABLE_KEY` via `import.meta.env`.

## Variáveis necessárias

Ver `.env.example`. Para rodar localmente:

```bash
cp .env.example .env.local
# editar .env.local com os valores reais do Supabase Dashboard
```

A chave `anon` / `publishable` é embarcada no bundle do client e **é segura
para ficar pública** desde que as policies de Row Level Security (RLS) no
Supabase estejam configuradas. A chave `service_role` **nunca** deve ser
exposta no cliente nem comitada.

### Chave IndexNow — pública por design

A constante `INDEXNOW_KEY` em `src/lib/indexnow-key.ts` e o arquivo
`public/<chave>.txt` **não são segredo**. O protocolo IndexNow exige que a
chave seja servida em `https://drjoaopedrocastro.com.br/<chave>.txt` para
provar a propriedade do domínio antes de aceitar pings de novas URLs. Pode
ser comitada e versionada normalmente. Não confundir com chave de API: ela
não autentica chamadas privilegiadas, apenas vincula um host a uma string.

## Se um segredo vazar

Vazamento de chave em repositório público é tratado como **comprometida no
momento do commit**. Bots de scraping indexam GitHub em segundos.

### 1. Rotacionar imediatamente

| Tipo | Onde rotacionar |
|---|---|
| Supabase anon / service_role | Dashboard → Settings → API → Reset |
| Token pessoal do GitHub | github.com/settings/tokens → Revoke + gerar novo |
| Qualquer outra chave de API | Painel do serviço correspondente |

Rotacionar é a **única** ação que efetivamente protege. Apagar o commit ou
tornar o repo privado depois NÃO invalida uma chave que já vazou.

### 2. Verificar uso indevido

- Supabase: Dashboard → Logs → procurar requisições inesperadas.
- GitHub: Settings → Security log.
- Provedor de cloud (Vercel, AWS, etc.): conferir billing e logs.

### 3. Limpar o histórico do git (opcional, defensivo)

Útil para reduzir exposição residual, mas **não substitui** a rotação:

```bash
# Usar git-filter-repo (preferido sobre o antigo filter-branch)
pip install git-filter-repo
git filter-repo --path arquivo-com-segredo --invert-paths
git push --force origin <branch>
```

Atenção: força reescrita do histórico. Coordenar com qualquer colaborador.

### 4. Sobre repositório público vs privado

Tornar privado não apaga o passado:

- Forks públicos preexistentes continuam públicos.
- Caches do Google, archive.org e Wayback Machine podem ter copiado.
- Bots de scraping de segredos provavelmente já indexaram.

Por isso a rotação é obrigatória.

## Prevenção

- Habilitar **GitHub Secret Scanning** e **Push Protection** em
  Settings → Code security and analysis (já vem ligado em repos públicos).
- Considerar `gitleaks` ou `trufflehog` em pre-commit local:

```bash
# Exemplo com gitleaks
brew install gitleaks   # ou equivalente Linux
gitleaks protect --staged
```

- Antes de comitar, hábito de rodar `git diff --staged | grep -iE
  "key|token|secret|password"` rapidamente.

---

## Quando começar a usar dados — RLS obrigatório

Repo público + dados privados é seguro **apenas** se RLS (Row Level Security)
estiver configurado em toda tabela com dados sensíveis. A chave `anon` no
client é segura por design — mas só porque o banco recusa tudo que as policies
não autorizam. Sem policy = sem segurança.

### Checklist antes de criar a primeira tabela com dados de usuário

1. Migration habilita RLS na tabela.
2. Pelo menos uma policy de SELECT existe (senão ninguém lê — inclusive o dono).
3. Policies de INSERT / UPDATE / DELETE conforme o caso de uso.
4. Testar com a chave `anon`: tentar ler/escrever como usuário A coisas do
   usuário B precisa falhar.
5. `service_role` permanece apenas em Edge Functions / backend, nunca no
   client nem em variáveis `VITE_*`.

### Receitas de policies prontas

#### 1. Tabela "cada usuário só vê o próprio" (caso mais comum)

```sql
-- Migration: 20260504000000_create_appointments.sql
CREATE TABLE appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  scheduled_at timestamptz NOT NULL,
  notes text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users read own appointments"
  ON appointments FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users insert own appointments"
  ON appointments FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users update own appointments"
  ON appointments FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users delete own appointments"
  ON appointments FOR DELETE
  USING (auth.uid() = user_id);
```

#### 2. Tabela "leitura pública, escrita autenticada" (ex.: comentários do blog)

```sql
ALTER TABLE blog_comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone reads comments"
  ON blog_comments FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users post comments"
  ON blog_comments FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = author_id);
```

#### 3. Tabela "só admin/service_role escreve, todos leem" (ex.: artigos)

```sql
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone reads articles"
  ON articles FOR SELECT
  USING (true);

-- Sem policy de INSERT/UPDATE/DELETE para `anon` ou `authenticated` =
-- só o `service_role` (via Edge Function) consegue gravar.
```

#### 4. Tabela "totalmente fechada" (ex.: logs de auditoria)

```sql
ALTER TABLE audit_log ENABLE ROW LEVEL SECURITY;
-- Nenhuma policy = ninguém com chave anon ou authenticated lê/escreve.
-- Acesso apenas via service_role no backend.
```

#### 5. Formulário de contato (lead capture sem login)

```sql
ALTER TABLE contact_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit leads"
  ON contact_leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Sem SELECT/UPDATE/DELETE para anon = ninguém lê os leads pelo client.
-- Você visualiza pelo Supabase Dashboard ou via Edge Function admin.
```

### Validar que RLS está realmente protegendo

No Supabase SQL Editor, simule a chamada do client:

```sql
-- Simula request com chave anon, sem usuário logado
SET ROLE anon;
SELECT * FROM appointments;  -- deve retornar 0 linhas

-- Simula request autenticado como usuário X
SET request.jwt.claim.sub TO 'uuid-do-usuario-x';
SET ROLE authenticated;
SELECT * FROM appointments;  -- deve retornar só os do usuário X

RESET ROLE;
```

---

## Dados de saúde — atenção LGPD adicional

Você é psiquiatra. Dados de paciente (sintomas, prontuário, medicação) são
**dados pessoais sensíveis** sob a LGPD (Lei 13.709/2018, Art. 5º II e Art. 11).
Além de RLS, considerar:

| Item | Como |
|---|---|
| Criptografia em coluna | `pgcrypto` no Postgres para campos críticos como CPF, prontuário. |
| Logs de acesso | Audit log do Supabase (plano Pro) ou tabela própria com triggers. |
| Consentimento explícito | Tabela `consent_records` registrando data + escopo + revogação. |
| Direito ao esquecimento | Endpoint/função para apagar todos os dados de um usuário. |
| Retenção | Definir prazo (ex.: 5 anos pós última consulta) e job que purga. |
| DPO | Designar encarregado se volume justificar. |
| Prontuário "real" | Considerar um sistema de saúde certificado para o prontuário em si — usar este site só para captação/agendamento reduz drasticamente a superfície de risco. |

Antes de guardar **qualquer** dado clínico, pause e revise este checklist.
