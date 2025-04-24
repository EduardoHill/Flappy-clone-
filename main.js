let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

//Carregando imagens
let bird = new Image()
bird.src = './images/bird.png'
let bg = new Image()
bg.src = './images/bg.png'
let chao = new Image()
chao.src = './images/chao.png'
let canocima = new Image()
canocima.src = './images/canocima.png'
let canobaixo = new Image()
canobaixo.src = './images/canobaixo.png'

//variaveis
let eec = 100 //espaço entre os canos em px
let constant
let bx = 33
let by = 200
let gravity = 1.4
let score = 0
let cano = []

cano[0] = {
  x: canvas.width,
  y: 0,
}

//carregando sons
let fly = new Audio()
fly.src = './sounds/fly.mp3'
let scoreSound = new Audio()
scoreSound.src = './sounds/score.mp3'

//captura de tecla
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space' && podePular) {
    by = by - 30
    fly.play()
    podePular = false
  }
})
document.addEventListener('keyup', (event) => {
  if (event.code === 'Space') {
    podePular = true
  }
})
function jogo() {
  //fundo do jogo
  ctx.drawImage(bg, 0, 0)

  //criando canos
  for (let i = 0; i < cano.length; i++) {
    //posiçao do cano de baixo
    constant = canocima.height + eec

    //cano de cima
    ctx.drawImage(canocima, cano[i].x, cano[i].y)

    //cano de baixo
    ctx.drawImage(canobaixo, cano[i].x, cano[i].y + constant)

    //movimentação
    cano[i].x = cano[i].x - 1

    if (cano[i].x == 125) {
      cano.push({
        x: canvas.width,
        y: Math.floor(Math.random() * canocima.height) - canocima.height,
      })
    }

    //mecanica
    if (
      (bx + bird.width >= cano[i].x &&
        bx <= cano[i].x + canocima.width &&
        (by <= cano[i].y + canocima.height ||
          by + bird.height >= cano[i].y + constant)) ||
      by + bird.height >= canvas.height - chao.height
    ) {
      location.reload()
    }

    if (cano[i].x == 5) {
      score = score + 1
      scoreSound.play()
    }
  }

  //chao
  ctx.drawImage(chao, 0, canvas.height - chao.height)

  //bird
  ctx.drawImage(bird, bx, by)

  //gravity
  by += gravity

  ctx.fillStyle = '#000'
  ctx.font = '20px Verdana'
  ctx.fillText('Placar:' + score, 10, canvas.height - 20)

  requestAnimationFrame(jogo)
}

bird.onload = () => {
  jogo()
}
