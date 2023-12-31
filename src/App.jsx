import React, { useEffect, useState } from "react";
import { useDayNight } from "./atom/dayNightAtom";
import { useMobileScreen } from "./atom/isMobileAtom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Today from "./components/Today";
import NextDays from "./components/NextDays";
import { getDayOfWeek, getWeather } from "./functions/getWeather";

const App = () => {
  const [isMobile] = useMobileScreen();
  const [isDaytime] = useDayNight();
  const [weatherData, setWeatherData] = useState({
    weatherCode: [0, 0, 0, 0],
    temperatureMax: [0, 0, 0, 0],
    temperatureMin: [0, 0, 0, 0],
    precipitation: [0, 0, 0, 0],
    windSpeed: [0, 0, 0, 0],
    windDirection: [0, 0, 0, 0],
  });

  useEffect(() => {
    const fetchData = async () => {
      const weather = await getWeather();
      console.log(weather);
      setWeatherData(weather);
    };
    fetchData();
  }, []);
  document.body.className = isDaytime ? "daytime" : "nighttime";

  return(
    <div className="general">
    <Header />
    <div className={`days ${isMobile ? "mobile" : ""}`}>
      <Today
        day={getDayOfWeek(new Date().getDay())}
        weatherCode={weatherData.weatherCode[0]}
        temperatureMax={weatherData.temperatureMax[0]}
        temperatureMin={weatherData.temperatureMin[0]}
        precipitation={weatherData.precipitation[0]}
        windSpeed={weatherData.windSpeed[0]}
        windDirection={weatherData.windDirection[0]}
      />
      <div className={`container-next-days ${isMobile ? "mobile" : ""}`}>
        {
        [1, 2, 3, 4].map((index) => {
          const nextDayIndex = new Date().getDay() + index;
          const nextDayDate = new Date();
          nextDayDate.setDate(nextDayDate.getDate() + index);

          return (
            <NextDays
              key={index}
              day={getDayOfWeek(nextDayIndex)}
              date={nextDayDate.toLocaleDateString()}
              weatherCode={weatherData.weatherCode[index]}
              temperatureMax={weatherData.temperatureMax[index]}
              temperatureMin={weatherData.temperatureMin[index]}
            />
          );
        })}
      </div>
    </div>
    <Footer />
  </div>
  );
};

export default App;
