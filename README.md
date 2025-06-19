# Metroidvania Browser Game

A retro-style Metroidvania platformer built with Kaboom.js, featuring classic platforming mechanics, combat, and exploration elements. Face dangerous drones and challenging bosses as you navigate through a mysterious factory.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technical Stack](#technical-stack)
- [Project Structure](#project-structure)
- [Controls](#controls)
- [Getting Started](#getting-started)
- [Development](#development)

## Overview

This browser-based Metroidvania game combines fluid platforming mechanics with engaging combat in a multi-room environment. Players must navigate through a hostile factory, defeating enemies and collecting power-ups while trying to escape.

## Features

### Core Gameplay
- Fluid platforming with double-jump abilities
- Combat system with sword attacks
- Health system with collectible cartridges
- Multiple interconnected rooms to explore

### Enemies & Challenges
- Automated drone enemies with attack patterns
- Challenging boss battles
- Dynamic camera system with smooth transitions
- Interactive notification system for game events

### Technical Features
- Sprite-based animation system
- Collision detection and physics
- JSON-based level design
- State management for game progression

## Technical Stack

- **Game Engine**: [Kaboom.js](https://kaboomjs.com/)
- **Language**: Vanilla JavaScript (ES Modules)
- **Rendering**: HTML5 Canvas
- **Level Design**: Custom JSON format
- **Assets**: Custom pixel art sprites and sound effects

## Project Structure

```
├── assets/
│   ├── sprites/         # Game sprite sheets
│   ├── sounds/         # Sound effects and music
│   └── glyphmesss.ttf  # Custom font
├── src/
│   ├── entities/       # Game entity implementations
│   ├── scenes/         # Room and level logic
│   ├── state/         # Global state management
│   ├── ui/            # User interface components
│   ├── kaboomLoader.js # Engine configuration
│   └── main.js        # Game entry point
├── maps/              # Level data and designs
├── lib/               # External libraries
└── index.html         # Entry HTML file
```

## Controls

| Key           | Action                    |
|---------------|---------------------------|
| Arrow Keys    | Move left/right           |
| X             | Jump (press twice for double jump) |
| Z             | Attack (when grounded)     |
| Enter         | Start game (at title)      |

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/rmeIIo/metroidvania.git
cd metroidvania
```

2. Serve the project using any HTTP server. For example, using Python:
```bash
# Python 3
python -m http.server 8000
```

   Or using npm's serve package:
```bash
# Using npm
npm install -g serve
serve
```

3. Open your browser and navigate to `http://localhost:8000` (Python) or `http://localhost:5000` (serve)

## Development

### Prerequisites
- Modern web browser with ES Modules support
- Local development server (Python's SimpleHTTPServer, live-server, etc.)

### Running in Development Mode
1. Make sure you're in the project directory
2. Start a local development server
3. Open your browser to the local server address
4. The game will start in the intro scene

### Map Creation
Maps are created using JSON format with multiple layers:
- Background layer
- Collision layer
- Entity placement layer
- Camera zones
- Exit points

---

Project built with ❤️ using Kaboom.js

