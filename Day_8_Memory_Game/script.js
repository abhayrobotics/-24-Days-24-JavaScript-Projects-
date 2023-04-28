
// new Game
NewGame();

function RandomArray() {
   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 11, 22, 33, 44, 55, 66, 77, 88];
   let temp = arr;
   let random = []
   for (let i= 1;i<=16;i++) {
      let x = Math.floor(Math.random() * temp.length);
      // new array
      random.push(temp[x]);
      // delete used item to forbid repetition
      temp.splice(x,1)
   }
   return random;
}

function select(i) {
   document.getElementById(i).classList.toggle("selected")
}

// generate GAme
function NewGame() {
   let board = document.getElementById("board");
   let random =RandomArray()
   console.log(random)
   let innerCards = ""
   for (i in random) {
      // console.log(random[i])
      innerCards = innerCards +
         `  <div class="grid__item " id="${random[i]}" onclick="select(${random[i]})">
               <div class="card-front"></div>
               <div class="card-back"><img src="./asset/${random[i]}.png" alt="" srcset=""></div>
          </div>`
   }

   board.innerHTML = innerCards;

}

document.addEventListener("click",function(e){
   // fetching the Dom Element
   let x= e.target.parentElement;
   console.log(x.id)
   console.log(typeof x.id)
})

