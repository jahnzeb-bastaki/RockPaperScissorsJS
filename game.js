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
let container = document.querySelector('.container');
let promptHTML = document.getElementById("prompt");
let computerHTML = document.getElementById("computer");
let playerHTML = document.getElementById("player");
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

  console.log(promptHTML.innerHTML);

  computerHTML.innerHTML = `Computer Score: ${computerScore}`;
  playerHTML.innerHTML = `Player Score: ${playerScore}`;
  promptHTML.innerHTML = result;
  
  if(playerScore == 5 || computerScore == 5){
    buttons.forEach(btn => {
      btn.disabled = true;
      btn.classList.add('disabled');
    });

    if(playerScore == 5){
      promptHTML.innerHTML = "You WON, now do a chicken dance";
      newbtn.innerHTML = "I did the chicken dance";
      container.appendChild(newbtn);
    } else {
      promptHTML.innerHTML = "You LOST, now chickens will attack you";
      newbtn.innerHTML = "I beat the chickens";
      container.appendChild(newbtn);
    }
  }
}

newbtn.addEventListener('click', e => {
  if(e.target.innerHTML.includes('I')){
    promptHTML.innerHTML = "Wanna play again?";
    newbtn.innerHTML = " • _ • ";
  } else {
    buttons.forEach(btn => {
      btn.classList.remove('disabled');
      btn.disabled = false;
    });
    playerScore = 0;
    computerScore = 0;
    computerHTML.innerHTML = `Computer Score: ${computerScore}`;
    playerHTML.innerHTML = `Player Score: ${playerScore}`;
    container.removeChild(newbtn);
    promptHTML.innerHTML = '';
  }
});


