# Viva Store — Next.js + Supabase

Loja virtual didática com página inicial, autenticação e painel administrativo para cadastrar, visualizar, editar e excluir produtos. A tabela e suas colunas estão em português, e o ID é numérico e sequencial.

## Como configurar

1. No Supabase, crie um projeto e execute `supabase/schema.sql` no **SQL Editor**. O script recria a tabela `produtos` e apaga uma versão anterior com o mesmo nome.
2. Em **Project Settings > API**, copie a URL e a chave `anon`.
3. Duplique `.env.example`, renomeie para `.env.local` e preencha as duas variáveis.
4. Instale e execute:

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`. Em `/login`, crie uma conta. Se a confirmação de e-mail estiver ligada no Supabase, confirme o e-mail antes de entrar.

## Estrutura principal

- `app/page.tsx`: página inicial da loja
- `app/login`: cadastro, entrada e saída
- `app/admin`: visão geral e CRUD
- `components`: cabeçalho, cards, formulário e tabela
- `lib/supabase`: conexão segura para navegador e servidor
- `supabase/schema.sql`: tabela, regras de acesso e produtos iniciais

> Para produção, crie uma tabela de perfis e restrinja as políticas do CRUD apenas a usuários com função `admin`.
