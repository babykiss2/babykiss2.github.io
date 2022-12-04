const API_KEY = "fb90718c55810d1161e6edb0e01ce4f0";

function GeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json().then(data => {
        const divWeather = document.querySelector("#weather");
        const i = document.createElement("i");
        i.className = "bi bi-cloud-fill";
        divWeather.prepend(i);
        const weather = document.querySelector("#weather span:last-child");
        const city = document.querySelector("#weather span:nth-child(2)");
        weather.innerText = `  ${data.weather[0].main} / ${data.main.temp}°`;
        city.innerText = `${data.name} : `;
    }));
}

function GeoError(){
    alert("Can't find you.");
}


navigator.geolocation.getCurrentPosition(GeoSuccess, GeoError);