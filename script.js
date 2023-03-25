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

let computerSelection = getComputerChoice();

console.log("The selection is: " + computerSelection)

let selection = prompt("Rock, Paper, Scissor")

function playerSelection(selection){
    let first = selection.slice(0,1);
    let rest = selection.slice(1);
    let lower = rest.toLowerCase();      
    let upper = first.toUpperCase();

    const cap = upper + lower;
    return cap;
}

console.log(playerSelection(selection))

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){ 
        return "It's a tie!";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}
  console.log(playRound(playerSelection(selection), computerSelection)) //<--(Function, variable)
   