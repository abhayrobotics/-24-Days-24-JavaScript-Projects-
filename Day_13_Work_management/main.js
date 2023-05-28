
// ? draggable
let todo = document.getElementById('todo-area')
new Sortable(todo, {
    animation: 150,
    ghostClass: 'drag'
});

//? add item
function AddItem(){
    let new_item = document.getElementById('todo-area');
    let add = document.getElementById('add')
    let text = add.previousElementSibling.value;
    if(text != ""){
        document.getElementById('todo-area').innerHTML = new_item.innerHTML + `  <div class="new-item drag">${text}</div>`

    }
    else{
        console.log(text,"wrong")
        let addBar = document.getElementById("card").innerHTML;
        // adding element 
        document.getElementById("card").innerHTML = addBar + ` <div class="warning">Card cannot be blank</div>`;
// removing element
        setTimeout(function(){
            document.getElementById("card").innerHTML = addBar;

        },2100)

    }
    
}