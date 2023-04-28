
function RandomArray() {
   let arr = [1, 2, 3, 4, 5, 6, 7, 8,1, 2, 3, 4, 5, 6, 7, 8];
   let temp = arr;
   let random = []
   for (let i= 1;i<=16;i++) {
      let x = Math.floor(Math.random() * temp.length);
      // new array
      random.push(temp[x]);
      temp.splice(x,1)
      // delete temp[x];
      console.log(temp[x], temp.length)
      // random.push(x)

   }
   // console.log(arr)
   console.log(random)
}

function select(i) {
   document.getElementById(i).classList.toggle("selected")
}

// generate GAme
function NewGame() {
   let board = document.getElementById("board");
   let innerCards = ""
   for (let i = 1; i < 17; i++) {
      innerCards = innerCards +
         `  <div class="grid__item " id="${i}" onclick="select(${i})">
               <div class="card-front"></div>
               <div class="card-back"><img src="./asset/${i}.png" alt="" srcset=""></div>
          </div>`
   }

   board.innerHTML = innerCards;

}