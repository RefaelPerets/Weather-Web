import React from "react";
import { getWeatherPicture } from "../functions/getWeather";

const Today = (props) => {
  const { day, weatherCode, temperatureMax, temperatureMin } = props;

  return (
    <div className="container-today">
      <div>
        <h3>{day}</h3>
        <h3>{new Date().toLocaleDateString()}</h3>
      </div>
      <div>
        <img src={`/icons/${getWeatherPicture(weatherCode)}`} alt="img-weather" />
      </div>
      <div>
        <h4>{`${temperatureMin}° / ${temperatureMax}°`}</h4>
      </div>
    </div>
  );
};

export default Today;