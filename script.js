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

// Play's 5 rounds of the game, reports winner or loser at the end
function game() {
  // Score starts at 0 on page load
  var playerScore = 0;
  var computerScore = 0;
  let playerSelection = prompt("Choose your weapon - hint: rock, paper, or scissors").toLowerCase();
  const computerSelection = computerPlay();
  playRound();

  if (playRound(playerSelection, computerSelection) == "Tie!") {
    console.log("Tie!");
  } else if (playRound(playerSelection, computerSelection) == "You win!") {
    console.log("You win!");
  } else if (playRound(playerSelection, computerSelection) == "You lose!") {
    console.log("You lose!");
  }
}
