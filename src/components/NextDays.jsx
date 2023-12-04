import React, { useEffect, useState } from "react";
import { getWeatherPicture } from "../functions/getWeather";
import { useMobileScreen } from "../atom/isMobileAtom";

const NextDays = (props) => {
  const [isMobile] = useMobileScreen();

  return (
    <div className={`next-days ${isMobile ? "mobile" : ""}`}>
      {isMobile ? (
        <div>
          <h2>{props.day}</h2>
          <br />
          <h2>{props.date}</h2>
        </div>
      ) : (
        <div>
          <h1>{props.day}</h1>
          <br />
          <h1>{props.date}</h1>
        </div>
      )}
      <div>
        <img
          src={`/icons/${getWeatherPicture(props.weatherCode)}`}
          alt="img-weather"
        />
      </div>
      <div>
        <h2>{`${props.temperatureMin}° - ${props.temperatureMax}°`}</h2>
      </div>
    </div>
  );
};

export default NextDays;
