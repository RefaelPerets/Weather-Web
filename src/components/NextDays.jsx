import React, { useEffect, useState } from "react";
import { getWeatherPicture } from "../functions/getWeather";

const NextDays = (props) => {
  return (
    <div className="next-days">
      <div>
        <h3>{props.day}</h3>
        <h3>{props.date}</h3>
      </div>
      <div>
        <img src={`/icons/${getWeatherPicture(props.weatherCode)}`} alt="img-weather" />
      </div>
      <div>
        <h4>{`${props.temperatureMin}° / ${props.temperatureMax}°`}</h4>
      </div>
    </div>
  );
};

export default NextDays;