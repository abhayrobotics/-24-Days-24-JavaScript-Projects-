// gloabal variable
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 11, 22, 33, 44, 55, 66, 77, 88];



// Random array
function RandomArray() {
   let temp = [];
   temp= arr;
   let random = []
   for (let i = 1; i <= 16; i++) {
      let x = Math.floor(Math.random() * temp.length);
      // new array
      random.push(temp[x]);
      // delete used item to forbid repetition
      temp.splice(x, 1)
   }
   // console.log(random)
   return random;
}

function select(i) {
   document.getElementById(i).classList.toggle("selected")
}

// Start
function Start() {
   let allElements = document.getElementsByClassName("grid__item");
   setTimeout(function() {
      for (item in allElements) {
         allElements[item].classList.toggle("selected")
         // console.log(allElements[item])
      }
   },3000)
   for (item in allElements) {
      allElements[item].classList.toggle("selected");
      // console.log(allElements[item]);
   }
}

// generate GAme
function NewGame() {

   localStorage.clear();
   let board = document.getElementById("board");
   let random = RandomArray();
   // console.log(random)
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
// main game continues
document.addEventListener("click", function (e) {
   // fetching the Dom Element
   let newitem = e.target.parentElement.id;
   // console.log(newitem)
   
   
   // count moves
   let moves = parseInt(document.getElementById("Moves").innerText );
   // console.log(typeof moves)
   // moves = moves.toString().padStart(2,"0")
   document.getElementById("Moves").innerText = moves +1;

   // if selected 1st item
   if (localStorage.getItem("item1") == null) {

      localStorage.setItem("item1", newitem);
      // console.log(localStorage.getItem("item1"))
   }
   else {
      let item1 = localStorage.getItem("item1");
      // MATCHED 
      if ((newitem == (item1 + item1)) || ((newitem + newitem == item1))) {
         localStorage.setItem("match", localStorage.getItem("match") + 1);
         // console.log('match');
         localStorage.clear()

      }
      // if 
      else {
         // if not correct reverse both selection to dark after 1s
         setTimeout(function () {
            document.getElementById(newitem).classList.toggle('selected');
            document.getElementById(item1).classList.toggle('selected');

         }, 1000);
         // clear for new selection pair
         localStorage.clear()
      }
   }

   if (localStorage.getItem("match") == 8) {
      console.log("You Win!")
   }

})

// new Game
NewGame();