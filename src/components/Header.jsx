import React, { useEffect, useState } from 'react';

export default function Header() {
  let date = new Date();
  const [isDayTime, setIsDayTime] = useState(true);

  useEffect(() => {
    const currentHour = date.getHours();
    const isDay = currentHour >= 6 && currentHour < 18;
    setIsDayTime(isDay);

  }, []);
  return (
    <header>
      <div className="logo">
        <img src="/images/Weather big logo.png" alt="" />
      </div>
      <div className={`webName ${isDayTime ? 'day' : 'night'}`} >
        <h1>Local   Weather</h1>
      </div>
      <div className={`date ${isDayTime ? 'day' : 'night'}`}>
        <h1>{date.toLocaleDateString()}</h1>
      </div>
    </header>
  );
}
