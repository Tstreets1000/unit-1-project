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

//==================================//
// ======= CACHED ============ //
//==================================//
const ENTER_BTN = document.querySelector('button')
const START_BTN= document.querySelector('button')
const PLAY_AGAIN_BTN = document.querySelector('button')
const WHITE_ARMY_BTN= document.querySelector('button')
const BLACK_ARMY_BTN = document.querySelector('button')
const PLAYER1 = true
const PLAYER2 = true
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

const BISHOPS = document.querySelectorAll("wB, wB") 
  BISHOPS.forEach((div) => {
    ALL_BISHOPS.push(div)
  })

const KINGS = document.querySelectorAll("wK, wK")
  KINGS.forEach((div) => {
    ALL_KINGS.push(div)
  }) 

const QUEENS = document.querySelectorAll("wQ, wQ")
  QUEENS.forEach((div) => {
    ALL_QUEENS.push(div)
  }) 
  
 

//====================================================//
// ===== (CHESS PIECES) FUNCTIONS ============//
//====================================================//
let whiteOps = ["wK", "wQ", "wR", "wN", "wB", "wP"]
let blackOps = ["bK", "bQ", "bR", "bN", "bB", "bP"]

const BLACK_CAPTURED = (whiteOps, blackOps) => {
  if (whiteOps.forEach = blackOps.forEach)
    return whiteOps
  }
const WHITE_CAPTURED = (whiteOps, blackOps) => {
    if (whiteOps.forEach = blackOps.forEach)
      return blackOps
    }


function pawnMoves(start, end, army) {
  //======== Black Army Pawns (move 2 squares)
  if (army === "bP" && start === 6 && end === 4) { 
    return true
  }
  //======== White Army Pawns (move 2 squares)
  if (army === "wP" && start === 1 && end === 3) { 
    return true
  } 
  //======== Black & White Army Pawns (move 1 square)
  if ((army === "bP" && start - 1) || (army === "wP" && start + 1)) {
    return true 
  }
  //========Black & White Pawn Captures
  if ((army === "bP" && whiteOps.includes(end) === WHITE_CAPTURED ) || (army === "wP" && blackOps.includes(end) === BLACK_CAPTURED )) { 
    return true
  }
}
  

    
  

    



// ===== INITIALIZE FUNCTIONS ===== //
function init_black() {
  renderBoard(),
  assignPlayer1(),
  assignPlayer2(),
  renderMessage(),
  renderControls()
}

function init_white() {
  renderBoard(),
  asignPlayer1(),
  assignPlayer2(),
  renderMessage(),
  renderControls()
}
//========================================//
//==========TIMER FUNCTIONS==============//
//=======================================//

//=== Time warning below 30 seconds - Change timer numbers to yellow ====//

//=== START TIMER ===// 
let player1 = 60
let player2 = 60
let currentPlayer = 1
let intervalId 

const UPDATE_PLAYER1_TIMER = () => {
  document.querySelector('.clock1').textContent = player1
}

const UPDATE_PLAYER2_TIMER = () => {
  document.querySelector('.clock2').textContent = player2
}
//=== START TIMER ===//
const START_INTERVAL = () => {
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
    } console.log(START_INTERVAL)
    START_INTERVAL()
  })
}
  
//=== SWAP TIMER ===//
const TIMER_SWAP = () => {
  if (!playing) return
    currentPlayer = currentPlayer === 1 ? 2 : 1
}

  //===TIMER WARNING ===//
const TIME_WARNING = () => {
  if (min < 0 && sec <= 10) {
    if (player1 === 1) {
      document.querySelector('.clock').style.color = '#FF0000'
    } 
  if (min < 0 && sec <= 10)
    if (player2 === 1) {
      document.querySelector('.clock').style.color = '#FF0000'
    }
  }
}

//==============================================================================================================================//
//When black Army button is selected; stay highlighted. Render initialized board with black army on the bottom and white army on top.//
//==============================================================================================================================//

document.querySelector('.blackArmyBtn').addEventListener('click', () => {
  document.querySelector('.blackArmyBtn').style.backgroundColor='#9F0000' 
  document.querySelector('.whiteArmyBtn').style.backgroundColor='white'
  BLACK_ARMY_BTN.addEventListener('click', function init_black() {
  })
  alert ('Player 1: Black Army / Player 2 Default: White Army')
})

function init_black() {
  renderBoard = [
    ['wR', 'wN', 'wB', 'wQ', 'wK', 'wB', 'wN', 'wR'], // col 8
    ['wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP'], // col 7
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '], // col 6
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '], // col 5
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '], // col 4
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '], // col 3 
    ['bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP'], // col 2
    ['bR', 'bN', 'bB', 'bQ', 'bK', 'bB', 'bN', 'bR'], // col 1 
    // rowA, rowB, rowC, rowD, rowE, rowF, rowG, rowH 
  ]
  init_black()
}

// ==============================================================================================================================//
// When white Army button is selected; stay highlighted. Render initialized board with white army on the bottom and black army on top. //
// ==============================================================================================================================//

document.querySelector('.whiteArmyBtn').addEventListener('click', () => {
  document.querySelector('.whiteArmyBtn').style.backgroundColor='#020287' 
  document.querySelector('.blackArmyBtn').style.backgroundColor='white'
  WHITE_ARMY_BTN.addEventListener('click', function init_white() {
  })
  alert ('Player 1: White Army / Player 2 Default Black Army') 
})

function init_white() {
  renderBoard = [
  ['bR', 'bN', 'bB', 'bQ', 'bK', 'bB', 'bN', 'bR'], // col 8
  ['bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP'], // col 7
  ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '], // col 6
  ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '], // col 5
  ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '], // col 4
  ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '], // col 3 
  ['wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP'], // col 2
  ['wR', 'wN', 'wB', 'wQ', 'wK', 'wB', 'wN', 'wR'], // col 1 
  // rowA, rowB, rowC, rowD, rowE, rowF, rowG, rowH 
]
init_white()
}
  
 

//======================================================================================//
//========================= EVENT LISTENERS ================================= //
//=======================================================================================//

//==== CAROUSEL ENTER BUTTON FOR SCREEN #1 ======//
document.querySelector('.enterBtn').addEventListener('click', enter => {
  document.querySelector('.car1').style.display='none' 
})

//===== CAROUSEL - START BUTTON FOR SCREEN #2 =======//
document.querySelector('.startBtn').addEventListener('click', start => {
  document.querySelector('.car2').style.display='none'
})

//====== CAROUSEL - PLAY AGAIN BUTTON FOR SCREEN #3 =====//
document.querySelector('.playAgainBtn').addEventListener('click', event => {
  document.querySelector('.car2').style.display='grid'
})

//====== CAROUSEL - EXIT GAME BUTTON FOR SCREEN #3 =====//
document.querySelector('.exitGameBtn').addEventListener('click', event => {
  document.querySelector('.car1').style.display='grid'
})

//====== TIMER - RESET CLOCK BUTTON FOR SCREEN #3 =====//
/*document.querySelector('.timer_resetBtn').addEventListener('click', event => {
  function timer_startBtn
})
*/

//========== TIMER - START CLOCK BUTTON FOR SCREEN #3 =======//
document.querySelector('.timer_StartBtn').addEventListener('click', event => {
  document.querySelector('.timer_StartBtn') = START_INTERVAL()
})

















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
