# ROCK PAPER SCISSORS GAME


[x] There are 3 objects rock, paper and scissors.  
[x] There are 2 opponent that iscomputer human.  
[x] Start the game,choose your object and let your opponent chose its object at the same time.  
[x]  -Rock beats Scissors, 
    -Paper beats Rock
    -Scissors beats Paper
[x] -If both same, it's draw, for example rock vs rock.  
[x] When the game over,show the screen that who is won.  

## Functions
[x] Starts with computerPlay function that will return ‘Rock’, ‘Paper’ or ‘Scissors’  
[x] Write a function that plays a single round of   
‘Rock’, ‘Paper’ or ‘Scissors’. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
 -Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).  
 [x]Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.  



## User Interface
- It was just used div container to game structure in the HTML page.   
- It was created all elements with `document.createElement` method.  
- All items were added inner the container with `appendChild` method.  
- It was added css classes with `classList.add method`.  
- EventListeners was used to click buttons.  

    For UI, I try to handle as possible as job with directly javascript code. So I write code inside html modestly.