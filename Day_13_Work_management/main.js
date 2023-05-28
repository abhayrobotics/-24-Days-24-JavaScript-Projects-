
let todo = document.getElementById('todo-area')
// draggable
new Sortable(todo, {
    animation: 150,
    ghostClass: 'drag'
});