import React, { useEffect, useState } from "react";
import { getWeatherPicture } from "../functions/getWeather";
import { useMobileScreen } from "../atom/isMobileAtom";

const NextDays = (props) => {
  const [isMobile] = useMobileScreen();

  return (
    <div className={`next-days ${isMobile ? "mobile" : ""}`}>
      {isMobile ? (
        <div>
          <p>{props.day}</p>
          <br />
          <p>{props.date}</p>
        </div>
      ) : (
        <div>
          <p>{props.day}</p>
          <br />
          <p>{props.date}</p>
        </div>
      )}
      <div>
        <img
          src={`/icons/${getWeatherPicture(props.weatherCode)}`}
          alt="img-weather"
        />
      </div>
      <div>
        <p>{`${props.temperatureMin}° - ${props.temperatureMax}°`}</p>
      </div>
    </div>
  );
};

export default NextDays;
