// alert('Erislandio' *

// ! classes es6

class TodoList {
    constructor() {
        this.todos = []
    }

    addTodo() {
        this.todos.push("novo todo")
        console.log(this.todos)
    }
}

const minhaList = new TodoList();

document.getElementById('btn').onclick = function() {
    minhaList.addTodo();
}