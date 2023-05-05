


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

/* ===== (CHESS PIECES) EVENT LISTENERS ===== */
document.getElementById('bPawnA').addEventListener('click', event => {
  const movement = true
    if (movement) {
      
    }
})


/*----- (CHESS PIECES) Movement Statements -----*/

// ROOKS - Can move lateral and horizontal across all 8 squares//
 //document.getElementById("rRook").innerHTML('click', event => {
  
 //})


// KNIGHTS - Can move in L-shape; total of 4 squares from starting point//



// BISHOPS - Can move on diagonal across 8 squares//



// QUEENS - Can move any direction; across all 8 squares//



// KINGS - Can move any direction; one square at a time//



// PAWNS - Can move forward to advance; Intial movement of 2 squares, then 1 after. Captures opposing piece only diagonally./
