const logOut = document.getElementById("log-out");

function handleLogOut() {
    location.reload();
    localStorage.clear();
}

logOut.addEventListener("click", handleLogOut);
