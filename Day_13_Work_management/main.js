
// ? draggable
let todo = document.getElementById('todo-area')
new Sortable(todo, {
    animation: 150,
    // ghostClass: 'drag'.
    group:'drag'
});
let doing = document.getElementById('doing-area')
new Sortable(doing, {
    animation: 150,
    group:'drag'
    // ghostClass: 'drag'
});

//? add item
let counter =5;
function AddItem() {
    let new_item = document.getElementById('todo-area');
    let add = document.getElementById('add')
    let text = add.previousElementSibling.value;
    if (text != "") {
        document.getElementById('todo-area').innerHTML = new_item.innerHTML +
         ` <div class="new-item drag">
              <div class="title">${text}</div>
              <i class="ri-close-circle-fill delete " delete="true" ></i>
          </div>`

    }
    else {
        console.log(text, "wrong")
        let addBar = document.getElementById("card").innerHTML;
        // adding element 
        document.getElementById("card").innerHTML = addBar + ` <div class="warning">Card cannot be blank</div>`;
        // removing element
        setTimeout(function () {
            document.getElementById("card").innerHTML = addBar;

        }, 2100)

    }

}

// ? ***************new list
function NewList(){
    let lists = document.getElementById('lists').innerHTML;
    document.getElementById('lists').innerHTML = lists +`<div class="card" id="card">
    <div class="card-heading">
        <h3>Doing</h3> <i class="ri-draggable"></i>
    </div>

    <div class="todo-item" id="doing-area">
       
    </div>

    <div class="add-bar" id="add-bar">
        <input type="text" name="" class=add_item id="" placeholder="Add new card">
        <div class="button" onclick="AddItem() " id='add'>Add</div>
    </div>

</div>`

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
    if(e.target.getAttribute('delete') == "true"){

        e.target.parentElement.remove();
    }
}