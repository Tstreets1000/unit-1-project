// =================================// 
// ======= PIECE CLASSES ===== //
// ==================================//
const BLUE_ARMY_PIECES = {
  bPawnA: {
      location: "A02",
      type: "pawn",
      color: "blue",
      piece: "&#9817;",    
  },

  bPawnB: {
      location: "B02",
      type: "pawn",
      color: "blue",
      piece: "&#9817;", 
  },

  bPawnC: {
      location: "C02",
      type: "pawn",
      color: "blue",
      piece: "&#9817;", 
  },

  bPawnD: {
      location: "D02",
      type: "pawn",
      color: "blue",
      piece: "&#9817;", 
  },

  bPawnE: {
      location: "E02",
      type: "pawn",
      color: "blue",
      piece: "&#9817;", 
  },

  bPawnF: {
      location: "F02",
      type: "pawn",
      color: "blue",
      piece: "&#9817;", 
  },

  bPawnG: {
      location: "G02",
      type: "pawn",
      color: "blue",
      piece: "&#9817;",
  },

  bPawnH: {
      location: "H02",
      type: "pawn",
      color: "blue",
      piece: "&#9817;",
  },

  bQueen: {
      location: "D01",
      type: "queen",
      color: "blue",
      piece: "&#9813;" 
  },

  bKing: {
      location: "E01",
      type: "king",
      color: "blue",
      piece: "&#9812;" 
  },

  bBishop1: {
      column: "C01",
      type: "bishop",
      color: "blue",
      piece: "&#9815;" 
  },

  bBishop2: {
      locaiton: "F01",
      type: "bishop",
      color: "blue",
      piece: "&#9815;" 
  },

  bKnight1: {
      location: "B01",
      type: "knight",
      color: "blue",
      piece: "&#9816;" 
  },

  bKnight2: {
      location: "G01",
      type: "knight",
      color: "blue",
      piece: "&#9816;" 
  },

  bRook1: {
      location: "A01",
      type: "rook",
      color: "blue",
      piece: "&#9814;" 
  },

  bRook2: {
      location: "H01",
      type: "rook",
      color: "blue",
      piece: "&#9814;" 
  }
}  

const RED_ARMY_PIECES = {
  rPawnA: {
      location: "A07",
      type: "pawn",
      color: "red",
      piece: "&#9817;" 
  },

  rPawnB: {
      location: "B07",
      type: "pawn",
      color: "red",
      piece: "&#9817;"  
  },  
  
  rPawnC: {
      location: "C07",
      type: "pawn",
      color: "red",
      piece: "&#9817;"  
  },
  
  rPawnD: {
      location: "D07",
      type: "pawn",
      color: "red",
      piece: "&#9817;"  
  },
  
  rPawnE: {
      location: "E07",
      type: "pawn",
      color: "red",
      piece: "&#9817;"  
  },
  
  rPawnF: {
      location: "F07",
      type: "pawn",
      color: "red",
      piece: "&#9817;"  
  },
  
  rPawnG: {
      location: "G07",
      type: "pawn",
      color: "red",
      piece: "&#9817;"  
  },
  
  rPawnH: {
      location: "H07",
      type: "pawn",
      color: "red",
      piece: "&#9817;"  
  },
  
  rQueen: {
      location: "D08",
      type: "queen",
      color: "red",
      piece: "&#9813;" 
  },
  
  rKing: {
      location: "E08",
      type: "king",
      color: "red",
      piece: "&#9812;" 
  },
  
  rBishop1: {
      location: "C08",
      type: "bishop",
      color: "red",
      piece: "&#9815;" 
  },
  
  rBishop2: {
      location: "F08",
      type: "bishop",
      color: "red",
      piece: "&#9815;" 
  },
  
  rKnight1: {
      location: "B08",
      type: "knight",
      color: "red",
      piece: "&#9816;" 
  },  
  
  rKnight2: {
      locaiton: "G08",
      type: "knight",
      color: "red",
      piece: "&#9816;" 
  },
  
  rRook1: {
      location: "A08",
      type: "rook",
      color: "red",
      piece: "&#9814;" 
  },
  
  rRook2: {
      location: "H08",
      type: "rook",
      color: "red",
      piece: "&#9814;" 
  }
}

//==================================//
// ======= cached elements  ====== //
//==================================//
const ENTER_BTN = document.querySelector('button')
const START_BTN= document.querySelector('button')
const PLAY_AGAIN_BTN = document.querySelector('button')
const RED_ARMY_BTN= document.querySelector('button')
const BLUE_ARMY_BTN = document.querySelector('button')
const PLAYER1 = true
const PLAYER2 = true
const SQUARES_ALL = [] // ARRAY TO HOLD ALL POSITIONS ON BOARD 
const PAWNS_ALL = [] // ARRAY TO HOLD ALL PAWNS 
const ROOKS_ALL = [] // ARRAY TO HOLD ALL ROOKS 
const KNIGHTS_ALL = [] // ARRAY TO HOLD ALL KNIGHTS 
const BISHOPS_ALL = [] // ARRAY TO ALL BISHOPS 
const KINGS_ALL = [] // ARRAY TO HOLD ALL KINGS
const QUEENS_ALL = [] // ARRAY TO HOLD ALL QUEENS

const SQUARES = document.querySelectorAll(".box")
  SQUARES.forEach((div) => {
    SQUARES_ALL.push(div)
  })

