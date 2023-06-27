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
let playerScore = 0;
let computerScore = 0;

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

let newbtn = document.createElement('button');
newbtn.classList.add("chicken-button");
const buttons = document.querySelectorAll('.btn');
console.log(buttons);

buttons.forEach(btn => btn.addEventListener('click', playRound,));

function playRound(event){
  let playerValue = '';
  if(this.classList.contains("rock")){
    playerValue = "rock";
  } else if(this.classList.contains("paper")){
    playerValue = "paper";
  } else {
    playerValue = "scissor";
  }
  
  let result = round(playerValue, getComputerChoice());

  let computerHTML = document.getElementById("computer");
  let playerHTML = document.getElementById("player");
  let promptHTML = document.getElementById("prompt");
  let container = document.querySelector('.container');
  computerHTML.innerHTML = `Computer Score: ${computerScore}`;
  playerHTML.innerHTML = `Player Score: ${playerScore}`;
  promptHTML.innerHTML = result;
  
  if(playerScore == 5 || computerScore == 5){
    buttons.forEach(btn => {
      btn.disabled = true;
      btn.style.borderColor = 'grey';
      btn.classList.add('disabled');
    });

    if(playerScore == 5){
      promptHTML.innerHTML = "You WON the 5 round game, now do a chicken dance";
      newbtn.innerHTML = "I did the chicken dance";
      container.appendChild(newbtn);
    } else {
      promptHTML.innerHTML = "You LOST! Go in the corner and cry";
      newbtn.innerHTML = "I cried in the corner";
      container.appendChild(newbtn);
    }
  }
}



