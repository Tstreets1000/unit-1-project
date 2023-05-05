/* ===== Constant Variables ===== */
const squareSelect = [a1, a2, a3, a4, a5, a6, a7, a8, b1, b2, b3, b4, b5, b6, b7, b8]


/*-----objects-------*/





/*----- state variables -----*/





/*----- cached elements  -----*/




/* ===== (BUTTONS) EVENT LISTENERS ===== */
// When I click the ENTER button, screen should roll over to Kingdom screen/ next screen.
document.querySelector('.enterBtn').addEventListener('click', event => {
  document.querySelector('.car1').style.display='none' 
})

// When I click the START button, screen should roll over to Battlefield screen/ next screen.
document.querySelector('.startBtn').addEventListener('click', start => {
  document.querySelector('.car2').style.display='none'
})

// When I click the PLAY AGAIN button, screen should roll back to Battlefield screen/ next screen.
document.querySelector('.playAgainBtn').addEventListener('click', start => {
  document.querySelector('.car3').style.display='.car2'
})

// When redArmy button is selected; stay highlighted, assign player 1 & default blue army player 2
document.querySelector('.redArmyBtn').addEventListener('click', event => {
  document.querySelector('.redArmyBtn').style.backgroundColor='#9F0000' 
  document.querySelector('.blueArmyBtn').style.backgroundColor='white' 
})
// When blueArmy button is selected; stay highlighted, assign player 1 & default red army player 2
document.querySelector('.blueArmyBtn').addEventListener('click', event => {
  document.querySelector('.blueArmyBtn').style.backgroundColor='#020287' 
  document.querySelector('.redArmyBtn').style.backgroundColor='white' 
})

/* ===== (CHESS PIECES) EVENT LISTENERS ===== (example code found on techiedelight.com)===== */ 
document.getElementById('bPawnA').draggable = function() {
  const pieceMove = document.getElementById('bPawnA')
  pieceMove.appendChild(document.getElementById('a3'))
  document.getElementById('bPawnA').draggable('a3') 
}


/*----- (CHESS PIECES) Movement Statements -----*/

// ROOKS - Can move lateral and horizontal across all 8 squares//
 //document.getElementById("rRook").innerHTML('click', event => {
  
 //})


// KNIGHTS - Can move in L-shape; total of 4 squares from starting point//



// BISHOPS - Can move on diagonal across 8 squares//



// QUEENS - Can move any direction; across all 8 squares//



// KINGS - Can move any direction; one square at a time//



// PAWNS - Can move forward to advance; Intial movement of 2 squares, then 1 after. Captures opposing piece only diagonally./
