const choices = document.querySelectorAll(".choice");

const userScoreEl = document.getElementById("user-score");
const pcScoreEl = document.getElementById("pc-score");

const gameScreen = document.getElementById("game-screen");
const roundScreen = document.getElementById("round-screen");
const hurrayScreen = document.getElementById("hurray-screen");
const header = document.getElementById("header");

const userPick = document.getElementById("user-pick");
const pcPick = document.getElementById("pc-pick");
const roundResult = document.getElementById("round-result");

const nextBtn = document.getElementById("next-btn");
const playAgainBtn = document.getElementById("play-again-btn");

/* LOAD SCORES */
let userScore = Number(localStorage.getItem("userScore")) || 0;
let pcScore = Number(localStorage.getItem("pcScore")) || 0;

userScoreEl.textContent = userScore;
pcScoreEl.textContent = pcScore;

/* GAME LOGIC */
choices.forEach(btn => {
  btn.addEventListener("click", () => playRound(btn.dataset.choice));
});

function playRound(userChoice) {
  const pcChoice = ["rock","paper","scissors"][Math.floor(Math.random()*3)];

  userPick.innerHTML = `<img src="assets/${userChoice}.jpg">`;
  pcPick.innerHTML = `<img src="assets/${pcChoice}.jpg">`;

  userPick.className = "pick";
  pcPick.className = "pick";
  nextBtn.classList.add("hidden");

  if (userChoice === pcChoice) {
    roundResult.textContent = "TIED UP";
    userPick.classList.add("tie");
    pcPick.classList.add("tie");
  }
  else if (
    (userChoice === "rock" && pcChoice === "scissors") ||
    (userChoice === "paper" && pcChoice === "rock") ||
    (userChoice === "scissors" && pcChoice === "paper")
  ) {
    userScore++;
    localStorage.setItem("userScore", userScore);

    roundResult.textContent = "YOU WON AGAINST PC";
    userPick.classList.add("win");
    pcPick.classList.add("lose");

    nextBtn.classList.remove("hidden");
  }
  else {
    pcScore++;
    localStorage.setItem("pcScore", pcScore);

    roundResult.textContent = "YOU LOST AGAINST PC";
    pcPick.classList.add("win");
    userPick.classList.add("lose");
  }

  userScoreEl.textContent = userScore;
  pcScoreEl.textContent = pcScore;

  gameScreen.classList.add("hidden");
  roundScreen.classList.remove("hidden");
}

/* PLAY AGAIN (ROUND) */
playAgainBtn.addEventListener("click", () => {
  roundScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
});

/* NEXT → HURRAY */
nextBtn.addEventListener("click", () => {
  header.classList.add("hidden");
  document.querySelector(".rules-btn").classList.add("hidden");
  nextBtn.classList.add("hidden");

  roundScreen.classList.add("hidden");
  hurrayScreen.classList.remove("hidden");
});

function resetGame() {
  header.classList.remove("hidden");
  document.querySelector(".rules-btn").classList.remove("hidden");

  hurrayScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
}

/* RULES */
function toggleRules() {
  document.getElementById("rules-popup").classList.toggle("hidden");
}
