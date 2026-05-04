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
