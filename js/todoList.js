const todoForm = document.getElementById("todo-form");
const whatTodo = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const button = event.target;
    button.innerHTML = `<i class="fa-solid fa-check"></i>`;
    console.log(button);
    const li = button.parentElement;
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodo();
    li.classList.add("delete");
    setTimeout(() => li.remove(), 3000);
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.classList.add("delete-btn");

    li.id = newTodo.id;
    span.innerText = newTodo.text;
    button.innerHTML = `<i class="fa-regular fa-square"></i>`;

    li.appendChild(span);
    li.appendChild(button);

    todoList.appendChild(li);

    button.addEventListener("click", deleteTodo);
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
