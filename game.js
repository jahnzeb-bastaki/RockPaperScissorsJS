function getComputerChoice(){
  let choice = Math.floor(Math.random() * 3);
  if(choice == 0){
    return "rock";
  } else if (choice == 1){
    return "paper";
  } else {
    return "scissor";
  }
}

// Player Score Variables
const playerScore = 0;
const computerScore = 0;

function round(playerSelection, computerSelection){
  playerSelection = playerSelection.toLowerCase();
  
  if(playerSelection == computerSelection){
    return "It a Tie!";
  } else if(playerSelection == "rock") {
    if(computerSelection == "paper"){
      computerScore++;
      return "You Lose! Paper beats Rock";
    } else{
      playerScore++;
      return "You Win! Rock beats Scissors";
    }
  } else if(playerSelection == "paper") {
    if(computerSelection == "rock"){
      playerScore++;
      return "You Win! Paper beats Rock";
    } else {
      computerScore++;
      return "You Lose! Scissors beats Paper";
    }
  } else {
    if (computerSelection == "rock"){
      computerScore++;
      return "You Lose! Rock beats Scissors";
    } else {
      playerScore++;
      return "You Win! Scissors beat Rock";
    }
  }
}

const buttons = document.querySelectorAll('button');
console.log(buttons);

buttons.forEach(btn => btn.addEventListener('click', playRound,{
  
}))

function playRound(event){
  console.log(this);
}

