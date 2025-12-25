const choices = document.querySelectorAll(".choice");

const userScoreEl = document.getElementById("user-score");
const pcScoreEl = document.getElementById("pc-score");

const gameScreen = document.getElementById("game-screen");
const roundScreen = document.getElementById("round-screen");
const hurrayScreen = document.getElementById("hurray-screen");
const lostScreen = document.getElementById("lost-screen");
const header = document.getElementById("header");

const userPick = document.getElementById("user-pick");
const pcPick = document.getElementById("pc-pick");
const roundResult = document.getElementById("round-result");

let userScore = 0;
let pcScore = 0;
const WIN_SCORE = 15;

choices.forEach(btn => {
  btn.addEventListener("click", () => playRound(btn.dataset.choice));
});

function playRound(userChoice) {
  const pcChoice = ["rock","paper","scissors"][Math.floor(Math.random()*3)];

  userPick.innerHTML = `<img src="assets/${userChoice}.jpg">`;
  pcPick.innerHTML = `<img src="assets/${pcChoice}.jpg">`;

  userPick.className = "pick";
  pcPick.className = "pick";

  if (userChoice === pcChoice) {
    roundResult.textContent = "TIED UP";
    userPick.classList.add("win");
    pcPick.classList.add("win");
  }
  else if (
    (userChoice === "rock" && pcChoice === "scissors") ||
    (userChoice === "paper" && pcChoice === "rock") ||
    (userChoice === "scissors" && pcChoice === "paper")
  ) {
    userScore++;
    roundResult.textContent = "YOU WON AGAINST PC";
    userPick.classList.add("win");
    pcPick.classList.add("lose");
  }
  else {
    pcScore++;
    roundResult.textContent = "YOU LOST AGAINST PC";
    pcPick.classList.add("win");
    userPick.classList.add("lose");
  }

  userScoreEl.textContent = userScore;
  pcScoreEl.textContent = pcScore;

  gameScreen.classList.add("hidden");
  roundScreen.classList.remove("hidden");

if (userScore === WIN_SCORE) {
  setTimeout(showHurray, 800);
}

if (pcScore === WIN_SCORE) {
  setTimeout(showLost, 800);
}


}

function nextRound() {
  roundScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
}

function showHurray() {
  header.classList.add("hidden");
  document.querySelector(".rules-btn").classList.add("hidden");
  roundScreen.classList.add("hidden");
  hurrayScreen.classList.remove("hidden");
}

function showLost() {
  header.classList.add("hidden");
  document.querySelector(".rules-btn").classList.add("hidden");

  gameScreen.classList.add("hidden");
  roundScreen.classList.add("hidden");

  lostScreen.classList.remove("hidden");
}

function resetGame() {
  userScore = 0;
  pcScore = 0;

  userScoreEl.textContent = 0;
  pcScoreEl.textContent = 0;

  header.classList.remove("hidden");
  document.querySelector(".rules-btn").classList.remove("hidden");

  hurrayScreen.classList.add("hidden");
  lostScreen.classList.add("hidden");
  roundScreen.classList.add("hidden");

  gameScreen.classList.remove("hidden");
}

/* RULES */
function toggleRules() {
  document.getElementById("rules-popup").classList.toggle("hidden");
}
