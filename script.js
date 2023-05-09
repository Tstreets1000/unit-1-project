// =================================// 
// ======= PIECE CLASSES ===== //
// ==================================//
const BLUE_ARMY_PIECES = {
  "bPawnA": {
      "column": "A",
      "type": "pawn",
      "color": "blue",
      "piece": "&#9817;", 
      
  }, 
  "bPawnB": {
    "column": "B",
    "type": "pawn",
    "color": "blue",
    "piece": "&#9817;", 
      
  },
  "bPawnC": {
    "column": "C",
    "type": "pawn",
    "color": "blue",
    "piece": "&#9817;", 
  },

  "bPawnD": {
    "column": "D",
    "type": "pawn",
    "color": "blue",
    "piece": "&#9817;", 
  },

  "bPawnE": {
    "column": "E",
    "type": "pawn",
    "color": "blue",
    "piece": "&#9817;", 
  },

  "bPawnF": {
    "column": "F",
    "type": "pawn",
    "color": "blue",
    "piece": "&#9817;", 
  },

  "bPawnG": {
    "column": "G",
    "type": "pawn",
    "color": "blue",
    "piece": "&#9817;",
  },

  "bPawnH": {
    "column": "H",
    "type": "pawn",
    "color": "blue",
    "piece": "&#9817;",
  },

  'bQueen': {
      'column': 'D',
      'type': 'queen',
      'color': 'blue',
      'piece': '&#9813;' 
  },

  "bKing": {
      "column": "E",
      "type": "king",
      "color": "blue",
      "piece": "&#9812;" 
  },

  "bBishop1": {
      "column": "F",
      "type": "bishop",
      "color": "blue",
      "piece": "&#9815;", 
  },

  "bBishop2": {
      "column": "C",
      "type": "bishop",
      "color": "blue",
      "piece": "&#9815;" 
  },

  "bKnight1": {
      "column": "G",
      "type": "knight",
      "color": "blue",
      "piece": "&#9816;" 
  },

  "bKnight2": {
      "column": "B",
      "type": "knight",
      "color": "blue",
      "piece": "&#9816;" 
  },

  "bRook1": {
      "column": "H",
      "type": "rook",
      "color": "blue",
      "piece": "&#9814;" 
  },

  "bRook2": {
      "column": "a",
      "type": "rook",
      "color": "blue",
      "piece": "&#9814;" 
  }
}  

const RED_ARMY_PIECES = {
  "rPawnA": {
      "column": "A",
      "type": "pawn",
      "color": "red",
      "piece": "&#9817;" 
  }, 
  "rPawnB": {
      "column": "B",
      "type": "pawn",
      "color": "red",
      "piece": "&#9817;"  
  },  
  
  "rPawnC": {
      "column": "C",
      "type": "pawn",
      "color": "red",
      "piece": "&#9817;"  
  },
  
  "rPawnD": {
      "column": "D",
      "type": "pawn",
      "color": "red",
      "piece": "&#9817;"  
  },
  
  "rPawnE": {
      "column": "E",
      "type": "pawn",
      "color": "red",
      "piece": "&#9817;"  
  },
  
  "rPawnF": {
      "column": "F",
      "type": "pawn",
      "color": "red",
      "piece": "&#9817;"  
  },
  
  "rPawnG": {
      "column": "G",
      "type": "pawn",
      "color": "red",
      "piece": "&#9817;"  
  },
  
  "rPawnH": {
      "column": "H",
      "type": "pawn",
      "color": "red",
      "piece": "&#9817;"  
  },
  
  "rQueen": {
      "column": "D",
      "type": "queen",
      "color": "red",
      "piece": "&#9813;" 
  },
  
  "rKing": {
      "column": "E",
      "type": "king",
      "color": "red",
      "piece": "&#9812;" 
  },
  
  "rBishop1": {
      "column": "F",
      "type": "bishop",
      "color": "red",
      "piece": "&#9815;" 
  },
  
  "rBishop2": {
      "column": "C",
      "type": "bishop",
      "color": "red",
      "piece": "&#9815;" 
  },
  
  "rKnight1": {
      "column": "G",
      "type": "knight",
      "color": "red",
      "piece": "&#9816;" 
  },  
  
  "rKnight2": {
      "column": "B",
      "type": "knight",
      "color": "red",
      "piece": "&#9816;" 
  },
  
  "rRook1": {
      "column": "H",
      "type": "rook",
      "color": "red",
      "piece": "&#9814;" 
  },
  
  "rRook2": {
      "column": "a",
      "type": "rook",
      "color": "red",
      "piece": "&#9814;" 
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
const PAWN_MOVEMENT = {}
const ROOK_MOVEMENT = {}
const KNIGHT_MOVEMENT = {}
const BISHOP_MOVEMENT = {}
const KING_MOVEMENT = {}
const QUEEN_MOVEMENT = {}


//======================================================================================//
//========================= (BUTTONS) EVENT LISTENERS ================================= //
//=======================================================================================//

//==== CAROUSEL BUTTON FOR SCREEN #1 ======//
document.querySelector('.enterBtn').addEventListener('click', enter => {
  document.querySelector('.car1').style.display='none' 
})

//===== CAROUSEL BUTTON FOR SCREEN #2 =======//
document.querySelector('.startBtn').addEventListener('click', start => {
  document.querySelector('.car2').style.display='none'
})

//====== CAROUSEL BUTTON FOR SCREEN #3 =====//
document.querySelector('.playAgainBtn').addEventListener('click', event => {
  document.querySelector('.car3').style.display='none'
})


// ===== INITIALIZE FUNCTIONS ===== //
function render() {
  renderBoard()
  assignPlayer1()
  assignPlayer2()
  renderMessage()
  renderControls()
}
//========================================//
//==========TIMER FUNCTIONS==============//
//=======================================//





//==============================================================================================================================//
//When redArmy button is selected; stay highlighted. Render initialized board with red army on the bottom and blue army on top.//
//==============================================================================================================================//

document.querySelector('.redArmyBtn').addEventListener('click', () => {
  document.querySelector('.redArmyBtn').style.backgroundColor='#9F0000' 
  document.querySelector('.blueArmyBtn').style.backgroundColor='white'
  RED_ARMY_BTN.addEventListener('click', function init_red() {
  })
  alert("Player 1: Red Army / Player 2: Blue Army")
})

function init_red() {
  board = [
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
  render()
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
  board = [
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
  render()
  }
//==========================================================================================//
// ===== (CHESS PIECES) EVENT LISTENERS ===== (example code found on techiedelight.com)=====//
//==========================================================================================// 


/*----- (CHESS PIECES) DRAG AND DROP Statements -----*/

// ROOKS - Can move lateral and horizontal across all 8 squares//
// KNIGHTS - Can move in L-shape; total of 4 squares from starting point//
// BISHOPS - Can move on diagonal across 8 squares//
// QUEENS - Can move any direction; across all 8 squares//
// KINGS - Can move any direction; one square at a time//

// PAWNS - Can move forward to advance; Intial movement of 2 squares, then 1 after. Captures opposing piece on diagonal left/right./
