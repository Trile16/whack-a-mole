// HTML Rendering
let score = 0;

function renderHTML() {
  const body = document.getElementsByTagName("body");
  const gameBoard = document.createElement("div");
  gameBoard.setAttribute("id", "game-board");

  const gameTitle = document.createElement("h1");
  gameTitle.innerHTML = "Whack-a-Mole!";
  gameTitle.setAttribute("id", "game-title");

  const scoreDisplay = document.createElement("h2");
  scoreDisplay.innerHTML = `Score: 0`;
  scoreDisplay.setAttribute("id", "score");

  const gameplayBoard = document.createElement("div");
  gameplayBoard.setAttribute("id", "gameplay-board");

  for (let i = 0; i < 9; i++) {
    const hole = document.createElement("div");
    hole.setAttribute("class", "hole");
    gameplayBoard.appendChild(hole);
  }

  gameBoard.appendChild(gameTitle);
  gameBoard.appendChild(scoreDisplay);
  gameBoard.appendChild(gameplayBoard);
  body[0].appendChild(gameBoard);
}

renderHTML();

const holes = document.getElementsByClassName("hole");
const gameplayBoard = document.getElementById("gameplay-board");
const scoreDisplay = document.getElementById("score");

gameplayBoard.addEventListener("click", (e) => {
  if (e.target.matches(".mole")) {
    e.target.classList.remove("mole");
    score++;
    scoreDisplay.innerHTML = `Score: ${score}`;
  }
});

setInterval(() => {
  const randomHole = Math.floor(Math.random() * holes.length);
  holes[randomHole].classList.toggle("mole");
}, 300);
