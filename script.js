const buttonRock = document.querySelector("#buttonRock");
//console.log(buttonRock);
const buttonPaper = document.querySelector("#buttonPaper");
//console.log(buttonPaper);
const buttonScissors = document.querySelector("#buttonScissors");
// Score starts at 0 on page load
let playerScore = 0;
let computerScore = 0;
let roundResults;
//console.log(buttonScissors);

game();
// Random number defining what computer plays
function computerPlay() {
    let play = Math.floor(Math.random() * 3);
    if (play == 0) {
        return "rock";
    } else if (play == 1) {
        return "paper";
    } else if (play == 2) {
        return "scissors";
    }
}

// Defines basic rules of game
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        let roundResults = "draw";
        console.log("Human: " + playerSelection + "\nComputer: " + computerSelection + "\nDraw!");
    } else if (
        (playerSelection == "paper" && computerSelection == "rock") |
        (playerSelection == "rock" && computerSelection == "scissors") |
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        playerScore++;
        console.log("Human: " + playerSelection + "\nComputer: " + computerSelection + "\nYou win!");
    } else if (
        (playerSelection == "paper" && computerSelection == "scissors") |
        (playerSelection == "rock" && computerSelection == "paper") |
        (playerSelection == "scissors" && computerSelection == "rock")
    ) {
        computerScore++;
        console.log("Human: " + playerSelection + "\nComputer: " + computerSelection + "\nYou lose!");
    }
    if (roundResults === "draw") {
    } else if (roundResults === "win") {
        playerScore += 1;
    } else if (roundResults === "lose") {
        computerScore += 1;
    }
    trackScore();
    if (computerScore === 5) {
        console.log("Computer Wins!");
        let playerScore = 0;
        let computerScore = 0;
        console.log("Score has been reset!");
    } else if (playerScore === 5) {
        console.log("Human Wins!");
        let playerScore = 0;
        let computerScore = 0;
        console.log("Score has been reset!");
    }
}

function trackScore() {
    console.log("Player score is " + playerScore);
    console.log("Computer score is " + computerScore);
}

function game() {
    document.addEventListener("click", function(event) {
        if (event.target.matches("#buttonRock")) {
            playRound("rock", computerPlay());
        } else if (event.target.matches("#buttonPaper")) {
            playRound("paper", computerPlay());
        } else if (event.target.matches("#buttonScissors")) {
            playRound("scissors", computerPlay());
        }
    });
}
