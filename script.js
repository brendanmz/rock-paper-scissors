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
const computerSelection = computerPlay();

// Defines basic rules of game
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert("Tie!");
    } else if (
        (playerSelection == "paper" && computerSelection == "rock") |
        (playerSelection == "rock" && computerSelection == "scissors") |
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        alert("You win!");
    } else if (
        (playerSelection == "paper" && computerSelection == "scissors") |
        (playerSelection == "rock" && computerSelection == "paper") |
        (playerSelection == "scissors" && computerSelection == "rock")
    ) {
        alert("You lose!");
    }
}

const buttonRock = document.querySelector("#buttonRock");
const buttonPaper = document.querySelector("#buttonPaper");
const buttonScissors = document.querySelector("#buttonScissors");

buttonRock.addEventListener("click", playRound);
buttonPaper.addEventListener("click", playRound);
buttonScissors.addEventListener("click", playRound);
function game() {
    // Score starts at 0 on page load
    //let playerScore = 0;
    //let computerScore = 0;

    //for (i = 0; i < 5; i++) {
    //playRound();

    if (playRound(playerSelection, computerSelection) == "Tie!") {
        console.log("Tie!");
    } else if (playRound(playerSelection, computerSelection) == "You win!") {
        playerScore += 1;
        console.log("You win!");
    } else if (playRound(playerSelection, computerSelection) == "You lose!") {
        computerScore += 1;
        console.log("You lose!");
    }
    //trackScore();
}

/*function trackScore() {
        console.log("Player score is " + playerScore);
        console.log("Computer score is " + computerScore);
    }
    if (computerScore > playerScore) {
        console.log("Computer Wins!");
    } else {
        console.log("Human Wins!");
    }
}
*/
