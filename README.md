# CV Tailor — Landing Page

Landing page para o produto **CV Tailor**: uma ferramenta que pega o currículo do candidato e customiza para uma vaga específica.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- Fontes: Outfit + Syne (Google Fonts)

## Como rodar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Planos e preços (parametrizáveis)

Os pacotes de créditos e preços vêm do arquivo **`config/packages.json`**. Para alterar planos ou preços:

1. Edite `config/packages.json` (cada item tem `credits`, `price`, `title`, `label`).
2. Faça um novo deploy (ou reinicie o servidor em dev).

A landing, a página de compra e a API de pagamento usam esse arquivo como fonte única.

## Envio de e-mail (formulário CV)

O formulário envia o currículo e a descrição da vaga para um e-mail configurado via SMTP. Copie `.env.example` para `.env.local` e preencha:

- **RECIPIENT_EMAIL** — e-mail que receberá os envios
- **SMTP_HOST**, **SMTP_PORT**, **SMTP_USER**, **SMTP_PASS** — credenciais do servidor SMTP

### Gmail: use Senha de app (não a senha da conta)

O Gmail não aceita mais a senha normal em apps. É obrigatório usar uma **Senha de app**:

1. Ative a [verificação em duas etapas](https://myaccount.google.com/signinoptions/two-step-verification) na sua conta Google.
2. Acesse [Senhas de app](https://myaccount.google.com/apppasswords).
3. Crie uma senha de app para “Mail” (ou “Outro”).
4. Use o e-mail da conta em **SMTP_USER** e a senha de 16 caracteres em **SMTP_PASS**.

Exemplo em `.env.local`:

```
RECIPIENT_EMAIL=destino@exemplo.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx
```

## Pagamento (Mercado Pago)

O fluxo de compra de créditos usa **Mercado Pago** (Checkout Pro). Sugestão para o Brasil:

- **Mercado Pago** — PIX, cartão, boleto; muito usado no Brasil; API simples; Checkout Pro redireciona o usuário para a página de pagamento do MP.
- Alternativa: **Stripe** (funciona no Brasil com PIX e cartão) se você quiser foco em internacional depois.

Para ativar o pagamento, crie uma aplicação em [Mercado Pago Developers](https://www.mercadopago.com.br/developers) e adicione em `.env.local`:

```
MERCADOPAGO_ACCESS_TOKEN=seu_access_token_producao
```

Para testes use o Access Token de **teste** (sandbox). A URL de retorno após o pagamento usa o `origin` da requisição ou a variável opcional:

```
NEXT_PUBLIC_APP_URL=https://seusite.com
```

## Checklist final e métricas simples

**Checklist final** é a lista de verificação antes de considerar o MVP pronto para uso real. Exemplos:

- Landing publicada e CTAs funcionando
- Formulário (CV + e-mail + descrição) envia e o e-mail chega com todos os dados
- Página “Comprar créditos” abre e redireciona para o Mercado Pago
- Após pagamento aprovado o usuário cai na página de sucesso
- Você consegue ver no Mercado Pago quem comprou e qual e-mail (para liberar créditos manualmente se quiser)

**Métricas simples** são números que você pode acompanhar sem ferramenta complexa:

- **Conversão landing → compra**: quantas pessoas clicaram em “Comprar créditos” e quantas concluíram o pagamento (dá para ver no painel do Mercado Pago).
- **Uso de créditos**: quantos envios de CV você recebeu por e-mail (um envio = 1 crédito consumido, se você controlar manualmente).
- **Feedback**: respostas de clientes por e-mail ou um formulário simples de “Como foi sua experiência?”.

Não é obrigatório ter dashboard: um arquivo de texto ou planilha com “data, evento (compra/envio), e-mail” já serve para um MVP.

## Scripts

- `npm run dev` — servidor de desenvolvimento
- `npm run build` — build de produção
- `npm run start` — servidor de produção (após `build`)
- `npm run lint` — ESLint
