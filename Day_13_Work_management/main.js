


//? add item
let counter = document.querySelectorAll('.add').length;
console.log(counter)
function AddItem(id, i) {
    let new_item = document.getElementById(id);
    console.log(new_item)
    let add = document.getElementById(`add${i}`)
    let text =  add.previousElementSibling.value;
    if (text != "") {
        document.getElementById(id).innerHTML = new_item.innerHTML +
            ` <div class="new-item drag">
              <div class="title">${text}</div>
              <i class="ri-close-circle-fill delete " delete="true" ></i>
          </div>`

    }
    else {
        console.log(text, "wrong")
        let addBar = document.getElementById("card").innerHTML;

        // if noelement prsent

        // adding element 
        document.getElementById("card").innerHTML = addBar + ` <div class="warning">Card cannot be blank</div>`;
        // removing element
        setTimeout(function () {
            document.getElementById("card").innerHTML = addBar;

        }, 2100)

    }
    drag();
}

// ? ***************new list
function NewList() {
    counter++
    let lists = document.getElementById('lists').innerHTML;
    document.getElementById('lists').innerHTML = lists +
        `<div class="card" id="card">
            <div class="card-heading">
                <h3 contenteditable="true" id="text${counter}"  class="title_text" >New Title</h3> <i class="ri-draggable"></i>
            </div>   
            <div class="todo-item" id="list${counter}">
            
            </div>

            <div class="add-bar" id="add-bar">
                <input type="text" name="" class=add_item id="" placeholder="Add new card">
                <div class="button add" onclick="AddItem('list${counter}',${counter}) " id='add${counter}'>Add</div>
            </div>

        </div>`
    drag()
}
// ? ***************cookie save
// let cookie1 = document.getElementById('cookie')
// cookie1.onclick = function () {
//     console.log("cookie");
//     document.cookie = "Cookie By = abhayRobotics; max-age=" + 300;
// }

// deleting
document.onclick = function (e) {

    // console.log(e.target)
    // console.log(typeof e.target.getAttribute('delete'));
    // remove parent element
    if (e.target.getAttribute('delete') == "true") {

        e.target.parentElement.remove();
    }
}


// ? draggable list item
drag()
function drag(){

    console.log(counter);
    for(let i=1;i<=counter;i++){
        let item = document.getElementById(`list${i}`)
        
        new Sortable(item, {
            animation: 150,
            // ghostClass: 'drag'.
            group: 'drag'
        });
    }
}
// ? draggable card
// let doing = document.getElementById('doing-area')
// new Sortable(doing, {
//     animation: 150,
//     group: 'drag'
//     // ghostClass: 'drag'
// });
