const DATE_KEY = "date";
const API_KEY = "6e5e38c7d4bf3450ac47300b608dbd70";
const ALLOW_KEY = "allow";
const LAT_KEY = "lat";
const LON_KEY = "lon";

function paintWeather(){
    const lat = localStorage.getItem(LAT_KEY);
    const lon = localStorage.getItem(LON_KEY);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather= document.querySelector("#weather span:last-child");
        
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}, ${Math.round(data.main.temp)}º`;
    });
}

function onGeoOk(position){
    localStorage.setItem(ALLOW_KEY, "y");
    localStorage.setItem(LAT_KEY, position.coords.latitude);
    localStorage.setItem(LON_KEY, position.coords.longitude);
    paintWeather();
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
    localStorage.setItem(ALLOW_KEY, "n");
}

localStorage.setItem(DATE_KEY, new Date().getDate());
const savedDate = localStorage.getItem(DATE_KEY);
const locationAllow = localStorage.getItem(ALLOW_KEY);
if(locationAllow === null){
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}else if(locationAllow === "n" && savedDate !== String(new Date().getDate())){
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}
else if(locationAllow === "y"){
    paintWeather();
}