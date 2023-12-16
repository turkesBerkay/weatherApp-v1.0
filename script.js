const searchBar = document.getElementById("search-bar");
const searchBtn = document.getElementById("btn-search");
const temp = document.querySelector(".tempature");
const conditionText = document.querySelector(".condition-text");
const wind = document.querySelector("#wind-info");
const humi = document.querySelector(".humidity-info");
const icon = document.querySelector("#current-icon");
const container = document.querySelector(".app-container");

searchBtn.addEventListener("click", () => {
    let text = searchBar.value;
    getWeather(text);
    container.style.display = "block";
});


// Api that i'am using: https://www.weatherapi.com/

const getWeather = (place) => {      
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('load', () => {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
        weatherApp(data);
        
    });

    xhr.open('GET', 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=' + place + '&days=3');
    xhr.setRequestHeader('X-RapidAPI-Key', 'e25112f02amshe19f3e68a316c0ep1262adjsn489cc2abd271');
    xhr.setRequestHeader('X-RapidAPI-Host', 'weatherapi-com.p.rapidapi.com');

    xhr.send(data);

    
}

const weatherApp = (data) => {
    temp.innerHTML = data.current.temp_c + "°C";
    conditionText.innerHTML = data.current.condition.text;
    wind.innerHTML = data.current.wind_kph + "kph";
    humi.innerHTML = data.current.humidity + "%";

    switch(data.current.condition.code) {
        case 1000:
            icon.src = 'weather/64x64/day/113.png';
            break;
        case 1003:
            icon.src = 'weather/64x64/day/116.png';
            break;
        case 1006:
            icon.src = 'weather/64x64/day/119.png';
            break;
        case 1009:
            icon.src = 'weather/64x64/day/122.png';
            break;
        case 1030:
            icon.src = 'weather/64x64/day/143.png';
            break;
        case 1063:
            icon.src = 'weather/64x64/day/176.png';
            break;
        case 1066:
            icon.src = 'weather/64x64/day/179.png';
            break;    
        case 1069:
            icon.src = 'weather/64x64/day/182.png';
            break;    
        case 1072:
            icon.src = 'weather/64x64/day/185.png';
            break;
        case 1087:
            icon.src = 'weather/64x64/day/200.png';
            break;
        case 1114:
            icon.src = 'weather/64x64/day/227.png';
            break;
        case 1117:
            icon.src = 'weather/64x64/day/230.png';
            break;
        case 1135:
            icon.src = 'weather/64x64/day/248.png';
            break;
        case 1147:
            icon.src = 'weather/64x64/day/260.png';
            break;
        case 1150:
            icon.src = 'weather/64x64/day/263.png';
            break;
        case 1153:
            icon.src = 'weather/64x64/day/266.png';
            break;
        case 1168:
            icon.src = 'weather/64x64/day/281.png';
            break;
        case 1171:
            icon.src = 'weather/64x64/day/284.png';
            break;
        case 1180:
            icon.src = 'weather/64x64/day/293.png';
            break;
        case 1180:
            icon.src = 'weather/64x64/day/293.png';
            break;
        case 1183:
            icon.src = 'weather/64x64/day/296.png';
            break;
        case 1186:
            icon.src = 'weather/64x64/day/299.png';
            break;
        case 1189:
            icon.src = 'weather/64x64/day/302.png';
            break;
        case 1192:
            icon.src = 'weather/64x64/day/305.png';
            break;
        case 1195:
            icon.src = 'weather/64x64/day/308.png';
            break;
        case 1198:
            icon.src = 'weather/64x64/day/311.png';
            break;
        case 1201:
            icon.src = 'weather/64x64/day/314.png';
            break;
        case 1204:
            icon.src = 'weather/64x64/day/317.png';
            break;
        case 1207:
            icon.src = 'weather/64x64/day/320.png';
            break;
        case 1210:
            icon.src = 'weather/64x64/day/323.png';
            break;
        case 1213:
            icon.src = 'weather/64x64/day/326.png';
            break;
        case 1216:
            icon.src = 'weather/64x64/day/329.png';
            break;
        case 1222:
            icon.src = 'weather/64x64/day/335.png';
            break;
        case 1225:
            icon.src = 'weather/64x64/day/338.png';
            break;
        case 1237:
            icon.src = 'weather/64x64/day/350.png';
            break;
        case 1240:
            icon.src = 'weather/64x64/day/353.png';
            break;
        case 1243:
            icon.src = 'weather/64x64/day/356.png';
            break;
        case 1246:
            icon.src = 'weather/64x64/day/359.png';
            break;
        case 1249:
            icon.src = 'weather/64x64/day/362.png';
            break;
        case 1252:
            icon.src = 'weather/64x64/day/365.png';
            break;
        case 1255:
            icon.src = 'weather/64x64/day/368.png';
            break;
        case 1258:
            icon.src = 'weather/64x64/day/371.png';
            break;
        case 1261:
            icon.src = 'weather/64x64/day/374.png';
            break;
        case 1264:
            icon.src = 'weather/64x64/day/377.png';
            break;
        case 1273:
            icon.src = 'weather/64x64/day/386.png';
            break;
        case 1276:
            icon.src = 'weather/64x64/day/389.png';
            break;
        case 1279:
            icon.src = 'weather/64x64/day/392.png';
            break;
        case 1282:
            icon.src = 'weather/64x64/day/395.png';
            break;
    }
}       

