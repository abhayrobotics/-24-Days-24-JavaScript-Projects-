
console.log('check')
let board = document.getElementById('board')
let block = document.getElementsByClassName('block');
let cross_chance = true;
let counter = 0;
let winner = [
    [0, 1, 2],
    [2, 3, 4],
    [5, 6, 7],
    [0, 2, 5],
    [1, 3, 6],
    [2, 4, 7],
    [0, 3, 7],
    [2, 3, 5]
]
let items = ['item0', 'item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8']


// selecting the elemetn on which click is happen
window.onclick = e => {
    console.log(e.target.id);
    let item = e.target;

    // if clicked in any item of array
    if (items.includes(item.id)) {

        // player chance
        if (cross_chance) {
            // console.log(item.innerHTML)
            item.innerHTML = `<i class="ri-close-line cross"></i>`;
            cross_chance = false;


            // item stoarge
            if (sessionStorage.getItem('cross_position') == null) {

                let cross = [];
                cross.push(item.id.slice(4, 5))
                // convert to string
                sessionStorage.setItem('cross_position', JSON.stringify(cross));
            }
            else {
                // fetching data and converting to object
                let cross = JSON.parse(sessionStorage.getItem('cross_position'));
                // console.log( typeof cross);
                // pushing new data 
                cross.push(item.id.slice(4, 5));
                // conver to string and save in session storage
                sessionStorage.setItem('cross_position', JSON.stringify(cross));
            }

        }


        else {
            item.innerHTML = `<i class="ri-checkbox-blank-circle-line circle"></i>`;
            cross_chance = true;

             // item stoarge
             if (sessionStorage.getItem('circle_position') == null) {

                let cross = [];
                cross.push(item.id.slice(4, 5))
                // convert to string
                sessionStorage.setItem('circle_position', JSON.stringify(cross));
            }
            else {
                // fetching data and converting to object
                let cross = JSON.parse(sessionStorage.getItem('circle_position'));
                // console.log( typeof cross);
                // pushing new data 
                cross.push(item.id.slice(4, 5));
                // conver to string and save in session storage
                sessionStorage.setItem('circle_position', JSON.stringify(cross));
            }
        }
    }
}