let blockSize = 25;
let rows = 20;
let column = 20;

let snakeX = 25;
let snakeY = 25;
let velocity = 1;

let foodX = 125;
let foodY = 125;

let board = document.getElementById("board");
let ctx = board.getContext("2d");
board.width = column * blockSize;
board.height = rows * blockSize;


// game board
ctx.fillStyle = "#1e1e1e";
ctx.fillRect(0,0,board.width,board.height);

// Snake
ctx.fillStyle = "#57ef5d";
ctx.fillRect(snakeX,snakeY,blockSize,blockSize);



function RandomFood(){
    
    foodX = Math.floor( Math.random() * rows) * blockSize;
    foodY = Math.floor( Math.random() * column) * blockSize;
    // Food
    ctx.fillStyle = "red";
    ctx.fillRect(foodX,foodY,blockSize,blockSize)
}
RandomFood()