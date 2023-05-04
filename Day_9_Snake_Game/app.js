let blockSize = 25;
let rows = 20;
let column = 20;
let snakeX = 10;
let snakeY = 10;

let board = document.getElementById("board");
let ctx = board.getContext("2d");
board.width = column * blockSize;
board.height = rows * blockSize;


// game board
ctx.fillStyle = "black";
ctx.fillRect(0,0,board.width,board.height);
