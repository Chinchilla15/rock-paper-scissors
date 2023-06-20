  const playerScoreBoard = document.querySelector('.p-score');
  const computerScoreBoard = document.querySelector('.c-score');
  const result = document.querySelector('.result');
  const btnClick = document.querySelectorAll('button');
  const roundsLeft = document.querySelector('.rounds');
  let playerScore = 0;
  let computerScore = 0;
  let rounds = 0;
  let gameEnded = false;


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
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}


 btnClick.forEach(button => {
  button.addEventListener('click', ()=>{
    rounds++;
    roundsLeft.innerHTML = `Rounds left: ${5 - rounds}`

    if (rounds == 5){
      gameOver(playerOptions,roundsLeft)
    }
  })
 })

 /*
 function updateResult(outcome){
    result.innerHTML = outcome
  }
  */

  const rockButton = document.getElementById('rock-button');
  rockButton.addEventListener('click',()=> {
    const computerSelection = getComputerChoice();
    let rockRound = playRound("Rock", computerSelection);
    if(rockRound.includes('win')){
      result.innerHTML = 'Player Won!';
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }else if(rockRound.includes('lose')){
      result.innerHTML = 'Computer Won!';
      computerScore++;
      computerScoreBoard.textContent = computerScore
    }else{
      result.innerHTML = "It's a tie!"
    }
    console.log(rockRound)
  })

  const paperButton = document.getElementById('paper-button');
  paperButton.addEventListener('click',()=>{
    const computerSelection = getComputerChoice();
    let paperRound = playRound("Paper", computerSelection);
    if(paperRound.includes("win")){
      result.innerHTML = 'Player Won!';
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }else if(paperRound.includes('lose')){
      result.innerHTML = 'Computer Won!';
      computerScore++;
      computerScoreBoard.textContent = computerScore
    }else{
      result.innerHTML = "It's a tie!";
    }
    console.log(paperRound)
  })

  const scissorsButton = document.getElementById('scissors-button');
  scissorsButton.addEventListener('click',()=>{
    const computerSelection = getComputerChoice();
    let scissorsRound = playRound("Scissors", computerSelection);
    if(scissorsRound.includes("win")){
      result.innerHTML = 'Player Won!';
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }else if(scissorsRound.includes('lose')){
      result.innerHTML = 'Computer Won!';
      computerScore++;
      computerScoreBoard.textContent = computerScore
    }else{
      result.innerHTML = "It's a tie!";
    }
    console.log(scissorsRound)
  })

  const playerOptions = [rockButton, paperButton, scissorsButton]

  function gameOver() {
    const reloadBtn = document.querySelector('.reload');
    playerOptions.forEach(option =>{
      option.style.display = 'none';
    })

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