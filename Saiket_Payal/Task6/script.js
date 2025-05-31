function checkWeather() {
  const city = document.getElementById('cityInput').value.trim();

  if (city === '') {
    document.getElementById('result').innerText = "Please enter a city name!";
    return;
  }

  // Mock temperature generator
  const temperature = Math.floor(Math.random() * 35) + 5; // 5°C to 40°C
  document.getElementById('result').innerText = `Current temperature in ${city} is approximately ${temperature}°C.`;
}
