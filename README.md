# 🕹️ Metroidvania Browser Game

Um platformer retrô estilo Metroidvania feito com **Kaboom.js**. Combate, exploração e desafios em uma fábrica misteriosa cheia de perigos — drones, armadilhas e chefões prontos para acabar com você.

---

## 📚 Sumário

- [Visão Geral](#visão-geral)
- [Recursos do Jogo](#recursos-do-jogo)
- [Stack Técnico](#stack-técnico)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Controles](#controles)
- [Como Rodar](#como-rodar)
- [Ambiente de Desenvolvimento](#ambiente-de-desenvolvimento)

---

## 🔍 Visão Geral

Um game 2D de ação e aventura direto no navegador. Mistura exploração com combate em várias salas conectadas. Você joga como um personagem tentando escapar de uma fábrica hostil, coletando power-ups e enfrentando inimigos pelo caminho.

---

## 🎮 Recursos do Jogo

### Jogabilidade
- Plataforma fluida com pulo duplo
- Sistema de combate com espada
- Sistema de vida com cartuchos de energia
- Várias salas interconectadas com transições suaves

### Inimigos e Desafios
- Drones automatizados com padrões de ataque
- Chefões desafiadores
- Câmera dinâmica e responsiva
- Sistema de notificações in-game (avisos, alertas etc.)

### Técnicas de Desenvolvimento
- Animações com sprites customizados
- Física e detecção de colisões
- Fases desenhadas em JSON
- Sistema de estado para progressão do jogo

---

## 🛠️ Stack Técnico

- **Engine**: [Kaboom.js](https://kaboomjs.com/)
- **Linguagem**: JavaScript (ES Modules)
- **Renderização**: HTML5 Canvas
- **Mapas**: Formato JSON customizado
- **Assets**: Pixel art + efeitos sonoros próprios

---

## 📁 Estrutura do Projeto

```
├── assets/
│   ├── sprites/          → Sprites do jogo
│   ├── sounds/           → Efeitos sonoros e música
│   └── glyphmesss.ttf    → Fonte customizada
├── src/
│   ├── entities/         → Entidades (player, inimigos etc.)
│   ├── scenes/           → Lógica de fases/salas
│   ├── state/            → Estado global do jogo
│   ├── ui/               → Componentes de interface
│   ├── kaboomLoader.js   → Configuração do Kaboom
│   └── main.js           → Entrada principal do jogo
├── maps/                 → Dados dos mapas
├── lib/                  → Bibliotecas externas
└── index.html            → Arquivo HTML principal
```

---

## ⌨️ Controles

| Tecla        | Ação                              |
|--------------|-----------------------------------|
| → / ←        | Movimentar                        |
| X            | Pular (duplo toque = pulo duplo)  |
| Z            | Atacar com espada                 |
| Enter        | Iniciar jogo (na tela de título)  |

---

## 🚀 Como Rodar

1. Clone o repositório:
```bash
git clone https://github.com/rmeIIo/metroidvania.git
cd metroidvania
```

2. Rode com um servidor local. Exemplos:

**Usando Python**:
```bash
python -m http.server 8000
```

**Ou com o `serve` via npm**:
```bash
npm install -g serve
serve
```

3. Acesse no navegador:
- Python: `http://localhost:8000`
- Serve: `http://localhost:5000`

---

## ⚙️ Ambiente de Desenvolvimento

### Requisitos
- Navegador moderno com suporte a ES Modules
- Servidor local simples (ex: live-server, Python HTTP server)

### Como rodar em modo dev
1. Entre na pasta do projeto
2. Inicie o servidor local
3. Acesse pelo navegador
4. O jogo começa na cena de introdução

---

## 🗺️ Criação de Mapas

Os mapas são definidos em JSON e organizados por camadas:

- Fundo (background)
- Colisões
- Entidades (player, inimigos, pickups)
- Zonas de câmera
- Pontos de saída (para troca de salas)

---

> Feito com carinho e algumas noites viradas usando **Kaboom.js**