const todoForm = document.getElementById("todo-form");
const whatTodo = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const i = event.srcElement;
    i.classList.remove("fa-regular");
    i.classList.remove("fa-square");
    i.classList.add("fa-solid");
    i.classList.add("fa-check");
    const li = event.target.parentElement;
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodo();
    li.classList.add("delete");
    setTimeout(() => li.remove(), 3000);
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const i = document.createElement("i");

    li.id = newTodo.id;
    span.innerText = newTodo.text;
    i.classList.add("fa-regular");
    i.classList.add("fa-square");

    li.appendChild(span);
    li.appendChild(i);

    todoList.appendChild(li);

    i.addEventListener("click", deleteTodo);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = whatTodo.value;
    whatTodo.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    if (toDos.length >= 6) {
        alert("Too many tasks to do in one day, Mate!");
    } else {
        toDos.push(newTodoObj);
    }
    paintTodo(newTodoObj);
    saveTodo();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const saveToDos = localStorage.getItem(TODOS_KEY);
if (saveToDos !== null) {
    const parsedTodo = JSON.parse(saveToDos);
    toDos = parsedTodo;
    parsedTodo.forEach(paintTodo);
}
