import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});
  let [loaded, setLoaded] = useState(false);

  function displaySearch(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      let apiKey = "c3333c25f62df25da6b4c9597ac6f645";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(displaySearch);
    } else {
      alert("Please enter a city");
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Please enter a city"
        onChange={updateCity}
      />
      <button type="submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div className="SearchEngine">
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Wind: {weather.wind}km/hour</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Description: {weather.description}</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
