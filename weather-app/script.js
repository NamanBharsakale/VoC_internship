const apiKey = "YOUR_API_KEY";

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const result = document.getElementById("weatherResult");

  if (!city) {
    result.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const url = `url`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    const { location, current } = data;
    const condition = current.condition.text.toLowerCase(); 

    setWeatherBackground(condition);

    result.innerHTML = `
      <h2>${location.name}, ${location.country}</h2>
      <p><strong>${current.condition.text}</strong></p>
      <p>🌡️ Temperature: ${current.temp_c}°C</p>
      <p>💧 Humidity: ${current.humidity}%</p>
      <p>🌬️ Wind Speed: ${current.wind_kph} km/h</p>
    `;
  } catch (error) {
    console.error("Error fetching weather:", error);
    result.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  }
}

function setWeatherBackground(condition) {
  let imageUrl = "";

  if (condition.includes("sunny") || condition.includes("clear")) {
    imageUrl = "images/sunny.gif";
  } else if (condition.includes("rain") || condition.includes("drizzle")) {
    imageUrl = "images/rain.gif";
  } else if (condition.includes("thunder")) {
    imageUrl = "images/thunderstorm.gif";
  } else if (condition.includes("snow") || condition.includes("sleet") || condition.includes("ice")) {
    imageUrl = "images/snow.gif";
  } else {
    imageUrl = "images/default.gif"; 
  }

  document.body.style.backgroundImage = `url('${imageUrl}')`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
}
