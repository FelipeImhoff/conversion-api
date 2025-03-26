# Conversion API

## 📌 Visão Geral
Este projeto fornece uma API para calcular a evolução no tempo da taxa de conversão de respostas de pesquisas de usuários. A aplicação está dockerizada e utiliza **PostgreSQL** como banco de dados, **Prisma** como ORM e **Express.js** para gerenciar as rotas.

## 🚀 Instalação e Configuração
Para iniciar o projeto, siga os passos abaixo:

### 1️⃣ Baixar o arquivo de configuração
Baixe o arquivo de configuração necessário [neste link](https://drive.google.com/file/d/12oYHVCcvbxT_xXD236_lLzr5AC51Nl1B/view?usp=drive_link) e copie para a raiz do projeto.

### 2️⃣ Subir os contêineres com Docker
```sh
docker-compose up --build
```

### 3️⃣ Aplicar as migrações do Prisma
```sh
docker exec -it conversion-api-api-1 npx prisma migrate deploy
```

### 4️⃣ Importar dados iniciais para o banco
```sh
docker cp ./case_tech_lead.sql conversion-api-db-1:/tmp/case_tech_lead.sql
docker exec -it conversion-api-db-1 psql -U user -d inside
\i /tmp/case_tech_lead.sql
exit;
```

---

## 📡 Documentação da API
A API possui a seguinte rota implementada:

### 🔹 `GET /api/conversion-rate?origin={origem}`
Essa rota retorna a evolução da taxa de conversão no tempo com base na origem fornecida.

**Parâmetros:**
- `origin` (obrigatório): String representando a origem das respostas (exemplo: `facebook`, `google`, etc.).

**Exemplo de Requisição:**
```sh
GET http://localhost:3000/api/conversion-rate?origin=facebook
```

**Resposta de Exemplo:**
```json
[
  { "date": "2024-03-20", "conversionRate": 0.75 },
  { "date": "2024-03-21", "conversionRate": 0.78 }
]
```

**Códigos de Resposta:**
- `200 OK`: Retorna os dados da taxa de conversão.
- `400 Bad Request`: Parâmetro `origin` não fornecido ou inválido.
- `404 Not Found`: Nenhum dado encontrado para a origem informada.
- `500 Internal Server Error`: Erro interno do servidor.

---

## 🏗️ Arquitetura do Projeto
### 🔹 Tecnologias Utilizadas:
- **Node.js & Express.js**: Framework para criação da API.
- **PostgreSQL**: Banco de dados relacional para armazenar os dados.
- **Prisma ORM**: ORM para interação com o banco de dados.
- **Docker & Docker Compose**: Contêinerização do banco e da aplicação.

### 🔹 Estrutura de Pastas
```
📦 conversion-api
├── 📂 src
│   ├── 📂 controllers  # Lógica das rotas
│   ├── 📂 services     # Regras de negócio
│   ├── 📂 routes       # Definição das rotas
│   ├── 📂 prisma       # Configuração
