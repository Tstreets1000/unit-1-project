


/*-----objects-------*/







/*----- state variables -----*/



/*----- cached elements  -----*/




/*----- event listeners -----*/
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

 /*----- functions -----*/

const start = function(event) {

}

