import React from "react";
import { getWeatherPicture } from "../functions/getWeather";
import { useMobileScreen } from "../atom/isMobileAtom";


const Today = (props) => {
  const { day, weatherCode, temperatureMax, temperatureMin, precipitation, windSpeed, windDirection } = props;
  const [isMobile] = useMobileScreen();

  return (
    <div className={`container-today ${isMobile ? "mobile" : ""}`}>
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
        <h3>Precipitation sum:</h3>
        <h2>{`${precipitation}`}</h2>
        </div>
        <div>
        <h3>Wind speed max:</h3>
        <h2>{`${windSpeed}`}</h2>
        </div><div>
        <h3>Wind direction:</h3>
        <h2>{`${windDirection}`}</h2>
        </div>
      </div>
    </div>
  );
};

export default Today;
