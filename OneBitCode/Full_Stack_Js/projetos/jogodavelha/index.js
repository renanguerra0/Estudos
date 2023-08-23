
const boardRegions = document.querySelectorAll('#gameBoard span')
let vBoard = []
let turnPlayer = ''

function updateTitle() {
    const playerInput = document.getElementById(turnPlayer)
    document.getElementById('turnPlayer').innerText = playerInput.value
  }

  function initializeGame() {
    // Inicializa as variáveis globais 
    vBoard = [['', '', ''], ['', '', ''], ['', '', '']]
    turnPlayer = 'player1'
    // Ajusta o título da página
    document.querySelector('h2').innerHTML = 'Vez de: <span id="turnPlayer"></span>'
    updateTitle()
    // Limpa o tabuleiro e adiciona os eventos de clique
    boardRegions.forEach(function (element) {
      element.classList.remove('win')
      element.innerText = ''
      element.addEventListener('click', handleBoardClick)
    })
  }


function handleBoardClick(ev){
    //Obtém os índices da região clicada
    const span = ev.currentTarget
    const region = span.dataset.region //N.N
    const rowColumnPair = region.split('.') // Dividir uma String e convertê-la em um array: ["N" , "N"]
    const row = rowColumnPair[0]
    const column = rowColumnPair[1]
    if (turnPlayer === 'player1'){
        span.innerText = 'X'
        vBoard[row][column] = 'X'
    } else {
        span.innerText = 'O'
        vBoard[row][column] = 'O'
    }
}


document.getElementById('start').addEventListener('click', initializeGame)