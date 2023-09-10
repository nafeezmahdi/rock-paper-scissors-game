const buttonRockElement = document.getElementById("rock");
const buttonPaperElement = document.getElementById("paper");
const buttonScissorsElement = document.getElementById("scissors");
const gameResultElement = document.getElementById("game-result");
const lastResultElement = document.getElementById("last-result");
const yourResultElement = document.getElementById("your-result");
const computerResultElement = document.getElementById("computer-result");
const resetButtonElement = document.getElementById("reset");
//
//
//
const rockValue = buttonRockElement.innerHTML;
const paperValue = buttonPaperElement.innerHTML;
const scissorsValue = buttonScissorsElement.innerHTML;
//
//
var gameElement = ["Rock", "Paper", "Scissors"];
let yourFinalResult = 0,
  computerFinalResult = 0;
//
// console.log(gameElement);
//
function randomButton() {
  return Math.floor(Math.random() * 3);
}
//
//
//
function resetGame(){
    location.reload();
}
//
//
function checkRock() {
  // console.log("Rock");
  // console.dir(buttonRockElement);
  // console.log(buttonRockElement.innerHTML);
  //     console.log("Yes");
  // }
  //
  //
  //
  if (yourFinalResult > 5 || computerFinalResult > 5) {
    alert("Restart The Game!!!");
    location.reload();
    yourResultElement.textContent = 0;
    computerResultElement.textContent = 0;
    yourFinalResult = 0;
    computerFinalResult = 0;
    lastResultElement.innerHTML = "";
    gameResultElement.innerHTML = "";
  }
  //
  //
  const computerElement = gameElement[randomButton()];
  //
  //console.log(computerElement);
  //
  if (rockValue == computerElement) {
  //  console.log("Draw");
    gameResultElement.innerHTML = "Tie! It's also " + computerElement;
  } else if (paperValue == computerElement) {
    computerFinalResult++;
    //console.log("Paper Won");
    gameResultElement.innerHTML =
      "Computer Won! " + computerElement + " beats Rock";
    computerResultElement.textContent = computerFinalResult;
  } else {
    yourFinalResult++;
    //console.log("Rock Won");
    gameResultElement.innerHTML = "Your Won! Rock beats " + computerElement;
    yourResultElement.textContent = yourFinalResult;
  }
  //
  //
  //
  if (yourFinalResult === 5) {
    lastResultElement.innerHTML = "You Won The Final Game";
    // alert("New Game");
    yourFinalResult = 6;
    computerFinalResult = 6;
  }
  if (computerFinalResult === 5) {
    lastResultElement.innerHTML = "Computer Won The Final Game";
    // alert("New Game");
    yourFinalResult = 6;
    computerFinalResult = 6;
  }
  //
  //
}
//
//
//
function checkPaper() {
  // console.log("Paper");
  // console.dir(buttonPaperElement);
  //
  //
  if (yourFinalResult > 5 || computerFinalResult > 5) {
    alert("Restart The Game!!!");
    location.reload();
    yourResultElement.textContent = 0;
    computerResultElement.textContent = 0;
    yourFinalResult = 0;
    computerFinalResult = 0;
    lastResultElement.innerHTML = "";
    gameResultElement.innerHTML = "";
  }
  //
  //
  const computerElement = gameElement[randomButton()];
  //
  // console.log(computerElement);
  //
  //
  if (paperValue == computerElement) {
    //console.log("Draw");
    gameResultElement.innerHTML = "Tie! It's also " + computerElement;
  } else if (rockValue == computerElement) {
    yourFinalResult++;
    //console.log("Paper Won");
    gameResultElement.innerHTML = "You Won! Paper beats " + computerElement;
    yourResultElement.textContent = yourFinalResult;
  } else {
    computerFinalResult++;
    //console.log("Scissors Won");
    gameResultElement.innerHTML =
      "Computer Won! " + computerElement + " Beats Paper";
    computerResultElement.textContent = computerFinalResult;
  }
  //
  //
  //
  if (yourFinalResult === 5) {
    lastResultElement.innerHTML = "You Won The Final Game";
    // alert("New Game");
    yourFinalResult = 6;
    computerFinalResult = 6;
  }
  if (computerFinalResult === 5) {
    lastResultElement.innerHTML = "Computer Won The Final Game";
    // alert("New Game");
    yourFinalResult = 6;
    computerFinalResult = 6;
  }

  //
}

function checkScissors() {
  // console.log("Scissors");
  // console.dir(buttonScissorsElement);

  if (yourFinalResult > 5 || computerFinalResult > 5) {
    alert("Restart The Game!!!");
    location.reload();
    yourResultElement.textContent = 0;
    computerResultElement.textContent = 0;
    yourFinalResult = 0;
    computerFinalResult = 0;
    lastResultElement.innerHTML = "";
    gameResultElement.innerHTML = "";
  }
  //
  //
  //
  const computerElement = gameElement[randomButton()];
  //
  //  console.log(computerElement);
  //
  //
  if (scissorsValue == computerElement) {
    //console.log("Draw");
    gameResultElement.innerHTML = "Tie! It's also " + computerElement;
  } else if (rockValue == computerElement) {
    computerFinalResult++;
    //console.log("Rock Won");
    gameResultElement.innerHTML =
      "Computer Won! " + computerElement + " beats Scissors";
    computerResultElement.textContent = computerFinalResult;
  } else {
    yourFinalResult++;
    //console.log("Scissors Won");
    gameResultElement.innerHTML = "You Won! Scissors beats " + computerElement;
    yourResultElement.textContent = yourFinalResult;
  }
  //
  //
  //
  if (yourFinalResult === 5) {
    lastResultElement.innerHTML = "You Won The Final Game";
    // alert("New Game");
    yourFinalResult = 6;
    computerFinalResult = 6;
  }
  if (computerFinalResult === 5) {
    lastResultElement.innerHTML = "Computer Won The Final Game";
    // alert("New Game");
    yourFinalResult = 6;
    computerFinalResult = 6;
  }
  //
}
//
//
//
buttonRockElement.addEventListener("click", checkRock);
buttonPaperElement.addEventListener("click", checkPaper);
buttonScissorsElement.addEventListener("click", checkScissors);
resetButtonElement.addEventListener("click", resetGame);
