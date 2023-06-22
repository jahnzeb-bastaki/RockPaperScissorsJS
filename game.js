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

function game(){
  let computerScore = 0;
  let playerScore = 0;
  while(computerScore != 5 && playerScore != 5){
    let user = prompt("Enter Player Choice(\"rock\", \"paper\", or \"scissor\")");
    let result = playRound(user, getComputerChoice());
    if(result.includes("Win")){
      playerScore++;
    } else {
      computerScore++;
    }

    console.log(result);
    console.log(`Player Score: ${playerScore} \tComputer Score: ${computerScore}`);
  }
  playerScore == 5 ? console.log("Player Wins!") : console.log("Computer Wins!");
}

game();
