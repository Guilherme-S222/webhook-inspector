# Webhook Inspector

Uma ferramenta moderna para capturar, inspecionar e analisar requisições de webhooks, com geração automática de handlers TypeScript usando IA.

## 📋 Visão Geral

O Webhook Inspector é uma aplicação fullstack que permite capturar webhooks de serviços externos, visualizar seus detalhes de forma organizada e gerar automaticamente código TypeScript para tratamento desses webhooks usando inteligência artificial (Google Gemini).

## ✨ Funcionalidades

- **Captura de Webhooks**: Endpoint único para receber webhooks de qualquer serviço
- **Visualização Detalhada**: Interface completa para inspecionar headers, query params, body e metadados
- **Listagem com Paginação Infinita**: Rolagem infinita para navegar por todos os webhooks capturados
- **Geração de Código com IA**: Selecione múltiplos webhooks e gere handlers TypeScript automaticamente
- **Syntax Highlighting**: Visualização de código com destaque de sintaxe
- **Busca e Filtros**: Navegue facilmente entre diferentes requisições
- **Exclusão de Webhooks**: Remova webhooks individuais que não são mais necessários

## 🛠️ Stack Tecnológica

### Backend
- **Fastify** - Framework web rápido e eficiente
- **PostgreSQL** - Banco de dados relacional
- **Drizzle ORM** - ORM type-safe para TypeScript
- **Zod** - Validação de schemas
- **Google Gemini AI** - Geração de código inteligente
- **Docker** - Containerização do banco de dados
- **Scalar** - Documentação interativa da API

### Frontend
- **React 19** - Biblioteca de interface
- **Vite** - Build tool e dev server
- **TanStack Router** - Roteamento type-safe
- **TanStack Query** - Gerenciamento de estado assíncrono
- **Tailwind CSS** - Estilização utility-first
- **Radix UI** - Componentes acessíveis
- **Shiki** - Syntax highlighting
- **date-fns** - Manipulação de datas

## 📦 Estrutura do Projeto

```
.
├── api/                  # Backend Fastify
│   ├── src/
│   │   ├── db/          # Database schema e migrations
│   │   ├── routes/      # Rotas da API
│   │   ├── env.ts       # Variáveis de ambiente
│   │   └── server.ts    # Entry point
│   └── docker-compose.yml
│
└── web/                 # Frontend React
    ├── src/
    │   ├── components/  # Componentes React
    │   ├── routes/      # Rotas TanStack Router
    │   ├── http/        # Schemas e API client
    │   └── main.tsx     # Entry point
    └── vite.config.ts
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 20+
- pnpm 10+
- Docker e Docker Compose

### Configuração

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd <nome-do-repositorio>
   ```

2. **Instale as dependências**
   ```bash
   pnpm install
   ```

3. **Configure as variáveis de ambiente**
   
   Crie um arquivo `.env` na pasta `api/`:
   ```env
   NODE_ENV=development
   PORT=3333
   DATABASE_URL=postgresql://docker:docker@localhost:5432/webhooks
   GOOGLE_GENERATIVE_AI_API_KEY=sua_chave_api_aqui
   ```

4. **Inicie o banco de dados**
   ```bash
   cd api
   docker-compose up -d
   ```

5. **Execute as migrations**
   ```bash
   cd api
   pnpm db:migrate
   ```

6. **Popule o banco com dados de exemplo (opcional)**
   ```bash
   cd api
   pnpm db:seed
   ```

7. **Inicie o servidor backend**
   ```bash
   cd api
   pnpm dev
   ```

8. **Inicie o servidor frontend (em outro terminal)**
   ```bash
   cd web
   pnpm dev
   ```

9. **Acesse a aplicação**
   - Frontend: http://localhost:5173
   - API: http://localhost:3333
   - Documentação da API: http://localhost:3333/docs

## 📡 Usando o Webhook Inspector

### Capturando Webhooks

Envie requisições POST para:
```
http://localhost:3333/capture/<seu-endpoint>
```

Exemplo com curl:
```bash
curl -X POST http://localhost:3333/capture/stripe \
  -H "Content-Type: application/json" \
  -d '{"event": "payment.success", "amount": 1000}'
```

### Gerando Handlers

1. Na interface web, selecione os webhooks desejados usando os checkboxes
2. Clique no botão "Gerar handle"
3. O código TypeScript será gerado automaticamente com:
   - Schemas Zod para validação
   - Handlers para cada tipo de evento
   - Tratamento de erros

## 🔌 API Endpoints

- `POST /capture/*` - Captura um webhook
- `GET /api/webhooks` - Lista webhooks com paginação
- `GET /api/webhooks/:id` - Detalhes de um webhook específico
- `DELETE /api/webhooks/:id` - Remove um webhook
- `POST /api/generate` - Gera código TypeScript baseado em webhooks selecionados

## 🧪 Comandos Úteis

```bash
# Formatar código
pnpm format

# Executar Drizzle Studio (GUI para o banco)
cd api && pnpm db:studio

# Gerar nova migration
cd api && pnpm db:generate
```

## 📝 Licença

ISC

---
