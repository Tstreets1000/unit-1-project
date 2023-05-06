/* ===== Constant Variables ===== */
const BLUE_ARMY = {
  'blue army': 'bPawnA', 
  'blue army': 'bPawnB', 
  'blue army': 'bPawnC', 
  'blue army': 'bPawnD', 
  'blue army': 'bPawnE', 
  'blue army': 'bPawnF', 
  'blue army': 'bPawnH', 
  'blue army': 'bKing', 
  'blue army': 'bQueen', 
  'blue army': 'bBishop1', 
  'blue army': 'bBishop2', 
  'blue army': 'bKnight1', 
  'blue army': 'bKnight2', 
  'blue army': 'bRook1', 
  'blue army': 'bRook2'
}  

const RED_ARMY = {
  'red army': 'rPawnA', 
  'red army': 'rPawnB', 
  'red army': 'rPawnC', 
  'red army': 'rPawnD', 
  'red army': 'rPawnE', 
  'red army': 'rPawnF', 
  'red army': 'rPawnH', 
  'red army': 'rKing', 
  'red army': 'rQueen', 
  'red army': 'rBishop1', 
  'red army': 'rBishop2', 
  'red army': 'rKnight1', 
  'red army': 'rKnight2', 
  'red army': 'rRook1', 
  'red army': 'rRook2'
}

const player = {
  '1': {
    name: '',
    color: 'redArmy'
  },
  '2': {
    name: '',
    color: 'blueArmy'
  }

}

/*----- cached elements  -----*/
const enterBtn = document.querySelector('button')
const startBtn = document.querySelector('button')
const playAgainBtn = document.querySelector('button')
const redArmyBtn = document.querySelector('button')
const blueArmyBtn = document.querySelector('button')

// Check for Winner //
// const winner = capturedKing();
  //if (winner) return `winner is ${Red} || ${Blue} {
//}


/* ===== (BUTTONS) EVENT LISTENERS ===== */
// When I click the ENTER button, screen should roll over to Kingdom screen/ next screen.
document.querySelector('.enterBtn').addEventListener('click', enter => {
  document.querySelector('.car1').style.display='none' 
})

// When I click the START button, screen should roll over to Battlefield screen/ next screen.
document.querySelector('.startBtn').addEventListener('click', start => {
  document.querySelector('.car2').style.display='none'
})

// When I click the PLAY AGAIN button, screen should roll back to Battlefield screen/ next screen.
document.querySelector('.playAgainBtn').addEventListener('click', event => {
  playAgainBtn.addEventListener('click', init())
})

// When redArmy button is selected; stay highlighted, assign player 1 & default blue army player 2
document.querySelector('.redArmyBtn').addEventListener('click', event => {
  document.querySelector('.redArmyBtn').style.backgroundColor='#9F0000' 
  document.querySelector('.blueArmyBtn').style.backgroundColor='white'
  redArmyBtn.addEventListener('click', function() {
  })
  alert("Player 1: Red Army")
})

// When blueArmy button is selected; stay highlighted, assign player 1 & default red army player 2
document.querySelector('.blueArmyBtn').addEventListener('click', event => {
  document.querySelector('.blueArmyBtn').style.backgroundColor='#020287' 
  document.querySelector('.redArmyBtn').style.backgroundColor='white'
  blueArmyBtn.addEventListener('click', function() {
  })
  alert("Player 1: Blue Army") 
})

/* ===== FUNCTIONS ===== */
function render() {
  assignPlayer()
  renderBoard()
  renderMessage()
  renderControls()
}

function init() {
  renderBoard [
    [rRook1, rKnight1, rBishop1, rQueen, rKing, rBishop2, rBishop2, rRook2]
    [rPawnA, rPawnB, rPawnC, rPawnD, rPawnE, rPawnF, rPawnG, rPawnH]
    [null, null, null, null, null, null, null, null]
    [null, null, null, null, null, null, null, null]
    [null, null, null, null, null, null, null, null]
    [null, null, null, null, null, null, null, null]    
    [bRook1, bKnight1, bBishop1, bQueen, bKing, bBishop2, bBishop2, bRook2]
    [bPawnA, bPawnB, bPawnC, bPawnD, bPawnE, bPawnF, bPawnG, bPawnH]
  ]
}

/* ===== (CHESS PIECES) EVENT LISTENERS ===== (example code found on techiedelight.com)===== */ 
document.getElementById("bPawnA").draggable = function() {
  const pieceMove = document.createDocumentFragment()
  pieceMove.appendChild(document.getElementById("bPawnA"))
  document.getElementById('a4').appendChild(pieceMove)   
}


/*----- (CHESS PIECES) Movement Statements -----*/

// ROOKS - Can move lateral and horizontal across all 8 squares//
// KNIGHTS - Can move in L-shape; total of 4 squares from starting point//
// BISHOPS - Can move on diagonal across 8 squares//
// QUEENS - Can move any direction; across all 8 squares//
// KINGS - Can move any direction; one square at a time//
// PAWNS - Can move forward to advance; Intial movement of 2 squares, then 1 after. Captures opposing piece on diagonal left/right./


