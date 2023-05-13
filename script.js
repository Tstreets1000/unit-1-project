/*===========================================*/
/*============= CONSTANTS ===================*/
/*===========================================*/
const COLORS = {
  '0': 'transparent',
  '1': ["wK", "wQ", "wR", "wN", "wB", "wP"],
  '-1': ["bK", "bQ", "bR", "bN", "bB", "bP"]
}
/*===============================================*/
/*============== STATE VARIABLES ================*/
/*===============================================*/
let turn; // this will be 1 or -1
let board; // this will be a 2d array of 8 arrays with 8 values
let winner; // this will be set to null, 1, -1 or 'T'

/*==============================================*/
/*============= CACHED ELEMENTS ================*/
/*==============================================*/
const messageEl = document.querySelector('h1')
const enter = document.querySelector('.enterBtn')
const start = document.querySelector('.startBtn') 
const PLAY_AGAIN = document.querySelector('#playAgain')
const TIMER_RESET = document.querySelector('#timer_Reset')
const exitGame = document.querySelector('#exit')
const whiteArmy = document.querySelector('.whiteArmyBtn')
const blackArmy = document.querySelector('.blackArmyBtn')



/*==============================================*/
/*============= EVENT LISTENERS ================*/
/*==============================================*/

document.getElementById('timer_Start').addEventListener('click', runTimer)

document.getElementById('playAgain').addEventListener('click', init_Game)

/*------------ TEAM SELECT BUTTON ---------*/
document.querySelector('.whiteArmyBtn').addEventListener('click', () => {
  document.querySelector('.whiteArmyBtn').style.backgroundColor='FFFFFF' 
  document.querySelector('.blackArmyBtn').style.backgroundColor='000000'
  whiteArmy.addEventListener('click', function init_Game() {
  })
    alert ('Player 1: White Army / Player 2 Default Black Army') 
})

//----- CAROUSEL ENTER BUTTON FOR SCREEN #1 -----//
document.querySelector('.enterBtn').addEventListener('click', enterGame => {
  document.querySelector('.car1').style.display='none' 
})

//----- CAROUSEL - START BUTTON FOR SCREEN #2 -----//
document.querySelector('.startBtn').addEventListener('click', startGame => {
  document.querySelector('.car2').style.display='none'
})


/*=======================================*/
/*============= FUNCTIONS ============== */
/*=======================================*/

function init_Game() {
  turn = 1;
  board = [
    ['bR', 'bN', 'bB', 'bQ', 'bK', 'bB', 'bN', 'bP'], // col 8
    ['bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP'], // col 7
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '], // col 6
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '], // col 5
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '], // col 4
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '], // col 3 
    ['wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP'], // col 2
    ['wR', 'wN', 'wB', 'wQ', 'wK', 'wB', 'wN', 'wR'], // col 1 
    // rowA, rowB, rowC, rowD, rowE, rowF, rowG, rowH 
  ]
    winner = null;
    init_Game();
}

//======== START TIMER ========//
function runTimer() {

const TIMER_START = () => {
  intervalId = setInterval(() => {
    if (currentPlayer === 1) {
          UPDATE_PLAYER1_TIMER()
    if (player1 === 0) {
        clearInterval(intervalId)  
    } else {
        UPDATE_PLAYER2_TIMER()
    if (player2 === 0) {
        clearInterval(intervalId)
        }  
      }
    } 
    START_INTERVAL()
  })
}
  
//=== SWAP TIMER ===//
const TIMER_SWAP = () => {
  if (!playing) return
    currentPlayer = currentPlayer === 1 ? -1 : 1
}

  //===TIMER WARNING ===//
const TIME_WARNING = () => {
  if (min < 0 && sec <= 10) {
    if (player1 === 1) {
      document.querySelector('.clock').style.color = '#FF0000'
    } 
  if (min < 0 && sec <= 10)
    if (player2 === -1) {
      document.querySelector('.clock').style.color = '#FF0000'
    }
  }
}
}

function resetTimer() {
// ------Need reset Timer ------ //
}

const UPDATE_PLAYER1_TIMER = () => {
  document.querySelector('.clock1').runTimer = '1'
}

const UPDATE_PLAYER2_TIMER = () => {
  document.querySelector('.clock2').runTimer = '-1'
}



