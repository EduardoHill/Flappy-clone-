# 🐦 Flappy Bird Clone

Um clone fiel do famoso jogo Flappy Bird, desenvolvido em JavaScript puro usando Canvas API. O jogo apresenta física realista, animações suaves e uma experiência de jogo desafiadora e divertida.

![Flappy Bird Clone](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)
![HTML5 Canvas](https://img.shields.io/badge/HTML5-Canvas-orange.svg)
![Status](https://img.shields.io/badge/Status-Concluído-green.svg)

## 🎮 Como Jogar

- **ESPAÇO** ou **SETA PARA CIMA**: Fazer o pássaro voar
- **R**: Reiniciar o jogo após Game Over
- **Objetivo**: Navegue através dos canos sem colidir

## ✨ Funcionalidades

### 🎯 Gameplay

- **Física realista** com sistema de gravidade e velocidade
- **Animação do pássaro** com rotação baseada na velocidade
- **Colisão precisa** com canos, chão e teto
- **Sistema de pontuação** com feedback visual
- **Efeitos sonoros** para pulos e pontuação

### 🎨 Interface

- **Tela de Game Over** estilizada com painel modal
- **Placar em tempo real** com design elegante
- **Feedback visual** "+1" ao marcar pontos
- **Controles duplos** (ESPAÇO/SETA) para melhor acessibilidade

### 🔧 Características Técnicas

- **Carregamento inteligente** - aguarda todas as imagens antes de iniciar
- **Otimização de performance** - remoção automática de canos fora da tela
- **Início suave** - delay na gravidade para transição natural
- **Código limpo** - bem documentado e organizado

## 📁 Estrutura do Projeto

```
Flappy-clone/
├── index.html
├── main.js
├── README.md
├── images/
│   ├── bg.png
│   ├── bird.png
│   ├── chao.png
│   ├── canocima.png
│   └── canobaixo.png
└── sounds/
    ├── fly.mp3
    └── score.mp3
```

## 🚀 Como Executar

1. **Clone o repositório**

   ```bash
   git clone https://github.com/EduardoHill/Flappy-clone-.git
   cd Flappy-clone-
   ```

2. **Execute o jogo**

   - Abra `index.html` em qualquer navegador moderno
   - Ou use um servidor local:

   ```bash
   python -m http.server 8000

   npx serve .
   ```

3. **Acesse o jogo**
   - Navegador direto: Abra o arquivo `index.html`
   - Servidor local: `http://localhost:8000`

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura da página
- **Canvas API** - Renderização de gráficos 2D
- **JavaScript ES6+** - Lógica do jogo
- **Web Audio API** - Efeitos sonoros

## 🎯 Conceitos Implementados

### 🎮 Game Development

- **Game Loop** com `requestAnimationFrame`
- **Sistema de Estados** (jogando, game over)
- **Detecção de colisão** por bounding box
- **Física de movimento** com gravidade e velocidade

### 🎨 Gráficos e Animação

- **Sprite rendering** com Canvas
- **Transformações 2D** (rotação, translação)
- **Sistema de partículas** para feedback visual
- **Interface responsiva**

### 🔊 Áudio

- **Carregamento de assets** de áudio
- **Reprodução sincronizada** com eventos do jogo

## 📊 Configurações do Jogo

| Variável        | Valor | Descrição          |
| --------------- | ----- | ------------------ |
| `gravity`       | 0.1   | Força da gravidade |
| `velocity`      | -3    | Força do pulo      |
| `eec`           | 100   | Espaço entre canos |
| `canvas.width`  | 288px | Largura do jogo    |
| `canvas.height` | 512px | Altura do jogo     |

## 🎨 Personalização

### 🎵 Adicionar novos sons

```javascript
let newSound = new Audio()
newSound.src = './sounds/newsound.mp3'
```

### 🎯 Alterar dificuldade

```javascript
cano[i].x = cano[i].x - 2

let eec = 80
```

### 🎨 Mudar cores

```javascript
ctx.fillStyle = '#ff0000'

ctx.fillStyle = '#00ff00'
```

## 🐛 Soluções de Problemas

### ❌ Imagens não carregam

- Verifique se todos os arquivos estão na pasta `images/`
- Use um servidor local ao invés de abrir diretamente

### 🔇 Sons não funcionam

- Alguns navegadores bloqueiam autoplay de áudio
- Interaja com a página antes de jogar

### 🐌 Performance lenta

- Feche outras abas do navegador
- Verifique se está usando `requestAnimationFrame`

## 🤝 Contribuindo

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra** um Pull Request

## 📝 Ideias para Melhorias

- [ ] 🏆 Sistema de high score com localStorage
- [ ] 🎵 Música de fundo
- [ ] 📱 Suporte touch para dispositivos móveis
- [ ] 🌈 Múltiplos temas/skins
- [ ] ⭐ Power-ups especiais
- [ ] 💫 Efeitos de partículas
- [ ] 🏃 Aumento progressivo de dificuldade
- [ ] 🎯 Sistema de conquistas

## ‍💻 Autor

**Eduardo Hill**

- GitHub: [@EduardoHill](https://github.com/EduardoHill)

## 🙏 Agradecimentos

- Inspirado no jogo original Flappy Bird por Dong Nguyen
- Assets de imagem e som da comunidade de desenvolvimento de jogos
- Comunidade JavaScript por tutoriais e recursos

---

⭐ **Gostou do projeto?** Deixe uma estrela no repositório!

🐛 **Encontrou um bug?** Abra uma [issue](https://github.com/EduardoHill/Flappy-clone-/issues)

💡 **Tem uma ideia?** Contribua com o projeto!
