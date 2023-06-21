const playerScoreBoard = document.querySelector('.p-score');
const computerScoreBoard = document.querySelector('.c-score');
const result = document.querySelector('.result');
const buttons = document.querySelectorAll('button');
const roundsLeft = document.querySelector('.rounds');
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

function getComputerChoice() {
  let randomNumber = Math.random();
    if (randomNumber < 0.33){
    return "Rock";
    } else if (randomNumber < 0.67){
    return "Paper";
    } else {
    return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
    
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
  }

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
    const playerSelection = button.id.replace('-button','');
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection)

    if(roundResult.includes('win')){
      result.textContent = 'Player Won!';
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }else if(roundResult.includes('lose')){
      result.textContent = 'Computer Won!';
      computerScore++;
      computerScoreBoard.textContent = computerScore
    }else{
      result.textContent = "It's a tie!"
    }

    rounds++;
    roundsLeft.textContent = `Rounds left: ${5 - rounds}`
    if (rounds === 5){
      gameOver()
    }
  })
})

function gameOver() {
  const reloadBtn = document.querySelector('.reload');
  const playerOptions = document.querySelector('.boxContainer');
  playerOptions.style.display = 'none';
      
  roundsLeft.style.fontSize = '42px'
  roundsLeft.innerHTML = "Game Over!";

  if(playerScore > computerScore){
    result.textContent='You won the game!';
    result.style.fontSize = '3rem';
    result.style.color = 'red'
  }else if (playerScore < computerScore){
    result.textContent = 'You lost the game!';
    result.style.fontSize = '3rem';
    result.style.color = 'red'
  }else{
    result.textContent = 'Tie!';
    result.style.fontSize = '3rem';
    result.style.color = 'red'
  }
}