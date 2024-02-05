// Function to initialize the game board
function initializeBoard() {
 for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
   let cell = document.createElement("div");
   cell.classList.add("cell");
   cell.setAttribute("data-row", i);
   cell.setAttribute("data-col", j);
   cell.addEventListener("click", handleCellClick);
   document.getElementById("board").appendChild(cell);
  }
 }
}

function handleCellClick() {
 // implement game
 if (!this.textContent && !document.getElementById("winner").textContent) {
  this.textContent = currentPlayer;
  currentPlayer = currentPlayer === "X" ? "O" : "X";

  checkForWinner();
 }
}

function checkForWinner() {
 let cells = document.querySelectorAll(".cell");
 for (let i = 0; i < winConditions.length; i++) {
  const [a, b, c] = winConditions[i];
  if (
   cells[a].textContent &&
   cells[a].textContent === cells[b].textContent &&
   cells[a].textContent === cells[c].textContent
  ) {
   document.getElementById("winner").textContent =
    cells[a].textContent + " Wins!";
   return;
  }
 }

 // Game is tied
 if ([...cells].every((cell) => cell.textContent)) {
  document.getElementById("winner").textContent = "It's a draw!";
 }
}

// Game reset
function resetGame() {
 let cells = document.querySelectorAll(".cell");

 for (let i = 0; i < cells.length; i++) {
  cells[i].textContent = "";
 }

 document.getElementById("winner").textContent = "";
 currentPlayer = "X";
}

// Track current player (X or O)
let currentPlayer = "X";

// Winning combiniation
const winConditions = [
 [0, 1, 2],
 [3, 4, 5],
 [6, 7, 8], // Rows
 [0, 3, 6],
 [1, 4, 7],
 [2, 5, 8], // Columns
 [0, 4, 8],
 [2, 4, 6] // Diagonals
];

initializeBoard();
