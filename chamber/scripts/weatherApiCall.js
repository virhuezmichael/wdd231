const API_KEY = "c4fa5fc79694d8bae0f102491ef033c4";
const API_URL = "https://api.openweathermap.org/data/2.5/";
const city = "Valverde";


//Current Weather
fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&units=metric&lang=en`)
.then(response => response.json())
.then(data => {
    const temperature = data.main.temp.toFixed(1);
    const description = data.weather[0].description;

    const currentWeather = document.getElementById("current-weather");
    currentWeather.innerHTML += `
    <p><strong>Temperature:</strong> ${temperature}°C</p>
    <p><strong>Description:</strong> ${description}</p>`; 

    console.log(`Temperatue: ${temperature}°C`);
    console.log(`Description: ${description}`);
});

//Weather Forecast
fetch(`${API_URL}forecast?q=${city}&appid=${API_KEY}&units=metric&lang=en`)
.then(response => response.json())
.then (data => {
    const forecast = document.getElementById("weather-forecast");
    forecast.innerHTML += `<ul>`;

    const forecastMap = new Map();

    data.list.forEach(entry => {
        const date = entry.dt_txt.split(" ")[0];
        if (!forecastMap.has(date) && forecastMap.size < 3) {
            const temp = entry.main.temp.toFixed(1);
            const desc = entry.weather[0].description;
            forecastMap.set(date, {temp, desc});
            forecast.innerHTML += `<li><strong>${date}:</strong> ${temp}°C, ${desc}</li>`;
            console.log(`{date}: ${temp}°C, ${desc}`);
        }
    });
    forecast.innerHTML += `</ul>`;
});
