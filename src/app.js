function showTemperature(response) {
let temperature = Math.round(response.data.main.temp);
let temperatureElement = document.querySelector("#degrees");
let cityElement = document.querySelector("#current-city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind-speed");
temperatureElement.innerHTML = `${temperature}°`;
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "3fd0b2514fdddeb5a1773faa623df844";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=${apiKey}`;

axios.get(apiUrl).then(showTemperature);