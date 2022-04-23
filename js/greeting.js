const helloForm = document.getElementById("hello-form");
const enterName = helloForm.querySelector(".enter-name");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onSubmit(event) {
    event.preventDefault();
    helloForm.classList.add(HIDDEN_CLASSNAME);
    const userName = enterName.value;
    localStorage.setItem(USERNAME_KEY, userName);
    greetings(userName);
}

function greetings(userName) {
    greeting.innerText = `Hello ${userName}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUser = localStorage.getItem(USERNAME_KEY);

if (savedUser === null) {
    helloForm.classList.remove(HIDDEN_CLASSNAME);
    helloForm.addEventListener("submit", onSubmit);
} else {
    greetings(savedUser);
}
