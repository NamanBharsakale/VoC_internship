const apiKey = "YOUR_API_KEY"; // replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const result = document.getElementById("weatherResult");

  if (!city) {
    result.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    const { name, main, weather, wind } = data;

    result.innerHTML = `
      <h2>${name}</h2>
      <p><strong>${weather[0].main}</strong> - ${weather[0].description}</p>
      <p>🌡️ Temperature: ${main.temp}°C</p>
      <p>💧 Humidity: ${main.humidity}%</p>
      <p>🌬️ Wind Speed: ${wind.speed} m/s</p>
    `;
  } catch (error) {
    result.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}
