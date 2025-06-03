import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7e56552170dd565d012e6624a7abd308
  `;

  const searchLoction = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          className="input"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLoction}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            <h1>{data.main.temp}</h1>
          </div>
          <div className="description">{data.weather[0].main}</div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">{data.main.feels_like}</p>
            <p>Feels like</p>
          </div>
          <div className="humidity">
            <p className="bold">{data.main.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">{data.wind.speed}mph</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
