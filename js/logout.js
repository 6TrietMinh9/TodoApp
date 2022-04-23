const logOut = document.getElementById("log-out");
const emptyArray = [];

function handleLogOut() {
    location.reload();
    localStorage.removeItem("username");
    localStorage.setItem(TODOS_KEY, JSON.stringify(emptyArray));
}

logOut.addEventListener("click", handleLogOut);
