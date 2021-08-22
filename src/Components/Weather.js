import React from "react";
const api_key = "3eca833ca8421ddec4b2e774b1a4a563";
const url =
  "api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
const Weather = () => {
  return (
    <div className="container">
      <div className="card">
        <h1>London</h1>
      </div>
    </div>
  );
};

export default Weather;
