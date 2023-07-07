let playerSelection;
let arr = ["Rock", "Paper", "Scissors"];
let Rock, Paper, Scissors;

let playerWins = 0;
let computerWins = 0;
let ties = 0;

function choice()
{
    let computerSelection = arr[(Math.floor(Math.random() * arr.length))];
    cpu.textContent = "Computer put out " + computerSelection;

    playerSelection = this.id;

    if (playerSelection === computerSelection) 
    {
        result.textContent = "It's a tie!";
        ties++;
    } 
    else if 
        (
        (playerSelection === "Rock" && computerSelection === "Scissors") 
        ||
        (playerSelection === "Paper" && computerSelection === "Rock") 
        ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
        )
    {
        result.textContent = "You win!";
        playerWins++;
    } 
    else 
    {
        result.textContent = "Computer wins!";
        computerWins++;
    }

    updateScoreboard();
}

function updateScoreboard() {
    playerScore.textContent = "Player Wins: " + playerWins;
    computerScore.textContent = "Computer Wins: " + computerWins;
    tiesScore.textContent = "Ties: " + ties;
}

Rock = document.getElementById("Rock");
Paper = document.getElementById("Paper");
Scissors = document.getElementById("Scissors");

cpu = document.getElementById("cpu");
result = document.getElementById("result");

playerScore = document.getElementById("playerScore");
computerScore = document.getElementById("computerScore");
tiesScore = document.getElementById("tiesScore");

Rock.addEventListener("click", choice);
Paper.addEventListener("click", choice);
Scissors.addEventListener("click", choice);
