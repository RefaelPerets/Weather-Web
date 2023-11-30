import React from "react";
import { getWeatherPicture } from "../functions/getWeather";

const Today = (props) => {
  const { day, weatherCode, temperatureMax, temperatureMin, precipitation, windSpeed, windDirection } = props;

  return (
    <div className="container-today">
      <h1 className="inner-left-day-container">
        T<br />O<br />D<br />A<br />Y
      </h1>
      <div className="inner-center-day-container">
        <div>
          <h1>{day}</h1>
          <br />
          <h1>{new Date().toLocaleDateString()}</h1>
        </div>
        <div>
          <img
            src={`/icons/${getWeatherPicture(weatherCode)}`}
            alt="img-weather"
          />
        </div>
        <div>
          <h1>{`${temperatureMin}° / ${temperatureMax}°`}</h1>
        </div>
      </div>
      <div className="inner-right-day-container">
        <div>
        <h4>Precipitation sum:</h4>
        <h2>{`${precipitation}`}</h2>
        </div>
        <div>
        <h4>Wind speed max:</h4>
        <h2>{`${windSpeed}`}</h2>
        </div><div>
        <h4>Wind direction:</h4>
        <h2>{`${windDirection}`}</h2>
        </div>
      </div>
    </div>
  );
};

export default Today;
