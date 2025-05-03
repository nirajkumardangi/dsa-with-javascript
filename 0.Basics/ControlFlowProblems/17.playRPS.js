// Q16. Rock, Paper, Scissors - 2 player input, decide winner
function playRPS(p1, p2) {
  const choice1 = p1.toLowerCase();
  const choice2 = p2.toLowerCase();

  const validChoices = ['rock', 'paper', 'scissors'];

  // Validate input
  if (!validChoices.includes(choice1) || !validChoices.includes(choice2)) {
    return 'Invalid input from one or both players.';
  }

  // Tie
  if (choice1 === choice2) {
    return 'Game Tie!';
  }

  // Winning condition
  const player1Wins =
    (choice1 === 'rock' && choice2 === 'scissors') ||
    (choice1 === 'scissors' && choice2 === 'paper') ||
    (choice1 === 'paper' && choice2 === 'rock');

  return player1Wins ? 'Player 1 Wins!' : 'Player 2 Wins!';
}

// OUTPUT
console.log(playRPS('rock', 'scissors')); // Player 1 Wins!
console.log(playRPS('paper', 'rock')); // Player 1 Wins!
console.log(playRPS('paper', 'scissors')); // Player 2 Wins!
console.log(playRPS('rock', 'rock')); // Game Tie!
console.log(playRPS('banana', 'rock')); // Invalid input from one or both players.