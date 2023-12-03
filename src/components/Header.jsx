import React, { useEffect, useState } from "react";
import { useDayNight } from "../atom/dayNightAtom";
import getLocation from "../functions/getLocation";

export default function Header() {
  const [isDaytime] = useDayNight();
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const loc = await getLocation();
        setLocation(loc);
      } catch (error) {
        console.error("Error fetching location:", error.message);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error fetching location: {error}</div>;
  }

  if (!location) {
    return <div>Loading...</div>;
  }

  if  (window.screen.width < 600) {
    return (
      <header >
        <div className="mobile-logo">
          <img src="/images/Weather big logo.png" alt="" />
        </div>
        <div className={`mobile-local ${isDaytime ? "day" : "night"}`}>
          <h2>{location.city}</h2>
        </div>
      </header>
    );
  }
  return (
    <header>
      <div className="logo">
        <img src="/images/Weather big logo.png" alt="" />
      </div>
      <div className={`webName ${isDaytime ? "day" : "night"}`}>
        <h1>Weather</h1>
      </div>
      <div className={`local ${isDaytime ? "day" : "night"}`}>
        <h1>{location.city}</h1>
      </div>
    </header>
  );
}
