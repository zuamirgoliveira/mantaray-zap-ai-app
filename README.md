# Manta Ray Zap AI

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/seu-usuario/manta-ray-zap-ai) [![License](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)
## Sumário

- [Descrição](#descrição)  
- [Funcionalidades](#funcionalidades)  
- [Tecnologias](#tecnologias)  
- [Pré-requisitos](#pré-requisitos)  
- [Instalação](#instalação)  
- [Configuração](#configuração)  
- [Scripts disponíveis](#scripts-disponíveis)  
- [Desenvolvimento](#desenvolvimento)  
- [Build & Distribuição](#build--distribuição)  
- [Estrutura do Projeto](#estrutura-do-projeto)  
- [Contribuindo](#contribuindo)  
- [Licença](#licença)

## Descrição

Aplicativo desktop nativo (Windows) que integra WhatsApp e ChatGPT, permitindo:
- Emparelhamento via QR Code (WPPConnect)  
- Envio/recebimento de mensagens automatizadas  
- Personalização de tom e estilo (personas)  
- Resumos de conversas de grupo sob demanda  

Projetado para profissionais e gestores de comunidades que querem automatizar e enriquecer suas conversas no WhatsApp com IA.

## Funcionalidades

- **Integração WhatsApp**: Conexão automática via WPPConnect sem expor interface web.  
- **Personas**: CRUD de perfis de resposta, gravados em SQLite.  
- **ChatGPT**: Envio de mensagens e obtenção de respostas nos modelos GPT-3.5/GPT-4.  
- **Sumarização**: Geração de relatórios de grupo em texto resumido.  
- **Interface Desktop**: Janela nativa responsiva construída com React + TailwindCSS + Tauri.

## Tecnologias

- **Frontend**: React · TypeScript · Tailwind CSS · Vite  
- **Empacotamento**: Tauri (Rust)  
- **Backend**: Node.js · WPPConnect · OpenAI API  
- **Banco de Dados**: SQLite  
- **CI/CD**: GitHub Actions  

## Pré-requisitos

- Windows 10 ou superior  
- Node.js ≥ 16.x  
- npm ou yarn  
- Rust & Cargo (para empacotar com Tauri)  

## Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/manta-ray-zap-ai.git
cd manta-ray-zap-ai

# 2. Instale dependências
npm install
# ou
yarn install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto com as variáveis:

```env
OPENAI_API_KEY=your_openai_api_key
TAURI_SECRET_KEY=your_tauri_secret
DB_PATH=./database/personas.db
CHAT_MODEL=gpt-4o-mini
```

> **DICA**: Nunca compartilhe sua `OPENAI_API_KEY` ou `TAURI_SECRET_KEY` publicamente.

## Scripts disponíveis

No `package.json` já temos:

| Script               | Descrição                                         |
| -------------------- | ------------------------------------------------- |
| `npm run dev`        | Inicia frontend (Vite) e backend Node em modo dev |
| `npm run tauri dev`  | Executa a aplicação desktop (Tauri) em modo dev   |
| `npm run build`      | Gera build web (frontend)                         |
| `npm run tauri build`| Empacota executável Windows (.exe)                |

## Desenvolvimento

1. `npm run dev` – abre a aplicação web e backend em `http://localhost:5173`.  
2. `npm run tauri dev` – abre a janela desktop nativa.  
3. Faça suas alterações em `src/` (frontend) ou `backend-node/`.  
4. As mudanças são recarregadas automaticamente.

## Build & Distribuição

```bash
# 1. Build da UI
npm run build

# 2. Empacotar executável Windows
npm run tauri build
```

O executável final fica em `src-tauri/target/release/bundle/msi` (ou `.exe`).

## Estrutura do Projeto

```
manta-ray-zap-ai/
├── backend-node/         # API Node.js (WPPConnect + OpenAI)
├── database/             # SQLite (personas)
├── public/               # HTML base e assets estáticos
├── src/                  # Frontend React + TypeScript + Tailwind
├── src-tauri/            # Código Rust e config. Tauri
├── .env                  # Variáveis de ambiente
├── package.json          # Dependências & scripts
├── tsconfig.json         # Config. TypeScript
├── tailwind.config.js    # Config. TailwindCSS
├── postcss.config.js     # Config. PostCSS
└── README.md             # Este arquivo
```

## Contribuindo

1. Fork deste repositório  
2. Crie uma branch feature: `git checkout -b feature/nova-funcionalidade`  
3. Commit suas alterações: `git commit -m "Adiciona nova funcionalidade"`  
4. Push para a branch: `git push origin feature/nova-funcionalidade`  
5. Abra um Pull Request

## Licença

© 2025 Zuamir (“Autor”)

Este trabalho está licenciado sob a **Creative Commons Atribuição–NãoComercial 4.0 Internacional (CC BY-NC 4.0)**.  
Para detalhes completos, consulte o texto legal em [https://creativecommons.org/licenses/by-nc/4.0/legalcode](https://creativecommons.org/licenses/by-nc/4.0/legalcode).

# Você é livre para:

- **Compartilhar** — copiar e redistribuir o material em qualquer meio ou formato.  
- **Adaptar** — remixar, transformar e criar a partir do material.

# Sob as seguintes condições:

1. **Atribuição** — Você deve dar crédito ao Autor, fornecer um link para a licença e indicar se alterações foram feitas.  
2. **NãoComercial** — Você não pode usar este material para fins comerciais.

Para a licença completa e termos legais, visite [https://creativecommons.org/licenses/by-nc/4.0/](https://creativecommons.org/licenses/by-nc/4.0/).  
