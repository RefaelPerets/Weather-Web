import React, { useEffect, useState } from "react";
import { getWeatherPicture } from "../functions/getWeather";

const NextDays = (props) => {
  return (
    <div className="next-days">
      <div>
        <h1>{props.day}</h1>
        <br/>
        <h1>{props.date}</h1>
      </div>
      <div>
        <img src={`/icons/${getWeatherPicture(props.weatherCode)}`} alt="img-weather" />
      </div>
      <div>
        <h2>{`${props.temperatureMin}° - ${props.temperatureMax}°`}</h2>
      </div>
    </div>
  );
};

export default NextDays;