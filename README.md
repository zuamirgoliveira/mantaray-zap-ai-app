# Manta Ray Zap AI

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/zuamirgoliveira/mantaray-zap-ai-app) [![License](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

<p align="center">
  <img src="https://raw.githubusercontent.com/zuamirgoliveira/mantaray-zap-ai-app/main/public/mantaray-white-logo.svg" alt="Logo Manta Ray Zap AI" width="500" />
</p>

## Sumário

- [Descrição](#descrição)  
- [Funcionalidades](#funcionalidades)  
- [Tecnologias](#tecnologias)  
- [Pré-requisitos](#pré-requisitos)  
- [Instalação](#instalação)  
- [Inicialização do Projeto](#inicialização-do-projeto)  
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
- npm 
- Rust & Cargo (para empacotar com Tauri)  

## Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/mantaray-zap-ai-app.git
cd mantaray-zap-ai-app

# 2. Instale dependências
npm install
```

## Inicialização do Projeto

Para configurar o projeto com [Vite](https://vite.dev/guide/), [Tauri](https://v1.tauri.app/v1/guides/getting-started/setup/integrate/) e [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite), além dos passos descritos na documentação oficial, foram realizados os seguintes passos:

1. **Criação do projeto Vite**  
   ```bash
   npm create vite@latest mantarayzap-ai-app -- --template react-ts
   ```
2. **Instalação do Tauri CLI e cross-env**  
   ```bash
    npm install --save-dev @tauri-apps/cli@">1.0.0" cross-env
   ```
3. **Instalação de plugin Vite e cross-env**  
   ```bash
   npm install --save-dev vite-plugin-tauri
   npm install --save-dev cross-env
   ```
4. **Configuração do Vite**  
   No `vite.config.ts`, importe e adicione o plugin Tauri:
   ```ts
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';
   import { tauri } from 'vite-plugin-tauri';

   export default defineConfig({
     plugins: [react(), tauri()],
     // outras configurações...
   });
   ```
5. **Scripts no package.json**  
   ```json
   "scripts": {
     "dev": "cross-env BROWSER=none vite",
     "tauri:dev": "npm run dev && tauri dev",
     "build": "vite build",
     "tauri:build": "npm build && tauri build"
   }
   ```
6. **Tailwind CSS**  
   Seguiu-se a [documentação oficial](https://tailwindcss.com/docs/installation/using-vite) para a configuração inicial do Tailwind no Vite.

## Configuração

Crie um arquivo `.env` na raiz do projeto com as variáveis:

```env
OPENAI_API_KEY=your_openai_api_key
TAURI_SECRET_KEY=your_tauri_secret
DB_PATH=./database/personas.db
CHAT_MODEL=gpt-4o-mini
```

> **DICA**: Nunca compartilhe suas chaves (`OPENAI_API_KEY`, `TAURI_SECRET_KEY`) publicamente.

## Scripts disponíveis

| Script               | Descrição                                                                 |
|----------------------|---------------------------------------------------------------------------|
| `npm run dev`           | Inicia o frontend (Vite) em modo desenvolvimento sem abrir o navegador     |
| `npm run tauri:dev`     | Executa a aplicação desktop (Tauri) em modo dev                           |
| `npm run build`         | Gera build da aplicação web (frontend)                                    |
| `npm run tauri:build`   | Empacota a aplicação desktop em um executável Windows (.exe)              |

## Desenvolvimento

1. `npm run dev` – inicia apenas o frontend Vite em `http://localhost:5173`.  
2. `npm run tauri:dev` – inicia o wrapper Tauri, abrindo a janela desktop com frontend e backend integrados.  
3. Edite arquivos em `src/` (frontend) ou `src-tauri/` (configuração Rust do Tauri).  
4. As mudanças são recarregadas automaticamente.

## Build & Distribuição

Para gerar as versões finais, execute:

```bash
npm run build
npm run tauri:build
```

O executável Windows (.exe) ficará disponível em `src-tauri/target/release/bundle/msi/`.

## Estrutura do Projeto

```
mantaray-zap-ai-app/
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
Para detalhes completos, consulte o texto legal em <https://creativecommons.org/licenses/by-nc/4.0/legalcode>.

Você pode:

- **Compartilhar** — copiar e redistribuir o material em qualquer meio ou formato.  
- **Adaptar** — remixar, transformar e criar a partir do material.

**Sob as seguintes condições**:

1. **Atribuição** — Você deve dar crédito ao Autor, fornecer um link para a licença e indicar se alterações foram feitas.  
2. **NãoComercial** — Você não pode usar este material para fins comerciais.

Para a licença completa e termos legais, visite <https://creativecommons.org/licenses/by-nc/4.0/>.
