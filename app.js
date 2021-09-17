let rock = "Rock",
    paper = "Paper",
    scissors = "Scissors";

let playerSelection;
let computerSelection;

function computerPlay() {

    let rand = Math.floor(Math.random() * 3 + 1);

    if (rand == 1) {
        return rock;
    } else if (rand == 2) {
        return paper;
    } else {
        return scissors;
    }
}

function playRound(playerSelection, computerSelection) {
    
    playerSelection = prompt("Choose (Rock,Paper or Scissors)");
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    computerSelection = computerPlay();
       
    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            return (`You lose! Computer won! You:${playerSelection} Computer:${computerSelection}`);
        } else if (computerSelection === "Scissors") {
            return (`You won! Computer lost. You:${playerSelection} Computer:${computerSelection}`);
        } else {
            return (`Draw! You:${playerSelection} computer:${computerSelection}`);
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return (`You won! Computer lost. You:${playerSelection} Computer:${computerSelection}`);
        } else if (computerSelection === "Scissors") {
            return (`You lose! Computer won! You:${playerSelection} Computer:${computerSelection}`);
        } else {
            return (`Draw! You:${playerSelection} computer:${computerSelection}`);
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            return (`You won! Computer lost. You:${playerSelection} Computer:${computerSelection}`);
        } else if (computerSelection === "Rock") {
            return (`You lose! Computer won! You:${playerSelection} Computer:${computerSelection}`);
        } else {
            return (`Draw! You:${playerSelection} Computer:${computerSelection}`);
        }
    } else {
        return "Invalid character!";
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();