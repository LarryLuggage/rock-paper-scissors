
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


function playRound(computerSelection, playerSelection) {
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

function game() {
    let playerWins = 0; 
    let computerWins = 0; 

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("rock, paper, or scissors?"); 
        const computerSelection = getComputerChoice(); 
        const result = playRound(computerSelection, playerSelection); 
        console.log(result); 

        if (result.includes("Win")) {
            playerWins++;
        } else if (result.includes("Lose")) {
            computerWins++; 
        }

        alert(`Round ${i + 1}: ${result}`); 
    }

    if (playerWins > computerWins) {
        alert("Congratulations! You take the cake!");
    } else if (computerWins > playerWins) {
        alert("Bummer! The computer wins..."); 
    } else {
        alert("Weird. It's a tie"); 
    }
}

game()

let displayResult = alert()


