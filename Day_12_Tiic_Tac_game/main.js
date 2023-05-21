
let cross_chance = true;
let counter = 0;
let winner_outcome = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let items = ['item0', 'item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8']


// selecting the elemetn on which click is happen
window.onclick = e => {
    // console.log(e.target.id);
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
                // check winner
                Winner();
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
                // check winner
                Winner();
            }
        }
    }
}

function Winner() {
    let cross = JSON.parse(sessionStorage.getItem('cross_position'))
    let circle = JSON.parse(sessionStorage.getItem('circle_position'))

    // checking for all outcome
    // foreach winning outcome check 
    let winner = false;
    winner_outcome.forEach(element => {
        // console.log(element);
        let c = 0;
        let counter_circle=0
        for (let i = 0; i < 3; i++) {

            // check for cross
            for (const item in cross) {
                if (element[i] == cross[item]) {
                    c += 1;
                    // console.log(cross.length);
                    // if cross section matches with winning outcome
                    if (c == 3) {
                        // console.log("winner is cross", element);
                        winner = true;
                        document.getElementById('winner_comment').innerHTML=  " Winner !"
                        document.getElementById(`item${element[0]}`).classList.add('show');
                        document.getElementById(`item${element[1]}`).classList.add('show');
                        document.getElementById(`item${element[2]}`).classList.add('show');
                        sessionStorage.clear();
                    }
                    break;
                }
            }
            // check for circle
            for (const item in circle) {
                if (element[i] == circle[item]) {
                    counter_circle += 1;
                    
                    // if cross section matches with winning outcome
                    if (counter_circle == 3) {
                        winner = true;
                        // console.log("winner is circle", element);
                        document.getElementById('winner_comment').innerHTML=  " Winner !"
                        document.getElementById(`item${element[0]}`).classList.add('show');
                        document.getElementById(`item${element[1]}`).classList.add('show');
                        document.getElementById(`item${element[2]}`).classList.add('show');
                        sessionStorage.clear();
                    }
                    break;
                }
            }
        }
        // even with all input no result mactching winner outcome
        console.log(cross.length)
        if((winner == false) && (cross.length == 5) ){
            document.getElementById('winner_comment').innerHTML=  " Draw !"
        }

    });

    return;
}

function NewGame(){
    sessionStorage.clear();
    
}