// =================================// 
// ======= PIECE CLASSES ===== //
// ==================================//
 
const WHITE_ARMY_PIECES = {
  wP: {
      location: "A02",
      type: "pawn",
      color: "white",
      piece: "&#9817;",    
  },

  wP: {
      location: "B02",
      type: "pawn",
      color: "white",
      piece: "&#9817;", 
  },

  wP: {
      location: "C02",
      type: "pawn",
      color: "white",
      piece: "&#9817;", 
  },

  wP: {
      location: "D02",
      type: "pawn",
      color: "white",
      piece: "&#9817;", 
  },

  wP: {
      location: "E02",
      type: "pawn",
      color: "white",
      piece: "&#9817;", 
  },

  wP: {
      location: "F02",
      type: "pawn",
      color: "white",
      piece: "&#9817;", 
  },

  wP: {
      location: "G02",
      type: "pawn",
      color: "white",
      piece: "&#9817;",
  },

  wP: {
      location: "H02",
      type: "pawn",
      color: "white",
      piece: "&#9817;",
  },

  wQ: {
      location: "D01",
      type: "queen",
      color: "white",
      piece: "&#9813;" 
  },

  wK: {
      location: "E01",
      type: "king",
      color: "white",
      piece: "&#9812;" 
  },

  wB: {
      column: "C01",
      type: "bishop",
      color: "white",
      piece: "&#9815;" 
  },

  wB: {
      locaiton: "F01",
      type: "bishop",
      color: "white",
      piece: "&#9815;" 
  },

  wN: {
      location: "B01",
      type: "knight",
      color: "white",
      piece: "&#9816;" 
  },

  wN: {
      location: "G01",
      type: "knight",
      color: "white",
      piece: "&#9816;" 
  },

  wR: {
      location: "A01",
      type: "rook",
      color: "white",
      piece: "&#9814;" 
  },

  wR: {
      location: "H01",
      type: "rook",
      color: "white",
      piece: "&#9814;" 
  }
}  

const BLACK_ARMY_PIECES = {
  bP: {
      location: "A07",
      type: "pawn",
      color: "black",
      piece: "&#9817;" 
  },

  bP: {
      location: "B07",
      type: "pawn",
      color: "black",
      piece: "&#9817;"  
  },  
  
  bP: {
      location: "C07",
      type: "pawn",
      color: "black",
      piece: "&#9817;"  
  },
  
  bP: {
      location: "D07",
      type: "pawn",
      color: "black",
      piece: "&#9817;"  
  },
  
  bP: {
      location: "E07",
      type: "pawn",
      color: "black",
      piece: "&#9817;"  
  },
  
  bP: {
      location: "F07",
      type: "pawn",
      color: "black",
      piece: "&#9817;"  
  },
  
  bP: {
      location: "G07",
      type: "pawn",
      color: "black",
      piece: "&#9817;"  
  },
  
  bP: {
      location: "H07",
      type: "pawn",
      color: "black",
      piece: "&#9817;"  
  },
  
  bQ: {
      location: "D08",
      type: "queen",
      color: "black",
      piece: "&#9813;" 
  },
  
  bK: {
      location: "E08",
      type: "king",
      color: "black",
      piece: "&#9812;" 
  },
  
  bB: {
      location: "C08",
      type: "bishop",
      color: "black",
      piece: "&#9815;" 
  },
  
  bB: {
      location: "F08",
      type: "bishop",
      color: "black",
      piece: "&#9815;" 
  },
  
  bN: {
      location: "B08",
      type: "knight",
      color: "black",
      piece: "&#9816;" 
  },  
  
  bN: {
      locaiton: "G08",
      type: "knight",
      color: "black",
      piece: "&#9816;" 
  },
  
  bR: {
      location: "A08",
      type: "rook",
      color: "black",
      piece: "&#9814;" 
  },
  
  bR: {
      location: "H08",
      type: "rook",
      color: "black",
      piece: "&#9814;" 
  }
}

