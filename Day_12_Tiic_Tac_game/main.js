
console.log('check')
let board=document.getElementById('board')
let block =document.getElementsByClassName('block');
let cross_chance =true;
let winner = [
    [0,1,2],
    [2,3,4],
    [5,6,7],
    [0,2,5],
    [1,3,6],
    [2,4,7],
    [0,3,7],
    [2,3,5]
]
let items = ['item0','item1','item2','item3','item4','item5','item6','item7','item8']
let cross= [];
let circle =[];

// selecting the elemetn on which click is happen
window.onclick = e =>{
    console.log(e.target.id);
    let item = e.target;

    // if clicked in any item of array
    if(items.includes(item.id)){

        // player chance
        if(cross_chance ){
            console.log(item.innerHTML)
            item.innerHTML = `<i class="ri-close-line cross"></i>`;
            cross_chance =false;
        }
        else{
            item.innerHTML = `<i class="ri-checkbox-blank-circle-line circle"></i>`;
            cross_chance =true;
        }
    }
}
