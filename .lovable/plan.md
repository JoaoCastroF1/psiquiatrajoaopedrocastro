

## Plano: Remover o módulo CRM/Admin do projeto

### O que será removido
- **Páginas**: `AdminLogin.tsx` e `Admin.tsx` (login e painel de leads)
- **Rotas**: `/admin` e `/admin/login` no `App.tsx`
- **Formulário de contato**: `ContactFormSection.tsx` (envia dados para a tabela `leads`)
- **Referência ao formulário** na homepage (`Index.tsx`)
- **Tabela `leads`** no banco de dados (via migration: `DROP TABLE`)

### O que será mantido
- Todo o restante do site (Hero, About, FAQ, Footer, WhatsApp, Blog, etc.)
- O botão de WhatsApp continua como canal principal de contato

### Arquivos afetados
1. **`src/App.tsx`** — remover imports e rotas de `AdminLogin` e `Admin`
2. **`src/pages/Index.tsx`** — remover import e uso de `ContactFormSection`
3. **Deletar**: `src/pages/Admin.tsx`, `src/pages/AdminLogin.tsx`, `src/components/ContactFormSection.tsx`
4. **Migration SQL**: `DROP TABLE public.leads;`

