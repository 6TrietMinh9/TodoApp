const API_KEY = "56106207e77287a62ebd02914132910a";

function onSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
            city.innerText = data.name;
        });
}

function onFailure() {
    alert("Failed to fetch weather");
}
navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
