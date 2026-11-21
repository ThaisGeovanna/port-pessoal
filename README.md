# Portfólio pessoal

Portfólio responsivo desenvolvido com Next.js App Router, TypeScript, Tailwind CSS, Framer Motion e Lucide React.

## Instalação

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Scripts

- `npm run dev` — servidor de desenvolvimento
- `npm run build` — build de produção
- `npm run lint` — validação com ESLint

## Dados fictícios e personalização

Todos os textos e links de exemplo ficam centralizados em `lib/data.ts`.

Antes de publicar, substitua:

1. Nome, cargo, apresentação e e-mail em `profile`.
2. Foto em `public/images/avatar.svg` ou troque `avatar` por uma imagem em `public/images/`.
3. Projetos em `projects`, incluindo imagens, links e stacks.
4. Skills em `skillCategories`.
5. Formação em `education`.
6. Certificados em `certificates` e imagens em `public/certificates/`.
7. Hobbies em `hobbies`.
8. Links sociais em `socialLinks`.
9. URL real do CV em `public/cv/thais-geovanna-cv.pdf`.

O CV atual é um PDF fictício. Substitua-o pelo seu documento real antes do deploy.

## Contato por e-mail

A rota `app/api/contact/route.ts` aceita envio via API REST do Resend. Sem variáveis configuradas, ela informa que o serviço ainda não está configurado e mantém o link de e-mail direto visível.

Configure no provedor de deploy:

```env
RESEND_API_KEY=re_sua_chave
CONTACT_EMAIL=seu-email@example.com
```

Para não usar Resend, mantenha o fallback de `mailto:` ou implemente seu provedor preferido na rota.

## Deploy na Vercel

1. Envie o projeto para o GitHub.
2. Importe o repositório na Vercel.
3. Confirme framework Next.js e comando `npm run build`.
4. Adicione as variáveis de ambiente do contato.
5. Publique.

## Checklist de personalização

- [ ] Substituir todos os dados fictícios.
- [ ] Inserir foto e projetos reais.
- [ ] Inserir CV real em PDF.
- [ ] Configurar domínio real em `metadataBase`.
- [ ] Configurar links GitHub, LinkedIn e WhatsApp.
- [ ] Configurar variáveis do Resend.