function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 0.33){
        return "rock";
    } else if (randomNumber < 0.67){
        return "paper";
    } else {
        return "scissors";
    }
}

let computerSelection = getComputerChoice();

console.log("The selection is:" + computerSelection)
   