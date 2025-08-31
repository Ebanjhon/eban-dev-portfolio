const board = document.getElementById("board");
const cells = board.querySelectorAll(".cell");
let currentPlayer = "X";
let gameOver = false;
let state = Array(9).fill(null);

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // hàng ngang
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // hàng dọc
  [0, 4, 8],
  [2, 4, 6], // chéo
];

function checkWin() {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (state[a] && state[a] === state[b] && state[a] === state[c]) {
      pattern.forEach((i) => (cells[i].style.background = "#aee6a6"));
      return true;
    }
  }
  return false;
}

function checkDraw() {
  return state.every((cell) => cell !== null);
}

function handleClick(e) {
  const cell = e.target;
  const index = cell.dataset.index;

  if (gameOver || state[index]) return;

  state[index] = currentPlayer;
  cell.textContent = currentPlayer;

  if (checkWin()) {
    alert(`Người thắng: ${currentPlayer}`);
    gameOver = true;
    return;
  }

  if (checkDraw()) {
    alert("Hòa!");
    gameOver = true;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

cells.forEach((cell) => cell.addEventListener("click", handleClick));