const PAWNS = document.querySelectorAll(".pawn")
  PAWNS.forEach((div) => {
    PAWNS_ALL.push(div)
  })

const ROOKS = document.querySelectorAll(".rook")
  ROOKS.forEach((div) => {
  ROOKS_ALL.push(div)
  })

const KNIGHTS = document.querySelectorAll(".knight")  
  KNIGHTS.forEach((div) => {
    KNIGHTS_ALL.push(div)
  })

const BISHOPS = document.querySelectorAll(".bishop") 
  BISHOPS.forEach((div) => {
    BISHOPS_ALL.push(div)
  })

const KINGS = document.querySelectorAll(".king")
  KINGS.forEach((div) => {
    KINGS_ALL.push(div)
  }) 

const QUEENS =document.querySelectorAll(".queen")
  QUEENS.forEach((div) => {
    QUEENS_ALL.push(div)
  })  

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

//========== Timer - START CLOCK BUTTON FOR SCREEN #3 =======//
document.querySelector('.timer_StartBtn').addEventListener('click', event => {
  document.querySelector('.timer_StartBtn') = START_INTERVAL()
})

// ===== INITIALIZE FUNCTIONS ===== //
function init_red() {
  renderBoard,
  assignPlayer1,
  assignPlayer2,
  renderMessage,
  renderControls
}

function init_blue() {
  renderBoard,
  asignPlayer1,
  assignPlayer2,
  renderMessage,
  renderControls
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
//When redArmy button is selected; stay highlighted. Render initialized board with red army on the bottom and blue army on top.//
//==============================================================================================================================//

document.querySelector('.redArmyBtn').addEventListener('click', () => {
  //document.querySelector('.redArmyBtn').style.backgroundColor='#9F0000' 
  //document.querySelector('.blueArmyBtn').style.backgroundColor='white'
  RED_ARMY_BTN.addEventListener('click', function init_red() {
  })
  alert("Player 1: Red Army / Player 2: Blue Army")
})

function init_red() {
  renderBoard = [
    ['#bRook1', '#bKnight1', '#bBishop1', '#bQueen', '#bKing', '#bBishop2', '#bBishop2', '#bRook2'], // col 8
    ['#bPawnA', '#bPawnB', '#bPawnC', '#bPawnD', '#bPawnE', '#bPawnF', '#bPawnG', '#bPawnH'], // col 7
    [null, null, null, null, null, null, null, null], // col 6
    [null, null, null, null, null, null, null, null], // col 5
    [null, null, null, null, null, null, null, null], // col 4
    [null, null, null, null, null, null, null, null], // col 3  
    ['#rRook1', '#rKnight1', '#rBishop1', '#rQueen', '#rKing', '#rBishop2', '#rBishop2', '#rRook2'], // col 2 
    ['#rPawnA', '#rPawnB', '#rPawnC', '#rPawnD', '#rPawnE', '#rPawnF', '#rPawnG', '#rPawnH'], // col 1
    // rowA, rowB, rowC, rowD, rowE, rowF, rowG, rowH 
  ]
  init_red()
}

// ==============================================================================================================================//
// When blueArmy button is selected; stay highlighted. Render initialized board with blue army on the bottom and red army on top. //
// ==============================================================================================================================//

document.querySelector('.blueArmyBtn').addEventListener('click', () => {
  document.querySelector('.blueArmyBtn').style.backgroundColor='#020287' 
  document.querySelector('.redArmyBtn').style.backgroundColor='white'
  BLUE_ARMY_BTN.addEventListener('click', function init_blue() {
  })
  alert('Player 1: Blue Army / Player 2: Red Army') 
})

function init_blue() {
  renderBoard = [
    ['#rRook1', '#rKnight1', '#rBishop1', '#rQueen', '#rKing', '#rBishop2', '#rBishop2', '#rRook2'], // col 8
    ['#rPawnA', '#rPawnB', '#rPawnC', '#rPawnD', '#rPawnE', '#rPawnF', '#rPawnG', '#rPawnH'], // col 7
    [null, null, null, null, null, null, null, null], // col 6
    [null, null, null, null, null, null, null, null], // col 5
    [null, null, null, null, null, null, null, null], // col 4
    [null, null, null, null, null, null, null, null], // col 3
    ['#bRook1', '#bKnight1', '#bBishop1', '#bQueen', '#bKing', '#bBishop2', '#bBishop2', '#bRook2'], // col 2
    ['#bPawnA', '#bPawnB', '#bPawnC', '#bPawnD', '#bPawnE', '#bPawnF', '#bPawnG', '#bPawnH'], // col 1
    // rowA, rowB, rowC, rowD, rowE, rowF, rowG, rowH
  ]
  init_blue()
  }
//====================================================//
// ===== (CHESS PIECES) FUNCTIONS ============//
//====================================================// 

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

/*----- (CHESS PIECES) DRAG AND DROP Statements -----*/

// ROOKS - Can move lateral and horizontal across all 8 squares//
// KNIGHTS - Can move in L-shape; total of 4 squares from starting point//
// BISHOPS - Can move on diagonal across 8 squares//
// QUEENS - Can move any direction; across all 8 squares//
// KINGS - Can move any direction; one square at a time//

// PAWNS - Can move forward to advance; Intial movement of 2 squares, then 1 after. Captures opposing piece on diagonal left/right./
