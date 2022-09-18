// Star button
// Click start button and play Rock, Paper, Scissors Game!

const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", () => {
  const main = document.getElementById("main");
  const wrapper = document.getElementById("wrapper");

  main.style.display = "none";
  main.style.transition = "0.4s ease";

  wrapper.style.display = "block";
  wrapper.style.transition = "0.4s ease";
});

// Get computer choice
// This function can choose randomly Rock, Paper, Scissors.
const getComputerChoice = () => {
  const rpsChoice = ["Rock", "Paper", "Scissors"];

  const randomNumber = Math.floor(Math.random() * 3);

  // retun the random choice
  return rpsChoice[randomNumber];
};

// Total score additon
const totalscore = { computerScore: 0, playerScore: 0 };

// get restult function
// this function can choose win by score
const getREsult = (personChoice, computerChoice) => {
  let score;
  if (personChoice == computerChoice) {
    score = 0;
  } else if (personChoice == "Rock" && computerChoice == "Scissors") {
    score = 1;
  } else if (personChoice == "Paper" && computerChoice == "Rock") {
    score = 1;
  } else if (personChoice == "Scissors" && computerChoice == "Rock") {
    score = 1;
  } else {
    score = -1;
  }

  // return score for get the score value
  return score;
};

// show result function
// this function can select who win this game
const showResult = (score, personChoice, computerChoice) => {
  // show starting score
  const playerScore = document.getElementById("player-score");
  playerScore.innerText = `Your score is: ${totalscore["playerScore"]}`;

  // get vs option
  const hand = document.getElementById("hands");
  // get result option
  const result = document.getElementById("result");

  // switch statement
  switch (score) {
    case 1:
      // show result when you win.
      result.innerText = "You won!";
      break;

    case -1:
      // show result when you lose.
      result.innerText = "You lose!";
      break;

    case 0:
      // show result when you draw.
      result.innerText = "You are draw! Try again.";
      break;
  }

  // show player vs computer
  hand.innerText = `👮‍♂️ ${personChoice} VS 💻 ${computerChoice}`;
};

const onClickRPS = (personChoice) => {
  const computerChoice = getComputerChoice();

  const score = getREsult(personChoice, computerChoice);
  totalscore["playerScore"] += score;

  showResult(score, personChoice, computerChoice);
};

const playGames = () => {
  const rpsButton = document.querySelectorAll(".rpsButton");

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

  rpsButton.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  });

  // Add a click listener to the end game button that runs the endGame() function on click

  const endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () => endGame(totalscore);

  const playAgainBtn = document.getElementById("Play-again-btn");
  playAgainBtn.onclick = () => playAgain();
};

playGames();

// ** endGame function clears all the text on the DOM **
const endGame = (totalscore) => {
  document.getElementById("hands").innerText = "";
  document.getElementById("result").innerText = "";

  const playerTotalScore = document.getElementById("total-score");
  playerTotalScore.innerText = `Total score is: ${totalscore["playerScore"]}`;

  const wrapper = document.getElementById("wrapper");
  wrapper.style.display = "none";

  const playerAgian = document.getElementById("play-again");
  playerAgian.style.display = "block";
};

// ** playAgain function clears all the text on the DOM **
const playAgain = () => {
  totalscore["playerScore"] = 0;
  totalscore["computerScore"] = 0;

  const wrapper = document.getElementById("wrapper");
  wrapper.style.display = "block";

  const playerScore = document.getElementById("player-score");
  playerScore.innerText = `Your score is: ${totalscore["playerScore"]}`;

  const playerAgian = document.getElementById("play-again");
  playerAgian.style.display = "none";
};
