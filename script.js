// Start game on page open
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
        return "Tie!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win!";
    }
}
function game() {
    // Score starts at 0 on page load
    let playerScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose your weapon - hint: rock, paper, or scissors").toLowerCase();
        playRound();
        const computerSelection = computerPlay();

        if (playRound(playerSelection, computerSelection) == "Tie!") {
            console.log("Tie!");
        } else if (playRound(playerSelection, computerSelection) == "You win!") {
            playerScore += 1;
            console.log("You win!");
        } else if (playRound(playerSelection, computerSelection) == "You lose!") {
            computerScore += 1;
            console.log("You lose!");
        }
        trackScore();
    }

    function trackScore() {
        console.log("Player score is " + playerScore);
        console.log("Computer score is " + computerScore);
    }
    if (computerScore > playerScore) {
        console.log("Computer Wins!");
    } else {
        console.log("Human Wins!");
    }
}
