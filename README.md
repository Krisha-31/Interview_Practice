🌤️ Weather App

A beautiful and responsive Weather App built using HTML, CSS, and JavaScript.
The application uses the Open-Meteo API to display current weather information and a 7-day weather forecast for any city.

✨ Features

- 🔍 Search weather by city name
- 🌡️ Display current temperature
- 💧 Display humidity
- 🌤️ Display weather condition
- 🌡️ Display "Feels Like" temperature
- 💨 Display wind speed
- 📅 7-day weather forecast
- 🌙 Dark Mode / ☀️ Light Mode
- ⌨️ Search using the Enter key
- 📱 Fully responsive design
- 🎨 Clean and modern user interface
- 🌍 Supports cities from different countries

🛠️ Technologies Used

- HTML5 – Website structure
- CSS3 – Styling, responsive design and dark mode
- JavaScript – API integration and dynamic content
- Open-Meteo API – Weather and geocoding data

📂 Project Structure

Weather-App/
│
├── index.html
├── style.css
├── script.js
└── README.md

🚀 How to Run

1. Download or Clone the Repository

git clone YOUR_GITHUB_REPOSITORY_LINK

2. Open the Project

Open the project folder in VS Code.

3. Run the Website

Open "index.html" in your browser.

You can also use the Live Server extension in VS Code.

🌐 API Used

This project uses the Open-Meteo API, which provides weather and geocoding information.

Geocoding API

Used to find the latitude and longitude of a city:

https://geocoding-api.open-meteo.com/v1/search

Weather API

Used to get current weather and a 7-day forecast:

https://api.open-meteo.com/v1/forecast

No API key is required for this project.

📊 Weather Information

The application displays:

Information| Description
🌡️ Temperature| Current temperature
💧 Humidity| Current relative humidity
🌡️ Feels Like| Apparent temperature
💨 Wind| Current wind speed
🌤️ Weather| Current weather condition
📅 Forecast| 7-day weather forecast

🌦️ Weather Conditions

The application converts Open-Meteo weather codes into easy-to-understand weather conditions.

Examples:

- ☀️ Clear Sky
- 🌤️ Partly Cloudy
- ☁️ Cloudy
- 🌫️ Foggy
- 🌧️ Rain
- ❄️ Snow
- 🌦️ Rain Showers
- ⛈️ Thunderstorm

🌙 Dark Mode

The application includes a Dark Mode feature.

Clicking the Dark Mode button changes the website to a dark theme.

Click the button again to return to Light Mode.

📱 Responsive Design

The Weather App is designed to work on:

- 💻 Desktop
- 💻 Laptop
- 📱 Mobile
- 📱 Tablet

CSS media queries automatically adjust the layout for smaller screen sizes.

🔎 How It Works

Step 1 — Enter City

The user enters a city name in the search box.

Step 2 — Find Location

JavaScript sends the city name to the Open-Meteo Geocoding API.

The API returns:

- City name
- Country
- Latitude
- Longitude

Step 3 — Get Weather

The latitude and longitude are then used to request weather data from the Open-Meteo Forecast API.

Step 4 — Display Weather

JavaScript dynamically updates the webpage with:

- Current temperature
- Humidity
- Feels-like temperature
- Wind speed
- Weather condition

Step 5 — Display Forecast

The daily weather information is converted into seven forecast cards using JavaScript.

💡 JavaScript Concepts Used

This project helped practice:

- Variables
- Functions
- "if...else"
- Arrays and objects
- DOM manipulation
- "addEventListener()"
- "fetch()"
- "async/await"
- Template literals
- "for" loops
- "try...catch"
- API integration
- JSON data
- Dynamic HTML generation
- CSS class manipulation

🎯 Project Purpose

This project was created to practice frontend web development and understand how real-time API data can be fetched and displayed dynamically on a website.

It combines HTML, CSS and JavaScript to create an interactive weather application.

🔮 Future Improvements

Possible future features:

- 📍 Current location weather
- 🕐 Hourly forecast
- 🌡️ Celsius/Fahrenheit switch
- 🌅 Sunrise and sunset information
- 💾 Save favorite cities
- 🌈 Weather-based background
- 📊 Weather charts
- 🔔 Weather alerts
- 🌓 Save Dark Mode preference

👩‍💻 Author

Krisha Sangani

Computer Engineering Student | Full Stack Development Learner

Skills Used

"HTML" "CSS" "JavaScript" "API" "Responsive Design"

---

⭐ If you like this project, consider giving the repository a Star!

📄 License

This project is created for educational and learning purposes.