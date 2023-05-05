let blockSize = 25;
let rows = 20;
let column = 20;
let score = 0;
let snakeX = 25;
let snakeY = 25;
let velocityX = 0;
let velocityY = 0;

let foodX = 125;
let foodY = 125;

let board = document.getElementById("board");
let ctx = board.getContext("2d");


window.onload= function(){
    
    // board configruration
    board.width = column * blockSize;
    board.height = rows * blockSize;

    
    RandomFood()
    document.addEventListener("keydown",changeDir);

    setInterval(update,150);
    // update()
}

function changeDir(e){
    if(e.key  == "ArrowUp"  && velocityY!= 1 *blockSize){
        console.log(e.key);
        velocityY = -1 * blockSize;
        velocityX = 0;
    }
    else if(e.key  == "ArrowDown"  && velocityY!= -1 *blockSize ){
        console.log(e.key);
        velocityY = 1 * blockSize;
        velocityX = 0;
    }
    else if(e.key  == "ArrowLeft"  && velocityX!= 1 *blockSize){
        console.log(e.key);
        velocityY = 0;
        velocityX = -1 * blockSize;
    }
    else if(e.key  == "ArrowRight"  && velocityX!= -1 *blockSize ){
        console.log(e.key);
        velocityY = 0;
        velocityX = 1* blockSize;
    }

}

function RandomFood(){
    
    foodX = Math.floor( Math.random() * rows) * blockSize;
    foodY = Math.floor( Math.random() * column) * blockSize;
    // // Food
    // ctx.fillStyle = "red";
    // ctx.fillRect(foodX,foodY,blockSize,blockSize)
}


function update(){
    console.log(velocityX, velocityY)
    snakeX = snakeX + velocityX;
    snakeY  = snakeY + velocityY;
    // game board
    ctx.fillStyle = "#1e1e1e";
    ctx.fillRect(0,0,board.width,board.height);

    // Food
    ctx.fillStyle = "red";
    ctx.fillRect(foodX,foodY,blockSize,blockSize)

    if( snakeX == foodX && snakeY == foodY){
        score = score +1;
        document.getElementById("score").innerText = score;
        RandomFood()
    }
    // Snake
    ctx.fillStyle = "#57ef5d";
    ctx.fillRect(snakeX,snakeY,blockSize,blockSize);
}