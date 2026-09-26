const cityInput = document.getElementById("cityInput");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const feelsLike = document.getElementById("feelsLike");
const wind = document.getElementById("wind");
const weatherDescription = document.getElementById("weatherDescription");

const forecastContainer =
    document.getElementById("forecastContainer");


// Weather Code Function

function getWeatherInfo(code) {

    if (code === 0) {
        return {
            icon: "☀️",
            text: "Clear Sky"
        };
    }

    if (code === 1 || code === 2) {
        return {
            icon: "🌤️",
            text: "Partly Cloudy"
        };
    }

    if (code === 3) {
        return {
            icon: "☁️",
            text: "Cloudy"
        };
    }

    if (code >= 45 && code <= 48) {
        return {
            icon: "🌫️",
            text: "Foggy"
        };
    }

    if (code >= 51 && code <= 67) {
        return {
            icon: "🌧️",
            text: "Rain"
        };
    }

    if (code >= 71 && code <= 77) {
        return {
            icon: "❄️",
            text: "Snow"
        };
    }

    if (code >= 80 && code <= 82) {
        return {
            icon: "🌦️",
            text: "Rain Showers"
        };
    }

    if (code >= 95) {
        return {
            icon: "⛈️",
            text: "Thunderstorm"
        };
    }

    return {
        icon: "🌤️",
        text: "Weather"
    };
}


// Search Weather

async function searchWeather() {

    const city = cityInput.value.trim();

    if (city === "") {
        alert("Please enter city name");
        return;
    }

    try {

        cityName.innerText = "Loading...";

        /*
        Step 1:
        Get latitude and longitude
        */

        const geoResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
        );

        const geoData = await geoResponse.json();

        if (!geoData.results || geoData.results.length === 0) {

            cityName.innerText = "City not found";

            return;
        }

        const location = geoData.results[0];

        const latitude = location.latitude;
        const longitude = location.longitude;

        const country = location.country;


        /*
        Step 2:
        Get Weather
        */

        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=7`
        );

        const weatherData = await weatherResponse.json();


        /*
        Current Weather
        */

        const current = weatherData.current;

        const weatherInfo =
            getWeatherInfo(current.weather_code);


        cityName.innerText =
            `${location.name}, ${country}`;

        temperature.innerText =
            `${current.temperature_2m}°C`;

        humidity.innerText =
            current.relative_humidity_2m;

        feelsLike.innerText =
            current.apparent_temperature;

        wind.innerText =
            current.wind_speed_10m;

        weatherDescription.innerText =
            `${weatherInfo.icon} ${weatherInfo.text}`;


        /*
        7 Days Forecast
        */

        createForecast(weatherData.daily);

    } catch (error) {

        console.log(error);

        cityName.innerText =
            "Something went wrong";

    }
}


// Create 7 Days Forecast

function createForecast(daily) {

    forecastContainer.innerHTML = "";

    for (let i = 0; i < 7; i++) {

        const date = new Date(daily.time[i]);

        const dayName =
            i === 0
                ? "Today"
                : date.toLocaleDateString("en-US", {
                    weekday: "short"
                });

        const dateText =
            date.toLocaleDateString("en-US", {
                day: "numeric",
                month: "short"
            });

        const info =
            getWeatherInfo(daily.weather_code[i]);


        const card =
            document.createElement("div");

        card.className = "forecast-card";


        card.innerHTML = `
            <div class="day">${dayName}</div>

            <div class="date">${dateText}</div>

            <div class="weather-icon">
                ${info.icon}
            </div>

            <div class="forecast-temp">
                <span class="max-temp">
                    ${Math.round(daily.temperature_2m_max[i])}°
                </span>
                /
                <span class="min-temp">
                    ${Math.round(daily.temperature_2m_min[i])}°
                </span>
            </div>

            <div class="forecast-description">
                ${info.text}
            </div>
        `;


        forecastContainer.appendChild(card);
    }
}


// Dark Mode

function toggleDarkMode() {

    document.body.classList.toggle("dark");

    const darkModeBtn =
        document.getElementById("darkModeBtn");

    if (document.body.classList.contains("dark")) {

        darkModeBtn.innerText = "☀️ Light Mode";

    } else {

        darkModeBtn.innerText = "🌙 Dark Mode";

    }
}


// Enter Key Search

cityInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {

        searchWeather();

    }

});


// Load Rajkot Weather

searchWeather();