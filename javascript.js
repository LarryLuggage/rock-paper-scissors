
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock"; 
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors"; 
    }
}


function playGame(computerSelection, playerSelection) {
    playerSelection = playerSelection.toLowerCase(); 
    if (computerSelection === playerSelection) {
        return "It's a tie!"; 
    } else if (computerSelection === "rock") {
        if (playerSelection === "paper") {
            return "You Win! Paper beats rock!"; 
        } else if (playerSelection === "scissors") {
            return "You lose! Rock beats scissors"; 
        }
    } else if (computerSelection === "paper") {
        if (playerSelection === "scissors") {
            return "You Win! Scissors beat paper!";
        } else if (playerSelection === "rock") {
            return "You Lose! Paper beats rock!";
        }
    } else if (computerSelection === "scissors") {
        if (playerSelection === "rock") {
            return "You Win! Rock beats scissors"; 
        } else  if (playerSelection === "paper") {
            return "You Lose! Scissors beat paper"; 
        }
    }
}

const playerSelection = prompt("rock, paper, or scissors?"); 
const computerSelection = getComputerChoice(); 
const result = playGame(computerSelection, playerSelection); 