//===============================================//
// ============ CACHED ARRAYS ============ //
//===============================================//
const CAPTURED = [] // ARRAY TO HOLD CAPTURED PIECES
const SQUARES_ALL = [] // ARRAY TO HOLD ALL POSITIONS ON BOARD 
const ALL_PAWNS = [] // ARRAY TO HOLD ALL PAWNS 
const ALL_ROOKS = [] // ARRAY TO HOLD ALL ROOKS 
const ALL_KNIGHTS = [] // ARRAY TO HOLD ALL KNIGHTS 
const ALL_BISHOPS = [] // ARRAY TO ALL BISHOPS 
const ALL_KINGS = [] // ARRAY TO HOLD ALL KINGS
const ALL_QUEENS = [] // ARRAY TO HOLD ALL QUEENS

const SQUARES = document.querySelectorAll(".square")
  SQUARES.forEach((div) => {
    SQUARES_ALL.push(div)
  })

const PAWNS = document.querySelectorAll("wP, bP")
  PAWNS.forEach((div) => {
    ALL_PAWNS.push(div)
  })

const ROOKS = document.querySelectorAll("wR, bR")
  ROOKS.forEach((div) => {
    ALL_ROOKS.push(div)
  })

const KNIGHTS = document.querySelectorAll("wN, bN")  
  KNIGHTS.forEach((div) => {
    ALL_KNIGHTS.push(div)
  })

const BISHOPS = document.querySelectorAll("wB, bB") 
  BISHOPS.forEach((div) => {
    ALL_BISHOPS.push(div)
  })

const KINGS = document.querySelectorAll("wK, bK")
  KINGS.forEach((div) => {
    ALL_KINGS.push(div)
  }) 

const QUEENS = document.querySelectorAll("wQ, bQ")
  QUEENS.forEach((div) => {
    ALL_QUEENS.push(div)
  }) 
  

//====================================================//
// ===== (CHESS PIECES) FUNCTIONS ============//
//====================================================//

// ===== INITIALIZE FUNCTIONS ===== //
function render() {
    renderBoard(),
    renderMessage(),
    renderControls(),
    playChess()
}

//----PIECES MOVING TO SQAURES WHEN CLICKED ---//
let state = false //false if no piece has been selected
let currentPiece
let currentCell

let cells = document.querySelectorAll('.square')
console.log(cells)
  
for (let i = 0; i < cells.length; i++) { 
    cells[i].addEventListener('click', (event) => {
console.log(event.target)

if (state === !winner) {
  
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', (event) => {
      cells[i] = currentPiece
      console.log(currentPiece)
    })
  }
  currentPiece.addEventListener('click', (event) => {

  })
  console.log(newCell)

} 

      
  })
}













/* function bP (start, end, army) { //============Black Pawns (move 2 aquares)
  
  for (let i = 0; i < whiteOps.length; i++) { //=========Loop through array of whiteOps
    
    if (army === "bP" && start === 6 && end === 4) { //======== Black Pawns (move 2 squares)
      return true
    }
    if (army === "bP" && start - 1) { //======== Black Pawns (move 1 square)
      return true 
    }
    if (army === "bP" && whiteOps.includes(end) === CAPTURED) { //======== Black Pawn Captures
      return true
      }
    }
  }
    bP()
    // 
  
  
function wP (start, end, army) { //======== White Pawns (move 2 squares)
  for (let i = 0; i < blackOps.length; i++) { //========Loop through array of blackOps
    if (army === "wP" && start === 1 && end === 3) { //======== White Pawns (move 2 squares)
      return true
    }  
  if (army === "wP" && start + 1) { //======== White Pawns (move 1 square)
    return true
    }
  if (army === "wP" && blackOps.includes(end) === CAPTURED) { //======== White Pawn Captures
    return true
      }
    }  
  }
*/





















/*
function allowDrop(ev) {
  ev.preventDefault()
}

function drag(ev) {
  ev.dataTransfer.setData('text', 'move')
}

function drop(ev) {
  ev.preventDefault()
  let data = ev.dataTransfer.getData('text')
  ev.target.appendChild(document.getElementById(data))
}

//----- (CHESS PIECES) DRAG AND DROP Statements -----*/

// ROOKS - Can move lateral and horizontal across all 8 squares//
// KNIGHTS - Can move in L-shape; total of 4 squares from starting point//
// BISHOPS - Can move on diagonal across 8 squares//
// QUEENS - Can move any direction; across all 8 squares//
// KINGS - Can move any direction; one square at a time//

// PAWNS - Can move forward to advance; Intial movement of 2 squares, then 1 after. Captures opposing piece on diagonal left/right./
