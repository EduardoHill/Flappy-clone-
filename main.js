// ========================================
// INICIALIZAÇÃO DO CANVAS E CONTROLE DE IMAGENS
// ========================================

let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

let imagensCarregadas = 0
let totalImagens = 5

function imagemCarregada() {
  imagensCarregadas++
  if (imagensCarregadas === totalImagens) {
    jogo()
  }
}

// ========================================
// CARREGAMENTO DE ASSETS (IMAGENS E SONS)
// ========================================

let bird = new Image()
bird.src = './images/bird.png'
bird.onload = imagemCarregada

let bg = new Image()
bg.src = './images/bg.png'
bg.onload = imagemCarregada

let chao = new Image()
chao.src = './images/chao.png'
chao.onload = imagemCarregada

let canocima = new Image()
canocima.src = './images/canocima.png'
canocima.onload = imagemCarregada

let canobaixo = new Image()
canobaixo.src = './images/canobaixo.png'
canobaixo.onload = imagemCarregada

let fly = new Audio()
fly.src = './sounds/fly.mp3'
let scoreSound = new Audio()
scoreSound.src = './sounds/score.mp3'

// ========================================
// VARIÁVEIS DO JOGO
// ========================================

let eec = 100
let constant
let bx = 33
let by = 200
let gravity = 0.1
let velocity = -1
let score = 0
let cano = []
let jogoAtivo = true
let tempoInicio = 0

cano[0] = {
  x: canvas.width,
  y: 0,
}

// ========================================
// CONTROLES DO JOGADOR
// ========================================

document.addEventListener('keydown', (event) => {
  if ((event.code === 'Space' || event.code === 'ArrowUp') && jogoAtivo) {
    velocity = -3
    fly.play()
  }
  if ((event.code === 'KeyR' || event.code === 'Space') && !jogoAtivo) {
    reiniciarJogo()
  }
})

// ========================================
// FUNÇÃO DE REINÍCIO DO JOGO
// ========================================

function reiniciarJogo() {
  bx = 33
  by = 200
  velocity = -1
  score = 0
  tempoInicio = 0
  cano = []
  cano[0] = {
    x: canvas.width,
    y: 0,
  }
  jogoAtivo = true
  jogo()
}

// ========================================
// TELA DE GAME OVER
// ========================================

function gameOver() {
  jogoAtivo = false

  ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
  ctx.fillRect(canvas.width / 2 - 120, canvas.height / 2 - 80, 240, 160)

  ctx.strokeStyle = '#333'
  ctx.lineWidth = 3
  ctx.strokeRect(canvas.width / 2 - 120, canvas.height / 2 - 80, 240, 160)

  ctx.fillStyle = '#d32f2f'
  ctx.font = 'bold 32px Verdana'
  ctx.textAlign = 'center'
  ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 40)

  ctx.fillStyle = '#333'
  ctx.font = 'bold 18px Verdana'
  ctx.fillText(
    'Placar Final: ' + score,
    canvas.width / 2,
    canvas.height / 2 - 5
  )

  ctx.font = '16px Verdana'
  ctx.fillStyle = '#666'
  ctx.fillText(
    'Pressione R para reiniciar',
    canvas.width / 2,
    canvas.height / 2 + 25
  )
  ctx.fillText(
    'Pressione ESPAÇO para jogar',
    canvas.width / 2,
    canvas.height / 2 + 45
  )

  ctx.textAlign = 'left'
}

// ========================================
// LOOP PRINCIPAL DO JOGO
// ========================================

function jogo() {
  if (!jogoAtivo) return

  ctx.drawImage(bg, 0, 0)

  // ========================================
  // SISTEMA DE CANOS (CRIAÇÃO, MOVIMENTO E COLISÃO)
  // ========================================

  for (let i = 0; i < cano.length; i++) {
    constant = canocima.height + eec

    ctx.drawImage(canocima, cano[i].x, cano[i].y)
    ctx.drawImage(canobaixo, cano[i].x, cano[i].y + constant)

    cano[i].x = cano[i].x - 1

    if (cano[i].x == 125) {
      cano.push({
        x: canvas.width,
        y: Math.floor(Math.random() * canocima.height) - canocima.height,
      })
    }

    if (
      bx + bird.width >= cano[i].x &&
      bx <= cano[i].x + canocima.width &&
      (by <= cano[i].y + canocima.height ||
        by + bird.height >= cano[i].y + constant)
    ) {
      gameOver()
      return
    }

    if (cano[i].x == 5) {
      score = score + 1
      scoreSound.play()

      ctx.save()
      ctx.fillStyle = '#4CAF50'
      ctx.font = 'bold 24px Verdana'
      ctx.textAlign = 'center'
      ctx.fillText('+1', canvas.width / 2, 100)
      ctx.restore()
    }
  }

  cano = cano.filter((pipe) => pipe.x > -canocima.width)

  // ========================================
  // DESENHO DO CHÃO E VERIFICAÇÃO DE COLISÕES
  // ========================================

  ctx.drawImage(chao, 0, canvas.height - chao.height)

  let alturaChao = canvas.height - chao.height
  let posicaoInferiorBird = by + bird.height

  if (posicaoInferiorBird >= alturaChao) {
    gameOver()
    return
  }

  if (by <= 0) {
    gameOver()
    return
  }

  // ========================================
  // RENDERIZAÇÃO DO PÁSSARO COM ROTAÇÃO
  // ========================================

  ctx.save()
  ctx.translate(bx + bird.width / 2, by + bird.height / 2)

  let rotation = Math.min(Math.max(velocity * 0.1, -0.5), 0.5)
  ctx.rotate(rotation)

  ctx.drawImage(bird, -bird.width / 2, -bird.height / 2)
  ctx.restore()

  // ========================================
  // SISTEMA DE FÍSICA (GRAVIDADE E MOVIMENTO)
  // ========================================

  tempoInicio++

  if (tempoInicio > 30) {
    velocity += gravity
  }

  by += velocity

  if (velocity > 6) velocity = 6

  // ========================================
  // INTERFACE DO USUÁRIO (PLACAR)
  // ========================================

  ctx.save()
  ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'
  ctx.fillRect(5, canvas.height - 50, 120, 40)

  ctx.fillStyle = '#fff'
  ctx.font = 'bold 20px Verdana'
  ctx.fillText('Placar: ' + score, 10, canvas.height - 25)
  ctx.restore()

  requestAnimationFrame(jogo)
}
