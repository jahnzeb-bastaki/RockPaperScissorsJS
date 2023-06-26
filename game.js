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

function playRound(playerSelection, computerSelection){
  playerSelection = playerSelection.toLowerCase();
  
  if(playerSelection == computerSelection){
    return "It a Tie!";
  } else if(playerSelection == "rock") {
    if(computerSelection == "paper"){
      return "You Lose! Paper beats Rock";
    } else{
      return "You Win! Rock beats Scissors";
    }
  } else if(playerSelection == "paper") {
    if(computerSelection == "rock"){
      return "You Win! Paper beats Rock";
    } else {
      return "You Lose! Scissors beats Paper";
    }
  } else {
    if (computerSelection == "rock"){
      return "You Lose! Rock beats Scissors";
    } else {
      return "You Win! Scissors beat Rock";
    }
  }
}

