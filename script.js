const buttonRock = document.querySelector("#buttonRock");
const buttonPaper = document.querySelector("#buttonPaper");
const buttonScissors = document.querySelector("#buttonScissors");

let playerScore = 0;
let computerScore = 0;

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
        document.querySelector(".playerResults").innerHTML = "Human: " + playerSelection;
        document.querySelector(".computerResults").innerHTML = "Computer: " + computerSelection;
    } else if (
        (playerSelection == "paper" && computerSelection == "rock") |
        (playerSelection == "rock" && computerSelection == "scissors") |
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        playerScore++;
        document.querySelector(".playerResults").innerHTML = "Human: " + playerSelection;
        document.querySelector(".computerResults").innerHTML = "Computer: " + computerSelection;
    } else if (
        (playerSelection == "paper" && computerSelection == "scissors") |
        (playerSelection == "rock" && computerSelection == "paper") |
        (playerSelection == "scissors" && computerSelection == "rock")
    ) {
        computerScore++;
        document.querySelector(".playerResults").innerHTML = "Human: " + playerSelection;
        document.querySelector(".computerResults").innerHTML = "Computer: " + computerSelection;
    }

    trackScore();

    // TODO: make game results disappear on new game
    if (computerScore === 5) {
        document.querySelector(".gameResults").innerHTML = "Computer Wins!";
        document.querySelector(".scoreReset").innerHTML = "Score has been reset";
        resetScore();
    } else if (playerScore === 5) {
        document.querySelector(".gameResults").innerHTML = "Human Wins!";
        document.querySelector(".scoreReset").innerHTML = "Score has been reset";
        resetScore();
    }
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
}

function trackScore() {
    document.querySelector(".playerScore").innerHTML = "Player score is " + playerScore;
    document.querySelector(".computerScore").innerHTML = "Computer score is " + computerScore;
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
