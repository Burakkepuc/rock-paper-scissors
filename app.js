let rock = "Rock",
    paper = "Paper",
    scissors = "Scissors";

let playerSelection;
let computerSelection;
let playerScore = 0,computerScore = 0;

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

function userPlay(){
    playerSelection = prompt("Choose (Rock,Paper or Scissors)");
   return playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

}

function playRound(playerSelection, computerSelection) {
    
    playerSelection = userPlay();
    computerSelection = computerPlay();
       
    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            computerScore++;
            return (`You lose! Computer won! You:${playerSelection} Computer:${computerSelection}`);
        } else if (computerSelection === "Scissors") {
            playerScore++;
            return (`You won! Computer lost. You:${playerSelection} Computer:${computerSelection}`);
        } else {
            return (`Draw! You:${playerSelection} computer:${computerSelection}`);
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            playerScore++;
            return (`You won! Computer lost. You:${playerSelection} Computer:${computerSelection}`);
        } else if (computerSelection === "Scissors") {
            computerScore++;
            return (`You lose! Computer won! You:${playerSelection} Computer:${computerSelection}`);
        } else {
            return (`Draw! You:${playerSelection} computer:${computerSelection}`);
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            playerScore++;
            return (`You won! Computer lost. You:${playerSelection} Computer:${computerSelection}`);
        } else if (computerSelection === "Rock") {
            computerScore++;
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

    if(playerScore > computerScore){
        alert(`Conguratilations! Your score is: ${playerScore}`)
    }
    else if(computerScore>playerScore){
        alert(`Computer won! Its score is: ${computerScore}`)
    }
    else{
        alert(`Try again. It's draw !.`)
    }
}

game();