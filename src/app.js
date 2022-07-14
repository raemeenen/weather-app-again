function showTemperature(response) {
let temperature = Math.round(response.data.main.temp);
let temperatureElement = document.querySelector("#degrees");
let cityElement = document.querySelector("#current-city");
temperatureElement.innerHTML = `${temperature}°`;
cityElement.innerHTML = response.data.name;
}

let apiKey = "3fd0b2514fdddeb5a1773faa623df844";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=${apiKey}`;

axios.get(apiUrl).then(showTemperature);