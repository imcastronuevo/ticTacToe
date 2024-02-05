-Tic Tac Toe Game-

This repository contains a simple implementation of a Tic Tac Toe game using HTML, CSS, and JavaScript. The game provides a grid-based board with player interaction, win detection, and a reset option.

Table of Contents
Overview
Files
Usage
Game Logic
Styling

Overview
The game consists of an HTML file (index.html), a CSS file (style.css), and a JavaScript file (app.js). These files collectively create a functional Tic Tac Toe game with a responsive and visually appealing design.

Files
index.html: HTML file defining the structure of the Tic Tac Toe game.
app.js: JavaScript file containing game logic, including board initialization, player moves, win detection, and reset functionality.
style.css: CSS file providing styling for the Tic Tac Toe game.
README.md: Documentation file explaining the contents and usage of the repository.

Usage
- Open index.html in a web browser to play the Tic Tac Toe game.
- The game board consists of a 3x3 grid.
- Click on empty cells to make your move (either "X" or "O").
- The winner or a draw will be displayed above the board.
- Click the "Reset Game" button to start a new game.

Game Logic
- The game initializes with an empty board and allows players to take turns.
- Players alternate between "X" and "O" with each click.
- The game checks for a winner after each move.
- The winning conditions include rows, columns, and diagonals.
- If the board is filled without a winner, the game is declared a draw.

Styling
The CSS file provides styling for the game, including grid layout, cell appearance, hover effects, and a reset button. Feel free to customize the styles in style.css to suit your preferences.

Note: The game uses simple div elements for the cells and updates the winner dynamically in the HTML.
