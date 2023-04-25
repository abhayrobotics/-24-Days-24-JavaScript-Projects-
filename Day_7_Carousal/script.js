const left = document.getElementById("left");
const right= document.getElementById("right");


function changeSlide(e){

    const cards= document.getElementsByClassName('card');
    const cards_position = document.getElementsByClassName('visible')
    // console.log(cards[2])
    // console.log(cards_position[2])


// note only 3 elements are visible so finding the index of last element in cards object
    let last_element = cards_position[2];
    
    let last_index;
    for (let i=0 ;i<cards.length; i++){
        if(cards[i] === last_element){
             last_index =i;
        }
    }
   let first_index = last_index-2;
    console.log(last_index)
    console.log(first_index)

    // if(last_index >= cards.length-1 ){
        
    //     last_index  = -1;

    // }
    

        if(e == 1){
            // cards_position[0].classList.toggle("visible") ;
            cards[last_index +1].classList.add("visible") ;
            cards[first_index].classList.remove("visible") ;
            
        }
        else if(e == -1){
            cards[first_index -1].classList.add("visible") ;
            cards[last_index].classList.remove("visible") ;
        }
    
}