let blockSize = 25;
let rows = 20;
let column = 20;
let score = 0;
if(localStorage.getItem("highscore" == null)){

    localStorage.setItem("highscore",0);
}
let gameover = false;

let snakeX = 225;
let snakeY = 225;
let snakeBody = [];

let velocityX = 0;
let velocityY = 0;

let foodX;
let foodY;

let board = document.getElementById("board");
let ctx = board.getContext("2d");


window.onload = function () {
    document.getElementById("highscore").innerText = localStorage.getItem("highscore");


    // board configruration
    board.width = column * blockSize;
    board.height = rows * blockSize;


    RandomFood()
    document.addEventListener("keydown", changeDir);

    setInterval(update, 150);
    // update()

}

function changeDir(e) {
    if (e.key == "ArrowUp" && velocityY != 1 * blockSize) {
        // console.log(e.key);
        velocityY = -1 * blockSize;
        velocityX = 0;
    }
    else if (e.key == "ArrowDown" && velocityY != -1 * blockSize) {
        // console.log(e.key);
        velocityY = 1 * blockSize;
        velocityX = 0;
    }
    else if (e.key == "ArrowLeft" && velocityX != 1 * blockSize) {
        // console.log(e.key);
        velocityY = 0;
        velocityX = -1 * blockSize;
    }
    else if (e.key == "ArrowRight" && velocityX != -1 * blockSize) {
        // console.log(e.key);
        velocityY = 0;
        velocityX = 1 * blockSize;
    }

}

function RandomFood() {

    foodX = Math.floor(Math.random() * rows) * blockSize;
    foodY = Math.floor(Math.random() * column) * blockSize;
    // // Food
    // ctx.fillStyle = "red";
    // ctx.fillRect(foodX,foodY,blockSize,blockSize)
}


function update() {
    if (gameover) {
        // alert("Game Over! Score: ",score )
        return;
    }
    // console.log(velocityX, velocityY)
    snakeX = snakeX + velocityX;
    snakeY = snakeY + velocityY;
    // game board
    ctx.fillStyle = "#1e1e1e";
    ctx.fillRect(0, 0, board.width, board.height);

    // Food
    ctx.fillStyle = "red";
    ctx.fillRect(foodX, foodY, blockSize, blockSize);
    // let food = document.getElementById("body");
    // ctx.drawImage(food,foodX, foodY)

    // gameover conitions boundary
    if (snakeX > board.width || snakeY > board.height || snakeX < 0 || snakeY < 0) {
        gameover = true;
        // console.log("game over", gameover);
        alert("Game Over! ")
    }
    // gameover conitions body eat
    for (i in snakeBody) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameover = true;
            // console.log("gamover",gameover);
            alert("Game Over! ")
        }
    }

    // if food eats
    if (snakeX == foodX && snakeY == foodY) {
        score = score + 1;
        snakeBody.push([foodX, foodY])
        // console.log(snakeBody)
        document.getElementById("score").innerText = score;
        RandomFood()
    }
    // pushing the snake last position to 2nd last 
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
        // console.log(snakeBody[i])
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY]
    }
    // Snake
    ctx.fillStyle = "#57ef5d";
    ctx.fillStyle = "lime";
    ctx.fillRect(snakeX, snakeY, blockSize, blockSize);



    // snakeBody
    for (i in snakeBody) {
        ctx.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
        // console.log()

    }
    // highscore calc
    if (localStorage.getItem("highscore") < score) {
        highscore = score;
        localStorage.setItem("highscore", highscore);
        console.log(localStorage.getItem('highscore') +"high")
        document.getElementById("highscore").innerText = localStorage.getItem("highscore");
    }
   

}