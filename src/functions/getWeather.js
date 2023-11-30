import getLocation from "./getLocation";

const getWeatherPicture = (weatherCode) => {
  const picture = {
    0: "sunny.svg",
    1: "cloudy.svg",
    2: "cloudy-2.svg",
    3: "cloudy-3.svg",
    45: "snowy.svg",
    48: "snowy.svg",
    51: "rainy.svg",
    53: "rainy.svg",
    55: "rainy.svg",
    56: "rainy-2.svg",
    57: "rainy-2.svg",
    61: "rainy-2.svg",
    63: "rainy-2.svg",
    65: "rainy-2.svg",
    66: "rainy-2.svg",
    67: "rainy-2.svg",
    71: "snowy.svg",
    73: "snowy.svg",
    75: "snowy.svg",
    77: "snowy.svg",
    80: "rainy-2.svg",
    81: "rainy-2.svg",
    82: "rainy-2.svg",
    85: "snowy.svg",
    86: "snowy.svg",
    95: "stormy.svg",
    96: "stormy.svg",
    99: "stormy.svg",
  };

  return picture[weatherCode] || "default.svg";
};

const getDayOfWeek = (dayIndex) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[dayIndex % 7];
};

const getWeather = async () => {
  try {
    const location = await getLocation();
    console.log(location);
    // const url = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Africa%2FCairo&forecast_days=4`;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max,wind_direction_10m_dominant&forecast_days=5`;
    const responseWeather = await fetch(url);
    const dataWeather = await responseWeather.json();

    const weather = {
      weatherCode: dataWeather.daily.weather_code,
      temperatureMax: dataWeather.daily.temperature_2m_max,
      temperatureMin: dataWeather.daily.temperature_2m_min,
      windDirection: dataWeather.daily.wind_direction_10m_dominant,
      windSpeed: dataWeather.daily.wind_speed_10m_max,
      precipitation: dataWeather.daily.precipitation_sum,
    };
    return weather;
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    return {
      weatherCode: [0, 0, 0, 0, 0],
      temperatureMax: [0, 0, 0, 0, 0],
      temperatureMin: [0, 0, 0, 0, 0],
      precipitation: [0, 0, 0, 0, 0],
      windSpeed: [0, 0, 0, 0, 0],
      windDirection:  [0, 0, 0, 0, 0],
    };
  }
};

export { getWeatherPicture, getDayOfWeek, getWeather };