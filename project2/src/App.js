import React, { useState } from "react";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city) return;

    setLoading(true);
    setWeather(null);

    try {
      const apiKey = "af4254f8b1198940e9539999c3938669"
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        
        const errorData = await response.json();
        setWeather({ message: errorData.message });
        setLoading(false);
        return;
      }

      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather:", error);
      setWeather({ message: "Network error. Try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
  <>
    <h1>Weather App</h1>

    
    <input
      type="text"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      placeholder="Enter city"
    />
    <button onClick={fetchWeather}>Get Weather</button>

    
    {loading && <p>Loading...</p>}

    
    {weather && weather.main ? (
      <>
        <h2>{weather.name}</h2>
        <p>Temperature: {weather.main.temp} °C</p>
        <p>Condition: {weather.weather[0].description}</p>
        <p>Humidity: {weather.main.humidity}%</p>
      </>
    ) : weather && weather.message ? (
      <p style={{ color: "red" }}>X {weather.message}</p>
    ) : (
      !loading && <p>Enter a city to see weather</p>
    )}
  </>
)
}

export default App
