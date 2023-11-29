import React from "react";
import { getWeatherPicture } from "../functions/getWeather";

const Today = (props) => {
  const { day, weatherCode, temperatureMax, temperatureMin } = props;

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
          <h2>{`${temperatureMin}° / ${temperatureMax}°`}</h2>
        </div>
      </div>
      <div className="inner-right-day-container">

      </div>
    </div>
  );
};

export default Today;
