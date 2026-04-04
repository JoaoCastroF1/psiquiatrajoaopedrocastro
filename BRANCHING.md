# Estratégia de branches

Este repositório passa a seguir uma estrutura simples com três níveis:

## 1) Branches principais

- `main`: produção (somente código estável e validado).
- `staging`: homologação/preview para testes antes de produção.

## 2) Branches de feature

Toda nova entrega deve sair de `staging` e seguir o padrão:

- `feat/schema-medico`
- `feat/landing-tdah-bh`
- `feat/cta-whatsapp`

Padrão recomendado para novas features:

- `feat/<descricao-curta-kebab-case>`

## 3) Fluxo de trabalho

1. Atualize a `staging` local:
   ```bash
   git checkout staging
   git pull origin staging
   ```
2. Crie a branch de feature a partir de `staging`:
   ```bash
   git checkout -b feat/nome-da-feature
   ```
3. Faça commits pequenos e descritivos.
4. Abra PR da feature para `staging`.
5. Após validar em `staging`, abra PR de `staging` para `main`.

## Regras rápidas

- `main` nunca recebe commit direto.
- Features nunca fazem PR direto para `main`.
- Correções urgentes devem usar `hotfix/<descricao>` saindo de `main`, com merge posterior em `staging`.

## Checklist de PR

- [ ] Branch segue padrão (`feat/*`, `fix/*`, `hotfix/*`).
- [ ] Build e testes locais executados.
- [ ] PR aponta para `staging` (ou para `main` apenas em release/hotfix).
- [ ] Descrição do PR inclui escopo e validação.
