# 🌤️ Weather App

A simple, responsive weather application built using **HTML**, **CSS**, and **JavaScript** that fetches real-time weather data from [WeatherAPI.com](https://www.weatherapi.com/).

---

## 🔗 Live Demo

Coming Soon (You can deploy it on GitHub Pages, Netlify, or Vercel)

---

## 📷 Preview

![Weather App Screenshot](screenshots)

---

## 🚀 Features

- Search weather by **city name**
- Get current temperature, humidity, wind speed, and weather description
- Dynamic **background changes** based on weather condition:
  - ☀️ Sunny / Clear
  - 🌧️ Rain
  - ⛈️ Thunderstorm
  - ❄️ Snow
- Clean and responsive UI

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3**
- **Vanilla JavaScript**
- **WeatherAPI.com** for weather data

---

## 📁 Project Structure

weather-app/
├── index.html
├── style.css
├── script.js
├── images/
│ ├── sunny.gif
│ ├── rain.gif
│ ├── thunderstorm.gif
│ └── snow.gif
└── README.md


## 🧠 How It Works

- The user enters a city name
- JavaScript sends a `fetch` request to **WeatherAPI.com**
- Weather data is shown and the background changes depending on the weather condition

---

## 🔑 Get Your Free API Key

1. Visit [https://www.weatherapi.com/signup.aspx](https://www.weatherapi.com/signup.aspx)
2. Create a free account
3. Copy your API key
4. Replace in `script.js`:
   ```js
   const apiKey = "YOUR_WEATHERAPI_KEY_HERE";