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


function playRound(playerSelection, computerSelection) {

    computerSelection = computerPlay();

    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            ++computerScore;
            para.innerText = (`You lose! Computer won! You:${playerSelection} Computer:${computerSelection}`);
        } else if (computerSelection === "Scissors") {
            ++playerScore;
            para.innerText =(`You won! Computer lost. You:${playerSelection} Computer:${computerSelection}`);
        } else {
            para.innerText = (`Draw! You:${playerSelection} computer:${computerSelection}`);
            ++computerScore;
            ++playerScore;
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            ++playerScore;
            para.innerText =(`You won! Computer lost. You:${playerSelection} Computer:${computerSelection}`);
        } else if (computerSelection === "Scissors") {
            ++computerScore;
            para.innerText = (`You lose! Computer won! You:${playerSelection} Computer:${computerSelection}`);
        } else {
            para.innerText = (`Draw! You:${playerSelection} Computer:${computerSelection}`);
            ++computerScore;
            ++playerScore;
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            ++playerScore;
            para.innerText = (`You won! Computer lost. You:${playerSelection} Computer:${computerSelection}`);
        } else if (computerSelection === "Rock") {
            ++computerScore;
            para.innerText = (`You lose! Computer won! You:${playerSelection} Computer:${computerSelection}`);
        } else {
            para.innerText = (`Draw! You:${playerSelection} Computer:${computerSelection}`);
            ++computerScore;
            ++playerScore;
        }
    } else {
        return "Invalid character!";
    }


    if(playerScore === 5 || computerScore === 5 ){
        score(playerScore,computerScore);
     }
}


function resetGame(){
    playerScore = 0;
    computerScore = 0;


    para.innerText = '';
}



function score (playerScore,computerScore){
    if(playerScore  > computerScore){
               alert(`Conguratilations! Your score is: ${playerScore},Computer score: ${computerScore}`)
           }
           else if(computerScore>playerScore){
               alert(`Computer won! Its score is: ${computerScore},Your score is: ${playerScore}`,)
           }
          else{
              alert(`It\'s draw! Your score: ${playerScore}, Computer score: ${computerScore}`);
          }

       resetGame();
        
       }


/*ROCK PAPER SCISSORS UI  */

  const container = document.querySelector('#container');

  const btn1 = document.createElement('button');
  const btn2 = document.createElement('button');
  const btn3 = document.createElement('button');

  const para = document.createElement('p');
  const para2 = document.createElement('p');
  

  const h1 = document.createElement('h1');

  h1.innerText = "ROCK PAPER SCISSORS GAME";
  container.appendChild(h1);


  h1.setAttribute('style','color:#FF5C58; text-align:center;');
  para.setAttribute('style','text-align:center;');
  para2.setAttribute('style','text-align:center;');


  container.appendChild(btn1);
  container.appendChild(btn2);
  container.appendChild(btn3);
  container.appendChild(para);
  container.appendChild(para2);


  btn1.classList.add('btn1');
  btn2.classList.add('btn2');
  btn3.classList.add('btn3');

  para.classList.add('para');
  para2.classList.add('para2');



  btn1.classList.add('click');
  btn2.classList.add('click');
  btn3.classList.add('click');


   

  btn1.addEventListener('click', () => {
  playRound("Rock",computerSelection); 
 para2.innerText = ("Your score: " + playerScore + "\nComputer score: " + computerScore);
 
 
});


btn2.addEventListener('click', () => {
   playRound("Paper",computerSelection);
    para2.innerText = ("Your score: " + playerScore + "\nComputer score: " + computerScore);  
 });

 btn3.addEventListener('click', () => {
    playRound("Scissors",computerSelection);
    para2.innerText = ("Your score: " + playerScore + "\nComputer score: " + computerScore);  
 });

 
   
   
        