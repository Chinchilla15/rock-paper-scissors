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

function formatSelection(selection) {
  let first = selection.slice(0, 1);
  let rest = selection.slice(1);
  let lower = rest.toLowerCase();
  let upper = first.toUpperCase();

  const cap = upper + lower;
  return cap;
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

//Modify Nodes and create an event listener that calls the function, when it plays one game it should display the message and the score
//Once action = 2 changes, when click, show message and who won the round
//Add dark mode
/*
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    let playerInput = prompt(`Round ${round}: Rock, Paper, Scissors`);
    let playerSelection = formatSelection(playerInput);
    let computerSelection = getComputerChoice();

    let roundResult = playRound(playerSelection, computerSelection);

    if (roundResult.includes("win")) {
      playerScore++;
    } else if (roundResult.includes("lose")) {
      computerScore++;
    }

    console.log(roundResult);
  }

  console.log(`Final Scores - Player: ${playerScore}, Computer: ${computerScore}`);

  if (playerScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (playerScore < computerScore) {
    console.log("Oops! You lost the game.");
  } else {
    console.log("It's a tie! The game ended in a draw.");
  }
}

game();
*/
