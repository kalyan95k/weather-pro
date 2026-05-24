const API_KEY = "cd1d11a9f2c1f13d371facc4f3bdc461";

async function getWeather(city){

const response = await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
);

const data = await response.json();

updateUI(data);

}

function updateUI(data){

const condition = data.weather[0].main;

const temp = Math.round(data.main.temp);

const city = data.name;

const humidity = data.main.humidity;

const wind = data.wind.speed;

const pressure = data.main.pressure;

const visibility = data.visibility / 1000;

const icon = weatherEmoji(condition);


document.getElementById('condition').innerText = condition;

document.getElementById('city').innerText = city;

document.getElementById('temp').innerText = temp + '°';

document.getElementById('feelsLike').innerText =
'Feels Like ' + Math.round(data.main.feels_like) + '°C';

document.getElementById('wind').innerText = wind + ' km/h';

document.getElementById('humidity').innerText = humidity + '%';

document.getElementById('pressure').innerText = pressure + ' mb';

document.getElementById('visibility').innerText = visibility + ' km';

document.getElementById('weatherIcon').innerText = icon;

}

function weatherEmoji(condition){

if(condition.includes('Cloud')) return '☁️';

if(condition.includes('Rain')) return '🌧️';

if(condition.includes('Thunder')) return '⛈️';

if(condition.includes('Snow')) return '❄️';

return '☀️';

}

// Search

document.getElementById('searchBtn')
.addEventListener('click',()=>{

const city =
document.getElementById('searchInput').value;

if(city){
getWeather(city);
}

});

// Default

getWeather('Hyderabad');
