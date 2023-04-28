
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

   localStorage.clear();
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
   let newitem= e.target.parentElement.id;
   console.log(newitem)
   // console.log(typeof x.id)
   localStorage.setItem("match",0);
   localStorage.setItem("moves",0);
   // count moves
   localStorage.setItem("moves",localStorage.getItem("moves")+1);
  
   // if selected 1st item
   if( localStorage.getItem("item1") == null){
      
      localStorage.setItem("item1",newitem);
      console.log(localStorage.getItem("item1"))
   }
   else {
      let item1 = localStorage.getItem("item1");
      // MATCHED 
      if((newitem  == (item1 + item1))   ||   ((newitem + newitem == item1 ))){
         localStorage.setItem("match",localStorage.getItem("match")+1);
         console.log('match');
         localStorage.clear()
         
      }
      // if 
      else{
         setTimeout(function(){
            document.getElementById(newitem).classList.toggle('selected');
            document.getElementById(item1).classList.toggle('selected');
            
         },1000);
         // clear for new selection pair
         localStorage.clear()
      }
   }
   if(localStorage.getItem("match")== 8){
      console.log("You Win!")
   }
})

